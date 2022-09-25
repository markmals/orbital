# 🛰 Orbital

A WIP compiler to create [Preact](https://preactjs.com/) components as [Single File Components](https://vuejs.org/guide/scaling-up/sfc.html) using the [`.astro`](https://astro.build/) file format.

![view of Earth and satellite](https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80)

## Planned Features

- [ ] Compile `.astro` files to Preact components
    - [ ] Real compiler implementation using SWC instead of the current POC string interoplation
    - [ ] Recursive compiler implementation covering every possible case instead of just the demo cases
    - [ ] Compile `<script>` tags to client-side component logic
    - [ ] Compile `<slot>`s to `{props.children}`
    - [ ] Compile `on:eventname` to `onEventName`
    - [ ] Compile `<style>` tags to component-scoped styles via [CSS modules](https://vitejs.dev/guide/features.html#css-modules)
    - [ ] Compile [frontmatter scripts](https://docs.astro.build/en/core-concepts/astro-components/#the-component-script) to module-level statements, which could run on the server or at build-time, depending on the kind of web app being built
- [ ] [Vite plugin](https://vitejs.dev/guide/api-plugin.html#authoring-a-plugin)
- [ ] LSP Server
    - [ ] Fork (?) the [Astro LSP](https://github.com/withastro/language-tools) to add support for using `<script>` variables in template expressions (and other features)
    - [ ] VS Code extension
- [ ] Automatic reactivity by wrapping `let` declarations in `<script>` tags with [`signal()`](https://preactjs.com/guide/v10/signals#signalinitialvalue) initializers
- [ ] Directives
    - User-defined directives allow behavior to be applied to an element or component by matching on a specific prop/attribute
    - Directives are identified by their name (`myDirective`) and can have a value (`myDirective={5}`), an argument (`myDirective:foo`), a modifier (`myDirective.bar`), multiple modifiers (`myDirective.bar.baz`), or any combination thereof (`myDirective:foo.bar.baz={5}`)
- Built-in directives
    - [ ] [`class.` directive](https://svelte.dev/docs#template-syntax-element-directives-class-name) to toggle a class on an element (e.g. `<div class.active={isActive}>...</div>`)
    - [ ] [`class:list` directive]() for converting an array of class values into a class string (e.g. `<span class:list={[ 'hello goodbye', { hello: true, world: true }, new Set([ 'hello', 'friend' ]) ]} />`)
    - [ ] [`style.` directive](https://svelte.dev/docs#template-syntax-element-directives-style-property) to set multiple styles on an element (e.g. `<div style.color={myColor}>...</div>`)
    - [ ] [`--style-props` directive](https://svelte.dev/docs#template-syntax-component-directives---style-props) to pass styles as props to components for the purposes of theming, using CSS custom properties (e.g. `<div --theme-color="rgb(0, 0, 255)">...</div>`)
    - [ ] [`set:html` directive](https://docs.astro.build/en/reference/directives-reference/#sethtml) to set the `dangerouslySetInnerHTML={{ __html }}` prop (e.g. `<h1 set:html={rawHTMLString} />`)
    - [ ] [`is:global` directive](https://docs.astro.build/en/reference/directives-reference/#isglobal) to set style blocks in components as unscoped (e.g. `<style is:global>`)
    