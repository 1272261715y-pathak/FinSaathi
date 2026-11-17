import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/sonner.tsx");const useSyncExternalStore = __vite__cjsImport0_react["useSyncExternalStore"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];"use client";
import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=a646c335";
import { Toaster as Sonner } from "/node_modules/.vite/deps/sonner.js?v=a646c335";
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "/src/lib/lucide-react.tsx";
var _jsxFileName = "/app/frontend/src/components/ui/sonner.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
var _s = $RefreshSig$();
// The app's theme is the `dark` class on <html> (index.html or a toggle), never the viewer's OS setting.
const subscribeToDocumentTheme = (onChange) => {
	const observer = new MutationObserver(onChange);
	observer.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ["class"]
	});
	return () => observer.disconnect();
};
const getDocumentTheme = () => document.documentElement.classList.contains("dark") ? "dark" : "light";
const getServerTheme = () => "light";
const Toaster = ({ ...props }) => {
	_s();
	const theme = useSyncExternalStore(subscribeToDocumentTheme, getDocumentTheme, getServerTheme);
	return /* @__PURE__ */ _jsxDEV(Sonner, {
		theme,
		// bottom-right: top positions sit on the header nav and swallow clicks; bottom-left is the preview bug button
		position: "bottom-right",
		className: "toaster group",
		icons: {
			success: /* @__PURE__ */ _jsxDEV(CircleCheckIcon, {
				className: "size-4",
				"x-file-name": "sonner",
				"x-line-number": "30",
				"x-column": "10",
				"x-component": "CircleCheckIcon",
				"x-id": "sonner_30_10",
				"x-dynamic": "false"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 14
			}, this),
			info: /* @__PURE__ */ _jsxDEV(InfoIcon, {
				className: "size-4",
				"x-file-name": "sonner",
				"x-line-number": "33",
				"x-column": "10",
				"x-component": "InfoIcon",
				"x-id": "sonner_33_10",
				"x-dynamic": "false"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 11
			}, this),
			warning: /* @__PURE__ */ _jsxDEV(TriangleAlertIcon, {
				className: "size-4",
				"x-file-name": "sonner",
				"x-line-number": "36",
				"x-column": "10",
				"x-component": "TriangleAlertIcon",
				"x-id": "sonner_36_10",
				"x-dynamic": "false"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 14
			}, this),
			error: /* @__PURE__ */ _jsxDEV(OctagonXIcon, {
				className: "size-4",
				"x-file-name": "sonner",
				"x-line-number": "39",
				"x-column": "10",
				"x-component": "OctagonXIcon",
				"x-id": "sonner_39_10",
				"x-dynamic": "false"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 12
			}, this),
			loading: /* @__PURE__ */ _jsxDEV(Loader2Icon, {
				className: "size-4 animate-spin",
				"x-file-name": "sonner",
				"x-line-number": "42",
				"x-column": "10",
				"x-component": "Loader2Icon",
				"x-id": "sonner_42_10",
				"x-dynamic": "false"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 29,
				columnNumber: 14
			}, this)
		},
		style: {
			"--normal-bg": "var(--popover)",
			"--normal-text": "var(--popover-foreground)",
			"--normal-border": "var(--border)",
			"--border-radius": "var(--radius)"
		},
		toastOptions: { classNames: { toast: "cn-toast" } },
		"x-file-name": "sonner",
		"x-line-number": "23",
		"x-column": "4",
		"x-component": "Sonner",
		"x-id": "sonner_23_4",
		"x-dynamic": "true",
		...props
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 22,
		columnNumber: 10
	}, this);
};
_s(Toaster, "HbqBb6oWjpQSXathj5kEm7mskTM=");
_c = Toaster;
export { Toaster };
var _c;
$RefreshReg$(_c, "Toaster");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/ui/sonner.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/components/ui/sonner.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/components/ui/sonner.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/components/ui/sonner.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxTQUFTQSw0QkFBNEI7QUFDckMsU0FBU0MsV0FBV0MsY0FBaUM7QUFDckQsU0FBU0MsaUJBQWlCQyxVQUFVQyxtQkFBbUJDLGNBQWNDLG1CQUFtQjs7Ozs7QUFHeEYsTUFBTUMsNEJBQTRCQyxhQUF5QjtDQUN6RCxNQUFNQyxXQUFXLElBQUlDLGlCQUFpQkYsUUFBUTtDQUM5Q0MsU0FBU0UsUUFBUUMsU0FBU0MsaUJBQWlCO0VBQUVDLFlBQVk7RUFBTUMsaUJBQWlCLENBQUMsT0FBTztDQUFFLENBQUM7Q0FDM0YsYUFBYU4sU0FBU08sV0FBVztBQUNuQztBQUVBLE1BQU1DLHlCQUNKTCxTQUFTQyxnQkFBZ0JLLFVBQVVDLFNBQVMsTUFBTSxJQUFJLFNBQVM7QUFFakUsTUFBTUMsdUJBQThDO0FBRXBELE1BQU1wQixXQUFXLEVBQUUsR0FBR3FCLFlBQTBCOztDQUM5QyxNQUFNQyxRQUFRdkIscUJBQXFCUSwwQkFBMEJVLGtCQUFrQkcsY0FBYztDQUU3RixPQUNFLHdCQUFDLFFBQUQ7RUFDU0U7O0VBRVAsVUFBUztFQUNULFdBQVU7RUFDVixPQUFPO0dBQ0xDLFNBQ0Usd0JBQUMsaUJBQUQ7SUFBaUIsV0FBVTtJQUFRO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtHQUFBOzs7OztHQUVyQ0MsTUFDRSx3QkFBQyxVQUFEO0lBQVUsV0FBVTtJQUFRO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtHQUFBOzs7OztHQUU5QkMsU0FDRSx3QkFBQyxtQkFBRDtJQUFtQixXQUFVO0lBQVE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0dBQUE7Ozs7O0dBRXZDQyxPQUNFLHdCQUFDLGNBQUQ7SUFBYyxXQUFVO0lBQVE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0dBQUE7Ozs7O0dBRWxDQyxTQUNFLHdCQUFDLGFBQUQ7SUFBYSxXQUFVO0lBQXFCO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtHQUFBOzs7OztFQUVoRDtFQUNBLE9BQ0U7R0FDRSxlQUFlO0dBQ2YsaUJBQWlCO0dBQ2pCLG1CQUFtQjtHQUNuQixtQkFBbUI7RUFDckI7RUFFRixjQUFjLEVBQ1pDLFlBQVksRUFDVkMsT0FBTyxXQUNULEVBQ0Y7RUFBRTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFDRixHQUFJUjtDQUFNOzs7OztBQUdoQjs7O0FBRUEsU0FBU3JCIiwibmFtZXMiOlsidXNlU3luY0V4dGVybmFsU3RvcmUiLCJUb2FzdGVyIiwiU29ubmVyIiwiQ2lyY2xlQ2hlY2tJY29uIiwiSW5mb0ljb24iLCJUcmlhbmdsZUFsZXJ0SWNvbiIsIk9jdGFnb25YSWNvbiIsIkxvYWRlcjJJY29uIiwic3Vic2NyaWJlVG9Eb2N1bWVudFRoZW1lIiwib25DaGFuZ2UiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJhdHRyaWJ1dGVzIiwiYXR0cmlidXRlRmlsdGVyIiwiZGlzY29ubmVjdCIsImdldERvY3VtZW50VGhlbWUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImdldFNlcnZlclRoZW1lIiwicHJvcHMiLCJ0aGVtZSIsInN1Y2Nlc3MiLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwibG9hZGluZyIsImNsYXNzTmFtZXMiLCJ0b2FzdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJzb25uZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IHVzZVN5bmNFeHRlcm5hbFN0b3JlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IFRvYXN0ZXIgYXMgU29ubmVyLCB0eXBlIFRvYXN0ZXJQcm9wcyB9IGZyb20gXCJzb25uZXJcIlxuaW1wb3J0IHsgQ2lyY2xlQ2hlY2tJY29uLCBJbmZvSWNvbiwgVHJpYW5nbGVBbGVydEljb24sIE9jdGFnb25YSWNvbiwgTG9hZGVyMkljb24gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCJcblxuLy8gVGhlIGFwcCdzIHRoZW1lIGlzIHRoZSBgZGFya2AgY2xhc3Mgb24gPGh0bWw+IChpbmRleC5odG1sIG9yIGEgdG9nZ2xlKSwgbmV2ZXIgdGhlIHZpZXdlcidzIE9TIHNldHRpbmcuXG5jb25zdCBzdWJzY3JpYmVUb0RvY3VtZW50VGhlbWUgPSAob25DaGFuZ2U6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihvbkNoYW5nZSlcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHsgYXR0cmlidXRlczogdHJ1ZSwgYXR0cmlidXRlRmlsdGVyOiBbXCJjbGFzc1wiXSB9KVxuICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG59XG5cbmNvbnN0IGdldERvY3VtZW50VGhlbWUgPSAoKTogVG9hc3RlclByb3BzW1widGhlbWVcIl0gPT5cbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtcIikgPyBcImRhcmtcIiA6IFwibGlnaHRcIlxuXG5jb25zdCBnZXRTZXJ2ZXJUaGVtZSA9ICgpOiBUb2FzdGVyUHJvcHNbXCJ0aGVtZVwiXSA9PiBcImxpZ2h0XCJcblxuY29uc3QgVG9hc3RlciA9ICh7IC4uLnByb3BzIH06IFRvYXN0ZXJQcm9wcykgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZVRvRG9jdW1lbnRUaGVtZSwgZ2V0RG9jdW1lbnRUaGVtZSwgZ2V0U2VydmVyVGhlbWUpXG5cbiAgcmV0dXJuIChcbiAgICA8U29ubmVyXG4gICAgICB0aGVtZT17dGhlbWV9XG4gICAgICAvLyBib3R0b20tcmlnaHQ6IHRvcCBwb3NpdGlvbnMgc2l0IG9uIHRoZSBoZWFkZXIgbmF2IGFuZCBzd2FsbG93IGNsaWNrczsgYm90dG9tLWxlZnQgaXMgdGhlIHByZXZpZXcgYnVnIGJ1dHRvblxuICAgICAgcG9zaXRpb249XCJib3R0b20tcmlnaHRcIlxuICAgICAgY2xhc3NOYW1lPVwidG9hc3RlciBncm91cFwiXG4gICAgICBpY29ucz17e1xuICAgICAgICBzdWNjZXNzOiAoXG4gICAgICAgICAgPENpcmNsZUNoZWNrSWNvbiBjbGFzc05hbWU9XCJzaXplLTRcIiAvPlxuICAgICAgICApLFxuICAgICAgICBpbmZvOiAoXG4gICAgICAgICAgPEluZm9JY29uIGNsYXNzTmFtZT1cInNpemUtNFwiIC8+XG4gICAgICAgICksXG4gICAgICAgIHdhcm5pbmc6IChcbiAgICAgICAgICA8VHJpYW5nbGVBbGVydEljb24gY2xhc3NOYW1lPVwic2l6ZS00XCIgLz5cbiAgICAgICAgKSxcbiAgICAgICAgZXJyb3I6IChcbiAgICAgICAgICA8T2N0YWdvblhJY29uIGNsYXNzTmFtZT1cInNpemUtNFwiIC8+XG4gICAgICAgICksXG4gICAgICAgIGxvYWRpbmc6IChcbiAgICAgICAgICA8TG9hZGVyMkljb24gY2xhc3NOYW1lPVwic2l6ZS00IGFuaW1hdGUtc3BpblwiIC8+XG4gICAgICAgICksXG4gICAgICB9fVxuICAgICAgc3R5bGU9e1xuICAgICAgICB7XG4gICAgICAgICAgXCItLW5vcm1hbC1iZ1wiOiBcInZhcigtLXBvcG92ZXIpXCIsXG4gICAgICAgICAgXCItLW5vcm1hbC10ZXh0XCI6IFwidmFyKC0tcG9wb3Zlci1mb3JlZ3JvdW5kKVwiLFxuICAgICAgICAgIFwiLS1ub3JtYWwtYm9yZGVyXCI6IFwidmFyKC0tYm9yZGVyKVwiLFxuICAgICAgICAgIFwiLS1ib3JkZXItcmFkaXVzXCI6IFwidmFyKC0tcmFkaXVzKVwiLFxuICAgICAgICB9IGFzIFJlYWN0LkNTU1Byb3BlcnRpZXNcbiAgICAgIH1cbiAgICAgIHRvYXN0T3B0aW9ucz17e1xuICAgICAgICBjbGFzc05hbWVzOiB7XG4gICAgICAgICAgdG9hc3Q6IFwiY24tdG9hc3RcIixcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgeyBUb2FzdGVyIH1cbiJdLCJmaWxlIjoiL2FwcC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy91aS9zb25uZXIudHN4In0=