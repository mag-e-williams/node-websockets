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

/***/ "./src/components/utilComponents/Meta.js":
/*!***********************************************!*\
  !*** ./src/components/utilComponents/Meta.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HOMEPAGE_TITLE: function() { return /* binding */ HOMEPAGE_TITLE; },\n/* harmony export */   Meta: function() { return /* binding */ Meta; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _s = $RefreshSig$();\n\n\n\nvar MAX_DESC_LENGTH = 300;\nvar SITE_NAME = \"yahtzee!\";\nvar HOMEPAGE_TITLE = \"multiplayer yahtzee game\";\nvar OG_IMAGE_API_ROUTE = \"api/og\";\nvar GRAPH_PREFIXES = [\n    \"og\",\n    \"twitter\"\n];\n/**\n * Small helper to create og: and twitter: elements for keys + content\n */ var graphMetaItems = function(graph) {\n    return Object.entries(graph).map(function(param) {\n        var _param = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)(param, 2), name = _param[0], content = _param[1];\n        return GRAPH_PREFIXES.map(function(prefix) {\n            return content ? '<meta key=\"'.concat(prefix, \":\").concat(name, 'graphmeta\" property=\"').concat(prefix, \":\").concat(name, '\" content=\"').concat(content, '\" />') : undefined;\n        });\n    });\n};\n/**\n * Populates the `<head>` of a given page from the title/description here\n */ function Meta(param) {\n    var title = param.title, description = param.description;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), 2), pageUrl = _useState[0], setPageUrl = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), 2), baseUrl = _useState1[0], setBaseUrl = _useState1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var host = window.location.host;\n        var newBaseUrl = \"https://\".concat(host);\n        setBaseUrl(newBaseUrl);\n        setPageUrl(\"\".concat(newBaseUrl).concat(router.pathname));\n    }, [\n        router.pathname\n    ]);\n    var truncatedDescription = description && description.length > MAX_DESC_LENGTH ? \"\".concat(description.slice(0, MAX_DESC_LENGTH), \"...\") : description;\n    var resolvedTitle = title ? \"\".concat(title, \" | \").concat(SITE_NAME) : SITE_NAME;\n    // Construct url-encoded title and subtitle for the og image\n    var imageTitle = encodeURIComponent(title || SITE_NAME);\n    var imageSubtitle = encodeURIComponent(title === HOMEPAGE_TITLE ? SITE_NAME : HOMEPAGE_TITLE);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:site_name\",\n                content: \"${SITE_NAME}\"\n            }, \"og:site_name\", false, {\n                fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/src/components/utilComponents/Meta.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:locale\",\n                content: \"en_US\"\n            }, \"og:locale\", false, {\n                fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/src/components/utilComponents/Meta.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:type\",\n                content: \"website\"\n            }, \"og:type\", false, {\n                fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/src/components/utilComponents/Meta.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"twitter:card\",\n                content: \"summary_large_image\"\n            }, \"twitter:card\", false, {\n                fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/src/components/utilComponents/Meta.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: resolvedTitle\n            }, \"title\", false, {\n                fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/src/components/utilComponents/Meta.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            truncatedDescription ? '<meta key=\"description\" name=\"description\" content=\"'.concat(truncatedDescription, '\" />') : \"\",\n            graphMetaItems({\n                title: title || SITE_NAME,\n                description: truncatedDescription,\n                url: pageUrl,\n                image: \"\".concat(baseUrl, \"/\").concat(OG_IMAGE_API_ROUTE, \"/\").concat(imageTitle, \"?subtitle=\").concat(imageSubtitle)\n            }).join(\"\"),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"icon\",\n                href: \"/favicon.ico\"\n            }, \"favicon\", false, {\n                fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/src/components/utilComponents/Meta.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"msapplication-TileColor\"\n            }, \"msapplication-TileColor\", false, {\n                fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/src/components/utilComponents/Meta.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/maggiewilliams/Documents/node-websockets/client/src/components/utilComponents/Meta.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Meta, \"O9CjewqJgLAZyrmBzFytLbdPKO4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Meta;\nvar _c;\n$RefreshReg$(_c, \"Meta\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91dGlsQ29tcG9uZW50cy9NZXRhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ1c7QUFDSTtBQUc1QyxJQUFNSSxrQkFBa0I7QUFDeEIsSUFBTUMsWUFBWTtBQUNYLElBQU1DLGlCQUFpQiwyQkFBMkI7QUFDekQsSUFBTUMscUJBQXFCO0FBQzNCLElBQU1DLGlCQUFpQjtJQUFDO0lBQU07Q0FBVTtBQUV4Qzs7Q0FFQyxHQUNELElBQU1DLGlCQUFpQixTQUFDQztXQUN0QkMsT0FBT0MsT0FBTyxDQUFDRixPQUFPRyxHQUFHLENBQUM7Z0dBQUVDLGtCQUFNQztlQUNoQ1AsZUFBZUssR0FBRyxDQUFDLFNBQUNHO21CQUNsQkQsVUFDRSxjQUF3QkQsT0FBVkUsUUFBTyxLQUErQkEsT0FBNUJGLE1BQUsseUJBQWlDQSxPQUFWRSxRQUFPLEtBQXFCRCxPQUFsQkQsTUFBSyxlQUFxQixPQUFSQyxTQUFRLFVBQ3RGRTs7OztBQUlWOztDQUVDLEdBQ00sU0FBU0MsS0FBSyxLQUFzQjtRQUFwQkMsUUFBRixNQUFFQSxPQUFPQyxjQUFULE1BQVNBOztJQUM1QixJQUFNQyxTQUFTcEIsc0RBQVNBO0lBQ3hCLElBQThCRSxZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsU0FBaENtQixVQUF1Qm5CLGNBQWRvQixhQUFjcEI7SUFDOUIsSUFBOEJBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxTQUFoQ3FCLFVBQXVCckIsZUFBZHNCLGFBQWN0QjtJQUU5QkQsZ0RBQVNBLENBQUM7UUFDUixJQUFNLE9BQVd5QixPQUFPQyxRQUFRLENBQXhCRjtRQUNSLElBQU1HLGFBQWEsV0FBZ0IsT0FBTEg7UUFDOUJELFdBQVdJO1FBQ1hOLFdBQVcsR0FBZ0JGLE9BQWJRLFlBQTZCLE9BQWhCUixPQUFPUyxRQUFRO0lBQzVDLEdBQUc7UUFBQ1QsT0FBT1MsUUFBUTtLQUFDO0lBRXBCLElBQU1DLHVCQUNKWCxlQUFlQSxZQUFZWSxNQUFNLEdBQUc1QixrQkFDaEMsR0FBeUMsT0FBdENnQixZQUFZYSxLQUFLLENBQUMsR0FBRzdCLGtCQUFpQixTQUN6Q2dCO0lBQ04sSUFBTWMsZ0JBQWdCZixRQUFRLEdBQWNkLE9BQVhjLE9BQU0sT0FBZSxPQUFWZCxhQUFjQTtJQUUxRCw0REFBNEQ7SUFDNUQsSUFBTThCLGFBQWFDLG1CQUFtQmpCLFNBQVNkO0lBQy9DLElBQU1nQyxnQkFBZ0JELG1CQUFtQmpCLFVBQVViLGlCQUFpQkQsWUFBWUM7SUFFaEYscUJBQ0UsOERBQUNOLGtEQUFJQTs7MEJBQ0gsOERBQUNzQztnQkFBd0JDLFVBQVM7Z0JBQWV4QixTQUFRO2VBQS9DOzs7OzswQkFDViw4REFBQ3VCO2dCQUFxQkMsVUFBUztnQkFBWXhCLFNBQVE7ZUFBekM7Ozs7OzBCQUNWLDhEQUFDdUI7Z0JBQW1CQyxVQUFTO2dCQUFVeEIsU0FBUTtlQUFyQzs7Ozs7MEJBQ1YsOERBQUN1QjtnQkFBd0J4QixNQUFLO2dCQUFlQyxTQUFRO2VBQTNDOzs7OzswQkFDViw4REFBQ0k7MEJBQW1CZTtlQUFUOzs7OztZQUNWSCx1QkFBdUIsdURBQTRFLE9BQXJCQSxzQkFBcUIsVUFBUTtZQUMzR3RCLGVBQWU7Z0JBQ2RVLE9BQU9BLFNBQVNkO2dCQUNoQmUsYUFBYVc7Z0JBQ2JTLEtBQUtsQjtnQkFDTG1CLE9BQU8sR0FBY2xDLE9BQVhpQixTQUFRLEtBQXlCVyxPQUF0QjVCLG9CQUFtQixLQUEwQjhCLE9BQXZCRixZQUFXLGNBQTBCLE9BQWRFO1lBQ3BFLEdBQUdLLElBQUksQ0FBQzswQkFDUiw4REFBQ0M7Z0JBQW1CQyxLQUFJO2dCQUFPQyxNQUFLO2VBQTFCOzs7OzswQkFDViw4REFBQ1A7Z0JBRUN4QixNQUFLO2VBREQ7Ozs7Ozs7Ozs7O0FBS1o7R0EzQ2dCSTs7UUFDQ2pCLGtEQUFTQTs7O0tBRFZpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy91dGlsQ29tcG9uZW50cy9NZXRhLmpzPzcwMWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cblxuY29uc3QgTUFYX0RFU0NfTEVOR1RIID0gMzAwO1xuY29uc3QgU0lURV9OQU1FID0gJ3lhaHR6ZWUhJztcbmV4cG9ydCBjb25zdCBIT01FUEFHRV9USVRMRSA9ICdtdWx0aXBsYXllciB5YWh0emVlIGdhbWUnO1xuY29uc3QgT0dfSU1BR0VfQVBJX1JPVVRFID0gJ2FwaS9vZyc7XG5jb25zdCBHUkFQSF9QUkVGSVhFUyA9IFsnb2cnLCAndHdpdHRlciddO1xuXG4vKipcbiAqIFNtYWxsIGhlbHBlciB0byBjcmVhdGUgb2c6IGFuZCB0d2l0dGVyOiBlbGVtZW50cyBmb3Iga2V5cyArIGNvbnRlbnRcbiAqL1xuY29uc3QgZ3JhcGhNZXRhSXRlbXMgPSAoZ3JhcGgpID0+XG4gIE9iamVjdC5lbnRyaWVzKGdyYXBoKS5tYXAoKFtuYW1lLCBjb250ZW50XSkgPT5cbiAgICBHUkFQSF9QUkVGSVhFUy5tYXAoKHByZWZpeCkgPT5cbiAgICAgIGNvbnRlbnQgPyAoXG4gICAgICAgIGA8bWV0YSBrZXk9XCIke3ByZWZpeH06JHtuYW1lfWdyYXBobWV0YVwiIHByb3BlcnR5PVwiJHtwcmVmaXh9OiR7bmFtZX1cIiBjb250ZW50PVwiJHtjb250ZW50fVwiIC8+YFxuICAgICAgKSA6IHVuZGVmaW5lZCxcbiAgICApLFxuICApO1xuXG4vKipcbiAqIFBvcHVsYXRlcyB0aGUgYDxoZWFkPmAgb2YgYSBnaXZlbiBwYWdlIGZyb20gdGhlIHRpdGxlL2Rlc2NyaXB0aW9uIGhlcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE1ldGEoeyB0aXRsZSwgZGVzY3JpcHRpb24gfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3BhZ2VVcmwsIHNldFBhZ2VVcmxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYmFzZVVybCwgc2V0QmFzZVVybF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IGhvc3QgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBjb25zdCBuZXdCYXNlVXJsID0gYGh0dHBzOi8vJHtob3N0fWA7XG4gICAgc2V0QmFzZVVybChuZXdCYXNlVXJsKTtcbiAgICBzZXRQYWdlVXJsKGAke25ld0Jhc2VVcmx9JHtyb3V0ZXIucGF0aG5hbWV9YCk7XG4gIH0sIFtyb3V0ZXIucGF0aG5hbWVdKTtcblxuICBjb25zdCB0cnVuY2F0ZWREZXNjcmlwdGlvbiA9XG4gICAgZGVzY3JpcHRpb24gJiYgZGVzY3JpcHRpb24ubGVuZ3RoID4gTUFYX0RFU0NfTEVOR1RIXG4gICAgICA/IGAke2Rlc2NyaXB0aW9uLnNsaWNlKDAsIE1BWF9ERVNDX0xFTkdUSCl9Li4uYFxuICAgICAgOiBkZXNjcmlwdGlvbjtcbiAgY29uc3QgcmVzb2x2ZWRUaXRsZSA9IHRpdGxlID8gYCR7dGl0bGV9IHwgJHtTSVRFX05BTUV9YCA6IFNJVEVfTkFNRTtcblxuICAvLyBDb25zdHJ1Y3QgdXJsLWVuY29kZWQgdGl0bGUgYW5kIHN1YnRpdGxlIGZvciB0aGUgb2cgaW1hZ2VcbiAgY29uc3QgaW1hZ2VUaXRsZSA9IGVuY29kZVVSSUNvbXBvbmVudCh0aXRsZSB8fCBTSVRFX05BTUUpO1xuICBjb25zdCBpbWFnZVN1YnRpdGxlID0gZW5jb2RlVVJJQ29tcG9uZW50KHRpdGxlID09PSBIT01FUEFHRV9USVRMRSA/IFNJVEVfTkFNRSA6IEhPTUVQQUdFX1RJVExFKTtcblxuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgPG1ldGEga2V5PVwib2c6c2l0ZV9uYW1lXCIgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiJHtTSVRFX05BTUV9XCIgLz5cbiAgICAgIDxtZXRhIGtleT1cIm9nOmxvY2FsZVwiIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cImVuX1VTXCIgLz5cbiAgICAgIDxtZXRhIGtleT1cIm9nOnR5cGVcIiBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICA8bWV0YSBrZXk9XCJ0d2l0dGVyOmNhcmRcIiBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgPHRpdGxlIGtleT1cInRpdGxlXCI+e3Jlc29sdmVkVGl0bGV9PC90aXRsZT5cbiAgICAgIHt0cnVuY2F0ZWREZXNjcmlwdGlvbiA/IGA8bWV0YSBrZXk9XCJkZXNjcmlwdGlvblwiIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCIke3RydW5jYXRlZERlc2NyaXB0aW9ufVwiIC8+YCA6ICcnfVxuICAgICAge2dyYXBoTWV0YUl0ZW1zKHtcbiAgICAgICAgdGl0bGU6IHRpdGxlIHx8IFNJVEVfTkFNRSxcbiAgICAgICAgZGVzY3JpcHRpb246IHRydW5jYXRlZERlc2NyaXB0aW9uLFxuICAgICAgICB1cmw6IHBhZ2VVcmwsXG4gICAgICAgIGltYWdlOiBgJHtiYXNlVXJsfS8ke09HX0lNQUdFX0FQSV9ST1VURX0vJHtpbWFnZVRpdGxlfT9zdWJ0aXRsZT0ke2ltYWdlU3VidGl0bGV9YCxcbiAgICAgIH0pLmpvaW4oJycpfVxuICAgICAgPGxpbmsga2V5PVwiZmF2aWNvblwiIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDxtZXRhXG4gICAgICAgIGtleT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCJcbiAgICAgICAgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCJcbiAgICAgIC8+XG4gICAgPC9IZWFkPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1BWF9ERVNDX0xFTkdUSCIsIlNJVEVfTkFNRSIsIkhPTUVQQUdFX1RJVExFIiwiT0dfSU1BR0VfQVBJX1JPVVRFIiwiR1JBUEhfUFJFRklYRVMiLCJncmFwaE1ldGFJdGVtcyIsImdyYXBoIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsIm5hbWUiLCJjb250ZW50IiwicHJlZml4IiwidW5kZWZpbmVkIiwiTWV0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJyb3V0ZXIiLCJwYWdlVXJsIiwic2V0UGFnZVVybCIsImJhc2VVcmwiLCJzZXRCYXNlVXJsIiwiaG9zdCIsIndpbmRvdyIsImxvY2F0aW9uIiwibmV3QmFzZVVybCIsInBhdGhuYW1lIiwidHJ1bmNhdGVkRGVzY3JpcHRpb24iLCJsZW5ndGgiLCJzbGljZSIsInJlc29sdmVkVGl0bGUiLCJpbWFnZVRpdGxlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaW1hZ2VTdWJ0aXRsZSIsIm1ldGEiLCJwcm9wZXJ0eSIsInVybCIsImltYWdlIiwiam9pbiIsImxpbmsiLCJyZWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/utilComponents/Meta.js\n"));

/***/ })

});