(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4883], {
    79424: function(A, t, e) {
        var a = {
            "./060CW-1x.png": 21060,
            "./060CW-1x.webp": 61344,
            "./060UC-1x.png": 61186,
            "./060UC-1x.webp": 57024,
            "./060UW-1x.png": 35371,
            "./060UW-1x.webp": 17651,
            "./080CW-1x.png": 71165,
            "./080CW-1x.webp": 46996,
            "./100CW-1x.png": 41170,
            "./100CW-1x.webp": 53178,
            "./BWPRE-1x.png": 57562,
            "./BWPRE-1x.webp": 82459,
            "./BWSTD-1x.png": 9699,
            "./BWSTD-1x.webp": 70195,
            "./CO-1x.png": 91497,
            "./CO-1x.webp": 3887,
            "./CW-1x.png": 57628,
            "./CW-1x.webp": 21439,
            "./FCPRE-1x.png": 9525,
            "./FCPRE-1x.webp": 26018,
            "./FCSTD-1x.png": 86616,
            "./FCSTD-1x.webp": 32633,
            "./LW-1x.png": 40759,
            "./LW-1x.webp": 50755,
            "./PB-1x.png": 17342,
            "./PB-1x.webp": 85734,
            "./SS-1x.png": 95972,
            "./SS-1x.webp": 1756,
            "./WO-1x.png": 54709,
            "./WO-1x.webp": 87737,
            "./author-placeholder.png": 80623,
            "./author-placeholder.webp": 87346,
            "./calendar-overlay.png": 85964,
            "./calendar-overlay.webp": 83073,
            "./calendar-template-emphasis.jpg": 93016,
            "./calendar-template-emphasis.webp": 16989,
            "./calendar-template-large-print.jpg": 579,
            "./calendar-template-large-print.webp": 57494,
            "./calendar-template-standard-grid.jpg": 36053,
            "./calendar-template-standard-grid.webp": 28669,
            "./calendar-template-stylish.jpg": 32907,
            "./calendar-template-stylish.webp": 37871,
            "./cover_basic-2x.jpg": 64744,
            "./cover_basic-2x.webp": 56506,
            "./cover_basic.jpg": 85916,
            "./cover_basic.webp": 87693,
            "./cover_bigimage-2x.jpg": 66506,
            "./cover_bigimage-2x.webp": 92182,
            "./cover_bigimage.jpg": 65844,
            "./cover_bigimage.webp": 97958,
            "./cover_middlebar-2x.jpg": 65721,
            "./cover_middlebar-2x.webp": 13013,
            "./cover_middlebar.jpg": 75279,
            "./cover_middlebar.webp": 1700,
            "./cover_spineimage-2x.jpg": 12942,
            "./cover_spineimage-2x.webp": 75301,
            "./cover_spineimage.jpg": 95089,
            "./cover_spineimage.webp": 6568,
            "./dummy-image-16-9.jpg": 83490,
            "./logo.svg": 7616,
            "./lulu-calendar-wire-o-overlay.svg": 7404,
            "./lulu-direct-magenta-logo.svg": 60614,
            "./lulu-product-calendar-thumb-16-9-1x.jpg": 26988,
            "./lulu-product-calendar-thumb-16-9-1x.webp": 2630,
            "./lulu-product-comic-book-thumb-16-9-1x.png": 70717,
            "./lulu-product-comic-book-thumb-16-9-1x.webp": 35703,
            "./lulu-product-ebook-thumb-16-9-1x.png": 55216,
            "./lulu-product-ebook-thumb-16-9-1x.webp": 52583,
            "./lulu-product-magazine-thumb-16-9-1x.png": 97360,
            "./lulu-product-magazine-thumb-16-9-1x.webp": 54248,
            "./lulu-product-photo-book-thumb-16-9-1x.png": 11043,
            "./lulu-product-photo-book-thumb-16-9-1x.webp": 24434,
            "./lulu-product-print-book-thumb-16-9-1x.png": 44620,
            "./lulu-product-print-book-thumb-16-9-1x.webp": 46780,
            "./lulu-product-yearbook-thumb-16-9-1x.png": 55155,
            "./lulu-product-yearbook-thumb-16-9-1x.webp": 20473,
            "./social_logo.png": 87732,
            "./social_logo.webp": 41698
        };
        function i(A) {
            var t = g(A);
            return e(t)
        }
        function g(A) {
            if (!e.o(a, A)) {
                var t = new Error("Cannot find module '" + A + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return a[A]
        }
        i.keys = function() {
            return Object.keys(a)
        }
        ,
        i.resolve = g,
        A.exports = i,
        i.id = 79424
    },
    4883: function(A, t, e) {
        "use strict";
        e.d(t, {
            K: function() {
                return u
            }
        });
        var a = e(59499)
          , i = e(11163)
          , g = (e(67294),
        e(10104))
          , r = e(97801)
          , c = e(55496)
          , n = e(85893);
        function o(A, t) {
            var e = Object.keys(A);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(A);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(A, t).enumerable
                }
                ))),
                e.push.apply(e, a)
            }
            return e
        }
        var s = function(A) {
            return "".concat(A, "_").concat("en" === A ? "US" : A.toUpperCase())
        }
          , u = function(A, t) {
            var e, u, l, d, Q, C, w, h, b, E, p, B, U, D = (0,
            i.useRouter)(), m = s(D.locale || "en"), x = null === (e = D.locales) || void 0 === e ? void 0 : e.filter((function(A) {
                return A !== D.locale
            }
            )).map(s), f = function(A) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(e), !0).forEach((function(t) {
                        (0,
                        a.Z)(A, t, e[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(e)) : o(Object(e)).forEach((function(t) {
                        Object.defineProperty(A, t, Object.getOwnPropertyDescriptor(e, t))
                    }
                    ))
                }
                return A
            }({
                "@context": "http://schema.org",
                "@type": "Corporation",
                name: (null === A || void 0 === A ? void 0 : A.metaTitle) || (null === A || void 0 === A ? void 0 : A.title),
                description: null === A || void 0 === A ? void 0 : A.metaDescription,
                logo: g.ZX + (0,
                r.a)("social_logo.png"),
                url: "".concat(g.ZX).concat("en" !== (null === D || void 0 === D ? void 0 : D.locale) ? "/".concat(D.locale) : "").concat(D.asPath.split("?")[0])
            }, t), I = null === A || void 0 === A || null === (u = A.elementsCollection) || void 0 === u || null === (l = u.items) || void 0 === l ? void 0 : l.find((function(A, t) {
                return 0 === t && "MainBanner" === (null === A || void 0 === A ? void 0 : A.__typename)
            }
            )), R = null === I || void 0 === I || null === (d = I.backgroundImageRef) || void 0 === d || null === (Q = d.imageForMobile) || void 0 === Q ? void 0 : Q.url, k = null === I || void 0 === I || null === (C = I.backgroundImageRef) || void 0 === C || null === (w = C.image) || void 0 === w ? void 0 : w.url;
            return (0,
            n.jsxs)(n.Fragment, {
                children: [k && (0,
                n.jsx)("link", {
                    rel: "preload",
                    as: "image",
                    href: k,
                    fetchpriority: "high"
                }), R && (0,
                n.jsx)("link", {
                    rel: "preload",
                    as: "image",
                    href: R,
                    fetchpriority: "high"
                }), (0,
                n.jsx)("link", {
                    rel: "canonical",
                    href: f.url
                }), (0,
                n.jsx)("link", {
                    rel: "alternate",
                    hrefLang: "x-default",
                    href: "".concat(g.ZX).concat(D.asPath.split("?")[0])
                }), null === (h = D.locales) || void 0 === h ? void 0 : h.map((function(A) {
                    return (0,
                    n.jsx)("link", {
                        rel: "alternate",
                        href: "".concat(g.ZX).concat(A !== c.ZW ? "/".concat(A) : "").concat("/" !== D.asPath ? D.asPath.split("?")[0] : ""),
                        hrefLang: A
                    }, A)
                }
                )), (0,
                n.jsx)("title", {
                    children: null === A || void 0 === A ? void 0 : A.title
                }), (0,
                n.jsx)("meta", {
                    property: "og:title",
                    content: null !== (b = f.name) && void 0 !== b ? b : ""
                }), (0,
                n.jsx)("meta", {
                    property: "og:url",
                    content: f.url
                }), (0,
                n.jsx)("meta", {
                    property: "og:image",
                    content: null !== (E = null === A || void 0 === A || null === (p = A.metaThumbnail) || void 0 === p ? void 0 : p.url) && void 0 !== E ? E : f.logo
                }), (0,
                n.jsx)("meta", {
                    property: "og:description",
                    content: null !== (B = f.description) && void 0 !== B ? B : ""
                }), (0,
                n.jsx)("meta", {
                    property: "og:type",
                    content: (null === A || void 0 === A ? void 0 : A.ogType) || "website"
                }), (0,
                n.jsx)("meta", {
                    property: "og:site_name",
                    content: "Lulu"
                }), (0,
                n.jsx)("meta", {
                    property: "og:locale",
                    content: m
                }), null === x || void 0 === x ? void 0 : x.map((function(A) {
                    return (0,
                    n.jsx)("meta", {
                        property: "og:locale:alternate",
                        content: A
                    }, A)
                }
                )), (0,
                n.jsx)("meta", {
                    name: "description",
                    content: null !== (U = f.description) && void 0 !== U ? U : ""
                }), (null === A || void 0 === A ? void 0 : A.metaKeywords) && (0,
                n.jsx)("meta", {
                    name: "keywords",
                    content: A.metaKeywords.join()
                }), (0,
                n.jsx)("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(f, null, 2)
                    }
                }), (null === A || void 0 === A ? void 0 : A.unlisted) && (0,
                n.jsx)("meta", {
                    name: "robots",
                    content: "noindex"
                }, "robotsNoindex")]
            })
        }
    },
    97801: function(A, t, e) {
        "use strict";
        e.d(t, {
            a: function() {
                return a
            }
        });
        var a = function(A) {
            return e(79424)("./".concat(A)).default.src
        }
    },
    21060: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/060CW-1x.c4a36fee.png",
            height: 264,
            width: 470,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAZklEQVR42h3Jyw5FMBRA0f7/R93JJSaEGCLxLKcarTfnNJTYo50sVsO8bLjtO4BQWiPRfV8cJiZAWGuNMXoc27Zb1tV+MT9KzvN4DxEHpXrZSynLijMvLBrevUBEaZr9Xf/nxE6QP6QXWJlKgj9tAAAAAElFTkSuQmCC"
        }
    },
    61344: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/060CW-1x.ad83eb6e.webp",
            height: 264,
            width: 470,
            blurDataURL: "data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAACwAQCdASoIAAQAAkA4JZwAAudg2hQAAP79S/VC7N92qH8QGntqXFQAAAA="
        }
    },
    61186: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/060UC-1x.a8e3add3.png",
            height: 264,
            width: 470,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAaUlEQVR42g3CXQ9FIBgA4P7/jzpXznFzDBsXzApRvopV3iYxnj2oZeumjNZyGLAQPYB2zlK+IMbq+3LWGik5Z5VSi/fHG/2TfDfbeR4ASgg6T2QcO0waFMakpdh7B2DKIgt+4SdIv1H9AF7XV1OzgUOCAAAAAElFTkSuQmCC"
        }
    },
    57024: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/060UC-1x.36fb36aa.webp",
            height: 264,
            width: 470,
            blurDataURL: "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoIAAQAAkA4JZwAAudtHQZAAP78+S6v03j0oY3iJL8XgAUiwgwAAA=="
        }
    },
    35371: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/060UW-1x.c4a36fee.png",
            height: 264,
            width: 470,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAZklEQVR42h3Jyw5FMBRA0f7/R93JJSaEGCLxLKcarTfnNJTYo50sVsO8bLjtO4BQWiPRfV8cJiZAWGuNMXoc27Zb1tV+MT9KzvN4DxEHpXrZSynLijMvLBrevUBEaZr9Xf/nxE6QP6QXWJlKgj9tAAAAAElFTkSuQmCC"
        }
    },
    17651: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/060UW-1x.ad83eb6e.webp",
            height: 264,
            width: 470,
            blurDataURL: "data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAACwAQCdASoIAAQAAkA4JZwAAudg2hQAAP79S/VC7N92qH8QGntqXFQAAAA="
        }
    },
    71165: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/080CW-1x.7dde8263.png",
            height: 264,
            width: 470,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAaElEQVR42g3KsQ6DIBAAUP7/m5p2sunQtMYFY4LC6UL0TuAMyQmDbm94aoTNr6GUYoxBRBHZd7ILKgDglHLOB3Ovtch5mzmpbzsQUQih1uq9n2cgQq0H9fk76+AuMUY72cezeTXd++cuO8lWtCI6iIwAAAAASUVORK5CYII="
        }
    },
    46996: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/080CW-1x.bbc095cf.webp",
            height: 264,
            width: 470,
            blurDataURL: "data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAACQAQCdASoIAAQAAkA4JZwAAudP4OAA/vyfdEYpdmrrRXW8lIjifxUAAAA="
        }
    },
    41170: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/100CW-1x.dae18aa8.png",
            height: 264,
            width: 469,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAARVBMVEXP1urN1OnN0uPK0OX////+/v79/v78/P38/Pz5+fr5+fn39/j19/vz8/Tw8fbp6/Po6/Xo6e/j5Ovb3efY3e3W2+zP1OWO6a/0AAAABHRSTlP+/v7+ukpK/AAAADBJREFUeNoNxccBgDAAAzED59Ahff9RE30k1f80cdF3gNmbXoIdeFSw4Upa71nu2wAdAAFPBJI/JAAAAABJRU5ErkJggg=="
        }
    },
    53178: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/100CW-1x.9c9abe1c.webp",
            height: 264,
            width: 469,
            blurDataURL: "data:image/webp;base64,UklGRmQAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSAwAAAABD9D/iAhMYET/IwJWUDggMgAAANABAJ0BKggABQACQDgljALsAQ8FBOWwAP79le/aJMt1ZLNDBnkIUHUyMHoB0YH3fMAA"
        }
    },
    57562: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/BWPRE-1x.4acbebd9.png",
            height: 264,
            width: 469,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/AdHX5v77+PEB6efkAAYGBAAODxAAn5+gAKqhkQC6w9T/AbGwsP+Nj5EAPT5BACEgHwAcGxsAcnZ3ANbSzQBnZ2YAAcXFyv++wL4APDxAALa2swAODAkAzczNAP8CBAAQDQoAAdXY4//RzsUAt7m9AKOhmwBIR0gAk5ORAPDx9AD3+QAAAdHX6P7q5NYBRUtPAHVvagArKCYAGRwjAAkNFwALDhH/RQhDmf+FXOoAAAAASUVORK5CYII="
        }
    },
    82459: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/BWPRE-1x.2054c29a.webp",
            height: 264,
            width: 469,
            blurDataURL: "data:image/webp;base64,UklGRnYAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSAwAAAABD9D/iAhMYET/IwJWUDggRAAAALABAJ0BKggABQACQDgljAACnWyWvwAA/pwTA48g/oy/Rgm0dEz9Ln5bj9Cj/6f3QLoN/ln/3CPcFa9U1GKmiFv+BAAA"
        }
    },
    9699: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/BWSTD-1x.84891863.png",
            height: 264,
            width: 470,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAXUlEQVR42gUAQQqDMCxNmqSDDXbY/z+3DYvoQa1GxTYSvt30UEyCInzspwOo8lQufKWmHADAHViig7cGn3fCflgRQ63VzIhiErat/P45LuZmu4gQUc7dOJZ5vaI+b+sJLe3qNS6eAAAAAElFTkSuQmCC"
        }
    },
    70195: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/BWSTD-1x.eb4dfb93.webp",
            height: 264,
            width: 470,
            blurDataURL: "data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAACwAQCdASoIAAQAAkA4JZwAAudr6KaAAP78844wOY2UawFMgSvzWZQKAAA="
        }
    },
    91497: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/CO-1x.3ad71239.png",
            height: 450,
            width: 800,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AFtZWtXU1/////n5/fr6/vv7//v7/vz9/gCeoKlGREXGxsr+///7+//4+f36+v78/v8Ays/enJ6mKicnr6+z9vf9/////////f39AM3T5cTI1ZaYn0A/QbSvsM7JybewrayjoQDO1OfL0OLAws2ZmJ2Qio2bmaKusb++w9WdCFzcGeu8MQAAAABJRU5ErkJggg=="
        }
    },
    3887: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/CO-1x.e6de54c9.webp",
            height: 450,
            width: 800,
            blurDataURL: "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACQAQCdASoIAAUAAkA4JZQAApplJwAA/uGqRL+j1KN1Clk79NLWK3jtH63h4oRJOybxlMVNELf8CAAA"
        }
    },
    57628: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/CW-1x.2222f6ca.png",
            height: 450,
            width: 800,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/ALSzt+7t7/f3+vPz9vT09/T09/Pz9vPz9gCkpq+sq6/q6ez29vn09Pf29vn4+fz6+v4AxcjUnqCooaCk4+Ll9PP26ejr29naycXGAMvQ4b/CzJiboqKhpaCWk3ppXHJeTnBeTwDO1OfHytm8vcWdnaOGfnyUjpCmpa62ucWMGFzwiWKjyQAAAABJRU5ErkJggg=="
        }
    },
    21439: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/CW-1x.6734ae72.webp",
            height: 450,
            width: 800,
            blurDataURL: "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAUAAkA4JZwC7AEOZ/HeAP73ZtkNwmz5LQ6gFYDBCwVTsuNZiBxlC0M1MTmQoqAGoAAA"
        }
    },
    9525: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/FCPRE-1x.3d6d4603.png",
            height: 264,
            width: 469,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/Ac/S7v4O8ugBtemuAA4ACwC0uxwARVI5AA/+8gAnHA7/AbeyzP8P1+8A8jKxAOPvCADu3ycAtNv4AEtAMwASEBEAAcTH0v+wyq0A6+ajADsBOQAgLzwAc6K7ANP3FwBdPTsAAdLV3v+yxs0AEyS4AAvr5QDiwiwAGDYxAPn18gAoJy8AAdHT5P7l9u8Boc7HACn73gAhDCgAGBofAA4THQAICw7/KAFD+QQMA1kAAAAASUVORK5CYII="
        }
    },
    26018: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/FCPRE-1x.f89843b2.webp",
            height: 264,
            width: 469,
            blurDataURL: "data:image/webp;base64,UklGRn4AAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSAwAAAABD9D/iAhMYET/IwJWUDggTAAAALABAJ0BKggABQACQDglAE6AHk/fwAAA/uJ7PZJUwTMuXZBWFKo5TaMSfZRd9SG7bP7Gi45B5Vpc5ECgAFBBhVtxWCa9UrKC4Lx0eAA="
        }
    },
    86616: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/FCSTD-1x.457dc196.png",
            height: 264,
            width: 470,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAbElEQVR42g3K0QqDIBQAUP//nwajMXAPW4uSKChMiqLIHsrqeq9a5/mwSs1S9Yi4rpvIhSUCpFEb1nVtmmXOe0fhBGeRjNlDCCwvFYBF5/tp2Mx+HsBfUVVL9vk3Wi93efJHnPzipIi4eH/lBWaDV0QBOU+tAAAAAElFTkSuQmCC"
        }
    },
    32633: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/FCSTD-1x.cce889c3.webp",
            height: 264,
            width: 470,
            blurDataURL: "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADQAQCdASoIAAQAAkA4JZwC7AEO9sW/AAD+/Jlch8tih6PFjZcfA4GvZAmjEeAA"
        }
    },
    40759: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/LW-1x.1848f9ac.png",
            height: 450,
            width: 800,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/ALu7v+rq7fDx9O7v8+/v8+7v8+7v8/Dx9QCkp6+1tbjp6Ovw8PPw8PTz8/j19/v3+f4AxMfTnaCorq6x5OTm6+vv3d3iz87SvLu9AMvQ4b7By5iaoquqrpGKiWZYTlhIPFVGOwDO1OfGyti7vcWamqB0b3GDgYWcnaaxs8A/ZVr4bgC8fQAAAABJRU5ErkJggg=="
        }
    },
    50755: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/LW-1x.fc4e24e8.webp",
            height: 450,
            width: 800,
            blurDataURL: "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAUAAkA4JZQAAudo7D2AAP73ZmUwf2TOMYydjON9XFp7PU0hpKANIwgB0YGqAAA="
        }
    },
    17342: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/PB-1x.178d72ce.png",
            height: 450,
            width: 800,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/ALu7v+7u8vHx9e7u8u/v9O/v8+7u8+7u8gCtsLq0tLjt7PHw8PXt7fHv7/Tx8fb09PkAzdLip6myqqmt6ejt9PT57e3y4uHl0tDTAM/V6MjM2qKkrKSjpqSdm4Z8dnpvaHx0cwDO1OfN0+XDxtGnp62TkJeqrLe+wtLL0OLPg1/6ytyYNAAAAABJRU5ErkJggg=="
        }
    },
    85734: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/PB-1x.bbf55d9c.webp",
            height: 450,
            width: 800,
            blurDataURL: "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADwAQCdASoIAAUAAkA4JYwC7AEPBYySOIAA/vg9cm0F3SEbcVJsB0UFUfauUCqbJAJR4onEgAA="
        }
    },
    95972: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/SS-1x.9279840c.png",
            height: 450,
            width: 800,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAbUlEQVR42k3KywpGQBiA4e/+7+H/d5IpykpCjeOCyXlqwhol9siMmtl4Fu/qhabuhMQ5V1UAp5SQSkiPpA7ox8PDdRwl4uO+Tijp0g274xdRGE8DC1zHREjXEFR0LfulZZvr57+/Ydkhzhhp5xfuFmkwvcV+JwAAAABJRU5ErkJggg=="
        }
    },
    1756: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/SS-1x.65832ec8.webp",
            height: 450,
            width: 800,
            blurDataURL: "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADQAQCdASoIAAUAAkA4JYwCdAEO+M3dAAD++19B/Gx7Kw5iOPnLbCJp61UCG0QvyGwAAA=="
        }
    },
    54709: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/WO-1x.aaff0bd5.png",
            height: 450,
            width: 800,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAaklEQVR42k2JSQ5AMAAA+//nkNDYHUQl1BL7tSI9UA+otopIzGEOMwDnWEmplNbjD+DFNUqRLroKIXR6DdqZQT+PgvDkXP0AZUebaTPtBFr2wfZ1IWM/4KK+B+5o1VPoZoYZOn4RpzMqyQUGcmrKQsYRUAAAAABJRU5ErkJggg=="
        }
    },
    87737: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/WO-1x.d2a6161b.webp",
            height: 450,
            width: 800,
            blurDataURL: "data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoIAAUAAkA4JYwC7AEO9sV+AAD++t/Fsk6tpz81Njkup/NpRvkLzXYFcopRAAAA"
        }
    },
    80623: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/author-placeholder.08615b10.png",
            height: 451,
            width: 451,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA30lEQVR42jWO3U7CQBCF92kQfWZvvTPxxsiF1J+ikUT8rWItNNAChVIKpbst3S1wmIUwyUwm53xzMkxXKlR1yeUDz0ol8lLRbqZcnh3NExJinimEM4EgTMCFAmmLpYZo3GlzEnFpu1Pcmt9w+6HM8rWGGhooKBb+aA6jYeHy+gmOGyBb7YFyD6QUqfv338eP7UHQNf1zAMgwkrSAHyTS7k7Q+uqh+ebIKBYaemQiV5XeYB51vRiWPcLzq4Or2gvq5ke82eKU6fpsDyvtzth4t7zCbP4VN/XW/flFrcoYYzvIOdSiMHUxDgAAAABJRU5ErkJggg=="
        }
    },
    87346: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/author-placeholder.50fa1453.webp",
            height: 451,
            width: 451,
            blurDataURL: "data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDMAAAABYBxJcpOLRi7/r1c4EvD1DDaHiJgAMWldixM9AEwusMBCnfnc/jwLLGTVAAYrys9zNAIAVlA4IDgAAADwAQCdASoIAAgAAkA4JZQCdAEPAj3GfAAA/vzrthFLNQTIJsGw7W3WvLunCEDaN1EF1Ww5BcAAAA=="
        }
    },
    85964: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/calendar-overlay.0fe6b8a5.png",
            height: 1347,
            width: 1732,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAASUlEQVR42q3MsRGAMAwEQX8biLqxaQj9S8I1MZARkXAzm16rqsXdV1F2I2l0mh9uobD22TwnRCEi8FBAEkgiM9H+bYwdfeuv7QXNmCotB8z66gAAAABJRU5ErkJggg=="
        }
    },
    83073: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/calendar-overlay.c7269850.webp",
            height: 1347,
            width: 1732,
            blurDataURL: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSCAAAAABJyAQSOFhHBGRgUG2kfYGP5YZvL/WO0T0P68CUOXvAFZQOCAoAAAAsAEAnQEqCAAGAAJAOCWkAALnFJsPAAD+9xGPnAGGU+RBzDUfhHoAAA=="
        }
    },
    93016: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/calendar-template-emphasis.896dbed8.jpg",
            height: 540,
            width: 960,
            blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAKwLj//EABYQAAMAAAAAAAAAAAAAAAAAAABDgf/aAAgBAQABPwBcP//EABcRAAMBAAAAAAAAAAAAAAAAAAACQXH/2gAIAQIBAT8AW6f/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwCv/9k="
        }
    },
    16989: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/calendar-template-emphasis.3cc6d8b6.webp",
            height: 540,
            width: 960,
            blurDataURL: "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAABwAQCdASoIAAUAAkA4JZQC7AF1AAD++WOzmYvSrEP00DEbukblWvAA"
        }
    },
    579: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/calendar-template-large-print.9dab9174.jpg",
            height: 540,
            width: 960,
            blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAKyLn//EABgQAAIDAAAAAAAAAAAAAAAAAAAxAREj/9oACAEBAAE/ALyUI//EABcRAAMBAAAAAAAAAAAAAAAAAAACQXH/2gAIAQIBAT8AW6f/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwCv/9k="
        }
    },
    57494: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/calendar-template-large-print.156740c4.webp",
            height: 540,
            width: 960,
            blurDataURL: "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAABwAQCdASoIAAUAAkA4JZQCdAFAAAD++XrZIjtu4fpk/MVlBgPx5IAA"
        }
    },
    36053: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/calendar-template-standard-grid.2f5a935c.jpg",
            height: 540,
            width: 960,
            blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAKyLj//EABoQAAAHAAAAAAAAAAAAAAAAAAAREyEiMTL/2gAIAQEAAT8Aillysf/EABcRAAMBAAAAAAAAAAAAAAAAAAACQXH/2gAIAQIBAT8AW6f/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwCv/9k="
        }
    },
    28669: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/calendar-template-standard-grid.e77ed61f.webp",
            height: 540,
            width: 960,
            blurDataURL: "data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAADQAQCdASoIAAUAAkA4JZQCdAEO+yG0AAD+/UeNYogpu6YIrKDAfjyQAAA="
        }
    },
    32907: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/calendar-template-stylish.731ed9c3.jpg",
            height: 540,
            width: 960,
            blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAKyLj//EABgQAAIDAAAAAAAAAAAAAAAAAAExAAMR/9oACAEBAAE/ABgqTn//xAAXEQADAQAAAAAAAAAAAAAAAAAAAkFx/9oACAECAQE/AFun/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Ar//Z"
        }
    },
    37871: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/calendar-template-stylish.2100b717.webp",
            height: 540,
            width: 960,
            blurDataURL: "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoIAAUAAkA4JZQCdAD0cgSoAP788dlUo61zceCnYIrKDAfjyQAAAA=="
        }
    },
    64744: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/cover_basic-2x.58f46d71.jpg",
            height: 358,
            width: 500,
            blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAL8L/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDEQASIkFh/9oACAEBAAE/AJ4WtHjbQMRvyPXhsZ//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAWEQADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8ArP/Z"
        }
    },
    56506: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/cover_basic-2x.031fa26a.webp",
            height: 358,
            width: 500,
            blurDataURL: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAACQAQCdASoIAAYAAkA4JZwAAp01tAAA/vj7FrVzItx64keug02UeqkWqVux2lqVzgeIX7xb/JbGfjAdEwAAAA=="
        }
    },
    85916: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/cover_basic.59550f9e.jpg",
            height: 179,
            width: 250,
            blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAL8L/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDEQASIkFh/9oACAEBAAE/AJ4XtHjbQMRvyPXhsZ//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAWEQADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8ArP/Z"
        }
    },
    87693: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/cover_basic.13ce9212.webp",
            height: 179,
            width: 250,
            blurDataURL: "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACQAQCdASoIAAYAAkA4JZwAAp02x0AA/vj7FrVzItx64bA26cQz5KKorXABTAB1XQBpgb/JbGfjAdEwAAA="
        }
    },
    66506: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/cover_bigimage-2x.873b40de.jpg",
            height: 358,
            width: 500,
            blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAuAP/xAAcEAABBAMBAAAAAAAAAAAAAAACAQMEEQAiUnL/2gAIAQEAAT8AdjyhICSRoblr55rP/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQIBAT8AAL//xAAVEQEBAAAAAAAAAAAAAAAAAAARAP/aAAgBAwEBPwBb/9k="
        }
    },
    92182: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/cover_bigimage-2x.7873d0a5.webp",
            height: 358,
            width: 500,
            blurDataURL: "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAYAAkA4JZQC7AEOjhCAAP7z+5CRUwC+5LwD7l0T6PvvDR0pzSBhemIZyEq13Vk7dYAA"
        }
    },
    65844: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/cover_bigimage.577bee24.jpg",
            height: 179,
            width: 250,
            blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAuAP/xAAcEAABBAMBAAAAAAAAAAAAAAACAQMEEQAiUnL/2gAIAQEAAT8AdjyhICSRoblr55rP/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQIBAT8AAL//xAAVEQEBAAAAAAAAAAAAAAAAAAARAP/aAAgBAwEBPwBb/9k="
        }
    },
    97958: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/cover_bigimage.289addf5.webp",
            height: 179,
            width: 250,
            blurDataURL: "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAACwAQCdASoIAAYAAkA4JZQC7AEOjhCAAP7z+5CRUwC+5LwD7l0T6PvvDR0pzSBhemJWv+Akh6auhVQAAAA="
        }
    },
    65721: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/cover_middlebar-2x.e51de428.jpg",
            height: 358,
            width: 500,
            blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAtQf/xAAbEAADAQADAQAAAAAAAAAAAAABAwQCABEyIf/aAAgBAQABPwBMdE7KGsq04UN7yPIXkDyM/ef/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="
        }
    },
    13013: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/cover_middlebar-2x.9cf63c87.webp",
            height: 358,
            width: 500,
            blurDataURL: "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACQAQCdASoIAAYAAkA4JaQAApexCwAA/gtUf6x+TMMaDRUI/+m0baqO8JP8ik4/3GmpXcUJFAAAAA=="
        }
    },
    75279: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/cover_middlebar.922c5403.jpg",
            height: 179,
            width: 250,
            blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAtQf/xAAbEAADAQADAQAAAAAAAAAAAAABAwQCABEyIf/aAAgBAQABPwBMdE7KGsq04UN7yPIXkDyM/ef/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="
        }
    },
    1700: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/cover_middlebar.c52bfe35.webp",
            height: 179,
            width: 250,
            blurDataURL: "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACQAQCdASoIAAYAAkA4JaQAApexCwAA/gtUf6x+TMMaDRUI/+m0baqO8JP8ik4/3GmpXcUEUUAAAA=="
        }
    },
    12942: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/cover_spineimage-2x.42edfe39.jpg",
            height: 358,
            width: 500,
            blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAArwn/xAAdEAACAgEFAAAAAAAAAAAAAAABAwIEEQAFITJS/9oACAEBAAE/AJ0twW8NjdytrsyHmAHUDka//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAFB/9oACAECAQE/AHD/xAAWEQADAAAAAAAAAAAAAAAAAAAAAUH/2gAIAQMBAT8AVP/Z"
        }
    },
    75301: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/cover_spineimage-2x.88e2e303.webp",
            height: 358,
            width: 500,
            blurDataURL: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADwAQCdASoIAAYAAkA4JZQCdAEUokuYVYAA/sqBP4/tfFsEQF9gS9i/48pXEC6+13Fd5xybrFe8oDAoexXfAVckS98pgLNAAAA="
        }
    },
    95089: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/cover_spineimage.a3263def.jpg",
            height: 179,
            width: 250,
            blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAArwn/xAAdEAACAgEFAAAAAAAAAAAAAAABAwIEEQAFITJS/9oACAEBAAE/AJ0twW8NjdytrsyHmAHUDka//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAFB/9oACAECAQE/AHD/xAAWEQADAAAAAAAAAAAAAAAAAAAAAUH/2gAIAQMBAT8AVP/Z"
        }
    },
    6568: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/cover_spineimage.cf3cc915.webp",
            height: 179,
            width: 250,
            blurDataURL: "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAADwAQCdASoIAAYAAkA4JZQCdAD0WAasGgAA/sqeTKp50Y5hyTPwq5iGDP1CANpP4zrNl7+V18g8W3ceAQnwCvFFdw0egDauOb+AAA=="
        }
    },
    83490: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/dummy-image-16-9.dc56376c.jpg",
            height: 720,
            width: 1280,
            blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAABv/aAAwDAQACEAMQAAAAkBMp/8QAHBAAAgAHAAAAAAAAAAAAAAAAERMAAQISFDFB/9oACAEBAAE/AHSxErpuaWdGxH//xAAXEQADAQAAAAAAAAAAAAAAAAAAARFx/9oACAECAQE/AEpdP//EABgRAAIDAAAAAAAAAAAAAAAAAAERACFh/9oACAEDAQE/ABT0uf/Z"
        }
    },
    7616: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/logo.e9e80507.svg",
            height: 225,
            width: 550
        }
    },
    7404: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/lulu-calendar-wire-o-overlay.b3947513.svg",
            height: 125,
            width: 4400
        }
    },
    60614: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/lulu-direct-magenta-logo.ffbb5950.svg",
            height: 206,
            width: 764
        }
    },
    26988: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/lulu-product-calendar-thumb-16-9-1x.3048143f.jpg",
            height: 540,
            width: 960,
            blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAKULD//EABsQAAMAAgMAAAAAAAAAAAAAAAECAwARBBIx/9oACAEBAAE/AEhEpTkMm6AdA2/Bn//EABcRAAMBAAAAAAAAAAAAAAAAAAABQnH/2gAIAQIBAT8AVaf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAUf/aAAgBAwEBPwCP/9k="
        }
    },
    2630: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/lulu-product-calendar-thumb-16-9-1x.3048143f.webp",
            height: 540,
            width: 960,
            blurDataURL: "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAUAAkA4JZQCdAEf/wN3kAD++Zl9hr3M5eNg4pZ7xceHzRsY4w/TaE3LIkQAAAA="
        }
    },
    70717: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/lulu-product-comic-book-thumb-16-9-1x.09e71b98.png",
            height: 500,
            width: 889,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/ANTb7tTb78fJ2Kyps419eYJyZcnQ49HY6wDK0uWJfoGceWKIenRtSjBSJQB4dn/L0uUA09vugH2EfnFplnBiWDkse3J2oKOxyM7hANbd8bC3x2hlZp+XnLq9zM3U59Pa7c3T59qSPQZxMKZaAAAAAElFTkSuQmCC"
        }
    },
    35703: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/lulu-product-comic-book-thumb-16-9-1x.ad1a3b6c.webp",
            height: 500,
            width: 889,
            blurDataURL: "data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAQCdASoIAAQAAkA4JYwCdAEQ/d4jLgAA/uKU/kiHFKILT6tmTOZtNreh+9qICCRL5wgABjMRFqYPYAA="
        }
    },
    55216: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/lulu-product-ebook-thumb-16-9-1x.f8ec7ebb.png",
            height: 264,
            width: 470,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/ANHX6tTa7Mza7qvM45zH5dnd7tHY69HX6gDP1urX2+uHvuOEtdNxstaoyurW2uvP1ukAz9bp09fqw9LoaLXffLnen8nn1drqztToAM/V6M7V6NLW57rR58nW59bY5s7U583U50axTm7guMdxAAAAAElFTkSuQmCC"
        }
    },
    52583: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/lulu-product-ebook-thumb-16-9-1x.c235a764.webp",
            height: 264,
            width: 470,
            blurDataURL: "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAQAAkA4JQBOgCP/475/gAD++D8N6fLhui2PmDhcBDZ3mb35/a/d8gMVm0TAAAA="
        }
    },
    97360: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/lulu-product-magazine-thumb-16-9-1x.0dc4a9cf.png",
            height: 264,
            width: 470,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/ANbd7s7S4MzV2c3O0XFyYJKVg62wsNnf8gC1srd8e2WowqrT3NatrJ94eUh2d0S+v8IAycvTdHFLpaF3sbKM19bRop+Surq3ys3XANrf76unmJiTerezqc7P19PX587T587V6uLxQvEz5mDhAAAAAElFTkSuQmCC"
        }
    },
    54248: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/lulu-product-magazine-thumb-16-9-1x.e8ff1852.webp",
            height: 264,
            width: 470,
            blurDataURL: "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoIAAQAAkA4JZQC7AD0jHu3AAD+8Bqg2W8oqwLWKhembgAL3oc/bJl0W0hQwSZEc2AAAA=="
        }
    },
    11043: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/lulu-product-photo-book-thumb-16-9-1x.46dd3665.png",
            height: 264,
            width: 470,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/ANPc79ff8tDX58PH1K+4xpisvIKBhMnO2wDEx9KrrrRqbWt9e26Vhnl8dG1VUk6vsbgAtbGrraWZl5WPg4R1paWlqq24zNLiz9fpAMrLzqummbm7wsXK2M7V59Lb7s7W6czU5smFQsu0UVVjAAAAAElFTkSuQmCC"
        }
    },
    24434: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/lulu-product-photo-book-thumb-16-9-1x.b5816067.webp",
            height: 264,
            width: 470,
            blurDataURL: "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADwAQCdASoIAAQAAkA4JYwCdAEfbiwQEAAA/u5adroYWAPDahqtS6KjivZSacNTKcVxhjZ9Ar9wAA=="
        }
    },
    44620: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/lulu-product-print-book-thumb-16-9-1x.9c71473f.png",
            height: 264,
            width: 470,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAZUlEQVR42gUASwqEINT7H2wYGI0pK/stitQ+kiXle7oogqTClJ0dlLMHeI/O+bQy/3IhjOvV2BhDDAEBn+feds/4RFg+160MiABwnadSs2hkkk8kKRaayXHUou6/tP3Q/pdpxvUL+3hVssT9YosAAAAASUVORK5CYII="
        }
    },
    46780: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/lulu-product-print-book-thumb-16-9-1x.24165763.webp",
            height: 264,
            width: 470,
            blurDataURL: "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADQAQCdASoIAAQAAkA4JZQCdAEQ/b7kYAD+/D10P/gqx+9eSgTNunFS7TStaEAA"
        }
    },
    55155: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/lulu-product-yearbook-thumb-16-9-1x.d302de89.png",
            height: 264,
            width: 469,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAApElEQVR42gWAzQrBcADA/8/mJTyAR3Hi4CuElGxCUliUr1zWNsOQzxQR03aY7Oi0n8T55ge7k8Nxd0E3V0jVBnJVxnE9zrdvIJSRSjyRpJBJMZtMkWtNivkyuqrx8X+IfC5NKBwhGkshFbJMhmNKlQa9roL9fCG26xN9ZUC92UGqSCznJoZuYllHFpsH4nr3Att+02oraJqBqlkYqyvLvYN1cIM/0fCAJuapylQAAAAASUVORK5CYII="
        }
    },
    20473: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/lulu-product-yearbook-thumb-16-9-1x.cdcd87cf.webp",
            height: 264,
            width: 469,
            blurDataURL: "data:image/webp;base64,UklGRmgAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSAwAAAABD9D/iAhMYET/IwJWUDggNgAAAPABAJ0BKggABQACQDgljAJ0ARSjzWYQAAD+5/9MOSqME8lbiDpmCf/mOEHn+evjKlbwxbMAAA=="
        }
    },
    87732: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/social_logo.ea0db9b3.png",
            height: 1200,
            width: 1200,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAm0lEQVR42mNgAAKNHZ+YGHCCyL2MDDBgMZGJhaEByG9mAmIgDcRgsOm1OAMuIDnpto/roV9f9FoOZDAwOGkLu08XYmBoigRiUQaGZn4G7shtGRZTbj9Silk2g4GhciMjb8sqoMRWoIJNQJzCAAXcQEF5Jo4mA6CgKZCtDsTmQCzLQBQQ817JyKkzgYmBoYGJgakZSIMxMwNDMyMAOmEln5lztL8AAAAASUVORK5CYII="
        }
    },
    41698: function(A, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            src: "/_next/static/media/social_logo.5f8eef83.webp",
            height: 1200,
            width: 1200,
            blurDataURL: "data:image/webp;base64,UklGRrYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD8AAAABYFNr25Lv+xjdmTiM7lqCAuwaiQxsWogMRPjpEBEJBAwCEBIi2MD03xppgymv73bszzkC7+aN1znwRyIiDgEAVlA4IFAAAADQAQCdASoIAAgAAkA4JbACdAD0r5eFMAD+9MJBDV/g++wo8fX/014rHdCdX1C3KFzQ7tdfQtnV3PD3/nKw//wSf/xYfNu/LJH9EY6k0bgAAA=="
        }
    }
}]);
//# sourceMappingURL=4883-f9e497d0a469d33c.js.map
