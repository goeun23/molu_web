! function(t, e) { "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) { if (!t.document) throw new Error("jQuery requires a window with a document"); return e(t) } : e(t) }("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = "length" in t && t.length,
            i = X.type(t);
        return "function" !== i && !X.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
    }

    function s(t, e, i) {
        if (X.isFunction(e)) return X.grep(t, function(t, s) { return !!e.call(t, s, t) !== i });
        if (e.nodeType) return X.grep(t, function(t) { return t === e !== i });
        if ("string" == typeof e) {
            if (et.test(e)) return X.filter(e, t, i);
            e = X.filter(e, t)
        }
        return X.grep(t, function(t) { return R.call(e, t) >= 0 !== i })
    }

    function n(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function o() { U.removeEventListener("DOMContentLoaded", o, !1), t.removeEventListener("load", o, !1), X.ready() }

    function r() { Object.defineProperty(this.cache = {}, 0, { get: function() { return {} } }), this.expando = X.expando + r.uid++ }

    function a(t, e, i) {
        var s;
        if (void 0 === i && 1 === t.nodeType)
            if (s = "data-" + e.replace(pt, "-$1").toLowerCase(), "string" == typeof(i = t.getAttribute(s))) {
                try { i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : dt.test(i) ? X.parseJSON(i) : i) } catch (t) {}
                ut.set(t, e, i)
            } else i = void 0;
        return i
    }

    function l() { return !0 }

    function h() { return !1 }

    function c() { try { return U.activeElement } catch (t) {} }

    function u(t, e) { return X.nodeName(t, "table") && X.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t }

    function d(t) { return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t }

    function p(t) { var e = Et.exec(t.type); return e ? t.type = e[1] : t.removeAttribute("type"), t }

    function f(t, e) { for (var i = 0, s = t.length; s > i; i++) ct.set(t[i], "globalEval", !e || ct.get(e[i], "globalEval")) }

    function m(t, e) {
        var i, s, n, o, r, a, l, h;
        if (1 === e.nodeType) {
            if (ct.hasData(t) && (o = ct.access(t), r = ct.set(e, o), h = o.events)) {
                delete r.handle, r.events = {};
                for (n in h)
                    for (i = 0, s = h[n].length; s > i; i++) X.event.add(e, n, h[n][i])
            }
            ut.hasData(t) && (a = ut.access(t), l = X.extend({}, a), ut.set(e, l))
        }
    }

    function g(t, e) { var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : []; return void 0 === e || e && X.nodeName(t, e) ? X.merge([t], i) : i }

    function v(t, e) { var i = e.nodeName.toLowerCase(); "input" === i && vt.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue) }

    function _(e, i) {
        var s, n = X(i.createElement(e)).appendTo(i.body),
            o = t.getDefaultComputedStyle && (s = t.getDefaultComputedStyle(n[0])) ? s.display : X.css(n[0], "display");
        return n.detach(), o
    }

    function b(t) {
        var e = U,
            i = $t[t];
        return i || ("none" !== (i = _(t, e)) && i || (Mt = (Mt || X("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), (e = Mt[0].contentDocument).write(), e.close(), i = _(t, e), Mt.detach()), $t[t] = i), i
    }

    function y(t, e, i) { var s, n, o, r, a = t.style; return (i = i || Ht(t)) && (r = i.getPropertyValue(e) || i[e]), i && ("" !== r || X.contains(t.ownerDocument, t) || (r = X.style(t, e)), Nt.test(r) && Ot.test(e) && (s = a.width, n = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = s, a.minWidth = n, a.maxWidth = o)), void 0 !== r ? r + "" : r }

    function w(t, e) { return { get: function() { return t() ? void delete this.get : (this.get = e).apply(this, arguments) } } }

    function x(t, e) {
        if (e in t) return e;
        for (var i = e[0].toUpperCase() + e.slice(1), s = e, n = Ft.length; n--;)
            if ((e = Ft[n] + i) in t) return e;
        return s
    }

    function C(t, e, i) { var s = zt.exec(e); return s ? Math.max(0, s[1] - (i || 0)) + (s[2] || "px") : e }

    function k(t, e, i, s, n) { for (var o = i === (s ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > o; o += 2) "margin" === i && (r += X.css(t, i + mt[o], !0, n)), s ? ("content" === i && (r -= X.css(t, "padding" + mt[o], !0, n)), "margin" !== i && (r -= X.css(t, "border" + mt[o] + "Width", !0, n))) : (r += X.css(t, "padding" + mt[o], !0, n), "padding" !== i && (r += X.css(t, "border" + mt[o] + "Width", !0, n))); return r }

    function T(t, e, i) {
        var s = !0,
            n = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = Ht(t),
            r = "border-box" === X.css(t, "boxSizing", !1, o);
        if (0 >= n || null == n) {
            if ((0 > (n = y(t, e, o)) || null == n) && (n = t.style[e]), Nt.test(n)) return n;
            s = r && (Y.boxSizingReliable() || n === t.style[e]), n = parseFloat(n) || 0
        }
        return n + k(t, e, i || (r ? "border" : "content"), s, o) + "px"
    }

    function S(t, e) { for (var i, s, n, o = [], r = 0, a = t.length; a > r; r++)(s = t[r]).style && (o[r] = ct.get(s, "olddisplay"), i = s.style.display, e ? (o[r] || "none" !== i || (s.style.display = ""), "" === s.style.display && gt(s) && (o[r] = ct.access(s, "olddisplay", b(s.nodeName)))) : (n = gt(s), "none" === i && n || ct.set(s, "olddisplay", n ? i : X.css(s, "display")))); for (r = 0; a > r; r++)(s = t[r]).style && (e && "none" !== s.style.display && "" !== s.style.display || (s.style.display = e ? o[r] || "" : "none")); return t }

    function D(t, e, i, s, n) { return new D.prototype.init(t, e, i, s, n) }

    function I() { return setTimeout(function() { qt = void 0 }), qt = X.now() }

    function E(t, e) {
        var i, s = 0,
            n = { height: t };
        for (e = e ? 1 : 0; 4 > s; s += 2 - e) i = mt[s], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function P(t, e, i) {
        for (var s, n = (Kt[e] || []).concat(Kt["*"]), o = 0, r = n.length; r > o; o++)
            if (s = n[o].call(i, e, t)) return s
    }

    function A(t, e, i) {
        var s, n, o = 0,
            r = Vt.length,
            a = X.Deferred().always(function() { delete l.elem }),
            l = function() { if (n) return !1; for (var e = qt || I(), i = Math.max(0, h.startTime + h.duration - e), s = 1 - (i / h.duration || 0), o = 0, r = h.tweens.length; r > o; o++) h.tweens[o].run(s); return a.notifyWith(t, [h, s, i]), 1 > s && r ? i : (a.resolveWith(t, [h]), !1) },
            h = a.promise({
                elem: t,
                props: X.extend({}, e),
                opts: X.extend(!0, { specialEasing: {} }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: qt || I(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) { var s = X.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing); return h.tweens.push(s), s },
                stop: function(e) {
                    var i = 0,
                        s = e ? h.tweens.length : 0;
                    if (n) return this;
                    for (n = !0; s > i; i++) h.tweens[i].run(1);
                    return e ? a.resolveWith(t, [h, e]) : a.rejectWith(t, [h, e]), this
                }
            }),
            c = h.props;
        for (function(t, e) {
                var i, s, n, o, r;
                for (i in t)
                    if (s = X.camelCase(i), n = e[s], o = t[i], X.isArray(o) && (n = o[1], o = t[i] = o[0]), i !== s && (t[s] = o, delete t[i]), (r = X.cssHooks[s]) && "expand" in r) { o = r.expand(o), delete t[s]; for (i in o) i in t || (t[i] = o[i], e[i] = n) } else e[s] = n
            }(c, h.opts.specialEasing); r > o; o++)
            if (s = Vt[o].call(h, t, c, h.opts)) return s;
        return X.map(c, P, h), X.isFunction(h.opts.start) && h.opts.start.call(t, h), X.fx.timer(X.extend(l, { elem: t, anim: h, queue: h.opts.queue })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }

    function M(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var s, n = 0,
                o = e.toLowerCase().match(rt) || [];
            if (X.isFunction(i))
                for (; s = o[n++];) "+" === s[0] ? (s = s.slice(1) || "*", (t[s] = t[s] || []).unshift(i)) : (t[s] = t[s] || []).push(i)
        }
    }

    function $(t, e, i, s) {
        function n(a) { var l; return o[a] = !0, X.each(t[a] || [], function(t, a) { var h = a(e, i, s); return "string" != typeof h || r || o[h] ? r ? !(l = h) : void 0 : (e.dataTypes.unshift(h), n(h), !1) }), l }
        var o = {},
            r = t === ce;
        return n(e.dataTypes[0]) || !o["*"] && n("*")
    }

    function O(t, e) { var i, s, n = X.ajaxSettings.flatOptions || {}; for (i in e) void 0 !== e[i] && ((n[i] ? t : s || (s = {}))[i] = e[i]); return s && X.extend(!0, t, s), t }

    function N(t, e, i, s) {
        var n;
        if (X.isArray(e)) X.each(e, function(e, n) { i || me.test(t) ? s(t, n) : N(t + "[" + ("object" == typeof n ? e : "") + "]", n, i, s) });
        else if (i || "object" !== X.type(e)) s(t, e);
        else
            for (n in e) N(t + "[" + n + "]", e[n], i, s)
    }

    function H(t) { return X.isWindow(t) ? t : 9 === t.nodeType && t.defaultView }
    var L = [],
        z = L.slice,
        W = L.concat,
        j = L.push,
        R = L.indexOf,
        F = {},
        q = F.toString,
        B = F.hasOwnProperty,
        Y = {},
        U = t.document,
        X = function(t, e) { return new X.fn.init(t, e) },
        V = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        K = /^-ms-/,
        Q = /-([\da-z])/gi,
        G = function(t, e) { return e.toUpperCase() };
    X.fn = X.prototype = {
        jquery: "2.1.4",
        constructor: X,
        selector: "",
        length: 0,
        toArray: function() { return z.call(this) },
        get: function(t) { return null != t ? 0 > t ? this[t + this.length] : this[t] : z.call(this) },
        pushStack: function(t) { var e = X.merge(this.constructor(), t); return e.prevObject = this, e.context = this.context, e },
        each: function(t, e) { return X.each(this, t, e) },
        map: function(t) { return this.pushStack(X.map(this, function(e, i) { return t.call(e, i, e) })) },
        slice: function() { return this.pushStack(z.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(t) {
            var e = this.length,
                i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function() { return this.prevObject || this.constructor(null) },
        push: j,
        sort: L.sort,
        splice: L.splice
    }, X.extend = X.fn.extend = function() {
        var t, e, i, s, n, o, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            h = !1;
        for ("boolean" == typeof r && (h = r, r = arguments[a] || {}, a++), "object" == typeof r || X.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
            if (null != (t = arguments[a]))
                for (e in t) i = r[e], s = t[e], r !== s && (h && s && (X.isPlainObject(s) || (n = X.isArray(s))) ? (n ? (n = !1, o = i && X.isArray(i) ? i : []) : o = i && X.isPlainObject(i) ? i : {}, r[e] = X.extend(h, o, s)) : void 0 !== s && (r[e] = s));
        return r
    }, X.extend({
        expando: "jQuery" + ("2.1.4" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) { throw new Error(t) },
        noop: function() {},
        isFunction: function(t) { return "function" === X.type(t) },
        isArray: Array.isArray,
        isWindow: function(t) { return null != t && t === t.window },
        isNumeric: function(t) { return !X.isArray(t) && t - parseFloat(t) + 1 >= 0 },
        isPlainObject: function(t) { return "object" === X.type(t) && !t.nodeType && !X.isWindow(t) && !(t.constructor && !B.call(t.constructor.prototype, "isPrototypeOf")) },
        isEmptyObject: function(t) { var e; for (e in t) return !1; return !0 },
        type: function(t) { return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? F[q.call(t)] || "object" : typeof t },
        globalEval: function(t) {
            var e, i = eval;
            (t = X.trim(t)) && (1 === t.indexOf("use strict") ? (e = U.createElement("script"), e.text = t, U.head.appendChild(e).parentNode.removeChild(e)) : i(t))
        },
        camelCase: function(t) { return t.replace(K, "ms-").replace(Q, G) },
        nodeName: function(t, e) { return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase() },
        each: function(t, e, s) {
            var n = 0,
                o = t.length,
                r = i(t);
            if (s) {
                if (r)
                    for (; o > n && !1 !== e.apply(t[n], s); n++);
                else
                    for (n in t)
                        if (!1 === e.apply(t[n], s)) break
            } else if (r)
                for (; o > n && !1 !== e.call(t[n], n, t[n]); n++);
            else
                for (n in t)
                    if (!1 === e.call(t[n], n, t[n])) break; return t
        },
        trim: function(t) { return null == t ? "" : (t + "").replace(V, "") },
        makeArray: function(t, e) { var s = e || []; return null != t && (i(Object(t)) ? X.merge(s, "string" == typeof t ? [t] : t) : j.call(s, t)), s },
        inArray: function(t, e, i) { return null == e ? -1 : R.call(e, t, i) },
        merge: function(t, e) { for (var i = +e.length, s = 0, n = t.length; i > s; s++) t[n++] = e[s]; return t.length = n, t },
        grep: function(t, e, i) { for (var s = [], n = 0, o = t.length, r = !i; o > n; n++) !e(t[n], n) !== r && s.push(t[n]); return s },
        map: function(t, e, s) {
            var n, o = 0,
                r = t.length,
                a = [];
            if (i(t))
                for (; r > o; o++) null != (n = e(t[o], o, s)) && a.push(n);
            else
                for (o in t) null != (n = e(t[o], o, s)) && a.push(n);
            return W.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) { var i, s, n; return "string" == typeof e && (i = t[e], e = t, t = i), X.isFunction(t) ? (s = z.call(arguments, 2), n = function() { return t.apply(e || this, s.concat(z.call(arguments))) }, n.guid = t.guid = t.guid || X.guid++, n) : void 0 },
        now: Date.now,
        support: Y
    }), X.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) { F["[object " + e + "]"] = e.toLowerCase() });
    var Z = function(t) {
        function e(t, e, i, s) {
            var n, o, r, a, l, h, u, p, f, m;
            if ((e ? e.ownerDocument || e : z) !== P && E(e), e = e || P, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
            if (!s && M) {
                if (11 !== a && (n = gt.exec(t)))
                    if (r = n[1]) { if (9 === a) { if (!(o = e.getElementById(r)) || !o.parentNode) return i; if (o.id === r) return i.push(o), i } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(r)) && H(e, o) && o.id === r) return i.push(o), i } else { if (n[2]) return Q.apply(i, e.getElementsByTagName(t)), i; if ((r = n[3]) && b.getElementsByClassName) return Q.apply(i, e.getElementsByClassName(r)), i }
                if (b.qsa && (!$ || !$.test(t))) {
                    if (p = u = L, f = e, m = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (h = C(t), (u = e.getAttribute("id")) ? p = u.replace(_t, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = h.length; l--;) h[l] = p + d(h[l]);
                        f = vt.test(t) && c(e.parentNode) || e, m = h.join(",")
                    }
                    if (m) try { return Q.apply(i, f.querySelectorAll(m)), i } catch (t) {} finally { u || e.removeAttribute("id") }
                }
            }
            return T(t.replace(rt, "$1"), e, i, s)
        }

        function i() {
            function t(i, s) { return e.push(i + " ") > y.cacheLength && delete t[e.shift()], t[i + " "] = s }
            var e = [];
            return t
        }

        function s(t) { return t[L] = !0, t }

        function n(t) { var e = P.createElement("div"); try { return !!t(e) } catch (t) { return !1 } finally { e.parentNode && e.parentNode.removeChild(e), e = null } }

        function o(t, e) { for (var i = t.split("|"), s = t.length; s--;) y.attrHandle[i[s]] = e }

        function r(t, e) {
            var i = e && t,
                s = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
            if (s) return s;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function a(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

        function l(t) { return function(e) { var i = e.nodeName.toLowerCase(); return ("input" === i || "button" === i) && e.type === t } }

        function h(t) { return s(function(e) { return e = +e, s(function(i, s) { for (var n, o = t([], i.length, e), r = o.length; r--;) i[n = o[r]] && (i[n] = !(s[n] = i[n])) }) }) }

        function c(t) { return t && void 0 !== t.getElementsByTagName && t }

        function u() {}

        function d(t) { for (var e = 0, i = t.length, s = ""; i > e; e++) s += t[e].value; return s }

        function p(t, e, i) {
            var s = e.dir,
                n = i && "parentNode" === s,
                o = j++;
            return e.first ? function(e, i, o) {
                for (; e = e[s];)
                    if (1 === e.nodeType || n) return t(e, i, o)
            } : function(e, i, r) {
                var a, l, h = [W, o];
                if (r) {
                    for (; e = e[s];)
                        if ((1 === e.nodeType || n) && t(e, i, r)) return !0
                } else
                    for (; e = e[s];)
                        if (1 === e.nodeType || n) { if (l = e[L] || (e[L] = {}), (a = l[s]) && a[0] === W && a[1] === o) return h[2] = a[2]; if (l[s] = h, h[2] = t(e, i, r)) return !0 }
            }
        }

        function f(t) {
            return t.length > 1 ? function(e, i, s) {
                for (var n = t.length; n--;)
                    if (!t[n](e, i, s)) return !1;
                return !0
            } : t[0]
        }

        function m(t, e, i, s, n) { for (var o, r = [], a = 0, l = t.length, h = null != e; l > a; a++)(o = t[a]) && (!i || i(o, s, n)) && (r.push(o), h && e.push(a)); return r }

        function g(t, i, n, o, r, a) {
            return o && !o[L] && (o = g(o)), r && !r[L] && (r = g(r, a)), s(function(s, a, l, h) {
                var c, u, d, p = [],
                    f = [],
                    g = a.length,
                    v = s || function(t, i, s) { for (var n = 0, o = i.length; o > n; n++) e(t, i[n], s); return s }(i || "*", l.nodeType ? [l] : l, []),
                    _ = !t || !s && i ? v : m(v, p, t, l, h),
                    b = n ? r || (s ? t : g || o) ? [] : a : _;
                if (n && n(_, b, l, h), o)
                    for (c = m(b, f), o(c, [], l, h), u = c.length; u--;)(d = c[u]) && (b[f[u]] = !(_[f[u]] = d));
                if (s) {
                    if (r || t) {
                        if (r) {
                            for (c = [], u = b.length; u--;)(d = b[u]) && c.push(_[u] = d);
                            r(null, b = [], c, h)
                        }
                        for (u = b.length; u--;)(d = b[u]) && (c = r ? Z(s, d) : p[u]) > -1 && (s[c] = !(a[c] = d))
                    }
                } else b = m(b === a ? b.splice(g, b.length) : b), r ? r(null, a, b, h) : Q.apply(a, b)
            })
        }

        function v(t) {
            for (var e, i, s, n = t.length, o = y.relative[t[0].type], r = o || y.relative[" "], a = o ? 1 : 0, l = p(function(t) { return t === e }, r, !0), h = p(function(t) { return Z(e, t) > -1 }, r, !0), c = [function(t, i, s) { var n = !o && (s || i !== S) || ((e = i).nodeType ? l(t, i, s) : h(t, i, s)); return e = null, n }]; n > a; a++)
                if (i = y.relative[t[a].type]) c = [p(f(c), i)];
                else {
                    if ((i = y.filter[t[a].type].apply(null, t[a].matches))[L]) { for (s = ++a; n > s && !y.relative[t[s].type]; s++); return g(a > 1 && f(c), a > 1 && d(t.slice(0, a - 1).concat({ value: " " === t[a - 2].type ? "*" : "" })).replace(rt, "$1"), i, s > a && v(t.slice(a, s)), n > s && v(t = t.slice(s)), n > s && d(t)) }
                    c.push(i)
                }
            return f(c)
        }
        var _, b, y, w, x, C, k, T, S, D, I, E, P, A, M, $, O, N, H, L = "sizzle" + 1 * new Date,
            z = t.document,
            W = 0,
            j = 0,
            R = i(),
            F = i(),
            q = i(),
            B = function(t, e) { return t === e && (I = !0), 0 },
            Y = 1 << 31,
            U = {}.hasOwnProperty,
            X = [],
            V = X.pop,
            K = X.push,
            Q = X.push,
            G = X.slice,
            Z = function(t, e) {
                for (var i = 0, s = t.length; s > i; i++)
                    if (t[i] === e) return i;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            tt = "[\\x20\\t\\r\\n\\f]",
            et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            it = et.replace("w", "w#"),
            st = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + tt + "*\\]",
            nt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
            ot = new RegExp(tt + "+", "g"),
            rt = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
            at = new RegExp("^" + tt + "*," + tt + "*"),
            lt = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
            ht = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
            ct = new RegExp(nt),
            ut = new RegExp("^" + it + "$"),
            dt = { ID: new RegExp("^#(" + et + ")"), CLASS: new RegExp("^\\.(" + et + ")"), TAG: new RegExp("^(" + et.replace("w", "w*") + ")"), ATTR: new RegExp("^" + st), PSEUDO: new RegExp("^" + nt), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i") },
            pt = /^(?:input|select|textarea|button)$/i,
            ft = /^h\d$/i,
            mt = /^[^{]+\{\s*\[native \w/,
            gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            vt = /[+~]/,
            _t = /'|\\/g,
            bt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
            yt = function(t, e, i) { var s = "0x" + e - 65536; return s != s || i ? e : 0 > s ? String.fromCharCode(s + 65536) : String.fromCharCode(s >> 10 | 55296, 1023 & s | 56320) },
            wt = function() { E() };
        try { Q.apply(X = G.call(z.childNodes), z.childNodes), X[z.childNodes.length].nodeType } catch (t) {
            Q = {
                apply: X.length ? function(t, e) { K.apply(t, G.call(e)) } : function(t, e) {
                    for (var i = t.length, s = 0; t[i++] = e[s++];);
                    t.length = i - 1
                }
            }
        }
        b = e.support = {}, x = e.isXML = function(t) { var e = t && (t.ownerDocument || t).documentElement; return !!e && "HTML" !== e.nodeName }, E = e.setDocument = function(t) {
            var e, i, s = t ? t.ownerDocument || t : z;
            return s !== P && 9 === s.nodeType && s.documentElement ? (P = s, A = s.documentElement, (i = s.defaultView) && i !== i.top && (i.addEventListener ? i.addEventListener("unload", wt, !1) : i.attachEvent && i.attachEvent("onunload", wt)), M = !x(s), b.attributes = n(function(t) { return t.className = "i", !t.getAttribute("className") }), b.getElementsByTagName = n(function(t) { return t.appendChild(s.createComment("")), !t.getElementsByTagName("*").length }), b.getElementsByClassName = mt.test(s.getElementsByClassName), b.getById = n(function(t) { return A.appendChild(t).id = L, !s.getElementsByName || !s.getElementsByName(L).length }), b.getById ? (y.find.ID = function(t, e) { if (void 0 !== e.getElementById && M) { var i = e.getElementById(t); return i && i.parentNode ? [i] : [] } }, y.filter.ID = function(t) { var e = t.replace(bt, yt); return function(t) { return t.getAttribute("id") === e } }) : (delete y.find.ID, y.filter.ID = function(t) { var e = t.replace(bt, yt); return function(t) { var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id"); return i && i.value === e } }), y.find.TAG = b.getElementsByTagName ? function(t, e) { return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0 } : function(t, e) {
                var i, s = [],
                    n = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) { for (; i = o[n++];) 1 === i.nodeType && s.push(i); return s }
                return o
            }, y.find.CLASS = b.getElementsByClassName && function(t, e) { return M ? e.getElementsByClassName(t) : void 0 }, O = [], $ = [], (b.qsa = mt.test(s.querySelectorAll)) && (n(function(t) { A.appendChild(t).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && $.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || $.push("\\[" + tt + "*(?:value|" + J + ")"), t.querySelectorAll("[id~=" + L + "-]").length || $.push("~="), t.querySelectorAll(":checked").length || $.push(":checked"), t.querySelectorAll("a#" + L + "+*").length || $.push(".#.+[+~]") }), n(function(t) {
                var e = s.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && $.push("name" + tt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || $.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), $.push(",.*:")
            })), (b.matchesSelector = mt.test(N = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && n(function(t) { b.disconnectedMatch = N.call(t, "div"), N.call(t, "[s!='']:x"), O.push("!=", nt) }), $ = $.length && new RegExp($.join("|")), O = O.length && new RegExp(O.join("|")), e = mt.test(A.compareDocumentPosition), H = e || mt.test(A.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    s = e && e.parentNode;
                return t === s || !(!s || 1 !== s.nodeType || !(i.contains ? i.contains(s) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(s)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, B = e ? function(t, e) { if (t === e) return I = !0, 0; var i = !t.compareDocumentPosition - !e.compareDocumentPosition; return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !b.sortDetached && e.compareDocumentPosition(t) === i ? t === s || t.ownerDocument === z && H(z, t) ? -1 : e === s || e.ownerDocument === z && H(z, e) ? 1 : D ? Z(D, t) - Z(D, e) : 0 : 4 & i ? -1 : 1) } : function(t, e) {
                if (t === e) return I = !0, 0;
                var i, n = 0,
                    o = t.parentNode,
                    a = e.parentNode,
                    l = [t],
                    h = [e];
                if (!o || !a) return t === s ? -1 : e === s ? 1 : o ? -1 : a ? 1 : D ? Z(D, t) - Z(D, e) : 0;
                if (o === a) return r(t, e);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (i = e; i = i.parentNode;) h.unshift(i);
                for (; l[n] === h[n];) n++;
                return n ? r(l[n], h[n]) : l[n] === z ? -1 : h[n] === z ? 1 : 0
            }, s) : P
        }, e.matches = function(t, i) { return e(t, null, null, i) }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== P && E(t), i = i.replace(ht, "='$1']"), !(!b.matchesSelector || !M || O && O.test(i) || $ && $.test(i))) try { var s = N.call(t, i); if (s || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return s } catch (t) {}
            return e(i, P, null, [t]).length > 0
        }, e.contains = function(t, e) { return (t.ownerDocument || t) !== P && E(t), H(t, e) }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== P && E(t);
            var i = y.attrHandle[e.toLowerCase()],
                s = i && U.call(y.attrHandle, e.toLowerCase()) ? i(t, e, !M) : void 0;
            return void 0 !== s ? s : b.attributes || !M ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
        }, e.error = function(t) { throw new Error("Syntax error, unrecognized expression: " + t) }, e.uniqueSort = function(t) {
            var e, i = [],
                s = 0,
                n = 0;
            if (I = !b.detectDuplicates, D = !b.sortStable && t.slice(0), t.sort(B), I) { for (; e = t[n++];) e === t[n] && (s = i.push(n)); for (; s--;) t.splice(i[s], 1) }
            return D = null, t
        }, w = e.getText = function(t) {
            var e, i = "",
                s = 0,
                n = t.nodeType;
            if (n) { if (1 === n || 9 === n || 11 === n) { if ("string" == typeof t.textContent) return t.textContent; for (t = t.firstChild; t; t = t.nextSibling) i += w(t) } else if (3 === n || 4 === n) return t.nodeValue } else
                for (; e = t[s++];) i += w(e);
            return i
        }, (y = e.selectors = {
            cacheLength: 50,
            createPseudo: s,
            match: dt,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: { ATTR: function(t) { return t[1] = t[1].replace(bt, yt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, yt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4) }, CHILD: function(t) { return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t }, PSEUDO: function(t) { var e, i = !t[6] && t[2]; return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ct.test(i) && (e = C(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3)) } },
            filter: {
                TAG: function(t) { var e = t.replace(bt, yt).toLowerCase(); return "*" === t ? function() { return !0 } : function(t) { return t.nodeName && t.nodeName.toLowerCase() === e } },
                CLASS: function(t) { var e = R[t + " "]; return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && R(t, function(t) { return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "") }) },
                ATTR: function(t, i, s) { return function(n) { var o = e.attr(n, t); return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === s : "!=" === i ? o !== s : "^=" === i ? s && 0 === o.indexOf(s) : "*=" === i ? s && o.indexOf(s) > -1 : "$=" === i ? s && o.slice(-s.length) === s : "~=" === i ? (" " + o.replace(ot, " ") + " ").indexOf(s) > -1 : "|=" === i && (o === s || o.slice(0, s.length + 1) === s + "-")) } },
                CHILD: function(t, e, i, s, n) {
                    var o = "nth" !== t.slice(0, 3),
                        r = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === s && 0 === n ? function(t) { return !!t.parentNode } : function(e, i, l) {
                        var h, c, u, d, p, f, m = o !== r ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            _ = !l && !a;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (u = e; u = u[m];)
                                        if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [r ? g.firstChild : g.lastChild], r && _) {
                                for (p = (h = (c = g[L] || (g[L] = {}))[t] || [])[0] === W && h[1], d = h[0] === W && h[2], u = p && g.childNodes[p]; u = ++p && u && u[m] || (d = p = 0) || f.pop();)
                                    if (1 === u.nodeType && ++d && u === e) { c[t] = [W, p, d]; break }
                            } else if (_ && (h = (e[L] || (e[L] = {}))[t]) && h[0] === W) d = h[1];
                            else
                                for (;
                                    (u = ++p && u && u[m] || (d = p = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++d || (_ && ((u[L] || (u[L] = {}))[t] = [W, d]), u !== e)););
                            return (d -= n) === s || d % s == 0 && d / s >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) { var n, o = y.pseudos[t] || y.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t); return o[L] ? o(i) : o.length > 1 ? (n = [t, t, "", i], y.setFilters.hasOwnProperty(t.toLowerCase()) ? s(function(t, e) { for (var s, n = o(t, i), r = n.length; r--;) s = Z(t, n[r]), t[s] = !(e[s] = n[r]) }) : function(t) { return o(t, 0, n) }) : o }
            },
            pseudos: {
                not: s(function(t) {
                    var e = [],
                        i = [],
                        n = k(t.replace(rt, "$1"));
                    return n[L] ? s(function(t, e, i, s) { for (var o, r = n(t, null, s, []), a = t.length; a--;)(o = r[a]) && (t[a] = !(e[a] = o)) }) : function(t, s, o) { return e[0] = t, n(e, null, o, i), e[0] = null, !i.pop() }
                }),
                has: s(function(t) { return function(i) { return e(t, i).length > 0 } }),
                contains: s(function(t) {
                    return t = t.replace(bt, yt),
                        function(e) { return (e.textContent || e.innerText || w(e)).indexOf(t) > -1 }
                }),
                lang: s(function(t) {
                    return ut.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, yt).toLowerCase(),
                        function(e) {
                            var i;
                            do { if (i = M ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-") } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) { var i = t.location && t.location.hash; return i && i.slice(1) === e.id },
                root: function(t) { return t === A },
                focus: function(t) { return t === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(t.type || t.href || ~t.tabIndex) },
                enabled: function(t) { return !1 === t.disabled },
                disabled: function(t) { return !0 === t.disabled },
                checked: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && !!t.checked || "option" === e && !!t.selected },
                selected: function(t) { return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) { return !y.pseudos.empty(t) },
                header: function(t) { return ft.test(t.nodeName) },
                input: function(t) { return pt.test(t.nodeName) },
                button: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && "button" === t.type || "button" === e },
                text: function(t) { var e; return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase()) },
                first: h(function() { return [0] }),
                last: h(function(t, e) { return [e - 1] }),
                eq: h(function(t, e, i) { return [0 > i ? i + e : i] }),
                even: h(function(t, e) { for (var i = 0; e > i; i += 2) t.push(i); return t }),
                odd: h(function(t, e) { for (var i = 1; e > i; i += 2) t.push(i); return t }),
                lt: h(function(t, e, i) { for (var s = 0 > i ? i + e : i; --s >= 0;) t.push(s); return t }),
                gt: h(function(t, e, i) { for (var s = 0 > i ? i + e : i; ++s < e;) t.push(s); return t })
            }
        }).pseudos.nth = y.pseudos.eq;
        for (_ in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) y.pseudos[_] = a(_);
        for (_ in { submit: !0, reset: !0 }) y.pseudos[_] = l(_);
        return u.prototype = y.filters = y.pseudos, y.setFilters = new u, C = e.tokenize = function(t, i) {
            var s, n, o, r, a, l, h, c = F[t + " "];
            if (c) return i ? 0 : c.slice(0);
            for (a = t, l = [], h = y.preFilter; a;) {
                (!s || (n = at.exec(a))) && (n && (a = a.slice(n[0].length) || a), l.push(o = [])), s = !1, (n = lt.exec(a)) && (s = n.shift(), o.push({ value: s, type: n[0].replace(rt, " ") }), a = a.slice(s.length));
                for (r in y.filter) !(n = dt[r].exec(a)) || h[r] && !(n = h[r](n)) || (s = n.shift(), o.push({ value: s, type: r, matches: n }), a = a.slice(s.length));
                if (!s) break
            }
            return i ? a.length : a ? e.error(t) : F(t, l).slice(0)
        }, k = e.compile = function(t, i) {
            var n, o = [],
                r = [],
                a = q[t + " "];
            if (!a) {
                for (i || (i = C(t)), n = i.length; n--;)(a = v(i[n]))[L] ? o.push(a) : r.push(a);
                (a = q(t, function(t, i) {
                    var n = i.length > 0,
                        o = t.length > 0,
                        r = function(s, r, a, l, h) {
                            var c, u, d, p = 0,
                                f = "0",
                                g = s && [],
                                v = [],
                                _ = S,
                                b = s || o && y.find.TAG("*", h),
                                w = W += null == _ ? 1 : Math.random() || .1,
                                x = b.length;
                            for (h && (S = r !== P && r); f !== x && null != (c = b[f]); f++) {
                                if (o && c) {
                                    for (u = 0; d = t[u++];)
                                        if (d(c, r, a)) { l.push(c); break }
                                    h && (W = w)
                                }
                                n && ((c = !d && c) && p--, s && g.push(c))
                            }
                            if (p += f, n && f !== p) {
                                for (u = 0; d = i[u++];) d(g, v, r, a);
                                if (s) {
                                    if (p > 0)
                                        for (; f--;) g[f] || v[f] || (v[f] = V.call(l));
                                    v = m(v)
                                }
                                Q.apply(l, v), h && !s && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                            }
                            return h && (W = w, S = _), g
                        };
                    return n ? s(r) : r
                }(r, o))).selector = t
            }
            return a
        }, T = e.select = function(t, e, i, s) {
            var n, o, r, a, l, h = "function" == typeof t && t,
                u = !s && C(t = h.selector || t);
            if (i = i || [], 1 === u.length) {
                if ((o = u[0] = u[0].slice(0)).length > 2 && "ID" === (r = o[0]).type && b.getById && 9 === e.nodeType && M && y.relative[o[1].type]) {
                    if (!(e = (y.find.ID(r.matches[0].replace(bt, yt), e) || [])[0])) return i;
                    h && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (n = dt.needsContext.test(t) ? 0 : o.length; n-- && (r = o[n], !y.relative[a = r.type]);)
                    if ((l = y.find[a]) && (s = l(r.matches[0].replace(bt, yt), vt.test(o[0].type) && c(e.parentNode) || e))) { if (o.splice(n, 1), !(t = s.length && d(o))) return Q.apply(i, s), i; break }
            }
            return (h || k(t, u))(s, e, !M, i, vt.test(t) && c(e.parentNode) || e), i
        }, b.sortStable = L.split("").sort(B).join("") === L, b.detectDuplicates = !!I, E(), b.sortDetached = n(function(t) { return 1 & t.compareDocumentPosition(P.createElement("div")) }), n(function(t) { return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href") }) || o("type|href|height|width", function(t, e, i) { return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2) }), b.attributes && n(function(t) { return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value") }) || o("value", function(t, e, i) { return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue }), n(function(t) { return null == t.getAttribute("disabled") }) || o(J, function(t, e, i) { var s; return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (s = t.getAttributeNode(e)) && s.specified ? s.value : null }), e
    }(t);
    X.find = Z, X.expr = Z.selectors, X.expr[":"] = X.expr.pseudos, X.unique = Z.uniqueSort, X.text = Z.getText, X.isXMLDoc = Z.isXML, X.contains = Z.contains;
    var J = X.expr.match.needsContext,
        tt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        et = /^.[^:#\[\.,]*$/;
    X.filter = function(t, e, i) { var s = e[0]; return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === s.nodeType ? X.find.matchesSelector(s, t) ? [s] : [] : X.find.matches(t, X.grep(e, function(t) { return 1 === t.nodeType })) }, X.fn.extend({
        find: function(t) {
            var e, i = this.length,
                s = [],
                n = this;
            if ("string" != typeof t) return this.pushStack(X(t).filter(function() {
                for (e = 0; i > e; e++)
                    if (X.contains(n[e], this)) return !0
            }));
            for (e = 0; i > e; e++) X.find(t, n[e], s);
            return s = this.pushStack(i > 1 ? X.unique(s) : s), s.selector = this.selector ? this.selector + " " + t : t, s
        },
        filter: function(t) { return this.pushStack(s(this, t || [], !1)) },
        not: function(t) { return this.pushStack(s(this, t || [], !0)) },
        is: function(t) { return !!s(this, "string" == typeof t && J.test(t) ? X(t) : t || [], !1).length }
    });
    var it, st = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (X.fn.init = function(t, e) {
        var i, s;
        if (!t) return this;
        if ("string" == typeof t) {
            if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : st.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || it).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof X ? e[0] : e, X.merge(this, X.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : U, !0)), tt.test(i[1]) && X.isPlainObject(e))
                    for (i in e) X.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            return (s = U.getElementById(i[2])) && s.parentNode && (this.length = 1, this[0] = s), this.context = U, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : X.isFunction(t) ? void 0 !== it.ready ? it.ready(t) : t(X) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), X.makeArray(t, this))
    }).prototype = X.fn, it = X(U);
    var nt = /^(?:parents|prev(?:Until|All))/,
        ot = { children: !0, contents: !0, next: !0, prev: !0 };
    X.extend({
        dir: function(t, e, i) {
            for (var s = [], n = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (n && X(t).is(i)) break;
                    s.push(t)
                }
            return s
        },
        sibling: function(t, e) { for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t); return i }
    }), X.fn.extend({
        has: function(t) {
            var e = X(t, this),
                i = e.length;
            return this.filter(function() {
                for (var t = 0; i > t; t++)
                    if (X.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var i, s = 0, n = this.length, o = [], r = J.test(t) || "string" != typeof t ? X(t, e || this.context) : 0; n > s; s++)
                for (i = this[s]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && X.find.matchesSelector(i, t))) { o.push(i); break }
            return this.pushStack(o.length > 1 ? X.unique(o) : o)
        },
        index: function(t) { return t ? "string" == typeof t ? R.call(X(t), this[0]) : R.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(t, e) { return this.pushStack(X.unique(X.merge(this.get(), X(t, e)))) },
        addBack: function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }
    }), X.each({ parent: function(t) { var e = t.parentNode; return e && 11 !== e.nodeType ? e : null }, parents: function(t) { return X.dir(t, "parentNode") }, parentsUntil: function(t, e, i) { return X.dir(t, "parentNode", i) }, next: function(t) { return n(t, "nextSibling") }, prev: function(t) { return n(t, "previousSibling") }, nextAll: function(t) { return X.dir(t, "nextSibling") }, prevAll: function(t) { return X.dir(t, "previousSibling") }, nextUntil: function(t, e, i) { return X.dir(t, "nextSibling", i) }, prevUntil: function(t, e, i) { return X.dir(t, "previousSibling", i) }, siblings: function(t) { return X.sibling((t.parentNode || {}).firstChild, t) }, children: function(t) { return X.sibling(t.firstChild) }, contents: function(t) { return t.contentDocument || X.merge([], t.childNodes) } }, function(t, e) { X.fn[t] = function(i, s) { var n = X.map(this, e, i); return "Until" !== t.slice(-5) && (s = i), s && "string" == typeof s && (n = X.filter(s, n)), this.length > 1 && (ot[t] || X.unique(n), nt.test(t) && n.reverse()), this.pushStack(n) } });
    var rt = /\S+/g,
        at = {};
    X.Callbacks = function(t) {
        var e, i, s, n, o, r, a = [],
            l = !(t = "string" == typeof t ? at[t] || function(t) { var e = at[t] = {}; return X.each(t.match(rt) || [], function(t, i) { e[i] = !0 }), e }(t) : X.extend({}, t)).once && [],
            h = function(u) {
                for (e = t.memory && u, i = !0, r = n || 0, n = 0, o = a.length, s = !0; a && o > r; r++)
                    if (!1 === a[r].apply(u[0], u[1]) && t.stopOnFalse) { e = !1; break }
                s = !1, a && (l ? l.length && h(l.shift()) : e ? a = [] : c.disable())
            },
            c = {
                add: function() { if (a) { var i = a.length;! function e(i) { X.each(i, function(i, s) { var n = X.type(s); "function" === n ? t.unique && c.has(s) || a.push(s) : s && s.length && "string" !== n && e(s) }) }(arguments), s ? o = a.length : e && (n = i, h(e)) } return this },
                remove: function() {
                    return a && X.each(arguments, function(t, e) {
                        for (var i;
                            (i = X.inArray(e, a, i)) > -1;) a.splice(i, 1), s && (o >= i && o--, r >= i && r--)
                    }), this
                },
                has: function(t) { return t ? X.inArray(t, a) > -1 : !(!a || !a.length) },
                empty: function() { return a = [], o = 0, this },
                disable: function() { return a = l = e = void 0, this },
                disabled: function() { return !a },
                lock: function() { return l = void 0, e || c.disable(), this },
                locked: function() { return !l },
                fireWith: function(t, e) { return !a || i && !l || (e = e || [], e = [t, e.slice ? e.slice() : e], s ? l.push(e) : h(e)), this },
                fire: function() { return c.fireWith(this, arguments), this },
                fired: function() { return !!i }
            };
        return c
    }, X.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", X.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", X.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", X.Callbacks("memory")]
                ],
                i = "pending",
                s = {
                    state: function() { return i },
                    always: function() { return n.done(arguments).fail(arguments), this },
                    then: function() {
                        var t = arguments;
                        return X.Deferred(function(i) {
                            X.each(e, function(e, o) {
                                var r = X.isFunction(t[e]) && t[e];
                                n[o[1]](function() {
                                    var t = r && r.apply(this, arguments);
                                    t && X.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === s ? i.promise() : this, r ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) { return null != t ? X.extend(t, s) : s }
                },
                n = {};
            return s.pipe = s.then, X.each(e, function(t, o) {
                var r = o[2],
                    a = o[3];
                s[o[1]] = r.add, a && r.add(function() { i = a }, e[1 ^ t][2].disable, e[2][2].lock), n[o[0]] = function() { return n[o[0] + "With"](this === n ? s : this, arguments), this }, n[o[0] + "With"] = r.fireWith
            }), s.promise(n), t && t.call(n, n), n
        },
        when: function(t) {
            var e, i, s, n = 0,
                o = z.call(arguments),
                r = o.length,
                a = 1 !== r || t && X.isFunction(t.promise) ? r : 0,
                l = 1 === a ? t : X.Deferred(),
                h = function(t, i, s) { return function(n) { i[t] = this, s[t] = arguments.length > 1 ? z.call(arguments) : n, s === e ? l.notifyWith(i, s) : --a || l.resolveWith(i, s) } };
            if (r > 1)
                for (e = new Array(r), i = new Array(r), s = new Array(r); r > n; n++) o[n] && X.isFunction(o[n].promise) ? o[n].promise().done(h(n, s, o)).fail(l.reject).progress(h(n, i, e)) : --a;
            return a || l.resolveWith(s, o), l.promise()
        }
    });
    var lt;
    X.fn.ready = function(t) { return X.ready.promise().done(t), this }, X.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) { t ? X.readyWait++ : X.ready(!0) },
        ready: function(t) {
            (!0 === t ? --X.readyWait : X.isReady) || (X.isReady = !0, !0 !== t && --X.readyWait > 0 || (lt.resolveWith(U, [X]), X.fn.triggerHandler && (X(U).triggerHandler("ready"), X(U).off("ready"))))
        }
    }), X.ready.promise = function(e) { return lt || (lt = X.Deferred(), "complete" === U.readyState ? setTimeout(X.ready) : (U.addEventListener("DOMContentLoaded", o, !1), t.addEventListener("load", o, !1))), lt.promise(e) }, X.ready.promise();
    var ht = X.access = function(t, e, i, s, n, o, r) {
        var a = 0,
            l = t.length,
            h = null == i;
        if ("object" === X.type(i)) { n = !0; for (a in i) X.access(t, e, a, i[a], !0, o, r) } else if (void 0 !== s && (n = !0, X.isFunction(s) || (r = !0), h && (r ? (e.call(t, s), e = null) : (h = e, e = function(t, e, i) { return h.call(X(t), i) })), e))
            for (; l > a; a++) e(t[a], i, r ? s : s.call(t[a], a, e(t[a], i)));
        return n ? t : h ? e.call(t) : l ? e(t[0], i) : o
    };
    X.acceptData = function(t) { return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType }, r.uid = 1, r.accepts = X.acceptData, r.prototype = {
        key: function(t) {
            if (!r.accepts(t)) return 0;
            var e = {},
                i = t[this.expando];
            if (!i) { i = r.uid++; try { e[this.expando] = { value: i }, Object.defineProperties(t, e) } catch (s) { e[this.expando] = i, X.extend(t, e) } }
            return this.cache[i] || (this.cache[i] = {}), i
        },
        set: function(t, e, i) {
            var s, n = this.key(t),
                o = this.cache[n];
            if ("string" == typeof e) o[e] = i;
            else if (X.isEmptyObject(o)) X.extend(this.cache[n], e);
            else
                for (s in e) o[s] = e[s];
            return o
        },
        get: function(t, e) { var i = this.cache[this.key(t)]; return void 0 === e ? i : i[e] },
        access: function(t, e, i) { var s; return void 0 === e || e && "string" == typeof e && void 0 === i ? void 0 !== (s = this.get(t, e)) ? s : this.get(t, X.camelCase(e)) : (this.set(t, e, i), void 0 !== i ? i : e) },
        remove: function(t, e) {
            var i, s, n, o = this.key(t),
                r = this.cache[o];
            if (void 0 === e) this.cache[o] = {};
            else { X.isArray(e) ? s = e.concat(e.map(X.camelCase)) : (n = X.camelCase(e), e in r ? s = [e, n] : (s = n, s = s in r ? [s] : s.match(rt) || [])), i = s.length; for (; i--;) delete r[s[i]] }
        },
        hasData: function(t) { return !X.isEmptyObject(this.cache[t[this.expando]] || {}) },
        discard: function(t) { t[this.expando] && delete this.cache[t[this.expando]] }
    };
    var ct = new r,
        ut = new r,
        dt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        pt = /([A-Z])/g;
    X.extend({ hasData: function(t) { return ut.hasData(t) || ct.hasData(t) }, data: function(t, e, i) { return ut.access(t, e, i) }, removeData: function(t, e) { ut.remove(t, e) }, _data: function(t, e, i) { return ct.access(t, e, i) }, _removeData: function(t, e) { ct.remove(t, e) } }), X.fn.extend({
        data: function(t, e) {
            var i, s, n, o = this[0],
                r = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (n = ut.get(o), 1 === o.nodeType && !ct.get(o, "hasDataAttrs"))) {
                    for (i = r.length; i--;) r[i] && 0 === (s = r[i].name).indexOf("data-") && (s = X.camelCase(s.slice(5)), a(o, s, n[s]));
                    ct.set(o, "hasDataAttrs", !0)
                }
                return n
            }
            return "object" == typeof t ? this.each(function() { ut.set(this, t) }) : ht(this, function(e) {
                var i, s = X.camelCase(t);
                if (o && void 0 === e) { if (void 0 !== (i = ut.get(o, t))) return i; if (void 0 !== (i = ut.get(o, s))) return i; if (void 0 !== (i = a(o, s, void 0))) return i } else this.each(function() {
                    var i = ut.get(this, s);
                    ut.set(this, s, e), -1 !== t.indexOf("-") && void 0 !== i && ut.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) { return this.each(function() { ut.remove(this, t) }) }
    }), X.extend({
        queue: function(t, e, i) { var s; return t ? (e = (e || "fx") + "queue", s = ct.get(t, e), i && (!s || X.isArray(i) ? s = ct.access(t, e, X.makeArray(i)) : s.push(i)), s || []) : void 0 },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = X.queue(t, e),
                s = i.length,
                n = i.shift(),
                o = X._queueHooks(t, e);
            "inprogress" === n && (n = i.shift(), s--), n && ("fx" === e && i.unshift("inprogress"), delete o.stop, n.call(t, function() { X.dequeue(t, e) }, o)), !s && o && o.empty.fire()
        },
        _queueHooks: function(t, e) { var i = e + "queueHooks"; return ct.get(t, i) || ct.access(t, i, { empty: X.Callbacks("once memory").add(function() { ct.remove(t, [e + "queue", i]) }) }) }
    }), X.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? X.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = X.queue(this, t, e);
                X._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && X.dequeue(this, t)
            })
        },
        dequeue: function(t) { return this.each(function() { X.dequeue(this, t) }) },
        clearQueue: function(t) { return this.queue(t || "fx", []) },
        promise: function(t, e) {
            var i, s = 1,
                n = X.Deferred(),
                o = this,
                r = this.length,
                a = function() {--s || n.resolveWith(o, [o]) };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(i = ct.get(o[r], t + "queueHooks")) && i.empty && (s++, i.empty.add(a));
            return a(), n.promise(e)
        }
    });
    var ft = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        mt = ["Top", "Right", "Bottom", "Left"],
        gt = function(t, e) { return t = e || t, "none" === X.css(t, "display") || !X.contains(t.ownerDocument, t) },
        vt = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = U.createDocumentFragment().appendChild(U.createElement("div")),
            e = U.createElement("input");
        e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), Y.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var _t = "undefined";
    Y.focusinBubbles = "onfocusin" in t;
    var bt = /^key/,
        yt = /^(?:mouse|pointer|contextmenu)|click/,
        wt = /^(?:focusinfocus|focusoutblur)$/,
        xt = /^([^.]*)(?:\.(.+)|)$/;
    X.event = {
        global: {},
        add: function(t, e, i, s, n) {
            var o, r, a, l, h, c, u, d, p, f, m, g = ct.get(t);
            if (g)
                for (i.handler && (o = i, i = o.handler, n = o.selector), i.guid || (i.guid = X.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function(e) { return typeof X !== _t && X.event.triggered !== e.type ? X.event.dispatch.apply(t, arguments) : void 0 }), h = (e = (e || "").match(rt) || [""]).length; h--;) a = xt.exec(e[h]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p && (u = X.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, u = X.event.special[p] || {}, c = X.extend({ type: p, origType: m, data: s, handler: i, guid: i.guid, selector: n, needsContext: n && X.expr.match.needsContext.test(n), namespace: f.join(".") }, o), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, u.setup && !1 !== u.setup.call(t, s, f, r) || t.addEventListener && t.addEventListener(p, r, !1)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), n ? d.splice(d.delegateCount++, 0, c) : d.push(c), X.event.global[p] = !0)
        },
        remove: function(t, e, i, s, n) {
            var o, r, a, l, h, c, u, d, p, f, m, g = ct.hasData(t) && ct.get(t);
            if (g && (l = g.events)) {
                for (h = (e = (e || "").match(rt) || [""]).length; h--;)
                    if (a = xt.exec(e[h]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                        for (u = X.event.special[p] || {}, d = l[p = (s ? u.delegateType : u.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = d.length; o--;) c = d[o], !n && m !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || s && s !== c.selector && ("**" !== s || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, u.remove && u.remove.call(t, c));
                        r && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, g.handle) || X.removeEvent(t, p, g.handle), delete l[p])
                    } else
                        for (p in l) X.event.remove(t, p + e[h], i, s, !0);
                X.isEmptyObject(l) && (delete g.handle, ct.remove(t, "events"))
            }
        },
        trigger: function(e, i, s, n) {
            var o, r, a, l, h, c, u, d = [s || U],
                p = B.call(e, "type") ? e.type : e,
                f = B.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = a = s = s || U, 3 !== s.nodeType && 8 !== s.nodeType && !wt.test(p + X.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), h = p.indexOf(":") < 0 && "on" + p, e = e[X.expando] ? e : new X.Event(p, "object" == typeof e && e), e.isTrigger = n ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = s), i = null == i ? [e] : X.makeArray(i, [e]), u = X.event.special[p] || {}, n || !u.trigger || !1 !== u.trigger.apply(s, i))) {
                if (!n && !u.noBubble && !X.isWindow(s)) {
                    for (l = u.delegateType || p, wt.test(l + p) || (r = r.parentNode); r; r = r.parentNode) d.push(r), a = r;
                    a === (s.ownerDocument || U) && d.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0;
                    (r = d[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : u.bindType || p, (c = (ct.get(r, "events") || {})[e.type] && ct.get(r, "handle")) && c.apply(r, i), (c = h && r[h]) && c.apply && X.acceptData(r) && (e.result = c.apply(r, i), !1 === e.result && e.preventDefault());
                return e.type = p, n || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), i) || !X.acceptData(s) || h && X.isFunction(s[p]) && !X.isWindow(s) && ((a = s[h]) && (s[h] = null), X.event.triggered = p, s[p](), X.event.triggered = void 0, a && (s[h] = a)), e.result
            }
        },
        dispatch: function(t) {
            t = X.event.fix(t);
            var e, i, s, n, o, r = [],
                a = z.call(arguments),
                l = (ct.get(this, "events") || {})[t.type] || [],
                h = X.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, t)) {
                for (r = X.event.handlers.call(this, t, l), e = 0;
                    (n = r[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = n.elem, i = 0;
                        (o = n.handlers[i++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, void 0 !== (s = ((X.event.special[o.origType] || {}).handle || o.handler).apply(n.elem, a)) && !1 === (t.result = s) && (t.preventDefault(), t.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var i, s, n, o, r = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l !== this; l = l.parentNode || this)
                    if (!0 !== l.disabled || "click" !== t.type) {
                        for (s = [], i = 0; a > i; i++) o = e[i], n = o.selector + " ", void 0 === s[n] && (s[n] = o.needsContext ? X(n, this).index(l) >= 0 : X.find(n, this, null, [l]).length), s[n] && s.push(o);
                        s.length && r.push({ elem: l, handlers: s })
                    }
            return a < e.length && r.push({ elem: this, handlers: e.slice(a) }), r
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(t, e) { return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t } },
        mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(t, e) { var i, s, n, o = e.button; return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || U, s = i.documentElement, n = i.body, t.pageX = e.clientX + (s && s.scrollLeft || n && n.scrollLeft || 0) - (s && s.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || n && n.scrollTop || 0) - (s && s.clientTop || n && n.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t } },
        fix: function(t) {
            if (t[X.expando]) return t;
            var e, i, s, n = t.type,
                o = t,
                r = this.fixHooks[n];
            for (r || (this.fixHooks[n] = r = yt.test(n) ? this.mouseHooks : bt.test(n) ? this.keyHooks : {}), s = r.props ? this.props.concat(r.props) : this.props, t = new X.Event(o), e = s.length; e--;) i = s[e], t[i] = o[i];
            return t.target || (t.target = U), 3 === t.target.nodeType && (t.target = t.target.parentNode), r.filter ? r.filter(t, o) : t
        },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { return this !== c() && this.focus ? (this.focus(), !1) : void 0 }, delegateType: "focusin" }, blur: { trigger: function() { return this === c() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return "checkbox" === this.type && this.click && X.nodeName(this, "input") ? (this.click(), !1) : void 0 }, _default: function(t) { return X.nodeName(t.target, "a") } }, beforeunload: { postDispatch: function(t) { void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result) } } },
        simulate: function(t, e, i, s) {
            var n = X.extend(new X.Event, i, { type: t, isSimulated: !0, originalEvent: {} });
            s ? X.event.trigger(n, null, e) : X.event.dispatch.call(e, n), n.isDefaultPrevented() && i.preventDefault()
        }
    }, X.removeEvent = function(t, e, i) { t.removeEventListener && t.removeEventListener(e, i, !1) }, X.Event = function(t, e) { return this instanceof X.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? l : h) : this.type = t, e && X.extend(this, e), this.timeStamp = t && t.timeStamp || X.now(), void(this[X.expando] = !0)) : new X.Event(t, e) }, X.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = l, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = l, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = l, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, X.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(t, e) {
        X.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, s = t.relatedTarget,
                    n = t.handleObj;
                return (!s || s !== this && !X.contains(this, s)) && (t.type = n.origType, i = n.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), Y.focusinBubbles || X.each({ focus: "focusin", blur: "focusout" }, function(t, e) {
        var i = function(t) { X.event.simulate(e, t.target, X.event.fix(t), !0) };
        X.event.special[e] = {
            setup: function() {
                var s = this.ownerDocument || this,
                    n = ct.access(s, e);
                n || s.addEventListener(t, i, !0), ct.access(s, e, (n || 0) + 1)
            },
            teardown: function() {
                var s = this.ownerDocument || this,
                    n = ct.access(s, e) - 1;
                n ? ct.access(s, e, n) : (s.removeEventListener(t, i, !0), ct.remove(s, e))
            }
        }
    }), X.fn.extend({
        on: function(t, e, i, s, n) {
            var o, r;
            if ("object" == typeof t) { "string" != typeof e && (i = i || e, e = void 0); for (r in t) this.on(r, e, i, t[r], n); return this }
            if (null == i && null == s ? (s = e, i = e = void 0) : null == s && ("string" == typeof e ? (s = i, i = void 0) : (s = i, i = e, e = void 0)), !1 === s) s = h;
            else if (!s) return this;
            return 1 === n && (o = s, s = function(t) { return X().off(t), o.apply(this, arguments) }, s.guid = o.guid || (o.guid = X.guid++)), this.each(function() { X.event.add(this, t, s, i, e) })
        },
        one: function(t, e, i, s) { return this.on(t, e, i, s, 1) },
        off: function(t, e, i) { var s, n; if (t && t.preventDefault && t.handleObj) return s = t.handleObj, X(t.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler), this; if ("object" == typeof t) { for (n in t) this.off(n, e, t[n]); return this } return (!1 === e || "function" == typeof e) && (i = e, e = void 0), !1 === i && (i = h), this.each(function() { X.event.remove(this, t, i, e) }) },
        trigger: function(t, e) { return this.each(function() { X.event.trigger(t, e, this) }) },
        triggerHandler: function(t, e) { var i = this[0]; return i ? X.event.trigger(t, e, i, !0) : void 0 }
    });
    var Ct = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        kt = /<([\w:]+)/,
        Tt = /<|&#?\w+;/,
        St = /<(?:script|style|link)/i,
        Dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        It = /^$|\/(?:java|ecma)script/i,
        Et = /^true\/(.*)/,
        Pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        At = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, X.extend({
        clone: function(t, e, i) {
            var s, n, o, r, a = t.cloneNode(!0),
                l = X.contains(t.ownerDocument, t);
            if (!(Y.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || X.isXMLDoc(t)))
                for (r = g(a), o = g(t), s = 0, n = o.length; n > s; s++) v(o[s], r[s]);
            if (e)
                if (i)
                    for (o = o || g(t), r = r || g(a), s = 0, n = o.length; n > s; s++) m(o[s], r[s]);
                else m(t, a);
            return (r = g(a, "script")).length > 0 && f(r, !l && g(t, "script")), a
        },
        buildFragment: function(t, e, i, s) {
            for (var n, o, r, a, l, h, c = e.createDocumentFragment(), u = [], d = 0, p = t.length; p > d; d++)
                if ((n = t[d]) || 0 === n)
                    if ("object" === X.type(n)) X.merge(u, n.nodeType ? [n] : n);
                    else if (Tt.test(n)) {
                for (o = o || c.appendChild(e.createElement("div")), r = (kt.exec(n) || ["", ""])[1].toLowerCase(), a = At[r] || At._default, o.innerHTML = a[1] + n.replace(Ct, "<$1></$2>") + a[2], h = a[0]; h--;) o = o.lastChild;
                X.merge(u, o.childNodes), (o = c.firstChild).textContent = ""
            } else u.push(e.createTextNode(n));
            for (c.textContent = "", d = 0; n = u[d++];)
                if ((!s || -1 === X.inArray(n, s)) && (l = X.contains(n.ownerDocument, n), o = g(c.appendChild(n), "script"), l && f(o), i))
                    for (h = 0; n = o[h++];) It.test(n.type || "") && i.push(n);
            return c
        },
        cleanData: function(t) {
            for (var e, i, s, n, o = X.event.special, r = 0; void 0 !== (i = t[r]); r++) {
                if (X.acceptData(i) && (n = i[ct.expando]) && (e = ct.cache[n])) {
                    if (e.events)
                        for (s in e.events) o[s] ? X.event.remove(i, s) : X.removeEvent(i, s, e.handle);
                    ct.cache[n] && delete ct.cache[n]
                }
                delete ut.cache[i[ut.expando]]
            }
        }
    }), X.fn.extend({
        text: function(t) {
            return ht(this, function(t) {
                return void 0 === t ? X.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() { return this.domManip(arguments, function(t) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { u(this, t).appendChild(t) } }) },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = u(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() { return this.domManip(arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this) }) },
        after: function() { return this.domManip(arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this.nextSibling) }) },
        remove: function(t, e) { for (var i, s = t ? X.filter(t, this) : this, n = 0; null != (i = s[n]); n++) e || 1 !== i.nodeType || X.cleanData(g(i)), i.parentNode && (e && X.contains(i.ownerDocument, i) && f(g(i, "script")), i.parentNode.removeChild(i)); return this },
        empty: function() { for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (X.cleanData(g(t, !1)), t.textContent = ""); return this },
        clone: function(t, e) { return t = null != t && t, e = null == e ? t : e, this.map(function() { return X.clone(this, t, e) }) },
        html: function(t) {
            return ht(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    s = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !St.test(t) && !At[(kt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Ct, "<$1></$2>");
                    try {
                        for (; s > i; i++) 1 === (e = this[i] || {}).nodeType && (X.cleanData(g(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() { var t = arguments[0]; return this.domManip(arguments, function(e) { t = this.parentNode, X.cleanData(g(this)), t && t.replaceChild(e, this) }), t && (t.length || t.nodeType) ? this : this.remove() },
        detach: function(t) { return this.remove(t, !0) },
        domManip: function(t, e) {
            t = W.apply([], t);
            var i, s, n, o, r, a, l = 0,
                h = this.length,
                c = this,
                u = h - 1,
                f = t[0],
                m = X.isFunction(f);
            if (m || h > 1 && "string" == typeof f && !Y.checkClone && Dt.test(f)) return this.each(function(i) {
                var s = c.eq(i);
                m && (t[0] = f.call(this, i, s.html())), s.domManip(t, e)
            });
            if (h && (i = X.buildFragment(t, this[0].ownerDocument, !1, this), s = i.firstChild, 1 === i.childNodes.length && (i = s), s)) {
                for (o = (n = X.map(g(i, "script"), d)).length; h > l; l++) r = i, l !== u && (r = X.clone(r, !0, !0), o && X.merge(n, g(r, "script"))), e.call(this[l], r, l);
                if (o)
                    for (a = n[n.length - 1].ownerDocument, X.map(n, p), l = 0; o > l; l++) r = n[l], It.test(r.type || "") && !ct.access(r, "globalEval") && X.contains(a, r) && (r.src ? X._evalUrl && X._evalUrl(r.src) : X.globalEval(r.textContent.replace(Pt, "")))
            }
            return this
        }
    }), X.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(t, e) { X.fn[t] = function(t) { for (var i, s = [], n = X(t), o = n.length - 1, r = 0; o >= r; r++) i = r === o ? this : this.clone(!0), X(n[r])[e](i), j.apply(s, i.get()); return this.pushStack(s) } });
    var Mt, $t = {},
        Ot = /^margin/,
        Nt = new RegExp("^(" + ft + ")(?!px)[a-z%]+$", "i"),
        Ht = function(e) { return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null) };
    ! function() {
        function e() {
            r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r.innerHTML = "", n.appendChild(o);
            var e = t.getComputedStyle(r, null);
            i = "1%" !== e.top, s = "4px" === e.width, n.removeChild(o)
        }
        var i, s, n = U.documentElement,
            o = U.createElement("div"),
            r = U.createElement("div");
        r.style && (r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === r.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(r), t.getComputedStyle && X.extend(Y, { pixelPosition: function() { return e(), i }, boxSizingReliable: function() { return null == s && e(), s }, reliableMarginRight: function() { var e, i = r.appendChild(U.createElement("div")); return i.style.cssText = r.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", r.style.width = "1px", n.appendChild(o), e = !parseFloat(t.getComputedStyle(i, null).marginRight), n.removeChild(o), r.removeChild(i), e } }))
    }(), X.swap = function(t, e, i, s) {
        var n, o, r = {};
        for (o in e) r[o] = t.style[o], t.style[o] = e[o];
        n = i.apply(t, s || []);
        for (o in e) t.style[o] = r[o];
        return n
    };
    var Lt = /^(none|table(?!-c[ea]).+)/,
        zt = new RegExp("^(" + ft + ")(.*)$", "i"),
        Wt = new RegExp("^([+-])=(" + ft + ")", "i"),
        jt = { position: "absolute", visibility: "hidden", display: "block" },
        Rt = { letterSpacing: "0", fontWeight: "400" },
        Ft = ["Webkit", "O", "Moz", "ms"];
    X.extend({
        cssHooks: { opacity: { get: function(t, e) { if (e) { var i = y(t, "opacity"); return "" === i ? "1" : i } } } },
        cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { float: "cssFloat" },
        style: function(t, e, i, s) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var n, o, r, a = X.camelCase(e),
                    l = t.style;
                return e = X.cssProps[a] || (X.cssProps[a] = x(l, a)), r = X.cssHooks[e] || X.cssHooks[a], void 0 === i ? r && "get" in r && void 0 !== (n = r.get(t, !1, s)) ? n : l[e] : ("string" === (o = typeof i) && (n = Wt.exec(i)) && (i = (n[1] + 1) * n[2] + parseFloat(X.css(t, e)), o = "number"), void(null != i && i == i && ("number" !== o || X.cssNumber[a] || (i += "px"), Y.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, s)) || (l[e] = i))))
            }
        },
        css: function(t, e, i, s) { var n, o, r, a = X.camelCase(e); return e = X.cssProps[a] || (X.cssProps[a] = x(t.style, a)), (r = X.cssHooks[e] || X.cssHooks[a]) && "get" in r && (n = r.get(t, !0, i)), void 0 === n && (n = y(t, e, s)), "normal" === n && e in Rt && (n = Rt[e]), "" === i || i ? (o = parseFloat(n), !0 === i || X.isNumeric(o) ? o || 0 : n) : n }
    }), X.each(["height", "width"], function(t, e) { X.cssHooks[e] = { get: function(t, i, s) { return i ? Lt.test(X.css(t, "display")) && 0 === t.offsetWidth ? X.swap(t, jt, function() { return T(t, e, s) }) : T(t, e, s) : void 0 }, set: function(t, i, s) { var n = s && Ht(t); return C(0, i, s ? k(t, e, s, "border-box" === X.css(t, "boxSizing", !1, n), n) : 0) } } }), X.cssHooks.marginRight = w(Y.reliableMarginRight, function(t, e) { return e ? X.swap(t, { display: "inline-block" }, y, [t, "marginRight"]) : void 0 }), X.each({ margin: "", padding: "", border: "Width" }, function(t, e) { X.cssHooks[t + e] = { expand: function(i) { for (var s = 0, n = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > s; s++) n[t + mt[s] + e] = o[s] || o[s - 2] || o[0]; return n } }, Ot.test(t) || (X.cssHooks[t + e].set = C) }), X.fn.extend({
        css: function(t, e) {
            return ht(this, function(t, e, i) {
                var s, n, o = {},
                    r = 0;
                if (X.isArray(e)) { for (s = Ht(t), n = e.length; n > r; r++) o[e[r]] = X.css(t, e[r], !1, s); return o }
                return void 0 !== i ? X.style(t, e, i) : X.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() { return S(this, !0) },
        hide: function() { return S(this) },
        toggle: function(t) { return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() { gt(this) ? X(this).show() : X(this).hide() }) }
    }), X.Tween = D, (D.prototype = { constructor: D, init: function(t, e, i, s, n, o) { this.elem = t, this.prop = i, this.easing = n || "swing", this.options = e, this.start = this.now = this.cur(), this.end = s, this.unit = o || (X.cssNumber[i] ? "" : "px") }, cur: function() { var t = D.propHooks[this.prop]; return t && t.get ? t.get(this) : D.propHooks._default.get(this) }, run: function(t) { var e, i = D.propHooks[this.prop]; return this.options.duration ? this.pos = e = X.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : D.propHooks._default.set(this), this } }).init.prototype = D.prototype, (D.propHooks = { _default: { get: function(t) { var e; return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = X.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 : t.elem[t.prop] }, set: function(t) { X.fx.step[t.prop] ? X.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[X.cssProps[t.prop]] || X.cssHooks[t.prop]) ? X.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now } } }).scrollTop = D.propHooks.scrollLeft = { set: function(t) { t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now) } }, X.easing = { linear: function(t) { return t }, swing: function(t) { return .5 - Math.cos(t * Math.PI) / 2 } }, X.fx = D.prototype.init, X.fx.step = {};
    var qt, Bt, Yt = /^(?:toggle|show|hide)$/,
        Ut = new RegExp("^(?:([+-])=|)(" + ft + ")([a-z%]*)$", "i"),
        Xt = /queueHooks$/,
        Vt = [function(t, e, i) {
            var s, n, o, r, a, l, h, c = this,
                u = {},
                d = t.style,
                p = t.nodeType && gt(t),
                f = ct.get(t, "fxshow");
            i.queue || (null == (a = X._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() { a.unqueued || l() }), a.unqueued++, c.always(function() { c.always(function() { a.unqueued--, X.queue(t, "fx").length || a.empty.fire() }) })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ("none" === (h = X.css(t, "display")) ? ct.get(t, "olddisplay") || b(t.nodeName) : h) && "none" === X.css(t, "float") && (d.display = "inline-block")), i.overflow && (d.overflow = "hidden", c.always(function() { d.overflow = i.overflow[0], d.overflowX = i.overflow[1], d.overflowY = i.overflow[2] }));
            for (s in e)
                if (n = e[s], Yt.exec(n)) {
                    if (delete e[s], o = o || "toggle" === n, n === (p ? "hide" : "show")) {
                        if ("show" !== n || !f || void 0 === f[s]) continue;
                        p = !0
                    }
                    u[s] = f && f[s] || X.style(t, s)
                } else h = void 0;
            if (X.isEmptyObject(u)) "inline" === ("none" === h ? b(t.nodeName) : h) && (d.display = h);
            else {
                f ? "hidden" in f && (p = f.hidden) : f = ct.access(t, "fxshow", {}), o && (f.hidden = !p), p ? X(t).show() : c.done(function() { X(t).hide() }), c.done(function() {
                    var e;
                    ct.remove(t, "fxshow");
                    for (e in u) X.style(t, e, u[e])
                });
                for (s in u) r = P(p ? f[s] : 0, s, c), s in f || (f[s] = r.start, p && (r.end = r.start, r.start = "width" === s || "height" === s ? 1 : 0))
            }
        }],
        Kt = {
            "*": [function(t, e) {
                var i = this.createTween(t, e),
                    s = i.cur(),
                    n = Ut.exec(e),
                    o = n && n[3] || (X.cssNumber[t] ? "" : "px"),
                    r = (X.cssNumber[t] || "px" !== o && +s) && Ut.exec(X.css(i.elem, t)),
                    a = 1,
                    l = 20;
                if (r && r[3] !== o) {
                    o = o || r[3], n = n || [], r = +s || 1;
                    do { a = a || ".5", r /= a, X.style(i.elem, t, r + o) } while (a !== (a = i.cur() / s) && 1 !== a && --l)
                }
                return n && (r = i.start = +r || +s || 0, i.unit = o, i.end = n[1] ? r + (n[1] + 1) * n[2] : +n[2]), i
            }]
        };
    X.Animation = X.extend(A, { tweener: function(t, e) { X.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" "); for (var i, s = 0, n = t.length; n > s; s++) i = t[s], Kt[i] = Kt[i] || [], Kt[i].unshift(e) }, prefilter: function(t, e) { e ? Vt.unshift(t) : Vt.push(t) } }), X.speed = function(t, e, i) { var s = t && "object" == typeof t ? X.extend({}, t) : { complete: i || !i && e || X.isFunction(t) && t, duration: t, easing: i && e || e && !X.isFunction(e) && e }; return s.duration = X.fx.off ? 0 : "number" == typeof s.duration ? s.duration : s.duration in X.fx.speeds ? X.fx.speeds[s.duration] : X.fx.speeds._default, (null == s.queue || !0 === s.queue) && (s.queue = "fx"), s.old = s.complete, s.complete = function() { X.isFunction(s.old) && s.old.call(this), s.queue && X.dequeue(this, s.queue) }, s }, X.fn.extend({
            fadeTo: function(t, e, i, s) { return this.filter(gt).css("opacity", 0).show().end().animate({ opacity: e }, t, i, s) },
            animate: function(t, e, i, s) {
                var n = X.isEmptyObject(t),
                    o = X.speed(e, i, s),
                    r = function() {
                        var e = A(this, X.extend({}, t), o);
                        (n || ct.get(this, "finish")) && e.stop(!0)
                    };
                return r.finish = r, n || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
            },
            stop: function(t, e, i) {
                var s = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        n = null != t && t + "queueHooks",
                        o = X.timers,
                        r = ct.get(this);
                    if (n) r[n] && r[n].stop && s(r[n]);
                    else
                        for (n in r) r[n] && r[n].stop && Xt.test(n) && s(r[n]);
                    for (n = o.length; n--;) o[n].elem !== this || null != t && o[n].queue !== t || (o[n].anim.stop(i), e = !1, o.splice(n, 1));
                    (e || !i) && X.dequeue(this, t)
                })
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"), this.each(function() {
                    var e, i = ct.get(this),
                        s = i[t + "queue"],
                        n = i[t + "queueHooks"],
                        o = X.timers,
                        r = s ? s.length : 0;
                    for (i.finish = !0, X.queue(this, t, []), n && n.stop && n.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; r > e; e++) s[e] && s[e].finish && s[e].finish.call(this);
                    delete i.finish
                })
            }
        }), X.each(["toggle", "show", "hide"], function(t, e) {
            var i = X.fn[e];
            X.fn[e] = function(t, s, n) { return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(E(e, !0), t, s, n) }
        }), X.each({ slideDown: E("show"), slideUp: E("hide"), slideToggle: E("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(t, e) { X.fn[t] = function(t, i, s) { return this.animate(e, t, i, s) } }), X.timers = [], X.fx.tick = function() {
            var t, e = 0,
                i = X.timers;
            for (qt = X.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
            i.length || X.fx.stop(), qt = void 0
        }, X.fx.timer = function(t) { X.timers.push(t), t() ? X.fx.start() : X.timers.pop() }, X.fx.interval = 13, X.fx.start = function() { Bt || (Bt = setInterval(X.fx.tick, X.fx.interval)) }, X.fx.stop = function() { clearInterval(Bt), Bt = null }, X.fx.speeds = { slow: 600, fast: 200, _default: 400 }, X.fn.delay = function(t, e) {
            return t = X.fx ? X.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                var s = setTimeout(e, t);
                i.stop = function() { clearTimeout(s) }
            })
        },
        function() {
            var t = U.createElement("input"),
                e = U.createElement("select"),
                i = e.appendChild(U.createElement("option"));
            t.type = "checkbox", Y.checkOn = "" !== t.value, Y.optSelected = i.selected, e.disabled = !0, Y.optDisabled = !i.disabled, (t = U.createElement("input")).value = "t", t.type = "radio", Y.radioValue = "t" === t.value
        }();
    var Qt, Gt = X.expr.attrHandle;
    X.fn.extend({ attr: function(t, e) { return ht(this, X.attr, t, e, arguments.length > 1) }, removeAttr: function(t) { return this.each(function() { X.removeAttr(this, t) }) } }), X.extend({
        attr: function(t, e, i) { var s, n, o = t.nodeType; if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === _t ? X.prop(t, e, i) : (1 === o && X.isXMLDoc(t) || (e = e.toLowerCase(), s = X.attrHooks[e] || (X.expr.match.bool.test(e) ? Qt : void 0)), void 0 === i ? s && "get" in s && null !== (n = s.get(t, e)) ? n : null == (n = X.find.attr(t, e)) ? void 0 : n : null !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : void X.removeAttr(t, e)) },
        removeAttr: function(t, e) {
            var i, s, n = 0,
                o = e && e.match(rt);
            if (o && 1 === t.nodeType)
                for (; i = o[n++];) s = X.propFix[i] || i, X.expr.match.bool.test(i) && (t[s] = !1), t.removeAttribute(i)
        },
        attrHooks: { type: { set: function(t, e) { if (!Y.radioValue && "radio" === e && X.nodeName(t, "input")) { var i = t.value; return t.setAttribute("type", e), i && (t.value = i), e } } } }
    }), Qt = { set: function(t, e, i) { return !1 === e ? X.removeAttr(t, i) : t.setAttribute(i, i), i } }, X.each(X.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = Gt[e] || X.find.attr;
        Gt[e] = function(t, e, s) { var n, o; return s || (o = Gt[e], Gt[e] = n, n = null != i(t, e, s) ? e.toLowerCase() : null, Gt[e] = o), n }
    });
    var Zt = /^(?:input|select|textarea|button)$/i;
    X.fn.extend({ prop: function(t, e) { return ht(this, X.prop, t, e, arguments.length > 1) }, removeProp: function(t) { return this.each(function() { delete this[X.propFix[t] || t] }) } }), X.extend({ propFix: { for: "htmlFor", class: "className" }, prop: function(t, e, i) { var s, n, o = t.nodeType; if (t && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !X.isXMLDoc(t)) && (e = X.propFix[e] || e, n = X.propHooks[e]), void 0 !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : t[e] = i : n && "get" in n && null !== (s = n.get(t, e)) ? s : t[e] }, propHooks: { tabIndex: { get: function(t) { return t.hasAttribute("tabindex") || Zt.test(t.nodeName) || t.href ? t.tabIndex : -1 } } } }), Y.optSelected || (X.propHooks.selected = { get: function(t) { var e = t.parentNode; return e && e.parentNode && e.parentNode.selectedIndex, null } }), X.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { X.propFix[this.toLowerCase()] = this });
    var Jt = /[\t\r\n\f]/g;
    X.fn.extend({
        addClass: function(t) {
            var e, i, s, n, o, r, a = "string" == typeof t && t,
                l = 0,
                h = this.length;
            if (X.isFunction(t)) return this.each(function(e) { X(this).addClass(t.call(this, e, this.className)) });
            if (a)
                for (e = (t || "").match(rt) || []; h > l; l++)
                    if (i = this[l], s = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Jt, " ") : " ")) {
                        for (o = 0; n = e[o++];) s.indexOf(" " + n + " ") < 0 && (s += n + " ");
                        r = X.trim(s), i.className !== r && (i.className = r)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, s, n, o, r, a = 0 === arguments.length || "string" == typeof t && t,
                l = 0,
                h = this.length;
            if (X.isFunction(t)) return this.each(function(e) { X(this).removeClass(t.call(this, e, this.className)) });
            if (a)
                for (e = (t || "").match(rt) || []; h > l; l++)
                    if (i = this[l], s = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Jt, " ") : "")) {
                        for (o = 0; n = e[o++];)
                            for (; s.indexOf(" " + n + " ") >= 0;) s = s.replace(" " + n + " ", " ");
                        r = t ? X.trim(s) : "", i.className !== r && (i.className = r)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(X.isFunction(t) ? function(i) { X(this).toggleClass(t.call(this, i, this.className, e), e) } : function() {
                if ("string" === i)
                    for (var e, s = 0, n = X(this), o = t.match(rt) || []; e = o[s++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else(i === _t || "boolean" === i) && (this.className && ct.set(this, "__className__", this.className), this.className = this.className || !1 === t ? "" : ct.get(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, s = this.length; s > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Jt, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    });
    var te = /\r/g;
    X.fn.extend({
        val: function(t) {
            var e, i, s, n = this[0];
            return arguments.length ? (s = X.isFunction(t), this.each(function(i) {
                var n;
                1 === this.nodeType && (null == (n = s ? t.call(this, i, X(this).val()) : t) ? n = "" : "number" == typeof n ? n += "" : X.isArray(n) && (n = X.map(n, function(t) { return null == t ? "" : t + "" })), (e = X.valHooks[this.type] || X.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, n, "value") || (this.value = n))
            })) : n ? (e = X.valHooks[n.type] || X.valHooks[n.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(n, "value")) ? i : "string" == typeof(i = n.value) ? i.replace(te, "") : null == i ? "" : i : void 0
        }
    }), X.extend({
        valHooks: {
            option: { get: function(t) { var e = X.find.attr(t, "value"); return null != e ? e : X.trim(X.text(t)) } },
            select: {
                get: function(t) {
                    for (var e, i, s = t.options, n = t.selectedIndex, o = "select-one" === t.type || 0 > n, r = o ? null : [], a = o ? n + 1 : s.length, l = 0 > n ? a : o ? n : 0; a > l; l++)
                        if (!(!(i = s[l]).selected && l !== n || (Y.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && X.nodeName(i.parentNode, "optgroup"))) {
                            if (e = X(i).val(), o) return e;
                            r.push(e)
                        }
                    return r
                },
                set: function(t, e) { for (var i, s, n = t.options, o = X.makeArray(e), r = n.length; r--;) s = n[r], (s.selected = X.inArray(s.value, o) >= 0) && (i = !0); return i || (t.selectedIndex = -1), o }
            }
        }
    }), X.each(["radio", "checkbox"], function() { X.valHooks[this] = { set: function(t, e) { return X.isArray(e) ? t.checked = X.inArray(X(t).val(), e) >= 0 : void 0 } }, Y.checkOn || (X.valHooks[this].get = function(t) { return null === t.getAttribute("value") ? "on" : t.value }) }), X.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) { X.fn[e] = function(t, i) { return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e) } }), X.fn.extend({ hover: function(t, e) { return this.mouseenter(t).mouseleave(e || t) }, bind: function(t, e, i) { return this.on(t, null, e, i) }, unbind: function(t, e) { return this.off(t, null, e) }, delegate: function(t, e, i, s) { return this.on(e, t, i, s) }, undelegate: function(t, e, i) { return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i) } });
    var ee = X.now(),
        ie = /\?/;
    X.parseJSON = function(t) { return JSON.parse(t + "") }, X.parseXML = function(t) { var e, i; if (!t || "string" != typeof t) return null; try { i = new DOMParser, e = i.parseFromString(t, "text/xml") } catch (t) { e = void 0 } return (!e || e.getElementsByTagName("parsererror").length) && X.error("Invalid XML: " + t), e };
    var se = /#.*$/,
        ne = /([?&])_=[^&]*/,
        oe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        re = /^(?:GET|HEAD)$/,
        ae = /^\/\//,
        le = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        he = {},
        ce = {},
        ue = "*/".concat("*"),
        de = t.location.href,
        pe = le.exec(de.toLowerCase()) || [];
    X.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: de, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pe[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": ue, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": X.parseJSON, "text xml": X.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(t, e) { return e ? O(O(t, X.ajaxSettings), e) : O(X.ajaxSettings, t) },
        ajaxPrefilter: M(he),
        ajaxTransport: M(ce),
        ajax: function(t, e) {
            function i(t, e, i, r) {
                var l, c, v, _, y, x = e;
                2 !== b && (b = 2, a && clearTimeout(a), s = void 0, o = r || "", w.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, i && (_ = function(t, e, i) {
                    for (var s, n, o, r, a = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (s)
                        for (n in a)
                            if (a[n] && a[n].test(s)) { l.unshift(n); break }
                    if (l[0] in i) o = l[0];
                    else {
                        for (n in i) {
                            if (!l[0] || t.converters[n + " " + l[0]]) { o = n; break }
                            r || (r = n)
                        }
                        o = o || r
                    }
                    return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
                }(u, w, i)), _ = function(t, e, i, s) {
                    var n, o, r, a, l, h = {},
                        c = t.dataTypes.slice();
                    if (c[1])
                        for (r in t.converters) h[r.toLowerCase()] = t.converters[r];
                    for (o = c.shift(); o;)
                        if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && s && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(r = h[l + " " + o] || h["* " + o]))
                            for (n in h)
                                if ((a = n.split(" "))[1] === o && (r = h[l + " " + a[0]] || h["* " + a[0]])) {!0 === r ? r = h[n] : !0 !== h[n] && (o = a[0], c.unshift(a[1])); break }
                        if (!0 !== r)
                            if (r && t.throws) e = r(e);
                            else try { e = r(e) } catch (t) { return { state: "parsererror", error: r ? t : "No conversion from " + l + " to " + o } }
                    }
                    return { state: "success", data: e }
                }(u, _, w, l), l ? (u.ifModified && ((y = w.getResponseHeader("Last-Modified")) && (X.lastModified[n] = y), (y = w.getResponseHeader("etag")) && (X.etag[n] = y)), 204 === t || "HEAD" === u.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = _.state, c = _.data, v = _.error, l = !v)) : (v = x, (t || !x) && (x = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || x) + "", l ? f.resolveWith(d, [c, x, w]) : f.rejectWith(d, [w, x, v]), w.statusCode(g), g = void 0, h && p.trigger(l ? "ajaxSuccess" : "ajaxError", [w, u, l ? c : v]), m.fireWith(d, [w, x]), h && (p.trigger("ajaxComplete", [w, u]), --X.active || X.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var s, n, o, r, a, l, h, c, u = X.ajaxSetup({}, e),
                d = u.context || u,
                p = u.context && (d.nodeType || d.jquery) ? X(d) : X.event,
                f = X.Deferred(),
                m = X.Callbacks("once memory"),
                g = u.statusCode || {},
                v = {},
                _ = {},
                b = 0,
                y = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === b) {
                            if (!r)
                                for (r = {}; e = oe.exec(o);) r[e[1].toLowerCase()] = e[2];
                            e = r[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() { return 2 === b ? o : null },
                    setRequestHeader: function(t, e) { var i = t.toLowerCase(); return b || (t = _[i] = _[i] || t, v[t] = e), this },
                    overrideMimeType: function(t) { return b || (u.mimeType = t), this },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > b)
                                for (e in t) g[e] = [g[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function(t) { var e = t || y; return s && s.abort(e), i(0, e), this }
                };
            if (f.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, u.url = ((t || u.url || de) + "").replace(se, "").replace(ae, pe[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = X.trim(u.dataType || "*").toLowerCase().match(rt) || [""], null == u.crossDomain && (l = le.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] === pe[1] && l[2] === pe[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (pe[3] || ("http:" === pe[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = X.param(u.data, u.traditional)), $(he, u, e, w), 2 === b) return w;
            (h = X.event && u.global) && 0 == X.active++ && X.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !re.test(u.type), n = u.url, u.hasContent || (u.data && (n = u.url += (ie.test(n) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (u.url = ne.test(n) ? n.replace(ne, "$1_=" + ee++) : n + (ie.test(n) ? "&" : "?") + "_=" + ee++)), u.ifModified && (X.lastModified[n] && w.setRequestHeader("If-Modified-Since", X.lastModified[n]), X.etag[n] && w.setRequestHeader("If-None-Match", X.etag[n])), (u.data && u.hasContent && !1 !== u.contentType || e.contentType) && w.setRequestHeader("Content-Type", u.contentType), w.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + ue + "; q=0.01" : "") : u.accepts["*"]);
            for (c in u.headers) w.setRequestHeader(c, u.headers[c]);
            if (u.beforeSend && (!1 === u.beforeSend.call(d, w, u) || 2 === b)) return w.abort();
            y = "abort";
            for (c in { success: 1, error: 1, complete: 1 }) w[c](u[c]);
            if (s = $(ce, u, e, w)) {
                w.readyState = 1, h && p.trigger("ajaxSend", [w, u]), u.async && u.timeout > 0 && (a = setTimeout(function() { w.abort("timeout") }, u.timeout));
                try { b = 1, s.send(v, i) } catch (t) {
                    if (!(2 > b)) throw t;
                    i(-1, t)
                }
            } else i(-1, "No Transport");
            return w
        },
        getJSON: function(t, e, i) { return X.get(t, e, i, "json") },
        getScript: function(t, e) { return X.get(t, void 0, e, "script") }
    }), X.each(["get", "post"], function(t, e) { X[e] = function(t, i, s, n) { return X.isFunction(i) && (n = n || s, s = i, i = void 0), X.ajax({ url: t, type: e, dataType: n, data: i, success: s }) } }), X._evalUrl = function(t) { return X.ajax({ url: t, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 }) }, X.fn.extend({
        wrapAll: function(t) { var e; return X.isFunction(t) ? this.each(function(e) { X(this).wrapAll(t.call(this, e)) }) : (this[0] && (e = X(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() { for (var t = this; t.firstElementChild;) t = t.firstElementChild; return t }).append(this)), this) },
        wrapInner: function(t) {
            return this.each(X.isFunction(t) ? function(e) { X(this).wrapInner(t.call(this, e)) } : function() {
                var e = X(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) { var e = X.isFunction(t); return this.each(function(i) { X(this).wrapAll(e ? t.call(this, i) : t) }) },
        unwrap: function() { return this.parent().each(function() { X.nodeName(this, "body") || X(this).replaceWith(this.childNodes) }).end() }
    }), X.expr.filters.hidden = function(t) { return t.offsetWidth <= 0 && t.offsetHeight <= 0 }, X.expr.filters.visible = function(t) { return !X.expr.filters.hidden(t) };
    var fe = /%20/g,
        me = /\[\]$/,
        ge = /\r?\n/g,
        ve = /^(?:submit|button|image|reset|file)$/i,
        _e = /^(?:input|select|textarea|keygen)/i;
    X.param = function(t, e) {
        var i, s = [],
            n = function(t, e) { e = X.isFunction(e) ? e() : null == e ? "" : e, s[s.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e) };
        if (void 0 === e && (e = X.ajaxSettings && X.ajaxSettings.traditional), X.isArray(t) || t.jquery && !X.isPlainObject(t)) X.each(t, function() { n(this.name, this.value) });
        else
            for (i in t) N(i, t[i], e, n);
        return s.join("&").replace(fe, "+")
    }, X.fn.extend({ serialize: function() { return X.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var t = X.prop(this, "elements"); return t ? X.makeArray(t) : this }).filter(function() { var t = this.type; return this.name && !X(this).is(":disabled") && _e.test(this.nodeName) && !ve.test(t) && (this.checked || !vt.test(t)) }).map(function(t, e) { var i = X(this).val(); return null == i ? null : X.isArray(i) ? X.map(i, function(t) { return { name: e.name, value: t.replace(ge, "\r\n") } }) : { name: e.name, value: i.replace(ge, "\r\n") } }).get() } }), X.ajaxSettings.xhr = function() { try { return new XMLHttpRequest } catch (t) {} };
    var be = 0,
        ye = {},
        we = { 0: 200, 1223: 204 },
        xe = X.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() { for (var t in ye) ye[t]() }), Y.cors = !!xe && "withCredentials" in xe, Y.ajax = xe = !!xe, X.ajaxTransport(function(t) {
        var e;
        return Y.cors || xe && !t.crossDomain ? {
            send: function(i, s) {
                var n, o = t.xhr(),
                    r = ++be;
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (n in t.xhrFields) o[n] = t.xhrFields[n];
                t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (n in i) o.setRequestHeader(n, i[n]);
                e = function(t) { return function() { e && (delete ye[r], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? s(o.status, o.statusText) : s(we[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? { text: o.responseText } : void 0, o.getAllResponseHeaders())) } }, o.onload = e(), o.onerror = e("error"), e = ye[r] = e("abort");
                try { o.send(t.hasContent && t.data || null) } catch (t) { if (e) throw t }
            },
            abort: function() { e && e() }
        } : void 0
    }), X.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(t) { return X.globalEval(t), t } } }), X.ajaxPrefilter("script", function(t) { void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET") }), X.ajaxTransport("script", function(t) { if (t.crossDomain) { var e, i; return { send: function(s, n) { e = X("<script>").prop({ async: !0, charset: t.scriptCharset, src: t.url }).on("load error", i = function(t) { e.remove(), i = null, t && n("error" === t.type ? 404 : 200, t.type) }), U.head.appendChild(e[0]) }, abort: function() { i && i() } } } });
    var Ce = [],
        ke = /(=)\?(?=&|$)|\?\?/;
    X.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var t = Ce.pop() || X.expando + "_" + ee++; return this[t] = !0, t } }), X.ajaxPrefilter("json jsonp", function(e, i, s) { var n, o, r, a = !1 !== e.jsonp && (ke.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && ke.test(e.data) && "data"); return a || "jsonp" === e.dataTypes[0] ? (n = e.jsonpCallback = X.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ke, "$1" + n) : !1 !== e.jsonp && (e.url += (ie.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function() { return r || X.error(n + " was not called"), r[0] }, e.dataTypes[0] = "json", o = t[n], t[n] = function() { r = arguments }, s.always(function() { t[n] = o, e[n] && (e.jsonpCallback = i.jsonpCallback, Ce.push(n)), r && X.isFunction(o) && o(r[0]), r = o = void 0 }), "script") : void 0 }), X.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || U;
        var s = tt.exec(t),
            n = !i && [];
        return s ? [e.createElement(s[1])] : (s = X.buildFragment([t], e, n), n && n.length && X(n).remove(), X.merge([], s.childNodes))
    };
    var Te = X.fn.load;
    X.fn.load = function(t, e, i) {
        if ("string" != typeof t && Te) return Te.apply(this, arguments);
        var s, n, o, r = this,
            a = t.indexOf(" ");
        return a >= 0 && (s = X.trim(t.slice(a)), t = t.slice(0, a)), X.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (n = "POST"), r.length > 0 && X.ajax({ url: t, type: n, dataType: "html", data: e }).done(function(t) { o = arguments, r.html(s ? X("<div>").append(X.parseHTML(t)).find(s) : t) }).complete(i && function(t, e) { r.each(i, o || [t.responseText, e, t]) }), this
    }, X.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) { X.fn[e] = function(t) { return this.on(e, t) } }), X.expr.filters.animated = function(t) { return X.grep(X.timers, function(e) { return t === e.elem }).length };
    var Se = t.document.documentElement;
    X.offset = {
        setOffset: function(t, e, i) {
            var s, n, o, r, a, l, h = X.css(t, "position"),
                c = X(t),
                u = {};
            "static" === h && (t.style.position = "relative"), a = c.offset(), o = X.css(t, "top"), l = X.css(t, "left"), ("absolute" === h || "fixed" === h) && (o + l).indexOf("auto") > -1 ? (s = c.position(), r = s.top, n = s.left) : (r = parseFloat(o) || 0, n = parseFloat(l) || 0), X.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (u.top = e.top - a.top + r), null != e.left && (u.left = e.left - a.left + n), "using" in e ? e.using.call(t, u) : c.css(u)
        }
    }, X.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) { X.offset.setOffset(this, t, e) });
            var e, i, s = this[0],
                n = { top: 0, left: 0 },
                o = s && s.ownerDocument;
            return o ? (e = o.documentElement, X.contains(e, s) ? (typeof s.getBoundingClientRect !== _t && (n = s.getBoundingClientRect()), i = H(o), { top: n.top + i.pageYOffset - e.clientTop, left: n.left + i.pageXOffset - e.clientLeft }) : n) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, i = this[0],
                    s = { top: 0, left: 0 };
                return "fixed" === X.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), X.nodeName(t[0], "html") || (s = t.offset()), s.top += X.css(t[0], "borderTopWidth", !0), s.left += X.css(t[0], "borderLeftWidth", !0)), { top: e.top - s.top - X.css(i, "marginTop", !0), left: e.left - s.left - X.css(i, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var t = this.offsetParent || Se; t && !X.nodeName(t, "html") && "static" === X.css(t, "position");) t = t.offsetParent; return t || Se }) }
    }), X.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, i) {
        var s = "pageYOffset" === i;
        X.fn[e] = function(n) { return ht(this, function(e, n, o) { var r = H(e); return void 0 === o ? r ? r[i] : e[n] : void(r ? r.scrollTo(s ? t.pageXOffset : o, s ? o : t.pageYOffset) : e[n] = o) }, e, n, arguments.length, null) }
    }), X.each(["top", "left"], function(t, e) { X.cssHooks[e] = w(Y.pixelPosition, function(t, i) { return i ? (i = y(t, e), Nt.test(i) ? X(t).position()[e] + "px" : i) : void 0 }) }), X.each({ Height: "height", Width: "width" }, function(t, e) {
        X.each({ padding: "inner" + t, content: e, "": "outer" + t }, function(i, s) {
            X.fn[s] = function(s, n) {
                var o = arguments.length && (i || "boolean" != typeof s),
                    r = i || (!0 === s || !0 === n ? "margin" : "border");
                return ht(this, function(e, i, s) { var n; return X.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (n = e.documentElement, Math.max(e.body["scroll" + t], n["scroll" + t], e.body["offset" + t], n["offset" + t], n["client" + t])) : void 0 === s ? X.css(e, i, r) : X.style(e, i, s, r) }, e, o ? s : void 0, o, null)
            }
        })
    }), X.fn.size = function() { return this.length }, X.fn.andSelf = X.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return X });
    var De = t.jQuery,
        Ie = t.$;
    return X.noConflict = function(e) { return t.$ === X && (t.$ = Ie), e && t.jQuery === X && (t.jQuery = De), X }, typeof e === _t && (t.jQuery = t.$ = X), X
}),
function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery) }(function(t) {
    function e() { this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = i(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) }

    function i(e) { var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return e.on("mouseout", i, function() { t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover") }).on("mouseover", i, s) }

    function s() { t.datepicker._isDisabledDatepicker(u.inline ? u.dpDiv.parent()[0] : u.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover")) }

    function n(e, i) { t.extend(e, i); for (var s in i) null == i[s] && (e[s] = i[s]); return e }

    function o(t) {
        return function() {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
        }
    }
    t.ui = t.ui || {}, t.ui.version = "1.12.1";
    var r = 0,
        a = Array.prototype.slice;
    t.cleanData = function(e) {
            return function(i) {
                var s, n, o;
                for (o = 0; null != (n = i[o]); o++) try {
                    (s = t._data(n, "events")) && s.remove && t(n).triggerHandler("remove")
                } catch (t) {}
                e(i)
            }
        }(t.cleanData), t.widget = function(e, i, s) {
            var n, o, r, a = {},
                l = e.split(".")[0],
                h = l + "-" + (e = e.split(".")[1]);
            return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][h.toLowerCase()] = function(e) { return !!t.data(e, h) }, t[l] = t[l] || {}, n = t[l][e], o = t[l][e] = function(t, e) { return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e) }, t.extend(o, n, { version: s.version, _proto: t.extend({}, s), _childConstructors: [] }), r = new i, r.options = t.widget.extend({}, r.options), t.each(s, function(e, s) {
                return t.isFunction(s) ? void(a[e] = function() {
                    function t() { return i.prototype[e].apply(this, arguments) }

                    function n(t) { return i.prototype[e].apply(this, t) }
                    return function() {
                        var e, i = this._super,
                            o = this._superApply;
                        return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e
                    }
                }()) : void(a[e] = s)
            }), o.prototype = t.widget.extend(r, { widgetEventPrefix: n ? r.widgetEventPrefix || e : e }, a, { constructor: o, namespace: l, widgetName: e, widgetFullName: h }), n ? (t.each(n._childConstructors, function(e, i) {
                var s = i.prototype;
                t.widget(s.namespace + "." + s.widgetName, o, i._proto)
            }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
        }, t.widget.extend = function(e) {
            for (var i, s, n = a.call(arguments, 1), o = 0, r = n.length; r > o; o++)
                for (i in n[o]) s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
            return e
        }, t.widget.bridge = function(e, i) {
            var s = i.prototype.widgetFullName || e;
            t.fn[e] = function(n) {
                var o = "string" == typeof n,
                    r = a.call(arguments, 1),
                    l = this;
                return o ? this.length || "instance" !== n ? this.each(function() { var i, o = t.data(this, s); return "instance" === n ? (l = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, r)) !== o && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + n + "'") }) : l = void 0 : (r.length && (n = t.widget.extend.apply(null, [n].concat(r))), this.each(function() {
                    var e = t.data(this, s);
                    e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this))
                })), l
            }
        }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: { classes: {}, disabled: !1, create: null },
            _createWidget: function(e, i) { i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = r++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function(t) { t.target === i && this.destroy() } }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init() },
            _getCreateOptions: function() { return {} },
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function() {
                var e = this;
                this._destroy(), t.each(this.classesElementLookup, function(t, i) { e._removeClass(i, t) }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: t.noop,
            widget: function() { return this.element },
            option: function(e, i) {
                var s, n, o, r = e;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (r = {}, s = e.split("."), e = s.shift(), s.length) {
                        for (n = r[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
                        if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
                        n[e] = i
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                        r[e] = i
                    }
                return this._setOptions(r), this
            },
            _setOptions: function(t) { var e; for (e in t) this._setOption(e, t[e]); return this },
            _setOption: function(t, e) { return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this },
            _setOptionClasses: function(e) { var i, s, n; for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({ element: s, keys: i, classes: e, add: !0 }))) },
            _setOptionDisabled: function(t) { this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus")) },
            enable: function() { return this._setOptions({ disabled: !1 }) },
            disable: function() { return this._setOptions({ disabled: !0 }) },
            _classes: function(e) {
                function i(i, o) { var r, a; for (a = 0; i.length > a; a++) r = n.classesElementLookup[i[a]] || t(), r = t(e.add ? t.unique(r.get().concat(e.element.get())) : r.not(e.element).get()), n.classesElementLookup[i[a]] = r, s.push(i[a]), o && e.classes[i[a]] && s.push(e.classes[i[a]]) }
                var s = [],
                    n = this;
                return e = t.extend({ element: this.element, classes: this.options.classes || {} }, e), this._on(e.element, { remove: "_untrackClassesElement" }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ")
            },
            _untrackClassesElement: function(e) {
                var i = this;
                t.each(i.classesElementLookup, function(s, n) {-1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get())) })
            },
            _removeClass: function(t, e, i) { return this._toggleClass(t, e, i, !1) },
            _addClass: function(t, e, i) { return this._toggleClass(t, e, i, !0) },
            _toggleClass: function(t, e, i, s) {
                s = "boolean" == typeof s ? s : i;
                var n = "string" == typeof t || null === t,
                    o = { extra: n ? e : i, keys: n ? t : e, element: n ? this.element : t, add: s };
                return o.element.toggleClass(this._classes(o), s), this
            },
            _on: function(e, i, s) {
                var n, o = this;
                "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function(s, r) {
                    function a() { return e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : void 0 }
                    "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                    var l = s.match(/^([\w:-]*)\s*(.*)$/),
                        h = l[1] + o.eventNamespace,
                        c = l[2];
                    c ? n.on(h, c, a) : i.on(h, a)
                })
            },
            _off: function(e, i) { i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get()) },
            _delay: function(t, e) { var i = this; return setTimeout(function() { return ("string" == typeof t ? i[t] : t).apply(i, arguments) }, e || 0) },
            _hoverable: function(e) { this.hoverable = this.hoverable.add(e), this._on(e, { mouseenter: function(e) { this._addClass(t(e.currentTarget), null, "ui-state-hover") }, mouseleave: function(e) { this._removeClass(t(e.currentTarget), null, "ui-state-hover") } }) },
            _focusable: function(e) { this.focusable = this.focusable.add(e), this._on(e, { focusin: function(e) { this._addClass(t(e.currentTarget), null, "ui-state-focus") }, focusout: function(e) { this._removeClass(t(e.currentTarget), null, "ui-state-focus") } }) },
            _trigger: function(e, i, s) {
                var n, o, r = this.options[e];
                if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                    for (n in o) n in i || (i[n] = o[n]);
                return this.element.trigger(i, s), !(t.isFunction(r) && !1 === r.apply(this.element[0], [i].concat(s)) || i.isDefaultPrevented())
            }
        }, t.each({ show: "fadeIn", hide: "fadeOut" }, function(e, i) { t.Widget.prototype["_" + e] = function(s, n, o) { "string" == typeof n && (n = { effect: n }); var r, a = n ? !0 === n || "number" == typeof n ? i : n.effect || i : e; "number" == typeof(n = n || {}) && (n = { duration: n }), r = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), r && t.effects && t.effects.effect[a] ? s[e](n) : a !== e && s[a] ? s[a](n.duration, n.easing, o) : s.queue(function(i) { t(this)[e](), o && o.call(s[0]), i() }) } }), t.widget,
        function() {
            function e(t, e, i) { return [parseFloat(t[0]) * (c.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (c.test(t[1]) ? i / 100 : 1)] }

            function i(e, i) { return parseInt(t.css(e, i), 10) || 0 }
            var s, n = Math.max,
                o = Math.abs,
                r = /left|center|right/,
                a = /top|center|bottom/,
                l = /[\+\-]\d+(\.[\d]+)?%?/,
                h = /^\w+/,
                c = /%$/,
                u = t.fn.position;
            t.position = {
                scrollbarWidth: function() {
                    if (void 0 !== s) return s;
                    var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        o = n.children()[0];
                    return t("body").append(n), e = o.offsetWidth, n.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = n[0].clientWidth), n.remove(), s = e - i
                },
                getScrollInfo: function(e) {
                    var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                        s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                        n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                    return { width: "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0, height: n ? t.position.scrollbarWidth() : 0 }
                },
                getWithinInfo: function(e) {
                    var i = t(e || window),
                        s = t.isWindow(i[0]),
                        n = !!i[0] && 9 === i[0].nodeType;
                    return { element: i, isWindow: s, isDocument: n, offset: !s && !n ? t(e).offset() : { left: 0, top: 0 }, scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: i.outerWidth(), height: i.outerHeight() }
                }
            }, t.fn.position = function(s) {
                if (!s || !s.of) return u.apply(this, arguments);
                s = t.extend({}, s);
                var c, d, p, f, m, g, v = t(s.of),
                    _ = t.position.getWithinInfo(s.within),
                    b = t.position.getScrollInfo(_),
                    y = (s.collision || "flip").split(" "),
                    w = {};
                return g = function(e) { var i = e[0]; return 9 === i.nodeType ? { width: e.width(), height: e.height(), offset: { top: 0, left: 0 } } : t.isWindow(i) ? { width: e.width(), height: e.height(), offset: { top: e.scrollTop(), left: e.scrollLeft() } } : i.preventDefault ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } } : { width: e.outerWidth(), height: e.outerHeight(), offset: e.offset() } }(v), v[0].preventDefault && (s.at = "left top"), d = g.width, p = g.height, f = g.offset, m = t.extend({}, f), t.each(["my", "at"], function() {
                    var t, e, i = (s[this] || "").split(" ");
                    1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : a.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = r.test(i[0]) ? i[0] : "center", i[1] = a.test(i[1]) ? i[1] : "center", t = l.exec(i[0]), e = l.exec(i[1]), w[this] = [t ? t[0] : 0, e ? e[0] : 0], s[this] = [h.exec(i[0])[0], h.exec(i[1])[0]]
                }), 1 === y.length && (y[1] = y[0]), "right" === s.at[0] ? m.left += d : "center" === s.at[0] && (m.left += d / 2), "bottom" === s.at[1] ? m.top += p : "center" === s.at[1] && (m.top += p / 2), c = e(w.at, d, p), m.left += c[0], m.top += c[1], this.each(function() {
                    var r, a, l = t(this),
                        h = l.outerWidth(),
                        u = l.outerHeight(),
                        g = i(this, "marginLeft"),
                        x = i(this, "marginTop"),
                        C = h + g + i(this, "marginRight") + b.width,
                        k = u + x + i(this, "marginBottom") + b.height,
                        T = t.extend({}, m),
                        S = e(w.my, l.outerWidth(), l.outerHeight());
                    "right" === s.my[0] ? T.left -= h : "center" === s.my[0] && (T.left -= h / 2), "bottom" === s.my[1] ? T.top -= u : "center" === s.my[1] && (T.top -= u / 2), T.left += S[0], T.top += S[1], r = { marginLeft: g, marginTop: x }, t.each(["left", "top"], function(e, i) { t.ui.position[y[e]] && t.ui.position[y[e]][i](T, { targetWidth: d, targetHeight: p, elemWidth: h, elemHeight: u, collisionPosition: r, collisionWidth: C, collisionHeight: k, offset: [c[0] + S[0], c[1] + S[1]], my: s.my, at: s.at, within: _, elem: l }) }), s.using && (a = function(t) {
                        var e = f.left - T.left,
                            i = e + d - h,
                            r = f.top - T.top,
                            a = r + p - u,
                            c = { target: { element: v, left: f.left, top: f.top, width: d, height: p }, element: { element: l, left: T.left, top: T.top, width: h, height: u }, horizontal: 0 > i ? "left" : e > 0 ? "right" : "center", vertical: 0 > a ? "top" : r > 0 ? "bottom" : "middle" };
                        h > d && d > o(e + i) && (c.horizontal = "center"), u > p && p > o(r + a) && (c.vertical = "middle"), c.important = n(o(e), o(i)) > n(o(r), o(a)) ? "horizontal" : "vertical", s.using.call(this, t, c)
                    }), l.offset(t.extend(T, { using: a }))
                })
            }, t.ui.position = {
                fit: {
                    left: function(t, e) {
                        var i, s = e.within,
                            o = s.isWindow ? s.scrollLeft : s.offset.left,
                            r = s.width,
                            a = t.left - e.collisionPosition.marginLeft,
                            l = o - a,
                            h = a + e.collisionWidth - r - o;
                        e.collisionWidth > r ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - r - o, t.left += l - i) : t.left = h > 0 && 0 >= l ? o : l > h ? o + r - e.collisionWidth : o : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = n(t.left - a, t.left)
                    },
                    top: function(t, e) {
                        var i, s = e.within,
                            o = s.isWindow ? s.scrollTop : s.offset.top,
                            r = e.within.height,
                            a = t.top - e.collisionPosition.marginTop,
                            l = o - a,
                            h = a + e.collisionHeight - r - o;
                        e.collisionHeight > r ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - r - o, t.top += l - i) : t.top = h > 0 && 0 >= l ? o : l > h ? o + r - e.collisionHeight : o : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = n(t.top - a, t.top)
                    }
                },
                flip: {
                    left: function(t, e) {
                        var i, s, n = e.within,
                            r = n.offset.left + n.scrollLeft,
                            a = n.width,
                            l = n.isWindow ? n.scrollLeft : n.offset.left,
                            h = t.left - e.collisionPosition.marginLeft,
                            c = h - l,
                            u = h + e.collisionWidth - a - l,
                            d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                            p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                            f = -2 * e.offset[0];
                        0 > c ? (0 > (i = t.left + d + p + f + e.collisionWidth - a - r) || o(c) > i) && (t.left += d + p + f) : u > 0 && ((s = t.left - e.collisionPosition.marginLeft + d + p + f - l) > 0 || u > o(s)) && (t.left += d + p + f)
                    },
                    top: function(t, e) {
                        var i, s, n = e.within,
                            r = n.offset.top + n.scrollTop,
                            a = n.height,
                            l = n.isWindow ? n.scrollTop : n.offset.top,
                            h = t.top - e.collisionPosition.marginTop,
                            c = h - l,
                            u = h + e.collisionHeight - a - l,
                            d = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                            p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                            f = -2 * e.offset[1];
                        0 > c ? (0 > (s = t.top + d + p + f + e.collisionHeight - a - r) || o(c) > s) && (t.top += d + p + f) : u > 0 && ((i = t.top - e.collisionPosition.marginTop + d + p + f - l) > 0 || u > o(i)) && (t.top += d + p + f)
                    }
                },
                flipfit: { left: function() { t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments) }, top: function() { t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments) } }
            }
        }(), t.ui.position, t.extend(t.expr[":"], { data: t.expr.createPseudo ? t.expr.createPseudo(function(e) { return function(i) { return !!t.data(i, e) } }) : function(e, i, s) { return !!t.data(e, s[3]) } }), t.fn.extend({ disableSelection: function() { var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"; return function() { return this.on(t + ".ui-disableSelection", function(t) { t.preventDefault() }) } }(), enableSelection: function() { return this.off(".ui-disableSelection") } }), t.ui.focusable = function(e, i) {
            var s, n, o, r, a, l = e.nodeName.toLowerCase();
            return "area" === l ? (s = e.parentNode, n = s.name, !(!e.href || !n || "map" !== s.nodeName.toLowerCase()) && ((o = t("img[usemap='#" + n + "']")).length > 0 && o.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(l) ? (r = !e.disabled) && (a = t(e).closest("fieldset")[0]) && (r = !a.disabled) : r = "a" === l ? e.href || i : i, r && t(e).is(":visible") && function(t) {
                for (var e = t.css("visibility");
                    "inherit" === e;) t = t.parent(), e = t.css("visibility");
                return "hidden" !== e
            }(t(e)))
        }, t.extend(t.expr[":"], { focusable: function(e) { return t.ui.focusable(e, null != t.attr(e, "tabindex")) } }), t.ui.focusable, t.fn.form = function() { return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form) }, t.ui.formResetMixin = {
            _formResetHandler: function() {
                var e = t(this);
                setTimeout(function() {
                    var i = e.data("ui-form-reset-instances");
                    t.each(i, function() { this.refresh() })
                })
            },
            _bindFormResetHandler: function() {
                if (this.form = this.element.form(), this.form.length) {
                    var t = this.form.data("ui-form-reset-instances") || [];
                    t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
                }
            },
            _unbindFormResetHandler: function() {
                if (this.form.length) {
                    var e = this.form.data("ui-form-reset-instances");
                    e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
                }
            }
        }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function(e, i) {
            function s(e, i, s, o) { return t.each(n, function() { i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0) }), i }
            var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                o = i.toLowerCase(),
                r = { innerWidth: t.fn.innerWidth, innerHeight: t.fn.innerHeight, outerWidth: t.fn.outerWidth, outerHeight: t.fn.outerHeight };
            t.fn["inner" + i] = function(e) { return void 0 === e ? r["inner" + i].call(this) : this.each(function() { t(this).css(o, s(this, e) + "px") }) }, t.fn["outer" + i] = function(e, n) { return "number" != typeof e ? r["outer" + i].call(this, e) : this.each(function() { t(this).css(o, s(this, e, !0, n) + "px") }) }
        }), t.fn.addBack = function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }), t.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }, t.ui.escapeSelector = function() { var t = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g; return function(e) { return e.replace(t, "\\$1") } }(), t.fn.labels = function() { var e, i, s, n, o; return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), (s = this.attr("id")) && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), this.pushStack(n)) }, t.fn.scrollParent = function(e) {
            var i = this.css("position"),
                s = "absolute" === i,
                n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                o = this.parents().filter(function() { var e = t(this); return (!s || "static" !== e.css("position")) && n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x")) }).eq(0);
            return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
        }, t.extend(t.expr[":"], {
            tabbable: function(e) {
                var i = t.attr(e, "tabindex"),
                    s = null != i;
                return (!s || i >= 0) && t.ui.focusable(e, s)
            }
        }), t.fn.extend({ uniqueId: function() { var t = 0; return function() { return this.each(function() { this.id || (this.id = "ui-id-" + ++t) }) } }(), removeUniqueId: function() { return this.each(function() { /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id") }) } }), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var l = !1;
    t(document).on("mouseup", function() { l = !1 }), t.widget("ui.mouse", {
        version: "1.12.1",
        options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 },
        _mouseInit: function() {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function(t) { return e._mouseDown(t) }).on("click." + this.widgetName, function(i) { return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0 }), this.started = !1
        },
        _mouseDestroy: function() { this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate) },
        _mouseDown: function(e) {
            if (!l) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var i = this,
                    s = 1 === e.which,
                    n = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                return !(s && !n && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() { i.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) { return i._mouseMove(t) }, this._mouseUpDelegate = function(t) { return i._mouseUp(t) }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), l = !0, !0))
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                if (!e.which)
                    if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich) return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) { this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, l = !1, e.preventDefault() },
        _mouseDistanceMet: function(t) { return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance },
        _mouseDelayMet: function() { return this.mouseDelayMet },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() { return !0 }
    }), t.ui.plugin = {
        add: function(e, i, s) { var n, o = t.ui[e].prototype; for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]]) },
        call: function(t, e, i, s) {
            var n, o = t.plugins[e];
            if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (n = 0; o.length > n; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i)
        }
    }, t.ui.safeActiveElement = function(t) { var e; try { e = t.activeElement } catch (i) { e = t.body } return e || (e = t.body), e.nodeName || (e = t.body), e }, t.ui.safeBlur = function(e) { e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur") }, t.widget("ui.draggable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null },
        _create: function() { "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit() },
        _setOption: function(t, e) { this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName()) },
        _destroy: function() { return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy()) },
        _mouseCapture: function(e) { var i = this.options; return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (this._blurActiveElement(e), this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix), !0)) },
        _blockFrames: function(e) { this.iframeBlocks = this.document.find(e).map(function() { var e = t(this); return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0] }) },
        _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) },
        _blurActiveElement: function(e) {
            var i = t.ui.safeActiveElement(this.document[0]);
            t(e.target).closest(i).length || t.ui.safeBlur(i)
        },
        _mouseStart: function(e) { var i = this.options; return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() { return "fixed" === t(this).css("position") }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0) },
        _refreshOffsets: function(t) { this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() }, this.offset.click = { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top } },
        _mouseDrag: function(e, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (!1 === this._trigger("drag", e, s)) return this._mouseUp(new t.Event("mouseup", e)), !1;
                this.position = s.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function(e) {
            var i = this,
                s = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {!1 !== i._trigger("stop", e) && i._clear() }) : !1 !== this._trigger("stop", e) && this._clear(), !1
        },
        _mouseUp: function(e) { return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e) },
        cancel: function() { return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", { target: this.element[0] })) : this._clear(), this },
        _getHandle: function(e) { return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length },
        _setHandleClassName: function() { this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle") },
        _removeHandleClassName: function() { this._removeClass(this.handleElement, "ui-draggable-handle") },
        _createHelper: function(e) {
            var i = this.options,
                s = t.isFunction(i.helper),
                n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
        },
        _setPositionRelative: function() { /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative") },
        _adjustOffsetFromHelper: function(e) { "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top) },
        _isRootNode: function(t) { return /(html|body)/i.test(t.tagName) || t === this.document[0] },
        _getParentOffset: function() {
            var e = this.offsetParent.offset(),
                i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = { top: 0, left: 0 }), { top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
            var t = this.element.position(),
                e = this._isRootNode(this.scrollParent[0]);
            return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft()) }
        },
        _cacheMargins: function() { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 } },
        _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } },
        _setContainment: function() {
            var e, i, s, n = this.options,
                o = this.document[0];
            return this.relativeContainer = null, n.containment ? "window" === n.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === n.containment ? void(this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : n.containment.constructor === Array ? void(this.containment = n.containment) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), void((s = i[0]) && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
        },
        _convertPositionTo: function(t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1,
                s = this._isRootNode(this.scrollParent[0]);
            return { top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i, left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i }
        },
        _generatePosition: function(t, e) {
            var i, s, n, o, r = this.options,
                a = this._isRootNode(this.scrollParent[0]),
                l = t.pageX,
                h = t.pageY;
            return a && this.offset.scroll || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), r.grid && (n = r.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, h = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - r.grid[1] : n + r.grid[1] : n, o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0] : o), "y" === r.axis && (l = this.originalPageX), "x" === r.axis && (h = this.originalPageY)), { top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top), left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left) }
        },
        _clear: function() { this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy() },
        _trigger: function(e, i, s) { return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s) },
        plugins: {},
        _uiHash: function() { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs } }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i, s) {
            var n = t.extend({}, i, { item: s.element });
            s.sortables = [], t(s.options.connectToSortable).each(function() {
                var i = t(this).sortable("instance");
                i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n))
            })
        },
        stop: function(e, i, s) {
            var n = t.extend({}, i, { item: s.element });
            s.cancelHelperRemoval = !1, t.each(s.sortables, function() { this.isOver ? (this.isOver = 0, s.cancelHelperRemoval = !0, this.cancelHelperRemoval = !1, this._storedCSS = { position: this.placeholder.css("position"), top: this.placeholder.css("top"), left: this.placeholder.css("left") }, this._mouseStop(e), this.options.helper = this.options._helper) : (this.cancelHelperRemoval = !0, this._trigger("deactivate", e, n)) })
        },
        drag: function(e, i, s) {
            t.each(s.sortables, function() {
                var n = !1,
                    o = this;
                o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, function() { return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), n })), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() { return i.helper[0] }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, function() { this.refreshPositions() }), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, function() { this.refreshPositions() }))
            })
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function(e, i, s) {
            var n = t("body"),
                o = s.options;
            n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor)
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._cursor && t("body").css("cursor", n._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i, s) {
            var n = t(i.helper),
                o = s.options;
            n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity)
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._opacity && t(i.helper).css("opacity", n._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function(t, e, i) { i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset()) },
        drag: function(e, i, s) {
            var n = s.options,
                o = !1,
                r = s.scrollParentNotHidden[0],
                a = s.document[0];
            r !== a && "HTML" !== r.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + r.offsetHeight - e.pageY < n.scrollSensitivity ? r.scrollTop = o = r.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (r.scrollTop = o = r.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + r.offsetWidth - e.pageX < n.scrollSensitivity ? r.scrollLeft = o = r.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (r.scrollLeft = o = r.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(a).scrollTop() < n.scrollSensitivity ? o = t(a).scrollTop(t(a).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(a).scrollTop()) < n.scrollSensitivity && (o = t(a).scrollTop(t(a).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(a).scrollLeft() < n.scrollSensitivity ? o = t(a).scrollLeft(t(a).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(a).scrollLeft()) < n.scrollSensitivity && (o = t(a).scrollLeft(t(a).scrollLeft() + n.scrollSpeed)))), !1 !== o && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function(e, i, s) {
            var n = s.options;
            s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                var e = t(this),
                    i = e.offset();
                this !== s.element[0] && s.snapElements.push({ item: this, width: e.outerWidth(), height: e.outerHeight(), top: i.top, left: i.left })
            })
        },
        drag: function(e, i, s) {
            var n, o, r, a, l, h, c, u, d, p, f = s.options,
                m = f.snapTolerance,
                g = i.offset.left,
                v = g + s.helperProportions.width,
                _ = i.offset.top,
                b = _ + s.helperProportions.height;
            for (d = s.snapElements.length - 1; d >= 0; d--) l = s.snapElements[d].left - s.margins.left, h = l + s.snapElements[d].width, c = s.snapElements[d].top - s.margins.top, u = c + s.snapElements[d].height, l - m > v || g > h + m || c - m > b || _ > u + m || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), { snapItem: s.snapElements[d].item })), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(c - b), o = m >= Math.abs(u - _), r = m >= Math.abs(l - v), a = m >= Math.abs(h - g), n && (i.position.top = s._convertPositionTo("relative", { top: c - s.helperProportions.height, left: 0 }).top), o && (i.position.top = s._convertPositionTo("relative", { top: u, left: 0 }).top), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l - s.helperProportions.width }).left), a && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h }).left)), p = n || o || r || a, "outer" !== f.snapMode && (n = m >= Math.abs(c - _), o = m >= Math.abs(u - b), r = m >= Math.abs(l - g), a = m >= Math.abs(h - v), n && (i.position.top = s._convertPositionTo("relative", { top: c, left: 0 }).top), o && (i.position.top = s._convertPositionTo("relative", { top: u - s.helperProportions.height, left: 0 }).top), r && (i.position.left = s._convertPositionTo("relative", { top: 0, left: l }).left), a && (i.position.left = s._convertPositionTo("relative", { top: 0, left: h - s.helperProportions.width }).left)), !s.snapElements[d].snapping && (n || o || r || a || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), { snapItem: s.snapElements[d].item })), s.snapElements[d].snapping = n || o || r || a || p)
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function(e, i, s) {
            var n, o = s.options,
                r = t.makeArray(t(o.stack)).sort(function(e, i) { return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0) });
            r.length && (n = parseInt(t(r[0]).css("zIndex"), 10) || 0, t(r).each(function(e) { t(this).css("zIndex", n + e) }), this.css("zIndex", n + r.length))
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i, s) {
            var n = t(i.helper),
                o = s.options;
            n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex)
        },
        stop: function(e, i, s) {
            var n = s.options;
            n._zIndex && t(i.helper).css("zIndex", n._zIndex)
        }
    }), t.ui.draggable, t.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: { accept: "*", addClasses: !0, greedy: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null },
        _create: function() {
            var e, i = this.options,
                s = i.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function(t) { return t.is(s) }, this.proportions = function() { return arguments.length ? void(e = arguments[0]) : e || (e = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight }) }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function(e) { t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this) },
        _splice: function(t) { for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1) },
        _destroy: function() {
            var e = t.ui.ddmanager.droppables[this.options.scope];
            this._splice(e)
        },
        _setOption: function(e, i) {
            if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) { return t.is(i) };
            else if ("scope" === e) {
                var s = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(s), this._addToManager(i)
            }
            this._super(e, i)
        },
        _activate: function(e) {
            var i = t.ui.ddmanager.current;
            this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
        },
        _out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
        },
        _drop: function(e, i) {
            var s = i || t.ui.ddmanager.current,
                n = !1;
            return !(!s || (s.currentItem || s.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() { var i = t(this).droppable("instance"); return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && h(s, t.extend(i, { offset: i.element.offset() }), i.options.tolerance, e) ? (n = !0, !1) : void 0 }), !n && (!!this.accept.call(this.element[0], s.currentItem || s.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(s)), this.element)))
        },
        ui: function(t) { return { draggable: t.currentItem || t.element, helper: t.helper, position: t.position, offset: t.positionAbs } },
        _addHoverClass: function() { this._addClass("ui-droppable-hover") },
        _removeHoverClass: function() { this._removeClass("ui-droppable-hover") },
        _addActiveClass: function() { this._addClass("ui-droppable-active") },
        _removeActiveClass: function() { this._removeClass("ui-droppable-active") }
    });
    var h = t.ui.intersect = function() {
        function t(t, e, i) { return t >= e && e + i > t }
        return function(e, i, s, n) {
            if (!i.offset) return !1;
            var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                r = (e.positionAbs || e.position.absolute).top + e.margins.top,
                a = o + e.helperProportions.width,
                l = r + e.helperProportions.height,
                h = i.offset.left,
                c = i.offset.top,
                u = h + i.proportions().width,
                d = c + i.proportions().height;
            switch (s) {
                case "fit":
                    return o >= h && u >= a && r >= c && d >= l;
                case "intersect":
                    return o + e.helperProportions.width / 2 > h && u > a - e.helperProportions.width / 2 && r + e.helperProportions.height / 2 > c && d > l - e.helperProportions.height / 2;
                case "pointer":
                    return t(n.pageY, c, i.proportions().height) && t(n.pageX, h, i.proportions().width);
                case "touch":
                    return (r >= c && d >= r || l >= c && d >= l || c > r && l > d) && (o >= h && u >= o || a >= h && u >= a || h > o && a > u);
                default:
                    return !1
            }
        }
    }();
    t.ui.ddmanager = {
        current: null,
        droppables: { default: [] },
        prepareOffsets: function(e, i) {
            var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [],
                r = i ? i.type : null,
                a = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (s = 0; o.length > s; s++)
                if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
                    for (n = 0; a.length > n; n++)
                        if (a[n] === o[s].element[0]) { o[s].proportions().height = 0; continue t }
                    o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === r && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({ width: o[s].element[0].offsetWidth, height: o[s].element[0].offsetHeight }))
                }
        },
        drop: function(e, i) { var s = !1; return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() { this.options && (!this.options.disabled && this.visible && h(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i))) }), s },
        dragStart: function(e, i) { e.element.parentsUntil("body").on("scroll.droppable", function() { e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i) }) },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n, o, r = h(e, this, this.options.tolerance, i),
                        a = !r && this.isover ? "isout" : r && !this.isover ? "isover" : null;
                    a && (this.options.greedy && (n = this.options.scope, (o = this.element.parents(":data(ui-droppable)").filter(function() { return t(this).droppable("instance").options.scope === n })).length && (s = t(o[0]).droppable("instance"), s.greedyChild = "isover" === a)), s && "isover" === a && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[a] = !0, this["isout" === a ? "isover" : "isout"] = !1, this["isover" === a ? "_over" : "_out"].call(this, i), s && "isout" === a && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                }
            })
        },
        dragStop: function(e, i) { e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i) }
    }, !1 !== t.uiBackCompat && t.widget("ui.droppable", t.ui.droppable, { options: { hoverClass: !1, activeClass: !1 }, _addActiveClass: function() { this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass) }, _removeActiveClass: function() { this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass) }, _addHoverClass: function() { this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass) }, _removeHoverClass: function() { this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass) } }), t.ui.droppable, t.widget("ui.resizable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" }, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null },
        _num: function(t) { return parseFloat(t) || 0 },
        _isNumber: function(t) { return !isNaN(parseFloat(t)) },
        _hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                n = !1;
            return e[s] > 0 || (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
        },
        _create: function() {
            var e, i = this.options,
                s = this;
            this._addClass("ui-resizable"), t.extend(this, { _aspectRatio: !!i.aspectRatio, aspectRatio: i.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = { marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom"), marginLeft: this.originalElement.css("marginLeft") }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function() { i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show()) }).on("mouseleave", function() { i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide()) }), this._mouseInit()
        },
        _destroy: function() { this._mouseDestroy(); var e, i = function(e) { t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove() }; return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({ position: e.css("position"), width: e.outerWidth(), height: e.outerHeight(), top: e.css("top"), left: e.css("left") }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this },
        _setOption: function(t, e) {
            switch (this._super(t, e), t) {
                case "handles":
                    this._removeHandles(), this._setupHandles()
            }
        },
        _setupHandles: function() {
            var e, i, s, n, o, r = this.options,
                a = this;
            if (this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), s = this.handles.split(","), this.handles = {}, i = 0; s.length > i; i++) e = t.trim(s[i]), n = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + n), o.css({ zIndex: r.zIndex }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
            this._renderAxis = function(e) {
                var i, s, n, o;
                e = e || this.element;
                for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], { mousedown: a._mouseDown })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() { a.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = o && o[1] ? o[1] : "se") }), r.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function() { this._handles.remove() },
        _mouseCapture: function(e) { var i, s, n = !1; for (i in this.handles)((s = t(this.handles[i])[0]) === e.target || t.contains(s, e.target)) && (n = !0); return !this.options.disabled && n },
        _mouseStart: function(e) {
            var i, s, n, o = this.options,
                r = this.element;
            return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: i, top: s }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: r.width(), height: r.height() }, this.originalSize = this._helper ? { width: r.outerWidth(), height: r.outerHeight() } : { width: r.width(), height: r.height() }, this.sizeDiff = { width: r.outerWidth() - r.width(), height: r.outerHeight() - r.height() }, this.originalPosition = { left: i, top: s }, this.originalMousePosition = { left: e.pageX, top: e.pageY }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
        },
        _mouseDrag: function(e) {
            var i, s, n = this.originalMousePosition,
                o = this.axis,
                r = e.pageX - n.left || 0,
                a = e.pageY - n.top || 0,
                l = this._change[o];
            return this._updatePrevProperties(), !!l && (i = l.apply(this, [e, r, a]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1)
        },
        _mouseStop: function(e) { this.resizing = !1; var i, s, n, o, r, a, l, h = this.options; return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : this.sizeDiff.height, o = s ? 0 : this.sizeDiff.width, r = { width: this.helper.width() - o, height: this.helper.height() - n }, a = parseFloat(this.element.css("left")) + (this.position.left - this.originalPosition.left) || null, l = parseFloat(this.element.css("top")) + (this.position.top - this.originalPosition.top) || null, h.animate || this.element.css(t.extend(r, { top: l, left: a })), this.helper.height(this.size.height), this.helper.width(this.size.width), this._helper && !h.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1 },
        _updatePrevProperties: function() { this.prevPosition = { top: this.position.top, left: this.position.left }, this.prevSize = { width: this.size.width, height: this.size.height } },
        _applyChanges: function() { var t = {}; return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t },
        _updateVirtualBoundaries: function(t) {
            var e, i, s, n, o, r = this.options;
            o = { minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0, maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0, minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0, maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0 }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > n && (o.maxHeight = n)), this._vBoundaries = o
        },
        _updateCache: function(t) { this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width) },
        _updateRatio: function(t) {
            var e = this.position,
                i = this.size,
                s = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries,
                i = this.axis,
                s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                r = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                a = this.originalPosition.left + this.originalSize.width,
                l = this.originalPosition.top + this.originalSize.height,
                h = /sw|nw|w/.test(i),
                c = /nw|ne|n/.test(i);
            return o && (t.width = e.minWidth), r && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && h && (t.left = a - e.minWidth), s && h && (t.left = a - e.maxWidth), r && c && (t.top = l - e.minHeight), n && c && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _getPaddingPlusBorderDimensions: function(t) { for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(n[e]) || 0; return { height: i[0] + i[2], width: i[1] + i[3] } },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({ height: i.height() - this.outerDimensions.height || 0, width: i.width() - this.outerDimensions.width || 0 })
        },
        _renderProxy: function() {
            var e = this.element,
                i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({ width: this.element.outerWidth(), height: this.element.outerHeight(), position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: { e: function(t, e) { return { width: this.originalSize.width + e } }, w: function(t, e) { var i = this.originalSize; return { left: this.originalPosition.left + e, width: i.width - e } }, n: function(t, e, i) { var s = this.originalSize; return { top: this.originalPosition.top + i, height: s.height - i } }, s: function(t, e, i) { return { height: this.originalSize.height + i } }, se: function(e, i, s) { return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s])) }, sw: function(e, i, s) { return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s])) }, ne: function(e, i, s) { return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s])) }, nw: function(e, i, s) { return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s])) } },
        _propagate: function(e, i) { t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui()) },
        plugins: {},
        ui: function() { return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition } }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).resizable("instance"),
                s = i.options,
                n = i._proportionallyResizeElements,
                o = n.length && /textarea/i.test(n[0].nodeName),
                r = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
                a = o ? 0 : i.sizeDiff.width,
                l = { width: i.size.width - a, height: i.size.height - r },
                h = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(l, c && h ? { top: c, left: h } : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function() {
                    var s = { width: parseFloat(i.element.css("width")), height: parseFloat(i.element.css("height")), top: parseFloat(i.element.css("top")), left: parseFloat(i.element.css("left")) };
                    n && n.length && t(n[0]).css({ width: s.width, height: s.height }), i._updateCache(s), i._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var e, i, s, n, o, r, a, l = t(this).resizable("instance"),
                h = l.options,
                c = l.element,
                u = h.containment,
                d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
            d && (l.containerElement = t(d), /document/.test(u) || u === document ? (l.containerOffset = { left: 0, top: 0 }, l.containerPosition = { left: 0, top: 0 }, l.parentData = { element: t(document), left: 0, top: 0, width: t(document).width(), height: t(document).height() || document.body.parentNode.scrollHeight }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, s) { i[t] = l._num(e.css("padding" + s)) }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = { height: e.innerHeight() - i[3], width: e.innerWidth() - i[1] }, s = l.containerOffset, n = l.containerSize.height, o = l.containerSize.width, r = l._hasScroll(d, "left") ? d.scrollWidth : o, a = l._hasScroll(d) ? d.scrollHeight : n, l.parentData = { element: d, left: s.left, top: s.top, width: r, height: a }))
        },
        resize: function(e) {
            var i, s, n, o, r = t(this).resizable("instance"),
                a = r.options,
                l = r.containerOffset,
                h = r.position,
                c = r._aspectRatio || e.shiftKey,
                u = { top: 0, left: 0 },
                d = r.containerElement,
                p = !0;
            d[0] !== document && /static/.test(d.css("position")) && (u = l), h.left < (r._helper ? l.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - l.left : r.position.left - u.left), c && (r.size.height = r.size.width / r.aspectRatio, p = !1), r.position.left = a.helper ? l.left : 0), h.top < (r._helper ? l.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - l.top : r.position.top), c && (r.size.width = r.size.height * r.aspectRatio, p = !1), r.position.top = r._helper ? l.top : 0), n = r.containerElement.get(0) === r.element.parent().get(0), o = /relative|absolute/.test(r.containerElement.css("position")), n && o ? (r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top) : (r.offset.left = r.element.offset().left, r.offset.top = r.element.offset().top), i = Math.abs(r.sizeDiff.width + (r._helper ? r.offset.left - u.left : r.offset.left - l.left)), s = Math.abs(r.sizeDiff.height + (r._helper ? r.offset.top - u.top : r.offset.top - l.top)), i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i, c && (r.size.height = r.size.width / r.aspectRatio, p = !1)), s + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - s, c && (r.size.width = r.size.height * r.aspectRatio, p = !1)), p || (r.position.left = r.prevPosition.left, r.position.top = r.prevPosition.top, r.size.width = r.prevSize.width, r.size.height = r.prevSize.height)
        },
        stop: function() {
            var e = t(this).resizable("instance"),
                i = e.options,
                s = e.containerOffset,
                n = e.containerPosition,
                o = e.containerElement,
                r = t(e.helper),
                a = r.offset(),
                l = r.outerWidth() - e.sizeDiff.width,
                h = r.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({ left: a.left - n.left - s.left, width: l, height: h }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({ left: a.left - n.left - s.left, width: l, height: h })
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var e = t(this).resizable("instance").options;
            t(e.alsoResize).each(function() {
                var e = t(this);
                e.data("ui-resizable-alsoresize", { width: parseFloat(e.width()), height: parseFloat(e.height()), left: parseFloat(e.css("left")), top: parseFloat(e.css("top")) })
            })
        },
        resize: function(e, i) {
            var s = t(this).resizable("instance"),
                n = s.options,
                o = s.originalSize,
                r = s.originalPosition,
                a = { height: s.size.height - o.height || 0, width: s.size.width - o.width || 0, top: s.position.top - r.top || 0, left: s.position.left - r.left || 0 };
            t(n.alsoResize).each(function() {
                var e = t(this),
                    s = t(this).data("ui-resizable-alsoresize"),
                    n = {},
                    o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                t.each(o, function(t, e) {
                    var i = (s[e] || 0) + (a[e] || 0);
                    i && i >= 0 && (n[e] = i || null)
                }), e.css(n)
            })
        },
        stop: function() { t(this).removeData("ui-resizable-alsoresize") }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).resizable("instance"),
                i = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({ opacity: .25, display: "block", position: "relative", height: i.height, width: i.width, margin: 0, left: 0, top: 0 }), e._addClass(e.ghost, "ui-resizable-ghost"), !1 !== t.uiBackCompat && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
        },
        resize: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.ghost.css({ position: "relative", height: e.size.height, width: e.size.width })
        },
        stop: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var e, i = t(this).resizable("instance"),
                s = i.options,
                n = i.size,
                o = i.originalSize,
                r = i.originalPosition,
                a = i.axis,
                l = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
                h = l[0] || 1,
                c = l[1] || 1,
                u = Math.round((n.width - o.width) / h) * h,
                d = Math.round((n.height - o.height) / c) * c,
                p = o.width + u,
                f = o.height + d,
                m = s.maxWidth && p > s.maxWidth,
                g = s.maxHeight && f > s.maxHeight,
                v = s.minWidth && s.minWidth > p,
                _ = s.minHeight && s.minHeight > f;
            s.grid = l, v && (p += h), _ && (f += c), m && (p -= h), g && (f -= c), /^(se|s|e)$/.test(a) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.top = r.top - d) : /^(sw)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.left = r.left - u) : ((0 >= f - c || 0 >= p - h) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = r.top - d) : (f = c - e.height, i.size.height = f, i.position.top = r.top + o.height - f), p - h > 0 ? (i.size.width = p, i.position.left = r.left - u) : (p = h - e.width, i.size.width = p, i.position.left = r.left + o.width - p))
        }
    }), t.ui.resizable, t.widget("ui.selectable", t.ui.mouse, {
        version: "1.12.1",
        options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null },
        _create: function() {
            var e = this;
            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function() {
                    var i = t(this),
                        s = i.offset(),
                        n = { left: s.left - e.elementPos.left, top: s.top - e.elementPos.top };
                    t.data(this, "selectable-item", { element: this, $element: i, left: n.left, top: n.top, right: n.left + i.outerWidth(), bottom: n.top + i.outerHeight(), startselected: !1, selected: i.hasClass("ui-selected"), selecting: i.hasClass("ui-selecting"), unselecting: i.hasClass("ui-unselecting") })
                })
            }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function() { this.selectees.removeData("selectable-item"), this._mouseDestroy() },
        _mouseStart: function(e) {
            var i = this,
                s = this.options;
            this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({ left: e.pageX, top: e.pageY, width: 0, height: 0 }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var s = t.data(this, "selectable-item");
                s.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"), s.selected = !1, i._addClass(s.$element, "ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, { unselecting: s.element }))
            }), t(e.target).parents().addBack().each(function() { var s, n = t.data(this, "selectable-item"); return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), i._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, { selecting: n.element }) : i._trigger("unselecting", e, { unselecting: n.element }), !1) : void 0 }))
        },
        _mouseDrag: function(e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, s = this,
                    n = this.options,
                    o = this.opos[0],
                    r = this.opos[1],
                    a = e.pageX,
                    l = e.pageY;
                return o > a && (i = a, a = o, o = i), r > l && (i = l, l = r, r = i), this.helper.css({ left: o, top: r, width: a - o, height: l - r }), this.selectees.each(function() {
                    var i = t.data(this, "selectable-item"),
                        h = !1,
                        c = {};
                    i && i.element !== s.element[0] && (c.left = i.left + s.elementPos.left, c.right = i.right + s.elementPos.left, c.top = i.top + s.elementPos.top, c.bottom = i.bottom + s.elementPos.top, "touch" === n.tolerance ? h = !(c.left > a || o > c.right || c.top > l || r > c.bottom) : "fit" === n.tolerance && (h = c.left > o && a > c.right && c.top > r && l > c.bottom), h ? (i.selected && (s._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (s._addClass(i.$element, "ui-selecting"), i.selecting = !0, s._trigger("selecting", e, { selecting: i.element }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, s._addClass(i.$element, "ui-selected"), i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, { unselecting: i.element }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"), i.selected = !1, s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, { unselecting: i.element })))))
                }), !1
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, { unselected: s.element })
            }), t(".ui-selecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, { selected: s.element })
            }), this._trigger("stop", e), this.helper.remove(), !1
        }
    }), t.widget("ui.sortable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: { appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null },
        _isOverAxis: function(t, e, i) { return t >= e && e + i > t },
        _isFloating: function(t) { return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display")) },
        _create: function() { this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0 },
        _setOption: function(t, e) { this._super(t, e), "handle" === t && this._setHandleClassName() },
        _setHandleClassName: function() {
            var e = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function() { e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle") })
        },
        _destroy: function() { this._mouseDestroy(); for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item"); return this },
        _mouseCapture: function(e, i) {
            var s = null,
                n = !1,
                o = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function() { return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : void 0 }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), !!s && (!(this.options.handle && !i && (t(this.options.handle, s).find("*").addBack().each(function() { this === e.target && (n = !0) }), !n)) && (this.currentItem = s, this._removeCurrentsFromItems(), !0))))
        },
        _mouseStart: function(e, i, s) {
            var n, o, r = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, t.extend(this.offset, { click: { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && "auto" !== r.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", r.cursor), this.storedStylesheet = t("<style>*{ cursor: " + r.cursor + " !important; }</style>").appendTo(o)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function(e) {
            var i, s, n, o, r = this.options,
                a = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < r.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + r.scrollSpeed : e.pageY - this.overflowOffset.top < r.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - r.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < r.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + r.scrollSpeed : e.pageX - this.overflowOffset.left < r.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - r.scrollSpeed)) : (e.pageY - this.document.scrollTop() < r.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - r.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < r.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + r.scrollSpeed)), e.pageX - this.document.scrollLeft() < r.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - r.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < r.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + r.scrollSpeed))), !1 !== a && t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (s = this.items[i], n = s.item[0], (o = this._intersectsWithPointer(s)) && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], n))) {
                    if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                    this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var s = this,
                        n = this.placeholder.offset(),
                        o = this.options.axis,
                        r = {};
                    o && "x" !== o || (r.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (r.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(r, parseInt(this.options.revert, 10) || 500, function() { s._clear(e) })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function() { if (this.dragging) { this._mouseUp(new t.Event("mouseup", { target: null })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show(); for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0) } return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !s.length && e.key && s.push(e.key + "="), s.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, i.each(function() { s.push(t(e.item || this).attr(e.attribute || "id") || "") }), s
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                s = this.positionAbs.top,
                n = s + this.helperProportions.height,
                o = t.left,
                r = o + t.width,
                a = t.top,
                l = a + t.height,
                h = this.offset.click.top,
                c = this.offset.click.left,
                u = "x" === this.options.axis || s + h > a && l > s + h,
                d = "y" === this.options.axis || e + c > o && r > e + c,
                p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && r > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > a && l > n - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(t) {
            var e, i, s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
            return !!(s && n) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
        },
        _intersectsWithSides: function(t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                s = this._getDragVerticalDirection(),
                n = this._getDragHorizontalDirection();
            return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
        },
        _getDragVerticalDirection: function() { var t = this.positionAbs.top - this.lastPositionAbs.top; return 0 !== t && (t > 0 ? "down" : "up") },
        _getDragHorizontalDirection: function() { var t = this.positionAbs.left - this.lastPositionAbs.left; return 0 !== t && (t > 0 ? "right" : "left") },
        refresh: function(t) { return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this },
        _connectWith: function() { var t = this.options; return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith },
        _getItemsAsjQuery: function(e) {
            function i() { a.push(this) }
            var s, n, o, r, a = [],
                l = [],
                h = this._connectWith();
            if (h && e)
                for (s = h.length - 1; s >= 0; s--)
                    for (o = t(h[s], this.document[0]), n = o.length - 1; n >= 0; n--)(r = t.data(o[n], this.widgetFullName)) && r !== this && !r.options.disabled && l.push([t.isFunction(r.options.items) ? r.options.items.call(r.element) : t(r.options.items, r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), r]);
            for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = l.length - 1; s >= 0; s--) l[s][0].each(i);
            return t(a)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; e.length > i; i++)
                    if (e[i] === t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [this];
            var i, s, n, o, r, a, l, h, c = this.items,
                u = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, { item: this.currentItem }) : t(this.options.items, this.element), this]
                ],
                d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (n = t(d[i], this.document[0]), s = n.length - 1; s >= 0; s--)(o = t.data(n[s], this.widgetFullName)) && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, { item: this.currentItem }) : t(o.options.items, o.element), o]), this.containers.push(o));
            for (i = u.length - 1; i >= 0; i--)
                for (r = u[i][1], a = u[i][0], s = 0, h = a.length; h > s; s++)(l = t(a[s])).data(this.widgetName + "-item", r), c.push({ item: l, instance: r, width: 0, height: 0, left: 0, top: 0 })
        },
        refreshPositions: function(e) {
            this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, n, o;
            for (i = this.items.length - 1; i >= 0; i--)(s = this.items[i]).instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            var i, s = (e = e || this).options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function() {
                    var s = e.currentItem[0].nodeName.toLowerCase(),
                        n = t("<" + s + ">", e.document[0]);
                    return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"), "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                },
                update: function(t, n) {
                    (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
        },
        _createTrPlaceholder: function(e, i) {
            var s = this;
            e.children().each(function() { t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i) })
        },
        _contactContainers: function(e) {
            var i, s, n, o, r, a, l, h, c, u, d = null,
                p = null;
            for (i = this.containers.length - 1; i >= 0; i--)
                if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                    if (this._intersectsWith(this.containers[i].containerCache)) {
                        if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                        d = this.containers[i], p = i
                    } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
            if (d)
                if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                else {
                    for (n = 1e4, o = null, r = (c = d.floating || this._isFloating(this.currentItem)) ? "left" : "top", a = c ? "width" : "height", u = c ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (l = this.items[s].item.offset()[r], h = !1, e[u] - l > this.items[s][a] / 2 && (h = !0), n > Math.abs(e[u] - l) && (n = Math.abs(e[u] - l), o = this.items[s], this.direction = h ? "up" : "down"));
                    if (!o && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                    o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
                }
        },
        _createHelper: function(e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
        },
        _adjustOffsetFromHelper: function(e) { "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top) },
        _getParentOffset: function() { this.offsetParent = this.helper.offsetParent(); var e = this.offsetParent.offset(); return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = { top: 0, left: 0 }), { top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } },
        _getRelativeOffset: function() { if ("relative" === this.cssPosition) { var t = this.currentItem.position(); return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } } return { top: 0, left: 0 } },
        _cacheMargins: function() { this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 } },
        _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } },
        _setContainment: function() { var e, i, s, n = this.options; "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]) },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1,
                n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(n[0].tagName);
            return { top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s, left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s }
        },
        _generatePosition: function(e) {
            var i, s, n = this.options,
                o = e.pageX,
                r = e.pageY,
                a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = /(html|body)/i.test(a[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((r - this.originalPageY) / n.grid[1]) * n.grid[1], r = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), { top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()), left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft()) }
        },
        _rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function() { n === this.counter && this.refreshPositions(!s) })
        },
        _clear: function(t, e) {
            function i(t, e, i) { return function(s) { i._trigger(t, s, e._uiHash(e)) } }
            this.reverting = !1;
            var s, n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && n.push(function(t) { this._trigger("receive", t, this._uiHash(this.fromOutside)) }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) { this._trigger("update", t, this._uiHash()) }), this !== this.currentContainer && (e || (n.push(function(t) { this._trigger("remove", t, this._uiHash()) }), n.push(function(t) { return function(e) { t._trigger("receive", e, this._uiHash(this)) } }.call(this, this.currentContainer)), n.push(function(t) { return function(e) { t._trigger("update", e, this._uiHash(this)) } }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                for (s = 0; n.length > s; s++) n[s].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function() {!1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel() },
        _uiHash: function(e) { var i = e || this; return { helper: i.helper, placeholder: i.placeholder || t([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: e ? e.element : null } }
    }), t.widget("ui.accordion", {
        version: "1.12.1",
        options: { active: 0, animate: {}, classes: { "ui-accordion-header": "ui-corner-top", "ui-accordion-header-collapsed": "ui-corner-all", "ui-accordion-content": "ui-corner-bottom" }, collapsible: !1, event: "click", header: "> li > :first-child, > :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null },
        hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" },
        showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" },
        _create: function() {
            var e = this.options;
            this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function() { return { header: this.active, panel: this.active.length ? this.active.next() : t() } },
        _createIcons: function() {
            var e, i, s = this.options.icons;
            s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        },
        _destroyIcons: function() { this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove() },
        _destroy: function() {
            var t;
            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function(t, e) { return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), void("icons" === t && (this._destroyIcons(), e && this._createIcons()))) },
        _setOptionDisabled: function(t) { this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t) },
        _keydown: function(e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode,
                    s = this.headers.length,
                    n = this.headers.index(e.target),
                    o = !1;
                switch (e.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        o = this.headers[(n + 1) % s];
                        break;
                    case i.LEFT:
                    case i.UP:
                        o = this.headers[(n - 1 + s) % s];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(e);
                        break;
                    case i.HOME:
                        o = this.headers[0];
                        break;
                    case i.END:
                        o = this.headers[s - 1]
                }
                o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
            }
        },
        _panelKeyDown: function(e) { e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus") },
        refresh: function() {
            var e = this.options;
            this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function() {
            var t = this.headers,
                e = this.panels;
            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
        },
        _refresh: function() {
            var e, i = this.options,
                s = i.heightStyle,
                n = this.element.parent();
            this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() {
                var e = t(this),
                    i = e.uniqueId().attr("id"),
                    s = e.next(),
                    n = s.uniqueId().attr("id");
                e.attr("aria-controls", n), s.attr("aria-labelledby", i)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(), this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = n.height(), this.element.siblings(":visible").each(function() {
                var i = t(this),
                    s = i.css("position");
                "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
            }), this.headers.each(function() { e -= t(this).outerHeight(!0) }), this.headers.next().each(function() { t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height())) }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function() {
                var i = t(this).is(":visible");
                i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
            }).height(e))
        },
        _activate: function(e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop }))
        },
        _findActive: function(e) { return "number" == typeof e ? this.headers.eq(e) : t() },
        _setupEvents: function(e) {
            var i = { keydown: "_keydown" };
            e && t.each(e.split(" "), function(t, e) { i[e] = "_eventHandler" }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), { keydown: "_panelKeyDown" }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function(e) {
            var i, s, n = this.options,
                o = this.active,
                r = t(e.currentTarget),
                a = r[0] === o[0],
                l = a && n.collapsible,
                h = l ? t() : r.next(),
                c = { oldHeader: o, oldPanel: o.next(), newHeader: l ? t() : r, newPanel: h };
            e.preventDefault(), a && !n.collapsible || !1 === this._trigger("beforeActivate", e, c) || (n.active = !l && this.headers.index(r), this.active = a ? t() : r, this._toggle(c), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)), a || (this._removeClass(r, "ui-accordion-header-collapsed")._addClass(r, "ui-accordion-header-active", "ui-state-active"), n.icons && (s = r.children(".ui-accordion-header-icon"), this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)), this._addClass(r.next(), "ui-accordion-content-active")))
        },
        _toggle: function(e) {
            var i = e.newPanel,
                s = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({ "aria-hidden": "true" }), s.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }), i.length && s.length ? s.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) : i.length && this.headers.filter(function() { return 0 === parseInt(t(this).attr("tabIndex"), 10) }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 })
        },
        _animate: function(t, e, i) {
            var s, n, o, r = this,
                a = 0,
                l = t.css("box-sizing"),
                h = t.length && (!e.length || t.index() < e.index()),
                c = this.options.animate || {},
                u = h && c.down || c,
                d = function() { r._toggleComplete(i) };
            return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || c.easing, o = o || u.duration || c.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, { duration: o, easing: n, step: function(t, e) { e.now = Math.round(t) } }), void t.hide().animate(this.showProps, { duration: o, easing: n, complete: d, step: function(t, i) { i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (a += i.now) : "content" !== r.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - a), a = 0) } })) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d)
        },
        _toggleComplete: function(t) {
            var e = t.oldPanel,
                i = e.prev();
            this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
        }
    }), t.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: { icons: { submenu: "ui-icon-caret-1-e" }, items: "> *", menus: "ul", position: { my: "left top", at: "right top" }, role: "menu", blur: null, focus: null, select: null },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({ role: this.options.role, tabIndex: 0 }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                "mousedown .ui-menu-item": function(t) { t.preventDefault() },
                "click .ui-menu-item": function(e) {
                    var i = t(e.target),
                        s = t(t.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(e) {
                    if (!this.previousFilter) {
                        var i = t(e.target).closest(".ui-menu-item"),
                            s = t(e.currentTarget);
                        i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, s))
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i)
                },
                blur: function(e) { this._delay(function() {!t.contains(this.element[0], t.ui.safeActiveElement(this.document[0])) && this.collapseAll(e) }) },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, { click: function(t) { this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1 } })
        },
        _destroy: function() {
            var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), e.children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-caret") && e.remove()
            })
        },
        _keydown: function(e) {
            var i, s, n, o, r = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    r = !1, s = this.previousFilter || "", o = !1, n = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), (i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function() { delete this.previousFilter }, 1e3)) : delete this.previousFilter
            }
            r && e.preventDefault()
        },
        _activate: function(t) { this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t)) },
        refresh: function() {
            var e, i, s, n, o = this,
                r = this.options.icons.submenu,
                a = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), i = a.filter(":not(.ui-menu)").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function() {
                var e = t(this),
                    i = e.prev(),
                    s = t("<span>").data("ui-menu-submenu-caret", !0);
                o._addClass(s, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id"))
            }), this._addClass(i, "ui-menu", "ui-widget ui-widget-content ui-front"), (e = a.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
                var e = t(this);
                o._isDivider(e) && o._addClass(e, "ui-menu-divider", "ui-widget-content")
            }), n = (s = e.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({ tabIndex: -1, role: this._itemRole() }), this._addClass(s, "ui-menu-item")._addClass(n, "ui-menu-item-wrapper"), e.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() { return { menu: "menuitem", listbox: "option" }[this.options.role] },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
            }
            this._super(t, e)
        },
        _setOptionDisabled: function(t) { this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t) },
        focus: function(t, e) {
            var i, s, n;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() { this._close() }, this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, { item: e })
        },
        _scrollIntoView: function(e) {
            var i, s, n, o, r, a;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), r = this.activeMenu.height(), a = e.outerHeight(), 0 > n ? this.activeMenu.scrollTop(o + n) : n + a > r && this.activeMenu.scrollTop(o + n - r + a))
        },
        blur: function(t, e) { e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, { item: this.active }), this.active = null) },
        _startOpening: function(t) { clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() { this._close(), this._open(t) }, this.delay)) },
        _open: function(e) {
            var i = t.extend({ of: this.active }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s
            }, this.delay)
        },
        _close: function(t) { t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false") },
        _closeOnDocumentClick: function(e) { return !t(e.target).closest(".ui-menu").length },
        _isDivider: function(t) { return !/[^\-\u2014\u2013\s]/.test(t.text()) },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()), this._delay(function() { this.focus(t, e) }))
        },
        next: function(t) { this._move("next", "first", t) },
        previous: function(t) { this._move("prev", "last", t) },
        isFirstItem: function() { return this.active && !this.active.prevAll(".ui-menu-item").length },
        isLastItem: function() { return this.active && !this.active.nextAll(".ui-menu-item").length },
        _move: function(t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s)
        },
        nextPage: function(e) { var i, s, n; return this.active ? void(this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() { return 0 > (i = t(this)).offset().top - s - n }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e) },
        previousPage: function(e) { var i, s, n; return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() { return (i = t(this)).offset().top - s + n > 0 }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e) },
        _hasScroll: function() { return this.element.outerHeight() < this.element.prop("scrollHeight") },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = { item: this.active };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        },
        _filterMenuItems: function(e) {
            var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                s = RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() { return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text())) })
        }
    }), t.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: { appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var e, i, s, n = this.element[0].nodeName.toLowerCase(),
                o = "textarea" === n,
                r = "input" === n;
            this.isMultiLine = o || !r && this._isContentEditable(this.element), this.valueMethod = this.element[o || r ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(n) {
                    if (this.element.prop("readOnly")) return e = !0, s = !0, void(i = !0);
                    e = !1, s = !1, i = !1;
                    var o = t.ui.keyCode;
                    switch (n.keyCode) {
                        case o.PAGE_UP:
                            e = !0, this._move("previousPage", n);
                            break;
                        case o.PAGE_DOWN:
                            e = !0, this._move("nextPage", n);
                            break;
                        case o.UP:
                            e = !0, this._keyEvent("previous", n);
                            break;
                        case o.DOWN:
                            e = !0, this._keyEvent("next", n);
                            break;
                        case o.ENTER:
                            this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
                            break;
                        case o.TAB:
                            this.menu.active && this.menu.select(n);
                            break;
                        case o.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(n)
                    }
                },
                keypress: function(s) {
                    if (e) return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault());
                    if (!i) {
                        var n = t.ui.keyCode;
                        switch (s.keyCode) {
                            case n.PAGE_UP:
                                this._move("previousPage", s);
                                break;
                            case n.PAGE_DOWN:
                                this._move("nextPage", s);
                                break;
                            case n.UP:
                                this._keyEvent("previous", s);
                                break;
                            case n.DOWN:
                                this._keyEvent("next", s)
                        }
                    }
                },
                input: function(t) { return s ? (s = !1, void t.preventDefault()) : void this._searchTimeout(t) },
                focus: function() { this.selectedItem = null, this.previous = this._value() },
                blur: function(t) { return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t)) }
            }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                mousedown: function(e) { e.preventDefault(), this.cancelBlur = !0, this._delay(function() { delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus") }) },
                menufocus: function(e, i) { var s, n; return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() { t(e.target).trigger(e.originalEvent) })) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, { item: n }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), void((s = i.item.attr("aria-label") || n.value) && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion)))) },
                menuselect: function(e, i) {
                    var s = i.item.data("ui-autocomplete-item"),
                        n = this.previous;
                    this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay(function() { this.previous = n, this.selectedItem = s })), !1 !== this._trigger("select", e, { item: s }) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s
                }
            }), this.liveRegion = t("<div>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } })
        },
        _destroy: function() { clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove() },
        _setOption: function(t, e) { this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort() },
        _isEventTargetInWidget: function(e) { var i = this.menu.element[0]; return e.target === this.element[0] || e.target === i || t.contains(i, e.target) },
        _closeOnClickOutside: function(t) { this._isEventTargetInWidget(t) || this.close() },
        _appendTo: function() { var e = this.options.appendTo; return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e },
        _initSource: function() {
            var e, i, s = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) { s(t.ui.autocomplete.filter(e, i.term)) }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) { s.xhr && s.xhr.abort(), s.xhr = t.ajax({ url: i, data: e, dataType: "json", success: function(t) { n(t) }, error: function() { n([]) } }) }) : this.source = this.options.source
        },
        _searchTimeout: function(t) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var e = this.term === this._value(),
                    i = this.menu.element.is(":visible"),
                    s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                (!e || e && !i && !s) && (this.selectedItem = null, this.search(null, t))
            }, this.options.delay)
        },
        search: function(t, e) { return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0 },
        _search: function(t) { this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({ term: t }, this._response()) },
        _response: function() { var e = ++this.requestIndex; return t.proxy(function(t) { e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading") }, this) },
        __response: function(t) { t && (t = this._normalize(t)), this._trigger("response", null, { content: t }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close() },
        close: function(t) { this.cancelSearch = !0, this._close(t) },
        _close: function(t) { this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t)) },
        _change: function(t) { this.previous !== this._value() && this._trigger("change", t, { item: this.selectedItem }) },
        _normalize: function(e) { return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) { return "string" == typeof e ? { label: e, value: e } : t.extend({}, e, { label: e.label || e.value, value: e.value || e.label }) }) },
        _suggest: function(e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, { mousedown: "_closeOnClickOutside" })
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(e, i) {
            var s = this;
            t.each(i, function(t, i) { s._renderItemData(e, i) })
        },
        _renderItemData: function(t, e) { return this._renderItem(t, e).data("ui-autocomplete-item", e) },
        _renderItem: function(e, i) { return t("<li>").append(t("<div>").text(i.label)).appendTo(e) },
        _move: function(t, e) { return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e) },
        widget: function() { return this.menu.element },
        _value: function() { return this.valueMethod.apply(this.element, arguments) },
        _keyEvent: function(t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
        },
        _isContentEditable: function(t) { if (!t.length) return !1; var e = t.prop("contentEditable"); return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e }
    }), t.extend(t.ui.autocomplete, { escapeRegex: function(t) { return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") }, filter: function(e, i) { var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i"); return t.grep(e, function(t) { return s.test(t.label || t.value || t) }) } }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: { messages: { noResults: "No search results.", results: function(t) { return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate." } } },
        __response: function(e) {
            var i;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
        }
    }), t.ui.autocomplete;
    var c = /ui-corner-([a-z]){2,6}/g;
    t.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: { direction: "horizontal", disabled: null, onlyVisible: !0, items: { button: "input[type=button], input[type=submit], input[type=reset], button, a", controlgroupLabel: ".ui-controlgroup-label", checkboxradio: "input[type='checkbox'], input[type='radio']", selectmenu: "select", spinner: ".ui-spinner-input" } },
        _create: function() { this._enhance() },
        _enhance: function() { this.element.attr("role", "toolbar"), this.refresh() },
        _destroy: function() { this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap() },
        _initWidgets: function() {
            var e = this,
                i = [];
            t.each(this.options.items, function(s, n) {
                var o, r = {};
                return n ? "controlgroupLabel" === s ? ((o = e.element.find(n)).each(function() {
                    var e = t(this);
                    e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void(i = i.concat(o.get()))) : void(t.fn[s] && (r = e["_" + s + "Options"] ? e["_" + s + "Options"]("middle") : { classes: {} }, e.element.find(n).each(function() {
                    var n = t(this),
                        o = n[s]("instance"),
                        a = t.widget.extend({}, r);
                    if ("button" !== s || !n.parent(".ui-spinner").length) {
                        o || (o = n[s]()[s]("instance")), o && (a.classes = e._resolveClassesValues(a.classes, o)), n[s](a);
                        var l = n[s]("widget");
                        t.data(l[0], "ui-controlgroup-data", o || n[s]("instance")), i.push(l[0])
                    }
                }))) : void 0
            }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function(e) {
            this.childWidgets.each(function() {
                var i = t(this).data("ui-controlgroup-data");
                i && i[e] && i[e]()
            })
        },
        _updateCornerClass: function(t, e) {
            var i = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i)
        },
        _buildSimpleOptions: function(t, e) {
            var i = "vertical" === this.options.direction,
                s = { classes: {} };
            return s.classes[e] = { middle: "", first: "ui-corner-" + (i ? "top" : "left"), last: "ui-corner-" + (i ? "bottom" : "right"), only: "ui-corner-all" }[t], s
        },
        _spinnerOptions: function(t) { var e = this._buildSimpleOptions(t, "ui-spinner"); return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e },
        _buttonOptions: function(t) { return this._buildSimpleOptions(t, "ui-button") },
        _checkboxradioOptions: function(t) { return this._buildSimpleOptions(t, "ui-checkboxradio-label") },
        _selectmenuOptions: function(t) { var e = "vertical" === this.options.direction; return { width: !!e && "auto", classes: { middle: { "ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": "" }, first: { "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"), "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left") }, last: { "ui-selectmenu-button-open": e ? "" : "ui-corner-tr", "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right") }, only: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" } }[t] } },
        _resolveClassesValues: function(e, i) {
            var s = {};
            return t.each(e, function(n) {
                var o = i.options.classes[n] || "";
                o = t.trim(o.replace(c, "")), s[n] = (o + " " + e[n]).replace(/\s+/g, " ")
            }), s
        },
        _setOption: function(t, e) { return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh() },
        refresh: function() {
            var e, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function(t, s) {
                var n = e[s]().data("ui-controlgroup-data");
                if (n && i["_" + n.widgetName + "Options"]) {
                    var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);
                    o.classes = i._resolveClassesValues(o.classes, n), n.element[n.widgetName](o)
                } else i._updateCornerClass(e[s](), s)
            }), this._callChildMethod("refresh"))
        }
    }), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
        version: "1.12.1",
        options: { disabled: null, label: null, icon: !0, classes: { "ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all" } },
        _getCreateOptions: function() {
            var e, i, s = this,
                n = this._super() || {};
            return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function() { s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML }), this.originalLabel && (n.label = this.originalLabel), null != (e = this.element[0].disabled) && (n.disabled = e), n
        },
        _create: function() {
            var t = this.element[0].checked;
            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({ change: "_toggleClasses", focus: function() { this._addClass(this.label, null, "ui-state-focus ui-visual-focus") }, blur: function() { this._removeClass(this.label, null, "ui-state-focus ui-visual-focus") } })
        },
        _readType: function() {
            var e = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
        },
        _enhance: function() { this._updateIcon(this.element[0].checked) },
        widget: function() { return this.label },
        _getRadioGroup: function() {
            var e = this.element[0].name,
                i = "input[name='" + t.ui.escapeSelector(e) + "']";
            return e ? (this.form.length ? t(this.form[0].elements).filter(i) : t(i).filter(function() { return 0 === t(this).form().length })).not(this.element) : t([])
        },
        _toggleClasses: function() {
            var e = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function() {
                var e = t(this).checkboxradio("instance");
                e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
            })
        },
        _destroy: function() { this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove()) },
        _setOption: function(t, e) { return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), void(this.element[0].disabled = e)) : void this.refresh()) : void 0 },
        _updateIcon: function(e) {
            var i = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
        },
        _updateLabel: function() {
            var t = this.label.contents().not(this.element[0]);
            this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
        },
        refresh: function() {
            var t = this.element[0].checked,
                e = this.element[0].disabled;
            this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({ disabled: e })
        }
    }]), t.ui.checkboxradio, t.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: { classes: { "ui-button": "ui-corner-all" }, disabled: null, icon: null, iconPosition: "beginning", label: null, showLabel: !0 },
        _getCreateOptions: function() { var t, e = this._super() || {}; return this.isInput = this.element.is("input"), null != (t = this.element[0].disabled) && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e },
        _create: function() {!this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({ keyup: function(e) { e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click")) } }) },
        _enhance: function() { this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip()) },
        _updateTooltip: function() { this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label) },
        _updateIcon: function(e, i) {
            var s = "iconPosition" !== e,
                n = s ? this.options.iconPosition : i,
                o = "top" === n || "bottom" === n;
            this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), s && this._addClass(this.icon, null, i), this._attachIcon(n), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(n))
        },
        _destroy: function() { this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title") },
        _attachIconSpace: function(t) { this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace) },
        _attachIcon: function(t) { this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon) },
        _setOptions: function(t) {
            var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                i = void 0 === t.icon ? this.options.icon : t.icon;
            e || i || (t.showLabel = !0), this._super(t)
        },
        _setOption: function(t, e) { "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur()) },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOptions({ disabled: t }), this._updateTooltip()
        }
    }), !1 !== t.uiBackCompat && (t.widget("ui.button", t.ui.button, { options: { text: !0, icons: { primary: null, secondary: null } }, _create: function() { this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super() }, _setOption: function(t, e) { return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments)) } }), t.fn.button = function(e) { return function() { return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({ icon: !1 }) : this.checkboxradio.apply(this, arguments)) } }(t.fn.button), t.fn.buttonset = function() { return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = { button: arguments[0].items }), this.controlgroup.apply(this, arguments)) }), t.ui.button, t.extend(t.ui, { datepicker: { version: "1.12.1" } });
    var u;
    t.extend(e.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() { return this.dpDiv },
        setDefaults: function(t) { return n(this._defaults, t || {}), this },
        _attachDatepicker: function(e, i) {
            var s, n, o;
            n = "div" === (s = e.nodeName.toLowerCase()) || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), (o = this._newInst(t(e), n)).settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o)
        },
        _newInst: function(e, s) { return { id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"), input: e, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: s, dpDiv: s ? i(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv } },
        _connectDatepicker: function(e, i) {
            var s = t(e);
            i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, i) {
            var s, n, o, r = this._get(i, "appendText"),
                a = this._get(i, "isRTL");
            i.append && i.append.remove(), r && (i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>"), e[a ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), ("focus" === (s = this._get(i, "showOn")) || "both" === s) && e.on("focus", this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({ src: o, alt: n, title: n }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({ src: o, alt: n, title: n }) : n)), e[a ? "before" : "after"](i.trigger), i.trigger.on("click", function() { return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1 }))
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, s, n, o = new Date(2009, 11, 20),
                    r = this._get(t, "dateFormat");
                r.match(/[DM]/) && (e = function(t) { for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && (i = t[n].length, s = n); return s }, o.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
            }
        },
        _inlineDatepicker: function(e, i) {
            var s = t(e);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(e, i, s, o, r) { var a, l, h, c, u, d = this._dialogInst; return d || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), n(d.settings, o || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = r ? r.length ? r : [r.pageX, r.pageY] : null, this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, h / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this },
        _destroyDatepicker: function(e) {
            var i, s = t(e),
                n = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), u === n && (u = null))
        },
        _enableDatepicker: function(e) {
            var i, s, n = t(e),
                o = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !1, o.trigger.filter("button").each(function() { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === i || "span" === i) && ((s = n.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) { return t === e ? null : t }))
        },
        _disableDatepicker: function(e) {
            var i, s, n = t(e),
                o = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !0, o.trigger.filter("button").each(function() { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === i || "span" === i) && ((s = n.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) { return t === e ? null : t }), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function(t) {
            if (!t) return !1;
            for (var e = 0; this._disabledInputs.length > e; e++)
                if (this._disabledInputs[e] === t) return !0;
            return !1
        },
        _getInst: function(e) { try { return t.data(e, "datepicker") } catch (t) { throw "Missing instance data for this datepicker" } },
        _optionDatepicker: function(e, i, s) { var o, r, a, l, h = this._getInst(e); return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null : (o = i || {}, "string" == typeof i && (o = {}, o[i] = s), void(h && (this._curInst === h && this._hideDatepicker(), r = this._getDateDatepicker(e, !0), a = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), n(h.settings, o), null !== a && void 0 !== o.dateFormat && void 0 === o.minDate && (h.settings.minDate = this._formatDate(h, a)), null !== l && void 0 !== o.dateFormat && void 0 === o.maxDate && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in o && (o.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, r), this._updateAlternate(h), this._updateDatepicker(h)))) },
        _changeDatepicker: function(t, e, i) { this._optionDatepicker(t, e, i) },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(t, e) { var i = this._getInst(t); return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null },
        _doKeyDown: function(e) {
            var i, s, n, o = t.datepicker._getInst(e.target),
                r = !0,
                a = o.dpDiv.is(".ui-datepicker-rtl");
            if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(), r = !1;
                    break;
                case 13:
                    return (n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv))[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), (i = t.datepicker._get(o, "onSelect")) ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), r = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), r = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), r = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), r = e.ctrlKey || e.metaKey;
                    break;
                default:
                    r = !1
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : r = !1;
            r && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function(e) { var i, s, n = t.datepicker._getInst(e.target); return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0 },
        _doKeyUp: function(e) {
            var i = t.datepicker._getInst(e.target);
            if (i.input.val() !== i.lastVal) try { t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, t.datepicker._getFormatConfig(i)) && (t.datepicker._setDateFromField(i), t.datepicker._updateAlternate(i), t.datepicker._updateDatepicker(i)) } catch (t) {}
            return !0
        },
        _showDatepicker: function(e) {
            if ("input" !== (e = e.target || e).nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                var i, s, o, r, a, l, h;
                i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), !1 !== (o = (s = t.datepicker._get(i, "beforeShow")) ? s.apply(e, [e, i]) : {}) && (n(i.settings, o), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function() { return !(r |= "fixed" === t(this).css("position")) }), a = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), t.datepicker._updateDatepicker(i), a = t.datepicker._checkOffset(i, a, r), i.dpDiv.css({ position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute", display: "none", left: a.left + "px", top: a.top + "px" }), i.inline || (l = t.datepicker._get(i, "showAnim"), h = t.datepicker._get(i, "duration"), i.dpDiv.css("z-index", function(t) {
                    for (var e, i; t.length && t[0] !== document;) {
                        if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                        t = t.parent()
                    }
                    return 0
                }(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), h) : i.dpDiv[l || "show"](l ? h : null), t.datepicker._shouldFocusInput(i) && i.input.trigger("focus"), t.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4, u = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
            var i, n = this._getNumberOfMonths(e),
                o = n[1],
                r = e.dpDiv.find("." + this._dayOverClass + " a");
            r.length > 0 && s.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), o > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + o).css("width", 17 * o + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function() { i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null }, 0))
        },
        _shouldFocusInput: function(t) { return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus") },
        _checkOffset: function(e, i, s) {
            var n = e.dpDiv.outerWidth(),
                o = e.dpDiv.outerHeight(),
                r = e.input ? e.input.outerWidth() : 0,
                a = e.input ? e.input.outerHeight() : 0,
                l = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
                h = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? n - r : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + a ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > l && l > n ? Math.abs(i.left + n - l) : 0), i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + a) : 0), i
        },
        _findPos: function(e) { for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"]; return i = t(e).offset(), [i.left, i.top] },
        _hideDatepicker: function(e) { var i, s, n, o, r = this._curInst;!r || e && r !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(r, "showAnim"), s = this._get(r, "duration"), n = function() { t.datepicker._tidyDialog(r) }, t.effects && (t.effects.effect[i] || t.effects[i]) ? r.dpDiv.hide(i, t.datepicker._get(r, "showOptions"), s, n) : r.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, (o = this._get(r, "onClose")) && o.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1) },
        _tidyDialog: function(t) { t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar") },
        _checkExternalClick: function(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target),
                    s = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(e, i, s) {
            var n = t(e),
                o = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o))
        },
        _gotoToday: function(e) {
            var i, s = t(e),
                n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
        },
        _selectMonthYear: function(e, i, s) {
            var n = t(e),
                o = this._getInst(n[0]);
            o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n)
        },
        _selectDay: function(e, i, s, n) {
            var o, r = t(e);
            t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (o = this._getInst(r[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
        },
        _clearDate: function(e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function(e, i) {
            var s, n = t(e),
                o = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), (s = this._get(o, "onSelect")) ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var i, s, n, o = this._get(e, "altField");
            o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n))
        },
        noWeekends: function(t) { var e = t.getDay(); return [e > 0 && 6 > e, ""] },
        iso8601Week: function(t) { var e, i = new Date(t.getTime()); return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1 },
        parseDate: function(e, i, s) {
            if (null == e || null == i) throw "Invalid arguments";
            if ("" == (i = "object" == typeof i ? "" + i : i + "")) return null;
            var n, o, r, a, l = 0,
                h = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                c = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10),
                u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                d = (s ? s.dayNames : null) || this._defaults.dayNames,
                p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (s ? s.monthNames : null) || this._defaults.monthNames,
                m = -1,
                g = -1,
                v = -1,
                _ = -1,
                b = !1,
                y = function(t) { var i = e.length > n + 1 && e.charAt(n + 1) === t; return i && n++, i },
                w = function(t) {
                    var e = y(t),
                        s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                        n = "y" === t ? s : 1,
                        o = RegExp("^\\d{" + n + "," + s + "}"),
                        r = i.substring(l).match(o);
                    if (!r) throw "Missing number at position " + l;
                    return l += r[0].length, parseInt(r[0], 10)
                },
                x = function(e, s, n) {
                    var o = -1,
                        r = t.map(y(e) ? n : s, function(t, e) {
                            return [
                                [e, t]
                            ]
                        }).sort(function(t, e) { return -(t[1].length - e[1].length) });
                    if (t.each(r, function(t, e) { var s = e[1]; return i.substr(l, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0], l += s.length, !1) : void 0 }), -1 !== o) return o + 1;
                    throw "Unknown name at position " + l
                },
                C = function() {
                    if (i.charAt(l) !== e.charAt(n)) throw "Unexpected literal at position " + l;
                    l++
                };
            for (n = 0; e.length > n; n++)
                if (b) "'" !== e.charAt(n) || y("'") ? C() : b = !1;
                else switch (e.charAt(n)) {
                    case "d":
                        v = w("d");
                        break;
                    case "D":
                        x("D", u, d);
                        break;
                    case "o":
                        _ = w("o");
                        break;
                    case "m":
                        g = w("m");
                        break;
                    case "M":
                        g = x("M", p, f);
                        break;
                    case "y":
                        m = w("y");
                        break;
                    case "@":
                        m = (a = new Date(w("@"))).getFullYear(), g = a.getMonth() + 1, v = a.getDate();
                        break;
                    case "!":
                        m = (a = new Date((w("!") - this._ticksTo1970) / 1e4)).getFullYear(), g = a.getMonth() + 1, v = a.getDate();
                        break;
                    case "'":
                        y("'") ? C() : b = !0;
                        break;
                    default:
                        C()
                }
            if (i.length > l && (r = i.substr(l), !/^\s+/.test(r))) throw "Extra/unparsed characters found in date: " + r;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= m ? 0 : -100)), _ > -1)
                for (g = 1, v = _; !((o = this._getDaysInMonth(m, g - 1)) >= v);) g++, v -= o;
            if ((a = this._daylightSavingAdjust(new Date(m, g - 1, v))).getFullYear() !== m || a.getMonth() + 1 !== g || a.getDate() !== v) throw "Invalid date";
            return a
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(t, e, i) {
            if (!e) return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                o = (i ? i.dayNames : null) || this._defaults.dayNames,
                r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                a = (i ? i.monthNames : null) || this._defaults.monthNames,
                l = function(e) { var i = t.length > s + 1 && t.charAt(s + 1) === e; return i && s++, i },
                h = function(t, e, i) {
                    var s = "" + e;
                    if (l(t))
                        for (; i > s.length;) s = "0" + s;
                    return s
                },
                c = function(t, e, i, s) { return l(t) ? s[e] : i[e] },
                u = "",
                d = !1;
            if (e)
                for (s = 0; t.length > s; s++)
                    if (d) "'" !== t.charAt(s) || l("'") ? u += t.charAt(s) : d = !1;
                    else switch (t.charAt(s)) {
                        case "d":
                            u += h("d", e.getDate(), 2);
                            break;
                        case "D":
                            u += c("D", e.getDay(), n, o);
                            break;
                        case "o":
                            u += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            u += h("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            u += c("M", e.getMonth(), r, a);
                            break;
                        case "y":
                            u += l("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
                            break;
                        case "@":
                            u += e.getTime();
                            break;
                        case "!":
                            u += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            l("'") ? u += "'" : d = !0;
                            break;
                        default:
                            u += t.charAt(s)
                    }
            return u
        },
        _possibleChars: function(t) {
            var e, i = "",
                s = !1,
                n = function(i) { var s = t.length > e + 1 && t.charAt(e + 1) === i; return s && e++, s };
            for (e = 0; t.length > e; e++)
                if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
                else switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        n("'") ? i += "'" : s = !0;
                        break;
                    default:
                        i += t.charAt(e)
                }
            return i
        },
        _get: function(t, e) { return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e] },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"),
                    s = t.lastVal = t.input ? t.input.val() : null,
                    n = this._getDefaultDate(t),
                    o = n,
                    r = this._getFormatConfig(t);
                try { o = this.parseDate(i, s, r) || n } catch (t) { s = e ? "" : s }
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function(t) { return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date)) },
        _determineDate: function(e, i, s) {
            var n = null == i || "" === i ? s : "string" == typeof i ? function(i) {
                try { return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e)) } catch (t) {}
                for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, n = s.getFullYear(), o = s.getMonth(), r = s.getDate(), a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = a.exec(i); l;) {
                    switch (l[2] || "d") {
                        case "d":
                        case "D":
                            r += parseInt(l[1], 10);
                            break;
                        case "w":
                        case "W":
                            r += 7 * parseInt(l[1], 10);
                            break;
                        case "m":
                        case "M":
                            o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(n, o));
                            break;
                        case "y":
                        case "Y":
                            n += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(n, o))
                    }
                    l = a.exec(i)
                }
                return new Date(n, o, r)
            }(i) : "number" == typeof i ? isNaN(i) ? s : function(t) { var e = new Date; return e.setDate(e.getDate() + t), e }(i) : new Date(i.getTime());
            return (n = n && "Invalid Date" == "" + n ? s : n) && (n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0)), this._daylightSavingAdjust(n)
        },
        _daylightSavingAdjust: function(t) { return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null },
        _setDate: function(t, e, i) {
            var s = !e,
                n = t.selectedMonth,
                o = t.selectedYear,
                r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
        },
        _getDate: function(t) { return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay)) },
        _attachHandlers: function(e) {
            var i = this._get(e, "stepMonths"),
                s = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = { prev: function() { t.datepicker._adjustDate(s, -i, "M") }, next: function() { t.datepicker._adjustDate(s, +i, "M") }, hide: function() { t.datepicker._hideDatepicker() }, today: function() { t.datepicker._gotoToday(s) }, selectDay: function() { return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1 }, selectMonth: function() { return t.datepicker._selectMonthYear(s, this, "M"), !1 }, selectYear: function() { return t.datepicker._selectMonthYear(s, this, "Y"), !1 } };
                t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(t) {
            var e, i, s, n, o, r, a, l, h, c, u, d, p, f, m, g, v, _, b, y, w, x, C, k, T, S, D, I, E, P, A, M, $, O, N, H, L, z, W, j = new Date,
                R = this._daylightSavingAdjust(new Date(j.getFullYear(), j.getMonth(), j.getDate())),
                F = this._get(t, "isRTL"),
                q = this._get(t, "showButtonPanel"),
                B = this._get(t, "hideIfNoPrevNext"),
                Y = this._get(t, "navigationAsDateFormat"),
                U = this._getNumberOfMonths(t),
                X = this._get(t, "showCurrentAtPos"),
                V = this._get(t, "stepMonths"),
                K = 1 !== U[0] || 1 !== U[1],
                Q = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                G = this._getMinMaxDate(t, "min"),
                Z = this._getMinMaxDate(t, "max"),
                J = t.drawMonth - X,
                tt = t.drawYear;
            if (0 > J && (J += 12, tt--), Z)
                for (e = this._daylightSavingAdjust(new Date(Z.getFullYear(), Z.getMonth() - U[0] * U[1] + 1, Z.getDate())), e = G && G > e ? G : e; this._daylightSavingAdjust(new Date(tt, J, 1)) > e;) 0 > --J && (J = 11, tt--);
            for (t.drawMonth = J, t.drawYear = tt, i = this._get(t, "prevText"), i = Y ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, J - V, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, tt, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (F ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (F ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = Y ? this.formatDate(n, this._daylightSavingAdjust(new Date(tt, J + V, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, tt, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (F ? "w" : "e") + "'>" + n + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (F ? "w" : "e") + "'>" + n + "</span></a>", r = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? Q : R, r = Y ? this.formatDate(r, a, this._getFormatConfig(t)) : r, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = q ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (F ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (F ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", x = 0; U[0] > x; x++) {
                for (C = "", this.maxRows = 4, k = 0; U[1] > k; k++) {
                    if (T = this._daylightSavingAdjust(new Date(tt, J, t.selectedDay)), S = " ui-corner-all", D = "", K) {
                        if (D += "<div class='ui-datepicker-group", U[1] > 1) switch (k) {
                            case 0:
                                D += " ui-datepicker-group-first", S = " ui-corner-" + (F ? "right" : "left");
                                break;
                            case U[1] - 1:
                                D += " ui-datepicker-group-last", S = " ui-corner-" + (F ? "left" : "right");
                                break;
                            default:
                                D += " ui-datepicker-group-middle", S = ""
                        }
                        D += "'>"
                    }
                    for (D += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === x ? F ? o : s : "") + (/all|right/.test(S) && 0 === x ? F ? s : o : "") + this._generateMonthYearHeader(t, J, tt, G, Z, x > 0 || k > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", I = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) E = (w + c) % 7, I += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[E] + "'>" + p[E] + "</span></th>";
                    for (D += I + "</tr></thead><tbody>", P = this._getDaysInMonth(tt, J), tt === t.selectedYear && J === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, P)), A = (this._getFirstDayOfMonth(tt, J) - c + 7) % 7, M = Math.ceil((A + P) / 7), $ = K && this.maxRows > M ? this.maxRows : M, this.maxRows = $, O = this._daylightSavingAdjust(new Date(tt, J, 1 - A)), N = 0; $ > N; N++) {
                        for (D += "<tr>", H = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(O) + "</td>" : "", w = 0; 7 > w; w++) L = g ? g.apply(t.input ? t.input[0] : null, [O]) : [!0, ""], z = O.getMonth() !== J, W = z && !_ || !L[0] || G && G > O || Z && O > Z, H += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (z ? " ui-datepicker-other-month" : "") + (O.getTime() === T.getTime() && J === t.selectedMonth && t._keyEvent || b.getTime() === O.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (W ? " " + this._unselectableClass + " ui-state-disabled" : "") + (z && !v ? "" : " " + L[1] + (O.getTime() === Q.getTime() ? " " + this._currentClass : "") + (O.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (z && !v || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (W ? "" : " data-handler='selectDay' data-event='click' data-month='" + O.getMonth() + "' data-year='" + O.getFullYear() + "'") + ">" + (z && !v ? "&#xa0;" : W ? "<span class='ui-state-default'>" + O.getDate() + "</span>" : "<a class='ui-state-default" + (O.getTime() === R.getTime() ? " ui-state-highlight" : "") + (O.getTime() === Q.getTime() ? " ui-state-active" : "") + (z ? " ui-priority-secondary" : "") + "' href='#'>" + O.getDate() + "</a>") + "</td>", O.setDate(O.getDate() + 1), O = this._daylightSavingAdjust(O);
                        D += H + "</tr>"
                    }++J > 11 && (J = 0, tt++), C += D += "</tbody></table>" + (K ? "</div>" + (U[0] > 0 && k === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                }
                y += C
            }
            return y += h, t._keyEvent = !1, y
        },
        _generateMonthYearHeader: function(t, e, i, s, n, o, r, a) {
            var l, h, c, u, d, p, f, m, g = this._get(t, "changeMonth"),
                v = this._get(t, "changeYear"),
                _ = this._get(t, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                y = "";
            if (o || !g) y += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
            else {
                for (l = s && s.getFullYear() === i, h = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!l || c >= s.getMonth()) && (!h || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + a[c] + "</option>");
                y += "</select>"
            }
            if (_ || (b += y + (!o && g && v ? "" : "&#xa0;")), !t.yearshtml)
                if (t.yearshtml = "", o || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), f = (p = function(t) { var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10); return isNaN(e) ? d : e })(u[0]), m = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                }
            return b += this._get(t, "yearSuffix"), _ && (b += (!o && g && v ? "" : "&#xa0;") + y), b += "</div>"
        },
        _adjustInstDate: function(t, e, i) {
            var s = t.selectedYear + ("Y" === i ? e : 0),
                n = t.selectedMonth + ("M" === i ? e : 0),
                o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
                r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
            t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min"),
                s = this._getMinMaxDate(t, "max"),
                n = i && i > e ? i : e;
            return s && n > s ? s : n
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function(t) { var e = this._get(t, "numberOfMonths"); return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e },
        _getMinMaxDate: function(t, e) { return this._determineDate(t, this._get(t, e + "Date"), null) },
        _getDaysInMonth: function(t, e) { return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate() },
        _getFirstDayOfMonth: function(t, e) { return new Date(t, e, 1).getDay() },
        _canAdjustMonth: function(t, e, i, s) {
            var n = this._getNumberOfMonths(t),
                o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
            return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
        },
        _isInRange: function(t, e) {
            var i, s, n = this._getMinMaxDate(t, "min"),
                o = this._getMinMaxDate(t, "max"),
                r = null,
                a = null,
                l = this._get(t, "yearRange");
            return l && (i = l.split(":"), s = (new Date).getFullYear(), r = parseInt(i[0], 10), a = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += s), i[1].match(/[+\-].*/) && (a += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!r || e.getFullYear() >= r) && (!a || a >= e.getFullYear())
        },
        _getFormatConfig: function(t) { var e = this._get(t, "shortYearCutoff"); return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), { shortYearCutoff: e, dayNamesShort: this._get(t, "dayNamesShort"), dayNames: this._get(t, "dayNames"), monthNamesShort: this._get(t, "monthNamesShort"), monthNames: this._get(t, "monthNames") } },
        _formatDate: function(t, e, i, s) { e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear); var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay)); return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t)) }
    }), t.fn.datepicker = function(e) {
        if (!this.length) return this;
        t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() { "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e) }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }, t.datepicker = new e, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: { "ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all" },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(e) {
                    var i = t(this).css(e).offset().top;
                    0 > i && t(this).css("top", e.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 },
        resizableRelatedOptions: { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 },
        _create: function() { this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height }, this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus() },
        _init: function() { this.options.autoOpen && this.open() },
        _appendTo: function() { var e = this.options.appendTo; return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0) },
        _destroy: function() {
            var t, e = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function() { return this.uiDialog },
        disable: t.noop,
        enable: t.noop,
        close: function(e) {
            var i = this;
            this._isOpen && !1 !== this._trigger("beforeClose", e) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() { i._trigger("close", e) }))
        },
        isOpen: function() { return this._isOpen },
        moveToTop: function() { this._moveToTop() },
        _moveToTop: function(e, i) {
            var s = !1,
                n = this.uiDialog.siblings(".ui-front:visible").map(function() { return +t(this).css("z-index") }).get(),
                o = Math.max.apply(null, n);
            return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), s = !0), s && !i && this._trigger("focus", e), s
        },
        open: function() { var e = this; return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() { e._focusTabbable(), e._trigger("focus") }), this._makeFocusTarget(), void this._trigger("open")) },
        _focusTabbable: function() {
            var t = this._focusedElement;
            t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
        },
        _keepFocus: function(e) {
            function i() {
                var e = t.ui.safeActiveElement(this.document[0]);
                this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable()
            }
            e.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = t("<div>").hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                keydown: function(e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                    if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"),
                            s = i.filter(":first"),
                            n = i.filter(":last");
                        e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() { n.trigger("focus") }), e.preventDefault()) : (this._delay(function() { s.trigger("focus") }), e.preventDefault())
                    }
                },
                mousedown: function(t) { this._moveToTop(t) && this._focusTabbable() }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") })
        },
        _createTitlebar: function() {
            var e;
            this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, { mousedown: function(e) { t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus") } }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({ label: t("<a>").text(this.options.closeText).html(), icon: "ui-icon-closethick", showLabel: !1 }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, { click: function(t) { t.preventDefault(), this.close(t) } }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({ "aria-labelledby": e.attr("id") })
        },
        _title: function(t) { this.options.title ? t.text(this.options.title) : t.html("&#160;") },
        _createButtonPane: function() { this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons() },
        _createButtons: function() {
            var e = this,
                i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, function(i, s) {
                var n, o;
                s = t.isFunction(s) ? { click: s, text: i } : s, s = t.extend({ type: "button" }, s), n = s.click, o = { icon: s.icon, iconPosition: s.iconPosition, showLabel: s.showLabel, icons: s.icons, text: s.text }, delete s.click, delete s.icon, delete s.iconPosition, delete s.showLabel, delete s.icons, "boolean" == typeof s.text && delete s.text, t("<button></button>", s).button(o).appendTo(e.uiButtonSet).on("click", function() { n.apply(e.element[0], arguments) })
            }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            function e(t) { return { position: t.position, offset: t.offset } }
            var i = this,
                s = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(s, n) { i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n)) },
                drag: function(t, s) { i._trigger("drag", t, e(s)) },
                stop: function(n, o) {
                    var r = o.offset.left - i.document.scrollLeft(),
                        a = o.offset.top - i.document.scrollTop();
                    s.position = { my: "left top", at: "left" + (r >= 0 ? "+" : "") + r + " top" + (a >= 0 ? "+" : "") + a, of: i.window }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o))
                }
            })
        },
        _makeResizable: function() {
            function e(t) { return { originalPosition: t.originalPosition, originalSize: t.originalSize, position: t.position, size: t.size } }
            var i = this,
                s = this.options,
                n = s.resizable,
                o = this.uiDialog.css("position"),
                r = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: this._minHeight(),
                handles: r,
                start: function(s, n) { i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n)) },
                resize: function(t, s) { i._trigger("resize", t, e(s)) },
                stop: function(n, o) {
                    var r = i.uiDialog.offset(),
                        a = r.left - i.document.scrollLeft(),
                        l = r.top - i.document.scrollTop();
                    s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = { my: "left top", at: "left" + (a >= 0 ? "+" : "") + a + " top" + (l >= 0 ? "+" : "") + l, of: i.window }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o))
                }
            }).css("position", o)
        },
        _trackFocus: function() { this._on(this.widget(), { focusin: function(e) { this._makeFocusTarget(), this._focusedElement = t(e.target) } }) },
        _makeFocusTarget: function() { this._untrackInstance(), this._trackingInstances().unshift(this) },
        _untrackInstance: function() {
            var e = this._trackingInstances(),
                i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
        },
        _trackingInstances: function() { var t = this.document.data("ui-dialog-instances"); return t || (t = [], this.document.data("ui-dialog-instances", t)), t },
        _minHeight: function() { var t = this.options; return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height) },
        _position: function() {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
        },
        _setOptions: function(e) {
            var i = this,
                s = !1,
                n = {};
            t.each(e, function(t, e) { i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e) }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
        },
        _setOption: function(e, i) { var s, n, o = this.uiDialog; "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({ label: t("<a>").text("" + this.options.closeText).html() }), "draggable" === e && ((s = o.is(":data(ui-draggable)")) && !i && o.draggable("destroy"), !s && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && ((n = o.is(":data(ui-resizable)")) && !i && o.resizable("destroy"), n && "string" == typeof i && o.resizable("option", "handles", i), n || !1 === i || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))) },
        _size: function() {
            var t, e, i, s = this.options;
            this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({ height: "auto", width: s.width }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() { this.iframeBlocks = this.document.find("iframe").map(function() { var e = t(this); return t("<div>").css({ position: "absolute", width: e.outerWidth(), height: e.outerHeight() }).appendTo(e.parent()).offset(e.offset())[0] }) },
        _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) },
        _allowInteraction: function(e) { return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length },
        _createOverlay: function() {
            if (this.options.modal) {
                var e = !0;
                this._delay(function() { e = !1 }), this.document.data("ui-dialog-overlays") || this._on(this.document, { focusin: function(t) { e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable()) } }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, { mousedown: "_keepFocus" }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var t = this.document.data("ui-dialog-overlays") - 1;
                t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
            }
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.dialog", t.ui.dialog, { options: { dialogClass: "" }, _createWrapper: function() { this._super(), this.uiDialog.addClass(this.options.dialogClass) }, _setOption: function(t, e) { "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments) } }), t.ui.dialog, t.widget("ui.progressbar", {
        version: "1.12.1",
        options: { classes: { "ui-progressbar": "ui-corner-all", "ui-progressbar-value": "ui-corner-left", "ui-progressbar-complete": "ui-corner-right" }, max: 100, value: 0, change: null, complete: null },
        min: 0,
        _create: function() { this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({ role: "progressbar", "aria-valuemin": this.min }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue() },
        _destroy: function() { this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove() },
        value: function(t) { return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue()) },
        _constrainedValue: function(t) { return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t)) },
        _setOptions: function(t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
        },
        _setOption: function(t, e) { "max" === t && (e = Math.max(this.min, e)), this._super(t, e) },
        _setOptionDisabled: function(t) { this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t) },
        _percentage: function() { return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min) },
        _refreshValue: function() {
            var e = this.options.value,
                i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": e }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
        }
    }), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: { appendTo: null, classes: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" }, disabled: null, icons: { button: "ui-icon-triangle-1-s" }, position: { my: "left top", at: "left bottom", collision: "none" }, width: !1, change: null, close: null, focus: null, open: null, select: null },
        _create: function() {
            var e = this.element.uniqueId().attr("id");
            this.ids = { element: e, button: e + "-button", menu: e + "-menu" }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
        },
        _drawButton: function() {
            var e, i = this,
                s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, { click: function(t) { this.button.focus(), t.preventDefault() } }), this.element.hide(), this.button = t("<span>", { tabindex: this.options.disabled ? -1 : 0, id: this.ids.button, role: "combobox", "aria-expanded": "false", "aria-autocomplete": "list", "aria-owns": this.ids.menu, "aria-haspopup": "true", title: this.element.attr("title") }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(s).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() { i._rendered || i._refreshMenu() })
        },
        _drawMenu: function() {
            var e = this;
            this.menu = t("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                classes: { "ui-menu": "ui-corner-bottom" },
                role: "listbox",
                select: function(t, i) { t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t) },
                focus: function(t, i) {
                    var s = i.item.data("ui-selectmenu-item");
                    null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, { item: s }), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"))
                }
            }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() { return !1 }, this.menuInstance._isDivider = function() { return !1 }
        },
        refresh: function() { this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton() },
        _refreshMenu: function() {
            var t, e = this.element.find("option");
            this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(t) { this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t))) },
        _position: function() { this.menuWrap.position(t.extend({ of: this.button }, this.options.position)) },
        close: function(t) { this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t)) },
        widget: function() { return this.button },
        menuWidget: function() { return this.menu },
        _renderButtonItem: function(e) { var i = t("<span>"); return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i },
        _renderMenu: function(e, i) {
            var s = this,
                n = "";
            t.each(i, function(i, o) {
                var r;
                o.optgroup !== n && (r = t("<li>", { text: o.optgroup }), s._addClass(r, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), r.appendTo(e), n = o.optgroup), s._renderItemData(e, o)
            })
        },
        _renderItemData: function(t, e) { return this._renderItem(t, e).data("ui-selectmenu-item", e) },
        _renderItem: function(e, i) {
            var s = t("<li>"),
                n = t("<div>", { title: i.element.attr("title") });
            return i.disabled && this._addClass(s, null, "ui-state-disabled"), this._setText(n, i.label), s.append(n).appendTo(e)
        },
        _setText: function(t, e) { e ? t.text(e) : t.html("&#160;") },
        _move: function(t, e) {
            var i, s, n = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), n += ":not(.ui-state-disabled)"), (s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0)).length && this.menuInstance.focus(e, s)
        },
        _getSelectedItem: function() { return this.menuItems.eq(this.element[0].selectedIndex).parent("li") },
        _toggle: function(t) { this[this.isOpen ? "close" : "open"](t) },
        _setSelection: function() {
            var t;
            this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
        },
        _documentClick: { mousedown: function(e) { this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e)) } },
        _buttonEvents: {
            mousedown: function() {
                var t;
                window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange()
            },
            click: function(t) { this._setSelection(), this._toggle(t) },
            keydown: function(e) {
                var i = !0;
                switch (e.keyCode) {
                    case t.ui.keyCode.TAB:
                    case t.ui.keyCode.ESCAPE:
                        this.close(e), i = !1;
                        break;
                    case t.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(e);
                        break;
                    case t.ui.keyCode.UP:
                        e.altKey ? this._toggle(e) : this._move("prev", e);
                        break;
                    case t.ui.keyCode.DOWN:
                        e.altKey ? this._toggle(e) : this._move("next", e);
                        break;
                    case t.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this._move("prev", e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this._move("next", e);
                        break;
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.PAGE_UP:
                        this._move("first", e);
                        break;
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_DOWN:
                        this._move("last", e);
                        break;
                    default:
                        this.menu.trigger(e), i = !1
                }
                i && e.preventDefault()
            }
        },
        _selectFocusedItem: function(t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
        },
        _select: function(t, e) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, { item: t }), t.index !== i && this._trigger("change", e, { item: t }), this.close(e)
        },
        _setAria: function(t) {
            var e = this.menuItems.eq(t.index).attr("id");
            this.button.attr({ "aria-labelledby": e, "aria-activedescendant": e }), this.menu.attr("aria-activedescendant", e)
        },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
            }
            this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
        },
        _setOptionDisabled: function(t) { this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0) },
        _appendTo: function() { var e = this.options.appendTo; return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e },
        _toggleAttr: function() { this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen) },
        _resizeButton: function() { var t = this.options.width; return !1 === t ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), void this.button.outerWidth(t)) },
        _resizeMenu: function() { this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1)) },
        _getCreateOptions: function() { var t = this._super(); return t.disabled = this.element.prop("disabled"), t },
        _parseOptions: function(e) {
            var i = this,
                s = [];
            e.each(function(e, n) { s.push(i._parseOption(t(n), e)) }), this.items = s
        },
        _parseOption: function(t, e) { var i = t.parent("optgroup"); return { element: t, index: e, value: t.val(), label: t.text(), optgroup: i.attr("label") || "", disabled: i.prop("disabled") || t.prop("disabled") } },
        _destroy: function() { this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element) }
    }]), t.widget("ui.slider", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: { animate: !1, classes: { "ui-slider": "ui-corner-all", "ui-slider-handle": "ui-corner-all", "ui-slider-range": "ui-corner-all ui-widget-header" }, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null },
        numPages: 5,
        _create: function() { this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1 },
        _refresh: function() { this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue() },
        _createHandles: function() {
            var e, i, s = this.options,
                n = this.element.find(".ui-slider-handle"),
                o = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) o.push("<span tabindex='0'></span>");
            this.handles = n.add(t(o.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(e) { t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0) })
        },
        _createRange: function() {
            var e = this.options;
            e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({ left: "", bottom: "" })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() { this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles) },
        _destroy: function() { this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy() },
        _mouseCapture: function(e) {
            var i, s, n, o, r, a, l, h = this,
                c = this.options;
            return !c.disabled && (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), i = { x: e.pageX, y: e.pageY }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                var i = Math.abs(s - h.values(e));
                (n > i || n === i && (e === h._lastChangedValue || h.values(e) === c.min)) && (n = i, o = t(this), r = e)
            }), !1 !== this._start(e, r) && (this._mouseSliding = !0, this._handleIndex = r, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), a = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? { left: 0, top: 0 } : { left: e.pageX - a.left - o.width() / 2, top: e.pageY - a.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(e, r, s), this._animateOff = !0, !0))
        },
        _mouseStart: function() { return !0 },
        _mouseDrag: function(t) {
            var e = { x: t.pageX, y: t.pageY },
                i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function(t) { return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1 },
        _detectOrientation: function() { this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal" },
        _normValueFromMouse: function(t) { var e, i, s, n, o; return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (s = i / e) > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o) },
        _uiHash: function(t, e, i) { var s = { handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value() }; return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s },
        _hasMultipleValues: function() { return this.options.values && this.options.values.length },
        _start: function(t, e) { return this._trigger("start", t, this._uiHash(e)) },
        _slide: function(t, e, i) {
            var s, n = this.value(),
                o = this.values();
            this._hasMultipleValues() && (s = this.values(e ? 0 : 1), n = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(s, i) : Math.max(s, i)), o[e] = i), i !== n && !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i))
        },
        _stop: function(t, e) { this._trigger("stop", t, this._uiHash(e)) },
        _change: function(t, e) { this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e))) },
        value: function(t) { return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value() },
        values: function(e, i) {
            var s, n, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
            for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var s, n = 0;
            switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
                case "orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _setOptionDisabled: function(t) { this._super(t), this._toggleClass(null, "ui-state-disabled", !!t) },
        _value: function() { var t = this.options.value; return t = this._trimAlignValue(t) },
        _values: function(t) { var e, i, s; if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e); if (this._hasMultipleValues()) { for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]); return i } return [] },
        _trimAlignValue: function(t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e,
                s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
        },
        _calculateNewMax: function() {
            var t = this.options.max,
                e = this._valueMin(),
                i = this.options.step;
            (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
        },
        _precision: function() { var t = this._precisionOf(this.options.step); return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t },
        _precisionOf: function(t) {
            var e = "" + t,
                i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _valueMin: function() { return this.options.min },
        _valueMax: function() { return this.max },
        _refreshRange: function(t) { "vertical" === t && this.range.css({ width: "", left: "" }), "horizontal" === t && this.range.css({ height: "", bottom: "" }) },
        _refreshValue: function() {
            var e, i, s, n, o, r = this.options.range,
                a = this.options,
                l = this,
                h = !this._animateOff && a.animate,
                c = {};
            this._hasMultipleValues() ? this.handles.each(function(s) { i = (l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, a.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({ left: i + "%" }, a.animate), 1 === s && l.range[h ? "animate" : "css"]({ width: i - e + "%" }, { queue: !1, duration: a.animate })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({ bottom: i + "%" }, a.animate), 1 === s && l.range[h ? "animate" : "css"]({ height: i - e + "%" }, { queue: !1, duration: a.animate }))), e = i }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? (s - n) / (o - n) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ width: i + "%" }, a.animate), "max" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ width: 100 - i + "%" }, a.animate), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ height: i + "%" }, a.animate), "max" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ height: 100 - i + "%" }, a.animate))
        },
        _handleEvents: {
            keydown: function(e) {
                var i, s, n, o = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), !1 === this._start(e, o))) return
                }
                switch (n = this.options.step, i = s = this._hasMultipleValues() ? this.values(o) : this.value(), e.keyCode) {
                    case t.ui.keyCode.HOME:
                        s = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        s = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (i === this._valueMax()) return;
                        s = this._trimAlignValue(i + n);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (i === this._valueMin()) return;
                        s = this._trimAlignValue(i - n)
                }
                this._slide(e, o, s)
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
            }
        }
    }), t.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: { classes: { "ui-spinner": "ui-corner-all", "ui-spinner-down": "ui-corner-br", "ui-spinner-up": "ui-corner-tr" }, culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null },
        _create: function() { this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } }) },
        _getCreateOptions: function() {
            var e = this._super(),
                i = this.element;
            return t.each(["min", "max", "step"], function(t, s) {
                var n = i.attr(s);
                null != n && n.length && (e[s] = n)
            }), e
        },
        _events: {
            keydown: function(t) { this._start(t) && this._keydown(t) && t.preventDefault() },
            keyup: "_stop",
            focus: function() { this.previous = this.element.val() },
            blur: function(t) { return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t))) },
            mousewheel: function(t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t)) return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() { this.spinning && this._stop(t) }, 100), t.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(e) {
                function i() { this.element[0] === t.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = s, this._delay(function() { this.previous = s })) }
                var s;
                s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() { delete this.cancelBlur, i.call(this) }), !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(e) { return t(e.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0 },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() { this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>") },
        _draw: function() { this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({ classes: { "ui-button": "" } }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({ icon: this.options.icons.up, showLabel: !1 }), this.buttons.last().button({ icon: this.options.icons.down, showLabel: !1 }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height()) },
        _keydown: function(e) {
            var i = this.options,
                s = t.ui.keyCode;
            switch (e.keyCode) {
                case s.UP:
                    return this._repeat(null, 1, e), !0;
                case s.DOWN:
                    return this._repeat(null, -1, e), !0;
                case s.PAGE_UP:
                    return this._repeat(null, i.page, e), !0;
                case s.PAGE_DOWN:
                    return this._repeat(null, -i.page, e), !0
            }
            return !1
        },
        _start: function(t) { return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0, !0) },
        _repeat: function(t, e, i) { t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() { this._repeat(40, e, i) }, t), this._spin(e * this.options.step, i) },
        _spin: function(t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e, { value: i }) || (this._value(i), this.counter++)
        },
        _increment: function(e) { var i = this.options.incremental; return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1 },
        _precision: function() { var t = this._precisionOf(this.options.step); return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t },
        _precisionOf: function(t) {
            var e = "" + t,
                i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _adjustValue: function(t) { var e, i, s = this.options; return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t },
        _stop: function(t) { this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t)) },
        _setOption: function(t, e) { var i, s, n; return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i))) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), this._addClass(n, null, e.down)), void this._super(t, e)) },
        _setOptionDisabled: function(t) { this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable") },
        _setOptions: o(function(t) { this._super(t) }),
        _parse: function(t) { return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t },
        _format: function(t) { return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t },
        _refresh: function() { this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) }) },
        isValid: function() { var t = this.value(); return null !== t && t === this._adjustValue(t) },
        _value: function(t, e) { var i; "" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i)), this.element.val(t), this._refresh() },
        _destroy: function() { this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element) },
        stepUp: o(function(t) { this._stepUp(t) }),
        _stepUp: function(t) { this._start() && (this._spin((t || 1) * this.options.step), this._stop()) },
        stepDown: o(function(t) { this._stepDown(t) }),
        _stepDown: function(t) { this._start() && (this._spin((t || 1) * -this.options.step), this._stop()) },
        pageUp: o(function(t) { this._stepUp((t || 1) * this.options.page) }),
        pageDown: o(function(t) { this._stepDown((t || 1) * this.options.page) }),
        value: function(t) { return arguments.length ? void o(this._value).call(this, t) : this._parse(this.element.val()) },
        widget: function() { return this.uiSpinner }
    }), !1 !== t.uiBackCompat && t.widget("ui.spinner", t.ui.spinner, { _enhance: function() { this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml()) }, _uiSpinnerHtml: function() { return "<span>" }, _buttonHtml: function() { return "<a></a><a></a>" } }), t.ui.spinner, t.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: { active: null, classes: { "ui-tabs": "ui-corner-all", "ui-tabs-nav": "ui-corner-all", "ui-tabs-panel": "ui-corner-bottom", "ui-tabs-tab": "ui-corner-top" }, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null },
        _isLocal: function() {
            var t = /#.*$/;
            return function(e) {
                var i, s;
                i = e.href.replace(t, ""), s = location.href.replace(t, "");
                try { i = decodeURIComponent(i) } catch (t) {}
                try { s = decodeURIComponent(s) } catch (t) {}
                return e.hash.length > 1 && i === s
            }
        }(),
        _create: function() {
            var e = this,
                i = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) { return e.tabs.index(t) }))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function() {
            var e = this.options.active,
                i = this.options.collapsible,
                s = location.hash.substring(1);
            return null === e && (s && this.tabs.each(function(i, n) { return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0 }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = !!this.tabs.length && 0)), !1 !== e && -1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0), !i && !1 === e && this.anchors.length && (e = 0), e
        },
        _getCreateEventData: function() { return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t() } },
        _tabKeydown: function(e) {
            var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
                s = this.tabs.index(i),
                n = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        s++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        n = !1, s--;
                        break;
                    case t.ui.keyCode.END:
                        s = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        s = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(s);
                    case t.ui.keyCode.ENTER:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(s !== this.options.active && s);
                    default:
                        return
                }
                e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function() { this.option("active", s) }, this.delay))
            }
        },
        _panelKeydown: function(e) { this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus")) },
        _handlePageNav: function(e) { return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0 },
        _findNextTab: function(e, i) {
            function s() { return e > n && (e = 0), 0 > e && (e = n), e }
            for (var n = this.tabs.length - 1; - 1 !== t.inArray(s(), this.options.disabled);) e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function(t, e) { return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t },
        _setOption: function(t, e) { return "active" === t ? void this._activate(e) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e))) },
        _sanitizeSelector: function(t) { return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "" },
        refresh: function() {
            var e = this.options,
                i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) { return i.index(t) }), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },
        _refresh: function() { this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }), this.active.length ? (this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0) },
        _processTabs: function() {
            var e = this,
                i = this.tabs,
                s = this.anchors,
                n = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) { t(this).is(".ui-state-disabled") && e.preventDefault() }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() { t(this).closest("li").is(".ui-state-disabled") && this.blur() }), this.tabs = this.tablist.find("> li:has(a[href])").attr({ role: "tab", tabIndex: -1 }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() { return t("a", this)[0] }).attr({ role: "presentation", tabIndex: -1 }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function(i, s) {
                var n, o, r, a = t(s).uniqueId().attr("id"),
                    l = t(s).closest("li"),
                    h = l.attr("aria-controls");
                e._isLocal(s) ? (n = s.hash, r = n.substring(1), o = e.element.find(e._sanitizeSelector(n))) : (r = l.attr("aria-controls") || t({}).uniqueId()[0].id, n = "#" + r, (o = e.element.find(n)).length || (o = e._createPanel(r)).insertAfter(e.panels[i - 1] || e.tablist), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), h && l.data("ui-tabs-aria-controls", h), l.attr({ "aria-controls": r, "aria-labelledby": a }), o.attr("aria-labelledby", a)
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
        },
        _getList: function() { return this.tablist || this.element.find("ol, ul").eq(0) },
        _createPanel: function(e) { return t("<div>").attr("id", e).data("ui-tabs-destroy", !0) },
        _setOptionDisabled: function(e) {
            var i, s, n;
            for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++) i = t(s), !0 === e || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === e)
        },
        _setupEvents: function(e) {
            var i = {};
            e && t.each(e.split(" "), function(t, e) { i[e] = "_eventHandler" }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, { click: function(t) { t.preventDefault() } }), this._on(this.anchors, i), this._on(this.tabs, { keydown: "_tabKeydown" }), this._on(this.panels, { keydown: "_panelKeydown" }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(e) {
            var i, s = this.element.parent();
            "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var e = t(this),
                    s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() { i -= t(this).outerHeight(!0) }), this.panels.each(function() { t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height())) }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() { i = Math.max(i, t(this).height("").height()) }).height(i))
        },
        _eventHandler: function(e) {
            var i = this.options,
                s = this.active,
                n = t(e.currentTarget).closest("li"),
                o = n[0] === s[0],
                r = o && i.collapsible,
                a = r ? t() : this._getPanelForTab(n),
                l = s.length ? this._getPanelForTab(s) : t(),
                h = { oldTab: s, oldPanel: l, newTab: r ? t() : n, newPanel: a };
            e.preventDefault(), n.hasClass("ui-state-disabled") || n.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || !1 === this._trigger("beforeActivate", e, h) || (i.active = !r && this.tabs.index(n), this.active = o ? t() : n, this.xhr && this.xhr.abort(), l.length || a.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), a.length && this.load(this.tabs.index(n), e), this._toggle(e, h))
        },
        _toggle: function(e, i) {
            function s() { o.running = !1, o._trigger("activate", e, i) }

            function n() { o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.length && o.options.show ? o._show(r, o.options.show, s) : (r.show(), s()) }
            var o = this,
                r = i.newPanel,
                a = i.oldPanel;
            this.running = !0, a.length && this.options.hide ? this._hide(a, this.options.hide, function() { o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n() }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.hide(), n()), a.attr("aria-hidden", "true"), i.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }), r.length && a.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function() { return 0 === t(this).attr("tabIndex") }).attr("tabIndex", -1), r.attr("aria-hidden", "false"), i.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 })
        },
        _activate: function(e) {
            var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop }))
        },
        _findActive: function(e) { return !1 === e ? t() : this.tabs.eq(e) },
        _getIndex: function(e) { return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() { t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded") }), this.tabs.each(function() {
                var e = t(this),
                    i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(e) { var i = this.options.disabled;!1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) { return t !== e ? t : null }) : t.map(this.tabs, function(t, i) { return i !== e ? i : null })), this._setOptionDisabled(i)) },
        disable: function(e) {
            var i = this.options.disabled;
            if (!0 !== i) {
                if (void 0 === e) i = !0;
                else {
                    if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                    i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                }
                this._setOptionDisabled(i)
            }
        },
        load: function(e, i) {
            e = this._getIndex(e);
            var s = this,
                n = this.tabs.eq(e),
                o = n.find(".ui-tabs-anchor"),
                r = this._getPanelForTab(n),
                a = { tab: n, panel: r },
                l = function(t, e) { "abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), r.removeAttr("aria-busy"), t === s.xhr && delete s.xhr };
            this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, a)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.done(function(t, e, n) { setTimeout(function() { r.html(t), s._trigger("load", i, a), l(n, e) }, 1) }).fail(function(t, e) { setTimeout(function() { l(t, e) }, 1) })))
        },
        _ajaxSettings: function(e, i, s) { var n = this; return { url: e.attr("href").replace(/#.*$/, ""), beforeSend: function(e, o) { return n._trigger("beforeLoad", i, t.extend({ jqXHR: e, ajaxSettings: o }, s)) } } },
        _getPanelForTab: function(e) { var i = t(e).attr("aria-controls"); return this.element.find(this._sanitizeSelector("#" + i)) }
    }), !1 !== t.uiBackCompat && t.widget("ui.tabs", t.ui.tabs, { _processTabs: function() { this._superApply(arguments), this._addClass(this.tabs, "ui-tab") } }), t.ui.tabs, t.widget("ui.tooltip", {
        version: "1.12.1",
        options: { classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" }, content: function() { var e = t(this).attr("title") || ""; return t("<a>").text(e).html() }, hide: !0, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: !0, track: !1, close: null, open: null },
        _addDescribedBy: function(e, i) {
            var s = (e.attr("aria-describedby") || "").split(/\s+/);
            s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
        },
        _removeDescribedBy: function(e) {
            var i = e.data("ui-tooltip-id"),
                s = (e.attr("aria-describedby") || "").split(/\s+/),
                n = t.inArray(i, s); - 1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), (s = t.trim(s.join(" "))) ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
        },
        _create: function() { this._on({ mouseover: "open", focusin: "open" }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([]) },
        _setOption: function(e, i) {
            var s = this;
            this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) { s._updateContent(e.element) })
        },
        _setOptionDisabled: function(t) { this[t ? "_disable" : "_enable"]() },
        _disable: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s.element[0], e.close(n, !0)
            }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() { var e = t(this); return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0 }))
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            }), this.disabledTitles = t([])
        },
        open: function(e) {
            var i = this,
                s = t(e ? e.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function() {
                var e, s = t(this);
                s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = { element: this, title: s.attr("title") }, s.attr("title", ""))
            }), this._registerCloseHandlers(e, s), this._updateContent(s, e))
        },
        _updateContent: function(t, e) {
            var i, s = this.options.content,
                n = this,
                o = e ? e.type : null;
            return "string" == typeof s || s.nodeType || s.jquery ? this._open(e, t, s) : void((i = s.call(t[0], function(i) { n._delay(function() { t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i)) }) })) && this._open(e, t, i))
        },
        _open: function(e, i, s) {
            function n(t) { h.of = t, r.is(":hidden") || r.position(h) }
            var o, r, a, l, h = t.extend({}, this.options.position);
            if (s) {
                if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(s);
                i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), r = o.tooltip, this._addDescribedBy(i, r.attr("id")), r.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), (l = t("<div>").html(r.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, { mousemove: n }), n(e)) : r.position(t.extend({ of: i }, this.options.position)), r.hide(), this._show(r, this.options.show), this.options.track && this.options.show && this.options.show.delay && (a = this.delayedShow = setInterval(function() { r.is(":visible") && (n(h.of), clearInterval(a)) }, t.fx.interval)), this._trigger("open", e, { tooltip: r })
            }
        },
        _registerCloseHandlers: function(e, i) {
            var s = {
                keyup: function(e) {
                    if (e.keyCode === t.ui.keyCode.ESCAPE) {
                        var s = t.Event(e);
                        s.currentTarget = i[0], this.close(s, !0)
                    }
                }
            };
            i[0] !== this.element[0] && (s.remove = function() { this._removeTooltip(this._find(i).tooltip) }), e && "mouseover" !== e.type || (s.mouseleave = "close"), e && "focusin" !== e.type || (s.focusout = "close"), this._on(!0, i, s)
        },
        close: function(e) {
            var i, s = this,
                n = t(e ? e.currentTarget : this.element),
                o = this._find(n);
            return o ? (i = o.tooltip, void(o.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() { s._removeTooltip(t(this)) }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) { t(i.element).attr("title", i.title), delete s.parents[e] }), o.closing = !0, this._trigger("close", e, { tooltip: i }), o.hiding || (o.closing = !1)))) : void n.removeData("ui-tooltip-open")
        },
        _tooltip: function(e) {
            var i = t("<div>").attr("role", "tooltip"),
                s = t("<div>").appendTo(i),
                n = i.uniqueId().attr("id");
            return this._addClass(s, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[n] = { element: e, tooltip: i }
        },
        _find: function(t) { var e = t.data("ui-tooltip-id"); return e ? this.tooltips[e] : null },
        _removeTooltip: function(t) { t.remove(), delete this.tooltips[t.attr("id")] },
        _appendTo: function(t) { var e = t.closest(".ui-front, dialog"); return e.length || (e = this.document[0].body), e },
        _destroy: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur"),
                    o = s.element;
                n.target = n.currentTarget = o[0], e.close(n, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
            }), this.liveRegion.remove()
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.tooltip", t.ui.tooltip, { options: { tooltipClass: null }, _tooltip: function() { var t = this._superApply(arguments); return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t } }), t.ui.tooltip;
    var d = "ui-effects-",
        p = "ui-effects-style",
        f = "ui-effects-animated",
        m = t;
    t.effects = { effect: {} },
        function(t, e) {
            function i(t, e, i) { var s = c[e.type] || {}; return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t) }

            function s(i) {
                var s = l(),
                    n = s._rgba = [];
                return i = i.toLowerCase(), p(a, function(t, o) {
                    var r, a = o.re.exec(i),
                        l = a && o.parse(a),
                        c = o.space || "rgba";
                    return l ? (r = s[c](l), s[h[c].cache] = r[h[c].cache], n = s._rgba = r._rgba, !1) : e
                }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i]
            }

            function n(t, e, i) { return 1 > 6 * (i = (i + 1) % 1) ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t }
            var o, r = /^([\-+])=\s*(\d+\.?\d*)/,
                a = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(t) { return [t[1], t[2], t[3], t[4]] } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(t) { return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]] } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function(t) { return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function(t) { return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)] } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function(t) { return [t[1], t[2] / 100, t[3] / 100, t[4]] } }],
                l = t.Color = function(e, i, s, n) { return new t.Color.fn.parse(e, i, s, n) },
                h = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } },
                c = { byte: { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } },
                u = l.support = {},
                d = t("<p>")[0],
                p = t.each;
            d.style.cssText = "background-color:rgba(1,1,1,.5)", u.rgba = d.style.backgroundColor.indexOf("rgba") > -1, p(h, function(t, e) { e.cache = "_" + t, e.props.alpha = { idx: 3, type: "percent", def: 1 } }), l.fn = t.extend(l.prototype, {
                parse: function(n, r, a, c) {
                    if (n === e) return this._rgba = [null, null, null, null], this;
                    (n.jquery || n.nodeType) && (n = t(n).css(r), r = e);
                    var u = this,
                        d = t.type(n),
                        f = this._rgba = [];
                    return r !== e && (n = [n, r, a, c], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (p(h.rgba.props, function(t, e) { f[e.idx] = i(n[e.idx], e) }), this) : "object" === d ? (n instanceof l ? p(h, function(t, e) { n[e.cache] && (u[e.cache] = n[e.cache].slice()) }) : p(h, function(e, s) {
                        var o = s.cache;
                        p(s.props, function(t, e) {
                            if (!u[o] && s.to) {
                                if ("alpha" === t || null == n[t]) return;
                                u[o] = s.to(u._rgba)
                            }
                            u[o][e.idx] = i(n[t], e, !0)
                        }), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])))
                    }), this) : e
                },
                is: function(t) {
                    var i = l(t),
                        s = !0,
                        n = this;
                    return p(h, function(t, o) { var r, a = i[o.cache]; return a && (r = n[o.cache] || o.to && o.to(n._rgba) || [], p(o.props, function(t, i) { return null != a[i.idx] ? s = a[i.idx] === r[i.idx] : e })), s }), s
                },
                _space: function() {
                    var t = [],
                        e = this;
                    return p(h, function(i, s) { e[s.cache] && t.push(i) }), t.pop()
                },
                transition: function(t, e) {
                    var s = l(t),
                        n = s._space(),
                        o = h[n],
                        r = 0 === this.alpha() ? l("transparent") : this,
                        a = r[o.cache] || o.to(r._rgba),
                        u = a.slice();
                    return s = s[o.cache], p(o.props, function(t, n) {
                        var o = n.idx,
                            r = a[o],
                            l = s[o],
                            h = c[n.type] || {};
                        null !== l && (null === r ? u[o] = l : (h.mod && (l - r > h.mod / 2 ? r += h.mod : r - l > h.mod / 2 && (r -= h.mod)), u[o] = i((l - r) * e + r, n)))
                    }), this[n](u)
                },
                blend: function(e) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        s = i.pop(),
                        n = l(e)._rgba;
                    return l(t.map(i, function(t, e) { return (1 - s) * n[e] + s * t }))
                },
                toRgbaString: function() {
                    var e = "rgba(",
                        i = t.map(this._rgba, function(t, e) { return null == t ? e > 2 ? 1 : 0 : t });
                    return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                },
                toHslaString: function() {
                    var e = "hsla(",
                        i = t.map(this.hsla(), function(t, e) { return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t });
                    return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                },
                toHexString: function(e) {
                    var i = this._rgba.slice(),
                        s = i.pop();
                    return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) { return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t }).join("")
                },
                toString: function() { return 0 === this._rgba[3] ? "transparent" : this.toRgbaString() }
            }), l.fn.parse.prototype = l.fn, h.hsla.to = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e, i, s = t[0] / 255,
                    n = t[1] / 255,
                    o = t[2] / 255,
                    r = t[3],
                    a = Math.max(s, n, o),
                    l = Math.min(s, n, o),
                    h = a - l,
                    c = a + l,
                    u = .5 * c;
                return e = l === a ? 0 : s === a ? 60 * (n - o) / h + 360 : n === a ? 60 * (o - s) / h + 120 : 60 * (s - n) / h + 240, i = 0 === h ? 0 : .5 >= u ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == r ? 1 : r]
            }, h.hsla.from = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e = t[0] / 360,
                    i = t[1],
                    s = t[2],
                    o = t[3],
                    r = .5 >= s ? s * (1 + i) : s + i - s * i,
                    a = 2 * s - r;
                return [Math.round(255 * n(a, r, e + 1 / 3)), Math.round(255 * n(a, r, e)), Math.round(255 * n(a, r, e - 1 / 3)), o]
            }, p(h, function(s, n) {
                var o = n.props,
                    a = n.cache,
                    h = n.to,
                    c = n.from;
                l.fn[s] = function(s) {
                    if (h && !this[a] && (this[a] = h(this._rgba)), s === e) return this[a].slice();
                    var n, r = t.type(s),
                        u = "array" === r || "object" === r ? s : arguments,
                        d = this[a].slice();
                    return p(o, function(t, e) {
                        var s = u["object" === r ? t : e.idx];
                        null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
                    }), c ? (n = l(c(d)), n[a] = d, n) : l(d)
                }, p(o, function(e, i) {
                    l.fn[e] || (l.fn[e] = function(n) {
                        var o, a = t.type(n),
                            l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
                            h = this[l](),
                            c = h[i.idx];
                        return "undefined" === a ? c : ("function" === a && (n = n.call(this, c), a = t.type(n)), null == n && i.empty ? this : ("string" === a && (o = r.exec(n)) && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1)), h[i.idx] = n, this[l](h)))
                    })
                })
            }), l.hook = function(e) {
                var i = e.split(" ");
                p(i, function(e, i) {
                    t.cssHooks[i] = {
                        set: function(e, n) {
                            var o, r, a = "";
                            if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
                                if (n = l(o || n), !u.rgba && 1 !== n._rgba[3]) {
                                    for (r = "backgroundColor" === i ? e.parentNode : e;
                                        ("" === a || "transparent" === a) && r && r.style;) try { a = t.css(r, "backgroundColor"), r = r.parentNode } catch (t) {}
                                    n = n.blend(a && "transparent" !== a ? a : "_default")
                                }
                                n = n.toRgbaString()
                            }
                            try { e.style[i] = n } catch (t) {}
                        }
                    }, t.fx.step[i] = function(e) { e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos)) }
                })
            }, l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), t.cssHooks.borderColor = { expand: function(t) { var e = {}; return p(["Top", "Right", "Bottom", "Left"], function(i, s) { e["border" + s + "Color"] = t }), e } }, o = t.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" }
        }(m),
        function() {
            function e(e) {
                var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                    o = {};
                if (n && n.length && n[0] && n[n[0]])
                    for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]);
                else
                    for (i in n) "string" == typeof n[i] && (o[i] = n[i]);
                return o
            }
            var i = ["add", "remove", "toggle"],
                s = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
                t.fx.step[i] = function(t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (m.style(t.elem, i, t.end), t.setAttr = !0)
                }
            }), t.fn.addBack || (t.fn.addBack = function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }), t.effects.animateClass = function(n, o, r, a) {
                var l = t.speed(o, r, a);
                return this.queue(function() {
                    var o, r = t(this),
                        a = r.attr("class") || "",
                        h = l.children ? r.find("*").addBack() : r;
                    h = h.map(function() { return { el: t(this), start: e(this) } }), (o = function() { t.each(i, function(t, e) { n[e] && r[e + "Class"](n[e]) }) })(), h = h.map(function() { return this.end = e(this.el[0]), this.diff = function(e, i) { var n, o, r = {}; for (n in i) o = i[n], e[n] !== o && (s[n] || (t.fx.step[n] || !isNaN(parseFloat(o))) && (r[n] = o)); return r }(this.start, this.end), this }), r.attr("class", a), h = h.map(function() {
                        var e = this,
                            i = t.Deferred(),
                            s = t.extend({}, l, { queue: !1, complete: function() { i.resolve(e) } });
                        return this.el.animate(this.diff, s), i.promise()
                    }), t.when.apply(t, h.get()).done(function() {
                        o(), t.each(arguments, function() {
                            var e = this.el;
                            t.each(this.diff, function(t) { e.css(t, "") })
                        }), l.complete.call(r[0])
                    })
                })
            }, t.fn.extend({ addClass: function(e) { return function(i, s, n, o) { return s ? t.effects.animateClass.call(this, { add: i }, s, n, o) : e.apply(this, arguments) } }(t.fn.addClass), removeClass: function(e) { return function(i, s, n, o) { return arguments.length > 1 ? t.effects.animateClass.call(this, { remove: i }, s, n, o) : e.apply(this, arguments) } }(t.fn.removeClass), toggleClass: function(e) { return function(i, s, n, o, r) { return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? { add: i } : { remove: i }, n, o, r) : e.apply(this, arguments) : t.effects.animateClass.call(this, { toggle: i }, s, n, o) } }(t.fn.toggleClass), switchClass: function(e, i, s, n, o) { return t.effects.animateClass.call(this, { add: i, remove: e }, s, n, o) } })
        }(),
        function() {
            function e(e, i, s, n) { return t.isPlainObject(e) && (i = e, e = e.effect), e = { effect: e }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e }

            function i(e) { return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect)) }

            function s(t, e) {
                var i = e.outerWidth(),
                    s = e.outerHeight(),
                    n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, s, 0];
                return { top: parseFloat(n[1]) || 0, right: "auto" === n[2] ? i : parseFloat(n[2]), bottom: "auto" === n[3] ? s : parseFloat(n[3]), left: parseFloat(n[4]) || 0 }
            }
            t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function(e) { return function(i) { return !!t(i).data(f) || e(i) } }(t.expr.filters.animated)), !1 !== t.uiBackCompat && t.extend(t.effects, {
                save: function(t, e) { for (var i = 0, s = e.length; s > i; i++) null !== e[i] && t.data(d + e[i], t[0].style[e[i]]) },
                restore: function(t, e) { for (var i, s = 0, n = e.length; n > s; s++) null !== e[s] && (i = t.data(d + e[s]), t.css(e[s], i)) },
                setMode: function(t, e) { return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e },
                createWrapper: function(e) {
                    if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                    var i = { width: e.outerWidth(!0), height: e.outerHeight(!0), float: e.css("float") },
                        s = t("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
                        n = { width: e.width(), height: e.height() },
                        o = document.activeElement;
                    try { o.id } catch (t) { o = document.body }
                    return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), s = e.parent(), "static" === e.css("position") ? (s.css({ position: "relative" }), e.css({ position: "relative" })) : (t.extend(i, { position: e.css("position"), zIndex: e.css("z-index") }), t.each(["top", "left", "bottom", "right"], function(t, s) { i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto") }), e.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), e.css(n), s.css(i).show()
                },
                removeWrapper: function(e) { var i = document.activeElement; return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e }
            }), t.extend(t.effects, {
                version: "1.12.1",
                define: function(e, i, s) { return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s },
                scaledDimensions: function(t, e, i) {
                    if (0 === e) return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
                    var s = "horizontal" !== i ? (e || 100) / 100 : 1,
                        n = "vertical" !== i ? (e || 100) / 100 : 1;
                    return { height: t.height() * n, width: t.width() * s, outerHeight: t.outerHeight() * n, outerWidth: t.outerWidth() * s }
                },
                clipToBox: function(t) { return { width: t.clip.right - t.clip.left, height: t.clip.bottom - t.clip.top, left: t.clip.left, top: t.clip.top } },
                unshift: function(t, e, i) {
                    var s = t.queue();
                    e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue()
                },
                saveStyle: function(t) { t.data(p, t[0].style.cssText) },
                restoreStyle: function(t) { t[0].style.cssText = t.data(p) || "", t.removeData(p) },
                mode: function(t, e) { var i = t.is(":hidden"); return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e },
                getBaseline: function(t, e) {
                    var i, s;
                    switch (t[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = t[0] / e.height
                    }
                    switch (t[1]) {
                        case "left":
                            s = 0;
                            break;
                        case "center":
                            s = .5;
                            break;
                        case "right":
                            s = 1;
                            break;
                        default:
                            s = t[1] / e.width
                    }
                    return { x: s, y: i }
                },
                createPlaceholder: function(e) {
                    var i, s = e.css("position"),
                        n = e.position();
                    return e.css({ marginTop: e.css("marginTop"), marginBottom: e.css("marginBottom"), marginLeft: e.css("marginLeft"), marginRight: e.css("marginRight") }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({ display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block", visibility: "hidden", marginTop: e.css("marginTop"), marginBottom: e.css("marginBottom"), marginLeft: e.css("marginLeft"), marginRight: e.css("marginRight"), float: e.css("float") }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(d + "placeholder", i)), e.css({ position: s, left: n.left, top: n.top }), i
                },
                removePlaceholder: function(t) {
                    var e = d + "placeholder",
                        i = t.data(e);
                    i && (i.remove(), t.removeData(e))
                },
                cleanUp: function(e) { t.effects.restoreStyle(e), t.effects.removePlaceholder(e) },
                setTransition: function(e, i, s, n) {
                    return n = n || {}, t.each(i, function(t, i) {
                        var o = e.cssUnit(i);
                        o[0] > 0 && (n[i] = o[0] * s + o[1])
                    }), n
                }
            }), t.fn.extend({
                effect: function() {
                    function i(e) {
                        function i() { t.isFunction(l) && l.call(r[0]), t.isFunction(e) && e() }
                        var r = t(this);
                        s.mode = c.shift(), !1 === t.uiBackCompat || o ? "none" === s.mode ? (r[h](), i()) : n.call(r[0], s, function() { r.removeData(f), t.effects.cleanUp(r), "hide" === s.mode && r.hide(), i() }) : (r.is(":hidden") ? "hide" === h : "show" === h) ? (r[h](), i()) : n.call(r[0], s, i)
                    }
                    var s = e.apply(this, arguments),
                        n = t.effects.effect[s.effect],
                        o = n.mode,
                        r = s.queue,
                        a = r || "fx",
                        l = s.complete,
                        h = s.mode,
                        c = [],
                        u = function(e) {
                            var i = t(this),
                                s = t.effects.mode(i, h) || o;
                            i.data(f, !0), c.push(s), o && ("show" === s || s === o && "hide" === s) && i.show(), o && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e()
                        };
                    return t.fx.off || !n ? h ? this[h](s.duration, l) : this.each(function() { l && l.call(this) }) : !1 === r ? this.each(u).each(i) : this.queue(a, u).queue(a, i)
                },
                show: function(t) { return function(s) { if (i(s)) return t.apply(this, arguments); var n = e.apply(this, arguments); return n.mode = "show", this.effect.call(this, n) } }(t.fn.show),
                hide: function(t) { return function(s) { if (i(s)) return t.apply(this, arguments); var n = e.apply(this, arguments); return n.mode = "hide", this.effect.call(this, n) } }(t.fn.hide),
                toggle: function(t) { return function(s) { if (i(s) || "boolean" == typeof s) return t.apply(this, arguments); var n = e.apply(this, arguments); return n.mode = "toggle", this.effect.call(this, n) } }(t.fn.toggle),
                cssUnit: function(e) {
                    var i = this.css(e),
                        s = [];
                    return t.each(["em", "px", "%", "pt"], function(t, e) { i.indexOf(e) > 0 && (s = [parseFloat(i), e]) }), s
                },
                cssClip: function(t) { return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this) },
                transfer: function(e, i) {
                    var s = t(this),
                        n = t(e.to),
                        o = "fixed" === n.css("position"),
                        r = t("body"),
                        a = o ? r.scrollTop() : 0,
                        l = o ? r.scrollLeft() : 0,
                        h = n.offset(),
                        c = { top: h.top - a, left: h.left - l, height: n.innerHeight(), width: n.innerWidth() },
                        u = s.offset(),
                        d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({ top: u.top - a, left: u.left - l, height: s.innerHeight(), width: s.innerWidth(), position: o ? "fixed" : "absolute" }).animate(c, e.duration, e.easing, function() { d.remove(), t.isFunction(i) && i() })
                }
            }), t.fx.step.clip = function(e) { e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = s(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({ top: e.pos * (e.end.top - e.start.top) + e.start.top, right: e.pos * (e.end.right - e.start.right) + e.start.right, bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom, left: e.pos * (e.end.left - e.start.left) + e.start.left }) }
        }(),
        function() {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) { e[i] = function(e) { return Math.pow(e, t + 2) } }), t.extend(e, {
                Sine: function(t) { return 1 - Math.cos(t * Math.PI / 2) },
                Circ: function(t) { return 1 - Math.sqrt(1 - t * t) },
                Elastic: function(t) { return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15) },
                Back: function(t) { return t * t * (3 * t - 2) },
                Bounce: function(t) {
                    for (var e, i = 4;
                        ((e = Math.pow(2, --i)) - 1) / 11 > t;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }), t.each(e, function(e, i) { t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) { return 1 - i(1 - t) }, t.easing["easeInOut" + e] = function(t) { return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2 } })
        }();
    t.effects;
    t.effects.define("blind", "hide", function(e, i) {
        var s = { up: ["bottom", "top"], vertical: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], horizontal: ["right", "left"], right: ["left", "right"] },
            n = t(this),
            o = e.direction || "up",
            r = n.cssClip(),
            a = { clip: t.extend({}, r) },
            l = t.effects.createPlaceholder(n);
        a.clip[s[o][0]] = a.clip[s[o][1]], "show" === e.mode && (n.cssClip(a.clip), l && l.css(t.effects.clipToBox(a)), a.clip = r), l && l.animate(t.effects.clipToBox(a), e.duration, e.easing), n.animate(a, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("bounce", function(e, i) {
        var s, n, o, r = t(this),
            a = e.mode,
            l = "hide" === a,
            h = "show" === a,
            c = e.direction || "up",
            u = e.distance,
            d = e.times || 5,
            p = 2 * d + (h || l ? 1 : 0),
            f = e.duration / p,
            m = e.easing,
            g = "up" === c || "down" === c ? "top" : "left",
            v = "up" === c || "left" === c,
            _ = 0,
            b = r.queue().length;
        for (t.effects.createPlaceholder(r), o = r.css(g), u || (u = r["top" === g ? "outerHeight" : "outerWidth"]() / 3), h && (n = { opacity: 1 }, n[g] = o, r.css("opacity", 0).css(g, v ? 2 * -u : 2 * u).animate(n, f, m)), l && (u /= Math.pow(2, d - 1)), (n = {})[g] = o; d > _; _++) s = {}, s[g] = (v ? "-=" : "+=") + u, r.animate(s, f, m).animate(n, f, m), u = l ? 2 * u : u / 2;
        l && (s = { opacity: 0 }, s[g] = (v ? "-=" : "+=") + u, r.animate(s, f, m)), r.queue(i), t.effects.unshift(r, b, p + 1)
    }), t.effects.define("clip", "hide", function(e, i) {
        var s, n = {},
            o = t(this),
            r = e.direction || "vertical",
            a = "both" === r,
            l = a || "horizontal" === r,
            h = a || "vertical" === r;
        s = o.cssClip(), n.clip = { top: h ? (s.bottom - s.top) / 2 : s.top, right: l ? (s.right - s.left) / 2 : s.right, bottom: h ? (s.bottom - s.top) / 2 : s.bottom, left: l ? (s.right - s.left) / 2 : s.left }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(n.clip), n.clip = s), o.animate(n, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("drop", "hide", function(e, i) {
        var s, n = t(this),
            o = "show" === e.mode,
            r = e.direction || "left",
            a = "up" === r || "down" === r ? "top" : "left",
            l = "up" === r || "left" === r ? "-=" : "+=",
            h = "+=" === l ? "-=" : "+=",
            c = { opacity: 0 };
        t.effects.createPlaceholder(n), s = e.distance || n["top" === a ? "outerHeight" : "outerWidth"](!0) / 2, c[a] = l + s, o && (n.css(c), c[a] = h + s, c.opacity = 1), n.animate(c, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("explode", "hide", function(e, i) {
        function s() { v.push(this), v.length === c * u && (d.css({ visibility: "visible" }), t(v).remove(), i()) }
        var n, o, r, a, l, h, c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
            u = c,
            d = t(this),
            p = "show" === e.mode,
            f = d.show().css("visibility", "hidden").offset(),
            m = Math.ceil(d.outerWidth() / u),
            g = Math.ceil(d.outerHeight() / c),
            v = [];
        for (n = 0; c > n; n++)
            for (a = f.top + n * g, h = n - (c - 1) / 2, o = 0; u > o; o++) r = f.left + o * m, l = o - (u - 1) / 2, d.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -o * m, top: -n * g }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: m, height: g, left: r + (p ? l * m : 0), top: a + (p ? h * g : 0), opacity: p ? 0 : 1 }).animate({ left: r + (p ? 0 : l * m), top: a + (p ? 0 : h * g), opacity: p ? 1 : 0 }, e.duration || 500, e.easing, s)
    }), t.effects.define("fade", "toggle", function(e, i) {
        var s = "show" === e.mode;
        t(this).css("opacity", s ? 0 : 1).animate({ opacity: s ? 1 : 0 }, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("fold", "hide", function(e, i) {
        var s = t(this),
            n = e.mode,
            o = "show" === n,
            r = "hide" === n,
            a = e.size || 15,
            l = /([0-9]+)%/.exec(a),
            h = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"],
            c = e.duration / 2,
            u = t.effects.createPlaceholder(s),
            d = s.cssClip(),
            p = { clip: t.extend({}, d) },
            f = { clip: t.extend({}, d) },
            m = [d[h[0]], d[h[1]]],
            g = s.queue().length;
        l && (a = parseInt(l[1], 10) / 100 * m[r ? 0 : 1]), p.clip[h[0]] = a, f.clip[h[0]] = a, f.clip[h[1]] = 0, o && (s.cssClip(f.clip), u && u.css(t.effects.clipToBox(f)), f.clip = d), s.queue(function(i) { u && u.animate(t.effects.clipToBox(p), c, e.easing).animate(t.effects.clipToBox(f), c, e.easing), i() }).animate(p, c, e.easing).animate(f, c, e.easing).queue(i), t.effects.unshift(s, g, 4)
    }), t.effects.define("highlight", "show", function(e, i) {
        var s = t(this),
            n = { backgroundColor: s.css("backgroundColor") };
        "hide" === e.mode && (n.opacity = 0), t.effects.saveStyle(s), s.css({ backgroundImage: "none", backgroundColor: e.color || "#ffff99" }).animate(n, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("size", function(e, i) {
        var s, n, o, r = t(this),
            a = ["fontSize"],
            l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            c = e.mode,
            u = "effect" !== c,
            d = e.scale || "both",
            p = e.origin || ["middle", "center"],
            f = r.css("position"),
            m = r.position(),
            g = t.effects.scaledDimensions(r),
            v = e.from || g,
            _ = e.to || t.effects.scaledDimensions(r, 0);
        t.effects.createPlaceholder(r), "show" === c && (o = v, v = _, _ = o), n = { from: { y: v.height / g.height, x: v.width / g.width }, to: { y: _.height / g.height, x: _.width / g.width } }, ("box" === d || "both" === d) && (n.from.y !== n.to.y && (v = t.effects.setTransition(r, l, n.from.y, v), _ = t.effects.setTransition(r, l, n.to.y, _)), n.from.x !== n.to.x && (v = t.effects.setTransition(r, h, n.from.x, v), _ = t.effects.setTransition(r, h, n.to.x, _))), ("content" === d || "both" === d) && n.from.y !== n.to.y && (v = t.effects.setTransition(r, a, n.from.y, v), _ = t.effects.setTransition(r, a, n.to.y, _)), p && (s = t.effects.getBaseline(p, g), v.top = (g.outerHeight - v.outerHeight) * s.y + m.top, v.left = (g.outerWidth - v.outerWidth) * s.x + m.left, _.top = (g.outerHeight - _.outerHeight) * s.y + m.top, _.left = (g.outerWidth - _.outerWidth) * s.x + m.left), r.css(v), ("content" === d || "both" === d) && (l = l.concat(["marginTop", "marginBottom"]).concat(a), h = h.concat(["marginLeft", "marginRight"]), r.find("*[width]").each(function() {
            var i = t(this),
                s = t.effects.scaledDimensions(i),
                o = { height: s.height * n.from.y, width: s.width * n.from.x, outerHeight: s.outerHeight * n.from.y, outerWidth: s.outerWidth * n.from.x },
                r = { height: s.height * n.to.y, width: s.width * n.to.x, outerHeight: s.height * n.to.y, outerWidth: s.width * n.to.x };
            n.from.y !== n.to.y && (o = t.effects.setTransition(i, l, n.from.y, o), r = t.effects.setTransition(i, l, n.to.y, r)), n.from.x !== n.to.x && (o = t.effects.setTransition(i, h, n.from.x, o), r = t.effects.setTransition(i, h, n.to.x, r)), u && t.effects.saveStyle(i), i.css(o), i.animate(r, e.duration, e.easing, function() { u && t.effects.restoreStyle(i) })
        })), r.animate(_, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                var e = r.offset();
                0 === _.opacity && r.css("opacity", v.opacity), u || (r.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(r)), i()
            }
        })
    }), t.effects.define("scale", function(e, i) {
        var s = t(this),
            n = e.mode,
            o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== n ? 0 : 100),
            r = t.extend(!0, { from: t.effects.scaledDimensions(s), to: t.effects.scaledDimensions(s, o, e.direction || "both"), origin: e.origin || ["middle", "center"] }, e);
        e.fade && (r.from.opacity = 1, r.to.opacity = 0), t.effects.effect.size.call(this, r, i)
    }), t.effects.define("puff", "hide", function(e, i) {
        var s = t.extend(!0, {}, e, { fade: !0, percent: parseInt(e.percent, 10) || 150 });
        t.effects.effect.scale.call(this, s, i)
    }), t.effects.define("pulsate", "show", function(e, i) {
        var s = t(this),
            n = e.mode,
            o = "show" === n,
            r = o || "hide" === n,
            a = 2 * (e.times || 5) + (r ? 1 : 0),
            l = e.duration / a,
            h = 0,
            c = 1,
            u = s.queue().length;
        for ((o || !s.is(":visible")) && (s.css("opacity", 0).show(), h = 1); a > c; c++) s.animate({ opacity: h }, l, e.easing), h = 1 - h;
        s.animate({ opacity: h }, l, e.easing), s.queue(i), t.effects.unshift(s, u, a + 1)
    }), t.effects.define("shake", function(e, i) {
        var s = 1,
            n = t(this),
            o = e.direction || "left",
            r = e.distance || 20,
            a = e.times || 3,
            l = 2 * a + 1,
            h = Math.round(e.duration / l),
            c = "up" === o || "down" === o ? "top" : "left",
            u = "up" === o || "left" === o,
            d = {},
            p = {},
            f = {},
            m = n.queue().length;
        for (t.effects.createPlaceholder(n), d[c] = (u ? "-=" : "+=") + r, p[c] = (u ? "+=" : "-=") + 2 * r, f[c] = (u ? "-=" : "+=") + 2 * r, n.animate(d, h, e.easing); a > s; s++) n.animate(p, h, e.easing).animate(f, h, e.easing);
        n.animate(p, h, e.easing).animate(d, h / 2, e.easing).queue(i), t.effects.unshift(n, m, l + 1)
    }), t.effects.define("slide", "show", function(e, i) {
        var s, n, o = t(this),
            r = { up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"] },
            a = e.mode,
            l = e.direction || "left",
            h = "up" === l || "down" === l ? "top" : "left",
            c = "up" === l || "left" === l,
            u = e.distance || o["top" === h ? "outerHeight" : "outerWidth"](!0),
            d = {};
        t.effects.createPlaceholder(o), s = o.cssClip(), n = o.position()[h], d[h] = (c ? -1 : 1) * u + n, d.clip = o.cssClip(), d.clip[r[l][1]] = d.clip[r[l][0]], "show" === a && (o.cssClip(d.clip), o.css(h, d[h]), d.clip = s, d[h] = n), o.animate(d, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    });
    !1 !== t.uiBackCompat && t.effects.define("transfer", function(e, i) { t(this).transfer(e, i) })
}),
function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Popper = e() }(this, function() {
    "use strict";

    function t(t) { return t && "[object Function]" === {}.toString.call(t) }

    function e(t, e) { if (1 !== t.nodeType) return []; var i = window.getComputedStyle(t, null); return e ? i[e] : i }

    function i(t) { return "HTML" === t.nodeName ? t : t.parentNode || t.host }

    function s(t) {
        if (!t || -1 !== ["HTML", "BODY", "#document"].indexOf(t.nodeName)) return window.document.body;
        var n = e(t),
            o = n.overflow,
            r = n.overflowX,
            a = n.overflowY;
        return /(auto|scroll)/.test(o + a + r) ? t : s(i(t))
    }

    function n(t) {
        var i = t && t.offsetParent,
            s = i && i.nodeName;
        return s && "BODY" !== s && "HTML" !== s ? -1 !== ["TD", "TABLE"].indexOf(i.nodeName) && "static" === e(i, "position") ? n(i) : i : window.document.documentElement
    }

    function o(t) { return null === t.parentNode ? t : o(t.parentNode) }

    function r(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return window.document.documentElement;
        var i = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            s = i ? t : e,
            a = i ? e : t,
            l = document.createRange();
        l.setStart(s, 0), l.setEnd(a, 0);
        var h = l.commonAncestorContainer;
        if (t !== h && e !== h || s.contains(a)) return function(t) { var e = t.nodeName; return "BODY" !== e && ("HTML" === e || n(t.firstElementChild) === t) }(h) ? h : n(h);
        var c = o(t);
        return c.host ? r(c.host, e) : r(t, o(e).host)
    }

    function a(t) {
        var e = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            i = t.nodeName;
        if ("BODY" === i || "HTML" === i) { var s = window.document.documentElement; return (window.document.scrollingElement || s)[e] }
        return t[e]
    }

    function l(t, e) {
        var i = "x" === e ? "Left" : "Top",
            s = "Left" == i ? "Right" : "Bottom";
        return +t["border" + i + "Width"].split("px")[0] + +t["border" + s + "Width"].split("px")[0]
    }

    function h(t, e, i, s) { return N(e["offset" + t], e["scroll" + t], i["client" + t], i["offset" + t], i["scroll" + t], q() ? i["offset" + t] + s["margin" + ("Height" === t ? "Top" : "Left")] + s["margin" + ("Height" === t ? "Bottom" : "Right")] : 0) }

    function c() {
        var t = window.document.body,
            e = window.document.documentElement,
            i = q() && window.getComputedStyle(e);
        return { height: h("Height", t, e, i), width: h("Width", t, e, i) }
    }

    function u(t) { return X({}, t, { right: t.left + t.width, bottom: t.top + t.height }) }

    function d(t) {
        var i = {};
        if (q()) try {
            i = t.getBoundingClientRect();
            var s = a(t, "top"),
                n = a(t, "left");
            i.top += s, i.left += n, i.bottom += s, i.right += n
        } catch (t) {} else i = t.getBoundingClientRect();
        var o = { left: i.left, top: i.top, width: i.right - i.left, height: i.bottom - i.top },
            r = "HTML" === t.nodeName ? c() : {},
            h = r.width || t.clientWidth || o.right - o.left,
            d = r.height || t.clientHeight || o.bottom - o.top,
            p = t.offsetWidth - h,
            f = t.offsetHeight - d;
        if (p || f) {
            var m = e(t);
            p -= l(m, "x"), f -= l(m, "y"), o.width -= p, o.height -= f
        }
        return u(o)
    }

    function p(t, i) {
        var n = q(),
            o = "HTML" === i.nodeName,
            r = d(t),
            l = d(i),
            h = s(t),
            c = e(i),
            p = +c.borderTopWidth.split("px")[0],
            f = +c.borderLeftWidth.split("px")[0],
            m = u({ top: r.top - l.top - p, left: r.left - l.left - f, width: r.width, height: r.height });
        if (m.marginTop = 0, m.marginLeft = 0, !n && o) {
            var g = +c.marginTop.split("px")[0],
                v = +c.marginLeft.split("px")[0];
            m.top -= p - g, m.bottom -= p - g, m.left -= f - v, m.right -= f - v, m.marginTop = g, m.marginLeft = v
        }
        return (n ? i.contains(h) : i === h && "BODY" !== h.nodeName) && (m = function(t, e) {
            var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                s = a(e, "top"),
                n = a(e, "left"),
                o = i ? -1 : 1;
            return t.top += s * o, t.bottom += s * o, t.left += n * o, t.right += n * o, t
        }(m, i)), m
    }

    function f(t) { var s = t.nodeName; return "BODY" !== s && "HTML" !== s && ("fixed" === e(t, "position") || f(i(t))) }

    function m(t, e, n, o) {
        var l = { top: 0, left: 0 },
            h = r(t, e);
        if ("viewport" === o) l = function(t) {
            var e = window.document.documentElement,
                i = p(t, e),
                s = N(e.clientWidth, window.innerWidth || 0),
                n = N(e.clientHeight, window.innerHeight || 0),
                o = a(e),
                r = a(e, "left");
            return u({ top: o - i.top + i.marginTop, left: r - i.left + i.marginLeft, width: s, height: n })
        }(h);
        else {
            var d;
            "scrollParent" === o ? "BODY" === (d = s(i(t))).nodeName && (d = window.document.documentElement) : d = "window" === o ? window.document.documentElement : o;
            var m = p(d, h);
            if ("HTML" !== d.nodeName || f(h)) l = m;
            else {
                var g = c(),
                    v = g.height,
                    _ = g.width;
                l.top += m.top - m.marginTop, l.bottom = v + m.top, l.left += m.left - m.marginLeft, l.right = _ + m.left
            }
        }
        return l.left += n, l.top += n, l.right -= n, l.bottom -= n, l
    }

    function g(t, e, i, s, n) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var r = m(i, s, o, n),
            a = { top: { width: r.width, height: e.top - r.top }, right: { width: r.right - e.right, height: r.height }, bottom: { width: r.width, height: r.bottom - e.bottom }, left: { width: e.left - r.left, height: r.height } },
            l = Object.keys(a).map(function(t) { return X({ key: t }, a[t], { area: function(t) { return t.width * t.height }(a[t]) }) }).sort(function(t, e) { return e.area - t.area }),
            h = l.filter(function(t) {
                var e = t.width,
                    s = t.height;
                return e >= i.clientWidth && s >= i.clientHeight
            }),
            c = 0 < h.length ? h[0].key : l[0].key,
            u = t.split("-")[1];
        return c + (u ? "-" + u : "")
    }

    function v(t, e, i) { return p(i, r(e, i)) }

    function _(t) {
        var e = window.getComputedStyle(t),
            i = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
            s = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
        return { width: t.offsetWidth + s, height: t.offsetHeight + i }
    }

    function b(t) { var e = { left: "right", right: "left", bottom: "top", top: "bottom" }; return t.replace(/left|right|bottom|top/g, function(t) { return e[t] }) }

    function y(t, e, i) {
        i = i.split("-")[0];
        var s = _(t),
            n = { width: s.width, height: s.height },
            o = -1 !== ["right", "left"].indexOf(i),
            r = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            h = o ? "width" : "height";
        return n[r] = e[r] + e[l] / 2 - s[l] / 2, n[a] = i === a ? e[a] - s[h] : e[b(a)], n
    }

    function w(t, e) { return Array.prototype.find ? t.find(e) : t.filter(e)[0] }

    function x(e, i, s) {
        return (void 0 === s ? e : e.slice(0, function(t, e, i) { if (Array.prototype.findIndex) return t.findIndex(function(t) { return t[e] === i }); var s = w(t, function(t) { return t[e] === i }); return t.indexOf(s) }(e, "name", s))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var s = e.function || e.fn;
            e.enabled && t(s) && (i.offsets.popper = u(i.offsets.popper), i.offsets.reference = u(i.offsets.reference), i = s(i, e))
        }), i
    }

    function C(t, e) { return t.some(function(t) { var i = t.name; return t.enabled && i === e }) }

    function k(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], i = t.charAt(0).toUpperCase() + t.slice(1), s = 0; s < e.length - 1; s++) {
            var n = e[s],
                o = n ? "" + n + i : t;
            if (void 0 !== window.document.body.style[o]) return o
        }
        return null
    }

    function T(t, e, i, n) {
        var o = "BODY" === t.nodeName,
            r = o ? window : t;
        r.addEventListener(e, i, { passive: !0 }), o || T(s(r.parentNode), e, i, n), n.push(r)
    }

    function S() { this.state.eventsEnabled || (this.state = function(t, e, i, n) { i.updateBound = n, window.addEventListener("resize", i.updateBound, { passive: !0 }); var o = s(t); return T(o, "scroll", i.updateBound, i.scrollParents), i.scrollElement = o, i.eventsEnabled = !0, i }(this.reference, this.options, this.state, this.scheduleUpdate)) }

    function D() { this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = function(t, e) { return window.removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(t) { t.removeEventListener("scroll", e.updateBound) }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e }(this.reference, this.state)) }

    function I(t) { return "" !== t && !isNaN(parseFloat(t)) && isFinite(t) }

    function E(t, e) { Object.keys(e).forEach(function(i) { var s = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && I(e[i]) && (s = "px"), t.style[i] = e[i] + s }) }

    function P(t, e, i) {
        var s = w(t, function(t) { return t.name === e }),
            n = !!s && t.some(function(t) { return t.name === i && t.enabled && t.order < s.order });
        if (!n) {
            var o = "`" + e + "`";
            console.warn("`" + i + "` modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return n
    }

    function A(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            i = K.indexOf(t),
            s = K.slice(i + 1).concat(K.slice(0, i));
        return e ? s.reverse() : s
    }

    function M(t, e, i, s) {
        var n = [0, 0],
            o = -1 !== ["right", "left"].indexOf(s),
            r = t.split(/(\+|\-)/).map(function(t) { return t.trim() }),
            a = r.indexOf(w(r, function(t) { return -1 !== t.search(/,|\s/) }));
        r[a] && -1 === r[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            h = -1 === a ? [r] : [r.slice(0, a).concat([r[a].split(l)[0]]), [r[a].split(l)[1]].concat(r.slice(a + 1))];
        return (h = h.map(function(t, s) {
            var n = (1 === s ? !o : o) ? "height" : "width",
                r = !1;
            return t.reduce(function(t, e) { return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, r = !0, t) : r ? (t[t.length - 1] += e, r = !1, t) : t.concat(e) }, []).map(function(t) {
                return function(t, e, i, s) {
                    var n = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        o = +n[1],
                        r = n[2];
                    if (!o) return t;
                    if (0 === r.indexOf("%")) {
                        var a;
                        switch (r) {
                            case "%p":
                                a = i;
                                break;
                            case "%":
                            case "%r":
                            default:
                                a = s
                        }
                        return u(a)[e] / 100 * o
                    }
                    if ("vh" === r || "vw" === r) return ("vh" === r ? N(document.documentElement.clientHeight, window.innerHeight || 0) : N(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                    return o
                }(t, n, e, i)
            })
        })).forEach(function(t, e) { t.forEach(function(i, s) { I(i) && (n[e] += i * ("-" === t[s - 1] ? -1 : 1)) }) }), n
    }
    for (var $ = Math.min, O = Math.floor, N = Math.max, H = ["native code", "[object MutationObserverConstructor]"], L = "undefined" != typeof window, z = ["Edge", "Trident", "Firefox"], W = 0, j = 0; j < z.length; j += 1)
        if (L && 0 <= navigator.userAgent.indexOf(z[j])) { W = 1; break }
    var R, F = L && function(t) { return H.some(function(e) { return -1 < (t || "").toString().indexOf(e) }) }(window.MutationObserver) ? function(t) {
            var e = !1,
                i = 0,
                s = document.createElement("span");
            return new MutationObserver(function() { t(), e = !1 }).observe(s, { attributes: !0 }),
                function() { e || (e = !0, s.setAttribute("x-index", i), ++i) }
        } : function(t) { var e = !1; return function() { e || (e = !0, setTimeout(function() { e = !1, t() }, W)) } },
        q = function() { return void 0 == R && (R = -1 !== navigator.appVersion.indexOf("MSIE 10")), R },
        B = function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") },
        Y = function() {
            function t(t, e) { for (var i, s = 0; s < e.length; s++) i = e[s], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i) }
            return function(e, i, s) { return i && t(e.prototype, i), s && t(e, s), e }
        }(),
        U = function(t, e, i) { return e in t ? Object.defineProperty(t, e, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = i, t },
        X = Object.assign || function(t) {
            for (var e, i = 1; i < arguments.length; i++)
                for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
            return t
        },
        V = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        K = V.slice(3),
        Q = "flip",
        G = "clockwise",
        Z = "counterclockwise",
        J = function() {
            function e(i, s) {
                var n = this,
                    o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                B(this, e), this.scheduleUpdate = function() { return requestAnimationFrame(n.update) }, this.update = F(this.update.bind(this)), this.options = X({}, e.Defaults, o), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = i.jquery ? i[0] : i, this.popper = s.jquery ? s[0] : s, this.options.modifiers = {}, Object.keys(X({}, e.Defaults.modifiers, o.modifiers)).forEach(function(t) { n.options.modifiers[t] = X({}, e.Defaults.modifiers[t] || {}, o.modifiers ? o.modifiers[t] : {}) }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) { return X({ name: t }, n.options.modifiers[t]) }).sort(function(t, e) { return t.order - e.order }), this.modifiers.forEach(function(e) { e.enabled && t(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state) }), this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(), this.state.eventsEnabled = r
            }
            return Y(e, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var t = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                            t.offsets.reference = v(this.state, this.popper, this.reference), t.placement = g(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.offsets.popper = y(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = "absolute", t = x(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
                        }
                    }.call(this)
                }
            }, { key: "destroy", value: function() { return function() { return this.state.isDestroyed = !0, C(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[k("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this }.call(this) } }, { key: "enableEventListeners", value: function() { return S.call(this) } }, { key: "disableEventListeners", value: function() { return D.call(this) } }]), e
        }();
    return J.Utils = ("undefined" == typeof window ? global : window).PopperUtils, J.placements = V, J.Defaults = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(t) {
                    var e = t.placement,
                        i = e.split("-")[0],
                        s = e.split("-")[1];
                    if (s) {
                        var n = t.offsets,
                            o = n.reference,
                            r = n.popper,
                            a = -1 !== ["bottom", "top"].indexOf(i),
                            l = a ? "left" : "top",
                            h = a ? "width" : "height",
                            c = { start: U({}, l, o[l]), end: U({}, l, o[l] + o[h] - r[h]) };
                        t.offsets.popper = X({}, r, c[s])
                    }
                    return t
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(t, e) {
                    var i, s = e.offset,
                        n = t.placement,
                        o = t.offsets,
                        r = o.popper,
                        a = o.reference,
                        l = n.split("-")[0];
                    return i = I(+s) ? [+s, 0] : M(s, r, a, l), "left" === l ? (r.top += i[0], r.left -= i[1]) : "right" === l ? (r.top += i[0], r.left += i[1]) : "top" === l ? (r.left += i[0], r.top -= i[1]) : "bottom" === l && (r.left += i[0], r.top += i[1]), t.popper = r, t
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(t, e) {
                    var i = e.boundariesElement || n(t.instance.popper);
                    t.instance.reference === i && (i = n(i));
                    var s = m(t.instance.popper, t.instance.reference, e.padding, i);
                    e.boundaries = s;
                    var o = e.priority,
                        r = t.offsets.popper,
                        a = {
                            primary: function(t) { var i = r[t]; return r[t] < s[t] && !e.escapeWithReference && (i = N(r[t], s[t])), U({}, t, i) },
                            secondary: function(t) {
                                var i = "right" === t ? "left" : "top",
                                    n = r[i];
                                return r[t] > s[t] && !e.escapeWithReference && (n = $(r[i], s[t] - ("right" === t ? r.width : r.height))), U({}, i, n)
                            }
                        };
                    return o.forEach(function(t) {
                        var e = -1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
                        r = X({}, r, a[e](t))
                    }), t.offsets.popper = r, t
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(t) {
                    var e = t.offsets,
                        i = e.popper,
                        s = e.reference,
                        n = t.placement.split("-")[0],
                        o = O,
                        r = -1 !== ["top", "bottom"].indexOf(n),
                        a = r ? "right" : "bottom",
                        l = r ? "left" : "top",
                        h = r ? "width" : "height";
                    return i[a] < o(s[l]) && (t.offsets.popper[l] = o(s[l]) - i[h]), i[l] > o(s[a]) && (t.offsets.popper[l] = o(s[a])), t
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(t, i) {
                    if (!P(t.instance.modifiers, "arrow", "keepTogether")) return t;
                    var s = i.element;
                    if ("string" == typeof s) { if (!(s = t.instance.popper.querySelector(s))) return t } else if (!t.instance.popper.contains(s)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                    var n = t.placement.split("-")[0],
                        o = t.offsets,
                        r = o.popper,
                        a = o.reference,
                        l = -1 !== ["left", "right"].indexOf(n),
                        h = l ? "height" : "width",
                        c = l ? "Top" : "Left",
                        d = c.toLowerCase(),
                        p = l ? "left" : "top",
                        f = l ? "bottom" : "right",
                        m = _(s)[h];
                    a[f] - m < r[d] && (t.offsets.popper[d] -= r[d] - (a[f] - m)), a[d] + m > r[f] && (t.offsets.popper[d] += a[d] + m - r[f]);
                    var g = a[d] + a[h] / 2 - m / 2,
                        v = e(t.instance.popper, "margin" + c).replace("px", ""),
                        b = g - u(t.offsets.popper)[d] - v;
                    return b = N($(r[h] - m, b), 0), t.arrowElement = s, t.offsets.arrow = {}, t.offsets.arrow[d] = Math.round(b), t.offsets.arrow[p] = "", t
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(t, e) {
                    if (C(t.instance.modifiers, "inner")) return t;
                    if (t.flipped && t.placement === t.originalPlacement) return t;
                    var i = m(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement),
                        s = t.placement.split("-")[0],
                        n = b(s),
                        o = t.placement.split("-")[1] || "",
                        r = [];
                    switch (e.behavior) {
                        case Q:
                            r = [s, n];
                            break;
                        case G:
                            r = A(s);
                            break;
                        case Z:
                            r = A(s, !0);
                            break;
                        default:
                            r = e.behavior
                    }
                    return r.forEach(function(a, l) {
                        if (s !== a || r.length === l + 1) return t;
                        s = t.placement.split("-")[0], n = b(s);
                        var h = t.offsets.popper,
                            c = t.offsets.reference,
                            u = O,
                            d = "left" === s && u(h.right) > u(c.left) || "right" === s && u(h.left) < u(c.right) || "top" === s && u(h.bottom) > u(c.top) || "bottom" === s && u(h.top) < u(c.bottom),
                            p = u(h.left) < u(i.left),
                            f = u(h.right) > u(i.right),
                            m = u(h.top) < u(i.top),
                            g = u(h.bottom) > u(i.bottom),
                            v = "left" === s && p || "right" === s && f || "top" === s && m || "bottom" === s && g,
                            _ = -1 !== ["top", "bottom"].indexOf(s),
                            w = !!e.flipVariations && (_ && "start" === o && p || _ && "end" === o && f || !_ && "start" === o && m || !_ && "end" === o && g);
                        (d || v || w) && (t.flipped = !0, (d || v) && (s = r[l + 1]), w && (o = function(t) { return "end" === t ? "start" : "start" === t ? "end" : t }(o)), t.placement = s + (o ? "-" + o : ""), t.offsets.popper = X({}, t.offsets.popper, y(t.instance.popper, t.offsets.reference, t.placement)), t = x(t.instance.modifiers, t, "flip"))
                    }), t
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(t) {
                    var e = t.placement,
                        i = e.split("-")[0],
                        s = t.offsets,
                        n = s.popper,
                        o = s.reference,
                        r = -1 !== ["left", "right"].indexOf(i),
                        a = -1 === ["top", "left"].indexOf(i);
                    return n[r ? "left" : "top"] = o[i] - (a ? n[r ? "width" : "height"] : 0), t.placement = b(e), t.offsets.popper = u(n), t
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(t) {
                    if (!P(t.instance.modifiers, "hide", "preventOverflow")) return t;
                    var e = t.offsets.reference,
                        i = w(t.instance.modifiers, function(t) { return "preventOverflow" === t.name }).boundaries;
                    if (e.bottom < i.top || e.left > i.right || e.top > i.bottom || e.right < i.left) {
                        if (!0 === t.hide) return t;
                        t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === t.hide) return t;
                        t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                    }
                    return t
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(t, e) {
                    var i = e.x,
                        s = e.y,
                        o = t.offsets.popper,
                        r = w(t.instance.modifiers, function(t) { return "applyStyle" === t.name }).gpuAcceleration;
                    void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var a, l, h = void 0 === r ? e.gpuAcceleration : r,
                        c = d(n(t.instance.popper)),
                        u = { position: o.position },
                        p = O(o.left),
                        f = O(o.top),
                        m = O(o.bottom),
                        g = O(o.right),
                        v = "bottom" === i ? "top" : "bottom",
                        _ = "right" === s ? "left" : "right",
                        b = k("transform");
                    if (l = "bottom" == v ? -c.height + m : f, a = "right" == _ ? -c.width + g : p, h && b) u[b] = "translate3d(" + a + "px, " + l + "px, 0)", u[v] = 0, u[_] = 0, u.willChange = "transform";
                    else {
                        var y = "bottom" == v ? -1 : 1,
                            x = "right" == _ ? -1 : 1;
                        u[v] = l * y, u[_] = a * x, u.willChange = v + ", " + _
                    }
                    var C = { "x-placement": t.placement };
                    return t.attributes = X({}, C, t.attributes), t.styles = X({}, u, t.styles), t.arrowStyles = X({}, t.offsets.arrow, t.arrowStyles), t
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(t) {
                    return E(t.instance.popper, t.styles),
                        function(t, e) { Object.keys(e).forEach(function(i) {!1 === e[i] ? t.removeAttribute(i) : t.setAttribute(i, e[i]) }) }(t.instance.popper, t.attributes), t.arrowElement && Object.keys(t.arrowStyles).length && E(t.arrowElement, t.arrowStyles), t
                },
                onLoad: function(t, e, i, s, n) {
                    var o = v(0, e, t),
                        r = g(i.placement, o, e, t, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                    return e.setAttribute("x-placement", r), E(e, { position: "absolute" }), i
                },
                gpuAcceleration: void 0
            }
        }
    }, J
}),
function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper) }(this, function(t, e, i) {
    "use strict";

    function s(t, e) {
        for (var i = 0; i < e.length; i++) {
            var s = e[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
        }
    }

    function n(t, e, i) { return e && s(t.prototype, e), i && s(t, i), t }

    function o() { return (o = Object.assign || function(t) { for (var e = 1; e < arguments.length; e++) { var i = arguments[e]; for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]) } return t }).apply(this, arguments) }
    e = e && e.hasOwnProperty("default") ? e.default : e, i = i && i.hasOwnProperty("default") ? i.default : i;
    var r, a, l, h, c, u, d, p, f, m, g, v, _, b, y, w, x, C, k, T, S, D, I, E, P, A, M = function(t) {
            var e = !1,
                i = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(t) { do { t += ~~(1e6 * Math.random()) } while (document.getElementById(t)); return t },
                    getSelectorFromElement: function(e) {
                        var i, s = e.getAttribute("data-target");
                        s && "#" !== s || (s = e.getAttribute("href") || ""), "#" === s.charAt(0) && (i = s, s = i = "function" == typeof t.escapeSelector ? t.escapeSelector(i).substr(1) : i.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                        try { return t(document).find(s).length > 0 ? s : null } catch (t) { return null }
                    },
                    reflow: function(t) { return t.offsetHeight },
                    triggerTransitionEnd: function(i) { t(i).trigger(e.end) },
                    supportsTransitionEnd: function() { return Boolean(e) },
                    isElement: function(t) { return (t[0] || t).nodeType },
                    typeCheckConfig: function(t, e, s) {
                        for (var n in s)
                            if (Object.prototype.hasOwnProperty.call(s, n)) {
                                var o = s[n],
                                    r = e[n],
                                    a = r && i.isElement(r) ? "element" : (l = r, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                                if (!new RegExp(o).test(a)) throw new Error(t.toUpperCase() + ': Option "' + n + '" provided type "' + a + '" but expected type "' + o + '".')
                            }
                        var l
                    }
                };
            return e = ("undefined" == typeof window || !window.QUnit) && { end: "transitionend" }, t.fn.emulateTransitionEnd = function(e) {
                var s = this,
                    n = !1;
                return t(this).one(i.TRANSITION_END, function() { n = !0 }), setTimeout(function() { n || i.triggerTransitionEnd(s) }, e), this
            }, i.supportsTransitionEnd() && (t.event.special[i.TRANSITION_END] = { bindType: e.end, delegateType: e.end, handle: function(e) { if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments) } }), i
        }(e),
        $ = (a = "alert", h = "." + (l = "bs.alert"), c = (r = e).fn.alert, u = { CLOSE: "close" + h, CLOSED: "closed" + h, CLICK_DATA_API: "click" + h + ".data-api" }, d = "alert", p = "fade", f = "show", m = function() {
            function t(t) { this._element = t }
            var e = t.prototype;
            return e.close = function(t) {
                t = t || this._element;
                var e = this._getRootElement(t);
                this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, e.dispose = function() { r.removeData(this._element, l), this._element = null }, e._getRootElement = function(t) {
                var e = M.getSelectorFromElement(t),
                    i = !1;
                return e && (i = r(e)[0]), i || (i = r(t).closest(".alert")[0]), i
            }, e._triggerCloseEvent = function(t) { var e = r.Event(u.CLOSE); return r(t).trigger(e), e }, e._removeElement = function(t) {
                var e = this;
                r(t).removeClass("show"), M.supportsTransitionEnd() && r(t).hasClass("fade") ? r(t).one(M.TRANSITION_END, function(i) { return e._destroyElement(t, i) }).emulateTransitionEnd(150) : this._destroyElement(t)
            }, e._destroyElement = function(t) { r(t).detach().trigger(u.CLOSED).remove() }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = r(this),
                        s = i.data(l);
                    s || (s = new t(this), i.data(l, s)), "close" === e && s[e](this)
                })
            }, t._handleDismiss = function(t) { return function(e) { e && e.preventDefault(), t.close(this) } }, n(t, null, [{ key: "VERSION", get: function() { return "4.0.0" } }]), t
        }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', m._handleDismiss(new m)), r.fn.alert = m._jQueryInterface, r.fn.alert.Constructor = m, r.fn.alert.noConflict = function() { return r.fn.alert = c, m._jQueryInterface }, m),
        O = (v = "button", b = "." + (_ = "bs.button"), y = ".data-api", w = (g = e).fn.button, x = "active", C = "btn", k = "focus", T = '[data-toggle^="button"]', S = '[data-toggle="buttons"]', D = "input", I = ".active", E = ".btn", P = { CLICK_DATA_API: "click" + b + y, FOCUS_BLUR_DATA_API: "focus" + b + y + " blur" + b + y }, A = function() {
            function t(t) { this._element = t }
            var e = t.prototype;
            return e.toggle = function() {
                var t = !0,
                    e = !0,
                    i = g(this._element).closest(S)[0];
                if (i) {
                    var s = g(this._element).find("input")[0];
                    if (s) {
                        if ("radio" === s.type)
                            if (s.checked && g(this._element).hasClass(x)) t = !1;
                            else {
                                var n = g(i).find(".active")[0];
                                n && g(n).removeClass(x)
                            }
                        if (t) {
                            if (s.hasAttribute("disabled") || i.hasAttribute("disabled") || s.classList.contains("disabled") || i.classList.contains("disabled")) return;
                            s.checked = !g(this._element).hasClass(x), g(s).trigger("change")
                        }
                        s.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !g(this._element).hasClass(x)), t && g(this._element).toggleClass(x)
            }, e.dispose = function() { g.removeData(this._element, _), this._element = null }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = g(this).data(_);
                    i || (i = new t(this), g(this).data(_, i)), "toggle" === e && i[e]()
                })
            }, n(t, null, [{ key: "VERSION", get: function() { return "4.0.0" } }]), t
        }(), g(document).on(P.CLICK_DATA_API, T, function(t) {
            t.preventDefault();
            var e = t.target;
            g(e).hasClass("btn") || (e = g(e).closest(".btn")), A._jQueryInterface.call(g(e), "toggle")
        }).on(P.FOCUS_BLUR_DATA_API, T, function(t) {
            var e = g(t.target).closest(".btn")[0];
            g(e).toggleClass("focus", /^focus(in)?$/.test(t.type))
        }), g.fn.button = A._jQueryInterface, g.fn.button.Constructor = A, g.fn.button.noConflict = function() { return g.fn.button = w, A._jQueryInterface }, A),
        N = function(t) {
            var e = "carousel",
                i = "bs.carousel",
                s = "." + i,
                r = t.fn[e],
                a = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
                l = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
                h = { SLIDE: "slide" + s, SLID: "slid" + s, KEYDOWN: "keydown" + s, MOUSEENTER: "mouseenter" + s, MOUSELEAVE: "mouseleave" + s, TOUCHEND: "touchend" + s, LOAD_DATA_API: "load" + s + ".data-api", CLICK_DATA_API: "click" + s + ".data-api" },
                c = "active",
                u = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
                d = function() {
                    function r(e, i) { this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(i), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(u.INDICATORS)[0], this._addEventListeners() }
                    var d = r.prototype;
                    return d.next = function() { this._isSliding || this._slide("next") }, d.nextWhenVisible = function() {!document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next() }, d.prev = function() { this._isSliding || this._slide("prev") }, d.pause = function(e) { e || (this._isPaused = !0), t(this._element).find(u.NEXT_PREV)[0] && M.supportsTransitionEnd() && (M.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null }, d.cycle = function(t) { t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)) }, d.to = function(e) {
                        var i = this;
                        this._activeElement = t(this._element).find(u.ACTIVE_ITEM)[0];
                        var s = this._getItemIndex(this._activeElement);
                        if (!(e > this._items.length - 1 || e < 0))
                            if (this._isSliding) t(this._element).one(h.SLID, function() { return i.to(e) });
                            else {
                                if (s === e) return this.pause(), void this.cycle();
                                var n = e > s ? "next" : "prev";
                                this._slide(n, this._items[e])
                            }
                    }, d.dispose = function() { t(this._element).off(s), t.removeData(this._element, i), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null }, d._getConfig = function(t) { return t = o({}, a, t), M.typeCheckConfig(e, t, l), t }, d._addEventListeners = function() {
                        var e = this;
                        this._config.keyboard && t(this._element).on(h.KEYDOWN, function(t) { return e._keydown(t) }), "hover" === this._config.pause && (t(this._element).on(h.MOUSEENTER, function(t) { return e.pause(t) }).on(h.MOUSELEAVE, function(t) { return e.cycle(t) }), "ontouchstart" in document.documentElement && t(this._element).on(h.TOUCHEND, function() { e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) { return e.cycle(t) }, 500 + e._config.interval) }))
                    }, d._keydown = function(t) {
                        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                            case 37:
                                t.preventDefault(), this.prev();
                                break;
                            case 39:
                                t.preventDefault(), this.next()
                        }
                    }, d._getItemIndex = function(e) { return this._items = t.makeArray(t(e).parent().find(u.ITEM)), this._items.indexOf(e) }, d._getItemByDirection = function(t, e) {
                        var i = "next" === t,
                            s = "prev" === t,
                            n = this._getItemIndex(e),
                            o = this._items.length - 1;
                        if ((s && 0 === n || i && n === o) && !this._config.wrap) return e;
                        var r = (n + ("prev" === t ? -1 : 1)) % this._items.length;
                        return -1 === r ? this._items[this._items.length - 1] : this._items[r]
                    }, d._triggerSlideEvent = function(e, i) {
                        var s = this._getItemIndex(e),
                            n = this._getItemIndex(t(this._element).find(u.ACTIVE_ITEM)[0]),
                            o = t.Event(h.SLIDE, { relatedTarget: e, direction: i, from: n, to: s });
                        return t(this._element).trigger(o), o
                    }, d._setActiveIndicatorElement = function(e) {
                        if (this._indicatorsElement) {
                            t(this._indicatorsElement).find(u.ACTIVE).removeClass(c);
                            var i = this._indicatorsElement.children[this._getItemIndex(e)];
                            i && t(i).addClass(c)
                        }
                    }, d._slide = function(e, i) {
                        var s, n, o, r = this,
                            a = t(this._element).find(u.ACTIVE_ITEM)[0],
                            l = this._getItemIndex(a),
                            d = i || a && this._getItemByDirection(e, a),
                            p = this._getItemIndex(d),
                            f = Boolean(this._interval);
                        if ("next" === e ? (s = "carousel-item-left", n = "carousel-item-next", o = "left") : (s = "carousel-item-right", n = "carousel-item-prev", o = "right"), d && t(d).hasClass(c)) this._isSliding = !1;
                        else if (!this._triggerSlideEvent(d, o).isDefaultPrevented() && a && d) {
                            this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(d);
                            var m = t.Event(h.SLID, { relatedTarget: d, direction: o, from: l, to: p });
                            M.supportsTransitionEnd() && t(this._element).hasClass("slide") ? (t(d).addClass(n), M.reflow(d), t(a).addClass(s), t(d).addClass(s), t(a).one(M.TRANSITION_END, function() { t(d).removeClass(s + " " + n).addClass(c), t(a).removeClass("active " + n + " " + s), r._isSliding = !1, setTimeout(function() { return t(r._element).trigger(m) }, 0) }).emulateTransitionEnd(600)) : (t(a).removeClass(c), t(d).addClass(c), this._isSliding = !1, t(this._element).trigger(m)), f && this.cycle()
                        }
                    }, r._jQueryInterface = function(e) {
                        return this.each(function() {
                            var s = t(this).data(i),
                                n = o({}, a, t(this).data());
                            "object" == typeof e && (n = o({}, n, e));
                            var l = "string" == typeof e ? e : n.slide;
                            if (s || (s = new r(this, n), t(this).data(i, s)), "number" == typeof e) s.to(e);
                            else if ("string" == typeof l) {
                                if (void 0 === s[l]) throw new TypeError('No method named "' + l + '"');
                                s[l]()
                            } else n.interval && (s.pause(), s.cycle())
                        })
                    }, r._dataApiClickHandler = function(e) {
                        var s = M.getSelectorFromElement(this);
                        if (s) {
                            var n = t(s)[0];
                            if (n && t(n).hasClass("carousel")) {
                                var a = o({}, t(n).data(), t(this).data()),
                                    l = this.getAttribute("data-slide-to");
                                l && (a.interval = !1), r._jQueryInterface.call(t(n), a), l && t(n).data(i).to(l), e.preventDefault()
                            }
                        }
                    }, n(r, null, [{ key: "VERSION", get: function() { return "4.0.0" } }, { key: "Default", get: function() { return a } }]), r
                }();
            return t(document).on(h.CLICK_DATA_API, u.DATA_SLIDE, d._dataApiClickHandler), t(window).on(h.LOAD_DATA_API, function() {
                t(u.DATA_RIDE).each(function() {
                    var e = t(this);
                    d._jQueryInterface.call(e, e.data())
                })
            }), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function() { return t.fn[e] = r, d._jQueryInterface }, d
        }(e),
        H = function(t) {
            var e = "collapse",
                i = "bs.collapse",
                s = "." + i,
                r = t.fn[e],
                a = { toggle: !0, parent: "" },
                l = { toggle: "boolean", parent: "(string|element)" },
                h = { SHOW: "show" + s, SHOWN: "shown" + s, HIDE: "hide" + s, HIDDEN: "hidden" + s, CLICK_DATA_API: "click" + s + ".data-api" },
                c = "collapse",
                u = "collapsing",
                d = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
                p = function() {
                    function s(e, i) {
                        this._isTransitioning = !1, this._element = e, this._config = this._getConfig(i), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                        for (var s = t(d.DATA_TOGGLE), n = 0; n < s.length; n++) {
                            var o = s[n],
                                r = M.getSelectorFromElement(o);
                            null !== r && t(r).filter(e).length > 0 && (this._selector = r, this._triggerArray.push(o))
                        }
                        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    var r = s.prototype;
                    return r.toggle = function() { t(this._element).hasClass("show") ? this.hide() : this.show() }, r.show = function() {
                        var e, n, o = this;
                        if (!(this._isTransitioning || t(this._element).hasClass("show") || (this._parent && 0 === (e = t.makeArray(t(this._parent).find(d.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), e && (n = t(e).not(this._selector).data(i)) && n._isTransitioning))) {
                            var r = t.Event(h.SHOW);
                            if (t(this._element).trigger(r), !r.isDefaultPrevented()) {
                                e && (s._jQueryInterface.call(t(e).not(this._selector), "hide"), n || t(e).data(i, null));
                                var a = this._getDimension();
                                t(this._element).removeClass(c).addClass(u), this._element.style[a] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);
                                var l = function() { t(o._element).removeClass(u).addClass(c).addClass("show"), o._element.style[a] = "", o.setTransitioning(!1), t(o._element).trigger(h.SHOWN) };
                                if (M.supportsTransitionEnd()) {
                                    var p = "scroll" + (a[0].toUpperCase() + a.slice(1));
                                    t(this._element).one(M.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[a] = this._element[p] + "px"
                                } else l()
                            }
                        }
                    }, r.hide = function() {
                        var e = this;
                        if (!this._isTransitioning && t(this._element).hasClass("show")) {
                            var i = t.Event(h.HIDE);
                            if (t(this._element).trigger(i), !i.isDefaultPrevented()) {
                                var s = this._getDimension();
                                if (this._element.style[s] = this._element.getBoundingClientRect()[s] + "px", M.reflow(this._element), t(this._element).addClass(u).removeClass(c).removeClass("show"), this._triggerArray.length > 0)
                                    for (var n = 0; n < this._triggerArray.length; n++) {
                                        var o = this._triggerArray[n],
                                            r = M.getSelectorFromElement(o);
                                        null !== r && (t(r).hasClass("show") || t(o).addClass("collapsed").attr("aria-expanded", !1))
                                    }
                                this.setTransitioning(!0);
                                var a = function() { e.setTransitioning(!1), t(e._element).removeClass(u).addClass(c).trigger(h.HIDDEN) };
                                this._element.style[s] = "", M.supportsTransitionEnd() ? t(this._element).one(M.TRANSITION_END, a).emulateTransitionEnd(600) : a()
                            }
                        }
                    }, r.setTransitioning = function(t) { this._isTransitioning = t }, r.dispose = function() { t.removeData(this._element, i), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null }, r._getConfig = function(t) { return (t = o({}, a, t)).toggle = Boolean(t.toggle), M.typeCheckConfig(e, t, l), t }, r._getDimension = function() { return t(this._element).hasClass("width") ? "width" : "height" }, r._getParent = function() {
                        var e = this,
                            i = null;
                        M.isElement(this._config.parent) ? (i = this._config.parent, void 0 !== this._config.parent.jquery && (i = this._config.parent[0])) : i = t(this._config.parent)[0];
                        var n = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return t(i).find(n).each(function(t, i) { e._addAriaAndCollapsedClass(s._getTargetFromElement(i), [i]) }), i
                    }, r._addAriaAndCollapsedClass = function(e, i) {
                        if (e) {
                            var s = t(e).hasClass("show");
                            i.length > 0 && t(i).toggleClass("collapsed", !s).attr("aria-expanded", s)
                        }
                    }, s._getTargetFromElement = function(e) { var i = M.getSelectorFromElement(e); return i ? t(i)[0] : null }, s._jQueryInterface = function(e) {
                        return this.each(function() {
                            var n = t(this),
                                r = n.data(i),
                                l = o({}, a, n.data(), "object" == typeof e && e);
                            if (!r && l.toggle && /show|hide/.test(e) && (l.toggle = !1), r || (r = new s(this, l), n.data(i, r)), "string" == typeof e) {
                                if (void 0 === r[e]) throw new TypeError('No method named "' + e + '"');
                                r[e]()
                            }
                        })
                    }, n(s, null, [{ key: "VERSION", get: function() { return "4.0.0" } }, { key: "Default", get: function() { return a } }]), s
                }();
            return t(document).on(h.CLICK_DATA_API, d.DATA_TOGGLE, function(e) {
                "A" === e.currentTarget.tagName && e.preventDefault();
                var s = t(this),
                    n = M.getSelectorFromElement(this);
                t(n).each(function() {
                    var e = t(this),
                        n = e.data(i) ? "toggle" : s.data();
                    p._jQueryInterface.call(e, n)
                })
            }), t.fn[e] = p._jQueryInterface, t.fn[e].Constructor = p, t.fn[e].noConflict = function() { return t.fn[e] = r, p._jQueryInterface }, p
        }(e),
        L = function(t) {
            var e = "dropdown",
                s = "bs.dropdown",
                r = "." + s,
                a = t.fn[e],
                l = new RegExp("38|40|27"),
                h = { HIDE: "hide" + r, HIDDEN: "hidden" + r, SHOW: "show" + r, SHOWN: "shown" + r, CLICK: "click" + r, CLICK_DATA_API: "click" + r + ".data-api", KEYDOWN_DATA_API: "keydown" + r + ".data-api", KEYUP_DATA_API: "keyup" + r + ".data-api" },
                c = "dropdown-menu-right",
                u = '[data-toggle="dropdown"]',
                d = ".dropdown-menu",
                p = { offset: 0, flip: !0, boundary: "scrollParent" },
                f = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)" },
                m = function() {
                    function a(t, e) { this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners() }
                    var m = a.prototype;
                    return m.toggle = function() {
                        if (!this._element.disabled && !t(this._element).hasClass("disabled")) {
                            var e = a._getParentFromElement(this._element),
                                s = t(this._menu).hasClass("show");
                            if (a._clearMenus(), !s) {
                                var n = { relatedTarget: this._element },
                                    o = t.Event(h.SHOW, n);
                                if (t(e).trigger(o), !o.isDefaultPrevented()) {
                                    if (!this._inNavbar) {
                                        if (void 0 === i) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                        var r = this._element;
                                        t(e).hasClass("dropup") && (t(this._menu).hasClass("dropdown-menu-left") || t(this._menu).hasClass(c)) && (r = e), "scrollParent" !== this._config.boundary && t(e).addClass("position-static"), this._popper = new i(r, this._menu, this._getPopperConfig())
                                    }
                                    "ontouchstart" in document.documentElement && 0 === t(e).closest(".navbar-nav").length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass("show"), t(e).toggleClass("show").trigger(t.Event(h.SHOWN, n))
                                }
                            }
                        }
                    }, m.dispose = function() { t.removeData(this._element, s), t(this._element).off(r), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null) }, m.update = function() { this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate() }, m._addEventListeners = function() {
                        var e = this;
                        t(this._element).on(h.CLICK, function(t) { t.preventDefault(), t.stopPropagation(), e.toggle() })
                    }, m._getConfig = function(i) { return i = o({}, this.constructor.Default, t(this._element).data(), i), M.typeCheckConfig(e, i, this.constructor.DefaultType), i }, m._getMenuElement = function() {
                        if (!this._menu) {
                            var e = a._getParentFromElement(this._element);
                            this._menu = t(e).find(d)[0]
                        }
                        return this._menu
                    }, m._getPlacement = function() {
                        var e = t(this._element).parent(),
                            i = "bottom-start";
                        return e.hasClass("dropup") ? (i = "top-start", t(this._menu).hasClass(c) && (i = "top-end")) : e.hasClass("dropright") ? i = "right-start" : e.hasClass("dropleft") ? i = "left-start" : t(this._menu).hasClass(c) && (i = "bottom-end"), i
                    }, m._detectNavbar = function() { return t(this._element).closest(".navbar").length > 0 }, m._getPopperConfig = function() {
                        var t = this,
                            e = {};
                        return "function" == typeof this._config.offset ? e.fn = function(e) { return e.offsets = o({}, e.offsets, t._config.offset(e.offsets) || {}), e } : e.offset = this._config.offset, { placement: this._getPlacement(), modifiers: { offset: e, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } }
                    }, a._jQueryInterface = function(e) {
                        return this.each(function() {
                            var i = t(this).data(s);
                            if (i || (i = new a(this, "object" == typeof e ? e : null), t(this).data(s, i)), "string" == typeof e) {
                                if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                                i[e]()
                            }
                        })
                    }, a._clearMenus = function(e) {
                        if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                            for (var i = t.makeArray(t(u)), n = 0; n < i.length; n++) {
                                var o = a._getParentFromElement(i[n]),
                                    r = t(i[n]).data(s),
                                    l = { relatedTarget: i[n] };
                                if (r) {
                                    var c = r._menu;
                                    if (t(o).hasClass("show") && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(o, e.target))) {
                                        var d = t.Event(h.HIDE, l);
                                        t(o).trigger(d), d.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), i[n].setAttribute("aria-expanded", "false"), t(c).removeClass("show"), t(o).removeClass("show").trigger(t.Event(h.HIDDEN, l)))
                                    }
                                }
                            }
                    }, a._getParentFromElement = function(e) { var i, s = M.getSelectorFromElement(e); return s && (i = t(s)[0]), i || e.parentNode }, a._dataApiKeydownHandler = function(e) {
                        if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(d).length)) : l.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass("disabled"))) {
                            var i = a._getParentFromElement(this),
                                s = t(i).hasClass("show");
                            if ((s || 27 === e.which && 32 === e.which) && (!s || 27 !== e.which && 32 !== e.which)) {
                                var n = t(i).find(".dropdown-menu .dropdown-item:not(.disabled)").get();
                                if (0 !== n.length) {
                                    var o = n.indexOf(e.target);
                                    38 === e.which && o > 0 && o--, 40 === e.which && o < n.length - 1 && o++, o < 0 && (o = 0), n[o].focus()
                                }
                            } else {
                                if (27 === e.which) {
                                    var r = t(i).find(u)[0];
                                    t(r).trigger("focus")
                                }
                                t(this).trigger("click")
                            }
                        }
                    }, n(a, null, [{ key: "VERSION", get: function() { return "4.0.0" } }, { key: "Default", get: function() { return p } }, { key: "DefaultType", get: function() { return f } }]), a
                }();
            return t(document).on(h.KEYDOWN_DATA_API, u, m._dataApiKeydownHandler).on(h.KEYDOWN_DATA_API, d, m._dataApiKeydownHandler).on(h.CLICK_DATA_API + " " + h.KEYUP_DATA_API, m._clearMenus).on(h.CLICK_DATA_API, u, function(e) { e.preventDefault(), e.stopPropagation(), m._jQueryInterface.call(t(this), "toggle") }).on(h.CLICK_DATA_API, ".dropdown form", function(t) { t.stopPropagation() }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function() { return t.fn[e] = a, m._jQueryInterface }, m
        }(e),
        z = function(t) {
            var e = "bs.modal",
                i = "." + e,
                s = t.fn.modal,
                r = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
                a = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
                l = { HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, FOCUSIN: "focusin" + i, RESIZE: "resize" + i, CLICK_DISMISS: "click.dismiss" + i, KEYDOWN_DISMISS: "keydown.dismiss" + i, MOUSEUP_DISMISS: "mouseup.dismiss" + i, MOUSEDOWN_DISMISS: "mousedown.dismiss" + i, CLICK_DATA_API: "click.bs.modal.data-api" },
                h = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" },
                c = function() {
                    function s(e, i) { this._config = this._getConfig(i), this._element = e, this._dialog = t(e).find(h.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0 }
                    var c = s.prototype;
                    return c.toggle = function(t) { return this._isShown ? this.hide() : this.show(t) }, c.show = function(e) {
                        var i = this;
                        if (!this._isTransitioning && !this._isShown) {
                            M.supportsTransitionEnd() && t(this._element).hasClass("fade") && (this._isTransitioning = !0);
                            var s = t.Event(l.SHOW, { relatedTarget: e });
                            t(this._element).trigger(s), this._isShown || s.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass("modal-open"), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(l.CLICK_DISMISS, h.DATA_DISMISS, function(t) { return i.hide(t) }), t(this._dialog).on(l.MOUSEDOWN_DISMISS, function() { t(i._element).one(l.MOUSEUP_DISMISS, function(e) { t(e.target).is(i._element) && (i._ignoreBackdropClick = !0) }) }), this._showBackdrop(function() { return i._showElement(e) }))
                        }
                    }, c.hide = function(e) {
                        var i = this;
                        if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                            var s = t.Event(l.HIDE);
                            if (t(this._element).trigger(s), this._isShown && !s.isDefaultPrevented()) {
                                this._isShown = !1;
                                var n = M.supportsTransitionEnd() && t(this._element).hasClass("fade");
                                n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(l.FOCUSIN), t(this._element).removeClass("show"), t(this._element).off(l.CLICK_DISMISS), t(this._dialog).off(l.MOUSEDOWN_DISMISS), n ? t(this._element).one(M.TRANSITION_END, function(t) { return i._hideModal(t) }).emulateTransitionEnd(300) : this._hideModal()
                            }
                        }
                    }, c.dispose = function() { t.removeData(this._element, e), t(window, document, this._element, this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null }, c.handleUpdate = function() { this._adjustDialog() }, c._getConfig = function(t) { return t = o({}, r, t), M.typeCheckConfig("modal", t, a), t }, c._showElement = function(e) {
                        var i = this,
                            s = M.supportsTransitionEnd() && t(this._element).hasClass("fade");
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, s && M.reflow(this._element), t(this._element).addClass("show"), this._config.focus && this._enforceFocus();
                        var n = t.Event(l.SHOWN, { relatedTarget: e }),
                            o = function() { i._config.focus && i._element.focus(), i._isTransitioning = !1, t(i._element).trigger(n) };
                        s ? t(this._dialog).one(M.TRANSITION_END, o).emulateTransitionEnd(300) : o()
                    }, c._enforceFocus = function() {
                        var e = this;
                        t(document).off(l.FOCUSIN).on(l.FOCUSIN, function(i) { document !== i.target && e._element !== i.target && 0 === t(e._element).has(i.target).length && e._element.focus() })
                    }, c._setEscapeEvent = function() {
                        var e = this;
                        this._isShown && this._config.keyboard ? t(this._element).on(l.KEYDOWN_DISMISS, function(t) { 27 === t.which && (t.preventDefault(), e.hide()) }) : this._isShown || t(this._element).off(l.KEYDOWN_DISMISS)
                    }, c._setResizeEvent = function() {
                        var e = this;
                        this._isShown ? t(window).on(l.RESIZE, function(t) { return e.handleUpdate(t) }) : t(window).off(l.RESIZE)
                    }, c._hideModal = function() {
                        var e = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() { t(document.body).removeClass("modal-open"), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(l.HIDDEN) })
                    }, c._removeBackdrop = function() { this._backdrop && (t(this._backdrop).remove(), this._backdrop = null) }, c._showBackdrop = function(e) {
                        var i = this,
                            s = t(this._element).hasClass("fade") ? "fade" : "";
                        if (this._isShown && this._config.backdrop) {
                            var n = M.supportsTransitionEnd() && s;
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", s && t(this._backdrop).addClass(s), t(this._backdrop).appendTo(document.body), t(this._element).on(l.CLICK_DISMISS, function(t) { i._ignoreBackdropClick ? i._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide()) }), n && M.reflow(this._backdrop), t(this._backdrop).addClass("show"), !e) return;
                            if (!n) return void e();
                            t(this._backdrop).one(M.TRANSITION_END, e).emulateTransitionEnd(150)
                        } else if (!this._isShown && this._backdrop) {
                            t(this._backdrop).removeClass("show");
                            var o = function() { i._removeBackdrop(), e && e() };
                            M.supportsTransitionEnd() && t(this._element).hasClass("fade") ? t(this._backdrop).one(M.TRANSITION_END, o).emulateTransitionEnd(150) : o()
                        } else e && e()
                    }, c._adjustDialog = function() { var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px") }, c._resetAdjustments = function() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" }, c._checkScrollbar = function() {
                        var t = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, c._setScrollbar = function() {
                        var e = this;
                        if (this._isBodyOverflowing) {
                            t(h.FIXED_CONTENT).each(function(i, s) {
                                var n = t(s)[0].style.paddingRight,
                                    o = t(s).css("padding-right");
                                t(s).data("padding-right", n).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                            }), t(h.STICKY_CONTENT).each(function(i, s) {
                                var n = t(s)[0].style.marginRight,
                                    o = t(s).css("margin-right");
                                t(s).data("margin-right", n).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                            }), t(h.NAVBAR_TOGGLER).each(function(i, s) {
                                var n = t(s)[0].style.marginRight,
                                    o = t(s).css("margin-right");
                                t(s).data("margin-right", n).css("margin-right", parseFloat(o) + e._scrollbarWidth + "px")
                            });
                            var i = document.body.style.paddingRight,
                                s = t("body").css("padding-right");
                            t("body").data("padding-right", i).css("padding-right", parseFloat(s) + this._scrollbarWidth + "px")
                        }
                    }, c._resetScrollbar = function() {
                        t(h.FIXED_CONTENT).each(function(e, i) {
                            var s = t(i).data("padding-right");
                            void 0 !== s && t(i).css("padding-right", s).removeData("padding-right")
                        }), t(h.STICKY_CONTENT + ", " + h.NAVBAR_TOGGLER).each(function(e, i) {
                            var s = t(i).data("margin-right");
                            void 0 !== s && t(i).css("margin-right", s).removeData("margin-right")
                        });
                        var e = t("body").data("padding-right");
                        void 0 !== e && t("body").css("padding-right", e).removeData("padding-right")
                    }, c._getScrollbarWidth = function() {
                        var t = document.createElement("div");
                        t.className = "modal-scrollbar-measure", document.body.appendChild(t);
                        var e = t.getBoundingClientRect().width - t.clientWidth;
                        return document.body.removeChild(t), e
                    }, s._jQueryInterface = function(i, n) {
                        return this.each(function() {
                            var r = t(this).data(e),
                                a = o({}, s.Default, t(this).data(), "object" == typeof i && i);
                            if (r || (r = new s(this, a), t(this).data(e, r)), "string" == typeof i) {
                                if (void 0 === r[i]) throw new TypeError('No method named "' + i + '"');
                                r[i](n)
                            } else a.show && r.show(n)
                        })
                    }, n(s, null, [{ key: "VERSION", get: function() { return "4.0.0" } }, { key: "Default", get: function() { return r } }]), s
                }();
            return t(document).on(l.CLICK_DATA_API, h.DATA_TOGGLE, function(i) {
                var s, n = this,
                    r = M.getSelectorFromElement(this);
                r && (s = t(r)[0]);
                var a = t(s).data(e) ? "toggle" : o({}, t(s).data(), t(this).data());
                "A" !== this.tagName && "AREA" !== this.tagName || i.preventDefault();
                var h = t(s).one(l.SHOW, function(e) { e.isDefaultPrevented() || h.one(l.HIDDEN, function() { t(n).is(":visible") && n.focus() }) });
                c._jQueryInterface.call(t(s), a, this)
            }), t.fn.modal = c._jQueryInterface, t.fn.modal.Constructor = c, t.fn.modal.noConflict = function() { return t.fn.modal = s, c._jQueryInterface }, c
        }(e),
        W = function(t) {
            var e = "tooltip",
                s = "bs.tooltip",
                r = "." + s,
                a = t.fn[e],
                l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                h = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" },
                c = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
                u = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" },
                d = { HIDE: "hide" + r, HIDDEN: "hidden" + r, SHOW: "show" + r, SHOWN: "shown" + r, INSERTED: "inserted" + r, CLICK: "click" + r, FOCUSIN: "focusin" + r, FOCUSOUT: "focusout" + r, MOUSEENTER: "mouseenter" + r, MOUSELEAVE: "mouseleave" + r },
                p = function() {
                    function a(t, e) {
                        if (void 0 === i) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                    }
                    var p = a.prototype;
                    return p.enable = function() { this._isEnabled = !0 }, p.disable = function() { this._isEnabled = !1 }, p.toggleEnabled = function() { this._isEnabled = !this._isEnabled }, p.toggle = function(e) {
                        if (this._isEnabled)
                            if (e) {
                                var i = this.constructor.DATA_KEY,
                                    s = t(e.currentTarget).data(i);
                                s || (s = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, s)), s._activeTrigger.click = !s._activeTrigger.click, s._isWithActiveTrigger() ? s._enter(null, s) : s._leave(null, s)
                            } else {
                                if (t(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                    }, p.dispose = function() { clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null }, p.show = function() {
                        var e = this;
                        if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var s = t.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            t(this.element).trigger(s);
                            var n = t.contains(this.element.ownerDocument.documentElement, this.element);
                            if (s.isDefaultPrevented() || !n) return;
                            var o = this.getTipElement(),
                                r = M.getUID(this.constructor.NAME);
                            o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && t(o).addClass("fade");
                            var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                h = this._getAttachment(l);
                            this.addAttachmentClass(h);
                            var c = !1 === this.config.container ? document.body : t(this.config.container);
                            t(o).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(o).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new i(this.element, o, { placement: h, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function(t) { t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t) }, onUpdate: function(t) { e._handlePopperPlacementChange(t) } }), t(o).addClass("show"), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);
                            var u = function() {
                                e.config.animation && e._fixTransition();
                                var i = e._hoverState;
                                e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), "out" === i && e._leave(null, e)
                            };
                            M.supportsTransitionEnd() && t(this.tip).hasClass("fade") ? t(this.tip).one(M.TRANSITION_END, u).emulateTransitionEnd(a._TRANSITION_DURATION) : u()
                        }
                    }, p.hide = function(e) {
                        var i = this,
                            s = this.getTipElement(),
                            n = t.Event(this.constructor.Event.HIDE),
                            o = function() { "show" !== i._hoverState && s.parentNode && s.parentNode.removeChild(s), i._cleanTipClass(), i.element.removeAttribute("aria-describedby"), t(i.element).trigger(i.constructor.Event.HIDDEN), null !== i._popper && i._popper.destroy(), e && e() };
                        t(this.element).trigger(n), n.isDefaultPrevented() || (t(s).removeClass("show"), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, M.supportsTransitionEnd() && t(this.tip).hasClass("fade") ? t(s).one(M.TRANSITION_END, o).emulateTransitionEnd(150) : o(), this._hoverState = "")
                    }, p.update = function() { null !== this._popper && this._popper.scheduleUpdate() }, p.isWithContent = function() { return Boolean(this.getTitle()) }, p.addAttachmentClass = function(e) { t(this.getTipElement()).addClass("bs-tooltip-" + e) }, p.getTipElement = function() { return this.tip = this.tip || t(this.config.template)[0], this.tip }, p.setContent = function() {
                        var e = t(this.getTipElement());
                        this.setElementContent(e.find(".tooltip-inner"), this.getTitle()), e.removeClass("fade show")
                    }, p.setElementContent = function(e, i) { var s = this.config.html; "object" == typeof i && (i.nodeType || i.jquery) ? s ? t(i).parent().is(e) || e.empty().append(i) : e.text(t(i).text()) : e[s ? "html" : "text"](i) }, p.getTitle = function() { var t = this.element.getAttribute("data-original-title"); return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t }, p._getAttachment = function(t) { return c[t.toUpperCase()] }, p._setListeners = function() {
                        var e = this;
                        this.config.trigger.split(" ").forEach(function(i) {
                            if ("click" === i) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) { return e.toggle(t) });
                            else if ("manual" !== i) {
                                var s = "hover" === i ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                    n = "hover" === i ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                t(e.element).on(s, e.config.selector, function(t) { return e._enter(t) }).on(n, e.config.selector, function(t) { return e._leave(t) })
                            }
                            t(e.element).closest(".modal").on("hide.bs.modal", function() { return e.hide() })
                        }), this.config.selector ? this.config = o({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle()
                    }, p._fixTitle = function() {
                        var t = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, p._enter = function(e, i) {
                        var s = this.constructor.DATA_KEY;
                        (i = i || t(e.currentTarget).data(s)) || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(s, i)), e && (i._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), t(i.getTipElement()).hasClass("show") || "show" === i._hoverState ? i._hoverState = "show" : (clearTimeout(i._timeout), i._hoverState = "show", i.config.delay && i.config.delay.show ? i._timeout = setTimeout(function() { "show" === i._hoverState && i.show() }, i.config.delay.show) : i.show())
                    }, p._leave = function(e, i) {
                        var s = this.constructor.DATA_KEY;
                        (i = i || t(e.currentTarget).data(s)) || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(s, i)), e && (i._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1), i._isWithActiveTrigger() || (clearTimeout(i._timeout), i._hoverState = "out", i.config.delay && i.config.delay.hide ? i._timeout = setTimeout(function() { "out" === i._hoverState && i.hide() }, i.config.delay.hide) : i.hide())
                    }, p._isWithActiveTrigger = function() {
                        for (var t in this._activeTrigger)
                            if (this._activeTrigger[t]) return !0;
                        return !1
                    }, p._getConfig = function(i) { return "number" == typeof(i = o({}, this.constructor.Default, t(this.element).data(), i)).delay && (i.delay = { show: i.delay, hide: i.delay }), "number" == typeof i.title && (i.title = i.title.toString()), "number" == typeof i.content && (i.content = i.content.toString()), M.typeCheckConfig(e, i, this.constructor.DefaultType), i }, p._getDelegateConfig = function() {
                        var t = {};
                        if (this.config)
                            for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                        return t
                    }, p._cleanTipClass = function() {
                        var e = t(this.getTipElement()),
                            i = e.attr("class").match(l);
                        null !== i && i.length > 0 && e.removeClass(i.join(""))
                    }, p._handlePopperPlacementChange = function(t) { this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement)) }, p._fixTransition = function() {
                        var e = this.getTipElement(),
                            i = this.config.animation;
                        null === e.getAttribute("x-placement") && (t(e).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = i)
                    }, a._jQueryInterface = function(e) {
                        return this.each(function() {
                            var i = t(this).data(s),
                                n = "object" == typeof e && e;
                            if ((i || !/dispose|hide/.test(e)) && (i || (i = new a(this, n), t(this).data(s, i)), "string" == typeof e)) {
                                if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                                i[e]()
                            }
                        })
                    }, n(a, null, [{ key: "VERSION", get: function() { return "4.0.0" } }, { key: "Default", get: function() { return u } }, { key: "NAME", get: function() { return e } }, { key: "DATA_KEY", get: function() { return s } }, { key: "Event", get: function() { return d } }, { key: "EVENT_KEY", get: function() { return r } }, { key: "DefaultType", get: function() { return h } }]), a
                }();
            return t.fn[e] = p._jQueryInterface, t.fn[e].Constructor = p, t.fn[e].noConflict = function() { return t.fn[e] = a, p._jQueryInterface }, p
        }(e),
        j = function(t) {
            var e = "popover",
                i = "bs.popover",
                s = "." + i,
                r = t.fn[e],
                a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                l = o({}, W.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
                h = o({}, W.DefaultType, { content: "(string|element|function)" }),
                c = { HIDE: "hide" + s, HIDDEN: "hidden" + s, SHOW: "show" + s, SHOWN: "shown" + s, INSERTED: "inserted" + s, CLICK: "click" + s, FOCUSIN: "focusin" + s, FOCUSOUT: "focusout" + s, MOUSEENTER: "mouseenter" + s, MOUSELEAVE: "mouseleave" + s },
                u = function(o) {
                    function r() { return o.apply(this, arguments) || this }
                    var u, d;
                    d = o, (u = r).prototype = Object.create(d.prototype), u.prototype.constructor = u, u.__proto__ = d;
                    var p = r.prototype;
                    return p.isWithContent = function() { return this.getTitle() || this._getContent() }, p.addAttachmentClass = function(e) { t(this.getTipElement()).addClass("bs-popover-" + e) }, p.getTipElement = function() { return this.tip = this.tip || t(this.config.template)[0], this.tip }, p.setContent = function() {
                        var e = t(this.getTipElement());
                        this.setElementContent(e.find(".popover-header"), this.getTitle());
                        var i = this._getContent();
                        "function" == typeof i && (i = i.call(this.element)), this.setElementContent(e.find(".popover-body"), i), e.removeClass("fade show")
                    }, p._getContent = function() { return this.element.getAttribute("data-content") || this.config.content }, p._cleanTipClass = function() {
                        var e = t(this.getTipElement()),
                            i = e.attr("class").match(a);
                        null !== i && i.length > 0 && e.removeClass(i.join(""))
                    }, r._jQueryInterface = function(e) {
                        return this.each(function() {
                            var s = t(this).data(i),
                                n = "object" == typeof e ? e : null;
                            if ((s || !/destroy|hide/.test(e)) && (s || (s = new r(this, n), t(this).data(i, s)), "string" == typeof e)) {
                                if (void 0 === s[e]) throw new TypeError('No method named "' + e + '"');
                                s[e]()
                            }
                        })
                    }, n(r, null, [{ key: "VERSION", get: function() { return "4.0.0" } }, { key: "Default", get: function() { return l } }, { key: "NAME", get: function() { return e } }, { key: "DATA_KEY", get: function() { return i } }, { key: "Event", get: function() { return c } }, { key: "EVENT_KEY", get: function() { return s } }, { key: "DefaultType", get: function() { return h } }]), r
                }(W);
            return t.fn[e] = u._jQueryInterface, t.fn[e].Constructor = u, t.fn[e].noConflict = function() { return t.fn[e] = r, u._jQueryInterface }, u
        }(e),
        R = function(t) {
            var e = "scrollspy",
                i = "bs.scrollspy",
                s = "." + i,
                r = t.fn[e],
                a = { offset: 10, method: "auto", target: "" },
                l = { offset: "number", method: "string", target: "(string|element)" },
                h = { ACTIVATE: "activate" + s, SCROLL: "scroll" + s, LOAD_DATA_API: "load" + s + ".data-api" },
                c = "active",
                u = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
                d = function() {
                    function r(e, i) {
                        var s = this;
                        this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(i), this._selector = this._config.target + " " + u.NAV_LINKS + "," + this._config.target + " " + u.LIST_ITEMS + "," + this._config.target + " " + u.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(h.SCROLL, function(t) { return s._process(t) }), this.refresh(), this._process()
                    }
                    var d = r.prototype;
                    return d.refresh = function() {
                        var e = this,
                            i = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                            s = "auto" === this._config.method ? i : this._config.method,
                            n = "position" === s ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function(e) { var i, o = M.getSelectorFromElement(e); if (o && (i = t(o)[0]), i) { var r = i.getBoundingClientRect(); if (r.width || r.height) return [t(i)[s]().top + n, o] } return null }).filter(function(t) { return t }).sort(function(t, e) { return t[0] - e[0] }).forEach(function(t) { e._offsets.push(t[0]), e._targets.push(t[1]) })
                    }, d.dispose = function() { t.removeData(this._element, i), t(this._scrollElement).off(s), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null }, d._getConfig = function(i) {
                        if ("string" != typeof(i = o({}, a, i)).target) {
                            var s = t(i.target).attr("id");
                            s || (s = M.getUID(e), t(i.target).attr("id", s)), i.target = "#" + s
                        }
                        return M.typeCheckConfig(e, i, l), i
                    }, d._getScrollTop = function() { return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop }, d._getScrollHeight = function() { return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) }, d._getOffsetHeight = function() { return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height }, d._process = function() {
                        var t = this._getScrollTop() + this._config.offset,
                            e = this._getScrollHeight(),
                            i = this._config.offset + e - this._getOffsetHeight();
                        if (this._scrollHeight !== e && this.refresh(), t >= i) {
                            var s = this._targets[this._targets.length - 1];
                            this._activeTarget !== s && this._activate(s)
                        } else { if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear(); for (var n = this._offsets.length; n--;) this._activeTarget !== this._targets[n] && t >= this._offsets[n] && (void 0 === this._offsets[n + 1] || t < this._offsets[n + 1]) && this._activate(this._targets[n]) }
                    }, d._activate = function(e) {
                        this._activeTarget = e, this._clear();
                        var i = this._selector.split(",");
                        i = i.map(function(t) { return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]' });
                        var s = t(i.join(","));
                        s.hasClass("dropdown-item") ? (s.closest(u.DROPDOWN).find(u.DROPDOWN_TOGGLE).addClass(c), s.addClass(c)) : (s.addClass(c), s.parents(u.NAV_LIST_GROUP).prev(u.NAV_LINKS + ", " + u.LIST_ITEMS).addClass(c), s.parents(u.NAV_LIST_GROUP).prev(u.NAV_ITEMS).children(u.NAV_LINKS).addClass(c)), t(this._scrollElement).trigger(h.ACTIVATE, { relatedTarget: e })
                    }, d._clear = function() { t(this._selector).filter(u.ACTIVE).removeClass(c) }, r._jQueryInterface = function(e) {
                        return this.each(function() {
                            var s = t(this).data(i);
                            if (s || (s = new r(this, "object" == typeof e && e), t(this).data(i, s)), "string" == typeof e) {
                                if (void 0 === s[e]) throw new TypeError('No method named "' + e + '"');
                                s[e]()
                            }
                        })
                    }, n(r, null, [{ key: "VERSION", get: function() { return "4.0.0" } }, { key: "Default", get: function() { return a } }]), r
                }();
            return t(window).on(h.LOAD_DATA_API, function() {
                for (var e = t.makeArray(t(u.DATA_SPY)), i = e.length; i--;) {
                    var s = t(e[i]);
                    d._jQueryInterface.call(s, s.data())
                }
            }), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function() { return t.fn[e] = r, d._jQueryInterface }, d
        }(e),
        F = function(t) {
            var e = t.fn.tab,
                i = { HIDE: "hide.bs.tab", HIDDEN: "hidden.bs.tab", SHOW: "show.bs.tab", SHOWN: "shown.bs.tab", CLICK_DATA_API: "click.bs.tab.data-api" },
                s = function() {
                    function e(t) { this._element = t }
                    var s = e.prototype;
                    return s.show = function() {
                        var e = this;
                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass("active") || t(this._element).hasClass("disabled"))) {
                            var s, n, o = t(this._element).closest(".nav, .list-group")[0],
                                r = M.getSelectorFromElement(this._element);
                            if (o) {
                                var a = "UL" === o.nodeName ? "> li > .active" : ".active";
                                n = (n = t.makeArray(t(o).find(a)))[n.length - 1]
                            }
                            var l = t.Event(i.HIDE, { relatedTarget: this._element }),
                                h = t.Event(i.SHOW, { relatedTarget: n });
                            if (n && t(n).trigger(l), t(this._element).trigger(h), !h.isDefaultPrevented() && !l.isDefaultPrevented()) {
                                r && (s = t(r)[0]), this._activate(this._element, o);
                                var c = function() {
                                    var s = t.Event(i.HIDDEN, { relatedTarget: e._element }),
                                        o = t.Event(i.SHOWN, { relatedTarget: n });
                                    t(n).trigger(s), t(e._element).trigger(o)
                                };
                                s ? this._activate(s, s.parentNode, c) : c()
                            }
                        }
                    }, s.dispose = function() { t.removeData(this._element, "bs.tab"), this._element = null }, s._activate = function(e, i, s) {
                        var n = this,
                            o = ("UL" === i.nodeName ? t(i).find("> li > .active") : t(i).children(".active"))[0],
                            r = s && M.supportsTransitionEnd() && o && t(o).hasClass("fade"),
                            a = function() { return n._transitionComplete(e, o, s) };
                        o && r ? t(o).one(M.TRANSITION_END, a).emulateTransitionEnd(150) : a()
                    }, s._transitionComplete = function(e, i, s) {
                        if (i) {
                            t(i).removeClass("show active");
                            var n = t(i.parentNode).find("> .dropdown-menu .active")[0];
                            n && t(n).removeClass("active"), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1)
                        }
                        if (t(e).addClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), M.reflow(e), t(e).addClass("show"), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
                            var o = t(e).closest(".dropdown")[0];
                            o && t(o).find(".dropdown-toggle").addClass("active"), e.setAttribute("aria-expanded", !0)
                        }
                        s && s()
                    }, e._jQueryInterface = function(i) {
                        return this.each(function() {
                            var s = t(this),
                                n = s.data("bs.tab");
                            if (n || (n = new e(this), s.data("bs.tab", n)), "string" == typeof i) {
                                if (void 0 === n[i]) throw new TypeError('No method named "' + i + '"');
                                n[i]()
                            }
                        })
                    }, n(e, null, [{ key: "VERSION", get: function() { return "4.0.0" } }]), e
                }();
            return t(document).on(i.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) { e.preventDefault(), s._jQueryInterface.call(t(this), "show") }), t.fn.tab = s._jQueryInterface, t.fn.tab.Constructor = s, t.fn.tab.noConflict = function() { return t.fn.tab = e, s._jQueryInterface }, s
        }(e);
    ! function(t) { if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); var e = t.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0") }(e), t.Util = M, t.Alert = $, t.Button = O, t.Carousel = N, t.Collapse = H, t.Dropdown = L, t.Modal = z, t.Popover = j, t.Scrollspy = R, t.Tab = F, t.Tooltip = W, Object.defineProperty(t, "__esModule", { value: !0 })
}),
function(t, e, i, s) {
    function n(e, i) { this.settings = null, this.options = t.extend({}, n.Defaults, i), this.$element = t(e), this.drag = t.extend({}, a), this.state = t.extend({}, l), this.e = t.extend({}, h), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(n.Plugins, t.proxy(function(t, e) { this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this) }, this)), t.each(n.Pipe, t.proxy(function(e, i) { this._pipe.push({ filter: i.filter, run: t.proxy(i.run, this) }) }, this)), this.setup(), this.initialize() }

    function o(t) { if (t.touches !== s) return { x: t.touches[0].pageX, y: t.touches[0].pageY }; if (t.touches === s) { if (t.pageX !== s) return { x: t.pageX, y: t.pageY }; if (t.pageX === s) return { x: t.clientX, y: t.clientY } } }

    function r(t) {
        var e, s, n = i.createElement("div"),
            o = t;
        for (e in o)
            if (s = o[e], void 0 !== n.style[s]) return n = null, [s, e];
        return [!1]
    }
    var a, l, h;
    a = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, offsetX: 0, offsetY: 0, distance: null, startTime: 0, endTime: 0, updatedX: 0, targetEl: null }, l = { isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1 }, h = { _onDragStart: null, _onDragMove: null, _onDragEnd: null, _transitionEnd: null, _resizer: null, _responsiveCall: null, _goToLoop: null, _checkVisibile: null }, n.Defaults = { items: 3, loop: !1, center: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: e, responsiveClass: !1, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", themeClass: "owl-theme", baseClass: "owl-carousel", itemClass: "owl-item", centerClass: "center", activeClass: "active" }, n.Width = { Default: "default", Inner: "inner", Outer: "outer" }, n.Plugins = {}, n.Pipe = [{ filter: ["width", "items", "settings"], run: function(t) { t.current = this._items && this._items[this.relative(this._current)] } }, {
        filter: ["items", "settings"],
        run: function() {
            var t = this._clones;
            (this.$stage.children(".cloned").length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t, e, i = this._clones,
                s = this._items,
                n = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
            for (t = 0, e = Math.abs(n / 2); e > t; t++) n > 0 ? (this.$stage.children().eq(s.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(s[i[i.length - 1]].clone().addClass("cloned")), i.push(s.length - 1 - (i.length - 1) / 2), this.$stage.prepend(s[i[i.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t, e, i, s = this.settings.rtl ? 1 : -1,
                n = (this.width() / this.settings.items).toFixed(3),
                o = 0;
            for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, o += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : n * t) * s, this._coordinates.push(o)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var e, i, s = (this.width() / this.settings.items).toFixed(3),
                n = { width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding, "padding-left": this.settings.stagePadding || "", "padding-right": this.settings.stagePadding || "" };
            if (this.$stage.css(n), n = { width: this.settings.autoWidth ? "auto" : s - this.settings.margin }, n[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function(t) { return t > 1 }).length > 0)
                for (e = 0, i = this._coordinates.length; i > e; e++) n.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(n);
            else this.$stage.children().css(n)
        }
    }, { filter: ["width", "items", "settings"], run: function(t) { t.current && this.reset(this.$stage.children().index(t.current)) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, i, s, n = this.settings.rtl ? 1 : -1,
                o = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + o,
                a = r + this.width() * n,
                l = [];
            for (i = 0, s = this._coordinates.length; s > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], n.prototype.initialize = function() {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && !0 !== this.state.imagesLoaded) { var e, i, n; if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, n = this.$element.children(i).width(), e.length && 0 >= n) return this.preloadAutoWidthImages(e), !1 }
        this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, n.prototype.setup = function() {
        var e = this.viewport(),
            i = this.options.responsive,
            s = -1,
            n = null;
        i ? (t.each(i, function(t) { e >= t && t > s && (s = Number(t)) }), n = t.extend({}, this.options, i[s]), delete n.responsive, n.responsiveClass && this.$element.attr("class", function(t, e) { return e.replace(/\b owl-responsive-\S+/g, "") }).addClass("owl-responsive-" + s)) : n = t.extend({}, this.options), (null === this.settings || this._breakpoint !== s) && (this.trigger("change", { property: { name: "settings", value: n } }), this._breakpoint = s, this.settings = n, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } }))
    }, n.prototype.optionsLogic = function() { this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, n.prototype.prepare = function(e) { var i = this.trigger("prepare", { content: e }); return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", { content: i.data }), i.data }, n.prototype.update = function() {
        for (var e = 0, i = this._pipe.length, s = t.proxy(function(t) { return this[t] }, this._invalidated), n = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n), e++;
        this._invalidated = {}
    }, n.prototype.width = function(t) {
        switch (t = t || n.Width.Default) {
            case n.Width.Inner:
            case n.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, n.prototype.refresh = function() {
        if (0 === this._items.length) return !1;
        (new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed")
    }, n.prototype.eventsCall = function() { this.e._onDragStart = t.proxy(function(t) { this.onDragStart(t) }, this), this.e._onDragMove = t.proxy(function(t) { this.onDragMove(t) }, this), this.e._onDragEnd = t.proxy(function(t) { this.onDragEnd(t) }, this), this.e._onResize = t.proxy(function(t) { this.onResize(t) }, this), this.e._transitionEnd = t.proxy(function(t) { this.transitionEnd(t) }, this), this.e._preventClick = t.proxy(function(t) { this.preventClick(t) }, this) }, n.prototype.onThrottledResize = function() { e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate) }, n.prototype.onResize = function() { return !!this._items.length && (this._width !== this.$element.width() && (!this.trigger("resize").isDefaultPrevented() && (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")))) }, n.prototype.eventsRouter = function(t) { var e = t.type; "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t) }, n.prototype.internalEvents = function() {
        var i = ("ontouchstart" in e || navigator.msMaxTouchPoints, e.navigator.msPointerEnabled);
        this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function(t) { this.eventsRouter(t) }, this)), this.$stage.on("dragstart", function() { return !1 }), this.$stage.get(0).onselectstart = function() { return !1 }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function(t) { this.eventsRouter(t) }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), !1 !== this.settings.responsive && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
    }, n.prototype.onDragStart = function(s) {
        var n, r, a, l;
        if (3 === (n = s.originalEvent || s || e.event).which || this.state.isTouch) return !1;
        if ("mousedown" === n.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = o(n).x, a = o(n).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) l = this.getTransformProperty(), this.drag.offsetX = l, this.animate(l), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = n.target || n.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function(t) { this.eventsRouter(t) }, this))
    }, n.prototype.onDragMove = function(t) {
        var i, n, r, a, l, h;
        this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, n = o(i).x, r = o(i).y, this.drag.currentX = n - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), l = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), h = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + h), l + h)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== s ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && !1 === this.state.isSwiping && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, n.prototype.onDragEnd = function(e) {
        var s, n;
        if (this.state.isTouch) {
            if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && !0 !== this.state.inMotion) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), s = this.drag.endTime - this.drag.startTime, (Math.abs(this.drag.distance) > 3 || s > 300) && this.removeClick(this.drag.targetEl), n = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(n), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(n) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents")
        }
    }, n.prototype.removeClick = function(i) { this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function() { t(i).off("click.preventClick") }, 300) }, n.prototype.preventClick = function(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick") }, n.prototype.getTransformProperty = function() { var t; return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), !0 !== (16 === t.length) ? t[4] : t[12] }, n.prototype.closest = function(e) {
        var i = -1,
            s = this.width(),
            n = this.coordinates();
        return this.settings.freeDrag || t.each(n, t.proxy(function(t, o) { return e > o - 30 && o + 30 > e ? i = t : this.op(e, "<", o) && this.op(e, ">", n[t + 1] || o - s) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i }, this)), this.settings.loop || (this.op(e, ">", n[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", n[this.maximum()]) && (i = e = this.maximum())), i
    }, n.prototype.animate = function(e) { this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({ transform: "translate3d(" + e + "px,0px, 0px)", transition: this.speed() / 1e3 + "s" }) : this.state.isTouch ? this.$stage.css({ left: e + "px" }) : this.$stage.animate({ left: e }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function() { this.state.inMotion && this.transitionEnd() }, this)) }, n.prototype.current = function(t) {
        if (t === s) return this._current;
        if (0 === this._items.length) return s;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", { property: { name: "position", value: t } });
            e.data !== s && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } })
        }
        return this._current
    }, n.prototype.invalidate = function(t) { this._invalidated[t] = !0 }, n.prototype.reset = function(t) {
        (t = this.normalize(t)) !== s && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, n.prototype.normalize = function(e, i) { var n = i ? this._items.length : this._items.length + this._clones.length; return !t.isNumeric(e) || 1 > n ? s : e = this._clones.length ? (e % n + n) % n : Math.max(this.minimum(i), Math.min(this.maximum(i), e)) }, n.prototype.relative = function(t) { return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0) }, n.prototype.maximum = function(t) {
        var e, i, s, n = 0,
            o = this.settings;
        if (t) return this._items.length - 1;
        if (!o.loop && o.center) e = this._items.length - 1;
        else if (o.loop || o.center)
            if (o.loop || o.center) e = this._items.length + o.items;
            else {
                if (!o.autoWidth && !o.merge) throw "Can not detect maximum absolute position.";
                for (revert = o.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width();
                    (s = this.coordinates(n)) && !(s * revert >= i);) e = ++n
            }
        else e = this._items.length - o.items;
        return e
    }, n.prototype.minimum = function(t) { return t ? 0 : this._clones.length / 2 }, n.prototype.items = function(t) { return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t]) }, n.prototype.mergers = function(t) { return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t]) }, n.prototype.clones = function(e) {
        var i = this._clones.length / 2,
            n = i + this._items.length,
            o = function(t) { return t % 2 == 0 ? n + t / 2 : i - (t + 1) / 2 };
        return e === s ? t.map(this._clones, function(t, e) { return o(e) }) : t.map(this._clones, function(t, i) { return t === e ? o(i) : null })
    }, n.prototype.speed = function(t) { return t !== s && (this._speed = t), this._speed }, n.prototype.coordinates = function(e) { var i = null; return e === s ? t.map(this._coordinates, t.proxy(function(t, e) { return this.coordinates(e) }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i) }, n.prototype.duration = function(t, e, i) { return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed) }, n.prototype.to = function(i, s) {
        if (this.settings.loop) {
            var n = i - this.relative(this.current()),
                o = this.current(),
                r = this.current(),
                a = this.current() + n,
                l = 0 > r - a,
                h = this._clones.length + this._items.length;
            a < this.settings.items && !1 === l ? (o = r + this._items.length, this.reset(o)) : a >= h - this.settings.items && !0 === l && (o = r - this._items.length, this.reset(o)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function() { this.speed(this.duration(this.current(), o + n, s)), this.current(o + n), this.update() }, this), 30)
        } else this.speed(this.duration(this.current(), i, s)), this.current(i), this.update()
    }, n.prototype.next = function(t) { t = t || !1, this.to(this.relative(this.current()) + 1, t) }, n.prototype.prev = function(t) { t = t || !1, this.to(this.relative(this.current()) - 1, t) }, n.prototype.transitionEnd = function(t) { return (t === s || (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) === this.$stage.get(0))) && (this.state.inMotion = !1, void this.trigger("translated")) }, n.prototype.viewport = function() {
        var s;
        if (this.options.responsiveBaseElement !== e) s = t(this.options.responsiveBaseElement).width();
        else if (e.innerWidth) s = e.innerWidth;
        else {
            if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
            s = i.documentElement.clientWidth
        }
        return s
    }, n.prototype.replace = function(e) { this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() { return 1 === this.nodeType }).each(t.proxy(function(t, e) { e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, n.prototype.add = function(t, e) { e = e === s ? this._items.length : this.normalize(e, !0), this.trigger("add", { content: t, position: e }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", { content: t, position: e }) }, n.prototype.remove = function(t) {
        (t = this.normalize(t, !0)) !== s && (this.trigger("remove", { content: this._items[t], position: t }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: t }))
    }, n.prototype.addTriggerableEvents = function() {
        var e = t.proxy(function(e, i) { return t.proxy(function(t) { t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i])) }, this) }, this);
        t.each({ next: this.next, prev: this.prev, to: this.to, destroy: this.destroy, refresh: this.refresh, replace: this.replace, add: this.add, remove: this.remove }, t.proxy(function(t, i) { this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel")) }, this))
    }, n.prototype.watchVisibility = function() {
        function i(t) { return t.offsetWidth > 0 && t.offsetHeight > 0 }
        i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(function() { i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile)) }, this), 500))
    }, n.prototype.preloadAutoWidthImages = function(e) {
        var i, s, n, o;
        i = 0, s = this, e.each(function(r, a) { n = t(a), (o = new Image).onload = function() { i++, n.attr("src", o.src), n.css("opacity", 1), i >= e.length && (s.state.imagesLoaded = !0, s.initialize()) }, o.src = n.attr("src") || n.attr("data-src") || n.attr("data-src-retina") })
    }, n.prototype.destroy = function() {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), !1 !== this.settings.responsive && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var s in this._plugins) this._plugins[s].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() { return !1 })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, n.prototype.op = function(t, e, i) {
        var s = this.settings.rtl;
        switch (e) {
            case "<":
                return s ? t > i : i > t;
            case ">":
                return s ? i > t : t > i;
            case ">=":
                return s ? i >= t : t >= i;
            case "<=":
                return s ? t >= i : i >= t
        }
    }, n.prototype.on = function(t, e, i, s) { t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i) }, n.prototype.off = function(t, e, i, s) { t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i) }, n.prototype.trigger = function(e, i, s) {
        var n = { item: { count: this._items.length, index: this.current() } },
            o = t.camelCase(t.grep(["on", e, s], function(t) { return t }).join("-").toLowerCase()),
            r = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({ relatedTarget: this }, n, i));
        return this._supress[e] || (t.each(this._plugins, function(t, e) { e.onTrigger && e.onTrigger(r) }), this.$element.trigger(r), this.settings && "function" == typeof this.settings[o] && this.settings[o].apply(this, r)), r
    }, n.prototype.suppress = function(e) { t.each(e, t.proxy(function(t, e) { this._supress[e] = !0 }, this)) }, n.prototype.release = function(e) { t.each(e, t.proxy(function(t, e) { delete this._supress[e] }, this)) }, n.prototype.browserSupport = function() {
        if (this.support3d = r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0], this.support3d) {
            this.transformVendor = r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0];
            this.transitionEndVendor = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"][r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = e.orientation
    }, t.fn.owlCarousel = function(e) { return this.each(function() { t(this).data("owlCarousel") || t(this).data("owlCarousel", new n(this, e)) }) }, t.fn.owlCarousel.Constructor = n
}(window.Zepto || window.jQuery, window, document),
function(t, e) {
    var i = function(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": t.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                    for (var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items, n = i.center && -1 * s || 0, o = (e.property && e.property.value || this._core.current()) + n, r = this._core.clones().length, a = t.proxy(function(t, e) { this.load(e) }, this); n++ < s;) this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o++)), a)
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = { lazyLoad: !1 }, i.prototype.load = function(i) {
        var s = this._core.$stage.children().eq(i),
            n = s && s.find(".owl-lazy");
        !n || t.inArray(s.get(0), this._loaded) > -1 || (n.each(t.proxy(function(i, s) {
            var n, o = t(s),
                r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
            this._core.trigger("load", { element: o, url: r }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() { o.css("opacity", 1), this._core.trigger("loaded", { element: o, url: r }, "lazy") }, this)).attr("src", r) : (n = new Image, n.onload = t.proxy(function() { o.css({ "background-image": "url(" + r + ")", opacity: "1" }), this._core.trigger("loaded", { element: o, url: r }, "lazy") }, this), n.src = r)
        }, this)), this._loaded.push(s.get(0)))
    }, i.prototype.destroy = function() { var t, e; for (t in this.handlers) this._core.$element.off(t, this.handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Lazy = i
}(window.Zepto || window.jQuery, window, document),
function(t) {
    var e = function(i) { this._core = i, this._handlers = { "initialized.owl.carousel": t.proxy(function() { this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": t.proxy(function(t) { this._core.settings.autoHeight && "position" == t.property.name && this.update() }, this), "loaded.owl.lazy": t.proxy(function(t) { this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update() }, this) }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, e.prototype.update = function() { this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass) }, e.prototype.destroy = function() { var t, e; for (t in this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(t, e, i) {
    var s = function(e) {
        this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": t.proxy(function(t) { this._core.settings.video && !this.isInFullScreen() && t.preventDefault() }, this),
            "refresh.owl.carousel changed.owl.carousel": t.proxy(function() { this._playing && this.stop() }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                var i = t(e.content).find(".owl-video");
                i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
            }, this)
        }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) { this.play(t) }, this))
    };
    s.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, s.prototype.fetch = function(t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
            s = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
            n = t.attr("data-width") || this._core.settings.videoWidth,
            o = t.attr("data-height") || this._core.settings.videoHeight,
            r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if ((s = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";
        else {
            if (!(s[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            i = "vimeo"
        }
        s = s[6], this._videos[r] = { type: i, id: s, width: n, height: o }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, s.prototype.thumbnail = function(e, i) {
        var s, n, o, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
            a = e.find("img"),
            l = "src",
            h = "",
            c = this._core.settings,
            u = function(t) { n = '<div class="owl-video-play-icon"></div>', s = c.lazyLoad ? '<div class="owl-video-tn ' + h + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(s), e.after(n) };
        return e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (l = "data-src", h = "owl-lazy"), a.length ? (u(a.attr(l)), a.remove(), !1) : void("youtube" === i.type ? (o = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(o)) : "vimeo" === i.type && t.ajax({ type: "GET", url: "http://vimeo.com/api/v2/video/" + i.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(t) { o = t[0].thumbnail_large, u(o) } }))
    }, s.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null }, s.prototype.play = function(e) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var i, s, n = t(e.target || e.srcElement),
            o = n.closest("." + this._core.settings.itemClass),
            r = this._videos[o.attr("data-video")],
            a = r.width || "100%",
            l = r.height || this._core.$stage.height();
        "youtube" === r.type ? i = '<iframe width="' + a + '" height="' + l + '" src="http://www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type && (i = '<iframe src="http://player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + a + '" height="' + l + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), o.addClass("owl-video-playing"), this._playing = o, s = t('<div style="height:' + l + "px; width:" + a + 'px" class="owl-video-frame">' + i + "</div>"), n.after(s)
    }, s.prototype.isInFullScreen = function() { var s = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement; return s && t(s).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), !(s && this._fullscreen && this._playing) && (this._fullscreen ? (this._fullscreen = !1, !1) : !this._playing || this._core.state.orientation === e.orientation || (this._core.state.orientation = e.orientation, !1)) }, s.prototype.destroy = function() {
        var t, e;
        this._core.$element.off("click.owl.video");
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = s
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) { this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = { "change.owl.carousel": t.proxy(function(t) { "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) { this.swapping = "translated" == t.type }, this), "translate.owl.carousel": t.proxy(function() { this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) };
    n.Defaults = { animateOut: !1, animateIn: !1 }, n.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this),
                s = this.core.$stage.children().eq(this.previous),
                n = this.core.$stage.children().eq(this.next),
                o = this.core.settings.animateIn,
                r = this.core.settings.animateOut;
            this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.css({ left: e + "px" }).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), o && n.addClass("animated owl-animated-in").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i))
        }
    }, n.prototype.clear = function(e) { t(e.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd() }, n.prototype.destroy = function() { var t, e; for (t in this.handlers) this.core.$element.off(t, this.handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Animate = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i) {
    var s = function(e) { this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.handlers = { "translated.owl.carousel refreshed.owl.carousel": t.proxy(function() { this.autoplay() }, this), "play.owl.autoplay": t.proxy(function(t, e, i) { this.play(e, i) }, this), "stop.owl.autoplay": t.proxy(function() { this.stop() }, this), "mouseover.owl.autoplay": t.proxy(function() { this.core.settings.autoplayHoverPause && this.pause() }, this), "mouseleave.owl.autoplay": t.proxy(function() { this.core.settings.autoplayHoverPause && this.autoplay() }, this) }, this.core.$element.on(this.handlers) };
    s.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, s.prototype.autoplay = function() { this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function() { this.play() }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval) }, s.prototype.play = function() { return !0 === i.hidden || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : !1 === this.core.settings.autoplay ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed) }, s.prototype.stop = function() { e.clearInterval(this.interval) }, s.prototype.pause = function() { e.clearInterval(this.interval) }, s.prototype.destroy = function() {
        var t, i;
        e.clearInterval(this.interval);
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = s
}(window.Zepto || window.jQuery, window, document),
function(t) {
    "use strict";
    var e = function(i) {
        this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function(e) { this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot")) }, this),
            "add.owl.carousel": t.proxy(function(e) { this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot")) }, this),
            "remove.owl.carousel prepared.owl.carousel": t.proxy(function(t) { this._core.settings.dotsData && this._templates.splice(t.position, 1) }, this),
            "change.owl.carousel": t.proxy(function(t) {
                if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var e = this._core.current(),
                        i = this._core.maximum(),
                        s = this._core.minimum();
                    t.data = t.property.value > i ? e >= i ? s : i : t.property.value < s ? i : t.property.value
                }
            }, this),
            "changed.owl.carousel": t.proxy(function(t) { "position" == t.property.name && this.draw() }, this),
            "refreshed.owl.carousel": t.proxy(function() { this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation") }, this)
        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = { nav: !1, navRewind: !0, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotData: !1, dotsSpeed: !1, dotsContainer: !1, controlsClass: "owl-controls" }, e.prototype.initialize = function() {
        var e, i, s = this._core.settings;
        s.dotsData || (this._templates = [t("<div>").addClass(s.dotClass).append(t("<span>")).prop("outerHTML")]), s.navContainer && s.dotsContainer || (this._controls.$container = t("<div>").addClass(s.controlsClass).appendTo(this.$element)), this._controls.$indicators = s.dotsContainer ? t(s.dotsContainer) : t("<div>").hide().addClass(s.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function(e) {
            var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(), this.to(i, s.dotsSpeed)
        }, this)), e = s.navContainer ? t(s.navContainer) : t("<div>").addClass(s.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + s.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(s.navClass[0]).html(s.navText[0]).hide().prependTo(e).on("click", t.proxy(function() { this.prev(s.navSpeed) }, this)), this._controls.$next.addClass(s.navClass[1]).html(s.navText[1]).hide().appendTo(e).on("click", t.proxy(function() { this.next(s.navSpeed) }, this));
        for (i in this._overrides) this._core[i] = t.proxy(this[i], this)
    }, e.prototype.destroy = function() { var t, e, i, s; for (t in this._handlers) this.$element.off(t, this._handlers[t]); for (e in this._controls) this._controls[e].remove(); for (s in this.overides) this._core[s] = this._overrides[s]; for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null) }, e.prototype.update = function() {
        var t, e, i = this._core.settings,
            s = this._core.clones().length / 2,
            n = s + this._core.items().length,
            o = i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items;
        if ("page" !== i.slideBy && (i.slideBy = Math.min(i.slideBy, i.items)), i.dots || "page" == i.slideBy)
            for (this._pages = [], t = s, e = 0, 0; n > t; t++)(e >= o || 0 === e) && (this._pages.push({ start: t - s, end: t - s + o - 1 }), e = 0, 0), e += this._core.mergers(this._core.relative(t))
    }, e.prototype.draw = function() {
        var e, i, s = "",
            n = this._core.settings,
            o = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!n.nav || n.loop || n.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= o), this._controls.$next.toggleClass("disabled", o >= this._core.maximum())), this._controls.$previous.toggle(n.nav), this._controls.$next.toggle(n.nav), n.dots) {
            if (e = this._pages.length - this._controls.$indicators.children().length, n.dotData && 0 !== e) {
                for (i = 0; i < this._controls.$indicators.children().length; i++) s += this._templates[this._core.relative(i)];
                this._controls.$indicators.html(s)
            } else e > 0 ? (s = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(s)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(n.dots)
    }, e.prototype.onTrigger = function(e) {
        var i = this._core.settings;
        e.page = { index: t.inArray(this.current(), this._pages), count: this._pages.length, size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items) }
    }, e.prototype.current = function() { var e = this._core.relative(this._core.current()); return t.grep(this._pages, function(t) { return t.start <= e && t.end >= e }).pop() }, e.prototype.getPosition = function(e) { var i, s, n = this._core.settings; return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += n.slideBy : i -= n.slideBy), i }, e.prototype.next = function(e) { t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e) }, e.prototype.prev = function(e) { t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e) }, e.prototype.to = function(e, i, s) {
        var n;
        s ? t.proxy(this._overrides.to, this._core)(e, i) : (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i))
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(t, e) {
    "use strict";
    var i = function(s) {
        this._core = s, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function() { "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation") }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[i] = e.content
            }, this)
        }, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function() {
            var t = e.location.hash.substring(1),
                i = this._core.$stage.children(),
                s = this._hashes[t] && i.index(this._hashes[t]) || 0;
            return !!t && void this._core.to(s, !1, !0)
        }, this))
    };
    i.Defaults = { URLhashListener: !1 }, i.prototype.destroy = function() {
        var i, s;
        t(e).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (s in Object.getOwnPropertyNames(this)) "function" != typeof this[s] && (this[s] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = i
}(window.Zepto || window.jQuery, window, document),
function(t, e) { "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.NProgress = e() }(this, function() {
    function t(t, e, i) { return t < e ? e : t > i ? i : t }

    function e(t) { return 100 * (-1 + t) }

    function i(t, e) { return ("string" == typeof t ? t : o(t)).indexOf(" " + e + " ") >= 0 }

    function s(t, e) {
        var s = o(t),
            n = s + e;
        i(s, e) || (t.className = n.substring(1))
    }

    function n(t, e) {
        var s, n = o(t);
        i(t, e) && (s = n.replace(" " + e + " ", " "), t.className = s.substring(1, s.length - 1))
    }

    function o(t) { return (" " + (t && t.className || "") + " ").replace(/\s+/gi, " ") }

    function r(t) { t && t.parentNode && t.parentNode.removeChild(t) }
    var a = {};
    a.version = "0.2.0";
    var l = a.settings = { minimum: .08, easing: "linear", positionUsing: "", speed: 350, trickle: !0, trickleSpeed: 250, showSpinner: !0, barSelector: '[role="bar"]', spinnerSelector: '[role="spinner"]', parent: "body", template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>' };
    a.configure = function(t) { var e, i; for (e in t) void 0 !== (i = t[e]) && t.hasOwnProperty(e) && (l[e] = i); return this }, a.status = null, a.set = function(i) {
            var s = a.isStarted();
            i = t(i, l.minimum, 1), a.status = 1 === i ? null : i;
            var n = a.render(!s),
                o = n.querySelector(l.barSelector),
                r = l.speed,
                u = l.easing;
            return n.offsetWidth, h(function(t) { "" === l.positionUsing && (l.positionUsing = a.getPositioningCSS()), c(o, function(t, i, s) { var n; return n = "translate3d" === l.positionUsing ? { transform: "translate3d(" + e(t) + "%,0,0)" } : "translate" === l.positionUsing ? { transform: "translate(" + e(t) + "%,0)" } : { "margin-left": e(t) + "%" }, n.transition = "all " + i + "ms " + s, n }(i, r, u)), 1 === i ? (c(n, { transition: "none", opacity: 1 }), n.offsetWidth, setTimeout(function() { c(n, { transition: "all " + r + "ms linear", opacity: 0 }), setTimeout(function() { a.remove(), t() }, r) }, r)) : setTimeout(t, r) }), this
        }, a.isStarted = function() { return "number" == typeof a.status }, a.start = function() { a.status || a.set(0); var t = function() { setTimeout(function() { a.status && (a.trickle(), t()) }, l.trickleSpeed) }; return l.trickle && t(), this }, a.done = function(t) { return t || a.status ? a.inc(.3 + .5 * Math.random()).set(1) : this }, a.inc = function(e) { var i = a.status; return i ? i > 1 ? void 0 : ("number" != typeof e && (e = i >= 0 && i < .25 ? (3 * Math.random() + 3) / 100 : i >= .25 && i < .65 ? 3 * Math.random() / 100 : i >= .65 && i < .9 ? 2 * Math.random() / 100 : i >= .9 && i < .99 ? .005 : 0), i = t(i + e, 0, .994), a.set(i)) : a.start() }, a.trickle = function() { return a.inc() },
        function() {
            var t = 0,
                e = 0;
            a.promise = function(i) { return i && "resolved" !== i.state() ? (0 === e && a.start(), t++, e++, i.always(function() { 0 === --e ? (t = 0, a.done()) : a.set((t - e) / t) }), this) : this }
        }(), a.render = function(t) {
            if (a.isRendered()) return document.getElementById("nprogress");
            s(document.documentElement, "nprogress-busy");
            var i = document.createElement("div");
            i.id = "nprogress", i.innerHTML = l.template;
            var n, o = i.querySelector(l.barSelector),
                h = t ? "-100" : e(a.status || 0),
                u = document.querySelector(l.parent);
            return c(o, { transition: "all 0 linear", transform: "translate3d(" + h + "%,0,0)" }), l.showSpinner || (n = i.querySelector(l.spinnerSelector)) && r(n), u != document.body && s(u, "nprogress-custom-parent"), u.appendChild(i), i
        }, a.remove = function() {
            n(document.documentElement, "nprogress-busy"), n(document.querySelector(l.parent), "nprogress-custom-parent");
            var t = document.getElementById("nprogress");
            t && r(t)
        }, a.isRendered = function() { return !!document.getElementById("nprogress") }, a.getPositioningCSS = function() {
            var t = document.body.style,
                e = "WebkitTransform" in t ? "Webkit" : "MozTransform" in t ? "Moz" : "msTransform" in t ? "ms" : "OTransform" in t ? "O" : "";
            return e + "Perspective" in t ? "translate3d" : e + "Transform" in t ? "translate" : "margin"
        };
    var h = function() {
            function t() {
                var i = e.shift();
                i && i(t)
            }
            var e = [];
            return function(i) { e.push(i), 1 == e.length && t() }
        }(),
        c = function() {
            function t(t) {
                return t = function(t) { return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(t, e) { return e.toUpperCase() }) }(t), s[t] || (s[t] = function(t) {
                    var e = document.body.style;
                    if (t in e) return t;
                    for (var s, n = i.length, o = t.charAt(0).toUpperCase() + t.slice(1); n--;)
                        if ((s = i[n] + o) in e) return s;
                    return t
                }(t))
            }

            function e(e, i, s) { i = t(i), e.style[i] = s }
            var i = ["Webkit", "O", "Moz", "ms"],
                s = {};
            return function(t, i) {
                var s, n, o = arguments;
                if (2 == o.length)
                    for (s in i) void 0 !== (n = i[s]) && i.hasOwnProperty(s) && e(t, s, n);
                else e(t, o[1], o[2])
            }
        }();
    return a
}),
function() {
    var t, e;
    t = window.jQuery, e = t(window), t.fn.stick_in_parent = function(i) { var s, n, o, r, a, l, h, c, u, d, p, f; for (null == i && (i = {}), f = i.sticky_class, a = i.inner_scrolling, p = i.recalc_every, d = i.parent, c = i.offset_top, h = i.spacer, n = i.bottoming, null == c && (c = 0), null == d && (d = void 0), null == a && (a = !0), null == f && (f = "is_stuck"), s = t(document), null == n && (n = !0), u = function(t) { var e; return window.getComputedStyle ? (t = window.getComputedStyle(t[0]), e = parseFloat(t.getPropertyValue("width")) + parseFloat(t.getPropertyValue("margin-left")) + parseFloat(t.getPropertyValue("margin-right")), "border-box" !== t.getPropertyValue("box-sizing") && (e += parseFloat(t.getPropertyValue("border-left-width")) + parseFloat(t.getPropertyValue("border-right-width")) + parseFloat(t.getPropertyValue("padding-left")) + parseFloat(t.getPropertyValue("padding-right"))), e) : t.outerWidth(!0) }, o = function(i, o, r, l, m, g, v, _) { var b, y, w, x, C, k, T, S, D, I, E, P; if (!i.data("sticky_kit")) { if (i.data("sticky_kit", !0), C = s.height(), T = i.parent(), null != d && (T = T.closest(d)), !T.length) throw "failed to find stick parent"; if (b = w = !1, (E = null != h ? h && i.closest(h) : t("<div />")) && E.css("position", i.css("position")), (S = function() { var t, e, n; if (!_ && (C = s.height(), t = parseInt(T.css("border-top-width"), 10), e = parseInt(T.css("padding-top"), 10), o = parseInt(T.css("padding-bottom"), 10), r = T.offset().top + t + e, l = T.height(), w && (b = w = !1, null == h && (i.insertAfter(E), E.detach()), i.css({ position: "", top: "", width: "", bottom: "" }).removeClass(f), n = !0), m = i.offset().top - (parseInt(i.css("margin-top"), 10) || 0) - c, g = i.outerHeight(!0), v = i.css("float"), E && E.css({ width: u(i), height: g, display: i.css("display"), "vertical-align": i.css("vertical-align"), float: v }), n)) return P() })(), g !== l) return x = void 0, k = c, I = p, P = function() { var t, u, d, y; if (!_ && (d = !1, null != I && 0 >= --I && (I = p, S(), d = !0), d || s.height() === C || S(), d = e.scrollTop(), null != x && (u = d - x), x = d, w ? (n && (y = d + g + k > l + r, b && !y && (b = !1, i.css({ position: "fixed", bottom: "", top: k }).trigger("sticky_kit:unbottom"))), d < m && (w = !1, k = c, null == h && ("left" !== v && "right" !== v || i.insertAfter(E), E.detach()), t = { position: "", width: "", top: "" }, i.css(t).removeClass(f).trigger("sticky_kit:unstick")), a && (t = e.height(), g + c > t && !b && (k -= u, k = Math.max(t - g, k), k = Math.min(c, k), w && i.css({ top: k + "px" })))) : d > m && (w = !0, t = { position: "fixed", top: k }, t.width = "border-box" === i.css("box-sizing") ? i.outerWidth() + "px" : i.width() + "px", i.css(t).addClass(f), null == h && (i.after(E), "left" !== v && "right" !== v || E.append(i)), i.trigger("sticky_kit:stick")), w && n && (null == y && (y = d + g + k > l + r), !b && y))) return b = !0, "static" === T.css("position") && T.css({ position: "relative" }), i.css({ position: "absolute", bottom: o, top: "auto" }).trigger("sticky_kit:bottom") }, D = function() { return S(), P() }, y = function() { if (_ = !0, e.off("touchmove", P), e.off("scroll", P), e.off("resize", D), t(document.body).off("sticky_kit:recalc", D), i.off("sticky_kit:detach", y), i.removeData("sticky_kit"), i.css({ position: "", bottom: "", top: "", width: "" }), T.position("position", ""), w) return null == h && ("left" !== v && "right" !== v || i.insertAfter(E), E.remove()), i.removeClass(f) }, e.on("touchmove", P), e.on("scroll", P), e.on("resize", D), t(document.body).on("sticky_kit:recalc", D), i.on("sticky_kit:detach", y), setTimeout(P, 0) } }, r = 0, l = this.length; r < l; r++) i = this[r], o(t(i)); return this }
}.call(this),
    function(t) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery) }(function(t) {
        "use strict";
        var e = window.Slick || {};
        (e = function() {
            var e = 0;
            return function(i, s) {
                var n;
                this.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: t(i), appendDots: t(i), arrows: !0, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function(e, i) { return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1) }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, this.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, t.extend(this, this.initials), this.activeBreakpoint = null, this.animType = null, this.animProp = null, this.breakpoints = [], this.breakpointSettings = [], this.cssTransitions = !1, this.focussed = !1, this.interrupted = !1, this.hidden = "hidden", this.paused = !0, this.positionProp = null, this.respondTo = null, this.rowCount = 1, this.shouldClick = !0, this.$slider = t(i), this.$slidesCache = null, this.transformType = null, this.transitionType = null, this.visibilityChange = "visibilitychange", this.windowWidth = 0, this.windowTimer = null, n = t(i).data("slick") || {}, this.options = t.extend({}, this.defaults, s, n), this.currentSlide = this.options.initialSlide, this.originalSettings = this.options, void 0 !== document.mozHidden ? (this.hidden = "mozHidden", this.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (this.hidden = "webkitHidden", this.visibilityChange = "webkitvisibilitychange"), this.autoPlay = t.proxy(this.autoPlay, this), this.autoPlayClear = t.proxy(this.autoPlayClear, this), this.autoPlayIterator = t.proxy(this.autoPlayIterator, this), this.changeSlide = t.proxy(this.changeSlide, this), this.clickHandler = t.proxy(this.clickHandler, this), this.selectHandler = t.proxy(this.selectHandler, this), this.setPosition = t.proxy(this.setPosition, this), this.swipeHandler = t.proxy(this.swipeHandler, this), this.dragHandler = t.proxy(this.dragHandler, this), this.keyHandler = t.proxy(this.keyHandler, this), this.instanceUid = e++, this.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, this.registerBreakpoints(), this.init(!0)
            }
        }()).prototype.activateADA = function() { this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" }) }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, s) {
            if ("boolean" == typeof i) s = i, i = null;
            else if (0 > i || i >= this.slideCount) return !1;
            this.unload(), "number" == typeof i ? 0 === i && 0 === this.$slides.length ? t(e).appendTo(this.$slideTrack) : s ? t(e).insertBefore(this.$slides.eq(i)) : t(e).insertAfter(this.$slides.eq(i)) : !0 === s ? t(e).prependTo(this.$slideTrack) : t(e).appendTo(this.$slideTrack), this.$slides = this.$slideTrack.children(this.options.slide), this.$slideTrack.children(this.options.slide).detach(), this.$slideTrack.append(this.$slides), this.$slides.each(function(e, i) { t(i).attr("data-slick-index", e) }), this.$slidesCache = this.$slides, this.reinit()
        }, e.prototype.animateHeight = function() {
            if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
                var t = this.$slides.eq(this.currentSlide).outerHeight(!0);
                this.$list.animate({ height: t }, this.options.speed)
            }
        }, e.prototype.animateSlide = function(e, i) {
            var s = {},
                n = this;
            n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (e = -e), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({ left: e }, n.options.speed, n.options.easing, i) : n.$slideTrack.animate({ top: e }, n.options.speed, n.options.easing, i) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), t({ animStart: n.currentLeft }).animate({ animStart: e }, { duration: n.options.speed, easing: n.options.easing, step: function(t) { t = Math.ceil(t), !1 === n.options.vertical ? (s[n.animType] = "translate(" + t + "px, 0px)", n.$slideTrack.css(s)) : (s[n.animType] = "translate(0px," + t + "px)", n.$slideTrack.css(s)) }, complete: function() { i && i.call() } })) : (n.applyTransition(), e = Math.ceil(e), !1 === n.options.vertical ? s[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : s[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(s), i && setTimeout(function() { n.disableTransition(), i.call() }, n.options.speed))
        }, e.prototype.getNavTarget = function() { var e = this.options.asNavFor; return e && null !== e && (e = t(e).not(this.$slider)), e }, e.prototype.asNavFor = function(e) {
            var i = this.getNavTarget();
            null !== i && "object" == typeof i && i.each(function() {
                var i = t(this).slick("getSlick");
                i.unslicked || i.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function(t) { var e = {};!1 === this.options.fade ? e[this.transitionType] = this.transformType + " " + this.options.speed + "ms " + this.options.cssEase : e[this.transitionType] = "opacity " + this.options.speed + "ms " + this.options.cssEase, !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e) }, e.prototype.autoPlay = function() { this.autoPlayClear(), this.slideCount > this.options.slidesToShow && (this.autoPlayTimer = setInterval(this.autoPlayIterator, this.options.autoplaySpeed)) }, e.prototype.autoPlayClear = function() { this.autoPlayTimer && clearInterval(this.autoPlayTimer) }, e.prototype.autoPlayIterator = function() {
            var t = this.currentSlide + this.options.slidesToScroll;
            this.paused || this.interrupted || this.focussed || (!1 === this.options.infinite && (1 === this.direction && this.currentSlide + 1 === this.slideCount - 1 ? this.direction = 0 : 0 === this.direction && (t = this.currentSlide - this.options.slidesToScroll, this.currentSlide - 1 == 0 && (this.direction = 1))), this.slideHandler(t))
        }, e.prototype.buildArrows = function() {!0 === this.options.arrows && (this.$prevArrow = t(this.options.prevArrow).addClass("slick-arrow"), this.$nextArrow = t(this.options.nextArrow).addClass("slick-arrow"), this.slideCount > this.options.slidesToShow ? (this.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), this.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), this.htmlExpr.test(this.options.prevArrow) && this.$prevArrow.prependTo(this.options.appendArrows), this.htmlExpr.test(this.options.nextArrow) && this.$nextArrow.appendTo(this.options.appendArrows), !0 !== this.options.infinite && this.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : this.$prevArrow.add(this.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" })) }, e.prototype.buildDots = function() {
            var e, i;
            if (!0 === this.options.dots && this.slideCount > this.options.slidesToShow) {
                for (this.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(this.options.dotsClass), e = 0; e <= this.getDotCount(); e += 1) i.append(t("<li />").append(this.options.customPaging.call(this, this, e)));
                this.$dots = i.appendTo(this.options.appendDots), this.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, e.prototype.buildOut = function() { this.$slides = this.$slider.children(this.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), this.slideCount = this.$slides.length, this.$slides.each(function(e, i) { t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "") }), this.$slider.addClass("slick-slider"), this.$slideTrack = 0 === this.slideCount ? t('<div class="slick-track"/>').appendTo(this.$slider) : this.$slides.wrapAll('<div class="slick-track"/>').parent(), this.$list = this.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), this.$slideTrack.css("opacity", 0), (!0 === this.options.centerMode || !0 === this.options.swipeToSlide) && (this.options.slidesToScroll = 1), t("img[data-lazy]", this.$slider).not("[src]").addClass("slick-loading"), this.setupInfinite(), this.buildArrows(), this.buildDots(), this.updateDots(), this.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), !0 === this.options.draggable && this.$list.addClass("draggable") }, e.prototype.buildRows = function() {
            var t, e, i, s, n, o, r;
            if (s = document.createDocumentFragment(), o = this.$slider.children(), this.options.rows > 1) {
                for (r = this.options.slidesPerRow * this.options.rows, n = Math.ceil(o.length / r), t = 0; n > t; t++) {
                    var a = document.createElement("div");
                    for (e = 0; e < this.options.rows; e++) {
                        var l = document.createElement("div");
                        for (i = 0; i < this.options.slidesPerRow; i++) {
                            var h = t * r + (e * this.options.slidesPerRow + i);
                            o.get(h) && l.appendChild(o.get(h))
                        }
                        a.appendChild(l)
                    }
                    s.appendChild(a)
                }
                this.$slider.empty().append(s), this.$slider.children().children().children().css({ width: 100 / this.options.slidesPerRow + "%", display: "inline-block" })
            }
        }, e.prototype.checkResponsive = function(e, i) {
            var s, n, o, r = !1,
                a = this.$slider.width(),
                l = window.innerWidth || t(window).width();
            if ("window" === this.respondTo ? o = l : "slider" === this.respondTo ? o = a : "min" === this.respondTo && (o = Math.min(l, a)), this.options.responsive && this.options.responsive.length && null !== this.options.responsive) {
                n = null;
                for (s in this.breakpoints) this.breakpoints.hasOwnProperty(s) && (!1 === this.originalSettings.mobileFirst ? o < this.breakpoints[s] && (n = this.breakpoints[s]) : o > this.breakpoints[s] && (n = this.breakpoints[s]));
                null !== n ? null !== this.activeBreakpoint ? (n !== this.activeBreakpoint || i) && (this.activeBreakpoint = n, "unslick" === this.breakpointSettings[n] ? this.unslick(n) : (this.options = t.extend({}, this.originalSettings, this.breakpointSettings[n]), !0 === e && (this.currentSlide = this.options.initialSlide), this.refresh(e)), r = n) : (this.activeBreakpoint = n, "unslick" === this.breakpointSettings[n] ? this.unslick(n) : (this.options = t.extend({}, this.originalSettings, this.breakpointSettings[n]), !0 === e && (this.currentSlide = this.options.initialSlide), this.refresh(e)), r = n) : null !== this.activeBreakpoint && (this.activeBreakpoint = null, this.options = this.originalSettings, !0 === e && (this.currentSlide = this.options.initialSlide), this.refresh(e), r = n), e || !1 === r || this.$slider.trigger("breakpoint", [this, r])
            }
        }, e.prototype.changeSlide = function(e, i) {
            var s, n, o, r = t(e.currentTarget);
            switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), o = this.slideCount % this.options.slidesToScroll != 0, s = o ? 0 : (this.slideCount - this.currentSlide) % this.options.slidesToScroll, e.data.message) {
                case "previous":
                    n = 0 === s ? this.options.slidesToScroll : this.options.slidesToShow - s, this.slideCount > this.options.slidesToShow && this.slideHandler(this.currentSlide - n, !1, i);
                    break;
                case "next":
                    n = 0 === s ? this.options.slidesToScroll : s, this.slideCount > this.options.slidesToShow && this.slideHandler(this.currentSlide + n, !1, i);
                    break;
                case "index":
                    var a = 0 === e.data.index ? 0 : e.data.index || r.index() * this.options.slidesToScroll;
                    this.slideHandler(this.checkNavigable(a), !1, i), r.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function(t) {
            var e, i;
            if (e = this.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
            else
                for (var s in e) {
                    if (t < e[s]) { t = i; break }
                    i = e[s]
                }
            return t
        }, e.prototype.cleanUpEvents = function() { this.options.dots && null !== this.$dots && t("li", this.$dots).off("click.slick", this.changeSlide).off("mouseenter.slick", t.proxy(this.interrupt, this, !0)).off("mouseleave.slick", t.proxy(this.interrupt, this, !1)), this.$slider.off("focus.slick blur.slick"), !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow && this.$prevArrow.off("click.slick", this.changeSlide), this.$nextArrow && this.$nextArrow.off("click.slick", this.changeSlide)), this.$list.off("touchstart.slick mousedown.slick", this.swipeHandler), this.$list.off("touchmove.slick mousemove.slick", this.swipeHandler), this.$list.off("touchend.slick mouseup.slick", this.swipeHandler), this.$list.off("touchcancel.slick mouseleave.slick", this.swipeHandler), this.$list.off("click.slick", this.clickHandler), t(document).off(this.visibilityChange, this.visibility), this.cleanUpSlideEvents(), !0 === this.options.accessibility && this.$list.off("keydown.slick", this.keyHandler), !0 === this.options.focusOnSelect && t(this.$slideTrack).children().off("click.slick", this.selectHandler), t(window).off("orientationchange.slick.slick-" + this.instanceUid, this.orientationChange), t(window).off("resize.slick.slick-" + this.instanceUid, this.resize), t("[draggable!=true]", this.$slideTrack).off("dragstart", this.preventDefault), t(window).off("load.slick.slick-" + this.instanceUid, this.setPosition), t(document).off("ready.slick.slick-" + this.instanceUid, this.setPosition) }, e.prototype.cleanUpSlideEvents = function() { this.$list.off("mouseenter.slick", t.proxy(this.interrupt, this, !0)), this.$list.off("mouseleave.slick", t.proxy(this.interrupt, this, !1)) }, e.prototype.cleanUpRows = function() {
            var t;
            this.options.rows > 1 && ((t = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(t))
        }, e.prototype.clickHandler = function(t) {!1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault()) }, e.prototype.destroy = function(e) { this.autoPlayClear(), this.touchObject = {}, this.cleanUpEvents(), t(".slick-cloned", this.$slider).detach(), this.$dots && this.$dots.remove(), this.$prevArrow && this.$prevArrow.length && (this.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), this.htmlExpr.test(this.options.prevArrow) && this.$prevArrow.remove()), this.$nextArrow && this.$nextArrow.length && (this.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), this.htmlExpr.test(this.options.nextArrow) && this.$nextArrow.remove()), this.$slides && (this.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() { t(this).attr("style", t(this).data("originalStyling")) }), this.$slideTrack.children(this.options.slide).detach(), this.$slideTrack.detach(), this.$list.detach(), this.$slider.append(this.$slides)), this.cleanUpRows(), this.$slider.removeClass("slick-slider"), this.$slider.removeClass("slick-initialized"), this.$slider.removeClass("slick-dotted"), this.unslicked = !0, e || this.$slider.trigger("destroy", [this]) }, e.prototype.disableTransition = function(t) {
            var e = {};
            e[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e)
        }, e.prototype.fadeSlide = function(t, e) { var i = this;!1 === i.cssTransitions ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }), i.$slides.eq(t).animate({ opacity: 1 }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({ opacity: 1, zIndex: i.options.zIndex }), e && setTimeout(function() { i.disableTransition(t), e.call() }, i.options.speed)) }, e.prototype.fadeSlideOut = function(t) {!1 === this.cssTransitions ? this.$slides.eq(t).animate({ opacity: 0, zIndex: this.options.zIndex - 2 }, this.options.speed, this.options.easing) : (this.applyTransition(t), this.$slides.eq(t).css({ opacity: 0, zIndex: this.options.zIndex - 2 })) }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) { null !== t && (this.$slidesCache = this.$slides, this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.filter(t).appendTo(this.$slideTrack), this.reinit()) }, e.prototype.focusHandler = function() {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
                i.stopImmediatePropagation();
                var s = t(this);
                setTimeout(function() { e.options.pauseOnFocus && (e.focussed = s.is(":focus"), e.autoPlay()) }, 0)
            })
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() { return this.currentSlide }, e.prototype.getDotCount = function() {
            var t = 0,
                e = 0,
                i = 0;
            if (!0 === this.options.infinite)
                for (; t < this.slideCount;) ++i, t = e + this.options.slidesToScroll, e += this.options.slidesToScroll <= this.options.slidesToShow ? this.options.slidesToScroll : this.options.slidesToShow;
            else if (!0 === this.options.centerMode) i = this.slideCount;
            else if (this.options.asNavFor)
                for (; t < this.slideCount;) ++i, t = e + this.options.slidesToScroll, e += this.options.slidesToScroll <= this.options.slidesToShow ? this.options.slidesToScroll : this.options.slidesToShow;
            else i = 1 + Math.ceil((this.slideCount - this.options.slidesToShow) / this.options.slidesToScroll);
            return i - 1
        }, e.prototype.getLeft = function(t) { var e, i, s, n = 0; return this.slideOffset = 0, i = this.$slides.first().outerHeight(!0), !0 === this.options.infinite ? (this.slideCount > this.options.slidesToShow && (this.slideOffset = this.slideWidth * this.options.slidesToShow * -1, n = i * this.options.slidesToShow * -1), this.slideCount % this.options.slidesToScroll != 0 && t + this.options.slidesToScroll > this.slideCount && this.slideCount > this.options.slidesToShow && (t > this.slideCount ? (this.slideOffset = (this.options.slidesToShow - (t - this.slideCount)) * this.slideWidth * -1, n = (this.options.slidesToShow - (t - this.slideCount)) * i * -1) : (this.slideOffset = this.slideCount % this.options.slidesToScroll * this.slideWidth * -1, n = this.slideCount % this.options.slidesToScroll * i * -1))) : t + this.options.slidesToShow > this.slideCount && (this.slideOffset = (t + this.options.slidesToShow - this.slideCount) * this.slideWidth, n = (t + this.options.slidesToShow - this.slideCount) * i), this.slideCount <= this.options.slidesToShow && (this.slideOffset = 0, n = 0), !0 === this.options.centerMode && !0 === this.options.infinite ? this.slideOffset += this.slideWidth * Math.floor(this.options.slidesToShow / 2) - this.slideWidth : !0 === this.options.centerMode && (this.slideOffset = 0, this.slideOffset += this.slideWidth * Math.floor(this.options.slidesToShow / 2)), e = !1 === this.options.vertical ? t * this.slideWidth * -1 + this.slideOffset : t * i * -1 + n, !0 === this.options.variableWidth && (s = this.slideCount <= this.options.slidesToShow || !1 === this.options.infinite ? this.$slideTrack.children(".slick-slide").eq(t) : this.$slideTrack.children(".slick-slide").eq(t + this.options.slidesToShow), e = !0 === this.options.rtl ? s[0] ? -1 * (this.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, !0 === this.options.centerMode && (s = this.slideCount <= this.options.slidesToShow || !1 === this.options.infinite ? this.$slideTrack.children(".slick-slide").eq(t) : this.$slideTrack.children(".slick-slide").eq(t + this.options.slidesToShow + 1), e = !0 === this.options.rtl ? s[0] ? -1 * (this.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, e += (this.$list.width() - s.outerWidth()) / 2)), e }, e.prototype.getOption = e.prototype.slickGetOption = function(t) { return this.options[t] }, e.prototype.getNavigableIndexes = function() {
            var t, e = 0,
                i = 0,
                s = [];
            for (!1 === this.options.infinite ? t = this.slideCount : (e = -1 * this.options.slidesToScroll, i = -1 * this.options.slidesToScroll, t = 2 * this.slideCount); t > e;) s.push(e), e = i + this.options.slidesToScroll, i += this.options.slidesToScroll <= this.options.slidesToShow ? this.options.slidesToScroll : this.options.slidesToShow;
            return s
        }, e.prototype.getSlick = function() { return this }, e.prototype.getSlideCount = function() { var e, i, s = this; return i = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function(n, o) { return o.offsetLeft - i + t(o).outerWidth() / 2 > -1 * s.swipeLeft ? (e = o, !1) : void 0 }), Math.abs(t(e).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) { this.changeSlide({ data: { message: "index", index: parseInt(t) } }, e) }, e.prototype.init = function(e) { t(this.$slider).hasClass("slick-initialized") || (t(this.$slider).addClass("slick-initialized"), this.buildRows(), this.buildOut(), this.setProps(), this.startLoad(), this.loadSlider(), this.initializeEvents(), this.updateArrows(), this.updateDots(), this.checkResponsive(!0), this.focusHandler()), e && this.$slider.trigger("init", [this]), !0 === this.options.accessibility && this.initADA(), this.options.autoplay && (this.paused = !1, this.autoPlay()) }, e.prototype.initADA = function() {
            var e = this;
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) { t(this).attr({ role: "option", "aria-describedby": "slick-slide" + e.instanceUid + i }) }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) { t(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + e.instanceUid + i, id: "slick-slide" + e.instanceUid + i }) }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
        }, e.prototype.initArrowEvents = function() {!0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, this.changeSlide), this.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, this.changeSlide)) }, e.prototype.initDotEvents = function() {!0 === this.options.dots && this.slideCount > this.options.slidesToShow && t("li", this.$dots).on("click.slick", { message: "index" }, this.changeSlide), !0 === this.options.dots && !0 === this.options.pauseOnDotsHover && t("li", this.$dots).on("mouseenter.slick", t.proxy(this.interrupt, this, !0)).on("mouseleave.slick", t.proxy(this.interrupt, this, !1)) }, e.prototype.initSlideEvents = function() { this.options.pauseOnHover && (this.$list.on("mouseenter.slick", t.proxy(this.interrupt, this, !0)), this.$list.on("mouseleave.slick", t.proxy(this.interrupt, this, !1))) }, e.prototype.initializeEvents = function() { this.initArrowEvents(), this.initDotEvents(), this.initSlideEvents(), this.$list.on("touchstart.slick mousedown.slick", { action: "start" }, this.swipeHandler), this.$list.on("touchmove.slick mousemove.slick", { action: "move" }, this.swipeHandler), this.$list.on("touchend.slick mouseup.slick", { action: "end" }, this.swipeHandler), this.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, this.swipeHandler), this.$list.on("click.slick", this.clickHandler), t(document).on(this.visibilityChange, t.proxy(this.visibility, this)), !0 === this.options.accessibility && this.$list.on("keydown.slick", this.keyHandler), !0 === this.options.focusOnSelect && t(this.$slideTrack).children().on("click.slick", this.selectHandler), t(window).on("orientationchange.slick.slick-" + this.instanceUid, t.proxy(this.orientationChange, this)), t(window).on("resize.slick.slick-" + this.instanceUid, t.proxy(this.resize, this)), t("[draggable!=true]", this.$slideTrack).on("dragstart", this.preventDefault), t(window).on("load.slick.slick-" + this.instanceUid, this.setPosition), t(document).on("ready.slick.slick-" + this.instanceUid, this.setPosition) }, e.prototype.initUI = function() {!0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.show(), this.$nextArrow.show()), !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.show() }, e.prototype.keyHandler = function(t) { t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === this.options.accessibility ? this.changeSlide({ data: { message: !0 === this.options.rtl ? "next" : "previous" } }) : 39 === t.keyCode && !0 === this.options.accessibility && this.changeSlide({ data: { message: !0 === this.options.rtl ? "previous" : "next" } })) }, e.prototype.lazyLoad = function() {
            function e(e) {
                t("img[data-lazy]", e).each(function() {
                    var e = t(this),
                        i = t(this).attr("data-lazy"),
                        s = document.createElement("img");
                    s.onload = function() { e.animate({ opacity: 0 }, 100, function() { e.attr("src", i).animate({ opacity: 1 }, 200, function() { e.removeAttr("data-lazy").removeClass("slick-loading") }), o.$slider.trigger("lazyLoaded", [o, e, i]) }) }, s.onerror = function() { e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, e, i]) }, s.src = i
                })
            }
            var i, s, n, o = this;
            !0 === o.options.centerMode ? !0 === o.options.infinite ? (s = o.currentSlide + (o.options.slidesToShow / 2 + 1), n = s + o.options.slidesToShow + 2) : (s = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), n = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (s = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, n = Math.ceil(s + o.options.slidesToShow), !0 === o.options.fade && (s > 0 && s--, n <= o.slideCount && n++)), e(o.$slider.find(".slick-slide").slice(s, n)), o.slideCount <= o.options.slidesToShow ? (i = o.$slider.find(".slick-slide"), e(i)) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? (i = o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow), e(i)) : 0 === o.currentSlide && (i = o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow), e(i))
        }, e.prototype.loadSlider = function() { this.setPosition(), this.$slideTrack.css({ opacity: 1 }), this.$slider.removeClass("slick-loading"), this.initUI(), "progressive" === this.options.lazyLoad && this.progressiveLazyLoad() }, e.prototype.next = e.prototype.slickNext = function() { this.changeSlide({ data: { message: "next" } }) }, e.prototype.orientationChange = function() { this.checkResponsive(), this.setPosition() }, e.prototype.pause = e.prototype.slickPause = function() { this.autoPlayClear(), this.paused = !0 }, e.prototype.play = e.prototype.slickPlay = function() { this.autoPlay(), this.options.autoplay = !0, this.paused = !1, this.focussed = !1, this.interrupted = !1 }, e.prototype.postSlide = function(t) { this.unslicked || (this.$slider.trigger("afterChange", [this, t]), this.animating = !1, this.setPosition(), this.swipeLeft = null, this.options.autoplay && this.autoPlay(), !0 === this.options.accessibility && this.initADA()) }, e.prototype.prev = e.prototype.slickPrev = function() { this.changeSlide({ data: { message: "previous" } }) }, e.prototype.preventDefault = function(t) { t.preventDefault() }, e.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var i, s, n, o = this,
                r = t("img[data-lazy]", o.$slider);
            r.length ? (i = r.first(), s = i.attr("data-lazy"), n = document.createElement("img"), n.onload = function() { i.attr("src", s).removeAttr("data-lazy").removeClass("slick-loading"), !0 === o.options.adaptiveHeight && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, i, s]), o.progressiveLazyLoad() }, n.onerror = function() { 3 > e ? setTimeout(function() { o.progressiveLazyLoad(e + 1) }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, i, s]), o.progressiveLazyLoad()) }, n.src = s) : o.$slider.trigger("allImagesLoaded", [o])
        }, e.prototype.refresh = function(e) {
            var i, s;
            s = this.slideCount - this.options.slidesToShow, !this.options.infinite && this.currentSlide > s && (this.currentSlide = s), this.slideCount <= this.options.slidesToShow && (this.currentSlide = 0), i = this.currentSlide, this.destroy(!0), t.extend(this, this.initials, { currentSlide: i }), this.init(), e || this.changeSlide({ data: { message: "index", index: i } }, !1)
        }, e.prototype.registerBreakpoints = function() {
            var e, i, s, n = this,
                o = n.options.responsive || null;
            if ("array" === t.type(o) && o.length) {
                n.respondTo = n.options.respondTo || "window";
                for (e in o)
                    if (s = n.breakpoints.length - 1, i = o[e].breakpoint, o.hasOwnProperty(e)) {
                        for (; s >= 0;) n.breakpoints[s] && n.breakpoints[s] === i && n.breakpoints.splice(s, 1), s--;
                        n.breakpoints.push(i), n.breakpointSettings[i] = o[e].settings
                    }
                n.breakpoints.sort(function(t, e) { return n.options.mobileFirst ? t - e : e - t })
            }
        }, e.prototype.reinit = function() { this.$slides = this.$slideTrack.children(this.options.slide).addClass("slick-slide"), this.slideCount = this.$slides.length, this.currentSlide >= this.slideCount && 0 !== this.currentSlide && (this.currentSlide = this.currentSlide - this.options.slidesToScroll), this.slideCount <= this.options.slidesToShow && (this.currentSlide = 0), this.registerBreakpoints(), this.setProps(), this.setupInfinite(), this.buildArrows(), this.updateArrows(), this.initArrowEvents(), this.buildDots(), this.updateDots(), this.initDotEvents(), this.cleanUpSlideEvents(), this.initSlideEvents(), this.checkResponsive(!1, !0), !0 === this.options.focusOnSelect && t(this.$slideTrack).children().on("click.slick", this.selectHandler), this.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), this.setPosition(), this.focusHandler(), this.paused = !this.options.autoplay, this.autoPlay(), this.$slider.trigger("reInit", [this]) }, e.prototype.resize = function() {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() { e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition() }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) { return "boolean" == typeof t ? (e = t, t = !0 === e ? 0 : this.slideCount - 1) : t = !0 === e ? --t : t, !(this.slideCount < 1 || 0 > t || t > this.slideCount - 1) && (this.unload(), !0 === i ? this.$slideTrack.children().remove() : this.$slideTrack.children(this.options.slide).eq(t).remove(), this.$slides = this.$slideTrack.children(this.options.slide), this.$slideTrack.children(this.options.slide).detach(), this.$slideTrack.append(this.$slides), this.$slidesCache = this.$slides, void this.reinit()) }, e.prototype.setCSS = function(t) { var e, i, s = {};!0 === this.options.rtl && (t = -t), e = "left" == this.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == this.positionProp ? Math.ceil(t) + "px" : "0px", s[this.positionProp] = t, !1 === this.transformsEnabled ? this.$slideTrack.css(s) : (s = {}, !1 === this.cssTransitions ? (s[this.animType] = "translate(" + e + ", " + i + ")", this.$slideTrack.css(s)) : (s[this.animType] = "translate3d(" + e + ", " + i + ", 0px)", this.$slideTrack.css(s))) }, e.prototype.setDimensions = function() {!1 === this.options.vertical ? !0 === this.options.centerMode && this.$list.css({ padding: "0px " + this.options.centerPadding }) : (this.$list.height(this.$slides.first().outerHeight(!0) * this.options.slidesToShow), !0 === this.options.centerMode && this.$list.css({ padding: this.options.centerPadding + " 0px" })), this.listWidth = this.$list.width(), this.listHeight = this.$list.height(), !1 === this.options.vertical && !1 === this.options.variableWidth ? (this.slideWidth = Math.ceil(this.listWidth / this.options.slidesToShow), this.$slideTrack.width(Math.ceil(this.slideWidth * this.$slideTrack.children(".slick-slide").length))) : !0 === this.options.variableWidth ? this.$slideTrack.width(5e3 * this.slideCount) : (this.slideWidth = Math.ceil(this.listWidth), this.$slideTrack.height(Math.ceil(this.$slides.first().outerHeight(!0) * this.$slideTrack.children(".slick-slide").length))); var t = this.$slides.first().outerWidth(!0) - this.$slides.first().width();!1 === this.options.variableWidth && this.$slideTrack.children(".slick-slide").width(this.slideWidth - t) }, e.prototype.setFade = function() {
            var e, i = this;
            i.$slides.each(function(s, n) { e = i.slideWidth * s * -1, !0 === i.options.rtl ? t(n).css({ position: "relative", right: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 }) : t(n).css({ position: "relative", left: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 }) }), i.$slides.eq(i.currentSlide).css({ zIndex: i.options.zIndex - 1, opacity: 1 })
        }, e.prototype.setHeight = function() {
            if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
                var t = this.$slides.eq(this.currentSlide).outerHeight(!0);
                this.$list.css("height", t)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function() {
            var e, i, s, n, o, r = this,
                a = !1;
            if ("object" === t.type(arguments[0]) ? (s = arguments[0], a = arguments[1], o = "multiple") : "string" === t.type(arguments[0]) && (s = arguments[0], n = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) r.options[s] = n;
            else if ("multiple" === o) t.each(s, function(t, e) { r.options[t] = e });
            else if ("responsive" === o)
                for (i in n)
                    if ("array" !== t.type(r.options.responsive)) r.options.responsive = [n[i]];
                    else {
                        for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === n[i].breakpoint && r.options.responsive.splice(e, 1), e--;
                        r.options.responsive.push(n[i])
                    }
            a && (r.unload(), r.reinit())
        }, e.prototype.setPosition = function() { this.setDimensions(), this.setHeight(), !1 === this.options.fade ? this.setCSS(this.getLeft(this.currentSlide)) : this.setFade(), this.$slider.trigger("setPosition", [this]) }, e.prototype.setProps = function() {
            var t = document.body.style;
            this.positionProp = !0 === this.options.vertical ? "top" : "left", "top" === this.positionProp ? this.$slider.addClass("slick-vertical") : this.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === this.options.useCSS && (this.cssTransitions = !0), this.options.fade && ("number" == typeof this.options.zIndex ? this.options.zIndex < 3 && (this.options.zIndex = 3) : this.options.zIndex = this.defaults.zIndex), void 0 !== t.OTransform && (this.animType = "OTransform", this.transformType = "-o-transform", this.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (this.animType = !1)), void 0 !== t.MozTransform && (this.animType = "MozTransform", this.transformType = "-moz-transform", this.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (this.animType = !1)), void 0 !== t.webkitTransform && (this.animType = "webkitTransform", this.transformType = "-webkit-transform", this.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (this.animType = !1)), void 0 !== t.msTransform && (this.animType = "msTransform", this.transformType = "-ms-transform", this.transitionType = "msTransition", void 0 === t.msTransform && (this.animType = !1)), void 0 !== t.transform && !1 !== this.animType && (this.animType = "transform", this.transformType = "transform", this.transitionType = "transition"), this.transformsEnabled = this.options.useTransform && null !== this.animType && !1 !== this.animType
        }, e.prototype.setSlideClasses = function(t) {
            var e, i, s, n;
            i = this.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), this.$slides.eq(t).addClass("slick-current"), !0 === this.options.centerMode ? (e = Math.floor(this.options.slidesToShow / 2), !0 === this.options.infinite && (t >= e && t <= this.slideCount - 1 - e ? this.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (s = this.options.slidesToShow + t, i.slice(s - e + 1, s + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - this.options.slidesToShow).addClass("slick-center") : t === this.slideCount - 1 && i.eq(this.options.slidesToShow).addClass("slick-center")), this.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= this.slideCount - this.options.slidesToShow ? this.$slides.slice(t, t + this.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= this.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (n = this.slideCount % this.options.slidesToShow, s = !0 === this.options.infinite ? this.options.slidesToShow + t : t, this.options.slidesToShow == this.options.slidesToScroll && this.slideCount - t < this.options.slidesToShow ? i.slice(s - (this.options.slidesToShow - n), s + n).addClass("slick-active").attr("aria-hidden", "false") : i.slice(s, s + this.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === this.options.lazyLoad && this.lazyLoad()
        }, e.prototype.setupInfinite = function() {
            var e, i, s;
            if (!0 === this.options.fade && (this.options.centerMode = !1), !0 === this.options.infinite && !1 === this.options.fade && (i = null, this.slideCount > this.options.slidesToShow)) {
                for (s = !0 === this.options.centerMode ? this.options.slidesToShow + 1 : this.options.slidesToShow, e = this.slideCount; e > this.slideCount - s; e -= 1) i = e - 1, t(this.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - this.slideCount).prependTo(this.$slideTrack).addClass("slick-cloned");
                for (e = 0; s > e; e += 1) i = e, t(this.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + this.slideCount).appendTo(this.$slideTrack).addClass("slick-cloned");
                this.$slideTrack.find(".slick-cloned").find("[id]").each(function() { t(this).attr("id", "") })
            }
        }, e.prototype.interrupt = function(t) { t || this.autoPlay(), this.interrupted = t }, e.prototype.selectHandler = function(e) {
            var i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                s = parseInt(i.attr("data-slick-index"));
            return s || (s = 0), this.slideCount <= this.options.slidesToShow ? (this.setSlideClasses(s), void this.asNavFor(s)) : void this.slideHandler(s)
        }, e.prototype.slideHandler = function(t, e, i) {
            var s, n, o, r, a, l = null,
                h = this;
            return e = e || !1, !0 === h.animating && !0 === h.options.waitForAnimate || !0 === h.options.fade && h.currentSlide === t || h.slideCount <= h.options.slidesToShow ? void 0 : (!1 === e && h.asNavFor(t), s = t, l = h.getLeft(s), r = h.getLeft(h.currentSlide), h.currentLeft = null === h.swipeLeft ? r : h.swipeLeft, !1 === h.options.infinite && !1 === h.options.centerMode && (0 > t || t > h.getDotCount() * h.options.slidesToScroll) ? void(!1 === h.options.fade && (s = h.currentSlide, !0 !== i ? h.animateSlide(r, function() { h.postSlide(s) }) : h.postSlide(s))) : !1 === h.options.infinite && !0 === h.options.centerMode && (0 > t || t > h.slideCount - h.options.slidesToScroll) ? void(!1 === h.options.fade && (s = h.currentSlide, !0 !== i ? h.animateSlide(r, function() { h.postSlide(s) }) : h.postSlide(s))) : (h.options.autoplay && clearInterval(h.autoPlayTimer), n = 0 > s ? h.slideCount % h.options.slidesToScroll != 0 ? h.slideCount - h.slideCount % h.options.slidesToScroll : h.slideCount + s : s >= h.slideCount ? h.slideCount % h.options.slidesToScroll != 0 ? 0 : s - h.slideCount : s, h.animating = !0, h.$slider.trigger("beforeChange", [h, h.currentSlide, n]), o = h.currentSlide, h.currentSlide = n, h.setSlideClasses(h.currentSlide), h.options.asNavFor && (a = h.getNavTarget(), (a = a.slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(h.currentSlide)), h.updateDots(), h.updateArrows(), !0 === h.options.fade ? (!0 !== i ? (h.fadeSlideOut(o), h.fadeSlide(n, function() { h.postSlide(n) })) : h.postSlide(n), void h.animateHeight()) : void(!0 !== i ? h.animateSlide(l, function() { h.postSlide(n) }) : h.postSlide(n))))
        }, e.prototype.startLoad = function() {!0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.hide(), this.$nextArrow.hide()), !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.hide(), this.$slider.addClass("slick-loading") }, e.prototype.swipeDirection = function() { var t, e, i, s; return t = this.touchObject.startX - this.touchObject.curX, e = this.touchObject.startY - this.touchObject.curY, i = Math.atan2(e, t), 0 > (s = Math.round(180 * i / Math.PI)) && (s = 360 - Math.abs(s)), 45 >= s && s >= 0 ? !1 === this.options.rtl ? "left" : "right" : 360 >= s && s >= 315 ? !1 === this.options.rtl ? "left" : "right" : s >= 135 && 225 >= s ? !1 === this.options.rtl ? "right" : "left" : !0 === this.options.verticalSwiping ? s >= 35 && 135 >= s ? "down" : "up" : "vertical" }, e.prototype.swipeEnd = function(t) {
            var e, i;
            if (this.dragging = !1, this.interrupted = !1, this.shouldClick = !(this.touchObject.swipeLength > 10), void 0 === this.touchObject.curX) return !1;
            if (!0 === this.touchObject.edgeHit && this.$slider.trigger("edge", [this, this.swipeDirection()]), this.touchObject.swipeLength >= this.touchObject.minSwipe) {
                switch (i = this.swipeDirection()) {
                    case "left":
                    case "down":
                        e = this.options.swipeToSlide ? this.checkNavigable(this.currentSlide + this.getSlideCount()) : this.currentSlide + this.getSlideCount(), this.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = this.options.swipeToSlide ? this.checkNavigable(this.currentSlide - this.getSlideCount()) : this.currentSlide - this.getSlideCount(), this.currentDirection = 1
                }
                "vertical" != i && (this.slideHandler(e), this.touchObject = {}, this.$slider.trigger("swipe", [this, i]))
            } else this.touchObject.startX !== this.touchObject.curX && (this.slideHandler(this.currentSlide), this.touchObject = {})
        }, e.prototype.swipeHandler = function(t) {
            if (!(!1 === this.options.swipe || "ontouchend" in document && !1 === this.options.swipe || !1 === this.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (this.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, this.touchObject.minSwipe = this.listWidth / this.options.touchThreshold, !0 === this.options.verticalSwiping && (this.touchObject.minSwipe = this.listHeight / this.options.touchThreshold), t.data.action) {
                case "start":
                    this.swipeStart(t);
                    break;
                case "move":
                    this.swipeMove(t);
                    break;
                case "end":
                    this.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function(t) { var e, i, s, n, o; return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!this.dragging || o && 1 !== o.length) && (e = this.getLeft(this.currentSlide), this.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX, this.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY, this.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(this.touchObject.curX - this.touchObject.startX, 2))), !0 === this.options.verticalSwiping && (this.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(this.touchObject.curY - this.touchObject.startY, 2)))), "vertical" !== (i = this.swipeDirection()) ? (void 0 !== t.originalEvent && this.touchObject.swipeLength > 4 && t.preventDefault(), n = (!1 === this.options.rtl ? 1 : -1) * (this.touchObject.curX > this.touchObject.startX ? 1 : -1), !0 === this.options.verticalSwiping && (n = this.touchObject.curY > this.touchObject.startY ? 1 : -1), s = this.touchObject.swipeLength, this.touchObject.edgeHit = !1, !1 === this.options.infinite && (0 === this.currentSlide && "right" === i || this.currentSlide >= this.getDotCount() && "left" === i) && (s = this.touchObject.swipeLength * this.options.edgeFriction, this.touchObject.edgeHit = !0), !1 === this.options.vertical ? this.swipeLeft = e + s * n : this.swipeLeft = e + s * (this.$list.height() / this.listWidth) * n, !0 === this.options.verticalSwiping && (this.swipeLeft = e + s * n), !0 !== this.options.fade && !1 !== this.options.touchMove && (!0 === this.animating ? (this.swipeLeft = null, !1) : void this.setCSS(this.swipeLeft))) : void 0) }, e.prototype.swipeStart = function(t) { var e; return this.interrupted = !0, 1 !== this.touchObject.fingerCount || this.slideCount <= this.options.slidesToShow ? (this.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), this.touchObject.startX = this.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, this.touchObject.startY = this.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(this.dragging = !0)) }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() { null !== this.$slidesCache && (this.unload(), this.$slideTrack.children(this.options.slide).detach(), this.$slidesCache.appendTo(this.$slideTrack), this.reinit()) }, e.prototype.unload = function() { t(".slick-cloned", this.$slider).remove(), this.$dots && this.$dots.remove(), this.$prevArrow && this.htmlExpr.test(this.options.prevArrow) && this.$prevArrow.remove(), this.$nextArrow && this.htmlExpr.test(this.options.nextArrow) && this.$nextArrow.remove(), this.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "") }, e.prototype.unslick = function(t) { this.$slider.trigger("unslick", [this, t]), this.destroy() }, e.prototype.updateArrows = function() { Math.floor(this.options.slidesToShow / 2), !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && !this.options.infinite && (this.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), this.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === this.currentSlide ? (this.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), this.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : this.currentSlide >= this.slideCount - this.options.slidesToShow && !1 === this.options.centerMode ? (this.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), this.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : this.currentSlide >= this.slideCount - 1 && !0 === this.options.centerMode && (this.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), this.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))) }, e.prototype.updateDots = function() { null !== this.$dots && (this.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), this.$dots.find("li").eq(Math.floor(this.currentSlide / this.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false")) }, e.prototype.visibility = function() { this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1) }, t.fn.slick = function() {
            var t, i, s = arguments[0],
                n = Array.prototype.slice.call(arguments, 1),
                o = this.length;
            for (t = 0; o > t; t++)
                if ("object" == typeof s || void 0 === s ? this[t].slick = new e(this[t], s) : i = this[t].slick[s].apply(this[t].slick, n), void 0 !== i) return i;
            return this
        }
    }),
    function() {
        var t, e, i, s, n, o = {}.hasOwnProperty;
        (s = function() {
            function t() { this.options_index = 0, this.parsed = [] }
            return t.prototype.add_node = function(t) { return "OPTGROUP" === t.nodeName.toUpperCase() ? this.add_group(t) : this.add_option(t) }, t.prototype.add_group = function(t) { var e, i, s, n, o, r; for (e = this.parsed.length, this.parsed.push({ array_index: e, group: !0, label: this.escapeExpression(t.label), title: t.title ? t.title : void 0, children: 0, disabled: t.disabled, classes: t.className }), r = [], s = 0, n = (o = t.childNodes).length; s < n; s++) i = o[s], r.push(this.add_option(i, e, t.disabled)); return r }, t.prototype.add_option = function(t, e, i) { if ("OPTION" === t.nodeName.toUpperCase()) return "" !== t.text ? (null != e && (this.parsed[e].children += 1), this.parsed.push({ array_index: this.parsed.length, options_index: this.options_index, value: t.value, text: t.text, html: t.innerHTML, title: t.title ? t.title : void 0, selected: t.selected, disabled: !0 === i ? i : t.disabled, group_array_index: e, group_label: null != e ? this.parsed[e].label : null, classes: t.className, style: t.style.cssText })) : this.parsed.push({ array_index: this.parsed.length, options_index: this.options_index, empty: !0 }), this.options_index += 1 }, t.prototype.escapeExpression = function(t) { var e, i; return null == t || !1 === t ? "" : /[\&\<\>\"\'\`]/.test(t) ? (e = { "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }, i = /&(?!\w+;)|[\<\>\"\'\`]/g, t.replace(i, function(t) { return e[t] || "&amp;" })) : t }, t
        }()).select_to_array = function(t) { var e, i, n, o, r; for (i = new s, n = 0, o = (r = t.childNodes).length; n < o; n++) e = r[n], i.add_node(e); return i.parsed }, e = function() {
            function t(e, i) { this.form_field = e, this.options = null != i ? i : {}, t.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready()) }
            return t.prototype.set_default_values = function() { var t = this; return this.click_test_action = function(e) { return t.test_active_click(e) }, this.activate_action = function(e) { return t.activate_field(e) }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text && this.options.allow_single_deselect, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null == this.options.enable_split_word_search || this.options.enable_split_word_search, this.group_search = null == this.options.group_search || this.options.group_search, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null == this.options.single_backstroke_delete || this.options.single_backstroke_delete, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null == this.options.display_selected_options || this.options.display_selected_options, this.display_disabled_options = null == this.options.display_disabled_options || this.options.display_disabled_options, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1, this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY, this.case_sensitive_search = this.options.case_sensitive_search || !1 }, t.prototype.set_default_text = function() { return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || t.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || t.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || t.default_no_result_text }, t.prototype.choice_label = function(t) { return this.include_group_label_in_selected && null != t.group_label ? "<b class='group-name'>" + t.group_label + "</b>" + t.html : t.html }, t.prototype.mouse_enter = function() { return this.mouse_on_container = !0 }, t.prototype.mouse_leave = function() { return this.mouse_on_container = !1 }, t.prototype.input_focus = function(t) { var e = this; if (this.is_multiple) { if (!this.active_field) return setTimeout(function() { return e.container_mousedown() }, 50) } else if (!this.active_field) return this.activate_field() }, t.prototype.input_blur = function(t) { var e = this; if (!this.mouse_on_container) return this.active_field = !1, setTimeout(function() { return e.blur_test() }, 100) }, t.prototype.results_option_build = function(t) { var e, i, s, n, o, r, a; for (e = "", n = 0, o = 0, r = (a = this.results_data).length; o < r && (i = a[o], s = "", "" !== (s = i.group ? this.result_add_group(i) : this.result_add_option(i)) && (n++, e += s), (null != t ? t.first : void 0) && (i.selected && this.is_multiple ? this.choice_build(i) : i.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(i))), !(n >= this.max_shown_results)); o++); return e }, t.prototype.result_add_option = function(t) { var e, i; return t.search_match && this.include_option_in_results(t) ? (e = [], t.disabled || t.selected && this.is_multiple || e.push("active-result"), !t.disabled || t.selected && this.is_multiple || e.push("disabled-result"), t.selected && e.push("result-selected"), null != t.group_array_index && e.push("group-option"), "" !== t.classes && e.push(t.classes), i = document.createElement("li"), i.className = e.join(" "), i.style.cssText = t.style, i.setAttribute("data-option-array-index", t.array_index), i.innerHTML = t.search_text, t.title && (i.title = t.title), this.outerHTML(i)) : "" }, t.prototype.result_add_group = function(t) { var e, i; return (t.search_match || t.group_match) && t.active_options > 0 ? ((e = []).push("group-result"), t.classes && e.push(t.classes), i = document.createElement("li"), i.className = e.join(" "), i.innerHTML = t.search_text, t.title && (i.title = t.title), this.outerHTML(i)) : "" }, t.prototype.results_update_field = function() { if (this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing) return this.winnow_results() }, t.prototype.reset_single_select_options = function() { var t, e, i, s, n; for (n = [], e = 0, i = (s = this.results_data).length; e < i; e++)(t = s[e]).selected ? n.push(t.selected = !1) : n.push(void 0); return n }, t.prototype.results_toggle = function() { return this.results_showing ? this.results_hide() : this.results_show() }, t.prototype.results_search = function(t) { return this.results_showing ? this.winnow_results() : this.results_show() }, t.prototype.winnow_results = function() { var t, e, i, s, n, o, r, a, l, h, c, u; for (this.no_results_clear(), s = 0, t = (o = this.get_search_text()).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), l = new RegExp(t, "i"), i = this.get_search_regex(t), h = 0, c = (u = this.results_data).length; h < c; h++)(e = u[h]).search_match = !1, n = null, this.include_option_in_results(e) && (e.group && (e.group_match = !1, e.active_options = 0), null != e.group_array_index && this.results_data[e.group_array_index] && (0 === (n = this.results_data[e.group_array_index]).active_options && n.search_match && (s += 1), n.active_options += 1), e.search_text = e.group ? e.label : e.html, e.group && !this.group_search || (e.search_match = this.search_string_match(e.search_text, i), e.search_match && !e.group && (s += 1), e.search_match ? (o.length && (r = e.search_text.search(l), a = e.search_text.substr(0, r + o.length) + "</em>" + e.search_text.substr(r + o.length), e.search_text = a.substr(0, r) + "<em>" + a.substr(r)), null != n && (n.group_match = !0)) : null != e.group_array_index && this.results_data[e.group_array_index].search_match && (e.search_match = !0))); return this.result_clear_highlight(), s < 1 && o.length ? (this.update_results_content(""), this.no_results(o)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight()) }, t.prototype.get_search_regex = function(t) { var e, i; return e = this.search_contains ? "" : "^", i = this.case_sensitive_search ? "" : "i", new RegExp(e + t, i) }, t.prototype.search_string_match = function(t, e) {
                var i, s, n, o;
                if (e.test(t)) return !0;
                if (this.enable_split_word_search && (t.indexOf(" ") >= 0 || 0 === t.indexOf("[")) && (s = t.replace(/\[|\]/g, "").split(" ")).length)
                    for (n = 0, o = s.length; n < o; n++)
                        if (i = s[n], e.test(i)) return !0
            }, t.prototype.choices_count = function() { var t, e, i; if (null != this.selected_option_count) return this.selected_option_count; for (this.selected_option_count = 0, t = 0, e = (i = this.form_field.options).length; t < e; t++) i[t].selected && (this.selected_option_count += 1); return this.selected_option_count }, t.prototype.choices_click = function(t) { if (t.preventDefault(), !this.results_showing && !this.is_disabled) return this.results_show() }, t.prototype.keyup_checker = function(t) {
                var e, i;
                switch (e = null != (i = t.which) ? i : t.keyCode, this.search_field_scale(), e) {
                    case 8:
                        if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
                        if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                        break;
                    case 13:
                        if (t.preventDefault(), this.results_showing) return this.result_select(t);
                        break;
                    case 27:
                        return this.results_showing && this.results_hide(), !0;
                    case 9:
                    case 38:
                    case 40:
                    case 16:
                    case 91:
                    case 17:
                    case 18:
                        break;
                    default:
                        return this.results_search()
                }
            }, t.prototype.clipboard_event_checker = function(t) { var e = this; return setTimeout(function() { return e.results_search() }, 50) }, t.prototype.container_width = function() { return null != this.options.width ? this.options.width : this.form_field.offsetWidth + "px" }, t.prototype.include_option_in_results = function(t) { return !(this.is_multiple && !this.display_selected_options && t.selected) && (!(!this.display_disabled_options && t.disabled) && !t.empty) }, t.prototype.search_results_touchstart = function(t) { return this.touch_started = !0, this.search_results_mouseover(t) }, t.prototype.search_results_touchmove = function(t) { return this.touch_started = !1, this.search_results_mouseout(t) }, t.prototype.search_results_touchend = function(t) { if (this.touch_started) return this.search_results_mouseup(t) }, t.prototype.outerHTML = function(t) { var e; return t.outerHTML ? t.outerHTML : ((e = document.createElement("div")).appendChild(t), e.innerHTML) }, t.browser_is_supported = function() { return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : !(/iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent)) }, t.default_multiple_text = "Select Some Options", t.default_single_text = "Select an Option", t.default_no_result_text = "No results match", t
        }(), (t = jQuery).fn.extend({
            chosen: function(s) {
                return e.browser_is_supported() ? this.each(function(e) {
                    var n, o;
                    o = (n = t(this)).data("chosen"), "destroy" !== s ? o instanceof i || n.data("chosen", new i(this, s)) : o instanceof i && o.destroy()
                }) : this
            }
        }), i = function(i) {
            function r() { return n = r.__super__.constructor.apply(this, arguments) }
            return function(t, e) {
                function i() { this.constructor = t }
                for (var s in e) o.call(e, s) && (t[s] = e[s]);
                i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype
            }(r, e), r.prototype.setup = function() { return this.form_field_jq = t(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl") }, r.prototype.set_up_html = function() { var e, i; return (e = ["chosen-container"]).push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && e.push(this.form_field.className), this.is_rtl && e.push("chosen-rtl"), i = { class: e.join(" "), style: "width: " + this.container_width() + ";", title: this.form_field.title }, this.form_field.id.length && (i.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = t("<div />", i), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior() }, r.prototype.on_ready = function() { return this.form_field_jq.trigger("chosen:ready", { chosen: this }) }, r.prototype.register_observers = function() { var t = this; return this.container.bind("touchstart.chosen", function(e) { return t.container_mousedown(e), e.preventDefault() }), this.container.bind("touchend.chosen", function(e) { return t.container_mouseup(e), e.preventDefault() }), this.container.bind("mousedown.chosen", function(e) { t.container_mousedown(e) }), this.container.bind("mouseup.chosen", function(e) { t.container_mouseup(e) }), this.container.bind("mouseenter.chosen", function(e) { t.mouse_enter(e) }), this.container.bind("mouseleave.chosen", function(e) { t.mouse_leave(e) }), this.search_results.bind("mouseup.chosen", function(e) { t.search_results_mouseup(e) }), this.search_results.bind("mouseover.chosen", function(e) { t.search_results_mouseover(e) }), this.search_results.bind("mouseout.chosen", function(e) { t.search_results_mouseout(e) }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function(e) { t.search_results_mousewheel(e) }), this.search_results.bind("touchstart.chosen", function(e) { t.search_results_touchstart(e) }), this.search_results.bind("touchmove.chosen", function(e) { t.search_results_touchmove(e) }), this.search_results.bind("touchend.chosen", function(e) { t.search_results_touchend(e) }), this.form_field_jq.bind("chosen:updated.chosen", function(e) { t.results_update_field(e) }), this.form_field_jq.bind("chosen:activate.chosen", function(e) { t.activate_field(e) }), this.form_field_jq.bind("chosen:open.chosen", function(e) { t.container_mousedown(e) }), this.form_field_jq.bind("chosen:close.chosen", function(e) { t.input_blur(e) }), this.search_field.bind("blur.chosen", function(e) { t.input_blur(e) }), this.search_field.bind("keyup.chosen", function(e) { t.keyup_checker(e) }), this.search_field.bind("keydown.chosen", function(e) { t.keydown_checker(e) }), this.search_field.bind("focus.chosen", function(e) { t.input_focus(e) }), this.search_field.bind("cut.chosen", function(e) { t.clipboard_event_checker(e) }), this.search_field.bind("paste.chosen", function(e) { t.clipboard_event_checker(e) }), this.is_multiple ? this.search_choices.bind("click.chosen", function(e) { t.choices_click(e) }) : this.container.bind("click.chosen", function(t) { t.preventDefault() }) }, r.prototype.destroy = function() { return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show() }, r.prototype.search_field_disabled = function() { return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action)) }, r.prototype.container_mousedown = function(e) { if (!this.is_disabled && (e && "mousedown" === e.type && !this.results_showing && e.preventDefault(), null == e || !t(e.target).hasClass("search-choice-close"))) return this.active_field ? this.is_multiple || !e || t(e.target)[0] !== this.selected_item[0] && !t(e.target).parents("a.chosen-single").length || (e.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), t(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field() }, r.prototype.container_mouseup = function(t) { if ("ABBR" === t.target.nodeName && !this.is_disabled) return this.results_reset(t) }, r.prototype.search_results_mousewheel = function(t) { var e; if (t.originalEvent && (e = t.originalEvent.deltaY || -t.originalEvent.wheelDelta || t.originalEvent.detail), null != e) return t.preventDefault(), "DOMMouseScroll" === t.type && (e *= 40), this.search_results.scrollTop(e + this.search_results.scrollTop()) }, r.prototype.blur_test = function(t) { if (!this.active_field && this.container.hasClass("chosen-container-active")) return this.close_field() }, r.prototype.close_field = function() { return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale() }, r.prototype.activate_field = function() { return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus() }, r.prototype.test_active_click = function(e) { var i; return (i = t(e.target).closest(".chosen-container")).length && this.container[0] === i[0] ? this.active_field = !0 : this.close_field() }, r.prototype.results_build = function() { return this.parsing = !0, this.selected_option_count = null, this.results_data = s.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({ first: !0 })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1 }, r.prototype.result_do_highlight = function(t) { var e, i, s, n, o; if (t.length) { if (this.result_clear_highlight(), this.result_highlight = t, this.result_highlight.addClass("highlighted"), s = parseInt(this.search_results.css("maxHeight"), 10), o = this.search_results.scrollTop(), n = s + o, i = this.result_highlight.position().top + this.search_results.scrollTop(), (e = i + this.result_highlight.outerHeight()) >= n) return this.search_results.scrollTop(e - s > 0 ? e - s : 0); if (i < o) return this.search_results.scrollTop(i) } }, r.prototype.result_clear_highlight = function() { return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null }, r.prototype.results_show = function() { return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", { chosen: this }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", { chosen: this })) }, r.prototype.update_results_content = function(t) { return this.search_results.html(t) }, r.prototype.results_hide = function() { return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", { chosen: this })), this.results_showing = !1 }, r.prototype.set_tab_index = function(t) { var e; if (this.form_field.tabIndex) return e = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = e }, r.prototype.set_label_behavior = function() { var e = this; if (this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = t("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0) return this.form_field_label.bind("click.chosen", function(t) { return e.is_multiple ? e.container_mousedown(t) : e.activate_field() }) }, r.prototype.show_search_field_default = function() { return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default")) }, r.prototype.search_results_mouseup = function(e) { var i; if ((i = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first()).length) return this.result_highlight = i, this.result_select(e), this.search_field.focus() }, r.prototype.search_results_mouseover = function(e) { var i; if (i = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first()) return this.result_do_highlight(i) }, r.prototype.search_results_mouseout = function(e) { if (t(e.target).hasClass("active-result")) return this.result_clear_highlight() }, r.prototype.choice_build = function(e) { var i, s, n = this; return i = t("<li />", { class: "search-choice" }).html("<span>" + this.choice_label(e) + "</span>"), e.disabled ? i.addClass("search-choice-disabled") : ((s = t("<a />", { class: "search-choice-close", "data-option-array-index": e.array_index })).bind("click.chosen", function(t) { return n.choice_destroy_link_click(t) }), i.append(s)), this.search_container.before(i) }, r.prototype.choice_destroy_link_click = function(e) { if (e.preventDefault(), e.stopPropagation(), !this.is_disabled) return this.choice_destroy(t(e.target)) }, r.prototype.choice_destroy = function(t) { if (this.result_deselect(t[0].getAttribute("data-option-array-index"))) return this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), t.parents("li").first().remove(), this.search_field_scale() }, r.prototype.results_reset = function() { if (this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field) return this.results_hide() }, r.prototype.results_reset_cleanup = function() { return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove() }, r.prototype.result_select = function(t) { var e, i; if (this.result_highlight) return e = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", { chosen: this }), !1) : (this.is_multiple ? e.removeClass("active-result") : this.reset_single_select_options(), e.addClass("result-selected"), i = this.results_data[e[0].getAttribute("data-option-array-index")], i.selected = !0, this.form_field.options[i.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(i) : this.single_set_selected_text(this.choice_label(i)), (t.metaKey || t.ctrlKey) && this.is_multiple || this.results_hide(), this.show_search_field_default(), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", { selected: this.form_field.options[i.options_index].value }), this.current_selectedIndex = this.form_field.selectedIndex, t.preventDefault(), this.search_field_scale()) }, r.prototype.single_set_selected_text = function(t) { return null == t && (t = this.default_text), t === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(t) }, r.prototype.result_deselect = function(t) { var e; return e = this.results_data[t], !this.form_field.options[e.options_index].disabled && (e.selected = !1, this.form_field.options[e.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", { deselected: this.form_field.options[e.options_index].value }), this.search_field_scale(), !0) }, r.prototype.single_deselect_control_build = function() { if (this.allow_single_deselect) return this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect") }, r.prototype.get_search_text = function() { return t("<div/>").text(t.trim(this.search_field.val())).html() }, r.prototype.winnow_results_set_highlight = function() { var t, e; if (e = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), null != (t = e.length ? e.first() : this.search_results.find(".active-result").first())) return this.result_do_highlight(t) }, r.prototype.no_results = function(e) { var i; return (i = t('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>')).find("span").first().html(e), this.search_results.append(i), this.form_field_jq.trigger("chosen:no_results", { chosen: this }) }, r.prototype.no_results_clear = function() { return this.search_results.find(".no-results").remove() }, r.prototype.keydown_arrow = function() { var t; return this.results_showing && this.result_highlight ? (t = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(t) : void 0 : this.results_show() }, r.prototype.keyup_arrow = function() { var t; return this.results_showing || this.is_multiple ? this.result_highlight ? (t = this.result_highlight.prevAll("li.active-result")).length ? this.result_do_highlight(t.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight()) : void 0 : this.results_show() }, r.prototype.keydown_backstroke = function() { var t; return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (t = this.search_container.siblings("li.search-choice").last()).length && !t.hasClass("search-choice-disabled") ? (this.pending_backstroke = t, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0 }, r.prototype.clear_backstroke = function() { return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null }, r.prototype.keydown_checker = function(t) {
                var e, i;
                switch (e = null != (i = t.which) ? i : t.keyCode, this.search_field_scale(), 8 !== e && this.pending_backstroke && this.clear_backstroke(), e) {
                    case 8:
                        this.backstroke_length = this.search_field.val().length;
                        break;
                    case 9:
                        this.results_showing && !this.is_multiple && this.result_select(t), this.mouse_on_container = !1;
                        break;
                    case 13:
                        this.results_showing && t.preventDefault();
                        break;
                    case 32:
                        this.disable_search && t.preventDefault();
                        break;
                    case 38:
                        t.preventDefault(), this.keyup_arrow();
                        break;
                    case 40:
                        t.preventDefault(), this.keydown_arrow()
                }
            }, r.prototype.search_field_scale = function() { var e, i, s, n, o, r, a, l; if (this.is_multiple) { for (0, r = 0, n = "position:absolute; left: -1000px; top: -1000px; display:none;", a = 0, l = (o = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"]).length; a < l; a++) n += (s = o[a]) + ":" + this.search_field.css(s) + ";"; return (e = t("<div />", { style: n })).text(this.search_field.val()), t("body").append(e), r = e.width() + 25, e.remove(), i = this.container.outerWidth(), r > i - 10 && (r = i - 10), this.search_field.css({ width: r + "px" }) } }, r
        }()
    }.call(this),
    function(t, e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : t.jquery_mhead_js = e(t.jQuery) }(this, function(t) {
        return function(t) {
            var e = "mhead";
            if (!(t[e] && t[e].version > "1.0.1")) {
                t[e] = function(t, e, i) { return this.$head = t, this.opts = e, this.conf = i, this._initButtons(), this._initList(), this._initHamburger(), this._initScroll(), this }, t[e].version = "1.0.1", t[e].defaults = { scroll: { hide: 0, show: 0, tolerance: 4 }, hamburger: { menu: null, animation: "collapse" } }, t[e].configuration = { initButtons: !0, initList: !0, initHamburger: !0, initScroll: !0 }, t[e].prototype = {
                    _initButtons: function() {
                        if (!this.conf.initButtons) return this;
                        var t = !1,
                            e = { left: 0, right: 0 },
                            s = 0,
                            n = 0;
                        for (var o in e) t = t || this.$head.hasClass(i.align + "-" + o), (s = this.$head.children("." + i.btns + "-" + o).children().length) && (n = Math.max(s, n), e[o] = s);
                        if (!t)
                            for (var o in e) e[o] = n;
                        for (var o in e)
                            if (e[o]) {
                                var r = i.btns + "-" + o;
                                e[o] > 1 && (r += "-" + e[o]), this.$head.addClass(r)
                            }
                        return this
                    },
                    _initList: function() { return this.conf.initList ? void this.$head.find("." + i.list).each(function() { t(this).children().appendTo(this) }) : this },
                    _initScroll: function() {
                        if (!this.conf.initScroll) return this;
                        if (!this.opts.scroll || !1 === this.opts.scroll.hide) return this;
                        this.$head.hasClass(i.sticky) || this.$head.addClass(i.sticky);
                        var t = this,
                            e = 0,
                            s = null,
                            r = this.$head.offset().top + this.$head.outerHeight();
                        return this.opts.scroll.hide = Math.max(r, this.opts.scroll.hide || 0), this.opts.scroll.show = Math.max(r, this.opts.scroll.show || 0), o.$wndw.on(n.scroll, function() {
                            var n = o.$wndw.scrollTop(),
                                r = e - n,
                                a = r < 0 ? "down" : "up";
                            r = Math.abs(r), e = n, null === s && (s = n > t.opts.scroll.show), s ? "up" == a && (n < t.opts.scroll.show || r > t.opts.scroll.tolerance) && (s = !1, t.$head.removeClass(i.scrolledout)) : "down" == a && n > t.opts.scroll.hide && r > t.opts.scroll.tolerance && (s = !0, t.$head.addClass(i.scrolledout))
                        }).trigger(n.scroll), this
                    },
                    _initHamburger: function() {
                        if (!this.conf.initHamburger) return this;
                        var e = this.$head.find("." + i.hamburger);
                        if (e.length) {
                            var s = this;
                            return e.each(function() {
                                var e = t(this),
                                    i = t('<button class="hamburger"><span class="hamburger-box"><span class="hamburger-inner"></span></span></button>'),
                                    o = e.attr("href");
                                e.replaceWith(i), i.addClass("hamburger--" + s.opts.hamburger.animation);
                                for (var r = t(), a = [o, s.opts.hamburger.menu, ".mm-menu"], l = 0; l < a.length; l++)
                                    if (a[l] && (r = t(a[l])).length && r.is(".mm-menu")) { r = r.first(); break }
                                var h = r.data("mmenu");
                                i.on(n.click, function() { h.open() }), h.bind("open:finish", function() { setTimeout(function() { i.addClass("is-active") }, 100) }), h.bind("close:finish", function() { setTimeout(function() { i.removeClass("is-active") }, 100) })
                            }), this
                        }
                    }
                }, t.fn[e] = function(r, a) {
                    return t[e].glbl || (o = { $wndw: t(window), $docu: t(document), $html: t("html"), $body: t("body") }, i = {}, s = {}, n = {}, t.each([i, s, n], function(t, e) { e.add = function(t) { for (var i = 0, s = (t = t.split(" ")).length; i < s; i++) e[t[i]] = e.mh(t[i]) } }), i.mh = function(t) { return "mh-" + t }, i.add("head sticky scrolledout align btns list hamburger"), i.umh = function(t) { return "mh-" == t.slice(0, 3) && (t = t.slice(3)), t }, s.mh = function(t) { return "mh-" + t }, n.mh = function(t) { return t + ".mh" }, n.add("scroll click"), t[e]._c = i, t[e]._d = s, t[e]._e = n, t[e].glbl = o), r = t.extend(!0, {}, t[e].defaults, r), a = t.extend(!0, {}, t[e].configuration, a), this.each(function() {
                        var i = t(this);
                        if (!i.data(e)) {
                            var s = new t[e](i, r, a);
                            i.data(e, s)
                        }
                    })
                }, t[e].support = { touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1 };
                var i, s, n, o
            }
        }(t), !0
    }),
    function(t, e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : t.jquery_mmenu_all_js = e(t.jQuery) }(this, function(t) {
        return function(t) {
                var e = "mmenu";
                if (!(t[e] && t[e].version > "6.1.4")) {
                    t[e] = function(t, e, i) { return this.$menu = t, this._api = ["bind", "getInstance", "initPanels", "openPanel", "closePanel", "closeAllPanels", "setSelected"], this.opts = e, this.conf = i, this.vars = {}, this.cbck = {}, this.mtch = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initAddons(), this._initExtensions(), this._initMenu(), this._initPanels(), this._initOpened(), this._initAnchors(), this._initMatchMedia(), "function" == typeof this.___debug && this.___debug(), this }, t[e].version = "6.1.4", t[e].addons = {}, t[e].uniqueId = 0, t[e].defaults = { extensions: [], initMenu: function() {}, initPanels: function() {}, navbar: { add: !0, title: "Menu", titleLink: "parent" }, onClick: { setSelected: !0 }, slidingSubmenus: !0 }, t[e].configuration = { classNames: { divider: "Divider", inset: "Inset", nolistview: "NoListview", nopanel: "NoPanel", panel: "Panel", selected: "Selected", spacer: "Spacer", vertical: "Vertical" }, clone: !1, openingInterval: 25, panelNodetype: "ul, ol, div", transitionDuration: 400 }, t[e].prototype = {
                        getInstance: function() { return this },
                        initPanels: function(t) { this._initPanels(t) },
                        openPanel: function(n, o) {
                            if (this.trigger("openPanel:before", n), n && n.length && (n.is("." + i.panel) || (n = n.closest("." + i.panel)), n.is("." + i.panel))) {
                                var r = this;
                                if ("boolean" != typeof o && (o = !0), n.hasClass(i.vertical)) n.add(n.parents("." + i.vertical)).removeClass(i.hidden).parent("li").addClass(i.opened), this.openPanel(n.parents("." + i.panel).not("." + i.vertical).first()), this.trigger("openPanel:start", n), this.trigger("openPanel:finish", n);
                                else {
                                    if (n.hasClass(i.opened)) return;
                                    var a = this.$pnls.children("." + i.panel),
                                        l = a.filter("." + i.opened);
                                    if (!t[e].support.csstransitions) return l.addClass(i.hidden).removeClass(i.opened), n.removeClass(i.hidden).addClass(i.opened), this.trigger("openPanel:start", n), void this.trigger("openPanel:finish", n);
                                    a.not(n).removeClass(i.subopened);
                                    for (var h = n.data(s.parent); h;)(h = h.closest("." + i.panel)).is("." + i.vertical) || h.addClass(i.subopened), h = h.data(s.parent);
                                    a.removeClass(i.highest).not(l).not(n).addClass(i.hidden), n.removeClass(i.hidden);
                                    var c = function() { l.removeClass(i.opened), n.addClass(i.opened), n.hasClass(i.subopened) ? (l.addClass(i.highest), n.removeClass(i.subopened)) : (l.addClass(i.subopened), n.addClass(i.highest)), this.trigger("openPanel:start", n) },
                                        u = function() { l.removeClass(i.highest).addClass(i.hidden), n.removeClass(i.highest), this.trigger("openPanel:finish", n) };
                                    o && !n.hasClass(i.noanimation) ? setTimeout(function() { r.__transitionend(n, function() { u.call(r) }, r.conf.transitionDuration), c.call(r) }, this.conf.openingInterval) : (c.call(this), u.call(this))
                                }
                                this.trigger("openPanel:after", n)
                            }
                        },
                        closePanel: function(t) {
                            this.trigger("closePanel:before", t);
                            var e = t.parent();
                            e.hasClass(i.vertical) && (e.removeClass(i.opened), this.trigger("closePanel", t)), this.trigger("closePanel:after", t)
                        },
                        closeAllPanels: function() {
                            this.trigger("closeAllPanels:before"), this.$pnls.find("." + i.listview).children().removeClass(i.selected).filter("." + i.vertical).removeClass(i.opened);
                            var t = this.$pnls.children("." + i.panel).first();
                            this.$pnls.children("." + i.panel).not(t).removeClass(i.subopened).removeClass(i.opened).removeClass(i.highest).addClass(i.hidden), this.openPanel(t), this.trigger("closeAllPanels:after")
                        },
                        togglePanel: function(t) {
                            var e = t.parent();
                            e.hasClass(i.vertical) && this[e.hasClass(i.opened) ? "closePanel" : "openPanel"](t)
                        },
                        setSelected: function(t) { this.trigger("setSelected:before", t), this.$menu.find("." + i.listview).children("." + i.selected).removeClass(i.selected), t.addClass(i.selected), this.trigger("setSelected:after", t) },
                        bind: function(t, e) { this.cbck[t] = this.cbck[t] || [], this.cbck[t].push(e) },
                        trigger: function() {
                            var t = Array.prototype.slice.call(arguments),
                                e = t.shift();
                            if (this.cbck[e])
                                for (var i = 0, s = this.cbck[e].length; i < s; i++) this.cbck[e][i].apply(this, t)
                        },
                        matchMedia: function(t, e, i) {
                            var s = { yes: e, no: i };
                            this.mtch[t] = this.mtch[t] || [], this.mtch[t].push(s)
                        },
                        _initAddons: function() {
                            this.trigger("initAddons:before");
                            var i;
                            for (i in t[e].addons) t[e].addons[i].add.call(this), t[e].addons[i].add = function() {};
                            for (i in t[e].addons) t[e].addons[i].setup.call(this);
                            this.trigger("initAddons:after")
                        },
                        _initExtensions: function() {
                            this.trigger("initExtensions:before");
                            var t = this;
                            this.opts.extensions.constructor === Array && (this.opts.extensions = { all: this.opts.extensions });
                            for (var e in this.opts.extensions) this.opts.extensions[e] = this.opts.extensions[e].length ? "mm-" + this.opts.extensions[e].join(" mm-") : "", this.opts.extensions[e] && function(e) { t.matchMedia(e, function() { this.$menu.addClass(this.opts.extensions[e]) }, function() { this.$menu.removeClass(this.opts.extensions[e]) }) }(e);
                            this.trigger("initExtensions:after")
                        },
                        _initMenu: function() {
                            this.trigger("initMenu:before"), this.conf.clone && (this.$orig = this.$menu, this.$menu = this.$orig.clone(), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function() { t(this).attr("id", i.mm(t(this).attr("id"))) })), this.opts.initMenu.call(this, this.$menu, this.$orig), this.$menu.attr("id", this.$menu.attr("id") || this.__getUniqueId()), this.$pnls = t('<div class="' + i.panels + '" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu);
                            var e = [i.menu];
                            this.opts.slidingSubmenus || e.push(i.vertical), this.$menu.addClass(e.join(" ")).parent().addClass(i.wrapper), this.trigger("initMenu:after")
                        },
                        _initPanels: function(e) {
                            this.trigger("initPanels:before", e), e = e || this.$pnls.children(this.conf.panelNodetype);
                            var s = t(),
                                n = this,
                                o = function(e) {
                                    e.filter(this.conf.panelNodetype).each(function() {
                                        var e = n._initPanel(t(this));
                                        if (e) {
                                            n._initNavbar(e), n._initListview(e), s = s.add(e);
                                            var r = e.children("." + i.listview).children("li").children(n.conf.panelNodeType).add(e.children("." + n.conf.classNames.panel));
                                            r.length && o.call(n, r)
                                        }
                                    })
                                };
                            o.call(this, e), this.opts.initPanels.call(this, s), this.trigger("initPanels:after", s)
                        },
                        _initPanel: function(t) {
                            if (this.trigger("initPanel:before", t), t.hasClass(i.panel)) return t;
                            if (this.__refactorClass(t, this.conf.classNames.panel, "panel"), this.__refactorClass(t, this.conf.classNames.nopanel, "nopanel"), this.__refactorClass(t, this.conf.classNames.vertical, "vertical"), this.__refactorClass(t, this.conf.classNames.inset, "inset"), t.filter("." + i.inset).addClass(i.nopanel), t.hasClass(i.nopanel)) return !1;
                            var e = t.hasClass(i.vertical) || !this.opts.slidingSubmenus;
                            t.removeClass(i.vertical);
                            var n = t.attr("id") || this.__getUniqueId();
                            t.removeAttr("id"), t.is("ul, ol") && (t.wrap("<div />"), t = t.parent()), t.addClass(i.panel + " " + i.hidden).attr("id", n);
                            var o = t.parent("li");
                            return e ? t.add(o).addClass(i.vertical) : t.appendTo(this.$pnls), o.length && (o.data(s.child, t), t.data(s.parent, o)), this.trigger("initPanel:after", t), t
                        },
                        _initNavbar: function(n) {
                            if (this.trigger("initNavbar:before", n), !n.children("." + i.navbar).length) {
                                var o = n.data(s.parent),
                                    r = t('<div class="' + i.navbar + '" />'),
                                    a = t[e].i18n(this.opts.navbar.title),
                                    l = "";
                                if (o && o.length) {
                                    if (o.hasClass(i.vertical)) return;
                                    if (o.parent().is("." + i.listview)) h = o.children("a, span").not("." + i.next);
                                    else var h = o.closest("." + i.panel).find('a[href="#' + n.attr("id") + '"]');
                                    var c = (o = (h = h.first()).closest("." + i.panel)).attr("id");
                                    switch (a = h.text(), this.opts.navbar.titleLink) {
                                        case "anchor":
                                            l = h.attr("href");
                                            break;
                                        case "parent":
                                            l = "#" + c
                                    }
                                    r.append('<a class="' + i.btn + " " + i.prev + '" href="#' + c + '" />')
                                } else if (!this.opts.navbar.title) return;
                                this.opts.navbar.add && n.addClass(i.hasnavbar), r.append('<a class="' + i.title + '"' + (l.length ? ' href="' + l + '"' : "") + ">" + a + "</a>").prependTo(n), this.trigger("initNavbar:after", n)
                            }
                        },
                        _initListview: function(e) {
                            this.trigger("initListview:before", e);
                            var n = this.__childAddBack(e, "ul, ol");
                            this.__refactorClass(n, this.conf.classNames.nolistview, "nolistview"), n.filter("." + this.conf.classNames.inset).addClass(i.nolistview);
                            var o = n.not("." + i.nolistview).addClass(i.listview).children();
                            this.__refactorClass(o, this.conf.classNames.selected, "selected"), this.__refactorClass(o, this.conf.classNames.divider, "divider"), this.__refactorClass(o, this.conf.classNames.spacer, "spacer");
                            var r = e.data(s.parent);
                            if (r && r.parent().is("." + i.listview) && !r.children("." + i.next).length) {
                                var a = r.children("a, span").first(),
                                    l = t('<a class="' + i.next + '" href="#' + e.attr("id") + '" />').insertBefore(a);
                                a.is("span") && l.addClass(i.fullsubopen)
                            }
                            this.trigger("initListview:after", e)
                        },
                        _initOpened: function() {
                            this.trigger("initOpened:before");
                            var t = this.$pnls.find("." + i.listview).children("." + i.selected).removeClass(i.selected).last().addClass(i.selected),
                                e = t.length ? t.closest("." + i.panel) : this.$pnls.children("." + i.panel).first();
                            this.openPanel(e, !1), this.trigger("initOpened:after")
                        },
                        _initAnchors: function() {
                            var s = this;
                            o.$body.on(n.click + "-oncanvas", "a[href]", function(n) {
                                var o = t(this),
                                    r = !1,
                                    a = s.$menu.find(o).length;
                                for (var l in t[e].addons)
                                    if (t[e].addons[l].clickAnchor.call(s, o, a)) { r = !0; break }
                                var h = o.attr("href");
                                if (!r && a && h.length > 1 && "#" == h.slice(0, 1)) try {
                                    var c = t(h, s.$menu);
                                    c.is("." + i.panel) && (r = !0, s[o.parent().hasClass(i.vertical) ? "togglePanel" : "openPanel"](c))
                                } catch (t) {}
                                if (r && n.preventDefault(), !r && a && o.is("." + i.listview + " > li > a") && !o.is('[rel="external"]') && !o.is('[target="_blank"]')) {
                                    s.__valueOrFn(s.opts.onClick.setSelected, o) && s.setSelected(t(n.target).parent());
                                    var u = s.__valueOrFn(s.opts.onClick.preventDefault, o, "#" == h.slice(0, 1));
                                    u && n.preventDefault(), s.__valueOrFn(s.opts.onClick.close, o, u) && s.close()
                                }
                            })
                        },
                        _initMatchMedia: function() {
                            var t = this;
                            this._fireMatchMedia(), o.$wndw.on(n.resize, function(e) { t._fireMatchMedia() })
                        },
                        _fireMatchMedia: function() {
                            for (var t in this.mtch)
                                for (var e = window.matchMedia && window.matchMedia(t).matches ? "yes" : "no", i = 0; i < this.mtch[t].length; i++) this.mtch[t][i][e].call(this)
                        },
                        _getOriginalMenuId: function() { var t = this.$menu.attr("id"); return this.conf.clone && t && t.length && (t = i.umm(t)), t },
                        __api: function() {
                            var e = this,
                                i = {};
                            return t.each(this._api, function(t) {
                                var s = this;
                                i[s] = function() { var t = e[s].apply(e, arguments); return void 0 === t ? i : t }
                            }), i
                        },
                        __valueOrFn: function(t, e, i) { return "function" == typeof t ? t.call(e[0]) : void 0 === t && void 0 !== i ? i : t },
                        __refactorClass: function(t, e, s) { return t.filter("." + e).removeClass(e).addClass(i[s]) },
                        __findAddBack: function(t, e) { return t.find(e).add(t.filter(e)) },
                        __childAddBack: function(t, e) { return t.children(e).add(t.filter(e)) },
                        __filterListItems: function(t) { return t.not("." + i.divider).not("." + i.hidden) },
                        __filterListItemAnchors: function(t) { return this.__filterListItems(t).children("a").not("." + i.next) },
                        __transitionend: function(t, e, i) {
                            var s = !1,
                                o = function(i) { void 0 !== i && i.target != t[0] || (s || (t.unbind(n.transitionend), t.unbind(n.webkitTransitionEnd), e.call(t[0])), s = !0) };
                            t.on(n.transitionend, o), t.on(n.webkitTransitionEnd, o), setTimeout(o, 1.1 * i)
                        },
                        __getUniqueId: function() { return i.mm(t[e].uniqueId++) }
                    }, t.fn[e] = function(r, a) {
                        t[e].glbl || (o = { $wndw: t(window), $docu: t(document), $html: t("html"), $body: t("body") }, i = {}, s = {}, n = {}, t.each([i, s, n], function(t, e) { e.add = function(t) { for (var i = 0, s = (t = t.split(" ")).length; i < s; i++) e[t[i]] = e.mm(t[i]) } }), i.mm = function(t) { return "mm-" + t }, i.add("wrapper menu panels panel nopanel highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen noanimation"), i.umm = function(t) { return "mm-" == t.slice(0, 3) && (t = t.slice(3)), t }, s.mm = function(t) { return "mm-" + t }, s.add("parent child"), n.mm = function(t) { return t + ".mm" }, n.add("transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"), t[e]._c = i, t[e]._d = s, t[e]._e = n, t[e].glbl = o), r = t.extend(!0, {}, t[e].defaults, r), a = t.extend(!0, {}, t[e].configuration, a);
                        var l = t();
                        return this.each(function() {
                            var i = t(this);
                            if (!i.data(e)) {
                                var s = new t[e](i, r, a);
                                s.$menu.data(e, s.__api()), l = l.add(s.$menu)
                            }
                        }), l
                    }, t[e].i18n = function() {
                        var e = {};
                        return function(i) {
                            switch (typeof i) {
                                case "object":
                                    return t.extend(e, i), e;
                                case "string":
                                    return e[i] || i;
                                case "undefined":
                                default:
                                    return e
                            }
                        }
                    }(), t[e].support = { touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1, csstransitions: "undefined" == typeof Modernizr || void 0 === Modernizr.csstransitions || Modernizr.csstransitions, csstransforms: "undefined" == typeof Modernizr || void 0 === Modernizr.csstransforms || Modernizr.csstransforms, csstransforms3d: "undefined" == typeof Modernizr || void 0 === Modernizr.csstransforms3d || Modernizr.csstransforms3d };
                    var i, s, n, o
                }
            }(t),
            function(t) {
                var e = "mmenu",
                    i = "offCanvas";
                t.mmenu.addons[i] = {
                    setup: function() {
                        if (this.opts[i]) {
                            var e = this,
                                n = this.opts[i],
                                o = this.conf[i];
                            r = t.mmenu.glbl, this._api = t.merge(this._api, ["open", "close", "setPage"]), "object" != typeof n && (n = {}), "top" != n.position && "bottom" != n.position || (n.zposition = "front"), n = this.opts[i] = t.extend(!0, {}, t.mmenu.defaults[i], n), "string" != typeof o.pageSelector && (o.pageSelector = "> " + o.pageNodetype), r.$allMenus = (r.$allMenus || t()).add(this.$menu), this.vars.opened = !1;
                            var a = [s.offcanvas];
                            "left" != n.position && a.push(s.mm(n.position)), "back" != n.zposition && a.push(s.mm(n.zposition)), t.mmenu.support.csstransforms || a.push(s["no-csstransforms"]), t.mmenu.support.csstransforms3d || a.push(s["no-csstransforms3d"]), this.bind("initMenu:after", function() {
                                var t = this;
                                this.setPage(r.$page), this._initBlocker(), this._initWindow_offCanvas(), this.$menu.addClass(a.join(" ")).parent("." + s.wrapper).removeClass(s.wrapper), this.$menu[o.menuInsertMethod](o.menuInsertSelector);
                                var e = window.location.hash;
                                if (e) {
                                    var i = this._getOriginalMenuId();
                                    i && i == e.slice(1) && setTimeout(function() { t.open() }, 1e3)
                                }
                            }), this.bind("initExtensions:after", function() {
                                for (var t = [s.mm("widescreen"), s.mm("iconbar")], i = 0; i < t.length; i++)
                                    for (var n in this.opts.extensions)
                                        if (this.opts.extensions[n].indexOf(t[i]) > -1) {! function(i, s) { e.matchMedia(i, function() { r.$html.addClass(t[s]) }, function() { r.$html.removeClass(t[s]) }) }(n, i); break }
                            }), this.bind("open:start:sr-aria", function() { this.__sr_aria(this.$menu, "hidden", !1) }), this.bind("close:finish:sr-aria", function() { this.__sr_aria(this.$menu, "hidden", !0) }), this.bind("initMenu:after:sr-aria", function() { this.__sr_aria(this.$menu, "hidden", !0) })
                        }
                    },
                    add: function() { s = t.mmenu._c, n = t.mmenu._d, o = t.mmenu._e, s.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"), n.add("style") },
                    clickAnchor: function(t, e) { var n = this; if (this.opts[i]) { var o = this._getOriginalMenuId(); if (o && t.is('[href="#' + o + '"]')) { if (e) return !0; var a = t.closest("." + s.menu); if (a.length) { var l = a.data("mmenu"); if (l && l.close) return l.close(), n.__transitionend(a, function() { n.open() }, n.conf.transitionDuration), !0 } return this.open(), !0 } if (r.$page) return (o = r.$page.first().attr("id")) && t.is('[href="#' + o + '"]') ? (this.close(), !0) : void 0 } }
                }, t.mmenu.defaults[i] = { position: "left", zposition: "back", blockUI: !0, moveBackground: !0 }, t.mmenu.configuration[i] = { pageNodetype: "div", pageSelector: null, noPageSelector: [], wrapPageIfNeeded: !0, menuInsertMethod: "prependTo", menuInsertSelector: "body" }, t.mmenu.prototype.open = function() {
                    if (this.trigger("open:before"), !this.vars.opened) {
                        var t = this;
                        this._openSetup(), setTimeout(function() { t._openFinish() }, this.conf.openingInterval), this.trigger("open:after")
                    }
                }, t.mmenu.prototype._openSetup = function() {
                    var e = this,
                        a = this.opts[i];
                    this.closeAllOthers(), r.$page.each(function() { t(this).data(n.style, t(this).attr("style") || "") }), r.$wndw.trigger(o.resize + "-" + i, [!0]);
                    var l = [s.opened];
                    a.blockUI && l.push(s.blocking), "modal" == a.blockUI && l.push(s.modal), a.moveBackground && l.push(s.background), "left" != a.position && l.push(s.mm(this.opts[i].position)), "back" != a.zposition && l.push(s.mm(this.opts[i].zposition)), r.$html.addClass(l.join(" ")), setTimeout(function() { e.vars.opened = !0 }, this.conf.openingInterval), this.$menu.addClass(s.opened)
                }, t.mmenu.prototype._openFinish = function() {
                    var t = this;
                    this.__transitionend(r.$page.first(), function() { t.trigger("open:finish") }, this.conf.transitionDuration), this.trigger("open:start"), r.$html.addClass(s.opening)
                }, t.mmenu.prototype.close = function() {
                    if (this.trigger("close:before"), this.vars.opened) {
                        var e = this;
                        this.__transitionend(r.$page.first(), function() {
                            e.$menu.removeClass(s.opened);
                            var o = [s.opened, s.blocking, s.modal, s.background, s.mm(e.opts[i].position), s.mm(e.opts[i].zposition)];
                            r.$html.removeClass(o.join(" ")), r.$page.each(function() { t(this).attr("style", t(this).data(n.style)) }), e.vars.opened = !1, e.trigger("close:finish")
                        }, this.conf.transitionDuration), this.trigger("close:start"), r.$html.removeClass(s.opening), this.trigger("close:after")
                    }
                }, t.mmenu.prototype.closeAllOthers = function() {
                    r.$allMenus.not(this.$menu).each(function() {
                        var i = t(this).data(e);
                        i && i.close && i.close()
                    })
                }, t.mmenu.prototype.setPage = function(e) {
                    this.trigger("setPage:before", e);
                    var n = this,
                        o = this.conf[i];
                    e && e.length || (e = r.$body.find(o.pageSelector), o.noPageSelector.length && (e = e.not(o.noPageSelector.join(", "))), e.length > 1 && o.wrapPageIfNeeded && (e = e.wrapAll("<" + this.conf[i].pageNodetype + " />").parent())), e.each(function() { t(this).attr("id", t(this).attr("id") || n.__getUniqueId()) }), e.addClass(s.page + " " + s.slideout), r.$page = e, this.trigger("setPage:after", e)
                }, t.mmenu.prototype._initWindow_offCanvas = function() {
                    r.$wndw.off(o.keydown + "-" + i).on(o.keydown + "-" + i, function(t) { if (r.$html.hasClass(s.opened) && 9 == t.keyCode) return t.preventDefault(), !1 });
                    var t = 0;
                    r.$wndw.off(o.resize + "-" + i).on(o.resize + "-" + i, function(e, i) {
                        if (1 == r.$page.length && (i || r.$html.hasClass(s.opened))) {
                            var n = r.$wndw.height();
                            (i || n != t) && (t = n, r.$page.css("minHeight", n))
                        }
                    })
                }, t.mmenu.prototype._initBlocker = function() {
                    var e = this;
                    this.opts[i].blockUI && (r.$blck || (r.$blck = t('<div id="' + s.blocker + '" class="' + s.slideout + '" />')), r.$blck.appendTo(r.$body).off(o.touchstart + "-" + i + " " + o.touchmove + "-" + i).on(o.touchstart + "-" + i + " " + o.touchmove + "-" + i, function(t) { t.preventDefault(), t.stopPropagation(), r.$blck.trigger(o.mousedown + "-" + i) }).off(o.mousedown + "-" + i).on(o.mousedown + "-" + i, function(t) { t.preventDefault(), r.$html.hasClass(s.modal) || (e.closeAllOthers(), e.close()) }))
                };
                var s, n, o, r
            }(t),
            function(t) {
                var e = "scrollBugFix";
                t.mmenu.addons[e] = {
                    setup: function() {
                        var s = this.opts[e];
                        this.conf[e], o = t.mmenu.glbl, t.mmenu.support.touch && this.opts.offCanvas && this.opts.offCanvas.blockUI && ("boolean" == typeof s && (s = { fix: s }), "object" != typeof s && (s = {}), (s = this.opts[e] = t.extend(!0, {}, t.mmenu.defaults[e], s)).fix && (this.bind("open:start", function() { this.$pnls.children("." + i.opened).scrollTop(0) }), this.bind("initMenu:after", function() { this["_initWindow_" + e]() })))
                    },
                    add: function() { i = t.mmenu._c, s = t.mmenu._d, n = t.mmenu._e },
                    clickAnchor: function(t, e) {}
                }, t.mmenu.defaults[e] = { fix: !0 }, t.mmenu.prototype["_initWindow_" + e] = function() {
                    var s = this;
                    o.$docu.off(n.touchmove + "-" + e).on(n.touchmove + "-" + e, function(t) { o.$html.hasClass(i.opened) && t.preventDefault() });
                    var r = !1;
                    o.$body.off(n.touchstart + "-" + e).on(n.touchstart + "-" + e, "." + i.panels + "> ." + i.panel, function(t) { o.$html.hasClass(i.opened) && (r || (r = !0, 0 === t.currentTarget.scrollTop ? t.currentTarget.scrollTop = 1 : t.currentTarget.scrollHeight === t.currentTarget.scrollTop + t.currentTarget.offsetHeight && (t.currentTarget.scrollTop -= 1), r = !1)) }).off(n.touchmove + "-" + e).on(n.touchmove + "-" + e, "." + i.panels + "> ." + i.panel, function(e) { o.$html.hasClass(i.opened) && t(this)[0].scrollHeight > t(this).innerHeight() && e.stopPropagation() }), o.$wndw.off(n.orientationchange + "-" + e).on(n.orientationchange + "-" + e, function() { s.$pnls.children("." + i.opened).scrollTop(0).css({ "-webkit-overflow-scrolling": "auto" }).css({ "-webkit-overflow-scrolling": "touch" }) })
                };
                var i, s, n, o
            }(t),
            function(t) {
                var e = "screenReader";
                t.mmenu.addons[e] = {
                    setup: function() {
                        var n = this,
                            r = this.opts[e],
                            a = this.conf[e];
                        o = t.mmenu.glbl, "boolean" == typeof r && (r = { aria: r, text: r }), "object" != typeof r && (r = {}), (r = this.opts[e] = t.extend(!0, {}, t.mmenu.defaults[e], r)).aria && (this.bind("initAddons:after", function() { this.bind("initMenu:after", function() { this.trigger("initMenu:after:sr-aria") }), this.bind("initNavbar:after", function() { this.trigger("initNavbar:after:sr-aria", arguments[0]) }), this.bind("openPanel:start", function() { this.trigger("openPanel:start:sr-aria", arguments[0]) }), this.bind("close:start", function() { this.trigger("close:start:sr-aria") }), this.bind("close:finish", function() { this.trigger("close:finish:sr-aria") }), this.bind("open:start", function() { this.trigger("open:start:sr-aria") }), this.bind("open:finish", function() { this.trigger("open:finish:sr-aria") }) }), this.bind("updateListview", function() { this.$pnls.find("." + i.listview).children().each(function() { n.__sr_aria(t(this), "hidden", t(this).is("." + i.hidden)) }) }), this.bind("openPanel:start", function(t) {
                            var e = this.$menu.find("." + i.panel).not(t).not(t.parents("." + i.panel)),
                                s = t.add(t.find("." + i.vertical + "." + i.opened).children("." + i.panel));
                            this.__sr_aria(e, "hidden", !0), this.__sr_aria(s, "hidden", !1)
                        }), this.bind("closePanel", function(t) { this.__sr_aria(t, "hidden", !0) }), this.bind("initPanels:after", function(e) {
                            var s = e.find("." + i.prev + ", ." + i.next).each(function() { n.__sr_aria(t(this), "owns", t(this).attr("href").replace("#", "")) });
                            this.__sr_aria(s, "haspopup", !0)
                        }), this.bind("initNavbar:after", function(t) {
                            var e = t.children("." + i.navbar);
                            this.__sr_aria(e, "hidden", !t.hasClass(i.hasnavbar))
                        }), r.text && (this.bind("initlistview:after", function(t) {
                            var e = t.find("." + i.listview).find("." + i.fullsubopen).parent().children("span");
                            this.__sr_aria(e, "hidden", !0)
                        }), "parent" == this.opts.navbar.titleLink && this.bind("initNavbar:after", function(t) {
                            var e = t.children("." + i.navbar),
                                s = !!e.children("." + i.prev).length;
                            this.__sr_aria(e.children("." + i.title), "hidden", s)
                        }))), r.text && (this.bind("initAddons:after", function() { this.bind("setPage:after", function() { this.trigger("setPage:after:sr-text", arguments[0]) }) }), this.bind("initNavbar:after", function(e) {
                            var s = e.children("." + i.navbar),
                                n = s.children("." + i.title).text(),
                                o = t.mmenu.i18n(a.text.closeSubmenu);
                            n && (o += " (" + n + ")"), s.children("." + i.prev).html(this.__sr_text(o))
                        }), this.bind("initListview:after", function(e) {
                            var o = e.data(s.parent);
                            if (o && o.length) {
                                var r = o.children("." + i.next),
                                    l = r.nextAll("span, a").first().text(),
                                    h = t.mmenu.i18n(a.text[r.parent().is("." + i.vertical) ? "toggleSubmenu" : "openSubmenu"]);
                                l && (h += " (" + l + ")"), r.html(n.__sr_text(h))
                            }
                        }))
                    },
                    add: function() { i = t.mmenu._c, s = t.mmenu._d, n = t.mmenu._e, i.add("sronly") },
                    clickAnchor: function(t, e) {}
                }, t.mmenu.defaults[e] = { aria: !0, text: !0 }, t.mmenu.configuration[e] = { text: { closeMenu: "Close menu", closeSubmenu: "Close submenu", openSubmenu: "Open submenu", toggleSubmenu: "Toggle submenu" } }, t.mmenu.prototype.__sr_aria = function(t, e, i) { t.prop("aria-" + e, i)[i ? "attr" : "removeAttr"]("aria-" + e, i) }, t.mmenu.prototype.__sr_text = function(t) { return '<span class="' + i.sronly + '">' + t + "</span>" };
                var i, s, n, o
            }(t),
            function(t) {
                var e = "autoHeight";
                t.mmenu.addons[e] = {
                    setup: function() {
                        var s = this.opts[e];
                        if (this.conf[e], o = t.mmenu.glbl, "boolean" == typeof s && s && (s = { height: "auto" }), "string" == typeof s && (s = { height: s }), "object" != typeof s && (s = {}), "auto" == (s = this.opts[e] = t.extend(!0, {}, t.mmenu.defaults[e], s)).height || "highest" == s.height) {
                            this.bind("initMenu:after", function() { this.$menu.addClass(i.autoheight) });
                            var n = function(e) {
                                if (!this.opts.offCanvas || this.vars.opened) {
                                    var n = Math.max(parseInt(this.$pnls.css("top"), 10), 0) || 0,
                                        o = Math.max(parseInt(this.$pnls.css("bottom"), 10), 0) || 0,
                                        r = 0;
                                    this.$menu.addClass(i.measureheight), "auto" == s.height ? ((e = e || this.$pnls.children("." + i.opened)).is("." + i.vertical) && (e = e.parents("." + i.panel).not("." + i.vertical)), e.length || (e = this.$pnls.children("." + i.panel)), r = e.first().outerHeight()) : "highest" == s.height && this.$pnls.children().each(function() {
                                        var e = t(this);
                                        e.is("." + i.vertical) && (e = e.parents("." + i.panel).not("." + i.vertical).first()), r = Math.max(r, e.outerHeight())
                                    }), this.$menu.height(r + n + o).removeClass(i.measureheight)
                                }
                            };
                            this.opts.offCanvas && this.bind("open:start", n), "highest" == s.height && this.bind("initPanels:after", n), "auto" == s.height && (this.bind("updateListview", n), this.bind("openPanel:start", n), this.bind("closePanel", n))
                        }
                    },
                    add: function() { i = t.mmenu._c, s = t.mmenu._d, n = t.mmenu._e, i.add("autoheight measureheight"), n.add("resize") },
                    clickAnchor: function(t, e) {}
                }, t.mmenu.defaults[e] = { height: "default" };
                var i, s, n, o
            }(t),
            function(t) {
                var e = "backButton";
                t.mmenu.addons[e] = {
                    setup: function() {
                        if (this.opts.offCanvas) {
                            var s = this,
                                n = this.opts[e];
                            if (this.conf[e], o = t.mmenu.glbl, "boolean" == typeof n && (n = { close: n }), "object" != typeof n && (n = {}), (n = t.extend(!0, {}, t.mmenu.defaults[e], n)).close) {
                                var r = "#" + s.$menu.attr("id");
                                this.bind("open:finish", function(t) { location.hash != r && history.pushState(null, document.title, r) }), t(window).on("popstate", function(t) { o.$html.hasClass(i.opened) ? (t.stopPropagation(), s.close()) : location.hash == r && (t.stopPropagation(), s.open()) })
                            }
                        }
                    },
                    add: function() { return window.history && window.history.pushState ? (i = t.mmenu._c, s = t.mmenu._d, void(n = t.mmenu._e)) : void(t.mmenu.addons[e].setup = function() {}) },
                    clickAnchor: function(t, e) {}
                }, t.mmenu.defaults[e] = { close: !1 };
                var i, s, n, o
            }(t),
            function(t) {
                var e = "columns";
                t.mmenu.addons[e] = {
                    setup: function() {
                        var s = this.opts[e];
                        if (this.conf[e], o = t.mmenu.glbl, "boolean" == typeof s && (s = { add: s }), "number" == typeof s && (s = { add: !0, visible: s }), "object" != typeof s && (s = {}), "number" == typeof s.visible && (s.visible = { min: s.visible, max: s.visible }), (s = this.opts[e] = t.extend(!0, {}, t.mmenu.defaults[e], s)).add) {
                            s.visible.min = Math.max(1, Math.min(6, s.visible.min)), s.visible.max = Math.max(s.visible.min, Math.min(6, s.visible.max));
                            for (var n = this.opts.offCanvas ? this.$menu.add(o.$html) : this.$menu, r = "", a = 0; a <= s.visible.max; a++) r += " " + i.columns + "-" + a;
                            r.length && (r = r.slice(1));
                            this.bind("initMenu:after", function() { this.$menu.addClass(i.columns) }), this.bind("openPanel:start", function(t) {
                                var e = this.$pnls.children("." + i.subopened).length;
                                t && !t.hasClass(i.subopened) && e++, e = Math.min(s.visible.max, Math.max(s.visible.min, e)), n.removeClass(r).addClass(i.columns + "-" + e)
                            }), this.bind("openPanel:start", function(e) { e = e || this.$pnls.children("." + i.opened), this.$pnls.children("." + i.panel).removeClass(r).filter("." + i.subopened).add(e).slice(-s.visible.max).each(function(e) { t(this).addClass(i.columns + "-" + e) }) })
                        }
                    },
                    add: function() { i = t.mmenu._c, s = t.mmenu._d, n = t.mmenu._e, i.add("columns") },
                    clickAnchor: function(s, n) {
                        if (!this.opts[e].add) return !1;
                        if (n) {
                            var o = s.attr("href");
                            if (o.length > 1 && "#" == o.slice(0, 1)) try {
                                if (t(o, this.$menu).is("." + i.panel))
                                    for (var r = parseInt(s.closest("." + i.panel).attr("class").split(i.columns + "-")[1].split(" ")[0], 10) + 1; r > 0;) {
                                        var a = this.$pnls.children("." + i.columns + "-" + r);
                                        if (!a.length) { r = -1; break }
                                        r++, a.removeClass(i.subopened).removeClass(i.opened).removeClass(i.highest).addClass(i.hidden)
                                    }
                            } catch (t) {}
                        }
                    }
                }, t.mmenu.defaults[e] = { add: !1, visible: { min: 1, max: 3 } };
                var i, s, n, o
            }(t),
            function(t) {
                var e = "counters";
                t.mmenu.addons[e] = {
                    setup: function() {
                        var n = this,
                            r = this.opts[e];
                        if (this.conf[e], o = t.mmenu.glbl, "boolean" == typeof r && (r = { add: r, update: r }), "object" != typeof r && (r = {}), r = this.opts[e] = t.extend(!0, {}, t.mmenu.defaults[e], r), this.bind("initListview:after", function(i) { this.__refactorClass(t("em", i), this.conf.classNames[e].counter, "counter") }), r.add && this.bind("initListview:after", function(e) {
                                var n;
                                switch (r.addTo) {
                                    case "panels":
                                        n = e;
                                        break;
                                    default:
                                        n = e.filter(r.addTo)
                                }
                                n.each(function() {
                                    var e = t(this).data(s.parent);
                                    e && (e.children("em." + i.counter).length || e.prepend(t('<em class="' + i.counter + '" />')))
                                })
                            }), r.update) {
                            var a = function(e) {
                                (e = e || this.$pnls.children("." + i.panel)).each(function() {
                                    var e = t(this),
                                        o = e.data(s.parent);
                                    if (o) {
                                        var r = o.children("em." + i.counter);
                                        r.length && (e = e.children("." + i.listview)).length && r.html(n.__filterListItems(e.children()).length)
                                    }
                                })
                            };
                            this.bind("initListview:after", a), this.bind("updateListview", a)
                        }
                    },
                    add: function() { i = t.mmenu._c, s = t.mmenu._d, n = t.mmenu._e, i.add("counter search noresultsmsg") },
                    clickAnchor: function(t, e) {}
                }, t.mmenu.defaults[e] = { add: !1, addTo: "panels", count: !1 }, t.mmenu.configuration.classNames[e] = { counter: "Counter" };
                var i, s, n, o
            }(t),
            function(t) {
                var e = "dividers";
                t.mmenu.addons[e] = {
                    setup: function() {
                        var s = this,
                            r = this.opts[e];
                        if (this.conf[e], o = t.mmenu.glbl, "boolean" == typeof r && (r = { add: r, fixed: r }), "object" != typeof r && (r = {}), r = this.opts[e] = t.extend(!0, {}, t.mmenu.defaults[e], r), this.bind("initListview:after", function(t) { this.__refactorClass(t.find("li"), this.conf.classNames[e].collapsed, "collapsed") }), r.add && this.bind("initListview:after", function(e) {
                                var n;
                                switch (r.addTo) {
                                    case "panels":
                                        n = e;
                                        break;
                                    default:
                                        n = e.filter(r.addTo)
                                }
                                n.length && n.find("." + i.listview).find("." + i.divider).remove().end().each(function() {
                                    var e = "";
                                    s.__filterListItems(t(this).children()).each(function() {
                                        var s = t.trim(t(this).children("a, span").text()).slice(0, 1).toLowerCase();
                                        s != e && s.length && (e = s, t('<li class="' + i.divider + '">' + s + "</li>").insertBefore(this))
                                    })
                                })
                            }), r.collapse && this.bind("initListview:after", function(e) {
                                e.find("." + i.divider).each(function() {
                                    var e = t(this);
                                    e.nextUntil("." + i.divider, "." + i.collapsed).length && (e.children("." + i.next).length || (e.wrapInner("<span />"), e.prepend('<a href="#" class="' + i.next + " " + i.fullsubopen + '" />')))
                                })
                            }), r.fixed) {
                            this.bind("initPanels:after", function() { void 0 === this.$fixeddivider && (this.$fixeddivider = t('<ul class="' + i.listview + " " + i.fixeddivider + '"><li class="' + i.divider + '"></li></ul>').prependTo(this.$pnls).children()) });
                            var a = function(e) {
                                if (!(e = e || this.$pnls.children("." + i.opened)).is(":hidden")) {
                                    var s = e.children("." + i.listview).children("." + i.divider).not("." + i.hidden),
                                        n = e.scrollTop() || 0,
                                        o = "";
                                    s.each(function() { t(this).position().top + n < n + 1 && (o = t(this).text()) }), this.$fixeddivider.text(o), this.$pnls[o.length ? "addClass" : "removeClass"](i.hasdividers)
                                }
                            };
                            this.bind("open:start", a), this.bind("openPanel:start", a), this.bind("updateListview", a), this.bind("initPanel:after", function(t) { t.off(n.scroll + "-" + e + " " + n.touchmove + "-" + e).on(n.scroll + "-" + e + " " + n.touchmove + "-" + e, function(e) { a.call(s, t) }) })
                        }
                    },
                    add: function() { i = t.mmenu._c, s = t.mmenu._d, n = t.mmenu._e, i.add("collapsed uncollapsed fixeddivider hasdividers"), n.add("scroll") },
                    clickAnchor: function(t, s) { if (this.opts[e].collapse && s) { var n = t.parent(); if (n.is("." + i.divider)) { var o = n.nextUntil("." + i.divider, "." + i.collapsed); return n.toggleClass(i.opened), o[n.hasClass(i.opened) ? "addClass" : "removeClass"](i.uncollapsed), !0 } } return !1 }
                }, t.mmenu.defaults[e] = { add: !1, addTo: "panels", fixed: !1, collapse: !1 }, t.mmenu.configuration.classNames[e] = { collapsed: "Collapsed" };
                var i, s, n, o
            }(t),
            function(t) {
                function e(t, e, i) { return t < e && (t = e), t > i && (t = i), t }
                var i = "drag";
                t.mmenu.addons[i] = {
                    setup: function() {
                        if (this.opts.offCanvas) {
                            var o = this.opts[i],
                                a = this.conf[i];
                            r = t.mmenu.glbl, "boolean" == typeof o && (o = { menu: o, panels: o }), "object" != typeof o && (o = {}), "boolean" == typeof o.menu && (o.menu = { open: o.menu }), "object" != typeof o.menu && (o.menu = {}), "boolean" == typeof o.panels && (o.panels = { close: o.panels }), "object" != typeof o.panels && (o.panels = {}), (o = this.opts[i] = t.extend(!0, {}, t.mmenu.defaults[i], o)).menu.open && this.bind("setPage:after", function() {
                                (function(n, o, r) {
                                    var a, l, h, c = this,
                                        u = { events: "panleft panright", typeLower: "x", typeUpper: "X", open_dir: "right", close_dir: "left", negative: !1 },
                                        d = "width",
                                        p = u.open_dir,
                                        f = function(t) { t <= n.maxStartPos && (g = 1) },
                                        m = function() { return t("." + s.slideout) },
                                        g = 0,
                                        v = 0,
                                        _ = 0;
                                    switch (this.opts.offCanvas.position) {
                                        case "top":
                                        case "bottom":
                                            u.events = "panup pandown", u.typeLower = "y", u.typeUpper = "Y", d = "height"
                                    }
                                    switch (this.opts.offCanvas.position) {
                                        case "right":
                                        case "bottom":
                                            u.negative = !0, f = function(t) { t >= r.$wndw[d]() - n.maxStartPos && (g = 1) }
                                    }
                                    switch (this.opts.offCanvas.position) {
                                        case "left":
                                            break;
                                        case "right":
                                            u.open_dir = "left", u.close_dir = "right";
                                            break;
                                        case "top":
                                            u.open_dir = "down", u.close_dir = "up";
                                            break;
                                        case "bottom":
                                            u.open_dir = "up", u.close_dir = "down"
                                    }
                                    switch (this.opts.offCanvas.zposition) {
                                        case "front":
                                            m = function() { return this.$menu }
                                    }
                                    var b = this.__valueOrFn(n.node, this.$menu, r.$page);
                                    "string" == typeof b && (b = t(b));
                                    var y = new Hammer(b[0], this.opts[i].vendors.hammer);
                                    y.on("panstart", function(t) { f(t.center[u.typeLower]), r.$slideOutNodes = m(), p = u.open_dir }), y.on(u.events + " panend", function(t) { g > 0 && t.preventDefault() }), y.on(u.events, function(t) {
                                        if (a = t["delta" + u.typeUpper], u.negative && (a = -a), a != v && (p = a >= v ? u.open_dir : u.close_dir), (v = a) > n.threshold && 1 == g) {
                                            if (r.$html.hasClass(s.opened)) return;
                                            g = 2, c._openSetup(), c.trigger("open:start"), r.$html.addClass(s.dragging), _ = e(r.$wndw[d]() * o[d].perc, o[d].min, o[d].max)
                                        }
                                        2 == g && (l = e(v, 10, _) - ("front" == c.opts.offCanvas.zposition ? _ : 0), u.negative && (l = -l), h = "translate" + u.typeUpper + "(" + l + "px )", r.$slideOutNodes.css({ "-webkit-transform": "-webkit-" + h, transform: h }))
                                    }), y.on("panend", function(t) { 2 == g && (r.$html.removeClass(s.dragging), r.$slideOutNodes.css("transform", ""), c[p == u.open_dir ? "_openFinish" : "close"]()), g = 0 })
                                }).call(this, o.menu, a.menu, r)
                            }), o.panels.close && this.bind("initPanel:after", function(t) {
                                (function(t, e, o, r) {
                                    var a = this,
                                        l = t.data(n.parent);
                                    if (l) {
                                        l = l.closest("." + s.panel);
                                        var h = null;
                                        new Hammer(t[0], a.opts[i].vendors.hammer).on("panright", function(t) { h || (a.openPanel(l), h = setTimeout(function() { clearTimeout(h), h = null }, a.conf.openingInterval + a.conf.transitionDuration)) })
                                    }
                                }).call(this, t, o.panels, a.panels, r)
                            })
                        }
                    },
                    add: function() { return "function" != typeof Hammer || Hammer.VERSION < 2 ? (t.mmenu.addons[i].add = function() {}, void(t.mmenu.addons[i].setup = function() {})) : (s = t.mmenu._c, n = t.mmenu._d, o = t.mmenu._e, void s.add("dragging")) },
                    clickAnchor: function(t, e) {}
                }, t.mmenu.defaults[i] = { menu: { open: !1, maxStartPos: 100, threshold: 50 }, panels: { close: !1 }, vendors: { hammer: {} } }, t.mmenu.configuration[i] = { menu: { width: { perc: .8, min: 140, max: 440 }, height: { perc: .8, min: 140, max: 880 } }, panels: {} };
                var s, n, o, r
            }(t),
            function(t) {
                var e = "dropdown";
                t.mmenu.addons[e] = {
                    setup: function() {
                        if (this.opts.offCanvas) {
                            var r = this,
                                a = this.opts[e],
                                l = this.conf[e];
                            if (o = t.mmenu.glbl, "boolean" == typeof a && a && (a = { drop: a }), "object" != typeof a && (a = {}), "string" == typeof a.position && (a.position = { of: a.position }), (a = this.opts[e] = t.extend(!0, {}, t.mmenu.defaults[e], a)).drop) {
                                var h;
                                this.bind("initMenu:after", function() {
                                    if (this.$menu.addClass(i.dropdown), a.tip && this.$menu.addClass(i.tip), "string" != typeof a.position.of) {
                                        var s = this._getOriginalMenuId();
                                        s && s.length && (a.position.of = '[href="#' + s + '"]')
                                    }
                                    "string" == typeof a.position.of && (h = t(a.position.of), a.event = a.event.split(" "), 1 == a.event.length && (a.event[1] = a.event[0]), "hover" == a.event[0] && h.on(n.mouseenter + "-" + e, function() { r.open() }), "hover" == a.event[1] && this.$menu.on(n.mouseleave + "-" + e, function() { r.close() }))
                                }), this.bind("open:start", function() { this.$menu.data(s.style, this.$menu.attr("style") || ""), o.$html.addClass(i.dropdown) }), this.bind("close:finish", function() { this.$menu.attr("style", this.$menu.data(s.style)), o.$html.removeClass(i.dropdown) });
                                var c = function(t, e) {
                                        var s = e[0],
                                            n = e[1],
                                            r = "x" == t ? "scrollLeft" : "scrollTop",
                                            c = "x" == t ? "outerWidth" : "outerHeight",
                                            u = "x" == t ? "left" : "top",
                                            d = "x" == t ? "right" : "bottom",
                                            p = "x" == t ? "width" : "height",
                                            f = "x" == t ? "maxWidth" : "maxHeight",
                                            m = null,
                                            g = o.$wndw[r](),
                                            v = h.offset()[u] -= g,
                                            _ = v + h[c](),
                                            b = o.$wndw[p](),
                                            y = l.offset.button[t] + l.offset.viewport[t];
                                        if (a.position[t]) switch (a.position[t]) {
                                            case "left":
                                            case "bottom":
                                                m = "after";
                                                break;
                                            case "right":
                                            case "top":
                                                m = "before"
                                        }
                                        null === m && (m = v + (_ - v) / 2 < b / 2 ? "after" : "before");
                                        var w, x;
                                        return "after" == m ? (w = "x" == t ? v : _, x = b - (w + y), s[u] = w + l.offset.button[t], s[d] = "auto", n.push(i["x" == t ? "tipleft" : "tiptop"])) : (w = "x" == t ? _ : v, x = w - y, s[d] = "calc( 100% - " + (w - l.offset.button[t]) + "px )", s[u] = "auto", n.push(i["x" == t ? "tipright" : "tipbottom"])), s[f] = Math.min(l[p].max, x), [s, n]
                                    },
                                    u = function(t) {
                                        if (this.vars.opened) {
                                            this.$menu.attr("style", this.$menu.data(s.style));
                                            var e = [{},
                                                []
                                            ];
                                            e = c.call(this, "y", e), e = c.call(this, "x", e), this.$menu.css(e[0]), a.tip && this.$menu.removeClass(i.tipleft + " " + i.tipright + " " + i.tiptop + " " + i.tipbottom).addClass(e[1].join(" "))
                                        }
                                    };
                                this.bind("open:start", u), o.$wndw.on(n.resize + "-" + e, function(t) { u.call(r) }), this.opts.offCanvas.blockUI || o.$wndw.on(n.scroll + "-" + e, function(t) { u.call(r) })
                            }
                        }
                    },
                    add: function() { i = t.mmenu._c, s = t.mmenu._d, n = t.mmenu._e, i.add("dropdown tip tipleft tipright tiptop tipbottom"), n.add("mouseenter mouseleave resize scroll") },
                    clickAnchor: function(t, e) {}
                }, t.mmenu.defaults[e] = { drop: !1, event: "click", position: {}, tip: !0 }, t.mmenu.configuration[e] = { offset: { button: { x: -10, y: 10 }, viewport: { x: 20, y: 20 } }, height: { max: 880 }, width: { max: 440 } };
                var i, s, n, o
            }(t),
            function(t) {
                var e = "fixedElements";
                t.mmenu.addons[e] = {
                    setup: function() {
                        if (this.opts.offCanvas) {
                            var i = this.opts[e],
                                s = this.conf[e];
                            o = t.mmenu.glbl, i = this.opts[e] = t.extend(!0, {}, t.mmenu.defaults[e], i);
                            this.bind("setPage:after", function(i) {
                                var n = this.conf.classNames[e].fixed,
                                    r = i.find("." + n);
                                this.__refactorClass(r, n, "slideout"), r[s.elemInsertMethod](s.elemInsertSelector);
                                var a = this.conf.classNames[e].sticky,
                                    l = i.find("." + a);
                                this.__refactorClass(l, a, "sticky"), l.length && (this.bind("open:before", function() {
                                    var e = o.$wndw.scrollTop();
                                    l.each(function() { t(this).css("top", parseInt(t(this).css("top"), 10) + e) })
                                }), this.bind("close:finish", function() { l.css("top", "") }))
                            })
                        }
                    },
                    add: function() { i = t.mmenu._c, s = t.mmenu._d, n = t.mmenu._e, i.add("sticky") },
                    clickAnchor: function(t, e) {}
                }, t.mmenu.configuration[e] = { elemInsertMethod: "appendTo", elemInsertSelector: "body" }, t.mmenu.configuration.classNames[e] = { fixed: "Fixed", sticky: "Sticky" };
                var i, s, n, o
            }(t),
            function(t) {
                var e = "iconPanels";
                t.mmenu.addons[e] = {
                    setup: function() {
                        var s = this,
                            n = this.opts[e];
                        if (this.conf[e], o = t.mmenu.glbl, "boolean" == typeof n && (n = { add: n }), "number" == typeof n && (n = { add: !0, visible: n }), "object" != typeof n && (n = {}), n = this.opts[e] = t.extend(!0, {}, t.mmenu.defaults[e], n), n.visible++, n.add) {
                            for (var r = "", a = 0; a <= n.visible; a++) r += " " + i.iconpanel + "-" + a;
                            r.length && (r = r.slice(1));
                            var l = function(e) { e.hasClass(i.vertical) || s.$pnls.children("." + i.panel).removeClass(r).filter("." + i.subopened).removeClass(i.hidden).add(e).not("." + i.vertical).slice(-n.visible).each(function(e) { t(this).addClass(i.iconpanel + "-" + e) }) };
                            this.bind("initMenu:after", function() { this.$menu.addClass(i.iconpanel) }), this.bind("openPanel:start", l), this.bind("initPanels:after", function(t) { l.call(s, s.$pnls.children("." + i.opened)) }), this.bind("initListview:after", function(t) { t.hasClass(i.vertical) || t.children("." + i.subblocker).length || t.prepend('<a href="#' + t.closest("." + i.panel).attr("id") + '" class="' + i.subblocker + '" />') })
                        }
                    },
                    add: function() { i = t.mmenu._c, s = t.mmenu._d, n = t.mmenu._e, i.add("iconpanel subblocker") },
                    clickAnchor: function(t, e) {}
                }, t.mmenu.defaults[e] = { add: !1, visible: 3 };
                var i, s, n, o
            }(t),
            function(t) {
                function e(e, i) {
                    e = e || this.$pnls.children("." + n.opened);
                    var s = t(),
                        o = this.$menu.children("." + n.mm("navbars-top") + ", ." + n.mm("navbars-bottom")).children("." + n.navbar);
                    o.find(l).filter(":focus").length || ("default" == i && ((s = e.children("." + n.listview).find("a[href]").not("." + n.hidden)).length || (s = e.find(l).not("." + n.hidden)), s.length || (s = o.find(l).not("." + n.hidden))), s.length || (s = this.$menu.children("." + n.tabstart)), s.first().focus())
                }

                function i(t) {
                    t || (t = this.$pnls.children("." + n.opened));
                    this.$pnls.children("." + n.panel).not(t).find(l).attr("tabindex", -1), t.find(l).attr("tabindex", 0), t.find("." + n.mm("toggle") + ", ." + n.mm("check")).attr("tabindex", -1), t.children("." + n.navbar).children("." + n.title).attr("tabindex", -1)
                }
                var s = "keyboardNavigation";
                t.mmenu.addons[s] = {
                    setup: function() {
                        if (!t.mmenu.support.touch) {
                            var o = this.opts[s];
                            if (this.conf[s], a = t.mmenu.glbl, "boolean" != typeof o && "string" != typeof o || (o = { enable: o }), "object" != typeof o && (o = {}), (o = this.opts[s] = t.extend(!0, {}, t.mmenu.defaults[s], o)).enable) {
                                var r = t('<button class="' + n.tabstart + '" tabindex="0" type="button" />'),
                                    l = t('<button class="' + n.tabend + '" tabindex="0" type="button" />');
                                this.bind("initMenu:after", function() { o.enhance && this.$menu.addClass(n.keyboardfocus), this["_initWindow_" + s](o.enhance) }), this.bind("initOpened:before", function() { this.$menu.prepend(r).append(l).children("." + n.mm("navbars-top") + ", ." + n.mm("navbars-bottom")).children("." + n.navbar).children("a." + n.title).attr("tabindex", -1) }), this.bind("open:start", function() { i.call(this) }), this.bind("open:finish", function() { e.call(this, null, o.enable) }), this.bind("openPanel:start", function(t) { i.call(this, t) }), this.bind("openPanel:finish", function(t) { e.call(this, t, o.enable) }), this.bind("initOpened:after", function() { this.__sr_aria(this.$menu.children("." + n.mm("tabstart") + ", ." + n.mm("tabend")), "hidden", !0) })
                            }
                        }
                    },
                    add: function() { n = t.mmenu._c, o = t.mmenu._d, r = t.mmenu._e, n.add("tabstart tabend keyboardfocus"), r.add("focusin keydown") },
                    clickAnchor: function(t, e) {}
                }, t.mmenu.defaults[s] = { enable: !1, enhance: !1 }, t.mmenu.configuration[s] = {}, t.mmenu.prototype["_initWindow_" + s] = function(e) {
                    a.$wndw.off(r.keydown + "-offCanvas"), a.$wndw.off(r.focusin + "-" + s).on(r.focusin + "-" + s, function(e) {
                        if (a.$html.hasClass(n.opened)) {
                            var i = t(e.target);
                            i.is("." + n.tabend) && i.parent().find("." + n.tabstart).focus()
                        }
                    }), a.$wndw.off(r.keydown + "-" + s).on(r.keydown + "-" + s, function(e) {
                        var i = t(e.target),
                            s = i.closest("." + n.menu);
                        if (s.length)
                            if (s.data("mmenu"), i.is("input, textarea"));
                            else switch (e.keyCode) {
                                case 13:
                                    (i.is(".mm-toggle") || i.is(".mm-check")) && i.trigger(r.click);
                                    break;
                                case 32:
                                case 37:
                                case 38:
                                case 39:
                                case 40:
                                    e.preventDefault()
                            }
                    }), e && a.$wndw.off(r.keydown + "-" + s).on(r.keydown + "-" + s, function(e) {
                        var i = t(e.target),
                            s = i.closest("." + n.menu);
                        if (s.length) {
                            var r = s.data("mmenu");
                            if (i.is("input, textarea")) switch (e.keyCode) {
                                case 27:
                                    i.val("")
                            } else switch (e.keyCode) {
                                case 8:
                                    var a = i.closest("." + n.panel).data(o.parent);
                                    a && a.length && r.openPanel(a.closest("." + n.panel));
                                    break;
                                case 27:
                                    s.hasClass(n.offcanvas) && r.close()
                            }
                        }
                    })
                };
                var n, o, r, a, l = "input, select, textarea, button, label, a[href]"
            }(t),
            function(t) {
                var e = "lazySubmenus";
                t.mmenu.addons[e] = {
                    setup: function() {
                        var s = this.opts[e];
                        this.conf[e], o = t.mmenu.glbl, "boolean" == typeof s && (s = { load: s }), "object" != typeof s && (s = {}), (s = this.opts[e] = t.extend(!0, {}, t.mmenu.defaults[e], s)).load && (this.bind("initMenu:after", function() { this.$pnls.find("li").children(this.conf.panelNodetype).not("." + i.inset).not("." + i.nolistview).not("." + i.nopanel).addClass(i.lazysubmenu + " " + i.nolistview + " " + i.nopanel) }), this.bind("initPanels:before", function(t) { t = t || this.$pnls.children(this.conf.panelNodetype), this.__findAddBack(t, "." + i.lazysubmenu).not("." + i.lazysubmenu + " ." + i.lazysubmenu).removeClass(i.lazysubmenu + " " + i.nolistview + " " + i.nopanel) }), this.bind("initOpened:before", function() {
                            var t = this.$pnls.find("." + this.conf.classNames.selected).parents("." + i.lazysubmenu);
                            t.length && (t.removeClass(i.lazysubmenu + " " + i.nolistview + " " + i.nopanel), this.initPanels(t.last()))
                        }), this.bind("openPanel:before", function(t) {
                            var e = this.__findAddBack(t, "." + i.lazysubmenu).not("." + i.lazysubmenu + " ." + i.lazysubmenu);
                            e.length && this.initPanels(e)
                        }))
                    },
                    add: function() { i = t.mmenu._c, s = t.mmenu._d, n = t.mmenu._e, i.add("lazysubmenu"), s.add("lazysubmenu") },
                    clickAnchor: function(t, e) {}
                }, t.mmenu.defaults[e] = { load: !1 }, t.mmenu.configuration[e] = {};
                var i, s, n, o
            }(t),
            function(t) {
                var e = "navbars";
                t.mmenu.addons[e] = {
                    setup: function() {
                        var s = this,
                            n = this.opts[e],
                            r = this.conf[e];
                        if (o = t.mmenu.glbl, void 0 !== n) {
                            n instanceof Array || (n = [n]);
                            var a = {},
                                l = {};
                            n.length && (t.each(n, function(o) {
                                var h = n[o];
                                "boolean" == typeof h && h && (h = {}), "object" != typeof h && (h = {}), void 0 === h.content && (h.content = ["prev", "title"]), h.content instanceof Array || (h.content = [h.content]), h = t.extend(!0, {}, s.opts.navbar, h);
                                var c = t('<div class="' + i.navbar + '" />'),
                                    u = h.height;
                                "number" != typeof u && (u = 1), u = Math.min(4, Math.max(1, u)), c.addClass(i.navbar + "-size-" + u);
                                var d = h.position;
                                "bottom" != d && (d = "top"), a[d] || (a[d] = 0), a[d] += u, l[d] || (l[d] = t('<div class="' + i.navbars + "-" + d + '" />')), l[d].append(c);
                                for (var p = 0, f = 0, m = h.content.length; f < m; f++) {
                                    var g = t.mmenu.addons[e][h.content[f]] || !1;
                                    g ? p += g.call(s, c, h, r) : ((g = h.content[f]) instanceof t || (g = t(h.content[f])), c.append(g))
                                }(p += Math.ceil(c.children().not("." + i.btn).length / u)) > 1 && c.addClass(i.navbar + "-content-" + p), c.children("." + i.btn).length && c.addClass(i.hasbtns)
                            }), this.bind("initMenu:after", function() { for (var t in a) this.$menu.addClass(i.hasnavbar + "-" + t + "-" + a[t]), this.$menu["bottom" == t ? "append" : "prepend"](l[t]) }))
                        }
                    },
                    add: function() { i = t.mmenu._c, s = t.mmenu._d, n = t.mmenu._e, i.add("navbars close hasbtns") },
                    clickAnchor: function(t, e) {}
                }, t.mmenu.configuration[e] = { breadcrumbSeparator: "/" }, t.mmenu.configuration.classNames[e] = {};
                var i, s, n, o
            }(t),
            function(t) {
                t.mmenu.addons.navbars.breadcrumbs = function(e, i, s) {
                    var n = this,
                        o = t.mmenu._c,
                        r = t.mmenu._d;
                    o.add("breadcrumbs separator");
                    var a = t('<span class="' + o.breadcrumbs + '" />').appendTo(e);
                    return this.bind("initNavbar:after", function(e) {
                        e.removeClass(o.hasnavbar);
                        for (var i = [], n = t('<span class="' + o.breadcrumbs + '"></span>'), a = e, l = !0; a && a.length;) {
                            if (a.is("." + o.panel) || (a = a.closest("." + o.panel)), !a.hasClass(o.vertical)) {
                                var h = a.children("." + o.navbar).children("." + o.title).text();
                                i.unshift(l ? "<span>" + h + "</span>" : '<a href="#' + a.attr("id") + '">' + h + "</a>"), l = !1
                            }
                            a = a.data(r.parent)
                        }
                        n.append(i.join('<span class="' + o.separator + '">' + s.breadcrumbSeparator + "</span>")).appendTo(e.children("." + o.navbar))
                    }), this.bind("openPanel:start", function(t) { a.html(t.children("." + o.navbar).children("." + o.breadcrumbs).html() || "") }), this.bind("initNavbar:after:sr-aria", function(e) { e.children("." + o.navbar).children("." + o.breadcrumbs).children("a").each(function() { n.__sr_aria(t(this), "owns", t(this).attr("href").slice(1)) }) }), 0
                }
            }(t),
            function(t) {
                t.mmenu.addons.navbars.close = function(e, i) {
                    var s = t.mmenu._c,
                        n = (t.mmenu.glbl, t('<a class="' + s.close + " " + s.btn + '" href="#" />').appendTo(e));
                    return this.bind("setPage:after", function(t) { n.attr("href", "#" + t.attr("id")) }), this.bind("setPage:after:sr-text", function(e) { n.html(this.__sr_text(t.mmenu.i18n(this.conf.screenReader.text.closeMenu))), this.__sr_aria(n, "owns", n.attr("href").slice(1)) }), -1
                }
            }(t),
            function(t) {
                t.mmenu.addons.navbars.next = function(e, i) {
                    var s, n, o, r = t.mmenu._c,
                        a = t('<a class="' + r.next + " " + r.btn + '" href="#" />').appendTo(e);
                    return this.bind("openPanel:start", function(t) { s = t.find("." + this.conf.classNames.navbars.panelNext), n = s.attr("href"), o = s.html(), n ? a.attr("href", n) : a.removeAttr("href"), a[n || o ? "removeClass" : "addClass"](r.hidden), a.html(o) }), this.bind("openPanel:start:sr-aria", function(t) { this.__sr_aria(a, "hidden", a.hasClass(r.hidden)), this.__sr_aria(a, "owns", (a.attr("href") || "").slice(1)) }), -1
                }, t.mmenu.configuration.classNames.navbars.panelNext = "Next"
            }(t),
            function(t) {
                t.mmenu.addons.navbars.prev = function(e, i) {
                    var s = t.mmenu._c,
                        n = t('<a class="' + s.prev + " " + s.btn + '" href="#" />').appendTo(e);
                    this.bind("initNavbar:after", function(t) { t.removeClass(s.hasnavbar) });
                    var o, r, a;
                    return this.bind("openPanel:start", function(t) { t.hasClass(s.vertical) || ((o = t.find("." + this.conf.classNames.navbars.panelPrev)).length || (o = t.children("." + s.navbar).children("." + s.prev)), r = o.attr("href"), a = o.html(), r ? n.attr("href", r) : n.removeAttr("href"), n[r || a ? "removeClass" : "addClass"](s.hidden), n.html(a)) }), this.bind("initNavbar:after:sr-aria", function(t) {
                        var e = t.children("." + s.navbar);
                        this.__sr_aria(e, "hidden", !0)
                    }), this.bind("openPanel:start:sr-aria", function(t) { this.__sr_aria(n, "hidden", n.hasClass(s.hidden)), this.__sr_aria(n, "owns", (n.attr("href") || "").slice(1)) }), -1
                }, t.mmenu.configuration.classNames.navbars.panelPrev = "Prev"
            }(t),
            function(t) {
                t.mmenu.addons.navbars.searchfield = function(e, i) {
                    var s = t.mmenu._c,
                        n = t('<div class="' + s.search + '" />').appendTo(e);
                    return "object" != typeof this.opts.searchfield && (this.opts.searchfield = {}), this.opts.searchfield.add = !0, this.opts.searchfield.addTo = n, 0
                }
            }(t),
            function(t) {
                t.mmenu.addons.navbars.title = function(e, i) {
                    var s, n, o, r = t.mmenu._c,
                        a = t('<a class="' + r.title + '" />').appendTo(e);
                    this.bind("openPanel:start", function(t) { t.hasClass(r.vertical) || ((o = t.find("." + this.conf.classNames.navbars.panelTitle)).length || (o = t.children("." + r.navbar).children("." + r.title)), s = o.attr("href"), n = o.html() || i.title, s ? a.attr("href", s) : a.removeAttr("href"), a[s || n ? "removeClass" : "addClass"](r.hidden), a.html(n)) });
                    var l;
                    return this.bind("openPanel:start:sr-aria", function(t) { if (this.opts.screenReader.text && (l || (l = this.$menu.children("." + r.navbars + "-top, ." + r.navbars + "-bottom").children("." + r.navbar).children("." + r.prev)), l.length)) { var e = !0; "parent" == this.opts.navbar.titleLink && (e = !l.hasClass(r.hidden)), this.__sr_aria(a, "hidden", e) } }), 0
                }, t.mmenu.configuration.classNames.navbars.panelTitle = "Title"
            }(t),
            function(t) {
                function e(t) { l && l.length && l.is(":visible") && a.$html.add(a.$body).animate({ scrollTop: l.offset().top + t }), l = !1 }

                function i(t) { try { return !("#" == t || "#" != t.slice(0, 1) || !a.$page.find(t).length) } catch (t) { return !1 } }
                var s = "pageScroll";
                t.mmenu.addons[s] = {
                    setup: function() {
                        var o = this,
                            l = this.opts[s],
                            h = this.conf[s];
                        if (a = t.mmenu.glbl, "boolean" == typeof l && (l = { scroll: l }), (l = this.opts[s] = t.extend(!0, {}, t.mmenu.defaults[s], l)).scroll && this.bind("close:finish", function() { e(h.scrollOffset) }), l.update) {
                            var c = [],
                                u = [];
                            (o = this).bind("initListview:after", function(e) {
                                o.__filterListItemAnchors(e.find("." + n.listview).children("li")).each(function() {
                                    var e = t(this).attr("href");
                                    i(e) && c.push(e)
                                }), u = c.reverse()
                            });
                            var d = -1;
                            a.$wndw.on(r.scroll + "-" + s, function(e) {
                                for (var i = a.$wndw.scrollTop(), s = 0; s < u.length; s++)
                                    if (t(u[s]).offset().top < i + h.updateOffset) { d !== s && (d = s, o.setSelected(o.__filterListItemAnchors(o.$pnls.children("." + n.opened).find("." + n.listview).children("li")).filter('[href="' + u[s] + '"]').parent())); break }
                            })
                        }
                    },
                    add: function() { n = t.mmenu._c, o = t.mmenu._d, r = t.mmenu._e },
                    clickAnchor: function(o, r) {
                        if (l = !1, r && this.opts[s].scroll && this.opts.offCanvas && a.$page && a.$page.length) {
                            var h = o.attr("href");
                            i(h) && (l = t(h), a.$html.hasClass(n.mm("widescreen")) && e(this.conf[s].scrollOffset))
                        }
                    }
                }, t.mmenu.defaults[s] = { scroll: !1, update: !1 }, t.mmenu.configuration[s] = { scrollOffset: 0, updateOffset: 50 };
                var n, o, r, a, l = !1
            }(t),
            function(t) {
                t.mmenu.addons.rtl = {
                    setup: function() {
                        var i = this.opts.rtl;
                        this.conf.rtl, n = t.mmenu.glbl, "object" != typeof i && (i = { use: i }), "boolean" != typeof(i = this.opts.rtl = t.extend(!0, {}, t.mmenu.defaults.rtl, i)).use && (i.use = "rtl" == (n.$html.attr("dir") || "").toLowerCase()), i.use && this.bind("initMenu:after", function() { this.$menu.addClass(e.rtl) })
                    },
                    add: function() { e = t.mmenu._c, i = t.mmenu._d, s = t.mmenu._e, e.add("rtl") },
                    clickAnchor: function(t, e) {}
                }, t.mmenu.defaults.rtl = { use: "detect" };
                var e, i, s, n
            }(t),
            function(t) {
                var e = "searchfield";
                t.mmenu.addons[e] = {
                    setup: function() {
                        var r = this,
                            a = this.opts[e],
                            l = this.conf[e];
                        o = t.mmenu.glbl, "boolean" == typeof a && (a = { add: a }), "object" != typeof a && (a = {}), "boolean" == typeof a.resultsPanel && (a.resultsPanel = { add: a.resultsPanel }), a = this.opts[e] = t.extend(!0, {}, t.mmenu.defaults[e], a), l = this.conf[e] = t.extend(!0, {}, t.mmenu.configuration[e], l), this.bind("close:start", function() { this.$menu.find("." + i.search).find("input").blur() }), this.bind("initPanels:after", function(o) {
                            if (a.add) {
                                var h;
                                switch (a.addTo) {
                                    case "panels":
                                        h = o;
                                        break;
                                    default:
                                        h = this.$menu.find(a.addTo)
                                }
                                if (h.each(function() {
                                        var e = t(this);
                                        if (!e.is("." + i.panel) || !e.is("." + i.vertical)) {
                                            if (!e.children("." + i.search).length) {
                                                var s = r.__valueOrFn(l.clear, e),
                                                    o = r.__valueOrFn(l.form, e),
                                                    h = r.__valueOrFn(l.input, e),
                                                    c = r.__valueOrFn(l.submit, e),
                                                    u = t("<" + (o ? "form" : "div") + ' class="' + i.search + '" />'),
                                                    d = t('<input placeholder="' + t.mmenu.i18n(a.placeholder) + '" type="text" autocomplete="off" />');
                                                u.append(d);
                                                var p;
                                                if (h)
                                                    for (p in h) d.attr(p, h[p]);
                                                if (s && t('<a class="' + i.btn + " " + i.clear + '" href="#" />').appendTo(u).on(n.click + "-searchfield", function(t) { t.preventDefault(), d.val("").trigger(n.keyup + "-searchfield") }), o) {
                                                    for (p in o) u.attr(p, o[p]);
                                                    c && !s && t('<a class="' + i.btn + " " + i.next + '" href="#" />').appendTo(u).on(n.click + "-searchfield", function(t) { t.preventDefault(), u.submit() })
                                                }
                                                e.hasClass(i.search) ? e.replaceWith(u) : e.prepend(u).addClass(i.hassearch)
                                            }
                                            if (a.noResults) {
                                                if (e.closest("." + i.panel).length || (e = r.$pnls.children("." + i.panel).first()), !e.children("." + i.noresultsmsg).length) {
                                                    var f = e.children("." + i.listview).first();
                                                    t('<div class="' + i.noresultsmsg + " " + i.hidden + '" />').append(t.mmenu.i18n(a.noResults))[f.length ? "insertAfter" : "prependTo"](f.length ? f : e)
                                                }
                                            }
                                        }
                                    }), a.search) {
                                    if (a.resultsPanel.add) {
                                        a.showSubPanels = !1;
                                        var c = this.$pnls.children("." + i.resultspanel);
                                        c.length || (c = t('<div class="' + i.resultspanel + " " + i.noanimation + " " + i.hidden + '" />').appendTo(this.$pnls).append('<div class="' + i.navbar + " " + i.hidden + '"><a class="' + i.title + '">' + t.mmenu.i18n(a.resultsPanel.title) + "</a></div>").append('<ul class="' + i.listview + '" />').append(this.$pnls.find("." + i.noresultsmsg).first().clone()), this._initPanel(c))
                                    }
                                    this.$menu.find("." + i.search).each(function() {
                                        var o, l, h = t(this),
                                            u = h.closest("." + i.panel).length;
                                        u ? (o = h.closest("." + i.panel), l = o) : (o = t("." + i.panel, r.pnls), l = r.$menu), a.resultsPanel.add && (o = o.not(c));
                                        var d = h.children("input"),
                                            p = r.__findAddBack(o, "." + i.listview).children("li"),
                                            f = p.filter("." + i.divider),
                                            m = r.__filterListItems(p),
                                            g = "",
                                            v = function() {
                                                var e = d.val().toLowerCase();
                                                if (e != g) {
                                                    if (g = e, a.resultsPanel.add && c.children("." + i.listview).empty(), o.scrollTop(0), m.add(f).addClass(i.hidden).find("." + i.fullsubopensearch).removeClass(i.fullsubopen + " " + i.fullsubopensearch), m.each(function() {
                                                            var e = t(this),
                                                                n = "a";
                                                            (a.showTextItems || a.showSubPanels && e.find("." + i.next)) && (n = "a, span");
                                                            (e.data(s.searchtext) || e.children(n).not("." + i.next).text()).toLowerCase().indexOf(g) > -1 && e.add(e.prevAll("." + i.divider).first()).removeClass(i.hidden)
                                                        }), a.showSubPanels && o.each(function(e) {
                                                            var n = t(this);
                                                            r.__filterListItems(n.find("." + i.listview).children()).each(function() {
                                                                var e = t(this),
                                                                    n = e.data(s.child);
                                                                e.removeClass(i.nosubresults), n && n.find("." + i.listview).children().removeClass(i.hidden)
                                                            })
                                                        }), a.resultsPanel.add)
                                                        if ("" === g) this.closeAllPanels(), this.openPanel(this.$pnls.children("." + i.subopened).last());
                                                        else {
                                                            var n = t();
                                                            o.each(function() {
                                                                var e = r.__filterListItems(t(this).find("." + i.listview).children()).not("." + i.hidden).clone(!0);
                                                                e.length && (a.resultsPanel.dividers && (n = n.add('<li class="' + i.divider + '">' + t(this).children("." + i.navbar).children("." + i.title).text() + "</li>")), e.children("." + i.mm("toggle") + ", ." + i.mm("check")).remove(), n = n.add(e))
                                                            }), n.find("." + i.next).remove(), c.children("." + i.listview).append(n), this.openPanel(c)
                                                        }
                                                    else t(o.get().reverse()).each(function(e) {
                                                        var n = t(this),
                                                            o = n.data(s.parent);
                                                        o && (r.__filterListItems(n.find("." + i.listview).children()).length ? (o.hasClass(i.hidden) && o.children("." + i.next).not("." + i.fullsubopen).addClass(i.fullsubopen).addClass(i.fullsubopensearch), o.removeClass(i.hidden).removeClass(i.nosubresults).prevAll("." + i.divider).first().removeClass(i.hidden)) : u || (n.hasClass(i.opened) && setTimeout(function() { r.openPanel(o.closest("." + i.panel)) }, (e + 1) * (1.5 * r.conf.openingInterval)), o.addClass(i.nosubresults)))
                                                    });
                                                    l.find("." + i.noresultsmsg)[m.not("." + i.hidden).length ? "addClass" : "removeClass"](i.hidden), this.trigger("updateListview")
                                                }
                                            };
                                        d.off(n.keyup + "-" + e + " " + n.change + "-" + e).on(n.keyup + "-" + e, function(t) {
                                            (function(t) {
                                                switch (t) {
                                                    case 9:
                                                    case 16:
                                                    case 17:
                                                    case 18:
                                                    case 37:
                                                    case 38:
                                                    case 39:
                                                    case 40:
                                                        return !0
                                                }
                                                return !1
                                            })(t.keyCode) || v.call(r)
                                        }).on(n.change + "-" + e, function(t) { v.call(r) });
                                        var _ = h.children("." + i.btn);
                                        _.length && d.on(n.keyup + "-" + e, function(t) { _[d.val().length ? "removeClass" : "addClass"](i.hidden) }), d.trigger(n.keyup + "-" + e)
                                    })
                                }
                            }
                        })
                    },
                    add: function() { i = t.mmenu._c, s = t.mmenu._d, n = t.mmenu._e, i.add("clear search hassearch resultspanel noresultsmsg noresults nosubresults fullsubopensearch"), s.add("searchtext"), n.add("change keyup") },
                    clickAnchor: function(t, e) {}
                }, t.mmenu.defaults[e] = { add: !1, addTo: "panels", placeholder: "Search", noResults: "No results found.", resultsPanel: { add: !1, dividers: !0, title: "Search results" }, search: !0, showTextItems: !1, showSubPanels: !0 }, t.mmenu.configuration[e] = { clear: !1, form: !1, input: !1, submit: !1 };
                var i, s, n, o
            }(t),
            function(t) {
                var e = "setSelected";
                t.mmenu.addons[e] = {
                    setup: function() {
                        var n = this,
                            r = this.opts[e];
                        if (this.conf[e], o = t.mmenu.glbl, "boolean" == typeof r && (r = { hover: r, parent: r }), "object" != typeof r && (r = {}), "detect" == (r = this.opts[e] = t.extend(!0, {}, t.mmenu.defaults[e], r)).current) {
                            var a = function(t) {
                                t = t.split("?")[0].split("#")[0];
                                var e = n.$menu.find('a[href="' + t + '"], a[href="' + t + '/"]');
                                e.length ? n.setSelected(e.parent(), !0) : (t = t.split("/").slice(0, -1)).length && a(t.join("/"))
                            };
                            this.bind("initMenu:after", function() { a(window.location.href) })
                        } else r.current || this.bind("initListview:after", function(t) { this.$pnls.find("." + i.listview).children("." + i.selected).removeClass(i.selected) });
                        r.hover && this.bind("initMenu:after", function() { this.$menu.addClass(i.hoverselected) }), r.parent && (this.bind("openPanel:finish", function(t) { this.$pnls.find("." + i.listview).find("." + i.next).removeClass(i.selected); for (var e = t.data(s.parent); e;) e.not("." + i.vertical).children("." + i.next).addClass(i.selected), e = e.closest("." + i.panel).data(s.parent) }), this.bind("initMenu:after", function() { this.$menu.addClass(i.parentselected) }))
                    },
                    add: function() { i = t.mmenu._c, s = t.mmenu._d, n = t.mmenu._e, i.add("hoverselected parentselected") },
                    clickAnchor: function(t, e) {}
                }, t.mmenu.defaults[e] = { current: !0, hover: !1, parent: !1 };
                var i, s, n, o
            }(t),
            function(t) {
                var e = "sectionIndexer";
                t.mmenu.addons[e] = {
                    setup: function() {
                        var s = this,
                            r = this.opts[e];
                        this.conf[e], o = t.mmenu.glbl, "boolean" == typeof r && (r = { add: r }), "object" != typeof r && (r = {}), r = this.opts[e] = t.extend(!0, {}, t.mmenu.defaults[e], r), this.bind("initPanels:after", function(o) {
                            if (r.add) {
                                var a;
                                switch (r.addTo) {
                                    case "panels":
                                        a = o;
                                        break;
                                    default:
                                        a = t(r.addTo, this.$menu).filter("." + i.panel)
                                }
                                a.find("." + i.divider).closest("." + i.panel).addClass(i.hasindexer), this.$indexer || (this.$indexer = t('<div class="' + i.indexer + '" />').prependTo(this.$pnls).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'), this.$indexer.children().on(n.mouseover + "-" + e + " " + n.touchstart + "-" + e, function(e) {
                                    var n = t(this).attr("href").slice(1),
                                        o = s.$pnls.children("." + i.opened),
                                        r = o.find("." + i.listview),
                                        a = -1,
                                        l = o.scrollTop();
                                    o.scrollTop(0), r.children("." + i.divider).not("." + i.hidden).each(function() { a < 0 && n == t(this).text().slice(0, 1).toLowerCase() && (a = t(this).position().top) }), o.scrollTop(a > -1 ? a : l)
                                }));
                                var l = function(t) { t = t || this.$pnls.children("." + i.opened), this.$menu[(t.hasClass(i.hasindexer) ? "add" : "remove") + "Class"](i.hasindexer) };
                                this.bind("openPanel:start", l), this.bind("initPanels:after", l)
                            }
                        })
                    },
                    add: function() { i = t.mmenu._c, s = t.mmenu._d, n = t.mmenu._e, i.add("indexer hasindexer"), n.add("mouseover") },
                    clickAnchor: function(t, e) { if (t.parent().is("." + i.indexer)) return !0 }
                }, t.mmenu.defaults[e] = { add: !1, addTo: "panels" };
                var i, s, n, o
            }(t),
            function(t) {
                t.mmenu.addons.toggles = {
                    setup: function() {
                        var i = this;
                        this.opts.toggles, this.conf.toggles, n = t.mmenu.glbl, this.bind("initListview:after", function(s) {
                            this.__refactorClass(s.find("input"), this.conf.classNames.toggles.toggle, "toggle"), this.__refactorClass(s.find("input"), this.conf.classNames.toggles.check, "check"), s.find("input." + e.toggle + ", input." + e.check).each(function() {
                                var s = t(this),
                                    n = s.closest("li"),
                                    o = s.hasClass(e.toggle) ? "toggle" : "check",
                                    r = s.attr("id") || i.__getUniqueId();
                                n.children('label[for="' + r + '"]').length || (s.attr("id", r), n.prepend(s), t('<label for="' + r + '" class="' + e[o] + '"></label>').insertBefore(n.children("a, span").last()))
                            })
                        })
                    },
                    add: function() { e = t.mmenu._c, i = t.mmenu._d, s = t.mmenu._e, e.add("toggle check") },
                    clickAnchor: function(t, e) {}
                }, t.mmenu.configuration.classNames.toggles = { toggle: "Toggle", check: "Check" };
                var e, i, s, n
            }(t), !0
    }),
    function(t) {
        "use strict";

        function e(e, s) {
            var n, o, r;
            return n = function(t, e) {
                function s(t) { return t.css("backgroundColor") == i ? t.is("body") ? e || i : s(t.parent()) : t.css("backgroundColor") }
                return s(t)
            }(e, s), o = t.fn.rippleEffect.colorToHex(n), r = t.fn.rippleEffect.getLuminationValue(o), r <= 239 ? r <= 70 ? t.fn.rippleEffect.getColorLuminance(o, .8) : t.fn.rippleEffect.getColorLuminance(o, .2) : t.fn.rippleEffect.getColorLuminance(o, -.15)
        }
        var i;
        if (void 0 === i) {
            var s = t('<div style="background:none;display:none;"/>').appendTo("body");
            i = s.css("backgroundColor"), s.remove()
        }
        t.fn.rippleEffect = function(i) {
            var s = t.extend({}, t.fn.rippleEffect.defaults, i);
            return this.each(function() {
                t(this).on("click", function(i) {
                    function n() { return "" != s.inkColor ? s.inkColor : e(d, s.inkDefaultColor) }
                    var o, r, a, l, h, c, u, d, p = t(this),
                        f = i.type;
                    if (d = p, "" != s.appendInkTo && (d = p.closest(s.appendInkTo)), 0 == d.find("." + s.inkClass).length && d.append('<span class="' + s.inkContainerClass + '"><span class="' + s.inkClass + '"></span></span>'), (u = d.find("." + s.inkContainerClass + " >  ." + s.inkClass)).removeClass("animate"), !u.height() && !u.width()) {
                        if (h = Math.max(d.outerWidth(), d.outerHeight()), void 0 !== p.data("ripple") && "" != p.data("ripple")) c = p.data("ripple");
                        else if (void 0 !== p.data("ripple-getcolorfromid") && "" != p.data("ripple-getcolorfromid")) {
                            var m = p.data("ripple-getcolorfromid");
                            c = t(m).length > 0 ? t(m).css("background-color") : n()
                        } else c = n();
                        u.css({ height: h, width: h, "background-color": c })
                    }
                    if ("click" === f) o = i.pageX, r = i.pageY;
                    else if ("touchstart" === f) {
                        var g = i.originalEvent.touches[0] || i.originalEvent.changedTouches[0];
                        o = g.pageX, r = g.pageY
                    }
                    a = o - d.offset().left - u.width() / 2, l = r - d.offset().top - u.height() / 2, u.css({ top: l + "px", left: a + "px" }).addClass("animate"), setTimeout(function() { u.removeClass("animate") }, 800)
                })
            })
        }, t.fn.rippleEffect.defaults = { inkContainerClass: "ripple", inkClass: "ink", inkDefaultColor: "#F0F0F0", inkColor: "", appendInkTo: "" }, t.fn.rippleEffect.getLuminationValue = function(t) {
            var t = t.substring(1),
                e = parseInt(t, 16);
            return .2126 * (e >> 16 & 255) + .7152 * (e >> 8 & 255) + .0722 * (e >> 0 & 255)
        }, t.fn.rippleEffect.getColorLuminance = function(t, e) {
            (t = String(t).replace(/[^0-9a-f]/gi, "")).length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), e = e || 0;
            var i, s, n = "#";
            for (s = 0; s < 3; s++) i = parseInt(t.substr(2 * s, 2), 16), n += ("00" + (i = Math.round(Math.min(Math.max(0, i + i * e), 255)).toString(16))).substr(i.length);
            return n
        }, t.fn.rippleEffect.colorToHex = function(t) { return "#" === t.substr(0, 1) ? color : (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === t.length ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : "" }, t("[data-ripple]").rippleEffect()
    }(jQuery),
    function t(e, i, s) {
        function n(r, a) {
            if (!i[r]) {
                if (!e[r]) { var l = "function" == typeof require && require; if (!a && l) return l(r, !0); if (o) return o(r, !0); var h = new Error("Cannot find module '" + r + "'"); throw h.code = "MODULE_NOT_FOUND", h }
                var c = i[r] = { exports: {} };
                e[r][0].call(c.exports, function(t) { var i = e[r][1][t]; return n(i || t) }, c, c.exports, t, e, i, s)
            }
            return i[r].exports
        }
        for (var o = "function" == typeof require && require, r = 0; r < s.length; r++) n(s[r]);
        return n
    }({
        1: [function(t, e, i) {
            "use strict";

            function s(t) {
                t.fn.perfectScrollbar = function(t) {
                    return this.each(function() {
                        if ("object" == typeof t || void 0 === t) {
                            var e = t;
                            o.get(this) || n.initialize(this, e)
                        } else { var i = t; "update" === i ? n.update(this) : "destroy" === i && n.destroy(this) }
                    })
                }
            }
            var n = t("../main"),
                o = t("../plugin/instances");
            if ("function" == typeof define && define.amd) define(["jquery"], s);
            else {
                var r = window.jQuery ? window.jQuery : window.$;
                void 0 !== r && s(r)
            }
            e.exports = s
        }, { "../main": 7, "../plugin/instances": 18 }],
        2: [function(t, e, i) {
            "use strict";
            i.add = function(t, e) {
                t.classList ? t.classList.add(e) : function(t, e) {
                    var i = t.className.split(" ");
                    i.indexOf(e) < 0 && i.push(e), t.className = i.join(" ")
                }(t, e)
            }, i.remove = function(t, e) {
                t.classList ? t.classList.remove(e) : function(t, e) {
                    var i = t.className.split(" "),
                        s = i.indexOf(e);
                    s >= 0 && i.splice(s, 1), t.className = i.join(" ")
                }(t, e)
            }, i.list = function(t) { return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ") }
        }, {}],
        3: [function(t, e, i) {
            "use strict";
            var s = {};
            s.e = function(t, e) { var i = document.createElement(t); return i.className = e, i }, s.appendTo = function(t, e) { return e.appendChild(t), t }, s.css = function(t, e, i) { return "object" == typeof e ? function(t, e) { for (var i in e) { var s = e[i]; "number" == typeof s && (s = s.toString() + "px"), t.style[i] = s } return t }(t, e) : void 0 === i ? function(t, e) { return window.getComputedStyle(t)[e] }(t, e) : function(t, e, i) { return "number" == typeof i && (i = i.toString() + "px"), t.style[e] = i, t }(t, e, i) }, s.matches = function(t, e) { return void 0 !== t.matches ? t.matches(e) : void 0 !== t.matchesSelector ? t.matchesSelector(e) : void 0 !== t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : void 0 !== t.mozMatchesSelector ? t.mozMatchesSelector(e) : void 0 !== t.msMatchesSelector ? t.msMatchesSelector(e) : void 0 }, s.remove = function(t) { void 0 !== t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t) }, s.queryChildren = function(t, e) { return Array.prototype.filter.call(t.childNodes, function(t) { return s.matches(t, e) }) }, e.exports = s
        }, {}],
        4: [function(t, e, i) {
            "use strict";
            var s = function(t) { this.element = t, this.events = {} };
            s.prototype.bind = function(t, e) { void 0 === this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1) }, s.prototype.unbind = function(t, e) {
                var i = void 0 !== e;
                this.events[t] = this.events[t].filter(function(s) { return !(!i || s === e) || (this.element.removeEventListener(t, s, !1), !1) }, this)
            }, s.prototype.unbindAll = function() { for (var t in this.events) this.unbind(t) };
            var n = function() { this.eventElements = [] };
            n.prototype.eventElement = function(t) { var e = this.eventElements.filter(function(e) { return e.element === t })[0]; return void 0 === e && (e = new s(t), this.eventElements.push(e)), e }, n.prototype.bind = function(t, e, i) { this.eventElement(t).bind(e, i) }, n.prototype.unbind = function(t, e, i) { this.eventElement(t).unbind(e, i) }, n.prototype.unbindAll = function() { for (var t = 0; t < this.eventElements.length; t++) this.eventElements[t].unbindAll() }, n.prototype.once = function(t, e, i) {
                var s = this.eventElement(t),
                    n = function(t) { s.unbind(e, n), i(t) };
                s.bind(e, n)
            }, e.exports = n
        }, {}],
        5: [function(t, e, i) {
            "use strict";
            e.exports = function() {
                function t() { return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1) }
                return function() { return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t() }
            }()
        }, {}],
        6: [function(t, e, i) {
            "use strict";
            var s = t("./class"),
                n = t("./dom"),
                o = i.toInt = function(t) { return parseInt(t, 10) || 0 },
                r = i.clone = function(t) { if (t) { if (t.constructor === Array) return t.map(r); if ("object" == typeof t) { var e = {}; for (var i in t) e[i] = r(t[i]); return e } return t } return null };
            i.extend = function(t, e) { var i = r(t); for (var s in e) i[s] = r(e[s]); return i }, i.isEditable = function(t) { return n.matches(t, "input,[contenteditable]") || n.matches(t, "select,[contenteditable]") || n.matches(t, "textarea,[contenteditable]") || n.matches(t, "button,[contenteditable]") }, i.removePsClasses = function(t) {
                for (var e = s.list(t), i = 0; i < e.length; i++) {
                    var n = e[i];
                    0 === n.indexOf("ps-") && s.remove(t, n)
                }
            }, i.outerWidth = function(t) { return o(n.css(t, "width")) + o(n.css(t, "paddingLeft")) + o(n.css(t, "paddingRight")) + o(n.css(t, "borderLeftWidth")) + o(n.css(t, "borderRightWidth")) }, i.startScrolling = function(t, e) { s.add(t, "ps-in-scrolling"), void 0 !== e ? s.add(t, "ps-" + e) : (s.add(t, "ps-x"), s.add(t, "ps-y")) }, i.stopScrolling = function(t, e) { s.remove(t, "ps-in-scrolling"), void 0 !== e ? s.remove(t, "ps-" + e) : (s.remove(t, "ps-x"), s.remove(t, "ps-y")) }, i.env = { isWebKit: "WebkitAppearance" in document.documentElement.style, supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, supportsIePointer: null !== window.navigator.msMaxTouchPoints }
        }, { "./class": 2, "./dom": 3 }],
        7: [function(t, e, i) {
            "use strict";
            var s = t("./plugin/destroy"),
                n = t("./plugin/initialize"),
                o = t("./plugin/update");
            e.exports = { initialize: n, update: o, destroy: s }
        }, { "./plugin/destroy": 9, "./plugin/initialize": 17, "./plugin/update": 21 }],
        8: [function(t, e, i) {
            "use strict";
            e.exports = { handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"], maxScrollbarLength: null, minScrollbarLength: null, scrollXMarginOffset: 0, scrollYMarginOffset: 0, suppressScrollX: !1, suppressScrollY: !1, swipePropagation: !0, useBothWheelAxes: !1, wheelPropagation: !1, wheelSpeed: 1, theme: "default" }
        }, {}],
        9: [function(t, e, i) {
            "use strict";
            var s = t("../lib/helper"),
                n = t("../lib/dom"),
                o = t("./instances");
            e.exports = function(t) {
                var e = o.get(t);
                e && (e.event.unbindAll(), n.remove(e.scrollbarX), n.remove(e.scrollbarY), n.remove(e.scrollbarXRail), n.remove(e.scrollbarYRail), s.removePsClasses(t), o.remove(t))
            }
        }, { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18 }],
        10: [function(t, e, i) {
            "use strict";
            var s = t("../instances"),
                n = t("../update-geometry"),
                o = t("../update-scroll");
            e.exports = function(t) {
                ! function(t, e) {
                    function i(t) { return t.getBoundingClientRect() }
                    var s = function(t) { t.stopPropagation() };
                    e.event.bind(e.scrollbarY, "click", s), e.event.bind(e.scrollbarYRail, "click", function(s) {
                        var r = s.pageY - window.pageYOffset - i(e.scrollbarYRail).top > e.scrollbarYTop ? 1 : -1;
                        o(t, "top", t.scrollTop + r * e.containerHeight), n(t), s.stopPropagation()
                    }), e.event.bind(e.scrollbarX, "click", s), e.event.bind(e.scrollbarXRail, "click", function(s) {
                        var r = s.pageX - window.pageXOffset - i(e.scrollbarXRail).left > e.scrollbarXLeft ? 1 : -1;
                        o(t, "left", t.scrollLeft + r * e.containerWidth), n(t), s.stopPropagation()
                    })
                }(t, s.get(t))
            }
        }, { "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }],
        11: [function(t, e, i) {
            "use strict";

            function s(t, e) {
                var i = null,
                    s = null,
                    n = function(n) {
                        (function(s) {
                            var n = i + s * e.railXRatio,
                                r = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
                            e.scrollbarXLeft = n < 0 ? 0 : n > r ? r : n;
                            var a = o.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;
                            h(t, "left", a)
                        })(n.pageX - s), l(t), n.stopPropagation(), n.preventDefault()
                    },
                    a = function() { o.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", n) };
                e.event.bind(e.scrollbarX, "mousedown", function(l) { s = l.pageX, i = o.toInt(r.css(e.scrollbarX, "left")) * e.railXRatio, o.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", n), e.event.once(e.ownerDocument, "mouseup", a), l.stopPropagation(), l.preventDefault() })
            }

            function n(t, e) {
                var i = null,
                    s = null,
                    n = function(n) {
                        (function(s) {
                            var n = i + s * e.railYRatio,
                                r = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
                            e.scrollbarYTop = n < 0 ? 0 : n > r ? r : n;
                            var a = o.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));
                            h(t, "top", a)
                        })(n.pageY - s), l(t), n.stopPropagation(), n.preventDefault()
                    },
                    a = function() { o.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", n) };
                e.event.bind(e.scrollbarY, "mousedown", function(l) { s = l.pageY, i = o.toInt(r.css(e.scrollbarY, "top")) * e.railYRatio, o.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", n), e.event.once(e.ownerDocument, "mouseup", a), l.stopPropagation(), l.preventDefault() })
            }
            var o = t("../../lib/helper"),
                r = t("../../lib/dom"),
                a = t("../instances"),
                l = t("../update-geometry"),
                h = t("../update-scroll");
            e.exports = function(t) {
                var e = a.get(t);
                s(t, e), n(t, e)
            }
        }, { "../../lib/dom": 3, "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }],
        12: [function(t, e, i) {
            "use strict";

            function s(t, e) {
                var i = !1;
                e.event.bind(t, "mouseenter", function() { i = !0 }), e.event.bind(t, "mouseleave", function() { i = !1 });
                var s = !1;
                e.event.bind(e.ownerDocument, "keydown", function(r) {
                    if (!(r.isDefaultPrevented && r.isDefaultPrevented() || r.defaultPrevented)) {
                        var h = o.matches(e.scrollbarX, ":focus") || o.matches(e.scrollbarY, ":focus");
                        if (i || h) {
                            var c = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                            if (c) {
                                if ("IFRAME" === c.tagName) c = c.contentDocument.activeElement;
                                else
                                    for (; c.shadowRoot;) c = c.shadowRoot.activeElement;
                                if (n.isEditable(c)) return
                            }
                            var u = 0,
                                d = 0;
                            switch (r.which) {
                                case 37:
                                    u = r.metaKey ? -e.contentWidth : r.altKey ? -e.containerWidth : -30;
                                    break;
                                case 38:
                                    d = r.metaKey ? e.contentHeight : r.altKey ? e.containerHeight : 30;
                                    break;
                                case 39:
                                    u = r.metaKey ? e.contentWidth : r.altKey ? e.containerWidth : 30;
                                    break;
                                case 40:
                                    d = r.metaKey ? -e.contentHeight : r.altKey ? -e.containerHeight : -30;
                                    break;
                                case 33:
                                    d = 90;
                                    break;
                                case 32:
                                    d = r.shiftKey ? 90 : -90;
                                    break;
                                case 34:
                                    d = -90;
                                    break;
                                case 35:
                                    d = r.ctrlKey ? -e.contentHeight : -e.containerHeight;
                                    break;
                                case 36:
                                    d = r.ctrlKey ? t.scrollTop : e.containerHeight;
                                    break;
                                default:
                                    return
                            }
                            l(t, "top", t.scrollTop - d), l(t, "left", t.scrollLeft + u), a(t), (s = function(i, s) { var n = t.scrollTop; if (0 === i) { if (!e.scrollbarYActive) return !1; if (0 === n && s > 0 || n >= e.contentHeight - e.containerHeight && s < 0) return !e.settings.wheelPropagation } var o = t.scrollLeft; if (0 === s) { if (!e.scrollbarXActive) return !1; if (0 === o && i < 0 || o >= e.contentWidth - e.containerWidth && i > 0) return !e.settings.wheelPropagation } return !0 }(u, d)) && r.preventDefault()
                        }
                    }
                })
            }
            var n = t("../../lib/helper"),
                o = t("../../lib/dom"),
                r = t("../instances"),
                a = t("../update-geometry"),
                l = t("../update-scroll");
            e.exports = function(t) { s(t, r.get(t)) }
        }, { "../../lib/dom": 3, "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }],
        13: [function(t, e, i) {
            "use strict";

            function s(t, e) {
                function i(i) {
                    var n = function(t) {
                            var e = t.deltaX,
                                i = -1 * t.deltaY;
                            return void 0 !== e && void 0 !== i || (e = -1 * t.wheelDeltaX / 6, i = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, i *= 10), e != e && i != i && (e = 0, i = t.wheelDelta), t.shiftKey ? [-i, -e] : [e, i]
                        }(i),
                        a = n[0],
                        l = n[1];
                    (function(e, i) { var s = t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover"); if (s) { if (!window.getComputedStyle(s).overflow.match(/(scroll|auto)/)) return !1; var n = s.scrollHeight - s.clientHeight; if (n > 0 && !(0 === s.scrollTop && i > 0 || s.scrollTop === n && i < 0)) return !0; var o = s.scrollLeft - s.clientWidth; if (o > 0 && !(0 === s.scrollLeft && e < 0 || s.scrollLeft === o && e > 0)) return !0 } return !1 })(a, l) || (s = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (l ? r(t, "top", t.scrollTop - l * e.settings.wheelSpeed) : r(t, "top", t.scrollTop + a * e.settings.wheelSpeed), s = !0) : e.scrollbarXActive && !e.scrollbarYActive && (a ? r(t, "left", t.scrollLeft + a * e.settings.wheelSpeed) : r(t, "left", t.scrollLeft - l * e.settings.wheelSpeed), s = !0) : (r(t, "top", t.scrollTop - l * e.settings.wheelSpeed), r(t, "left", t.scrollLeft + a * e.settings.wheelSpeed)), o(t), (s = s || function(i, s) { var n = t.scrollTop; if (0 === i) { if (!e.scrollbarYActive) return !1; if (0 === n && s > 0 || n >= e.contentHeight - e.containerHeight && s < 0) return !e.settings.wheelPropagation } var o = t.scrollLeft; if (0 === s) { if (!e.scrollbarXActive) return !1; if (0 === o && i < 0 || o >= e.contentWidth - e.containerWidth && i > 0) return !e.settings.wheelPropagation } return !0 }(a, l)) && (i.stopPropagation(), i.preventDefault()))
                }
                var s = !1;
                void 0 !== window.onwheel ? e.event.bind(t, "wheel", i) : void 0 !== window.onmousewheel && e.event.bind(t, "mousewheel", i)
            }
            var n = t("../instances"),
                o = t("../update-geometry"),
                r = t("../update-scroll");
            e.exports = function(t) { s(t, n.get(t)) }
        }, { "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }],
        14: [function(t, e, i) {
            "use strict";
            var s = t("../instances"),
                n = t("../update-geometry");
            e.exports = function(t) {! function(t, e) { e.event.bind(t, "scroll", function() { n(t) }) }(t, s.get(t)) }
        }, { "../instances": 18, "../update-geometry": 19 }],
        15: [function(t, e, i) {
            "use strict";

            function s(t, e) {
                function i() { s && (clearInterval(s), s = null), n.stopScrolling(t) }
                var s = null,
                    l = { top: 0, left: 0 },
                    h = !1;
                e.event.bind(e.ownerDocument, "selectionchange", function() { t.contains(function() { var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : ""; return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer }()) ? h = !0 : (h = !1, i()) }), e.event.bind(window, "mouseup", function() { h && (h = !1, i()) }), e.event.bind(window, "keyup", function() { h && (h = !1, i()) }), e.event.bind(window, "mousemove", function(e) {
                    if (h) {
                        var c = e.pageX,
                            u = e.pageY,
                            d = t.offsetLeft,
                            p = t.offsetLeft + t.offsetWidth,
                            f = t.offsetTop,
                            m = t.offsetTop + t.offsetHeight;
                        c < d + 3 ? (l.left = -5, n.startScrolling(t, "x")) : c > p - 3 ? (l.left = 5, n.startScrolling(t, "x")) : l.left = 0, u < f + 3 ? (l.top = f + 3 - u < 5 ? -5 : -20, n.startScrolling(t, "y")) : u > m - 3 ? (l.top = u - m + 3 < 5 ? 5 : 20, n.startScrolling(t, "y")) : l.top = 0, 0 === l.top && 0 === l.left ? i() : s || (s = setInterval(function() { return o.get(t) ? (a(t, "top", t.scrollTop + l.top), a(t, "left", t.scrollLeft + l.left), void r(t)) : void clearInterval(s) }, 50))
                    }
                })
            }
            var n = t("../../lib/helper"),
                o = t("../instances"),
                r = t("../update-geometry"),
                a = t("../update-scroll");
            e.exports = function(t) { s(t, o.get(t)) }
        }, { "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }],
        16: [function(t, e, i) {
            "use strict";

            function s(t, e, i, s) {
                function n(e, i) { a(t, "top", t.scrollTop - i), a(t, "left", t.scrollLeft - e), r(t) }

                function l() { b = !0 }

                function h() { b = !1 }

                function c(t) { return t.targetTouches ? t.targetTouches[0] : t }

                function u(t) { return !(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE) }

                function d(t) {
                    if (u(t)) {
                        y = !0;
                        var e = c(t);
                        m.pageX = e.pageX, m.pageY = e.pageY, g = (new Date).getTime(), null !== _ && clearInterval(_), t.stopPropagation()
                    }
                }

                function p(i) {
                    if (!y && e.settings.swipePropagation && d(i), !b && y && u(i)) {
                        var s = c(i),
                            o = { pageX: s.pageX, pageY: s.pageY },
                            r = o.pageX - m.pageX,
                            a = o.pageY - m.pageY;
                        n(r, a), m = o;
                        var l = (new Date).getTime(),
                            h = l - g;
                        h > 0 && (v.x = r / h, v.y = a / h, g = l),
                            function(i, s) {
                                var n = t.scrollTop,
                                    o = t.scrollLeft,
                                    r = Math.abs(i),
                                    a = Math.abs(s);
                                if (a > r) { if (s < 0 && n === e.contentHeight - e.containerHeight || s > 0 && 0 === n) return !e.settings.swipePropagation } else if (r > a && (i < 0 && o === e.contentWidth - e.containerWidth || i > 0 && 0 === o)) return !e.settings.swipePropagation;
                                return !0
                            }(r, a) && (i.stopPropagation(), i.preventDefault())
                    }
                }

                function f() {!b && y && (y = !1, clearInterval(_), _ = setInterval(function() { return o.get(t) && (v.x || v.y) ? Math.abs(v.x) < .01 && Math.abs(v.y) < .01 ? void clearInterval(_) : (n(30 * v.x, 30 * v.y), v.x *= .8, void(v.y *= .8)) : void clearInterval(_) }, 10)) }
                var m = {},
                    g = 0,
                    v = {},
                    _ = null,
                    b = !1,
                    y = !1;
                i && (e.event.bind(window, "touchstart", l), e.event.bind(window, "touchend", h), e.event.bind(t, "touchstart", d), e.event.bind(t, "touchmove", p), e.event.bind(t, "touchend", f)), s && (window.PointerEvent ? (e.event.bind(window, "pointerdown", l), e.event.bind(window, "pointerup", h), e.event.bind(t, "pointerdown", d), e.event.bind(t, "pointermove", p), e.event.bind(t, "pointerup", f)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", l), e.event.bind(window, "MSPointerUp", h), e.event.bind(t, "MSPointerDown", d), e.event.bind(t, "MSPointerMove", p), e.event.bind(t, "MSPointerUp", f)))
            }
            var n = t("../../lib/helper"),
                o = t("../instances"),
                r = t("../update-geometry"),
                a = t("../update-scroll");
            e.exports = function(t) { if (n.env.supportsTouch || n.env.supportsIePointer) { s(t, o.get(t), n.env.supportsTouch, n.env.supportsIePointer) } }
        }, { "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }],
        17: [function(t, e, i) {
            "use strict";
            var s = t("../lib/helper"),
                n = t("../lib/class"),
                o = t("./instances"),
                r = t("./update-geometry"),
                a = { "click-rail": t("./handler/click-rail"), "drag-scrollbar": t("./handler/drag-scrollbar"), keyboard: t("./handler/keyboard"), wheel: t("./handler/mouse-wheel"), touch: t("./handler/touch"), selection: t("./handler/selection") },
                l = t("./handler/native-scroll");
            e.exports = function(t, e) {
                e = "object" == typeof e ? e : {}, n.add(t, "ps-container");
                var i = o.add(t);
                i.settings = s.extend(i.settings, e), n.add(t, "ps-theme-" + i.settings.theme), i.settings.handlers.forEach(function(e) { a[e](t) }), l(t), r(t)
            }
        }, { "../lib/class": 2, "../lib/helper": 6, "./handler/click-rail": 10, "./handler/drag-scrollbar": 11, "./handler/keyboard": 12, "./handler/mouse-wheel": 13, "./handler/native-scroll": 14, "./handler/selection": 15, "./handler/touch": 16, "./instances": 18, "./update-geometry": 19 }],
        18: [function(t, e, i) {
            "use strict";

            function s(t) { return t.getAttribute("data-ps-id") }
            var n = t("../lib/helper"),
                o = t("../lib/class"),
                r = t("./default-setting"),
                a = t("../lib/dom"),
                l = t("../lib/event-manager"),
                h = t("../lib/guid"),
                c = {};
            i.add = function(t) {
                var e = h();
                return function(t, e) { t.setAttribute("data-ps-id", e) }(t, e), c[e] = new function(t) {
                    function e() { o.add(t, "ps-focus") }

                    function i() { o.remove(t, "ps-focus") }
                    this.settings = n.clone(r), this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null, this.isRtl = "rtl" === a.css(t, "direction"), this.isNegativeScroll = function() {
                        var e = t.scrollLeft,
                            i = null;
                        return t.scrollLeft = -1, i = t.scrollLeft < 0, t.scrollLeft = e, i
                    }(), this.negativeScrollAdjustment = this.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, this.event = new l, this.ownerDocument = t.ownerDocument || document, this.scrollbarXRail = a.appendTo(a.e("div", "ps-scrollbar-x-rail"), t), this.scrollbarX = a.appendTo(a.e("div", "ps-scrollbar-x"), this.scrollbarXRail), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", e), this.event.bind(this.scrollbarX, "blur", i), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null, this.scrollbarXBottom = n.toInt(a.css(this.scrollbarXRail, "bottom")), this.isScrollbarXUsingBottom = this.scrollbarXBottom == this.scrollbarXBottom, this.scrollbarXTop = this.isScrollbarXUsingBottom ? null : n.toInt(a.css(this.scrollbarXRail, "top")), this.railBorderXWidth = n.toInt(a.css(this.scrollbarXRail, "borderLeftWidth")) + n.toInt(a.css(this.scrollbarXRail, "borderRightWidth")), a.css(this.scrollbarXRail, "display", "block"), this.railXMarginWidth = n.toInt(a.css(this.scrollbarXRail, "marginLeft")) + n.toInt(a.css(this.scrollbarXRail, "marginRight")), a.css(this.scrollbarXRail, "display", ""), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = a.appendTo(a.e("div", "ps-scrollbar-y-rail"), t), this.scrollbarY = a.appendTo(a.e("div", "ps-scrollbar-y"), this.scrollbarYRail), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", e), this.event.bind(this.scrollbarY, "blur", i), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null, this.scrollbarYRight = n.toInt(a.css(this.scrollbarYRail, "right")), this.isScrollbarYUsingRight = this.scrollbarYRight == this.scrollbarYRight, this.scrollbarYLeft = this.isScrollbarYUsingRight ? null : n.toInt(a.css(this.scrollbarYRail, "left")), this.scrollbarYOuterWidth = this.isRtl ? n.outerWidth(this.scrollbarY) : null, this.railBorderYWidth = n.toInt(a.css(this.scrollbarYRail, "borderTopWidth")) + n.toInt(a.css(this.scrollbarYRail, "borderBottomWidth")), a.css(this.scrollbarYRail, "display", "block"), this.railYMarginHeight = n.toInt(a.css(this.scrollbarYRail, "marginTop")) + n.toInt(a.css(this.scrollbarYRail, "marginBottom")), a.css(this.scrollbarYRail, "display", ""), this.railYHeight = null, this.railYRatio = null
                }(t), c[e]
            }, i.remove = function(t) {
                delete c[s(t)],
                    function(t) { t.removeAttribute("data-ps-id") }(t)
            }, i.get = function(t) { return c[s(t)] }
        }, { "../lib/class": 2, "../lib/dom": 3, "../lib/event-manager": 4, "../lib/guid": 5, "../lib/helper": 6, "./default-setting": 8 }],
        19: [function(t, e, i) {
            "use strict";

            function s(t, e) { return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e }
            var n = t("../lib/helper"),
                o = t("../lib/class"),
                r = t("../lib/dom"),
                a = t("./instances"),
                l = t("./update-scroll");
            e.exports = function(t) {
                var e = a.get(t);
                e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight;
                var i;
                t.contains(e.scrollbarXRail) || ((i = r.queryChildren(t, ".ps-scrollbar-x-rail")).length > 0 && i.forEach(function(t) { r.remove(t) }), r.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || ((i = r.queryChildren(t, ".ps-scrollbar-y-rail")).length > 0 && i.forEach(function(t) { r.remove(t) }), r.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = s(e, n.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = n.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = s(e, n.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = n.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight),
                    function(t, e) {
                        var i = { width: e.railXWidth };
                        e.isRtl ? i.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : i.left = t.scrollLeft, e.isScrollbarXUsingBottom ? i.bottom = e.scrollbarXBottom - t.scrollTop : i.top = e.scrollbarXTop + t.scrollTop, r.css(e.scrollbarXRail, i);
                        var s = { top: t.scrollTop, height: e.railYHeight };
                        e.isScrollbarYUsingRight ? e.isRtl ? s.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : s.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? s.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : s.left = e.scrollbarYLeft + t.scrollLeft, r.css(e.scrollbarYRail, s), r.css(e.scrollbarX, { left: e.scrollbarXLeft, width: e.scrollbarXWidth - e.railBorderXWidth }), r.css(e.scrollbarY, { top: e.scrollbarYTop, height: e.scrollbarYHeight - e.railBorderYWidth })
                    }(t, e), e.scrollbarXActive ? o.add(t, "ps-active-x") : (o.remove(t, "ps-active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, l(t, "left", 0)), e.scrollbarYActive ? o.add(t, "ps-active-y") : (o.remove(t, "ps-active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, l(t, "top", 0))
            }
        }, { "../lib/class": 2, "../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-scroll": 20 }],
        20: [function(t, e, i) {
            "use strict";
            var s, n, o = t("./instances"),
                r = function(t) { var e = document.createEvent("Event"); return e.initEvent(t, !0, !0), e };
            e.exports = function(t, e, i) { if (void 0 === t) throw "You must provide an element to the update-scroll function"; if (void 0 === e) throw "You must provide an axis to the update-scroll function"; if (void 0 === i) throw "You must provide a value to the update-scroll function"; "top" === e && i <= 0 && (t.scrollTop = i = 0, t.dispatchEvent(r("ps-y-reach-start"))), "left" === e && i <= 0 && (t.scrollLeft = i = 0, t.dispatchEvent(r("ps-x-reach-start"))); var a = o.get(t); "top" === e && i >= a.contentHeight - a.containerHeight && ((i = a.contentHeight - a.containerHeight) - t.scrollTop <= 1 ? i = t.scrollTop : t.scrollTop = i, t.dispatchEvent(r("ps-y-reach-end"))), "left" === e && i >= a.contentWidth - a.containerWidth && ((i = a.contentWidth - a.containerWidth) - t.scrollLeft <= 1 ? i = t.scrollLeft : t.scrollLeft = i, t.dispatchEvent(r("ps-x-reach-end"))), s || (s = t.scrollTop), n || (n = t.scrollLeft), "top" === e && i < s && t.dispatchEvent(r("ps-scroll-up")), "top" === e && i > s && t.dispatchEvent(r("ps-scroll-down")), "left" === e && i < n && t.dispatchEvent(r("ps-scroll-left")), "left" === e && i > n && t.dispatchEvent(r("ps-scroll-right")), "top" === e && (t.scrollTop = s = i, t.dispatchEvent(r("ps-scroll-y"))), "left" === e && (t.scrollLeft = n = i, t.dispatchEvent(r("ps-scroll-x"))) }
        }, { "./instances": 18 }],
        21: [function(t, e, i) {
            "use strict";
            var s = t("../lib/helper"),
                n = t("../lib/dom"),
                o = t("./instances"),
                r = t("./update-geometry"),
                a = t("./update-scroll");
            e.exports = function(t) {
                var e = o.get(t);
                e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, n.css(e.scrollbarXRail, "display", "block"), n.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = s.toInt(n.css(e.scrollbarXRail, "marginLeft")) + s.toInt(n.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = s.toInt(n.css(e.scrollbarYRail, "marginTop")) + s.toInt(n.css(e.scrollbarYRail, "marginBottom")), n.css(e.scrollbarXRail, "display", "none"), n.css(e.scrollbarYRail, "display", "none"), r(t), a(t, "top", t.scrollTop), a(t, "left", t.scrollLeft), n.css(e.scrollbarXRail, "display", ""), n.css(e.scrollbarYRail, "display", ""))
            }
        }, { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-geometry": 19, "./update-scroll": 20 }]
    }, {}, [1]),
    function(t, e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : t.Strip = e(jQuery) }(this, function($) {
        function Spinner() { return this.initialize.apply(this, _slice.call(arguments)) }

        function Timers() { return this.initialize.apply(this, _slice.call(arguments)) }

        function getURIData(t) {
            var e = { type: "image" };
            return $.each(Types, function(i, s) {
                var n = s.data(t);
                n && (e = n, e.type = i, e.url = t)
            }), e
        }

        function detectExtension(t) { var e = (t || "").replace(/\?.*/g, "").match(/\.([^.]{3,4})$/); return e ? e[1].toLowerCase() : null }

        function View() { this.initialize.apply(this, _slice.call(arguments)) }
        var Strip = { version: "1.6.5" };
        Strip.Skins = { strip: {} };
        var Browser = function(t) {
                function e(e) { var i = new RegExp(e + "([\\d.]+)").exec(t); return !i || parseFloat(i[1]) }
                return { IE: !(!window.attachEvent || -1 !== t.indexOf("Opera")) && e("MSIE "), Opera: t.indexOf("Opera") > -1 && (!!window.opera && opera.version && parseFloat(opera.version()) || 7.55), WebKit: t.indexOf("AppleWebKit/") > -1 && e("AppleWebKit/"), Gecko: t.indexOf("Gecko") > -1 && -1 === t.indexOf("KHTML") && e("rv:"), MobileSafari: !!t.match(/Apple.*Mobile.*Safari/), Chrome: t.indexOf("Chrome") > -1 && e("Chrome/"), ChromeMobile: t.indexOf("CrMo") > -1 && e("CrMo/"), Android: t.indexOf("Android") > -1 && e("Android "), IEMobile: t.indexOf("IEMobile") > -1 && e("IEMobile/") }
            }(navigator.userAgent),
            _slice = Array.prototype.slice,
            Fit = {
                within: function(t, e) {
                    for (var i = $.extend({ height: !0, width: !0 }, arguments[2] || {}), s = $.extend({}, e), n = 1, o = 5, r = i.width, a = i.height; o > 0 && (r && s.width > t.width || a && s.height > t.height);) {
                        var l = 1,
                            h = 1;
                        r && s.width > t.width && (l = t.width / s.width), a && s.height > t.height && (h = t.height / s.height);
                        n = Math.min(l, h);
                        s = { width: Math.round(e.width * n), height: Math.round(e.height * n) }, o--
                    }
                    return s.width = Math.max(s.width, 0), s.height = Math.max(s.height, 0), s
                }
            };
        $.extend($.easing, { stripEaseInCubic: function(t, e, i, s, n) { return s * (e /= n) * e * e + i }, stripEaseInSine: function(t, e, i, s, n) { return -s * Math.cos(e / n * (Math.PI / 2)) + s + i }, stripEaseOutSine: function(t, e, i, s, n) { return s * Math.sin(e / n * (Math.PI / 2)) + i } });
        var Support = function() {
            function t(t, s) {
                var n = t.charAt(0).toUpperCase() + t.substr(1);
                return function(t, i) {
                    for (var s in t)
                        if (void 0 !== e.style[t[s]]) return "prefix" != i || t[s];
                    return !1
                }((t + " " + i.join(n + " ") + n).split(" "), s)
            }
            var e = document.createElement("div"),
                i = "Webkit Moz O ms Khtml".split(" ");
            return { css: { animation: t("animation"), transform: t("transform"), prefixed: function(e) { return t(e, "prefix") } }, svg: !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, touch: function() { try { return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) } catch (t) { return !1 } }() }
        }();
        Support.mobileTouch = Support.touch && (Browser.MobileSafari || Browser.Android || Browser.IEMobile || Browser.ChromeMobile || !/^(Win|Mac|Linux)/.test(navigator.platform));
        var Bounds = {
                viewport: function() {
                    var t = { width: $(window).width() };
                    if (Browser.MobileSafari || Browser.Android && Browser.Gecko) {
                        var e = document.documentElement.clientWidth / window.innerWidth;
                        t.height = window.innerHeight * e
                    } else t.height = $(window).height();
                    return t
                }
            },
            ImageReady = function(t) {
                var e = function() { return this.initialize.apply(this, Array.prototype.slice.call(arguments)) };
                t.extend(e.prototype, {
                    initialize: function() {
                        this.options = t.extend({
                            test: function() {},
                            success: function() {},
                            timeout: function() {},
                            callAt: !1,
                            intervals: [
                                [0, 0],
                                [1e3, 10],
                                [2e3, 50],
                                [4e3, 100],
                                [2e4, 500]
                            ]
                        }, arguments[0] || {}), this._test = this.options.test, this._success = this.options.success, this._timeout = this.options.timeout, this._ipos = 0, this._time = 0, this._delay = this.options.intervals[this._ipos][1], this._callTimeouts = [], this.poll(), this._createCallsAt()
                    },
                    poll: function() {
                        this._polling = setTimeout(t.proxy(function() {
                            if (this._test()) this.success();
                            else {
                                if (this._time += this._delay, this._time >= this.options.intervals[this._ipos][0]) {
                                    if (!this.options.intervals[this._ipos + 1]) return void("function" == t.type(this._timeout) && this._timeout());
                                    this._ipos++, this._delay = this.options.intervals[this._ipos][1]
                                }
                                this.poll()
                            }
                        }, this), this._delay)
                    },
                    success: function() { this.abort(), this._success() },
                    _createCallsAt: function() {
                        this.options.callAt && t.each(this.options.callAt, t.proxy(function(e, i) {
                            var s = i[0],
                                n = i[1],
                                o = setTimeout(t.proxy(function() { n() }, this), s);
                            this._callTimeouts.push(o)
                        }, this))
                    },
                    _stopCallTimeouts: function() { t.each(this._callTimeouts, function(t, e) { clearTimeout(e) }), this._callTimeouts = [] },
                    abort: function() { this._stopCallTimeouts(), this._polling && (clearTimeout(this._polling), this._polling = null) }
                });
                var i = function() { return this.initialize.apply(this, Array.prototype.slice.call(arguments)) };
                return t.extend(i.prototype, {
                    supports: { naturalWidth: "naturalWidth" in new Image },
                    initialize: function(e, i, s) { return this.img = t(e)[0], this.successCallback = i, this.errorCallback = s, this.isLoaded = !1, this.options = t.extend({ method: "onload", pollFallbackAfter: 1e3 }, arguments[3] || {}), "onload" != this.options.method && this.supports.naturalWidth ? void this.poll() : void this.load() },
                    poll: function() {
                        this._poll = new e({
                            test: t.proxy(function() { return this.img.naturalWidth > 0 }, this),
                            success: t.proxy(function() { this.success() }, this),
                            timeout: t.proxy(function() { this.error() }, this),
                            callAt: [
                                [this.options.pollFallbackAfter, t.proxy(function() { this.load() }, this)]
                            ]
                        })
                    },
                    load: function() {
                        this._loading = setTimeout(t.proxy(function() {
                            var e = new Image;
                            this._onloadImage = e, e.onload = t.proxy(function() { e.onload = function() {}, this.supports.naturalWidth || (this.img.naturalWidth = e.width, this.img.naturalHeight = e.height, e.naturalWidth = e.width, e.naturalHeight = e.height), this.success() }, this), e.onerror = t.proxy(this.error, this), e.src = this.img.src
                        }, this))
                    },
                    success: function() { this._calledSuccess || (this._calledSuccess = !0, this.abort(), this.waitForRender(t.proxy(function() { this.isLoaded = !0, this.successCallback(this) }, this))) },
                    error: function() { this._calledError || (this._calledError = !0, this.abort(), this._errorRenderTimeout = setTimeout(t.proxy(function() { this.errorCallback && this.errorCallback(this) }, this))) },
                    abort: function() { this.stopLoading(), this.stopPolling(), this.stopWaitingForRender() },
                    stopPolling: function() { this._poll && (this._poll.abort(), this._poll = null) },
                    stopLoading: function() { this._loading && (clearTimeout(this._loading), this._loading = null), this._onloadImage && (this._onloadImage.onload = function() {}, this._onloadImage.onerror = function() {}) },
                    waitForRender: function(t) { this._renderTimeout = setTimeout(t) },
                    stopWaitingForRender: function() { this._renderTimeout && (clearTimeout(this._renderTimeout), this._renderTimeout = null), this._errorRenderTimeout && (clearTimeout(this._errorRenderTimeout), this._errorRenderTimeout = null) }
                }), i
            }(jQuery);
        Spinner.supported = Support.css.transform && Support.css.animation, $.extend(Spinner.prototype, {
            initialize: function(t) { this.element = $(t), this.element[0] && (this.classPrefix = "strp-", this.setOptions(arguments[1] || {}), this.element.addClass(this.classPrefix + "spinner"), this.element.append(this._rotate = $("<div>").addClass(this.classPrefix + "spinner-rotate")), this.build(), this.start()) },
            setOptions: function(t) { this.options = $.extend({ show: 200, hide: 200 }, t || {}) },
            build: function() {
                if (!this._build) {
                    this._rotate.html("");
                    var t = (this.options.length, this.options.radius, this.element.is(":visible"));
                    t || this.element.show();
                    this._rotate.append(n = $("<div>").addClass(this.classPrefix + "spinner-frame").append(o = $("<div>").addClass(this.classPrefix + "spinner-line")));
                    var e = parseInt($(o).css("z-index"));
                    this.lines = e, o.css({ "z-index": "inherit" }), n.remove(), t || this.element.hide();
                    for (var i, s = 0; e > s; s++) {
                        var n, o;
                        this._rotate.append(n = $("<div>").addClass(this.classPrefix + "spinner-frame").append(o = $("<div>").addClass(this.classPrefix + "spinner-line"))), i = i || o.css("color"), o.css({ background: i }), n.css({ opacity: (1 / e * (s + 1)).toFixed(2) });
                        var r = {};
                        r[Support.css.prefixed("transform")] = "rotate(" + 360 / e * (s + 1) + "deg)", n.css(r)
                    }
                    this._build = !0
                }
            },
            start: function() {
                var t = {};
                t[Support.css.prefixed("animation")] = this.classPrefix + "spinner-spin 1s infinite steps(" + this.lines + ")", this._rotate.css(t)
            },
            stop: function() {
                var t = {};
                t[Support.css.prefixed("animation")] = "none", this._rotate.css(t)
            },
            show: function(t) { this.build(), this.start(), this.element.stop(!0).fadeTo(this.options.show, 1, t) },
            hide: function(t) { this.element.stop(!0).fadeOut(this.options.hide, $.proxy(function() { this.stop(), t && t() }, this)) },
            refresh: function() { this._build = !1, this.build() }
        }), $.extend(Timers.prototype, { initialize: function() { this._timers = {} }, set: function(t, e, i) { this._timers[t] = setTimeout(e, i) }, get: function(t) { return this._timers[t] }, clear: function(t) { t ? this._timers[t] && (clearTimeout(this._timers[t]), delete this._timers[t]) : this.clearAll() }, clearAll: function() { $.each(this._timers, function(t, e) { clearTimeout(e) }), this._timers = {} } });
        var Types = { image: { extensions: "bmp gif jpeg jpg png webp", detect: function(t) { return $.inArray(detectExtension(t), this.extensions.split(" ")) > -1 }, data: function(t) { return !!this.detect() && { extension: detectExtension(t) } } }, youtube: { detect: function(t) { var e = /(youtube\.com|youtu\.be)\/watch\?(?=.*vi?=([a-zA-Z0-9-_]+))(?:\S+)?$/.exec(t); return e && e[2] ? e[2] : !(!(e = /(youtube\.com|youtu\.be)\/(vi?\/|u\/|embed\/)?([a-zA-Z0-9-_]+)(?:\S+)?$/i.exec(t)) || !e[3]) && e[3] }, data: function(t) { var e = this.detect(t); return !!e && { id: e } } }, vimeo: { detect: function(t) { var e = /(vimeo\.com)\/([a-zA-Z0-9-_]+)(?:\S+)?$/i.exec(t); return !(!e || !e[2]) && e[2] }, data: function(t) { var e = this.detect(t); return !!e && { id: e } } } },
            VimeoReady = function() {
                var t = function() { return this.initialize.apply(this, _slice.call(arguments)) };
                $.extend(t.prototype, {
                    initialize: function(t, e) { this.url = t, this.callback = e, this.load() },
                    load: function() {
                        var t = e.get(this.url);
                        if (t) return this.callback(t.data);
                        var i = "http" + (window.location && "https:" == window.location.protocol ? "s" : "") + ":",
                            s = getURIData(this.url).id;
                        this._xhr = $.getJSON(i + "//vimeo.com/api/oembed.json?url=" + i + "//vimeo.com/" + s + "&maxwidth=9999999&maxheight=9999999&callback=?", $.proxy(function(t) {
                            var i = { dimensions: { width: t.width, height: t.height } };
                            e.set(this.url, i), this.callback && this.callback(i)
                        }, this))
                    },
                    abort: function() { this._xhr && (this._xhr.abort(), this._xhr = null) }
                });
                var e = { cache: [], get: function(t) { for (var e = null, i = 0; i < this.cache.length; i++) this.cache[i] && this.cache[i].url == t && (e = this.cache[i]); return e }, set: function(t, e) { this.remove(t), this.cache.push({ url: t, data: e }) }, remove: function(t) { for (var e = 0; e < this.cache.length; e++) this.cache[e] && this.cache[e].url == t && delete this.cache[e] } };
                return t
            }(),
            Options = {
                defaults: { effects: { spinner: { show: 200, hide: 200 }, transition: { min: 175, max: 250 }, ui: { show: 0, hide: 200 }, window: { show: 300, hide: 300 } }, hideOnClickOutside: !0, keyboard: { left: !0, right: !0, esc: !0 }, loop: !0, overlap: !0, preload: [1, 2], position: !0, skin: "strip", side: "right", spinner: !0, toggle: !0, uiDelay: 3e3, vimeo: { autoplay: 1, api: 1, title: 1, byline: 1, portrait: 0, loop: 0 }, youtube: { autoplay: 1, controls: 1, enablejsapi: 1, hd: 1, iv_load_policy: 3, loop: 0, modestbranding: 1, rel: 0, vq: "hd1080" }, initialTypeOptions: { image: {}, vimeo: { width: 1280 }, youtube: { width: 1280, height: 720 } } },
                create: function(t, e, i) {
                    t = t || {}, i = i || {}, t.skin = t.skin || this.defaults.skin;
                    var s = t.skin ? $.extend({}, Strip.Skins[t.skin] || Strip.Skins[this.defaults.skin]) : {},
                        n = $.extend(!0, {}, this.defaults, s);
                    n.initialTypeOptions && (e && n.initialTypeOptions[e] && (n = $.extend(!0, {}, n.initialTypeOptions[e], n)), delete n.initialTypeOptions);
                    var o = $.extend(!0, {}, n, t);
                    return (!o.effects || Browser.IE && Browser.IE < 9) && (o.effects = {}, $.each(this.defaults.effects, function(t, e) { $.each(o.effects[t] = $.extend({}, e), function(e) { o.effects[t][e] = 0 }) }), o.spinner = !1), o.keyboard && ("boolean" === $.type(o.keyboard) && (o.keyboard = {}, $.each(this.defaults.keyboard, function(t) { o.keyboard[t] = !0 })), ("vimeo" === e || "youtube" === e) && $.extend(o.keyboard, { left: !1, right: !1 })), ("vimeo" === e || "youtube" === e) && (o.overlap = !1), o
                }
            };
        $.extend(View.prototype, {
            initialize: function(object) {
                var options = arguments[1] || {},
                    data = {};
                if ("string" === $.type(object)) object = { url: object };
                else if (object && 1 === object.nodeType) {
                    var element = $(object);
                    object = { element: element[0], url: element.attr("href"), caption: element.attr("data-strip-caption"), group: element.attr("data-strip-group"), extension: element.attr("data-strip-extension"), type: element.attr("data-strip-type"), options: element.attr("data-strip-options") && eval("({" + element.attr("data-strip-options") + "})") || {} }
                }
                if (object && (object.extension || (object.extension = detectExtension(object.url)), !object.type)) {
                    var data = getURIData(object.url);
                    object._data = data, object.type = data.type
                }
                return object._data || (object._data = getURIData(object.url)), object.options = object && object.options ? $.extend(!0, $.extend({}, options), $.extend({}, object.options)) : $.extend({}, options), object.options = Options.create(object.options, object.type, object._data), $.extend(this, object), this
            }
        });
        var Pages = {
                initialize: function(t) { this.element = t, this.pages = {}, this.uid = 1 },
                add: function(t) { this.uid++, this.views = t, this.pages[this.uid] = [], Window._showUIOnResize = !0, $.each(t, $.proxy(function(t, e) { this.pages[this.uid].push(new Page(e, t + 1, this.views.length)) }, this)) },
                show: function(t, e) { var i = this.pages[this.uid][t - 1]; return this.page && this.page.uid == i.uid ? void(i.view.options.toggle && (Window.hide(), this.page = null)) : (Pages.setActiveClass(i), this.page = i, this.removeHiddenAndLoadingInactive(), void i.show($.proxy(function() { this._switched = !1, e && e() }, this))) },
                getLoadingCount: function() { var t = 0; return $.each(this.pages, function(e, i) { $.each(i, function(e, i) { i.loading && t++ }) }), t },
                getPositionInActivePageGroup: function(t) {
                    var e = 0,
                        i = this.pages[this.uid];
                    return i && $.each(i, function(i, s) { s.view.element && s.view.element == t && (e = i + 1) }), e
                },
                removeExpired: function(t) { $.each(this.pages, function(e, i) { e != this._id && $.each(i, function(e, i) { i.remove(t) }) }) },
                removeAll: function() { $.each(this.pages, function(t, e) { $.each(e, function(t, e) { e.remove() }) }), this.pages = {} },
                hideVisibleInactive: function(t) { $.each(this.pages, $.proxy(function(e, i) { $.each(i, $.proxy(function(e, i) { i.uid != this.page.uid && i.hide(null, t) }, this)) }, this)) },
                stopInactive: function() { $.each(this.pages, $.proxy(function(t, e) { $.each(e, $.proxy(function(t, e) { e.uid == this.page.uid || e.preloading || e.stop() }, this)) }, this)) },
                removeHiddenAndLoadingInactive: function() {
                    var t = [];
                    $.each(this.pages, $.proxy(function(e, i) {
                        if (e != this.uid) {
                            var s = 0;
                            $.each(i, $.proxy(function(t, e) { e.visible && !e.loading || e.animatingWindow || e.remove(), e.removed && s++ }, this)), s == i.length && t.push(e)
                        }
                    }, this)), $.each(t, $.proxy(function(t, e) { delete this.pages[e] }, this))
                },
                stop: function() { $.each(this.pages, function(t, e) { $.each(e, function(t, e) { e.stop() }) }) },
                setActiveClass: function(t) {
                    this.removeActiveClasses();
                    var e = t.view.element;
                    if (e) {
                        $(e).addClass("strip-active-element strip-active-group");
                        var i = $(e).attr("data-strip-group");
                        i && $('.strip[data-strip-group="' + i + '"]').addClass("strip-active-group")
                    }
                },
                removeActiveClasses: function() { $(".strip-active-group").removeClass("strip-active-group strip-active-element") }
            },
            Page = function() {
                function t() { return this.initialize.apply(this, _slice.call(arguments)) }
                var e = 0,
                    i = {};
                return $.extend(t.prototype, {
                    initialize: function(t, i, s) { this.view = t, this.dimensions = { width: 0, height: 0 }, this.uid = e++, this._position = i, this._total = s, this.animated = !1, this.visible = !1, this.queues = {}, this.queues.showhide = $({}) },
                    create: function() {
                        if (!this._created) {
                            Pages.element.append(this.element = $("<div>").addClass("strp-page").append(this.container = $("<div>").addClass("strp-container")).css({ opacity: 0 }).hide());
                            var t = this.view.options.position && this._total > 1;
                            switch ((this.view.caption || t) && (this.element.append(this.info = $("<div>").addClass("strp-info").append(this.info_padder = $("<div>").addClass("strp-info-padder"))), t && (this.element.addClass("strp-has-position"), this.info_padder.append($("<div>").addClass("strp-position").html(this._position + " / " + this._total))), this.view.caption && this.info_padder.append(this.caption = $("<div>").addClass("strp-caption").html(this.view.caption))), this.view.type) {
                                case "image":
                                    this.container.append(this.content = $("<img>").attr({ src: this.view.url }));
                                    break;
                                case "vimeo":
                                case "youtube":
                                    this.container.append(this.content = $("<div>"))
                            }
                            this.element.addClass("strp" + (this.view.options.overlap ? "" : "-no") + "-overlap"), this._total < 2 && this.element.addClass("strp-no-sides"), this.content.addClass("strp-content-element"), this._created = !0
                        }
                    },
                    _getSurroundingPages: function() {
                        var t;
                        if (!(t = this.view.options.preload)) return [];
                        for (var e = [], i = Math.max(1, this._position - t[0]), s = Math.min(this._position + t[1], this._total), n = this._position, o = n; s >= o; o++) {
                            (r = Pages.pages[Pages.uid][o - 1])._position != n && e.push(r)
                        }
                        for (o = n; o >= i; o--) {
                            var r = Pages.pages[Pages.uid][o - 1];
                            r._position != n && e.push(r)
                        }
                        return e
                    },
                    preloadSurroundingImages: function() {
                        var t = this._getSurroundingPages();
                        $.each(t, $.proxy(function(t, e) { e.preload() }, this))
                    },
                    preload: function() { this.preloading || this.preloaded || "image" !== this.view.type || !this.view.options.preload || this.loaded || (this.create(), this.preloading = !0, new ImageReady(this.content[0], $.proxy(function(t) { this.loaded = !0, this.preloading = !1, this.preloaded = !0, this.dimensions = { width: t.img.naturalWidth, height: t.img.naturalHeight } }, this), null, { method: "naturalWidth" })) },
                    load: function(t) {
                        if (this.create(), this.loaded) t && t();
                        else switch (this.abort(), this.loading = !0, this.view.options.spinner && !i[this.view.url] && Window.startLoading(), this.view.type) {
                            case "image":
                                if (this.error) return void(t && t());
                                this.imageReady = new ImageReady(this.content[0], $.proxy(function(e) { this._markAsLoaded(), this.dimensions = { width: e.img.naturalWidth, height: e.img.naturalHeight }, t && t() }, this), $.proxy(function() { this._markAsLoaded(), this.content.hide(), this.container.append(this.error = $("<div>").addClass("strp-error")), this.element.addClass("strp-has-error"), this.dimensions = { width: this.error.outerWidth(), height: this.error.outerHeight() }, t && t() }, this), { method: "naturalWidth" });
                                break;
                            case "vimeo":
                                this.vimeoReady = new VimeoReady(this.view.url, $.proxy(function(e) { this._markAsLoaded(), this.dimensions = { width: e.dimensions.width, height: e.dimensions.height }, t && t() }, this));
                                break;
                            case "youtube":
                                this._markAsLoaded(), this.dimensions = { width: this.view.options.width, height: this.view.options.height }, t && t()
                        }
                    },
                    _markAsLoaded: function() { this.loading = !1, this.loaded = !0, i[this.view.url] = !0, Window.stopLoading() },
                    isVideo: function() { return /^(youtube|vimeo)$/.test(this.view.type) },
                    insertVideo: function(t) {
                        if (!this.playerIframe && this.isVideo()) {
                            var e = "http" + (window.location && "https:" === window.location.protocol ? "s" : "") + ":",
                                i = $.extend({}, this.view.options[this.view.type] || {}),
                                s = $.param(i),
                                n = { vimeo: e + "//player.vimeo.com/video/{id}?{queryString}", youtube: e + "//www.youtube.com/embed/{id}?{queryString}" }[this.view.type].replace("{id}", this.view._data.id).replace("{queryString}", s);
                            this.content.append(this.playerIframe = $("<iframe webkitAllowFullScreen mozallowfullscreen allowFullScreen>").attr({ src: n, height: this.contentDimensions.height, width: this.contentDimensions.width, frameborder: 0 })), t && t()
                        } else t && t()
                    },
                    raise: function() {
                        var t = Pages.element[0].lastChild;
                        t && t === this.element[0] || Pages.element.append(this.element)
                    },
                    show: function(t) {
                        var e = this.queues.showhide;
                        e.queue([]), this.animated = !0, this.animatingWindow = !1, e.queue(function(t) { Pages.stopInactive(), t() }), e.queue($.proxy(function(t) { Window.setSide(this.view.options.side, t) }, this)), e.queue($.proxy(function(t) { this.view.options.spinner && Window._spinner && (Window.setSpinnerSkin(this.view.options.skin), Window._spinner.setOptions(this.view.options.effects.spinner), Window._spinner.refresh()), this.load($.proxy(function() { this.preloadSurroundingImages(), t() }, this)) }, this)), e.queue($.proxy(function(t) { this.raise(), Window.setSkin(this.view.options.skin), Window.bindUI(), Keyboard.enable(this.view.options.keyboard), this.fitToWindow(), t() }, this)), e.queue($.proxy(function(t) { Window.timers.set("bind-hide-on-click-outside", $.proxy(function() { Window.bindHideOnClickOutside(), t() }, this), 1) }, this)), this.isVideo() && e.queue($.proxy(function(t) { this.insertVideo($.proxy(function() { t() })) }, this)), e.queue($.proxy(function(t) {
                            this.animatingWindow = !0;
                            var e = 3,
                                i = "horizontal" === this.getOrientation() ? "width" : "height",
                                s = this.view && this.view.options.onShow;
                            "function" === $.type(s) && s.call(Strip);
                            var n = Window.resize(this[i], function() {--e < 1 && t() }, n);
                            this._show(function() {--e < 1 && t() }, n), Window.adjustPrevNext(function() {--e < 1 && t() }, n), Window._showUIOnResize && (Window.showUI(null, n), Window._showUIOnResize = !1), Pages.hideVisibleInactive(n)
                        }, this)), e.queue($.proxy(function(e) { this.animatingWindow = !1, this.animated = !1, this.visible = !0, t && t(), e() }, this))
                    },
                    _show: function(t, e) {
                        var i = Window.visible ? "number" === $.type(e) ? e : this.view.options.effects.transition.min : 0;
                        this.element.stop(!0).show().fadeTo(i || 0, 1, t)
                    },
                    hide: function(t, e) {
                        if (this.element) {
                            this.removeVideo(), this.abort();
                            var i = this.view.options.effects.transition.min;
                            "number" === $.type(e) && (i = e);
                            this.isVideo() && (i = 0), this.element.stop(!0).fadeTo(i, 0, "stripEaseInCubic", $.proxy(function() { this.element.hide(), this.visible = !1, t && t() }, this))
                        }
                    },
                    stop: function() { this.queues.showhide.queue([]), this.element && this.element.stop(!0), this.abort() },
                    removeVideo: function() { this.playerIframe && (this.playerIframe[0].src = "//about:blank", this.playerIframe.remove(), this.playerIframe = null) },
                    remove: function() { this.stop(), this.removeVideo(), this.element && this.element.remove(), this.visible = !1, this.removed = !0 },
                    abort: function() { this.imageReady && !this.preloading && (this.imageReady.abort(), this.imageReady = null), this.vimeoReady && (this.vimeoReady.abort(), this.vimeoReady = null), this.loading = !1, Window.stopLoading() },
                    _getDimensionsFitToView: function() {
                        var t = $.extend({}, this.dimensions),
                            e = $.extend({}, this.dimensions),
                            i = this.view.options;
                        return i.maxWidth && (t.width = i.maxWidth), i.maxHeight && (t.heigth = i.maxHeight), e = Fit.within(t, e)
                    },
                    getOrientation: function() { return "left" === this.view.options.side || "right" === this.view.options.side ? "horizontal" : "vertical" },
                    fitToWindow: function() {
                        var t = this.element,
                            e = this._getDimensionsFitToView(),
                            i = Bounds.viewport(),
                            s = $.extend({}, i),
                            n = "horizontal" === this.getOrientation() ? "width" : "height",
                            o = t.find(".strp-container");
                        Window.element.removeClass("strp-measured");
                        var r = Window.element,
                            a = "width" === n ? parseInt(r.css("min-width")) > 0 : parseInt(r.css("min-height")) > 0,
                            l = a ? 0 : parseInt(r.css("margin-" + ("width" === n ? "left" : "bottom")));
                        Window.element.addClass("strp-measured"), s[n] -= l;
                        var h = parseInt(o.css("padding-left")) + parseInt(o.css("padding-right")),
                            c = parseInt(o.css("padding-top")) + parseInt(o.css("padding-bottom"));
                        s.width -= h, s.height -= c;
                        var u = Fit.within(s, e),
                            d = $.extend({}, u),
                            p = this.content;
                        this.error && (p = this.error);
                        var f = this.info,
                            m = 0;
                        if (f) {
                            var g = Window.element.is(":visible");
                            g || Window.element.show();
                            var v = t.is(":visible");
                            if (v || t.show(), "width" === n) {
                                t.css({ width: a ? i.width : u.width + h });
                                var _ = s.height;
                                p.hide(), m = f.outerHeight(), p.show(), s.height = _ - m, d = Fit.within(s, e);
                                for (var b, y, w, x = $.extend({}, d), C = m, k = a ? 0 : 4; k > 0 && (w = u.width - d.width);) t.css({ width: u.width + h - w }), y = m, p.hide(), m = f.outerHeight(), b = Math.max(this.caption ? this.caption.outerWidth() + h : 0, this.position ? this.position.outerWidth() + h : 0), p.show(), m === y && b <= u.width + h - w ? u.width -= w : (s.height = _ - m, d = Fit.within(s, e), 0 >= k - 1 && (t.css({ width: u.width + h }), d = x, m = C)), k--
                            } else Browser.IE && Browser.IE < 8 && t.css({ width: i.width }), p.hide(), m = f.outerHeight(), p.show(), s.height -= m, d = Fit.within(s, e), u.height = d.height;
                            v || t.hide(), g || Window.element.hide()
                        }
                        var T = { width: u.width + h, height: u.height + c + m };
                        a && (T = i), t.css("width" === n ? { width: T.width } : { height: T.height }), o.css({ bottom: m });
                        var S = -.5 * d.width,
                            D = -.5 * d.height;
                        Browser.IE && Browser.IE < 8 && (S = Math.floor(S), D = Math.floor(D)), p.css($.extend({}, d, { "margin-left": S, "margin-top": D })), this.playerIframe && this.playerIframe.attr(d), this.contentDimensions = d, this.width = T.width, this.height = T.height, this.z = this[n]
                    }
                }), t
            }(),
            Window = {
                initialize: function() { this.queues = [], this.queues.hide = $({}), this.pages = [], this.timers = new Timers, this.build(), this.setSkin(Options.defaults.skin) },
                build: function() { Spinner.supported && ($(document.body).append(this.spinnerMove = $("<div>").addClass("strp-spinner-move").hide().append(this.spinner = $("<div>").addClass("strp-spinner"))), this._spinner = new Spinner(this.spinner), this._spinnerMoveSkinless = this.spinnerMove[0].className), $(document.body).append(this.element = $("<div>").addClass("strp-window strp-measured").append(this._pages = $("<div>").addClass("strp-pages")).append(this._previous = $("<div>").addClass("strp-nav strp-nav-previous").append($("<div>").addClass("strp-nav-button").append($("<div>").addClass("strp-nav-button-background")).append($("<div>").addClass("strp-nav-button-icon"))).hide()).append(this._next = $("<div>").addClass("strp-nav strp-nav-next").append($("<div>").addClass("strp-nav-button").append($("<div>").addClass("strp-nav-button-background")).append($("<div>").addClass("strp-nav-button-icon"))).hide()).append(this._close = $("<div>").addClass("strp-close").append($("<div>").addClass("strp-close-background")).append($("<div>").addClass("strp-close-icon")))), Pages.initialize(this._pages), Support.mobileTouch && this.element.addClass("strp-mobile-touch"), Support.svg || this.element.addClass("strp-no-svg"), this._close.on("click", $.proxy(function(t) { t.preventDefault(), this.hide() }, this)), this._previous.on("click", $.proxy(function(t) { this.previous(), this._onMouseMove(t) }, this)), this._next.on("click", $.proxy(function(t) { this.next(), this._onMouseMove(t) }, this)), this.hideUI(null, 0) },
                setSkin: function(t) { this._skin && this.element.removeClass("strp-window-skin-" + this._skin), this.element.addClass("strp-window-skin-" + t), this._skin = t },
                setSpinnerSkin: function(t) { this.spinnerMove && (this._spinnerSkin && this.spinnerMove.removeClass("strp-spinner-move-skin-" + this._spinnerSkin), this.spinnerMove.addClass("strp-spinner-move-skin-" + t), this._spinner.refresh(), this._spinnerSkin = t) },
                startObservingResize: function() { this._isObservingResize || (this._onWindowResizeHandler = $.proxy(this._onWindowResize, this), $(window).on("resize orientationchange", this._onWindowResizeHandler), this._isObservingResize = !0) },
                stopObservingResize: function() { this._onWindowResizeHandler && ($(window).off("resize orientationchange", this._onWindowResizeHandler), this._onWindowResizeHandler = null), this._isObservingResize = !1 },
                _onWindowResize: function() {
                    var t;
                    (t = Pages.page) && (t.animated || t.animatingWindow ? (t.fitToWindow(), t.show()) : (t.fitToWindow(), this.resize(t.z, null, 0), this.adjustPrevNext(null, !0)))
                },
                resize: function(t, e, i) {
                    var s = "vertical" === this.getOrientation() ? "Height" : "Width",
                        n = s.toLowerCase();
                    t > 0 && (this.visible = !0, this.startObservingResize());
                    var o, r = Window.element["outer" + s]();
                    if (0 === r) o = this.view.options.effects.window.show, this.element.addClass("strp-opening"), this.opening = !0;
                    else if ("number" === $.type(i)) o = i;
                    else {
                        var a = this.view.options.effects.transition,
                            l = a.min,
                            h = a.max - l,
                            c = Bounds.viewport(),
                            u = Math.abs(r - t),
                            d = Math.min(1, u / c[n]);
                        o = Math.round(l + d * h)
                    }
                    0 === t && (this.closing = !0, this.element.is(":animated") || this.element.addClass("strp-closing"));
                    var p = { overflow: "visible" };
                    p[n] = t;
                    var f = 1;
                    this._outerWidth = null, this._offsetLeft = null;
                    var m = this.view.options.onResize,
                        g = "function" === $.type(m);
                    return this.element.stop(!0).animate(p, $.extend({ duration: o, complete: $.proxy(function() {--f < 1 && this._afterResize(e) }, this) }, g ? { step: $.proxy(function(t, e) { e.prop === n && m.call(Strip, e.prop, t, this.side) }, this) } : {})), this.spinnerMove && (f++, this.spinnerMove.stop(!0).animate(p, o, $.proxy(function() {--f < 1 && this._afterResize(e) }, this))), o
                },
                _afterResize: function(t) { this.opening = !1, this.closing = !1, this.element.removeClass("strp-opening strp-closing"), this._outerWidth = this.element.outerWidth(), this._offsetLeft = this.element.offset().left, t && t() },
                adjustPrevNext: function(t, e) {
                    if (this.view && Pages.page) {
                        var i = Pages.page,
                            s = this.element.is(":visible");
                        s || this.element.show();
                        var n = this._previous.attr("style");
                        this._previous.removeAttr("style");
                        var o = parseInt(this._previous.css("margin-top"));
                        this._previous.attr({ style: n }), s || this.element.hide();
                        var r = i.info ? i.info.outerHeight() : 0,
                            a = this._previous.add(this._next),
                            l = { "margin-top": o - .5 * r },
                            h = this.view.options.effects.transition.min;
                        "number" === $.type(e) && (h = e), this.opening && (h = 0), a.stop(!0).animate(l, h, t), this._previous[this.mayPrevious() ? "show" : "hide"](), this._next[this.mayNext() ? "show" : "hide"]()
                    }
                },
                resetPrevNext: function() { this._previous.add(this._next).stop(!0).removeAttr("style") },
                load: function(t, e) { this.views = t, Pages.add(t), e && this.setPosition(e) },
                setSide: function(t, e) {
                    if (this.side !== t)
                        if (this.visible) {
                            var i = this.view ? this.view.options.effects.window.hide : 0;
                            this.hideUI(null, i), this.unbindUI(), this.resize(0, $.proxy(function() { this._safeResetsAfterSwitchSide(), Pages.hideVisibleInactive(0), this._setSide(t, e) }, this)), this._showUIOnResize = !0
                        } else this._setSide(t, e);
                    else e && e()
                },
                _setSide: function(t, e) {
                    this.side = t;
                    var i = this.getOrientation(),
                        s = this.element;
                    this.spinnerMove && (s = s.add(this.spinnerMove)), s.removeClass("strp-horizontal strp-vertical").addClass("strp-" + i);
                    var n = "strp-side-";
                    s.removeClass(n + "top " + n + "right " + n + "bottom " + n + "left").addClass(n + t), e && e()
                },
                getOrientation: function() { return "left" === this.side || "right" === this.side ? "horizontal" : "vertical" },
                startLoading: function() { this._spinner && (this.spinnerMove.show(), this._spinner.show()) },
                stopLoading: function() { if (this._spinner) { 1 > Pages.getLoadingCount() && this._spinner.hide($.proxy(function() { this.spinnerMove.hide() }, this)) } },
                setPosition: function(t, e) { this._position = t, this.view = this.views[t - 1], this.stopHideQueue(), this.page = Pages.show(t, $.proxy(function() { var i = this.view.options.afterPosition; "function" === $.type(i) && i.call(Strip, t), e && e() }, this)) },
                hide: function(t) {
                    if (this.view) {
                        var e = this.queues.hide;
                        e.queue([]), e.queue($.proxy(function(t) { Pages.stop(), t() }, this)), e.queue($.proxy(function(t) {
                            var e = this.view ? this.view.options.effects.window.hide : 0;
                            this.unbindUI(), this.hideUI(null, e), this.unbindHideOnClickOutside(), Keyboard.disable(), t()
                        }, this)), e.queue($.proxy(function(t) { Pages.removeActiveClasses(), this.resize(0, t, this.view.options.effects.window.hide), this._showUIOnResize = !0 }, this)), e.queue($.proxy(function(t) { this._safeResetsAfterSwitchSide(), this.stopObservingResize(), Pages.removeAll(), this.timers.clear(), this._position = -1; var e = this.view && this.view.options.afterHide; "function" === $.type(e) && e.call(Strip), this.view = null, t() }, this)), "function" === $.type(t) && e.queue($.proxy(function(e) { t(), e() }, this))
                    }
                },
                stopHideQueue: function() { this.queues.hide.queue([]) },
                _safeResetsAfterSwitchSide: function() { this.element.removeAttr("style"), this.spinnerMove && this.spinnerMove.removeAttr("style"), this.visible = !1, this.hideUI(null, 0), this.timers.clear("ui"), this.resetPrevNext(), this._x = -1, this._y = -1 },
                mayPrevious: function() { return this.view && this.view.options.loop && this.views && this.views.length > 1 || 1 !== this._position },
                previous: function(t) {
                    var e = this.mayPrevious();
                    (t || e) && this.setPosition(this.getSurroundingIndexes().previous)
                },
                mayNext: function() { var t = this.views && this.views.length > 1; return this.view && this.view.options.loop && t || t && 1 !== this.getSurroundingIndexes().next },
                next: function(t) {
                    var e = this.mayNext();
                    (t || e) && this.setPosition(this.getSurroundingIndexes().next)
                },
                getSurroundingIndexes: function() {
                    if (!this.views) return {};
                    var t = this._position,
                        e = this.views.length;
                    return { previous: 1 >= t ? e : t - 1, next: t >= e ? 1 : t + 1 }
                },
                bindHideOnClickOutside: function() { this.unbindHideOnClickOutside(), $(document.documentElement).on("click", this._delegateHideOutsideHandler = $.proxy(this._delegateHideOutside, this)) },
                unbindHideOnClickOutside: function() { this._delegateHideOutsideHandler && ($(document.documentElement).off("click", this._delegateHideOutsideHandler), this._delegateHideOutsideHandler = null) },
                _delegateHideOutside: function(t) {
                    var e = Pages.page;
                    if (this.visible && e && e.view.options.hideOnClickOutside) {
                        var i = t.target;
                        $(i).closest(".strip, .strp-window")[0] || this.hide()
                    }
                },
                bindUI: function() {
                    this.unbindUI(), Support.mobileTouch || (this.element.on("mouseenter", this._showUIHandler = $.proxy(this.showUI, this)).on("mouseleave", this._hideUIHandler = $.proxy(this.hideUI, this)), this.element.on("mousemove", this._mousemoveUIHandler = $.proxy(function(t) {
                        var e = t.pageX,
                            i = t.pageY;
                        this._hoveringNav || i === this._y && e === this._x || (this._x = e, this._y = i, this.showUI(), this.startUITimer())
                    }, this)), this._pages.on("mousemove", ".strp-container", this._onMouseMoveHandler = $.proxy(this._onMouseMove, this)).on("mouseleave", ".strp-container", this._onMouseLeaveHandler = $.proxy(this._onMouseLeave, this)).on("mouseenter", ".strp-container", this._onMouseEnterHandler = $.proxy(this._onMouseEnter, this)), this.element.on("mouseenter", ".strp-nav", this._onNavMouseEnterHandler = $.proxy(this._onNavMouseEnter, this)).on("mouseleave", ".strp-nav", this._onNavMouseLeaveHandler = $.proxy(this._onNavMouseLeave, this)), $(window).on("scroll", this._onScrollHandler = $.proxy(this._onScroll, this))), this._pages.on("click", ".strp-container", this._onClickHandler = $.proxy(this._onClick, this))
                },
                unbindUI: function() { this._showUIHandler && (this.element.off("mouseenter", this._showUIHandler).off("mouseleave", this._hideUIHandler).off("mousemove", this._mousemoveUIHandler), this._pages.off("mousemove", ".strp-container", this._onMouseMoveHandler).off("mouseleave", ".strp-container", this._onMouseLeaveHandler).off("mouseenter", ".strp-container", this._onMouseEnterHandler), this.element.off("mouseenter", ".strp-nav", this._onNavMouseEnterHandler).off("mouseleave", ".strp-nav", this._onNavMouseLeaveHandler), $(window).off("scroll", this._onScrollHandler), this._showUIHandler = null), this._onClickHandler && (this._pages.off("click", ".strp-container", this._onClickHandler), this._onClickHandler = null) },
                _onScroll: function() { this._offsetLeft = this._outerWidth = null },
                _onMouseMove: function(t) {
                    var e = this._getEventSide(t),
                        i = e.toLowerCase();
                    this.element[(this["may" + e]() ? "add" : "remove") + "Class"]("strp-hovering-clickable"), this._previous[("next" !== i ? "add" : "remove") + "Class"]("strp-nav-previous-hover strp-nav-hover"), this._next[("next" === i ? "add" : "remove") + "Class"]("strp-nav-next-hover strp-nav-hover")
                },
                _onMouseLeave: function() { this.element.removeClass("strp-hovering-clickable"), this._previous.removeClass("strp-nav-previous-hover").add(this._next.removeClass("strp-nav-next-hover")).removeClass("strp-nav-hover") },
                _onClick: function(t) { this[this._getEventSide(t).toLowerCase()](), this._onMouseMove(t) },
                _onMouseEnter: function(t) { this._onMouseMove(t) },
                _getEventSide: function(t) {
                    var e = this._offsetLeft || this.element.offset().left,
                        i = t.pageX - e;
                    return .5 * (this._outerWidth || this.element.outerWidth()) > i ? "Previous" : "Next"
                },
                _onNavMouseEnter: function() { this._hoveringNav = !0, this.clearUITimer() },
                _onNavMouseLeave: function() { this._hoveringNav = !1, this.startUITimer() },
                showUI: function(t, e) {
                    this.clearUITimer();
                    var i = this.element.find(".strp-nav-button"),
                        s = this.view ? this.view.options.effects.ui.show : 0;
                    "number" === $.type(e) && (s = e), i.stop(!0).fadeTo(s, 1, "stripEaseInSine", $.proxy(function() { this.startUITimer(), "function" === $.type(t) && t() }, this))
                },
                hideUI: function(t, e) {
                    var i = this.element.find(".strp-nav-button"),
                        s = this.view ? this.view.options.effects.ui.hide : 0;
                    "number" === $.type(e) && (s = e), i.stop(!0).fadeOut(s, "stripEaseOutSine", function() { "function" === $.type(t) && t() })
                },
                clearUITimer: function() { Support.mobileTouch || this.timers.clear("ui") },
                startUITimer: function() { Support.mobileTouch || (this.clearUITimer(), this.timers.set("ui", $.proxy(function() { this.hideUI() }, this), this.view ? this.view.options.uiDelay : 0)) }
            },
            Keyboard = {
                enabled: !1,
                keyCode: { left: 37, right: 39, esc: 27 },
                enable: function(t) { this.disable(), t && ($(document).on("keydown", this._onKeyDownHandler = $.proxy(this.onKeyDown, this)).on("keyup", this._onKeyUpHandler = $.proxy(this.onKeyUp, this)), this.enabled = t) },
                disable: function() { this.enabled = !1, this._onKeyUpHandler && ($(document).off("keyup", this._onKeyUpHandler).off("keydown", this._onKeyDownHandler), this._onKeyUpHandler = this._onKeyDownHandler = null) },
                onKeyDown: function(t) {
                    if (this.enabled && Window.visible) {
                        var e = this.getKeyByKeyCode(t.keyCode);
                        if (e && (!e || !this.enabled || this.enabled[e])) switch (t.preventDefault(), t.stopPropagation(), e) {
                            case "left":
                                Window.previous();
                                break;
                            case "right":
                                Window.next()
                        }
                    }
                },
                onKeyUp: function(t) {
                    if (this.enabled && Window.visible) {
                        var e = this.getKeyByKeyCode(t.keyCode);
                        if (e && (!e || !this.enabled || this.enabled[e])) switch (e) {
                            case "esc":
                                Window.hide()
                        }
                    }
                },
                getKeyByKeyCode: function(t) {
                    for (var e in this.keyCode)
                        if (this.keyCode[e] === t) return e;
                    return null
                }
            },
            _Strip = {
                _disabled: !1,
                _fallback: !0,
                initialize: function() { Window.initialize(), this._disabled || this.startDelegating() },
                startDelegating: function() { this.stopDelegating(), $(document.documentElement).on("click", ".strip[href]", this._delegateHandler = $.proxy(this.delegate, this)) },
                stopDelegating: function() { this._delegateHandler && ($(document.documentElement).off("click", ".strip[href]", this._delegateHandler), this._delegateHandler = null) },
                delegate: function(t) {
                    if (!this._disabled) {
                        t.stopPropagation(), t.preventDefault();
                        var e = t.currentTarget;
                        _Strip.show(e)
                    }
                },
                show: function(object) {
                    if (this._disabled) this.showFallback.apply(_Strip, _slice.call(arguments));
                    else {
                        var options = arguments[1] || {},
                            position = arguments[2];
                        arguments[1] && "number" === $.type(arguments[1]) && (position = arguments[1], options = {});
                        var views = [],
                            object_type, isElement = object && 1 === object.nodeType;
                        switch (object_type = $.type(object)) {
                            case "string":
                            case "object":
                                var view = new View(object, options),
                                    _dgo = "data-strip-group-options";
                                if (view.group) {
                                    if (isElement) {
                                        var elements = $('.strip[data-strip-group="' + $(object).attr("data-strip-group") + '"]'),
                                            groupOptions = {};
                                        elements.filter("[" + _dgo + "]").each(function(i, element) { $.extend(groupOptions, eval("({" + ($(element).attr(_dgo) || "") + "})")) }), elements.each(function(t, e) { position || e !== object || (position = t + 1), views.push(new View(e, $.extend({}, groupOptions, options))) })
                                    }
                                } else {
                                    var groupOptions = {};
                                    isElement && $(object).is("[" + _dgo + "]") && ($.extend(groupOptions, eval("({" + ($(object).attr(_dgo) || "") + "})")), view = new View(object, $.extend({}, groupOptions, options))), views.push(view)
                                }
                                break;
                            case "array":
                                $.each(object, function(t, e) {
                                    var i = new View(e, options);
                                    views.push(i)
                                })
                        }(!position || 1 > position) && (position = 1), position > views.length && (position = views.length), Window.unbindHideOnClickOutside();
                        var positionInAPG;
                        isElement && (positionInAPG = Pages.getPositionInActivePageGroup(object)) ? (positionInAPG === Window._position && Window.bindHideOnClickOutside(), Window.setPosition(positionInAPG)) : Window.load(views, position)
                    }
                },
                showFallback: function() {
                    function t(e) { var i = $.type(e); return "string" === i ? e : "array" === i && e[0] ? t(e[0]) : _.isElement(e) && $(e).attr("href") ? $(e).attr("href") : !!e.url && e.url }
                    return function(e) {
                        if (_Strip._fallback) {
                            var i = t(e);
                            i && (window.location.href = i)
                        }
                    }
                }()
            };
        return $.extend(Strip, { show: function() { return _Strip.show.apply(_Strip, _slice.call(arguments)), this }, hide: function() { return Window.hide(), this }, disable: function() { return _Strip.stopDelegating(), _Strip._disabled = !0, this }, enable: function() { return _Strip._disabled = !1, _Strip.startDelegating(), this }, fallback: function(t) { return _Strip._fallback = t, this }, setDefaultSkin: function(t) { return Options.defaults.skin = t, this } }), (Browser.IE && Browser.IE < 7 || "number" === $.type(Browser.Android) && Browser.Android < 3 || Browser.MobileSafari && "number" === $.type(Browser.WebKit) && Browser.WebKit < 533.18) && (_Strip.show = _Strip.showFallback, $.each("startDelegating stopDelegating initialize".split(" "), function(t, e) { _Strip[e] = function() {} }), Strip.hide = function() { return this }), $(document).ready(function() { _Strip.initialize() }), Strip
    }),
    function(t) {
        "use strict";
        t.fn.loadMoreResults = function(e) {
            function i(t, e, i, a) { null !== i && "object" != typeof i ? typeof e[i] === a && null !== String(e[i]).match("string" == a ? o : r) || (n[t][i] = s[t][i]) : typeof e === a && null !== String(e).match("string" == a ? o : r) || (n[t] = s[t]) }
            var s = { tag: { name: "div", class: "item" }, displayedItems: 2, showItems: 2, button: { class: "btn-load-more", text: "Load More" } },
                n = t.extend(!0, {}, s, e),
                o = /^[A-Za-z][-_A-Za-z0-9]+$/,
                r = /^[0-9]+$/;
            return t.each(n, function(t, e) { "tag" === t && (i(t, e, "name", "string"), i(t, e, "class", "string")), "displayedItems" === t && i(t, e, null, "number"), "showItems" === t && i(t, e, null, "number"), "button" === t && i(t, e, "class", "string") }), this.each(function(e, i) {
                var s = t(i),
                    o = s.find(" > " + n.tag.name + "." + n.tag.class).length,
                    r = parseInt(n.displayedItems),
                    a = parseInt(n.showItems);
                s.find(" > " + n.tag.name + "." + n.tag.class + ":lt(" + r + ")").css("display", "inline-block"), s.find(" > " + n.tag.name + "." + n.tag.class + ":gt(" + (r - 1) + ")").css("display", "none"), s.parent().append('<button class="btn-view ' + n.button.class + '">' + n.button.text + "</button>"), s.parent().on("click", ".btn-view", function(e) { e.preventDefault(), r = r + a <= o ? r + a : o, s.find(" > " + n.tag.name + "." + n.tag.class + ":lt(" + r + ")").fadeIn(), r == o && t(this).hide() })
            })
        }
    }(jQuery),
    function(t, e) { "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery) }(window, function(t, e) {
        "use strict";

        function i(i, o, a) {
            (a = a || e || t.jQuery) && (o.prototype.option || (o.prototype.option = function(t) { a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t)) }), a.fn[i] = function(t) {
                if ("string" == typeof t) {
                    return function(t, e, s) {
                        var n, o = "$()." + i + '("' + e + '")';
                        return t.each(function(t, l) {
                            var h = a.data(l, i);
                            if (h) {
                                var c = h[e];
                                if (c && "_" != e.charAt(0)) {
                                    var u = c.apply(h, s);
                                    n = void 0 === n ? u : n
                                } else r(o + " is not a valid method")
                            } else r(i + " not initialized. Cannot call methods, i.e. " + o)
                        }), void 0 !== n ? n : t
                    }(this, t, n.call(arguments, 1))
                }
                return function(t, e) {
                    t.each(function(t, s) {
                        var n = a.data(s, i);
                        n ? (n.option(e), n._init()) : (n = new o(s, e), a.data(s, i, n))
                    })
                }(this, t), this
            }, s(a))
        }

        function s(t) {!t || t && t.bridget || (t.bridget = i) }
        var n = Array.prototype.slice,
            o = t.console,
            r = void 0 === o ? function() {} : function(t) { o.error(t) };
        return s(e || t.jQuery), i
    }),
    function(t, e) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e() }("undefined" != typeof window ? window : this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    s = i[t] = i[t] || [];
                return -1 == s.indexOf(e) && s.push(e), this
            }
        }, e.once = function(t, e) { if (t && e) { this.on(t, e); var i = this._onceEvents = this._onceEvents || {}; return (i[t] = i[t] || {})[e] = !0, this } }, e.off = function(t, e) { var i = this._events && this._events[t]; if (i && i.length) { var s = i.indexOf(e); return -1 != s && i.splice(s, 1), this } }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var s = 0,
                    n = i[s];
                e = e || [];
                for (var o = this._onceEvents && this._onceEvents[t]; n;) {
                    var r = o && o[n];
                    r && (this.off(t, n), delete o[n]), n.apply(this, e), n = i[s += r ? 0 : 1]
                }
                return this
            }
        }, t
    }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("get-size/get-size", [], function() { return e() }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e() }(window, function() {
        "use strict";

        function t(t) { var e = parseFloat(t); return -1 == t.indexOf("%") && !isNaN(e) && e }

        function e(t) { var e = getComputedStyle(t); return e || n("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e }

        function i(n) {
            if (function() {
                    if (!a) {
                        a = !0;
                        var n = document.createElement("div");
                        n.style.width = "200px", n.style.padding = "1px 2px 3px 4px", n.style.borderStyle = "solid", n.style.borderWidth = "1px 2px 3px 4px", n.style.boxSizing = "border-box";
                        var o = document.body || document.documentElement;
                        o.appendChild(n);
                        var r = e(n);
                        i.isBoxSizeOuter = s = 200 == t(r.width), o.removeChild(n)
                    }
                }(), "string" == typeof n && (n = document.querySelector(n)), n && "object" == typeof n && n.nodeType) {
                var l = e(n);
                if ("none" == l.display) return function() { for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < r; e++) t[o[e]] = 0; return t }();
                var h = {};
                h.width = n.offsetWidth, h.height = n.offsetHeight;
                for (var c = h.isBorderBox = "border-box" == l.boxSizing, u = 0; u < r; u++) {
                    var d = o[u],
                        p = l[d],
                        f = parseFloat(p);
                    h[d] = isNaN(f) ? 0 : f
                }
                var m = h.paddingLeft + h.paddingRight,
                    g = h.paddingTop + h.paddingBottom,
                    v = h.marginLeft + h.marginRight,
                    _ = h.marginTop + h.marginBottom,
                    b = h.borderLeftWidth + h.borderRightWidth,
                    y = h.borderTopWidth + h.borderBottomWidth,
                    w = c && s,
                    x = t(l.width);
                !1 !== x && (h.width = x + (w ? 0 : m + b));
                var C = t(l.height);
                return !1 !== C && (h.height = C + (w ? 0 : g + y)), h.innerWidth = h.width - (m + b), h.innerHeight = h.height - (g + y), h.outerWidth = h.width + v, h.outerHeight = h.height + _, h
            }
        }
        var s, n = "undefined" == typeof console ? function() {} : function(t) { console.error(t) },
            o = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            r = o.length,
            a = !1;
        return i
    }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e() }(window, function() { "use strict"; var t = function() { var t = window.Element.prototype; if (t.matches) return "matches"; if (t.matchesSelector) return "matchesSelector"; for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) { var s = e[i] + "MatchesSelector"; if (t[s]) return s } }(); return function(e, i) { return e[t](i) } }),
    function(t, e) { "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) { return e(t, i) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector) }(window, function(t, e) {
        var i = {};
        i.extend = function(t, e) { for (var i in e) t[i] = e[i]; return t }, i.modulo = function(t, e) { return (t % e + e) % e }, i.makeArray = function(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if (t && "object" == typeof t && "number" == typeof t.length)
                for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, i.removeFrom = function(t, e) { var i = t.indexOf(e); - 1 != i && t.splice(i, 1) }, i.getParent = function(t, i) {
            for (; t.parentNode && t != document.body;)
                if (t = t.parentNode, e(t, i)) return t
        }, i.getQueryElement = function(t) { return "string" == typeof t ? document.querySelector(t) : t }, i.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, i.filterFindElements = function(t, s) {
            var n = [];
            return (t = i.makeArray(t)).forEach(function(t) {
                if (t instanceof HTMLElement) {
                    if (!s) return void n.push(t);
                    e(t, s) && n.push(t);
                    for (var i = t.querySelectorAll(s), o = 0; o < i.length; o++) n.push(i[o])
                }
            }), n
        }, i.debounceMethod = function(t, e, i) {
            var s = t.prototype[e],
                n = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[n];
                t && clearTimeout(t);
                var e = arguments,
                    o = this;
                this[n] = setTimeout(function() { s.apply(o, e), delete o[n] }, i || 100)
            }
        }, i.docReady = function(t) { var e = document.readyState; "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t) }, i.toDashed = function(t) { return t.replace(/(.)([A-Z])/g, function(t, e, i) { return e + "-" + i }).toLowerCase() };
        var s = t.console;
        return i.htmlInit = function(e, n) {
            i.docReady(function() {
                var o = i.toDashed(n),
                    r = "data-" + o,
                    a = document.querySelectorAll("[" + r + "]"),
                    l = document.querySelectorAll(".js-" + o),
                    h = i.makeArray(a).concat(i.makeArray(l)),
                    c = r + "-options",
                    u = t.jQuery;
                h.forEach(function(t) {
                    var i, o = t.getAttribute(r) || t.getAttribute(c);
                    try { i = o && JSON.parse(o) } catch (e) { return void(s && s.error("Error parsing " + r + " on " + t.className + ": " + e)) }
                    var a = new e(t, i);
                    u && u.data(t, n, a)
                })
            })
        }, i
    }),
    function(t, e) { "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize)) }(window, function(t, e) {
        "use strict";

        function i(t, e) { t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create()) }
        var s = document.documentElement.style,
            n = "string" == typeof s.transition ? "transition" : "WebkitTransition",
            o = "string" == typeof s.transform ? "transform" : "WebkitTransform",
            r = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[n],
            a = { transform: o, transition: n, transitionDuration: n + "Duration", transitionProperty: n + "Property", transitionDelay: n + "Delay" },
            l = i.prototype = Object.create(t.prototype);
        l.constructor = i, l._create = function() { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, l.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.getSize = function() { this.size = e(this.element) }, l.css = function(t) { var e = this.element.style; for (var i in t) { e[a[i] || i] = t[i] } }, l.getPosition = function() {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                s = t[e ? "left" : "right"],
                n = t[i ? "top" : "bottom"],
                o = this.layout.size,
                r = -1 != s.indexOf("%") ? parseFloat(s) / 100 * o.width : parseInt(s, 10),
                a = -1 != n.indexOf("%") ? parseFloat(n) / 100 * o.height : parseInt(n, 10);
            r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? o.paddingLeft : o.paddingRight, a -= i ? o.paddingTop : o.paddingBottom, this.position.x = r, this.position.y = a
        }, l.layoutPosition = function() {
            var t = this.layout.size,
                e = {},
                i = this.layout._getOption("originLeft"),
                s = this.layout._getOption("originTop"),
                n = i ? "paddingLeft" : "paddingRight",
                o = i ? "left" : "right",
                r = i ? "right" : "left",
                a = this.position.x + t[n];
            e[o] = this.getXValue(a), e[r] = "";
            var l = s ? "paddingTop" : "paddingBottom",
                h = s ? "top" : "bottom",
                c = s ? "bottom" : "top",
                u = this.position.y + t[l];
            e[h] = this.getYValue(u), e[c] = "", this.css(e), this.emitEvent("layout", [this])
        }, l.getXValue = function(t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px" }, l.getYValue = function(t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px" }, l._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                s = this.position.y,
                n = parseInt(t, 10),
                o = parseInt(e, 10),
                r = n === this.position.x && o === this.position.y;
            if (this.setPosition(t, e), !r || this.isTransitioning) {
                var a = t - i,
                    l = e - s,
                    h = {};
                h.transform = this.getTranslate(a, l), this.transition({ to: h, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 })
            } else this.layoutPosition()
        }, l.getTranslate = function(t, e) {
            var i = this.layout._getOption("originLeft"),
                s = this.layout._getOption("originTop");
            return t = i ? t : -t, e = s ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
        }, l.goTo = function(t, e) { this.setPosition(t, e), this.layoutPosition() }, l.moveTo = l._transitionTo, l.setPosition = function(t, e) { this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10) }, l._nonTransition = function(t) { this.css(t.to), t.isCleaning && this._removeStyles(t.to); for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this) }, l.transition = function(t) {
            if (parseFloat(this.layout.options.transitionDuration)) {
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    this.element.offsetHeight;
                    null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            } else this._nonTransition(t)
        };
        var h = "opacity," + function(t) { return t.replace(/([A-Z])/g, function(t) { return "-" + t.toLowerCase() }) }(o);
        l.enableTransition = function() {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: h, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(r, this, !1)
            }
        }, l.onwebkitTransitionEnd = function(t) { this.ontransitionend(t) }, l.onotransitionend = function(t) { this.ontransitionend(t) };
        var c = { "-webkit-transform": "transform" };
        l.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = c[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[i], function(t) { for (var e in t) return !1; return !0 }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) { e.onEnd[i].call(this), delete e.onEnd[i] }
                this.emitEvent("transitionEnd", [this])
            }
        }, l.disableTransition = function() { this.removeTransitionStyles(), this.element.removeEventListener(r, this, !1), this.isTransitioning = !1 }, l._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var u = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
        return l.removeTransitionStyles = function() { this.css(u) }, l.stagger = function(t) { t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms" }, l.removeElem = function() { this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]) }, l.remove = function() { return n && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() { this.removeElem() }), void this.hide()) : void this.removeElem() }, l.reveal = function() {
            delete this.isHidden, this.css({ display: "" });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e })
        }, l.onRevealTransitionEnd = function() { this.isHidden || this.emitEvent("reveal") }, l.getHideRevealTransitionEndProperty = function(t) { var e = this.layout.options[t]; if (e.opacity) return "opacity"; for (var i in e) return i }, l.hide = function() {
            this.isHidden = !0, this.css({ display: "" });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e })
        }, l.onHideTransitionEnd = function() { this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide")) }, l.destroy = function() { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, i
    }),
    function(t, e) { "use strict"; "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, s, n, o) { return e(t, i, s, n, o) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item) }(window, function(t, e, i, s, n) {
        "use strict";

        function o(t, e) {
            var i = s.getQueryElement(t);
            if (i) {
                this.element = i, l && (this.$element = l(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(e);
                var n = ++c;
                this.element.outlayerGUID = n, u[n] = this, this._create();
                this._getOption("initLayout") && this.layout()
            } else a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
        }

        function r(t) {
            function e() { t.apply(this, arguments) }
            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
        }
        var a = t.console,
            l = t.jQuery,
            h = function() {},
            c = 0,
            u = {};
        o.namespace = "outlayer", o.Item = n, o.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } };
        var d = o.prototype;
        s.extend(d, e.prototype), d.option = function(t) { s.extend(this.options, t) }, d._getOption = function(t) { var e = this.constructor.compatOptions[t]; return e && void 0 !== this.options[e] ? this.options[e] : this.options[t] }, o.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, d._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), s.extend(this.element.style, this.options.containerStyle);
            this._getOption("resize") && this.bindResize()
        }, d.reloadItems = function() { this.items = this._itemize(this.element.children) }, d._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, s = [], n = 0; n < e.length; n++) {
                var o = new i(e[n], this);
                s.push(o)
            }
            return s
        }, d._filterFindItemElements = function(t) { return s.filterFindElements(t, this.options.itemSelector) }, d.getItemElements = function() { return this.items.map(function(t) { return t.element }) }, d.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, d._init = d.layout, d._resetLayout = function() { this.getSize() }, d.getSize = function() { this.size = i(this.element) }, d._getMeasurement = function(t, e) {
            var s, n = this.options[t];
            n ? ("string" == typeof n ? s = this.element.querySelector(n) : n instanceof HTMLElement && (s = n), this[t] = s ? i(s)[e] : n) : this[t] = 0
        }, d.layoutItems = function(t, e) { t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout() }, d._getItemsForLayout = function(t) { return t.filter(function(t) { return !t.isIgnored }) }, d._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var i = [];
                t.forEach(function(t) {
                    var s = this._getItemLayoutPosition(t);
                    s.item = t, s.isInstant = e || t.isLayoutInstant, i.push(s)
                }, this), this._processLayoutQueue(i)
            }
        }, d._getItemLayoutPosition = function() { return { x: 0, y: 0 } }, d._processLayoutQueue = function(t) { this.updateStagger(), t.forEach(function(t, e) { this._positionItem(t.item, t.x, t.y, t.isInstant, e) }, this) }, d.updateStagger = function() {
            var t = this.options.stagger;
            return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = function(t) {
                if ("number" == typeof t) return t;
                var e = t.match(/(^\d*\.?\d*)(\w*)/),
                    i = e && e[1],
                    s = e && e[2];
                return i.length ? (i = parseFloat(i)) * (p[s] || 1) : 0
            }(t), this.stagger)
        }, d._positionItem = function(t, e, i, s, n) { s ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i)) }, d._postLayout = function() { this.resizeContainer() }, d.resizeContainer = function() {
            if (this._getOption("resizeContainer")) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, d._getContainerSize = h, d._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, d._emitCompleteOnItems = function(t, e) {
            function i() { n.dispatchEvent(t + "Complete", null, [e]) }

            function s() {++r == o && i() }
            var n = this,
                o = e.length;
            if (e && o) {
                var r = 0;
                e.forEach(function(e) { e.once(t, s) })
            } else i()
        }, d.dispatchEvent = function(t, e, i) {
            var s = e ? [e].concat(i) : i;
            if (this.emitEvent(t, s), l)
                if (this.$element = this.$element || l(this.element), e) {
                    var n = l.Event(e);
                    n.type = t, this.$element.trigger(n, i)
                } else this.$element.trigger(t, i)
        }, d.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, d.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, d.stamp = function(t) {
            (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
        }, d.unstamp = function(t) {
            (t = this._find(t)) && t.forEach(function(t) { s.removeFrom(this.stamps, t), this.unignore(t) }, this)
        }, d._find = function(t) { if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = s.makeArray(t) }, d._manageStamps = function() { this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this)) }, d._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) }
        }, d._manageStamp = h, d._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                s = this._boundingRect,
                n = i(t);
            return { left: e.left - s.left - n.marginLeft, top: e.top - s.top - n.marginTop, right: s.right - e.right - n.marginRight, bottom: s.bottom - e.bottom - n.marginBottom }
        }, d.handleEvent = s.handleEvent, d.bindResize = function() { t.addEventListener("resize", this), this.isResizeBound = !0 }, d.unbindResize = function() { t.removeEventListener("resize", this), this.isResizeBound = !1 }, d.onresize = function() { this.resize() }, s.debounceMethod(o, "onresize", 100), d.resize = function() { this.isResizeBound && this.needsResizeLayout() && this.layout() }, d.needsResizeLayout = function() { var t = i(this.element); return this.size && t && t.innerWidth !== this.size.innerWidth }, d.addItems = function(t) { var e = this._itemize(t); return e.length && (this.items = this.items.concat(e)), e }, d.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, d.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, d.reveal = function(t) {
            if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, i) { t.stagger(i * e), t.reveal() })
            }
        }, d.hide = function(t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, i) { t.stagger(i * e), t.hide() })
            }
        }, d.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, d.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, d.getItem = function(t) { for (var e = 0; e < this.items.length; e++) { var i = this.items[e]; if (i.element == t) return i } }, d.getItems = function(t) {
            var e = [];
            return (t = s.makeArray(t)).forEach(function(t) {
                var i = this.getItem(t);
                i && e.push(i)
            }, this), e
        }, d.remove = function(t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) { t.remove(), s.removeFrom(this.items, t) }, this)
        }, d.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) { t.destroy() }), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete u[e], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
        }, o.data = function(t) { var e = (t = s.getQueryElement(t)) && t.outlayerGUID; return e && u[e] }, o.create = function(t, e) { var i = r(o); return i.defaults = s.extend({}, o.defaults), s.extend(i.defaults, e), i.compatOptions = s.extend({}, o.compatOptions), i.namespace = t, i.data = o.data, i.Item = r(n), s.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i };
        var p = { ms: 1, s: 1e3 };
        return o.Item = n, o
    }),
    function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer)) }(window, function(t) {
        "use strict";

        function e() { t.Item.apply(this, arguments) }
        var i = e.prototype = Object.create(t.Item.prototype),
            s = i._create;
        i._create = function() { this.id = this.layout.itemGUID++, s.call(this), this.sortData = {} }, i.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var s = e[i];
                    this.sortData[i] = s(this.element, this)
                }
            }
        };
        var n = i.destroy;
        return i.destroy = function() { n.apply(this, arguments), this.css({ display: "" }) }, e
    }),
    function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)) }(window, function(t, e) {
        "use strict";

        function i(t) { this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size) }
        var s = i.prototype;
        return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(t) { s[t] = function() { return e.prototype[t].apply(this.isotope, arguments) } }), s.needsVerticalResizeLayout = function() { var e = t(this.isotope.element); return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight }, s._getMeasurement = function() { this.isotope._getMeasurement.apply(this, arguments) }, s.getColumnWidth = function() { this.getSegmentSize("column", "Width") }, s.getRowHeight = function() { this.getSegmentSize("row", "Height") }, s.getSegmentSize = function(t, e) {
            var i = t + e,
                s = "outer" + e;
            if (this._getMeasurement(i, s), !this[i]) {
                var n = this.getFirstItemSize();
                this[i] = n && n[s] || this.isotope.size["inner" + e]
            }
        }, s.getFirstItemSize = function() { var e = this.isotope.filteredItems[0]; return e && e.element && t(e.element) }, s.layout = function() { this.isotope.layout.apply(this.isotope, arguments) }, s.getSize = function() { this.isotope.getSize(), this.size = this.isotope.size }, i.modes = {}, i.create = function(t, e) {
            function n() { i.apply(this, arguments) }
            return n.prototype = Object.create(s), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
        }, i
    }),
    function(t, e) { "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize) }(window, function(t, e) {
        var i = t.create("masonry");
        i.compatOptions.fitWidth = "isFitWidth";
        var s = i.prototype;
        return s._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0, this.horizontalColIndex = 0
        }, s.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var s = this.columnWidth += this.gutter,
                n = this.containerWidth + this.gutter,
                o = n / s,
                r = s - n % s,
                a = r && r < 1 ? "round" : "floor";
            o = Math[a](o), this.cols = Math.max(o, 1)
        }, s.getContainerWidth = function() {
            var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                i = e(t);
            this.containerWidth = i && i.innerWidth
        }, s._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                i = e && e < 1 ? "round" : "ceil",
                s = Math[i](t.size.outerWidth / this.columnWidth);
            s = Math.min(s, this.cols);
            for (var n = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](s, t), o = { x: this.columnWidth * n.col, y: n.y }, r = n.y + t.size.outerHeight, a = s + n.col, l = n.col; l < a; l++) this.colYs[l] = r;
            return o
        }, s._getTopColPosition = function(t) {
            var e = this._getTopColGroup(t),
                i = Math.min.apply(Math, e);
            return { col: e.indexOf(i), y: i }
        }, s._getTopColGroup = function(t) { if (t < 2) return this.colYs; for (var e = [], i = this.cols + 1 - t, s = 0; s < i; s++) e[s] = this._getColGroupY(s, t); return e }, s._getColGroupY = function(t, e) { if (e < 2) return this.colYs[t]; var i = this.colYs.slice(t, t + e); return Math.max.apply(Math, i) }, s._getHorizontalColPosition = function(t, e) {
            var i = this.horizontalColIndex % this.cols;
            i = t > 1 && i + t > this.cols ? 0 : i;
            var s = e.size.outerWidth && e.size.outerHeight;
            return this.horizontalColIndex = s ? i + t : this.horizontalColIndex, { col: i, y: this._getColGroupY(i, t) }
        }, s._manageStamp = function(t) {
            var i = e(t),
                s = this._getElementOffset(t),
                n = this._getOption("originLeft") ? s.left : s.right,
                o = n + i.outerWidth,
                r = Math.floor(n / this.columnWidth);
            r = Math.max(0, r);
            var a = Math.floor(o / this.columnWidth);
            a -= o % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var l = (this._getOption("originTop") ? s.top : s.bottom) + i.outerHeight, h = r; h <= a; h++) this.colYs[h] = Math.max(l, this.colYs[h])
        }, s._getContainerSize = function() { this.maxY = Math.max.apply(Math, this.colYs); var t = { height: this.maxY }; return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t }, s._getContainerFitWidth = function() { for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++; return (this.cols - t) * this.columnWidth - this.gutter }, s.needsResizeLayout = function() { var t = this.containerWidth; return this.getContainerWidth(), t != this.containerWidth }, i
    }),
    function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry) }(window, function(t, e) {
        "use strict";
        var i = t.create("masonry"),
            s = i.prototype,
            n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
        for (var o in e.prototype) n[o] || (s[o] = e.prototype[o]);
        var r = s.measureColumns;
        s.measureColumns = function() { this.items = this.isotope.filteredItems, r.call(this) };
        var a = s._getOption;
        return s._getOption = function(t) { return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments) }, i
    }),
    function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) {
        "use strict";
        var e = t.create("fitRows"),
            i = e.prototype;
        return i._resetLayout = function() { this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth") }, i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
            var s = { x: this.x, y: this.y };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, s
        }, i._getContainerSize = function() { return { height: this.maxY } }, e
    }),
    function(t, e) { "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode) }(window, function(t) {
        "use strict";
        var e = t.create("vertical", { horizontalAlignment: 0 }),
            i = e.prototype;
        return i._resetLayout = function() { this.y = 0 }, i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += t.size.outerHeight, { x: e, y: i }
        }, i._getContainerSize = function() { return { height: this.y } }, e
    }),
    function(t, e) { "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, s, n, o, r, a) { return e(t, i, s, n, o, r, a) }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode) }(window, function(t, e, i, s, n, o, r) {
        var a = t.jQuery,
            l = String.prototype.trim ? function(t) { return t.trim() } : function(t) { return t.replace(/^\s+|\s+$/g, "") },
            h = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
        h.Item = o, h.LayoutMode = r;
        var c = h.prototype;
        c._create = function() { this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"]; for (var t in r.modes) this._initLayoutMode(t) }, c.reloadItems = function() { this.itemGUID = 0, e.prototype.reloadItems.call(this) }, c._itemize = function() { for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) { t[i].id = this.itemGUID++ } return this._updateItemsSortData(t), t }, c._initLayoutMode = function(t) {
            var e = r.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
        }, c.layout = function() { return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout() }, c._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, c.arrange = function(t) {
            this.option(t), this._getIsInstant();
            var e = this._filter(this.items);
            this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
        }, c._init = c.arrange, c._hideReveal = function(t) { this.reveal(t.needReveal), this.hide(t.needHide) }, c._getIsInstant = function() {
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            return this._isInstant = e, e
        }, c._bindArrangeComplete = function() {
            function t() { e && i && s && n.dispatchEvent("arrangeComplete", null, [n.filteredItems]) }
            var e, i, s, n = this;
            this.once("layoutComplete", function() { e = !0, t() }), this.once("hideComplete", function() { i = !0, t() }), this.once("revealComplete", function() { s = !0, t() })
        }, c._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], s = [], n = [], o = this._getFilterTest(e), r = 0; r < t.length; r++) {
                var a = t[r];
                if (!a.isIgnored) {
                    var l = o(a);
                    l && i.push(a), l && a.isHidden ? s.push(a) : l || a.isHidden || n.push(a)
                }
            }
            return { matches: i, needReveal: s, needHide: n }
        }, c._getFilterTest = function(t) { return a && this.options.isJQueryFiltering ? function(e) { return a(e.element).is(t) } : "function" == typeof t ? function(e) { return t(e.element) } : function(e) { return s(e.element, t) } }, c.updateSortData = function(t) {
            var e;
            t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, c._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = u(i)
            }
        }, c._updateItemsSortData = function(t) { for (var e = t && t.length, i = 0; e && i < e; i++) { t[i].updateSortData() } };
        var u = function() {
            return function(t) {
                if ("string" != typeof t) return t;
                var e = l(t).split(" "),
                    i = e[0],
                    s = i.match(/^\[(.+)\]$/),
                    n = function(t, e) { return t ? function(e) { return e.getAttribute(t) } : function(t) { var i = t.querySelector(e); return i && i.textContent } }(s && s[1], i),
                    o = h.sortDataParsers[e[1]];
                return t = o ? function(t) { return t && o(n(t)) } : function(t) { return t && n(t) }
            }
        }();
        h.sortDataParsers = { parseInt: function(t) { return parseInt(t, 10) }, parseFloat: function(t) { return parseFloat(t) } }, c._sort = function() {
            if (this.options.sortBy) {
                var t = n.makeArray(this.options.sortBy);
                this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
                var e = function(t, e) {
                    return function(i, s) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n],
                                r = i.sortData[o],
                                a = s.sortData[o];
                            if (r > a || r < a) { var l = void 0 !== e[o] ? e[o] : e; return (r > a ? 1 : -1) * (l ? 1 : -1) }
                        }
                        return 0
                    }
                }(this.sortHistory, this.options.sortAscending);
                this.filteredItems.sort(e)
            }
        }, c._getIsSameSortBy = function(t) {
            for (var e = 0; e < t.length; e++)
                if (t[e] != this.sortHistory[e]) return !1;
            return !0
        }, c._mode = function() {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, c._resetLayout = function() { e.prototype._resetLayout.call(this), this._mode()._resetLayout() }, c._getItemLayoutPosition = function(t) { return this._mode()._getItemLayoutPosition(t) }, c._manageStamp = function(t) { this._mode()._manageStamp(t) }, c._getContainerSize = function() { return this._mode()._getContainerSize() }, c.needsResizeLayout = function() { return this._mode().needsResizeLayout() }, c.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, c.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, c._filterRevealAdded = function(t) { var e = this._filter(t); return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches }, c.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, s, n = e.length;
                for (i = 0; i < n; i++) s = e[i], this.element.appendChild(s.element);
                var o = this._filter(e).matches;
                for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
                this.reveal(o)
            }
        };
        var d = c.remove;
        return c.remove = function(t) {
            t = n.makeArray(t);
            var e = this.getItems(t);
            d.call(this, t);
            for (var i = e && e.length, s = 0; i && s < i; s++) {
                var o = e[s];
                n.removeFrom(this.filteredItems, o)
            }
        }, c.shuffle = function() {
            for (var t = 0; t < this.items.length; t++) { this.items[t].sortData.random = Math.random() }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, c._noTransition = function(t, e) {
            var i = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var s = t.apply(this, e);
            return this.options.transitionDuration = i, s
        }, c.getFilteredItemElements = function() { return this.filteredItems.map(function(t) { return t.element }) }, h
    }), $(window).load(function() {
        "use strict";
        $(function() {
            var t = $(".masonry");
            t.isotope({ masonry: {} });
            $("#options .option-set").find("a").click(function() {
                var e = $(this);
                if (e.hasClass("selected")) return !1;
                var i = e.parents(".option-set");
                i.find(".selected").removeClass("selected"), e.addClass("selected");
                var s = {},
                    n = i.attr("data-option-key"),
                    o = e.attr("data-option-value");
                if (o = "false" !== o && o, s[n] = o, "layoutMode" === n && "function" == typeof r) {
                    var r;
                    r(e, s)
                } else t.isotope(s);
                return !1
            })
        })
    });
var scrolltotop = {
    setting: { startline: 400, scrollto: 0, scrollduration: 1e3, fadeduration: [500, 100] },
    controlHTML: '<i class="fa fa-angle-up"></i>',
    controlattrs: { offsetx: 5, offsety: 10 },
    anchorkeyword: "#top",
    state: { isvisible: !1, shouldvisible: !1 },
    scrollup: function() {
        this.cssfixedsupport || this.$control.css({ opacity: 0 });
        var t = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto);
        t = "string" == typeof t && 1 == jQuery("#" + t).length ? jQuery("#" + t).offset().top : 0, this.$body.animate({ scrollTop: t }, this.setting.scrollduration)
    },
    keepfixed: function() {
        var t = jQuery(window),
            e = t.scrollLeft() + t.width() - this.$control.width() - this.controlattrs.offsetx,
            i = t.scrollTop() + t.height() - this.$control.height() - this.controlattrs.offsety;
        this.$control.css({ left: e + "px", top: i + "px" })
    },
    togglecontrol: function() {
        var t = jQuery(window).scrollTop();
        this.cssfixedsupport || this.keepfixed(), this.state.shouldvisible = t >= this.setting.startline, this.state.shouldvisible && !this.state.isvisible ? (this.$control.stop().animate({ opacity: 1 }, this.setting.fadeduration[0]), this.state.isvisible = !0) : 0 == this.state.shouldvisible && this.state.isvisible && (this.$control.stop().animate({ opacity: 0 }, this.setting.fadeduration[1]), this.state.isvisible = !1)
    },
    init: function() {
        jQuery(document).ready(function(t) {
            var e = scrolltotop,
                i = document.all;
            e.cssfixedsupport = !i || i && "CSS1Compat" == document.compatMode && window.XMLHttpRequest, e.$body = t(window.opera ? "CSS1Compat" == document.compatMode ? "html" : "body" : "html,body"), e.$control = t('<div id="topcontrol">' + e.controlHTML + "</div>").css({ position: e.cssfixedsupport ? "fixed" : "absolute", bottom: e.controlattrs.offsety, right: e.controlattrs.offsetx, opacity: 0, cursor: "pointer" }).attr({ title: "Scroll Back to Top" }).click(function() { return e.scrollup(), !1 }).appendTo("body"), document.all && !window.XMLHttpRequest && "" != e.$control.text() && e.$control.css({ width: e.$control.width() }), e.togglecontrol(), t('a[href="' + e.anchorkeyword + '"]').click(function() { return e.scrollup(), !1 }), t(window).bind("scroll resize", function(t) { e.togglecontrol() })
        })
    }
};
scrolltotop.init();