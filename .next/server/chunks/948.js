"use strict";
exports.id = 948;
exports.ids = [948];
exports.modules = {

/***/ 2798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var defaultErrorMessages = {
    default: "\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4"
};
//fallback component for error boundaries
var ErrorFallback = function(_a) {
    var _b = _a.errorMessages, errorMessages = _b === void 0 ? {} : _b, errorCode = _a.errorCode;
    var getErrorMessage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {
        if (!errorCode) return defaultErrorMessages["default"];
        if (errorMessages[errorCode]) {
            return errorMessages[errorCode];
        } else if (errorMessages["default"]) {
            return errorMessages["default"];
        } else if (defaultErrorMessages[errorCode]) {
            return defaultErrorMessages[errorCode];
        } else {
            return defaultErrorMessages["default"];
        }
    }, [
        errorMessages,
        errorCode
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "error-fallback",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: getErrorMessage()
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorFallback);


/***/ }),

/***/ 1811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __extends = undefined && undefined.__extends || function() {
    var extendStatics = function(d1, b1) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d1, b1);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

var ErrorBoundary = /** @class */ function(_super) {
    __extends(ErrorBoundary1, _super);
    function ErrorBoundary1(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hasError: false
        };
        return _this;
    }
    ErrorBoundary1.getDerivedStateFromError = function(error) {
        return {
            hasError: true
        };
    };
    ErrorBoundary1.prototype.render = function() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    };
    return ErrorBoundary1;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);


/***/ }),

/***/ 4333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DH": () => (/* binding */ camerasSelector),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "oe": () => (/* binding */ setCameras)
/* harmony export */ });
/* unused harmony export clearCameras */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
var _a;

var camerasSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    //array of active cameras
    name: "cameras",
    initialState: [],
    reducers: {
        setCameras: function(state, action) {
            return action.payload;
        },
        clearCameras: function() {
            return [];
        }
    }
});
var camerasSelector = function(state) {
    return state.cameras;
};
var setCameras = (_a = camerasSlice.actions, _a.setCameras), clearCameras = _a.clearCameras;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (camerasSlice.reducer);


/***/ }),

/***/ 3455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SK": () => (/* binding */ currentCameraSelector),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "_n": () => (/* binding */ setCurrentCamera)
/* harmony export */ });
/* unused harmony export clearCurrentCamera */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
var _a;

var currentCameraSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    //camera played at the moment
    name: "currentCamera",
    initialState: null,
    reducers: {
        setCurrentCamera: function(state, action) {
            return action.payload;
        },
        clearCurrentCamera: function(_, __) {
            return null;
        }
    }
});
var currentCameraSelector = function(state) {
    return state.currentCamera;
};
var setCurrentCamera = (_a = currentCameraSlice.actions, _a.setCurrentCamera), clearCurrentCamera = _a.clearCurrentCamera;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentCameraSlice.reducer);


/***/ })

};
;