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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _player_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.module.css */ \"(app-pages-browser)/./app/Home/components/player.module.css\");\n/* harmony import */ var _player_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_player_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_images_album_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/album.png */ \"(app-pages-browser)/./app/Home/assets/images/album.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Player = function(param) {\n    var songs = param.songs;\n    _s();\n    var _React_useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"player_playing__iuDJ_\"), 2), play = _React_useState[0], setPlay = _React_useState[1];\n    var Played = function() {\n        if (play === \"player_playing__iuDJ_\") setPlay(\"\");\n        else setPlay(\"player_playing__iuDJ_\");\n    };\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), currentSongIndex = _useState[0], setCurrentSongIndex = _useState[1];\n    var audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), duration = _useState1[0], setDuration = _useState1[1]; // Tipo definido como `number | null`\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), title = _useState2[0], setTitle = _useState2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var audioElement = audioRef.current;\n        if (audioElement) {\n            var handleLoadedMetadata = function() {\n                setDuration(audioElement.duration); // Agora isso é válido\n                setTitle(audioElement.title || \"T\\xedtulo Desconhecido\");\n            };\n            audioElement.addEventListener(\"loadedmetadata\", handleLoadedMetadata);\n            return function() {\n                audioElement.removeEventListener(\"loadedmetadata\", handleLoadedMetadata);\n            };\n        }\n    }, []);\n    var playAudio = function() {\n        if (audioRef.current) {\n            audioRef.current.play();\n        }\n    };\n    var pauseAudio = function() {\n        if (audioRef.current) {\n            audioRef.current.pause();\n        }\n    };\n    // if(audioRef.current){\n    //     const total = audioRef.current.duration;\n    //     const now = audioRef.current.currentTime;\n    // }\n    var playNextSong = function() {\n        setCurrentSongIndex(function(prevIndex) {\n            return prevIndex === songs.length - 1 ? 0 : prevIndex + 1;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().card) + \" card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().informations),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().imageCard) + \" image-card\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            alt: \"img-Album\",\n                            src: _assets_images_album_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().titleCard) + \" title-card\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Banda Rocketseat\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().controls),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" fas fa-backward\",\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        onClick: function() {\n                            Played();\n                            playAudio();\n                        },\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" \" + (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().play) + \" fas fa-play \" + play,\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        onClick: function() {\n                            Played();\n                            pauseAudio();\n                        },\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" \" + (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().pause) + \" fas fa-pause \" + play,\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" fas fa-forward\",\n                        onClick: playNextSong,\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" fas fa-folder-open\",\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().player),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                    src: songs[currentSongIndex],\n                    ref: audioRef\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().timeContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().progressBar),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().progress)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().time),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"0:00\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: duration !== null ? \"\".concat(Math.floor(duration / 60), \":\").concat(Math.floor(duration % 60)) : \"Carregando...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, _this);\n};\n_s(Player, \"RZzePBxEl9zCQteKXnadLJb3P9g=\");\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Ib21lL2NvbXBvbmVudHMvUGxheWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRTJEO0FBQ25CO0FBQ1Q7QUFDYztBQU03QyxJQUFNTyxTQUFnQztRQUFHQyxjQUFBQTs7SUFDckMsSUFBd0JSLGtCQUFBQSwrREFBQUEsQ0FBQUEscURBQWMsQ0FBUyw4QkFBeENTLE9BQWlCVCxvQkFBWFUsVUFBV1Y7SUFFeEIsSUFBTVcsU0FBUztRQUNYLElBQUdGLFNBQVMseUJBQ1JDLFFBQVE7YUFFUkEsUUFBUTtJQUNoQjtJQUVBLElBQWdEVCxZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsUUFBbERXLG1CQUF5Q1gsY0FBdkJZLHNCQUF1Qlo7SUFDaEQsSUFBTWEsV0FBV1osNkNBQU1BLENBQW1CO0lBQzVDLElBQWdDRCxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQWdCLFdBQWpEYyxXQUF5QmQsZUFBZmUsY0FBZWYsZUFBK0IscUNBQXFDO0lBQ3BHLElBQTBCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVMsU0FBcENnQixRQUFtQmhCLGVBQVppQixXQUFZakI7SUFFeEJFLGdEQUFTQSxDQUFDO1FBQ04sSUFBTWdCLGVBQWVMLFNBQVNNLE9BQU87UUFFckMsSUFBSUQsY0FBYztZQUNoQixJQUFNRSx1QkFBdUI7Z0JBQzNCTCxZQUFZRyxhQUFhSixRQUFRLEdBQUcsc0JBQXNCO2dCQUMxREcsU0FBU0MsYUFBYUYsS0FBSyxJQUFJO1lBQ2pDO1lBRUFFLGFBQWFHLGdCQUFnQixDQUFDLGtCQUFrQkQ7WUFFaEQsT0FBTztnQkFDTEYsYUFBYUksbUJBQW1CLENBQUMsa0JBQWtCRjtZQUNyRDtRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBRVAsSUFBTUcsWUFBWTtRQUNkLElBQUlWLFNBQVNNLE9BQU8sRUFBQztZQUNqQk4sU0FBU00sT0FBTyxDQUFDWCxJQUFJO1FBQ3pCO0lBQ0o7SUFFQSxJQUFNZ0IsYUFBYTtRQUNmLElBQUlYLFNBQVNNLE9BQU8sRUFBQztZQUNqQk4sU0FBU00sT0FBTyxDQUFDTSxLQUFLO1FBQzFCO0lBQ0o7SUFFQSx3QkFBd0I7SUFDeEIsK0NBQStDO0lBQy9DLGdEQUFnRDtJQUNoRCxJQUFJO0lBRUosSUFBTUMsZUFBZTtRQUNqQmQsb0JBQW9CLFNBQUNlO21CQUNuQkEsY0FBY3BCLE1BQU1xQixNQUFNLEdBQUcsSUFBSSxJQUFJRCxZQUFZOztJQUVyRDtJQUVGLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFXM0IsZ0VBQVUsR0FBRzs7MEJBQ3pCLDhEQUFDMEI7Z0JBQUlDLFdBQVczQix3RUFBa0I7O2tDQUM5Qiw4REFBQzBCO3dCQUFJQyxXQUFXM0IscUVBQWUsR0FBRztrQ0FDOUIsNEVBQUNDLGtEQUFLQTs0QkFBQzhCLEtBQUk7NEJBQVlDLEtBQUs5QixnRUFBR0E7Ozs7Ozs7Ozs7O2tDQUVuQyw4REFBQ3dCO3dCQUFJQyxXQUFXM0IscUVBQWUsR0FBRzs7MENBQzlCLDhEQUFDa0M7MENBQUlyQjs7Ozs7OzBDQUNMLDhEQUFDc0I7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJWCw4REFBQ1Q7Z0JBQUlDLFdBQVczQixvRUFBYzs7a0NBQzFCLDhEQUFDcUM7d0JBQUVWLFdBQVczQiwrREFBUyxHQUFHO3dCQUFvQnVDLGVBQVk7Ozs7OztrQ0FDMUQsOERBQUNGO3dCQUFFRyxTQUFTOzRCQUFPakM7NEJBQVVhO3dCQUFZO3dCQUFHTyxXQUFXM0IsK0RBQVMsR0FBRyxNQUFNQSxnRUFBVSxHQUFHLGtCQUFrQks7d0JBQU1rQyxlQUFZOzs7Ozs7a0NBQzFILDhEQUFDRjt3QkFBRUcsU0FBUzs0QkFBT2pDOzRCQUFVYzt3QkFBYTt3QkFBR00sV0FBVzNCLCtEQUFTLEdBQUcsTUFBTUEsaUVBQVcsR0FBRyxtQkFBbUJLO3dCQUFNa0MsZUFBWTs7Ozs7O2tDQUM3SCw4REFBQ0Y7d0JBQUVWLFdBQVczQiwrREFBUyxHQUFHO3dCQUFtQndDLFNBQVNqQjt3QkFBY2dCLGVBQVk7Ozs7OztrQ0FDaEYsOERBQUNGO3dCQUFFVixXQUFXM0IsK0RBQVMsR0FBRzt3QkFBdUJ1QyxlQUFZOzs7Ozs7Ozs7Ozs7MEJBR2pFLDhEQUFDYjtnQkFBSUMsV0FBVzNCLGtFQUFZOzBCQUN4Qiw0RUFBQzBDO29CQUFPVixLQUFLNUIsS0FBSyxDQUFDSSxpQkFBaUI7b0JBQUVtQyxLQUFLakM7Ozs7Ozs7Ozs7OzBCQUcvQyw4REFBQ2dCO2dCQUFJQyxXQUFXM0IseUVBQW1COztrQ0FDL0IsOERBQUMwQjt3QkFBSUMsV0FBVzNCLHVFQUFpQjtrQ0FDN0IsNEVBQUMwQjs0QkFBSUMsV0FBVzNCLG9FQUFjOzs7Ozs7Ozs7OztrQ0FFbEMsOERBQUMwQjt3QkFBSUMsV0FBVzNCLGdFQUFVOzswQ0FDdEIsOERBQUNnRDswQ0FBTTs7Ozs7OzBDQUNQLDhEQUFDQTswQ0FBT3JDLGFBQWEsT0FBTyxHQUFnQ3NDLE9BQTdCQSxLQUFLQyxLQUFLLENBQUN2QyxXQUFXLEtBQUksS0FBNkIsT0FBMUJzQyxLQUFLQyxLQUFLLENBQUN2QyxXQUFXLE9BQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5RztHQTFGTVI7S0FBQUE7QUE0Rk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0hvbWUvY29tcG9uZW50cy9QbGF5ZXIudHN4PzEyYzUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9wbGF5ZXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IGltMSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2FsYnVtLnBuZyc7XHJcblxyXG5pbnRlcmZhY2UgUGxheWVyUHJvcHMge1xyXG4gIHNvbmdzOiBzdHJpbmdbXTtcclxufVxyXG5cclxuY29uc3QgUGxheWVyOiBSZWFjdC5GQzxQbGF5ZXJQcm9wcz4gPSAoeyBzb25ncyB9KSA9PiB7XHJcbiAgICBjb25zdCBbcGxheSwgc2V0UGxheV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCdwbGF5ZXJfcGxheWluZ19faXVESl8nKTtcclxuICAgIFxyXG4gICAgY29uc3QgUGxheWVkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHBsYXkgPT09ICdwbGF5ZXJfcGxheWluZ19faXVESl8nKVxyXG4gICAgICAgICAgICBzZXRQbGF5KCcnKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHNldFBsYXkoJ3BsYXllcl9wbGF5aW5nX19pdURKXycpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBbY3VycmVudFNvbmdJbmRleCwgc2V0Q3VycmVudFNvbmdJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7IC8vIFRpcG8gZGVmaW5pZG8gY29tbyBgbnVtYmVyIHwgbnVsbGBcclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXVkaW9FbGVtZW50ID0gYXVkaW9SZWYuY3VycmVudDtcclxuICAgIFxyXG4gICAgICAgIGlmIChhdWRpb0VsZW1lbnQpIHtcclxuICAgICAgICAgIGNvbnN0IGhhbmRsZUxvYWRlZE1ldGFkYXRhID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXREdXJhdGlvbihhdWRpb0VsZW1lbnQuZHVyYXRpb24pOyAvLyBBZ29yYSBpc3NvIMOpIHbDoWxpZG9cclxuICAgICAgICAgICAgc2V0VGl0bGUoYXVkaW9FbGVtZW50LnRpdGxlIHx8ICdUw610dWxvIERlc2NvbmhlY2lkbycpO1xyXG4gICAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgICAgYXVkaW9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgaGFuZGxlTG9hZGVkTWV0YWRhdGEpO1xyXG4gICAgXHJcbiAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBhdWRpb0VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZGVkbWV0YWRhdGEnLCBoYW5kbGVMb2FkZWRNZXRhZGF0YSk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IHBsYXlBdWRpbyA9ICgpID0+IHtcclxuICAgICAgICBpZiAoYXVkaW9SZWYuY3VycmVudCl7XHJcbiAgICAgICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXVzZUF1ZGlvID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChhdWRpb1JlZi5jdXJyZW50KXtcclxuICAgICAgICAgICAgYXVkaW9SZWYuY3VycmVudC5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBpZihhdWRpb1JlZi5jdXJyZW50KXtcclxuICAgIC8vICAgICBjb25zdCB0b3RhbCA9IGF1ZGlvUmVmLmN1cnJlbnQuZHVyYXRpb247XHJcbiAgICAvLyAgICAgY29uc3Qgbm93ID0gYXVkaW9SZWYuY3VycmVudC5jdXJyZW50VGltZTtcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgY29uc3QgcGxheU5leHRTb25nID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEN1cnJlbnRTb25nSW5kZXgoKHByZXZJbmRleCkgPT5cclxuICAgICAgICAgIHByZXZJbmRleCA9PT0gc29uZ3MubGVuZ3RoIC0gMSA/IDAgOiBwcmV2SW5kZXggKyAxXHJcbiAgICAgICAgKTtcclxuICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcmQgKyBcIiBjYXJkXCJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW5mb3JtYXRpb25zfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbWFnZUNhcmQgKyBcIiBpbWFnZS1jYXJkXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBhbHQ9J2ltZy1BbGJ1bScgc3JjPXtpbTF9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50aXRsZUNhcmQgKyBcIiB0aXRsZS1jYXJkXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57dGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5CYW5kYSBSb2NrZXRzZWF0PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRyb2xzfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17c3R5bGUuYnRuICsgXCIgZmFzIGZhLWJhY2t3YXJkXCJ9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9eygpID0+IHtQbGF5ZWQoKTsgcGxheUF1ZGlvKCk7fX0gY2xhc3NOYW1lPXtzdHlsZS5idG4gKyBcIiBcIiArIHN0eWxlLnBsYXkgKyBcIiBmYXMgZmEtcGxheSBcIiArIHBsYXl9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9eygpID0+IHtQbGF5ZWQoKTsgcGF1c2VBdWRpbygpO319IGNsYXNzTmFtZT17c3R5bGUuYnRuICsgXCIgXCIgKyBzdHlsZS5wYXVzZSArIFwiIGZhcyBmYS1wYXVzZSBcIiArIHBsYXl9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17c3R5bGUuYnRuICsgXCIgZmFzIGZhLWZvcndhcmRcIn0gb25DbGljaz17cGxheU5leHRTb25nfSBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e3N0eWxlLmJ0biArIFwiIGZhcyBmYS1mb2xkZXItb3BlblwifSBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucGxheWVyfT5cclxuICAgICAgICAgICAgICAgIDxhdWRpbyAgc3JjPXtzb25nc1tjdXJyZW50U29uZ0luZGV4XX0gcmVmPXthdWRpb1JlZn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGltZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJvZ3Jlc3NCYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9ncmVzc30+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiA+MDowMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiA+e2R1cmF0aW9uICE9PSBudWxsID8gYCR7TWF0aC5mbG9vcihkdXJhdGlvbiAvIDYwKX06JHtNYXRoLmZsb29yKGR1cmF0aW9uICUgNjApfWAgOiAnQ2FycmVnYW5kby4uLid9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJzdHlsZSIsIkltYWdlIiwiaW0xIiwiUGxheWVyIiwic29uZ3MiLCJwbGF5Iiwic2V0UGxheSIsIlBsYXllZCIsImN1cnJlbnRTb25nSW5kZXgiLCJzZXRDdXJyZW50U29uZ0luZGV4IiwiYXVkaW9SZWYiLCJkdXJhdGlvbiIsInNldER1cmF0aW9uIiwidGl0bGUiLCJzZXRUaXRsZSIsImF1ZGlvRWxlbWVudCIsImN1cnJlbnQiLCJoYW5kbGVMb2FkZWRNZXRhZGF0YSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGxheUF1ZGlvIiwicGF1c2VBdWRpbyIsInBhdXNlIiwicGxheU5leHRTb25nIiwicHJldkluZGV4IiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2FyZCIsImluZm9ybWF0aW9ucyIsImltYWdlQ2FyZCIsImFsdCIsInNyYyIsInRpdGxlQ2FyZCIsImgzIiwicCIsImNvbnRyb2xzIiwiaSIsImJ0biIsImFyaWEtaGlkZGVuIiwib25DbGljayIsInBsYXllciIsImF1ZGlvIiwicmVmIiwidGltZUNvbnRhaW5lciIsInByb2dyZXNzQmFyIiwicHJvZ3Jlc3MiLCJ0aW1lIiwic3BhbiIsIk1hdGgiLCJmbG9vciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Home/components/Player.tsx\n"));

/***/ })

});