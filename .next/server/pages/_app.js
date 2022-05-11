(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4885:
/***/ ((module) => {

// Exports
module.exports = {
	"nav-bar": "NavBar_nav-bar__0GEXc",
	"tab": "NavBar_tab__fDWEX"
};


/***/ }),

/***/ 6724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "react-loading"
const external_react_loading_namespaceObject = require("react-loading");
var external_react_loading_default = /*#__PURE__*/__webpack_require__.n(external_react_loading_namespaceObject);
;// CONCATENATED MODULE: ./components/atoms/Loader/Loader.tsx



var Loader = function(_a) {
    var _b = _a.type, type = _b === void 0 ? "spin" : _b, _c = _a.color, color = _c === void 0 ? "gray" : _c, _d = _a.size, size = _d === void 0 ? 30 : _d;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "loader",
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_loading_default()), {
            type: type,
            color: color,
            height: size,
            width: size
        })
    });
};
/* harmony default export */ const Loader_Loader = (Loader);

// EXTERNAL MODULE: ./components/wrappers/ErrorBoundary.tsx
var ErrorBoundary = __webpack_require__(1811);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/organisms/NavBar/NavBar.module.scss
var NavBar_module = __webpack_require__(4885);
var NavBar_module_default = /*#__PURE__*/__webpack_require__.n(NavBar_module);
// EXTERNAL MODULE: external "classnames/bind"
var bind_ = __webpack_require__(3284);
var bind_default = /*#__PURE__*/__webpack_require__.n(bind_);
;// CONCATENATED MODULE: ./components/organisms/NavBar/NavBar.tsx




var cx = bind_default().bind((NavBar_module_default()));
var NavBar = function() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: cx("nav-bar"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavBar.Tab, {
                text: "home",
                to: "/"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(NavBar.Tab, {
                text: "cameras",
                to: "/camera"
            })
        ]
    });
};
var NavBarTab = function(_a) {
    var text = _a.text, to = _a.to;
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: to,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: cx("tab"),
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: text
                })
            })
        })
    });
};
NavBar.Tab = NavBarTab;
/* harmony default export */ const NavBar_NavBar = (NavBar);

;// CONCATENATED MODULE: ./components/wrappers/Layout.tsx


var Layout = function(_a) {
    var children = _a.children;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavBar_NavBar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            })
        ]
    });
};
/* harmony default export */ const wrappers_Layout = (Layout);

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./store/modules/currentCameraSlice.ts
var currentCameraSlice = __webpack_require__(3455);
// EXTERNAL MODULE: ./store/modules/camerasSlice.ts
var camerasSlice = __webpack_require__(4333);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: ./store/modules/root.ts
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var rootReducer = function(state, action) {
    if (action.type === external_next_redux_wrapper_namespaceObject.HYDRATE) {
        return __assign(__assign({}, state), action.payload);
    }
    return (0,external_redux_namespaceObject.combineReducers)({
        currentCamera: currentCameraSlice/* default */.ZP,
        cameras: camerasSlice/* default */.ZP
    })(state, action);
};
/* harmony default export */ const root = (rootReducer);

;// CONCATENATED MODULE: ./store/index.ts



var makeStore = function() {
    return (0,toolkit_.configureStore)({
        reducer: root
    });
};
var reduxWrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore, {
    debug: "production" !== "production"
});

// EXTERNAL MODULE: ./components/atoms/ErrorFallback/ErrorFallback.tsx
var ErrorFallback = __webpack_require__(2798);
;// CONCATENATED MODULE: ./pages/_app.tsx









var App = function(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    var queryClient = external_react_default().useState(function() {
        return new external_react_query_.QueryClient({
            defaultOptions: {
                queries: {
                    suspense: true
                }
            }
        });
    })[0];
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_query_.QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_query_.Hydrate, {
            state: pageProps.dehydratedState,
            children: /*#__PURE__*/ jsx_runtime_.jsx(ErrorBoundary/* default */.Z, {
                fallback: /*#__PURE__*/ jsx_runtime_.jsx(ErrorFallback/* default */.Z, {}),
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Suspense, {
                    fallback: /*#__PURE__*/ jsx_runtime_.jsx(Loader_Loader, {}),
                    children: /*#__PURE__*/ jsx_runtime_.jsx(wrappers_Layout, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    })
                })
            })
        })
    });
};
/* harmony default export */ const _app = (reduxWrapper.withRedux(App));


/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 3284:
/***/ ((module) => {

"use strict";
module.exports = require("classnames/bind");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,948], () => (__webpack_exec__(6724)));
module.exports = __webpack_exports__;

})();