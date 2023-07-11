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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var websocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! websocket */ \"./node_modules/websocket/lib/browser.js\");\n/* harmony import */ var websocket__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(websocket__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/esm/index.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n// import Identicon from 'react-identicons';\n\n// import Editor from 'react-medium-editor';\n// import 'medium-editor/dist/css/medium-editor.css';\n// import 'medium-editor/dist/css/themes/default.css';\n// import './App.css';\nvar client = new websocket__WEBPACK_IMPORTED_MODULE_2__.w3cwebsocket(\"ws://127.0.0.1:8000\");\nvar contentDefaultMessage = \"Start writing your document here\";\nvar App = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), currentUsers = _useState[0], setCurrentUsers = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), userActivity = _useState1[0], setUserActivity = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), username = _useState2[0], setUsername = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), text = _useState3[0], setText = _useState3[1];\n    var usernameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var logInUser = function() {\n        var username = usernameRef.current.value;\n        if (username.trim()) {\n            var data = {\n                username: username\n            };\n            setUsername(username);\n            client.send(JSON.stringify((0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_4__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_5__._)({}, data), {\n                type: \"userevent\"\n            })));\n        }\n    };\n    var onEditorStateChange = function(text) {\n        client.send(JSON.stringify({\n            type: \"contentchange\",\n            username: username,\n            content: text\n        }));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        client.onopen = function() {\n            console.log(\"WebSocket Client Connected\");\n        };\n        client.onmessage = function(message) {\n            var dataFromServer = JSON.parse(message.data);\n            if (dataFromServer.type === \"userevent\") {\n                setCurrentUsers(Object.values(dataFromServer.data.users));\n            } else if (dataFromServer.type === \"contentchange\") {\n                setText(dataFromServer.data.editorContent || contentDefaultMessage);\n            }\n            setUserActivity(dataFromServer.data.userActivity);\n        };\n    }, []);\n    var showLoginSection = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"account\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"account__wrapper\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"account__card\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"account__profile\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"account__name\",\n                                    children: \"Hello, user!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"account__sub\",\n                                    children: \"Join to edit the document\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            name: \"username\",\n                            ref: usernameRef,\n                            className: \"form-control\"\n                        }, void 0, false, {\n                            fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: logInUser,\n                            className: \"btn btn-primary account__btn\",\n                            children: \"Join\"\n                        }, void 0, false, {\n                            fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n            lineNumber: 63,\n            columnNumber: 5\n        }, _this);\n    };\n    console.log(currentUsers, username);\n    var showEditorSection = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"main-content\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"document-holder\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"currentusers\",\n                            children: currentUsers.map(function(user) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            id: user.username,\n                                            className: \"userInfo\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Identicon, {\n                                                className: \"account__avatar\",\n                                                style: {\n                                                    backgroundColor: user.randomcolor\n                                                },\n                                                size: 40,\n                                                string: user.username\n                                            }, void 0, false, {\n                                                fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                                                lineNumber: 86,\n                                                columnNumber: 17\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.UncontrolledTooltip, {\n                                            placement: \"top\",\n                                            target: user.username,\n                                            children: user.username\n                                        }, void 0, false, {\n                                            fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, user.username, true, {\n                                    fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                            lineNumber: 82,\n                            columnNumber: 9\n                        }, _this),\n                        \"hello\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                    lineNumber: 81,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"history-holder\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: userActivity.map(function(activity, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: activity\n                            }, \"activity-\".concat(index), false, {\n                                fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                                lineNumber: 108,\n                                columnNumber: 50\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n                    lineNumber: 106,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n            lineNumber: 80,\n            columnNumber: 5\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid\",\n            children: username ? showEditorSection() : showLoginSection()\n        }, void 0, false, {\n            fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n            lineNumber: 116,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/pages/index.js\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, _this);\n};\n_s(App, \"l1+EkCRJKYeatevmUSJhKSAoifk=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUlILEtBQUt0QyxRQUFROzRDQUFFNkIsV0FBVTtzREFDakMsNEVBQUNhO2dEQUFVYixXQUFVO2dEQUFrQmMsT0FBTztvREFBRUMsaUJBQWlCTixLQUFLTyxXQUFXO2dEQUFDO2dEQUFHQyxNQUFNO2dEQUFJQyxRQUFRVCxLQUFLdEMsUUFBUTs7Ozs7Ozs7Ozs7c0RBRXRILDhEQUFDUiwyREFBbUJBOzRDQUFDd0QsV0FBVTs0Q0FBTUMsUUFBUVgsS0FBS3RDLFFBQVE7c0RBQ3ZEc0MsS0FBS3RDLFFBQVE7Ozs7Ozs7bUNBTEdzQyxLQUFLdEMsUUFBUTs7Ozs7Ozs7Ozs7d0JBU2hDOzs7Ozs7OzhCQWFSLDhEQUFDNEI7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNxQjtrQ0FDRXBELGFBQWF1QyxHQUFHLENBQUMsU0FBQ2MsVUFBVUM7aURBQVUsOERBQUNDOzBDQUE4QkY7K0JBQXRCLFlBQWtCLE9BQU5DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU1wRSxxQkFDRSw4REFBQ3BFLHVEQUFjO2tCQUNiLDRFQUFDNEM7WUFBSUMsV0FBVTtzQkFDWjdCLFdBQVdvQyxzQkFBc0JUOzs7Ozs7Ozs7OztBQUkxQztHQXhHTWhDO0tBQUFBO0FBMEdOLCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHczY3dlYnNvY2tldCBhcyBXM0NXZWJTb2NrZXQgfSBmcm9tIFwid2Vic29ja2V0XCI7XG4vLyBpbXBvcnQgSWRlbnRpY29uIGZyb20gJ3JlYWN0LWlkZW50aWNvbnMnO1xuaW1wb3J0IHtcbiAgTmF2YmFyLFxuICBOYXZiYXJCcmFuZCxcbiAgVW5jb250cm9sbGVkVG9vbHRpcFxufSBmcm9tICdyZWFjdHN0cmFwJztcbi8vIGltcG9ydCBFZGl0b3IgZnJvbSAncmVhY3QtbWVkaXVtLWVkaXRvcic7XG4vLyBpbXBvcnQgJ21lZGl1bS1lZGl0b3IvZGlzdC9jc3MvbWVkaXVtLWVkaXRvci5jc3MnO1xuLy8gaW1wb3J0ICdtZWRpdW0tZWRpdG9yL2Rpc3QvY3NzL3RoZW1lcy9kZWZhdWx0LmNzcyc7XG4vLyBpbXBvcnQgJy4vQXBwLmNzcyc7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBXM0NXZWJTb2NrZXQoJ3dzOi8vMTI3LjAuMC4xOjgwMDAnKTtcbmNvbnN0IGNvbnRlbnREZWZhdWx0TWVzc2FnZSA9IFwiU3RhcnQgd3JpdGluZyB5b3VyIGRvY3VtZW50IGhlcmVcIjtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudFVzZXJzLCBzZXRDdXJyZW50VXNlcnNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdXNlckFjdGl2aXR5LCBzZXRVc2VyQWN0aXZpdHldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgdXNlcm5hbWVSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgbG9nSW5Vc2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJuYW1lID0gdXNlcm5hbWVSZWYuY3VycmVudC52YWx1ZTtcbiAgICBpZiAodXNlcm5hbWUudHJpbSgpKSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICB1c2VybmFtZVxuICAgICAgfTtcbiAgICAgIHNldFVzZXJuYW1lKHVzZXJuYW1lKTtcbiAgICAgIGNsaWVudC5zZW5kKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgdHlwZTogXCJ1c2VyZXZlbnRcIlxuICAgICAgfSkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9uRWRpdG9yU3RhdGVDaGFuZ2UgPSAodGV4dCkgPT4ge1xuICAgIGNsaWVudC5zZW5kKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHR5cGU6IFwiY29udGVudGNoYW5nZVwiLFxuICAgICAgdXNlcm5hbWUsXG4gICAgICBjb250ZW50OiB0ZXh0XG4gICAgfSkpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2xpZW50Lm9ub3BlbiA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJTb2NrZXQgQ2xpZW50IENvbm5lY3RlZCcpO1xuICAgIH07XG4gICAgY2xpZW50Lm9ubWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XG4gICAgICBjb25zdCBkYXRhRnJvbVNlcnZlciA9IEpTT04ucGFyc2UobWVzc2FnZS5kYXRhKTtcbiAgICAgIGlmIChkYXRhRnJvbVNlcnZlci50eXBlID09PSBcInVzZXJldmVudFwiKSB7XG4gICAgICAgIHNldEN1cnJlbnRVc2VycyhPYmplY3QudmFsdWVzKGRhdGFGcm9tU2VydmVyLmRhdGEudXNlcnMpKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YUZyb21TZXJ2ZXIudHlwZSA9PT0gXCJjb250ZW50Y2hhbmdlXCIpIHtcbiAgICAgICAgc2V0VGV4dChkYXRhRnJvbVNlcnZlci5kYXRhLmVkaXRvckNvbnRlbnQgfHwgY29udGVudERlZmF1bHRNZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHNldFVzZXJBY3Rpdml0eShkYXRhRnJvbVNlcnZlci5kYXRhLnVzZXJBY3Rpdml0eSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNob3dMb2dpblNlY3Rpb24gPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnRfX3dyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X19jYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50X19wcm9maWxlXCI+XG4gICAgICAgICAgICB7LyogPElkZW50aWNvbiBjbGFzc05hbWU9XCJhY2NvdW50X19hdmF0YXJcIiBzaXplPXs2NH0gc3RyaW5nPVwicmFuZG9tbmVzc1wiIC8+ICovfVxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNjb3VudF9fbmFtZVwiPkhlbGxvLCB1c2VyITwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFjY291bnRfX3N1YlwiPkpvaW4gdG8gZWRpdCB0aGUgZG9jdW1lbnQ8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGlucHV0IG5hbWU9XCJ1c2VybmFtZVwiIHJlZj17dXNlcm5hbWVSZWZ9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17bG9nSW5Vc2VyfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYWNjb3VudF9fYnRuXCI+Sm9pbjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRVc2VycywgdXNlcm5hbWUpXG4gIGNvbnN0IHNob3dFZGl0b3JTZWN0aW9uID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvY3VtZW50LWhvbGRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnJlbnR1c2Vyc1wiPlxuICAgICAgICAgIHtjdXJyZW50VXNlcnMubWFwKHVzZXIgPT4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17dXNlci51c2VybmFtZX0+XG4gICAgICAgICAgICAgIDxzcGFuIGlkPXt1c2VyLnVzZXJuYW1lfSBjbGFzc05hbWU9XCJ1c2VySW5mb1wiPlxuICAgICAgICAgICAgICAgIDxJZGVudGljb24gY2xhc3NOYW1lPVwiYWNjb3VudF9fYXZhdGFyXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiB1c2VyLnJhbmRvbWNvbG9yIH19IHNpemU9ezQwfSBzdHJpbmc9e3VzZXIudXNlcm5hbWV9IC8+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPFVuY29udHJvbGxlZFRvb2x0aXAgcGxhY2VtZW50PVwidG9wXCIgdGFyZ2V0PXt1c2VyLnVzZXJuYW1lfT5cbiAgICAgICAgICAgICAgICB7dXNlci51c2VybmFtZX1cbiAgICAgICAgICAgICAgPC9VbmNvbnRyb2xsZWRUb29sdGlwPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGhlbGxvXG4gICAgICAgIHsvKiA8RWRpdG9yXG4gICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgICAgICAgdGV4dDogdGV4dCA/IGNvbnRlbnREZWZhdWx0TWVzc2FnZSA6IFwiXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvZHktZWRpdG9yXCJcbiAgICAgICAgICB0ZXh0PXt0ZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkVkaXRvclN0YXRlQ2hhbmdlfVxuICAgICAgICAvPiAqL31cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaXN0b3J5LWhvbGRlclwiPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3VzZXJBY3Rpdml0eS5tYXAoKGFjdGl2aXR5LCBpbmRleCkgPT4gPGxpIGtleT17YGFjdGl2aXR5LSR7aW5kZXh9YH0+e2FjdGl2aXR5fTwvbGk+KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAge3VzZXJuYW1lID8gc2hvd0VkaXRvclNlY3Rpb24oKSA6IHNob3dMb2dpblNlY3Rpb24oKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidzNjd2Vic29ja2V0IiwiVzNDV2ViU29ja2V0IiwiTmF2YmFyIiwiTmF2YmFyQnJhbmQiLCJVbmNvbnRyb2xsZWRUb29sdGlwIiwiY2xpZW50IiwiY29udGVudERlZmF1bHRNZXNzYWdlIiwiQXBwIiwiY3VycmVudFVzZXJzIiwic2V0Q3VycmVudFVzZXJzIiwidXNlckFjdGl2aXR5Iiwic2V0VXNlckFjdGl2aXR5IiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInRleHQiLCJzZXRUZXh0IiwidXNlcm5hbWVSZWYiLCJsb2dJblVzZXIiLCJjdXJyZW50IiwidmFsdWUiLCJ0cmltIiwiZGF0YSIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5IiwidHlwZSIsIm9uRWRpdG9yU3RhdGVDaGFuZ2UiLCJjb250ZW50Iiwib25vcGVuIiwiY29uc29sZSIsImxvZyIsIm9ubWVzc2FnZSIsIm1lc3NhZ2UiLCJkYXRhRnJvbVNlcnZlciIsInBhcnNlIiwiT2JqZWN0IiwidmFsdWVzIiwidXNlcnMiLCJlZGl0b3JDb250ZW50Iiwic2hvd0xvZ2luU2VjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJpbnB1dCIsIm5hbWUiLCJyZWYiLCJidXR0b24iLCJvbkNsaWNrIiwic2hvd0VkaXRvclNlY3Rpb24iLCJtYXAiLCJ1c2VyIiwiRnJhZ21lbnQiLCJzcGFuIiwiaWQiLCJJZGVudGljb24iLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInJhbmRvbWNvbG9yIiwic2l6ZSIsInN0cmluZyIsInBsYWNlbWVudCIsInRhcmdldCIsInVsIiwiYWN0aXZpdHkiLCJpbmRleCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});