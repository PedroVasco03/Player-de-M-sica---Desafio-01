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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _player_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.module.css */ \"(app-pages-browser)/./app/Home/components/player.module.css\");\n/* harmony import */ var _player_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_player_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_images_album_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/album.png */ \"(app-pages-browser)/./app/Home/assets/images/album.png\");\n/* harmony import */ var jsmediatags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jsmediatags */ \"(app-pages-browser)/./node_modules/jsmediatags/build2/jsmediatags.js\");\n/* harmony import */ var jsmediatags__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jsmediatags__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Player = function(param) {\n    var songs = param.songs;\n    _s();\n    var _React_useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"player_playing__iuDJ_\"), 2), play = _React_useState[0], setPlay = _React_useState[1];\n    var Played = function() {\n        if (play === \"player_playing__iuDJ_\") setPlay(\"\");\n        else setPlay(\"player_playing__iuDJ_\");\n    };\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), currentSongIndex = _useState[0], setCurrentSongIndex = _useState[1];\n    var audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), duration = _useState1[0], setDuration = _useState1[1]; // Tipo definido como `number | null`\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"T\\xedtulo Desconhecido\"), 2), title = _useState2[0], setTitle = _useState2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var audioElement = audioRef.current;\n        if (audioElement) {\n            jsmediatags__WEBPACK_IMPORTED_MODULE_5___default().read(songs[currentSongIndex], {\n                onSuccess: function(tag) {\n                    setTitle(tag.tags.title || \"T\\xedtulo Desconhecido\");\n                },\n                onError: function(error) {\n                    console.error(\"Error reading metadata:\", error);\n                    setTitle(\"T\\xedtulo Desconhecido\");\n                }\n            });\n            var handleLoadedMetadata = function() {\n                setDuration(audioElement.duration); // Atualiza a duração\n            };\n            audioElement.addEventListener(\"loadedmetadata\", handleLoadedMetadata);\n            return function() {\n                audioElement.removeEventListener(\"loadedmetadata\", handleLoadedMetadata);\n            };\n        }\n    }, [\n        currentSongIndex\n    ]);\n    var playAudio = function() {\n        if (audioRef.current) audioRef.current.play();\n    };\n    var pauseAudio = function() {\n        if (audioRef.current) audioRef.current.pause();\n    };\n    var playNextSong = function() {\n        setCurrentSongIndex(function(prevIndex) {\n            return prevIndex === songs.length - 1 ? 0 : prevIndex + 1;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().card) + \" card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().informations),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().imageCard) + \" image-card\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            alt: \"img-Album\",\n                            src: _assets_images_album_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().titleCard) + \" title-card\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Banda Rocketseat\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().controls),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" fas fa-backward\",\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        onClick: function() {\n                            Played();\n                            playAudio();\n                        },\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" \" + (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().play) + \" fas fa-play \" + play,\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        onClick: function() {\n                            Played();\n                            pauseAudio();\n                        },\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" \" + (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().pause) + \" fas fa-pause \" + play,\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().btn) + \" fas fa-forward\",\n                        onClick: playNextSong,\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().player),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                    src: songs[currentSongIndex],\n                    ref: audioRef\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().timeContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().progressBar),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().progress)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_2___default().time),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"0:00\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: duration !== null ? \"\".concat(Math.floor(duration / 60), \":\").concat(Math.floor(duration % 60)) : \"Carregando...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, _this);\n};\n_s(Player, \"gYY00HMHaPLEwTe54Tjqx5SOHss=\");\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Ib21lL2NvbXBvbmVudHMvUGxheWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFMkQ7QUFDbkI7QUFDVDtBQUNjO0FBQ1A7QUFNdEMsSUFBTVEsU0FBZ0M7UUFBR0MsY0FBQUE7O0lBQ3JDLElBQXdCVCxrQkFBQUEsK0RBQUFBLENBQUFBLHFEQUFjLENBQVMsOEJBQXhDVSxPQUFpQlYsb0JBQVhXLFVBQVdYO0lBRXhCLElBQU1ZLFNBQVM7UUFDWCxJQUFJRixTQUFTLHlCQUF5QkMsUUFBUTthQUN6Q0EsUUFBUTtJQUNqQjtJQUVBLElBQWdEVixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsUUFBbERZLG1CQUF5Q1osY0FBdkJhLHNCQUF1QmI7SUFDaEQsSUFBTWMsV0FBV2IsNkNBQU1BLENBQW1CO0lBQzFDLElBQWdDRCxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQWdCLFdBQWpEZSxXQUF5QmYsZUFBZmdCLGNBQWVoQixlQUErQixxQ0FBcUM7SUFDcEcsSUFBMEJBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBUywrQkFBcENpQixRQUFtQmpCLGVBQVprQixXQUFZbEI7SUFFMUJFLGdEQUFTQSxDQUFDO1FBQ04sSUFBTWlCLGVBQWVMLFNBQVNNLE9BQU87UUFFckMsSUFBSUQsY0FBYztZQUNkYix1REFBZ0IsQ0FBQ0UsS0FBSyxDQUFDSSxpQkFBaUIsRUFBRTtnQkFDdENVLFdBQVcsU0FBQ0M7b0JBQ1JMLFNBQVNLLElBQUlDLElBQUksQ0FBQ1AsS0FBSyxJQUFJO2dCQUMvQjtnQkFDQVEsU0FBUyxTQUFDQztvQkFDTkMsUUFBUUQsS0FBSyxDQUFDLDJCQUEyQkE7b0JBQ3pDUixTQUFTO2dCQUNiO1lBQ0o7WUFFQSxJQUFNVSx1QkFBdUI7Z0JBQ3pCWixZQUFZRyxhQUFhSixRQUFRLEdBQUcscUJBQXFCO1lBQzdEO1lBRUFJLGFBQWFVLGdCQUFnQixDQUFDLGtCQUFrQkQ7WUFFaEQsT0FBTztnQkFDSFQsYUFBYVcsbUJBQW1CLENBQUMsa0JBQWtCRjtZQUN2RDtRQUNKO0lBQ0osR0FBRztRQUFDaEI7S0FBaUI7SUFFckIsSUFBTW1CLFlBQVk7UUFDZCxJQUFJakIsU0FBU00sT0FBTyxFQUFFTixTQUFTTSxPQUFPLENBQUNYLElBQUk7SUFDL0M7SUFFQSxJQUFNdUIsYUFBYTtRQUNmLElBQUlsQixTQUFTTSxPQUFPLEVBQUVOLFNBQVNNLE9BQU8sQ0FBQ2EsS0FBSztJQUNoRDtJQUVBLElBQU1DLGVBQWU7UUFDakJyQixvQkFBb0IsU0FBQ3NCO21CQUFlQSxjQUFjM0IsTUFBTTRCLE1BQU0sR0FBRyxJQUFJLElBQUlELFlBQVk7O0lBQ3pGO0lBRUEscUJBQ0ksOERBQUNFO1FBQUlDLFdBQVduQyxnRUFBVSxHQUFHOzswQkFDekIsOERBQUNrQztnQkFBSUMsV0FBV25DLHdFQUFrQjs7a0NBQzlCLDhEQUFDa0M7d0JBQUlDLFdBQVduQyxxRUFBZSxHQUFHO2tDQUM5Qiw0RUFBQ0Msa0RBQUtBOzRCQUFDc0MsS0FBSTs0QkFBWUMsS0FBS3RDLGdFQUFHQTs7Ozs7Ozs7Ozs7a0NBRW5DLDhEQUFDZ0M7d0JBQUlDLFdBQVduQyxxRUFBZSxHQUFHOzswQ0FDOUIsOERBQUMwQzswQ0FBSTVCOzs7Ozs7MENBQ0wsOERBQUM2QjswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlYLDhEQUFDVDtnQkFBSUMsV0FBV25DLG9FQUFjOztrQ0FDMUIsOERBQUM2Qzt3QkFBRVYsV0FBV25DLCtEQUFTLEdBQUc7d0JBQW9CK0MsZUFBWTs7Ozs7O2tDQUMxRCw4REFBQ0Y7d0JBQUVHLFNBQVM7NEJBQVF4Qzs0QkFBVW9CO3dCQUFhO3dCQUFHTyxXQUFXbkMsK0RBQVMsR0FBRyxNQUFNQSxnRUFBVSxHQUFHLGtCQUFrQk07d0JBQU15QyxlQUFZOzs7Ozs7a0NBQzVILDhEQUFDRjt3QkFBRUcsU0FBUzs0QkFBUXhDOzRCQUFVcUI7d0JBQWM7d0JBQUdNLFdBQVduQywrREFBUyxHQUFHLE1BQU1BLGlFQUFXLEdBQUcsbUJBQW1CTTt3QkFBTXlDLGVBQVk7Ozs7OztrQ0FDL0gsOERBQUNGO3dCQUFFVixXQUFXbkMsK0RBQVMsR0FBRzt3QkFBbUJnRCxTQUFTakI7d0JBQWNnQixlQUFZOzs7Ozs7Ozs7Ozs7MEJBR3BGLDhEQUFDYjtnQkFBSUMsV0FBV25DLGtFQUFZOzBCQUN4Qiw0RUFBQ2tEO29CQUFNVixLQUFLbkMsS0FBSyxDQUFDSSxpQkFBaUI7b0JBQUUwQyxLQUFLeEM7Ozs7Ozs7Ozs7OzBCQUc5Qyw4REFBQ3VCO2dCQUFJQyxXQUFXbkMseUVBQW1COztrQ0FDL0IsOERBQUNrQzt3QkFBSUMsV0FBV25DLHVFQUFpQjtrQ0FDN0IsNEVBQUNrQzs0QkFBSUMsV0FBV25DLG9FQUFjOzs7Ozs7Ozs7OztrQ0FFbEMsOERBQUNrQzt3QkFBSUMsV0FBV25DLGdFQUFVOzswQ0FDdEIsOERBQUN3RDswQ0FBSzs7Ozs7OzBDQUNOLDhEQUFDQTswQ0FBTTVDLGFBQWEsT0FBTyxHQUFnQzZDLE9BQTdCQSxLQUFLQyxLQUFLLENBQUM5QyxXQUFXLEtBQUksS0FBNkIsT0FBMUI2QyxLQUFLQyxLQUFLLENBQUM5QyxXQUFXLE9BQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs3RztHQXJGTVI7S0FBQUE7QUF1Rk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0hvbWUvY29tcG9uZW50cy9QbGF5ZXIudHN4PzEyYzUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9wbGF5ZXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IGltMSBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2FsYnVtLnBuZyc7XHJcbmltcG9ydCBqc21lZGlhdGFncyBmcm9tICdqc21lZGlhdGFncyc7XHJcblxyXG5pbnRlcmZhY2UgUGxheWVyUHJvcHMge1xyXG4gIHNvbmdzOiBzdHJpbmdbXTtcclxufVxyXG5cclxuY29uc3QgUGxheWVyOiBSZWFjdC5GQzxQbGF5ZXJQcm9wcz4gPSAoeyBzb25ncyB9KSA9PiB7XHJcbiAgICBjb25zdCBbcGxheSwgc2V0UGxheV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCdwbGF5ZXJfcGxheWluZ19faXVESl8nKTtcclxuICAgIFxyXG4gICAgY29uc3QgUGxheWVkID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChwbGF5ID09PSAncGxheWVyX3BsYXlpbmdfX2l1REpfJykgc2V0UGxheSgnJyk7XHJcbiAgICAgICAgZWxzZSBzZXRQbGF5KCdwbGF5ZXJfcGxheWluZ19faXVESl8nKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnRTb25nSW5kZXgsIHNldEN1cnJlbnRTb25nSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBhdWRpb1JlZiA9IHVzZVJlZjxIVE1MQXVkaW9FbGVtZW50PihudWxsKTtcclxuICAgIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7IC8vIFRpcG8gZGVmaW5pZG8gY29tbyBgbnVtYmVyIHwgbnVsbGBcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nPignVMOtdHVsbyBEZXNjb25oZWNpZG8nKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGF1ZGlvRWxlbWVudCA9IGF1ZGlvUmVmLmN1cnJlbnQ7XHJcblxyXG4gICAgICAgIGlmIChhdWRpb0VsZW1lbnQpIHtcclxuICAgICAgICAgICAganNtZWRpYXRhZ3MucmVhZChzb25nc1tjdXJyZW50U29uZ0luZGV4XSwge1xyXG4gICAgICAgICAgICAgICAgb25TdWNjZXNzOiAodGFnKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGl0bGUodGFnLnRhZ3MudGl0bGUgfHwgJ1TDrXR1bG8gRGVzY29uaGVjaWRvJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVhZGluZyBtZXRhZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGl0bGUoJ1TDrXR1bG8gRGVzY29uaGVjaWRvJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlTG9hZGVkTWV0YWRhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXREdXJhdGlvbihhdWRpb0VsZW1lbnQuZHVyYXRpb24pOyAvLyBBdHVhbGl6YSBhIGR1cmHDp8Ojb1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgYXVkaW9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgaGFuZGxlTG9hZGVkTWV0YWRhdGEpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGF1ZGlvRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsIGhhbmRsZUxvYWRlZE1ldGFkYXRhKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbY3VycmVudFNvbmdJbmRleF0pO1xyXG5cclxuICAgIGNvbnN0IHBsYXlBdWRpbyA9ICgpID0+IHtcclxuICAgICAgICBpZiAoYXVkaW9SZWYuY3VycmVudCkgYXVkaW9SZWYuY3VycmVudC5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGF1c2VBdWRpbyA9ICgpID0+IHtcclxuICAgICAgICBpZiAoYXVkaW9SZWYuY3VycmVudCkgYXVkaW9SZWYuY3VycmVudC5wYXVzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBsYXlOZXh0U29uZyA9ICgpID0+IHtcclxuICAgICAgICBzZXRDdXJyZW50U29uZ0luZGV4KChwcmV2SW5kZXgpID0+IChwcmV2SW5kZXggPT09IHNvbmdzLmxlbmd0aCAtIDEgPyAwIDogcHJldkluZGV4ICsgMSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJkICsgXCIgY2FyZFwifT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmluZm9ybWF0aW9uc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaW1hZ2VDYXJkICsgXCIgaW1hZ2UtY2FyZFwifT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PSdpbWctQWxidW0nIHNyYz17aW0xfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGl0bGVDYXJkICsgXCIgdGl0bGUtY2FyZFwifT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+e3RpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+QmFuZGEgUm9ja2V0c2VhdDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jb250cm9sc30+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e3N0eWxlLmJ0biArIFwiIGZhcyBmYS1iYWNrd2FyZFwifSBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8aSBvbkNsaWNrPXsoKSA9PiB7IFBsYXllZCgpOyBwbGF5QXVkaW8oKTsgfX0gY2xhc3NOYW1lPXtzdHlsZS5idG4gKyBcIiBcIiArIHN0eWxlLnBsYXkgKyBcIiBmYXMgZmEtcGxheSBcIiArIHBsYXl9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9eygpID0+IHsgUGxheWVkKCk7IHBhdXNlQXVkaW8oKTsgfX0gY2xhc3NOYW1lPXtzdHlsZS5idG4gKyBcIiBcIiArIHN0eWxlLnBhdXNlICsgXCIgZmFzIGZhLXBhdXNlIFwiICsgcGxheX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtzdHlsZS5idG4gKyBcIiBmYXMgZmEtZm9yd2FyZFwifSBvbkNsaWNrPXtwbGF5TmV4dFNvbmd9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wbGF5ZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGF1ZGlvIHNyYz17c29uZ3NbY3VycmVudFNvbmdJbmRleF19IHJlZj17YXVkaW9SZWZ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRpbWVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByb2dyZXNzQmFyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJvZ3Jlc3N9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+MDowMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZHVyYXRpb24gIT09IG51bGwgPyBgJHtNYXRoLmZsb29yKGR1cmF0aW9uIC8gNjApfToke01hdGguZmxvb3IoZHVyYXRpb24gJSA2MCl9YCA6ICdDYXJyZWdhbmRvLi4uJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsInN0eWxlIiwiSW1hZ2UiLCJpbTEiLCJqc21lZGlhdGFncyIsIlBsYXllciIsInNvbmdzIiwicGxheSIsInNldFBsYXkiLCJQbGF5ZWQiLCJjdXJyZW50U29uZ0luZGV4Iiwic2V0Q3VycmVudFNvbmdJbmRleCIsImF1ZGlvUmVmIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsInRpdGxlIiwic2V0VGl0bGUiLCJhdWRpb0VsZW1lbnQiLCJjdXJyZW50IiwicmVhZCIsIm9uU3VjY2VzcyIsInRhZyIsInRhZ3MiLCJvbkVycm9yIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlTG9hZGVkTWV0YWRhdGEiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInBsYXlBdWRpbyIsInBhdXNlQXVkaW8iLCJwYXVzZSIsInBsYXlOZXh0U29uZyIsInByZXZJbmRleCIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJpbmZvcm1hdGlvbnMiLCJpbWFnZUNhcmQiLCJhbHQiLCJzcmMiLCJ0aXRsZUNhcmQiLCJoMyIsInAiLCJjb250cm9scyIsImkiLCJidG4iLCJhcmlhLWhpZGRlbiIsIm9uQ2xpY2siLCJwbGF5ZXIiLCJhdWRpbyIsInJlZiIsInRpbWVDb250YWluZXIiLCJwcm9ncmVzc0JhciIsInByb2dyZXNzIiwidGltZSIsInNwYW4iLCJNYXRoIiwiZmxvb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Home/components/Player.tsx\n"));

/***/ })

});