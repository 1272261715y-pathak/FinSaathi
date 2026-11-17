import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/academy/VideoCard.tsx");const _jsxDEV = __vite__cjsImport4_react_jsxDevRuntime["jsxDEV"];import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=a646c335";
import { BadgeCheck, Bookmark, CheckCircle2, Clock, PlayCircle, Sparkles } from "/src/lib/lucide-react.tsx";
import { useI18n } from "/src/lib/i18n.tsx";
import { useAcademy } from "/src/lib/academy.tsx";
var _jsxFileName = "/app/frontend/src/components/academy/VideoCard.tsx";
import __vite__cjsImport4_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
var _s = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$();
const OFFICIAL = ["Reserve Bank of India", "SEBI Awareness"];
export const videoTitle = (v, t) => v.source === "original" ? t(`orig.${v.ref}.title`) : v.title;
export const videoDesc = (v, t) => v.source === "original" ? t(`orig.${v.ref}.description`) : v.description || "";
export function LevelChip({ level }) {
	_s();
	const { t } = useI18n();
	return /* @__PURE__ */ _jsxDEV("span", {
		className: `level-chip ${level}`,
		"x-file-name": "VideoCard",
		"x-line-number": "15",
		"x-column": "9",
		"x-component": "span",
		"x-id": "VideoCard_15_9",
		"x-dynamic": "true",
		"x-source-type": "computed",
		"x-source-editable": "false",
		children: t(`ac.${level}`)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 18,
		columnNumber: 10
	}, this);
}
_s(LevelChip, "i9WSJarzxoSeCDSFKFFQ8fEj8w0=", false, function() {
	return [useI18n];
});
_c = LevelChip;
export function VideoCard({ v, compact }) {
	_s2();
	const { t } = useI18n();
	const { me } = useAcademy();
	const done = me.completed.includes(v.id);
	const saved = me.saved.includes(v.id);
	const original = v.source === "original";
	return /* @__PURE__ */ _jsxDEV(Link, {
		to: `/academy/video/${v.id}`,
		className: `video-card${compact ? " compact" : ""}${original ? " original" : ""}`,
		"data-testid": `video-card-${v.ref}`,
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "thumb",
			"x-file-name": "VideoCard",
			"x-line-number": "26",
			"x-column": "6",
			"x-component": "div",
			"x-id": "VideoCard_26_6",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: [
				/* @__PURE__ */ _jsxDEV("img", {
					src: v.thumbnail,
					alt: "",
					loading: "lazy",
					"x-file-name": "VideoCard",
					"x-line-number": "27",
					"x-column": "8",
					"x-component": "img",
					"x-id": "VideoCard_27_8",
					"x-dynamic": "false"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 9
				}, this),
				original && /* @__PURE__ */ _jsxDEV("span", {
					className: "orig-ribbon",
					"x-file-name": "VideoCard",
					"x-line-number": "28",
					"x-column": "21",
					"x-component": "span",
					"x-id": "VideoCard_28_21",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: [
						/* @__PURE__ */ _jsxDEV(Sparkles, {
							size: 12,
							"x-file-name": "VideoCard",
							"x-line-number": "28",
							"x-column": "51",
							"x-component": "Sparkles",
							"x-id": "VideoCard_28_51",
							"x-dynamic": "false"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 39,
							columnNumber: 219
						}, this),
						" ",
						t("ac.original")
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 39,
					columnNumber: 22
				}, this),
				v.duration && /* @__PURE__ */ _jsxDEV("span", {
					className: "duration",
					"x-file-name": "VideoCard",
					"x-line-number": "29",
					"x-column": "23",
					"x-component": "span",
					"x-id": "VideoCard_29_23",
					"x-dynamic": "true",
					"x-source-type": "prop",
					"x-source-var": "v",
					"x-source-path": "duration",
					"x-source-editable": "false",
					children: [
						/* @__PURE__ */ _jsxDEV(Clock, {
							size: 11,
							"x-file-name": "VideoCard",
							"x-line-number": "29",
							"x-column": "50",
							"x-component": "Clock",
							"x-id": "VideoCard_29_50",
							"x-dynamic": "false"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 40,
							columnNumber: 256
						}, this),
						" ",
						v.duration
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 24
				}, this),
				/* @__PURE__ */ _jsxDEV("span", {
					className: "play-hover",
					"x-file-name": "VideoCard",
					"x-line-number": "30",
					"x-column": "8",
					"x-component": "span",
					"x-id": "VideoCard_30_8",
					"x-dynamic": "false",
					children: /* @__PURE__ */ _jsxDEV(PlayCircle, {
						size: 44,
						"x-file-name": "VideoCard",
						"x-line-number": "30",
						"x-column": "37",
						"x-component": "PlayCircle",
						"x-id": "VideoCard_30_37",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 153
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 9
				}, this),
				done && /* @__PURE__ */ _jsxDEV("span", {
					className: "state-badge done",
					"x-file-name": "VideoCard",
					"x-line-number": "31",
					"x-column": "17",
					"x-component": "span",
					"x-id": "VideoCard_31_17",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: [
						/* @__PURE__ */ _jsxDEV(CheckCircle2, {
							size: 13,
							"x-file-name": "VideoCard",
							"x-line-number": "31",
							"x-column": "52",
							"x-component": "CheckCircle2",
							"x-id": "VideoCard_31_52",
							"x-dynamic": "false"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 220
						}, this),
						" ",
						t("ac.completedBadge")
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 18
				}, this),
				!done && saved && /* @__PURE__ */ _jsxDEV("span", {
					className: "state-badge saved",
					"x-file-name": "VideoCard",
					"x-line-number": "32",
					"x-column": "27",
					"x-component": "span",
					"x-id": "VideoCard_32_27",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: [
						/* @__PURE__ */ _jsxDEV(Bookmark, {
							size: 13,
							"x-file-name": "VideoCard",
							"x-line-number": "32",
							"x-column": "63",
							"x-component": "Bookmark",
							"x-id": "VideoCard_32_63",
							"x-dynamic": "false"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 43,
							columnNumber: 231
						}, this),
						" ",
						t("ac.savedBadge")
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 43,
					columnNumber: 28
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 37,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "video-meta",
			"x-file-name": "VideoCard",
			"x-line-number": "34",
			"x-column": "6",
			"x-component": "div",
			"x-id": "VideoCard_34_6",
			"x-dynamic": "false",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "chips",
					"x-file-name": "VideoCard",
					"x-line-number": "35",
					"x-column": "8",
					"x-component": "div",
					"x-id": "VideoCard_35_8",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV(LevelChip, {
						level: v.difficulty,
						"x-file-name": "VideoCard",
						"x-line-number": "35",
						"x-column": "31",
						"x-component": "LevelChip",
						"x-id": "VideoCard_35_31",
						"x-dynamic": "true"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 146
					}, this), /* @__PURE__ */ _jsxDEV("span", {
						className: "cat-chip",
						"x-file-name": "VideoCard",
						"x-line-number": "35",
						"x-column": "65",
						"x-component": "span",
						"x-id": "VideoCard_35_65",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t(`cat.${v.category}`)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 46,
						columnNumber: 301
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("h4", {
					"x-file-name": "VideoCard",
					"x-line-number": "36",
					"x-column": "8",
					"x-component": "h4",
					"x-id": "VideoCard_36_8",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: videoTitle(v, t)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("span", {
					className: "channel",
					"x-file-name": "VideoCard",
					"x-line-number": "37",
					"x-column": "8",
					"x-component": "span",
					"x-id": "VideoCard_37_8",
					"x-dynamic": "true",
					"x-source-type": "prop",
					"x-source-var": "v",
					"x-source-path": "channel",
					"x-source-editable": "false",
					children: [v.channel, OFFICIAL.includes(v.channel) && /* @__PURE__ */ _jsxDEV(BadgeCheck, {
						size: 13,
						"x-file-name": "VideoCard",
						"x-line-number": "37",
						"x-column": "78",
						"x-component": "BadgeCheck",
						"x-id": "VideoCard_37_78",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 281
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 45,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 36,
		columnNumber: 10
	}, this);
}
_s2(VideoCard, "JsS7oKXKqCrLyh0EIb0FMov0A7Q=", false, function() {
	return [useI18n, useAcademy];
});
_c2 = VideoCard;
export function VideoRow({ title, note, videos, testid }) {
	_s3();
	const { t } = useI18n();
	return /* @__PURE__ */ _jsxDEV("section", {
		className: "video-row",
		"data-testid": testid,
		"x-file-name": "VideoCard",
		"x-line-number": "46",
		"x-column": "4",
		"x-component": "section",
		"x-id": "VideoCard_46_4",
		"x-dynamic": "true",
		"x-source-type": "computed",
		"x-source-editable": "false",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "row-head",
			"x-file-name": "VideoCard",
			"x-line-number": "47",
			"x-column": "6",
			"x-component": "div",
			"x-id": "VideoCard_47_6",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: [/* @__PURE__ */ _jsxDEV("h3", {
				"x-file-name": "VideoCard",
				"x-line-number": "47",
				"x-column": "32",
				"x-component": "h3",
				"x-id": "VideoCard_47_32",
				"x-dynamic": "true",
				"x-source-type": "prop",
				"x-source-var": "title",
				"x-source-editable": "false",
				children: title
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 67,
				columnNumber: 197
			}, this), note && /* @__PURE__ */ _jsxDEV("span", {
				"x-file-name": "VideoCard",
				"x-line-number": "47",
				"x-column": "57",
				"x-component": "span",
				"x-id": "VideoCard_47_57",
				"x-dynamic": "true",
				"x-source-type": "prop",
				"x-source-var": "note",
				"x-source-editable": "false",
				children: note
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 67,
				columnNumber: 404
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 67,
			columnNumber: 7
		}, this), videos.length ? /* @__PURE__ */ _jsxDEV("div", {
			className: "row-scroll",
			"x-file-name": "VideoCard",
			"x-line-number": "48",
			"x-column": "23",
			"x-component": "div",
			"x-id": "VideoCard_48_23",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: videos.map((v) => /* @__PURE__ */ _jsxDEV(VideoCard, {
				v,
				"x-file-name": "VideoCard",
				"x-line-number": "48",
				"x-column": "70",
				"x-component": "VideoCard",
				"x-id": "VideoCard_48_70",
				"x-dynamic": "true",
				"x-source-type": "external",
				"x-source-var": "videos",
				"x-source-editable": "false",
				"x-array-var": "videos",
				"x-array-item-param": "v"
			}, v.id, false, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 235
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 68,
			columnNumber: 24
		}, this) : /* @__PURE__ */ _jsxDEV("p", {
			className: "row-empty",
			"x-file-name": "VideoCard",
			"x-line-number": "48",
			"x-column": "111",
			"x-component": "p",
			"x-id": "VideoCard_48_111",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: t("ac.empty")
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 68,
			columnNumber: 514
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 66,
		columnNumber: 10
	}, this);
}
_s3(VideoRow, "i9WSJarzxoSeCDSFKFFQ8fEj8w0=", false, function() {
	return [useI18n];
});
_c3 = VideoRow;
var _c, _c2, _c3;
$RefreshReg$(_c, "LevelChip");
$RefreshReg$(_c2, "VideoCard");
$RefreshReg$(_c3, "VideoRow");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/academy/VideoCard.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/components/academy/VideoCard.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/components/academy/VideoCard.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/components/academy/VideoCard.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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QUE7RUFBQTtFQUFBO1lBQW5ELENBQ0Usd0JBQUMsT0FBRDtHQUFLLFdBQVU7R0FBVTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO2FBQXpCLENBQTBCLHdCQUFDLE1BQUQ7SUFBRztJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7Y0FBRXRCO0dBQVU7Ozs7YUFBRW9CLFFBQVEsd0JBQUMsUUFBRDtJQUFLO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtjQUFFQTtHQUFXOzs7O1dBQU87Ozs7O1lBQzNFQyxPQUFPRSxTQUFTLHdCQUFDLE9BQUQ7R0FBSyxXQUFVO0dBQVk7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTthQUFFRixPQUFPRyxLQUFLNUIsTUFBTSx3QkFBQyxXQUFEO0lBQXlCQTtJQUFFO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7R0FBQSxHQUFYQSxFQUFFZTs7OztVQUFTLENBQUc7RUFBTzs7OzthQUFJLHdCQUFDLEtBQUQ7R0FBRyxXQUFVO0dBQVc7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTthQUFFZCxFQUFFLFVBQVU7RUFBSzs7OztVQUM3STs7Ozs7O0FBRWIiLCJuYW1lcyI6WyJMaW5rIiwiQmFkZ2VDaGVjayIsIkJvb2ttYXJrIiwiQ2hlY2tDaXJjbGUyIiwiQ2xvY2siLCJQbGF5Q2lyY2xlIiwiU3BhcmtsZXMiLCJ1c2VJMThuIiwidXNlQWNhZGVteSIsIk9GRklDSUFMIiwidmlkZW9UaXRsZSIsInYiLCJ0Iiwic291cmNlIiwicmVmIiwidGl0bGUiLCJ2aWRlb0Rlc2MiLCJkZXNjcmlwdGlvbiIsIkxldmVsQ2hpcCIsImxldmVsIiwiVmlkZW9DYXJkIiwiY29tcGFjdCIsIm1lIiwiZG9uZSIsImNvbXBsZXRlZCIsImluY2x1ZGVzIiwiaWQiLCJzYXZlZCIsIm9yaWdpbmFsIiwidGh1bWJuYWlsIiwiZHVyYXRpb24iLCJkaWZmaWN1bHR5IiwiY2F0ZWdvcnkiLCJjaGFubmVsIiwiVmlkZW9Sb3ciLCJub3RlIiwidmlkZW9zIiwidGVzdGlkIiwibGVuZ3RoIiwibWFwIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlZpZGVvQ2FyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBCYWRnZUNoZWNrLCBCb29rbWFyaywgQ2hlY2tDaXJjbGUyLCBDbG9jaywgUGxheUNpcmNsZSwgU3BhcmtsZXMgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSBcIkAvbGliL2kxOG5cIjtcbmltcG9ydCB7IHVzZUFjYWRlbXkgfSBmcm9tIFwiQC9saWIvYWNhZGVteVwiO1xuaW1wb3J0IHR5cGUgeyBWaWRlb0RvYyB9IGZyb20gXCJAL2xpYi90eXBlc1wiO1xuXG5jb25zdCBPRkZJQ0lBTCA9IFtcIlJlc2VydmUgQmFuayBvZiBJbmRpYVwiLCBcIlNFQkkgQXdhcmVuZXNzXCJdO1xudHlwZSBUID0gKGs6IHN0cmluZywgdj86IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlcj4pID0+IHN0cmluZztcblxuZXhwb3J0IGNvbnN0IHZpZGVvVGl0bGUgPSAodjogVmlkZW9Eb2MsIHQ6IFQpID0+ICh2LnNvdXJjZSA9PT0gXCJvcmlnaW5hbFwiID8gdChgb3JpZy4ke3YucmVmfS50aXRsZWApIDogdi50aXRsZSk7XG5leHBvcnQgY29uc3QgdmlkZW9EZXNjID0gKHY6IFZpZGVvRG9jLCB0OiBUKSA9PiAodi5zb3VyY2UgPT09IFwib3JpZ2luYWxcIiA/IHQoYG9yaWcuJHt2LnJlZn0uZGVzY3JpcHRpb25gKSA6IHYuZGVzY3JpcHRpb24gfHwgXCJcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBMZXZlbENoaXAoeyBsZXZlbCB9OiB7IGxldmVsOiBzdHJpbmcgfSkge1xuICBjb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcbiAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT17YGxldmVsLWNoaXAgJHtsZXZlbH1gfT57dChgYWMuJHtsZXZlbH1gKX08L3NwYW4+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVmlkZW9DYXJkKHsgdiwgY29tcGFjdCB9OiB7IHY6IFZpZGVvRG9jOyBjb21wYWN0PzogYm9vbGVhbiB9KSB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuICBjb25zdCB7IG1lIH0gPSB1c2VBY2FkZW15KCk7XG4gIGNvbnN0IGRvbmUgPSBtZS5jb21wbGV0ZWQuaW5jbHVkZXModi5pZCk7XG4gIGNvbnN0IHNhdmVkID0gbWUuc2F2ZWQuaW5jbHVkZXModi5pZCk7XG4gIGNvbnN0IG9yaWdpbmFsID0gdi5zb3VyY2UgPT09IFwib3JpZ2luYWxcIjtcbiAgcmV0dXJuIChcbiAgICA8TGluayB0bz17YC9hY2FkZW15L3ZpZGVvLyR7di5pZH1gfSBjbGFzc05hbWU9e2B2aWRlby1jYXJkJHtjb21wYWN0ID8gXCIgY29tcGFjdFwiIDogXCJcIn0ke29yaWdpbmFsID8gXCIgb3JpZ2luYWxcIiA6IFwiXCJ9YH0gZGF0YS10ZXN0aWQ9e2B2aWRlby1jYXJkLSR7di5yZWZ9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRodW1iXCI+XG4gICAgICAgIDxpbWcgc3JjPXt2LnRodW1ibmFpbH0gYWx0PVwiXCIgbG9hZGluZz1cImxhenlcIiAvPlxuICAgICAgICB7b3JpZ2luYWwgJiYgPHNwYW4gY2xhc3NOYW1lPVwib3JpZy1yaWJib25cIj48U3BhcmtsZXMgc2l6ZT17MTJ9IC8+IHt0KFwiYWMub3JpZ2luYWxcIil9PC9zcGFuPn1cbiAgICAgICAge3YuZHVyYXRpb24gJiYgPHNwYW4gY2xhc3NOYW1lPVwiZHVyYXRpb25cIj48Q2xvY2sgc2l6ZT17MTF9IC8+IHt2LmR1cmF0aW9ufTwvc3Bhbj59XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsYXktaG92ZXJcIj48UGxheUNpcmNsZSBzaXplPXs0NH0gLz48L3NwYW4+XG4gICAgICAgIHtkb25lICYmIDxzcGFuIGNsYXNzTmFtZT1cInN0YXRlLWJhZGdlIGRvbmVcIj48Q2hlY2tDaXJjbGUyIHNpemU9ezEzfSAvPiB7dChcImFjLmNvbXBsZXRlZEJhZGdlXCIpfTwvc3Bhbj59XG4gICAgICAgIHshZG9uZSAmJiBzYXZlZCAmJiA8c3BhbiBjbGFzc05hbWU9XCJzdGF0ZS1iYWRnZSBzYXZlZFwiPjxCb29rbWFyayBzaXplPXsxM30gLz4ge3QoXCJhYy5zYXZlZEJhZGdlXCIpfTwvc3Bhbj59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tbWV0YVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaXBzXCI+PExldmVsQ2hpcCBsZXZlbD17di5kaWZmaWN1bHR5fSAvPjxzcGFuIGNsYXNzTmFtZT1cImNhdC1jaGlwXCI+e3QoYGNhdC4ke3YuY2F0ZWdvcnl9YCl9PC9zcGFuPjwvZGl2PlxuICAgICAgICA8aDQ+e3ZpZGVvVGl0bGUodiwgdCl9PC9oND5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hhbm5lbFwiPnt2LmNoYW5uZWx9e09GRklDSUFMLmluY2x1ZGVzKHYuY2hhbm5lbCkgJiYgPEJhZGdlQ2hlY2sgc2l6ZT17MTN9IC8+fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFZpZGVvUm93KHsgdGl0bGUsIG5vdGUsIHZpZGVvcywgdGVzdGlkIH06IHsgdGl0bGU6IHN0cmluZzsgbm90ZT86IHN0cmluZzsgdmlkZW9zOiBWaWRlb0RvY1tdOyB0ZXN0aWQ6IHN0cmluZyB9KSB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInZpZGVvLXJvd1wiIGRhdGEtdGVzdGlkPXt0ZXN0aWR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctaGVhZFwiPjxoMz57dGl0bGV9PC9oMz57bm90ZSAmJiA8c3Bhbj57bm90ZX08L3NwYW4+fTwvZGl2PlxuICAgICAge3ZpZGVvcy5sZW5ndGggPyA8ZGl2IGNsYXNzTmFtZT1cInJvdy1zY3JvbGxcIj57dmlkZW9zLm1hcCgodikgPT4gPFZpZGVvQ2FyZCBrZXk9e3YuaWR9IHY9e3Z9IC8+KX08L2Rpdj4gOiA8cCBjbGFzc05hbWU9XCJyb3ctZW1wdHlcIj57dChcImFjLmVtcHR5XCIpfTwvcD59XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sImZpbGUiOiIvYXBwL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2FjYWRlbXkvVmlkZW9DYXJkLnRzeCJ9