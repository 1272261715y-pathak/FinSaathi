import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/dropdown-menu.tsx");const React = ((m, n) => n || !m?.__esModule ? {	...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {},	default: m} : m)(__vite__cjsImport0_react, 1);const _jsxDEV = __vite__cjsImport4_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=a646c335";
import { Menu as MenuPrimitive } from "/node_modules/.vite/deps/@base-ui_react_menu.js?v=a646c335";
import { cn } from "/src/lib/utils.ts";
import { ChevronRightIcon, CheckIcon } from "/src/lib/lucide-react.tsx";
var _jsxFileName = "/app/frontend/src/components/ui/dropdown-menu.tsx";
import __vite__cjsImport4_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
function DropdownMenu({ ...props }) {
	return /* @__PURE__ */ _jsxDEV(MenuPrimitive.Root, {
		"data-slot": "dropdown-menu",
		"x-file-name": "dropdown-menu",
		"x-line-number": "8",
		"x-column": "9",
		"x-component": "Root",
		"x-id": "dropdown-menu_8_9",
		"x-dynamic": "true",
		...props
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
_c = DropdownMenu;
function DropdownMenuPortal({ ...props }) {
	return /* @__PURE__ */ _jsxDEV(MenuPrimitive.Portal, {
		"data-slot": "dropdown-menu-portal",
		"x-file-name": "dropdown-menu",
		"x-line-number": "12",
		"x-column": "9",
		"x-component": "Portal",
		"x-id": "dropdown-menu_12_9",
		"x-dynamic": "true",
		"x-excluded": "true",
		...props
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 13,
		columnNumber: 10
	}, this);
}
_c2 = DropdownMenuPortal;
function DropdownMenuTrigger({ ...props }) {
	return /* @__PURE__ */ _jsxDEV(MenuPrimitive.Trigger, {
		"data-slot": "dropdown-menu-trigger",
		"x-file-name": "dropdown-menu",
		"x-line-number": "16",
		"x-column": "9",
		"x-component": "Trigger",
		"x-id": "dropdown-menu_16_9",
		"x-dynamic": "true",
		"x-excluded": "true",
		...props
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 18,
		columnNumber: 10
	}, this);
}
_c3 = DropdownMenuTrigger;
function DropdownMenuContent({ align = "start", alignOffset = 0, side = "bottom", sideOffset = 4, className, ...props }) {
	return /* @__PURE__ */ _jsxDEV(MenuPrimitive.Portal, {
		"x-file-name": "dropdown-menu",
		"x-line-number": "32",
		"x-column": "4",
		"x-component": "Portal",
		"x-id": "dropdown-menu_32_4",
		"x-dynamic": "false",
		"x-excluded": "true",
		children: /* @__PURE__ */ _jsxDEV(MenuPrimitive.Positioner, {
			className: "isolate z-50 outline-none",
			align,
			alignOffset,
			side,
			sideOffset,
			"x-file-name": "dropdown-menu",
			"x-line-number": "33",
			"x-column": "6",
			"x-component": "Positioner",
			"x-id": "dropdown-menu_33_6",
			"x-dynamic": "false",
			children: /* @__PURE__ */ _jsxDEV(MenuPrimitive.Popup, {
				"data-slot": "dropdown-menu-content",
				className: cn("z-50 max-h-(--available-height) w-(--anchor-width) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95", className),
				"x-file-name": "dropdown-menu",
				"x-line-number": "40",
				"x-column": "8",
				"x-component": "Popup",
				"x-id": "dropdown-menu_40_8",
				"x-dynamic": "true",
				...props
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 29,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 28,
		columnNumber: 10
	}, this);
}
_c4 = DropdownMenuContent;
function DropdownMenuGroup({ ...props }) {
	return /* @__PURE__ */ _jsxDEV(MenuPrimitive.Group, {
		"data-slot": "dropdown-menu-group",
		"x-file-name": "dropdown-menu",
		"x-line-number": "51",
		"x-column": "9",
		"x-component": "Group",
		"x-id": "dropdown-menu_51_9",
		"x-dynamic": "true",
		...props
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 37,
		columnNumber: 10
	}, this);
}
_c5 = DropdownMenuGroup;
function DropdownMenuLabel({ className, inset, ...props }) {
	return /* @__PURE__ */ _jsxDEV(MenuPrimitive.GroupLabel, {
		"data-slot": "dropdown-menu-label",
		"data-inset": inset,
		className: cn("px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7", className),
		"x-file-name": "dropdown-menu",
		"x-line-number": "62",
		"x-column": "4",
		"x-component": "GroupLabel",
		"x-id": "dropdown-menu_62_4",
		"x-dynamic": "true",
		...props
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 46,
		columnNumber: 10
	}, this);
}
_c6 = DropdownMenuLabel;
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
	return /* @__PURE__ */ _jsxDEV(MenuPrimitive.Item, {
		"data-slot": "dropdown-menu-item",
		"data-inset": inset,
		"data-variant": variant,
		className: cn("group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive", className),
		"x-file-name": "dropdown-menu",
		"x-line-number": "84",
		"x-column": "4",
		"x-component": "Item",
		"x-id": "dropdown-menu_84_4",
		"x-dynamic": "true",
		...props
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 57,
		columnNumber: 10
	}, this);
}
_c7 = DropdownMenuItem;
function DropdownMenuSub({ ...props }) {
	return /* @__PURE__ */ _jsxDEV(MenuPrimitive.SubmenuRoot, {
		"data-slot": "dropdown-menu-sub",
		"x-file-name": "dropdown-menu",
		"x-line-number": "98",
		"x-column": "9",
		"x-component": "SubmenuRoot",
		"x-id": "dropdown-menu_98_9",
		"x-dynamic": "true",
		...props
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 62,
		columnNumber: 10
	}, this);
}
_c8 = DropdownMenuSub;
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
	return /* @__PURE__ */ _jsxDEV(MenuPrimitive.SubmenuTrigger, {
		"data-slot": "dropdown-menu-sub-trigger",
		"data-inset": inset,
		className: cn("flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-popup-open:bg-accent data-popup-open:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
		"x-file-name": "dropdown-menu",
		"x-line-number": "110",
		"x-column": "4",
		"x-component": "SubmenuTrigger",
		"x-id": "dropdown-menu_110_4",
		"x-dynamic": "true",
		"x-excluded": "true",
		"x-source-type": "prop",
		"x-source-var": "children",
		"x-source-editable": "false",
		...props,
		children: [children, /* @__PURE__ */ _jsxDEV(ChevronRightIcon, {
			className: "ml-auto",
			"x-file-name": "dropdown-menu",
			"x-line-number": "120",
			"x-column": "6",
			"x-component": "ChevronRightIcon",
			"x-id": "dropdown-menu_120_6",
			"x-dynamic": "false",
			"x-excluded": "true"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 74,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 72,
		columnNumber: 10
	}, this);
}
_c9 = DropdownMenuSubTrigger;
function DropdownMenuSubContent({ align = "start", alignOffset = -3, side = "right", sideOffset = 0, className, ...props }) {
	return /* @__PURE__ */ _jsxDEV(DropdownMenuContent, {
		"data-slot": "dropdown-menu-sub-content",
		className: cn("w-auto min-w-[96px] rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
		align,
		alignOffset,
		side,
		sideOffset,
		...props
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 85,
		columnNumber: 10
	}, this);
}
_c10 = DropdownMenuSubContent;
function DropdownMenuCheckboxItem({ className, children, checked, inset, ...props }) {
	return /* @__PURE__ */ _jsxDEV(MenuPrimitive.CheckboxItem, {
		"data-slot": "dropdown-menu-checkbox-item",
		"data-inset": inset,
		className: cn("relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
		checked,
		"x-file-name": "dropdown-menu",
		"x-line-number": "156",
		"x-column": "4",
		"x-component": "CheckboxItem",
		"x-id": "dropdown-menu_156_4",
		"x-dynamic": "true",
		"x-source-type": "prop",
		"x-source-var": "children",
		"x-source-editable": "false",
		...props,
		children: [/* @__PURE__ */ _jsxDEV("span", {
			className: "pointer-events-none absolute right-2 flex items-center justify-center",
			"data-slot": "dropdown-menu-checkbox-item-indicator",
			"x-file-name": "dropdown-menu",
			"x-line-number": "166",
			"x-column": "6",
			"x-component": "span",
			"x-id": "dropdown-menu_166_6",
			"x-dynamic": "false",
			children: /* @__PURE__ */ _jsxDEV(MenuPrimitive.CheckboxItemIndicator, {
				"x-file-name": "dropdown-menu",
				"x-line-number": "170",
				"x-column": "8",
				"x-component": "CheckboxItemIndicator",
				"x-id": "dropdown-menu_170_8",
				"x-dynamic": "false",
				children: /* @__PURE__ */ _jsxDEV(CheckIcon, {
					"x-file-name": "dropdown-menu",
					"x-line-number": "171",
					"x-column": "10",
					"x-component": "CheckIcon",
					"x-id": "dropdown-menu_171_10",
					"x-dynamic": "false"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 99,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 98,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 97,
			columnNumber: 7
		}, this), children]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 96,
		columnNumber: 10
	}, this);
}
_c11 = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup({ ...props }) {
	return /* @__PURE__ */ _jsxDEV(MenuPrimitive.RadioGroup, {
		"data-slot": "dropdown-menu-radio-group",
		"x-file-name": "dropdown-menu",
		"x-line-number": "182",
		"x-column": "4",
		"x-component": "RadioGroup",
		"x-id": "dropdown-menu_182_4",
		"x-dynamic": "true",
		...props
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 108,
		columnNumber: 10
	}, this);
}
_c12 = DropdownMenuRadioGroup;
function DropdownMenuRadioItem({ className, children, inset, ...props }) {
	return /* @__PURE__ */ _jsxDEV(MenuPrimitive.RadioItem, {
		"data-slot": "dropdown-menu-radio-item",
		"data-inset": inset,
		className: cn("relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
		"x-file-name": "dropdown-menu",
		"x-line-number": "198",
		"x-column": "4",
		"x-component": "RadioItem",
		"x-id": "dropdown-menu_198_4",
		"x-dynamic": "true",
		"x-source-type": "prop",
		"x-source-var": "children",
		"x-source-editable": "false",
		...props,
		children: [/* @__PURE__ */ _jsxDEV("span", {
			className: "pointer-events-none absolute right-2 flex items-center justify-center",
			"data-slot": "dropdown-menu-radio-item-indicator",
			"x-file-name": "dropdown-menu",
			"x-line-number": "207",
			"x-column": "6",
			"x-component": "span",
			"x-id": "dropdown-menu_207_6",
			"x-dynamic": "false",
			children: /* @__PURE__ */ _jsxDEV(MenuPrimitive.RadioItemIndicator, {
				"x-file-name": "dropdown-menu",
				"x-line-number": "211",
				"x-column": "8",
				"x-component": "RadioItemIndicator",
				"x-id": "dropdown-menu_211_8",
				"x-dynamic": "false",
				children: /* @__PURE__ */ _jsxDEV(CheckIcon, {
					"x-file-name": "dropdown-menu",
					"x-line-number": "212",
					"x-column": "10",
					"x-component": "CheckIcon",
					"x-id": "dropdown-menu_212_10",
					"x-dynamic": "false"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 121,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 120,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 119,
			columnNumber: 7
		}, this), children]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 118,
		columnNumber: 10
	}, this);
}
_c13 = DropdownMenuRadioItem;
function DropdownMenuSeparator({ className, ...props }) {
	return /* @__PURE__ */ _jsxDEV(MenuPrimitive.Separator, {
		"data-slot": "dropdown-menu-separator",
		className: cn("-mx-1 my-1 h-px bg-border", className),
		"x-file-name": "dropdown-menu",
		"x-line-number": "226",
		"x-column": "4",
		"x-component": "Separator",
		"x-id": "dropdown-menu_226_4",
		"x-dynamic": "true",
		...props
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 131,
		columnNumber: 10
	}, this);
}
_c14 = DropdownMenuSeparator;
function DropdownMenuShortcut({ className, ...props }) {
	return /* @__PURE__ */ _jsxDEV("span", {
		"data-slot": "dropdown-menu-shortcut",
		className: cn("ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground", className),
		"x-file-name": "dropdown-menu",
		"x-line-number": "239",
		"x-column": "4",
		"x-component": "span",
		"x-id": "dropdown-menu_239_4",
		"x-dynamic": "true",
		...props
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 137,
		columnNumber: 10
	}, this);
}
_c15 = DropdownMenuShortcut;
export { DropdownMenu, DropdownMenuPortal, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent };
var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
$RefreshReg$(_c, "DropdownMenu");
$RefreshReg$(_c2, "DropdownMenuPortal");
$RefreshReg$(_c3, "DropdownMenuTrigger");
$RefreshReg$(_c4, "DropdownMenuContent");
$RefreshReg$(_c5, "DropdownMenuGroup");
$RefreshReg$(_c6, "DropdownMenuLabel");
$RefreshReg$(_c7, "DropdownMenuItem");
$RefreshReg$(_c8, "DropdownMenuSub");
$RefreshReg$(_c9, "DropdownMenuSubTrigger");
$RefreshReg$(_c10, "DropdownMenuSubContent");
$RefreshReg$(_c11, "DropdownMenuCheckboxItem");
$RefreshReg$(_c12, "DropdownMenuRadioGroup");
$RefreshReg$(_c13, "DropdownMenuRadioItem");
$RefreshReg$(_c14, "DropdownMenuSeparator");
$RefreshReg$(_c15, "DropdownMenuShortcut");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/ui/dropdown-menu.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/components/ui/dropdown-menu.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/components/ui/dropdown-menu.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/components/ui/dropdown-menu.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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LDhWQUNBWSxTQUNGO0VBQUU7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQ0YsR0FBSVI7WUFQTixDQVNFLHdCQUFDLFFBQUQ7R0FDRSxXQUFVO0dBQ1YsYUFBVTtHQUFvQztHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7YUFFOUMsd0JBQUMsY0FBYyxvQkFBZjtJQUFpQztJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7Y0FDL0Isd0JBQUMsV0FBRDtLQUFVO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtJQUFBOzs7OztHQUVzQjs7Ozs7RUFDOUI7Ozs7WUFDTGdCLFFBQ3NCOzs7Ozs7QUFFN0I7O0FBRUEsU0FBU00sc0JBQXNCLEVBQzdCZCxXQUNBLEdBQUdSLFNBQzZCO0NBQ2hDLE9BQ0Usd0JBQUMsY0FBYyxXQUFmO0VBQ0UsYUFBVTtFQUNWLFdBQVdKLEdBQUcsNkJBQTZCWSxTQUFTO0VBQUU7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQ3RELEdBQUlSO0NBQU07Ozs7O0FBR2hCOztBQUVBLFNBQVN1QixxQkFBcUIsRUFDNUJmLFdBQ0EsR0FBR1IsU0FDNEI7Q0FDL0IsT0FDRSx3QkFBQyxRQUFEO0VBQ0UsYUFBVTtFQUNWLFdBQVdKLEdBQ1QsK0dBQ0FZLFNBQ0Y7RUFBRTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFDRixHQUFJUjtDQUFNOzs7OztBQUdoQjs7QUFFQSxTQUNFRCxjQUNBRSxvQkFDQUMscUJBQ0FDLHFCQUNBTSxtQkFDQUMsbUJBQ0FFLGtCQUNBTSwwQkFDQUUsd0JBQ0FDLHVCQUNBQyx1QkFDQUMsc0JBQ0FULGlCQUNBQyx3QkFDQUUiLCJuYW1lcyI6WyJSZWFjdCIsIk1lbnUiLCJNZW51UHJpbWl0aXZlIiwiY24iLCJDaGV2cm9uUmlnaHRJY29uIiwiQ2hlY2tJY29uIiwiRHJvcGRvd25NZW51IiwicHJvcHMiLCJEcm9wZG93bk1lbnVQb3J0YWwiLCJEcm9wZG93bk1lbnVUcmlnZ2VyIiwiRHJvcGRvd25NZW51Q29udGVudCIsImFsaWduIiwiYWxpZ25PZmZzZXQiLCJzaWRlIiwic2lkZU9mZnNldCIsImNsYXNzTmFtZSIsIkRyb3Bkb3duTWVudUdyb3VwIiwiRHJvcGRvd25NZW51TGFiZWwiLCJpbnNldCIsIkRyb3Bkb3duTWVudUl0ZW0iLCJ2YXJpYW50IiwiRHJvcGRvd25NZW51U3ViIiwiRHJvcGRvd25NZW51U3ViVHJpZ2dlciIsImNoaWxkcmVuIiwiRHJvcGRvd25NZW51U3ViQ29udGVudCIsIkRyb3Bkb3duTWVudUNoZWNrYm94SXRlbSIsImNoZWNrZWQiLCJEcm9wZG93bk1lbnVSYWRpb0dyb3VwIiwiRHJvcGRvd25NZW51UmFkaW9JdGVtIiwiRHJvcGRvd25NZW51U2VwYXJhdG9yIiwiRHJvcGRvd25NZW51U2hvcnRjdXQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiZHJvcGRvd24tbWVudS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IE1lbnUgYXMgTWVudVByaW1pdGl2ZSB9IGZyb20gXCJAYmFzZS11aS9yZWFjdC9tZW51XCJcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIlxuaW1wb3J0IHsgQ2hldnJvblJpZ2h0SWNvbiwgQ2hlY2tJY29uIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiXG5cbmZ1bmN0aW9uIERyb3Bkb3duTWVudSh7IC4uLnByb3BzIH06IE1lbnVQcmltaXRpdmUuUm9vdC5Qcm9wcykge1xuICByZXR1cm4gPE1lbnVQcmltaXRpdmUuUm9vdCBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51XCIgey4uLnByb3BzfSAvPlxufVxuXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVQb3J0YWwoeyAuLi5wcm9wcyB9OiBNZW51UHJpbWl0aXZlLlBvcnRhbC5Qcm9wcykge1xuICByZXR1cm4gPE1lbnVQcmltaXRpdmUuUG9ydGFsIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtcG9ydGFsXCIgey4uLnByb3BzfSAvPlxufVxuXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVUcmlnZ2VyKHsgLi4ucHJvcHMgfTogTWVudVByaW1pdGl2ZS5UcmlnZ2VyLlByb3BzKSB7XG4gIHJldHVybiA8TWVudVByaW1pdGl2ZS5UcmlnZ2VyIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtdHJpZ2dlclwiIHsuLi5wcm9wc30gLz5cbn1cblxuZnVuY3Rpb24gRHJvcGRvd25NZW51Q29udGVudCh7XG4gIGFsaWduID0gXCJzdGFydFwiLFxuICBhbGlnbk9mZnNldCA9IDAsXG4gIHNpZGUgPSBcImJvdHRvbVwiLFxuICBzaWRlT2Zmc2V0ID0gNCxcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufTogTWVudVByaW1pdGl2ZS5Qb3B1cC5Qcm9wcyAmXG4gIFBpY2s8XG4gICAgTWVudVByaW1pdGl2ZS5Qb3NpdGlvbmVyLlByb3BzLFxuICAgIFwiYWxpZ25cIiB8IFwiYWxpZ25PZmZzZXRcIiB8IFwic2lkZVwiIHwgXCJzaWRlT2Zmc2V0XCJcbiAgPikge1xuICByZXR1cm4gKFxuICAgIDxNZW51UHJpbWl0aXZlLlBvcnRhbD5cbiAgICAgIDxNZW51UHJpbWl0aXZlLlBvc2l0aW9uZXJcbiAgICAgICAgY2xhc3NOYW1lPVwiaXNvbGF0ZSB6LTUwIG91dGxpbmUtbm9uZVwiXG4gICAgICAgIGFsaWduPXthbGlnbn1cbiAgICAgICAgYWxpZ25PZmZzZXQ9e2FsaWduT2Zmc2V0fVxuICAgICAgICBzaWRlPXtzaWRlfVxuICAgICAgICBzaWRlT2Zmc2V0PXtzaWRlT2Zmc2V0fVxuICAgICAgPlxuICAgICAgICA8TWVudVByaW1pdGl2ZS5Qb3B1cFxuICAgICAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtY29udGVudFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbihcInotNTAgbWF4LWgtKC0tYXZhaWxhYmxlLWhlaWdodCkgdy0oLS1hbmNob3Itd2lkdGgpIG1pbi13LTMyIG9yaWdpbi0oLS10cmFuc2Zvcm0tb3JpZ2luKSBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWF1dG8gcm91bmRlZC1sZyBiZy1wb3BvdmVyIHAtMSB0ZXh0LXBvcG92ZXItZm9yZWdyb3VuZCBzaGFkb3ctbWQgcmluZy0xIHJpbmctZm9yZWdyb3VuZC8xMCBkdXJhdGlvbi0xMDAgb3V0bGluZS1ub25lIGRhdGEtW3NpZGU9Ym90dG9tXTpzbGlkZS1pbi1mcm9tLXRvcC0yIGRhdGEtW3NpZGU9aW5saW5lLWVuZF06c2xpZGUtaW4tZnJvbS1sZWZ0LTIgZGF0YS1bc2lkZT1pbmxpbmUtc3RhcnRdOnNsaWRlLWluLWZyb20tcmlnaHQtMiBkYXRhLVtzaWRlPWxlZnRdOnNsaWRlLWluLWZyb20tcmlnaHQtMiBkYXRhLVtzaWRlPXJpZ2h0XTpzbGlkZS1pbi1mcm9tLWxlZnQtMiBkYXRhLVtzaWRlPXRvcF06c2xpZGUtaW4tZnJvbS1ib3R0b20tMiBkYXRhLW9wZW46YW5pbWF0ZS1pbiBkYXRhLW9wZW46ZmFkZS1pbi0wIGRhdGEtb3Blbjp6b29tLWluLTk1IGRhdGEtY2xvc2VkOmFuaW1hdGUtb3V0IGRhdGEtY2xvc2VkOm92ZXJmbG93LWhpZGRlbiBkYXRhLWNsb3NlZDpmYWRlLW91dC0wIGRhdGEtY2xvc2VkOnpvb20tb3V0LTk1XCIsIGNsYXNzTmFtZSApfVxuICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgLz5cbiAgICAgIDwvTWVudVByaW1pdGl2ZS5Qb3NpdGlvbmVyPlxuICAgIDwvTWVudVByaW1pdGl2ZS5Qb3J0YWw+XG4gIClcbn1cblxuZnVuY3Rpb24gRHJvcGRvd25NZW51R3JvdXAoeyAuLi5wcm9wcyB9OiBNZW51UHJpbWl0aXZlLkdyb3VwLlByb3BzKSB7XG4gIHJldHVybiA8TWVudVByaW1pdGl2ZS5Hcm91cCBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LWdyb3VwXCIgey4uLnByb3BzfSAvPlxufVxuXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVMYWJlbCh7XG4gIGNsYXNzTmFtZSxcbiAgaW5zZXQsXG4gIC4uLnByb3BzXG59OiBNZW51UHJpbWl0aXZlLkdyb3VwTGFiZWwuUHJvcHMgJiB7XG4gIGluc2V0PzogYm9vbGVhblxufSkge1xuICByZXR1cm4gKFxuICAgIDxNZW51UHJpbWl0aXZlLkdyb3VwTGFiZWxcbiAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtbGFiZWxcIlxuICAgICAgZGF0YS1pbnNldD17aW5zZXR9XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcInB4LTEuNSBweS0xIHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGRhdGEtaW5zZXQ6cGwtN1wiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKVxufVxuXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVJdGVtKHtcbiAgY2xhc3NOYW1lLFxuICBpbnNldCxcbiAgdmFyaWFudCA9IFwiZGVmYXVsdFwiLFxuICAuLi5wcm9wc1xufTogTWVudVByaW1pdGl2ZS5JdGVtLlByb3BzICYge1xuICBpbnNldD86IGJvb2xlYW5cbiAgdmFyaWFudD86IFwiZGVmYXVsdFwiIHwgXCJkZXN0cnVjdGl2ZVwiXG59KSB7XG4gIHJldHVybiAoXG4gICAgPE1lbnVQcmltaXRpdmUuSXRlbVxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1pdGVtXCJcbiAgICAgIGRhdGEtaW5zZXQ9e2luc2V0fVxuICAgICAgZGF0YS12YXJpYW50PXt2YXJpYW50fVxuICAgICAgY2xhc3NOYW1lPXtjbihcbiAgICAgICAgXCJncm91cC9kcm9wZG93bi1tZW51LWl0ZW0gcmVsYXRpdmUgZmxleCBjdXJzb3ItZGVmYXVsdCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSByb3VuZGVkLW1kIHB4LTEuNSBweS0xIHRleHQtc20gb3V0bGluZS1oaWRkZW4gc2VsZWN0LW5vbmUgZm9jdXM6YmctYWNjZW50IGZvY3VzOnRleHQtYWNjZW50LWZvcmVncm91bmQgbm90LWRhdGEtW3ZhcmlhbnQ9ZGVzdHJ1Y3RpdmVdOmZvY3VzOioqOnRleHQtYWNjZW50LWZvcmVncm91bmQgZGF0YS1pbnNldDpwbC03IGRhdGEtW3ZhcmlhbnQ9ZGVzdHJ1Y3RpdmVdOnRleHQtZGVzdHJ1Y3RpdmUgZGF0YS1bdmFyaWFudD1kZXN0cnVjdGl2ZV06Zm9jdXM6YmctZGVzdHJ1Y3RpdmUvMTAgZGF0YS1bdmFyaWFudD1kZXN0cnVjdGl2ZV06Zm9jdXM6dGV4dC1kZXN0cnVjdGl2ZSBkYXJrOmRhdGEtW3ZhcmlhbnQ9ZGVzdHJ1Y3RpdmVdOmZvY3VzOmJnLWRlc3RydWN0aXZlLzIwIGRhdGEtZGlzYWJsZWQ6cG9pbnRlci1ldmVudHMtbm9uZSBkYXRhLWRpc2FibGVkOm9wYWNpdHktNTAgWyZfc3ZnXTpwb2ludGVyLWV2ZW50cy1ub25lIFsmX3N2Z106c2hyaW5rLTAgWyZfc3ZnOm5vdChbY2xhc3MqPSdzaXplLSddKV06c2l6ZS00IGRhdGEtW3ZhcmlhbnQ9ZGVzdHJ1Y3RpdmVdOio6W3N2Z106dGV4dC1kZXN0cnVjdGl2ZVwiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKVxufVxuXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVTdWIoeyAuLi5wcm9wcyB9OiBNZW51UHJpbWl0aXZlLlN1Ym1lbnVSb290LlByb3BzKSB7XG4gIHJldHVybiA8TWVudVByaW1pdGl2ZS5TdWJtZW51Um9vdCBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LXN1YlwiIHsuLi5wcm9wc30gLz5cbn1cblxuZnVuY3Rpb24gRHJvcGRvd25NZW51U3ViVHJpZ2dlcih7XG4gIGNsYXNzTmFtZSxcbiAgaW5zZXQsXG4gIGNoaWxkcmVuLFxuICAuLi5wcm9wc1xufTogTWVudVByaW1pdGl2ZS5TdWJtZW51VHJpZ2dlci5Qcm9wcyAmIHtcbiAgaW5zZXQ/OiBib29sZWFuXG59KSB7XG4gIHJldHVybiAoXG4gICAgPE1lbnVQcmltaXRpdmUuU3VibWVudVRyaWdnZXJcbiAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtc3ViLXRyaWdnZXJcIlxuICAgICAgZGF0YS1pbnNldD17aW5zZXR9XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcImZsZXggY3Vyc29yLWRlZmF1bHQgaXRlbXMtY2VudGVyIGdhcC0xLjUgcm91bmRlZC1tZCBweC0xLjUgcHktMSB0ZXh0LXNtIG91dGxpbmUtaGlkZGVuIHNlbGVjdC1ub25lIGZvY3VzOmJnLWFjY2VudCBmb2N1czp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIG5vdC1kYXRhLVt2YXJpYW50PWRlc3RydWN0aXZlXTpmb2N1czoqKjp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhdGEtaW5zZXQ6cGwtNyBkYXRhLXBvcHVwLW9wZW46YmctYWNjZW50IGRhdGEtcG9wdXAtb3Blbjp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhdGEtb3BlbjpiZy1hY2NlbnQgZGF0YS1vcGVuOnRleHQtYWNjZW50LWZvcmVncm91bmQgWyZfc3ZnXTpwb2ludGVyLWV2ZW50cy1ub25lIFsmX3N2Z106c2hyaW5rLTAgWyZfc3ZnOm5vdChbY2xhc3MqPSdzaXplLSddKV06c2l6ZS00XCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICA8Q2hldnJvblJpZ2h0SWNvbiBjbGFzc05hbWU9XCJtbC1hdXRvXCIgLz5cbiAgICA8L01lbnVQcmltaXRpdmUuU3VibWVudVRyaWdnZXI+XG4gIClcbn1cblxuZnVuY3Rpb24gRHJvcGRvd25NZW51U3ViQ29udGVudCh7XG4gIGFsaWduID0gXCJzdGFydFwiLFxuICBhbGlnbk9mZnNldCA9IC0zLFxuICBzaWRlID0gXCJyaWdodFwiLFxuICBzaWRlT2Zmc2V0ID0gMCxcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufTogUmVhY3QuQ29tcG9uZW50UHJvcHM8dHlwZW9mIERyb3Bkb3duTWVudUNvbnRlbnQ+KSB7XG4gIHJldHVybiAoXG4gICAgPERyb3Bkb3duTWVudUNvbnRlbnRcbiAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtc3ViLWNvbnRlbnRcIlxuICAgICAgY2xhc3NOYW1lPXtjbihcInctYXV0byBtaW4tdy1bOTZweF0gcm91bmRlZC1sZyBiZy1wb3BvdmVyIHAtMSB0ZXh0LXBvcG92ZXItZm9yZWdyb3VuZCBzaGFkb3ctbGcgcmluZy0xIHJpbmctZm9yZWdyb3VuZC8xMCBkdXJhdGlvbi0xMDAgZGF0YS1bc2lkZT1ib3R0b21dOnNsaWRlLWluLWZyb20tdG9wLTIgZGF0YS1bc2lkZT1sZWZ0XTpzbGlkZS1pbi1mcm9tLXJpZ2h0LTIgZGF0YS1bc2lkZT1yaWdodF06c2xpZGUtaW4tZnJvbS1sZWZ0LTIgZGF0YS1bc2lkZT10b3BdOnNsaWRlLWluLWZyb20tYm90dG9tLTIgZGF0YS1vcGVuOmFuaW1hdGUtaW4gZGF0YS1vcGVuOmZhZGUtaW4tMCBkYXRhLW9wZW46em9vbS1pbi05NSBkYXRhLWNsb3NlZDphbmltYXRlLW91dCBkYXRhLWNsb3NlZDpmYWRlLW91dC0wIGRhdGEtY2xvc2VkOnpvb20tb3V0LTk1XCIsIGNsYXNzTmFtZSApfVxuICAgICAgYWxpZ249e2FsaWdufVxuICAgICAgYWxpZ25PZmZzZXQ9e2FsaWduT2Zmc2V0fVxuICAgICAgc2lkZT17c2lkZX1cbiAgICAgIHNpZGVPZmZzZXQ9e3NpZGVPZmZzZXR9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKVxufVxuXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVDaGVja2JveEl0ZW0oe1xuICBjbGFzc05hbWUsXG4gIGNoaWxkcmVuLFxuICBjaGVja2VkLFxuICBpbnNldCxcbiAgLi4ucHJvcHNcbn06IE1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtLlByb3BzICYge1xuICBpbnNldD86IGJvb2xlYW5cbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8TWVudVByaW1pdGl2ZS5DaGVja2JveEl0ZW1cbiAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtY2hlY2tib3gtaXRlbVwiXG4gICAgICBkYXRhLWluc2V0PXtpbnNldH1cbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwicmVsYXRpdmUgZmxleCBjdXJzb3ItZGVmYXVsdCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSByb3VuZGVkLW1kIHB5LTEgcHItOCBwbC0xLjUgdGV4dC1zbSBvdXRsaW5lLWhpZGRlbiBzZWxlY3Qtbm9uZSBmb2N1czpiZy1hY2NlbnQgZm9jdXM6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCBmb2N1czoqKjp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhdGEtaW5zZXQ6cGwtNyBkYXRhLWRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmUgZGF0YS1kaXNhYmxlZDpvcGFjaXR5LTUwIFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmddOnNocmluay0wIFsmX3N2Zzpub3QoW2NsYXNzKj0nc2l6ZS0nXSldOnNpemUtNFwiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgcmlnaHQtMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtY2hlY2tib3gtaXRlbS1pbmRpY2F0b3JcIlxuICAgICAgPlxuICAgICAgICA8TWVudVByaW1pdGl2ZS5DaGVja2JveEl0ZW1JbmRpY2F0b3I+XG4gICAgICAgICAgPENoZWNrSWNvblxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTWVudVByaW1pdGl2ZS5DaGVja2JveEl0ZW1JbmRpY2F0b3I+XG4gICAgICA8L3NwYW4+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9NZW51UHJpbWl0aXZlLkNoZWNrYm94SXRlbT5cbiAgKVxufVxuXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVSYWRpb0dyb3VwKHsgLi4ucHJvcHMgfTogTWVudVByaW1pdGl2ZS5SYWRpb0dyb3VwLlByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPE1lbnVQcmltaXRpdmUuUmFkaW9Hcm91cFxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1yYWRpby1ncm91cFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKVxufVxuXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVSYWRpb0l0ZW0oe1xuICBjbGFzc05hbWUsXG4gIGNoaWxkcmVuLFxuICBpbnNldCxcbiAgLi4ucHJvcHNcbn06IE1lbnVQcmltaXRpdmUuUmFkaW9JdGVtLlByb3BzICYge1xuICBpbnNldD86IGJvb2xlYW5cbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8TWVudVByaW1pdGl2ZS5SYWRpb0l0ZW1cbiAgICAgIGRhdGEtc2xvdD1cImRyb3Bkb3duLW1lbnUtcmFkaW8taXRlbVwiXG4gICAgICBkYXRhLWluc2V0PXtpbnNldH1cbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwicmVsYXRpdmUgZmxleCBjdXJzb3ItZGVmYXVsdCBpdGVtcy1jZW50ZXIgZ2FwLTEuNSByb3VuZGVkLW1kIHB5LTEgcHItOCBwbC0xLjUgdGV4dC1zbSBvdXRsaW5lLWhpZGRlbiBzZWxlY3Qtbm9uZSBmb2N1czpiZy1hY2NlbnQgZm9jdXM6dGV4dC1hY2NlbnQtZm9yZWdyb3VuZCBmb2N1czoqKjp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kIGRhdGEtaW5zZXQ6cGwtNyBkYXRhLWRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmUgZGF0YS1kaXNhYmxlZDpvcGFjaXR5LTUwIFsmX3N2Z106cG9pbnRlci1ldmVudHMtbm9uZSBbJl9zdmddOnNocmluay0wIFsmX3N2Zzpub3QoW2NsYXNzKj0nc2l6ZS0nXSldOnNpemUtNFwiLFxuICAgICAgICBjbGFzc05hbWVcbiAgICAgICl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgPHNwYW5cbiAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSByaWdodC0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1yYWRpby1pdGVtLWluZGljYXRvclwiXG4gICAgICA+XG4gICAgICAgIDxNZW51UHJpbWl0aXZlLlJhZGlvSXRlbUluZGljYXRvcj5cbiAgICAgICAgICA8Q2hlY2tJY29uXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9NZW51UHJpbWl0aXZlLlJhZGlvSXRlbUluZGljYXRvcj5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L01lbnVQcmltaXRpdmUuUmFkaW9JdGVtPlxuICApXG59XG5cbmZ1bmN0aW9uIERyb3Bkb3duTWVudVNlcGFyYXRvcih7XG4gIGNsYXNzTmFtZSxcbiAgLi4ucHJvcHNcbn06IE1lbnVQcmltaXRpdmUuU2VwYXJhdG9yLlByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPE1lbnVQcmltaXRpdmUuU2VwYXJhdG9yXG4gICAgICBkYXRhLXNsb3Q9XCJkcm9wZG93bi1tZW51LXNlcGFyYXRvclwiXG4gICAgICBjbGFzc05hbWU9e2NuKFwiLW14LTEgbXktMSBoLXB4IGJnLWJvcmRlclwiLCBjbGFzc05hbWUpfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gIClcbn1cblxuZnVuY3Rpb24gRHJvcGRvd25NZW51U2hvcnRjdXQoe1xuICBjbGFzc05hbWUsXG4gIC4uLnByb3BzXG59OiBSZWFjdC5Db21wb25lbnRQcm9wczxcInNwYW5cIj4pIHtcbiAgcmV0dXJuIChcbiAgICA8c3BhblxuICAgICAgZGF0YS1zbG90PVwiZHJvcGRvd24tbWVudS1zaG9ydGN1dFwiXG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcIm1sLWF1dG8gdGV4dC14cyB0cmFja2luZy13aWRlc3QgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGdyb3VwLWZvY3VzL2Ryb3Bkb3duLW1lbnUtaXRlbTp0ZXh0LWFjY2VudC1mb3JlZ3JvdW5kXCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCB7XG4gIERyb3Bkb3duTWVudSxcbiAgRHJvcGRvd25NZW51UG9ydGFsLFxuICBEcm9wZG93bk1lbnVUcmlnZ2VyLFxuICBEcm9wZG93bk1lbnVDb250ZW50LFxuICBEcm9wZG93bk1lbnVHcm91cCxcbiAgRHJvcGRvd25NZW51TGFiZWwsXG4gIERyb3Bkb3duTWVudUl0ZW0sXG4gIERyb3Bkb3duTWVudUNoZWNrYm94SXRlbSxcbiAgRHJvcGRvd25NZW51UmFkaW9Hcm91cCxcbiAgRHJvcGRvd25NZW51UmFkaW9JdGVtLFxuICBEcm9wZG93bk1lbnVTZXBhcmF0b3IsXG4gIERyb3Bkb3duTWVudVNob3J0Y3V0LFxuICBEcm9wZG93bk1lbnVTdWIsXG4gIERyb3Bkb3duTWVudVN1YlRyaWdnZXIsXG4gIERyb3Bkb3duTWVudVN1YkNvbnRlbnQsXG59XG4iXSwiZmlsZSI6Ii9hcHAvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvdWkvZHJvcGRvd24tbWVudS50c3gifQ==