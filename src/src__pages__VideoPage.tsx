import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/VideoPage.tsx");const useEffect = __vite__cjsImport0_react["useEffect"]; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport10_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=a646c335";
import { Link, useParams } from "/node_modules/.vite/deps/react-router-dom.js?v=a646c335";
import { useQuery } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=a646c335";
import { ArrowLeft, Bookmark, BookmarkCheck, CalendarDays, CheckCircle2, Circle, Clock, ExternalLink, Sparkles } from "/src/lib/lucide-react.tsx";
import { apiGet } from "/src/lib/api.ts";
import { useAcademy } from "/src/lib/academy.tsx";
import { useI18n } from "/src/lib/i18n.tsx";
import { LevelChip, VideoCard, videoDesc, videoTitle } from "/src/components/academy/VideoCard.tsx";
import { OriginalPlayer } from "/src/components/academy/OriginalPlayer.tsx";
import { Disclaimer } from "/src/pages/Academy.tsx";
var _jsxFileName = "/app/frontend/src/pages/VideoPage.tsx";
import __vite__cjsImport10_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
var _s = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$();
function YouTubePlayer({ v }) {
	_s();
	const { t } = useI18n();
	if (!v.embeddable) return /* @__PURE__ */ _jsxDEV("div", {
		className: "yt-fallback",
		"data-testid": "youtube-fallback",
		"x-file-name": "VideoPage",
		"x-line-number": "15",
		"x-column": "28",
		"x-component": "div",
		"x-id": "VideoPage_15_28",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("img", {
			src: v.thumbnail,
			alt: "",
			"x-file-name": "VideoPage",
			"x-line-number": "15",
			"x-column": "88",
			"x-component": "img",
			"x-id": "VideoPage_15_88",
			"x-dynamic": "false"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 20,
			columnNumber: 205
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			"x-file-name": "VideoPage",
			"x-line-number": "15",
			"x-column": "120",
			"x-component": "div",
			"x-id": "VideoPage_15_120",
			"x-dynamic": "false",
			children: [/* @__PURE__ */ _jsxDEV("p", {
				"x-file-name": "VideoPage",
				"x-line-number": "15",
				"x-column": "125",
				"x-component": "p",
				"x-id": "VideoPage_15_125",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: t("ac.unavailable")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 476
			}, this), /* @__PURE__ */ _jsxDEV("a", {
				className: "primary-button",
				href: v.watch_url,
				target: "_blank",
				rel: "noopener noreferrer",
				"x-file-name": "VideoPage",
				"x-line-number": "15",
				"x-column": "153",
				"x-component": "a",
				"x-id": "VideoPage_15_153",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: [
					t("ac.openYoutube"),
					" ",
					/* @__PURE__ */ _jsxDEV(ExternalLink, {
						size: 16,
						"x-file-name": "VideoPage",
						"x-line-number": "15",
						"x-column": "266",
						"x-component": "ExternalLink",
						"x-id": "VideoPage_15_266",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 20,
						columnNumber: 949
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 670
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 20,
			columnNumber: 353
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 20,
		columnNumber: 29
	}, this);
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "yt-frame",
		"x-file-name": "VideoPage",
		"x-line-number": "16",
		"x-column": "9",
		"x-component": "div",
		"x-id": "VideoPage_16_9",
		"x-dynamic": "false",
		children: /* @__PURE__ */ _jsxDEV("iframe", {
			src: v.embed_url,
			title: v.title,
			allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
			referrerPolicy: "strict-origin-when-cross-origin",
			allowFullScreen: true,
			loading: "lazy",
			"data-testid": "youtube-embed",
			"x-file-name": "VideoPage",
			"x-line-number": "16",
			"x-column": "35",
			"x-component": "iframe",
			"x-id": "VideoPage_16_35",
			"x-dynamic": "false"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 21,
			columnNumber: 150
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 21,
		columnNumber: 10
	}, this);
}
_s(YouTubePlayer, "i9WSJarzxoSeCDSFKFFQ8fEj8w0=", false, function() {
	return [useI18n];
});
_c = YouTubePlayer;
function Actions({ v }) {
	_s2();
	const { t } = useI18n();
	const { me, toggle, isSignedIn } = useAcademy();
	const [busy, setBusy] = useState(false);
	const done = me.completed.includes(v.id);
	const saved = me.saved.includes(v.id);
	const act = async (action, value) => {
		setBusy(true);
		try {
			await toggle(v.id, action, value);
		} finally {
			setBusy(false);
		}
	};
	if (!isSignedIn) return /* @__PURE__ */ _jsxDEV("p", {
		className: "track-note",
		"data-testid": "video-signin-note",
		"x-file-name": "VideoPage",
		"x-line-number": "26",
		"x-column": "26",
		"x-component": "p",
		"x-id": "VideoPage_26_26",
		"x-dynamic": "false",
		children: /* @__PURE__ */ _jsxDEV(Link, {
			to: "/sign-in",
			children: t("ac.signInToTrack")
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 47,
			columnNumber: 199
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 47,
		columnNumber: 27
	}, this);
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "video-actions",
		"x-file-name": "VideoPage",
		"x-line-number": "28",
		"x-column": "4",
		"x-component": "div",
		"x-id": "VideoPage_28_4",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("button", {
			className: `primary-button${done ? " done" : ""}`,
			disabled: busy,
			onClick: () => void act("complete", !done),
			"data-testid": "video-complete-button",
			"x-file-name": "VideoPage",
			"x-line-number": "29",
			"x-column": "6",
			"x-component": "button",
			"x-id": "VideoPage_29_6",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: [
				done ? /* @__PURE__ */ _jsxDEV(CheckCircle2, {
					size: 17,
					"x-file-name": "VideoPage",
					"x-line-number": "29",
					"x-column": "169",
					"x-component": "CheckCircle2",
					"x-id": "VideoPage_29_169",
					"x-dynamic": "false"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 337
				}, this) : /* @__PURE__ */ _jsxDEV(Circle, {
					size: 17,
					"x-file-name": "VideoPage",
					"x-line-number": "29",
					"x-column": "198",
					"x-component": "Circle",
					"x-id": "VideoPage_29_198",
					"x-dynamic": "false"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 493
				}, this),
				" ",
				done ? t("ac.completedBadge") : t("ac.markComplete")
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 49,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("button", {
			className: `outline-button${saved ? " on" : ""}`,
			disabled: busy,
			onClick: () => void act("save", !saved),
			"data-testid": "video-save-button",
			"x-file-name": "VideoPage",
			"x-line-number": "30",
			"x-column": "6",
			"x-component": "button",
			"x-id": "VideoPage_30_6",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: [
				saved ? /* @__PURE__ */ _jsxDEV(BookmarkCheck, {
					size: 17,
					"x-file-name": "VideoPage",
					"x-line-number": "30",
					"x-column": "162",
					"x-component": "BookmarkCheck",
					"x-id": "VideoPage_30_162",
					"x-dynamic": "false"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 330
				}, this) : /* @__PURE__ */ _jsxDEV(Bookmark, {
					size: 17,
					"x-file-name": "VideoPage",
					"x-line-number": "30",
					"x-column": "192",
					"x-component": "Bookmark",
					"x-id": "VideoPage_30_192",
					"x-dynamic": "false"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 488
				}, this),
				" ",
				saved ? t("ac.savedBadge") : t("ac.saveLater")
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 50,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 48,
		columnNumber: 10
	}, this);
}
_s2(Actions, "iM3ibAAhOq13TRvCRLsigCtEjdM=", false, function() {
	return [useI18n, useAcademy];
});
_c2 = Actions;
export default function VideoPage() {
	_s3();
	const { id } = useParams();
	const { t } = useI18n();
	const { start } = useAcademy();
	const { data, isError, isLoading } = useQuery({
		queryKey: ["video", id],
		queryFn: () => apiGet(`/academy/videos/${id}`),
		retry: false
	});
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [id]);
	useEffect(() => {
		if (data?.video) start(data.video.id);
	}, [data?.video, start]);
	if (isError) return /* @__PURE__ */ _jsxDEV("div", {
		className: "section",
		"x-file-name": "VideoPage",
		"x-line-number": "42",
		"x-column": "22",
		"x-component": "div",
		"x-id": "VideoPage_42_22",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("p", {
			"data-testid": "video-not-found",
			"x-file-name": "VideoPage",
			"x-line-number": "42",
			"x-column": "47",
			"x-component": "p",
			"x-id": "VideoPage_42_47",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: t("ac.empty")
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 81,
			columnNumber: 164
		}, this), /* @__PURE__ */ _jsxDEV(Link, {
			className: "text-link",
			to: "/academy",
			children: t("ac.back")
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 81,
			columnNumber: 380
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 81,
		columnNumber: 23
	}, this);
	if (isLoading || !data) return /* @__PURE__ */ _jsxDEV("div", {
		className: "section",
		"x-file-name": "VideoPage",
		"x-line-number": "43",
		"x-column": "33",
		"x-component": "div",
		"x-id": "VideoPage_43_33",
		"x-dynamic": "false",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "academy-loading",
			"x-file-name": "VideoPage",
			"x-line-number": "43",
			"x-column": "58",
			"x-component": "div",
			"x-id": "VideoPage_43_58",
			"x-dynamic": "false"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 82,
			columnNumber: 175
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 82,
		columnNumber: 34
	}, this);
	const v = data.video;
	const original = v.source === "original";
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "watch section",
		"data-testid": "video-page",
		"x-file-name": "VideoPage",
		"x-line-number": "47",
		"x-column": "4",
		"x-component": "div",
		"x-id": "VideoPage_47_4",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV(Link, {
			className: "back-link",
			to: "/academy",
			"data-testid": "video-back-link",
			children: [
				/* @__PURE__ */ _jsxDEV(ArrowLeft, { size: 16 }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 79
				}, this),
				" ",
				t("ac.back")
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 86,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "watch-layout",
			"x-file-name": "VideoPage",
			"x-line-number": "49",
			"x-column": "6",
			"x-component": "div",
			"x-id": "VideoPage_49_6",
			"x-dynamic": "false",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				"x-file-name": "VideoPage",
				"x-line-number": "50",
				"x-column": "8",
				"x-component": "div",
				"x-id": "VideoPage_50_8",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: [
					original ? /* @__PURE__ */ _jsxDEV(OriginalPlayer, {
						video: v,
						"x-file-name": "VideoPage",
						"x-line-number": "51",
						"x-column": "22",
						"x-component": "OriginalPlayer",
						"x-id": "VideoPage_51_22",
						"x-dynamic": "true"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 89,
						columnNumber: 23
					}, this) : /* @__PURE__ */ _jsxDEV(YouTubePlayer, {
						v,
						"x-file-name": "VideoPage",
						"x-line-number": "51",
						"x-column": "53",
						"x-component": "YouTubePlayer",
						"x-id": "VideoPage_51_53",
						"x-dynamic": "true"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 89,
						columnNumber: 180
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "watch-info",
						"x-file-name": "VideoPage",
						"x-line-number": "52",
						"x-column": "10",
						"x-component": "div",
						"x-id": "VideoPage_52_10",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "chips",
								"x-file-name": "VideoPage",
								"x-line-number": "53",
								"x-column": "12",
								"x-component": "div",
								"x-id": "VideoPage_53_12",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: [
									/* @__PURE__ */ _jsxDEV(LevelChip, {
										level: v.difficulty,
										"x-file-name": "VideoPage",
										"x-line-number": "53",
										"x-column": "35",
										"x-component": "LevelChip",
										"x-id": "VideoPage_53_35",
										"x-dynamic": "true"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 91,
										columnNumber: 202
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										className: "cat-chip",
										"x-file-name": "VideoPage",
										"x-line-number": "53",
										"x-column": "69",
										"x-component": "span",
										"x-id": "VideoPage_53_69",
										"x-dynamic": "true",
										"x-source-type": "computed",
										"x-source-editable": "false",
										children: t(`cat.${v.category}`)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 91,
										columnNumber: 357
									}, this),
									original && /* @__PURE__ */ _jsxDEV("span", {
										className: "orig-chip",
										"x-file-name": "VideoPage",
										"x-line-number": "53",
										"x-column": "140",
										"x-component": "span",
										"x-id": "VideoPage_53_140",
										"x-dynamic": "true",
										"x-source-type": "computed",
										"x-source-editable": "false",
										children: [
											/* @__PURE__ */ _jsxDEV(Sparkles, {
												size: 12,
												"x-file-name": "VideoPage",
												"x-line-number": "53",
												"x-column": "168",
												"x-component": "Sparkles",
												"x-id": "VideoPage_53_168",
												"x-dynamic": "false"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 91,
												columnNumber: 792
											}, this),
											" ",
											t("ac.original")
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 91,
										columnNumber: 595
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 91,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("h1", {
								"data-testid": "video-title",
								"x-file-name": "VideoPage",
								"x-line-number": "54",
								"x-column": "12",
								"x-component": "h1",
								"x-id": "VideoPage_54_12",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: videoTitle(v, t)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 92,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "watch-meta",
								"x-file-name": "VideoPage",
								"x-line-number": "55",
								"x-column": "12",
								"x-component": "div",
								"x-id": "VideoPage_55_12",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: [
									/* @__PURE__ */ _jsxDEV("span", {
										"x-file-name": "VideoPage",
										"x-line-number": "56",
										"x-column": "14",
										"x-component": "span",
										"x-id": "VideoPage_56_14",
										"x-dynamic": "true",
										"x-source-type": "computed",
										"x-source-editable": "false",
										children: v.channel_url ? /* @__PURE__ */ _jsxDEV("a", {
											href: v.channel_url,
											target: "_blank",
											rel: "noopener noreferrer",
											"data-testid": "video-channel-link",
											"x-file-name": "VideoPage",
											"x-line-number": "56",
											"x-column": "37",
											"x-component": "a",
											"x-id": "VideoPage_56_37",
											"x-dynamic": "true",
											"x-source-type": "unknown",
											"x-source-var": "v",
											"x-source-path": "channel",
											"x-source-editable": "false",
											children: v.channel
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 94,
											columnNumber: 205
										}, this) : v.channel
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 94,
										columnNumber: 15
									}, this),
									v.duration && /* @__PURE__ */ _jsxDEV("span", {
										"x-file-name": "VideoPage",
										"x-line-number": "57",
										"x-column": "29",
										"x-component": "span",
										"x-id": "VideoPage_57_29",
										"x-dynamic": "true",
										"x-source-type": "unknown",
										"x-source-var": "v",
										"x-source-path": "duration",
										"x-source-editable": "false",
										children: [
											/* @__PURE__ */ _jsxDEV(Clock, {
												size: 14,
												"x-file-name": "VideoPage",
												"x-line-number": "57",
												"x-column": "35",
												"x-component": "Clock",
												"x-id": "VideoPage_57_35",
												"x-dynamic": "false"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 95,
												columnNumber: 244
											}, this),
											" ",
											v.duration
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 95,
										columnNumber: 30
									}, this),
									v.published_on && /* @__PURE__ */ _jsxDEV("span", {
										"x-file-name": "VideoPage",
										"x-line-number": "58",
										"x-column": "33",
										"x-component": "span",
										"x-id": "VideoPage_58_33",
										"x-dynamic": "true",
										"x-source-type": "computed",
										"x-source-editable": "false",
										children: [
											/* @__PURE__ */ _jsxDEV(CalendarDays, {
												size: 14,
												"x-file-name": "VideoPage",
												"x-line-number": "58",
												"x-column": "39",
												"x-component": "CalendarDays",
												"x-id": "VideoPage_58_39",
												"x-dynamic": "false"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 96,
												columnNumber: 207
											}, this),
											" ",
											t("ac.publishedOn"),
											" ",
											v.published_on
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 96,
										columnNumber: 34
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 93,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "watch-desc",
								"x-file-name": "VideoPage",
								"x-line-number": "60",
								"x-column": "12",
								"x-component": "p",
								"x-id": "VideoPage_60_12",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: videoDesc(v, t)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 98,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV(Actions, {
								v,
								"x-file-name": "VideoPage",
								"x-line-number": "61",
								"x-column": "12",
								"x-component": "Actions",
								"x-id": "VideoPage_61_12",
								"x-dynamic": "true"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 99,
								columnNumber: 13
							}, this),
							!original && /* @__PURE__ */ _jsxDEV("a", {
								className: "text-link",
								href: v.watch_url,
								target: "_blank",
								rel: "noopener noreferrer",
								"data-testid": "video-open-youtube",
								"x-file-name": "VideoPage",
								"x-line-number": "62",
								"x-column": "26",
								"x-component": "a",
								"x-id": "VideoPage_62_26",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: [
									t("ac.openYoutube"),
									" ",
									/* @__PURE__ */ _jsxDEV(ExternalLink, {
										size: 14,
										"x-file-name": "VideoPage",
										"x-line-number": "62",
										"x-column": "167",
										"x-component": "ExternalLink",
										"x-id": "VideoPage_62_167",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 100,
										columnNumber: 332
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 100,
								columnNumber: 27
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 90,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV(Disclaimer, {
						"x-file-name": "VideoPage",
						"x-line-number": "64",
						"x-column": "10",
						"x-component": "Disclaimer",
						"x-id": "VideoPage_64_10",
						"x-dynamic": "true"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 102,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 88,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("aside", {
				className: "related",
				"data-testid": "related-videos",
				"x-file-name": "VideoPage",
				"x-line-number": "66",
				"x-column": "8",
				"x-component": "aside",
				"x-id": "VideoPage_66_8",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: [/* @__PURE__ */ _jsxDEV("h3", {
					"x-file-name": "VideoPage",
					"x-line-number": "66",
					"x-column": "64",
					"x-component": "h3",
					"x-id": "VideoPage_66_64",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("ac.related")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 231
				}, this), data.related.length ? data.related.map((r) => /* @__PURE__ */ _jsxDEV(VideoCard, {
					v: r,
					compact: true,
					"x-file-name": "VideoPage",
					"x-line-number": "66",
					"x-column": "137",
					"x-component": "VideoCard",
					"x-id": "VideoPage_66_137",
					"x-dynamic": "true",
					"x-source-type": "external",
					"x-source-var": "data",
					"x-source-editable": "false",
					"x-array-var": "data",
					"x-array-item-param": "r"
				}, r.id, false, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 467
				}, this)) : /* @__PURE__ */ _jsxDEV("p", {
					className: "row-empty",
					"x-file-name": "VideoPage",
					"x-line-number": "66",
					"x-column": "179",
					"x-component": "p",
					"x-id": "VideoPage_66_179",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("ac.empty")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 745
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 104,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 87,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 85,
		columnNumber: 10
	}, this);
}
_s3(VideoPage, "jIjTJRPkawFxLlyCznhAh5I6+Ig=", false, function() {
	return [
		useParams,
		useI18n,
		useAcademy,
		useQuery
	];
});
_c3 = VideoPage;
var _c, _c2, _c3;
$RefreshReg$(_c, "YouTubePlayer");
$RefreshReg$(_c2, "Actions");
$RefreshReg$(_c3, "VideoPage");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/VideoPage.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/pages/VideoPage.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/pages/VideoPage.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/pages/VideoPage.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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QUE7VUFBQTtVQUFBO1VBQUE7U0FBQTs7Ozs7UUFBTTs7Ozs7O01BQ3JMOzs7Ozs7S0FDTCx3QkFBQyxZQUFEO01BQVc7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO0tBQUE7Ozs7O0lBQ1I7Ozs7O2FBQ0wsd0JBQUMsU0FBRDtJQUFPLFdBQVU7SUFBVSxlQUFZO0lBQWdCO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7Y0FBdkQsQ0FBd0Qsd0JBQUMsTUFBRDtLQUFHO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7ZUFBRUEsRUFBRSxZQUFZO0lBQU07Ozs7Y0FBRXNCLEtBQUtpQixRQUFRQyxTQUFTbEIsS0FBS2lCLFFBQVFFLEtBQUtDLE1BQU0sd0JBQUMsV0FBRDtLQUFzQixHQUFHQTtLQUFHO0tBQU87S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtJQUFBLEdBQW5CQSxFQUFFM0I7Ozs7V0FBaUIsQ0FBRyxJQUFJLHdCQUFDLEtBQUQ7S0FBRyxXQUFVO0tBQVc7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtlQUFFZixFQUFFLFVBQVU7SUFBSzs7OztZQUFTOzs7OztXQUM1Tjs7Ozs7VUFDRjs7Ozs7O0FBRVQiLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJ1c2VQYXJhbXMiLCJ1c2VRdWVyeSIsIkFycm93TGVmdCIsIkJvb2ttYXJrIiwiQm9va21hcmtDaGVjayIsIkNhbGVuZGFyRGF5cyIsIkNoZWNrQ2lyY2xlMiIsIkNpcmNsZSIsIkNsb2NrIiwiRXh0ZXJuYWxMaW5rIiwiU3BhcmtsZXMiLCJhcGlHZXQiLCJ1c2VBY2FkZW15IiwidXNlSTE4biIsIkxldmVsQ2hpcCIsIlZpZGVvQ2FyZCIsInZpZGVvRGVzYyIsInZpZGVvVGl0bGUiLCJPcmlnaW5hbFBsYXllciIsIkRpc2NsYWltZXIiLCJZb3VUdWJlUGxheWVyIiwidiIsInQiLCJlbWJlZGRhYmxlIiwidGh1bWJuYWlsIiwid2F0Y2hfdXJsIiwiZW1iZWRfdXJsIiwidGl0bGUiLCJBY3Rpb25zIiwibWUiLCJ0b2dnbGUiLCJpc1NpZ25lZEluIiwiYnVzeSIsInNldEJ1c3kiLCJkb25lIiwiY29tcGxldGVkIiwiaW5jbHVkZXMiLCJpZCIsInNhdmVkIiwiYWN0IiwiYWN0aW9uIiwidmFsdWUiLCJWaWRlb1BhZ2UiLCJzdGFydCIsImRhdGEiLCJpc0Vycm9yIiwiaXNMb2FkaW5nIiwicXVlcnlLZXkiLCJxdWVyeUZuIiwicmV0cnkiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsInZpZGVvIiwib3JpZ2luYWwiLCJzb3VyY2UiLCJkaWZmaWN1bHR5IiwiY2F0ZWdvcnkiLCJjaGFubmVsX3VybCIsImNoYW5uZWwiLCJkdXJhdGlvbiIsInB1Ymxpc2hlZF9vbiIsInJlbGF0ZWQiLCJsZW5ndGgiLCJtYXAiLCJyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlZpZGVvUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluaywgdXNlUGFyYW1zIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgQXJyb3dMZWZ0LCBCb29rbWFyaywgQm9va21hcmtDaGVjaywgQ2FsZW5kYXJEYXlzLCBDaGVja0NpcmNsZTIsIENpcmNsZSwgQ2xvY2ssIEV4dGVybmFsTGluaywgU3BhcmtsZXMgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBhcGlHZXQgfSBmcm9tIFwiQC9saWIvYXBpXCI7XG5pbXBvcnQgeyB1c2VBY2FkZW15IH0gZnJvbSBcIkAvbGliL2FjYWRlbXlcIjtcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tIFwiQC9saWIvaTE4blwiO1xuaW1wb3J0IHR5cGUgeyBWaWRlb0RvYyB9IGZyb20gXCJAL2xpYi90eXBlc1wiO1xuaW1wb3J0IHsgTGV2ZWxDaGlwLCBWaWRlb0NhcmQsIHZpZGVvRGVzYywgdmlkZW9UaXRsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvYWNhZGVteS9WaWRlb0NhcmRcIjtcbmltcG9ydCB7IE9yaWdpbmFsUGxheWVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9hY2FkZW15L09yaWdpbmFsUGxheWVyXCI7XG5pbXBvcnQgeyBEaXNjbGFpbWVyIH0gZnJvbSBcIkAvcGFnZXMvQWNhZGVteVwiO1xuXG5mdW5jdGlvbiBZb3VUdWJlUGxheWVyKHsgdiB9OiB7IHY6IFZpZGVvRG9jIH0pIHtcbiAgY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG4gIGlmICghdi5lbWJlZGRhYmxlKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ5dC1mYWxsYmFja1wiIGRhdGEtdGVzdGlkPVwieW91dHViZS1mYWxsYmFja1wiPjxpbWcgc3JjPXt2LnRodW1ibmFpbH0gYWx0PVwiXCIgLz48ZGl2PjxwPnt0KFwiYWMudW5hdmFpbGFibGVcIil9PC9wPjxhIGNsYXNzTmFtZT1cInByaW1hcnktYnV0dG9uXCIgaHJlZj17di53YXRjaF91cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj57dChcImFjLm9wZW5Zb3V0dWJlXCIpfSA8RXh0ZXJuYWxMaW5rIHNpemU9ezE2fSAvPjwvYT48L2Rpdj48L2Rpdj47XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInl0LWZyYW1lXCI+PGlmcmFtZSBzcmM9e3YuZW1iZWRfdXJsfSB0aXRsZT17di50aXRsZX0gYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIHJlZmVycmVyUG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIGFsbG93RnVsbFNjcmVlbiBsb2FkaW5nPVwibGF6eVwiIGRhdGEtdGVzdGlkPVwieW91dHViZS1lbWJlZFwiIC8+PC9kaXY+O1xufVxuXG5mdW5jdGlvbiBBY3Rpb25zKHsgdiB9OiB7IHY6IFZpZGVvRG9jIH0pIHtcbiAgY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG4gIGNvbnN0IHsgbWUsIHRvZ2dsZSwgaXNTaWduZWRJbiB9ID0gdXNlQWNhZGVteSgpO1xuICBjb25zdCBbYnVzeSwgc2V0QnVzeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGRvbmUgPSBtZS5jb21wbGV0ZWQuaW5jbHVkZXModi5pZCk7XG4gIGNvbnN0IHNhdmVkID0gbWUuc2F2ZWQuaW5jbHVkZXModi5pZCk7XG4gIGNvbnN0IGFjdCA9IGFzeW5jIChhY3Rpb246IFwiY29tcGxldGVcIiB8IFwic2F2ZVwiLCB2YWx1ZTogYm9vbGVhbikgPT4geyBzZXRCdXN5KHRydWUpOyB0cnkgeyBhd2FpdCB0b2dnbGUodi5pZCwgYWN0aW9uLCB2YWx1ZSk7IH0gZmluYWxseSB7IHNldEJ1c3koZmFsc2UpOyB9IH07XG4gIGlmICghaXNTaWduZWRJbikgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRyYWNrLW5vdGVcIiBkYXRhLXRlc3RpZD1cInZpZGVvLXNpZ25pbi1ub3RlXCI+PExpbmsgdG89XCIvc2lnbi1pblwiPnt0KFwiYWMuc2lnbkluVG9UcmFja1wiKX08L0xpbms+PC9wPjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWFjdGlvbnNcIj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgcHJpbWFyeS1idXR0b24ke2RvbmUgPyBcIiBkb25lXCIgOiBcIlwifWB9IGRpc2FibGVkPXtidXN5fSBvbkNsaWNrPXsoKSA9PiB2b2lkIGFjdChcImNvbXBsZXRlXCIsICFkb25lKX0gZGF0YS10ZXN0aWQ9XCJ2aWRlby1jb21wbGV0ZS1idXR0b25cIj57ZG9uZSA/IDxDaGVja0NpcmNsZTIgc2l6ZT17MTd9IC8+IDogPENpcmNsZSBzaXplPXsxN30gLz59IHtkb25lID8gdChcImFjLmNvbXBsZXRlZEJhZGdlXCIpIDogdChcImFjLm1hcmtDb21wbGV0ZVwiKX08L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgb3V0bGluZS1idXR0b24ke3NhdmVkID8gXCIgb25cIiA6IFwiXCJ9YH0gZGlzYWJsZWQ9e2J1c3l9IG9uQ2xpY2s9eygpID0+IHZvaWQgYWN0KFwic2F2ZVwiLCAhc2F2ZWQpfSBkYXRhLXRlc3RpZD1cInZpZGVvLXNhdmUtYnV0dG9uXCI+e3NhdmVkID8gPEJvb2ttYXJrQ2hlY2sgc2l6ZT17MTd9IC8+IDogPEJvb2ttYXJrIHNpemU9ezE3fSAvPn0ge3NhdmVkID8gdChcImFjLnNhdmVkQmFkZ2VcIikgOiB0KFwiYWMuc2F2ZUxhdGVyXCIpfTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlb1BhZ2UoKSB7XG4gIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xuICBjb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcbiAgY29uc3QgeyBzdGFydCB9ID0gdXNlQWNhZGVteSgpO1xuICBjb25zdCB7IGRhdGEsIGlzRXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlUXVlcnkoeyBxdWVyeUtleTogW1widmlkZW9cIiwgaWRdLCBxdWVyeUZuOiAoKSA9PiBhcGlHZXQ8eyB2aWRlbzogVmlkZW9Eb2M7IHJlbGF0ZWQ6IFZpZGVvRG9jW10gfT4oYC9hY2FkZW15L3ZpZGVvcy8ke2lkfWApLCByZXRyeTogZmFsc2UgfSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7IHdpbmRvdy5zY3JvbGxUbygwLCAwKTsgfSwgW2lkXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7IGlmIChkYXRhPy52aWRlbykgc3RhcnQoZGF0YS52aWRlby5pZCk7IH0sIFtkYXRhPy52aWRlbywgc3RhcnRdKTtcbiAgaWYgKGlzRXJyb3IpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj48cCBkYXRhLXRlc3RpZD1cInZpZGVvLW5vdC1mb3VuZFwiPnt0KFwiYWMuZW1wdHlcIil9PC9wPjxMaW5rIGNsYXNzTmFtZT1cInRleHQtbGlua1wiIHRvPVwiL2FjYWRlbXlcIj57dChcImFjLmJhY2tcIil9PC9MaW5rPjwvZGl2PjtcbiAgaWYgKGlzTG9hZGluZyB8fCAhZGF0YSkgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPjxkaXYgY2xhc3NOYW1lPVwiYWNhZGVteS1sb2FkaW5nXCIgLz48L2Rpdj47XG4gIGNvbnN0IHYgPSBkYXRhLnZpZGVvO1xuICBjb25zdCBvcmlnaW5hbCA9IHYuc291cmNlID09PSBcIm9yaWdpbmFsXCI7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3YXRjaCBzZWN0aW9uXCIgZGF0YS10ZXN0aWQ9XCJ2aWRlby1wYWdlXCI+XG4gICAgICA8TGluayBjbGFzc05hbWU9XCJiYWNrLWxpbmtcIiB0bz1cIi9hY2FkZW15XCIgZGF0YS10ZXN0aWQ9XCJ2aWRlby1iYWNrLWxpbmtcIj48QXJyb3dMZWZ0IHNpemU9ezE2fSAvPiB7dChcImFjLmJhY2tcIil9PC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXRjaC1sYXlvdXRcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7b3JpZ2luYWwgPyA8T3JpZ2luYWxQbGF5ZXIgdmlkZW89e3Z9IC8+IDogPFlvdVR1YmVQbGF5ZXIgdj17dn0gLz59XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YXRjaC1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaXBzXCI+PExldmVsQ2hpcCBsZXZlbD17di5kaWZmaWN1bHR5fSAvPjxzcGFuIGNsYXNzTmFtZT1cImNhdC1jaGlwXCI+e3QoYGNhdC4ke3YuY2F0ZWdvcnl9YCl9PC9zcGFuPntvcmlnaW5hbCAmJiA8c3BhbiBjbGFzc05hbWU9XCJvcmlnLWNoaXBcIj48U3BhcmtsZXMgc2l6ZT17MTJ9IC8+IHt0KFwiYWMub3JpZ2luYWxcIil9PC9zcGFuPn08L2Rpdj5cbiAgICAgICAgICAgIDxoMSBkYXRhLXRlc3RpZD1cInZpZGVvLXRpdGxlXCI+e3ZpZGVvVGl0bGUodiwgdCl9PC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2F0Y2gtbWV0YVwiPlxuICAgICAgICAgICAgICA8c3Bhbj57di5jaGFubmVsX3VybCA/IDxhIGhyZWY9e3YuY2hhbm5lbF91cmx9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBkYXRhLXRlc3RpZD1cInZpZGVvLWNoYW5uZWwtbGlua1wiPnt2LmNoYW5uZWx9PC9hPiA6IHYuY2hhbm5lbH08L3NwYW4+XG4gICAgICAgICAgICAgIHt2LmR1cmF0aW9uICYmIDxzcGFuPjxDbG9jayBzaXplPXsxNH0gLz4ge3YuZHVyYXRpb259PC9zcGFuPn1cbiAgICAgICAgICAgICAge3YucHVibGlzaGVkX29uICYmIDxzcGFuPjxDYWxlbmRhckRheXMgc2l6ZT17MTR9IC8+IHt0KFwiYWMucHVibGlzaGVkT25cIil9IHt2LnB1Ymxpc2hlZF9vbn08L3NwYW4+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3YXRjaC1kZXNjXCI+e3ZpZGVvRGVzYyh2LCB0KX08L3A+XG4gICAgICAgICAgICA8QWN0aW9ucyB2PXt2fSAvPlxuICAgICAgICAgICAgeyFvcmlnaW5hbCAmJiA8YSBjbGFzc05hbWU9XCJ0ZXh0LWxpbmtcIiBocmVmPXt2LndhdGNoX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGRhdGEtdGVzdGlkPVwidmlkZW8tb3Blbi15b3V0dWJlXCI+e3QoXCJhYy5vcGVuWW91dHViZVwiKX0gPEV4dGVybmFsTGluayBzaXplPXsxNH0gLz48L2E+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxEaXNjbGFpbWVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwicmVsYXRlZFwiIGRhdGEtdGVzdGlkPVwicmVsYXRlZC12aWRlb3NcIj48aDM+e3QoXCJhYy5yZWxhdGVkXCIpfTwvaDM+e2RhdGEucmVsYXRlZC5sZW5ndGggPyBkYXRhLnJlbGF0ZWQubWFwKChyKSA9PiA8VmlkZW9DYXJkIGtleT17ci5pZH0gdj17cn0gY29tcGFjdCAvPikgOiA8cCBjbGFzc05hbWU9XCJyb3ctZW1wdHlcIj57dChcImFjLmVtcHR5XCIpfTwvcD59PC9hc2lkZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sImZpbGUiOiIvYXBwL2Zyb250ZW5kL3NyYy9wYWdlcy9WaWRlb1BhZ2UudHN4In0=