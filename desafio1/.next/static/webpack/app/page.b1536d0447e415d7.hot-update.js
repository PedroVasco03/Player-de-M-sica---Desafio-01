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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var music_metadata_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! music-metadata-browser */ \"(app-pages-browser)/./node_modules/music-metadata-browser/lib/index.js\");\n/* harmony import */ var _player_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player.module.css */ \"(app-pages-browser)/./app/Home/components/player.module.css\");\n/* harmony import */ var _player_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_player_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_images_album_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/album.png */ \"(app-pages-browser)/./app/Home/assets/images/album.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Player = function(param) {\n    var songs = param.songs;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"player_playing__iuDJ_\"), 2), play = _useState[0], setPlay = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), currentSongIndex = _useState1[0], setCurrentSongIndex = _useState1[1];\n    var audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), duration = _useState2[0], setDuration = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), leftDuration = _useState3[0], setLeftDuration = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"T\\xedtulo Desconhecido\"), 2), title = _useState4[0], setTitle = _useState4[1];\n    var _useState5 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Artista Desconhecido\"), 2), artist = _useState5[0], setArtist = _useState5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var fetchMetadata = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function() {\n                var audioElement, response, blob, metadata, error;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__.__generator)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            audioElement = audioRef.current;\n                            if (!audioElement) return [\n                                3,\n                                6\n                            ];\n                            _state.label = 1;\n                        case 1:\n                            _state.trys.push([\n                                1,\n                                5,\n                                ,\n                                6\n                            ]);\n                            return [\n                                4,\n                                fetch(songs[currentSongIndex])\n                            ];\n                        case 2:\n                            response = _state.sent();\n                            return [\n                                4,\n                                response.blob()\n                            ];\n                        case 3:\n                            blob = _state.sent();\n                            return [\n                                4,\n                                (0,music_metadata_browser__WEBPACK_IMPORTED_MODULE_2__.parseBlob)(blob)\n                            ];\n                        case 4:\n                            metadata = _state.sent();\n                            setTitle(metadata.common.title || \"T\\xedtulo Desconhecido\");\n                            setDuration(metadata.format.duration || 0);\n                            setArtist(metadata.common.artist || \"Artista Desconhecido\");\n                            return [\n                                3,\n                                6\n                            ];\n                        case 5:\n                            error = _state.sent();\n                            console.error(\"Error reading metadata:\", error);\n                            setTitle(\"T\\xedtulo Desconhecido\");\n                            return [\n                                3,\n                                6\n                            ];\n                        case 6:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchMetadata() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (audioRef.current) {\n            setLeftDuration(audioRef.current.currentTime);\n        }\n        console.log(leftDuration);\n        fetchMetadata();\n    }, [\n        currentSongIndex\n    ]);\n    var Played = function() {\n        setPlay(function(prev) {\n            return prev === \"player_playing__iuDJ_\" ? \"\" : \"player_playing__iuDJ_\";\n        });\n    };\n    var playAudio = function() {\n        var _audioRef_current;\n        (_audioRef_current = audioRef.current) === null || _audioRef_current === void 0 ? void 0 : _audioRef_current.play();\n    };\n    var pauseAudio = function() {\n        var _audioRef_current;\n        (_audioRef_current = audioRef.current) === null || _audioRef_current === void 0 ? void 0 : _audioRef_current.pause();\n    };\n    var playNextSong = function() {\n        setCurrentSongIndex(function(prevIndex) {\n            return prevIndex === songs.length - 1 ? 0 : prevIndex + 1;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_3___default().card) + \" card\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_3___default().informations),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageCard) + \" image-card\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            alt: \"img-Album\",\n                            src: _assets_images_album_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_3___default().titleCard) + \" title-card\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: artist\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_3___default().controls),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn) + \" fas fa-backward\",\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        onClick: function() {\n                            Played();\n                            playAudio();\n                        },\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn) + \" \" + (_player_module_css__WEBPACK_IMPORTED_MODULE_3___default().play) + \" fas fa-play \" + play,\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        onClick: function() {\n                            Played();\n                            pauseAudio();\n                        },\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn) + \" \" + (_player_module_css__WEBPACK_IMPORTED_MODULE_3___default().pause) + \" fas fa-pause \" + play,\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn) + \" fas fa-forward\",\n                        onClick: playNextSong,\n                        \"aria-hidden\": \"true\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_3___default().player),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                    src: songs[currentSongIndex],\n                    ref: audioRef\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_player_module_css__WEBPACK_IMPORTED_MODULE_3___default().timeContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_3___default().progressBar),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_player_module_css__WEBPACK_IMPORTED_MODULE_3___default().progress)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_player_module_css__WEBPACK_IMPORTED_MODULE_3___default().time),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: leftDuration !== null ? \"\".concat(Math.floor(leftDuration / 60), \":\").concat(Math.floor(leftDuration % 60)) : \"Carregando...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: duration !== null ? \"\".concat(Math.floor(duration / 60), \":\").concat(Math.floor(duration % 60)) : \"Carregando...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Pedro Vasco\\\\Documents\\\\Desafios\\\\Player de M\\xfasica • Desafio 01\\\\desafio1\\\\app\\\\Home\\\\components\\\\Player.tsx\",\n        lineNumber: 66,\n        columnNumber: 9\n    }, _this);\n};\n_s(Player, \"BrQZWQEsOgXRK8OkwSYLMzzOTTg=\");\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Ib21lL2NvbXBvbmVudHMvUGxheWVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMkQ7QUFDUjtBQUNYO0FBQ1Q7QUFDYztBQU03QyxJQUFNUSxTQUFnQztRQUFHQyxjQUFBQTs7SUFDckMsSUFBd0JSLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBUyw4QkFBbENTLE9BQWlCVCxjQUFYVSxVQUFXVjtJQUN4QixJQUFnREEsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFFBQWxEVyxtQkFBeUNYLGVBQXZCWSxzQkFBdUJaO0lBQ2hELElBQU1hLFdBQVdaLDZDQUFNQSxDQUFtQjtJQUMxQyxJQUFnQ0QsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFnQixXQUFqRGMsV0FBeUJkLGVBQWZlLGNBQWVmO0lBQ2hDLElBQXdDQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQWdCLFdBQXpEZ0IsZUFBaUNoQixlQUFuQmlCLGtCQUFtQmpCO0lBQ3hDLElBQTBCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVMsK0JBQXBDa0IsUUFBbUJsQixlQUFabUIsV0FBWW5CO0lBQzFCLElBQTRCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVMsNkJBQXRDb0IsU0FBcUJwQixlQUFicUIsWUFBYXJCO0lBRTVCRSxnREFBU0EsQ0FBQztRQUNOLElBQU1vQjt1QkFBZ0I7b0JBQ1pDLGNBSVFDLFVBQ0FDLE1BQ0FDLFVBSURDOzs7OzRCQVZQSixlQUFlVixTQUFTZSxPQUFPO2lDQUVqQ0wsY0FBQUE7Ozs7Ozs7Ozs7Ozs0QkFFcUI7O2dDQUFNTSxNQUFNckIsS0FBSyxDQUFDRyxpQkFBaUI7Ozs0QkFBOUNhLFdBQVc7NEJBQ0o7O2dDQUFNQSxTQUFTQyxJQUFJOzs7NEJBQTFCQSxPQUFPOzRCQUNJOztnQ0FBTXRCLGlFQUFTQSxDQUFDc0I7Ozs0QkFBM0JDLFdBQVc7NEJB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VyxLQUFJLEtBQTZCLE9BQTFCb0QsS0FBS0MsS0FBSyxDQUFDckQsV0FBVyxPQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0c7R0F0Rk1QO0tBQUFBO0FBd0ZOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Ib21lL2NvbXBvbmVudHMvUGxheWVyLnRzeD8xMmM1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHBhcnNlQmxvYiB9IGZyb20gJ211c2ljLW1ldGFkYXRhLWJyb3dzZXInO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vcGxheWVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBpbTEgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9hbGJ1bS5wbmcnO1xyXG5cclxuaW50ZXJmYWNlIFBsYXllclByb3BzIHtcclxuICBzb25nczogc3RyaW5nW107XHJcbn1cclxuXHJcbmNvbnN0IFBsYXllcjogUmVhY3QuRkM8UGxheWVyUHJvcHM+ID0gKHsgc29uZ3MgfSkgPT4ge1xyXG4gICAgY29uc3QgW3BsYXksIHNldFBsYXldID0gdXNlU3RhdGU8c3RyaW5nPigncGxheWVyX3BsYXlpbmdfX2l1REpfJyk7XHJcbiAgICBjb25zdCBbY3VycmVudFNvbmdJbmRleCwgc2V0Q3VycmVudFNvbmdJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IGF1ZGlvUmVmID0gdXNlUmVmPEhUTUxBdWRpb0VsZW1lbnQ+KG51bGwpO1xyXG4gICAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcclxuICAgIGNvbnN0IFtsZWZ0RHVyYXRpb24sIHNldExlZnREdXJhdGlvbl0gPSB1c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGU8c3RyaW5nPignVMOtdHVsbyBEZXNjb25oZWNpZG8nKTtcclxuICAgIGNvbnN0IFthcnRpc3QsIHNldEFydGlzdF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCdBcnRpc3RhIERlc2NvbmhlY2lkbycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hNZXRhZGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYXVkaW9FbGVtZW50ID0gYXVkaW9SZWYuY3VycmVudDtcclxuXHJcbiAgICAgICAgICAgIGlmIChhdWRpb0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChzb25nc1tjdXJyZW50U29uZ0luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRhZGF0YSA9IGF3YWl0IHBhcnNlQmxvYihibG9iKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaXRsZShtZXRhZGF0YS5jb21tb24udGl0bGUgfHwgJ1TDrXR1bG8gRGVzY29uaGVjaWRvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RHVyYXRpb24obWV0YWRhdGEuZm9ybWF0LmR1cmF0aW9uIHx8IDAgKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBcnRpc3QobWV0YWRhdGEuY29tbW9uLmFydGlzdCB8fCAnQXJ0aXN0YSBEZXNjb25oZWNpZG8nKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVhZGluZyBtZXRhZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGl0bGUoJ1TDrXR1bG8gRGVzY29uaGVjaWRvJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoYXVkaW9SZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgc2V0TGVmdER1cmF0aW9uKGF1ZGlvUmVmLmN1cnJlbnQuY3VycmVudFRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhsZWZ0RHVyYXRpb24pO1xyXG4gICAgICAgIGZldGNoTWV0YWRhdGEoKTtcclxuICAgIH0sIFtjdXJyZW50U29uZ0luZGV4XSk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3QgUGxheWVkID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFBsYXkoKHByZXYpID0+IChwcmV2ID09PSAncGxheWVyX3BsYXlpbmdfX2l1REpfJyA/ICcnIDogJ3BsYXllcl9wbGF5aW5nX19pdURKXycpKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcGxheUF1ZGlvID0gKCkgPT4ge1xyXG4gICAgICAgIGF1ZGlvUmVmLmN1cnJlbnQ/LnBsYXkoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcGF1c2VBdWRpbyA9ICgpID0+IHtcclxuICAgICAgICBhdWRpb1JlZi5jdXJyZW50Py5wYXVzZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwbGF5TmV4dFNvbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0Q3VycmVudFNvbmdJbmRleCgocHJldkluZGV4KSA9PiAocHJldkluZGV4ID09PSBzb25ncy5sZW5ndGggLSAxID8gMCA6IHByZXZJbmRleCArIDEpKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2FyZCArIFwiIGNhcmRcIn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbmZvcm1hdGlvbnN9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmltYWdlQ2FyZCArIFwiIGltYWdlLWNhcmRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGFsdD0naW1nLUFsYnVtJyBzcmM9e2ltMX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRpdGxlQ2FyZCArIFwiIHRpdGxlLWNhcmRcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnthcnRpc3R9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRyb2xzfT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17c3R5bGUuYnRuICsgXCIgZmFzIGZhLWJhY2t3YXJkXCJ9IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9eygpID0+IHsgUGxheWVkKCk7IHBsYXlBdWRpbygpOyB9fSBjbGFzc05hbWU9e3N0eWxlLmJ0biArIFwiIFwiICsgc3R5bGUucGxheSArIFwiIGZhcyBmYS1wbGF5IFwiICsgcGxheX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGkgb25DbGljaz17KCkgPT4geyBQbGF5ZWQoKTsgcGF1c2VBdWRpbygpOyB9fSBjbGFzc05hbWU9e3N0eWxlLmJ0biArIFwiIFwiICsgc3R5bGUucGF1c2UgKyBcIiBmYXMgZmEtcGF1c2UgXCIgKyBwbGF5fSBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e3N0eWxlLmJ0biArIFwiIGZhcyBmYS1mb3J3YXJkXCJ9IG9uQ2xpY2s9e3BsYXlOZXh0U29uZ30gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnBsYXllcn0+XHJcbiAgICAgICAgICAgICAgICA8YXVkaW8gc3JjPXtzb25nc1tjdXJyZW50U29uZ0luZGV4XX0gcmVmPXthdWRpb1JlZn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUudGltZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJvZ3Jlc3NCYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9ncmVzc30+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bGVmdER1cmF0aW9uICE9PSBudWxsID8gYCR7TWF0aC5mbG9vcihsZWZ0RHVyYXRpb24gLyA2MCl9OiR7TWF0aC5mbG9vcihsZWZ0RHVyYXRpb24gJSA2MCl9YCA6ICdDYXJyZWdhbmRvLi4uJ308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2R1cmF0aW9uICE9PSBudWxsID8gYCR7TWF0aC5mbG9vcihkdXJhdGlvbiAvIDYwKX06JHtNYXRoLmZsb29yKGR1cmF0aW9uICUgNjApfWAgOiAnQ2FycmVnYW5kby4uLid9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJwYXJzZUJsb2IiLCJzdHlsZSIsIkltYWdlIiwiaW0xIiwiUGxheWVyIiwic29uZ3MiLCJwbGF5Iiwic2V0UGxheSIsImN1cnJlbnRTb25nSW5kZXgiLCJzZXRDdXJyZW50U29uZ0luZGV4IiwiYXVkaW9SZWYiLCJkdXJhdGlvbiIsInNldER1cmF0aW9uIiwibGVmdER1cmF0aW9uIiwic2V0TGVmdER1cmF0aW9uIiwidGl0bGUiLCJzZXRUaXRsZSIsImFydGlzdCIsInNldEFydGlzdCIsImZldGNoTWV0YWRhdGEiLCJhdWRpb0VsZW1lbnQiLCJyZXNwb25zZSIsImJsb2IiLCJtZXRhZGF0YSIsImVycm9yIiwiY3VycmVudCIsImZldGNoIiwiY29tbW9uIiwiZm9ybWF0IiwiY29uc29sZSIsImN1cnJlbnRUaW1lIiwibG9nIiwiUGxheWVkIiwicHJldiIsInBsYXlBdWRpbyIsInBhdXNlQXVkaW8iLCJwYXVzZSIsInBsYXlOZXh0U29uZyIsInByZXZJbmRleCIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJpbmZvcm1hdGlvbnMiLCJpbWFnZUNhcmQiLCJhbHQiLCJzcmMiLCJ0aXRsZUNhcmQiLCJoMyIsInAiLCJjb250cm9scyIsImkiLCJidG4iLCJhcmlhLWhpZGRlbiIsIm9uQ2xpY2siLCJwbGF5ZXIiLCJhdWRpbyIsInJlZiIsInRpbWVDb250YWluZXIiLCJwcm9ncmVzc0JhciIsInByb2dyZXNzIiwidGltZSIsInNwYW4iLCJNYXRoIiwiZmxvb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Home/components/Player.tsx\n"));

/***/ })

});