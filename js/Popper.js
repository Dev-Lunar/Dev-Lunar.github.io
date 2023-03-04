! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, (function() {
    "use strict";

    function e(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function n(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function r(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var o = t(e),
            i = o.overflow,
            f = o.overflowX,
            s = o.overflowY;
        return /(auto|scroll)/.test(i + s + f) ? e : r(n(e))
    }

    function o(e) {
        var n = e && e.offsetParent,
            r = n && n.nodeName;
        return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === t(n, "position") ? o(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function i(e) {
        return null === e.parentNode ? e : i(e.parentNode)
    }

    function f(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            r = n ? e : t,
            s = n ? t : e,
            a = document.createRange();
        a.setStart(r, 0), a.setEnd(s, 0);
        var p = a.commonAncestorContainer;
        if (e !== p && t !== p || r.contains(s)) return function(e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || o(e.firstElementChild) === e)
        }(p) ? p : o(p);
        var l = i(e);
        return l.host ? f(l.host, t) : f(e, i(t).host)
    }

    function s(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
            n = "top" === t ? "scrollTop" : "scrollLeft",
            r = e.nodeName;
        if ("BODY" === r || "HTML" === r) {
            var o = e.ownerDocument.documentElement,
                i = e.ownerDocument.scrollingElement || o;
            return i[n]
        }
        return e[n]
    }

    function a(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            r = s(t, "top"),
            o = s(t, "left"),
            i = n ? -1 : 1;
        return e.top += r * i, e.bottom += r * i, e.left += o * i, e.right += o * i, e
    }

    function p(e, t) {
        var n = "x" === t ? "Left" : "Top",
            r = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + r + "Width"], 10)
    }

    function l(e, t, n, r) {
        return Y(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], X() ? n["offset" + e] + r["margin" + ("Height" === e ? "Top" : "Left")] + r["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }

    function u() {
        var e = document.body,
            t = document.documentElement,
            n = X() && getComputedStyle(t);
        return {
            height: l("Height", e, t, n),
            width: l("Width", e, t, n)
        }
    }

    function c(e) {
        return Z({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function d(e) {
        var n = {};
        if (X()) try {
            n = e.getBoundingClientRect();
            var r = s(e, "top"),
                o = s(e, "left");
            n.top += r, n.left += o, n.bottom += r, n.right += o
        } catch (e) {} else n = e.getBoundingClientRect();
        var i = {
                left: n.left,
                top: n.top,
                width: n.right - n.left,
                height: n.bottom - n.top
            },
            f = "HTML" === e.nodeName ? u() : {},
            a = f.width || e.clientWidth || i.right - i.left,
            l = f.height || e.clientHeight || i.bottom - i.top,
            d = e.offsetWidth - a,
            h = e.offsetHeight - l;
        if (d || h) {
            var m = t(e);
            d -= p(m, "x"), h -= p(m, "y"), i.width -= d, i.height -= h
        }
        return c(i)
    }

    function h(e, n) {
        var o = X(),
            i = "HTML" === n.nodeName,
            f = d(e),
            s = d(n),
            p = r(e),
            l = t(n),
            u = parseFloat(l.borderTopWidth, 10),
            h = parseFloat(l.borderLeftWidth, 10),
            m = c({
                top: f.top - s.top - u,
                left: f.left - s.left - h,
                width: f.width,
                height: f.height
            });
        if (m.marginTop = 0, m.marginLeft = 0, !o && i) {
            var g = parseFloat(l.marginTop, 10),
                v = parseFloat(l.marginLeft, 10);
            m.top -= u - g, m.bottom -= u - g, m.left -= h - v, m.right -= h - v, m.marginTop = g, m.marginLeft = v
        }
        return (o ? n.contains(p) : n === p && "BODY" !== p.nodeName) && (m = a(m, n)), m
    }

    function m(e) {
        var t = e.ownerDocument.documentElement,
            n = h(e, t),
            r = Y(t.clientWidth, window.innerWidth || 0),
            o = Y(t.clientHeight, window.innerHeight || 0),
            i = s(t),
            f = s(t, "left");
        return c({
            top: i - n.top + n.marginTop,
            left: f - n.left + n.marginLeft,
            width: r,
            height: o
        })
    }

    function g(e) {
        var r = e.nodeName;
        return "BODY" !== r && "HTML" !== r && ("fixed" === t(e, "position") || g(n(e)))
    }

    function v(e, t, o, i) {
        var s = {
                top: 0,
                left: 0
            },
            a = f(e, t);
        if ("viewport" === i) s = m(a);
        else {
            var p;
            "scrollParent" === i ? "BODY" === (p = r(n(t))).nodeName && (p = e.ownerDocument.documentElement) : p = "window" === i ? e.ownerDocument.documentElement : i;
            var l = h(p, a);
            if ("HTML" !== p.nodeName || g(a)) s = l;
            else {
                var c = u(),
                    d = c.height,
                    v = c.width;
                s.top += l.top - l.marginTop, s.bottom = d + l.top, s.left += l.left - l.marginLeft, s.right = v + l.left
            }
        }
        return s.left += o, s.top += o, s.right -= o, s.bottom -= o, s
    }

    function b(e) {
        return e.width * e.height
    }

    function w(e, t, n, r, o) {
        var i = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var f = v(n, r, i, o),
            s = {
                top: {
                    width: f.width,
                    height: t.top - f.top
                },
                right: {
                    width: f.right - t.right,
                    height: f.height
                },
                bottom: {
                    width: f.width,
                    height: f.bottom - t.bottom
                },
                left: {
                    width: t.left - f.left,
                    height: f.height
                }
            },
            a = Object.keys(s).map((function(e) {
                return Z({
                    key: e
                }, s[e], {
                    area: b(s[e])
                })
            })).sort((function(e, t) {
                return t.area - e.area
            })),
            p = a.filter((function(e) {
                var t = e.width,
                    r = e.height;
                return t >= n.clientWidth && r >= n.clientHeight
            })),
            l = 0 < p.length ? p[0].key : a[0].key,
            u = e.split("-")[1];
        return l + (u ? "-" + u : "")
    }

    function y(e, t, n) {
        return h(n, f(t, n))
    }

    function E(e) {
        var t = getComputedStyle(e),
            n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            r = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + r,
            height: e.offsetHeight + n
        }
    }

    function O(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, (function(e) {
            return t[e]
        }))
    }

    function x(e, t, n) {
        n = n.split("-")[0];
        var r = E(e),
            o = {
                width: r.width,
                height: r.height
            },
            i = -1 !== ["right", "left"].indexOf(n),
            f = i ? "top" : "left",
            s = i ? "left" : "top",
            a = i ? "height" : "width",
            p = i ? "width" : "height";
        return o[f] = t[f] + t[a] / 2 - r[a] / 2, o[s] = n === s ? t[s] - r[p] : t[O(s)], o
    }

    function L(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function T(t, n, r) {
        return (void 0 === r ? t : t.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex((function(e) {
                return e[t] === n
            }));
            var r = L(e, (function(e) {
                return e[t] === n
            }));
            return e.indexOf(r)
        }(t, "name", r))).forEach((function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var r = t.function || t.fn;
            t.enabled && e(r) && (n.offsets.popper = c(n.offsets.popper), n.offsets.reference = c(n.offsets.reference), n = r(n, t))
        })), n
    }

    function D() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = y(this.state, this.popper, this.reference), e.placement = w(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = x(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = "absolute", e = T(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
        }
    }

    function N(e, t) {
        return e.some((function(e) {
            var n = e.name;
            return e.enabled && n === t
        }))
    }

    function k(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length - 1; r++) {
            var o = t[r],
                i = o ? "" + o + n : e;
            if (void 0 !== document.body.style[i]) return i
        }
        return null
    }

    function B() {
        return this.state.isDestroyed = !0, N(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[k("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function H(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function W(e, t, n, o) {
        var i = "BODY" === e.nodeName,
            f = i ? e.ownerDocument.defaultView : e;
        f.addEventListener(t, n, {
            passive: !0
        }), i || W(r(f.parentNode), t, n, o), o.push(f)
    }

    function A(e, t, n, o) {
        n.updateBound = o, H(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var i = r(e);
        return W(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n
    }

    function C() {
        this.state.eventsEnabled || (this.state = A(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function F() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = function(e, t) {
            return H(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function(e) {
                e.removeEventListener("scroll", t.updateBound)
            })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
        }(this.reference, this.state))
    }

    function P(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function S(e, t) {
        Object.keys(t).forEach((function(n) {
            var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && P(t[n]) && (r = "px"), e.style[n] = t[n] + r
        }))
    }

    function M(e, t, n) {
        var r = L(e, (function(e) {
                return e.name === t
            })),
            o = !!r && e.some((function(e) {
                return e.name === n && e.enabled && e.order < r.order
            }));
        if (!o) {
            var i = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!")
        }
        return o
    }

    function j(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = ee.indexOf(e),
            r = ee.slice(n + 1).concat(ee.slice(0, n));
        return t ? r.reverse() : r
    }
    for (var R = Math.min, U = Math.floor, Y = Math.max, I = "undefined" != typeof window && "undefined" != typeof document, q = ["Edge", "Trident", "Firefox"], V = 0, z = 0; z < q.length; z += 1)
        if (I && 0 <= navigator.userAgent.indexOf(q[z])) {
            V = 1;
            break
        }
    var G, _ = I && window.Promise ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then((function() {
                    t = !1, e()
                })))
            }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout((function() {
                    t = !1, e()
                }), V))
            }
        },
        X = function() {
            return null == G && (G = -1 !== navigator.appVersion.indexOf("MSIE 10")), G
        },
        J = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        K = function() {
            function e(e, t) {
                for (var n, r = 0; r < t.length; r++)(n = t[r]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        Q = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        Z = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        },
        $ = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        ee = $.slice(3),
        te = function() {
            function t(n, r) {
                var o = this,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                J(this, t), this.scheduleUpdate = function() {
                    return requestAnimationFrame(o.update)
                }, this.update = _(this.update.bind(this)), this.options = Z({}, t.Defaults, i), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = n && n.jquery ? n[0] : n, this.popper = r && r.jquery ? r[0] : r, this.options.modifiers = {}, Object.keys(Z({}, t.Defaults.modifiers, i.modifiers)).forEach((function(e) {
                    o.options.modifiers[e] = Z({}, t.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
                })), this.modifiers = Object.keys(this.options.modifiers).map((function(e) {
                    return Z({
                        name: e
                    }, o.options.modifiers[e])
                })).sort((function(e, t) {
                    return e.order - t.order
                })), this.modifiers.forEach((function(t) {
                    t.enabled && e(t.onLoad) && t.onLoad(o.reference, o.popper, o.options, t, o.state)
                })), this.update();
                var f = this.options.eventsEnabled;
                f && this.enableEventListeners(), this.state.eventsEnabled = f
            }
            return K(t, [{
                key: "update",
                value: function() {
                    return D.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return B.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return C.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return F.call(this)
                }
            }]), t
        }();
    return te.Utils = ("undefined" == typeof window ? global : window).PopperUtils, te.placements = $, te.Defaults = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        r = t.split("-")[1];
                    if (r) {
                        var o = e.offsets,
                            i = o.reference,
                            f = o.popper,
                            s = -1 !== ["bottom", "top"].indexOf(n),
                            a = s ? "left" : "top",
                            p = s ? "width" : "height",
                            l = {
                                start: Q({}, a, i[a]),
                                end: Q({}, a, i[a] + i[p] - f[p])
                            };
                        e.offsets.popper = Z({}, f, l[r])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n, r = t.offset,
                        o = e.placement,
                        i = e.offsets,
                        f = i.popper,
                        s = i.reference,
                        a = o.split("-")[0];
                    return n = P(+r) ? [+r, 0] : function(e, t, n, r) {
                        var o = [0, 0],
                            i = -1 !== ["right", "left"].indexOf(r),
                            f = e.split(/(\+|\-)/).map((function(e) {
                                return e.trim()
                            })),
                            s = f.indexOf(L(f, (function(e) {
                                return -1 !== e.search(/,|\s/)
                            })));
                        f[s] && -1 === f[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                        var a = /\s*,\s*|\s+/,
                            p = -1 === s ? [f] : [f.slice(0, s).concat([f[s].split(a)[0]]), [f[s].split(a)[1]].concat(f.slice(s + 1))];
                        return (p = p.map((function(e, r) {
                            var o = (1 === r ? !i : i) ? "height" : "width",
                                f = !1;
                            return e.reduce((function(e, t) {
                                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, f = !0, e) : f ? (e[e.length - 1] += t, f = !1, e) : e.concat(t)
                            }), []).map((function(e) {
                                return function(e, t, n, r) {
                                    var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                        i = +o[1],
                                        f = o[2];
                                    if (!i) return e;
                                    if (0 === f.indexOf("%")) {
                                        var s;
                                        switch (f) {
                                            case "%p":
                                                s = n;
                                                break;
                                            case "%":
                                            case "%r":
                                            default:
                                                s = r
                                        }
                                        return c(s)[t] / 100 * i
                                    }
                                    return "vh" === f || "vw" === f ? ("vh" === f ? Y(document.documentElement.clientHeight, window.innerHeight || 0) : Y(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * i : i
                                }(e, o, t, n)
                            }))
                        }))).forEach((function(e, t) {
                            e.forEach((function(n, r) {
                                P(n) && (o[t] += n * ("-" === e[r - 1] ? -1 : 1))
                            }))
                        })), o
                    }(r, f, s, a), "left" === a ? (f.top += n[0], f.left -= n[1]) : "right" === a ? (f.top += n[0], f.left += n[1]) : "top" === a ? (f.left += n[0], f.top -= n[1]) : "bottom" === a && (f.left += n[0], f.top += n[1]), e.popper = f, e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.boundariesElement || o(e.instance.popper);
                    e.instance.reference === n && (n = o(n));
                    var r = v(e.instance.popper, e.instance.reference, t.padding, n);
                    t.boundaries = r;
                    var i = t.priority,
                        f = e.offsets.popper,
                        s = {
                            primary: function(e) {
                                var n = f[e];
                                return f[e] < r[e] && !t.escapeWithReference && (n = Y(f[e], r[e])), Q({}, e, n)
                            },
                            secondary: function(e) {
                                var n = "right" === e ? "left" : "top",
                                    o = f[n];
                                return f[e] > r[e] && !t.escapeWithReference && (o = R(f[n], r[e] - ("right" === e ? f.width : f.height))), Q({}, n, o)
                            }
                        };
                    return i.forEach((function(e) {
                        var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                        f = Z({}, f, s[t](e))
                    })), e.offsets.popper = f, e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets,
                        n = t.popper,
                        r = t.reference,
                        o = e.placement.split("-")[0],
                        i = U,
                        f = -1 !== ["top", "bottom"].indexOf(o),
                        s = f ? "right" : "bottom",
                        a = f ? "left" : "top",
                        p = f ? "width" : "height";
                    return n[s] < i(r[a]) && (e.offsets.popper[a] = i(r[a]) - n[p]), n[a] > i(r[s]) && (e.offsets.popper[a] = i(r[s])), e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, n) {
                    var r;
                    if (!M(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var o = n.element;
                    if ("string" == typeof o) {
                        if (!(o = e.instance.popper.querySelector(o))) return e
                    } else if (!e.instance.popper.contains(o)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var i = e.placement.split("-")[0],
                        f = e.offsets,
                        s = f.popper,
                        a = f.reference,
                        p = -1 !== ["left", "right"].indexOf(i),
                        l = p ? "height" : "width",
                        u = p ? "Top" : "Left",
                        d = u.toLowerCase(),
                        h = p ? "left" : "top",
                        m = p ? "bottom" : "right",
                        g = E(o)[l];
                    a[m] - g < s[d] && (e.offsets.popper[d] -= s[d] - (a[m] - g)), a[d] + g > s[m] && (e.offsets.popper[d] += a[d] + g - s[m]), e.offsets.popper = c(e.offsets.popper);
                    var v = a[d] + a[l] / 2 - g / 2,
                        b = t(e.instance.popper),
                        w = parseFloat(b["margin" + u], 10),
                        y = parseFloat(b["border" + u + "Width"], 10),
                        O = v - e.offsets.popper[d] - w - y;
                    return O = Y(R(s[l] - g, O), 0), e.arrowElement = o, e.offsets.arrow = (Q(r = {}, d, Math.round(O)), Q(r, h, ""), r), e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (N(e.instance.modifiers, "inner")) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var n = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                        r = e.placement.split("-")[0],
                        o = O(r),
                        i = e.placement.split("-")[1] || "",
                        f = [];
                    switch (t.behavior) {
                        case "flip":
                            f = [r, o];
                            break;
                        case "clockwise":
                            f = j(r);
                            break;
                        case "counterclockwise":
                            f = j(r, !0);
                            break;
                        default:
                            f = t.behavior
                    }
                    return f.forEach((function(s, a) {
                        if (r !== s || f.length === a + 1) return e;
                        r = e.placement.split("-")[0], o = O(r);
                        var p = e.offsets.popper,
                            l = e.offsets.reference,
                            u = U,
                            c = "left" === r && u(p.right) > u(l.left) || "right" === r && u(p.left) < u(l.right) || "top" === r && u(p.bottom) > u(l.top) || "bottom" === r && u(p.top) < u(l.bottom),
                            d = u(p.left) < u(n.left),
                            h = u(p.right) > u(n.right),
                            m = u(p.top) < u(n.top),
                            g = u(p.bottom) > u(n.bottom),
                            v = "left" === r && d || "right" === r && h || "top" === r && m || "bottom" === r && g,
                            b = -1 !== ["top", "bottom"].indexOf(r),
                            w = !!t.flipVariations && (b && "start" === i && d || b && "end" === i && h || !b && "start" === i && m || !b && "end" === i && g);
                        (c || v || w) && (e.flipped = !0, (c || v) && (r = f[a + 1]), w && (i = function(e) {
                            return "end" === e ? "start" : "start" === e ? "end" : e
                        }(i)), e.placement = r + (i ? "-" + i : ""), e.offsets.popper = Z({}, e.offsets.popper, x(e.instance.popper, e.offsets.reference, e.placement)), e = T(e.instance.modifiers, e, "flip"))
                    })), e
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        r = e.offsets,
                        o = r.popper,
                        i = r.reference,
                        f = -1 !== ["left", "right"].indexOf(n),
                        s = -1 === ["top", "left"].indexOf(n);
                    return o[f ? "left" : "top"] = i[n] - (s ? o[f ? "width" : "height"] : 0), e.placement = O(t), e.offsets.popper = c(o), e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!M(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference,
                        n = L(e.instance.modifiers, (function(e) {
                            return "preventOverflow" === e.name
                        })).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x,
                        r = t.y,
                        i = e.offsets.popper,
                        f = L(e.instance.modifiers, (function(e) {
                            return "applyStyle" === e.name
                        })).gpuAcceleration;
                    void 0 !== f && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var s, a, p = void 0 === f ? t.gpuAcceleration : f,
                        l = d(o(e.instance.popper)),
                        u = {
                            position: i.position
                        },
                        c = {
                            left: U(i.left),
                            top: U(i.top),
                            bottom: U(i.bottom),
                            right: U(i.right)
                        },
                        h = "bottom" === n ? "top" : "bottom",
                        m = "right" === r ? "left" : "right",
                        g = k("transform");
                    if (a = "bottom" == h ? -l.height + c.bottom : c.top, s = "right" == m ? -l.width + c.right : c.left, p && g) u[g] = "translate3d(" + s + "px, " + a + "px, 0)", u[h] = 0, u[m] = 0, u.willChange = "transform";
                    else {
                        var v = "bottom" == h ? -1 : 1,
                            b = "right" == m ? -1 : 1;
                        u[h] = a * v, u[m] = s * b, u.willChange = h + ", " + m
                    }
                    var w = {
                        "x-placement": e.placement
                    };
                    return e.attributes = Z({}, w, e.attributes), e.styles = Z({}, u, e.styles), e.arrowStyles = Z({}, e.offsets.arrow, e.arrowStyles), e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return S(e.instance.popper, e.styles),
                        function(e, t) {
                            Object.keys(t).forEach((function(n) {
                                !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n])
                            }))
                        }(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && S(e.arrowElement, e.arrowStyles), e
                },
                onLoad: function(e, t, n, r, o) {
                    var i = y(0, t, e),
                        f = w(n.placement, i, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", f), S(t, {
                        position: "absolute"
                    }), n
                },
                gpuAcceleration: void 0
            }
        }
    }, te
}));