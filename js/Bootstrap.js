! function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, (function(t, e, n) {
  "use strict";

  function i(t, e) {
      for (var n = 0; n < e.length; n++) {
          var i = e[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
  }

  function s(t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t
  }

  function r() {
      return (r = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
          }
          return t
      }).apply(this, arguments)
  }
  e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;
  var o, a, l, h, c, u, f, d, g, _, m, p, v, E, y, C, T, b, I = function(t) {
          var e = !1,
              n = {
                  TRANSITION_END: "bsTransitionEnd",
                  getUID: function(t) {
                      do {
                          t += ~~(1e6 * Math.random())
                      } while (document.getElementById(t));
                      return t
                  },
                  getSelectorFromElement: function(e) {
                      var n, i = e.getAttribute("data-target");
                      i && "#" !== i || (i = e.getAttribute("href") || ""), "#" === i.charAt(0) && (n = i, i = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                      try {
                          return t(document).find(i).length > 0 ? i : null
                      } catch (t) {
                          return null
                      }
                  },
                  reflow: function(t) {
                      return t.offsetHeight
                  },
                  triggerTransitionEnd: function(n) {
                      t(n).trigger(e.end)
                  },
                  supportsTransitionEnd: function() {
                      return Boolean(e)
                  },
                  isElement: function(t) {
                      return (t[0] || t).nodeType
                  },
                  typeCheckConfig: function(t, e, i) {
                      for (var s in i)
                          if (Object.prototype.hasOwnProperty.call(i, s)) {
                              var r = i[s],
                                  o = e[s],
                                  a = o && n.isElement(o) ? "element" : (l = o, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                              if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + a + '" but expected type "' + r + '".')
                          }
                      var l
                  }
              };
          return e = ("undefined" == typeof window || !window.QUnit) && {
              end: "transitionend"
          }, t.fn.emulateTransitionEnd = function(e) {
              var i = this,
                  s = !1;
              return t(this).one(n.TRANSITION_END, (function() {
                  s = !0
              })), setTimeout((function() {
                  s || n.triggerTransitionEnd(i)
              }), e), this
          }, n.supportsTransitionEnd() && (t.event.special[n.TRANSITION_END] = {
              bindType: e.end,
              delegateType: e.end,
              handle: function(e) {
                  if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
              }
          }), n
      }(e),
      w = (a = "alert", h = "." + (l = "bs.alert"), c = (o = e).fn[a], u = {
          CLOSE: "close" + h,
          CLOSED: "closed" + h,
          CLICK_DATA_API: "click" + h + ".data-api"
      }, f = function() {
          function t(t) {
              this._element = t
          }
          var e = t.prototype;
          return e.close = function(t) {
              t = t || this._element;
              var e = this._getRootElement(t);
              this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
          }, e.dispose = function() {
              o.removeData(this._element, l), this._element = null
          }, e._getRootElement = function(t) {
              var e = I.getSelectorFromElement(t),
                  n = !1;
              return e && (n = o(e)[0]), n || (n = o(t).closest(".alert")[0]), n
          }, e._triggerCloseEvent = function(t) {
              var e = o.Event(u.CLOSE);
              return o(t).trigger(e), e
          }, e._removeElement = function(t) {
              var e = this;
              o(t).removeClass("show"), I.supportsTransitionEnd() && o(t).hasClass("fade") ? o(t).one(I.TRANSITION_END, (function(n) {
                  return e._destroyElement(t, n)
              })).emulateTransitionEnd(150) : this._destroyElement(t)
          }, e._destroyElement = function(t) {
              o(t).detach().trigger(u.CLOSED).remove()
          }, t._jQueryInterface = function(e) {
              return this.each((function() {
                  var n = o(this),
                      i = n.data(l);
                  i || (i = new t(this), n.data(l, i)), "close" === e && i[e](this)
              }))
          }, t._handleDismiss = function(t) {
              return function(e) {
                  e && e.preventDefault(), t.close(this)
              }
          }, s(t, null, [{
              key: "VERSION",
              get: function() {
                  return "4.0.0"
              }
          }]), t
      }(), o(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', f._handleDismiss(new f)), o.fn[a] = f._jQueryInterface, o.fn[a].Constructor = f, o.fn[a].noConflict = function() {
          return o.fn[a] = c, f._jQueryInterface
      }, f),
      A = (g = "button", m = "." + (_ = "bs.button"), p = ".data-api", v = (d = e).fn[g], E = "active", y = '[data-toggle^="button"]', C = ".btn", T = {
          CLICK_DATA_API: "click" + m + p,
          FOCUS_BLUR_DATA_API: "focus" + m + p + " blur" + m + p
      }, b = function() {
          function t(t) {
              this._element = t
          }
          var e = t.prototype;
          return e.toggle = function() {
              var t = !0,
                  e = !0,
                  n = d(this._element).closest('[data-toggle="buttons"]')[0];
              if (n) {
                  var i = d(this._element).find("input")[0];
                  if (i) {
                      if ("radio" === i.type)
                          if (i.checked && d(this._element).hasClass(E)) t = !1;
                          else {
                              var s = d(n).find(".active")[0];
                              s && d(s).removeClass(E)
                          }
                      if (t) {
                          if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                          i.checked = !d(this._element).hasClass(E), d(i).trigger("change")
                      }
                      i.focus(), e = !1
                  }
              }
              e && this._element.setAttribute("aria-pressed", !d(this._element).hasClass(E)), t && d(this._element).toggleClass(E)
          }, e.dispose = function() {
              d.removeData(this._element, _), this._element = null
          }, t._jQueryInterface = function(e) {
              return this.each((function() {
                  var n = d(this).data(_);
                  n || (n = new t(this), d(this).data(_, n)), "toggle" === e && n[e]()
              }))
          }, s(t, null, [{
              key: "VERSION",
              get: function() {
                  return "4.0.0"
              }
          }]), t
      }(), d(document).on(T.CLICK_DATA_API, y, (function(t) {
          t.preventDefault();
          var e = t.target;
          d(e).hasClass("btn") || (e = d(e).closest(C)), b._jQueryInterface.call(d(e), "toggle")
      })).on(T.FOCUS_BLUR_DATA_API, y, (function(t) {
          var e = d(t.target).closest(C)[0];
          d(e).toggleClass("focus", /^focus(in)?$/.test(t.type))
      })), d.fn[g] = b._jQueryInterface, d.fn[g].Constructor = b, d.fn[g].noConflict = function() {
          return d.fn[g] = v, b._jQueryInterface
      }, b),
      D = function(t) {
          var e = "carousel",
              n = "bs.carousel",
              i = "." + n,
              o = t.fn[e],
              a = {
                  interval: 5e3,
                  keyboard: !0,
                  slide: !1,
                  pause: "hover",
                  wrap: !0
              },
              l = {
                  interval: "(number|boolean)",
                  keyboard: "boolean",
                  slide: "(boolean|string)",
                  pause: "(string|boolean)",
                  wrap: "boolean"
              },
              h = "next",
              c = "prev",
              u = {
                  SLIDE: "slide" + i,
                  SLID: "slid" + i,
                  KEYDOWN: "keydown" + i,
                  MOUSEENTER: "mouseenter" + i,
                  MOUSELEAVE: "mouseleave" + i,
                  TOUCHEND: "touchend" + i,
                  LOAD_DATA_API: "load" + i + ".data-api",
                  CLICK_DATA_API: "click" + i + ".data-api"
              },
              f = "active",
              d = ".active.carousel-item",
              g = function() {
                  function o(e, n) {
                      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(".carousel-indicators")[0], this._addEventListeners()
                  }
                  var g = o.prototype;
                  return g.next = function() {
                      this._isSliding || this._slide(h)
                  }, g.nextWhenVisible = function() {
                      !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
                  }, g.prev = function() {
                      this._isSliding || this._slide(c)
                  }, g.pause = function(e) {
                      e || (this._isPaused = !0), t(this._element).find(".carousel-item-next, .carousel-item-prev")[0] && I.supportsTransitionEnd() && (I.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                  }, g.cycle = function(t) {
                      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                  }, g.to = function(e) {
                      var n = this;
                      this._activeElement = t(this._element).find(d)[0];
                      var i = this._getItemIndex(this._activeElement);
                      if (!(e > this._items.length - 1 || e < 0))
                          if (this._isSliding) t(this._element).one(u.SLID, (function() {
                              return n.to(e)
                          }));
                          else {
                              if (i === e) return this.pause(), void this.cycle();
                              var s = e > i ? h : c;
                              this._slide(s, this._items[e])
                          }
                  }, g.dispose = function() {
                      t(this._element).off(i), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                  }, g._getConfig = function(t) {
                      return t = r({}, a, t), I.typeCheckConfig(e, t, l), t
                  }, g._addEventListeners = function() {
                      var e = this;
                      this._config.keyboard && t(this._element).on(u.KEYDOWN, (function(t) {
                          return e._keydown(t)
                      })), "hover" === this._config.pause && (t(this._element).on(u.MOUSEENTER, (function(t) {
                          return e.pause(t)
                      })).on(u.MOUSELEAVE, (function(t) {
                          return e.cycle(t)
                      })), "ontouchstart" in document.documentElement && t(this._element).on(u.TOUCHEND, (function() {
                          e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout((function(t) {
                              return e.cycle(t)
                          }), 500 + e._config.interval)
                      })))
                  }, g._keydown = function(t) {
                      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                          case 37:
                              t.preventDefault(), this.prev();
                              break;
                          case 39:
                              t.preventDefault(), this.next()
                      }
                  }, g._getItemIndex = function(e) {
                      return this._items = t.makeArray(t(e).parent().find(".carousel-item")), this._items.indexOf(e)
                  }, g._getItemByDirection = function(t, e) {
                      var n = t === h,
                          i = t === c,
                          s = this._getItemIndex(e),
                          r = this._items.length - 1;
                      if ((i && 0 === s || n && s === r) && !this._config.wrap) return e;
                      var o = (s + (t === c ? -1 : 1)) % this._items.length;
                      return -1 === o ? this._items[this._items.length - 1] : this._items[o]
                  }, g._triggerSlideEvent = function(e, n) {
                      var i = this._getItemIndex(e),
                          s = this._getItemIndex(t(this._element).find(d)[0]),
                          r = t.Event(u.SLIDE, {
                              relatedTarget: e,
                              direction: n,
                              from: s,
                              to: i
                          });
                      return t(this._element).trigger(r), r
                  }, g._setActiveIndicatorElement = function(e) {
                      if (this._indicatorsElement) {
                          t(this._indicatorsElement).find(".active").removeClass(f);
                          var n = this._indicatorsElement.children[this._getItemIndex(e)];
                          n && t(n).addClass(f)
                      }
                  }, g._slide = function(e, n) {
                      var i, s, r, o = this,
                          a = t(this._element).find(d)[0],
                          l = this._getItemIndex(a),
                          c = n || a && this._getItemByDirection(e, a),
                          g = this._getItemIndex(c),
                          _ = Boolean(this._interval);
                      if (e === h ? (i = "carousel-item-left", s = "carousel-item-next", r = "left") : (i = "carousel-item-right", s = "carousel-item-prev", r = "right"), c && t(c).hasClass(f)) this._isSliding = !1;
                      else if (!this._triggerSlideEvent(c, r).isDefaultPrevented() && a && c) {
                          this._isSliding = !0, _ && this.pause(), this._setActiveIndicatorElement(c);
                          var m = t.Event(u.SLID, {
                              relatedTarget: c,
                              direction: r,
                              from: l,
                              to: g
                          });
                          I.supportsTransitionEnd() && t(this._element).hasClass("slide") ? (t(c).addClass(s), I.reflow(c), t(a).addClass(i), t(c).addClass(i), t(a).one(I.TRANSITION_END, (function() {
                              t(c).removeClass(i + " " + s).addClass(f), t(a).removeClass(f + " " + s + " " + i), o._isSliding = !1, setTimeout((function() {
                                  return t(o._element).trigger(m)
                              }), 0)
                          })).emulateTransitionEnd(600)) : (t(a).removeClass(f), t(c).addClass(f), this._isSliding = !1, t(this._element).trigger(m)), _ && this.cycle()
                      }
                  }, o._jQueryInterface = function(e) {
                      return this.each((function() {
                          var i = t(this).data(n),
                              s = r({}, a, t(this).data());
                          "object" == typeof e && (s = r({}, s, e));
                          var l = "string" == typeof e ? e : s.slide;
                          if (i || (i = new o(this, s), t(this).data(n, i)), "number" == typeof e) i.to(e);
                          else if ("string" == typeof l) {
                              if (void 0 === i[l]) throw new TypeError('No method named "' + l + '"');
                              i[l]()
                          } else s.interval && (i.pause(), i.cycle())
                      }))
                  }, o._dataApiClickHandler = function(e) {
                      var i = I.getSelectorFromElement(this);
                      if (i) {
                          var s = t(i)[0];
                          if (s && t(s).hasClass("carousel")) {
                              var a = r({}, t(s).data(), t(this).data()),
                                  l = this.getAttribute("data-slide-to");
                              l && (a.interval = !1), o._jQueryInterface.call(t(s), a), l && t(s).data(n).to(l), e.preventDefault()
                          }
                      }
                  }, s(o, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.0.0"
                      }
                  }, {
                      key: "Default",
                      get: function() {
                          return a
                      }
                  }]), o
              }();
          return t(document).on(u.CLICK_DATA_API, "[data-slide], [data-slide-to]", g._dataApiClickHandler), t(window).on(u.LOAD_DATA_API, (function() {
              t('[data-ride="carousel"]').each((function() {
                  var e = t(this);
                  g._jQueryInterface.call(e, e.data())
              }))
          })), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function() {
              return t.fn[e] = o, g._jQueryInterface
          }, g
      }(e),
      S = function(t) {
          var e = "collapse",
              n = "bs.collapse",
              i = "." + n,
              o = t.fn[e],
              a = {
                  toggle: !0,
                  parent: ""
              },
              l = {
                  toggle: "boolean",
                  parent: "(string|element)"
              },
              h = {
                  SHOW: "show" + i,
                  SHOWN: "shown" + i,
                  HIDE: "hide" + i,
                  HIDDEN: "hidden" + i,
                  CLICK_DATA_API: "click" + i + ".data-api"
              },
              c = "show",
              u = "collapse",
              f = "collapsing",
              d = "collapsed",
              g = "width",
              _ = '[data-toggle="collapse"]',
              m = function() {
                  function i(e, n) {
                      this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                      for (var i = t(_), s = 0; s < i.length; s++) {
                          var r = i[s],
                              o = I.getSelectorFromElement(r);
                          null !== o && t(o).filter(e).length > 0 && (this._selector = o, this._triggerArray.push(r))
                      }
                      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                  }
                  var o = i.prototype;
                  return o.toggle = function() {
                      t(this._element).hasClass(c) ? this.hide() : this.show()
                  }, o.show = function() {
                      var e, s, r = this;
                      if (!(this._isTransitioning || t(this._element).hasClass(c) || (this._parent && 0 === (e = t.makeArray(t(this._parent).find(".show, .collapsing").filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), e && (s = t(e).not(this._selector).data(n)) && s._isTransitioning))) {
                          var o = t.Event(h.SHOW);
                          if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                              e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"), s || t(e).data(n, null));
                              var a = this._getDimension();
                              t(this._element).removeClass(u).addClass(f), this._element.style[a] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(d).attr("aria-expanded", !0), this.setTransitioning(!0);
                              var l = function() {
                                  t(r._element).removeClass(f).addClass(u).addClass(c), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger(h.SHOWN)
                              };
                              if (I.supportsTransitionEnd()) {
                                  var g = "scroll" + (a[0].toUpperCase() + a.slice(1));
                                  t(this._element).one(I.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[a] = this._element[g] + "px"
                              } else l()
                          }
                      }
                  }, o.hide = function() {
                      var e = this;
                      if (!this._isTransitioning && t(this._element).hasClass(c)) {
                          var n = t.Event(h.HIDE);
                          if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                              var i = this._getDimension();
                              if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", I.reflow(this._element), t(this._element).addClass(f).removeClass(u).removeClass(c), this._triggerArray.length > 0)
                                  for (var s = 0; s < this._triggerArray.length; s++) {
                                      var r = this._triggerArray[s],
                                          o = I.getSelectorFromElement(r);
                                      null !== o && (t(o).hasClass(c) || t(r).addClass(d).attr("aria-expanded", !1))
                                  }
                              this.setTransitioning(!0);
                              var a = function() {
                                  e.setTransitioning(!1), t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN)
                              };
                              this._element.style[i] = "", I.supportsTransitionEnd() ? t(this._element).one(I.TRANSITION_END, a).emulateTransitionEnd(600) : a()
                          }
                      }
                  }, o.setTransitioning = function(t) {
                      this._isTransitioning = t
                  }, o.dispose = function() {
                      t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                  }, o._getConfig = function(t) {
                      return (t = r({}, a, t)).toggle = Boolean(t.toggle), I.typeCheckConfig(e, t, l), t
                  }, o._getDimension = function() {
                      return t(this._element).hasClass(g) ? g : "height"
                  }, o._getParent = function() {
                      var e = this,
                          n = null;
                      I.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
                      var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                      return t(n).find(s).each((function(t, n) {
                          e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                      })), n
                  }, o._addAriaAndCollapsedClass = function(e, n) {
                      if (e) {
                          var i = t(e).hasClass(c);
                          n.length > 0 && t(n).toggleClass(d, !i).attr("aria-expanded", i)
                      }
                  }, i._getTargetFromElement = function(e) {
                      var n = I.getSelectorFromElement(e);
                      return n ? t(n)[0] : null
                  }, i._jQueryInterface = function(e) {
                      return this.each((function() {
                          var s = t(this),
                              o = s.data(n),
                              l = r({}, a, s.data(), "object" == typeof e && e);
                          if (!o && l.toggle && /show|hide/.test(e) && (l.toggle = !1), o || (o = new i(this, l), s.data(n, o)), "string" == typeof e) {
                              if (void 0 === o[e]) throw new TypeError('No method named "' + e + '"');
                              o[e]()
                          }
                      }))
                  }, s(i, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.0.0"
                      }
                  }, {
                      key: "Default",
                      get: function() {
                          return a
                      }
                  }]), i
              }();
          return t(document).on(h.CLICK_DATA_API, _, (function(e) {
              "A" === e.currentTarget.tagName && e.preventDefault();
              var i = t(this),
                  s = I.getSelectorFromElement(this);
              t(s).each((function() {
                  var e = t(this),
                      s = e.data(n) ? "toggle" : i.data();
                  m._jQueryInterface.call(e, s)
              }))
          })), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function() {
              return t.fn[e] = o, m._jQueryInterface
          }, m
      }(e),
      N = function(t) {
          var e = "dropdown",
              i = "bs.dropdown",
              o = "." + i,
              a = ".data-api",
              l = t.fn[e],
              h = new RegExp("38|40|27"),
              c = {
                  HIDE: "hide" + o,
                  HIDDEN: "hidden" + o,
                  SHOW: "show" + o,
                  SHOWN: "shown" + o,
                  CLICK: "click" + o,
                  CLICK_DATA_API: "click" + o + a,
                  KEYDOWN_DATA_API: "keydown" + o + a,
                  KEYUP_DATA_API: "keyup" + o + a
              },
              u = "disabled",
              f = "show",
              d = "dropup",
              g = "dropdown-menu-right",
              _ = '[data-toggle="dropdown"]',
              m = ".dropdown-menu",
              p = {
                  offset: 0,
                  flip: !0,
                  boundary: "scrollParent"
              },
              v = {
                  offset: "(number|string|function)",
                  flip: "boolean",
                  boundary: "(string|element)"
              },
              E = function() {
                  function a(t, e) {
                      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                  }
                  var l = a.prototype;
                  return l.toggle = function() {
                      if (!this._element.disabled && !t(this._element).hasClass(u)) {
                          var e = a._getParentFromElement(this._element),
                              i = t(this._menu).hasClass(f);
                          if (a._clearMenus(), !i) {
                              var s = {
                                      relatedTarget: this._element
                                  },
                                  r = t.Event(c.SHOW, s);
                              if (t(e).trigger(r), !r.isDefaultPrevented()) {
                                  if (!this._inNavbar) {
                                      if (void 0 === n) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                      var o = this._element;
                                      t(e).hasClass(d) && (t(this._menu).hasClass("dropdown-menu-left") || t(this._menu).hasClass(g)) && (o = e), "scrollParent" !== this._config.boundary && t(e).addClass("position-static"), this._popper = new n(o, this._menu, this._getPopperConfig())
                                  }
                                  "ontouchstart" in document.documentElement && 0 === t(e).closest(".navbar-nav").length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(f), t(e).toggleClass(f).trigger(t.Event(c.SHOWN, s))
                              }
                          }
                      }
                  }, l.dispose = function() {
                      t.removeData(this._element, i), t(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                  }, l.update = function() {
                      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                  }, l._addEventListeners = function() {
                      var e = this;
                      t(this._element).on(c.CLICK, (function(t) {
                          t.preventDefault(), t.stopPropagation(), e.toggle()
                      }))
                  }, l._getConfig = function(n) {
                      return n = r({}, this.constructor.Default, t(this._element).data(), n), I.typeCheckConfig(e, n, this.constructor.DefaultType), n
                  }, l._getMenuElement = function() {
                      if (!this._menu) {
                          var e = a._getParentFromElement(this._element);
                          this._menu = t(e).find(m)[0]
                      }
                      return this._menu
                  }, l._getPlacement = function() {
                      var e = t(this._element).parent(),
                          n = "bottom-start";
                      return e.hasClass(d) ? (n = "top-start", t(this._menu).hasClass(g) && (n = "top-end")) : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass(g) && (n = "bottom-end"), n
                  }, l._detectNavbar = function() {
                      return t(this._element).closest(".navbar").length > 0
                  }, l._getPopperConfig = function() {
                      var t = this,
                          e = {};
                      return "function" == typeof this._config.offset ? e.fn = function(e) {
                          return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}), e
                      } : e.offset = this._config.offset, {
                          placement: this._getPlacement(),
                          modifiers: {
                              offset: e,
                              flip: {
                                  enabled: this._config.flip
                              },
                              preventOverflow: {
                                  boundariesElement: this._config.boundary
                              }
                          }
                      }
                  }, a._jQueryInterface = function(e) {
                      return this.each((function() {
                          var n = t(this).data(i);
                          if (n || (n = new a(this, "object" == typeof e ? e : null), t(this).data(i, n)), "string" == typeof e) {
                              if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                              n[e]()
                          }
                      }))
                  }, a._clearMenus = function(e) {
                      if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                          for (var n = t.makeArray(t(_)), s = 0; s < n.length; s++) {
                              var r = a._getParentFromElement(n[s]),
                                  o = t(n[s]).data(i),
                                  l = {
                                      relatedTarget: n[s]
                                  };
                              if (o) {
                                  var h = o._menu;
                                  if (t(r).hasClass(f) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(r, e.target))) {
                                      var u = t.Event(c.HIDE, l);
                                      t(r).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), n[s].setAttribute("aria-expanded", "false"), t(h).removeClass(f), t(r).removeClass(f).trigger(t.Event(c.HIDDEN, l)))
                                  }
                              }
                          }
                  }, a._getParentFromElement = function(e) {
                      var n, i = I.getSelectorFromElement(e);
                      return i && (n = t(i)[0]), n || e.parentNode
                  }, a._dataApiKeydownHandler = function(e) {
                      if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(m).length)) : h.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(u))) {
                          var n = a._getParentFromElement(this),
                              i = t(n).hasClass(f);
                          if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
                              var s = t(n).find(".dropdown-menu .dropdown-item:not(.disabled)").get();
                              if (0 !== s.length) {
                                  var r = s.indexOf(e.target);
                                  38 === e.which && r > 0 && r--, 40 === e.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus()
                              }
                          } else {
                              if (27 === e.which) {
                                  var o = t(n).find(_)[0];
                                  t(o).trigger("focus")
                              }
                              t(this).trigger("click")
                          }
                      }
                  }, s(a, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.0.0"
                      }
                  }, {
                      key: "Default",
                      get: function() {
                          return p
                      }
                  }, {
                      key: "DefaultType",
                      get: function() {
                          return v
                      }
                  }]), a
              }();
          return t(document).on(c.KEYDOWN_DATA_API, _, E._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, m, E._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, E._clearMenus).on(c.CLICK_DATA_API, _, (function(e) {
              e.preventDefault(), e.stopPropagation(), E._jQueryInterface.call(t(this), "toggle")
          })).on(c.CLICK_DATA_API, ".dropdown form", (function(t) {
              t.stopPropagation()
          })), t.fn[e] = E._jQueryInterface, t.fn[e].Constructor = E, t.fn[e].noConflict = function() {
              return t.fn[e] = l, E._jQueryInterface
          }, E
      }(e),
      O = function(t) {
          var e = "bs.modal",
              n = "." + e,
              i = t.fn.modal,
              o = {
                  backdrop: !0,
                  keyboard: !0,
                  focus: !0,
                  show: !0
              },
              a = {
                  backdrop: "(boolean|string)",
                  keyboard: "boolean",
                  focus: "boolean",
                  show: "boolean"
              },
              l = {
                  HIDE: "hide" + n,
                  HIDDEN: "hidden" + n,
                  SHOW: "show" + n,
                  SHOWN: "shown" + n,
                  FOCUSIN: "focusin" + n,
                  RESIZE: "resize" + n,
                  CLICK_DISMISS: "click.dismiss" + n,
                  KEYDOWN_DISMISS: "keydown.dismiss" + n,
                  MOUSEUP_DISMISS: "mouseup.dismiss" + n,
                  MOUSEDOWN_DISMISS: "mousedown.dismiss" + n,
                  CLICK_DATA_API: "click" + n + ".data-api"
              },
              h = "modal-open",
              c = "fade",
              u = "show",
              f = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
              d = ".sticky-top",
              g = ".navbar-toggler",
              _ = function() {
                  function i(e, n) {
                      this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(".modal-dialog")[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                  }
                  var _ = i.prototype;
                  return _.toggle = function(t) {
                      return this._isShown ? this.hide() : this.show(t)
                  }, _.show = function(e) {
                      var n = this;
                      if (!this._isTransitioning && !this._isShown) {
                          I.supportsTransitionEnd() && t(this._element).hasClass(c) && (this._isTransitioning = !0);
                          var i = t.Event(l.SHOW, {
                              relatedTarget: e
                          });
                          t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(h), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(l.CLICK_DISMISS, '[data-dismiss="modal"]', (function(t) {
                              return n.hide(t)
                          })), t(this._dialog).on(l.MOUSEDOWN_DISMISS, (function() {
                              t(n._element).one(l.MOUSEUP_DISMISS, (function(e) {
                                  t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                              }))
                          })), this._showBackdrop((function() {
                              return n._showElement(e)
                          })))
                      }
                  }, _.hide = function(e) {
                      var n = this;
                      if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                          var i = t.Event(l.HIDE);
                          if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                              this._isShown = !1;
                              var s = I.supportsTransitionEnd() && t(this._element).hasClass(c);
                              s && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(l.FOCUSIN), t(this._element).removeClass(u), t(this._element).off(l.CLICK_DISMISS), t(this._dialog).off(l.MOUSEDOWN_DISMISS), s ? t(this._element).one(I.TRANSITION_END, (function(t) {
                                  return n._hideModal(t)
                              })).emulateTransitionEnd(300) : this._hideModal()
                          }
                      }
                  }, _.dispose = function() {
                      t.removeData(this._element, e), t(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                  }, _.handleUpdate = function() {
                      this._adjustDialog()
                  }, _._getConfig = function(t) {
                      return t = r({}, o, t), I.typeCheckConfig("modal", t, a), t
                  }, _._showElement = function(e) {
                      var n = this,
                          i = I.supportsTransitionEnd() && t(this._element).hasClass(c);
                      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && I.reflow(this._element), t(this._element).addClass(u), this._config.focus && this._enforceFocus();
                      var s = t.Event(l.SHOWN, {
                              relatedTarget: e
                          }),
                          r = function() {
                              n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(s)
                          };
                      i ? t(this._dialog).one(I.TRANSITION_END, r).emulateTransitionEnd(300) : r()
                  }, _._enforceFocus = function() {
                      var e = this;
                      t(document).off(l.FOCUSIN).on(l.FOCUSIN, (function(n) {
                          document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                      }))
                  }, _._setEscapeEvent = function() {
                      var e = this;
                      this._isShown && this._config.keyboard ? t(this._element).on(l.KEYDOWN_DISMISS, (function(t) {
                          27 === t.which && (t.preventDefault(), e.hide())
                      })) : this._isShown || t(this._element).off(l.KEYDOWN_DISMISS)
                  }, _._setResizeEvent = function() {
                      var e = this;
                      this._isShown ? t(window).on(l.RESIZE, (function(t) {
                          return e.handleUpdate(t)
                      })) : t(window).off(l.RESIZE)
                  }, _._hideModal = function() {
                      var e = this;
                      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop((function() {
                          t(document.body).removeClass(h), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(l.HIDDEN)
                      }))
                  }, _._removeBackdrop = function() {
                      this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                  }, _._showBackdrop = function(e) {
                      var n = this,
                          i = t(this._element).hasClass(c) ? c : "";
                      if (this._isShown && this._config.backdrop) {
                          var s = I.supportsTransitionEnd() && i;
                          if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(l.CLICK_DISMISS, (function(t) {
                                  n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                              })), s && I.reflow(this._backdrop), t(this._backdrop).addClass(u), !e) return;
                          if (!s) return void e();
                          t(this._backdrop).one(I.TRANSITION_END, e).emulateTransitionEnd(150)
                      } else if (!this._isShown && this._backdrop) {
                          t(this._backdrop).removeClass(u);
                          var r = function() {
                              n._removeBackdrop(), e && e()
                          };
                          I.supportsTransitionEnd() && t(this._element).hasClass(c) ? t(this._backdrop).one(I.TRANSITION_END, r).emulateTransitionEnd(150) : r()
                      } else e && e()
                  }, _._adjustDialog = function() {
                      var t = this._element.scrollHeight > document.documentElement.clientHeight;
                      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                  }, _._resetAdjustments = function() {
                      this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                  }, _._checkScrollbar = function() {
                      var t = document.body.getBoundingClientRect();
                      this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                  }, _._setScrollbar = function() {
                      var e = this;
                      if (this._isBodyOverflowing) {
                          t(f).each((function(n, i) {
                              var s = t(i)[0].style.paddingRight,
                                  r = t(i).css("padding-right");
                              t(i).data("padding-right", s).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                          })), t(d).each((function(n, i) {
                              var s = t(i)[0].style.marginRight,
                                  r = t(i).css("margin-right");
                              t(i).data("margin-right", s).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                          })), t(g).each((function(n, i) {
                              var s = t(i)[0].style.marginRight,
                                  r = t(i).css("margin-right");
                              t(i).data("margin-right", s).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px")
                          }));
                          var n = document.body.style.paddingRight,
                              i = t("body").css("padding-right");
                          t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                      }
                  }, _._resetScrollbar = function() {
                      t(f).each((function(e, n) {
                          var i = t(n).data("padding-right");
                          void 0 !== i && t(n).css("padding-right", i).removeData("padding-right")
                      })), t(d + ", " + g).each((function(e, n) {
                          var i = t(n).data("margin-right");
                          void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
                      }));
                      var e = t("body").data("padding-right");
                      void 0 !== e && t("body").css("padding-right", e).removeData("padding-right")
                  }, _._getScrollbarWidth = function() {
                      var t = document.createElement("div");
                      t.className = "modal-scrollbar-measure", document.body.appendChild(t);
                      var e = t.getBoundingClientRect().width - t.clientWidth;
                      return document.body.removeChild(t), e
                  }, i._jQueryInterface = function(n, s) {
                      return this.each((function() {
                          var o = t(this).data(e),
                              a = r({}, i.Default, t(this).data(), "object" == typeof n && n);
                          if (o || (o = new i(this, a), t(this).data(e, o)), "string" == typeof n) {
                              if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                              o[n](s)
                          } else a.show && o.show(s)
                      }))
                  }, s(i, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.0.0"
                      }
                  }, {
                      key: "Default",
                      get: function() {
                          return o
                      }
                  }]), i
              }();
          return t(document).on(l.CLICK_DATA_API, '[data-toggle="modal"]', (function(n) {
              var i, s = this,
                  o = I.getSelectorFromElement(this);
              o && (i = t(o)[0]);
              var a = t(i).data(e) ? "toggle" : r({}, t(i).data(), t(this).data());
              "A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();
              var h = t(i).one(l.SHOW, (function(e) {
                  e.isDefaultPrevented() || h.one(l.HIDDEN, (function() {
                      t(s).is(":visible") && s.focus()
                  }))
              }));
              _._jQueryInterface.call(t(i), a, this)
          })), t.fn.modal = _._jQueryInterface, t.fn.modal.Constructor = _, t.fn.modal.noConflict = function() {
              return t.fn.modal = i, _._jQueryInterface
          }, _
      }(e),
      k = function(t) {
          var e = "tooltip",
              i = "bs.tooltip",
              o = "." + i,
              a = t.fn[e],
              l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
              h = {
                  animation: "boolean",
                  template: "string",
                  title: "(string|element|function)",
                  trigger: "string",
                  delay: "(number|object)",
                  html: "boolean",
                  selector: "(string|boolean)",
                  placement: "(string|function)",
                  offset: "(number|string)",
                  container: "(string|element|boolean)",
                  fallbackPlacement: "(string|array)",
                  boundary: "(string|element)"
              },
              c = {
                  AUTO: "auto",
                  TOP: "top",
                  RIGHT: "right",
                  BOTTOM: "bottom",
                  LEFT: "left"
              },
              u = {
                  animation: !0,
                  template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                  trigger: "hover focus",
                  title: "",
                  delay: 0,
                  html: !1,
                  selector: !1,
                  placement: "top",
                  offset: 0,
                  container: !1,
                  fallbackPlacement: "flip",
                  boundary: "scrollParent"
              },
              f = "show",
              d = "out",
              g = {
                  HIDE: "hide" + o,
                  HIDDEN: "hidden" + o,
                  SHOW: "show" + o,
                  SHOWN: "shown" + o,
                  INSERTED: "inserted" + o,
                  CLICK: "click" + o,
                  FOCUSIN: "focusin" + o,
                  FOCUSOUT: "focusout" + o,
                  MOUSEENTER: "mouseenter" + o,
                  MOUSELEAVE: "mouseleave" + o
              },
              _ = "fade",
              m = "show",
              p = "hover",
              v = "focus",
              E = function() {
                  function a(t, e) {
                      if (void 0 === n) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
                  }
                  var E = a.prototype;
                  return E.enable = function() {
                      this._isEnabled = !0
                  }, E.disable = function() {
                      this._isEnabled = !1
                  }, E.toggleEnabled = function() {
                      this._isEnabled = !this._isEnabled
                  }, E.toggle = function(e) {
                      if (this._isEnabled)
                          if (e) {
                              var n = this.constructor.DATA_KEY,
                                  i = t(e.currentTarget).data(n);
                              i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                          } else {
                              if (t(this.getTipElement()).hasClass(m)) return void this._leave(null, this);
                              this._enter(null, this)
                          }
                  }, E.dispose = function() {
                      clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                  }, E.show = function() {
                      var e = this;
                      if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                      var i = t.Event(this.constructor.Event.SHOW);
                      if (this.isWithContent() && this._isEnabled) {
                          t(this.element).trigger(i);
                          var s = t.contains(this.element.ownerDocument.documentElement, this.element);
                          if (i.isDefaultPrevented() || !s) return;
                          var r = this.getTipElement(),
                              o = I.getUID(this.constructor.NAME);
                          r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && t(r).addClass(_);
                          var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement,
                              h = this._getAttachment(l);
                          this.addAttachmentClass(h);
                          var c = !1 === this.config.container ? document.body : t(this.config.container);
                          t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, {
                              placement: h,
                              modifiers: {
                                  offset: {
                                      offset: this.config.offset
                                  },
                                  flip: {
                                      behavior: this.config.fallbackPlacement
                                  },
                                  arrow: {
                                      element: ".arrow"
                                  },
                                  preventOverflow: {
                                      boundariesElement: this.config.boundary
                                  }
                              },
                              onCreate: function(t) {
                                  t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                              },
                              onUpdate: function(t) {
                                  e._handlePopperPlacementChange(t)
                              }
                          }), t(r).addClass(m), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop);
                          var u = function() {
                              e.config.animation && e._fixTransition();
                              var n = e._hoverState;
                              e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === d && e._leave(null, e)
                          };
                          I.supportsTransitionEnd() && t(this.tip).hasClass(_) ? t(this.tip).one(I.TRANSITION_END, u).emulateTransitionEnd(a._TRANSITION_DURATION) : u()
                      }
                  }, E.hide = function(e) {
                      var n = this,
                          i = this.getTipElement(),
                          s = t.Event(this.constructor.Event.HIDE),
                          r = function() {
                              n._hoverState !== f && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                          };
                      t(this.element).trigger(s), s.isDefaultPrevented() || (t(i).removeClass(m), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger[v] = !1, this._activeTrigger[p] = !1, I.supportsTransitionEnd() && t(this.tip).hasClass(_) ? t(i).one(I.TRANSITION_END, r).emulateTransitionEnd(150) : r(), this._hoverState = "")
                  }, E.update = function() {
                      null !== this._popper && this._popper.scheduleUpdate()
                  }, E.isWithContent = function() {
                      return Boolean(this.getTitle())
                  }, E.addAttachmentClass = function(e) {
                      t(this.getTipElement()).addClass("bs-tooltip-" + e)
                  }, E.getTipElement = function() {
                      return this.tip = this.tip || t(this.config.template)[0], this.tip
                  }, E.setContent = function() {
                      var e = t(this.getTipElement());
                      this.setElementContent(e.find(".tooltip-inner"), this.getTitle()), e.removeClass(_ + " " + m)
                  }, E.setElementContent = function(e, n) {
                      var i = this.config.html;
                      "object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
                  }, E.getTitle = function() {
                      var t = this.element.getAttribute("data-original-title");
                      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
                  }, E._getAttachment = function(t) {
                      return c[t.toUpperCase()]
                  }, E._setListeners = function() {
                      var e = this;
                      this.config.trigger.split(" ").forEach((function(n) {
                          if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, (function(t) {
                              return e.toggle(t)
                          }));
                          else if ("manual" !== n) {
                              var i = n === p ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                  s = n === p ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                              t(e.element).on(i, e.config.selector, (function(t) {
                                  return e._enter(t)
                              })).on(s, e.config.selector, (function(t) {
                                  return e._leave(t)
                              }))
                          }
                          t(e.element).closest(".modal").on("hide.bs.modal", (function() {
                              return e.hide()
                          }))
                      })), this.config.selector ? this.config = r({}, this.config, {
                          trigger: "manual",
                          selector: ""
                      }) : this._fixTitle()
                  }, E._fixTitle = function() {
                      var t = typeof this.element.getAttribute("data-original-title");
                      (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                  }, E._enter = function(e, n) {
                      var i = this.constructor.DATA_KEY;
                      (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? v : p] = !0), t(n.getTipElement()).hasClass(m) || n._hoverState === f ? n._hoverState = f : (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.show ? n._timeout = setTimeout((function() {
                          n._hoverState === f && n.show()
                      }), n.config.delay.show) : n.show())
                  }, E._leave = function(e, n) {
                      var i = this.constructor.DATA_KEY;
                      (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? v : p] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout((function() {
                          n._hoverState === d && n.hide()
                      }), n.config.delay.hide) : n.hide())
                  }, E._isWithActiveTrigger = function() {
                      for (var t in this._activeTrigger)
                          if (this._activeTrigger[t]) return !0;
                      return !1
                  }, E._getConfig = function(n) {
                      return "number" == typeof(n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = {
                          show: n.delay,
                          hide: n.delay
                      }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), I.typeCheckConfig(e, n, this.constructor.DefaultType), n
                  }, E._getDelegateConfig = function() {
                      var t = {};
                      if (this.config)
                          for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                      return t
                  }, E._cleanTipClass = function() {
                      var e = t(this.getTipElement()),
                          n = e.attr("class").match(l);
                      null !== n && n.length > 0 && e.removeClass(n.join(""))
                  }, E._handlePopperPlacementChange = function(t) {
                      this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
                  }, E._fixTransition = function() {
                      var e = this.getTipElement(),
                          n = this.config.animation;
                      null === e.getAttribute("x-placement") && (t(e).removeClass(_), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                  }, a._jQueryInterface = function(e) {
                      return this.each((function() {
                          var n = t(this).data(i),
                              s = "object" == typeof e && e;
                          if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this, s), t(this).data(i, n)), "string" == typeof e)) {
                              if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                              n[e]()
                          }
                      }))
                  }, s(a, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.0.0"
                      }
                  }, {
                      key: "Default",
                      get: function() {
                          return u
                      }
                  }, {
                      key: "NAME",
                      get: function() {
                          return e
                      }
                  }, {
                      key: "DATA_KEY",
                      get: function() {
                          return i
                      }
                  }, {
                      key: "Event",
                      get: function() {
                          return g
                      }
                  }, {
                      key: "EVENT_KEY",
                      get: function() {
                          return o
                      }
                  }, {
                      key: "DefaultType",
                      get: function() {
                          return h
                      }
                  }]), a
              }();
          return t.fn[e] = E._jQueryInterface, t.fn[e].Constructor = E, t.fn[e].noConflict = function() {
              return t.fn[e] = a, E._jQueryInterface
          }, E
      }(e),
      P = function(t) {
          var e = "popover",
              n = "bs.popover",
              i = "." + n,
              o = t.fn[e],
              a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
              l = r({}, k.Default, {
                  placement: "right",
                  trigger: "click",
                  content: "",
                  template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
              }),
              h = r({}, k.DefaultType, {
                  content: "(string|element|function)"
              }),
              c = {
                  HIDE: "hide" + i,
                  HIDDEN: "hidden" + i,
                  SHOW: "show" + i,
                  SHOWN: "shown" + i,
                  INSERTED: "inserted" + i,
                  CLICK: "click" + i,
                  FOCUSIN: "focusin" + i,
                  FOCUSOUT: "focusout" + i,
                  MOUSEENTER: "mouseenter" + i,
                  MOUSELEAVE: "mouseleave" + i
              },
              u = function(r) {
                  var o, u;

                  function f() {
                      return r.apply(this, arguments) || this
                  }
                  u = r, (o = f).prototype = Object.create(u.prototype), o.prototype.constructor = o, o.__proto__ = u;
                  var d = f.prototype;
                  return d.isWithContent = function() {
                      return this.getTitle() || this._getContent()
                  }, d.addAttachmentClass = function(e) {
                      t(this.getTipElement()).addClass("bs-popover-" + e)
                  }, d.getTipElement = function() {
                      return this.tip = this.tip || t(this.config.template)[0], this.tip
                  }, d.setContent = function() {
                      var e = t(this.getTipElement());
                      this.setElementContent(e.find(".popover-header"), this.getTitle());
                      var n = this._getContent();
                      "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(".popover-body"), n), e.removeClass("fade show")
                  }, d._getContent = function() {
                      return this.element.getAttribute("data-content") || this.config.content
                  }, d._cleanTipClass = function() {
                      var e = t(this.getTipElement()),
                          n = e.attr("class").match(a);
                      null !== n && n.length > 0 && e.removeClass(n.join(""))
                  }, f._jQueryInterface = function(e) {
                      return this.each((function() {
                          var i = t(this).data(n),
                              s = "object" == typeof e ? e : null;
                          if ((i || !/destroy|hide/.test(e)) && (i || (i = new f(this, s), t(this).data(n, i)), "string" == typeof e)) {
                              if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                              i[e]()
                          }
                      }))
                  }, s(f, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.0.0"
                      }
                  }, {
                      key: "Default",
                      get: function() {
                          return l
                      }
                  }, {
                      key: "NAME",
                      get: function() {
                          return e
                      }
                  }, {
                      key: "DATA_KEY",
                      get: function() {
                          return n
                      }
                  }, {
                      key: "Event",
                      get: function() {
                          return c
                      }
                  }, {
                      key: "EVENT_KEY",
                      get: function() {
                          return i
                      }
                  }, {
                      key: "DefaultType",
                      get: function() {
                          return h
                      }
                  }]), f
              }(k);
          return t.fn[e] = u._jQueryInterface, t.fn[e].Constructor = u, t.fn[e].noConflict = function() {
              return t.fn[e] = o, u._jQueryInterface
          }, u
      }(e),
      j = function(t) {
          var e = "scrollspy",
              n = "bs.scrollspy",
              i = "." + n,
              o = t.fn[e],
              a = {
                  offset: 10,
                  method: "auto",
                  target: ""
              },
              l = {
                  offset: "number",
                  method: "string",
                  target: "(string|element)"
              },
              h = {
                  ACTIVATE: "activate" + i,
                  SCROLL: "scroll" + i,
                  LOAD_DATA_API: "load" + i + ".data-api"
              },
              c = "active",
              u = ".nav, .list-group",
              f = ".nav-link",
              d = ".list-group-item",
              g = "position",
              _ = function() {
                  function o(e, n) {
                      var i = this;
                      this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + f + "," + this._config.target + " " + d + "," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(h.SCROLL, (function(t) {
                          return i._process(t)
                      })), this.refresh(), this._process()
                  }
                  var _ = o.prototype;
                  return _.refresh = function() {
                      var e = this,
                          n = this._scrollElement === this._scrollElement.window ? "offset" : g,
                          i = "auto" === this._config.method ? n : this._config.method,
                          s = i === g ? this._getScrollTop() : 0;
                      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map((function(e) {
                          var n, r = I.getSelectorFromElement(e);
                          if (r && (n = t(r)[0]), n) {
                              var o = n.getBoundingClientRect();
                              if (o.width || o.height) return [t(n)[i]().top + s, r]
                          }
                          return null
                      })).filter((function(t) {
                          return t
                      })).sort((function(t, e) {
                          return t[0] - e[0]
                      })).forEach((function(t) {
                          e._offsets.push(t[0]), e._targets.push(t[1])
                      }))
                  }, _.dispose = function() {
                      t.removeData(this._element, n), t(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                  }, _._getConfig = function(n) {
                      if ("string" != typeof(n = r({}, a, n)).target) {
                          var i = t(n.target).attr("id");
                          i || (i = I.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i
                      }
                      return I.typeCheckConfig(e, n, l), n
                  }, _._getScrollTop = function() {
                      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                  }, _._getScrollHeight = function() {
                      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                  }, _._getOffsetHeight = function() {
                      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                  }, _._process = function() {
                      var t = this._getScrollTop() + this._config.offset,
                          e = this._getScrollHeight(),
                          n = this._config.offset + e - this._getOffsetHeight();
                      if (this._scrollHeight !== e && this.refresh(), t >= n) {
                          var i = this._targets[this._targets.length - 1];
                          this._activeTarget !== i && this._activate(i)
                      } else {
                          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                          for (var s = this._offsets.length; s--;) this._activeTarget !== this._targets[s] && t >= this._offsets[s] && (void 0 === this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s])
                      }
                  }, _._activate = function(e) {
                      this._activeTarget = e, this._clear();
                      var n = this._selector.split(",");
                      n = n.map((function(t) {
                          return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                      }));
                      var i = t(n.join(","));
                      i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass(c), i.addClass(c)) : (i.addClass(c), i.parents(u).prev(f + ", " + d).addClass(c), i.parents(u).prev(".nav-item").children(f).addClass(c)), t(this._scrollElement).trigger(h.ACTIVATE, {
                          relatedTarget: e
                      })
                  }, _._clear = function() {
                      t(this._selector).filter(".active").removeClass(c)
                  }, o._jQueryInterface = function(e) {
                      return this.each((function() {
                          var i = t(this).data(n);
                          if (i || (i = new o(this, "object" == typeof e && e), t(this).data(n, i)), "string" == typeof e) {
                              if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                              i[e]()
                          }
                      }))
                  }, s(o, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.0.0"
                      }
                  }, {
                      key: "Default",
                      get: function() {
                          return a
                      }
                  }]), o
              }();
          return t(window).on(h.LOAD_DATA_API, (function() {
              for (var e = t.makeArray(t('[data-spy="scroll"]')), n = e.length; n--;) {
                  var i = t(e[n]);
                  _._jQueryInterface.call(i, i.data())
              }
          })), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function() {
              return t.fn[e] = o, _._jQueryInterface
          }, _
      }(e),
      H = function(t) {
          var e = "bs.tab",
              n = "." + e,
              i = t.fn.tab,
              r = {
                  HIDE: "hide" + n,
                  HIDDEN: "hidden" + n,
                  SHOW: "show" + n,
                  SHOWN: "shown" + n,
                  CLICK_DATA_API: "click.bs.tab.data-api"
              },
              o = "active",
              a = "show",
              l = ".active",
              h = "> li > .active",
              c = function() {
                  function n(t) {
                      this._element = t
                  }
                  var i = n.prototype;
                  return i.show = function() {
                      var e = this;
                      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(o) || t(this._element).hasClass("disabled"))) {
                          var n, i, s = t(this._element).closest(".nav, .list-group")[0],
                              a = I.getSelectorFromElement(this._element);
                          if (s) {
                              var c = "UL" === s.nodeName ? h : l;
                              i = (i = t.makeArray(t(s).find(c)))[i.length - 1]
                          }
                          var u = t.Event(r.HIDE, {
                                  relatedTarget: this._element
                              }),
                              f = t.Event(r.SHOW, {
                                  relatedTarget: i
                              });
                          if (i && t(i).trigger(u), t(this._element).trigger(f), !f.isDefaultPrevented() && !u.isDefaultPrevented()) {
                              a && (n = t(a)[0]), this._activate(this._element, s);
                              var d = function() {
                                  var n = t.Event(r.HIDDEN, {
                                          relatedTarget: e._element
                                      }),
                                      s = t.Event(r.SHOWN, {
                                          relatedTarget: i
                                      });
                                  t(i).trigger(n), t(e._element).trigger(s)
                              };
                              n ? this._activate(n, n.parentNode, d) : d()
                          }
                      }
                  }, i.dispose = function() {
                      t.removeData(this._element, e), this._element = null
                  }, i._activate = function(e, n, i) {
                      var s = this,
                          r = ("UL" === n.nodeName ? t(n).find(h) : t(n).children(l))[0],
                          o = i && I.supportsTransitionEnd() && r && t(r).hasClass("fade"),
                          a = function() {
                              return s._transitionComplete(e, r, i)
                          };
                      r && o ? t(r).one(I.TRANSITION_END, a).emulateTransitionEnd(150) : a()
                  }, i._transitionComplete = function(e, n, i) {
                      if (n) {
                          t(n).removeClass(a + " " + o);
                          var s = t(n.parentNode).find("> .dropdown-menu .active")[0];
                          s && t(s).removeClass(o), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                      }
                      if (t(e).addClass(o), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), I.reflow(e), t(e).addClass(a), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
                          var r = t(e).closest(".dropdown")[0];
                          r && t(r).find(".dropdown-toggle").addClass(o), e.setAttribute("aria-expanded", !0)
                      }
                      i && i()
                  }, n._jQueryInterface = function(i) {
                      return this.each((function() {
                          var s = t(this),
                              r = s.data(e);
                          if (r || (r = new n(this), s.data(e, r)), "string" == typeof i) {
                              if (void 0 === r[i]) throw new TypeError('No method named "' + i + '"');
                              r[i]()
                          }
                      }))
                  }, s(n, null, [{
                      key: "VERSION",
                      get: function() {
                          return "4.0.0"
                      }
                  }]), n
              }();
          return t(document).on(r.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(e) {
              e.preventDefault(), c._jQueryInterface.call(t(this), "show")
          })), t.fn.tab = c._jQueryInterface, t.fn.tab.Constructor = c, t.fn.tab.noConflict = function() {
              return t.fn.tab = i, c._jQueryInterface
          }, c
      }(e);
  ! function(t) {
      if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
      var e = t.fn.jquery.split(" ")[0].split(".");
      if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
  }(e), t.Util = I, t.Alert = w, t.Button = A, t.Carousel = D, t.Collapse = S, t.Dropdown = N, t.Modal = O, t.Popover = P, t.Scrollspy = j, t.Tab = H, t.Tooltip = k, Object.defineProperty(t, "__esModule", {
      value: !0
  })
}));
