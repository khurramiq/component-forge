"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/gpt/new/route";
exports.ids = ["app/api/gpt/new/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:stream");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgpt%2Fnew%2Froute&page=%2Fapi%2Fgpt%2Fnew%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgpt%2Fnew%2Froute.js&appDir=%2Fhome%2Fiqbal%2FReactJs%2FFiverr%20Work4%2Fandr1hs%2FAndri%20Work%2Feditor%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fiqbal%2FReactJs%2FFiverr%20Work4%2Fandr1hs%2FAndri%20Work%2Feditor&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgpt%2Fnew%2Froute&page=%2Fapi%2Fgpt%2Fnew%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgpt%2Fnew%2Froute.js&appDir=%2Fhome%2Fiqbal%2FReactJs%2FFiverr%20Work4%2Fandr1hs%2FAndri%20Work%2Feditor%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fiqbal%2FReactJs%2FFiverr%20Work4%2Fandr1hs%2FAndri%20Work%2Feditor&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_iqbal_ReactJs_Fiverr_Work4_andr1hs_Andri_Work_editor_app_api_gpt_new_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/gpt/new/route.js */ \"(rsc)/./app/api/gpt/new/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/gpt/new/route\",\n        pathname: \"/api/gpt/new\",\n        filename: \"route\",\n        bundlePath: \"app/api/gpt/new/route\"\n    },\n    resolvedPagePath: \"/home/iqbal/ReactJs/Fiverr Work4/andr1hs/Andri Work/editor/app/api/gpt/new/route.js\",\n    nextConfigOutput,\n    userland: _home_iqbal_ReactJs_Fiverr_Work4_andr1hs_Andri_Work_editor_app_api_gpt_new_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/gpt/new/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZncHQlMkZuZXclMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmdwdCUyRm5ldyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmdwdCUyRm5ldyUyRnJvdXRlLmpzJmFwcERpcj0lMkZob21lJTJGaXFiYWwlMkZSZWFjdEpzJTJGRml2ZXJyJTIwV29yazQlMkZhbmRyMWhzJTJGQW5kcmklMjBXb3JrJTJGZWRpdG9yJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGaXFiYWwlMkZSZWFjdEpzJTJGRml2ZXJyJTIwV29yazQlMkZhbmRyMWhzJTJGQW5kcmklMjBXb3JrJTJGZWRpdG9yJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ21DO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG91cnNlLz8zMzYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9ob21lL2lxYmFsL1JlYWN0SnMvRml2ZXJyIFdvcms0L2FuZHIxaHMvQW5kcmkgV29yay9lZGl0b3IvYXBwL2FwaS9ncHQvbmV3L3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9ncHQvbmV3L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZ3B0L25ld1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZ3B0L25ldy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL2lxYmFsL1JlYWN0SnMvRml2ZXJyIFdvcms0L2FuZHIxaHMvQW5kcmkgV29yay9lZGl0b3IvYXBwL2FwaS9ncHQvbmV3L3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2dwdC9uZXcvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgpt%2Fnew%2Froute&page=%2Fapi%2Fgpt%2Fnew%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgpt%2Fnew%2Froute.js&appDir=%2Fhome%2Fiqbal%2FReactJs%2FFiverr%20Work4%2Fandr1hs%2FAndri%20Work%2Feditor%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fiqbal%2FReactJs%2FFiverr%20Work4%2Fandr1hs%2FAndri%20Work%2Feditor&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/gpt/new/route.js":
/*!**********************************!*\
  !*** ./app/api/gpt/new/route.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openai */ \"(rsc)/./node_modules/openai/index.mjs\");\n\n\nconst dynamic = \"force-dynamic\";\nconst POST = async (req)=>{\n    const { prompt, conversationHistory } = await req.json();\n    try {\n        const openai = new openai__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            apiKey: process.env.OPENAI_SECRET_KEY\n        });\n        let promptWithHistory = \"\"; // Start with the current prompt\n        // If there is previous conversation history, add it to the prompt\n        if (conversationHistory && conversationHistory.length > 0) {\n            promptWithHistory += \"\\n\" + conversationHistory.map((entry)=>`${entry.prompt} ${entry.response}`).join(\"\\n\");\n            promptWithHistory += \"\\n\" + prompt;\n        } else {\n            promptWithHistory = prompt;\n        }\n        console.log(\"promptWithHistory\", promptWithHistory);\n        // Making the API call to ChatGPT\n        const chatCompletion = await openai.chat.completions.create({\n            messages: [\n                {\n                    role: \"user\",\n                    content: promptWithHistory\n                }\n            ],\n            model: \"gpt-4-turbo\"\n        });\n        console.log(\"choice\", chatCompletion.choices[0]);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            content: chatCompletion.choices[0].message.content\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.log(\"error\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].error(error.message, {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2dwdC9uZXcvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQztBQUNmO0FBRXJCLE1BQU1FLFVBQVUsZ0JBQWdCO0FBRWhDLE1BQU1DLE9BQU8sT0FBT0M7SUFDekIsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLG1CQUFtQixFQUFFLEdBQUcsTUFBTUYsSUFBSUcsSUFBSTtJQUV0RCxJQUFJO1FBQ0YsTUFBTUMsU0FBUyxJQUFJUCw4Q0FBTUEsQ0FBQztZQUN4QlEsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxpQkFBaUI7UUFDdkM7UUFFQSxJQUFJQyxvQkFBb0IsSUFBSSxnQ0FBZ0M7UUFFNUQsa0VBQWtFO1FBQ2xFLElBQUlQLHVCQUF1QkEsb0JBQW9CUSxNQUFNLEdBQUcsR0FBRztZQUN6REQscUJBQ0UsT0FDQVAsb0JBQ0dTLEdBQUcsQ0FBQyxDQUFDQyxRQUFVLENBQUMsRUFBRUEsTUFBTVgsTUFBTSxDQUFDLENBQUMsRUFBRVcsTUFBTUMsUUFBUSxDQUFDLENBQUMsRUFDbERDLElBQUksQ0FBQztZQUNWTCxxQkFBcUIsT0FBT1I7UUFDOUIsT0FBTztZQUNMUSxvQkFBb0JSO1FBQ3RCO1FBRUFjLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJQO1FBRWpDLGlDQUFpQztRQUNqQyxNQUFNUSxpQkFBaUIsTUFBTWIsT0FBT2MsSUFBSSxDQUFDQyxXQUFXLENBQUNDLE1BQU0sQ0FBQztZQUMxREMsVUFBVTtnQkFBQztvQkFBRUMsTUFBTTtvQkFBUUMsU0FBU2Q7Z0JBQWtCO2FBQUU7WUFDeERlLE9BQU87UUFDVDtRQUVBVCxRQUFRQyxHQUFHLENBQUMsVUFBVUMsZUFBZVEsT0FBTyxDQUFDLEVBQUU7UUFFL0MsT0FBTzdCLGtGQUFZQSxDQUFDTyxJQUFJLENBQ3RCO1lBQUVvQixTQUFTTixlQUFlUSxPQUFPLENBQUMsRUFBRSxDQUFDQyxPQUFPLENBQUNILE9BQU87UUFBQyxHQUNyRDtZQUFFSSxRQUFRO1FBQUk7SUFFbEIsRUFBRSxPQUFPQyxPQUFPO1FBQ2RiLFFBQVFDLEdBQUcsQ0FBQyxTQUFTWTtRQUNyQixPQUFPaEMsa0ZBQVlBLENBQUNnQyxLQUFLLENBQUNBLE1BQU1GLE9BQU8sRUFBRTtZQUFFQyxRQUFRO1FBQUk7SUFDekQ7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG91cnNlLy4vYXBwL2FwaS9ncHQvbmV3L3JvdXRlLmpzPzg0MDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IE9wZW5BSSBmcm9tICdvcGVuYWknO1xuXG5leHBvcnQgY29uc3QgZHluYW1pYyA9ICdmb3JjZS1keW5hbWljJztcblxuZXhwb3J0IGNvbnN0IFBPU1QgPSBhc3luYyAocmVxKSA9PiB7XG4gIGNvbnN0IHsgcHJvbXB0LCBjb252ZXJzYXRpb25IaXN0b3J5IH0gPSBhd2FpdCByZXEuanNvbigpO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSSh7XG4gICAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9TRUNSRVRfS0VZLFxuICAgIH0pO1xuXG4gICAgbGV0IHByb21wdFdpdGhIaXN0b3J5ID0gJyc7IC8vIFN0YXJ0IHdpdGggdGhlIGN1cnJlbnQgcHJvbXB0XG5cbiAgICAvLyBJZiB0aGVyZSBpcyBwcmV2aW91cyBjb252ZXJzYXRpb24gaGlzdG9yeSwgYWRkIGl0IHRvIHRoZSBwcm9tcHRcbiAgICBpZiAoY29udmVyc2F0aW9uSGlzdG9yeSAmJiBjb252ZXJzYXRpb25IaXN0b3J5Lmxlbmd0aCA+IDApIHtcbiAgICAgIHByb21wdFdpdGhIaXN0b3J5ICs9XG4gICAgICAgICdcXG4nICtcbiAgICAgICAgY29udmVyc2F0aW9uSGlzdG9yeVxuICAgICAgICAgIC5tYXAoKGVudHJ5KSA9PiBgJHtlbnRyeS5wcm9tcHR9ICR7ZW50cnkucmVzcG9uc2V9YClcbiAgICAgICAgICAuam9pbignXFxuJyk7XG4gICAgICBwcm9tcHRXaXRoSGlzdG9yeSArPSAnXFxuJyArIHByb21wdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbXB0V2l0aEhpc3RvcnkgPSBwcm9tcHQ7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ3Byb21wdFdpdGhIaXN0b3J5JywgcHJvbXB0V2l0aEhpc3RvcnkpO1xuXG4gICAgLy8gTWFraW5nIHRoZSBBUEkgY2FsbCB0byBDaGF0R1BUXG4gICAgY29uc3QgY2hhdENvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY2hhdC5jb21wbGV0aW9ucy5jcmVhdGUoe1xuICAgICAgbWVzc2FnZXM6IFt7IHJvbGU6ICd1c2VyJywgY29udGVudDogcHJvbXB0V2l0aEhpc3RvcnkgfV0sXG4gICAgICBtb2RlbDogJ2dwdC00LXR1cmJvJyxcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKCdjaG9pY2UnLCBjaGF0Q29tcGxldGlvbi5jaG9pY2VzWzBdKTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgY29udGVudDogY2hhdENvbXBsZXRpb24uY2hvaWNlc1swXS5tZXNzYWdlLmNvbnRlbnQgfSxcbiAgICAgIHsgc3RhdHVzOiAyMDAgfVxuICAgICk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuZXJyb3IoZXJyb3IubWVzc2FnZSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJPcGVuQUkiLCJkeW5hbWljIiwiUE9TVCIsInJlcSIsInByb21wdCIsImNvbnZlcnNhdGlvbkhpc3RvcnkiLCJqc29uIiwib3BlbmFpIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9TRUNSRVRfS0VZIiwicHJvbXB0V2l0aEhpc3RvcnkiLCJsZW5ndGgiLCJtYXAiLCJlbnRyeSIsInJlc3BvbnNlIiwiam9pbiIsImNvbnNvbGUiLCJsb2ciLCJjaGF0Q29tcGxldGlvbiIsImNoYXQiLCJjb21wbGV0aW9ucyIsImNyZWF0ZSIsIm1lc3NhZ2VzIiwicm9sZSIsImNvbnRlbnQiLCJtb2RlbCIsImNob2ljZXMiLCJtZXNzYWdlIiwic3RhdHVzIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/gpt/new/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/formdata-node","vendor-chunks/openai","vendor-chunks/form-data-encoder","vendor-chunks/node-fetch","vendor-chunks/agentkeepalive","vendor-chunks/web-streams-polyfill","vendor-chunks/ms","vendor-chunks/humanize-ms","vendor-chunks/event-target-shim","vendor-chunks/abort-controller"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fgpt%2Fnew%2Froute&page=%2Fapi%2Fgpt%2Fnew%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fgpt%2Fnew%2Froute.js&appDir=%2Fhome%2Fiqbal%2FReactJs%2FFiverr%20Work4%2Fandr1hs%2FAndri%20Work%2Feditor%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fiqbal%2FReactJs%2FFiverr%20Work4%2Fandr1hs%2FAndri%20Work%2Feditor&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();