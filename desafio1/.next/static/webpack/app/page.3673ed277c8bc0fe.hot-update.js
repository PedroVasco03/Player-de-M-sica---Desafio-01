"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/Home/components/Player.tsx":
/*!****************************************!*\
  !*** ./app/Home/components/Player.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _player_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.module.css */ \"(app-pages-browser)/./app/Home/components/player.module.css\");\n/* harmony import */ var _player_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_player_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_images_album_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/album.png */ \"(app-pages-browser)/./app/Home/assets/images/album.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Player = function(param) {\n    var songs = param.songs;\n    _s();\n    var _React_useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"player_playing__iuDJ_\"), 2), play = _React_useState[0], setPlay = _React_useState[1];\n    var Played = function() {\n        if (play === \"player_playing__iuDJ_\") setPlay(\"\");\n        else setPlay(\"player_playing__iuDJ_\");\n    };\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), currentSongIndex = _useState[0], setCurrentSongIndex = _useState[1];\n    var audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var playAudio = function() {\n        if (audioRef.current) {\n            audioRef.current.play();\n        }\n    };\n    var pauseAudio = function() {\n        if (audioRef.current) {\n            audioRef.current.pause();\n        }\n    };\n    if (audioRef.current) {\n        var _$total = audioRef.current.duration;\n        var now = audioRef.current.currentTime;\n        getelem;\n    }\n    var playNextSong = function() {\n        setCurrentSongIndex(function(prevIndex) {\n            return prevIndex === songs.length - 1 ? 0 : prevIndex + 1;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().card) + \" card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().informations),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().imageCard) + \" image-card\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            alt: \"img-Album\",\n                            src: _assets_images_album_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().titleCard) + \" title-card\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Acorda Devinho\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Banda Rocketseat\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().controls),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" fas fa-backward\",\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        onClick: playAudio,\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" \" + (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().play) + \" fas fa-play \" + play,\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        onClick: pauseAudio,\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" \" + (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().pause) + \" fas fa-pause \" + play,\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" fas fa-forward\",\n                        onClick: playNextSong,\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" fas fa-folder-open\",\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().player),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                    src: songs[currentSongIndex],\n                    ref: audioRef\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().timeContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().progressBar),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().progress)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().time),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"0:00\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: total\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, _this);\n};\n_s(Player, \"KrszBgFADZx3mNGPL6cD5dUoYPU=\");\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Ib21lL2NvbXBvbmVudHMvUGxheWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRWdEO0FBQ1I7QUFDVDtBQUNjO0FBTTdDLElBQU1NLFNBQWdDO1FBQUdDLGNBQUFBOztJQUNyQyxJQUF3QlAsa0JBQUFBLCtEQUFBQSxDQUFBQSxxREFBYyxDQUFTLDhCQUF4Q1EsT0FBaUJSLG9CQUFYUyxVQUFXVDtJQUd4QixJQUFNVSxTQUFTO1FBQ1gsSUFBR0YsU0FBUyx5QkFDUkMsUUFBUTthQUVSQSxRQUFRO0lBQ2hCO0lBRUEsSUFBZ0RSLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxRQUFsRFUsbUJBQXlDVixjQUF2Qlcsc0JBQXVCWDtJQUNoRCxJQUFNWSxXQUFXWCw2Q0FBTUEsQ0FBbUI7SUFFMUMsSUFBTVksWUFBWTtRQUNkLElBQUlELFNBQVNFLE9BQU8sRUFBQztZQUNqQkYsU0FBU0UsT0FBTyxDQUFDUCxJQUFJO1FBQ3pCO0lBQ0o7SUFFQSxJQUFNUSxhQUFhO1FBQ2YsSUFBSUgsU0FBU0UsT0FBTyxFQUFDO1lBQ2pCRixTQUFTRSxPQUFPLENBQUNFLEtBQUs7UUFDMUI7SUFDSjtJQUVBLElBQUdKLFNBQVNFLE9BQU8sRUFBQztRQUNoQixJQUFNRyxVQUFRTCxTQUFTRSxPQUFPLENBQUNJLFFBQVE7UUFDdkMsSUFBTUMsTUFBTVAsU0FBU0UsT0FBTyxDQUFDTSxXQUFXO1FBQ3hDQztJQUNKO0lBRUEsSUFBTUMsZUFBZTtRQUNqQlgsb0JBQW9CLFNBQUNZO21CQUNuQkEsY0FBY2pCLE1BQU1rQixNQUFNLEdBQUcsSUFBSSxJQUFJRCxZQUFZOztJQUVyRDtJQUVGLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFXeEIsZ0VBQVUsR0FBRzs7MEJBQ3pCLDhEQUFDdUI7Z0JBQUlDLFdBQVd4Qix3RUFBa0I7O2tDQUM5Qiw4REFBQ3VCO3dCQUFJQyxXQUFXeEIscUVBQWUsR0FBRztrQ0FDOUIsNEVBQUNDLGtEQUFLQTs0QkFBQzJCLEtBQUk7NEJBQVlDLEtBQUszQixnRUFBR0E7Ozs7Ozs7Ozs7O2tDQUVuQyw4REFBQ3FCO3dCQUFJQyxXQUFXeEIscUVBQWUsR0FBRzs7MENBQzlCLDhEQUFDK0I7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0M7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJWCw4REFBQ1Q7Z0JBQUlDLFdBQVd4QixvRUFBYzs7a0NBQzFCLDhEQUFDa0M7d0JBQUVWLFdBQVd4QiwrREFBUyxHQUFHO3dCQUFvQm9DLGVBQVk7Ozs7OztrQ0FDMUQsOERBQUNGO3dCQUFFRyxTQUFTMUI7d0JBQVdhLFdBQVd4QiwrREFBUyxHQUFHLE1BQU1BLGdFQUFVLEdBQUcsa0JBQWtCSzt3QkFBTStCLGVBQVk7Ozs7OztrQ0FDckcsOERBQUNGO3dCQUFFRyxTQUFTeEI7d0JBQVlXLFdBQVd4QiwrREFBUyxHQUFHLE1BQU1BLGlFQUFXLEdBQUcsbUJBQW1CSzt3QkFBTStCLGVBQVk7Ozs7OztrQ0FDeEcsOERBQUNGO3dCQUFFVixXQUFXeEIsK0RBQVMsR0FBRzt3QkFBbUJxQyxTQUFTakI7d0JBQWNnQixlQUFZOzs7Ozs7a0NBQ2hGLDhEQUFDRjt3QkFBRVYsV0FBV3hCLCtEQUFTLEdBQUc7d0JBQXVCb0MsZUFBWTs7Ozs7Ozs7Ozs7OzBCQUdqRSw4REFBQ2I7Z0JBQUlDLFdBQVd4QixrRUFBWTswQkFDeEIsNEVBQUN1QztvQkFBT1YsS0FBS3pCLEtBQUssQ0FBQ0ksaUJBQWlCO29CQUFFZ0MsS0FBSzlCOzs7Ozs7Ozs7OzswQkFHL0MsOERBQUNhO2dCQUFJQyxXQUFXeEIseUVBQW1COztrQ0FDL0IsOERBQUN1Qjt3QkFBSUMsV0FBV3hCLHVFQUFpQjtrQ0FDN0IsNEVBQUN1Qjs0QkFBSUMsV0FBV3hCLG9FQUFjOzs7Ozs7Ozs7OztrQ0FFbEMsOERBQUN1Qjt3QkFBSUMsV0FBV3hCLGdFQUFVOzswQ0FDdEIsOERBQUM2QzswQ0FBSzs7Ozs7OzBDQUNOLDhEQUFDQTswQ0FBTTlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0I7R0F6RU1aO0tBQUFBO0FBMkVOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Ib21lL2NvbXBvbmVudHMvUGxheWVyLnRzeD8xMmM1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuL3BsYXllci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgaW0xIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvYWxidW0ucG5nJztcclxuXHJcbmludGVyZmFjZSBQbGF5ZXJQcm9wcyB7XHJcbiAgc29uZ3M6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5jb25zdCBQbGF5ZXI6IFJlYWN0LkZDPFBsYXllclByb3BzPiA9ICh7IHNvbmdzIH0pID0+IHtcclxuICAgIGNvbnN0IFtwbGF5LCBzZXRQbGF5XSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJ3BsYXllcl9wbGF5aW5nX19pdURKXycpO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgUGxheWVkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHBsYXkgPT09ICdwbGF5ZXJfcGxheWluZ19faXVESl8nKVxyXG4gICAgICAgICAgICBzZXRQbGF5KCcnKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNldFBsYXkoJ3BsYXllcl9wbGF5aW5nX19pdURKXycpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBbY3VycmVudFNvbmdJbmRleCwgc2V0Q3VycmVudFNvbmdJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQ+KG51bGwpO1xyXG4gICAgXHJcbiAgICBjb25zdCBwbGF5QXVkaW8gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGF1ZGlvUmVmLmN1cnJlbnQpe1xyXG4gICAgICAgICAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGF1c2VBdWRpbyA9ICgpID0+IHtcclxuICAgICAgICBpZiAoYXVkaW9SZWYuY3VycmVudCl7XHJcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoYXVkaW9SZWYuY3VycmVudCl7XHJcbiAgICAgICAgY29uc3QgdG90YWwgPSBhdWRpb1JlZi5jdXJyZW50LmR1cmF0aW9uO1xyXG4gICAgICAgIGNvbnN0IG5vdyA9IGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWU7XHJcbiAgICAgICAgZ2V0ZWxlbVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBwbGF5TmV4dFNvbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Q3VycmVudFNvbmdJbmRleCgocHJldkluZGV4KSA9PlxyXG4gICAgICAgICAgcHJldkluZGV4ID09PSBzb25ncy5sZW5ndGggLSAxID8gMCA6IHByZXZJbmRleCArIDFcclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2FyZCArIFwiIGNhcmRcIn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbmZvcm1hdGlvbnN9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmltYWdlQ2FyZCArIFwiIGltYWdlLWNhcmRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGFsdD0naW1nLUFsYnVtJyBzcmM9e2ltMX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRpdGxlQ2FyZCArIFwiIHRpdGxlLWNhcmRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkFjb3JkYSBEZXZpbmhvPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5CYW5kYSBSb2NrZXRzZWF0PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRyb2xzfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17c3R5bGUuYnRuICsgXCIgZmFzIGZhLWJhY2t3YXJkXCJ9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9e3BsYXlBdWRpb30gY2xhc3NOYW1lPXtzdHlsZS5idG4gKyBcIiBcIiArIHN0eWxlLnBsYXkgKyBcIiBmYXMgZmEtcGxheSBcIiArIHBsYXl9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9e3BhdXNlQXVkaW99IGNsYXNzTmFtZT17c3R5bGUuYnRuICsgXCIgXCIgKyBzdHlsZS5wYXVzZSArIFwiIGZhcyBmYS1wYXVzZSBcIiArIHBsYXl9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17c3R5bGUuYnRuICsgXCIgZmFzIGZhLWZvcndhcmRcIn0gb25DbGljaz17cGxheU5leHRTb25nfSBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e3N0eWxlLmJ0biArIFwiIGZhcyBmYS1mb2xkZXItb3BlblwifSBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucGxheWVyfT5cclxuICAgICAgICAgICAgICAgIDxhdWRpbyAgc3JjPXtzb25nc1tjdXJyZW50U29uZ0luZGV4XX0gcmVmPXthdWRpb1JlZn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGltZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJvZ3Jlc3NCYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9ncmVzc30+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj4wOjAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0b3RhbH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInN0eWxlIiwiSW1hZ2UiLCJpbTEiLCJQbGF5ZXIiLCJzb25ncyIsInBsYXkiLCJzZXRQbGF5IiwiUGxheWVkIiwiY3VycmVudFNvbmdJbmRleCIsInNldEN1cnJlbnRTb25nSW5kZXgiLCJhdWRpb1JlZiIsInBsYXlBdWRpbyIsImN1cnJlbnQiLCJwYXVzZUF1ZGlvIiwicGF1c2UiLCJ0b3RhbCIsImR1cmF0aW9uIiwibm93IiwiY3VycmVudFRpbWUiLCJnZXRlbGVtIiwicGxheU5leHRTb25nIiwicHJldkluZGV4IiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZCIsImluZm9ybWF0aW9ucyIsImltYWdlQ2FyZCIsImFsdCIsInNyYyIsInRpdGxlQ2FyZCIsImgzIiwicCIsImNvbnRyb2xzIiwiaSIsImJ0biIsImFyaWEtaGlkZGVuIiwib25DbGljayIsInBsYXllciIsImF1ZGlvIiwicmVmIiwidGltZUNvbnRhaW5lciIsInByb2dyZXNzQmFyIiwicHJvZ3Jlc3MiLCJ0aW1lIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Home/components/Player.tsx\n"));

/***/ })

});