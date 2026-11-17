import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ThemeToggle.tsx");const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import { Moon, Sun } from "/src/lib/lucide-react.tsx";
import { useTheme } from "/src/lib/theme.tsx";
var _jsxFileName = "/app/frontend/src/components/ThemeToggle.tsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
var _s = $RefreshSig$();
export function ThemeToggle() {
	_s();
	const { theme, toggle } = useTheme();
	const neon = theme === "neon";
	return /* @__PURE__ */ _jsxDEV("button", {
		type: "button",
		className: "theme-toggle",
		onClick: toggle,
		"aria-label": neon ? "Switch to light look" : "Switch to neon look",
		title: neon ? "Light" : "Neon",
		"data-testid": "theme-toggle-button",
		"data-theme-state": theme,
		"x-file-name": "ThemeToggle",
		"x-line-number": "8",
		"x-column": "4",
		"x-component": "button",
		"x-id": "ThemeToggle_8_4",
		"x-dynamic": "false",
		children: /* @__PURE__ */ _jsxDEV("span", {
			className: "theme-toggle-icon",
			"x-file-name": "ThemeToggle",
			"x-line-number": "17",
			"x-column": "6",
			"x-component": "span",
			"x-id": "ThemeToggle_17_6",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: neon ? /* @__PURE__ */ _jsxDEV(Sun, {
				size: 17,
				"x-file-name": "ThemeToggle",
				"x-line-number": "17",
				"x-column": "62",
				"x-component": "Sun",
				"x-id": "ThemeToggle_17_62",
				"x-dynamic": "false"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 10,
				columnNumber: 232
			}, this) : /* @__PURE__ */ _jsxDEV(Moon, {
				size: 17,
				"x-file-name": "ThemeToggle",
				"x-line-number": "17",
				"x-column": "82",
				"x-component": "Moon",
				"x-id": "ThemeToggle_17_82",
				"x-dynamic": "false"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 10,
				columnNumber: 372
			}, this)
		}, theme, false, {
			fileName: _jsxFileName,
			lineNumber: 10,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
_s(ThemeToggle, "g7gMCm7jKCkud05Fwz5jynRhHKE=", false, function() {
	return [useTheme];
});
_c = ThemeToggle;
var _c;
$RefreshReg$(_c, "ThemeToggle");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/ThemeToggle.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/components/ThemeToggle.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/components/ThemeToggle.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/components/ThemeToggle.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsTUFBTUMsV0FBVztBQUMxQixTQUFTQyxnQkFBZ0I7Ozs7QUFFekIsT0FBTyxTQUFTQyxjQUFjOztDQUM1QixNQUFNLEVBQUVDLE9BQU9DLFdBQVdILFNBQVM7Q0FDbkMsTUFBTUksT0FBT0YsVUFBVTtDQUN2QixPQUNFLHdCQUFDLFVBQUQ7RUFDRSxNQUFLO0VBQ0wsV0FBVTtFQUNWLFNBQVNDO0VBQ1QsY0FBWUMsT0FBTyx5QkFBeUI7RUFDNUMsT0FBT0EsT0FBTyxVQUFVO0VBQ3hCLGVBQVk7RUFDWixvQkFBa0JGO0VBQU07RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO1lBRXhCLHdCQUFDLFFBQUQ7R0FBTSxXQUFVO0dBQStCO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7YUFBRUUsT0FBTyx3QkFBQyxLQUFEO0lBQUssTUFBTTtJQUFHO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtHQUFBOzs7O2NBQU0sd0JBQUMsTUFBRDtJQUFNLE1BQU07SUFBRztJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7R0FBQTs7Ozs7RUFBVSxHQUE1REY7Ozs7U0FBNEQ7Q0FDL0Y7Ozs7O0FBRVoiLCJuYW1lcyI6WyJNb29uIiwiU3VuIiwidXNlVGhlbWUiLCJUaGVtZVRvZ2dsZSIsInRoZW1lIiwidG9nZ2xlIiwibmVvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJUaGVtZVRvZ2dsZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9vbiwgU3VuIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwiQC9saWIvdGhlbWVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFRoZW1lVG9nZ2xlKCkge1xuICBjb25zdCB7IHRoZW1lLCB0b2dnbGUgfSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IG5lb24gPSB0aGVtZSA9PT0gXCJuZW9uXCI7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9XCJ0aGVtZS10b2dnbGVcIlxuICAgICAgb25DbGljaz17dG9nZ2xlfVxuICAgICAgYXJpYS1sYWJlbD17bmVvbiA/IFwiU3dpdGNoIHRvIGxpZ2h0IGxvb2tcIiA6IFwiU3dpdGNoIHRvIG5lb24gbG9va1wifVxuICAgICAgdGl0bGU9e25lb24gPyBcIkxpZ2h0XCIgOiBcIk5lb25cIn1cbiAgICAgIGRhdGEtdGVzdGlkPVwidGhlbWUtdG9nZ2xlLWJ1dHRvblwiXG4gICAgICBkYXRhLXRoZW1lLXN0YXRlPXt0aGVtZX1cbiAgICA+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aGVtZS10b2dnbGUtaWNvblwiIGtleT17dGhlbWV9PntuZW9uID8gPFN1biBzaXplPXsxN30gLz4gOiA8TW9vbiBzaXplPXsxN30gLz59PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuIl0sImZpbGUiOiIvYXBwL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1RoZW1lVG9nZ2xlLnRzeCJ9