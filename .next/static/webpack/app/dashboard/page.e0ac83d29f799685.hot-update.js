"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./components/ChatGptInstructionInput.js":
/*!***********************************************!*\
  !*** ./components/ChatGptInstructionInput.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_PaperAirplaneIcon_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=PaperAirplaneIcon!=!@heroicons/react/20/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/20/solid/esm/PaperAirplaneIcon.js\");\n\n\nconst GhatGptInstructionInput = (param)=>{\n    let { setPrompt, handleSubmit } = param;\n    const handleChange = (e)=>{\n        setPrompt(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"flex\",\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    autoComplete: \"false\",\n                    className: \"block w-full border-0 py-1.5 h-[50px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 rounded-br-md rounded-bl-md\",\n                    placeholder: \"How I can help you today?\",\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"/home/iqbal/ReactJs/Fiverr Work4/andr1hs/Andri Work/editor/components/ChatGptInstructionInput.js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"w-[80px] border border-red-500 text-center flex\",\n                    type: \"submit\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_PaperAirplaneIcon_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"h-5 w-5 text-blue-400\"\n                    }, void 0, false, {\n                        fileName: \"/home/iqbal/ReactJs/Fiverr Work4/andr1hs/Andri Work/editor/components/ChatGptInstructionInput.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/iqbal/ReactJs/Fiverr Work4/andr1hs/Andri Work/editor/components/ChatGptInstructionInput.js\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/iqbal/ReactJs/Fiverr Work4/andr1hs/Andri Work/editor/components/ChatGptInstructionInput.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/iqbal/ReactJs/Fiverr Work4/andr1hs/Andri Work/editor/components/ChatGptInstructionInput.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = GhatGptInstructionInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GhatGptInstructionInput);\nvar _c;\n$RefreshReg$(_c, \"GhatGptInstructionInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2hhdEdwdEluc3RydWN0aW9uSW5wdXQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUE4RDtBQUM5RCxNQUFNQywwQkFBMEI7UUFBQyxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRTtJQUMxRCxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCSCxVQUFVRyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDMUI7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBS0QsV0FBVTtZQUFPRSxVQUFVUjs7OEJBQy9CLDhEQUFDUztvQkFDQ0MsTUFBSztvQkFDTEMsY0FBYTtvQkFDYkwsV0FBVTtvQkFDVk0sYUFBWTtvQkFDWkMsVUFBVVo7Ozs7Ozs4QkFFWiw4REFBQ2E7b0JBQ0NSLFdBQVU7b0JBQ1ZJLE1BQUs7OEJBRUwsNEVBQUNiLHlHQUFpQkE7d0JBQUNTLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkM7S0F2Qk1SO0FBd0JOLCtEQUFlQSx1QkFBdUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGF0R3B0SW5zdHJ1Y3Rpb25JbnB1dC5qcz85MjJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhcGVyQWlycGxhbmVJY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC8yMC9zb2xpZCc7XG5jb25zdCBHaGF0R3B0SW5zdHJ1Y3Rpb25JbnB1dCA9ICh7IHNldFByb21wdCwgaGFuZGxlU3VibWl0IH0pID0+IHtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRQcm9tcHQoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmYWxzZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIGJvcmRlci0wIHB5LTEuNSBoLVs1MHB4XSB0ZXh0LWdyYXktOTAwIHNoYWRvdy1zbSByaW5nLTEgcmluZy1pbnNldCByaW5nLWdyYXktMzAwIHBsYWNlaG9sZGVyOnRleHQtZ3JheS00MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1pbmRpZ28tNjAwIHNtOnRleHQtc20gc206bGVhZGluZy02IHJvdW5kZWQtYnItbWQgcm91bmRlZC1ibC1tZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJIb3cgSSBjYW4gaGVscCB5b3UgdG9kYXk/XCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1bODBweF0gYm9yZGVyIGJvcmRlci1yZWQtNTAwIHRleHQtY2VudGVyIGZsZXhcIlxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICA+XG4gICAgICAgICAgPFBhcGVyQWlycGxhbmVJY29uIGNsYXNzTmFtZT1cImgtNSB3LTUgdGV4dC1ibHVlLTQwMFwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEdoYXRHcHRJbnN0cnVjdGlvbklucHV0O1xuIl0sIm5hbWVzIjpbIlBhcGVyQWlycGxhbmVJY29uIiwiR2hhdEdwdEluc3RydWN0aW9uSW5wdXQiLCJzZXRQcm9tcHQiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJhdXRvQ29tcGxldGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ChatGptInstructionInput.js\n"));

/***/ })

});