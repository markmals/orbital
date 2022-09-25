import { readFileSync, writeFileSync } from "node:fs";
import { parse } from "@astrojs/compiler";
import { is } from "@astrojs/compiler/utils";
import { transformSync } from "@swc/core";
import { Visitor as SWCVisitor } from "@swc/core/Visitor.js";
import dedent from "dedent";
import prettier from "prettier";
import * as ESBuild from "esbuild";
import { resolve } from "node:path";
class Walker {
  constructor(callback) {
    this.callback = callback;
  }
  async visit(node, parent, index) {
    await this.callback(node, parent, index);
    if (is.parent(node)) {
      let promises = [];
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        promises.push(this.callback(child, node, i));
      }
      await Promise.all(promises);
    }
  }
}
class ImportChecker extends SWCVisitor {
  isImport = false;
  visitModuleItems(nodes) {
    this.isImport = nodes[0]?.type === "ImportDeclaration";
    return nodes;
  }
}
function isImport(value) {
  let checker = new ImportChecker();
  transformSync(value, { plugin: (m) => checker.visitProgram(m) });
  return checker.isImport;
}
function isMember(value) {
  return !isImport(value);
}
class Compiler {
  constructor(path) {
    this.path = path;
  }
  source = `import { h, Fragment, render } from 'preact';`;
  componentSource = ``;
  componentBody = ``;
  captureScript(node) {
    if (is.element(node) && node.name === "script") {
      let code = dedent(node.children[0].value).split(";");
      for (let snip of code) {
        if (isImport(snip)) {
          this.source += "\n";
          this.source += snip;
        } else if (isMember(snip)) {
          this.componentSource += snip;
        }
      }
    }
  }
  captureElement(node) {
    if (is.element(node) && node.name !== "script") {
      let props = "{";
      if (node.attributes) {
        for (let attribute of node.attributes) {
          let prop = {};
          prop[attribute.name] = attribute.value;
          let str = JSON.stringify(prop).replace("{", "").replace("}", "") + ", ";
          switch (attribute.kind) {
            case "quoted": {
              break;
            }
            case "expression": {
              let sp = str.split(":");
              str = `${sp[0]}:${sp[1].replaceAll('"', "")}`;
              break;
            }
          }
          props += str;
        }
        props += "}";
      }
      let children = "";
      if (node.children) {
        for (let child of node.children) {
          switch (child.type) {
            case "text": {
              children += `'${child.value}',`;
              break;
            }
            case "expression": {
              for (let c of child.children) {
                if (c.type === "text") {
                  children += `${c.value},`;
                }
              }
              break;
            }
          }
        }
      }
      this.componentBody += `h(${JSON.stringify(node.name)}, ${props}, ${children}),
`;
    }
  }
  visit(node) {
    this.captureScript(node);
    this.captureElement(node);
  }
  async compile() {
    let resolved = await import.meta.resolve(this.path, import.meta.url);
    let file = await parse(readFileSync(resolved.substring(7, resolved.length)).toString());
    let walker = new Walker(this.visit.bind(this));
    await walker.visit(file.ast);
    this.componentSource += `

return h(Fragment, null, ${this.componentBody});`;
    this.source += "\n";
    this.source += dedent`
            function App() {
                ${dedent(this.componentSource)}
            }
        `;
    this.source += "\nrender(h(App, null), document.body);";
    try {
      return prettier.format(this.source, {
        printWidth: 100,
        tabWidth: 4,
        singleQuote: true,
        semi: true,
        arrowParens: "avoid",
        parser: "typescript"
      });
    } catch {
      return this.source;
    }
  }
}
let compiler = new Compiler("../tests/index.astro");
let result = await compiler.compile();
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
let inFile = resolve(__dirname, "../tests/index.js");
let outFile = resolve(__dirname, "../tests/index.mjs");
writeFileSync(inFile, result);
ESBuild.buildSync({ entryPoints: [inFile], bundle: true, outfile: outFile });
