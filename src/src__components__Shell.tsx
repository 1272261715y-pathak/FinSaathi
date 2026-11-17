import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Shell.tsx");const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport9_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport9_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=a646c335";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=a646c335";
import { IndianRupee, Menu, X } from "/src/lib/lucide-react.tsx";
import { useAuth } from "/src/lib/auth.tsx";
import { useAcademy } from "/src/lib/academy.tsx";
import { useI18n } from "/src/lib/i18n.tsx";
import { LanguageSelect } from "/src/components/LanguageSelect.tsx";
import { UserMenu } from "/src/components/UserMenu.tsx";
import { ThemeToggle } from "/src/components/ThemeToggle.tsx";
var _jsxFileName = "/app/frontend/src/components/Shell.tsx";
import __vite__cjsImport9_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
var _s = $RefreshSig$();
export function Brand() {
	return /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV("span", {
		className: "brand-mark",
		"x-file-name": "Shell",
		"x-line-number": "15",
		"x-column": "6",
		"x-component": "span",
		"x-id": "Shell_15_6",
		"x-dynamic": "false",
		children: /* @__PURE__ */ _jsxDEV(IndianRupee, {
			size: 18,
			"x-file-name": "Shell",
			"x-line-number": "16",
			"x-column": "8",
			"x-component": "IndianRupee",
			"x-id": "Shell_16_8",
			"x-dynamic": "false"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 14,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 13,
		columnNumber: 7
	}, this), /* @__PURE__ */ _jsxDEV("span", {
		"x-file-name": "Shell",
		"x-line-number": "18",
		"x-column": "6",
		"x-component": "span",
		"x-id": "Shell_18_6",
		"x-dynamic": "false",
		children: ["Fin", /* @__PURE__ */ _jsxDEV("span", {
			"x-file-name": "Shell",
			"x-line-number": "19",
			"x-column": "11",
			"x-component": "span",
			"x-id": "Shell_19_11",
			"x-dynamic": "false",
			children: "Saathi"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 17,
			columnNumber: 12
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 10
	}, this);
}
_c = Brand;
export default function Shell({ children }) {
	_s();
	const { t } = useI18n();
	const { isSignedIn } = useAuth();
	const { isAdmin } = useAcademy();
	const [open, setOpen] = useState(false);
	const links = [
		"learn",
		"tools",
		"simulator",
		"schemes",
		"quiz",
		"assistant"
	];
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "app-shell",
		"x-file-name": "Shell",
		"x-line-number": "32",
		"x-column": "4",
		"x-component": "div",
		"x-id": "Shell_32_4",
		"x-dynamic": "true",
		"x-source-type": "prop",
		"x-source-var": "children",
		"x-source-editable": "false",
		children: [
			/* @__PURE__ */ _jsxDEV("header", {
				className: "nav",
				"x-file-name": "Shell",
				"x-line-number": "33",
				"x-column": "6",
				"x-component": "header",
				"x-id": "Shell_33_6",
				"x-dynamic": "false",
				children: [
					/* @__PURE__ */ _jsxDEV(Link, {
						className: "brand",
						to: "/",
						"data-testid": "brand-link",
						children: /* @__PURE__ */ _jsxDEV(Brand, {
							"x-file-name": "Shell",
							"x-line-number": "35",
							"x-column": "10",
							"x-component": "Brand",
							"x-id": "Shell_35_10",
							"x-dynamic": "true"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 40,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("button", {
						className: "mobile-menu",
						onClick: () => setOpen(!open),
						"data-testid": "mobile-menu-button",
						"aria-label": "Menu",
						"x-file-name": "Shell",
						"x-line-number": "37",
						"x-column": "8",
						"x-component": "button",
						"x-id": "Shell_37_8",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: open ? /* @__PURE__ */ _jsxDEV(X, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 19
						}, this) : /* @__PURE__ */ _jsxDEV(Menu, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 27
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("nav", {
						className: open ? "nav-links open" : "nav-links",
						"data-testid": "main-navigation",
						"x-file-name": "Shell",
						"x-line-number": "40",
						"x-column": "8",
						"x-component": "nav",
						"x-id": "Shell_40_8",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: [
							links.map((l) => /* @__PURE__ */ _jsxDEV("a", {
								href: `/#${l}`,
								onClick: () => setOpen(false),
								"data-testid": `nav-${l}`,
								"x-file-name": "Shell",
								"x-line-number": "42",
								"x-column": "12",
								"x-component": "a",
								"x-id": "Shell_42_12",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: t(`nav.${l}`)
							}, l, false, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 27
							}, this)),
							/* @__PURE__ */ _jsxDEV(Link, {
								to: "/academy",
								className: "nav-academy",
								onClick: () => setOpen(false),
								"data-testid": "nav-academy",
								children: t("nav.academy")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 49,
								columnNumber: 11
							}, this),
							isAdmin && /* @__PURE__ */ _jsxDEV(Link, {
								to: "/admin",
								onClick: () => setOpen(false),
								"data-testid": "nav-admin",
								children: t("nav.admin")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 52,
								columnNumber: 23
							}, this),
							isSignedIn && /* @__PURE__ */ _jsxDEV(Link, {
								to: "/dashboard",
								onClick: () => setOpen(false),
								"data-testid": "nav-dashboard",
								children: t("nav.dashboard")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 55,
								columnNumber: 26
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "nav-actions",
						"x-file-name": "Shell",
						"x-line-number": "60",
						"x-column": "8",
						"x-component": "div",
						"x-id": "Shell_60_8",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: [
							/* @__PURE__ */ _jsxDEV(ThemeToggle, {
								"x-file-name": "Shell",
								"x-line-number": "61",
								"x-column": "10",
								"x-component": "ThemeToggle",
								"x-id": "Shell_61_10",
								"x-dynamic": "true"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 60,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ _jsxDEV(LanguageSelect, {
								"x-file-name": "Shell",
								"x-line-number": "62",
								"x-column": "10",
								"x-component": "LanguageSelect",
								"x-id": "Shell_62_10",
								"x-dynamic": "true"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 61,
								columnNumber: 11
							}, this),
							!isSignedIn ? /* @__PURE__ */ _jsxDEV(Link, {
								to: "/sign-in",
								className: "login-button",
								"data-testid": "sign-in-button",
								children: t("nav.signIn")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 26
							}, this) : /* @__PURE__ */ _jsxDEV(UserMenu, {
								"x-file-name": "Shell",
								"x-line-number": "68",
								"x-column": "12",
								"x-component": "UserMenu",
								"x-id": "Shell_68_12",
								"x-dynamic": "true",
								"x-excluded": "true"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 64,
								columnNumber: 23
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 7
			}, this),
			children,
			/* @__PURE__ */ _jsxDEV("footer", {
				"x-file-name": "Shell",
				"x-line-number": "73",
				"x-column": "6",
				"x-component": "footer",
				"x-id": "Shell_73_6",
				"x-dynamic": "false",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "footer-brand",
						"x-file-name": "Shell",
						"x-line-number": "74",
						"x-column": "8",
						"x-component": "div",
						"x-id": "Shell_74_8",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "brand",
							"x-file-name": "Shell",
							"x-line-number": "75",
							"x-column": "10",
							"x-component": "div",
							"x-id": "Shell_75_10",
							"x-dynamic": "false",
							children: /* @__PURE__ */ _jsxDEV(Brand, {
								"x-file-name": "Shell",
								"x-line-number": "76",
								"x-column": "12",
								"x-component": "Brand",
								"x-id": "Shell_76_12",
								"x-dynamic": "true"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 71,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 70,
							columnNumber: 11
						}, this), /* @__PURE__ */ _jsxDEV("p", {
							"x-file-name": "Shell",
							"x-line-number": "78",
							"x-column": "10",
							"x-component": "p",
							"x-id": "Shell_78_10",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("footer.tagline")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						"x-file-name": "Shell",
						"x-line-number": "80",
						"x-column": "8",
						"x-component": "div",
						"x-id": "Shell_80_8",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("strong", {
							"x-file-name": "Shell",
							"x-line-number": "81",
							"x-column": "10",
							"x-component": "strong",
							"x-id": "Shell_81_10",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("footer.learnTitle")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 76,
							columnNumber: 11
						}, this), /* @__PURE__ */ _jsxDEV("p", {
							"x-file-name": "Shell",
							"x-line-number": "82",
							"x-column": "10",
							"x-component": "p",
							"x-id": "Shell_82_10",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("footer.learnText")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 77,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						"x-file-name": "Shell",
						"x-line-number": "84",
						"x-column": "8",
						"x-component": "div",
						"x-id": "Shell_84_8",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("strong", {
							"x-file-name": "Shell",
							"x-line-number": "85",
							"x-column": "10",
							"x-component": "strong",
							"x-id": "Shell_85_10",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("footer.indiaTitle")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 80,
							columnNumber: 11
						}, this), /* @__PURE__ */ _jsxDEV("p", {
							"x-file-name": "Shell",
							"x-line-number": "86",
							"x-column": "10",
							"x-component": "p",
							"x-id": "Shell_86_10",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("footer.indiaText")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 81,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 37,
		columnNumber: 10
	}, this);
}
_s(Shell, "xFI7blI0VdAgNCLwI0QLHHaW+pU=", false, function() {
	return [
		useI18n,
		useAuth,
		useAcademy
	];
});
_c2 = Shell;
var _c, _c2;
$RefreshReg$(_c, "Brand");
$RefreshReg$(_c2, "Shell");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/Shell.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/components/Shell.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/components/Shell.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/components/Shell.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtpQkFBRUEsRUFBRSxtQkFBbUI7TUFBVTs7OztnQkFDeEMsd0JBQUMsS0FBRDtPQUFFO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7aUJBQUVBLEVBQUUsa0JBQWtCO01BQUs7Ozs7Y0FDMUI7Ozs7OztJQUNDOzs7Ozs7RUFDTDs7Ozs7O0FBRVQiLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmsiLCJJbmRpYW5SdXBlZSIsIk1lbnUiLCJYIiwidXNlQXV0aCIsInVzZUFjYWRlbXkiLCJ1c2VJMThuIiwiTGFuZ3VhZ2VTZWxlY3QiLCJVc2VyTWVudSIsIlRoZW1lVG9nZ2xlIiwiQnJhbmQiLCJTaGVsbCIsImNoaWxkcmVuIiwidCIsImlzU2lnbmVkSW4iLCJpc0FkbWluIiwib3BlbiIsInNldE9wZW4iLCJsaW5rcyIsIm1hcCIsImwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiU2hlbGwudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IEluZGlhblJ1cGVlLCBNZW51LCBYIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xuaW1wb3J0IHsgdXNlQWNhZGVteSB9IGZyb20gXCJAL2xpYi9hY2FkZW15XCI7XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSBcIkAvbGliL2kxOG5cIjtcbmltcG9ydCB7IExhbmd1YWdlU2VsZWN0IH0gZnJvbSBcIkAvY29tcG9uZW50cy9MYW5ndWFnZVNlbGVjdFwiO1xuaW1wb3J0IHsgVXNlck1lbnUgfSBmcm9tIFwiQC9jb21wb25lbnRzL1VzZXJNZW51XCI7XG5pbXBvcnQgeyBUaGVtZVRvZ2dsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvVGhlbWVUb2dnbGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEJyYW5kKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmFuZC1tYXJrXCI+XG4gICAgICAgIDxJbmRpYW5SdXBlZSBzaXplPXsxOH0gLz5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuPlxuICAgICAgICBGaW48c3Bhbj5TYWF0aGk8L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoZWxsKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG4gIGNvbnN0IHsgaXNTaWduZWRJbiB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB7IGlzQWRtaW4gfSA9IHVzZUFjYWRlbXkoKTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBsaW5rcyA9IFtcImxlYXJuXCIsIFwidG9vbHNcIiwgXCJzaW11bGF0b3JcIiwgXCJzY2hlbWVzXCIsIFwicXVpelwiLCBcImFzc2lzdGFudFwiXTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1zaGVsbFwiPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnJhbmRcIiB0bz1cIi9cIiBkYXRhLXRlc3RpZD1cImJyYW5kLWxpbmtcIj5cbiAgICAgICAgICA8QnJhbmQgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1vYmlsZS1tZW51XCIgb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9IGRhdGEtdGVzdGlkPVwibW9iaWxlLW1lbnUtYnV0dG9uXCIgYXJpYS1sYWJlbD1cIk1lbnVcIj5cbiAgICAgICAgICB7b3BlbiA/IDxYIC8+IDogPE1lbnUgLz59XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17b3BlbiA/IFwibmF2LWxpbmtzIG9wZW5cIiA6IFwibmF2LWxpbmtzXCJ9IGRhdGEtdGVzdGlkPVwibWFpbi1uYXZpZ2F0aW9uXCI+XG4gICAgICAgICAge2xpbmtzLm1hcCgobCkgPT4gKFxuICAgICAgICAgICAgPGEga2V5PXtsfSBocmVmPXtgLyMke2x9YH0gb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9IGRhdGEtdGVzdGlkPXtgbmF2LSR7bH1gfT5cbiAgICAgICAgICAgICAge3QoYG5hdi4ke2x9YCl9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPExpbmsgdG89XCIvYWNhZGVteVwiIGNsYXNzTmFtZT1cIm5hdi1hY2FkZW15XCIgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9IGRhdGEtdGVzdGlkPVwibmF2LWFjYWRlbXlcIj5cbiAgICAgICAgICAgIHt0KFwibmF2LmFjYWRlbXlcIil9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIHtpc0FkbWluICYmIChcbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2FkbWluXCIgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9IGRhdGEtdGVzdGlkPVwibmF2LWFkbWluXCI+XG4gICAgICAgICAgICAgIHt0KFwibmF2LmFkbWluXCIpfVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2lzU2lnbmVkSW4gJiYgKFxuICAgICAgICAgICAgPExpbmsgdG89XCIvZGFzaGJvYXJkXCIgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9IGRhdGEtdGVzdGlkPVwibmF2LWRhc2hib2FyZFwiPlxuICAgICAgICAgICAgICB7dChcIm5hdi5kYXNoYm9hcmRcIil9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWFjdGlvbnNcIj5cbiAgICAgICAgICA8VGhlbWVUb2dnbGUgLz5cbiAgICAgICAgICA8TGFuZ3VhZ2VTZWxlY3QgLz5cbiAgICAgICAgICB7IWlzU2lnbmVkSW4gPyAoXG4gICAgICAgICAgICA8TGluayB0bz1cIi9zaWduLWluXCIgY2xhc3NOYW1lPVwibG9naW4tYnV0dG9uXCIgZGF0YS10ZXN0aWQ9XCJzaWduLWluLWJ1dHRvblwiPlxuICAgICAgICAgICAgICB7dChcIm5hdi5zaWduSW5cIil9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxVc2VyTWVudSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1icmFuZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmRcIj5cbiAgICAgICAgICAgIDxCcmFuZCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwPnt0KFwiZm9vdGVyLnRhZ2xpbmVcIil9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3Ryb25nPnt0KFwiZm9vdGVyLmxlYXJuVGl0bGVcIil9PC9zdHJvbmc+XG4gICAgICAgICAgPHA+e3QoXCJmb290ZXIubGVhcm5UZXh0XCIpfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN0cm9uZz57dChcImZvb3Rlci5pbmRpYVRpdGxlXCIpfTwvc3Ryb25nPlxuICAgICAgICAgIDxwPnt0KFwiZm9vdGVyLmluZGlhVGV4dFwiKX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwiZmlsZSI6Ii9hcHAvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvU2hlbGwudHN4In0=