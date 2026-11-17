import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Academy.tsx");const useMemo = __vite__cjsImport0_react["useMemo"]; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport8_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport8_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=a646c335";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=a646c335";
import { useQuery } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=a646c335";
import { BadgeCheck, BookOpen, CandlestickChart, CircleAlert, ExternalLink, Globe, Landmark, Layers, ListVideo, PieChart, Search, ShieldCheck, TrendingUp, Wallet } from "/src/lib/lucide-react.tsx";
import { apiGet } from "/src/lib/api.ts";
import { useAcademy } from "/src/lib/academy.tsx";
import { useI18n } from "/src/lib/i18n.tsx";
import { VideoCard, VideoRow, videoDesc, videoTitle } from "/src/components/academy/VideoCard.tsx";
var _jsxFileName = "/app/frontend/src/pages/Academy.tsx";
import __vite__cjsImport8_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
var _s = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$(), _s5 = $RefreshSig$();
export const ICONS = {
	BookOpen,
	CandlestickChart,
	PieChart,
	TrendingUp,
	Layers,
	Landmark,
	Wallet,
	ShieldCheck
};
export function Disclaimer() {
	_s();
	const { t } = useI18n();
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "notice academy-disclaimer",
		"data-testid": "academy-disclaimer",
		"x-file-name": "Academy",
		"x-line-number": "15",
		"x-column": "9",
		"x-component": "div",
		"x-id": "Academy_15_9",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV(CircleAlert, {
			size: 18,
			"x-file-name": "Academy",
			"x-line-number": "15",
			"x-column": "85",
			"x-component": "CircleAlert",
			"x-id": "Academy_15_85",
			"x-dynamic": "false"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 24,
			columnNumber: 196
		}, this), /* @__PURE__ */ _jsxDEV("span", {
			"x-file-name": "Academy",
			"x-line-number": "15",
			"x-column": "110",
			"x-component": "span",
			"x-id": "Academy_15_110",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: t("ac.disclaimer")
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 24,
			columnNumber: 341
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 24,
		columnNumber: 10
	}, this);
}
_s(Disclaimer, "i9WSJarzxoSeCDSFKFFQ8fEj8w0=", false, function() {
	return [useI18n];
});
_c = Disclaimer;
function PathCards({ paths }) {
	_s2();
	const { t } = useI18n();
	const { me } = useAcademy();
	return /* @__PURE__ */ _jsxDEV("section", {
		className: "video-row",
		id: "paths",
		"data-testid": "learning-paths",
		"x-file-name": "Academy",
		"x-line-number": "22",
		"x-column": "4",
		"x-component": "section",
		"x-id": "Academy_22_4",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "row-head",
			"x-file-name": "Academy",
			"x-line-number": "23",
			"x-column": "6",
			"x-component": "div",
			"x-id": "Academy_23_6",
			"x-dynamic": "false",
			children: [/* @__PURE__ */ _jsxDEV("h3", {
				"x-file-name": "Academy",
				"x-line-number": "23",
				"x-column": "32",
				"x-component": "h3",
				"x-id": "Academy_23_32",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: t("ac.paths")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 143
			}, this), /* @__PURE__ */ _jsxDEV("span", {
				"x-file-name": "Academy",
				"x-line-number": "23",
				"x-column": "56",
				"x-component": "span",
				"x-id": "Academy_23_56",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: t("ac.pathsNote")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 328
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 38,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "path-grid",
			"x-file-name": "Academy",
			"x-line-number": "24",
			"x-column": "6",
			"x-component": "div",
			"x-id": "Academy_24_6",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: paths.map((p, i) => {
				const pr = me.paths[p.id];
				return /* @__PURE__ */ _jsxDEV(Link, {
					to: `/academy/path/${p.id}`,
					className: `path-card ${p.color}`,
					"data-testid": `path-card-${p.id}`,
					children: [
						/* @__PURE__ */ _jsxDEV("span", {
							className: "path-num",
							"x-file-name": "Academy",
							"x-line-number": "26",
							"x-column": "10",
							"x-component": "span",
							"x-id": "Academy_26_10",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: ["0", /* @__PURE__ */ _jsxDEV("span", {
								"data-ve-dynamic": "true",
								"x-excluded": "true",
								style: { display: "contents" },
								"x-file-name": "Academy",
								"x-line-number": "26",
								"x-column": "10",
								"x-component": "span",
								"x-id": "Academy_26_10_expr1",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: i + 1
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 42,
								columnNumber: 202
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("h4", {
							"x-file-name": "Academy",
							"x-line-number": "27",
							"x-column": "10",
							"x-component": "h4",
							"x-id": "Academy_27_10",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t(`path.${p.id}.title`)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							"x-file-name": "Academy",
							"x-line-number": "27",
							"x-column": "44",
							"x-component": "p",
							"x-id": "Academy_27_44",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t(`path.${p.id}.subtitle`)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 206
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "path-foot",
							"x-file-name": "Academy",
							"x-line-number": "28",
							"x-column": "10",
							"x-component": "div",
							"x-id": "Academy_28_10",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								"x-file-name": "Academy",
								"x-line-number": "28",
								"x-column": "37",
								"x-component": "span",
								"x-id": "Academy_28_37",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: [
									/* @__PURE__ */ _jsxDEV("span", {
										"data-ve-dynamic": "true",
										"x-excluded": "true",
										style: { display: "contents" },
										"x-file-name": "Academy",
										"x-line-number": "28",
										"x-column": "37",
										"x-component": "span",
										"x-id": "Academy_28_37_expr0",
										"x-dynamic": "true",
										"x-source-type": "computed",
										"x-source-editable": "false",
										children: t("ac.lessonCount", { n: p.lesson_count })
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 46,
										columnNumber: 319
									}, this),
									" · ",
									/* @__PURE__ */ _jsxDEV("span", {
										"data-ve-dynamic": "true",
										"x-excluded": "true",
										style: { display: "contents" },
										"x-file-name": "Academy",
										"x-line-number": "28",
										"x-column": "37",
										"x-component": "span",
										"x-id": "Academy_28_37_expr2",
										"x-dynamic": "true",
										"x-source-type": "computed",
										"x-source-editable": "false",
										children: t("ac.videoCount", { n: p.video_count })
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 50,
										columnNumber: 30
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 150
							}, this), /* @__PURE__ */ _jsxDEV("strong", {
								"x-file-name": "Academy",
								"x-line-number": "28",
								"x-column": "139",
								"x-component": "strong",
								"x-id": "Academy_28_139",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: pr ? t("ac.pathProgress", { percent: pr.percent }) : t("ac.start")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 54,
								columnNumber: 34
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "bar",
							"x-file-name": "Academy",
							"x-line-number": "29",
							"x-column": "10",
							"x-component": "div",
							"x-id": "Academy_29_10",
							"x-dynamic": "false",
							children: /* @__PURE__ */ _jsxDEV("span", {
								style: { width: `${pr?.percent || 0}%` },
								"x-file-name": "Academy",
								"x-line-number": "29",
								"x-column": "31",
								"x-component": "span",
								"x-id": "Academy_29_31",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 57,
								columnNumber: 144
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 57,
							columnNumber: 11
						}, this)
					]
				}, p.id, true, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 16
				}, this);
			})
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 39,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 37,
		columnNumber: 10
	}, this);
}
_s2(PathCards, "JsS7oKXKqCrLyh0EIb0FMov0A7Q=", false, function() {
	return [useI18n, useAcademy];
});
_c2 = PathCards;
function Playlists({ playlists }) {
	_s3();
	const { t } = useI18n();
	return /* @__PURE__ */ _jsxDEV("section", {
		className: "video-row",
		"data-testid": "playlists",
		"x-file-name": "Academy",
		"x-line-number": "38",
		"x-column": "4",
		"x-component": "section",
		"x-id": "Academy_38_4",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "row-head",
			"x-file-name": "Academy",
			"x-line-number": "39",
			"x-column": "6",
			"x-component": "div",
			"x-id": "Academy_39_6",
			"x-dynamic": "false",
			children: /* @__PURE__ */ _jsxDEV("h3", {
				"x-file-name": "Academy",
				"x-line-number": "39",
				"x-column": "32",
				"x-component": "h3",
				"x-id": "Academy_39_32",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: t("ac.playlists")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 143
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 73,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "playlist-grid",
			"x-file-name": "Academy",
			"x-line-number": "40",
			"x-column": "6",
			"x-component": "div",
			"x-id": "Academy_40_6",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: playlists.map((p) => /* @__PURE__ */ _jsxDEV("div", {
				className: "playlist-card",
				"data-testid": `playlist-${p.id}`,
				"x-file-name": "Academy",
				"x-line-number": "41",
				"x-column": "8",
				"x-component": "div",
				"x-id": "Academy_41_8",
				"x-dynamic": "false",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "playlist-stack",
						"x-file-name": "Academy",
						"x-line-number": "42",
						"x-column": "10",
						"x-component": "div",
						"x-id": "Academy_42_10",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: [p.videos.slice(0, 3).map((v, i) => /* @__PURE__ */ _jsxDEV("img", {
							src: v.thumbnail,
							alt: "",
							style: { ["--i"]: i },
							"x-file-name": "Academy",
							"x-line-number": "42",
							"x-column": "78",
							"x-component": "img",
							"x-id": "Academy_42_78",
							"x-dynamic": "false"
						}, v.id, false, {
							fileName: _jsxFileName,
							lineNumber: 75,
							columnNumber: 241
						}, this)), /* @__PURE__ */ _jsxDEV("span", {
							"x-file-name": "Academy",
							"x-line-number": "42",
							"x-column": "156",
							"x-component": "span",
							"x-id": "Academy_42_156",
							"x-dynamic": "true",
							"x-source-type": "static-imported",
							"x-source-var": "playlists",
							"x-source-path": "videos.length",
							"x-source-editable": "false",
							"x-array-var": "playlists",
							"x-array-item-param": "p",
							children: [
								/* @__PURE__ */ _jsxDEV(ListVideo, {
									size: 14,
									"x-file-name": "Academy",
									"x-line-number": "42",
									"x-column": "162",
									"x-component": "ListVideo",
									"x-id": "Academy_42_162",
									"x-dynamic": "true",
									"x-source-type": "external",
									"x-source-var": "playlists",
									"x-source-editable": "false",
									"x-array-var": "playlists",
									"x-array-item-param": "p"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 77,
									columnNumber: 410
								}, this),
								" ",
								p.videos.length
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 77,
							columnNumber: 130
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("h4", {
						"x-file-name": "Academy",
						"x-line-number": "43",
						"x-column": "10",
						"x-component": "h4",
						"x-id": "Academy_43_10",
						"x-dynamic": "true",
						"x-source-type": "static-imported",
						"x-source-var": "playlists",
						"x-source-path": "title",
						"x-source-editable": "false",
						"x-array-var": "playlists",
						"x-array-item-param": "p",
						children: p.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("p", {
						"x-file-name": "Academy",
						"x-line-number": "43",
						"x-column": "28",
						"x-component": "p",
						"x-id": "Academy_43_28",
						"x-dynamic": "true",
						"x-source-type": "static-imported",
						"x-source-var": "playlists",
						"x-source-path": "description",
						"x-source-editable": "false",
						"x-array-var": "playlists",
						"x-array-item-param": "p",
						children: p.description
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 78,
						columnNumber: 291
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "playlist-items",
						"x-file-name": "Academy",
						"x-line-number": "44",
						"x-column": "10",
						"x-component": "div",
						"x-id": "Academy_44_10",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: p.videos.slice(0, 4).map((v, i) => /* @__PURE__ */ _jsxDEV(Link, {
							to: `/academy/video/${v.id}`,
							"data-testid": `playlist-item-${p.id}-${i}`,
							children: [/* @__PURE__ */ _jsxDEV("span", {
								"x-file-name": "Academy",
								"x-line-number": "44",
								"x-column": "168",
								"x-component": "span",
								"x-id": "Academy_44_168",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: i + 1
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 79,
								columnNumber: 331
							}, this), videoTitle(v, t)]
						}, v.id, true, {
							fileName: _jsxFileName,
							lineNumber: 79,
							columnNumber: 241
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 11
					}, this)
				]
			}, p.id, true, {
				fileName: _jsxFileName,
				lineNumber: 74,
				columnNumber: 218
			}, this))
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
_s3(Playlists, "i9WSJarzxoSeCDSFKFFQ8fEj8w0=", false, function() {
	return [useI18n];
});
_c3 = Playlists;
function Experts() {
	_s4();
	const { t } = useI18n();
	const { data } = useQuery({
		queryKey: ["resources"],
		queryFn: () => apiGet("/academy/resources")
	});
	const list = (data?.resources || []).filter((r) => r.status === "published");
	return /* @__PURE__ */ _jsxDEV("section", {
		className: "experts",
		id: "experts",
		"data-testid": "experts-section",
		"x-file-name": "Academy",
		"x-line-number": "55",
		"x-column": "4",
		"x-component": "section",
		"x-id": "Academy_55_4",
		"x-dynamic": "true",
		"x-source-type": "computed",
		"x-source-editable": "false",
		children: [
			/* @__PURE__ */ _jsxDEV("div", {
				className: "row-head",
				"x-file-name": "Academy",
				"x-line-number": "56",
				"x-column": "6",
				"x-component": "div",
				"x-id": "Academy_56_6",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("h3", {
					"x-file-name": "Academy",
					"x-line-number": "56",
					"x-column": "32",
					"x-component": "h3",
					"x-id": "Academy_56_32",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("ac.experts")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 97,
					columnNumber: 143
				}, this), /* @__PURE__ */ _jsxDEV("span", {
					"x-file-name": "Academy",
					"x-line-number": "56",
					"x-column": "58",
					"x-component": "span",
					"x-id": "Academy_56_58",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("ac.expertsNote")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 97,
					columnNumber: 330
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 97,
				columnNumber: 7
			}, this),
			!list.length && /* @__PURE__ */ _jsxDEV("p", {
				className: "row-empty",
				"data-testid": "experts-empty",
				"x-file-name": "Academy",
				"x-line-number": "57",
				"x-column": "23",
				"x-component": "p",
				"x-id": "Academy_57_23",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: t("ac.empty")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 98,
				columnNumber: 24
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "expert-grid",
				"x-file-name": "Academy",
				"x-line-number": "58",
				"x-column": "6",
				"x-component": "div",
				"x-id": "Academy_58_6",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: list.map((r) => /* @__PURE__ */ _jsxDEV("article", {
					className: `expert-card${r.kind === "regulator" || r.kind === "institution" ? " official" : ""}`,
					"data-testid": `expert-${r.id}`,
					"x-file-name": "Academy",
					"x-line-number": "59",
					"x-column": "8",
					"x-component": "article",
					"x-id": "Academy_59_8",
					"x-dynamic": "false",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "expert-top",
							"x-file-name": "Academy",
							"x-line-number": "60",
							"x-column": "10",
							"x-component": "div",
							"x-id": "Academy_60_10",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "expert-avatar",
								"x-file-name": "Academy",
								"x-line-number": "60",
								"x-column": "38",
								"x-component": "span",
								"x-id": "Academy_60_38",
								"x-dynamic": "true",
								"x-source-type": "static-imported",
								"x-source-var": "list",
								"x-source-path": "name.[0]",
								"x-source-editable": "false",
								"x-array-var": "list",
								"x-array-item-param": "r",
								children: r.name[0]
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 100,
								columnNumber: 151
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: `kind-chip ${r.kind}`,
								"x-file-name": "Academy",
								"x-line-number": "60",
								"x-column": "88",
								"x-component": "span",
								"x-id": "Academy_60_88",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: t(`ac.kind_${r.kind}`)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 100,
								columnNumber: 458
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 100,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("h4", {
							"x-file-name": "Academy",
							"x-line-number": "61",
							"x-column": "10",
							"x-component": "h4",
							"x-id": "Academy_61_10",
							"x-dynamic": "true",
							"x-source-type": "static-imported",
							"x-source-var": "list",
							"x-source-path": "name",
							"x-source-editable": "false",
							"x-array-var": "list",
							"x-array-item-param": "r",
							children: r.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 101,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							"x-file-name": "Academy",
							"x-line-number": "61",
							"x-column": "27",
							"x-component": "p",
							"x-id": "Academy_61_27",
							"x-dynamic": "true",
							"x-source-type": "static-imported",
							"x-source-var": "list",
							"x-source-path": "description",
							"x-source-editable": "false",
							"x-array-var": "list",
							"x-array-item-param": "r",
							children: r.description
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 101,
							columnNumber: 279
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "expert-links",
							"x-file-name": "Academy",
							"x-line-number": "62",
							"x-column": "10",
							"x-component": "div",
							"x-id": "Academy_62_10",
							"x-dynamic": "false",
							children: /* @__PURE__ */ _jsxDEV("a", {
								href: r.url,
								target: "_blank",
								rel: "noopener noreferrer",
								"x-file-name": "Academy",
								"x-line-number": "62",
								"x-column": "40",
								"x-component": "a",
								"x-id": "Academy_62_40",
								"x-dynamic": "true",
								"x-source-type": "static-imported",
								"x-source-var": "list",
								"x-source-path": "platform",
								"x-source-editable": "false",
								"x-array-var": "list",
								"x-array-item-param": "r",
								children: [
									/* @__PURE__ */ _jsxDEV(Globe, {
										size: 14,
										"x-file-name": "Academy",
										"x-line-number": "62",
										"x-column": "98",
										"x-component": "Globe",
										"x-id": "Academy_62_98",
										"x-dynamic": "true",
										"x-source-type": "external",
										"x-source-var": "list",
										"x-source-editable": "false",
										"x-array-var": "list",
										"x-array-item-param": "r"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 102,
										columnNumber: 465
									}, this),
									" ",
									r.platform,
									r.verified && /* @__PURE__ */ _jsxDEV(BadgeCheck, {
										size: 13,
										className: "verified",
										"x-file-name": "Academy",
										"x-line-number": "62",
										"x-column": "145",
										"x-component": "BadgeCheck",
										"x-id": "Academy_62_145",
										"x-dynamic": "true",
										"x-source-type": "external",
										"x-source-var": "list",
										"x-source-editable": "false",
										"x-array-var": "list",
										"x-array-item-param": "r"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 102,
										columnNumber: 738
									}, this),
									/* @__PURE__ */ _jsxDEV(ExternalLink, {
										size: 12,
										"x-file-name": "Academy",
										"x-line-number": "62",
										"x-column": "191",
										"x-component": "ExternalLink",
										"x-id": "Academy_62_191",
										"x-dynamic": "true",
										"x-source-type": "external",
										"x-source-var": "list",
										"x-source-editable": "false",
										"x-array-var": "list",
										"x-array-item-param": "r"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 102,
										columnNumber: 1017
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 102,
								columnNumber: 153
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 102,
							columnNumber: 11
						}, this)
					]
				}, r.id, true, {
					fileName: _jsxFileName,
					lineNumber: 99,
					columnNumber: 211
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 99,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 96,
		columnNumber: 10
	}, this);
}
_s4(Experts, "znfiPAivUF54Ine37Oael7j5bVA=", false, function() {
	return [useI18n, useQuery];
});
_c4 = Experts;
export default function AcademyPage() {
	_s5();
	const { t } = useI18n();
	const { me, isSignedIn } = useAcademy();
	const { data } = useQuery({
		queryKey: ["catalog"],
		queryFn: () => apiGet("/academy/catalog")
	});
	const [q, setQ] = useState("");
	const [cat, setCat] = useState("all");
	const [level, setLevel] = useState("all");
	const videos = useMemo(() => data?.videos || [], [data]);
	const byId = useMemo(() => Object.fromEntries(videos.map((v) => [v.id, v])), [videos]);
	const filtering = !!q.trim() || cat !== "all" || level !== "all";
	const results = useMemo(() => videos.filter((v) => (cat === "all" || v.category === cat) && (level === "all" || v.difficulty === level) && (!q.trim() || `${videoTitle(v, t)} ${videoDesc(v, t)} ${v.channel} ${t(`cat.${v.category}`)}`.toLowerCase().includes(q.trim().toLowerCase()))), [
		videos,
		cat,
		level,
		q,
		t
	]);
	const pick = (ids) => ids.map((id) => byId[id]).filter(Boolean);
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "academy",
		"data-testid": "academy-page",
		"x-file-name": "Academy",
		"x-line-number": "81",
		"x-column": "4",
		"x-component": "div",
		"x-id": "Academy_81_4",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("header", {
			className: "academy-hero",
			"x-file-name": "Academy",
			"x-line-number": "82",
			"x-column": "6",
			"x-component": "header",
			"x-id": "Academy_82_6",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: [
				/* @__PURE__ */ _jsxDEV("span", {
					className: "kicker",
					"x-file-name": "Academy",
					"x-line-number": "83",
					"x-column": "8",
					"x-component": "span",
					"x-id": "Academy_83_8",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("ac.kicker")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 130,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("h1", {
					"x-file-name": "Academy",
					"x-line-number": "84",
					"x-column": "8",
					"x-component": "h1",
					"x-id": "Academy_84_8",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("ac.title")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 131,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("p", {
					"x-file-name": "Academy",
					"x-line-number": "85",
					"x-column": "8",
					"x-component": "p",
					"x-id": "Academy_85_8",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("ac.subtitle")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 132,
					columnNumber: 9
				}, this),
				data && /* @__PURE__ */ _jsxDEV("div", {
					className: "academy-filters",
					"x-file-name": "Academy",
					"x-line-number": "87",
					"x-column": "10",
					"x-component": "div",
					"x-id": "Academy_87_10",
					"x-dynamic": "false",
					children: [
						/* @__PURE__ */ _jsxDEV("label", {
							className: "search-box",
							"x-file-name": "Academy",
							"x-line-number": "88",
							"x-column": "12",
							"x-component": "label",
							"x-id": "Academy_88_12",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV(Search, { size: 18 }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 134,
								columnNumber: 157
							}, this), /* @__PURE__ */ _jsxDEV("input", {
								value: q,
								onChange: (e) => setQ(e.target.value),
								placeholder: t("ac.search"),
								"data-testid": "academy-search-input",
								"x-file-name": "Academy",
								"x-line-number": "88",
								"x-column": "62",
								"x-component": "input",
								"x-id": "Academy_88_62",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 134,
								columnNumber: 177
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 134,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "level-filter",
							"data-testid": "academy-level-filter",
							"x-file-name": "Academy",
							"x-line-number": "89",
							"x-column": "12",
							"x-component": "div",
							"x-id": "Academy_89_12",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: [
								"all",
								"beginner",
								"intermediate",
								"advanced"
							].map((l) => /* @__PURE__ */ _jsxDEV("button", {
								className: level === l ? "active" : "",
								onClick: () => setLevel(l),
								"data-testid": `level-filter-${l}`,
								"x-file-name": "Academy",
								"x-line-number": "89",
								"x-column": "137",
								"x-component": "button",
								"x-id": "Academy_89_137",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: l === "all" ? t("ac.allLevels") : t(`ac.${l}`)
							}, l, false, {
								fileName: _jsxFileName,
								lineNumber: 135,
								columnNumber: 298
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 135,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "topic-filter",
							"data-testid": "academy-topic-filter",
							"x-file-name": "Academy",
							"x-line-number": "90",
							"x-column": "12",
							"x-component": "div",
							"x-id": "Academy_90_12",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: [/* @__PURE__ */ _jsxDEV("button", {
								className: cat === "all" ? "active" : "",
								onClick: () => setCat("all"),
								"data-testid": "topic-filter-all",
								"x-file-name": "Academy",
								"x-line-number": "90",
								"x-column": "77",
								"x-component": "button",
								"x-id": "Academy_90_77",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: t("ac.allTopics")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 136,
								columnNumber: 240
							}, this), data.categories.map((c) => {
								const Icon = ICONS[c.icon] || BookOpen;
								return /* @__PURE__ */ _jsxDEV("button", {
									className: cat === c.id ? "active" : "",
									onClick: () => setCat(c.id),
									"data-testid": `topic-filter-${c.id}`,
									"x-file-name": "Academy",
									"x-line-number": "90",
									"x-column": "293",
									"x-component": "button",
									"x-id": "Academy_90_293",
									"x-dynamic": "true",
									"x-source-type": "computed",
									"x-source-editable": "false",
									children: [
										/* @__PURE__ */ _jsxDEV(Icon, {
											size: 15,
											"x-file-name": "Academy",
											"x-line-number": "90",
											"x-column": "419",
											"x-component": "Icon",
											"x-id": "Academy_90_419",
											"x-dynamic": "true",
											"x-source-type": "external",
											"x-source-var": "data",
											"x-source-editable": "false",
											"x-array-var": "data",
											"x-array-item-param": "c"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 138,
											columnNumber: 313
										}, this),
										" ",
										t(`cat.${c.id}`)
									]
								}, c.id, true, {
									fileName: _jsxFileName,
									lineNumber: 138,
									columnNumber: 20
								}, this);
							})]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 136,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 133,
					columnNumber: 18
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 129,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "academy-body",
			"x-file-name": "Academy",
			"x-line-number": "94",
			"x-column": "6",
			"x-component": "div",
			"x-id": "Academy_94_6",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: [/* @__PURE__ */ _jsxDEV(Disclaimer, {
				"x-file-name": "Academy",
				"x-line-number": "95",
				"x-column": "8",
				"x-component": "Disclaimer",
				"x-id": "Academy_95_8",
				"x-dynamic": "true"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 143,
				columnNumber: 9
			}, this), !data ? /* @__PURE__ */ _jsxDEV("div", {
				className: "academy-loading",
				"data-testid": "academy-loading",
				"x-file-name": "Academy",
				"x-line-number": "96",
				"x-column": "17",
				"x-component": "div",
				"x-id": "Academy_96_17",
				"x-dynamic": "false"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 144,
				columnNumber: 18
			}, this) : filtering ? /* @__PURE__ */ _jsxDEV("section", {
				className: "video-row",
				"data-testid": "academy-results",
				"x-file-name": "Academy",
				"x-line-number": "97",
				"x-column": "10",
				"x-component": "section",
				"x-id": "Academy_97_10",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "row-head",
					"x-file-name": "Academy",
					"x-line-number": "98",
					"x-column": "12",
					"x-component": "div",
					"x-id": "Academy_98_12",
					"x-dynamic": "false",
					children: /* @__PURE__ */ _jsxDEV("h3", {
						"x-file-name": "Academy",
						"x-line-number": "98",
						"x-column": "38",
						"x-component": "h3",
						"x-id": "Academy_98_38",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t("ac.results", { count: results.length })
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 145,
						columnNumber: 151
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 145,
					columnNumber: 13
				}, this), results.length ? /* @__PURE__ */ _jsxDEV("div", {
					className: "video-grid",
					"x-file-name": "Academy",
					"x-line-number": "99",
					"x-column": "30",
					"x-component": "div",
					"x-id": "Academy_99_30",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: results.map((v) => /* @__PURE__ */ _jsxDEV(VideoCard, {
						v,
						"x-file-name": "Academy",
						"x-line-number": "99",
						"x-column": "78",
						"x-component": "VideoCard",
						"x-id": "Academy_99_78",
						"x-dynamic": "true",
						"x-source-type": "external",
						"x-source-var": "results",
						"x-source-editable": "false",
						"x-array-var": "results",
						"x-array-item-param": "v"
					}, v.id, false, {
						fileName: _jsxFileName,
						lineNumber: 148,
						columnNumber: 239
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 148,
					columnNumber: 31
				}, this) : /* @__PURE__ */ _jsxDEV("p", {
					className: "row-empty",
					"data-testid": "academy-no-results",
					"x-file-name": "Academy",
					"x-line-number": "99",
					"x-column": "119",
					"x-component": "p",
					"x-id": "Academy_99_119",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("ac.noResults")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 148,
					columnNumber: 516
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 144,
				columnNumber: 210
			}, this) : /* @__PURE__ */ _jsxDEV(_Fragment, { children: [
				isSignedIn ? /* @__PURE__ */ _jsxDEV(_Fragment, { children: [
					me.in_progress.length > 0 && /* @__PURE__ */ _jsxDEV(VideoRow, {
						title: t("ac.continue"),
						videos: pick(me.in_progress),
						testid: "row-continue",
						"x-file-name": "Academy",
						"x-line-number": "104",
						"x-column": "44",
						"x-component": "VideoRow",
						"x-id": "Academy_104_44",
						"x-dynamic": "true"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 151,
						columnNumber: 45
					}, this),
					me.saved.length > 0 && /* @__PURE__ */ _jsxDEV(VideoRow, {
						title: t("ac.saved"),
						videos: pick(me.saved),
						testid: "row-saved",
						"x-file-name": "Academy",
						"x-line-number": "105",
						"x-column": "38",
						"x-component": "VideoRow",
						"x-id": "Academy_105_38",
						"x-dynamic": "true"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 152,
						columnNumber: 39
					}, this),
					me.completed.length > 0 && /* @__PURE__ */ _jsxDEV(VideoRow, {
						title: t("ac.completed"),
						videos: pick(me.completed),
						testid: "row-completed",
						"x-file-name": "Academy",
						"x-line-number": "106",
						"x-column": "42",
						"x-component": "VideoRow",
						"x-id": "Academy_106_42",
						"x-dynamic": "true"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 153,
						columnNumber: 43
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 150,
					columnNumber: 27
				}, this) : /* @__PURE__ */ _jsxDEV("p", {
					className: "track-note",
					"data-testid": "academy-signin-note",
					"x-file-name": "Academy",
					"x-line-number": "107",
					"x-column": "18",
					"x-component": "p",
					"x-id": "Academy_107_18",
					"x-dynamic": "false",
					children: /* @__PURE__ */ _jsxDEV(Link, {
						to: "/sign-in",
						children: t("ac.signInToTrack")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 154,
						columnNumber: 191
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 154,
					columnNumber: 19
				}, this),
				/* @__PURE__ */ _jsxDEV(PathCards, {
					paths: data.paths,
					"x-file-name": "Academy",
					"x-line-number": "108",
					"x-column": "12",
					"x-component": "PathCards",
					"x-id": "Academy_108_12",
					"x-dynamic": "true"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 155,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ _jsxDEV(VideoRow, {
					title: t("ac.originals"),
					note: t("ac.originalsNote"),
					videos: videos.filter((v) => v.source === "original"),
					testid: "row-originals",
					"x-file-name": "Academy",
					"x-line-number": "109",
					"x-column": "12",
					"x-component": "VideoRow",
					"x-id": "Academy_109_12",
					"x-dynamic": "true"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 156,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ _jsxDEV(Playlists, {
					playlists: data.playlists,
					"x-file-name": "Academy",
					"x-line-number": "110",
					"x-column": "12",
					"x-component": "Playlists",
					"x-id": "Academy_110_12",
					"x-dynamic": "true"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 157,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ _jsxDEV(VideoRow, {
					title: t("ac.recent"),
					videos: videos.filter((v) => v.source === "youtube").slice(0, 10),
					testid: "row-recent",
					"x-file-name": "Academy",
					"x-line-number": "111",
					"x-column": "12",
					"x-component": "VideoRow",
					"x-id": "Academy_111_12",
					"x-dynamic": "true"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 158,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ _jsxDEV(VideoRow, {
					title: t("ac.popular"),
					videos: [...videos].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 10),
					testid: "row-popular",
					"x-file-name": "Academy",
					"x-line-number": "112",
					"x-column": "12",
					"x-component": "VideoRow",
					"x-id": "Academy_112_12",
					"x-dynamic": "true"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 159,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ _jsxDEV("section", {
					className: "video-row",
					"data-testid": "topic-sections",
					"x-file-name": "Academy",
					"x-line-number": "113",
					"x-column": "12",
					"x-component": "section",
					"x-id": "Academy_113_12",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "row-head",
						"x-file-name": "Academy",
						"x-line-number": "114",
						"x-column": "14",
						"x-component": "div",
						"x-id": "Academy_114_14",
						"x-dynamic": "false",
						children: /* @__PURE__ */ _jsxDEV("h3", {
							"x-file-name": "Academy",
							"x-line-number": "114",
							"x-column": "40",
							"x-component": "h3",
							"x-id": "Academy_114_40",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("ac.topics")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 161,
							columnNumber: 155
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 161,
						columnNumber: 15
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "topic-grid",
						"x-file-name": "Academy",
						"x-line-number": "115",
						"x-column": "14",
						"x-component": "div",
						"x-id": "Academy_115_14",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: data.categories.map((c) => {
							const Icon = ICONS[c.icon] || BookOpen;
							const n = videos.filter((v) => v.category === c.id).length;
							return /* @__PURE__ */ _jsxDEV("button", {
								className: "topic-tile",
								onClick: () => {
									setCat(c.id);
									window.scrollTo({
										top: 0,
										behavior: "smooth"
									});
								},
								"data-testid": `topic-tile-${c.id}`,
								"x-file-name": "Academy",
								"x-line-number": "115",
								"x-column": "179",
								"x-component": "button",
								"x-id": "Academy_115_179",
								"x-dynamic": "false",
								children: [
									/* @__PURE__ */ _jsxDEV(Icon, {
										size: 22,
										"x-file-name": "Academy",
										"x-line-number": "115",
										"x-column": "339",
										"x-component": "Icon",
										"x-id": "Academy_115_339",
										"x-dynamic": "true",
										"x-source-type": "external",
										"x-source-var": "data",
										"x-source-editable": "false",
										"x-array-var": "data",
										"x-array-item-param": "c"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 171,
										columnNumber: 172
									}, this),
									/* @__PURE__ */ _jsxDEV("strong", {
										"x-file-name": "Academy",
										"x-line-number": "115",
										"x-column": "357",
										"x-component": "strong",
										"x-id": "Academy_115_357",
										"x-dynamic": "true",
										"x-source-type": "computed",
										"x-source-editable": "false",
										children: t(`cat.${c.id}`)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 171,
										columnNumber: 419
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										"x-file-name": "Academy",
										"x-line-number": "115",
										"x-column": "392",
										"x-component": "span",
										"x-id": "Academy_115_392",
										"x-dynamic": "true",
										"x-source-type": "computed",
										"x-source-editable": "false",
										children: t("ac.videoCount", { n })
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 171,
										columnNumber: 623
									}, this)
								]
							}, c.id, true, {
								fileName: _jsxFileName,
								lineNumber: 165,
								columnNumber: 22
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 162,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 160,
					columnNumber: 13
				}, this),
				/* @__PURE__ */ _jsxDEV(Experts, {
					"x-file-name": "Academy",
					"x-line-number": "117",
					"x-column": "12",
					"x-component": "Experts",
					"x-id": "Academy_117_12",
					"x-dynamic": "true"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 176,
					columnNumber: 13
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 149,
				columnNumber: 24
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 142,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 128,
		columnNumber: 10
	}, this);
}
_s5(AcademyPage, "S1nedgi2OOEOllppBVEPFThirMw=", false, function() {
	return [
		useI18n,
		useAcademy,
		useQuery
	];
});
_c5 = AcademyPage;
var _c, _c2, _c3, _c4, _c5;
$RefreshReg$(_c, "Disclaimer");
$RefreshReg$(_c2, "PathCards");
$RefreshReg$(_c3, "Playlists");
$RefreshReg$(_c4, "Experts");
$RefreshReg$(_c5, "AcademyPage");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Academy.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/pages/Academy.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/pages/Academy.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/pages/Academy.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsU0FBU0MsZ0JBQWdCO0FBQ2xDLFNBQVNDLFlBQVk7QUFDckIsU0FBU0MsZ0JBQWdCO0FBQ3pCLFNBQVNDLFlBQVlDLFVBQVVDLGtCQUFrQkMsYUFBYUMsY0FBY0MsT0FBT0MsVUFBVUMsUUFBUUMsV0FBV0MsVUFBVUMsUUFBUUMsYUFBYUMsWUFBWUMsY0FBYztBQUN6SyxTQUFTQyxjQUFjO0FBQ3ZCLFNBQVNDLGtCQUFrQjtBQUMzQixTQUFTQyxlQUFlO0FBRXhCLFNBQVNDLFdBQVdDLFVBQVVDLFdBQVdDLGtCQUFrQjs7OztBQUUzRCxPQUFPLE1BQU1DLFFBQXlDO0NBQUVwQjtDQUFVQztDQUFrQk87Q0FBVUc7Q0FBWUw7Q0FBUUQ7Q0FBVU87Q0FBUUY7QUFBWTtBQUVoSixPQUFPLFNBQVNXLGFBQWE7O0NBQzNCLE1BQU0sRUFBRUMsTUFBTVAsUUFBUTtDQUN0QixPQUFPLHdCQUFDLE9BQUQ7RUFBSyxXQUFVO0VBQTRCLGVBQVk7RUFBb0I7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO1lBQTNFLENBQTRFLHdCQUFDLGFBQUQ7R0FBYSxNQUFNO0dBQUc7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO0VBQUE7Ozs7WUFBRyx3QkFBQyxRQUFEO0dBQUs7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTthQUFFTyxFQUFFLGVBQWU7RUFBUTs7OztVQUFNOzs7Ozs7QUFDcEo7Ozs7O0FBRUEsU0FBU0MsVUFBVSxFQUFFQyxTQUFtQzs7Q0FDdEQsTUFBTSxFQUFFRixNQUFNUCxRQUFRO0NBQ3RCLE1BQU0sRUFBRVUsT0FBT1gsV0FBVztDQUMxQixPQUNFLHdCQUFDLFdBQUQ7RUFBUyxXQUFVO0VBQVksSUFBRztFQUFRLGVBQVk7RUFBZ0I7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO1lBQXRFLENBQ0Usd0JBQUMsT0FBRDtHQUFLLFdBQVU7R0FBVTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7YUFBekIsQ0FBMEIsd0JBQUMsTUFBRDtJQUFHO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7Y0FBRVEsRUFBRSxVQUFVO0dBQU07Ozs7YUFBQyx3QkFBQyxRQUFEO0lBQUs7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtjQUFFQSxFQUFFLGNBQWM7R0FBUTs7OztXQUFNOzs7OztZQUN2Rix3QkFBQyxPQUFEO0dBQUssV0FBVTtHQUFXO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7YUFBRUUsTUFBTUUsS0FBS0MsR0FBR0MsTUFBTTtJQUFFLE1BQU1DLEtBQUtKLEdBQUdELE1BQU1HLEVBQUVHO0lBQUssT0FDM0Usd0JBQUMsTUFBRDtLQUFNLElBQUksaUJBQWlCSCxFQUFFRztLQUFNLFdBQVcsYUFBYUgsRUFBRUk7S0FBb0IsZUFBYSxhQUFhSixFQUFFRztlQUE3RztNQUNFLHdCQUFDLFFBQUQ7T0FBTSxXQUFVO09BQVU7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtpQkFBMUIsQ0FBMkIsS0FBQztRQUFBO1FBQUE7UUFBQSxTQUFBRSxTQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtrQkFBQ0osSUFBSTtPQUFFOzs7O2VBQU07Ozs7OztNQUN6Qyx3QkFBQyxNQUFEO09BQUc7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtpQkFBRU4sRUFBRSxRQUFRSyxFQUFFRyxHQUFFLE9BQVE7TUFBTTs7Ozs7TUFBQyx3QkFBQyxLQUFEO09BQUU7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtpQkFBRVIsRUFBRSxRQUFRSyxFQUFFRyxHQUFFLFVBQVc7TUFBSzs7Ozs7TUFDcEUsd0JBQUMsT0FBRDtPQUFLLFdBQVU7T0FBVztPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7aUJBQTFCLENBQTJCLHdCQUFDLFFBQUQ7UUFBSztRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO2tCQUFMO1NBQU07VUFBQTtVQUFBO1VBQUEsU0FBQUUsU0FBQTtVQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7b0JBQUNWLEVBQUUsa0JBQWtCLEVBQUVXLEdBQUdOLEVBQUVPLGFBQWEsQ0FBQztTQUFFOzs7OztTQUFBO1NBQUc7VUFBQTtVQUFBO1VBQUEsU0FBQUYsU0FBQTtVQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7b0JBQUNWLEVBQUUsaUJBQWlCLEVBQUVXLEdBQUdOLEVBQUVRLFlBQVksQ0FBQztTQUFFOzs7OztRQUFNOzs7OztpQkFBQyx3QkFBQyxVQUFEO1FBQU87UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtrQkFBRU4sS0FBS1AsRUFBRSxtQkFBbUIsRUFBRWMsU0FBU1AsR0FBR08sUUFBUSxDQUFDLElBQUlkLEVBQUUsVUFBVTtPQUFVOzs7O2VBQU07Ozs7OztNQUMzTix3QkFBQyxPQUFEO09BQUssV0FBVTtPQUFLO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtpQkFBQyx3QkFBQyxRQUFEO1FBQU0sT0FBTyxFQUFFZSxPQUFPLEdBQUdSLElBQUlPLFdBQVcsRUFBQyxHQUFJO1FBQUU7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO09BQUE7Ozs7O01BQVE7Ozs7O0tBQ3hFO09BTHFFVCxFQUFFRzs7OztXQUt2RTtHQUFJLENBQUM7RUFBTzs7OztVQUNiOzs7Ozs7QUFFYjs7Ozs7QUFFQSxTQUFTUSxVQUFVLEVBQUVDLGFBQTJDOztDQUM5RCxNQUFNLEVBQUVqQixNQUFNUCxRQUFRO0NBQ3RCLE9BQ0Usd0JBQUMsV0FBRDtFQUFTLFdBQVU7RUFBWSxlQUFZO0VBQVc7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO1lBQXRELENBQ0Usd0JBQUMsT0FBRDtHQUFLLFdBQVU7R0FBVTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7YUFBQyx3QkFBQyxNQUFEO0lBQUc7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtjQUFFTyxFQUFFLGNBQWM7R0FBTTs7Ozs7RUFBTTs7OztZQUMzRCx3QkFBQyxPQUFEO0dBQUssV0FBVTtHQUFlO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7YUFBRWlCLFVBQVViLEtBQUtDLE1BQzdDLHdCQUFDLE9BQUQ7SUFBSyxXQUFVO0lBQTJCLGVBQWEsWUFBWUEsRUFBRUc7SUFBSztJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7Y0FBMUU7S0FDRSx3QkFBQyxPQUFEO01BQUssV0FBVTtNQUFnQjtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO2dCQUEvQixDQUFpQ0gsRUFBRWEsT0FBT0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDZixLQUFLZ0IsR0FBR2QsTUFBTSx3QkFBQyxPQUFEO09BQWdCLEtBQUtjLEVBQUVDO09BQVcsS0FBSTtPQUFHLE9BQU8sR0FBRyxRQUFrQmYsRUFBRTtPQUFFO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtNQUFBLEdBQS9EYyxFQUFFWjs7OzthQUE2RCxDQUFHLEdBQUUsd0JBQUMsUUFBRDtPQUFLO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtpQkFBTDtRQUFNLHdCQUFDLFdBQUQ7U0FBVyxNQUFNO1NBQUc7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTtRQUFBOzs7OztRQUFHO1FBQUVILEVBQUVhLE9BQU9JO09BQWE7Ozs7O2NBQU07Ozs7OztLQUM3TSx3QkFBQyxNQUFEO01BQUc7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO2dCQUFFakIsRUFBRWtCO0tBQVU7Ozs7O0tBQUMsd0JBQUMsS0FBRDtNQUFFO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtnQkFBRWxCLEVBQUVtQjtLQUFlOzs7OztLQUN2Qyx3QkFBQyxPQUFEO01BQUssV0FBVTtNQUFnQjtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO2dCQUFFbkIsRUFBRWEsT0FBT0MsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDZixLQUFLZ0IsR0FBR2QsTUFBTSx3QkFBQyxNQUFEO09BQWlCLElBQUksa0JBQWtCYyxFQUFFWjtPQUFNLGVBQWEsaUJBQWlCSCxFQUFFRyxHQUFFLEdBQUlGO2lCQUFyRixDQUEwRix3QkFBQyxRQUFEO1FBQUs7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtrQkFBRUEsSUFBSTtPQUFROzs7O2lCQUFFVCxXQUFXdUIsR0FBR3BCLENBQUMsQ0FBUTtTQUEzSG9CLEVBQUVaOzs7O2FBQXlILENBQUM7S0FBTzs7Ozs7SUFDL007TUFKK0JILEVBQUVHOzs7O1VBSWpDLENBQUU7RUFBTzs7OztVQUNUOzs7Ozs7QUFFYjs7Ozs7QUFFQSxTQUFTaUIsVUFBVTs7Q0FDakIsTUFBTSxFQUFFekIsTUFBTVAsUUFBUTtDQUN0QixNQUFNLEVBQUVpQyxTQUFTbEQsU0FBUztFQUFFbUQsVUFBVSxDQUFDLFdBQVc7RUFBR0MsZUFBZXJDLE9BQXFDLG9CQUFvQjtDQUFFLENBQUM7Q0FDaEksTUFBTXNDLFFBQVFILE1BQU1JLGFBQWEsR0FBRSxDQUFFQyxRQUFRQyxNQUFNQSxFQUFFQyxXQUFXLFdBQVc7Q0FDM0UsT0FDRSx3QkFBQyxXQUFEO0VBQVMsV0FBVTtFQUFVLElBQUc7RUFBVSxlQUFZO0VBQWlCO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7WUFBdkU7R0FDRSx3QkFBQyxPQUFEO0lBQUssV0FBVTtJQUFVO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtjQUF6QixDQUEwQix3QkFBQyxNQUFEO0tBQUc7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtlQUFFakMsRUFBRSxZQUFZO0lBQU07Ozs7Y0FBQyx3QkFBQyxRQUFEO0tBQUs7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtlQUFFQSxFQUFFLGdCQUFnQjtJQUFROzs7O1lBQU07Ozs7OztHQUMxRixDQUFDNkIsS0FBS1AsVUFBVSx3QkFBQyxLQUFEO0lBQUcsV0FBVTtJQUFZLGVBQVk7SUFBZTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO2NBQUV0QixFQUFFLFVBQVU7R0FBSzs7Ozs7R0FDeEYsd0JBQUMsT0FBRDtJQUFLLFdBQVU7SUFBYTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO2NBQUU2QixLQUFLekIsS0FBSzRCLE1BQ3RDLHdCQUFDLFdBQUQ7S0FBUyxXQUFXLGNBQWNBLEVBQUVFLFNBQVMsZUFBZUYsRUFBRUUsU0FBUyxnQkFBZ0IsY0FBYztLQUFpQixlQUFhLFVBQVVGLEVBQUV4QjtLQUFLO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtlQUFwSjtNQUNFLHdCQUFDLE9BQUQ7T0FBSyxXQUFVO09BQVk7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO2lCQUEzQixDQUE0Qix3QkFBQyxRQUFEO1FBQU0sV0FBVTtRQUFlO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtrQkFBRXdCLEVBQUVHLEtBQUs7T0FBUzs7OztpQkFBQyx3QkFBQyxRQUFEO1FBQU0sV0FBVyxhQUFhSCxFQUFFRTtRQUFPO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7a0JBQUVsQyxFQUFFLFdBQVdnQyxFQUFFRSxNQUFNO09BQVE7Ozs7ZUFBTTs7Ozs7O01BQzFKLHdCQUFDLE1BQUQ7T0FBRztPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7aUJBQUVGLEVBQUVHO01BQVM7Ozs7O01BQUMsd0JBQUMsS0FBRDtPQUFFO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtpQkFBRUgsRUFBRVI7TUFBZTs7Ozs7TUFDdEMsd0JBQUMsT0FBRDtPQUFLLFdBQVU7T0FBYztPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7aUJBQUMsd0JBQUMsS0FBRDtRQUFHLE1BQU1RLEVBQUVJO1FBQUssUUFBTztRQUFTLEtBQUk7UUFBcUI7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO2tCQUF6RDtTQUEwRCx3QkFBQyxPQUFEO1VBQU8sTUFBTTtVQUFHO1VBQUE7VUFBQTtVQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7U0FBQTs7Ozs7U0FBRztTQUFFSixFQUFFSztTQUFVTCxFQUFFTSxZQUFZLHdCQUFDLFlBQUQ7VUFBWSxNQUFNO1VBQUksV0FBVTtVQUFVO1VBQUE7VUFBQTtVQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7U0FBQTs7Ozs7U0FBSSx3QkFBQyxjQUFEO1VBQWMsTUFBTTtVQUFHO1VBQUE7VUFBQTtVQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7U0FBQTs7Ozs7UUFBTTs7Ozs7O01BQU07Ozs7O0tBQ2pOO09BSnVHTixFQUFFeEI7Ozs7V0FJekcsQ0FBRTtHQUFPOzs7OztFQUNiOzs7Ozs7QUFFYjs7Ozs7QUFFQSxlQUFlLFNBQVMrQixjQUFjOztDQUNwQyxNQUFNLEVBQUV2QyxNQUFNUCxRQUFRO0NBQ3RCLE1BQU0sRUFBRVUsSUFBSXFDLGVBQWVoRCxXQUFXO0NBQ3RDLE1BQU0sRUFBRWtDLFNBQVNsRCxTQUFTO0VBQUVtRCxVQUFVLENBQUMsU0FBUztFQUFHQyxlQUFlckMsT0FBZ0Isa0JBQWtCO0NBQUUsQ0FBQztDQUN2RyxNQUFNLENBQUNrRCxHQUFHQyxRQUFRcEUsU0FBUyxFQUFFO0NBQzdCLE1BQU0sQ0FBQ3FFLEtBQUtDLFVBQVV0RSxTQUFTLEtBQUs7Q0FDcEMsTUFBTSxDQUFDdUUsT0FBT0MsWUFBWXhFLFNBQVMsS0FBSztDQUN4QyxNQUFNNEMsU0FBUzdDLGNBQWNxRCxNQUFNUixVQUFVLElBQUksQ0FBQ1EsSUFBSSxDQUFDO0NBQ3ZELE1BQU1xQixPQUFPMUUsY0FBYzJFLE9BQU9DLFlBQVkvQixPQUFPZCxLQUFLZ0IsTUFBTSxDQUFDQSxFQUFFWixJQUFJWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUNGLE1BQU0sQ0FBQztDQUNyRixNQUFNZ0MsWUFBWSxDQUFDLENBQUNULEVBQUVVLEtBQUssS0FBS1IsUUFBUSxTQUFTRSxVQUFVO0NBQzNELE1BQU1PLFVBQVUvRSxjQUFjNkMsT0FBT2EsUUFBUVgsT0FBT3VCLFFBQVEsU0FBU3ZCLEVBQUVpQyxhQUFhVixTQUFTRSxVQUFVLFNBQVN6QixFQUFFa0MsZUFBZVQsV0FBVyxDQUFDSixFQUFFVSxLQUFLLEtBQUssR0FBR3RELFdBQVd1QixHQUFHcEIsQ0FBQyxFQUFDLEdBQUlKLFVBQVV3QixHQUFHcEIsQ0FBQyxFQUFDLEdBQUlvQixFQUFFbUMsUUFBTyxHQUFJdkQsRUFBRSxPQUFPb0IsRUFBRWlDLFVBQVUsSUFBSUcsWUFBWSxDQUFDLENBQUNDLFNBQVNoQixFQUFFVSxLQUFLLENBQUMsQ0FBQ0ssWUFBWSxDQUFDLEVBQUUsR0FBRztFQUFDdEM7RUFBUXlCO0VBQUtFO0VBQU9KO0VBQUd6QztDQUFDLENBQUM7Q0FDclQsTUFBTTBELFFBQVFDLFFBQWtCQSxJQUFJdkQsS0FBS0ksT0FBT3VDLEtBQUt2QyxHQUFHLENBQUMsQ0FBQ3VCLE9BQU82QixPQUFPO0NBQ3hFLE9BQ0Usd0JBQUMsT0FBRDtFQUFLLFdBQVU7RUFBVSxlQUFZO0VBQWM7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO1lBQW5ELENBQ0Usd0JBQUMsVUFBRDtHQUFRLFdBQVU7R0FBYztHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO2FBQWhDO0lBQ0Usd0JBQUMsUUFBRDtLQUFNLFdBQVU7S0FBUTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO2VBQUU1RCxFQUFFLFdBQVc7SUFBUTs7Ozs7SUFDL0Msd0JBQUMsTUFBRDtLQUFHO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7ZUFBRUEsRUFBRSxVQUFVO0lBQU07Ozs7O0lBQ3ZCLHdCQUFDLEtBQUQ7S0FBRTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO2VBQUVBLEVBQUUsYUFBYTtJQUFLOzs7OztJQUN2QjBCLFFBQ0Msd0JBQUMsT0FBRDtLQUFLLFdBQVU7S0FBaUI7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO2VBQWhDO01BQ0Usd0JBQUMsU0FBRDtPQUFPLFdBQVU7T0FBWTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7aUJBQTdCLENBQThCLHdCQUFDLFFBQUQsRUFBUSxNQUFNLEdBQUc7Ozs7aUJBQUcsd0JBQUMsU0FBRDtRQUFPLE9BQU9lO1FBQUcsV0FBV29CLE1BQU1uQixLQUFLbUIsRUFBRUMsT0FBT0MsS0FBSztRQUFHLGFBQWEvRCxFQUFFLFdBQVc7UUFBRyxlQUFZO1FBQXNCO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtPQUFBOzs7O2VBQVU7Ozs7OztNQUNuTCx3QkFBQyxPQUFEO09BQUssV0FBVTtPQUFlLGVBQVk7T0FBc0I7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtpQkFBRTtRQUFDO1FBQU87UUFBWTtRQUFnQjtPQUFVLENBQUMsQ0FBQ0ksS0FBSzRELE1BQU0sd0JBQUMsVUFBRDtRQUFnQixXQUFXbkIsVUFBVW1CLElBQUksV0FBVztRQUFJLGVBQWVsQixTQUFTa0IsQ0FBQztRQUFHLGVBQWEsZ0JBQWdCQTtRQUFJO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7a0JBQUVBLE1BQU0sUUFBUWhFLEVBQUUsY0FBYyxJQUFJQSxFQUFFLE1BQU1nRSxHQUFHO09BQVUsR0FBaktBOzs7O2NBQWlLLENBQUM7TUFBTzs7Ozs7TUFDblQsd0JBQUMsT0FBRDtPQUFLLFdBQVU7T0FBZSxlQUFZO09BQXNCO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7aUJBQWhFLENBQWlFLHdCQUFDLFVBQUQ7UUFBUSxXQUFXckIsUUFBUSxRQUFRLFdBQVc7UUFBSSxlQUFlQyxPQUFPLEtBQUs7UUFBRyxlQUFZO1FBQWtCO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7a0JBQUU1QyxFQUFFLGNBQWM7T0FBVTs7OztpQkFBRTBCLEtBQUt1QyxXQUFXN0QsS0FBSzhELE1BQU07UUFBRSxNQUFNQyxPQUFPckUsTUFBTW9FLEVBQUVFLFNBQVMxRjtRQUFVLE9BQU8sd0JBQUMsVUFBRDtTQUFtQixXQUFXaUUsUUFBUXVCLEVBQUUxRCxLQUFLLFdBQVc7U0FBSSxlQUFlb0MsT0FBT3NCLEVBQUUxRCxFQUFFO1NBQUcsZUFBYSxnQkFBZ0IwRCxFQUFFMUQ7U0FBSztTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO21CQUE3SDtVQUE4SCx3QkFBQyxNQUFEO1dBQU0sTUFBTTtXQUFHO1dBQUE7V0FBQTtXQUFBO1dBQUE7V0FBQTtXQUFBO1dBQUE7V0FBQTtXQUFBO1dBQUE7VUFBQTs7Ozs7VUFBRztVQUFFUixFQUFFLE9BQU9rRSxFQUFFMUQsSUFBSTtTQUFVO1dBQTlKMEQsRUFBRTFEOzs7O2VBQTRKO09BQUcsQ0FBQyxDQUFPOzs7Ozs7S0FDNWM7Ozs7OztHQUVEOzs7OztZQUNSLHdCQUFDLE9BQUQ7R0FBSyxXQUFVO0dBQWM7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTthQUE3QixDQUNFLHdCQUFDLFlBQUQ7SUFBVztJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7R0FBQTs7OzthQUNWLENBQUNrQixPQUFPLHdCQUFDLE9BQUQ7SUFBSyxXQUFVO0lBQWtCLGVBQVk7SUFBaUI7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0dBQUE7Ozs7Y0FBTXdCLFlBQzNFLHdCQUFDLFdBQUQ7SUFBUyxXQUFVO0lBQVksZUFBWTtJQUFpQjtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO2NBQTVELENBQ0Usd0JBQUMsT0FBRDtLQUFLLFdBQVU7S0FBVTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7ZUFBQyx3QkFBQyxNQUFEO01BQUc7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtnQkFBRWxELEVBQUUsY0FBYyxFQUFFcUUsT0FBT2pCLFFBQVE5QixPQUFPLENBQUM7S0FBTTs7Ozs7SUFBTTs7OztjQUNuRjhCLFFBQVE5QixTQUFTLHdCQUFDLE9BQUQ7S0FBSyxXQUFVO0tBQVk7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtlQUFFOEIsUUFBUWhELEtBQUtnQixNQUFNLHdCQUFDLFdBQUQ7TUFBeUJBO01BQUU7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtLQUFBLEdBQVhBLEVBQUVaOzs7O1lBQVMsQ0FBRztJQUFPOzs7O2VBQUksd0JBQUMsS0FBRDtLQUFHLFdBQVU7S0FBWSxlQUFZO0tBQW9CO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7ZUFBRVIsRUFBRSxjQUFjO0lBQUs7Ozs7WUFDcEw7Ozs7O2NBRVQ7SUFDR3dDLGFBQWE7S0FDWHJDLEdBQUdtRSxZQUFZaEQsU0FBUyxLQUFLLHdCQUFDLFVBQUQ7TUFBVSxPQUFPdEIsRUFBRSxhQUFhO01BQUcsUUFBUTBELEtBQUt2RCxHQUFHbUUsV0FBVztNQUFHLFFBQU87TUFBYztNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7S0FBQTs7Ozs7S0FDbkhuRSxHQUFHb0UsTUFBTWpELFNBQVMsS0FBSyx3QkFBQyxVQUFEO01BQVUsT0FBT3RCLEVBQUUsVUFBVTtNQUFHLFFBQVEwRCxLQUFLdkQsR0FBR29FLEtBQUs7TUFBRyxRQUFPO01BQVc7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO0tBQUE7Ozs7O0tBQ2pHcEUsR0FBR3FFLFVBQVVsRCxTQUFTLEtBQUssd0JBQUMsVUFBRDtNQUFVLE9BQU90QixFQUFFLGNBQWM7TUFBRyxRQUFRMEQsS0FBS3ZELEdBQUdxRSxTQUFTO01BQUcsUUFBTztNQUFlO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtLQUFBOzs7OztJQUNwSDs7OztlQUFNLHdCQUFDLEtBQUQ7S0FBRyxXQUFVO0tBQWEsZUFBWTtLQUFxQjtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7ZUFBQyx3QkFBQyxNQUFEO01BQU0sSUFBRztnQkFBWXhFLEVBQUUsa0JBQWtCO0tBQVE7Ozs7O0lBQUk7Ozs7O0lBQ3ZILHdCQUFDLFdBQUQ7S0FBVyxPQUFPMEIsS0FBS3hCO0tBQU07S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0lBQUE7Ozs7O0lBQzdCLHdCQUFDLFVBQUQ7S0FBVSxPQUFPRixFQUFFLGNBQWM7S0FBRyxNQUFNQSxFQUFFLGtCQUFrQjtLQUFHLFFBQVFrQixPQUFPYSxRQUFRWCxNQUFNQSxFQUFFcUQsV0FBVyxVQUFVO0tBQUcsUUFBTztLQUFlO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtJQUFBOzs7OztJQUM5SSx3QkFBQyxXQUFEO0tBQVcsV0FBVy9DLEtBQUtUO0tBQVU7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0lBQUE7Ozs7O0lBQ3JDLHdCQUFDLFVBQUQ7S0FBVSxPQUFPakIsRUFBRSxXQUFXO0tBQUcsUUFBUWtCLE9BQU9hLFFBQVFYLE1BQU1BLEVBQUVxRCxXQUFXLFNBQVMsQ0FBQyxDQUFDdEQsTUFBTSxHQUFHLEVBQUU7S0FBRyxRQUFPO0tBQVk7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0lBQUE7Ozs7O0lBQ3ZILHdCQUFDLFVBQUQ7S0FBVSxPQUFPbkIsRUFBRSxZQUFZO0tBQUcsUUFBUSxDQUFDLEdBQUdrQixNQUFNLENBQUMsQ0FBQ3dELE1BQU1DLEdBQUdDLE9BQU9BLEVBQUVDLFNBQVMsTUFBTUYsRUFBRUUsU0FBUyxFQUFFLENBQUMsQ0FBQzFELE1BQU0sR0FBRyxFQUFFO0tBQUcsUUFBTztLQUFhO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtJQUFBOzs7OztJQUN4SSx3QkFBQyxXQUFEO0tBQVMsV0FBVTtLQUFZLGVBQVk7S0FBZ0I7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO2VBQTNELENBQ0Usd0JBQUMsT0FBRDtNQUFLLFdBQVU7TUFBVTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7Z0JBQUMsd0JBQUMsTUFBRDtPQUFHO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7aUJBQUVuQixFQUFFLFdBQVc7TUFBTTs7Ozs7S0FBTTs7OztlQUN4RCx3QkFBQyxPQUFEO01BQUssV0FBVTtNQUFZO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7Z0JBQUUwQixLQUFLdUMsV0FBVzdELEtBQUs4RCxNQUFNO09BQUUsTUFBTUMsT0FBT3JFLE1BQU1vRSxFQUFFRSxTQUFTMUY7T0FBVSxNQUFNaUMsSUFBSU8sT0FBT2EsUUFBUVgsTUFBTUEsRUFBRWlDLGFBQWFhLEVBQUUxRCxFQUFFLENBQUMsQ0FBQ2M7T0FBUSxPQUFPLHdCQUFDLFVBQUQ7UUFBbUIsV0FBVTtRQUFhLGVBQWU7U0FBRXNCLE9BQU9zQixFQUFFMUQsRUFBRTtTQUFHc0UsT0FBT0MsU0FBUztVQUFFQyxLQUFLO1VBQUdDLFVBQVU7U0FBUyxDQUFDO1FBQUc7UUFBRyxlQUFhLGNBQWNmLEVBQUUxRDtRQUFLO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtrQkFBL0o7U0FBZ0ssd0JBQUMsTUFBRDtVQUFNLE1BQU07VUFBRztVQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7VUFBQTtVQUFBO1NBQUE7Ozs7O1NBQUcsd0JBQUMsVUFBRDtVQUFPO1VBQUE7VUFBQTtVQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7b0JBQUVSLEVBQUUsT0FBT2tFLEVBQUUxRCxJQUFJO1NBQVU7Ozs7O1NBQUMsd0JBQUMsUUFBRDtVQUFLO1VBQUE7VUFBQTtVQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7b0JBQUVSLEVBQUUsaUJBQWlCLEVBQUVXLEVBQUUsQ0FBQztTQUFROzs7OztRQUFTO1VBQXhQdUQsRUFBRTFEOzs7O2NBQXNQO01BQUcsQ0FBQztLQUFPOzs7O2FBQzlhOzs7Ozs7SUFDVCx3QkFBQyxTQUFEO0tBQVE7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0lBQUE7Ozs7O0dBQ1Y7Ozs7V0FFQzs7Ozs7VUFDRjs7Ozs7O0FBRVQiLCJuYW1lcyI6WyJ1c2VNZW1vIiwidXNlU3RhdGUiLCJMaW5rIiwidXNlUXVlcnkiLCJCYWRnZUNoZWNrIiwiQm9va09wZW4iLCJDYW5kbGVzdGlja0NoYXJ0IiwiQ2lyY2xlQWxlcnQiLCJFeHRlcm5hbExpbmsiLCJHbG9iZSIsIkxhbmRtYXJrIiwiTGF5ZXJzIiwiTGlzdFZpZGVvIiwiUGllQ2hhcnQiLCJTZWFyY2giLCJTaGllbGRDaGVjayIsIlRyZW5kaW5nVXAiLCJXYWxsZXQiLCJhcGlHZXQiLCJ1c2VBY2FkZW15IiwidXNlSTE4biIsIlZpZGVvQ2FyZCIsIlZpZGVvUm93IiwidmlkZW9EZXNjIiwidmlkZW9UaXRsZSIsIklDT05TIiwiRGlzY2xhaW1lciIsInQiLCJQYXRoQ2FyZHMiLCJwYXRocyIsIm1lIiwibWFwIiwicCIsImkiLCJwciIsImlkIiwiY29sb3IiLCJkaXNwbGF5IiwibiIsImxlc3Nvbl9jb3VudCIsInZpZGVvX2NvdW50IiwicGVyY2VudCIsIndpZHRoIiwiUGxheWxpc3RzIiwicGxheWxpc3RzIiwidmlkZW9zIiwic2xpY2UiLCJ2IiwidGh1bWJuYWlsIiwibGVuZ3RoIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkV4cGVydHMiLCJkYXRhIiwicXVlcnlLZXkiLCJxdWVyeUZuIiwibGlzdCIsInJlc291cmNlcyIsImZpbHRlciIsInIiLCJzdGF0dXMiLCJraW5kIiwibmFtZSIsInVybCIsInBsYXRmb3JtIiwidmVyaWZpZWQiLCJBY2FkZW15UGFnZSIsImlzU2lnbmVkSW4iLCJxIiwic2V0USIsImNhdCIsInNldENhdCIsImxldmVsIiwic2V0TGV2ZWwiLCJieUlkIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJmaWx0ZXJpbmciLCJ0cmltIiwicmVzdWx0cyIsImNhdGVnb3J5IiwiZGlmZmljdWx0eSIsImNoYW5uZWwiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwicGljayIsImlkcyIsIkJvb2xlYW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJsIiwiY2F0ZWdvcmllcyIsImMiLCJJY29uIiwiaWNvbiIsImNvdW50IiwiaW5fcHJvZ3Jlc3MiLCJzYXZlZCIsImNvbXBsZXRlZCIsInNvdXJjZSIsInNvcnQiLCJhIiwiYiIsInZpZXdzIiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBY2FkZW15LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IEJhZGdlQ2hlY2ssIEJvb2tPcGVuLCBDYW5kbGVzdGlja0NoYXJ0LCBDaXJjbGVBbGVydCwgRXh0ZXJuYWxMaW5rLCBHbG9iZSwgTGFuZG1hcmssIExheWVycywgTGlzdFZpZGVvLCBQaWVDaGFydCwgU2VhcmNoLCBTaGllbGRDaGVjaywgVHJlbmRpbmdVcCwgV2FsbGV0IH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgYXBpR2V0IH0gZnJvbSBcIkAvbGliL2FwaVwiO1xuaW1wb3J0IHsgdXNlQWNhZGVteSB9IGZyb20gXCJAL2xpYi9hY2FkZW15XCI7XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSBcIkAvbGliL2kxOG5cIjtcbmltcG9ydCB0eXBlIHsgQ2F0YWxvZywgUGF0aFN1bW1hcnksIFBsYXlsaXN0RG9jLCBSZXNvdXJjZURvYyB9IGZyb20gXCJAL2xpYi90eXBlc1wiO1xuaW1wb3J0IHsgVmlkZW9DYXJkLCBWaWRlb1JvdywgdmlkZW9EZXNjLCB2aWRlb1RpdGxlIH0gZnJvbSBcIkAvY29tcG9uZW50cy9hY2FkZW15L1ZpZGVvQ2FyZFwiO1xuXG5leHBvcnQgY29uc3QgSUNPTlM6IFJlY29yZDxzdHJpbmcsIHR5cGVvZiBCb29rT3Blbj4gPSB7IEJvb2tPcGVuLCBDYW5kbGVzdGlja0NoYXJ0LCBQaWVDaGFydCwgVHJlbmRpbmdVcCwgTGF5ZXJzLCBMYW5kbWFyaywgV2FsbGV0LCBTaGllbGRDaGVjayB9O1xuXG5leHBvcnQgZnVuY3Rpb24gRGlzY2xhaW1lcigpIHtcbiAgY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm5vdGljZSBhY2FkZW15LWRpc2NsYWltZXJcIiBkYXRhLXRlc3RpZD1cImFjYWRlbXktZGlzY2xhaW1lclwiPjxDaXJjbGVBbGVydCBzaXplPXsxOH0gLz48c3Bhbj57dChcImFjLmRpc2NsYWltZXJcIil9PC9zcGFuPjwvZGl2Pjtcbn1cblxuZnVuY3Rpb24gUGF0aENhcmRzKHsgcGF0aHMgfTogeyBwYXRoczogUGF0aFN1bW1hcnlbXSB9KSB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuICBjb25zdCB7IG1lIH0gPSB1c2VBY2FkZW15KCk7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidmlkZW8tcm93XCIgaWQ9XCJwYXRoc1wiIGRhdGEtdGVzdGlkPVwibGVhcm5pbmctcGF0aHNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LWhlYWRcIj48aDM+e3QoXCJhYy5wYXRoc1wiKX08L2gzPjxzcGFuPnt0KFwiYWMucGF0aHNOb3RlXCIpfTwvc3Bhbj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF0aC1ncmlkXCI+e3BhdGhzLm1hcCgocCwgaSkgPT4geyBjb25zdCBwciA9IG1lLnBhdGhzW3AuaWRdOyByZXR1cm4gKFxuICAgICAgICA8TGluayB0bz17YC9hY2FkZW15L3BhdGgvJHtwLmlkfWB9IGNsYXNzTmFtZT17YHBhdGgtY2FyZCAke3AuY29sb3J9YH0ga2V5PXtwLmlkfSBkYXRhLXRlc3RpZD17YHBhdGgtY2FyZC0ke3AuaWR9YH0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGF0aC1udW1cIj4we2kgKyAxfTwvc3Bhbj5cbiAgICAgICAgICA8aDQ+e3QoYHBhdGguJHtwLmlkfS50aXRsZWApfTwvaDQ+PHA+e3QoYHBhdGguJHtwLmlkfS5zdWJ0aXRsZWApfTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhdGgtZm9vdFwiPjxzcGFuPnt0KFwiYWMubGVzc29uQ291bnRcIiwgeyBuOiBwLmxlc3Nvbl9jb3VudCB9KX0gwrcge3QoXCJhYy52aWRlb0NvdW50XCIsIHsgbjogcC52aWRlb19jb3VudCB9KX08L3NwYW4+PHN0cm9uZz57cHIgPyB0KFwiYWMucGF0aFByb2dyZXNzXCIsIHsgcGVyY2VudDogcHIucGVyY2VudCB9KSA6IHQoXCJhYy5zdGFydFwiKX08L3N0cm9uZz48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhclwiPjxzcGFuIHN0eWxlPXt7IHdpZHRoOiBgJHtwcj8ucGVyY2VudCB8fCAwfSVgIH19IC8+PC9kaXY+XG4gICAgICAgIDwvTGluaz4pOyB9KX08L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFBsYXlsaXN0cyh7IHBsYXlsaXN0cyB9OiB7IHBsYXlsaXN0czogUGxheWxpc3REb2NbXSB9KSB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInZpZGVvLXJvd1wiIGRhdGEtdGVzdGlkPVwicGxheWxpc3RzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1oZWFkXCI+PGgzPnt0KFwiYWMucGxheWxpc3RzXCIpfTwvaDM+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlsaXN0LWdyaWRcIj57cGxheWxpc3RzLm1hcCgocCkgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXlsaXN0LWNhcmRcIiBrZXk9e3AuaWR9IGRhdGEtdGVzdGlkPXtgcGxheWxpc3QtJHtwLmlkfWB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWxpc3Qtc3RhY2tcIj57cC52aWRlb3Muc2xpY2UoMCwgMykubWFwKCh2LCBpKSA9PiA8aW1nIGtleT17di5pZH0gc3JjPXt2LnRodW1ibmFpbH0gYWx0PVwiXCIgc3R5bGU9e3sgW1wiLS1pXCIgYXMgc3RyaW5nXTogaSB9fSAvPil9PHNwYW4+PExpc3RWaWRlbyBzaXplPXsxNH0gLz4ge3AudmlkZW9zLmxlbmd0aH08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgPGg0PntwLnRpdGxlfTwvaDQ+PHA+e3AuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWxpc3QtaXRlbXNcIj57cC52aWRlb3Muc2xpY2UoMCwgNCkubWFwKCh2LCBpKSA9PiA8TGluayBrZXk9e3YuaWR9IHRvPXtgL2FjYWRlbXkvdmlkZW8vJHt2LmlkfWB9IGRhdGEtdGVzdGlkPXtgcGxheWxpc3QtaXRlbS0ke3AuaWR9LSR7aX1gfT48c3Bhbj57aSArIDF9PC9zcGFuPnt2aWRlb1RpdGxlKHYsIHQpfTwvTGluaz4pfTwvZGl2PlxuICAgICAgICA8L2Rpdj4pKX08L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEV4cGVydHMoKSB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KHsgcXVlcnlLZXk6IFtcInJlc291cmNlc1wiXSwgcXVlcnlGbjogKCkgPT4gYXBpR2V0PHsgcmVzb3VyY2VzOiBSZXNvdXJjZURvY1tdIH0+KFwiL2FjYWRlbXkvcmVzb3VyY2VzXCIpIH0pO1xuICBjb25zdCBsaXN0ID0gKGRhdGE/LnJlc291cmNlcyB8fCBbXSkuZmlsdGVyKChyKSA9PiByLnN0YXR1cyA9PT0gXCJwdWJsaXNoZWRcIik7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZXhwZXJ0c1wiIGlkPVwiZXhwZXJ0c1wiIGRhdGEtdGVzdGlkPVwiZXhwZXJ0cy1zZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1oZWFkXCI+PGgzPnt0KFwiYWMuZXhwZXJ0c1wiKX08L2gzPjxzcGFuPnt0KFwiYWMuZXhwZXJ0c05vdGVcIil9PC9zcGFuPjwvZGl2PlxuICAgICAgeyFsaXN0Lmxlbmd0aCAmJiA8cCBjbGFzc05hbWU9XCJyb3ctZW1wdHlcIiBkYXRhLXRlc3RpZD1cImV4cGVydHMtZW1wdHlcIj57dChcImFjLmVtcHR5XCIpfTwvcD59XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGVydC1ncmlkXCI+e2xpc3QubWFwKChyKSA9PiAoXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17YGV4cGVydC1jYXJkJHtyLmtpbmQgPT09IFwicmVndWxhdG9yXCIgfHwgci5raW5kID09PSBcImluc3RpdHV0aW9uXCIgPyBcIiBvZmZpY2lhbFwiIDogXCJcIn1gfSBrZXk9e3IuaWR9IGRhdGEtdGVzdGlkPXtgZXhwZXJ0LSR7ci5pZH1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGVydC10b3BcIj48c3BhbiBjbGFzc05hbWU9XCJleHBlcnQtYXZhdGFyXCI+e3IubmFtZVswXX08L3NwYW4+PHNwYW4gY2xhc3NOYW1lPXtga2luZC1jaGlwICR7ci5raW5kfWB9Pnt0KGBhYy5raW5kXyR7ci5raW5kfWApfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICA8aDQ+e3IubmFtZX08L2g0PjxwPntyLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGVydC1saW5rc1wiPjxhIGhyZWY9e3IudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+PEdsb2JlIHNpemU9ezE0fSAvPiB7ci5wbGF0Zm9ybX17ci52ZXJpZmllZCAmJiA8QmFkZ2VDaGVjayBzaXplPXsxM30gY2xhc3NOYW1lPVwidmVyaWZpZWRcIiAvPn08RXh0ZXJuYWxMaW5rIHNpemU9ezEyfSAvPjwvYT48L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPikpfTwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNhZGVteVBhZ2UoKSB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuICBjb25zdCB7IG1lLCBpc1NpZ25lZEluIH0gPSB1c2VBY2FkZW15KCk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoeyBxdWVyeUtleTogW1wiY2F0YWxvZ1wiXSwgcXVlcnlGbjogKCkgPT4gYXBpR2V0PENhdGFsb2c+KFwiL2FjYWRlbXkvY2F0YWxvZ1wiKSB9KTtcbiAgY29uc3QgW3EsIHNldFFdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjYXQsIHNldENhdF0gPSB1c2VTdGF0ZShcImFsbFwiKTtcbiAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZShcImFsbFwiKTtcbiAgY29uc3QgdmlkZW9zID0gdXNlTWVtbygoKSA9PiBkYXRhPy52aWRlb3MgfHwgW10sIFtkYXRhXSk7XG4gIGNvbnN0IGJ5SWQgPSB1c2VNZW1vKCgpID0+IE9iamVjdC5mcm9tRW50cmllcyh2aWRlb3MubWFwKCh2KSA9PiBbdi5pZCwgdl0pKSwgW3ZpZGVvc10pO1xuICBjb25zdCBmaWx0ZXJpbmcgPSAhIXEudHJpbSgpIHx8IGNhdCAhPT0gXCJhbGxcIiB8fCBsZXZlbCAhPT0gXCJhbGxcIjtcbiAgY29uc3QgcmVzdWx0cyA9IHVzZU1lbW8oKCkgPT4gdmlkZW9zLmZpbHRlcigodikgPT4gKGNhdCA9PT0gXCJhbGxcIiB8fCB2LmNhdGVnb3J5ID09PSBjYXQpICYmIChsZXZlbCA9PT0gXCJhbGxcIiB8fCB2LmRpZmZpY3VsdHkgPT09IGxldmVsKSAmJiAoIXEudHJpbSgpIHx8IGAke3ZpZGVvVGl0bGUodiwgdCl9ICR7dmlkZW9EZXNjKHYsIHQpfSAke3YuY2hhbm5lbH0gJHt0KGBjYXQuJHt2LmNhdGVnb3J5fWApfWAudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxLnRyaW0oKS50b0xvd2VyQ2FzZSgpKSkpLCBbdmlkZW9zLCBjYXQsIGxldmVsLCBxLCB0XSk7XG4gIGNvbnN0IHBpY2sgPSAoaWRzOiBzdHJpbmdbXSkgPT4gaWRzLm1hcCgoaWQpID0+IGJ5SWRbaWRdKS5maWx0ZXIoQm9vbGVhbik7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY2FkZW15XCIgZGF0YS10ZXN0aWQ9XCJhY2FkZW15LXBhZ2VcIj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYWNhZGVteS1oZXJvXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImtpY2tlclwiPnt0KFwiYWMua2lja2VyXCIpfTwvc3Bhbj5cbiAgICAgICAgPGgxPnt0KFwiYWMudGl0bGVcIil9PC9oMT5cbiAgICAgICAgPHA+e3QoXCJhYy5zdWJ0aXRsZVwiKX08L3A+XG4gICAgICAgIHtkYXRhICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjYWRlbXktZmlsdGVyc1wiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNlYXJjaC1ib3hcIj48U2VhcmNoIHNpemU9ezE4fSAvPjxpbnB1dCB2YWx1ZT17cX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRRKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9e3QoXCJhYy5zZWFyY2hcIil9IGRhdGEtdGVzdGlkPVwiYWNhZGVteS1zZWFyY2gtaW5wdXRcIiAvPjwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldmVsLWZpbHRlclwiIGRhdGEtdGVzdGlkPVwiYWNhZGVteS1sZXZlbC1maWx0ZXJcIj57W1wiYWxsXCIsIFwiYmVnaW5uZXJcIiwgXCJpbnRlcm1lZGlhdGVcIiwgXCJhZHZhbmNlZFwiXS5tYXAoKGwpID0+IDxidXR0b24ga2V5PXtsfSBjbGFzc05hbWU9e2xldmVsID09PSBsID8gXCJhY3RpdmVcIiA6IFwiXCJ9IG9uQ2xpY2s9eygpID0+IHNldExldmVsKGwpfSBkYXRhLXRlc3RpZD17YGxldmVsLWZpbHRlci0ke2x9YH0+e2wgPT09IFwiYWxsXCIgPyB0KFwiYWMuYWxsTGV2ZWxzXCIpIDogdChgYWMuJHtsfWApfTwvYnV0dG9uPil9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljLWZpbHRlclwiIGRhdGEtdGVzdGlkPVwiYWNhZGVteS10b3BpYy1maWx0ZXJcIj48YnV0dG9uIGNsYXNzTmFtZT17Y2F0ID09PSBcImFsbFwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9IG9uQ2xpY2s9eygpID0+IHNldENhdChcImFsbFwiKX0gZGF0YS10ZXN0aWQ9XCJ0b3BpYy1maWx0ZXItYWxsXCI+e3QoXCJhYy5hbGxUb3BpY3NcIil9PC9idXR0b24+e2RhdGEuY2F0ZWdvcmllcy5tYXAoKGMpID0+IHsgY29uc3QgSWNvbiA9IElDT05TW2MuaWNvbl0gfHwgQm9va09wZW47IHJldHVybiA8YnV0dG9uIGtleT17Yy5pZH0gY2xhc3NOYW1lPXtjYXQgPT09IGMuaWQgPyBcImFjdGl2ZVwiIDogXCJcIn0gb25DbGljaz17KCkgPT4gc2V0Q2F0KGMuaWQpfSBkYXRhLXRlc3RpZD17YHRvcGljLWZpbHRlci0ke2MuaWR9YH0+PEljb24gc2l6ZT17MTV9IC8+IHt0KGBjYXQuJHtjLmlkfWApfTwvYnV0dG9uPjsgfSl9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNhZGVteS1ib2R5XCI+XG4gICAgICAgIDxEaXNjbGFpbWVyIC8+XG4gICAgICAgIHshZGF0YSA/IDxkaXYgY2xhc3NOYW1lPVwiYWNhZGVteS1sb2FkaW5nXCIgZGF0YS10ZXN0aWQ9XCJhY2FkZW15LWxvYWRpbmdcIiAvPiA6IGZpbHRlcmluZyA/IChcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ2aWRlby1yb3dcIiBkYXRhLXRlc3RpZD1cImFjYWRlbXktcmVzdWx0c1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctaGVhZFwiPjxoMz57dChcImFjLnJlc3VsdHNcIiwgeyBjb3VudDogcmVzdWx0cy5sZW5ndGggfSl9PC9oMz48L2Rpdj5cbiAgICAgICAgICAgIHtyZXN1bHRzLmxlbmd0aCA/IDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tZ3JpZFwiPntyZXN1bHRzLm1hcCgodikgPT4gPFZpZGVvQ2FyZCBrZXk9e3YuaWR9IHY9e3Z9IC8+KX08L2Rpdj4gOiA8cCBjbGFzc05hbWU9XCJyb3ctZW1wdHlcIiBkYXRhLXRlc3RpZD1cImFjYWRlbXktbm8tcmVzdWx0c1wiPnt0KFwiYWMubm9SZXN1bHRzXCIpfTwvcD59XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7aXNTaWduZWRJbiA/IDw+XG4gICAgICAgICAgICAgIHttZS5pbl9wcm9ncmVzcy5sZW5ndGggPiAwICYmIDxWaWRlb1JvdyB0aXRsZT17dChcImFjLmNvbnRpbnVlXCIpfSB2aWRlb3M9e3BpY2sobWUuaW5fcHJvZ3Jlc3MpfSB0ZXN0aWQ9XCJyb3ctY29udGludWVcIiAvPn1cbiAgICAgICAgICAgICAge21lLnNhdmVkLmxlbmd0aCA+IDAgJiYgPFZpZGVvUm93IHRpdGxlPXt0KFwiYWMuc2F2ZWRcIil9IHZpZGVvcz17cGljayhtZS5zYXZlZCl9IHRlc3RpZD1cInJvdy1zYXZlZFwiIC8+fVxuICAgICAgICAgICAgICB7bWUuY29tcGxldGVkLmxlbmd0aCA+IDAgJiYgPFZpZGVvUm93IHRpdGxlPXt0KFwiYWMuY29tcGxldGVkXCIpfSB2aWRlb3M9e3BpY2sobWUuY29tcGxldGVkKX0gdGVzdGlkPVwicm93LWNvbXBsZXRlZFwiIC8+fVxuICAgICAgICAgICAgPC8+IDogPHAgY2xhc3NOYW1lPVwidHJhY2stbm90ZVwiIGRhdGEtdGVzdGlkPVwiYWNhZGVteS1zaWduaW4tbm90ZVwiPjxMaW5rIHRvPVwiL3NpZ24taW5cIj57dChcImFjLnNpZ25JblRvVHJhY2tcIil9PC9MaW5rPjwvcD59XG4gICAgICAgICAgICA8UGF0aENhcmRzIHBhdGhzPXtkYXRhLnBhdGhzfSAvPlxuICAgICAgICAgICAgPFZpZGVvUm93IHRpdGxlPXt0KFwiYWMub3JpZ2luYWxzXCIpfSBub3RlPXt0KFwiYWMub3JpZ2luYWxzTm90ZVwiKX0gdmlkZW9zPXt2aWRlb3MuZmlsdGVyKCh2KSA9PiB2LnNvdXJjZSA9PT0gXCJvcmlnaW5hbFwiKX0gdGVzdGlkPVwicm93LW9yaWdpbmFsc1wiIC8+XG4gICAgICAgICAgICA8UGxheWxpc3RzIHBsYXlsaXN0cz17ZGF0YS5wbGF5bGlzdHN9IC8+XG4gICAgICAgICAgICA8VmlkZW9Sb3cgdGl0bGU9e3QoXCJhYy5yZWNlbnRcIil9IHZpZGVvcz17dmlkZW9zLmZpbHRlcigodikgPT4gdi5zb3VyY2UgPT09IFwieW91dHViZVwiKS5zbGljZSgwLCAxMCl9IHRlc3RpZD1cInJvdy1yZWNlbnRcIiAvPlxuICAgICAgICAgICAgPFZpZGVvUm93IHRpdGxlPXt0KFwiYWMucG9wdWxhclwiKX0gdmlkZW9zPXtbLi4udmlkZW9zXS5zb3J0KChhLCBiKSA9PiAoYi52aWV3cyB8fCAwKSAtIChhLnZpZXdzIHx8IDApKS5zbGljZSgwLCAxMCl9IHRlc3RpZD1cInJvdy1wb3B1bGFyXCIgLz5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInZpZGVvLXJvd1wiIGRhdGEtdGVzdGlkPVwidG9waWMtc2VjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctaGVhZFwiPjxoMz57dChcImFjLnRvcGljc1wiKX08L2gzPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcGljLWdyaWRcIj57ZGF0YS5jYXRlZ29yaWVzLm1hcCgoYykgPT4geyBjb25zdCBJY29uID0gSUNPTlNbYy5pY29uXSB8fCBCb29rT3BlbjsgY29uc3QgbiA9IHZpZGVvcy5maWx0ZXIoKHYpID0+IHYuY2F0ZWdvcnkgPT09IGMuaWQpLmxlbmd0aDsgcmV0dXJuIDxidXR0b24ga2V5PXtjLmlkfSBjbGFzc05hbWU9XCJ0b3BpYy10aWxlXCIgb25DbGljaz17KCkgPT4geyBzZXRDYXQoYy5pZCk7IHdpbmRvdy5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7IH19IGRhdGEtdGVzdGlkPXtgdG9waWMtdGlsZS0ke2MuaWR9YH0+PEljb24gc2l6ZT17MjJ9IC8+PHN0cm9uZz57dChgY2F0LiR7Yy5pZH1gKX08L3N0cm9uZz48c3Bhbj57dChcImFjLnZpZGVvQ291bnRcIiwgeyBuIH0pfTwvc3Bhbj48L2J1dHRvbj47IH0pfTwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPEV4cGVydHMgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sImZpbGUiOiIvYXBwL2Zyb250ZW5kL3NyYy9wYWdlcy9BY2FkZW15LnRzeCJ9