(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var o;
  var r;
  var f = {};
  var e = [];
  var c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function s(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function a(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function h(l3, u3, i3) {
    var t2, o3, r3, f3 = {};
    for (r3 in u3)
      "key" == r3 ? t2 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return v(l3, f3, t2, o3, null);
  }
  function v(n2, i3, t2, o3, r3) {
    var f3 = { type: n2, props: i3, key: t2, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function p(n2) {
    return n2.children;
  }
  function d(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function _(n2, l3) {
    if (null == l3)
      return n2.__ ? _(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? _(n2) : null;
  }
  function k(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return k(n2);
    }
  }
  function b(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l3) {
        return n3.__v.__b - l3.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l3, u3, i3, t2, o3, r3;
        n3.__d && (o3 = (t2 = (l3 = n3).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = s({}, t2)).__v = t2.__v + 1, j(r3, t2, i3, l3.__n, void 0 !== r3.ownerSVGElement, null != t2.__h ? [o3] : null, u3, null == o3 ? _(t2) : o3, t2.__h), z(u3, t2), t2.__e != o3 && k(t2)));
      });
  }
  function w(n2, l3, u3, i3, t2, o3, r3, c3, s2, a3) {
    var h3, y2, d3, k3, b2, g3, w3, x = i3 && i3.__k || e, C3 = x.length;
    for (u3.__k = [], h3 = 0; h3 < l3.length; h3++)
      if (null != (k3 = u3.__k[h3] = null == (k3 = l3[h3]) || "boolean" == typeof k3 ? null : "string" == typeof k3 || "number" == typeof k3 || "bigint" == typeof k3 ? v(null, k3, null, null, k3) : Array.isArray(k3) ? v(p, { children: k3 }, null, null, null) : k3.__b > 0 ? v(k3.type, k3.props, k3.key, k3.ref ? k3.ref : null, k3.__v) : k3)) {
        if (k3.__ = u3, k3.__b = u3.__b + 1, null === (d3 = x[h3]) || d3 && k3.key == d3.key && k3.type === d3.type)
          x[h3] = void 0;
        else
          for (y2 = 0; y2 < C3; y2++) {
            if ((d3 = x[y2]) && k3.key == d3.key && k3.type === d3.type) {
              x[y2] = void 0;
              break;
            }
            d3 = null;
          }
        j(n2, k3, d3 = d3 || f, t2, o3, r3, c3, s2, a3), b2 = k3.__e, (y2 = k3.ref) && d3.ref != y2 && (w3 || (w3 = []), d3.ref && w3.push(d3.ref, null, k3), w3.push(y2, k3.__c || b2, k3)), null != b2 ? (null == g3 && (g3 = b2), "function" == typeof k3.type && k3.__k === d3.__k ? k3.__d = s2 = m(k3, s2, n2) : s2 = A(n2, k3, d3, x, b2, s2), "function" == typeof u3.type && (u3.__d = s2)) : s2 && d3.__e == s2 && s2.parentNode != n2 && (s2 = _(d3));
      }
    for (u3.__e = g3, h3 = C3; h3--; )
      null != x[h3] && ("function" == typeof u3.type && null != x[h3].__e && x[h3].__e == u3.__d && (u3.__d = _(i3, h3 + 1)), N(x[h3], x[h3]));
    if (w3)
      for (h3 = 0; h3 < w3.length; h3++)
        M(w3[h3], w3[++h3], w3[++h3]);
  }
  function m(n2, l3, u3) {
    for (var i3, t2 = n2.__k, o3 = 0; t2 && o3 < t2.length; o3++)
      (i3 = t2[o3]) && (i3.__ = n2, l3 = "function" == typeof i3.type ? m(i3, l3, u3) : A(u3, i3, i3, t2, i3.__e, l3));
    return l3;
  }
  function A(n2, l3, u3, i3, t2, o3) {
    var r3, f3, e3;
    if (void 0 !== l3.__d)
      r3 = l3.__d, l3.__d = void 0;
    else if (null == u3 || t2 != o3 || null == t2.parentNode)
      n:
        if (null == o3 || o3.parentNode !== n2)
          n2.appendChild(t2), r3 = null;
        else {
          for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 2)
            if (f3 == t2)
              break n;
          n2.insertBefore(t2, o3), r3 = o3;
        }
    return void 0 !== r3 ? r3 : t2.nextSibling;
  }
  function C(n2, l3, u3, i3, t2) {
    var o3;
    for (o3 in u3)
      "children" === o3 || "key" === o3 || o3 in l3 || H(n2, o3, null, u3[o3], i3);
    for (o3 in l3)
      t2 && "function" != typeof l3[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u3[o3] === l3[o3] || H(n2, o3, l3[o3], u3[o3], i3);
  }
  function $(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || c.test(l3) ? u3 : u3 + "px";
  }
  function H(n2, l3, u3, i3, t2) {
    var o3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || $(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || $(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? i3 || n2.addEventListener(l3, o3 ? T : I, o3) : n2.removeEventListener(l3, o3 ? T : I, o3);
      else if ("dangerouslySetInnerHTML" !== l3) {
        if (t2)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null != u3 && (false !== u3 || "a" === l3[0] && "r" === l3[1]) ? n2.setAttribute(l3, u3) : n2.removeAttribute(l3));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u3, i3, t2, o3, r3, f3, e3, c3) {
    var a3, h3, v3, y2, _2, k3, b2, g3, m3, x, A2, C3, $2, H2 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (a3 = l.__b) && a3(u3);
    try {
      n:
        if ("function" == typeof H2) {
          if (g3 = u3.props, m3 = (a3 = H2.contextType) && t2[a3.__c], x = a3 ? m3 ? m3.props.value : a3.__ : t2, i3.__c ? b2 = (h3 = u3.__c = i3.__c).__ = h3.__E : ("prototype" in H2 && H2.prototype.render ? u3.__c = h3 = new H2(g3, x) : (u3.__c = h3 = new d(g3, x), h3.constructor = H2, h3.render = O), m3 && m3.sub(h3), h3.props = g3, h3.state || (h3.state = {}), h3.context = x, h3.__n = t2, v3 = h3.__d = true, h3.__h = []), null == h3.__s && (h3.__s = h3.state), null != H2.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = s({}, h3.__s)), s(h3.__s, H2.getDerivedStateFromProps(g3, h3.__s))), y2 = h3.props, _2 = h3.state, v3)
            null == H2.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
          else {
            if (null == H2.getDerivedStateFromProps && g3 !== y2 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(g3, x), !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(g3, h3.__s, x) || u3.__v === i3.__v) {
              h3.props = g3, h3.state = h3.__s, u3.__v !== i3.__v && (h3.__d = false), h3.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), h3.__h.length && f3.push(h3);
              break n;
            }
            null != h3.componentWillUpdate && h3.componentWillUpdate(g3, h3.__s, x), null != h3.componentDidUpdate && h3.__h.push(function() {
              h3.componentDidUpdate(y2, _2, k3);
            });
          }
          if (h3.context = x, h3.props = g3, h3.__v = u3, h3.__P = n2, A2 = l.__r, C3 = 0, "prototype" in H2 && H2.prototype.render)
            h3.state = h3.__s, h3.__d = false, A2 && A2(u3), a3 = h3.render(h3.props, h3.state, h3.context);
          else
            do {
              h3.__d = false, A2 && A2(u3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
            } while (h3.__d && ++C3 < 25);
          h3.state = h3.__s, null != h3.getChildContext && (t2 = s(s({}, t2), h3.getChildContext())), v3 || null == h3.getSnapshotBeforeUpdate || (k3 = h3.getSnapshotBeforeUpdate(y2, _2)), $2 = null != a3 && a3.type === p && null == a3.key ? a3.props.children : a3, w(n2, Array.isArray($2) ? $2 : [$2], u3, i3, t2, o3, r3, f3, e3, c3), h3.base = u3.__e, u3.__h = null, h3.__h.length && f3.push(h3), b2 && (h3.__E = h3.__ = null), h3.__e = false;
        } else
          null == r3 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t2, o3, r3, f3, c3);
      (a3 = l.diffed) && a3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || null != r3) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, i3);
    }
  }
  function z(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function L(l3, u3, i3, t2, o3, r3, e3, c3) {
    var s2, h3, v3, y2 = i3.props, p3 = u3.props, d3 = u3.type, k3 = 0;
    if ("svg" === d3 && (o3 = true), null != r3) {
      for (; k3 < r3.length; k3++)
        if ((s2 = r3[k3]) && "setAttribute" in s2 == !!d3 && (d3 ? s2.localName === d3 : 3 === s2.nodeType)) {
          l3 = s2, r3[k3] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === d3)
        return document.createTextNode(p3);
      l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p3.is && p3), r3 = null, c3 = false;
    }
    if (null === d3)
      y2 === p3 || c3 && l3.data === p3 || (l3.data = p3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), h3 = (y2 = i3.props || f).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c3) {
        if (null != r3)
          for (y2 = {}, k3 = 0; k3 < l3.attributes.length; k3++)
            y2[l3.attributes[k3].name] = l3.attributes[k3].value;
        (v3 || h3) && (v3 && (h3 && v3.__html == h3.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
      }
      if (C(l3, p3, y2, o3, c3), v3)
        u3.__k = [];
      else if (k3 = u3.props.children, w(l3, Array.isArray(k3) ? k3 : [k3], u3, i3, t2, o3 && "foreignObject" !== d3, r3, e3, r3 ? r3[0] : i3.__k && _(i3, 0), c3), null != r3)
        for (k3 = r3.length; k3--; )
          null != r3[k3] && a(r3[k3]);
      c3 || ("value" in p3 && void 0 !== (k3 = p3.value) && (k3 !== l3.value || "progress" === d3 && !k3 || "option" === d3 && k3 !== y2.value) && H(l3, "value", k3, y2.value, false), "checked" in p3 && void 0 !== (k3 = p3.checked) && k3 !== l3.checked && H(l3, "checked", k3, y2.checked, false));
    }
    return l3;
  }
  function M(n2, u3, i3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function N(n2, u3, i3) {
    var t2, o3;
    if (l.unmount && l.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M(t2, null, u3)), null != (t2 = n2.__c)) {
      if (t2.componentWillUnmount)
        try {
          t2.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t2.base = t2.__P = null, n2.__c = void 0;
    }
    if (t2 = n2.__k)
      for (o3 = 0; o3 < t2.length; o3++)
        t2[o3] && N(t2[o3], u3, "function" != typeof n2.type);
    i3 || null == n2.__e || a(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function O(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function P(u3, i3, t2) {
    var o3, r3, e3;
    l.__ && l.__(u3, i3), r3 = (o3 = "function" == typeof t2) ? null : t2 && t2.__k || i3.__k, e3 = [], j(i3, u3 = (!o3 && t2 || i3).__k = h(p, null, [u3]), r3 || f, f, void 0 !== i3.ownerSVGElement, !o3 && t2 ? [t2] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, e3, !o3 && t2 ? t2 : r3 ? r3.__e : i3.firstChild, o3), z(e3, u3);
  }
  n = e.slice, l = { __e: function(n2, l3, u3, i3) {
    for (var t2, o3, r3; l3 = l3.__; )
      if ((t2 = l3.__c) && !t2.__)
        try {
          if ((o3 = t2.constructor) && null != o3.getDerivedStateFromError && (t2.setState(o3.getDerivedStateFromError(n2)), r3 = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i3 || {}), r3 = t2.__d), r3)
            return t2.__E = t2;
        } catch (l4) {
          n2 = l4;
        }
    throw n2;
  } }, u = 0, i = function(n2) {
    return null != n2 && void 0 === n2.constructor;
  }, d.prototype.setState = function(n2, l3) {
    var u3;
    u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n2 && (n2 = n2(s({}, u3), this.props)), n2 && s(u3, n2), null != n2 && this.__v && (l3 && this.__h.push(l3), b(this));
  }, d.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), b(this));
  }, d.prototype.render = p, t = [], g.__r = 0, r = 0;

  // node_modules/preact/hooks/dist/hooks.module.js
  var r2;
  var u2;
  var i2;
  var o2;
  var f2 = 0;
  var c2 = [];
  var e2 = [];
  var a2 = l.__b;
  var v2 = l.__r;
  var l2 = l.diffed;
  var m2 = l.__c;
  var d2 = l.unmount;
  function p2(t2, r3) {
    l.__h && l.__h(u2, t2, f2 || r3), f2 = 0;
    var i3 = u2.__H || (u2.__H = { __: [], __h: [] });
    return t2 >= i3.__.length && i3.__.push({ __V: e2 }), i3.__[t2];
  }
  function y(n2) {
    return f2 = 1, h2(C2, n2);
  }
  function h2(n2, t2, i3) {
    var o3 = p2(r2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(t2) : C2(void 0, t2), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = u2, !u2.u)) {
      u2.u = true;
      var f3 = u2.shouldComponentUpdate;
      u2.shouldComponentUpdate = function(n3, t3, r3) {
        if (!o3.__c.__H)
          return true;
        var u3 = o3.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u3.every(function(n4) {
          return !n4.__N;
        }))
          return !f3 || f3.call(this, n3, t3, r3);
        var i4 = false;
        return u3.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), !!i4 && (!f3 || f3.call(this, n3, t3, r3));
      };
    }
    return o3.__N || o3.__;
  }
  function g2() {
    for (var t2; t2 = c2.shift(); )
      if (t2.__P && t2.__H)
        try {
          t2.__H.__h.forEach(w2), t2.__H.__h.forEach(z2), t2.__H.__h = [];
        } catch (r3) {
          t2.__H.__h = [], l.__e(r3, t2.__v);
        }
  }
  l.__b = function(n2) {
    "function" != typeof n2.type || n2.o || n2.type === p ? n2.o || (n2.o = n2.__ && n2.__.o ? n2.__.o : "") : n2.o = (n2.__ && n2.__.o ? n2.__.o : "") + (n2.__ && n2.__.__k ? n2.__.__k.indexOf(n2) : 0), u2 = null, a2 && a2(n2);
  }, l.__r = function(n2) {
    v2 && v2(n2), r2 = 0;
    var t2 = (u2 = n2.__c).__H;
    t2 && (i2 === u2 ? (t2.__h = [], u2.__h = [], t2.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.__V = e2, n3.__N = n3.i = void 0;
    })) : (t2.__h.forEach(w2), t2.__h.forEach(z2), t2.__h = [])), i2 = u2;
  }, l.diffed = function(t2) {
    l2 && l2(t2);
    var r3 = t2.__c;
    r3 && r3.__H && (r3.__H.__h.length && (1 !== c2.push(r3) && o2 === l.requestAnimationFrame || ((o2 = l.requestAnimationFrame) || k2)(g2)), r3.__H.__.forEach(function(n2) {
      n2.i && (n2.__H = n2.i), n2.__V !== e2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = e2;
    })), i2 = u2 = null;
  }, l.__c = function(t2, r3) {
    r3.some(function(t3) {
      try {
        t3.__h.forEach(w2), t3.__h = t3.__h.filter(function(n2) {
          return !n2.__ || z2(n2);
        });
      } catch (u3) {
        r3.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), r3 = [], l.__e(u3, t3.__v);
      }
    }), m2 && m2(t2, r3);
  }, l.unmount = function(t2) {
    d2 && d2(t2);
    var r3, u3 = t2.__c;
    u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
      try {
        w2(n2);
      } catch (n3) {
        r3 = n3;
      }
    }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
  };
  var j2 = "function" == typeof requestAnimationFrame;
  function k2(n2) {
    var t2, r3 = function() {
      clearTimeout(u3), j2 && cancelAnimationFrame(t2), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    j2 && (t2 = requestAnimationFrame(r3));
  }
  function w2(n2) {
    var t2 = u2, r3 = n2.__c;
    "function" == typeof r3 && (n2.__c = void 0, r3()), u2 = t2;
  }
  function z2(n2) {
    var t2 = u2;
    n2.__c = n2.__(), u2 = t2;
  }
  function C2(n2, t2) {
    return "function" == typeof t2 ? t2(n2) : t2;
  }

  // tests/index.js
  function App() {
    let [count, setCount] = y(0);
    return h(
      p,
      null,
      h("p", { class: "big" }, "Hello World! ", count),
      h("button", { onClick: () => setCount(count + 1) }, "Increment ++")
    );
  }
  P(h(App, null), document.body);
})();
