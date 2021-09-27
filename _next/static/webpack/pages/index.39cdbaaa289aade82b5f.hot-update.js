webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_moon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/moon.svg */ \"./public/moon.svg\");\n/* harmony import */ var _public_sun_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/sun.svg */ \"./public/sun.svg\");\n/* harmony import */ var _public_discord_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/discord.svg */ \"./public/discord.svg\");\n\n\nvar _jsxFileName = \"/Users/julian/Projects/polygas/components/layout.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Layout(_ref) {\n  _s();\n\n  var title = _ref.title,\n      children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isDarkmode = _useState[0],\n      setIsDarkmode = _useState[1];\n\n  var toggleDarkmode = function toggleDarkmode(darkmode) {\n    if (darkmode) {\n      document.documentElement.classList.add(\"dark\");\n      document.querySelector(\"html\").style.backgroundColor = \"rgba(31, 32, 33, 1)\";\n    } else {\n      document.documentElement.classList.remove(\"dark\");\n      document.querySelector(\"html\").style.backgroundColor = \"rgba(255, 255, 255, 1)\";\n    }\n\n    localStorage.setItem(\"theme\", darkmode ? \"dark\" : \"light\");\n    setIsDarkmode(darkmode);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    toggleDarkmode(localStorage.getItem(\"theme\") === \"dark\");\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: [title, \" \", title ? \" | \" : \"\", \" PolyGas - Gas Price Estimator\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Polygon gas price forecast based on the last 500 transactions\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"image\",\n        content: \"https://polygas.org/meta-image.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:card\",\n        content: \"summary\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:title\",\n        content: \"PolyGas - Gas Price Estimator\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:description\",\n        content: \"Polygon gas price forecast based on the last 500 transactions\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"twitter:image:src\",\n        content: \"https://polygas.org/meta-image.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"og:title\",\n        content: \"PolyGas - Gas Price Estimator\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"og:description\",\n        content: \"Polygon gas price forecast based on the last 500 transactions\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"og:image\",\n        content: \"https://polygas.org/meta-image.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"og:url\",\n        content: \"https://polygas.org\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"og:site_name\",\n        content: \"PolyGas - Gas Price Estimator\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"og:type\",\n        content: \"website\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"keywords\",\n        content: \"gas,gasprice,polygon,polygas,price\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"robots\",\n        content: \"index, follow\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        \"http-equiv\": \"Content-Type\",\n        content: \"text/html; charset=utf-8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"language\",\n        content: \"English\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"revisit-after\",\n        content: \"14 days\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"author\",\n        content: \"https://pufler.dev\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      className: \"px-4 py-4 mb-6 shadow-md md:px-16 bg-secondaryBackgroundLight dark:bg-secondaryBackgroundDark\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex justify-between mx-auto md:container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex items-center\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: \"w-8\",\n            alt: \"logo\",\n            src: \"/logo.png\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            className: \"ml-2 text-2xl font-bold md:text-3xl text-accentText\",\n            children: \"PolyGas\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n            className: \"mt-1 ml-4 text-sm font-bold md:text-xl text-secondaryTextLight dark:text-secondaryTextDark\",\n            children: \"Polygon Gas Price Forecast\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex items-center\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_public_discord_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            className: \"transition-none fill-current ctursor-pointer text-primaryTextLight dark:text-primaryTextDark\",\n            onClick: function onClick() {\n              return window.open(\"https://discord.gg/VEa8xXw6CK\");\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"w-5\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 13\n          }, this), isDarkmode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_public_sun_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            className: \"cursor-pointer fill-current text-primaryTextDark\",\n            onClick: function onClick() {\n              return toggleDarkmode(!isDarkmode);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 15\n          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_public_moon_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            className: \"cursor-pointer fill-current text-primaryTextLight\",\n            onClick: function onClick() {\n              return toggleDarkmode(!isDarkmode);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container flex flex-col min-h-screen mx-auto overflow-hidden\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        className: \"flex flex-col flex-1\",\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: \"px-16 py-4 shadow-md bg-secondaryBackgroundLight dark:bg-secondaryBackgroundDark text-secondaryTextLight dark:text-secondaryTextDark\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"mx-auto text-center md:container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          className: \"mb-4\",\n          children: [\"Sponsored by\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: \"underline text-accentText\",\n            href: \"https://gravityfinance.io\",\n            children: \"Gravity Finance\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [\"\\xA9 \", new Date().getFullYear(), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: \"underline text-accentText\",\n            href: \"https://pufler.dev\",\n            children: \"Julian Pufler\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 129,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Layout, \"aoeMRkcnsrESlbfebPQ+J/Xh5SU=\");\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQudHN4P2U0Y2UiXSwibmFtZXMiOlsiTGF5b3V0IiwidGl0bGUiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiaXNEYXJrbW9kZSIsInNldElzRGFya21vZGUiLCJ0b2dnbGVEYXJrbW9kZSIsImRhcmttb2RlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyZW1vdmUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidXNlRWZmZWN0IiwiZ2V0SXRlbSIsIndpbmRvdyIsIm9wZW4iLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxPQUFrRDtBQUFBOztBQUFBLE1BQWhDQyxLQUFnQyxRQUFoQ0EsS0FBZ0M7QUFBQSxNQUF6QkMsUUFBeUIsUUFBekJBLFFBQXlCOztBQUFBLGtCQUNaQyxzREFBUSxDQUFDLEtBQUQsQ0FESTtBQUFBLE1BQ3pDQyxVQUR5QztBQUFBLE1BQzdCQyxhQUQ2Qjs7QUFHaEQsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxRQUFELEVBQWM7QUFDbkMsUUFBSUEsUUFBSixFQUFjO0FBQ1pDLGNBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsU0FBekIsQ0FBbUNDLEdBQW5DLENBQXVDLE1BQXZDO0FBQ0FILGNBQVEsQ0FBQ0ksYUFBVCxDQUF1QixNQUF2QixFQUErQkMsS0FBL0IsQ0FBcUNDLGVBQXJDLEdBQ0UscUJBREY7QUFFRCxLQUpELE1BSU87QUFDTE4sY0FBUSxDQUFDQyxlQUFULENBQXlCQyxTQUF6QixDQUFtQ0ssTUFBbkMsQ0FBMEMsTUFBMUM7QUFDQVAsY0FBUSxDQUFDSSxhQUFULENBQXVCLE1BQXZCLEVBQStCQyxLQUEvQixD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QUFBQSxZQXBERixlQW1GRTtBQUFLLGVBQVMsRUFBQyw4REFBZjtBQUFBLDZCQUNFO0FBQU0saUJBQVMsRUFBQyxzQkFBaEI7QUFBQSxrQkFBd0NGO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkZGLGVBc0ZFO0FBQVEsZUFBUyxFQUFDLHNJQUFsQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxrQ0FBZjtBQUFBLGdDQUNFO0FBQUcsbUJBQVMsRUFBQyxNQUFiO0FBQUEscUNBQ2UsR0FEZixlQUVFO0FBQ0UscUJBQVMsRUFBQywyQkFEWjtBQUVFLGdCQUFJLEVBQUMsMkJBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBVUU7QUFBQSw4QkFDSyxJQUFJb0IsSUFBSixHQUFXQyxXQUFYLEVBREwsRUFDK0IsR0FEL0IsZUFFRTtBQUFHLHFCQUFTLEVBQUMsMkJBQWI7QUFBeUMsZ0JBQUksRUFBQyxvQkFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0RkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0R0Q7O0dBaklRdkIsTTs7S0FBQUEsTTtBQWtJTUEscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMYXlvdXRQcm9wcyB9IGZyb20gXCIuLi9AdHlwZXNcIjtcbmltcG9ydCBNb29uSWNvbiBmcm9tIFwiLi4vcHVibGljL21vb24uc3ZnXCI7XG5pbXBvcnQgU3VuSWNvbiBmcm9tIFwiLi4vcHVibGljL3N1bi5zdmdcIjtcbmltcG9ydCBEaXNjb3JkSWNvbiBmcm9tIFwiLi4vcHVibGljL2Rpc2NvcmQuc3ZnXCI7XG5cbmZ1bmN0aW9uIExheW91dCh7IHRpdGxlLCBjaGlsZHJlbiB9OiBMYXlvdXRQcm9wcykge1xuICBjb25zdCBbaXNEYXJrbW9kZSwgc2V0SXNEYXJrbW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgdG9nZ2xlRGFya21vZGUgPSAoZGFya21vZGUpID0+IHtcbiAgICBpZiAoZGFya21vZGUpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XG4gICAgICAgIFwicmdiYSgzMSwgMzIsIDMzLCAxKVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgICAgICBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMSlcIjtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBkYXJrbW9kZSA/IFwiZGFya1wiIDogXCJsaWdodFwiKTtcbiAgICBzZXRJc0Rhcmttb2RlKGRhcmttb2RlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHRvZ2dsZURhcmttb2RlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgPT09IFwiZGFya1wiKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+XG4gICAgICAgICAge3RpdGxlfSB7dGl0bGUgPyBcIiB8IFwiIDogXCJcIn0gUG9seUdhcyAtIEdhcyBQcmljZSBFc3RpbWF0b3JcbiAgICAgICAgPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIlBvbHlnb24gZ2FzIHByaWNlIGZvcmVjYXN0IGJhc2VkIG9uIHRoZSBsYXN0IDUwMCB0cmFuc2FjdGlvbnNcIlxuICAgICAgICA+PC9tZXRhPlxuICAgICAgICA8bWV0YSBuYW1lPVwiaW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9wb2x5Z2FzLm9yZy9tZXRhLWltYWdlLnBuZ1wiPjwvbWV0YT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5XCI+PC9tZXRhPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCJcbiAgICAgICAgICBjb250ZW50PVwiUG9seUdhcyAtIEdhcyBQcmljZSBFc3RpbWF0b3JcIlxuICAgICAgICA+PC9tZXRhPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiUG9seWdvbiBnYXMgcHJpY2UgZm9yZWNhc3QgYmFzZWQgb24gdGhlIGxhc3QgNTAwIHRyYW5zYWN0aW9uc1wiXG4gICAgICAgID48L21ldGE+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInR3aXR0ZXI6aW1hZ2U6c3JjXCJcbiAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly9wb2x5Z2FzLm9yZy9tZXRhLWltYWdlLnBuZ1wiXG4gICAgICAgID48L21ldGE+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJQb2x5R2FzIC0gR2FzIFByaWNlIEVzdGltYXRvclwiPjwvbWV0YT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwib2c6ZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJQb2x5Z29uIGdhcyBwcmljZSBmb3JlY2FzdCBiYXNlZCBvbiB0aGUgbGFzdCA1MDAgdHJhbnNhY3Rpb25zXCJcbiAgICAgICAgPjwvbWV0YT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwib2c6aW1hZ2VcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL3BvbHlnYXMub3JnL21ldGEtaW1hZ2UucG5nXCJcbiAgICAgICAgPjwvbWV0YT5cbiAgICAgICAgPG1ldGEgbmFtZT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL3BvbHlnYXMub3JnXCI+PC9tZXRhPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJvZzpzaXRlX25hbWVcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJQb2x5R2FzIC0gR2FzIFByaWNlIEVzdGltYXRvclwiXG4gICAgICAgID48L21ldGE+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIj48L21ldGE+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImtleXdvcmRzXCJcbiAgICAgICAgICBjb250ZW50PVwiZ2FzLGdhc3ByaWNlLHBvbHlnb24scG9seWdhcyxwcmljZVwiXG4gICAgICAgID48L21ldGE+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwiaW5kZXgsIGZvbGxvd1wiPjwvbWV0YT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBodHRwLWVxdWl2PVwiQ29udGVudC1UeXBlXCJcbiAgICAgICAgICBjb250ZW50PVwidGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XCJcbiAgICAgICAgPjwvbWV0YT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImxhbmd1YWdlXCIgY29udGVudD1cIkVuZ2xpc2hcIj48L21ldGE+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJyZXZpc2l0LWFmdGVyXCIgY29udGVudD1cIjE0IGRheXNcIj48L21ldGE+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiaHR0cHM6Ly9wdWZsZXIuZGV2XCI+PC9tZXRhPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJweC00IHB5LTQgbWItNiBzaGFkb3ctbWQgbWQ6cHgtMTYgYmctc2Vjb25kYXJ5QmFja2dyb3VuZExpZ2h0IGRhcms6Ymctc2Vjb25kYXJ5QmFja2dyb3VuZERhcmtcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBteC1hdXRvIG1kOmNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy04XCIgYWx0PVwibG9nb1wiIHNyYz1cIi9sb2dvLnBuZ1wiPjwvaW1nPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1sLTIgdGV4dC0yeGwgZm9udC1ib2xkIG1kOnRleHQtM3hsIHRleHQtYWNjZW50VGV4dFwiPlxuICAgICAgICAgICAgICBQb2x5R2FzXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTEgbWwtNCB0ZXh0LXNtIGZvbnQtYm9sZCBtZDp0ZXh0LXhsIHRleHQtc2Vjb25kYXJ5VGV4dExpZ2h0IGRhcms6dGV4dC1zZWNvbmRhcnlUZXh0RGFya1wiPlxuICAgICAgICAgICAgICBQb2x5Z29uIEdhcyBQcmljZSBGb3JlY2FzdFxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8RGlzY29yZEljb25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1ub25lIGZpbGwtY3VycmVudCBjdHVyc29yLXBvaW50ZXIgdGV4dC1wcmltYXJ5VGV4dExpZ2h0IGRhcms6dGV4dC1wcmltYXJ5VGV4dERhcmtcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbihcImh0dHBzOi8vZGlzY29yZC5nZy9WRWE4eFh3NkNLXCIpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01XCI+PC9kaXY+XG4gICAgICAgICAgICB7aXNEYXJrbW9kZSA/IChcbiAgICAgICAgICAgICAgPFN1bkljb25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmaWxsLWN1cnJlbnQgdGV4dC1wcmltYXJ5VGV4dERhcmtcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZURhcmttb2RlKCFpc0Rhcmttb2RlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxNb29uSWNvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZpbGwtY3VycmVudCB0ZXh0LXByaW1hcnlUZXh0TGlnaHRcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZURhcmttb2RlKCFpc0Rhcmttb2RlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGZsZXgtY29sIG1pbi1oLXNjcmVlbiBteC1hdXRvIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGZsZXgtMVwiPntjaGlsZHJlbn08L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwicHgtMTYgcHktNCBzaGFkb3ctbWQgYmctc2Vjb25kYXJ5QmFja2dyb3VuZExpZ2h0IGRhcms6Ymctc2Vjb25kYXJ5QmFja2dyb3VuZERhcmsgdGV4dC1zZWNvbmRhcnlUZXh0TGlnaHQgZGFyazp0ZXh0LXNlY29uZGFyeVRleHREYXJrXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byB0ZXh0LWNlbnRlciBtZDpjb250YWluZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICBTcG9uc29yZWQgYnl7XCIgXCJ9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgdGV4dC1hY2NlbnRUZXh0XCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ3Jhdml0eWZpbmFuY2UuaW9cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBHcmF2aXR5IEZpbmFuY2VcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICDCqSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfXtcIiBcIn1cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVuZGVybGluZSB0ZXh0LWFjY2VudFRleHRcIiBocmVmPVwiaHR0cHM6Ly9wdWZsZXIuZGV2XCI+XG4gICAgICAgICAgICAgIEp1bGlhbiBQdWZsZXJcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout.tsx\n");

/***/ })

})