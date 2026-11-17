import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/academy/OriginalPlayer.tsx");const useEffect = __vite__cjsImport0_react["useEffect"]; const useRef = __vite__cjsImport0_react["useRef"]; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport3_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=a646c335";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Pause, Play, RotateCcw, Volume2, VolumeX } from "/src/lib/lucide-react.tsx";
import { useI18n } from "/src/lib/i18n.tsx";
var _jsxFileName = "/app/frontend/src/components/academy/OriginalPlayer.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
var _s = $RefreshSig$();
const SCENE_MS = 8e3;
const VOICE_LANG = {
	en: "en-IN",
	hi: "hi-IN",
	bn: "bn-IN",
	te: "te-IN",
	mr: "mr-IN",
	ta: "ta-IN",
	ur: "ur-IN",
	gu: "gu-IN",
	kn: "kn-IN",
	ml: "ml-IN",
	pa: "pa-IN",
	or: "or-IN",
	as: "as-IN",
	ne: "ne-NP"
};
function Flow({ nodes, k }) {
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "flow",
		"x-file-name": "OriginalPlayer",
		"x-line-number": "11",
		"x-column": "4",
		"x-component": "div",
		"x-id": "OriginalPlayer_11_4",
		"x-dynamic": "true",
		"x-source-type": "computed",
		"x-source-editable": "false",
		children: nodes.map((n, i) => /* @__PURE__ */ _jsxDEV("div", {
			className: "flow-step",
			style: { animationDelay: `${.35 + i * .7}s` },
			"x-file-name": "OriginalPlayer",
			"x-line-number": "13",
			"x-column": "8",
			"x-component": "div",
			"x-id": "OriginalPlayer_13_8",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: [i > 0 && /* @__PURE__ */ _jsxDEV("span", {
				className: "flow-arrow",
				style: { animationDelay: `${.1 + i * .7}s` },
				"x-file-name": "OriginalPlayer",
				"x-line-number": "14",
				"x-column": "20",
				"x-component": "span",
				"x-id": "OriginalPlayer_14_20",
				"x-dynamic": "false",
				children: /* @__PURE__ */ _jsxDEV(ArrowRight, { size: 22 }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 137
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 33,
				columnNumber: 21
			}, this), /* @__PURE__ */ _jsxDEV("div", {
				className: "flow-node",
				"x-file-name": "OriginalPlayer",
				"x-line-number": "15",
				"x-column": "10",
				"x-component": "div",
				"x-id": "OriginalPlayer_15_10",
				"x-dynamic": "true",
				"x-source-type": "static-imported",
				"x-source-var": "nodes",
				"x-source-editable": "false",
				"x-array-var": "nodes",
				"x-array-item-param": "n",
				children: [/* @__PURE__ */ _jsxDEV("span", {
					className: "flow-index",
					"x-file-name": "OriginalPlayer",
					"x-line-number": "15",
					"x-column": "37",
					"x-component": "span",
					"x-id": "OriginalPlayer_15_37",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: i + 1
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 36,
					columnNumber: 285
				}, this), n]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 11
			}, this)]
		}, i, true, {
			fileName: _jsxFileName,
			lineNumber: 30,
			columnNumber: 28
		}, this))
	}, k, false, {
		fileName: _jsxFileName,
		lineNumber: 29,
		columnNumber: 10
	}, this);
}
_c = Flow;
export function OriginalPlayer({ video }) {
	_s();
	const { t, lang } = useI18n();
	const scenes = video.scenes || [];
	const [i, setI] = useState(0);
	const [playing, setPlaying] = useState(false);
	const [voice, setVoice] = useState(false);
	const [ended, setEnded] = useState(false);
	const timer = useRef(undefined);
	const tk = (s, f, fallback) => {
		const key = `orig.${video.ref}.${s}.${f}`;
		const v = t(key);
		return v === key ? fallback : v;
	};
	useEffect(() => {
		clearTimeout(timer.current);
		if (!playing) return undefined;
		timer.current = setTimeout(() => {
			if (i < scenes.length - 1) setI(i + 1);
			else {
				setPlaying(false);
				setEnded(true);
			}
		}, SCENE_MS);
		return () => clearTimeout(timer.current);
	}, [
		playing,
		i,
		scenes.length
	]);
	useEffect(() => {
		if (!window.speechSynthesis) return undefined;
		window.speechSynthesis.cancel();
		if (voice && playing && scenes[i]) {
			const u = new SpeechSynthesisUtterance(tk(i, "narration", scenes[i].narration));
			u.lang = VOICE_LANG[lang] || "en-IN";
			u.rate = .95;
			window.speechSynthesis.speak(u);
		}
		return () => window.speechSynthesis.cancel();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		i,
		voice,
		playing,
		lang
	]);
	const go = (n) => {
		setEnded(false);
		setI(Math.max(0, Math.min(scenes.length - 1, n)));
	};
	const toggle = () => {
		if (ended) {
			setEnded(false);
			setI(0);
		}
		setPlaying(!playing || ended);
	};
	const scene = scenes[i];
	if (!scene) return null;
	return /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV("div", {
		className: "orig-player",
		"data-testid": "original-player",
		"x-file-name": "OriginalPlayer",
		"x-line-number": "62",
		"x-column": "6",
		"x-component": "div",
		"x-id": "OriginalPlayer_62_6",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "stage",
			"x-file-name": "OriginalPlayer",
			"x-line-number": "63",
			"x-column": "8",
			"x-component": "div",
			"x-id": "OriginalPlayer_63_8",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: [
				/* @__PURE__ */ _jsxDEV("span", {
					className: "stage-brand",
					"x-file-name": "OriginalPlayer",
					"x-line-number": "64",
					"x-column": "10",
					"x-component": "span",
					"x-id": "OriginalPlayer_64_10",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("ac.original")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 99,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("span", {
					className: "stage-step",
					"data-testid": "original-step",
					"x-file-name": "OriginalPlayer",
					"x-line-number": "65",
					"x-column": "10",
					"x-component": "span",
					"x-id": "OriginalPlayer_65_10",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("ac.step", {
						n: i + 1,
						total: scenes.length
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 100,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("h3", {
					"data-testid": "original-heading",
					"x-file-name": "OriginalPlayer",
					"x-line-number": "66",
					"x-column": "10",
					"x-component": "h3",
					"x-id": "OriginalPlayer_66_10",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: tk(i, "heading", scene.heading)
				}, `h${i}`, false, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV(Flow, {
					nodes: scene.nodes.map((n, j) => tk(i, `node.${j}`, n)),
					k: `f${i}-${lang}`,
					"x-file-name": "OriginalPlayer",
					"x-line-number": "67",
					"x-column": "10",
					"x-component": "Flow",
					"x-id": "OriginalPlayer_67_10",
					"x-dynamic": "true"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 105,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("p", {
					className: "caption",
					"x-file-name": "OriginalPlayer",
					"x-line-number": "68",
					"x-column": "10",
					"x-component": "p",
					"x-id": "OriginalPlayer_68_10",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: tk(i, "narration", scene.narration)
				}, `c${i}`, false, {
					fileName: _jsxFileName,
					lineNumber: 106,
					columnNumber: 11
				}, this),
				!playing && !ended && i === 0 && /* @__PURE__ */ _jsxDEV("button", {
					className: "stage-play",
					onClick: toggle,
					"data-testid": "original-big-play",
					"x-file-name": "OriginalPlayer",
					"x-line-number": "69",
					"x-column": "44",
					"x-component": "button",
					"x-id": "OriginalPlayer_69_44",
					"x-dynamic": "false",
					children: /* @__PURE__ */ _jsxDEV(Play, {
						size: 34,
						"x-file-name": "OriginalPlayer",
						"x-line-number": "69",
						"x-column": "124",
						"x-component": "Play",
						"x-id": "OriginalPlayer_69_124",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 107,
						columnNumber: 254
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 107,
					columnNumber: 45
				}, this),
				ended && /* @__PURE__ */ _jsxDEV("div", {
					className: "stage-end",
					"x-file-name": "OriginalPlayer",
					"x-line-number": "70",
					"x-column": "20",
					"x-component": "div",
					"x-id": "OriginalPlayer_70_20",
					"x-dynamic": "false",
					children: /* @__PURE__ */ _jsxDEV("button", {
						onClick: toggle,
						"data-testid": "original-replay",
						"x-file-name": "OriginalPlayer",
						"x-line-number": "70",
						"x-column": "47",
						"x-component": "button",
						"x-id": "OriginalPlayer_70_47",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: [
							/* @__PURE__ */ _jsxDEV(RotateCcw, {
								size: 18,
								"x-file-name": "OriginalPlayer",
								"x-line-number": "70",
								"x-column": "102",
								"x-component": "RotateCcw",
								"x-id": "OriginalPlayer_70_102",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 108,
								columnNumber: 408
							}, this),
							" ",
							t("ac.restart")
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 108,
						columnNumber: 174
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 108,
					columnNumber: 21
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 98,
			columnNumber: 9
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "player-bar",
			"x-file-name": "OriginalPlayer",
			"x-line-number": "72",
			"x-column": "8",
			"x-component": "div",
			"x-id": "OriginalPlayer_72_8",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: [
				/* @__PURE__ */ _jsxDEV("button", {
					onClick: toggle,
					"aria-label": playing ? t("ac.pause") : t("ac.play"),
					"data-testid": "original-play-toggle",
					"x-file-name": "OriginalPlayer",
					"x-line-number": "73",
					"x-column": "10",
					"x-component": "button",
					"x-id": "OriginalPlayer_73_10",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: playing ? /* @__PURE__ */ _jsxDEV(Pause, {
						size: 18,
						"x-file-name": "OriginalPlayer",
						"x-line-number": "73",
						"x-column": "133",
						"x-component": "Pause",
						"x-id": "OriginalPlayer_73_133",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 111,
						columnNumber: 313
					}, this) : /* @__PURE__ */ _jsxDEV(Play, {
						size: 18,
						"x-file-name": "OriginalPlayer",
						"x-line-number": "73",
						"x-column": "155",
						"x-component": "Play",
						"x-id": "OriginalPlayer_73_155",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 111,
						columnNumber: 465
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 111,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("button", {
					onClick: () => go(i - 1),
					disabled: i === 0,
					"aria-label": "Previous",
					"data-testid": "original-prev",
					"x-file-name": "OriginalPlayer",
					"x-line-number": "74",
					"x-column": "10",
					"x-component": "button",
					"x-id": "OriginalPlayer_74_10",
					"x-dynamic": "false",
					children: /* @__PURE__ */ _jsxDEV(ChevronLeft, { size: 18 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 112,
						columnNumber: 243
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 112,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "scene-track",
					"x-file-name": "OriginalPlayer",
					"x-line-number": "75",
					"x-column": "10",
					"x-component": "div",
					"x-id": "OriginalPlayer_75_10",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: scenes.map((_, n) => /* @__PURE__ */ _jsxDEV("button", {
						className: n < i ? "past" : n === i ? `now${playing ? " running" : ""}` : "",
						style: { ["--dur"]: `${SCENE_MS}ms` },
						onClick: () => go(n),
						"aria-label": `Step ${n + 1}`,
						"data-testid": `original-scene-${n}`,
						"x-file-name": "OriginalPlayer",
						"x-line-number": "75",
						"x-column": "61",
						"x-component": "button",
						"x-id": "OriginalPlayer_75_61",
						"x-dynamic": "false",
						children: /* @__PURE__ */ _jsxDEV("span", {
							"x-file-name": "OriginalPlayer",
							"x-line-number": "75",
							"x-column": "291",
							"x-component": "span",
							"x-id": "OriginalPlayer_75_291",
							"x-dynamic": "false"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 115,
							columnNumber: 230
						}, this)
					}, n, false, {
						fileName: _jsxFileName,
						lineNumber: 113,
						columnNumber: 238
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 113,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ _jsxDEV("button", {
					onClick: () => go(i + 1),
					disabled: i === scenes.length - 1,
					"aria-label": "Next",
					"data-testid": "original-next",
					"x-file-name": "OriginalPlayer",
					"x-line-number": "76",
					"x-column": "10",
					"x-component": "button",
					"x-id": "OriginalPlayer_76_10",
					"x-dynamic": "false",
					children: /* @__PURE__ */ _jsxDEV(ChevronRight, { size: 18 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 116,
						columnNumber: 255
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 116,
					columnNumber: 11
				}, this),
				typeof window !== "undefined" && window.speechSynthesis && /* @__PURE__ */ _jsxDEV("button", {
					className: voice ? "on" : "",
					onClick: () => setVoice(!voice),
					title: t("ac.voice"),
					"data-testid": "original-voice-toggle",
					"x-file-name": "OriginalPlayer",
					"x-line-number": "77",
					"x-column": "70",
					"x-component": "button",
					"x-id": "OriginalPlayer_77_70",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: voice ? /* @__PURE__ */ _jsxDEV(Volume2, {
						size: 18,
						"x-file-name": "OriginalPlayer",
						"x-line-number": "77",
						"x-column": "208",
						"x-component": "Volume2",
						"x-id": "OriginalPlayer_77_208",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 117,
						columnNumber: 388
					}, this) : /* @__PURE__ */ _jsxDEV(VolumeX, {
						size: 18,
						"x-file-name": "OriginalPlayer",
						"x-line-number": "77",
						"x-column": "232",
						"x-component": "VolumeX",
						"x-id": "OriginalPlayer_77_232",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 117,
						columnNumber: 544
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 117,
					columnNumber: 71
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 110,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 97,
		columnNumber: 7
	}, this), video.sources && video.sources.length > 0 && /* @__PURE__ */ _jsxDEV("div", {
		className: "reading-list",
		style: { marginTop: 16 },
		"data-testid": "original-sources",
		"x-file-name": "OriginalPlayer",
		"x-line-number": "81",
		"x-column": "8",
		"x-component": "div",
		"x-id": "OriginalPlayer_81_8",
		"x-dynamic": "true",
		"x-source-type": "computed",
		"x-source-editable": "false",
		children: [/* @__PURE__ */ _jsxDEV("strong", {
			style: { fontSize: 14 },
			"x-file-name": "OriginalPlayer",
			"x-line-number": "82",
			"x-column": "10",
			"x-component": "strong",
			"x-id": "OriginalPlayer_82_10",
			"x-dynamic": "false",
			children: "Sources & references"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 123,
			columnNumber: 11
		}, this), video.sources.map((s, n) => /* @__PURE__ */ _jsxDEV("a", {
			href: s.url,
			target: "_blank",
			rel: "noopener noreferrer",
			"data-testid": `original-source-${n}`,
			"x-file-name": "OriginalPlayer",
			"x-line-number": "83",
			"x-column": "39",
			"x-component": "a",
			"x-id": "OriginalPlayer_83_39",
			"x-dynamic": "true",
			"x-source-type": "static-imported",
			"x-source-var": "video",
			"x-source-path": "sources.title",
			"x-source-editable": "false",
			"x-array-var": "video",
			"x-array-item-param": "s",
			children: [
				s.title,
				" ",
				/* @__PURE__ */ _jsxDEV(ExternalLink, {
					size: 13,
					"x-file-name": "OriginalPlayer",
					"x-line-number": "83",
					"x-column": "156",
					"x-component": "ExternalLink",
					"x-id": "OriginalPlayer_83_156",
					"x-dynamic": "true",
					"x-source-type": "external",
					"x-source-var": "video",
					"x-source-editable": "false",
					"x-array-var": "video",
					"x-array-item-param": "s"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 126,
					columnNumber: 432
				}, this)
			]
		}, s.url, true, {
			fileName: _jsxFileName,
			lineNumber: 126,
			columnNumber: 40
		}, this))]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 120,
		columnNumber: 53
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 96,
		columnNumber: 10
	}, this);
}
_s(OriginalPlayer, "400Orn0deCoKGq8uqDrt0UzL0KI=", false, function() {
	return [useI18n];
});
_c2 = OriginalPlayer;
var _c, _c2;
$RefreshReg$(_c, "Flow");
$RefreshReg$(_c2, "OriginalPlayer");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/academy/OriginalPlayer.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/components/academy/OriginalPlayer.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/components/academy/OriginalPlayer.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/components/academy/OriginalPlayer.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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QTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO2FBQTFHO0lBQTRHa0IsRUFBRWdDO0lBQU07SUFBQyx3QkFBQyxjQUFEO0tBQWMsTUFBTTtLQUFHO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7SUFBQTs7Ozs7R0FBTTtLQUExSWhDLEVBQUUrQjs7OztTQUF3SSxDQUFDLENBQzdLOzs7OztTQUVUOzs7OztBQUVKIiwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJBcnJvd1JpZ2h0IiwiQ2hldnJvbkxlZnQiLCJDaGV2cm9uUmlnaHQiLCJFeHRlcm5hbExpbmsiLCJQYXVzZSIsIlBsYXkiLCJSb3RhdGVDY3ciLCJWb2x1bWUyIiwiVm9sdW1lWCIsInVzZUkxOG4iLCJTQ0VORV9NUyIsIlZPSUNFX0xBTkciLCJlbiIsImhpIiwiYm4iLCJ0ZSIsIm1yIiwidGEiLCJ1ciIsImd1Iiwia24iLCJtbCIsInBhIiwib3IiLCJhcyIsIm5lIiwiRmxvdyIsIm5vZGVzIiwiayIsIm1hcCIsIm4iLCJpIiwiYW5pbWF0aW9uRGVsYXkiLCJPcmlnaW5hbFBsYXllciIsInZpZGVvIiwidCIsImxhbmciLCJzY2VuZXMiLCJzZXRJIiwicGxheWluZyIsInNldFBsYXlpbmciLCJ2b2ljZSIsInNldFZvaWNlIiwiZW5kZWQiLCJzZXRFbmRlZCIsInRpbWVyIiwidW5kZWZpbmVkIiwidGsiLCJzIiwiZiIsImZhbGxiYWNrIiwia2V5IiwicmVmIiwidiIsImNsZWFyVGltZW91dCIsImN1cnJlbnQiLCJzZXRUaW1lb3V0IiwibGVuZ3RoIiwid2luZG93Iiwic3BlZWNoU3ludGhlc2lzIiwiY2FuY2VsIiwidSIsIlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSIsIm5hcnJhdGlvbiIsInJhdGUiLCJzcGVhayIsImdvIiwiTWF0aCIsIm1heCIsIm1pbiIsInRvZ2dsZSIsInNjZW5lIiwidG90YWwiLCJoZWFkaW5nIiwiaiIsIl8iLCJzb3VyY2VzIiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJ1cmwiLCJ0aXRsZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJPcmlnaW5hbFBsYXllci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcnJvd1JpZ2h0LCBDaGV2cm9uTGVmdCwgQ2hldnJvblJpZ2h0LCBFeHRlcm5hbExpbmssIFBhdXNlLCBQbGF5LCBSb3RhdGVDY3csIFZvbHVtZTIsIFZvbHVtZVggfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSBcIkAvbGliL2kxOG5cIjtcbmltcG9ydCB0eXBlIHsgVmlkZW9Eb2MgfSBmcm9tIFwiQC9saWIvdHlwZXNcIjtcblxuY29uc3QgU0NFTkVfTVMgPSA4MDAwO1xuY29uc3QgVk9JQ0VfTEFORzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHsgZW46IFwiZW4tSU5cIiwgaGk6IFwiaGktSU5cIiwgYm46IFwiYm4tSU5cIiwgdGU6IFwidGUtSU5cIiwgbXI6IFwibXItSU5cIiwgdGE6IFwidGEtSU5cIiwgdXI6IFwidXItSU5cIiwgZ3U6IFwiZ3UtSU5cIiwga246IFwia24tSU5cIiwgbWw6IFwibWwtSU5cIiwgcGE6IFwicGEtSU5cIiwgb3I6IFwib3ItSU5cIiwgYXM6IFwiYXMtSU5cIiwgbmU6IFwibmUtTlBcIiB9O1xuXG5mdW5jdGlvbiBGbG93KHsgbm9kZXMsIGsgfTogeyBub2Rlczogc3RyaW5nW107IGs6IHN0cmluZyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbG93XCIga2V5PXtrfT5cbiAgICAgIHtub2Rlcy5tYXAoKG4sIGkpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG93LXN0ZXBcIiBrZXk9e2l9IHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiBgJHswLjM1ICsgaSAqIDAuN31zYCB9fT5cbiAgICAgICAgICB7aSA+IDAgJiYgPHNwYW4gY2xhc3NOYW1lPVwiZmxvdy1hcnJvd1wiIHN0eWxlPXt7IGFuaW1hdGlvbkRlbGF5OiBgJHswLjEgKyBpICogMC43fXNgIH19PjxBcnJvd1JpZ2h0IHNpemU9ezIyfSAvPjwvc3Bhbj59XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbG93LW5vZGVcIj48c3BhbiBjbGFzc05hbWU9XCJmbG93LWluZGV4XCI+e2kgKyAxfTwvc3Bhbj57bn08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE9yaWdpbmFsUGxheWVyKHsgdmlkZW8gfTogeyB2aWRlbzogVmlkZW9Eb2MgfSkge1xuICBjb25zdCB7IHQsIGxhbmcgfSA9IHVzZUkxOG4oKTtcbiAgY29uc3Qgc2NlbmVzID0gdmlkZW8uc2NlbmVzIHx8IFtdO1xuICBjb25zdCBbaSwgc2V0SV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3BsYXlpbmcsIHNldFBsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdm9pY2UsIHNldFZvaWNlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2VuZGVkLCBzZXRFbmRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHRpbWVyID0gdXNlUmVmPFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuICBjb25zdCB0ayA9IChzOiBudW1iZXIsIGY6IHN0cmluZywgZmFsbGJhY2s6IHN0cmluZykgPT4geyBjb25zdCBrZXkgPSBgb3JpZy4ke3ZpZGVvLnJlZn0uJHtzfS4ke2Z9YDsgY29uc3QgdiA9IHQoa2V5KTsgcmV0dXJuIHYgPT09IGtleSA/IGZhbGxiYWNrIDogdjsgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lci5jdXJyZW50KTtcbiAgICBpZiAoIXBsYXlpbmcpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgdGltZXIuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGkgPCBzY2VuZXMubGVuZ3RoIC0gMSkgc2V0SShpICsgMSk7XG4gICAgICBlbHNlIHsgc2V0UGxheWluZyhmYWxzZSk7IHNldEVuZGVkKHRydWUpOyB9XG4gICAgfSwgU0NFTkVfTVMpO1xuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIuY3VycmVudCk7XG4gIH0sIFtwbGF5aW5nLCBpLCBzY2VuZXMubGVuZ3RoXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXdpbmRvdy5zcGVlY2hTeW50aGVzaXMpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgd2luZG93LnNwZWVjaFN5bnRoZXNpcy5jYW5jZWwoKTtcbiAgICBpZiAodm9pY2UgJiYgcGxheWluZyAmJiBzY2VuZXNbaV0pIHtcbiAgICAgIGNvbnN0IHUgPSBuZXcgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlKHRrKGksIFwibmFycmF0aW9uXCIsIHNjZW5lc1tpXS5uYXJyYXRpb24pKTtcbiAgICAgIHUubGFuZyA9IFZPSUNFX0xBTkdbbGFuZ10gfHwgXCJlbi1JTlwiO1xuICAgICAgdS5yYXRlID0gMC45NTtcbiAgICAgIHdpbmRvdy5zcGVlY2hTeW50aGVzaXMuc3BlYWsodSk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cuc3BlZWNoU3ludGhlc2lzLmNhbmNlbCgpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW2ksIHZvaWNlLCBwbGF5aW5nLCBsYW5nXSk7XG5cbiAgY29uc3QgZ28gPSAobjogbnVtYmVyKSA9PiB7IHNldEVuZGVkKGZhbHNlKTsgc2V0SShNYXRoLm1heCgwLCBNYXRoLm1pbihzY2VuZXMubGVuZ3RoIC0gMSwgbikpKTsgfTtcbiAgY29uc3QgdG9nZ2xlID0gKCkgPT4geyBpZiAoZW5kZWQpIHsgc2V0RW5kZWQoZmFsc2UpOyBzZXRJKDApOyB9IHNldFBsYXlpbmcoIXBsYXlpbmcgfHwgZW5kZWQpOyB9O1xuICBjb25zdCBzY2VuZSA9IHNjZW5lc1tpXTtcbiAgaWYgKCFzY2VuZSkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmlnLXBsYXllclwiIGRhdGEtdGVzdGlkPVwib3JpZ2luYWwtcGxheWVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhZ2VcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGFnZS1icmFuZFwiPnt0KFwiYWMub3JpZ2luYWxcIil9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN0YWdlLXN0ZXBcIiBkYXRhLXRlc3RpZD1cIm9yaWdpbmFsLXN0ZXBcIj57dChcImFjLnN0ZXBcIiwgeyBuOiBpICsgMSwgdG90YWw6IHNjZW5lcy5sZW5ndGggfSl9PC9zcGFuPlxuICAgICAgICAgIDxoMyBrZXk9e2BoJHtpfWB9IGRhdGEtdGVzdGlkPVwib3JpZ2luYWwtaGVhZGluZ1wiPnt0ayhpLCBcImhlYWRpbmdcIiwgc2NlbmUuaGVhZGluZyl9PC9oMz5cbiAgICAgICAgICA8RmxvdyBub2Rlcz17c2NlbmUubm9kZXMubWFwKChuLCBqKSA9PiB0ayhpLCBgbm9kZS4ke2p9YCwgbikpfSBrPXtgZiR7aX0tJHtsYW5nfWB9IC8+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FwdGlvblwiIGtleT17YGMke2l9YH0+e3RrKGksIFwibmFycmF0aW9uXCIsIHNjZW5lLm5hcnJhdGlvbil9PC9wPlxuICAgICAgICAgIHshcGxheWluZyAmJiAhZW5kZWQgJiYgaSA9PT0gMCAmJiA8YnV0dG9uIGNsYXNzTmFtZT1cInN0YWdlLXBsYXlcIiBvbkNsaWNrPXt0b2dnbGV9IGRhdGEtdGVzdGlkPVwib3JpZ2luYWwtYmlnLXBsYXlcIj48UGxheSBzaXplPXszNH0gLz48L2J1dHRvbj59XG4gICAgICAgICAge2VuZGVkICYmIDxkaXYgY2xhc3NOYW1lPVwic3RhZ2UtZW5kXCI+PGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGV9IGRhdGEtdGVzdGlkPVwib3JpZ2luYWwtcmVwbGF5XCI+PFJvdGF0ZUNjdyBzaXplPXsxOH0gLz4ge3QoXCJhYy5yZXN0YXJ0XCIpfTwvYnV0dG9uPjwvZGl2Pn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyLWJhclwiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlfSBhcmlhLWxhYmVsPXtwbGF5aW5nID8gdChcImFjLnBhdXNlXCIpIDogdChcImFjLnBsYXlcIil9IGRhdGEtdGVzdGlkPVwib3JpZ2luYWwtcGxheS10b2dnbGVcIj57cGxheWluZyA/IDxQYXVzZSBzaXplPXsxOH0gLz4gOiA8UGxheSBzaXplPXsxOH0gLz59PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnbyhpIC0gMSl9IGRpc2FibGVkPXtpID09PSAwfSBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIiBkYXRhLXRlc3RpZD1cIm9yaWdpbmFsLXByZXZcIj48Q2hldnJvbkxlZnQgc2l6ZT17MTh9IC8+PC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY2VuZS10cmFja1wiPntzY2VuZXMubWFwKChfLCBuKSA9PiA8YnV0dG9uIGtleT17bn0gY2xhc3NOYW1lPXtuIDwgaSA/IFwicGFzdFwiIDogbiA9PT0gaSA/IGBub3cke3BsYXlpbmcgPyBcIiBydW5uaW5nXCIgOiBcIlwifWAgOiBcIlwifSBzdHlsZT17eyBbXCItLWR1clwiIGFzIHN0cmluZ106IGAke1NDRU5FX01TfW1zYCB9fSBvbkNsaWNrPXsoKSA9PiBnbyhuKX0gYXJpYS1sYWJlbD17YFN0ZXAgJHtuICsgMX1gfSBkYXRhLXRlc3RpZD17YG9yaWdpbmFsLXNjZW5lLSR7bn1gfT48c3BhbiAvPjwvYnV0dG9uPil9PC9kaXY+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBnbyhpICsgMSl9IGRpc2FibGVkPXtpID09PSBzY2VuZXMubGVuZ3RoIC0gMX0gYXJpYS1sYWJlbD1cIk5leHRcIiBkYXRhLXRlc3RpZD1cIm9yaWdpbmFsLW5leHRcIj48Q2hldnJvblJpZ2h0IHNpemU9ezE4fSAvPjwvYnV0dG9uPlxuICAgICAgICAgIHt0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5zcGVlY2hTeW50aGVzaXMgJiYgPGJ1dHRvbiBjbGFzc05hbWU9e3ZvaWNlID8gXCJvblwiIDogXCJcIn0gb25DbGljaz17KCkgPT4gc2V0Vm9pY2UoIXZvaWNlKX0gdGl0bGU9e3QoXCJhYy52b2ljZVwiKX0gZGF0YS10ZXN0aWQ9XCJvcmlnaW5hbC12b2ljZS10b2dnbGVcIj57dm9pY2UgPyA8Vm9sdW1lMiBzaXplPXsxOH0gLz4gOiA8Vm9sdW1lWCBzaXplPXsxOH0gLz59PC9idXR0b24+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAge3ZpZGVvLnNvdXJjZXMgJiYgdmlkZW8uc291cmNlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWFkaW5nLWxpc3RcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDE2IH19IGRhdGEtdGVzdGlkPVwib3JpZ2luYWwtc291cmNlc1wiPlxuICAgICAgICAgIDxzdHJvbmcgc3R5bGU9e3sgZm9udFNpemU6IDE0IH19PlNvdXJjZXMgJmFtcDsgcmVmZXJlbmNlczwvc3Ryb25nPlxuICAgICAgICAgIHt2aWRlby5zb3VyY2VzLm1hcCgocywgbikgPT4gPGEga2V5PXtzLnVybH0gaHJlZj17cy51cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBkYXRhLXRlc3RpZD17YG9yaWdpbmFsLXNvdXJjZS0ke259YH0+e3MudGl0bGV9IDxFeHRlcm5hbExpbmsgc2l6ZT17MTN9IC8+PC9hPil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL2FwcC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9hY2FkZW15L09yaWdpbmFsUGxheWVyLnRzeCJ9