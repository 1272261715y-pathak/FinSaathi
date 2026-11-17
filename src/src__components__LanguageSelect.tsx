import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/LanguageSelect.tsx");const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import { Languages, Loader2 } from "/src/lib/lucide-react.tsx";
import { useI18n } from "/src/lib/i18n.tsx";
var _jsxFileName = "/app/frontend/src/components/LanguageSelect.tsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
var _s = $RefreshSig$();
export function LanguageSelect() {
	_s();
	const { lang, setLang, languages, status, progress, t } = useI18n();
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "lang-select",
		"x-file-name": "LanguageSelect",
		"x-line-number": "7",
		"x-column": "4",
		"x-component": "div",
		"x-id": "LanguageSelect_7_4",
		"x-dynamic": "true",
		"x-source-type": "computed",
		"x-source-editable": "false",
		children: [
			/* @__PURE__ */ _jsxDEV(Languages, {
				size: 15,
				"x-file-name": "LanguageSelect",
				"x-line-number": "8",
				"x-column": "6",
				"x-component": "Languages",
				"x-id": "LanguageSelect_8_6",
				"x-dynamic": "false"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("select", {
				value: lang,
				onChange: (e) => setLang(e.target.value),
				"aria-label": "Language",
				"data-testid": "language-selector",
				"x-file-name": "LanguageSelect",
				"x-line-number": "9",
				"x-column": "6",
				"x-component": "select",
				"x-id": "LanguageSelect_9_6",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: languages.map((l) => /* @__PURE__ */ _jsxDEV("option", {
					value: l.code,
					"x-file-name": "LanguageSelect",
					"x-line-number": "11",
					"x-column": "10",
					"x-component": "option",
					"x-id": "LanguageSelect_11_10",
					"x-dynamic": "true",
					"x-source-type": "static-imported",
					"x-source-var": "languages",
					"x-source-path": "native",
					"x-source-editable": "false",
					"x-array-var": "languages",
					"x-array-item-param": "l",
					children: l.native
				}, l.code, false, {
					fileName: _jsxFileName,
					lineNumber: 15,
					columnNumber: 29
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 14,
				columnNumber: 7
			}, this),
			status === "translating" && /* @__PURE__ */ _jsxDEV("span", {
				className: "lang-status",
				"data-testid": "translation-status",
				"x-file-name": "LanguageSelect",
				"x-line-number": "17",
				"x-column": "8",
				"x-component": "span",
				"x-id": "LanguageSelect_17_8",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: [
					/* @__PURE__ */ _jsxDEV(Loader2, {
						size: 13,
						className: "spin",
						"x-file-name": "LanguageSelect",
						"x-line-number": "18",
						"x-column": "10",
						"x-component": "Loader2",
						"x-id": "LanguageSelect_18_10",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 20,
						columnNumber: 11
					}, this),
					" ",
					/* @__PURE__ */ _jsxDEV("span", {
						"data-ve-dynamic": "true",
						"x-excluded": "true",
						style: { display: "contents" },
						"x-file-name": "LanguageSelect",
						"x-line-number": "17",
						"x-column": "8",
						"x-component": "span",
						"x-id": "LanguageSelect_17_8_expr3",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t("nav.translating")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 20,
						columnNumber: 180
					}, this),
					" ",
					/* @__PURE__ */ _jsxDEV("span", {
						"data-ve-dynamic": "true",
						"x-excluded": "true",
						style: { display: "contents" },
						"x-file-name": "LanguageSelect",
						"x-line-number": "17",
						"x-column": "8",
						"x-component": "span",
						"x-id": "LanguageSelect_17_8_expr5",
						"x-dynamic": "true",
						"x-source-type": "unknown",
						"x-source-var": "progress",
						"x-source-editable": "false",
						children: progress
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 22,
						columnNumber: 221
					}, this),
					"%"
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 36
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 10
	}, this);
}
_s(LanguageSelect, "VpnUfTYQjsQ82drTiLS9GmZjQ20=", false, function() {
	return [useI18n];
});
_c = LanguageSelect;
var _c;
$RefreshReg$(_c, "LanguageSelect");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/LanguageSelect.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/components/LanguageSelect.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/components/LanguageSelect.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/components/LanguageSelect.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsV0FBV0MsZUFBZTtBQUNuQyxTQUFTQyxlQUFlOzs7O0FBRXhCLE9BQU8sU0FBU0MsaUJBQWlCOztDQUMvQixNQUFNLEVBQUVDLE1BQU1DLFNBQVNDLFdBQVdDLFFBQVFDLFVBQVVDLE1BQU1QLFFBQVE7Q0FDbEUsT0FDRSx3QkFBQyxPQUFEO0VBQUssV0FBVTtFQUFhO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7WUFBNUI7R0FDRSx3QkFBQyxXQUFEO0lBQVcsTUFBTTtJQUFHO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtHQUFBOzs7OztHQUNwQix3QkFBQyxVQUFEO0lBQVEsT0FBT0U7SUFBTSxXQUFXTSxNQUFNTCxRQUFRSyxFQUFFQyxPQUFPQyxLQUFLO0lBQUcsY0FBVztJQUFXLGVBQVk7SUFBbUI7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtjQUNqSE4sVUFBVU8sS0FBS0MsTUFDZCx3QkFBQyxVQUFEO0tBQXFCLE9BQU9BLEVBQUVDO0tBQUs7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO2VBQ2hDRCxFQUFFRTtJQUNHLEdBRktGLEVBQUVDOzs7O1dBRVAsQ0FDVDtHQUNLOzs7OztHQUNQUixXQUFXLGlCQUNWLHdCQUFDLFFBQUQ7SUFBTSxXQUFVO0lBQWMsZUFBWTtJQUFvQjtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO2NBQTlEO0tBQ0Usd0JBQUMsU0FBRDtNQUFTLE1BQU07TUFBSSxXQUFVO01BQU07TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO0tBQUE7Ozs7O0tBQUc7S0FBQztNQUFBO01BQUE7TUFBQSxTQUFBVSxTQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtnQkFBQ1IsRUFBRSxpQkFBaUI7S0FBRTs7Ozs7S0FBQTtLQUFDO01BQUE7TUFBQTtNQUFBLFNBQUFRLFNBQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7Z0JBQUNUO0tBQVM7Ozs7O0tBQUE7SUFDcEU7Ozs7OztFQUVMOzs7Ozs7QUFFVCIsIm5hbWVzIjpbIkxhbmd1YWdlcyIsIkxvYWRlcjIiLCJ1c2VJMThuIiwiTGFuZ3VhZ2VTZWxlY3QiLCJsYW5nIiwic2V0TGFuZyIsImxhbmd1YWdlcyIsInN0YXR1cyIsInByb2dyZXNzIiwidCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsImwiLCJjb2RlIiwibmF0aXZlIiwiZGlzcGxheSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJMYW5ndWFnZVNlbGVjdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGFuZ3VhZ2VzLCBMb2FkZXIyIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gXCJAL2xpYi9pMThuXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBMYW5ndWFnZVNlbGVjdCgpIHtcbiAgY29uc3QgeyBsYW5nLCBzZXRMYW5nLCBsYW5ndWFnZXMsIHN0YXR1cywgcHJvZ3Jlc3MsIHQgfSA9IHVzZUkxOG4oKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmctc2VsZWN0XCI+XG4gICAgICA8TGFuZ3VhZ2VzIHNpemU9ezE1fSAvPlxuICAgICAgPHNlbGVjdCB2YWx1ZT17bGFuZ30gb25DaGFuZ2U9eyhlKSA9PiBzZXRMYW5nKGUudGFyZ2V0LnZhbHVlKX0gYXJpYS1sYWJlbD1cIkxhbmd1YWdlXCIgZGF0YS10ZXN0aWQ9XCJsYW5ndWFnZS1zZWxlY3RvclwiPlxuICAgICAgICB7bGFuZ3VhZ2VzLm1hcCgobCkgPT4gKFxuICAgICAgICAgIDxvcHRpb24ga2V5PXtsLmNvZGV9IHZhbHVlPXtsLmNvZGV9PlxuICAgICAgICAgICAge2wubmF0aXZlfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKX1cbiAgICAgIDwvc2VsZWN0PlxuICAgICAge3N0YXR1cyA9PT0gXCJ0cmFuc2xhdGluZ1wiICYmIChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFuZy1zdGF0dXNcIiBkYXRhLXRlc3RpZD1cInRyYW5zbGF0aW9uLXN0YXR1c1wiPlxuICAgICAgICAgIDxMb2FkZXIyIHNpemU9ezEzfSBjbGFzc05hbWU9XCJzcGluXCIgLz4ge3QoXCJuYXYudHJhbnNsYXRpbmdcIil9IHtwcm9ncmVzc30lXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwiZmlsZSI6Ii9hcHAvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvTGFuZ3VhZ2VTZWxlY3QudHN4In0=