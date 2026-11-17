import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/UserMenu.tsx");const _jsxDEV = __vite__cjsImport5_react_jsxDevRuntime["jsxDEV"];import { useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=a646c335";
import { LayoutDashboard, LogOut } from "/src/lib/lucide-react.tsx";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "/src/components/ui/dropdown-menu.tsx";
import { useAuth } from "/src/lib/auth.tsx";
import { useI18n } from "/src/lib/i18n.tsx";
var _jsxFileName = "/app/frontend/src/components/UserMenu.tsx";
import __vite__cjsImport5_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
var _s = $RefreshSig$();
export function UserMenu() {
	_s();
	const { user, signOut } = useAuth();
	const { t } = useI18n();
	const navigate = useNavigate();
	const initials = (user?.name || "?").split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();
	return /* @__PURE__ */ _jsxDEV(DropdownMenu, { children: [/* @__PURE__ */ _jsxDEV(DropdownMenuTrigger, {
		className: "user-button",
		"data-testid": "user-menu-button",
		children: [/* @__PURE__ */ _jsxDEV("span", {
			className: "user-avatar",
			"x-file-name": "UserMenu",
			"x-line-number": "15",
			"x-column": "8",
			"x-component": "span",
			"x-id": "UserMenu_15_8",
			"x-dynamic": "true",
			"x-source-type": "unknown",
			"x-source-var": "initials",
			"x-source-editable": "false",
			children: initials
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 18,
			columnNumber: 9
		}, this), /* @__PURE__ */ _jsxDEV("span", {
			"x-file-name": "UserMenu",
			"x-line-number": "16",
			"x-column": "8",
			"x-component": "span",
			"x-id": "UserMenu_16_8",
			"x-dynamic": "true",
			"x-source-type": "unknown",
			"x-source-editable": "false",
			children: user?.name.split(" ")[0]
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 19,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 17,
		columnNumber: 7
	}, this), /* @__PURE__ */ _jsxDEV(DropdownMenuContent, {
		align: "end",
		children: [/* @__PURE__ */ _jsxDEV(DropdownMenuItem, {
			onClick: () => navigate("/dashboard"),
			"data-testid": "user-menu-dashboard",
			"x-file-name": "UserMenu",
			"x-line-number": "19",
			"x-column": "8",
			"x-component": "DropdownMenuItem",
			"x-id": "UserMenu_19_8",
			"x-dynamic": "true",
			"x-excluded": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: [
				/* @__PURE__ */ _jsxDEV(LayoutDashboard, {
					size: 15,
					"x-file-name": "UserMenu",
					"x-line-number": "20",
					"x-column": "10",
					"x-component": "LayoutDashboard",
					"x-id": "UserMenu_20_10",
					"x-dynamic": "false"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 11
				}, this),
				" ",
				t("nav.dashboard")
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 22,
			columnNumber: 9
		}, this), /* @__PURE__ */ _jsxDEV(DropdownMenuItem, {
			onClick: () => void signOut(),
			"data-testid": "user-menu-sign-out",
			"x-file-name": "UserMenu",
			"x-line-number": "22",
			"x-column": "8",
			"x-component": "DropdownMenuItem",
			"x-id": "UserMenu_22_8",
			"x-dynamic": "true",
			"x-excluded": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: [
				/* @__PURE__ */ _jsxDEV(LogOut, {
					size: 15,
					"x-file-name": "UserMenu",
					"x-line-number": "23",
					"x-column": "10",
					"x-component": "LogOut",
					"x-id": "UserMenu_23_10",
					"x-dynamic": "false"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 11
				}, this),
				" ",
				t("nav.signOut")
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 21,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 10
	}, this);
}
_s(UserMenu, "epwGjmNo6fpi6fozaXB9mcyi8SA=", false, function() {
	return [
		useAuth,
		useI18n,
		useNavigate
	];
});
_c = UserMenu;
var _c;
$RefreshReg$(_c, "UserMenu");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/UserMenu.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/components/UserMenu.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/components/UserMenu.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/components/UserMenu.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsbUJBQW1CO0FBQzVCLFNBQVNDLGlCQUFpQkMsY0FBYztBQUN4QyxTQUFTQyxjQUFjQyxxQkFBcUJDLGtCQUFrQkMsMkJBQTJCO0FBQ3pGLFNBQVNDLGVBQWU7QUFDeEIsU0FBU0MsZUFBZTs7OztBQUV4QixPQUFPLFNBQVNDLFdBQVc7O0NBQ3pCLE1BQU0sRUFBRUMsTUFBTUMsWUFBWUosUUFBUTtDQUNsQyxNQUFNLEVBQUVLLE1BQU1KLFFBQVE7Q0FDdEIsTUFBTUssV0FBV2IsWUFBWTtDQUM3QixNQUFNYyxZQUFZSixNQUFNSyxRQUFRLElBQUcsQ0FBRUMsTUFBTSxHQUFHLENBQUMsQ0FBQ0MsS0FBS0MsTUFBTUEsRUFBRSxFQUFFLENBQUMsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEVBQUUsQ0FBQyxDQUFDQyxZQUFZO0NBQ2xHLE9BQ0Usd0JBQUMsY0FBRCxhQUNFLHdCQUFDLHFCQUFEO0VBQXFCLFdBQVU7RUFBYyxlQUFZO1lBQXpELENBQ0Usd0JBQUMsUUFBRDtHQUFNLFdBQVU7R0FBYTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7YUFBRVA7RUFBZTs7OztZQUM5Qyx3QkFBQyxRQUFEO0dBQUs7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTthQUFFSixNQUFNSyxLQUFLQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0VBQVM7Ozs7VUFDbkI7Ozs7O1dBQ3JCLHdCQUFDLHFCQUFEO0VBQXFCLE9BQU07WUFBM0IsQ0FDRSx3QkFBQyxrQkFBRDtHQUFrQixlQUFlSCxTQUFTLFlBQVk7R0FBRyxlQUFZO0dBQXFCO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTthQUExRjtJQUNFLHdCQUFDLGlCQUFEO0tBQWlCLE1BQU07S0FBRztLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7SUFBQTs7Ozs7SUFBRztJQUFFRCxFQUFFLGVBQWU7R0FDaEM7Ozs7O1lBQ2xCLHdCQUFDLGtCQUFEO0dBQWtCLGVBQWUsS0FBS0QsUUFBUTtHQUFHLGVBQVk7R0FBb0I7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO2FBQWpGO0lBQ0Usd0JBQUMsUUFBRDtLQUFRLE1BQU07S0FBRztLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7SUFBQTs7Ozs7SUFBRztJQUFFQyxFQUFFLGFBQWE7R0FDckI7Ozs7O1VBQ0M7Ozs7O1NBQ1Q7Ozs7O0FBRWxCIiwibmFtZXMiOlsidXNlTmF2aWdhdGUiLCJMYXlvdXREYXNoYm9hcmQiLCJMb2dPdXQiLCJEcm9wZG93bk1lbnUiLCJEcm9wZG93bk1lbnVDb250ZW50IiwiRHJvcGRvd25NZW51SXRlbSIsIkRyb3Bkb3duTWVudVRyaWdnZXIiLCJ1c2VBdXRoIiwidXNlSTE4biIsIlVzZXJNZW51IiwidXNlciIsInNpZ25PdXQiLCJ0IiwibmF2aWdhdGUiLCJpbml0aWFscyIsIm5hbWUiLCJzcGxpdCIsIm1hcCIsInAiLCJzbGljZSIsImpvaW4iLCJ0b1VwcGVyQ2FzZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJVc2VyTWVudS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgTGF5b3V0RGFzaGJvYXJkLCBMb2dPdXQgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBEcm9wZG93bk1lbnUsIERyb3Bkb3duTWVudUNvbnRlbnQsIERyb3Bkb3duTWVudUl0ZW0sIERyb3Bkb3duTWVudVRyaWdnZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2Ryb3Bkb3duLW1lbnVcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gXCJAL2xpYi9pMThuXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBVc2VyTWVudSgpIHtcbiAgY29uc3QgeyB1c2VyLCBzaWduT3V0IH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IGluaXRpYWxzID0gKHVzZXI/Lm5hbWUgfHwgXCI/XCIpLnNwbGl0KFwiIFwiKS5tYXAoKHApID0+IHBbMF0pLnNsaWNlKDAsIDIpLmpvaW4oXCJcIikudG9VcHBlckNhc2UoKTtcbiAgcmV0dXJuIChcbiAgICA8RHJvcGRvd25NZW51PlxuICAgICAgPERyb3Bkb3duTWVudVRyaWdnZXIgY2xhc3NOYW1lPVwidXNlci1idXR0b25cIiBkYXRhLXRlc3RpZD1cInVzZXItbWVudS1idXR0b25cIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlci1hdmF0YXJcIj57aW5pdGlhbHN9PC9zcGFuPlxuICAgICAgICA8c3Bhbj57dXNlcj8ubmFtZS5zcGxpdChcIiBcIilbMF19PC9zcGFuPlxuICAgICAgPC9Ecm9wZG93bk1lbnVUcmlnZ2VyPlxuICAgICAgPERyb3Bkb3duTWVudUNvbnRlbnQgYWxpZ249XCJlbmRcIj5cbiAgICAgICAgPERyb3Bkb3duTWVudUl0ZW0gb25DbGljaz17KCkgPT4gbmF2aWdhdGUoXCIvZGFzaGJvYXJkXCIpfSBkYXRhLXRlc3RpZD1cInVzZXItbWVudS1kYXNoYm9hcmRcIj5cbiAgICAgICAgICA8TGF5b3V0RGFzaGJvYXJkIHNpemU9ezE1fSAvPiB7dChcIm5hdi5kYXNoYm9hcmRcIil9XG4gICAgICAgIDwvRHJvcGRvd25NZW51SXRlbT5cbiAgICAgICAgPERyb3Bkb3duTWVudUl0ZW0gb25DbGljaz17KCkgPT4gdm9pZCBzaWduT3V0KCl9IGRhdGEtdGVzdGlkPVwidXNlci1tZW51LXNpZ24tb3V0XCI+XG4gICAgICAgICAgPExvZ091dCBzaXplPXsxNX0gLz4ge3QoXCJuYXYuc2lnbk91dFwiKX1cbiAgICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxuICAgICAgPC9Ecm9wZG93bk1lbnVDb250ZW50PlxuICAgIDwvRHJvcGRvd25NZW51PlxuICApO1xufVxuIl0sImZpbGUiOiIvYXBwL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1VzZXJNZW51LnRzeCJ9