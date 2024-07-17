(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[49939], {
    78e3: function(e, i, n) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.AmpStateContext = void 0;
        var a = (0,
        n(92648).Z)(n(67294)).default.createContext({});
        i.AmpStateContext = a
    },
    9470: function(e, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.isInAmpMode = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , i = e.ampFirst
              , n = void 0 !== i && i
              , a = e.hybrid
              , t = void 0 !== a && a
              , l = e.hasQuery
              , o = void 0 !== l && l;
            return n || t && o
        }
    },
    72717: function(e, i, n) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.defaultHead = c,
        i.default = void 0;
        n(6495).Z;
        var a = n(92648).Z
          , t = (0,
        n(91598).Z)(n(67294))
          , l = a(n(11585))
          , o = n(78e3)
          , r = n(15850)
          , u = n(9470);
        n(99475);
        function c() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , i = [t.default.createElement("meta", {
                charSet: "utf-8"
            })];
            return e || i.push(t.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width"
            })),
            i
        }
        function s(e, i) {
            return "string" === typeof i || "number" === typeof i ? e : i.type === t.default.Fragment ? e.concat(t.default.Children.toArray(i.props.children).reduce((function(e, i) {
                return "string" === typeof i || "number" === typeof i ? e : e.concat(i)
            }
            ), [])) : e.concat(i)
        }
        var d = ["name", "httpEquiv", "charSet", "itemProp"];
        function v(e, i) {
            return e.reduce(s, []).reverse().concat(c(i.inAmpMode).reverse()).filter(function() {
                var e = new Set
                  , i = new Set
                  , n = new Set
                  , a = {};
                return function(t) {
                    var l = !0
                      , o = !1;
                    if (t.key && "number" !== typeof t.key && t.key.indexOf("$") > 0) {
                        o = !0;
                        var r = t.key.slice(t.key.indexOf("$") + 1);
                        e.has(r) ? l = !1 : e.add(r)
                    }
                    switch (t.type) {
                    case "title":
                    case "base":
                        i.has(t.type) ? l = !1 : i.add(t.type);
                        break;
                    case "meta":
                        for (var u = 0, c = d.length; u < c; u++) {
                            var s = d[u];
                            if (t.props.hasOwnProperty(s))
                                if ("charSet" === s)
                                    n.has(s) ? l = !1 : n.add(s);
                                else {
                                    var v = t.props[s]
                                      , p = a[s] || new Set;
                                    "name" === s && o || !p.has(v) ? (p.add(v),
                                    a[s] = p) : l = !1
                                }
                        }
                    }
                    return l
                }
            }()).reverse().map((function(e, i) {
                var n = e.key || i;
                return t.default.cloneElement(e, {
                    key: n
                })
            }
            ))
        }
        var p = function(e) {
            var i = e.children
              , n = t.useContext(o.AmpStateContext)
              , a = t.useContext(r.HeadManagerContext);
            return t.default.createElement(l.default, {
                reduceComponentsToState: v,
                headManager: a,
                inAmpMode: u.isInAmpMode(n)
            }, i)
        };
        i.default = p,
        ("function" === typeof i.default || "object" === typeof i.default && null !== i.default) && "undefined" === typeof i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
            value: !0
        }),
        Object.assign(i.default, i),
        e.exports = i.default)
    },
    11585: function(e, i, n) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.default = function(e) {
            var i = e.headManager
              , n = e.reduceComponentsToState;
            function r() {
                if (i && i.mountedInstances) {
                    var t = a.Children.toArray(Array.from(i.mountedInstances).filter(Boolean));
                    i.updateHead(n(t, e))
                }
            }
            if (t) {
                var u;
                null == i || null == (u = i.mountedInstances) || u.add(e.children),
                r()
            }
            return l((function() {
                var n;
                return null == i || null == (n = i.mountedInstances) || n.add(e.children),
                function() {
                    var n;
                    null == i || null == (n = i.mountedInstances) || n.delete(e.children)
                }
            }
            )),
            l((function() {
                return i && (i._pendingUpdate = r),
                function() {
                    i && (i._pendingUpdate = r)
                }
            }
            )),
            o((function() {
                return i && i._pendingUpdate && (i._pendingUpdate(),
                i._pendingUpdate = null),
                function() {
                    i && i._pendingUpdate && (i._pendingUpdate(),
                    i._pendingUpdate = null)
                }
            }
            )),
            null
        }
        ;
        var a = (0,
        n(91598).Z)(n(67294));
        var t = !1
          , l = t ? function() {}
        : a.useLayoutEffect
          , o = t ? function() {}
        : a.useEffect
    },
    68825: function(e, i, n) {
        "use strict";
        n.r(i),
        n.d(i, {
            __N_SSP: function() {
                return Ce
            },
            default: function() {
                return ye
            }
        });
        var a, t = n(32601), l = n(9008), o = n.n(l), r = n(67294), u = n(85169), c = n(97848), s = n(11163), d = n(10104), v = "draft", p = n(5223), g = n(55496), m = n(16835), _ = n(74180), f = n(47017), h = function(e) {
            return null === e || void 0 === e ? null : /^\.[0-9]{1}$/.test("".concat(e)) ? "0".concat(e, "0") : /^-\.[0-9]{1}$/.test("".concat(e)) ? "".concat(e, "0").replace("-.", "-0.") : /^\.[0-9]{2}$/.test("".concat(e)) ? "0".concat(e) : /^-\.[0-9]{2}$/.test("".concat(e)) ? "".concat(e).replace("-.", "-0.") : /^-?[0-9]+$/.test("".concat(e)) ? "".concat(e, ".00") : /^-?[0-9]+\.$/.test("".concat(e)) ? "".concat(e, "00") : /^-?[0-9]+\.[0-9]{1}$/.test("".concat(e)) ? "".concat(e, "0") : "".concat(e)
        }, b = n(33642), x = n(85893), P = r.createContext({
            productType: "PRINTED_BOOK",
            setProductType: function() {},
            podPackageId: null,
            setPodPackageId: function() {},
            pageCount: null,
            setPageCount: function() {},
            quantity: null,
            setQuantity: function() {},
            shippingCost: null,
            setShippingCost: function() {}
        }), C = function(e) {
            var i = e.children
              , n = r.useState("PRINTED_BOOK")
              , a = (0,
            m.Z)(n, 2)
              , t = a[0]
              , l = a[1]
              , o = r.useState(null)
              , u = (0,
            m.Z)(o, 2)
              , c = u[0]
              , s = u[1]
              , d = r.useState(null)
              , v = (0,
            m.Z)(d, 2)
              , p = v[0]
              , g = v[1]
              , _ = r.useState(null)
              , f = (0,
            m.Z)(_, 2)
              , h = f[0]
              , b = f[1]
              , C = r.useState(null)
              , y = (0,
            m.Z)(C, 2)
              , E = y[0]
              , j = y[1];
            return (0,
            x.jsx)(P.Provider, {
                value: {
                    productType: t,
                    setProductType: l,
                    podPackageId: c,
                    setPodPackageId: s,
                    pageCount: p,
                    setPageCount: g,
                    quantity: h,
                    setQuantity: b,
                    shippingCost: E,
                    setShippingCost: j
                },
                children: i
            })
        }, y = n(94184), E = n.n(y), j = n(97801), O = n(72583), N = n.n(O), I = n(59499);
        function w(e, i) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                i && (a = a.filter((function(i) {
                    return Object.getOwnPropertyDescriptor(e, i).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function k(e) {
            for (var i = 1; i < arguments.length; i++) {
                var n = null != arguments[i] ? arguments[i] : {};
                i % 2 ? w(Object(n), !0).forEach((function(i) {
                    (0,
                    I.Z)(e, i, n[i])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function(i) {
                    Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i))
                }
                ))
            }
            return e
        }
        !function(e) {
            e.CLEAR = "CLEAR",
            e.CHANGE_INTERIOR_INK = "CHANGE_INTERIOR_INK",
            e.CHANGE_INTERIOR_PAPER = "CHANGE_INTERIOR_PAPER",
            e.CHANGE_BINDING_TYPE = "CHANGE_BINDING_TYPE",
            e.CHANGE_COVER_FINISH = "CHANGE_COVER_FINISH",
            e.CHANGE_TRIM_SIZE = "CHANGE_TRIM_SIZE",
            e.CHANGE_PAGE_COUNT = "CHANGE_PAGE_COUNT",
            e.SET_POD_PACKAGES = "SET_POD_PACKAGES",
            e.SET_PRICE = "SET_PRICE",
            e.SET_PRICE_HIDDEN = "SET_PRICE_HIDDEN"
        }(a || (a = {}));
        var S = function(e, i) {
            switch (i.type) {
            case a.CLEAR:
                return {
                    availableOptions: b.K9(e.podPackages),
                    bindingType: null,
                    coverFinish: null,
                    filteredOptions: b.n0(e.podPackages),
                    interiorInk: null,
                    interiorPaper: null,
                    pageCount: 0,
                    podPackageId: null,
                    podPackages: e.podPackages,
                    price: "",
                    priceHidden: !0,
                    trimSize: ""
                };
            case a.SET_POD_PACKAGES:
                return k(k({}, e), {}, {
                    podPackages: i.payload.podPackages
                });
            case a.CHANGE_TRIM_SIZE:
                return k(k({}, e), {}, {
                    bindingType: null,
                    coverFinish: null,
                    filteredOptions: b.n0(e.podPackages, i.payload.value, Number(e.pageCount)),
                    interiorInk: null,
                    interiorPaper: null,
                    podPackageId: null,
                    trimSize: i.payload.value
                });
            case a.CHANGE_PAGE_COUNT:
                return k(k({}, e), {}, {
                    bindingType: "",
                    coverFinish: "",
                    filteredOptions: b.n0(e.podPackages, e.trimSize, i.payload.value),
                    interiorInk: "",
                    interiorPaper: "",
                    pageCount: i.payload.value,
                    podPackageId: null
                });
            case a.CHANGE_INTERIOR_INK:
                return k(k({}, e), {}, {
                    bindingType: "",
                    coverFinish: "",
                    filteredOptions: b.n0(e.podPackages, e.trimSize, Number(e.pageCount), !1, i.payload.value),
                    interiorInk: i.payload.value,
                    interiorPaper: "",
                    podPackageId: null
                });
            case a.CHANGE_INTERIOR_PAPER:
                return k(k({}, e), {}, {
                    bindingType: "",
                    coverFinish: "",
                    filteredOptions: b.n0(e.podPackages, e.trimSize, Number(e.pageCount), !1, e.interiorInk, i.payload.value),
                    interiorPaper: i.payload.value,
                    podPackageId: null
                });
            case a.CHANGE_BINDING_TYPE:
                return k(k({}, e), {}, {
                    bindingType: i.payload.value,
                    coverFinish: "",
                    filteredOptions: b.n0(e.podPackages, e.trimSize, Number(e.pageCount), !1, e.interiorInk, e.interiorPaper, i.payload.value),
                    podPackageId: null
                });
            case a.CHANGE_COVER_FINISH:
                return k(k({}, e), {}, {
                    coverFinish: i.payload.value,
                    podPackageId: b.VG(e.podPackages, e.trimSize, Number(e.pageCount), !1, e.interiorInk, e.interiorPaper, e.bindingType, i.payload.value)
                });
            case a.SET_PRICE:
                return k(k({}, e), {}, {
                    price: i.payload.value
                });
            case a.SET_PRICE_HIDDEN:
                return k(k({}, e), {}, {
                    priceHidden: i.payload.value
                });
            default:
                return e
            }
        }
          , T = function(e) {
            var i, n, l, o, s, d, v, g, _, f, h, C, y, O, I, w, k = e.podPackages, T = e.setTrimName, R = r.useContext(P), A = R.productType, U = R.setPageCount, L = R.setPodPackageId, B = r.useReducer(S, {
                podPackages: k,
                availableOptions: null !== (i = b.K9(k)) && void 0 !== i ? i : {},
                bindingType: null,
                coverFinish: null,
                filteredOptions: b.n0(k),
                interiorInk: null,
                interiorPaper: null,
                pageCount: null,
                podPackageId: null,
                price: "",
                priceHidden: !0,
                trimSize: ""
            }), V = (0,
            m.Z)(B, 2), M = V[0], D = V[1], F = M.podPackageId, G = M.trimSize, H = M.pageCount, X = M.interiorInk, z = M.interiorPaper, W = M.bindingType, K = M.coverFinish, Z = F && G && H && X && z && W && K;
            r.useEffect((function() {
                U(Z ? H : null),
                L(Z ? F : null)
            }
            ), [Z, U, L, H, F]),
            r.useEffect((function() {
                D({
                    payload: {
                        podPackages: k
                    },
                    type: a.SET_POD_PACKAGES
                }),
                D({
                    type: a.CLEAR
                })
            }
            ), [k]);
            var q = r.useMemo((function() {
                return Array.from(new Set(M.podPackages.map((function(e) {
                    var i;
                    return null === (i = e.trimSize) || void 0 === i ? void 0 : i.key
                }
                ))))
            }
            ), [M.podPackages]);
            r.useEffect((function() {
                1 === q.length && q[0] && (D({
                    payload: {
                        value: q[0]
                    },
                    type: a.CHANGE_TRIM_SIZE
                }),
                T(q[0]))
            }
            ), [q, T]);
            return (0,
            x.jsxs)(x.Fragment, {
                children: [(0,
                x.jsx)(c.rQ, {
                    title: t.ag._("{0} Options", {
                        0: (0,
                        p.U)(A)
                    }),
                    description: t.ag._("Select the Colors, Paper Type, Binding and Cover Finish for your {0}.", {
                        0: (0,
                        p.U)(A)
                    })
                }), (0,
                x.jsx)("div", {
                    className: "grid-12",
                    children: (0,
                    x.jsx)("div", {
                        className: "col-8 col-start-5 col-m-big-12 col-start-m-big-1",
                        children: (0,
                        x.jsxs)("div", {
                            className: N().distributionInfoBox,
                            children: [(0,
                            x.jsx)(c.JO, {
                                iconName: c.PJ.DistributionYes
                            }), (0,
                            x.jsx)("span", {
                                children: (0,
                                x.jsx)(u.cC, {
                                    id: "This icon indicates that the option is available for Global Distribution"
                                })
                            })]
                        })
                    })
                }), (0,
                x.jsx)("div", {
                    className: "box__section",
                    children: (0,
                    x.jsx)(c.rQ, {
                        order: 1,
                        title: t.ag._("Book Size and Page Count"),
                        description: t.ag._("Select a Book Size and Page Count for your {0}.", {
                            0: (0,
                            p.U)(A)
                        })
                    })
                }), (0,
                x.jsxs)("div", {
                    className: E()("grid-12", N().trimPageInputs),
                    children: [(0,
                    x.jsx)("div", {
                        className: "col-10 col-m-big-8 col-s-12",
                        children: (0,
                        x.jsx)("div", {
                            className: "field",
                            children: (0,
                            x.jsxs)("div", {
                                className: "field__input-wrapper field__input-wrapper--select",
                                children: [(0,
                                x.jsx)("label", {
                                    className: "field__label field__label--visible",
                                    children: (0,
                                    x.jsx)(u.cC, {
                                        id: "{0} Size",
                                        values: {
                                            0: (0,
                                            p.U)(A)
                                        }
                                    })
                                }), (0,
                                x.jsxs)("select", {
                                    className: "field__input field__input--select",
                                    disabled: 1 === q.length,
                                    "data-test-id": "select-trim-size",
                                    name: "trimSize",
                                    value: null !== (n = M.trimSize) && void 0 !== n ? n : "",
                                    onChange: function(e) {
                                        D({
                                            payload: {
                                                value: e.target.value
                                            },
                                            type: a.CHANGE_TRIM_SIZE
                                        }),
                                        T(e.target.value)
                                    },
                                    children: [q.length > 1 && (0,
                                    x.jsx)("option", {
                                        value: "",
                                        disabled: !0,
                                        children: t.ag._("Please select {0} size...", {
                                            0: (0,
                                            p.U)(A)
                                        })
                                    }), q.map((function(e) {
                                        return e && (0,
                                        x.jsx)("option", {
                                            value: e,
                                            children: (0,
                                            p.U)(e)
                                        }, e)
                                    }
                                    ))]
                                }), M.trimSize && (null === (l = M.filteredOptions.trimSizesDistroEligible) || void 0 === l ? void 0 : l.includes(M.trimSize)) && (0,
                                x.jsx)("div", {
                                    className: "field__icon-distribution icon-select"
                                }), q.length > 1 && (0,
                                x.jsx)("div", {
                                    className: "field__caret"
                                })]
                            })
                        })
                    }), (0,
                    x.jsx)("div", {
                        className: "col-2 col-m-big-4 col-s-12",
                        children: (0,
                        x.jsx)("div", {
                            className: "field",
                            children: (0,
                            x.jsxs)("div", {
                                className: "field__input-wrapper",
                                children: [(0,
                                x.jsx)("label", {
                                    className: "field__label field__label--visible",
                                    children: (0,
                                    x.jsx)(u.cC, {
                                        id: "Page Count"
                                    })
                                }), (0,
                                x.jsx)("input", {
                                    "data-test-id": "input-page-count",
                                    className: "field__input",
                                    type: "number",
                                    value: null !== (o = M.pageCount) && void 0 !== o ? o : "",
                                    onChange: function(e) {
                                        var i = /^[0-9]+$/.test(e.target.value) ? parseInt(e.target.value) : null;
                                        D({
                                            payload: {
                                                value: i
                                            },
                                            type: a.CHANGE_PAGE_COUNT
                                        })
                                    }
                                }), M.filteredOptions.pageCountDistroEligible && (0,
                                x.jsx)("div", {
                                    className: "field__icon-distribution"
                                })]
                            })
                        })
                    })]
                }), (0,
                x.jsx)("div", {
                    className: "box__section",
                    children: (0,
                    x.jsx)(c.rQ, {
                        order: 2,
                        title: t.ag._("Interior Color"),
                        description: "COMIC_BOOK" === A || "MAGAZINE" === A || "PREMIUM_PHOTO_BOOK" === A ? t.ag._("{0} use only Premium inks to provide the best coverage on the page.", {
                            0: (0,
                            p.U)(A, !0)
                        }) : t.ag._("Standard ink is recommended for Books using text and limited graphics, while Premium is ideal for rich colors and more complex graphics.")
                    })
                }), (0,
                x.jsx)("div", {
                    className: "box__section",
                    children: (0,
                    x.jsx)(c.Gi, {
                        values: null !== (s = null === (d = M.availableOptions.interiorInkOptions) || void 0 === d ? void 0 : d.map((function(e) {
                            var i, n, a;
                            return {
                                disabled: !(null !== (i = M.filteredOptions.interiorInkEnabledOptions) && void 0 !== i && i.includes(e)),
                                image: (0,
                                j.a)("".concat(e, "-1x.png")),
                                icon: null === (n = M.filteredOptions.interiorInkDistroEligibleOptions) || void 0 === n ? void 0 : n.includes(e),
                                label: null !== (a = (0,
                                p.U)(e)) && void 0 !== a ? a : "",
                                value: e
                            }
                        }
                        ))) && void 0 !== s ? s : [],
                        type: "configurator",
                        selected: null !== (v = M.interiorInk) && void 0 !== v ? v : "",
                        name: "interiorInk",
                        onChange: function(e) {
                            return D({
                                payload: {
                                    value: e
                                },
                                type: a.CHANGE_INTERIOR_INK
                            })
                        }
                    })
                }), (0,
                x.jsx)("div", {
                    className: "box__section",
                    children: (0,
                    x.jsx)(c.rQ, {
                        order: 3,
                        title: t.ag._("Paper Type"),
                        description: "COMIC_BOOK" === A || "MAGAZINE" === A ? t.ag._("{0} use a special 70# paper for color and black & white printing.", {
                            0: (0,
                            p.U)(A, !0)
                        }) : "YEARBOOK" === A || "PREMIUM_PHOTO_BOOK" === A ? t.ag._("{0} use our highest quality 80# paper for color and black & white printing.", {
                            0: (0,
                            p.U)(A, !0)
                        }) : t.ag._("For Premium ink, we suggest the heavier 80# paper. For more economical options, use Standard ink and the 60# paper weight.")
                    })
                }), (0,
                x.jsx)("div", {
                    className: "box__section",
                    children: (0,
                    x.jsx)(c.Gi, {
                        values: null !== (g = null === (_ = M.availableOptions.interiorPaperOptions) || void 0 === _ ? void 0 : _.map((function(e) {
                            var i, n, a;
                            return {
                                disabled: !(null !== (i = M.filteredOptions.interiorPaperEnabledOptions) && void 0 !== i && i.includes(e)),
                                image: (0,
                                j.a)("".concat(e.replace("70", "80"), "-1x.png")),
                                icon: null === (n = M.filteredOptions.interiorPaperDistroEligibleOptions) || void 0 === n ? void 0 : n.includes(e),
                                label: null !== (a = (0,
                                p.U)(e)) && void 0 !== a ? a : "",
                                value: e
                            }
                        }
                        ))) && void 0 !== g ? g : [],
                        type: "configurator",
                        selected: null !== (f = M.interiorPaper) && void 0 !== f ? f : "",
                        name: "interiorPaper",
                        onChange: function(e) {
                            return D({
                                payload: {
                                    value: e
                                },
                                type: a.CHANGE_INTERIOR_PAPER
                            })
                        }
                    })
                }), (0,
                x.jsx)("div", {
                    className: "box__section",
                    children: (0,
                    x.jsx)(c.rQ, {
                        order: 4,
                        title: t.ag._("Binding Type"),
                        description: t.ag._("Select a binding type for your {0}.", {
                            0: (0,
                            p.U)(A)
                        })
                    })
                }), (0,
                x.jsx)("div", {
                    className: "box__section",
                    children: (0,
                    x.jsx)(c.Gi, {
                        values: null !== (h = null === (C = M.availableOptions.bindingTypeOptions) || void 0 === C ? void 0 : C.map((function(e) {
                            var i, n, a;
                            return {
                                disabled: !(null !== (i = M.filteredOptions.bindingTypeEnabledOptions) && void 0 !== i && i.includes(e)),
                                image: (0,
                                j.a)("".concat(e, "-1x.png")),
                                icon: null === (n = M.filteredOptions.bindingTypeDistroEligibleOptions) || void 0 === n ? void 0 : n.includes(e),
                                label: null !== (a = (0,
                                p.U)(e)) && void 0 !== a ? a : "",
                                value: e
                            }
                        }
                        ))) && void 0 !== h ? h : [],
                        type: "configurator",
                        selected: null !== (y = M.bindingType) && void 0 !== y ? y : "",
                        name: "bindingType",
                        onChange: function(e) {
                            return D({
                                payload: {
                                    value: e
                                },
                                type: a.CHANGE_BINDING_TYPE
                            })
                        }
                    })
                }), (0,
                x.jsx)("div", {
                    className: "box__section",
                    children: (0,
                    x.jsx)(c.rQ, {
                        order: 5,
                        title: t.ag._("Cover Finish"),
                        description: t.ag._("Select the cover finish for your {0}.", {
                            0: (0,
                            p.U)(A)
                        })
                    })
                }), (0,
                x.jsx)("div", {
                    className: "box__section",
                    children: (0,
                    x.jsx)(c.Gi, {
                        values: null !== (O = null === (I = M.availableOptions.coverFinishOptions) || void 0 === I ? void 0 : I.map((function(e) {
                            var i, n, a;
                            return {
                                disabled: !(null !== (i = M.filteredOptions.coverFinishEnabledOptions) && void 0 !== i && i.includes(e)),
                                icon: null === (n = M.filteredOptions.coverFinishDistroEligibleOptions) || void 0 === n ? void 0 : n.includes(e),
                                label: null !== (a = (0,
                                p.U)(e)) && void 0 !== a ? a : "",
                                value: e
                            }
                        }
                        ))) && void 0 !== O ? O : [],
                        type: "configurator",
                        selected: null !== (w = M.coverFinish) && void 0 !== w ? w : "",
                        name: "coverFinish",
                        onChange: function(e) {
                            return D({
                                payload: {
                                    value: e
                                },
                                type: a.CHANGE_COVER_FINISH
                            })
                        }
                    })
                })]
            })
        }
          , R = n(8942)
          , A = n(75168)
          , U = function(e) {
            var i, n, a, l, o = e.podPackages, s = r.useContext(P), d = s.productType, v = s.setPageCount, g = "en" === r.useContext(R.R).locale, _ = r.useMemo((function() {
                return b.K9(o)
            }
            ), [o]), f = r.useState(12), h = (0,
            m.Z)(f, 2), C = h[0], y = h[1], O = r.useState(!1), I = (0,
            m.Z)(O, 2), w = I[0], k = I[1], S = w || !C ? 0 : 2 * C - 2, T = _.bindingTypeOptions[0], U = _.coverFinishOptions[0], L = _.interiorInkOptions[0], B = _.interiorPaperOptions[0], V = _.trimSizes[0];
            return r.useEffect((function() {
                v(22)
            }
            ), [v]),
            (0,
            x.jsxs)(x.Fragment, {
                children: [(0,
                x.jsx)(c.rQ, {
                    title: t.ag._("{0} Options", {
                        0: (0,
                        p.U)(d)
                    })
                }), (0,
                x.jsx)("div", {
                    className: "box__section",
                    children: (0,
                    x.jsx)(c.rQ, {
                        title: t.ag._("Calendar Size And Months"),
                        order: 1,
                        description: t.ag._("Select a number of months from 2 to 18 for your Calendar to see pricing and plan an order.")
                    })
                }), (0,
                x.jsxs)("div", {
                    className: E()("grid-12", N().trimPageInputs),
                    children: [(0,
                    x.jsx)("div", {
                        className: "col-3 col-m-big-6 col-s-12",
                        children: (0,
                        x.jsx)("div", {
                            className: "field",
                            children: (0,
                            x.jsxs)("div", {
                                className: "field__input-wrapper field__input-wrapper--select",
                                children: [(0,
                                x.jsx)("label", {
                                    className: "field__label field__label--visible",
                                    children: (0,
                                    x.jsx)(u.cC, {
                                        id: "Months"
                                    })
                                }), (0,
                                x.jsx)("input", {
                                    "data-test-id": "input-months",
                                    className: "field__input",
                                    value: C,
                                    onChange: function(e) {
                                        if ("" === e.target.value || /^[0-9]+$/.test(e.target.value)) {
                                            k(!1);
                                            var i = Number(e.target.value);
                                            y(i),
                                            v(2 * i - 2),
                                            (i < 2 || i > 18) && (k(!0),
                                            v(null))
                                        }
                                    }
                                })]
                            })
                        })
                    }), w && (0,
                    x.jsxs)("div", {
                        className: E()("col-9", "col-m-big-6", "col-s-12", N().monthCountError),
                        children: [(0,
                        x.jsx)(c.JO, {
                            iconName: c.PJ.NotificationError
                        }), (0,
                        x.jsx)("p", {
                            className: "field__message",
                            children: (0,
                            x.jsx)(u.cC, {
                                id: "Calendars must use at least 2 months and no more than 18 months. Please select a number of months in this range."
                            })
                        })]
                    }), !g && (0,
                    x.jsx)("br", {}), (0,
                    x.jsx)("div", {
                        className: E()("col-s-12", {
                            "col-9 col-m-6 col-m-big-7": !g,
                            "col-10 col-m-big-8": g
                        }),
                        children: (0,
                        x.jsx)("div", {
                            className: "field",
                            children: (0,
                            x.jsxs)("div", {
                                className: "field__input-wrapper field__input-wrapper--select",
                                children: [(0,
                                x.jsx)("label", {
                                    className: "field__label field__label--visible ".concat(N().unbreakable),
                                    children: (0,
                                    x.jsx)(u.cC, {
                                        id: "{0} Size",
                                        values: {
                                            0: (0,
                                            p.U)(d)
                                        }
                                    })
                                }), (0,
                                x.jsx)("select", {
                                    className: "field__input field__input--select",
                                    disabled: !0,
                                    "data-test-id": "select-trim-size",
                                    name: "trimSize",
                                    value: V,
                                    children: (0,
                                    x.jsx)("option", {
                                        value: V,
                                        children: (0,
                                        p.U)(V)
                                    }, V)
                                })]
                            })
                        })
                    }), (0,
                    x.jsx)("div", {
                        className: E()("col-s-12", {
                            "col-3 col-m-6 col-m-big-5": !g,
                            "col-2 col-m-big-4": g
                        }),
                        children: (0,
                        x.jsx)("div", {
                            className: "field",
                            children: (0,
                            x.jsxs)("div", {
                                className: "field__input-wrapper",
                                children: [(0,
                                x.jsx)("label", {
                                    className: "field__label field__label--visible ".concat(N().unbreakable),
                                    children: (0,
                                    x.jsx)(u.cC, {
                                        id: "Total Page Count"
                                    })
                                }), (0,
                                x.jsx)("input", {
                                    "data-test-id": "input-page-count",
                                    className: "field__input",
                                    disabled: !0,
                                    type: "number",
                                    value: (0,
                                    A.V)(S)
                                })]
                            })
                        })
                    })]
                }), (0,
                x.jsx)("div", {
                    className: "box__section",
                    children: (0,
                    x.jsx)(c.rQ, {
                        order: 2,
                        title: t.ag._("Interior Color"),
                        description: t.ag._("Ideal for image-heavy content with heavy ink coverage on the pages.")
                    })
                }), (0,
                x.jsx)("div", {
                    className: "box__section",
                    children: (0,
                    x.jsx)(c.Gi, {
                        values: [{
                            label: null !== (i = (0,
                            p.U)(L)) && void 0 !== i ? i : "",
                            value: L,
                            image: (0,
                            j.a)("".concat(L, "-1x.png"))
                        }],
                        type: "configurator",
                        selected: L,
                        name: "interiorInk"
                    })
                }), (0,
                x.jsx)("div", {
                    className: "box__section",
                    children: (0,
                    x.jsx)(c.rQ, {
                        order: 3,
                        title: t.ag._("Paper Type"),
                        description: t.ag._("The heaviest available stock, used to create durable, vibrant calendars.")
                    })
                }), (0,
                x.jsx)("div", {
                    className: "box__section",
                    children: (0,
                    x.jsx)(c.Gi, {
                        values: [{
                            image: (0,
                            j.a)("".concat(B, "-1x.png")),
                            label: null !== (n = (0,
                            p.U)(B)) && void 0 !== n ? n : "",
                            value: B
                        }],
                        type: "configurator",
                        selected: B,
                        name: "interiorPaper"
                    })
                }), (0,
                x.jsx)("div", {
                    className: "box__section",
                    children: (0,
                    x.jsx)(c.rQ, {
                        order: 4,
                        title: t.ag._("Binding Type"),
                        description: t.ag._("The Wire-O binding is used exclusively for calendars to create a durable calendar that can easily be flipped without scratching or twisting.")
                    })
                }), (0,
                x.jsx)("div", {
                    className: "box__section",
                    children: (0,
                    x.jsx)(c.Gi, {
                        values: [{
                            image: (0,
                            j.a)("".concat(T, "-1x.png")),
                            label: null !== (a = (0,
                            p.U)(T)) && void 0 !== a ? a : "",
                            value: T
                        }],
                        type: "configurator",
                        selected: T,
                        name: "bindingType"
                    })
                }), (0,
                x.jsx)("div", {
                    className: "box__section",
                    children: (0,
                    x.jsx)(c.rQ, {
                        order: 5,
                        title: t.ag._("Cover Finish")
                    })
                }), (0,
                x.jsx)("div", {
                    className: "box__section",
                    children: (0,
                    x.jsx)(c.Gi, {
                        values: [{
                            label: null !== (l = (0,
                            p.U)(U)) && void 0 !== l ? l : "",
                            value: U
                        }],
                        type: "configurator",
                        selected: U,
                        name: "coverFinish"
                    })
                })]
            })
        }
          , L = n(50029)
          , B = n(87794)
          , V = n.n(B)
          , M = {
            "060UW": 444,
            "060UC": 444,
            "070CW": 460,
            "080CW": 444,
            "100CW": 200
        }
          , D = function() {
            var e = (0,
            L.Z)(V().mark((function e(i) {
                var n, a, t;
                return V().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            i.blob();
                        case 2:
                            n = e.sent,
                            a = URL.createObjectURL(n),
                            (t = document.createElement("a")).style.display = "none",
                            t.href = a,
                            t.download = "cover_template.pdf",
                            document.body.appendChild(t),
                            t.click(),
                            window.URL.revokeObjectURL(a);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(i) {
                return e.apply(this, arguments)
            }
        }()
          , F = function(e) {
            var i, n, a = e.data, l = e.trimName, o = r.useContext(P), s = o.productType, d = o.podPackageId, v = o.pageCount, g = null === a || void 0 === a || null === (i = a.podPackageDimension) || void 0 === i ? void 0 : i.find((function(e) {
                return "INCH" === (null === e || void 0 === e ? void 0 : e.unit)
            }
            )), m = function(e, i, n) {
                var a = (0,
                r.useState)(!1)
                  , t = a[0]
                  , l = a[1]
                  , o = (0,
                b.FR)(null !== i && void 0 !== i ? i : "")
                  , u = (0,
                b.qB)(null !== i && void 0 !== i ? i : "")
                  , c = (0,
                b.RB)(null !== i && void 0 !== i ? i : "")
                  , s = c ? (parseInt(c.split("X")[0]) / 100).toString() : null
                  , d = c ? (parseInt(c.split("X")[1]) / 100).toString() : null
                  , v = new URLSearchParams({
                    binding_type: o,
                    mode: ["COMIC_BOOK", "MAGAZINE"].includes(e) ? "full_inside" : "full",
                    interior_height: String(d),
                    interior_width: String(s),
                    num_pages: String(n),
                    pages_per_inch: String(M[u]),
                    target: "print",
                    theme: "lulu2"
                })
                  , p = {
                    headers: {
                        "Content-Type": "application/pdf"
                    }
                }
                  , g = function() {
                    var e = (0,
                    L.Z)(V().mark((function e() {
                        var i;
                        return V().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    l(!0),
                                    e.next = 4,
                                    fetch("https://api.lulu.com/cover/api/v1/template/?" + v, p);
                                case 4:
                                    i = e.sent,
                                    D(i),
                                    e.next = 12;
                                    break;
                                case 8:
                                    if (e.prev = 8,
                                    e.t0 = e.catch(0),
                                    !(e.t0 instanceof Error)) {
                                        e.next = 12;
                                        break
                                    }
                                    throw Error(e.t0.message);
                                case 12:
                                    return e.prev = 12,
                                    l(!1),
                                    e.finish(12);
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 8, 12, 15]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return {
                    downloadCoverTemplate: g,
                    downloadingCoverTemplate: t
                }
            }(s, d, v), _ = m.downloadCoverTemplate, f = m.downloadingCoverTemplate;
            if (!d)
                return null;
            var h = null === a || void 0 === a || null === (n = a.podPackageDimension) || void 0 === n ? void 0 : n.find((function(e) {
                return "MILLIMETER" === (null === e || void 0 === e ? void 0 : e.unit)
            }
            ))
              , C = "https://assets.lulu.com/media/templates/book/lulu-book-template-"
              , y = {
                "0425X0687": "".concat(C, "pocket-book.zip"),
                "0550X0850": "".concat(C, "digest.zip"),
                "0583X0827": "".concat(C, "a5.zip"),
                "0600X0900": "".concat(C, "us-trade.zip"),
                "0614X0921": "".concat(C, "royal.zip"),
                "0663X1025": "".concat(C, "comic-book.zip"),
                "0700X1000": "".concat(C, "executive.zip"),
                "0744X0968": "".concat(C, "crown-quarto.zip"),
                "0750X0750": "".concat(C, "small-square.zip"),
                "0827X1169": "".concat(C, "a4.zip"),
                "0850X0850": "".concat(C, "square.zip"),
                "0850X1100": "".concat(C, "us-letter.zip"),
                "0900X0700": "".concat(C, "small-landscape.zip"),
                "1100X0850": "".concat(C, "us-letter-landscape.zip"),
                "1169X0827": "".concat(C, "a4-landscape.zip"),
                "0500X0800": "".concat(C, "novella.zip")
            }
              , j = {
                "0850X1100": "".concat(C, "us-letter-magazine.zip"),
                "0827X1169": "".concat(C, "a4-magazine.zip")
            }
              , O = !v || v <= 22 ? 12 : 18
              , I = function() {
                switch (s) {
                case "COMIC_BOOK":
                    return "".concat(C, "comic-book.zip");
                case "CALENDAR":
                    return "".concat("https://assets.lulu.com/media/templates/calendar/lulu-calendar-template-us-letter-landscape-").concat(O, "-month.zip");
                case "MAGAZINE":
                    return j[l];
                default:
                    return y[l]
                }
            };
            return (0,
            x.jsx)("div", {
                className: "box__section",
                children: (0,
                x.jsxs)("div", {
                    className: E()("grid-12", N().table),
                    children: [(0,
                    x.jsxs)("div", {
                        className: "col-6 col-m-big-12",
                        children: [(0,
                        x.jsx)("h3", {
                            className: N().header,
                            children: (0,
                            x.jsx)(u.cC, {
                                id: "{0} Specifications",
                                values: {
                                    0: (0,
                                    p.U)(s)
                                }
                            })
                        }), (0,
                        x.jsxs)("div", {
                            className: N().selection,
                            children: [(0,
                            x.jsx)("div", {
                                className: N().label,
                                children: (0,
                                x.jsx)(u.cC, {
                                    id: "{0} Size:",
                                    values: {
                                        0: (0,
                                        p.U)(s)
                                    }
                                })
                            }), (0,
                            x.jsx)("div", {
                                className: N().value,
                                children: (0,
                                p.U)(b.RB(d))
                            }), b.CV(s) ? (0,
                            x.jsxs)(x.Fragment, {
                                children: [(0,
                                x.jsx)("div", {
                                    className: N().label,
                                    children: (0,
                                    x.jsx)(u.cC, {
                                        id: "Total Page Count:"
                                    })
                                }), (0,
                                x.jsx)("div", {
                                    className: N().value,
                                    children: (0,
                                    A.V)(v)
                                })]
                            }) : (0,
                            x.jsxs)(x.Fragment, {
                                children: [(0,
                                x.jsx)("div", {
                                    className: N().label,
                                    children: (0,
                                    x.jsx)(u.cC, {
                                        id: "Interior Page Count:"
                                    })
                                }), (0,
                                x.jsx)("div", {
                                    className: N().value,
                                    children: v
                                }), (0,
                                x.jsx)("div", {
                                    className: N().label,
                                    children: (0,
                                    x.jsx)(u.cC, {
                                        id: "Cover Page Count:"
                                    })
                                }), (0,
                                x.jsx)("div", {
                                    className: N().value,
                                    children: "MAGAZINE" === s || "COMIC_BOOK" === s ? t.ag._("1 or 2 (2 pages required for inside cover printing)") : 1
                                })]
                            }), (0,
                            x.jsx)("div", {
                                className: N().label,
                                children: (0,
                                x.jsx)(u.cC, {
                                    id: "Interior Color:"
                                })
                            }), (0,
                            x.jsx)("div", {
                                className: N().value,
                                children: (0,
                                p.U)(b.JW(d))
                            }), (0,
                            x.jsx)("div", {
                                className: N().label,
                                children: (0,
                                x.jsx)(u.cC, {
                                    id: "Paper Type:"
                                })
                            }), (0,
                            x.jsx)("div", {
                                className: N().value,
                                children: (0,
                                p.U)(b.qB(d))
                            }), (0,
                            x.jsx)("div", {
                                className: N().label,
                                children: (0,
                                x.jsx)(u.cC, {
                                    id: "Binding Type:"
                                })
                            }), (0,
                            x.jsx)("div", {
                                className: N().value,
                                children: (0,
                                p.U)(b.FR(d))
                            }), (0,
                            x.jsx)("div", {
                                className: N().label,
                                children: (0,
                                x.jsx)(u.cC, {
                                    id: "Cover Finish:"
                                })
                            }), (0,
                            x.jsx)("div", {
                                className: N().value,
                                children: (0,
                                p.U)(b.W5(d))
                            })]
                        })]
                    }), (0,
                    x.jsxs)("div", {
                        className: "col-6 col-m-big-12",
                        children: [(0,
                        x.jsx)("h3", {
                            className: N().header,
                            children: (0,
                            x.jsx)(u.cC, {
                                id: "Print PDF Requirements"
                            })
                        }), (0,
                        x.jsxs)("div", {
                            className: N().requirements,
                            children: [(0,
                            x.jsx)("div", {
                                className: N().label,
                                children: (0,
                                x.jsx)(u.cC, {
                                    id: "Interior Page Size:"
                                })
                            }), (0,
                            x.jsx)("div", {
                                className: N().value,
                                children: t.ag._("{0} x {1}in / {2}mm x {3}mm", {
                                    0: null === g || void 0 === g ? void 0 : g.interiorWidth,
                                    1: null === g || void 0 === g ? void 0 : g.interiorHeight,
                                    2: null === h || void 0 === h ? void 0 : h.interiorWidth,
                                    3: null === h || void 0 === h ? void 0 : h.interiorHeight
                                })
                            }), (0,
                            x.jsx)("div", {
                                className: N().label,
                                children: (0,
                                x.jsx)(u.cC, {
                                    id: "Cover Size: <0>(Including Spine)</0>",
                                    components: {
                                        0: (0,
                                        x.jsx)("span", {})
                                    }
                                })
                            }), (0,
                            x.jsx)("div", {
                                className: N().value,
                                children: t.ag._("{0} x {1}in / {2}mm x {3}mm", {
                                    0: null === g || void 0 === g ? void 0 : g.coverWidth,
                                    1: null === g || void 0 === g ? void 0 : g.coverHeight,
                                    2: null === h || void 0 === h ? void 0 : h.coverWidth,
                                    3: null === h || void 0 === h ? void 0 : h.coverHeight
                                })
                            }), (0,
                            x.jsx)("div", {
                                className: N().label,
                                children: (0,
                                x.jsx)(u.cC, {
                                    id: "Spine Width:"
                                })
                            }), (0,
                            x.jsx)("div", {
                                className: N().value,
                                children: t.ag._("{0}in / {1}mm", {
                                    0: null === g || void 0 === g ? void 0 : g.spineWidth,
                                    1: null === h || void 0 === h ? void 0 : h.spineWidth
                                })
                            })]
                        }), (0,
                        x.jsxs)("div", {
                            className: N().templatesContainer,
                            children: [(0,
                            x.jsx)("h3", {
                                className: N().header,
                                children: (0,
                                x.jsx)(u.cC, {
                                    id: "Design Templates"
                                })
                            }), (0,
                            x.jsxs)("div", {
                                className: N().templates,
                                children: [(0,
                                x.jsx)("div", {
                                    className: E()(N().label, N().templatesLabel),
                                    children: (0,
                                    x.jsx)(u.cC, {
                                        id: "Download a cover PDF sized to your Print PDF Requirements:"
                                    })
                                }), (0,
                                x.jsx)(c.zx, {
                                    download: !0,
                                    loading: f,
                                    onClick: function() {
                                        return _()
                                    },
                                    className: E()(N().button, N().templatesFirstButton),
                                    children: (0,
                                    x.jsx)(u.cC, {
                                        id: "Download Cover Template"
                                    })
                                }), (0,
                                x.jsx)("div", {
                                    className: E()(N().label, N().templatesLabel),
                                    children: (0,
                                    x.jsx)(u.cC, {
                                        id: "Download Interior Templates, PDF Presets, and our Book Creation Guide:"
                                    })
                                }), (0,
                                x.jsx)(c.zx, {
                                    download: !0,
                                    downloadHref: I(),
                                    downloadTitle: I(),
                                    className: E()(N().button, N().templatesSecondButton),
                                    children: (0,
                                    x.jsx)(u.cC, {
                                        id: "Download Templates & Presets"
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            })
        }
          , G = function() {
            var e, i = r.useContext(P), n = i.productType, a = i.podPackageId, t = i.setPodPackageId, l = i.pageCount, o = b.CV(n), s = (0,
            f.cO)({
                client: _.A,
                variables: {
                    printableType: b.Xf(n)
                }
            }), d = s.loading, v = s.data, g = (0,
            f.yc)({
                skip: !l || !a,
                variables: {
                    pageCount: l,
                    podPackageId: a
                }
            }), C = (0,
            f.l)({
                skip: !l || !a,
                variables: {
                    pageCount: l,
                    podPackageId: a
                }
            }), y = r.useMemo((function() {
                var e, i;
                return null !== (e = null === v || void 0 === v || null === (i = v.podPackages) || void 0 === i ? void 0 : i.filter((function(e) {
                    return e
                }
                ))) && void 0 !== e ? e : []
            }
            ), [v]), E = r.useState(""), j = (0,
            m.Z)(E, 2), O = j[0], I = j[1];
            return r.useEffect((function() {
                var e, i, n, a, l;
                o && !d && y && 1 === y.length && (t(null !== (e = null === (i = y[0]) || void 0 === i ? void 0 : i.id) && void 0 !== e ? e : ""),
                I(null !== (n = null === (a = y[0]) || void 0 === a || null === (l = a.trimSize) || void 0 === l ? void 0 : l.key) && void 0 !== n ? n : ""))
            }
            ), [d, o, y, t]),
            d ? (0,
            x.jsx)(c.gb, {}) : n && 0 !== y.length ? (0,
            x.jsxs)("div", {
                className: "box",
                children: [o && 1 === y.length ? (0,
                x.jsx)(U, {
                    podPackages: y
                }) : (0,
                x.jsx)(T, {
                    podPackages: y,
                    setTrimName: I
                }), l && a && !C.loading && C.data && (0,
                x.jsx)(F, {
                    data: C.data,
                    trimName: O
                }), (0,
                x.jsx)("div", {
                    className: "box__section",
                    children: (0,
                    x.jsx)("div", {
                        children: (0,
                        x.jsxs)("div", {
                            className: N().price,
                            children: [(0,
                            x.jsx)("h2", {
                                children: (0,
                                x.jsx)(u.cC, {
                                    id: "Cost per {0}",
                                    values: {
                                        0: (0,
                                        p.U)(n)
                                    }
                                })
                            }), g.loading ? (0,
                            x.jsx)("div", {
                                className: N().priceIcon,
                                children: (0,
                                x.jsx)(c.JO, {
                                    iconName: c.PJ.DataProcessLarge
                                })
                            }) : null !== (e = g.data) && void 0 !== e && e.manufacturingCost && a ? (0,
                            x.jsxs)("h2", {
                                children: [g.data.manufacturingCost.currency, " ", h("".concat(g.data.manufacturingCost.amount))]
                            }) : "-"]
                        })
                    })
                })]
            }) : null
        }
          , H = n(27812)
          , X = ["USD", "EUR", "AUD", "GBP", "CAD"]
          , z = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return [["FIXED_LIST_PRICE", t.ag._("Fixed List Price")], ["MINIMUM_REVENUE_GOAL", t.ag._("Revenue Goal")]].concat((0,
            H.Z)(e ? [["FREE", t.ag._("Offering for Free")]] : []))
        }
          , W = function(e) {
            var i = e.hasActivePromotion
              , n = e.isPricingUpdateView
              , a = e.isLuluDirect;
            return {
                NON_PROMOTIONAL_LIST_PRICE: t.ag._("List Price"),
                NON_PROMOTIONAL_AUTHOR_REVENUE: t.ag._("List Price Revenue"),
                LIST_PRICE: a ? t.ag._("Lulu Direct List Price*") : i ? t.ag._("Promotional Price") : t.ag._("List Price"),
                PRINT_COST: t.ag._("- Print Cost"),
                DISTRIBUTION_FEES: t.ag._("- Distribution Fees"),
                GROSS_PROFIT: t.ag._("= Gross Profit"),
                LULU_SHARE: t.ag._("- Lulu Share"),
                AUTHOR_REVENUE: i ? t.ag._("Your Promotional Revenue") : n ? t.ag._("Your Updated Revenue") : t.ag._("Your Estimated Revenue"),
                FULFILLMENT_FEE: t.ag._("- Fulfillment Fee**")
            }
        }
          , K = function(e, i) {
            switch (e) {
            case "LULU":
                return t.ag._("Sell your {0} on the Lulu Bookstore.", {
                    0: (0,
                    p.U)(i)
                });
            case "LULU_DIRECT":
                return t.ag._("Sell your {0} on your website or ecommerce store.", {
                    0: (0,
                    p.U)(i)
                });
            case "GLOBALREACH":
                return t.ag._("Sell your {0} through 40,000+ global retailers using Lulu\u2019s distribution service.", {
                    0: (0,
                    p.U)(i)
                });
            default:
                return null
            }
        };
        n(96486);
        var Z = function(e) {
            var i = e.listPrice
              , n = void 0 === i ? [] : i
              , a = e.minimumPrices
              , t = void 0 === a ? [] : a
              , l = e.maximumPrices
              , o = e.luluDirectPrintCosts
              , r = e.luluBookstorePrintCosts;
            return X.map((function(e) {
                var i, a, u, c, s, d, v, p, g, m, _, f;
                return {
                    currency: e,
                    listPrice: null !== (i = h(null !== (a = null === (u = n.find((function(i) {
                        return (null === i || void 0 === i ? void 0 : i.currency) === e
                    }
                    ))) || void 0 === u ? void 0 : u.amount) && void 0 !== a ? a : "")) && void 0 !== i ? i : "",
                    minimumPrice: null !== (c = h(null !== (s = null === (d = t.find((function(i) {
                        return (null === i || void 0 === i ? void 0 : i.currency) === e
                    }
                    ))) || void 0 === d ? void 0 : d.amount) && void 0 !== s ? s : "")) && void 0 !== c ? c : "",
                    maximumPrice: l ? h(null !== (v = null === (p = l.find((function(i) {
                        return (null === i || void 0 === i ? void 0 : i.currency) === e
                    }
                    ))) || void 0 === p ? void 0 : p.amount) && void 0 !== v ? v : "") : null,
                    luluDirectPrintCost: o ? h(null !== (g = null === (m = o.find((function(i) {
                        return (null === i || void 0 === i ? void 0 : i.currency) === e
                    }
                    ))) || void 0 === m ? void 0 : m.amount) && void 0 !== g ? g : "") : null,
                    luluBookstorePrintCost: r ? h(null !== (_ = null === (f = r.find((function(i) {
                        return (null === i || void 0 === i ? void 0 : i.currency) === e
                    }
                    ))) || void 0 === f ? void 0 : f.amount) && void 0 !== _ ? _ : "") : null
                }
            }
            ))
        }
          , q = function(e) {
            if (!e)
                return [];
            var i = e.find((function(e) {
                return "LULU" === e.channel
            }
            ));
            return Array.from(new Set([i].concat((0,
            H.Z)(e))))
        };
        function Q(e, i) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                i && (a = a.filter((function(i) {
                    return Object.getOwnPropertyDescriptor(e, i).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function Y(e) {
            for (var i = 1; i < arguments.length; i++) {
                var n = null != arguments[i] ? arguments[i] : {};
                i % 2 ? Q(Object(n), !0).forEach((function(i) {
                    (0,
                    I.Z)(e, i, n[i])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Q(Object(n)).forEach((function(i) {
                    Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i))
                }
                ))
            }
            return e
        }
        var $ = function(e) {
            var i, n = e.channel, a = e.revenue, l = e.productType, o = "LULU_DIRECT" === n, r = function() {
                var e = o ? a.filter((function(e) {
                    return "LIST_PRICE" === e.label || "PRINT_COST" === e.label || "AUTHOR_REVENUE" === e.label || "FULFILLMENT_FEE" === e.label
                }
                )) : a.filter((function(e) {
                    return "FULFILLMENT_FEE" !== e.label
                }
                ));
                return "LULU" === n && (e = e.filter((function(e) {
                    return "DISTRIBUTION_FEES" !== e.label
                }
                ))),
                e.sort((function(e, i) {
                    return "AUTHOR_REVENUE" === e.label ? 1 : "AUTHOR_REVENUE" === i.label ? -1 : 0
                }
                )),
                {
                    channel: n,
                    data: e.map((function(e) {
                        return Y(Y({}, e), {}, {
                            label: null !== e && void 0 !== e && e.label ? W({
                                isLuluDirect: o
                            })[null === e || void 0 === e ? void 0 : e.label] : ""
                        })
                    }
                    ))
                }
            };
            return (0,
            x.jsx)(c.je, Y({
                selected: !0,
                withCheckbox: !1,
                title: {
                    LULU: t.ag._("Lulu Bookstore Revenue"),
                    LULU_DIRECT: t.ag._("Lulu Direct Revenue Example"),
                    GLOBALREACH: t.ag._("Global Distribution Revenue"),
                    IBOOKSTORE: t.ag._("Apple Books Revenue"),
                    KOBO: t.ag._("Kobo Bookstore Revenue"),
                    NOOK: t.ag._("Barnes & Noble Nook Revenue"),
                    KINDLE: t.ag._("Amazon Kindle Revenue"),
                    OTHERS: t.ag._("Other Channels Revenue")
                }[r().channel],
                description: null !== (i = K(n, l)) && void 0 !== i ? i : void 0,
                currencies: X,
                pricingInfo: r()
            }, "LULU_DIRECT" === n ? {
                logo: "/lulu-direct-logo.svg",
                footnote: [t.ag._("Lulu Direct list price is an example based on the list price you set for Lulu. You can set a different list price in your ecommerce platform. Other fees may apply."), (0,
                x.jsx)(u.cC, {
                    id: "Fulfillment fee for orders placed through connected stores. <0>Learn more about Lulu Direct pricing.</0>",
                    components: {
                        0: (0,
                        x.jsx)("a", {
                            rel: "noopener noreferrer",
                            target: "_blank",
                            className: "pricing__configurator__table__footnote-link",
                            href: "https://help.luludirect.lulu.com/en/support/solutions/articles/64000270795-how-are-lulu-direct-prices-calculated-and-what-will-i-pay"
                        })
                    }
                }, 1)].filter(Boolean)
            } : {}), n)
        }
          , J = function(e) {
            var i, n, a, l, o, u, s, d = e.pageCount, v = e.podPackageId, p = e.minimumPrices, g = e.productType, _ = r.useState(X[0]), h = (0,
            m.Z)(_, 2), b = h[0], P = h[1], C = r.useState(""), y = (0,
            m.Z)(C, 2), E = y[0], j = y[1], O = (0,
            f.Q5)({
                skip: !v || !d || !E,
                variables: {
                    pageCount: d,
                    podPackageId: v,
                    minimumRevenue: {
                        amount: Number(E),
                        currency: b
                    }
                }
            }), N = null === (i = O.error) || void 0 === i ? void 0 : i.graphQLErrors.some((function(e) {
                var i = e.extensions;
                return "REVENUE_GOAL_PRICE_TOO_HIGH" === (null === i || void 0 === i ? void 0 : i.code)
            }
            )), I = null === (n = O.data) || void 0 === n || null === (a = n.priceMap) || void 0 === a || null === (l = a.revenue) || void 0 === l ? void 0 : l.filter((function(e) {
                return e
            }
            )), w = null === (o = O.data) || void 0 === o || null === (u = o.priceMap) || void 0 === u || null === (s = u.listPrice) || void 0 === s ? void 0 : s.filter((function(e) {
                return e
            }
            )), k = r.useMemo((function() {
                return q(I)
            }
            ), [I]);
            return (0,
            x.jsxs)(x.Fragment, {
                children: [(0,
                x.jsx)("section", {
                    className: "box__section",
                    children: (0,
                    x.jsx)(c.Oj, {
                        active: !0,
                        title: t.ag._("Revenue Goal"),
                        children: (0,
                        x.jsx)(c.t5, {
                            currencies: X,
                            onChange: function(e) {
                                var i = e.amount
                                  , n = e.currency;
                                j(i),
                                P(n)
                            },
                            revenueGoal: {
                                amount: E,
                                currency: b
                            },
                            error: N ? t.ag._("Revenue goal is too high") : void 0
                        })
                    })
                }), (0,
                x.jsx)("section", {
                    className: "box__section",
                    children: (0,
                    x.jsx)(c.Oj, {
                        active: !O.loading,
                        footnote: t.ag._("Minimum Price is determined by the print cost and distribution channel fees."),
                        helperText: t.ag._("To ensure you earn revenue for sales, the list price cannot be less than the minimum price."),
                        reference: t.ag._("Minimum Price"),
                        title: t.ag._("List Price"),
                        children: (0,
                        x.jsx)(c.C8, {
                            active: !O.loading,
                            disabled: !0,
                            prices: Z({
                                listPrice: w,
                                minimumPrices: p
                            }),
                            onChange: function() {}
                        })
                    })
                }), null === k || void 0 === k ? void 0 : k.sort((function(e, i) {
                    return "LULU" === e.channel || "GLOBALREACH" === i.channel ? -1 : "LULU" === i.channel || "GLOBALREACH" === e.channel ? 1 : 0
                }
                )).map((function(e) {
                    var i = e.channel
                      , n = e.data;
                    return !(!n || !i) && (0,
                    x.jsx)($, {
                        channel: i,
                        revenue: n,
                        productType: g
                    }, i)
                }
                ))]
            })
        }
          , ee = function(e) {
            var i, n, a, l = e.pageCount, o = e.podPackageId, u = e.minimumPrices, s = e.maximumPrices, d = e.productType, v = r.useState([]), p = (0,
            m.Z)(v, 2), g = p[0], _ = p[1], h = null === (i = (0,
            f.Q5)({
                variables: {
                    pageCount: l,
                    podPackageId: o,
                    listPrice: g
                },
                skip: !g.length
            }).data) || void 0 === i || null === (n = i.priceMap) || void 0 === n || null === (a = n.revenue) || void 0 === a ? void 0 : a.filter(Boolean), b = r.useMemo((function() {
                return q(h)
            }
            ), [h]);
            return u ? (0,
            x.jsxs)(x.Fragment, {
                children: [(0,
                x.jsx)("section", {
                    className: "box__section",
                    children: (0,
                    x.jsx)(c.Oj, {
                        active: !0,
                        footnote: t.ag._("Minimum Price is determined by the print cost and distribution channel fees."),
                        helperText: t.ag._("To ensure you earn revenue for sales, the list price cannot be less than the minimum price."),
                        reference: t.ag._("Minimum Price"),
                        title: t.ag._("List Price"),
                        children: (0,
                        x.jsx)(c.C8, {
                            active: !0,
                            prices: Z({
                                listPrice: g,
                                minimumPrices: u,
                                maximumPrices: s
                            }),
                            onChange: function(e) {
                                _(e)
                            }
                        })
                    })
                }), null === b || void 0 === b ? void 0 : b.sort((function(e, i) {
                    return "LULU" === e.channel || "GLOBALREACH" === i.channel ? -1 : "LULU" === i.channel || "GLOBALREACH" === e.channel ? 1 : 0
                }
                )).map((function(e) {
                    var i = e.channel
                      , n = e.data;
                    return !(!n || !i) && (0,
                    x.jsx)($, {
                        channel: i,
                        revenue: n,
                        productType: d
                    }, i)
                }
                ))]
            }) : null
        }
          , ie = function() {
            var e, i, n, a, l, o, s = r.useContext(P), d = s.productType, v = s.podPackageId, p = s.pageCount, g = r.useState(z()[1][0]), _ = (0,
            m.Z)(g, 2), h = _[0], b = _[1], C = (0,
            f.ly)({
                variables: {
                    projectType: d,
                    podPackageId: v,
                    pageCount: p
                },
                skip: !d || !v || !p
            }).data;
            return p && v ? (0,
            x.jsxs)("div", {
                className: "box",
                children: [(0,
                x.jsx)(c.rQ, {
                    title: t.ag._("Retail Revenue Calculator"),
                    description: t.ag._("Use the Revenue Calculator to set a retail price and calculate potential revenue amounts.")
                }), (0,
                x.jsx)("div", {
                    className: "box__section",
                    children: (0,
                    x.jsx)(c.Hn, {
                        title: t.ag._("Set Price"),
                        increasedHorizontalPadding: !0,
                        downwardArrow: !0,
                        children: (0,
                        x.jsx)("div", {
                            className: "field",
                            children: (0,
                            x.jsxs)("div", {
                                className: "field__input-wrapper field__input-wrapper--select field__input-wrapper--with-icon",
                                children: [(0,
                                x.jsx)("label", {
                                    className: "field__label field__label--visible",
                                    children: (0,
                                    x.jsx)(u.cC, {
                                        id: "Set price by"
                                    })
                                }), (0,
                                x.jsx)("select", {
                                    "data-test-id": "select-price-type",
                                    className: "field__input field__input--select",
                                    onChange: function(e) {
                                        return b(e.target.value)
                                    },
                                    value: h,
                                    children: z().map((function(e) {
                                        return (0,
                                        x.jsx)("option", {
                                            value: e[0],
                                            label: e[1],
                                            children: e[1]
                                        }, e[0])
                                    }
                                    ))
                                }), (0,
                                x.jsx)("i", {
                                    className: E()("input-icon", {
                                        "icon-wizard-list-price": "FIXED_LIST_PRICE" === h
                                    }, {
                                        "icon-wizard-revenue-goal": "MINIMUM_REVENUE_GOAL" === h
                                    })
                                }), (0,
                                x.jsx)("div", {
                                    className: "field__caret"
                                })]
                            })
                        })
                    })
                }), "FIXED_LIST_PRICE" === h && (0,
                x.jsx)(ee, {
                    pageCount: p,
                    podPackageId: v,
                    productType: d,
                    minimumPrices: null !== (e = null === C || void 0 === C || null === (i = C.minimumPrices) || void 0 === i ? void 0 : i.filter((function(e) {
                        return e
                    }
                    ))) && void 0 !== e ? e : [],
                    maximumPrices: null !== (n = null === C || void 0 === C || null === (a = C.maximumPrices) || void 0 === a ? void 0 : a.filter((function(e) {
                        return e
                    }
                    ))) && void 0 !== n ? n : []
                }), "MINIMUM_REVENUE_GOAL" === h && (0,
                x.jsx)(J, {
                    pageCount: p,
                    podPackageId: v,
                    productType: d,
                    minimumPrices: null !== (l = null === C || void 0 === C || null === (o = C.minimumPrices) || void 0 === o ? void 0 : o.filter((function(e) {
                        return e
                    }
                    ))) && void 0 !== l ? l : []
                })]
            }) : null
        }
          , ne = n(18975)
          , ae = n(10063)
          , te = n(38808)
          , le = n.n(te)
          , oe = function() {
            var e = r.useContext(P)
              , i = e.podPackageId
              , n = e.productType
              , a = e.setShippingCost
              , l = e.setQuantity
              , o = e.pageCount
              , s = r.useContext(R.R).locale
              , d = r.useContext(ae.A9).currency
              , v = r.useState("")
              , g = (0,
            m.Z)(v, 2)
              , b = g[0]
              , C = g[1]
              , y = r.useState("")
              , j = (0,
            m.Z)(y, 2)
              , O = j[0]
              , N = j[1]
              , I = r.useState()
              , w = (0,
            m.Z)(I, 2)
              , k = w[0]
              , S = w[1]
              , T = (0,
            f.R0)({
                client: _.A,
                variables: {
                    addressType: "SHIPPING"
                }
            })
              , A = T.data
              , U = T.loading
              , L = (null === A || void 0 === A ? void 0 : A.countries) || []
              , B = (0,
            f.Le)({
                skip: !O || !i || !b || !Number(b) || !o,
                variables: {
                    input: {
                        lineItems: [{
                            podPackageId: i,
                            quantity: Number(b),
                            pageCount: o
                        }],
                        shippingAddress: {
                            country: O
                        },
                        currency: d,
                        lineOfBusinessId: "LULU"
                    }
                }
            })
              , V = B.data
              , M = B.loading;
            r.useEffect((function() {
                l(b && Number(b) || null)
            }
            ), [b, l]),
            r.useEffect((function() {
                var e, i = null === V || void 0 === V || null === (e = V.dispatcherShippingMethods) || void 0 === e ? void 0 : e.find((function(e) {
                    return (null === e || void 0 === e ? void 0 : e.name) === (null === k || void 0 === k ? void 0 : k.name)
                }
                ));
                i ? (S(i),
                a({
                    amount: i.cost,
                    currency: i.currency
                })) : a(null)
            }
            ), [a, k, V]);
            if (!n || !i || U || 0 === L.length)
                return null;
            var D = (null === V || void 0 === V ? void 0 : V.dispatcherShippingMethods) || [];
            return (0,
            x.jsxs)(x.Fragment, {
                children: [(0,
                x.jsx)(c.rQ, {
                    title: t.ag._("Pricing Estimate"),
                    description: (0,
                    x.jsx)(u.cC, {
                        id: "See available shipping options and pricing based on the {0} options selected above. <0>Please note:</0> all shipping times and costs are estimates.",
                        values: {
                            0: (0,
                            p.U)(n)
                        },
                        components: {
                            0: (0,
                            x.jsx)("strong", {})
                        }
                    })
                }), (0,
                x.jsx)("div", {
                    className: "box__section grid-12",
                    children: (0,
                    x.jsx)("div", {
                        className: "col-8 col-m-big-12 col-start-5 col-start-m-big-1",
                        children: (0,
                        x.jsxs)("div", {
                            className: "grid-12",
                            children: [(0,
                            x.jsx)("div", {
                                className: "col-4 col-s-12",
                                children: (0,
                                x.jsx)("div", {
                                    className: "field",
                                    children: (0,
                                    x.jsxs)("div", {
                                        className: "field__input-wrapper",
                                        children: [(0,
                                        x.jsx)("label", {
                                            className: "field__label field__label--visible",
                                            children: (0,
                                            x.jsx)(u.cC, {
                                                id: "Number of copies"
                                            })
                                        }), (0,
                                        x.jsx)("input", {
                                            "data-test-id": "number-of-copies-input",
                                            className: "field__input",
                                            name: "quantity",
                                            onChange: function(e) {
                                                ("" === e.target.value || /^[0-9]+$/.test(e.target.value)) && C(e.target.value)
                                            },
                                            type: "text",
                                            value: b
                                        })]
                                    })
                                })
                            }), (0,
                            x.jsx)("div", {
                                className: "col-8 col-s-12",
                                children: (0,
                                x.jsx)("div", {
                                    className: "field",
                                    children: (0,
                                    x.jsxs)("div", {
                                        className: "field__input-wrapper field__input-wrapper--select field__input-wrapper--with-icon",
                                        children: [(0,
                                        x.jsx)("label", {
                                            className: "field__label field__label--visible",
                                            children: (0,
                                            x.jsx)(u.cC, {
                                                id: "Destination Country"
                                            })
                                        }), (0,
                                        x.jsxs)("select", {
                                            "data-test-id": "input-country",
                                            className: "field__input field__input--select",
                                            name: "country",
                                            value: O,
                                            onChange: function(e) {
                                                N(e.target.value)
                                            },
                                            children: [(0,
                                            x.jsx)("option", {
                                                value: "",
                                                disabled: !0,
                                                children: t.ag._("Select a country")
                                            }), L.map((function(e) {
                                                var i, n;
                                                return (0,
                                                x.jsx)("option", {
                                                    value: null !== (i = null === e || void 0 === e ? void 0 : e.code) && void 0 !== i ? i : "",
                                                    children: ne.getName(null !== (n = null === e || void 0 === e ? void 0 : e.code) && void 0 !== n ? n : "", s)
                                                }, null === e || void 0 === e ? void 0 : e.code)
                                            }
                                            ))]
                                        }), (0,
                                        x.jsx)(c.JO, {
                                            iconName: c.PJ.ContactCountry,
                                            className: "input-icon"
                                        }), (0,
                                        x.jsx)("div", {
                                            className: "field__caret"
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                }), (0,
                x.jsxs)("div", {
                    className: "box__section grid-12",
                    children: [(0,
                    x.jsx)("div", {
                        className: "col-4 col-m-big-12",
                        children: (!!D.length || M) && (0,
                        x.jsx)("h3", {
                            className: "text-no-margin",
                            children: (0,
                            x.jsx)(u.cC, {
                                id: "Shipping Estimate"
                            })
                        })
                    }), (0,
                    x.jsxs)("div", {
                        className: E()("col-8", "col-m-big-12", le().shippingOptions),
                        children: [M && (0,
                        x.jsx)(c.gb, {}), D.map((function(e) {
                            var i, n, a;
                            return !(null === e || void 0 === e || !e.name) && (0,
                            x.jsx)(c.hC, {
                                dataTestId: "wizard-goal-".concat(e.name),
                                description: t.ag._("Delivered in {0}-{1} days", {
                                    0: e.daysMin,
                                    1: e.daysMax
                                }),
                                title: "".concat({
                                    "Expedited Shipping": t.ag._("Expedited Shipping"),
                                    "Express Shipping": t.ag._("Express Shipping"),
                                    Ground: t.ag._("Ground"),
                                    "Ground Business": t.ag._("Ground Business"),
                                    "Ground Home": t.ag._("Ground Home"),
                                    Mail: t.ag._("Mail"),
                                    "Priority Mail": t.ag._("Priority Mail")
                                }[e.name], " - ").concat(e.traceable ? t.ag._("Trackable") : t.ag._("Non-Trackable")),
                                labelStyle: {
                                    color: c.wL.AlmostBlack
                                },
                                name: null !== (i = e.name) && void 0 !== i ? i : "",
                                value: null !== (n = e.name) && void 0 !== n ? n : "",
                                checked: e.name === (null === k || void 0 === k ? void 0 : k.name),
                                onChange: function() {
                                    return S(e)
                                },
                                rightElement: (0,
                                x.jsxs)("div", {
                                    className: le().option,
                                    children: [(0,
                                    x.jsx)("span", {
                                        children: e.currency
                                    }), (0,
                                    x.jsx)("span", {
                                        children: h(null !== (a = e.cost) && void 0 !== a ? a : "")
                                    })]
                                })
                            }, e.name)
                        }
                        ))]
                    })]
                })]
            })
        }
          , re = function() {
            return [{
                description: t.ag._("Hardcover or paperback book using a wide range of paper, color, and binding options. The most common print-on-demand book, perfect for a variety of projects."),
                image: (0,
                j.a)("lulu-product-print-book-thumb-16-9-1x.png"),
                label: t.ag._("Print Book"),
                value: "PRINTED_BOOK"
            }, {
                description: t.ag._("Preserve memories or create a lookbook of your work with a hardcover photo book. Featuring the highest quality paper and rich color ink, our photo books highlight the best of Lulu's print options."),
                image: (0,
                j.a)("lulu-product-photo-book-thumb-16-9-1x.png"),
                label: t.ag._("Photo Book"),
                value: "PREMIUM_PHOTO_BOOK"
            }, {
                description: t.ag._("Traditional comic book size with paperback binding. Bring your art to life with printing in black & white or rich color, including on the inside of the cover."),
                image: (0,
                j.a)("lulu-product-comic-book-thumb-16-9-1x.png"),
                label: t.ag._("Comic Book"),
                value: "COMIC_BOOK"
            }, {
                description: t.ag._("Create beautiful magazines with rich color printing and bound in paperback. Features paper stock designed for magazines and printing on the inside front cover."),
                image: (0,
                j.a)("lulu-product-magazine-thumb-16-9-1x.png"),
                label: t.ag._("Magazine"),
                value: "MAGAZINE"
            }, {
                description: t.ag._("For schools and institutions, a print-on-demand yearbook means flexibility and options while saving money. Enjoy the best printing and binding at a fraction of the cost."),
                image: (0,
                j.a)("lulu-product-yearbook-thumb-16-9-1x.png"),
                label: t.ag._("Yearbook"),
                value: "YEARBOOK"
            }, {
                description: t.ag._("Create a 12 to 18-month calendar with our calendar tool. Upload images and create events to build your calendar or upload an original calendar design."),
                image: (0,
                j.a)("lulu-product-calendar-thumb-16-9-1x.jpg"),
                label: t.ag._("Calendar"),
                value: "CALENDAR"
            }, {
                description: t.ag._("Create an ebook from your PDF or EPUB file ready for viewing on an ereader, tablet, or smartphone."),
                image: (0,
                j.a)("lulu-product-ebook-thumb-16-9-1x.png"),
                label: t.ag._("Ebook"),
                value: "EBOOK"
            }]
        }
          , ue = ["PRINTED_BOOK", "PREMIUM_PHOTO_BOOK", "COMIC_BOOK", "MAGAZINE", "YEARBOOK", "CALENDAR"]
          , ce = function() {
            var e = r.useContext(P)
              , i = e.productType
              , n = e.setProductType;
            return (0,
            x.jsxs)("div", {
                className: "box",
                children: [(0,
                x.jsx)(c.rQ, {
                    title: t.ag._("Select a Product Type")
                }), (0,
                x.jsx)("div", {
                    className: "box__section",
                    children: (0,
                    x.jsx)(c.Gi, {
                        values: re().filter((function(e) {
                            return ue.includes(e.value)
                        }
                        )),
                        name: "productType",
                        selected: i,
                        onChange: function(e) {
                            return n(e)
                        }
                    })
                })]
            })
        }
          , se = n(16189)
          , de = n.n(se)
          , ve = function() {
            var e, i, n, a, t, l, o, c = r.useContext(P), s = c.productType, d = c.podPackageId, v = c.pageCount, g = c.quantity, m = c.shippingCost, _ = (0,
            f.Lq)({
                skip: !v || !d || !g,
                variables: {
                    pageCount: v,
                    podPackageId: d,
                    quantity: g
                }
            }), b = r.useMemo((function() {
                var e, i, n, a, t, l, o, r, u, c, s;
                return {
                    basePrice: (null === _ || void 0 === _ || null === (e = _.data) || void 0 === e || null === (i = e.totalPrices) || void 0 === i ? void 0 : i.basePrice) && "".concat(_.data.totalPrices.basePrice.currency, " ").concat(h(null !== (n = _.data.totalPrices.basePrice.amount) && void 0 !== n ? n : "")),
                    totalDiscounts: null !== _ && void 0 !== _ && null !== (a = _.data) && void 0 !== a && null !== (t = a.totalPrices) && void 0 !== t && t.totalDiscounts ? _.data.totalPrices.totalDiscounts.map((function(e) {
                        var i, n, a;
                        return {
                            label: null === e || void 0 === e ? void 0 : e.type,
                            value: "- ".concat(null === e || void 0 === e || null === (i = e.discount) || void 0 === i ? void 0 : i.currency, " ").concat(h(null !== (n = null === e || void 0 === e || null === (a = e.discount) || void 0 === a ? void 0 : a.amount) && void 0 !== n ? n : ""))
                        }
                    }
                    )) : [],
                    totalPrice: (null === _ || void 0 === _ || null === (l = _.data) || void 0 === l || null === (o = l.totalPrices) || void 0 === o ? void 0 : o.totalPrice) && (null === m || void 0 === m ? void 0 : m.amount) && "number" == typeof (null === _ || void 0 === _ || null === (r = _.data) || void 0 === r || null === (u = r.totalPrices) || void 0 === u || null === (c = u.handlingFee) || void 0 === c ? void 0 : c.amount) && "".concat(_.data.totalPrices.totalPrice.currency, " ").concat(h((m.amount + (null !== (s = _.data.totalPrices.totalPrice.amount) && void 0 !== s ? s : 0) + _.data.totalPrices.handlingFee.amount).toFixed(2)))
                }
            }
            ), [m, _]);
            return v && d && g ? (0,
            x.jsxs)("div", {
                className: "box__section grid-12",
                children: [(0,
                x.jsx)("div", {
                    className: "col-4 col-m-big-12",
                    children: (0,
                    x.jsx)("h3", {
                        className: "text-no-margin",
                        children: (0,
                        x.jsx)(u.cC, {
                            id: "Total Estimated Price"
                        })
                    })
                }), (0,
                x.jsx)("div", {
                    className: "col-8 col-m-big-12 col-start-5 col-start-m-big-1",
                    children: (0,
                    x.jsxs)("div", {
                        className: E()("grid-12", de().total),
                        children: [(0,
                        x.jsx)("div", {
                            className: de().label,
                            children: (0,
                            x.jsx)(u.cC, {
                                id: "{0} Subtotal",
                                values: {
                                    0: (0,
                                    p.U)(s)
                                }
                            })
                        }), (0,
                        x.jsxs)("div", {
                            className: de().value,
                            children: [b.basePrice || "-", (0,
                            x.jsx)("span", {
                                children: (0,
                                x.jsx)(u.cC, {
                                    id: "Excluding Shipping and Tax"
                                })
                            })]
                        }), b.totalDiscounts.map((function(e) {
                            return (0,
                            x.jsxs)(r.Fragment, {
                                children: [(0,
                                x.jsx)("div", {
                                    className: de().label,
                                    children: e.label
                                }), (0,
                                x.jsx)("div", {
                                    className: de().value,
                                    children: e.value
                                })]
                            }, e.label)
                        }
                        )), (0,
                        x.jsx)("div", {
                            className: de().label,
                            children: (0,
                            x.jsx)(u.cC, {
                                id: "Shipping & Handling"
                            })
                        }), (0,
                        x.jsx)("div", {
                            className: de().value,
                            "data-test-id": "calculated-price",
                            children: m && null !== _ && void 0 !== _ && null !== (e = _.data) && void 0 !== e && null !== (i = e.totalPrices) && void 0 !== i && i.handlingFee ? "".concat(m.currency, " ").concat(h(((null !== (n = null === m || void 0 === m ? void 0 : m.amount) && void 0 !== n ? n : 0) + (null !== (a = null === _ || void 0 === _ || null === (t = _.data) || void 0 === t || null === (l = t.totalPrices) || void 0 === l || null === (o = l.handlingFee) || void 0 === o ? void 0 : o.amount) && void 0 !== a ? a : 0)).toFixed(2))) : "-"
                        }), (0,
                        x.jsx)("div", {
                            className: E()(de().label, de().total),
                            children: (0,
                            x.jsx)(u.cC, {
                                id: "Total"
                            })
                        }), (0,
                        x.jsxs)("div", {
                            className: E()(de().value, de().total),
                            children: [b.totalPrice || "-", (0,
                            x.jsx)("span", {
                                children: (0,
                                x.jsx)(u.cC, {
                                    id: "Excluding Tax"
                                })
                            })]
                        })]
                    })
                })]
            }) : null
        }
          , pe = function() {
            var e = (0,
            s.useRouter)().locale
              , i = "".concat(d.mY).concat((0,
            g.Ld)(e), "/account/wizard/").concat(v, "/start")
              , n = r.useContext(P)
              , a = n.productType
              , l = n.podPackageId
              , o = n.shippingCost;
            return (0,
            x.jsxs)("div", {
                className: "page-container",
                children: [(0,
                x.jsx)("div", {
                    children: (0,
                    x.jsx)(c.E2, {
                        title: t.ag._("Pricing Calculator"),
                        description: t.ag._("Use the Pricing Calculator to compare print costs for a variety of different product combinations.")
                    })
                }), (0,
                x.jsx)(ce, {}), (0,
                x.jsx)(G, {}), !!l && (0,
                x.jsxs)(x.Fragment, {
                    children: [(0,
                    x.jsxs)(c.K5, {
                        to: i,
                        buttonStyle: {
                            marginBottom: 0
                        },
                        children: [(0,
                        x.jsx)(u.cC, {
                            id: "Create Your"
                        }), " ", (0,
                        p.U)(a)]
                    }), (0,
                    x.jsxs)("div", {
                        className: "box",
                        children: [(0,
                        x.jsx)(oe, {}), (0,
                        x.jsx)(ve, {})]
                    })]
                }), (0,
                x.jsx)(ie, {}), a && l && o && (0,
                x.jsxs)(c.K5, {
                    to: i,
                    buttonStyle: {
                        marginBottom: 0
                    },
                    children: [(0,
                    x.jsx)(u.cC, {
                        id: "Create Your"
                    }), " ", (0,
                    p.U)(a)]
                })]
            })
        }
          , ge = function(e) {
            return null === e ? [] : e.filter((function(e) {
                return null !== e
            }
            ))
        };
        function me(e) {
            return null === e || null === e.amount || null === e.currency ? null : {
                amount: null !== (i = e.amount) && void 0 !== i ? i : 0,
                currency: null !== (n = e.currency) && void 0 !== n ? n : "USD"
            };
            var i, n
        }
        var _e = function(e) {
            return Boolean(e.name && e.code)
        }
          , fe = function(e) {
            return Boolean(e.type && e.discount)
        };
        function he(e) {
            var i, n, a, t, l;
            return e ? {
                minimumPrice: ge(null !== (i = null === (n = e.minimumPrice) || void 0 === n ? void 0 : n.map(me)) && void 0 !== i ? i : null),
                listPrice: ge(null !== (a = null === (t = e.listPrice) || void 0 === t ? void 0 : t.map(me)) && void 0 !== a ? a : null),
                revenue: ge(null !== (l = e.revenue) && void 0 !== l ? l : null).map((function(e) {
                    var i;
                    return {
                        channel: e.channel,
                        data: ge(null !== (i = e.data) && void 0 !== i ? i : null).map((function(e) {
                            var i, n;
                            return {
                                label: e.label,
                                values: ge(null !== (i = null === (n = e.values) || void 0 === n ? void 0 : n.map(me)) && void 0 !== i ? i : null)
                            }
                        }
                        ))
                    }
                }
                ))
            } : null
        }
        var be = function() {
            var e = (0,
            r.useContext)(R.R).locale
              , i = (0,
            r.useContext)(ae.A9).currency
              , n = (0,
            f.kg)({
                client: _.A
            })
              , a = (0,
            m.Z)(n, 2)
              , l = a[0]
              , o = a[1]
              , u = o.loading
              , s = o.data
              , h = (0,
            f.sE)()
              , b = (0,
            m.Z)(h, 2)
              , P = b[0]
              , C = b[1]
              , y = C.loading
              , E = C.data
              , j = (0,
            f.I$)({
                client: _.A,
                variables: {
                    addressType: "SHIPPING"
                }
            })
              , O = (0,
            m.Z)(j, 2)
              , N = O[0]
              , I = O[1]
              , w = I.loading
              , k = I.data
              , S = (0,
            f.Tq)()
              , T = (0,
            m.Z)(S, 2)
              , A = T[0]
              , U = T[1]
              , L = U.loading
              , B = U.data
              , V = (0,
            f.It)()
              , M = (0,
            m.Z)(V, 2)
              , D = M[0]
              , F = M[1]
              , G = F.loading
              , H = F.data
              , X = (0,
            f.Tf)()
              , z = (0,
            m.Z)(X, 2)
              , W = z[0]
              , K = z[1]
              , Z = K.loading
              , q = K.data
              , Q = K.previousData
              , Y = (0,
            f.f)()
              , $ = (0,
            m.Z)(Y, 2)
              , J = $[0]
              , ee = $[1]
              , ie = ee.loading
              , te = ee.data
              , le = ee.previousData
              , oe = (0,
            f.E1)()
              , re = (0,
            m.Z)(oe, 2)
              , ue = re[0]
              , ce = re[1]
              , se = ce.loading
              , de = ce.data
              , ve = ce.previousData
              , pe = (0,
            r.useMemo)((function() {
                var e;
                return ge(null !== (e = null === s || void 0 === s ? void 0 : s.podPackages) && void 0 !== e ? e : null)
            }
            ), [s])
              , be = (0,
            r.useMemo)((function() {
                var e;
                return me(null !== (e = null === E || void 0 === E ? void 0 : E.manufacturingCost) && void 0 !== e ? e : null)
            }
            ), [E])
              , xe = (0,
            r.useMemo)((function() {
                var e;
                return ge(null !== (e = null === k || void 0 === k ? void 0 : k.countries) && void 0 !== e ? e : null).filter(_e)
            }
            ), [k])
              , Pe = (0,
            r.useMemo)((function() {
                var e, i;
                return function(e) {
                    if (!e)
                        return null;
                    var i, n, a, t = {};
                    return null !== e && void 0 !== e && e.basePrice && (t.basePrice = null !== (i = me(e.basePrice)) && void 0 !== i ? i : void 0),
                    null !== e && void 0 !== e && e.totalPrice && (t.totalPrice = null !== (n = me(e.totalPrice)) && void 0 !== n ? n : void 0),
                    null !== e && void 0 !== e && e.totalDiscounts && (t.totalDiscounts = null !== (a = ge(e.totalDiscounts).filter(fe)) && void 0 !== a ? a : void 0),
                    t
                }((null !== (e = null === q || void 0 === q ? void 0 : q.totalPrices) && void 0 !== e ? e : null) || (null !== (i = null === Q || void 0 === Q ? void 0 : Q.totalPrices) && void 0 !== i ? i : null))
            }
            ), [q, Q])
              , Ce = (0,
            r.useMemo)((function() {
                return function(e) {
                    var i, n, a, t;
                    return {
                        minimumPrices: ge(null !== (i = null === e || void 0 === e || null === (n = e.minimumPrices) || void 0 === n ? void 0 : n.map(me)) && void 0 !== i ? i : null),
                        maximumPrices: ge(null !== (a = null === e || void 0 === e || null === (t = e.maximumPrices) || void 0 === t ? void 0 : t.map(me)) && void 0 !== a ? a : null)
                    }
                }(null !== H && void 0 !== H ? H : null)
            }
            ), [H])
              , ye = (0,
            r.useMemo)((function() {
                var e, i;
                return he(null !== (e = null === te || void 0 === te ? void 0 : te.priceMap) && void 0 !== e ? e : null) || he(null !== (i = null === le || void 0 === le ? void 0 : le.priceMap) && void 0 !== i ? i : null)
            }
            ), [te, le])
              , Ee = (0,
            r.useMemo)((function() {
                var e, i;
                return he(null !== (e = null === de || void 0 === de ? void 0 : de.priceMapEbook) && void 0 !== e ? e : null) || he(null !== (i = null === ve || void 0 === ve ? void 0 : ve.priceMapEbook) && void 0 !== i ? i : null)
            }
            ), [de, ve])
              , je = (0,
            r.useCallback)((function(e) {
                l({
                    variables: {
                        printableType: e
                    }
                })
            }
            ), [l])
              , Oe = (0,
            r.useCallback)((function(e, n) {
                P({
                    variables: {
                        podPackageId: e,
                        pageCount: n,
                        currency: i
                    }
                })
            }
            ), [i, P])
              , Ne = (0,
            r.useCallback)((function() {
                N()
            }
            ), [N])
              , Ie = (0,
            r.useCallback)((function(e, n, a) {
                W({
                    variables: {
                        podPackageId: e,
                        pageCount: n,
                        quantity: a,
                        currency: i
                    }
                })
            }
            ), [i, W])
              , we = (0,
            r.useCallback)((function(e, n, a, t) {
                A({
                    variables: {
                        input: {
                            lineItems: [{
                                podPackageId: e,
                                pageCount: n,
                                quantity: a
                            }],
                            shippingAddress: {
                                country: t
                            },
                            currency: i,
                            lineOfBusinessId: "LULU"
                        }
                    }
                })
            }
            ), [i, A])
              , ke = (0,
            r.useCallback)((function(e, i, n) {
                D({
                    variables: {
                        podPackageId: e,
                        pageCount: i,
                        projectType: n
                    }
                })
            }
            ), [D])
              , Se = (0,
            r.useCallback)((function(e, n, a, t) {
                var l = {
                    podPackageId: e,
                    pageCount: n,
                    currency: i
                };
                a && (l.listPrice = {
                    amount: a.amount,
                    currency: a.currency
                }),
                t && (l.channels = t),
                J({
                    variables: l
                })
            }
            ), [i, J])
              , Te = (0,
            r.useCallback)((function(e, i) {
                ue({
                    variables: {
                        listPrice: {
                            amount: e.amount,
                            currency: e.currency
                        },
                        salesChannels: i
                    }
                })
            }
            ), [ue])
              , Re = "".concat(d.mY).concat((0,
            g.Ld)(e), "/account/wizard/").concat(v, "/start");
            return (0,
            x.jsx)(c._v, {
                availableProductTypes: [{
                    image: c.Wp.imageUrlBuilder("ProductType/lulu-product-print-book"),
                    label: t.ag._("Print Book"),
                    value: "PRINTED_BOOK"
                }, {
                    image: c.Wp.imageUrlBuilder("ProductType/lulu-product-photo-book"),
                    label: t.ag._("Photo Book"),
                    value: "PREMIUM_PHOTO_BOOK"
                }, {
                    image: c.Wp.imageUrlBuilder("ProductType/lulu-product-comic-book"),
                    label: t.ag._("Comic Book"),
                    value: "COMIC_BOOK"
                }, {
                    image: c.Wp.imageUrlBuilder("ProductType/lulu-product-magazine"),
                    label: t.ag._("Magazine"),
                    value: "MAGAZINE"
                }, {
                    image: c.Wp.imageUrlBuilder("ProductType/lulu-product-yearbook"),
                    label: t.ag._("Yearbook"),
                    value: "YEARBOOK"
                }, {
                    image: c.Wp.imageUrlBuilder("ProductType/lulu-product-calendar"),
                    label: t.ag._("Calendar"),
                    value: "CALENDAR"
                }, {
                    image: c.Wp.imageUrlBuilder("ProductType/lulu-product-ebook"),
                    label: t.ag._("Ebook"),
                    value: "EBOOK"
                }],
                getDisplayValue: p.U,
                podPackagesQuery: {
                    loading: u,
                    data: pe
                },
                shippingCountriesQuery: {
                    loading: w,
                    data: xe
                },
                manufacturingCostQuery: {
                    loading: y,
                    data: be
                },
                listPriceBoundsQuery: {
                    loading: G,
                    data: Ce
                },
                totalPricesQuery: {
                    loading: Z,
                    data: Pe
                },
                shippingMethodsQuery: {
                    loading: L,
                    data: null === B || void 0 === B ? void 0 : B.dispatcherShippingMethods
                },
                priceMapQuery: {
                    loading: ie,
                    data: ye
                },
                priceMapEbookQuery: {
                    loading: se,
                    data: Ee
                },
                onRequestPodPackages: je,
                onRequestShippingCountries: Ne,
                onRequestListPriceBounds: ke,
                onRequestManufacturingCost: Oe,
                onRequestTotalPrices: Ie,
                onRequestPriceMap: Se,
                onRequestPriceMapEbook: Te,
                onRequestShippingMethods: we,
                baseCurrency: i,
                productsUrl: "https://www.lulu.com/products",
                getCountryName: function(i) {
                    return ne.getName(i, e)
                },
                locale: e,
                wizardUrl: Re,
                dataTestId: "pricing-calculator"
            })
        }
          , xe = n(4883)
          , Pe = n(34174)
          , Ce = !0
          , ye = function() {
            var e = (0,
            xe.K)({
                title: t.ag._("Book Cost Calculator") + " | Lulu",
                metaDescription: t.ag._("Plan your project before you print. With our print cost and shipping calculator, you can experiment with different layouts, binding, paper, and size options.")
            }, {
                "@type": "WebPage"
            });
            return (0,
            Pe.x)(!1, {
                first_visit: "",
                last_visit: "",
                page_name: "/pricing",
                search_keyword: "",
                tealium_event: "pricing"
            }),
            (0,
            x.jsxs)(x.Fragment, {
                children: [(0,
                x.jsx)(o(), {
                    children: e
                }), d.oi ? (0,
                x.jsx)("div", {
                    className: "max-width-container res-bottom-padding-128",
                    children: (0,
                    x.jsx)(be, {})
                }) : (0,
                x.jsx)(C, {
                    children: (0,
                    x.jsx)(pe, {})
                })]
            })
        }
    },
    75168: function(e, i, n) {
        "use strict";
        n.d(i, {
            V: function() {
                return a
            }
        });
        var a = function(e) {
            if (e) {
                return Number(e) + 4
            }
        }
    },
    5223: function(e, i, n) {
        "use strict";
        n.d(i, {
            U: function() {
                return o
            },
            g: function() {
                return u
            }
        });
        var a = n(27812)
          , t = n(32601)
          , l = n(10104)
          , o = function(e, i) {
            var n = r().find((function(i) {
                return i.value === e
            }
            ));
            return n ? "function" === typeof n.viewValue ? n.viewValue(i ? 2 : 1) : n.viewValue : e
        }
          , r = function() {
            return [{
                value: "PRINTED_BOOK",
                viewValue: function(e) {
                    return t.ag._("{value, plural, one {Print Book} other {Print Books}}", {
                        value: e
                    })
                }
            }, {
                value: "PREMIUM_PHOTO_BOOK",
                viewValue: function(e) {
                    return t.ag._("{value, plural, one {Photo Book} other {Photo Books}}", {
                        value: e
                    })
                }
            }, {
                value: "MAGAZINE",
                viewValue: function(e) {
                    return t.ag._("{value, plural, one {Magazine} other {Magazines}}", {
                        value: e
                    })
                }
            }, {
                value: "COMIC_BOOK",
                viewValue: function(e) {
                    return t.ag._("{value, plural, one {Comic Book} other {Comic Books}}", {
                        value: e
                    })
                }
            }, {
                value: "CALENDAR",
                viewValue: function(e) {
                    return t.ag._("{value, plural, one {Calendar} other {Calendars}}", {
                        value: e
                    })
                }
            }, {
                value: "YEARBOOK",
                viewValue: function(e) {
                    return t.ag._("{value, plural, one {Yearbook} other {Yearbooks}}", {
                        value: e
                    })
                }
            }, {
                value: "EBOOK",
                viewValue: function(e) {
                    return t.ag._("{value, plural, one {Ebook} other {Ebooks}}", {
                        value: e
                    })
                }
            }, {
                value: "Hardcover",
                viewValue: t.ag._("Hardcover")
            }, {
                value: "Paperback",
                viewValue: t.ag._("Paperback")
            }, {
                value: "E-book",
                viewValue: t.ag._("Ebook")
            }, {
                value: "DRAFT",
                viewValue: t.ag._("Draft")
            }, {
                value: "PENDING_PUBLICATION",
                viewValue: t.ag._("Pending Publication")
            }, {
                value: "PUBLISHED",
                viewValue: t.ag._("Published")
            }, {
                value: "RETIRED",
                viewValue: t.ag._("Retired")
            }, {
                value: "BANNED",
                viewValue: t.ag._("Banned")
            }, {
                value: "DELETED",
                viewValue: t.ag._("Deleted")
            }, {
                value: "MONOCHROME",
                viewValue: t.ag._("Black & White")
            }, {
                value: "CMYK",
                viewValue: t.ag._("Color")
            }, {
                value: "PREMIUM",
                viewValue: t.ag._("Premium")
            }, {
                value: "STANDARD",
                viewValue: t.ag._("Standard")
            }, {
                value: "CREAM",
                viewValue: t.ag._("Cream")
            }, {
                value: "WHITE",
                viewValue: t.ag._("White")
            }, {
                value: "GLOSSY",
                viewValue: t.ag._("Glossy")
            }, {
                value: "MATTE",
                viewValue: t.ag._("Matte")
            }].concat((0,
            a.Z)(l.oi ? [{
                value: "BWPRE",
                viewValue: t.ag._("Premium Black & White")
            }, {
                value: "FCSTD",
                viewValue: t.ag._("Standard Color")
            }, {
                value: "BWSTD",
                viewValue: t.ag._("Standard Black & White")
            }, {
                value: "FCPRE",
                viewValue: t.ag._("Premium Color")
            }, {
                value: "060UC",
                viewValue: t.ag._("60# Cream \u2014 Uncoated")
            }, {
                value: "060UW",
                viewValue: t.ag._("60# White \u2014 Uncoated")
            }, {
                value: "070CW",
                viewValue: t.ag._("70# White \u2014 Coated")
            }, {
                value: "080CW",
                viewValue: t.ag._("80# White \u2014 Coated")
            }, {
                value: "100CW",
                viewValue: t.ag._("100# White \u2014 Coated")
            }, {
                value: "060CW",
                viewValue: t.ag._("60# White \u2014 Coated")
            }, {
                value: "CO",
                viewValue: t.ag._("Coil Bound")
            }, {
                value: "CW",
                viewValue: t.ag._("Case Wrap")
            }, {
                value: "PB",
                viewValue: t.ag._("Perfect Bound")
            }, {
                value: "SS",
                viewValue: t.ag._("Saddle Stitch")
            }, {
                value: "LW",
                viewValue: t.ag._("Linen Wrap")
            }, {
                value: "WO",
                viewValue: t.ag._("Wire-O")
            }, {
                value: "M",
                viewValue: t.ag._("Matte")
            }, {
                value: "G",
                viewValue: t.ag._("Glossy")
            }, {
                value: "U",
                viewValue: t.ag._("Uncoated")
            }, {
                value: "0425X0687",
                viewValue: t.ag._("Pocket Book (4.25 x 6.875 in / 108 x 175 mm)")
            }, {
                value: "0550X0850",
                viewValue: t.ag._("Digest (5.5 x 8.5 in / 140 x 216 mm)")
            }, {
                value: "0583X0827",
                viewValue: t.ag._("A5 (5.83 x 8.27 in / 148 x 210 mm)")
            }, {
                value: "0600X0900",
                viewValue: t.ag._("US Trade (6 x 9 in / 152 x 229 mm)")
            }, {
                value: "0614X0921",
                viewValue: t.ag._("Royal (6.14 x 9.21 in / 156 x 234 mm)")
            }, {
                value: "0663X1025",
                viewValue: t.ag._("Comic Book (6.625 x 10.25 in / 168 x 260 mm)")
            }, {
                value: "0700X1000",
                viewValue: t.ag._("Executive (7 x 10 in / 178 x 254 mm)")
            }, {
                value: "0744X0968",
                viewValue: t.ag._("Crown Quarto (7.44 x 9.68 in / 189 x 246 mm)")
            }, {
                value: "0750X0750",
                viewValue: t.ag._("Small Square (7.5 x 7.5 in / 190 x 190 mm)")
            }, {
                value: "0827X1169",
                viewValue: t.ag._("A4 (8.27 x 11.69 in / 210 x 297 mm)")
            }, {
                value: "0850X0850",
                viewValue: t.ag._("Square (8.5 x 8.5 in / 216 x 216 mm)")
            }, {
                value: "0850X1100",
                viewValue: t.ag._("US Letter (8.5 x 11 in / 216 x 279 mm)")
            }, {
                value: "0900X0700",
                viewValue: t.ag._("Small Landscape (9 x 7 in / 229 x 178 mm)")
            }, {
                value: "1100X0850",
                viewValue: t.ag._("US Letter Landscape (11 x 8.5 in / 279 x 216 mm)")
            }, {
                value: "1169X0827",
                viewValue: t.ag._("A4 Landscape (11.69 x 8.27 in / 297 x 210 mm)")
            }, {
                value: "0500X0800",
                viewValue: t.ag._("Novella (5 x 8 in / 127 x 203 mm)")
            }, {
                value: "0425X0687_short",
                viewValue: t.ag._("Pocket Book")
            }, {
                value: "0550X0850_short",
                viewValue: t.ag._("Digest")
            }, {
                value: "0583X0827_short",
                viewValue: t.ag._("A5")
            }, {
                value: "0600X0900_short",
                viewValue: t.ag._("US Trade")
            }, {
                value: "0614X0921_short",
                viewValue: t.ag._("Royal")
            }, {
                value: "0663X1025_short",
                viewValue: t.ag._("Comic Book")
            }, {
                value: "0700X1000_short",
                viewValue: t.ag._("Executive")
            }, {
                value: "0744X0968_short",
                viewValue: t.ag._("Crown Quarto")
            }, {
                value: "0750X0750_short",
                viewValue: t.ag._("Small Square")
            }, {
                value: "0827X1169_short",
                viewValue: t.ag._("A4")
            }, {
                value: "0850X0850_short",
                viewValue: t.ag._("Square")
            }, {
                value: "0850X1100_short",
                viewValue: t.ag._("US Letter")
            }, {
                value: "0900X0700_short",
                viewValue: t.ag._("Small Landscape")
            }, {
                value: "1100X0850_short",
                viewValue: t.ag._("US Letter Landscape")
            }, {
                value: "1169X0827_short",
                viewValue: t.ag._("A4 Landscape")
            }, {
                value: "0500X0800_short",
                viewValue: t.ag._("Novella")
            }] : [{
                value: "BWPRE",
                viewValue: t.ag._("Black & White Premium")
            }, {
                value: "FCSTD",
                viewValue: t.ag._("Color Standard")
            }, {
                value: "BWSTD",
                viewValue: t.ag._("Black & White Standard")
            }, {
                value: "FCPRE",
                viewValue: t.ag._("Color Premium")
            }, {
                value: "060UC",
                viewValue: t.ag._("60# Cream")
            }, {
                value: "060UW",
                viewValue: t.ag._("60# White")
            }, {
                value: "070CW",
                viewValue: t.ag._("70# Coated White")
            }, {
                value: "080CW",
                viewValue: t.ag._("80# Coated White")
            }, {
                value: "100CW",
                viewValue: t.ag._("100# Coated White")
            }, {
                value: "060CW",
                viewValue: t.ag._("60# Coated White")
            }, {
                value: "CO",
                viewValue: t.ag._("Coil Bound")
            }, {
                value: "CW",
                viewValue: t.ag._("Hardcover")
            }, {
                value: "PB",
                viewValue: t.ag._("Paperback")
            }, {
                value: "SS",
                viewValue: t.ag._("Saddle Stitch")
            }, {
                value: "LW",
                viewValue: t.ag._("Linen Wrap")
            }, {
                value: "WO",
                viewValue: t.ag._("Wire-O")
            }, {
                value: "M",
                viewValue: t.ag._("Matte")
            }, {
                value: "G",
                viewValue: t.ag._("Glossy")
            }, {
                value: "U",
                viewValue: t.ag._("Uncoated")
            }, {
                value: "0425X0687",
                viewValue: t.ag._("Pocket Book (4.25 x 6.875 in / 108 x 175 mm)")
            }, {
                value: "0550X0850",
                viewValue: t.ag._("Digest (5.5 x 8.5 in / 140 x 216 mm)")
            }, {
                value: "0583X0827",
                viewValue: t.ag._("A5 (5.83 x 8.27 in / 148 x 210 mm)")
            }, {
                value: "0600X0900",
                viewValue: t.ag._("US Trade (6 x 9 in / 152 x 229 mm)")
            }, {
                value: "0614X0921",
                viewValue: t.ag._("Royal (6.14 x 9.21 in / 156 x 234 mm)")
            }, {
                value: "0663X1025",
                viewValue: t.ag._("Comic Book (6.625 x 10.25 in / 168 x 260 mm)")
            }, {
                value: "0700X1000",
                viewValue: t.ag._("Executive (7 x 10 in / 178 x 254 mm)")
            }, {
                value: "0744X0968",
                viewValue: t.ag._("Crown Quarto (7.44 x 9.68 in / 189 x 246 mm)")
            }, {
                value: "0750X0750",
                viewValue: t.ag._("Small Square (7.5 x 7.5 in / 190 x 190 mm)")
            }, {
                value: "0827X1169",
                viewValue: t.ag._("A4 (8.27 x 11.69 in / 210 x 297 mm)")
            }, {
                value: "0850X0850",
                viewValue: t.ag._("Square (8.5 x 8.5 in / 216 x 216 mm)")
            }, {
                value: "0850X1100",
                viewValue: t.ag._("US Letter (8.5 x 11 in / 216 x 279 mm)")
            }, {
                value: "0900X0700",
                viewValue: t.ag._("Small Landscape (9 x 7 in / 229 x 178 mm)")
            }, {
                value: "1100X0850",
                viewValue: t.ag._("US Letter Landscape (11 x 8.5 in / 279 x 216 mm)")
            }, {
                value: "1169X0827",
                viewValue: t.ag._("A4 Landscape (11.69 x 8.27 in / 297 x 210 mm)")
            }, {
                value: "0500X0800",
                viewValue: t.ag._("Novella (5 x 8 in / 127 x 203 mm)")
            }]))
        }
          , u = function(e, i) {
            return "CALENDAR" === e ? t.ag._("Calendar") : "EBOOK" === e ? "Ebook" : "CW" === i || "LW" === i ? t.ag._("Hardcover") : t.ag._("Paperback")
        }
    },
    33642: function(e, i, n) {
        "use strict";
        n.d(i, {
            CV: function() {
                return a
            },
            FR: function() {
                return l
            },
            JW: function() {
                return r
            },
            K9: function() {
                return s
            },
            RB: function() {
                return t
            },
            VG: function() {
                return v
            },
            W5: function() {
                return o
            },
            Xf: function() {
                return b
            },
            n0: function() {
                return d
            },
            qB: function() {
                return u
            }
        });
        var a = function(e) {
            return "CALENDAR" === e
        }
          , t = function(e) {
            return e.slice(0, 9)
        }
          , l = function(e) {
            return e.slice(14, 16)
        }
          , o = function(e) {
            return e.slice(24, 25)
        }
          , r = function(e) {
            return e.slice(9, 14)
        }
          , u = function(e) {
            return e.slice(16, 21)
        }
          , c = function(e) {
            return e.slice(25, 26)
        }
          , s = function(e) {
            return {
                bindingTypeOptions: Array.from(new Set(e.map((function(e) {
                    var i;
                    return l(null !== (i = e.id) && void 0 !== i ? i : "")
                }
                )))),
                coverFinishOptions: Array.from(new Set(e.map((function(e) {
                    var i;
                    return o(null !== (i = e.id) && void 0 !== i ? i : "")
                }
                )))),
                foilStampOptions: Array.from(new Set(e.map((function(e) {
                    var i;
                    return (null !== (i = e.id) && void 0 !== i ? i : "").slice(26, 27)
                }
                )).filter((function(e) {
                    return "X" !== e
                }
                )))),
                interiorInkOptions: Array.from(new Set(e.map((function(e) {
                    var i;
                    return r(null !== (i = e.id) && void 0 !== i ? i : "")
                }
                )))),
                interiorPaperOptions: Array.from(new Set(e.map((function(e) {
                    var i;
                    return u(null !== (i = e.id) && void 0 !== i ? i : "")
                }
                )))),
                linenMaterialOptions: Array.from(new Set(e.map((function(e) {
                    var i;
                    return c(null !== (i = e.id) && void 0 !== i ? i : "")
                }
                )).filter((function(e) {
                    return "X" !== e
                }
                )))),
                trimSizes: Array.from(new Set(e.map((function(e) {
                    var i;
                    return t(null !== (i = e.id) && void 0 !== i ? i : "")
                }
                ))))
            }
        }
          , d = function() {
            var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, t = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, u = i.filter((function(e) {
                return e.distributionEligible
            }
            )), c = t ? u : i, d = {
                bindingTypeEnabledOptions: [],
                bindingTypeDistroEligibleOptions: [],
                coverFinishEnabledOptions: [],
                coverFinishDistroEligibleOptions: [],
                interiorInkEnabledOptions: [],
                interiorInkDistroEligibleOptions: [],
                interiorPaperEnabledOptions: [],
                interiorPaperDistroEligibleOptions: [],
                trimSizesDistroEligible: s(i.filter((function(e) {
                    return e.distributionEligible
                }
                ))).trimSizes
            };
            return n && a && (!t || null !== (e = d.trimSizesDistroEligible) && void 0 !== e && e.includes(n)) ? (d.pageCountDistroEligible = u.filter(p(n, a)).length > 0,
            t && !1 === d.pageCountDistroEligible ? d : (d.interiorInkEnabledOptions = s(c.filter(p(n, a))).interiorInkOptions,
            d.interiorInkDistroEligibleOptions = t ? d.interiorInkEnabledOptions : s(u.filter(p(n, a))).interiorInkOptions,
            l ? (d.interiorPaperEnabledOptions = s(c.filter(p(n, a)).filter(g(l))).interiorPaperOptions,
            d.interiorPaperDistroEligibleOptions = t ? d.interiorPaperEnabledOptions : s(u.filter(p(n, a)).filter(g(l))).interiorPaperOptions,
            o ? (d.bindingTypeEnabledOptions = s(c.filter(p(n, a)).filter(g(l)).filter(m(o))).bindingTypeOptions,
            d.bindingTypeDistroEligibleOptions = t ? d.bindingTypeEnabledOptions : s(u.filter(p(n, a)).filter(g(l)).filter(m(o))).bindingTypeOptions,
            r ? (d.coverFinishEnabledOptions = s(c.filter(p(n, a)).filter(g(l)).filter(m(o)).filter(_(r))).coverFinishOptions,
            d.coverFinishDistroEligibleOptions = t ? d.coverFinishEnabledOptions : s(u.filter(p(n, a)).filter(g(l)).filter(m(o)).filter(_(r))).coverFinishOptions,
            d) : d) : d) : d)) : d
        }
          , v = function() {
            var e, i, n, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, d = o ? a.filter((function(e) {
                return e.distributionEligible
            }
            )) : a, v = d.filter(p(null !== t && void 0 !== t ? t : "", null !== l && void 0 !== l ? l : 0)).filter(g(null !== r && void 0 !== r ? r : "")).filter(m(null !== u && void 0 !== u ? u : "")).filter(_(null !== c && void 0 !== c ? c : "")).filter(f(null !== s && void 0 !== s ? s : ""));
            if (1 === v.length)
                return null !== (e = v[0].id) && void 0 !== e ? e : null;
            if (v.length > 1 && "LW" === c && h(v))
                return null !== (i = null === (n = v.find((function(e) {
                    var i;
                    return null === (i = e.id) || void 0 === i ? void 0 : i.endsWith("NG")
                }
                ))) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : null;
            throw new Error("Pod package selection error")
        }
          , p = function(e, i) {
            return function(n) {
                var a, t, l;
                return (null === (a = n.trimSize) || void 0 === a ? void 0 : a.key) === e && (null !== (t = n.minPages) && void 0 !== t ? t : 0) <= i && (null !== (l = n.maxPages) && void 0 !== l ? l : 0) >= i
            }
        }
          , g = function(e) {
            return function(i) {
                var n;
                return r(null !== (n = i.id) && void 0 !== n ? n : "") === e
            }
        }
          , m = function(e) {
            return function(i) {
                var n;
                return u(null !== (n = i.id) && void 0 !== n ? n : "") === e
            }
        }
          , _ = function(e) {
            return function(i) {
                var n;
                return l(null !== (n = i.id) && void 0 !== n ? n : "") === e
            }
        }
          , f = function(e) {
            return function(i) {
                var n;
                return o(null !== (n = i.id) && void 0 !== n ? n : "") === e
            }
        }
          , h = function() {
            var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            if (0 === i.length)
                return !1;
            var n = null === i || void 0 === i || null === (e = i[0].id) || void 0 === e ? void 0 : e.slice(0, 25);
            return n && i.every((function(e) {
                var i;
                return (null === (i = e.id) || void 0 === i ? void 0 : i.startsWith(n)) && "I" !== c(e.id)
            }
            ))
        }
          , b = function(e) {
            return {
                CALENDAR: "CALENDAR",
                COMIC_BOOK: "COMIC_BOOK",
                MAGAZINE: "MAGAZINE",
                PREMIUM_PHOTO_BOOK: "PREMIUM_PHOTO_BOOK",
                PRINTED_BOOK: "BOOK",
                YEARBOOK: "YEARBOOK"
            }[e]
        }
    },
    2691: function(e, i, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/pricing", function() {
            return n(68825)
        }
        ])
    },
    72583: function(e) {
        e.exports = {
            trimPageInputs: "PricingConfigurator_trimPageInputs__s2WvV",
            table: "PricingConfigurator_table__byTBL",
            selection: "PricingConfigurator_selection__ysFNn",
            requirements: "PricingConfigurator_requirements__pxpT3",
            header: "PricingConfigurator_header__0TM9W",
            label: "PricingConfigurator_label__3h1Fw",
            value: "PricingConfigurator_value__JV60x",
            monthCountError: "PricingConfigurator_monthCountError__fR1vE",
            distributionInfoBox: "PricingConfigurator_distributionInfoBox____TbQ",
            disabled: "PricingConfigurator_disabled__VXSI0",
            price: "PricingConfigurator_price__GWX4d",
            priceIcon: "PricingConfigurator_priceIcon__PEb57",
            progressAnimation: "PricingConfigurator_progressAnimation__GEL1W",
            templates: "PricingConfigurator_templates__HH2hY",
            templatesContainer: "PricingConfigurator_templatesContainer__d_Ncs",
            templatesLabel: "PricingConfigurator_templatesLabel__Ojt4L",
            templatesFirstButton: "PricingConfigurator_templatesFirstButton__dHa_D",
            templatesSecondButton: "PricingConfigurator_templatesSecondButton__p7Jf_",
            unbreakable: "PricingConfigurator_unbreakable__YjMbW",
            rotating: "PricingConfigurator_rotating__Rwn3B"
        }
    },
    38808: function(e) {
        e.exports = {
            shippingOptions: "PricingShipping_shippingOptions__jLSaa",
            option: "PricingShipping_option__2ytOw",
            rotating: "PricingShipping_rotating__o_zhi"
        }
    },
    16189: function(e) {
        e.exports = {
            total: "totalPrices_total__Ih6Av",
            label: "totalPrices_label__gD7Fa",
            value: "totalPrices_value__yTypa",
            totalRow: "totalPrices_totalRow__LlPvF",
            rotating: "totalPrices_rotating__aVYtx"
        }
    },
    9008: function(e, i, n) {
        e.exports = n(72717)
    }
}, function(e) {
    e.O(0, [53662, 4883, 49774, 92888, 40179], (function() {
        return i = 2691,
        e(e.s = i);
        var i
    }
    ));
    var i = e.O();
    _N_E = i
}
]);
//# sourceMappingURL=pricing-84c1a258c3681349.js.map
