import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Home.tsx");const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport12_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport12_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=a646c335";
import { Link, useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=a646c335";
import { useQuery } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=a646c335";
import { ArrowRight, BookOpen, Calculator, Check, ChevronRight, CircleHelp, Landmark, ShieldCheck, TrendingUp } from "/src/lib/lucide-react.tsx";
import { apiGet, apiPost } from "/src/lib/api.ts";
import { useAuth } from "/src/lib/auth.tsx";
import { useI18n } from "/src/lib/i18n.tsx";
import { Tools } from "/src/components/Tools.tsx";
import { Simulator } from "/src/components/Simulator.tsx";
import { Assistant } from "/src/components/Assistant.tsx";
import { HeroParticles } from "/src/components/HeroParticles.tsx";
import { useScrollReveal } from "/src/lib/useScrollReveal.ts";
var _jsxFileName = "/app/frontend/src/pages/Home.tsx";
import __vite__cjsImport12_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
var _s = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$(), _s5 = $RefreshSig$(), _s6 = $RefreshSig$();
function Hero() {
	_s();
	const { t } = useI18n();
	return /* @__PURE__ */ _jsxDEV("section", {
		className: "hero",
		"x-file-name": "Home",
		"x-line-number": "18",
		"x-column": "4",
		"x-component": "section",
		"x-id": "Home_18_4",
		"x-dynamic": "false",
		children: [
			/* @__PURE__ */ _jsxDEV(HeroParticles, {
				"x-file-name": "Home",
				"x-line-number": "19",
				"x-column": "6",
				"x-component": "HeroParticles",
				"x-id": "Home_19_6",
				"x-dynamic": "true"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "hero-content",
				"x-file-name": "Home",
				"x-line-number": "20",
				"x-column": "6",
				"x-component": "div",
				"x-id": "Home_20_6",
				"x-dynamic": "false",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "eyebrow",
						"x-file-name": "Home",
						"x-line-number": "21",
						"x-column": "8",
						"x-component": "div",
						"x-id": "Home_21_8",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: [
							/* @__PURE__ */ _jsxDEV("span", {
								className: "pulse",
								"x-file-name": "Home",
								"x-line-number": "21",
								"x-column": "33",
								"x-component": "span",
								"x-id": "Home_21_33",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 21,
								columnNumber: 188
							}, this),
							" ",
							/* @__PURE__ */ _jsxDEV("span", {
								"data-ve-dynamic": "true",
								"x-excluded": "true",
								style: { display: "contents" },
								"x-file-name": "Home",
								"x-line-number": "21",
								"x-column": "8",
								"x-component": "div",
								"x-id": "Home_21_8_expr2",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: t("hero.trusted")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 21,
								columnNumber: 322
							}, this),
							" · ",
							/* @__PURE__ */ _jsxDEV("span", {
								"data-ve-dynamic": "true",
								"x-excluded": "true",
								style: { display: "contents" },
								"x-file-name": "Home",
								"x-line-number": "21",
								"x-column": "8",
								"x-component": "div",
								"x-id": "Home_21_8_expr4",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: t("hero.languages")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 23,
								columnNumber: 201
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 21,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("h1", {
						"x-file-name": "Home",
						"x-line-number": "22",
						"x-column": "8",
						"x-component": "h1",
						"x-id": "Home_22_8",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t("hero.title")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 26,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("p", {
						"x-file-name": "Home",
						"x-line-number": "23",
						"x-column": "8",
						"x-component": "p",
						"x-id": "Home_23_8",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t("hero.subtitle")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "hero-actions",
						"x-file-name": "Home",
						"x-line-number": "24",
						"x-column": "8",
						"x-component": "div",
						"x-id": "Home_24_8",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("a", {
							href: "#learn",
							className: "primary-button",
							"data-testid": "start-learning-button",
							"x-file-name": "Home",
							"x-line-number": "24",
							"x-column": "38",
							"x-component": "a",
							"x-id": "Home_24_38",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: [
								t("hero.start"),
								" ",
								/* @__PURE__ */ _jsxDEV(ArrowRight, { size: 18 }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 28,
									columnNumber: 395
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 28,
							columnNumber: 143
						}, this), /* @__PURE__ */ _jsxDEV("a", {
							href: "#tools",
							className: "ghost-button",
							"data-testid": "explore-tools-button",
							"x-file-name": "Home",
							"x-line-number": "24",
							"x-column": "164",
							"x-component": "a",
							"x-id": "Home_24_164",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("hero.explore")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 28,
							columnNumber: 423
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 28,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "hero-stat-row",
						"x-file-name": "Home",
						"x-line-number": "25",
						"x-column": "8",
						"x-component": "div",
						"x-id": "Home_25_8",
						"x-dynamic": "false",
						children: [
							/* @__PURE__ */ _jsxDEV("span", {
								"x-file-name": "Home",
								"x-line-number": "25",
								"x-column": "39",
								"x-component": "span",
								"x-id": "Home_25_39",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: [
									/* @__PURE__ */ _jsxDEV("strong", {
										"x-file-name": "Home",
										"x-line-number": "25",
										"x-column": "45",
										"x-component": "strong",
										"x-id": "Home_25_45",
										"x-dynamic": "false",
										children: "8"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 29,
										columnNumber: 307
									}, this),
									" ",
									t("hero.statModules")
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 29,
								columnNumber: 144
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								"x-file-name": "Home",
								"x-line-number": "25",
								"x-column": "94",
								"x-component": "span",
								"x-id": "Home_25_94",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: [
									/* @__PURE__ */ _jsxDEV("strong", {
										"x-file-name": "Home",
										"x-line-number": "25",
										"x-column": "100",
										"x-component": "strong",
										"x-id": "Home_25_100",
										"x-dynamic": "false",
										children: "5"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 29,
										columnNumber: 628
									}, this),
									" ",
									t("hero.statCalcs")
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 29,
								columnNumber: 465
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								"x-file-name": "Home",
								"x-line-number": "25",
								"x-column": "147",
								"x-component": "span",
								"x-id": "Home_25_147",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: [
									/* @__PURE__ */ _jsxDEV("strong", {
										"x-file-name": "Home",
										"x-line-number": "25",
										"x-column": "153",
										"x-component": "strong",
										"x-id": "Home_25_153",
										"x-dynamic": "false",
										children: "100%"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 29,
										columnNumber: 951
									}, this),
									" ",
									t("hero.statBeginner")
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 29,
								columnNumber: 786
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "hero-card",
				"x-file-name": "Home",
				"x-line-number": "27",
				"x-column": "6",
				"x-component": "div",
				"x-id": "Home_27_6",
				"x-dynamic": "false",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "hero-card-top",
						"x-file-name": "Home",
						"x-line-number": "28",
						"x-column": "8",
						"x-component": "div",
						"x-id": "Home_28_8",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("span", {
							"x-file-name": "Home",
							"x-line-number": "28",
							"x-column": "39",
							"x-component": "span",
							"x-id": "Home_28_39",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("hero.snapshot")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 32,
							columnNumber: 144
						}, this), /* @__PURE__ */ _jsxDEV(TrendingUp, {
							size: 18,
							"x-file-name": "Home",
							"x-line-number": "28",
							"x-column": "72",
							"x-component": "TrendingUp",
							"x-id": "Home_28_72",
							"x-dynamic": "false"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 32,
							columnNumber: 334
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 32,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "big-number",
						"x-file-name": "Home",
						"x-line-number": "29",
						"x-column": "8",
						"x-component": "div",
						"x-id": "Home_29_8",
						"x-dynamic": "false",
						children: "₹12,480"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "hero-chart",
						"x-file-name": "Home",
						"x-line-number": "30",
						"x-column": "8",
						"x-component": "div",
						"x-id": "Home_30_8",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "chart-line",
							"x-file-name": "Home",
							"x-line-number": "30",
							"x-column": "36",
							"x-component": "div",
							"x-id": "Home_30_36",
							"x-dynamic": "false"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 141
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							"x-file-name": "Home",
							"x-line-number": "30",
							"x-column": "66",
							"x-component": "span",
							"x-id": "Home_30_66",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("hero.snapshotChart")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 277
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "hero-card-foot",
						"x-file-name": "Home",
						"x-line-number": "31",
						"x-column": "8",
						"x-component": "div",
						"x-id": "Home_31_8",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("span", {
							"x-file-name": "Home",
							"x-line-number": "31",
							"x-column": "40",
							"x-component": "span",
							"x-id": "Home_31_40",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: [
								/* @__PURE__ */ _jsxDEV("span", {
									className: "dot green-dot",
									"x-file-name": "Home",
									"x-line-number": "31",
									"x-column": "46",
									"x-component": "span",
									"x-id": "Home_31_46",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 35,
									columnNumber: 308
								}, this),
								" ",
								t("hero.savingsGoal")
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 35,
							columnNumber: 145
						}, this), /* @__PURE__ */ _jsxDEV("strong", {
							"x-file-name": "Home",
							"x-line-number": "31",
							"x-column": "111",
							"x-component": "strong",
							"x-id": "Home_31_111",
							"x-dynamic": "false",
							children: "64%"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 35,
							columnNumber: 480
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 31,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 18,
		columnNumber: 10
	}, this);
}
_s(Hero, "i9WSJarzxoSeCDSFKFFQ8fEj8w0=", false, function() {
	return [useI18n];
});
_c = Hero;
function Learn() {
	_s2();
	const { t } = useI18n();
	// Lesson modules open their learning path; tool/safety modules scroll to their homepage section.
	const modules = [
		{
			icon: BookOpen,
			id: "financial-basics",
			n: 1,
			href: "/academy/path/complete-beginner",
			color: "blue"
		},
		{
			icon: TrendingUp,
			id: "investment-learning",
			n: 2,
			href: "/academy/path/stock-beginner",
			color: "green"
		},
		{
			icon: Calculator,
			id: "smart-calculators",
			n: 3,
			href: "#tools",
			color: "orange"
		},
		{
			icon: ShieldCheck,
			id: "digital-safety",
			n: 4,
			href: "#safety",
			color: "red"
		}
	];
	return /* @__PURE__ */ _jsxDEV("section", {
		className: "section",
		id: "learn",
		"x-file-name": "Home",
		"x-line-number": "42",
		"x-column": "4",
		"x-component": "section",
		"x-id": "Home_42_4",
		"x-dynamic": "false",
		children: [
			/* @__PURE__ */ _jsxDEV("div", {
				className: "section-heading",
				"x-file-name": "Home",
				"x-line-number": "43",
				"x-column": "6",
				"x-component": "div",
				"x-id": "Home_43_6",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					"x-file-name": "Home",
					"x-line-number": "43",
					"x-column": "39",
					"x-component": "div",
					"x-id": "Home_43_39",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("span", {
						className: "kicker",
						"x-file-name": "Home",
						"x-line-number": "43",
						"x-column": "44",
						"x-component": "span",
						"x-id": "Home_43_44",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t("learn.kicker")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 255
					}, this), /* @__PURE__ */ _jsxDEV("h2", {
						"x-file-name": "Home",
						"x-line-number": "43",
						"x-column": "95",
						"x-component": "h2",
						"x-id": "Home_43_95",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t("learn.title")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 463
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 144
				}, this), /* @__PURE__ */ _jsxDEV("span", {
					className: "heading-note",
					"x-file-name": "Home",
					"x-line-number": "43",
					"x-column": "128",
					"x-component": "span",
					"x-id": "Home_43_128",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("learn.note")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 651
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 70,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "module-grid",
				"x-file-name": "Home",
				"x-line-number": "44",
				"x-column": "6",
				"x-component": "div",
				"x-id": "Home_44_6",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: modules.map(({ icon: Icon, ...m }) => {
					const body = /* @__PURE__ */ _jsxDEV(_Fragment, { children: [
						/* @__PURE__ */ _jsxDEV("span", {
							className: `module-icon ${m.color}`,
							"x-file-name": "Home",
							"x-line-number": "44",
							"x-column": "91",
							"x-component": "span",
							"x-id": "Home_44_91",
							"x-dynamic": "false",
							children: /* @__PURE__ */ _jsxDEV(Icon, {
								size: 22,
								"x-file-name": "Home",
								"x-line-number": "44",
								"x-column": "134",
								"x-component": "Icon",
								"x-id": "Home_44_134",
								"x-dynamic": "true"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 75,
								columnNumber: 174
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 75,
							columnNumber: 24
						}, this),
						/* @__PURE__ */ _jsxDEV("h3", {
							"x-file-name": "Home",
							"x-line-number": "44",
							"x-column": "159",
							"x-component": "h3",
							"x-id": "Home_44_159",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t(`learn.m${m.n}Title`)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 75,
							columnNumber: 307
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							"x-file-name": "Home",
							"x-line-number": "44",
							"x-column": "193",
							"x-component": "p",
							"x-id": "Home_44_193",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t(`learn.m${m.n}Text`)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 75,
							columnNumber: 498
						}, this),
						/* @__PURE__ */ _jsxDEV("span", {
							className: "card-arrow",
							"x-file-name": "Home",
							"x-line-number": "44",
							"x-column": "224",
							"x-component": "span",
							"x-id": "Home_44_224",
							"x-dynamic": "false",
							children: /* @__PURE__ */ _jsxDEV(ChevronRight, { size: 18 }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 75,
								columnNumber: 823
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 75,
							columnNumber: 685
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 22
					}, this);
					return m.href.startsWith("/") ? /* @__PURE__ */ _jsxDEV(Link, {
						className: "module-card",
						to: m.href,
						"data-testid": `module-${m.id}`,
						children: body
					}, m.id, false, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 41
					}, this) : /* @__PURE__ */ _jsxDEV("a", {
						className: "module-card",
						href: m.href,
						"data-testid": `module-${m.id}`,
						"x-file-name": "Home",
						"x-line-number": "44",
						"x-column": "423",
						"x-component": "a",
						"x-id": "Home_44_423",
						"x-dynamic": "true",
						"x-source-type": "unknown",
						"x-source-var": "body",
						"x-source-editable": "false",
						children: body
					}, m.id, false, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 141
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 71,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "lesson-strip",
				"x-file-name": "Home",
				"x-line-number": "45",
				"x-column": "6",
				"x-component": "div",
				"x-id": "Home_45_6",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					"x-file-name": "Home",
					"x-line-number": "45",
					"x-column": "36",
					"x-component": "div",
					"x-id": "Home_45_36",
					"x-dynamic": "false",
					children: [
						/* @__PURE__ */ _jsxDEV("span", {
							className: "kicker",
							"x-file-name": "Home",
							"x-line-number": "45",
							"x-column": "41",
							"x-component": "span",
							"x-id": "Home_45_41",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("learn.stripKicker")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 78,
							columnNumber: 252
						}, this),
						/* @__PURE__ */ _jsxDEV("h3", {
							"x-file-name": "Home",
							"x-line-number": "45",
							"x-column": "97",
							"x-component": "h3",
							"x-id": "Home_45_97",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("learn.stripTitle")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 78,
							columnNumber: 465
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							"x-file-name": "Home",
							"x-line-number": "45",
							"x-column": "129",
							"x-component": "p",
							"x-id": "Home_45_129",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("learn.stripText")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 78,
							columnNumber: 652
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 141
				}, this), /* @__PURE__ */ _jsxDEV("a", {
					className: "text-link",
					href: "#tools",
					"data-testid": "lessons-to-tools-link",
					"x-file-name": "Home",
					"x-line-number": "45",
					"x-column": "164",
					"x-component": "a",
					"x-id": "Home_45_164",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: [
						t("learn.stripLink"),
						" ",
						/* @__PURE__ */ _jsxDEV(ArrowRight, { size: 16 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 78,
							columnNumber: 1097
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 843
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 78,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 69,
		columnNumber: 10
	}, this);
}
_s2(Learn, "i9WSJarzxoSeCDSFKFFQ8fEj8w0=", false, function() {
	return [useI18n];
});
_c2 = Learn;
function Schemes({ schemes }) {
	_s3();
	const { t } = useI18n();
	return /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV("section", {
		className: "section split-section",
		id: "schemes",
		"x-file-name": "Home",
		"x-line-number": "54",
		"x-column": "6",
		"x-component": "section",
		"x-id": "Home_54_6",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "split-copy",
			"x-file-name": "Home",
			"x-line-number": "54",
			"x-column": "62",
			"x-component": "div",
			"x-id": "Home_54_62",
			"x-dynamic": "false",
			children: [
				/* @__PURE__ */ _jsxDEV("span", {
					className: "kicker",
					"x-file-name": "Home",
					"x-line-number": "54",
					"x-column": "90",
					"x-component": "span",
					"x-id": "Home_54_90",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("schemes.kicker")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 305
				}, this),
				/* @__PURE__ */ _jsxDEV("h2", {
					"x-file-name": "Home",
					"x-line-number": "54",
					"x-column": "143",
					"x-component": "h2",
					"x-id": "Home_54_143",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("schemes.title")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 515
				}, this),
				/* @__PURE__ */ _jsxDEV("p", {
					"x-file-name": "Home",
					"x-line-number": "54",
					"x-column": "172",
					"x-component": "p",
					"x-id": "Home_54_172",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("schemes.text")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 701
				}, this),
				/* @__PURE__ */ _jsxDEV("a", {
					className: "primary-button small",
					href: "#schemes-list",
					"data-testid": "view-schemes-button",
					"x-file-name": "Home",
					"x-line-number": "54",
					"x-column": "198",
					"x-component": "a",
					"x-id": "Home_54_198",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: [
						t("schemes.view"),
						" ",
						/* @__PURE__ */ _jsxDEV(ArrowRight, { size: 16 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 90,
							columnNumber: 1150
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 883
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 90,
			columnNumber: 171
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "scheme-preview",
			"x-file-name": "Home",
			"x-line-number": "54",
			"x-column": "343",
			"x-component": "div",
			"x-id": "Home_54_343",
			"x-dynamic": "false",
			children: [
				/* @__PURE__ */ _jsxDEV(Landmark, {
					size: 28,
					"x-file-name": "Home",
					"x-line-number": "54",
					"x-column": "375",
					"x-component": "Landmark",
					"x-id": "Home_54_375",
					"x-dynamic": "false"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 1324
				}, this),
				/* @__PURE__ */ _jsxDEV("strong", {
					"x-file-name": "Home",
					"x-line-number": "54",
					"x-column": "397",
					"x-component": "strong",
					"x-id": "Home_54_397",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("schemes.count")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 1459
				}, this),
				/* @__PURE__ */ _jsxDEV("span", {
					"x-file-name": "Home",
					"x-line-number": "54",
					"x-column": "434",
					"x-component": "span",
					"x-id": "Home_54_434",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("schemes.meta")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 1657
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 90,
			columnNumber: 1184
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 90,
		columnNumber: 7
	}, this), /* @__PURE__ */ _jsxDEV("section", {
		className: "section",
		id: "schemes-list",
		"x-file-name": "Home",
		"x-line-number": "55",
		"x-column": "6",
		"x-component": "section",
		"x-id": "Home_55_6",
		"x-dynamic": "false",
		children: [
			/* @__PURE__ */ _jsxDEV("div", {
				className: "section-heading",
				"x-file-name": "Home",
				"x-line-number": "56",
				"x-column": "8",
				"x-component": "div",
				"x-id": "Home_56_8",
				"x-dynamic": "false",
				children: /* @__PURE__ */ _jsxDEV("div", {
					"x-file-name": "Home",
					"x-line-number": "56",
					"x-column": "41",
					"x-component": "div",
					"x-id": "Home_56_41",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("span", {
						className: "kicker",
						"x-file-name": "Home",
						"x-line-number": "56",
						"x-column": "46",
						"x-component": "span",
						"x-id": "Home_56_46",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t("schemes.listKicker")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 92,
						columnNumber: 257
					}, this), /* @__PURE__ */ _jsxDEV("h2", {
						"x-file-name": "Home",
						"x-line-number": "56",
						"x-column": "103",
						"x-component": "h2",
						"x-id": "Home_56_103",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t("schemes.listTitle")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 92,
						columnNumber: 471
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 92,
					columnNumber: 146
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 92,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "scheme-grid",
				"x-file-name": "Home",
				"x-line-number": "57",
				"x-column": "8",
				"x-component": "div",
				"x-id": "Home_57_8",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: schemes.map((s, i) => /* @__PURE__ */ _jsxDEV("article", {
					className: "scheme-card",
					"data-testid": `scheme-card-${i}`,
					"x-file-name": "Home",
					"x-line-number": "57",
					"x-column": "60",
					"x-component": "article",
					"x-id": "Home_57_60",
					"x-dynamic": "false",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "scheme-icon",
							"x-file-name": "Home",
							"x-line-number": "57",
							"x-column": "139",
							"x-component": "div",
							"x-id": "Home_57_139",
							"x-dynamic": "false",
							children: /* @__PURE__ */ _jsxDEV(Landmark, {
								size: 18,
								"x-file-name": "Home",
								"x-line-number": "57",
								"x-column": "168",
								"x-component": "Landmark",
								"x-id": "Home_57_168",
								"x-dynamic": "true",
								"x-source-type": "external",
								"x-source-var": "schemes",
								"x-source-editable": "false",
								"x-array-var": "schemes",
								"x-array-item-param": "s"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 93,
								columnNumber: 541
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 93,
							columnNumber: 404
						}, this),
						/* @__PURE__ */ _jsxDEV("h3", {
							"x-file-name": "Home",
							"x-line-number": "57",
							"x-column": "196",
							"x-component": "h3",
							"x-id": "Home_57_196",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t(`scheme.${i}.name`)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 93,
							columnNumber: 800
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							"x-file-name": "Home",
							"x-line-number": "57",
							"x-column": "228",
							"x-component": "p",
							"x-id": "Home_57_228",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t(`scheme.${i}.purpose`)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 93,
							columnNumber: 989
						}, this),
						/* @__PURE__ */ _jsxDEV("small", {
							"x-file-name": "Home",
							"x-line-number": "57",
							"x-column": "261",
							"x-component": "small",
							"x-id": "Home_57_261",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t(`scheme.${i}.who`)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 93,
							columnNumber: 1178
						}, this),
						/* @__PURE__ */ _jsxDEV("a", {
							href: s.link,
							target: "_blank",
							rel: "noreferrer",
							"data-testid": `scheme-link-${i}`,
							"x-file-name": "Home",
							"x-line-number": "57",
							"x-column": "298",
							"x-component": "a",
							"x-id": "Home_57_298",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: [
								t("schemes.source"),
								" ",
								/* @__PURE__ */ _jsxDEV(ArrowRight, { size: 14 }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 93,
									columnNumber: 1636
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 93,
							columnNumber: 1375
						}, this)
					]
				}, s.name, true, {
					fileName: _jsxFileName,
					lineNumber: 93,
					columnNumber: 215
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 93,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "notice",
				"data-testid": "scheme-disclaimer",
				"x-file-name": "Home",
				"x-line-number": "58",
				"x-column": "8",
				"x-component": "div",
				"x-id": "Home_58_8",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV(CircleHelp, {
					size: 18,
					"x-file-name": "Home",
					"x-line-number": "58",
					"x-column": "64",
					"x-component": "CircleHelp",
					"x-id": "Home_58_64",
					"x-dynamic": "false"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 94,
					columnNumber: 169
				}, this), /* @__PURE__ */ _jsxDEV("span", {
					"x-file-name": "Home",
					"x-line-number": "58",
					"x-column": "88",
					"x-component": "span",
					"x-id": "Home_58_88",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("schemes.disclaimer")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 94,
					columnNumber: 306
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 94,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 91,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 89,
		columnNumber: 10
	}, this);
}
_s3(Schemes, "i9WSJarzxoSeCDSFKFFQ8fEj8w0=", false, function() {
	return [useI18n];
});
_c3 = Schemes;
function Safety() {
	_s4();
	const { t } = useI18n();
	const [answer, setAnswer] = useState(null);
	return /* @__PURE__ */ _jsxDEV("section", {
		className: "section safety-section",
		id: "safety",
		"x-file-name": "Home",
		"x-line-number": "68",
		"x-column": "4",
		"x-component": "section",
		"x-id": "Home_68_4",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "safety-visual",
			"x-file-name": "Home",
			"x-line-number": "69",
			"x-column": "6",
			"x-component": "div",
			"x-id": "Home_69_6",
			"x-dynamic": "false",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "shield-circle",
					"x-file-name": "Home",
					"x-line-number": "69",
					"x-column": "37",
					"x-component": "div",
					"x-id": "Home_69_37",
					"x-dynamic": "false",
					children: /* @__PURE__ */ _jsxDEV(ShieldCheck, {
						size: 42,
						"x-file-name": "Home",
						"x-line-number": "69",
						"x-column": "68",
						"x-component": "ShieldCheck",
						"x-id": "Home_69_68",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 279
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 142
				}, this),
				/* @__PURE__ */ _jsxDEV("span", {
					className: "kicker",
					"x-file-name": "Home",
					"x-line-number": "69",
					"x-column": "99",
					"x-component": "span",
					"x-id": "Home_69_99",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("safety.kicker")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 424
				}, this),
				/* @__PURE__ */ _jsxDEV("h2", {
					"x-file-name": "Home",
					"x-line-number": "69",
					"x-column": "151",
					"x-component": "h2",
					"x-id": "Home_69_151",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("safety.title")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 633
				}, this),
				/* @__PURE__ */ _jsxDEV("p", {
					"x-file-name": "Home",
					"x-line-number": "69",
					"x-column": "179",
					"x-component": "p",
					"x-id": "Home_69_179",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("safety.text")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 818
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 104,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "challenge-card",
			"x-file-name": "Home",
			"x-line-number": "70",
			"x-column": "6",
			"x-component": "div",
			"x-id": "Home_70_6",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: [
				/* @__PURE__ */ _jsxDEV("span", {
					className: "kicker",
					"x-file-name": "Home",
					"x-line-number": "70",
					"x-column": "38",
					"x-component": "span",
					"x-id": "Home_70_38",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("safety.challengeKicker")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 105,
					columnNumber: 193
				}, this),
				/* @__PURE__ */ _jsxDEV("h3", {
					"x-file-name": "Home",
					"x-line-number": "70",
					"x-column": "99",
					"x-component": "h3",
					"x-id": "Home_70_99",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("safety.challenge")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 105,
					columnNumber: 411
				}, this),
				/* @__PURE__ */ _jsxDEV("p", {
					className: "scenario",
					"x-file-name": "Home",
					"x-line-number": "70",
					"x-column": "131",
					"x-component": "p",
					"x-id": "Home_70_131",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("safety.ask")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 105,
					columnNumber: 598
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "challenge-options",
					"x-file-name": "Home",
					"x-line-number": "70",
					"x-column": "176",
					"x-component": "div",
					"x-id": "Home_70_176",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("button", {
						onClick: () => setAnswer(false),
						"data-testid": "safety-share-button",
						"x-file-name": "Home",
						"x-line-number": "70",
						"x-column": "211",
						"x-component": "button",
						"x-id": "Home_70_211",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t("safety.share")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 942
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						onClick: () => setAnswer(true),
						"data-testid": "safety-report-button",
						"x-file-name": "Home",
						"x-line-number": "70",
						"x-column": "314",
						"x-component": "button",
						"x-id": "Home_70_314",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t("safety.report")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 1206
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 105,
					columnNumber: 799
				}, this),
				answer !== null && /* @__PURE__ */ _jsxDEV("div", {
					className: answer ? "feedback good" : "feedback bad",
					"data-testid": "safety-feedback",
					"x-file-name": "Home",
					"x-line-number": "70",
					"x-column": "444",
					"x-component": "div",
					"x-id": "Home_70_444",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: answer ? /* @__PURE__ */ _jsxDEV(_Fragment, { children: [
						/* @__PURE__ */ _jsxDEV(Check, { size: 18 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 105,
							columnNumber: 1756
						}, this),
						" ",
						t("safety.good")
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 1754
					}, this) : t("safety.bad")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 105,
					columnNumber: 1497
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 105,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 103,
		columnNumber: 10
	}, this);
}
_s4(Safety, "4BQCYtqG/wtYX4WRLTd+MjKTTqo=", false, function() {
	return [useI18n];
});
_c4 = Safety;
function Quiz({ questions }) {
	_s5();
	const { t } = useI18n();
	const { isSignedIn } = useAuth();
	const [answers, setAnswers] = useState({});
	const [result, setResult] = useState(null);
	const submit = async () => {
		if (!isSignedIn) {
			setResult({ error: true });
			return;
		}
		try {
			setResult(await apiPost("/quiz/submit", { answers }));
		} catch {
			setResult({ error: true });
		}
	};
	return /* @__PURE__ */ _jsxDEV("section", {
		className: "section quiz-section",
		id: "quiz",
		"x-file-name": "Home",
		"x-line-number": "85",
		"x-column": "4",
		"x-component": "section",
		"x-id": "Home_85_4",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "section-heading",
			"x-file-name": "Home",
			"x-line-number": "86",
			"x-column": "6",
			"x-component": "div",
			"x-id": "Home_86_6",
			"x-dynamic": "false",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				"x-file-name": "Home",
				"x-line-number": "86",
				"x-column": "39",
				"x-component": "div",
				"x-id": "Home_86_39",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("span", {
					className: "kicker",
					"x-file-name": "Home",
					"x-line-number": "86",
					"x-column": "44",
					"x-component": "span",
					"x-id": "Home_86_44",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("quiz.kicker")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 146,
					columnNumber: 255
				}, this), /* @__PURE__ */ _jsxDEV("h2", {
					"x-file-name": "Home",
					"x-line-number": "86",
					"x-column": "94",
					"x-component": "h2",
					"x-id": "Home_86_94",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("quiz.title")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 146,
					columnNumber: 462
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 146,
				columnNumber: 144
			}, this), /* @__PURE__ */ _jsxDEV("span", {
				className: "heading-note",
				"x-file-name": "Home",
				"x-line-number": "86",
				"x-column": "126",
				"x-component": "span",
				"x-id": "Home_86_126",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: t("quiz.note")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 146,
				columnNumber: 649
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 146,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "quiz-layout",
			"x-file-name": "Home",
			"x-line-number": "87",
			"x-column": "6",
			"x-component": "div",
			"x-id": "Home_87_6",
			"x-dynamic": "false",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "quiz-list",
				"x-file-name": "Home",
				"x-line-number": "88",
				"x-column": "8",
				"x-component": "div",
				"x-id": "Home_88_8",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: questions.map((q, i) => /* @__PURE__ */ _jsxDEV("article", {
					className: "quiz-question",
					"x-file-name": "Home",
					"x-line-number": "88",
					"x-column": "60",
					"x-component": "article",
					"x-id": "Home_88_60",
					"x-dynamic": "false",
					children: [
						/* @__PURE__ */ _jsxDEV("span", {
							className: "question-number",
							"x-file-name": "Home",
							"x-line-number": "88",
							"x-column": "106",
							"x-component": "span",
							"x-id": "Home_88_106",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: ["0", /* @__PURE__ */ _jsxDEV("span", {
								"data-ve-dynamic": "true",
								"x-excluded": "true",
								style: { display: "contents" },
								"x-file-name": "Home",
								"x-line-number": "88",
								"x-column": "106",
								"x-component": "span",
								"x-id": "Home_88_106_expr1",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: i + 1
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 148,
								columnNumber: 565
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 148,
							columnNumber: 371
						}, this),
						/* @__PURE__ */ _jsxDEV("h3", {
							"x-file-name": "Home",
							"x-line-number": "88",
							"x-column": "155",
							"x-component": "h3",
							"x-id": "Home_88_155",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t(`quiz.${q.id}.question`)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 150,
							columnNumber: 202
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "quiz-options",
							"x-file-name": "Home",
							"x-line-number": "88",
							"x-column": "192",
							"x-component": "div",
							"x-id": "Home_88_192",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: q.options.map((option, index) => /* @__PURE__ */ _jsxDEV("label", {
								className: answers[q.id] === index ? "selected" : "",
								"x-file-name": "Home",
								"x-line-number": "88",
								"x-column": "256",
								"x-component": "label",
								"x-id": "Home_88_256",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: [/* @__PURE__ */ _jsxDEV("input", {
									type: "radio",
									name: `q-${q.id}`,
									checked: answers[q.id] === index,
									onChange: () => setAnswers({
										...answers,
										[q.id]: index
									}),
									"data-testid": `quiz-${q.id}-option-${index}`,
									"x-file-name": "Home",
									"x-line-number": "88",
									"x-column": "330",
									"x-component": "input",
									"x-id": "Home_88_330",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 150,
									columnNumber: 852
								}, this), t(`quiz.${q.id}.option.${index}`)]
							}, option, true, {
								fileName: _jsxFileName,
								lineNumber: 150,
								columnNumber: 618
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 150,
							columnNumber: 396
						}, this)
					]
				}, q.id, true, {
					fileName: _jsxFileName,
					lineNumber: 148,
					columnNumber: 215
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 148,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("aside", {
				className: "quiz-side",
				"x-file-name": "Home",
				"x-line-number": "89",
				"x-column": "8",
				"x-component": "aside",
				"x-id": "Home_89_8",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "score-ring",
						"x-file-name": "Home",
						"x-line-number": "89",
						"x-column": "37",
						"x-component": "div",
						"x-id": "Home_89_37",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("span", {
							"data-testid": "quiz-score",
							"x-file-name": "Home",
							"x-line-number": "89",
							"x-column": "65",
							"x-component": "span",
							"x-id": "Home_89_65",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: result?.percentage ?? "—"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 154,
							columnNumber: 328
						}, this), /* @__PURE__ */ _jsxDEV("small", {
							"x-file-name": "Home",
							"x-line-number": "89",
							"x-column": "130",
							"x-component": "small",
							"x-id": "Home_89_130",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: result && !result.error ? t("quiz.scorePct") : t("quiz.score")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 154,
							columnNumber: 550
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 154,
						columnNumber: 194
					}, this),
					result?.error ? /* @__PURE__ */ _jsxDEV("p", {
						className: "error-text",
						"data-testid": "quiz-error",
						"x-file-name": "Home",
						"x-line-number": "89",
						"x-column": "232",
						"x-component": "p",
						"x-id": "Home_89_232",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t("quiz.signIn")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 154,
						columnNumber: 812
					}, this) : result ? /* @__PURE__ */ _jsxDEV("p", {
						"data-testid": "quiz-result",
						"x-file-name": "Home",
						"x-line-number": "89",
						"x-column": "317",
						"x-component": "p",
						"x-id": "Home_89_317",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t("quiz.scored", {
							score: result.score ?? 0,
							total: result.total ?? 0
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 154,
						columnNumber: 1053
					}, this) : isSignedIn ? null : /* @__PURE__ */ _jsxDEV("p", {
						"x-file-name": "Home",
						"x-line-number": "89",
						"x-column": "447",
						"x-component": "p",
						"x-id": "Home_89_447",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t("quiz.intro")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 157,
						columnNumber: 41
					}, this),
					/* @__PURE__ */ _jsxDEV("button", {
						className: "primary-button",
						onClick: () => void submit(),
						"data-testid": "submit-quiz-button",
						"x-file-name": "Home",
						"x-line-number": "89",
						"x-column": "472",
						"x-component": "button",
						"x-id": "Home_89_472",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: [
							t("quiz.submit"),
							" ",
							/* @__PURE__ */ _jsxDEV(ArrowRight, { size: 16 }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 157,
								columnNumber: 500
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 157,
						columnNumber: 222
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 154,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 147,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 145,
		columnNumber: 10
	}, this);
}
_s5(Quiz, "ybaFRScyls3gszteXu8H2kYs4pQ=", false, function() {
	return [useI18n, useAuth];
});
_c5 = Quiz;
export default function Home() {
	_s6();
	const { t } = useI18n();
	const navigate = useNavigate();
	const { data } = useQuery({
		queryKey: ["content"],
		queryFn: () => apiGet("/content")
	});
	const content = data || {
		lessons: [],
		schemes: [],
		quiz: []
	};
	useScrollReveal();
	return /* @__PURE__ */ _jsxDEV(_Fragment, { children: [
		/* @__PURE__ */ _jsxDEV(Hero, {
			"x-file-name": "Home",
			"x-line-number": "103",
			"x-column": "6",
			"x-component": "Hero",
			"x-id": "Home_103_6",
			"x-dynamic": "true"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 179,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV(Learn, {
			"x-file-name": "Home",
			"x-line-number": "104",
			"x-column": "6",
			"x-component": "Learn",
			"x-id": "Home_104_6",
			"x-dynamic": "true"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 180,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV(Tools, {
			"x-file-name": "Home",
			"x-line-number": "105",
			"x-column": "6",
			"x-component": "Tools",
			"x-id": "Home_105_6",
			"x-dynamic": "true",
			"x-excluded": "true"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 181,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV(Simulator, {
			"x-file-name": "Home",
			"x-line-number": "106",
			"x-column": "6",
			"x-component": "Simulator",
			"x-id": "Home_106_6",
			"x-dynamic": "true",
			"x-excluded": "true"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 182,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV(Schemes, {
			schemes: content.schemes,
			"x-file-name": "Home",
			"x-line-number": "107",
			"x-column": "6",
			"x-component": "Schemes",
			"x-id": "Home_107_6",
			"x-dynamic": "true"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 183,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV(Safety, {
			"x-file-name": "Home",
			"x-line-number": "108",
			"x-column": "6",
			"x-component": "Safety",
			"x-id": "Home_108_6",
			"x-dynamic": "true"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 184,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV(Quiz, {
			questions: content.quiz,
			"x-file-name": "Home",
			"x-line-number": "109",
			"x-column": "6",
			"x-component": "Quiz",
			"x-id": "Home_109_6",
			"x-dynamic": "true"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 185,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV(Assistant, {
			"x-file-name": "Home",
			"x-line-number": "110",
			"x-column": "6",
			"x-component": "Assistant",
			"x-id": "Home_110_6",
			"x-dynamic": "true"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 186,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV("section", {
			className: "section cta-band",
			"x-file-name": "Home",
			"x-line-number": "111",
			"x-column": "6",
			"x-component": "section",
			"x-id": "Home_111_6",
			"x-dynamic": "false",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				"x-file-name": "Home",
				"x-line-number": "111",
				"x-column": "44",
				"x-component": "div",
				"x-id": "Home_111_44",
				"x-dynamic": "false",
				children: [
					/* @__PURE__ */ _jsxDEV("span", {
						className: "kicker",
						"x-file-name": "Home",
						"x-line-number": "111",
						"x-column": "49",
						"x-component": "span",
						"x-id": "Home_111_49",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t("cta.kicker")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 187,
						columnNumber: 268
					}, this),
					/* @__PURE__ */ _jsxDEV("h2", {
						"x-file-name": "Home",
						"x-line-number": "111",
						"x-column": "98",
						"x-component": "h2",
						"x-id": "Home_111_98",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t("cta.title")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 187,
						columnNumber: 476
					}, this),
					/* @__PURE__ */ _jsxDEV("p", {
						"x-file-name": "Home",
						"x-line-number": "111",
						"x-column": "123",
						"x-component": "p",
						"x-id": "Home_111_123",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t("cta.text")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 187,
						columnNumber: 658
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 187,
				columnNumber: 155
			}, this), /* @__PURE__ */ _jsxDEV("button", {
				className: "primary-button",
				onClick: () => navigate("/sign-up"),
				"data-testid": "cta-sign-up-button",
				"x-file-name": "Home",
				"x-line-number": "111",
				"x-column": "151",
				"x-component": "button",
				"x-id": "Home_111_151",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: [
					t("cta.button"),
					" ",
					/* @__PURE__ */ _jsxDEV(ArrowRight, { size: 18 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 187,
						columnNumber: 1130
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 187,
				columnNumber: 844
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 187,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 178,
		columnNumber: 10
	}, this);
}
_s6(Home, "9yQVPvaWi54ZqL9tZRgchmK8L9g=", false, function() {
	return [
		useI18n,
		useNavigate,
		useQuery,
		useScrollReveal
	];
});
_c6 = Home;
var _c, _c2, _c3, _c4, _c5, _c6;
$RefreshReg$(_c, "Hero");
$RefreshReg$(_c2, "Learn");
$RefreshReg$(_c3, "Schemes");
$RefreshReg$(_c4, "Safety");
$RefreshReg$(_c5, "Quiz");
$RefreshReg$(_c6, "Home");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Home.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/pages/Home.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/pages/Home.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/pages/Home.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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QUQ7R0FBVTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7RUFBQTs7Ozs7RUFDVix3QkFBQyxXQUFEO0dBQVMsV0FBVTtHQUFrQjtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7YUFBckMsQ0FBc0Msd0JBQUMsT0FBRDtJQUFJO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtjQUFKO0tBQUssd0JBQUMsUUFBRDtNQUFNLFdBQVU7TUFBUTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO2dCQUFFOUMsRUFBRSxZQUFZO0tBQVE7Ozs7O0tBQUMsd0JBQUMsTUFBRDtNQUFHO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7Z0JBQUVBLEVBQUUsV0FBVztLQUFNOzs7OztLQUFDLHdCQUFDLEtBQUQ7TUFBRTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO2dCQUFFQSxFQUFFLFVBQVU7S0FBSzs7Ozs7SUFBTTs7Ozs7YUFBQyx3QkFBQyxVQUFEO0lBQVEsV0FBVTtJQUFpQixlQUFld0MsU0FBUyxVQUFVO0lBQUcsZUFBWTtJQUFvQjtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO2NBQXhHO0tBQTBHeEMsRUFBRSxZQUFZO0tBQUU7S0FBQyx3QkFBQyxZQUFELEVBQVksTUFBTSxHQUFHOzs7OztJQUFXOzs7OztXQUFVOzs7Ozs7Q0FDeFQ7Ozs7O0FBRUoiLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxpbmsiLCJ1c2VOYXZpZ2F0ZSIsInVzZVF1ZXJ5IiwiQXJyb3dSaWdodCIsIkJvb2tPcGVuIiwiQ2FsY3VsYXRvciIsIkNoZWNrIiwiQ2hldnJvblJpZ2h0IiwiQ2lyY2xlSGVscCIsIkxhbmRtYXJrIiwiU2hpZWxkQ2hlY2siLCJUcmVuZGluZ1VwIiwiYXBpR2V0IiwiYXBpUG9zdCIsInVzZUF1dGgiLCJ1c2VJMThuIiwiVG9vbHMiLCJTaW11bGF0b3IiLCJBc3Npc3RhbnQiLCJIZXJvUGFydGljbGVzIiwidXNlU2Nyb2xsUmV2ZWFsIiwiSGVybyIsInQiLCJkaXNwbGF5IiwiTGVhcm4iLCJtb2R1bGVzIiwiaWNvbiIsImlkIiwibiIsImhyZWYiLCJjb2xvciIsIm1hcCIsIkljb24iLCJtIiwiYm9keSIsInN0YXJ0c1dpdGgiLCJTY2hlbWVzIiwic2NoZW1lcyIsInMiLCJpIiwibGluayIsIm5hbWUiLCJTYWZldHkiLCJhbnN3ZXIiLCJzZXRBbnN3ZXIiLCJRdWl6IiwicXVlc3Rpb25zIiwiaXNTaWduZWRJbiIsImFuc3dlcnMiLCJzZXRBbnN3ZXJzIiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwic3VibWl0IiwiZXJyb3IiLCJxIiwib3B0aW9ucyIsIm9wdGlvbiIsImluZGV4IiwicGVyY2VudGFnZSIsInNjb3JlIiwidG90YWwiLCJIb21lIiwibmF2aWdhdGUiLCJkYXRhIiwicXVlcnlLZXkiLCJxdWVyeUZuIiwiY29udGVudCIsImxlc3NvbnMiLCJxdWl6Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkhvbWUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IEFycm93UmlnaHQsIEJvb2tPcGVuLCBDYWxjdWxhdG9yLCBDaGVjaywgQ2hldnJvblJpZ2h0LCBDaXJjbGVIZWxwLCBMYW5kbWFyaywgU2hpZWxkQ2hlY2ssIFRyZW5kaW5nVXAgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBhcGlHZXQsIGFwaVBvc3QgfSBmcm9tIFwiQC9saWIvYXBpXCI7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tIFwiQC9saWIvaTE4blwiO1xuaW1wb3J0IHR5cGUgeyBDb250ZW50RG9jLCBIb21lUXVpelJlc3VsdCwgUXVpekRvYywgU2NoZW1lRG9jIH0gZnJvbSBcIkAvbGliL3R5cGVzXCI7XG5pbXBvcnQgeyBUb29scyB9IGZyb20gXCJAL2NvbXBvbmVudHMvVG9vbHNcIjtcbmltcG9ydCB7IFNpbXVsYXRvciB9IGZyb20gXCJAL2NvbXBvbmVudHMvU2ltdWxhdG9yXCI7XG5pbXBvcnQgeyBBc3Npc3RhbnQgfSBmcm9tIFwiQC9jb21wb25lbnRzL0Fzc2lzdGFudFwiO1xuaW1wb3J0IHsgSGVyb1BhcnRpY2xlcyB9IGZyb20gXCJAL2NvbXBvbmVudHMvSGVyb1BhcnRpY2xlc1wiO1xuaW1wb3J0IHsgdXNlU2Nyb2xsUmV2ZWFsIH0gZnJvbSBcIkAvbGliL3VzZVNjcm9sbFJldmVhbFwiO1xuXG5mdW5jdGlvbiBIZXJvKCkge1xuICBjb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICA8SGVyb1BhcnRpY2xlcyAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleWVicm93XCI+PHNwYW4gY2xhc3NOYW1lPVwicHVsc2VcIiAvPiB7dChcImhlcm8udHJ1c3RlZFwiKX0gwrcge3QoXCJoZXJvLmxhbmd1YWdlc1wiKX08L2Rpdj5cbiAgICAgICAgPGgxPnt0KFwiaGVyby50aXRsZVwiKX08L2gxPlxuICAgICAgICA8cD57dChcImhlcm8uc3VidGl0bGVcIil9PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tYWN0aW9uc1wiPjxhIGhyZWY9XCIjbGVhcm5cIiBjbGFzc05hbWU9XCJwcmltYXJ5LWJ1dHRvblwiIGRhdGEtdGVzdGlkPVwic3RhcnQtbGVhcm5pbmctYnV0dG9uXCI+e3QoXCJoZXJvLnN0YXJ0XCIpfSA8QXJyb3dSaWdodCBzaXplPXsxOH0gLz48L2E+PGEgaHJlZj1cIiN0b29sc1wiIGNsYXNzTmFtZT1cImdob3N0LWJ1dHRvblwiIGRhdGEtdGVzdGlkPVwiZXhwbG9yZS10b29scy1idXR0b25cIj57dChcImhlcm8uZXhwbG9yZVwiKX08L2E+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1zdGF0LXJvd1wiPjxzcGFuPjxzdHJvbmc+ODwvc3Ryb25nPiB7dChcImhlcm8uc3RhdE1vZHVsZXNcIil9PC9zcGFuPjxzcGFuPjxzdHJvbmc+NTwvc3Ryb25nPiB7dChcImhlcm8uc3RhdENhbGNzXCIpfTwvc3Bhbj48c3Bhbj48c3Ryb25nPjEwMCU8L3N0cm9uZz4ge3QoXCJoZXJvLnN0YXRCZWdpbm5lclwiKX08L3NwYW4+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1jYXJkXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1jYXJkLXRvcFwiPjxzcGFuPnt0KFwiaGVyby5zbmFwc2hvdFwiKX08L3NwYW4+PFRyZW5kaW5nVXAgc2l6ZT17MTh9IC8+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlnLW51bWJlclwiPuKCuTEyLDQ4MDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tY2hhcnRcIj48ZGl2IGNsYXNzTmFtZT1cImNoYXJ0LWxpbmVcIiAvPjxzcGFuPnt0KFwiaGVyby5zbmFwc2hvdENoYXJ0XCIpfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWNhcmQtZm9vdFwiPjxzcGFuPjxzcGFuIGNsYXNzTmFtZT1cImRvdCBncmVlbi1kb3RcIiAvPiB7dChcImhlcm8uc2F2aW5nc0dvYWxcIil9PC9zcGFuPjxzdHJvbmc+NjQlPC9zdHJvbmc+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmZ1bmN0aW9uIExlYXJuKCkge1xuICBjb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcbiAgLy8gTGVzc29uIG1vZHVsZXMgb3BlbiB0aGVpciBsZWFybmluZyBwYXRoOyB0b29sL3NhZmV0eSBtb2R1bGVzIHNjcm9sbCB0byB0aGVpciBob21lcGFnZSBzZWN0aW9uLlxuICBjb25zdCBtb2R1bGVzID0gW3sgaWNvbjogQm9va09wZW4sIGlkOiBcImZpbmFuY2lhbC1iYXNpY3NcIiwgbjogMSwgaHJlZjogXCIvYWNhZGVteS9wYXRoL2NvbXBsZXRlLWJlZ2lubmVyXCIsIGNvbG9yOiBcImJsdWVcIiB9LCB7IGljb246IFRyZW5kaW5nVXAsIGlkOiBcImludmVzdG1lbnQtbGVhcm5pbmdcIiwgbjogMiwgaHJlZjogXCIvYWNhZGVteS9wYXRoL3N0b2NrLWJlZ2lubmVyXCIsIGNvbG9yOiBcImdyZWVuXCIgfSwgeyBpY29uOiBDYWxjdWxhdG9yLCBpZDogXCJzbWFydC1jYWxjdWxhdG9yc1wiLCBuOiAzLCBocmVmOiBcIiN0b29sc1wiLCBjb2xvcjogXCJvcmFuZ2VcIiB9LCB7IGljb246IFNoaWVsZENoZWNrLCBpZDogXCJkaWdpdGFsLXNhZmV0eVwiLCBuOiA0LCBocmVmOiBcIiNzYWZldHlcIiwgY29sb3I6IFwicmVkXCIgfV07XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvblwiIGlkPVwibGVhcm5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkaW5nXCI+PGRpdj48c3BhbiBjbGFzc05hbWU9XCJraWNrZXJcIj57dChcImxlYXJuLmtpY2tlclwiKX08L3NwYW4+PGgyPnt0KFwibGVhcm4udGl0bGVcIil9PC9oMj48L2Rpdj48c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLW5vdGVcIj57dChcImxlYXJuLm5vdGVcIil9PC9zcGFuPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2R1bGUtZ3JpZFwiPnttb2R1bGVzLm1hcCgoeyBpY29uOiBJY29uLCAuLi5tIH0pID0+IHsgY29uc3QgYm9keSA9IDw+PHNwYW4gY2xhc3NOYW1lPXtgbW9kdWxlLWljb24gJHttLmNvbG9yfWB9PjxJY29uIHNpemU9ezIyfSAvPjwvc3Bhbj48aDM+e3QoYGxlYXJuLm0ke20ubn1UaXRsZWApfTwvaDM+PHA+e3QoYGxlYXJuLm0ke20ubn1UZXh0YCl9PC9wPjxzcGFuIGNsYXNzTmFtZT1cImNhcmQtYXJyb3dcIj48Q2hldnJvblJpZ2h0IHNpemU9ezE4fSAvPjwvc3Bhbj48Lz47IHJldHVybiBtLmhyZWYuc3RhcnRzV2l0aChcIi9cIikgPyA8TGluayBjbGFzc05hbWU9XCJtb2R1bGUtY2FyZFwiIHRvPXttLmhyZWZ9IGtleT17bS5pZH0gZGF0YS10ZXN0aWQ9e2Btb2R1bGUtJHttLmlkfWB9Pntib2R5fTwvTGluaz4gOiA8YSBjbGFzc05hbWU9XCJtb2R1bGUtY2FyZFwiIGhyZWY9e20uaHJlZn0ga2V5PXttLmlkfSBkYXRhLXRlc3RpZD17YG1vZHVsZS0ke20uaWR9YH0+e2JvZHl9PC9hPjsgfSl9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlc3Nvbi1zdHJpcFwiPjxkaXY+PHNwYW4gY2xhc3NOYW1lPVwia2lja2VyXCI+e3QoXCJsZWFybi5zdHJpcEtpY2tlclwiKX08L3NwYW4+PGgzPnt0KFwibGVhcm4uc3RyaXBUaXRsZVwiKX08L2gzPjxwPnt0KFwibGVhcm4uc3RyaXBUZXh0XCIpfTwvcD48L2Rpdj48YSBjbGFzc05hbWU9XCJ0ZXh0LWxpbmtcIiBocmVmPVwiI3Rvb2xzXCIgZGF0YS10ZXN0aWQ9XCJsZXNzb25zLXRvLXRvb2xzLWxpbmtcIj57dChcImxlYXJuLnN0cmlwTGlua1wiKX0gPEFycm93UmlnaHQgc2l6ZT17MTZ9IC8+PC9hPjwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gU2NoZW1lcyh7IHNjaGVtZXMgfTogeyBzY2hlbWVzOiBTY2hlbWVEb2NbXSB9KSB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHNwbGl0LXNlY3Rpb25cIiBpZD1cInNjaGVtZXNcIj48ZGl2IGNsYXNzTmFtZT1cInNwbGl0LWNvcHlcIj48c3BhbiBjbGFzc05hbWU9XCJraWNrZXJcIj57dChcInNjaGVtZXMua2lja2VyXCIpfTwvc3Bhbj48aDI+e3QoXCJzY2hlbWVzLnRpdGxlXCIpfTwvaDI+PHA+e3QoXCJzY2hlbWVzLnRleHRcIil9PC9wPjxhIGNsYXNzTmFtZT1cInByaW1hcnktYnV0dG9uIHNtYWxsXCIgaHJlZj1cIiNzY2hlbWVzLWxpc3RcIiBkYXRhLXRlc3RpZD1cInZpZXctc2NoZW1lcy1idXR0b25cIj57dChcInNjaGVtZXMudmlld1wiKX0gPEFycm93UmlnaHQgc2l6ZT17MTZ9IC8+PC9hPjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwic2NoZW1lLXByZXZpZXdcIj48TGFuZG1hcmsgc2l6ZT17Mjh9IC8+PHN0cm9uZz57dChcInNjaGVtZXMuY291bnRcIil9PC9zdHJvbmc+PHNwYW4+e3QoXCJzY2hlbWVzLm1ldGFcIil9PC9zcGFuPjwvZGl2Pjwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb25cIiBpZD1cInNjaGVtZXMtbGlzdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGluZ1wiPjxkaXY+PHNwYW4gY2xhc3NOYW1lPVwia2lja2VyXCI+e3QoXCJzY2hlbWVzLmxpc3RLaWNrZXJcIil9PC9zcGFuPjxoMj57dChcInNjaGVtZXMubGlzdFRpdGxlXCIpfTwvaDI+PC9kaXY+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NoZW1lLWdyaWRcIj57c2NoZW1lcy5tYXAoKHMsIGkpID0+IDxhcnRpY2xlIGNsYXNzTmFtZT1cInNjaGVtZS1jYXJkXCIga2V5PXtzLm5hbWV9IGRhdGEtdGVzdGlkPXtgc2NoZW1lLWNhcmQtJHtpfWB9PjxkaXYgY2xhc3NOYW1lPVwic2NoZW1lLWljb25cIj48TGFuZG1hcmsgc2l6ZT17MTh9IC8+PC9kaXY+PGgzPnt0KGBzY2hlbWUuJHtpfS5uYW1lYCl9PC9oMz48cD57dChgc2NoZW1lLiR7aX0ucHVycG9zZWApfTwvcD48c21hbGw+e3QoYHNjaGVtZS4ke2l9Lndob2ApfTwvc21hbGw+PGEgaHJlZj17cy5saW5rfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgZGF0YS10ZXN0aWQ9e2BzY2hlbWUtbGluay0ke2l9YH0+e3QoXCJzY2hlbWVzLnNvdXJjZVwiKX0gPEFycm93UmlnaHQgc2l6ZT17MTR9IC8+PC9hPjwvYXJ0aWNsZT4pfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGljZVwiIGRhdGEtdGVzdGlkPVwic2NoZW1lLWRpc2NsYWltZXJcIj48Q2lyY2xlSGVscCBzaXplPXsxOH0gLz48c3Bhbj57dChcInNjaGVtZXMuZGlzY2xhaW1lclwiKX08L3NwYW4+PC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNhZmV0eSgpIHtcbiAgY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG4gIGNvbnN0IFthbnN3ZXIsIHNldEFuc3dlcl0gPSB1c2VTdGF0ZTxib29sZWFuIHwgbnVsbD4obnVsbCk7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvbiBzYWZldHktc2VjdGlvblwiIGlkPVwic2FmZXR5XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNhZmV0eS12aXN1YWxcIj48ZGl2IGNsYXNzTmFtZT1cInNoaWVsZC1jaXJjbGVcIj48U2hpZWxkQ2hlY2sgc2l6ZT17NDJ9IC8+PC9kaXY+PHNwYW4gY2xhc3NOYW1lPVwia2lja2VyXCI+e3QoXCJzYWZldHkua2lja2VyXCIpfTwvc3Bhbj48aDI+e3QoXCJzYWZldHkudGl0bGVcIil9PC9oMj48cD57dChcInNhZmV0eS50ZXh0XCIpfTwvcD48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhbGxlbmdlLWNhcmRcIj48c3BhbiBjbGFzc05hbWU9XCJraWNrZXJcIj57dChcInNhZmV0eS5jaGFsbGVuZ2VLaWNrZXJcIil9PC9zcGFuPjxoMz57dChcInNhZmV0eS5jaGFsbGVuZ2VcIil9PC9oMz48cCBjbGFzc05hbWU9XCJzY2VuYXJpb1wiPnt0KFwic2FmZXR5LmFza1wiKX08L3A+PGRpdiBjbGFzc05hbWU9XCJjaGFsbGVuZ2Utb3B0aW9uc1wiPjxidXR0b24gb25DbGljaz17KCkgPT4gc2V0QW5zd2VyKGZhbHNlKX0gZGF0YS10ZXN0aWQ9XCJzYWZldHktc2hhcmUtYnV0dG9uXCI+e3QoXCJzYWZldHkuc2hhcmVcIil9PC9idXR0b24+PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBbnN3ZXIodHJ1ZSl9IGRhdGEtdGVzdGlkPVwic2FmZXR5LXJlcG9ydC1idXR0b25cIj57dChcInNhZmV0eS5yZXBvcnRcIil9PC9idXR0b24+PC9kaXY+e2Fuc3dlciAhPT0gbnVsbCAmJiA8ZGl2IGNsYXNzTmFtZT17YW5zd2VyID8gXCJmZWVkYmFjayBnb29kXCIgOiBcImZlZWRiYWNrIGJhZFwifSBkYXRhLXRlc3RpZD1cInNhZmV0eS1mZWVkYmFja1wiPnthbnN3ZXIgPyA8PjxDaGVjayBzaXplPXsxOH0gLz4ge3QoXCJzYWZldHkuZ29vZFwiKX08Lz4gOiB0KFwic2FmZXR5LmJhZFwiKX08L2Rpdj59PC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5mdW5jdGlvbiBRdWl6KHsgcXVlc3Rpb25zIH06IHsgcXVlc3Rpb25zOiBRdWl6RG9jW10gfSkge1xuICBjb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcbiAgY29uc3QgeyBpc1NpZ25lZEluIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IFthbnN3ZXJzLCBzZXRBbnN3ZXJzXSA9IHVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIG51bWJlcj4+KHt9KTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlPChIb21lUXVpelJlc3VsdCAmIHsgZXJyb3I/OiBib29sZWFuIH0pIHwgeyBlcnJvcjogdHJ1ZTsgcGVyY2VudGFnZT86IHVuZGVmaW5lZDsgc2NvcmU/OiB1bmRlZmluZWQ7IHRvdGFsPzogdW5kZWZpbmVkIH0gfCBudWxsPihudWxsKTtcbiAgY29uc3Qgc3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghaXNTaWduZWRJbikgeyBzZXRSZXN1bHQoeyBlcnJvcjogdHJ1ZSB9KTsgcmV0dXJuOyB9XG4gICAgdHJ5IHsgc2V0UmVzdWx0KGF3YWl0IGFwaVBvc3Q8SG9tZVF1aXpSZXN1bHQ+KFwiL3F1aXovc3VibWl0XCIsIHsgYW5zd2VycyB9KSk7IH0gY2F0Y2ggeyBzZXRSZXN1bHQoeyBlcnJvcjogdHJ1ZSB9KTsgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gcXVpei1zZWN0aW9uXCIgaWQ9XCJxdWl6XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGluZ1wiPjxkaXY+PHNwYW4gY2xhc3NOYW1lPVwia2lja2VyXCI+e3QoXCJxdWl6LmtpY2tlclwiKX08L3NwYW4+PGgyPnt0KFwicXVpei50aXRsZVwiKX08L2gyPjwvZGl2PjxzcGFuIGNsYXNzTmFtZT1cImhlYWRpbmctbm90ZVwiPnt0KFwicXVpei5ub3RlXCIpfTwvc3Bhbj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVpei1sYXlvdXRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWl6LWxpc3RcIj57cXVlc3Rpb25zLm1hcCgocSwgaSkgPT4gPGFydGljbGUgY2xhc3NOYW1lPVwicXVpei1xdWVzdGlvblwiIGtleT17cS5pZH0+PHNwYW4gY2xhc3NOYW1lPVwicXVlc3Rpb24tbnVtYmVyXCI+MHtpICsgMX08L3NwYW4+PGgzPnt0KGBxdWl6LiR7cS5pZH0ucXVlc3Rpb25gKX08L2gzPjxkaXYgY2xhc3NOYW1lPVwicXVpei1vcHRpb25zXCI+e3Eub3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IDxsYWJlbCBrZXk9e29wdGlvbn0gY2xhc3NOYW1lPXthbnN3ZXJzW3EuaWRdID09PSBpbmRleCA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9PjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPXtgcS0ke3EuaWR9YH0gY2hlY2tlZD17YW5zd2Vyc1txLmlkXSA9PT0gaW5kZXh9IG9uQ2hhbmdlPXsoKSA9PiBzZXRBbnN3ZXJzKHsgLi4uYW5zd2VycywgW3EuaWRdOiBpbmRleCB9KX0gZGF0YS10ZXN0aWQ9e2BxdWl6LSR7cS5pZH0tb3B0aW9uLSR7aW5kZXh9YH0gLz57dChgcXVpei4ke3EuaWR9Lm9wdGlvbi4ke2luZGV4fWApfTwvbGFiZWw+KX08L2Rpdj48L2FydGljbGU+KX08L2Rpdj5cbiAgICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cInF1aXotc2lkZVwiPjxkaXYgY2xhc3NOYW1lPVwic2NvcmUtcmluZ1wiPjxzcGFuIGRhdGEtdGVzdGlkPVwicXVpei1zY29yZVwiPntyZXN1bHQ/LnBlcmNlbnRhZ2UgPz8gXCLigJRcIn08L3NwYW4+PHNtYWxsPntyZXN1bHQgJiYgIXJlc3VsdC5lcnJvciA/IHQoXCJxdWl6LnNjb3JlUGN0XCIpIDogdChcInF1aXouc2NvcmVcIil9PC9zbWFsbD48L2Rpdj57cmVzdWx0Py5lcnJvciA/IDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIiBkYXRhLXRlc3RpZD1cInF1aXotZXJyb3JcIj57dChcInF1aXouc2lnbkluXCIpfTwvcD4gOiByZXN1bHQgPyA8cCBkYXRhLXRlc3RpZD1cInF1aXotcmVzdWx0XCI+e3QoXCJxdWl6LnNjb3JlZFwiLCB7IHNjb3JlOiByZXN1bHQuc2NvcmUgPz8gMCwgdG90YWw6IHJlc3VsdC50b3RhbCA/PyAwIH0pfTwvcD4gOiBpc1NpZ25lZEluID8gbnVsbCA6IDxwPnt0KFwicXVpei5pbnRyb1wiKX08L3A+fTxidXR0b24gY2xhc3NOYW1lPVwicHJpbWFyeS1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiB2b2lkIHN1Ym1pdCgpfSBkYXRhLXRlc3RpZD1cInN1Ym1pdC1xdWl6LWJ1dHRvblwiPnt0KFwicXVpei5zdWJtaXRcIil9IDxBcnJvd1JpZ2h0IHNpemU9ezE2fSAvPjwvYnV0dG9uPjwvYXNpZGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoeyBxdWVyeUtleTogW1wiY29udGVudFwiXSwgcXVlcnlGbjogKCkgPT4gYXBpR2V0PENvbnRlbnREb2M+KFwiL2NvbnRlbnRcIikgfSk7XG4gIGNvbnN0IGNvbnRlbnQgPSBkYXRhIHx8IHsgbGVzc29uczogW10sIHNjaGVtZXM6IFtdLCBxdWl6OiBbXSB9O1xuICB1c2VTY3JvbGxSZXZlYWwoKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlcm8gLz5cbiAgICAgIDxMZWFybiAvPlxuICAgICAgPFRvb2xzIC8+XG4gICAgICA8U2ltdWxhdG9yIC8+XG4gICAgICA8U2NoZW1lcyBzY2hlbWVzPXtjb250ZW50LnNjaGVtZXN9IC8+XG4gICAgICA8U2FmZXR5IC8+XG4gICAgICA8UXVpeiBxdWVzdGlvbnM9e2NvbnRlbnQucXVpen0gLz5cbiAgICAgIDxBc3Npc3RhbnQgLz5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gY3RhLWJhbmRcIj48ZGl2PjxzcGFuIGNsYXNzTmFtZT1cImtpY2tlclwiPnt0KFwiY3RhLmtpY2tlclwiKX08L3NwYW4+PGgyPnt0KFwiY3RhLnRpdGxlXCIpfTwvaDI+PHA+e3QoXCJjdGEudGV4dFwiKX08L3A+PC9kaXY+PGJ1dHRvbiBjbGFzc05hbWU9XCJwcmltYXJ5LWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKFwiL3NpZ24tdXBcIil9IGRhdGEtdGVzdGlkPVwiY3RhLXNpZ24tdXAtYnV0dG9uXCI+e3QoXCJjdGEuYnV0dG9uXCIpfSA8QXJyb3dSaWdodCBzaXplPXsxOH0gLz48L2J1dHRvbj48L3NlY3Rpb24+XG4gICAgPC8+XG4gICk7XG59XG4iXSwiZmlsZSI6Ii9hcHAvZnJvbnRlbmQvc3JjL3BhZ2VzL0hvbWUudHN4In0=