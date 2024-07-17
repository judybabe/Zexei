self.__BUILD_MANIFEST = function(s, c, e, a) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [{
                source: "/:nextInternalLocale(en|de|es|fr|it)/order-lookup",
                destination: "/:nextInternalLocale"
            }],
            fallback: []
        },
        "/": [s, "static/chunks/pages/index-b4010e18cb3fa60a.js"],
        "/404": [c, "static/chunks/pages/404-d1480474d22bcb4c.js"],
        "/_error": ["static/chunks/pages/_error-7e42f07710d349dc.js"],
        "/cart": ["static/css/7c76154a363589cc.css", "static/chunks/pages/cart-f4cbe6eb316845a8.js"],
        "/glossary/[...page]": [s, c, "static/chunks/pages/glossary/[...page]-6b0a20479afab08c.js"],
        "/orders/[order]": [c, "static/chunks/pages/orders/[order]-e23eaec1545f33ed.js"],
        "/pricing": ["static/chunks/29107295-a2f3803b7cb04236.js", s, "static/css/8bcd24afebbacd4a.css", "static/chunks/pages/pricing-84c1a258c3681349.js"],
        "/search": [e, s, a, "static/css/4ef7a53a01e5b840.css", "static/chunks/pages/search-ba709a794ce28e5c.js"],
        "/shop/[...product]": [e, "static/chunks/91569-64a4db62471a6e77.js", s, a, "static/css/fd2e01816afc6552.css", "static/chunks/pages/shop/[...product]-f5a4c086f7c5fd94.js"],
        "/spotlight/[slug]": [s, "static/css/ce75ac98d9e4084e.css", "static/chunks/pages/spotlight/[slug]-50673e637beb4bea.js"],
        "/[...page]": [s, c, "static/chunks/pages/[...page]-db1091139f0b317e.js"],
        sortedPages: ["/", "/404", "/_app", "/_error", "/cart", "/glossary/[...page]", "/orders/[order]", "/pricing", "/search", "/shop/[...product]", "/spotlight/[slug]", "/[...page]"]
    }
}("static/chunks/4883-f9e497d0a469d33c.js", "static/css/403987df4f3c72af.css", "static/chunks/10985-c9ecb4846a952fe8.js", "static/chunks/25173-058ebbc11f783a39.js"),
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
