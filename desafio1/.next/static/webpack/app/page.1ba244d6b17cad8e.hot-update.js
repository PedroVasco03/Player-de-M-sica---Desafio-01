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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _player_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.module.css */ \"(app-pages-browser)/./app/Home/components/player.module.css\");\n/* harmony import */ var _player_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_player_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_images_album_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/album.png */ \"(app-pages-browser)/./app/Home/assets/images/album.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Player = function(param) {\n    var songs = param.songs;\n    _s();\n    var _React_useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"player_playing__iuDJ_\"), 2), play = _React_useState[0], setPlay = _React_useState[1];\n    var Played = function() {\n        if (play === \"player_playing__iuDJ_\") setPlay(\"\");\n        else setPlay(\"player_playing__iuDJ_\");\n    };\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), currentSongIndex = _useState[0], setCurrentSongIndex = _useState[1];\n    var audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), duration = _useState1[0], setDuration = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), title = _useState2[0], setTitle = _useState2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var audioElement = audioRef.current;\n        var handleLoadedMetadata = function() {\n            setDuration(audioElement.duration);\n            setTitle(audioElement.tit);\n        };\n    });\n    var playAudio = function() {\n        if (audioRef.current) {\n            audioRef.current.play();\n        }\n    };\n    var pauseAudio = function() {\n        if (audioRef.current) {\n            audioRef.current.pause();\n        }\n    };\n    // if(audioRef.current){\n    //     const total = audioRef.current.duration;\n    //     const now = audioRef.current.currentTime;\n    // }\n    var playNextSong = function() {\n        setCurrentSongIndex(function(prevIndex) {\n            return prevIndex === songs.length - 1 ? 0 : prevIndex + 1;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().card) + \" card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().informations),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().imageCard) + \" image-card\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            alt: \"img-Album\",\n                            src: _assets_images_album_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().titleCard) + \" title-card\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Acorda Devinho\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Banda Rocketseat\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().controls),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" fas fa-backward\",\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        onClick: function() {\n                            Played();\n                            playAudio();\n                        },\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" \" + (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().play) + \" fas fa-play \" + play,\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        onClick: function() {\n                            Played();\n                            pauseAudio();\n                        },\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" \" + (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().pause) + \" fas fa-pause \" + play,\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" fas fa-forward\",\n                        onClick: playNextSong,\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" fas fa-folder-open\",\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().player),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                    src: songs[currentSongIndex],\n                    ref: audioRef\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().timeContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().progressBar),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().progress)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().time),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"0:00\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, _this);\n};\n_s(Player, \"RZzePBxEl9zCQteKXnadLJb3P9g=\");\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Ib21lL2NvbXBvbmVudHMvUGxheWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRTJEO0FBQ25CO0FBQ1Q7QUFDYztBQU03QyxJQUFNTyxTQUFnQztRQUFHQyxjQUFBQTs7SUFDckMsSUFBd0JSLGtCQUFBQSwrREFBQUEsQ0FBQUEscURBQWMsQ0FBUyw4QkFBeENTLE9BQWlCVCxvQkFBWFUsVUFBV1Y7SUFFeEIsSUFBTVcsU0FBUztRQUNYLElBQUdGLFNBQVMseUJBQ1JDLFFBQVE7YUFFUkEsUUFBUTtJQUNoQjtJQUVBLElBQWdEVCxZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsUUFBbERXLG1CQUF5Q1gsY0FBdkJZLHNCQUF1Qlo7SUFDaEQsSUFBTWEsV0FBV1osNkNBQU1BLENBQW1CO0lBQzFDLElBQWdDRCxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsV0FBbENjLFdBQXlCZCxlQUFmZSxjQUFlZjtJQUNoQyxJQUEwQkEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFNBQTVCZ0IsUUFBbUJoQixlQUFaaUIsV0FBWWpCO0lBRTFCRSxnREFBU0EsQ0FBRTtRQUNQLElBQU1nQixlQUFlTCxTQUFTTSxPQUFPO1FBRXJDLElBQU1DLHVCQUF1QjtZQUN6QkwsWUFBWUcsYUFBYUosUUFBUTtZQUNqQ0csU0FBU0MsYUFBYUcsR0FBRztRQUM3QjtJQUNKO0lBRUEsSUFBTUMsWUFBWTtRQUNkLElBQUlULFNBQVNNLE9BQU8sRUFBQztZQUNqQk4sU0FBU00sT0FBTyxDQUFDWCxJQUFJO1FBQ3pCO0lBQ0o7SUFFQSxJQUFNZSxhQUFhO1FBQ2YsSUFBSVYsU0FBU00sT0FBTyxFQUFDO1lBQ2pCTixTQUFTTSxPQUFPLENBQUNLLEtBQUs7UUFDMUI7SUFDSjtJQUVBLHdCQUF3QjtJQUN4QiwrQ0FBK0M7SUFDL0MsZ0RBQWdEO0lBQ2hELElBQUk7SUFFSixJQUFNQyxlQUFlO1FBQ2pCYixvQkFBb0IsU0FBQ2M7bUJBQ25CQSxjQUFjbkIsTUFBTW9CLE1BQU0sR0FBRyxJQUFJLElBQUlELFlBQVk7O0lBRXJEO0lBRUYscUJBQ0ksOERBQUNFO1FBQUlDLFdBQVcxQixnRUFBVSxHQUFHOzswQkFDekIsOERBQUN5QjtnQkFBSUMsV0FBVzFCLHdFQUFrQjs7a0NBQzlCLDhEQUFDeUI7d0JBQUlDLFdBQVcxQixxRUFBZSxHQUFHO2tDQUM5Qiw0RUFBQ0Msa0RBQUtBOzRCQUFDNkIsS0FBSTs0QkFBWUMsS0FBSzdCLGdFQUFHQTs7Ozs7Ozs7Ozs7a0NBRW5DLDhEQUFDdUI7d0JBQUlDLFdBQVcxQixxRUFBZSxHQUFHOzswQ0FDOUIsOERBQUNpQzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQzswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlYLDhEQUFDVDtnQkFBSUMsV0FBVzFCLG9FQUFjOztrQ0FDMUIsOERBQUNvQzt3QkFBRVYsV0FBVzFCLCtEQUFTLEdBQUc7d0JBQW9Cc0MsZUFBWTs7Ozs7O2tDQUMxRCw4REFBQ0Y7d0JBQUVHLFNBQVM7NEJBQU9oQzs0QkFBVVk7d0JBQVk7d0JBQUdPLFdBQVcxQiwrREFBUyxHQUFHLE1BQU1BLGdFQUFVLEdBQUcsa0JBQWtCSzt3QkFBTWlDLGVBQVk7Ozs7OztrQ0FDMUgsOERBQUNGO3dCQUFFRyxTQUFTOzRCQUFPaEM7NEJBQVVhO3dCQUFhO3dCQUFHTSxXQUFXMUIsK0RBQVMsR0FBRyxNQUFNQSxpRUFBVyxHQUFHLG1CQUFtQks7d0JBQU1pQyxlQUFZOzs7Ozs7a0NBQzdILDhEQUFDRjt3QkFBRVYsV0FBVzFCLCtEQUFTLEdBQUc7d0JBQW1CdUMsU0FBU2pCO3dCQUFjZ0IsZUFBWTs7Ozs7O2tDQUNoRiw4REFBQ0Y7d0JBQUVWLFdBQVcxQiwrREFBUyxHQUFHO3dCQUF1QnNDLGVBQVk7Ozs7Ozs7Ozs7OzswQkFHakUsOERBQUNiO2dCQUFJQyxXQUFXMUIsa0VBQVk7MEJBQ3hCLDRFQUFDeUM7b0JBQU9WLEtBQUszQixLQUFLLENBQUNJLGlCQUFpQjtvQkFBRWtDLEtBQUtoQzs7Ozs7Ozs7Ozs7MEJBRy9DLDhEQUFDZTtnQkFBSUMsV0FBVzFCLHlFQUFtQjs7a0NBQy9CLDhEQUFDeUI7d0JBQUlDLFdBQVcxQix1RUFBaUI7a0NBQzdCLDRFQUFDeUI7NEJBQUlDLFdBQVcxQixvRUFBYzs7Ozs7Ozs7Ozs7a0NBRWxDLDhEQUFDeUI7d0JBQUlDLFdBQVcxQixnRUFBVTs7MENBQ3RCLDhEQUFDK0M7MENBQU07Ozs7OzswQ0FDUCw4REFBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JCO0dBbEZNNUM7S0FBQUE7QUFvRk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0hvbWUvY29tcG9uZW50cy9QbGF5ZXIudHN4PzEyYzUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9wbGF5ZXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IGltMSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2FsYnVtLnBuZyc7XHJcblxyXG5pbnRlcmZhY2UgUGxheWVyUHJvcHMge1xyXG4gIHNvbmdzOiBzdHJpbmdbXTtcclxufVxyXG5cclxuY29uc3QgUGxheWVyOiBSZWFjdC5GQzxQbGF5ZXJQcm9wcz4gPSAoeyBzb25ncyB9KSA9PiB7XHJcbiAgICBjb25zdCBbcGxheSwgc2V0UGxheV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCdwbGF5ZXJfcGxheWluZ19faXVESl8nKTtcclxuICAgIFxyXG4gICAgY29uc3QgUGxheWVkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHBsYXkgPT09ICdwbGF5ZXJfcGxheWluZ19faXVESl8nKVxyXG4gICAgICAgICAgICBzZXRQbGF5KCcnKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNldFBsYXkoJ3BsYXllcl9wbGF5aW5nX19pdURKXycpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBbY3VycmVudFNvbmdJbmRleCwgc2V0Q3VycmVudFNvbmdJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQ+KG51bGwpO1xyXG4gICAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGF1ZGlvRWxlbWVudCA9IGF1ZGlvUmVmLmN1cnJlbnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZUxvYWRlZE1ldGFkYXRhID0gKCkgPT57XHJcbiAgICAgICAgICAgIHNldER1cmF0aW9uKGF1ZGlvRWxlbWVudC5kdXJhdGlvbik7XHJcbiAgICAgICAgICAgIHNldFRpdGxlKGF1ZGlvRWxlbWVudC50aXQpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBwbGF5QXVkaW8gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGF1ZGlvUmVmLmN1cnJlbnQpe1xyXG4gICAgICAgICAgICBhdWRpb1JlZi5jdXJyZW50LnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGF1c2VBdWRpbyA9ICgpID0+IHtcclxuICAgICAgICBpZiAoYXVkaW9SZWYuY3VycmVudCl7XHJcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYoYXVkaW9SZWYuY3VycmVudCl7XHJcbiAgICAvLyAgICAgY29uc3QgdG90YWwgPSBhdWRpb1JlZi5jdXJyZW50LmR1cmF0aW9uO1xyXG4gICAgLy8gICAgIGNvbnN0IG5vdyA9IGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWU7XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIGNvbnN0IHBsYXlOZXh0U29uZyA9ICgpID0+IHtcclxuICAgICAgICBzZXRDdXJyZW50U29uZ0luZGV4KChwcmV2SW5kZXgpID0+XHJcbiAgICAgICAgICBwcmV2SW5kZXggPT09IHNvbmdzLmxlbmd0aCAtIDEgPyAwIDogcHJldkluZGV4ICsgMVxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJkICsgXCIgY2FyZFwifT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmluZm9ybWF0aW9uc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW1hZ2VDYXJkICsgXCIgaW1hZ2UtY2FyZFwifT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PSdpbWctQWxidW0nIHNyYz17aW0xfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGl0bGVDYXJkICsgXCIgdGl0bGUtY2FyZFwifT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+QWNvcmRhIERldmluaG88L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkJhbmRhIFJvY2tldHNlYXQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udHJvbHN9PlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtzdHlsZS5idG4gKyBcIiBmYXMgZmEtYmFja3dhcmRcIn0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGkgb25DbGljaz17KCkgPT4ge1BsYXllZCgpOyBwbGF5QXVkaW8oKTt9fSBjbGFzc05hbWU9e3N0eWxlLmJ0biArIFwiIFwiICsgc3R5bGUucGxheSArIFwiIGZhcyBmYS1wbGF5IFwiICsgcGxheX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGkgb25DbGljaz17KCkgPT4ge1BsYXllZCgpOyBwYXVzZUF1ZGlvKCk7fX0gY2xhc3NOYW1lPXtzdHlsZS5idG4gKyBcIiBcIiArIHN0eWxlLnBhdXNlICsgXCIgZmFzIGZhLXBhdXNlIFwiICsgcGxheX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtzdHlsZS5idG4gKyBcIiBmYXMgZmEtZm9yd2FyZFwifSBvbkNsaWNrPXtwbGF5TmV4dFNvbmd9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17c3R5bGUuYnRuICsgXCIgZmFzIGZhLWZvbGRlci1vcGVuXCJ9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wbGF5ZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGF1ZGlvICBzcmM9e3NvbmdzW2N1cnJlbnRTb25nSW5kZXhdfSByZWY9e2F1ZGlvUmVmfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50aW1lQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9ncmVzc0Jhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByb2dyZXNzfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRpbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuID4wOjAwPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsInN0eWxlIiwiSW1hZ2UiLCJpbTEiLCJQbGF5ZXIiLCJzb25ncyIsInBsYXkiLCJzZXRQbGF5IiwiUGxheWVkIiwiY3VycmVudFNvbmdJbmRleCIsInNldEN1cnJlbnRTb25nSW5kZXgiLCJhdWRpb1JlZiIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJ0aXRsZSIsInNldFRpdGxlIiwiYXVkaW9FbGVtZW50IiwiY3VycmVudCIsImhhbmRsZUxvYWRlZE1ldGFkYXRhIiwidGl0IiwicGxheUF1ZGlvIiwicGF1c2VBdWRpbyIsInBhdXNlIiwicGxheU5leHRTb25nIiwicHJldkluZGV4IiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZCIsImluZm9ybWF0aW9ucyIsImltYWdlQ2FyZCIsImFsdCIsInNyYyIsInRpdGxlQ2FyZCIsImgzIiwicCIsImNvbnRyb2xzIiwiaSIsImJ0biIsImFyaWEtaGlkZGVuIiwib25DbGljayIsInBsYXllciIsImF1ZGlvIiwicmVmIiwidGltZUNvbnRhaW5lciIsInByb2dyZXNzQmFyIiwicHJvZ3Jlc3MiLCJ0aW1lIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Home/components/Player.tsx\n"));

/***/ })

});