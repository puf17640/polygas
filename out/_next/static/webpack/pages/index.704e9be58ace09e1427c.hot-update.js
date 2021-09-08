webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_moon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/moon.svg */ \"./public/moon.svg\");\n/* harmony import */ var _public_sun_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/sun.svg */ \"./public/sun.svg\");\n/* harmony import */ var _public_discord_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/discord.svg */ \"./public/discord.svg\");\n\n\nvar _jsxFileName = \"/Users/julian/Projects/polygas/components/layout.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Layout(_ref) {\n  _s();\n\n  var title = _ref.title,\n      children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isDarkmode = _useState[0],\n      setIsDarkmode = _useState[1];\n\n  var toggleDarkmode = function toggleDarkmode(darkmode) {\n    if (darkmode) {\n      document.documentElement.classList.add(\"dark\");\n    } else {\n      document.documentElement.classList.remove(\"dark\");\n    }\n\n    localStorage.setItem(\"theme\", darkmode ? \"dark\" : \"light\");\n    setIsDarkmode(darkmode);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    toggleDarkmode(localStorage.getItem(\"theme\") === \"dark\");\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: [title, \" \", title ? \" | \" : \"\", \" PolyGas\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"title\",\n        content: \"title text\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"description text\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      className: \"px-4 py-4 mb-6 shadow-md md:px-16 bg-secondaryBackgroundLight dark:bg-secondaryBackgroundDark\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex justify-between mx-auto md:container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex items-center\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: \"w-16\",\n            alt: \"logo\",\n            src: \"/logo.png\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: \"text-3xl font-bold text-accentText\",\n            children: \"PolyGas\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            className: \"mx-4 mt-1 text-sm font-bold md:text-xl text-secondaryTextLight dark:text-secondaryTextDark\",\n            children: \"Polygon Gas Price forecast system\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex items-center\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_public_discord_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            className: \"transition-none fill-current ctursor-pointer text-primaryTextLight dark:text-primaryTextDark\",\n            onClick: function onClick() {\n              return window.open(\"https://discord.gg/VEa8xXw6CK\");\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"w-5\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 13\n          }, this), isDarkmode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_public_sun_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            className: \"cursor-pointer fill-current text-primaryTextDark\",\n            onClick: function onClick() {\n              return toggleDarkmode(!isDarkmode);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 15\n          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_public_moon_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            className: \"cursor-pointer fill-current text-primaryTextLight\",\n            onClick: function onClick() {\n              return toggleDarkmode(!isDarkmode);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container flex flex-col min-h-screen mx-auto overflow-hidden\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        className: \"flex flex-col flex-1\",\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: \"px-16 py-4 shadow-md bg-secondaryBackgroundLight dark:bg-secondaryBackgroundDark text-secondaryTextLight dark:text-secondaryTextDark\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"mx-auto text-center md:container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"mb-4\",\n          children: [\"Sponsored by\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: \"underline text-accentText\",\n            href: \"https://gravityfinance.io\",\n            children: \"Gravity Finance\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [\"\\xA9 \", new Date().getFullYear(), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: \"underline text-accentText\",\n            href: \"https://pufler.dev\",\n            children: \"Julian Pufler\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Layout, \"aoeMRkcnsrESlbfebPQ+J/Xh5SU=\");\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQudHN4P2U0Y2UiXSwibmFtZXMiOlsiTGF5b3V0IiwidGl0bGUiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiaXNEYXJrbW9kZSIsInNldElzRGFya21vZGUiLCJ0b2dnbGVEYXJrbW9kZSIsImRhcmttb2RlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidXNlRWZmZWN0IiwiZ2V0SXRlbSIsIndpbmRvdyIsIm9wZW4iLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxPQUFrRDtBQUFBOztBQUFBLE1BQWhDQyxLQUFnQyxRQUFoQ0EsS0FBZ0M7QUFBQSxNQUF6QkMsUUFBeUIsUUFBekJBLFFBQXlCOztBQUFBLGtCQUNaQyxzREFBUSxDQUFDLEtBQUQsQ0FESTtBQUFBLE1BQ3pDQyxVQUR5QztBQUFBLE1BQzdCQyxhQUQ2Qjs7QUFHaEQsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxRQUFELEVBQWM7QUFDbkMsUUFBSUEsUUFBSixFQUFjO0FBQ1pDLGNBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsU0FBekIsQ0FBbUNDLEdBQW5DLENBQXVDLE1BQXZDO0FBQ0QsS0FGRCxNQUVPO0FBQ0xILGNBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsU0FBekIsQ0FBbUNFLE1BQW5DLENBQTBDLE1BQTFDO0FBQ0Q7O0FBQ0RDLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJQLFFBQVEsR0FBRyxNQUFILEdBQVksT0FBbEQ7QUFDQUYsaUJBQWEsQ0FBQ0UsUUFBRCxDQUFiO0FBQ0QsR0FSRDs7QUFVQVEseURBQVMsQ0FBQyxZQUFNO0FBQ2RULGtCQUFjLENBQUNPLFlBQVksQ0FB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QWI7QUFBeUMsZ0JBQUksRUFBQyxvQkFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErREQ7O0dBaEZRcEIsTTs7S0FBQUEsTTtBQWlGTUEscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMYXlvdXRQcm9wcyB9IGZyb20gXCIuLi9AdHlwZXNcIjtcbmltcG9ydCBNb29uSWNvbiBmcm9tIFwiLi4vcHVibGljL21vb24uc3ZnXCI7XG5pbXBvcnQgU3VuSWNvbiBmcm9tIFwiLi4vcHVibGljL3N1bi5zdmdcIjtcbmltcG9ydCBEaXNjb3JkSWNvbiBmcm9tIFwiLi4vcHVibGljL2Rpc2NvcmQuc3ZnXCI7XG5cbmZ1bmN0aW9uIExheW91dCh7IHRpdGxlLCBjaGlsZHJlbiB9OiBMYXlvdXRQcm9wcykge1xuICBjb25zdCBbaXNEYXJrbW9kZSwgc2V0SXNEYXJrbW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdG9nZ2xlRGFya21vZGUgPSAoZGFya21vZGUpID0+IHtcbiAgICBpZiAoZGFya21vZGUpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrXCIpO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIGRhcmttb2RlID8gXCJkYXJrXCIgOiBcImxpZ2h0XCIpO1xuICAgIHNldElzRGFya21vZGUoZGFya21vZGUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdG9nZ2xlRGFya21vZGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSA9PT0gXCJkYXJrXCIpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5cbiAgICAgICAgICB7dGl0bGV9IHt0aXRsZSA/IFwiIHwgXCIgOiBcIlwifSBQb2x5R2FzXG4gICAgICAgIDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInRpdGxlXCIgY29udGVudD1cInRpdGxlIHRleHRcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiZGVzY3JpcHRpb24gdGV4dFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInB4LTQgcHktNCBtYi02IHNoYWRvdy1tZCBtZDpweC0xNiBiZy1zZWNvbmRhcnlCYWNrZ3JvdW5kTGlnaHQgZGFyazpiZy1zZWNvbmRhcnlCYWNrZ3JvdW5kRGFya1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG14LWF1dG8gbWQ6Y29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTE2XCIgYWx0PVwibG9nb1wiIHNyYz1cIi9sb2dvLnBuZ1wiPjwvaW1nPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWFjY2VudFRleHRcIj5Qb2x5R2FzPC9oMT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJteC00IG10LTEgdGV4dC1zbSBmb250LWJvbGQgbWQ6dGV4dC14bCB0ZXh0LXNlY29uZGFyeVRleHRMaWdodCBkYXJrOnRleHQtc2Vjb25kYXJ5VGV4dERhcmtcIj5cbiAgICAgICAgICAgICAgUG9seWdvbiBHYXMgUHJpY2UgZm9yZWNhc3Qgc3lzdGVtXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxEaXNjb3JkSWNvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLW5vbmUgZmlsbC1jdXJyZW50IGN0dXJzb3ItcG9pbnRlciB0ZXh0LXByaW1hcnlUZXh0TGlnaHQgZGFyazp0ZXh0LXByaW1hcnlUZXh0RGFya1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKFwiaHR0cHM6Ly9kaXNjb3JkLmdnL1ZFYTh4WHc2Q0tcIil9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTVcIj48L2Rpdj5cbiAgICAgICAgICAgIHtpc0Rhcmttb2RlID8gKFxuICAgICAgICAgICAgICA8U3VuSWNvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnlUZXh0RGFya1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRGFya21vZGUoIWlzRGFya21vZGUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPE1vb25JY29uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZmlsbC1jdXJyZW50IHRleHQtcHJpbWFyeVRleHRMaWdodFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRGFya21vZGUoIWlzRGFya21vZGUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuIG14LWF1dG8gb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZmxleC0xXCI+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJweC0xNiBweS00IHNoYWRvdy1tZCBiZy1zZWNvbmRhcnlCYWNrZ3JvdW5kTGlnaHQgZGFyazpiZy1zZWNvbmRhcnlCYWNrZ3JvdW5kRGFyayB0ZXh0LXNlY29uZGFyeVRleHRMaWdodCBkYXJrOnRleHQtc2Vjb25kYXJ5VGV4dERhcmtcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHRleHQtY2VudGVyIG1kOmNvbnRhaW5lclwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICAgIFNwb25zb3JlZCBieXtcIiBcIn1cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuZGVybGluZSB0ZXh0LWFjY2VudFRleHRcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9ncmF2aXR5ZmluYW5jZS5pb1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEdyYXZpdHkgRmluYW5jZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIMKpIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9e1wiIFwifVxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidW5kZXJsaW5lIHRleHQtYWNjZW50VGV4dFwiIGhyZWY9XCJodHRwczovL3B1Zmxlci5kZXZcIj5cbiAgICAgICAgICAgICAgSnVsaWFuIFB1ZmxlclxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout.tsx\n");

/***/ })

})