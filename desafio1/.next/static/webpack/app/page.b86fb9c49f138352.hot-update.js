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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _player_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.module.css */ \"(app-pages-browser)/./app/Home/components/player.module.css\");\n/* harmony import */ var _player_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_player_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_images_album_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/album.png */ \"(app-pages-browser)/./app/Home/assets/images/album.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Player = function(param) {\n    var songs = param.songs;\n    _s();\n    var _React_useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"player_playing__iuDJ_\"), 2), play = _React_useState[0], setPlay = _React_useState[1];\n    var Played = function() {\n        if (play === \"player_playing__iuDJ_\") setPlay(\"\");\n        else setPlay(\"player_playing__iuDJ_\");\n    };\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), currentSongIndex = _useState[0], setCurrentSongIndex = _useState[1];\n    var audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var playAudio = function() {\n        if (audioRef.current) {\n            audioRef.current.play();\n        }\n    };\n    var pauseAudio = function() {\n        if (audioRef.current) {\n            audioRef.current.pause();\n        }\n    };\n    // if(audioRef.current){\n    //     const total = audioRef.current.duration;\n    //     const now = audioRef.current.currentTime;\n    // }\n    var playNextSong = function() {\n        setCurrentSongIndex(function(prevIndex) {\n            return prevIndex === songs.length - 1 ? 0 : prevIndex + 1;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().card) + \" card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().informations),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().imageCard) + \" image-card\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            alt: \"img-Album\",\n                            src: _assets_images_album_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().titleCard) + \" title-card\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Acorda Devinho\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Banda Rocketseat\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().controls),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" fas fa-backward\",\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        onClick: function() {\n                            Played();\n                            playAudio;\n                        },\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" \" + (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().play) + \" fas fa-play \" + play,\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        onClick: pauseAudio,\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" \" + (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().pause) + \" fas fa-pause \" + play,\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" fas fa-forward\",\n                        onClick: playNextSong,\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" fas fa-folder-open\",\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().player),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                    src: songs[currentSongIndex],\n                    ref: audioRef\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().timeContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().progressBar),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().progress)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().time),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"0:00\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, _this);\n};\n_s(Player, \"KrszBgFADZx3mNGPL6cD5dUoYPU=\");\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Ib21lL2NvbXBvbmVudHMvUGxheWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRWdEO0FBQ1I7QUFDVDtBQUNjO0FBTTdDLElBQU1NLFNBQWdDO1FBQUdDLGNBQUFBOztJQUNyQyxJQUF3QlAsa0JBQUFBLCtEQUFBQSxDQUFBQSxxREFBYyxDQUFTLDhCQUF4Q1EsT0FBaUJSLG9CQUFYUyxVQUFXVDtJQUd4QixJQUFNVSxTQUFTO1FBQ1gsSUFBR0YsU0FBUyx5QkFDUkMsUUFBUTthQUVSQSxRQUFRO0lBQ2hCO0lBRUEsSUFBZ0RSLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxRQUFsRFUsbUJBQXlDVixjQUF2Qlcsc0JBQXVCWDtJQUNoRCxJQUFNWSxXQUFXWCw2Q0FBTUEsQ0FBbUI7SUFFMUMsSUFBTVksWUFBWTtRQUNkLElBQUlELFNBQVNFLE9BQU8sRUFBQztZQUNqQkYsU0FBU0UsT0FBTyxDQUFDUCxJQUFJO1FBQ3pCO0lBQ0o7SUFFQSxJQUFNUSxhQUFhO1FBQ2YsSUFBSUgsU0FBU0UsT0FBTyxFQUFDO1lBQ2pCRixTQUFTRSxPQUFPLENBQUNFLEtBQUs7UUFDMUI7SUFDSjtJQUVBLHdCQUF3QjtJQUN4QiwrQ0FBK0M7SUFDL0MsZ0RBQWdEO0lBQ2hELElBQUk7SUFFSixJQUFNQyxlQUFlO1FBQ2pCTixvQkFBb0IsU0FBQ087bUJBQ25CQSxjQUFjWixNQUFNYSxNQUFNLEdBQUcsSUFBSSxJQUFJRCxZQUFZOztJQUVyRDtJQUVGLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFXbkIsZ0VBQVUsR0FBRzs7MEJBQ3pCLDhEQUFDa0I7Z0JBQUlDLFdBQVduQix3RUFBa0I7O2tDQUM5Qiw4REFBQ2tCO3dCQUFJQyxXQUFXbkIscUVBQWUsR0FBRztrQ0FDOUIsNEVBQUNDLGtEQUFLQTs0QkFBQ3NCLEtBQUk7NEJBQVlDLEtBQUt0QixnRUFBR0E7Ozs7Ozs7Ozs7O2tDQUVuQyw4REFBQ2dCO3dCQUFJQyxXQUFXbkIscUVBQWUsR0FBRzs7MENBQzlCLDhEQUFDMEI7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0M7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJWCw4REFBQ1Q7Z0JBQUlDLFdBQVduQixvRUFBYzs7a0NBQzFCLDhEQUFDNkI7d0JBQUVWLFdBQVduQiwrREFBUyxHQUFHO3dCQUFvQitCLGVBQVk7Ozs7OztrQ0FDMUQsOERBQUNGO3dCQUFFRyxTQUFTOzRCQUFPekI7NEJBQVVJO3dCQUFVO3dCQUFHUSxXQUFXbkIsK0RBQVMsR0FBRyxNQUFNQSxnRUFBVSxHQUFHLGtCQUFrQks7d0JBQU0wQixlQUFZOzs7Ozs7a0NBQ3hILDhEQUFDRjt3QkFBRUcsU0FBU25CO3dCQUFZTSxXQUFXbkIsK0RBQVMsR0FBRyxNQUFNQSxpRUFBVyxHQUFHLG1CQUFtQks7d0JBQU0wQixlQUFZOzs7Ozs7a0NBQ3hHLDhEQUFDRjt3QkFBRVYsV0FBV25CLCtEQUFTLEdBQUc7d0JBQW1CZ0MsU0FBU2pCO3dCQUFjZ0IsZUFBWTs7Ozs7O2tDQUNoRiw4REFBQ0Y7d0JBQUVWLFdBQVduQiwrREFBUyxHQUFHO3dCQUF1QitCLGVBQVk7Ozs7Ozs7Ozs7OzswQkFHakUsOERBQUNiO2dCQUFJQyxXQUFXbkIsa0VBQVk7MEJBQ3hCLDRFQUFDa0M7b0JBQU9WLEtBQUtwQixLQUFLLENBQUNJLGlCQUFpQjtvQkFBRTJCLEtBQUt6Qjs7Ozs7Ozs7Ozs7MEJBRy9DLDhEQUFDUTtnQkFBSUMsV0FBV25CLHlFQUFtQjs7a0NBQy9CLDhEQUFDa0I7d0JBQUlDLFdBQVduQix1RUFBaUI7a0NBQzdCLDRFQUFDa0I7NEJBQUlDLFdBQVduQixvRUFBYzs7Ozs7Ozs7Ozs7a0NBRWxDLDhEQUFDa0I7d0JBQUlDLFdBQVduQixnRUFBVTs7MENBQ3RCLDhEQUFDd0M7MENBQU07Ozs7OzswQ0FDUCw4REFBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JCO0dBeEVNckM7S0FBQUE7QUEwRU4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0hvbWUvY29tcG9uZW50cy9QbGF5ZXIudHN4PzEyYzUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vcGxheWVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBpbTEgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9hbGJ1bS5wbmcnO1xyXG5cclxuaW50ZXJmYWNlIFBsYXllclByb3BzIHtcclxuICBzb25nczogc3RyaW5nW107XHJcbn1cclxuXHJcbmNvbnN0IFBsYXllcjogUmVhY3QuRkM8UGxheWVyUHJvcHM+ID0gKHsgc29uZ3MgfSkgPT4ge1xyXG4gICAgY29uc3QgW3BsYXksIHNldFBsYXldID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPigncGxheWVyX3BsYXlpbmdfX2l1REpfJyk7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBQbGF5ZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYocGxheSA9PT0gJ3BsYXllcl9wbGF5aW5nX19pdURKXycpXHJcbiAgICAgICAgICAgIHNldFBsYXkoJycpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2V0UGxheSgncGxheWVyX3BsYXlpbmdfX2l1REpfJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFtjdXJyZW50U29uZ0luZGV4LCBzZXRDdXJyZW50U29uZ0luZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudD4obnVsbCk7XHJcbiAgICBcclxuICAgIGNvbnN0IHBsYXlBdWRpbyA9ICgpID0+IHtcclxuICAgICAgICBpZiAoYXVkaW9SZWYuY3VycmVudCl7XHJcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXVzZUF1ZGlvID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChhdWRpb1JlZi5jdXJyZW50KXtcclxuICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudC5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBpZihhdWRpb1JlZi5jdXJyZW50KXtcclxuICAgIC8vICAgICBjb25zdCB0b3RhbCA9IGF1ZGlvUmVmLmN1cnJlbnQuZHVyYXRpb247XHJcbiAgICAvLyAgICAgY29uc3Qgbm93ID0gYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZTtcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgY29uc3QgcGxheU5leHRTb25nID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEN1cnJlbnRTb25nSW5kZXgoKHByZXZJbmRleCkgPT5cclxuICAgICAgICAgIHByZXZJbmRleCA9PT0gc29uZ3MubGVuZ3RoIC0gMSA/IDAgOiBwcmV2SW5kZXggKyAxXHJcbiAgICAgICAgKTtcclxuICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcmQgKyBcIiBjYXJkXCJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW5mb3JtYXRpb25zfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbWFnZUNhcmQgKyBcIiBpbWFnZS1jYXJkXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBhbHQ9J2ltZy1BbGJ1bScgc3JjPXtpbTF9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50aXRsZUNhcmQgKyBcIiB0aXRsZS1jYXJkXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5BY29yZGEgRGV2aW5obzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+QmFuZGEgUm9ja2V0c2VhdDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250cm9sc30+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e3N0eWxlLmJ0biArIFwiIGZhcyBmYS1iYWNrd2FyZFwifSBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8aSBvbkNsaWNrPXsoKSA9PiB7UGxheWVkKCk7IHBsYXlBdWRpbzt9fSBjbGFzc05hbWU9e3N0eWxlLmJ0biArIFwiIFwiICsgc3R5bGUucGxheSArIFwiIGZhcyBmYS1wbGF5IFwiICsgcGxheX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGkgb25DbGljaz17cGF1c2VBdWRpb30gY2xhc3NOYW1lPXtzdHlsZS5idG4gKyBcIiBcIiArIHN0eWxlLnBhdXNlICsgXCIgZmFzIGZhLXBhdXNlIFwiICsgcGxheX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtzdHlsZS5idG4gKyBcIiBmYXMgZmEtZm9yd2FyZFwifSBvbkNsaWNrPXtwbGF5TmV4dFNvbmd9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17c3R5bGUuYnRuICsgXCIgZmFzIGZhLWZvbGRlci1vcGVuXCJ9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wbGF5ZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGF1ZGlvICBzcmM9e3NvbmdzW2N1cnJlbnRTb25nSW5kZXhdfSByZWY9e2F1ZGlvUmVmfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50aW1lQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9ncmVzc0Jhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByb2dyZXNzfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRpbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuID4wOjAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInN0eWxlIiwiSW1hZ2UiLCJpbTEiLCJQbGF5ZXIiLCJzb25ncyIsInBsYXkiLCJzZXRQbGF5IiwiUGxheWVkIiwiY3VycmVudFNvbmdJbmRleCIsInNldEN1cnJlbnRTb25nSW5kZXgiLCJhdWRpb1JlZiIsInBsYXlBdWRpbyIsImN1cnJlbnQiLCJwYXVzZUF1ZGlvIiwicGF1c2UiLCJwbGF5TmV4dFNvbmciLCJwcmV2SW5kZXgiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJkIiwiaW5mb3JtYXRpb25zIiwiaW1hZ2VDYXJkIiwiYWx0Iiwic3JjIiwidGl0bGVDYXJkIiwiaDMiLCJwIiwiY29udHJvbHMiLCJpIiwiYnRuIiwiYXJpYS1oaWRkZW4iLCJvbkNsaWNrIiwicGxheWVyIiwiYXVkaW8iLCJyZWYiLCJ0aW1lQ29udGFpbmVyIiwicHJvZ3Jlc3NCYXIiLCJwcm9ncmVzcyIsInRpbWUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Home/components/Player.tsx\n"));

/***/ })

});