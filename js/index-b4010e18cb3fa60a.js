(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[95405], {
    78e3: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.AmpStateContext = void 0;
        var a = (0,
        n(92648).Z)(n(67294)).default.createContext({});
        t.AmpStateContext = a
    },
    9470: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isInAmpMode = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.ampFirst
              , n = void 0 !== t && t
              , a = e.hybrid
              , r = void 0 !== a && a
              , u = e.hasQuery
              , o = void 0 !== u && u;
            return n || r && o
        }
    },
    72717: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.defaultHead = l,
        t.default = void 0;
        n(6495).Z;
        var a = n(92648).Z
          , r = (0,
        n(91598).Z)(n(67294))
          , u = a(n(11585))
          , o = n(78e3)
          , d = n(15850)
          , i = n(9470);
        n(99475);
        function l() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , t = [r.default.createElement("meta", {
                charSet: "utf-8"
            })];
            return e || t.push(r.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width"
            })),
            t
        }
        function c(e, t) {
            return "string" === typeof t || "number" === typeof t ? e : t.type === r.default.Fragment ? e.concat(r.default.Children.toArray(t.props.children).reduce((function(e, t) {
                return "string" === typeof t || "number" === typeof t ? e : e.concat(t)
            }
            ), [])) : e.concat(t)
        }
        var f = ["name", "httpEquiv", "charSet", "itemProp"];
        function s(e, t) {
            return e.reduce(c, []).reverse().concat(l(t.inAmpMode).reverse()).filter(function() {
                var e = new Set
                  , t = new Set
                  , n = new Set
                  , a = {};
                return function(r) {
                    var u = !0
                      , o = !1;
                    if (r.key && "number" !== typeof r.key && r.key.indexOf("$") > 0) {
                        o = !0;
                        var d = r.key.slice(r.key.indexOf("$") + 1);
                        e.has(d) ? u = !1 : e.add(d)
                    }
                    switch (r.type) {
                    case "title":
                    case "base":
                        t.has(r.type) ? u = !1 : t.add(r.type);
                        break;
                    case "meta":
                        for (var i = 0, l = f.length; i < l; i++) {
                            var c = f[i];
                            if (r.props.hasOwnProperty(c))
                                if ("charSet" === c)
                                    n.has(c) ? u = !1 : n.add(c);
                                else {
                                    var s = r.props[c]
                                      , p = a[c] || new Set;
                                    "name" === c && o || !p.has(s) ? (p.add(s),
                                    a[c] = p) : u = !1
                                }
                        }
                    }
                    return u
                }
            }()).reverse().map((function(e, t) {
                var n = e.key || t;
                return r.default.cloneElement(e, {
                    key: n
                })
            }
            ))
        }
        var p = function(e) {
            var t = e.children
              , n = r.useContext(o.AmpStateContext)
              , a = r.useContext(d.HeadManagerContext);
            return r.default.createElement(u.default, {
                reduceComponentsToState: s,
                headManager: a,
                inAmpMode: i.isInAmpMode(n)
            }, t)
        };
        t.default = p,
        ("function" === typeof t.default || "object" === typeof t.default && null !== t.default) && "undefined" === typeof t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    11585: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            var t = e.headManager
              , n = e.reduceComponentsToState;
            function d() {
                if (t && t.mountedInstances) {
                    var r = a.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                    t.updateHead(n(r, e))
                }
            }
            if (r) {
                var i;
                null == t || null == (i = t.mountedInstances) || i.add(e.children),
                d()
            }
            return u((function() {
                var n;
                return null == t || null == (n = t.mountedInstances) || n.add(e.children),
                function() {
                    var n;
                    null == t || null == (n = t.mountedInstances) || n.delete(e.children)
                }
            }
            )),
            u((function() {
                return t && (t._pendingUpdate = d),
                function() {
                    t && (t._pendingUpdate = d)
                }
            }
            )),
            o((function() {
                return t && t._pendingUpdate && (t._pendingUpdate(),
                t._pendingUpdate = null),
                function() {
                    t && t._pendingUpdate && (t._pendingUpdate(),
                    t._pendingUpdate = null)
                }
            }
            )),
            null
        }
        ;
        var a = (0,
        n(91598).Z)(n(67294));
        var r = !1
          , u = r ? function() {}
        : a.useLayoutEffect
          , o = r ? function() {}
        : a.useEffect
    },
    92119: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSP: function() {
                return c
            }
        });
        var a = n(9008)
          , r = n.n(a)
          , u = n(67294)
          , o = n(4883)
          , d = n(34174)
          , i = n(13396)
          , l = n(85893)
          , c = !0;
        t.default = function(e) {
            var t, n, a, c, f = e.data, s = e.locale, p = null === f || void 0 === f || null === (t = f.homePageCollection) || void 0 === t || null === (n = t.items) || void 0 === n || null === (a = n[0]) || void 0 === a ? void 0 : a.page, v = (0,
            o.K)(p), m = (0,
            d.x)(!0).viewEvent;
            return (0,
            u.useEffect)((function() {
                p && m({
                    page_name: "/",
                    search_keyword: "",
                    tealium_event: "home_page"
                })
            }
            ), [p, m]),
            p ? (0,
            l.jsxs)("div", {
                children: [(0,
                l.jsxs)(r(), {
                    children: [v, (0,
                    l.jsx)("meta", {
                        name: "robots",
                        content: "max-image-preview:large"
                    })]
                }), null === (c = p.elementsCollection) || void 0 === c ? void 0 : c.items.map((function(e, t) {
                    return (0,
                    i.VR)(e, t, s, !0)
                }
                ))]
            }) : null
        }
    },
    48312: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return n(92119)
        }
        ])
    },
    9008: function(e, t, n) {
        e.exports = n(72717)
    }
}, function(e) {
    e.O(0, [4883, 49774, 92888, 40179], (function() {
        return t = 48312,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
//# sourceMappingURL=index-b4010e18cb3fa60a.js.map
