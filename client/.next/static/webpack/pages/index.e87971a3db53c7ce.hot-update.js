"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var websocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! websocket */ \"./node_modules/websocket/lib/browser.js\");\n/* harmony import */ var websocket__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(websocket__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/esm/index.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n// import Editor from 'react-medium-editor';\n// import 'medium-editor/dist/css/medium-editor.css';\n// import 'medium-editor/dist/css/themes/default.css';\n// import './App.css';\nvar client = new websocket__WEBPACK_IMPORTED_MODULE_2__.w3cwebsocket(\"ws://127.0.0.1:8000\");\nvar contentDefaultMessage = \"Let's start playing Yahtzee!\";\nvar App = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), currentUsers = _useState[0], setCurrentUsers = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), userActivity = _useState1[0], setUserActivity = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), username = _useState2[0], setUsername = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), text = _useState3[0], setText = _useState3[1];\n    var usernameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var logInUser = function() {\n        var username = usernameRef.current.value;\n        if (username.trim()) {\n            var data = {\n                username: username\n            };\n            setUsername(username);\n            client.send(JSON.stringify((0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_4__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_5__._)({}, data), {\n                type: \"userevent\"\n            })));\n        }\n    };\n    var onEditorStateChange = function(text) {\n        client.send(JSON.stringify({\n            type: \"contentchange\",\n            username: username,\n            content: text\n        }));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        client.onopen = function() {\n            console.log(\"WebSocket Client Connected\");\n        };\n        client.onmessage = function(message) {\n            var dataFromServer = JSON.parse(message.data);\n            if (dataFromServer.type === \"userevent\") {\n                setCurrentUsers(Object.values(dataFromServer.data.users));\n            } else if (dataFromServer.type === \"contentchange\") {\n                setText(dataFromServer.data.editorContent || contentDefaultMessage);\n            }\n            setUserActivity(dataFromServer.data.userActivity);\n        };\n    }, []);\n    var showLoginSection = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"account\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"account__wrapper\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"account__card\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"account__profile\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"account__name\",\n                                    children: \"Hello, user!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"account__sub\",\n                                    children: \"Join to edit the document\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            name: \"username\",\n                            ref: usernameRef,\n                            className: \"form-control\"\n                        }, void 0, false, {\n                            fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: logInUser,\n                            className: \"btn btn-primary account__btn\",\n                            children: \"Join\"\n                        }, void 0, false, {\n                            fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n            lineNumber: 62,\n            columnNumber: 5\n        }, _this);\n    };\n    var showEditorSection = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"main-content\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"document-holder\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"currentusers\",\n                            children: currentUsers.map(function(user) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            id: user.username,\n                                            className: \"userInfo\",\n                                            children: user.username\n                                        }, void 0, false, {\n                                            fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.UncontrolledTooltip, {\n                                            placement: \"top\",\n                                            target: user.username,\n                                            children: user.username\n                                        }, void 0, false, {\n                                            fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, user.username, true, {\n                                    fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                            lineNumber: 79,\n                            columnNumber: 9\n                        }, _this),\n                        \"hello\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                    lineNumber: 78,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"history-holder\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: userActivity.map(function(activity, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: activity\n                            }, \"activity-\".concat(index), false, {\n                                fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                                lineNumber: 96,\n                                columnNumber: 50\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                    lineNumber: 94,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n            lineNumber: 77,\n            columnNumber: 5\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid\",\n            children: username ? showEditorSection() : showLoginSection()\n        }, void 0, false, {\n            fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n            lineNumber: 104,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, _this);\n};\n_s(App, \"l1+EkCRJKYeatevmUSJhKSAoifk=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxRQUFROzs7Ozs7c0RBR2hCLDhEQUFDUiwyREFBbUJBOzRDQUFDa0QsV0FBVTs0Q0FBTUMsUUFBUUwsS0FBS3RDLFFBQVE7c0RBQ3ZEc0MsS0FBS3RDLFFBQVE7Ozs7Ozs7bUNBTkdzQyxLQUFLdEMsUUFBUTs7Ozs7Ozs7Ozs7d0JBVWhDOzs7Ozs7OzhCQUdSLDhEQUFDNEI7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNlO2tDQUNFOUMsYUFBYXVDLEdBQUcsQ0FBQyxTQUFDUSxVQUFVQztpREFBVSw4REFBQ0M7MENBQThCRjsrQkFBdEIsWUFBa0IsT0FBTkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTXBFLHFCQUNFLDhEQUFDOUQsdURBQWM7a0JBQ2IsNEVBQUM0QztZQUFJQyxXQUFVO3NCQUNaN0IsV0FBV29DLHNCQUFzQlQ7Ozs7Ozs7Ozs7O0FBSTFDO0dBN0ZNaEM7S0FBQUE7QUErRk4sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdzNjd2Vic29ja2V0IGFzIFczQ1dlYlNvY2tldCB9IGZyb20gXCJ3ZWJzb2NrZXRcIjtcbmltcG9ydCB7XG4gIE5hdmJhcixcbiAgTmF2YmFyQnJhbmQsXG4gIFVuY29udHJvbGxlZFRvb2x0aXBcbn0gZnJvbSAncmVhY3RzdHJhcCc7XG4vLyBpbXBvcnQgRWRpdG9yIGZyb20gJ3JlYWN0LW1lZGl1bS1lZGl0b3InO1xuLy8gaW1wb3J0ICdtZWRpdW0tZWRpdG9yL2Rpc3QvY3NzL21lZGl1bS1lZGl0b3IuY3NzJztcbi8vIGltcG9ydCAnbWVkaXVtLWVkaXRvci9kaXN0L2Nzcy90aGVtZXMvZGVmYXVsdC5jc3MnO1xuLy8gaW1wb3J0ICcuL0FwcC5jc3MnO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgVzNDV2ViU29ja2V0KCd3czovLzEyNy4wLjAuMTo4MDAwJyk7XG5jb25zdCBjb250ZW50RGVmYXVsdE1lc3NhZ2UgPSBcIkxldCdzIHN0YXJ0IHBsYXlpbmcgWWFodHplZSFcIjtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudFVzZXJzLCBzZXRDdXJyZW50VXNlcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdXNlckFjdGl2aXR5LCBzZXRVc2VyQWN0aXZpdHldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgdXNlcm5hbWVSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgbG9nSW5Vc2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlcm5hbWVSZWYuY3VycmVudC52YWx1ZTtcbiAgICBpZiAodXNlcm5hbWUudHJpbSgpKSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB1c2VybmFtZVxuICAgICAgfTtcbiAgICAgIHNldFVzZXJuYW1lKHVzZXJuYW1lKTtcbiAgICAgIGNsaWVudC5zZW5kKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgdHlwZTogXCJ1c2VyZXZlbnRcIlxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9uRWRpdG9yU3RhdGVDaGFuZ2UgPSAodGV4dCkgPT4ge1xuICAgIGNsaWVudC5zZW5kKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHR5cGU6IFwiY29udGVudGNoYW5nZVwiLFxuICAgICAgdXNlcm5hbWUsXG4gICAgICBjb250ZW50OiB0ZXh0XG4gICAgfSkpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2xpZW50Lm9ub3BlbiA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJTb2NrZXQgQ2xpZW50IENvbm5lY3RlZCcpO1xuICAgIH07XG4gICAgY2xpZW50Lm9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgICBjb25zdCBkYXRhRnJvbVNlcnZlciA9IEpTT04ucGFyc2UobWVzc2FnZS5kYXRhKTtcbiAgICAgIGlmIChkYXRhRnJvbVNlcnZlci50eXBlID09PSBcInVzZXJldmVudFwiKSB7XG4gICAgICAgIHNldEN1cnJlbnRVc2VycyhPYmplY3QudmFsdWVzKGRhdGFGcm9tU2VydmVyLmRhdGEudXNlcnMpKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YUZyb21TZXJ2ZXIudHlwZSA9PT0gXCJjb250ZW50Y2hhbmdlXCIpIHtcbiAgICAgICAgc2V0VGV4dChkYXRhRnJvbVNlcnZlci5kYXRhLmVkaXRvckNvbnRlbnQgfHwgY29udGVudERlZmF1bHRNZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHNldFVzZXJBY3Rpdml0eShkYXRhRnJvbVNlcnZlci5kYXRhLnVzZXJBY3Rpdml0eSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNob3dMb2dpblNlY3Rpb24gPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfX3dyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X19jYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X19wcm9maWxlXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhY2NvdW50X19uYW1lXCI+SGVsbG8sIHVzZXIhPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNjb3VudF9fc3ViXCI+Sm9pbiB0byBlZGl0IHRoZSBkb2N1bWVudDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW5wdXQgbmFtZT1cInVzZXJuYW1lXCIgcmVmPXt1c2VybmFtZVJlZn0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtsb2dJblVzZXJ9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBhY2NvdW50X19idG5cIj5Kb2luPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgY29uc3Qgc2hvd0VkaXRvclNlY3Rpb24gPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jdW1lbnQtaG9sZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VycmVudHVzZXJzXCI+XG4gICAgICAgICAge2N1cnJlbnRVc2Vycy5tYXAodXNlciA9PiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXt1c2VyLnVzZXJuYW1lfT5cbiAgICAgICAgICAgICAgPHNwYW4gaWQ9e3VzZXIudXNlcm5hbWV9IGNsYXNzTmFtZT1cInVzZXJJbmZvXCI+XG4gICAgICAgICAgICAgICAge3VzZXIudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgey8qIDxJZGVudGljb24gY2xhc3NOYW1lPVwiYWNjb3VudF9fYXZhdGFyXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiB1c2VyLnJhbmRvbWNvbG9yIH19IHNpemU9ezQwfSBzdHJpbmc9e3VzZXIudXNlcm5hbWV9IC8+ICovfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRhcmdldD17dXNlci51c2VybmFtZX0+XG4gICAgICAgICAgICAgICAge3VzZXIudXNlcm5hbWV9XG4gICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkVG9vbHRpcD5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBoZWxsb1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpc3RvcnktaG9sZGVyXCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7dXNlckFjdGl2aXR5Lm1hcCgoYWN0aXZpdHksIGluZGV4KSA9PiA8bGkga2V5PXtgYWN0aXZpdHktJHtpbmRleH1gfT57YWN0aXZpdHl9PC9saT4pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICB7dXNlcm5hbWUgPyBzaG93RWRpdG9yU2VjdGlvbigpIDogc2hvd0xvZ2luU2VjdGlvbigpfVxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ3M2N3ZWJzb2NrZXQiLCJXM0NXZWJTb2NrZXQiLCJOYXZiYXIiLCJOYXZiYXJCcmFuZCIsIlVuY29udHJvbGxlZFRvb2x0aXAiLCJjbGllbnQiLCJjb250ZW50RGVmYXVsdE1lc3NhZ2UiLCJBcHAiLCJjdXJyZW50VXNlcnMiLCJzZXRDdXJyZW50VXNlcnMiLCJ1c2VyQWN0aXZpdHkiLCJzZXRVc2VyQWN0aXZpdHkiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidGV4dCIsInNldFRleHQiLCJ1c2VybmFtZVJlZiIsImxvZ0luVXNlciIsImN1cnJlbnQiLCJ2YWx1ZSIsInRyaW0iLCJkYXRhIiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0eXBlIiwib25FZGl0b3JTdGF0ZUNoYW5nZSIsImNvbnRlbnQiLCJvbm9wZW4iLCJjb25zb2xlIiwibG9nIiwib25tZXNzYWdlIiwibWVzc2FnZSIsImRhdGFGcm9tU2VydmVyIiwicGFyc2UiLCJPYmplY3QiLCJ2YWx1ZXMiLCJ1c2VycyIsImVkaXRvckNvbnRlbnQiLCJzaG93TG9naW5TZWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImlucHV0IiwibmFtZSIsInJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzaG93RWRpdG9yU2VjdGlvbiIsIm1hcCIsInVzZXIiLCJGcmFnbWVudCIsInNwYW4iLCJpZCIsInBsYWNlbWVudCIsInRhcmdldCIsInVsIiwiYWN0aXZpdHkiLCJpbmRleCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});