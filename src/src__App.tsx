import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.tsx");const _jsxDEV = __vite__cjsImport16_react_jsxDevRuntime["jsxDEV"];import { Navigate, Route, Routes } from "/node_modules/.vite/deps/react-router-dom.js?v=a646c335";
import { Toaster } from "/src/components/ui/sonner.tsx";
import { AuthProvider } from "/src/lib/auth.tsx";
import { LanguageProvider } from "/src/lib/i18n.tsx";
import { ThemeProvider } from "/src/lib/theme.tsx";
import { AcademyProgressProvider } from "/src/lib/academy.tsx";
import Shell from "/src/components/Shell.tsx";
import Home from "/src/pages/Home.tsx";
import AcademyPage from "/src/pages/Academy.tsx";
import VideoPage from "/src/pages/VideoPage.tsx";
import PathPage from "/src/pages/PathPage.tsx";
import DashboardPage from "/src/pages/Dashboard.tsx";
import AdminPage from "/src/pages/Admin.tsx";
import AuthPage from "/src/pages/Auth.tsx";
import VerifyCertificatePage from "/src/components/academy/Certificate.tsx";
import "/src/motion.css";
var _jsxFileName = "/app/frontend/src/App.tsx";
import __vite__cjsImport16_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
// One <Route> per page; BrowserRouter already wraps this in main.tsx.
export default function App() {
	return /* @__PURE__ */ _jsxDEV(ThemeProvider, {
		"x-file-name": "App",
		"x-line-number": "21",
		"x-column": "4",
		"x-component": "ThemeProvider",
		"x-id": "App_21_4",
		"x-dynamic": "true",
		children: /* @__PURE__ */ _jsxDEV(LanguageProvider, {
			"x-file-name": "App",
			"x-line-number": "22",
			"x-column": "4",
			"x-component": "LanguageProvider",
			"x-id": "App_22_4",
			"x-dynamic": "true",
			children: /* @__PURE__ */ _jsxDEV(AuthProvider, {
				"x-file-name": "App",
				"x-line-number": "23",
				"x-column": "6",
				"x-component": "AuthProvider",
				"x-id": "App_23_6",
				"x-dynamic": "true",
				children: /* @__PURE__ */ _jsxDEV(AcademyProgressProvider, {
					"x-file-name": "App",
					"x-line-number": "24",
					"x-column": "8",
					"x-component": "AcademyProgressProvider",
					"x-id": "App_24_8",
					"x-dynamic": "true",
					children: [/* @__PURE__ */ _jsxDEV(Shell, {
						"x-file-name": "App",
						"x-line-number": "25",
						"x-column": "10",
						"x-component": "Shell",
						"x-id": "App_25_10",
						"x-dynamic": "true",
						children: /* @__PURE__ */ _jsxDEV(Routes, { children: [
							/* @__PURE__ */ _jsxDEV(Route, {
								path: "/",
								element: /* @__PURE__ */ _jsxDEV(Home, {}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 26,
									columnNumber: 40
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 26,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV(Route, {
								path: "/dashboard",
								element: /* @__PURE__ */ _jsxDEV(DashboardPage, {
									"x-file-name": "App",
									"x-line-number": "28",
									"x-column": "48",
									"x-component": "DashboardPage",
									"x-id": "App_28_48",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 27,
									columnNumber: 49
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 27,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV(Route, {
								path: "/academy",
								element: /* @__PURE__ */ _jsxDEV(AcademyPage, {
									"x-file-name": "App",
									"x-line-number": "29",
									"x-column": "46",
									"x-component": "AcademyPage",
									"x-id": "App_29_46",
									"x-dynamic": "true"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 28,
									columnNumber: 47
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 28,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV(Route, {
								path: "/academy/video/:id",
								element: /* @__PURE__ */ _jsxDEV(VideoPage, {
									"x-file-name": "App",
									"x-line-number": "30",
									"x-column": "56",
									"x-component": "VideoPage",
									"x-id": "App_30_56",
									"x-dynamic": "true"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 29,
									columnNumber: 57
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 29,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV(Route, {
								path: "/academy/path/:id",
								element: /* @__PURE__ */ _jsxDEV(PathPage, {
									"x-file-name": "App",
									"x-line-number": "31",
									"x-column": "55",
									"x-component": "PathPage",
									"x-id": "App_31_55",
									"x-dynamic": "true"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 30,
									columnNumber: 56
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 30,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV(Route, {
								path: "/admin",
								element: /* @__PURE__ */ _jsxDEV(AdminPage, {
									"x-file-name": "App",
									"x-line-number": "32",
									"x-column": "44",
									"x-component": "AdminPage",
									"x-id": "App_32_44",
									"x-dynamic": "true"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 31,
									columnNumber: 45
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 31,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV(Route, {
								path: "/certificate/:id",
								element: /* @__PURE__ */ _jsxDEV(VerifyCertificatePage, {
									"x-file-name": "App",
									"x-line-number": "33",
									"x-column": "54",
									"x-component": "VerifyCertificatePage",
									"x-id": "App_33_54",
									"x-dynamic": "true"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 32,
									columnNumber: 55
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 32,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV(Route, {
								path: "/sign-in",
								element: /* @__PURE__ */ _jsxDEV(AuthPage, {
									mode: "sign-in",
									"x-file-name": "App",
									"x-line-number": "34",
									"x-column": "46",
									"x-component": "AuthPage",
									"x-id": "App_34_46",
									"x-dynamic": "true"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 33,
									columnNumber: 47
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 33,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV(Route, {
								path: "/sign-up",
								element: /* @__PURE__ */ _jsxDEV(AuthPage, {
									mode: "sign-up",
									"x-file-name": "App",
									"x-line-number": "35",
									"x-column": "46",
									"x-component": "AuthPage",
									"x-id": "App_35_46",
									"x-dynamic": "true"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 34,
									columnNumber: 47
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 34,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV(Route, {
								path: "/login",
								element: /* @__PURE__ */ _jsxDEV(Navigate, {
									to: "/sign-in",
									replace: true
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 35,
									columnNumber: 45
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 35,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV(Route, {
								path: "*",
								element: /* @__PURE__ */ _jsxDEV(Navigate, {
									to: "/",
									replace: true
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 36,
									columnNumber: 40
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 36,
								columnNumber: 15
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 25,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 24,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV(Toaster, {
						position: "bottom-right",
						richColors: true,
						"x-file-name": "App",
						"x-line-number": "40",
						"x-column": "10",
						"x-component": "Toaster",
						"x-id": "App_40_10",
						"x-dynamic": "true"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 7
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 21,
			columnNumber: 5
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 20,
		columnNumber: 10
	}, this);
}
_c = App;
var _c;
$RefreshReg$(_c, "App");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/App.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/App.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/App.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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IiwiQXV0aFByb3ZpZGVyIiwiTGFuZ3VhZ2VQcm92aWRlciIsIlRoZW1lUHJvdmlkZXIiLCJBY2FkZW15UHJvZ3Jlc3NQcm92aWRlciIsIlNoZWxsIiwiSG9tZSIsIkFjYWRlbXlQYWdlIiwiVmlkZW9QYWdlIiwiUGF0aFBhZ2UiLCJEYXNoYm9hcmRQYWdlIiwiQWRtaW5QYWdlIiwiQXV0aFBhZ2UiLCJWZXJpZnlDZXJ0aWZpY2F0ZVBhZ2UiLCJBcHAiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZpZ2F0ZSwgUm91dGUsIFJvdXRlcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9zb25uZXJcIjtcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XG5pbXBvcnQgeyBMYW5ndWFnZVByb3ZpZGVyIH0gZnJvbSBcIkAvbGliL2kxOG5cIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQC9saWIvdGhlbWVcIjtcbmltcG9ydCB7IEFjYWRlbXlQcm9ncmVzc1Byb3ZpZGVyIH0gZnJvbSBcIkAvbGliL2FjYWRlbXlcIjtcbmltcG9ydCBTaGVsbCBmcm9tIFwiQC9jb21wb25lbnRzL1NoZWxsXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiQC9wYWdlcy9Ib21lXCI7XG5pbXBvcnQgQWNhZGVteVBhZ2UgZnJvbSBcIkAvcGFnZXMvQWNhZGVteVwiO1xuaW1wb3J0IFZpZGVvUGFnZSBmcm9tIFwiQC9wYWdlcy9WaWRlb1BhZ2VcIjtcbmltcG9ydCBQYXRoUGFnZSBmcm9tIFwiQC9wYWdlcy9QYXRoUGFnZVwiO1xuaW1wb3J0IERhc2hib2FyZFBhZ2UgZnJvbSBcIkAvcGFnZXMvRGFzaGJvYXJkXCI7XG5pbXBvcnQgQWRtaW5QYWdlIGZyb20gXCJAL3BhZ2VzL0FkbWluXCI7XG5pbXBvcnQgQXV0aFBhZ2UgZnJvbSBcIkAvcGFnZXMvQXV0aFwiO1xuaW1wb3J0IFZlcmlmeUNlcnRpZmljYXRlUGFnZSBmcm9tIFwiQC9jb21wb25lbnRzL2FjYWRlbXkvQ2VydGlmaWNhdGVcIjtcbmltcG9ydCBcIkAvbW90aW9uLmNzc1wiO1xuXG4vLyBPbmUgPFJvdXRlPiBwZXIgcGFnZTsgQnJvd3NlclJvdXRlciBhbHJlYWR5IHdyYXBzIHRoaXMgaW4gbWFpbi50c3guXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXI+XG4gICAgPExhbmd1YWdlUHJvdmlkZXI+XG4gICAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgICA8QWNhZGVteVByb2dyZXNzUHJvdmlkZXI+XG4gICAgICAgICAgPFNoZWxsPlxuICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Rhc2hib2FyZFwiIGVsZW1lbnQ9ezxEYXNoYm9hcmRQYWdlIC8+fSAvPlxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hY2FkZW15XCIgZWxlbWVudD17PEFjYWRlbXlQYWdlIC8+fSAvPlxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hY2FkZW15L3ZpZGVvLzppZFwiIGVsZW1lbnQ9ezxWaWRlb1BhZ2UgLz59IC8+XG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FjYWRlbXkvcGF0aC86aWRcIiBlbGVtZW50PXs8UGF0aFBhZ2UgLz59IC8+XG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2FkbWluXCIgZWxlbWVudD17PEFkbWluUGFnZSAvPn0gLz5cbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY2VydGlmaWNhdGUvOmlkXCIgZWxlbWVudD17PFZlcmlmeUNlcnRpZmljYXRlUGFnZSAvPn0gLz5cbiAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvc2lnbi1pblwiIGVsZW1lbnQ9ezxBdXRoUGFnZSBtb2RlPVwic2lnbi1pblwiIC8+fSAvPlxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zaWduLXVwXCIgZWxlbWVudD17PEF1dGhQYWdlIG1vZGU9XCJzaWduLXVwXCIgLz59IC8+XG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgZWxlbWVudD17PE5hdmlnYXRlIHRvPVwiL3NpZ24taW5cIiByZXBsYWNlIC8+fSAvPlxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIipcIiBlbGVtZW50PXs8TmF2aWdhdGUgdG89XCIvXCIgcmVwbGFjZSAvPn0gLz5cbiAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICAgIDwvU2hlbGw+XG4gICAgICAgICAgPFRvYXN0ZXIgcG9zaXRpb249XCJib3R0b20tcmlnaHRcIiByaWNoQ29sb3JzIC8+XG4gICAgICAgIDwvQWNhZGVteVByb2dyZXNzUHJvdmlkZXI+XG4gICAgICA8L0F1dGhQcm92aWRlcj5cbiAgICA8L0xhbmd1YWdlUHJvdmlkZXI+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufVxuIl0sImZpbGUiOiIvYXBwL2Zyb250ZW5kL3NyYy9BcHAudHN4In0=