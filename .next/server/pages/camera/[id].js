(() => {
var exports = {};
exports.id = 286;
exports.ids = [286];
exports.modules = {

/***/ 8845:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "CameraVideo_container__sURQU",
	"video": "CameraVideo_video__CDiha",
	"title": "CameraVideo_title__U6aRH"
};


/***/ }),

/***/ 931:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "VideoOverlay_container___DaSM",
	"text": "VideoOverlay_text__Dv58b"
};


/***/ }),

/***/ 1997:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "CameraNavigation_container__cS_DQ",
	"title": "CameraNavigation_title__BOkfa",
	"cameras": "CameraNavigation_cameras__ZDa_R",
	"current-camera": "CameraNavigation_current-camera__9VFM_"
};


/***/ }),

/***/ 3160:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "CameraPlayer_container__pmmGh"
};


/***/ }),

/***/ 8896:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "CameraPage_container__Hx_9v"
};


/***/ }),

/***/ 6706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
// EXTERNAL MODULE: ./store/modules/currentCameraSlice.ts
var currentCameraSlice = __webpack_require__(3455);
;// CONCATENATED MODULE: ./components/atoms/CameraVideo/useCameraVideo.ts
var __awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};



var useCameraVideo = function() {
    var _a1 = (0,external_react_.useState)(true), isLoading = _a1[0], setIsLoading = _a1[1];
    var _b = (0,external_react_.useState)(), errorMessage = _b[0], setErrorMessage = _b[1];
    var videoRef = (0,external_react_.useRef)(null);
    var currentCamera = (0,external_react_redux_namespaceObject.useSelector)(currentCameraSlice/* currentCameraSelector */.SK);
    (0,external_react_.useEffect)(function() {
        if (!videoRef.current) return;
        if (!currentCamera) {
            setErrorMessage("\uD574\uB2F9 \uCE74\uBA54\uB77C\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4");
        }
        setErrorMessage("");
        loadVideo();
    }, [
        currentCamera
    ]);
    var loadVideo = (0,external_react_.useCallback)(function() {
        return __awaiter(void 0, void 0, void 0, function() {
            var mediaDevices, stream, error_1;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        mediaDevices = navigator.mediaDevices;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([
                            1,
                            3,
                            4,
                            5
                        ]);
                        return [
                            4 /*yield*/ ,
                            mediaDevices.getUserMedia({
                                video: true
                            })
                        ];
                    case 2:
                        stream = _a.sent();
                        playVideo(stream);
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 3:
                        error_1 = _a.sent();
                        handleVideoLoadFail();
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 4:
                        setIsLoading(false);
                        return [
                            7 /*endfinally*/ 
                        ];
                    case 5:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    }, []);
    var playVideo = (0,external_react_.useCallback)(function(stream) {
        var video = videoRef.current;
        video.muted = true;
        video.srcObject = stream;
        video.onloadedmetadata = function() {
            video.play();
        };
    }, [
        videoRef.current
    ]);
    var handleVideoLoadFail = (0,external_react_.useCallback)(function() {
        setErrorMessage("\uC7A5\uBE44 \uD639\uC740 \uAD8C\uD55C \uBB38\uC81C\uB85C \uC601\uC0C1\uC744 \uC7AC\uC0DD\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4");
    }, []);
    return {
        videoRef: videoRef,
        isLoading: isLoading,
        errorMessage: errorMessage,
        cameraNum: currentCamera === null || currentCamera === void 0 ? void 0 : currentCamera.num
    };
};

// EXTERNAL MODULE: ./components/atoms/CameraVideo/CameraVideo.module.scss
var CameraVideo_module = __webpack_require__(8845);
var CameraVideo_module_default = /*#__PURE__*/__webpack_require__.n(CameraVideo_module);
// EXTERNAL MODULE: external "classnames/bind"
var bind_ = __webpack_require__(3284);
var bind_default = /*#__PURE__*/__webpack_require__.n(bind_);
// EXTERNAL MODULE: ./components/atoms/VideoOverlay/VideoOverlay.module.scss
var VideoOverlay_module = __webpack_require__(931);
var VideoOverlay_module_default = /*#__PURE__*/__webpack_require__.n(VideoOverlay_module);
;// CONCATENATED MODULE: ./components/atoms/VideoOverlay/VideoOverlay.tsx




var cx = bind_default().bind((VideoOverlay_module_default()));
var VideoOverlay = function(_a) {
    var text = _a.text;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: cx("container"),
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: cx("text"),
            children: text
        })
    });
};
/* harmony default export */ const VideoOverlay_VideoOverlay = (/*#__PURE__*/external_react_default().memo(VideoOverlay));

;// CONCATENATED MODULE: ./components/atoms/CameraVideo/CameraVideo.tsx





var CameraVideo_cx = bind_default().bind((CameraVideo_module_default()));
var CameraVideo = function() {
    var _a = useCameraVideo(), videoRef = _a.videoRef, isLoading = _a.isLoading, errorMessage = _a.errorMessage, cameraNum = _a.cameraNum;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: CameraVideo_cx("container"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("video", {
                ref: videoRef,
                className: CameraVideo_cx("video")
            }),
            typeof cameraNum === "number" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: CameraVideo_cx("title"),
                children: [
                    cameraNum,
                    "\uBC88 \uCE74\uBA54\uB77C"
                ]
            }),
            isLoading && /*#__PURE__*/ jsx_runtime_.jsx(VideoOverlay_VideoOverlay, {
                text: "\uC811\uADFC \uAD8C\uD55C\uC744 \uD5C8\uC6A9\uD574\uC8FC\uC138\uC694"
            }),
            !isLoading && errorMessage && /*#__PURE__*/ jsx_runtime_.jsx(VideoOverlay_VideoOverlay, {
                text: errorMessage
            })
        ]
    });
};
/* harmony default export */ const CameraVideo_CameraVideo = (CameraVideo);

// EXTERNAL MODULE: ./components/organisms/CameraPlayer/CameraPlayer.module.scss
var CameraPlayer_module = __webpack_require__(3160);
var CameraPlayer_module_default = /*#__PURE__*/__webpack_require__.n(CameraPlayer_module);
;// CONCATENATED MODULE: ./components/organisms/CameraPlayer/CameraPlayer.tsx




var CameraPlayer_cx = bind_default().bind((CameraPlayer_module_default()));
var CameraPlayer = function() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: CameraPlayer_cx("container"),
        children: /*#__PURE__*/ jsx_runtime_.jsx(CameraVideo_CameraVideo, {})
    });
};
/* harmony default export */ const CameraPlayer_CameraPlayer = (CameraPlayer);

// EXTERNAL MODULE: ./pages/camera/[id]/CameraPage.module.scss
var CameraPage_module = __webpack_require__(8896);
var CameraPage_module_default = /*#__PURE__*/__webpack_require__.n(CameraPage_module);
// EXTERNAL MODULE: ./components/atoms/Camera/Camera.tsx
var Camera = __webpack_require__(9068);
// EXTERNAL MODULE: ./components/organisms/CameraNavigation/CameraNavigation.module.scss
var CameraNavigation_module = __webpack_require__(1997);
var CameraNavigation_module_default = /*#__PURE__*/__webpack_require__.n(CameraNavigation_module);
// EXTERNAL MODULE: ./store/modules/camerasSlice.ts
var camerasSlice = __webpack_require__(4333);
;// CONCATENATED MODULE: ./components/organisms/CameraNavigation/useCameraNavigation.ts
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




var useCameraNavigation = function() {
    var cameras = (0,external_react_redux_namespaceObject.useSelector)(camerasSlice/* camerasSelector */.DH);
    var currentCamera = (0,external_react_redux_namespaceObject.useSelector)(currentCameraSlice/* currentCameraSelector */.SK);
    var camerasWithWhetherCurrent = (0,external_react_.useMemo)(function() {
        return cameras.map(function(camera) {
            return __assign(__assign({}, camera), {
                isCurrentCamera: camera.id === (currentCamera === null || currentCamera === void 0 ? void 0 : currentCamera.id)
            });
        });
    }, [
        cameras,
        currentCamera
    ]);
    return {
        cameras: camerasWithWhetherCurrent
    };
};

;// CONCATENATED MODULE: ./components/organisms/CameraNavigation/CameraNavigation.tsx





var CameraNavigation_cx = bind_default().bind((CameraNavigation_module_default()));
var CameraNavigation = function() {
    var cameras = useCameraNavigation().cameras;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: CameraNavigation_cx("container"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: CameraNavigation_cx("title"),
                children: "\uB2E4\uB978 \uCE74\uBA54\uB77C \uD655\uC778\uD558\uAE30"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: CameraNavigation_cx("cameras"),
                children: cameras.map(function(camera) {
                    return /*#__PURE__*/ jsx_runtime_.jsx(Camera/* default */.Z, {
                        id: camera.id,
                        num: camera.num,
                        image: camera.image,
                        className: CameraNavigation_cx({
                            "current-camera": camera.isCurrentCamera
                        })
                    }, camera.id);
                })
            })
        ]
    });
};
/* harmony default export */ const CameraNavigation_CameraNavigation = (CameraNavigation);

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./queries/useCameraQuery.ts
var useCameraQuery = __webpack_require__(6524);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(1175);
// EXTERNAL MODULE: ./components/wrappers/ErrorBoundary.tsx
var ErrorBoundary = __webpack_require__(1811);
;// CONCATENATED MODULE: ./components/wrappers/HOC/WithErrorBoundary.tsx



function WithErrorBoundary(WrappedComponent, OnErrorComponent) {
    return function WithErrorBoundaryComponent(props) {
        if (props.errorCode) {
            return /*#__PURE__*/ jsx_runtime_.jsx(OnErrorComponent, {
                errorCode: props.errorCode
            });
        }
        return /*#__PURE__*/ jsx_runtime_.jsx(ErrorBoundary/* default */.Z, {
            fallback: /*#__PURE__*/ jsx_runtime_.jsx(OnErrorComponent, {}),
            children: /*#__PURE__*/ jsx_runtime_.jsx(WrappedComponent, {
                ...props
            })
        });
    };
}
/* harmony default export */ const HOC_WithErrorBoundary = (WithErrorBoundary);

// EXTERNAL MODULE: ./components/atoms/ErrorFallback/ErrorFallback.tsx
var ErrorFallback = __webpack_require__(2798);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./pages/camera/[id]/index.tsx

var _id_awaiter = undefined && undefined.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _id_generator = undefined && undefined.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};














var _id_cx = bind_default().bind((CameraPage_module_default()));
var CameraPage = function() {
    useCameraPage();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: _id_cx("container"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CameraPlayer_CameraPlayer, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(CameraNavigation_CameraNavigation, {})
        ]
    });
};
var useCameraPage = function() {
    var dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
    var query = (0,router_namespaceObject.useRouter)().query;
    var id = query.id;
    var data = (0,external_react_query_.useQuery)([
        "camera",
        id
    ], function() {
        return getCameraQuery(id);
    }).data;
    var cameras = (0,external_react_query_.useQuery)("cameras", useCameraQuery/* getCameras */.s).data;
    (0,external_react_.useEffect)(function() {
        dispatch((0,currentCameraSlice/* setCurrentCamera */._n)(data));
        dispatch((0,camerasSlice/* setCameras */.oe)(cameras));
    }, [
        data,
        dispatch
    ]);
};
var getCameraQuery = function(id) {
    if (!id) return null;
    return (0,useCameraQuery/* getCamera */.b)(+id);
};
var getServerSideProps = function(context) {
    return _id_awaiter(void 0, void 0, void 0, function() {
        var id, queryClient, error_1;
        return _id_generator(this, function(_a) {
            switch(_a.label){
                case 0:
                    id = context.query.id;
                    queryClient = new external_react_query_.QueryClient();
                    _a.label = 1;
                case 1:
                    _a.trys.push([
                        1,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4 /*yield*/ ,
                        queryClient.fetchQuery([
                            "camera",
                            id
                        ], function() {
                            return getCameraQuery(id);
                        })
                    ];
                case 2:
                    _a.sent();
                    //used fetchQuery instead of prefetchQuery to catch fetching errors
                    return [
                        2 /*return*/ ,
                        {
                            props: {
                                dehydratedState: (0,external_react_query_.dehydrate)(queryClient)
                            }
                        }
                    ];
                case 3:
                    error_1 = _a.sent();
                    if (!external_axios_default().isAxiosError(error_1) || !error_1.response) {
                        return [
                            2 /*return*/ ,
                            {
                                props: {}
                            }
                        ];
                    }
                    return [
                        2 /*return*/ ,
                        {
                            props: {
                                errorCode: error_1.response.status
                            }
                        }
                    ];
                case 4:
                    return [
                        2 /*return*/ 
                    ];
            }
        });
    });
};
var OnError = function(_a) {
    var errorCode = _a.errorCode;
    var errorMessages = {
        403: "\uD574\uB2F9 \uCE74\uBA54\uB77C\uC5D0 \uC811\uADFC \uAD8C\uD55C\uC774 \uC5C6\uC2B5\uB2C8\uB2E4",
        404: "\uD574\uB2F9 \uCE74\uBA54\uB77C\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(ErrorFallback/* default */.Z, {
        errorMessages: errorMessages,
        errorCode: errorCode
    });
};
/* harmony default export */ const _id_ = (HOC_WithErrorBoundary(CameraPage, OnError));


/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

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

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,675,668,948], () => (__webpack_exec__(6706)));
module.exports = __webpack_exports__;

})();