import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Tools.tsx");const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport6_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=a646c335";
import { ArrowRight, BarChart3, CircleAlert, LineChart as LineIcon, PieChart as PieIcon, Sparkles, Target, TrendingUp } from "/src/lib/lucide-react.tsx";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "/src/lib/recharts.tsx";
import { apiPost } from "/src/lib/api.ts";
import { useI18n } from "/src/lib/i18n.tsx";
import { useTheme } from "/src/lib/theme.tsx";
var _jsxFileName = "/app/frontend/src/components/Tools.tsx";
import __vite__cjsImport6_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
var _s = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$();
export const money = (n) => `₹${Number(n || 0).toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;
export const short = (n) => n >= 1e7 ? `₹${(n / 1e7).toFixed(1)}Cr` : n >= 1e5 ? `₹${(n / 1e5).toFixed(1)}L` : `₹${Math.round(n / 1e3)}k`;
const TOOL_FIELDS = {
	sip: [
		[
			"monthly",
			"tools.monthly",
			"₹"
		],
		[
			"rate",
			"tools.expectedReturn",
			null,
			"%"
		],
		[
			"years",
			"tools.duration",
			null,
			"tools.years"
		]
	],
	interest: [
		[
			"principal",
			"tools.principal",
			"₹"
		],
		[
			"rate",
			"tools.annualRate",
			null,
			"%"
		],
		[
			"years",
			"tools.time",
			null,
			"tools.years"
		]
	],
	budget: [
		"income",
		"food",
		"travel",
		"education",
		"shopping",
		"other"
	].map((k) => [
		k,
		`tools.${k}`,
		"₹"
	]),
	goal: [
		[
			"target",
			"tools.target",
			"₹"
		],
		[
			"savings",
			"tools.saved",
			"₹"
		],
		[
			"months",
			"tools.timeAvailable",
			null,
			"tools.months"
		]
	],
	invest: [
		[
			"initial",
			"tools.investInitial",
			"₹"
		],
		[
			"monthly",
			"tools.investMonthly",
			"₹"
		],
		[
			"years",
			"tools.duration",
			null,
			"tools.years"
		],
		[
			"rate",
			"tools.expectedReturn",
			null,
			"%"
		]
	]
};
const cap = (s) => s[0].toUpperCase() + s.slice(1);
const INITIAL = {
	monthly: 2e3,
	rate: 12,
	years: 10,
	principal: 1e5,
	income: 4e4,
	food: 8e3,
	travel: 3e3,
	education: 4e3,
	shopping: 3e3,
	other: 2e3,
	target: 1e5,
	savings: 1e4,
	months: 12,
	initial: 5e4
};
const DURATIONS = [
	5,
	10,
	15,
	20,
	25
];
const RATES = [
	6,
	8,
	10,
	12,
	15
];
function Field({ label, value, onChange, prefix, suffix, test }) {
	return /* @__PURE__ */ _jsxDEV("label", {
		className: "field",
		"x-file-name": "Tools",
		"x-line-number": "44",
		"x-column": "4",
		"x-component": "label",
		"x-id": "Tools_44_4",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("span", {
			"x-file-name": "Tools",
			"x-line-number": "45",
			"x-column": "6",
			"x-component": "span",
			"x-id": "Tools_45_6",
			"x-dynamic": "true",
			"x-source-type": "prop",
			"x-source-var": "label",
			"x-source-editable": "false",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 57,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "input-wrap",
			"x-file-name": "Tools",
			"x-line-number": "46",
			"x-column": "6",
			"x-component": "div",
			"x-id": "Tools_46_6",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: [
				prefix && /* @__PURE__ */ _jsxDEV("em", {
					"x-file-name": "Tools",
					"x-line-number": "47",
					"x-column": "19",
					"x-component": "em",
					"x-id": "Tools_47_19",
					"x-dynamic": "true",
					"x-source-type": "prop",
					"x-source-var": "prefix",
					"x-source-editable": "false",
					children: prefix
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 59,
					columnNumber: 20
				}, this),
				/* @__PURE__ */ _jsxDEV("input", {
					type: "number",
					min: "0",
					value,
					onChange: (e) => onChange(e.target.value),
					"data-testid": test,
					"x-file-name": "Tools",
					"x-line-number": "48",
					"x-column": "8",
					"x-component": "input",
					"x-id": "Tools_48_8",
					"x-dynamic": "false"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 60,
					columnNumber: 9
				}, this),
				suffix && /* @__PURE__ */ _jsxDEV("em", {
					"x-file-name": "Tools",
					"x-line-number": "49",
					"x-column": "19",
					"x-component": "em",
					"x-id": "Tools_49_19",
					"x-dynamic": "true",
					"x-source-type": "prop",
					"x-source-var": "suffix",
					"x-source-editable": "false",
					children: suffix
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 61,
					columnNumber: 20
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 58,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 56,
		columnNumber: 10
	}, this);
}
_c = Field;
function Chips({ values, current, onPick, unit, test }) {
	_s();
	const { c } = useTheme();
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "prompt-list",
		style: { marginTop: 8 },
		"x-file-name": "Tools",
		"x-line-number": "58",
		"x-column": "4",
		"x-component": "div",
		"x-id": "Tools_58_4",
		"x-dynamic": "true",
		"x-source-type": "computed",
		"x-source-editable": "false",
		children: values.map((v) => /* @__PURE__ */ _jsxDEV("button", {
			type: "button",
			onClick: () => onPick(v),
			style: current === v ? {
				borderColor: c.primary,
				color: c.primary,
				background: c.chipBg
			} : undefined,
			"data-testid": `${test}-${v}`,
			"x-file-name": "Tools",
			"x-line-number": "60",
			"x-column": "8",
			"x-component": "button",
			"x-id": "Tools_60_8",
			"x-dynamic": "true",
			"x-source-type": "static-imported",
			"x-source-var": "values",
			"x-source-file-abs": "/app/frontend/src/components/Tools.tsx",
			"x-source-line": "38",
			"x-source-editable": "false",
			"x-array-var": "values",
			"x-array-line": "38",
			"x-array-item-param": "v",
			children: [v, unit]
		}, v, true, {
			fileName: _jsxFileName,
			lineNumber: 84,
			columnNumber: 24
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 81,
		columnNumber: 10
	}, this);
}
_s(Chips, "TrVmdCqFklHooSqKllbX2H/n/F4=", false, function() {
	return [useTheme];
});
_c2 = Chips;
function InvestResultView({ result }) {
	_s2();
	const { c } = useTheme();
	const { t } = useI18n();
	const compare = (result.scenarios || []).map((s) => ({
		name: `${s.years}${t("tools.years").slice(0, 1)} · ${s.rate}%`,
		invested: s.invested,
		returns: s.returns
	}));
	const label = {
		base: "Your plan",
		shorter: "Shorter time",
		longer: "Longer time",
		"lower-rate": "Lower return",
		"higher-rate": "Higher return"
	};
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "result-box",
		"data-testid": "invest-result",
		"x-file-name": "Tools",
		"x-line-number": "75",
		"x-column": "4",
		"x-component": "div",
		"x-id": "Tools_75_4",
		"x-dynamic": "false",
		children: [
			/* @__PURE__ */ _jsxDEV("div", {
				className: "result-values",
				"x-file-name": "Tools",
				"x-line-number": "76",
				"x-column": "6",
				"x-component": "div",
				"x-id": "Tools_76_6",
				"x-dynamic": "false",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						"x-file-name": "Tools",
						"x-line-number": "77",
						"x-column": "8",
						"x-component": "div",
						"x-id": "Tools_77_8",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("span", {
							"x-file-name": "Tools",
							"x-line-number": "77",
							"x-column": "13",
							"x-component": "span",
							"x-id": "Tools_77_13",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("tools.investInvested")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 119,
							columnNumber: 120
						}, this), /* @__PURE__ */ _jsxDEV("strong", {
							"data-testid": "invest-invested",
							"x-file-name": "Tools",
							"x-line-number": "77",
							"x-column": "53",
							"x-component": "strong",
							"x-id": "Tools_77_53",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: money(result.invested)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 119,
							columnNumber: 319
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 119,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						"x-file-name": "Tools",
						"x-line-number": "78",
						"x-column": "8",
						"x-component": "div",
						"x-id": "Tools_78_8",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("span", {
							"x-file-name": "Tools",
							"x-line-number": "78",
							"x-column": "13",
							"x-component": "span",
							"x-id": "Tools_78_13",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("tools.investGains")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 120,
							columnNumber: 120
						}, this), /* @__PURE__ */ _jsxDEV("strong", {
							"data-testid": "invest-returns",
							style: { color: c.accent },
							"x-file-name": "Tools",
							"x-line-number": "78",
							"x-column": "50",
							"x-component": "strong",
							"x-id": "Tools_78_50",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: money(result.returns)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 120,
							columnNumber: 316
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 120,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						"x-file-name": "Tools",
						"x-line-number": "79",
						"x-column": "8",
						"x-component": "div",
						"x-id": "Tools_79_8",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("span", {
							"x-file-name": "Tools",
							"x-line-number": "79",
							"x-column": "13",
							"x-component": "span",
							"x-id": "Tools_79_13",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("tools.investTotal")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 123,
							columnNumber: 120
						}, this), /* @__PURE__ */ _jsxDEV("strong", {
							"data-testid": "invest-total",
							style: { color: c.primary },
							"x-file-name": "Tools",
							"x-line-number": "79",
							"x-column": "50",
							"x-component": "strong",
							"x-id": "Tools_79_50",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: money(result.total)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 123,
							columnNumber: 316
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 123,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 118,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "invest-chart",
				"data-testid": "invest-growth-chart",
				"x-file-name": "Tools",
				"x-line-number": "81",
				"x-column": "6",
				"x-component": "div",
				"x-id": "Tools_81_6",
				"x-dynamic": "false",
				children: /* @__PURE__ */ _jsxDEV(ResponsiveContainer, {
					width: "100%",
					height: 260,
					"x-file-name": "Tools",
					"x-line-number": "82",
					"x-column": "8",
					"x-component": "ResponsiveContainer",
					"x-id": "Tools_82_8",
					"x-dynamic": "false",
					children: /* @__PURE__ */ _jsxDEV(AreaChart, {
						data: result.series,
						margin: {
							top: 10,
							right: 12,
							left: 4,
							bottom: 0
						},
						"x-file-name": "Tools",
						"x-line-number": "83",
						"x-column": "10",
						"x-component": "AreaChart",
						"x-id": "Tools_83_10",
						"x-dynamic": "false",
						children: [
							/* @__PURE__ */ _jsxDEV(CartesianGrid, {
								strokeDasharray: "3 3",
								vertical: false,
								stroke: c.grid,
								"x-file-name": "Tools",
								"x-line-number": "84",
								"x-column": "12",
								"x-component": "CartesianGrid",
								"x-id": "Tools_84_12",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 135,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV(XAxis, {
								dataKey: "year",
								tickFormatter: (y) => `Y${y}`,
								tick: { fontSize: 11 },
								"x-file-name": "Tools",
								"x-line-number": "85",
								"x-column": "12",
								"x-component": "XAxis",
								"x-id": "Tools_85_12",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 136,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV(YAxis, {
								tickFormatter: short,
								tick: { fontSize: 11 },
								width: 62,
								"x-file-name": "Tools",
								"x-line-number": "86",
								"x-column": "12",
								"x-component": "YAxis",
								"x-id": "Tools_86_12",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 139,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV(Tooltip, {
								formatter: (v, name) => [money(v), name],
								labelFormatter: (y) => `Year ${y}`
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 142,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV(Legend, {
								wrapperStyle: { fontSize: 12 },
								"x-file-name": "Tools",
								"x-line-number": "88",
								"x-column": "12",
								"x-component": "Legend",
								"x-id": "Tools_88_12",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 143,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV(Area, {
								type: "monotone",
								dataKey: "value",
								name: t("tools.chartTotal"),
								stroke: c.primary,
								fill: c.fill,
								strokeWidth: 2.5,
								"x-file-name": "Tools",
								"x-line-number": "89",
								"x-column": "12",
								"x-component": "Area",
								"x-id": "Tools_89_12",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 146,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV(Area, {
								type: "monotone",
								dataKey: "invested",
								name: t("tools.chartInvested"),
								stroke: c.muted,
								fill: c.fillSoft,
								strokeDasharray: "5 5",
								strokeWidth: 2,
								"x-file-name": "Tools",
								"x-line-number": "90",
								"x-column": "12",
								"x-component": "Area",
								"x-id": "Tools_90_12",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 147,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 129,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 128,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 127,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "invest-compare",
				"data-testid": "invest-scenarios",
				"x-file-name": "Tools",
				"x-line-number": "94",
				"x-column": "6",
				"x-component": "div",
				"x-id": "Tools_94_6",
				"x-dynamic": "false",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "row-head",
						"x-file-name": "Tools",
						"x-line-number": "95",
						"x-column": "8",
						"x-component": "div",
						"x-id": "Tools_95_8",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("h4", {
							"x-file-name": "Tools",
							"x-line-number": "95",
							"x-column": "34",
							"x-component": "h4",
							"x-id": "Tools_95_34",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("tools.investCompare")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 152,
							columnNumber: 141
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							"x-file-name": "Tools",
							"x-line-number": "95",
							"x-column": "69",
							"x-component": "span",
							"x-id": "Tools_95_69",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("tools.investCompareNote")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 152,
							columnNumber: 333
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 152,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "sim-cards",
						"x-file-name": "Tools",
						"x-line-number": "96",
						"x-column": "8",
						"x-component": "div",
						"x-id": "Tools_96_8",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: (result.scenarios || []).map((s) => /* @__PURE__ */ _jsxDEV("div", {
							className: "sim-card",
							style: { ["--c"]: s.id === "base" ? c.primary : s.id.includes("rate") ? "#f59e0b" : c.accent },
							"data-testid": `invest-scenario-${s.id}`,
							"x-file-name": "Tools",
							"x-line-number": "98",
							"x-column": "12",
							"x-component": "div",
							"x-id": "Tools_98_12",
							"x-dynamic": "false",
							children: [
								/* @__PURE__ */ _jsxDEV("span", {
									className: "sim-dot",
									"x-file-name": "Tools",
									"x-line-number": "99",
									"x-column": "14",
									"x-component": "span",
									"x-id": "Tools_99_14",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 157,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("strong", {
									"x-file-name": "Tools",
									"x-line-number": "100",
									"x-column": "14",
									"x-component": "strong",
									"x-id": "Tools_100_14",
									"x-dynamic": "true",
									"x-source-type": "computed",
									"x-source-editable": "false",
									children: label[s.id] || s.id
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 158,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("small", {
									"x-file-name": "Tools",
									"x-line-number": "101",
									"x-column": "14",
									"x-component": "small",
									"x-id": "Tools_101_14",
									"x-dynamic": "true",
									"x-source-type": "static-imported",
									"x-source-path": "years",
									"x-source-editable": "false",
									"x-array-item-param": "s",
									children: [
										/* @__PURE__ */ _jsxDEV("span", {
											"data-ve-dynamic": "true",
											"x-excluded": "true",
											style: { display: "contents" },
											"x-file-name": "Tools",
											"x-line-number": "101",
											"x-column": "14",
											"x-component": "small",
											"x-id": "Tools_101_14_expr0",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-path": "years",
											"x-source-editable": "false",
											"x-array-item-param": "s",
											children: s.years
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 159,
											columnNumber: 236
										}, this),
										" ",
										/* @__PURE__ */ _jsxDEV("span", {
											"data-ve-dynamic": "true",
											"x-excluded": "true",
											style: { display: "contents" },
											"x-file-name": "Tools",
											"x-line-number": "101",
											"x-column": "14",
											"x-component": "small",
											"x-id": "Tools_101_14_expr2",
											"x-dynamic": "true",
											"x-source-type": "computed",
											"x-source-editable": "false",
											children: t("tools.years")
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 161,
											columnNumber: 253
										}, this),
										" · ",
										/* @__PURE__ */ _jsxDEV("span", {
											"data-ve-dynamic": "true",
											"x-excluded": "true",
											style: { display: "contents" },
											"x-file-name": "Tools",
											"x-line-number": "101",
											"x-column": "14",
											"x-component": "small",
											"x-id": "Tools_101_14_expr4",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-path": "rate",
											"x-source-editable": "false",
											"x-array-item-param": "s",
											children: s.rate
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 163,
											columnNumber: 212
										}, this),
										"%"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 159,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("b", {
									"x-file-name": "Tools",
									"x-line-number": "102",
									"x-column": "14",
									"x-component": "b",
									"x-id": "Tools_102_14",
									"x-dynamic": "true",
									"x-source-type": "computed",
									"x-source-editable": "false",
									children: money(s.total)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 166,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("span", {
									className: "sim-sub",
									"x-file-name": "Tools",
									"x-line-number": "103",
									"x-column": "14",
									"x-component": "span",
									"x-id": "Tools_103_14",
									"x-dynamic": "true",
									"x-source-type": "computed",
									"x-source-editable": "false",
									children: [
										/* @__PURE__ */ _jsxDEV("span", {
											"data-ve-dynamic": "true",
											"x-excluded": "true",
											style: { display: "contents" },
											"x-file-name": "Tools",
											"x-line-number": "103",
											"x-column": "14",
											"x-component": "span",
											"x-id": "Tools_103_14_expr0",
											"x-dynamic": "true",
											"x-source-type": "computed",
											"x-source-editable": "false",
											children: t("tools.investInvested")
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 167,
											columnNumber: 202
										}, this),
										": ",
										/* @__PURE__ */ _jsxDEV("span", {
											"data-ve-dynamic": "true",
											"x-excluded": "true",
											style: { display: "contents" },
											"x-file-name": "Tools",
											"x-line-number": "103",
											"x-column": "14",
											"x-component": "span",
											"x-id": "Tools_103_14_expr2",
											"x-dynamic": "true",
											"x-source-type": "computed",
											"x-source-editable": "false",
											children: money(s.invested)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 169,
											columnNumber: 219
										}, this),
										" · ",
										/* @__PURE__ */ _jsxDEV("span", {
											"data-ve-dynamic": "true",
											"x-excluded": "true",
											style: { display: "contents" },
											"x-file-name": "Tools",
											"x-line-number": "103",
											"x-column": "14",
											"x-component": "span",
											"x-id": "Tools_103_14_expr4",
											"x-dynamic": "true",
											"x-source-type": "computed",
											"x-source-editable": "false",
											children: t("tools.investGains")
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 171,
											columnNumber: 212
										}, this),
										": ",
										/* @__PURE__ */ _jsxDEV("span", {
											"data-ve-dynamic": "true",
											"x-excluded": "true",
											style: { display: "contents" },
											"x-file-name": "Tools",
											"x-line-number": "103",
											"x-column": "14",
											"x-component": "span",
											"x-id": "Tools_103_14_expr6",
											"x-dynamic": "true",
											"x-source-type": "computed",
											"x-source-editable": "false",
											children: money(s.returns)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 173,
											columnNumber: 216
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 167,
									columnNumber: 15
								}, this)
							]
						}, s.id, true, {
							fileName: _jsxFileName,
							lineNumber: 154,
							columnNumber: 46
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 153,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "invest-compare-chart",
						"data-testid": "invest-compare-chart",
						"x-file-name": "Tools",
						"x-line-number": "107",
						"x-column": "8",
						"x-component": "div",
						"x-id": "Tools_107_8",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV(ResponsiveContainer, {
							width: "100%",
							height: 240,
							"x-file-name": "Tools",
							"x-line-number": "108",
							"x-column": "10",
							"x-component": "ResponsiveContainer",
							"x-id": "Tools_108_10",
							"x-dynamic": "false",
							children: /* @__PURE__ */ _jsxDEV(BarChart, {
								data: compare,
								margin: {
									top: 10,
									right: 12,
									left: 4,
									bottom: 0
								},
								"x-file-name": "Tools",
								"x-line-number": "109",
								"x-column": "12",
								"x-component": "BarChart",
								"x-id": "Tools_109_12",
								"x-dynamic": "false",
								children: [
									/* @__PURE__ */ _jsxDEV(CartesianGrid, {
										strokeDasharray: "3 3",
										vertical: false,
										stroke: c.grid,
										"x-file-name": "Tools",
										"x-line-number": "110",
										"x-column": "14",
										"x-component": "CartesianGrid",
										"x-id": "Tools_110_14",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 186,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV(XAxis, {
										dataKey: "name",
										tick: { fontSize: 11 },
										"x-file-name": "Tools",
										"x-line-number": "111",
										"x-column": "14",
										"x-component": "XAxis",
										"x-id": "Tools_111_14",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 187,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV(YAxis, {
										tickFormatter: short,
										tick: { fontSize: 11 },
										width: 62,
										"x-file-name": "Tools",
										"x-line-number": "112",
										"x-column": "14",
										"x-component": "YAxis",
										"x-id": "Tools_112_14",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 190,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV(Tooltip, { formatter: (v, name) => [money(v), name] }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 193,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV(Legend, {
										wrapperStyle: { fontSize: 12 },
										"x-file-name": "Tools",
										"x-line-number": "114",
										"x-column": "14",
										"x-component": "Legend",
										"x-id": "Tools_114_14",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 194,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV(Bar, {
										dataKey: "invested",
										stackId: "a",
										name: t("tools.investInvested"),
										fill: c.muted,
										"x-file-name": "Tools",
										"x-line-number": "115",
										"x-column": "14",
										"x-component": "Bar",
										"x-id": "Tools_115_14",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 197,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ _jsxDEV(Bar, {
										dataKey: "returns",
										stackId: "a",
										name: t("tools.investGains"),
										fill: c.accent,
										radius: [
											6,
											6,
											0,
											0
										],
										"x-file-name": "Tools",
										"x-line-number": "116",
										"x-column": "14",
										"x-component": "Bar",
										"x-id": "Tools_116_14",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 198,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 180,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 179,
							columnNumber: 11
						}, this), /* @__PURE__ */ _jsxDEV("small", {
							"x-file-name": "Tools",
							"x-line-number": "119",
							"x-column": "10",
							"x-component": "small",
							"x-id": "Tools_119_10",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: ["Stack height = ", /* @__PURE__ */ _jsxDEV("span", {
								"data-ve-dynamic": "true",
								"x-excluded": "true",
								style: { display: "contents" },
								"x-file-name": "Tools",
								"x-line-number": "119",
								"x-column": "10",
								"x-component": "small",
								"x-id": "Tools_119_10_expr1",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: t("tools.investTotal").toLowerCase()
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 201,
								columnNumber: 195
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 201,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 178,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 151,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "notice",
				"data-testid": "invest-disclaimer",
				"x-file-name": "Tools",
				"x-line-number": "122",
				"x-column": "6",
				"x-component": "div",
				"x-id": "Tools_122_6",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV(CircleAlert, {
					size: 18,
					"x-file-name": "Tools",
					"x-line-number": "122",
					"x-column": "62",
					"x-component": "CircleAlert",
					"x-id": "Tools_122_62",
					"x-dynamic": "false"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 206,
					columnNumber: 171
				}, this), /* @__PURE__ */ _jsxDEV("span", {
					"x-file-name": "Tools",
					"x-line-number": "122",
					"x-column": "87",
					"x-component": "span",
					"x-id": "Tools_122_87",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("tools.investRisk")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 206,
					columnNumber: 314
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 206,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 117,
		columnNumber: 10
	}, this);
}
_s2(InvestResultView, "LLP0V3ia7cs2TiwIAWYgIcTqzHs=", false, function() {
	return [useTheme, useI18n];
});
_c3 = InvestResultView;
function Result({ tab, result }) {
	_s3();
	const { c } = useTheme();
	const { t } = useI18n();
	if (result.error) return /* @__PURE__ */ _jsxDEV("div", {
		className: "error-box",
		"data-testid": "calculator-error",
		"x-file-name": "Tools",
		"x-line-number": "130",
		"x-column": "27",
		"x-component": "div",
		"x-id": "Tools_130_27",
		"x-dynamic": "true",
		"x-source-type": "computed",
		"x-source-editable": "false",
		children: t("tools.error")
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 222,
		columnNumber: 28
	}, this);
	if (tab === "invest") return /* @__PURE__ */ _jsxDEV(InvestResultView, {
		result,
		"x-file-name": "Tools",
		"x-line-number": "131",
		"x-column": "31",
		"x-component": "InvestResultView",
		"x-id": "Tools_131_31",
		"x-dynamic": "true",
		"x-excluded": "true"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 223,
		columnNumber: 32
	}, this);
	const labels = {
		sip: [
			["tools.totalInvested", money(result.invested)],
			["tools.estimatedValue", money(result.future_value)],
			["tools.estimatedGains", money(result.gains)]
		],
		interest: [
			["tools.simpleInterest", money(result.simple_interest)],
			["tools.compoundInterest", money(result.compound_interest)],
			["tools.compoundTotal", money(result.compound_total)]
		],
		budget: [
			["tools.totalExpenses", money(result.total)],
			["tools.balance", money(result.balance)],
			["tools.savingsRate", `${result.savings_percent}%`]
		],
		goal: [["tools.amountLeft", money(result.remaining)], ["tools.monthlyPlan", money(result.monthly)]]
	};
	const chartData = result.categories ? Object.entries(result.categories).map(([name, value]) => ({
		name: t(`tools.${name.toLowerCase()}`),
		value
	})) : [{
		name: t("tools.chartInvested"),
		value: result.invested || result.simple_interest || 0
	}, {
		name: t("tools.chartGrowth"),
		value: result.gains || result.compound_interest || result.monthly || 0
	}];
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "result-box",
		"data-testid": `${tab}-result`,
		"x-file-name": "Tools",
		"x-line-number": "142",
		"x-column": "4",
		"x-component": "div",
		"x-id": "Tools_142_4",
		"x-dynamic": "false",
		children: [
			/* @__PURE__ */ _jsxDEV("div", {
				className: "result-values",
				"x-file-name": "Tools",
				"x-line-number": "143",
				"x-column": "6",
				"x-component": "div",
				"x-id": "Tools_143_6",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: labels[tab].map(([label, value]) => /* @__PURE__ */ _jsxDEV("div", {
					"x-file-name": "Tools",
					"x-line-number": "143",
					"x-column": "74",
					"x-component": "div",
					"x-id": "Tools_143_74",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("span", {
						"x-file-name": "Tools",
						"x-line-number": "143",
						"x-column": "91",
						"x-component": "span",
						"x-id": "Tools_143_91",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t(label)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 241,
						columnNumber: 360
					}, this), /* @__PURE__ */ _jsxDEV("strong", {
						"x-file-name": "Tools",
						"x-line-number": "143",
						"x-column": "114",
						"x-component": "strong",
						"x-id": "Tools_143_114",
						"x-dynamic": "true",
						"x-source-type": "unknown",
						"x-source-var": "value",
						"x-source-editable": "false",
						children: value
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 241,
						columnNumber: 544
					}, this)]
				}, label, true, {
					fileName: _jsxFileName,
					lineNumber: 241,
					columnNumber: 233
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 241,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "result-chart",
				"x-file-name": "Tools",
				"x-line-number": "144",
				"x-column": "6",
				"x-component": "div",
				"x-id": "Tools_144_6",
				"x-dynamic": "false",
				children: /* @__PURE__ */ _jsxDEV(ResponsiveContainer, {
					width: "100%",
					height: 150,
					"x-file-name": "Tools",
					"x-line-number": "145",
					"x-column": "8",
					"x-component": "ResponsiveContainer",
					"x-id": "Tools_145_8",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: tab === "budget" ? /* @__PURE__ */ _jsxDEV(PieChart, {
						"x-file-name": "Tools",
						"x-line-number": "147",
						"x-column": "12",
						"x-component": "PieChart",
						"x-id": "Tools_147_12",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV(Pie, {
							data: chartData,
							dataKey: "value",
							nameKey: "name",
							innerRadius: 42,
							outerRadius: 64,
							paddingAngle: 3,
							"x-file-name": "Tools",
							"x-line-number": "147",
							"x-column": "22",
							"x-component": "Pie",
							"x-id": "Tools_147_22",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: chartData.map((_, i) => /* @__PURE__ */ _jsxDEV(Cell, {
								fill: [
									c.primary,
									c.accent,
									"#F59E0B",
									"#DC2626",
									"#8B5CF6"
								][i % 5],
								"x-file-name": "Tools",
								"x-line-number": "147",
								"x-column": "151",
								"x-component": "Cell",
								"x-id": "Tools_147_151",
								"x-dynamic": "true",
								"x-source-type": "external",
								"x-source-var": "chartData",
								"x-source-editable": "false",
								"x-array-var": "chartData",
								"x-array-item-param": "_"
							}, i, false, {
								fileName: _jsxFileName,
								lineNumber: 244,
								columnNumber: 445
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 244,
							columnNumber: 156
						}, this), /* @__PURE__ */ _jsxDEV(Tooltip, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 244,
							columnNumber: 773
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 244,
						columnNumber: 31
					}, this) : /* @__PURE__ */ _jsxDEV(BarChart, {
						data: chartData,
						"x-file-name": "Tools",
						"x-line-number": "149",
						"x-column": "12",
						"x-component": "BarChart",
						"x-id": "Tools_149_12",
						"x-dynamic": "false",
						children: [
							/* @__PURE__ */ _jsxDEV(CartesianGrid, {
								strokeDasharray: "3 3",
								vertical: false,
								"x-file-name": "Tools",
								"x-line-number": "149",
								"x-column": "39",
								"x-component": "CartesianGrid",
								"x-id": "Tools_149_39",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 244,
								columnNumber: 940
							}, this),
							/* @__PURE__ */ _jsxDEV(XAxis, {
								dataKey: "name",
								hide: true,
								"x-file-name": "Tools",
								"x-line-number": "149",
								"x-column": "95",
								"x-component": "XAxis",
								"x-id": "Tools_149_95",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 244,
								columnNumber: 1116
							}, this),
							/* @__PURE__ */ _jsxDEV(YAxis, {
								hide: true,
								"x-file-name": "Tools",
								"x-line-number": "149",
								"x-column": "124",
								"x-component": "YAxis",
								"x-id": "Tools_149_124",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 244,
								columnNumber: 1257
							}, this),
							/* @__PURE__ */ _jsxDEV(Tooltip, {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 244,
								columnNumber: 1385
							}, this),
							/* @__PURE__ */ _jsxDEV(Bar, {
								dataKey: "value",
								fill: c.primary,
								radius: [
									6,
									6,
									0,
									0
								],
								"x-file-name": "Tools",
								"x-line-number": "149",
								"x-column": "149",
								"x-component": "Bar",
								"x-id": "Tools_149_149",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 244,
								columnNumber: 1396
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 244,
						columnNumber: 798
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 243,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 242,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("small", {
				"x-file-name": "Tools",
				"x-line-number": "153",
				"x-column": "6",
				"x-component": "small",
				"x-id": "Tools_153_6",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: t("tools.estimate")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 247,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 240,
		columnNumber: 10
	}, this);
}
_s3(Result, "LLP0V3ia7cs2TiwIAWYgIcTqzHs=", false, function() {
	return [useTheme, useI18n];
});
_c4 = Result;
export function Tools() {
	_s4();
	const { c } = useTheme();
	const { t } = useI18n();
	const [tab, setTab] = useState("sip");
	const [form, setForm] = useState(INITIAL);
	const [result, setResult] = useState(null);
	const run = async (override) => {
		const f = override || form;
		const payload = Object.fromEntries(TOOL_FIELDS[tab].map(([k]) => [k, +f[k]]));
		try {
			setResult(await apiPost(`/calculators/${tab}`, payload));
		} catch {
			setResult({ error: true });
		}
	};
	const pick = (k, v) => {
		const next = {
			...form,
			[k]: v
		};
		setForm(next);
		void run(next);
	};
	const tabs = [
		{
			id: "sip",
			icon: TrendingUp
		},
		{
			id: "interest",
			icon: BarChart3
		},
		{
			id: "budget",
			icon: PieIcon
		},
		{
			id: "goal",
			icon: Target
		},
		{
			id: "invest",
			icon: LineIcon
		}
	];
	return /* @__PURE__ */ _jsxDEV("section", {
		className: "section tools-section",
		id: "tools",
		"x-file-name": "Tools",
		"x-line-number": "180",
		"x-column": "4",
		"x-component": "section",
		"x-id": "Tools_180_4",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "section-heading",
			"x-file-name": "Tools",
			"x-line-number": "181",
			"x-column": "6",
			"x-component": "div",
			"x-id": "Tools_181_6",
			"x-dynamic": "false",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				"x-file-name": "Tools",
				"x-line-number": "181",
				"x-column": "39",
				"x-component": "div",
				"x-id": "Tools_181_39",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("span", {
					className: "kicker",
					"x-file-name": "Tools",
					"x-line-number": "181",
					"x-column": "44",
					"x-component": "span",
					"x-id": "Tools_181_44",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("tools.kicker")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 296,
					columnNumber: 263
				}, this), /* @__PURE__ */ _jsxDEV("h2", {
					"x-file-name": "Tools",
					"x-line-number": "181",
					"x-column": "95",
					"x-component": "h2",
					"x-id": "Tools_181_95",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("tools.title")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 296,
					columnNumber: 475
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 296,
				columnNumber: 148
			}, this), /* @__PURE__ */ _jsxDEV("span", {
				className: "heading-note",
				"x-file-name": "Tools",
				"x-line-number": "181",
				"x-column": "128",
				"x-component": "span",
				"x-id": "Tools_181_128",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: t("tools.note")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 296,
				columnNumber: 667
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 296,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "tools-layout",
			"x-file-name": "Tools",
			"x-line-number": "182",
			"x-column": "6",
			"x-component": "div",
			"x-id": "Tools_182_6",
			"x-dynamic": "false",
			children: [/* @__PURE__ */ _jsxDEV("aside", {
				className: "tool-tabs",
				"x-file-name": "Tools",
				"x-line-number": "183",
				"x-column": "8",
				"x-component": "aside",
				"x-id": "Tools_183_8",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: tabs.map(({ id, icon: Icon }) => /* @__PURE__ */ _jsxDEV("button", {
					className: tab === id ? "active" : "",
					onClick: () => {
						setTab(id);
						setResult(null);
					},
					"data-testid": `calculator-tab-${id}`,
					"x-file-name": "Tools",
					"x-line-number": "185",
					"x-column": "12",
					"x-component": "button",
					"x-id": "Tools_185_12",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: [
						/* @__PURE__ */ _jsxDEV(Icon, {
							size: 18,
							"x-file-name": "Tools",
							"x-line-number": "186",
							"x-column": "14",
							"x-component": "Icon",
							"x-id": "Tools_186_14",
							"x-dynamic": "true"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 306,
							columnNumber: 15
						}, this),
						" ",
						t(`tools.tab${cap(id)}`)
					]
				}, id, true, {
					fileName: _jsxFileName,
					lineNumber: 302,
					columnNumber: 15
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 298,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("div", {
				className: "calculator-panel",
				"x-file-name": "Tools",
				"x-line-number": "190",
				"x-column": "8",
				"x-component": "div",
				"x-id": "Tools_190_8",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "calc-intro",
						"x-file-name": "Tools",
						"x-line-number": "191",
						"x-column": "10",
						"x-component": "div",
						"x-id": "Tools_191_10",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							"x-file-name": "Tools",
							"x-line-number": "191",
							"x-column": "38",
							"x-component": "div",
							"x-id": "Tools_191_38",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "kicker",
								"x-file-name": "Tools",
								"x-line-number": "191",
								"x-column": "43",
								"x-component": "span",
								"x-id": "Tools_191_43",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: t(`tools.kicker${cap(tab)}`)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 310,
								columnNumber: 264
							}, this), /* @__PURE__ */ _jsxDEV("h3", {
								"x-file-name": "Tools",
								"x-line-number": "191",
								"x-column": "105",
								"x-component": "h3",
								"x-id": "Tools_191_105",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: t(`tools.head${cap(tab)}`)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 310,
								columnNumber: 487
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 310,
							columnNumber: 149
						}, this), /* @__PURE__ */ _jsxDEV(Sparkles, {
							size: 22,
							color: c.primary,
							"x-file-name": "Tools",
							"x-line-number": "191",
							"x-column": "148",
							"x-component": "Sparkles",
							"x-id": "Tools_191_148",
							"x-dynamic": "false"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 310,
							columnNumber: 691
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 310,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "form-grid",
						style: tab === "invest" ? { gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))" } : undefined,
						"x-file-name": "Tools",
						"x-line-number": "192",
						"x-column": "10",
						"x-component": "div",
						"x-id": "Tools_192_10",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: TOOL_FIELDS[tab].map(([k, label, prefix, suffix]) => /* @__PURE__ */ _jsxDEV("div", {
							"x-file-name": "Tools",
							"x-line-number": "194",
							"x-column": "14",
							"x-component": "div",
							"x-id": "Tools_194_14",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: [
								/* @__PURE__ */ _jsxDEV(Field, {
									label: t(label),
									value: form[k],
									onChange: (v) => setForm({
										...form,
										[k]: v
									}),
									prefix,
									suffix: suffix && (suffix === "%" ? "%" : t(suffix)),
									test: `${tab}-${k}-input`,
									"x-file-name": "Tools",
									"x-line-number": "195",
									"x-column": "16",
									"x-component": "Field",
									"x-id": "Tools_195_16",
									"x-dynamic": "true"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 315,
									columnNumber: 17
								}, this),
								tab === "invest" && k === "years" && /* @__PURE__ */ _jsxDEV(Chips, {
									values: DURATIONS,
									current: +form.years,
									onPick: (v) => pick("years", v),
									unit: "y",
									test: "invest-years-chip",
									"x-file-name": "Tools",
									"x-line-number": "196",
									"x-column": "54",
									"x-component": "Chips",
									"x-id": "Tools_196_54",
									"x-dynamic": "true"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 319,
									columnNumber: 55
								}, this),
								tab === "invest" && k === "rate" && /* @__PURE__ */ _jsxDEV(Chips, {
									values: RATES,
									current: +form.rate,
									onPick: (v) => pick("rate", v),
									unit: "%",
									test: "invest-rate-chip",
									"x-file-name": "Tools",
									"x-line-number": "197",
									"x-column": "53",
									"x-component": "Chips",
									"x-id": "Tools_197_53",
									"x-dynamic": "true"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 320,
									columnNumber: 54
								}, this)
							]
						}, k, true, {
							fileName: _jsxFileName,
							lineNumber: 314,
							columnNumber: 67
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 311,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("button", {
						className: "primary-button calculate-button",
						onClick: () => void run(),
						"data-testid": `${tab}-calculate-button`,
						"x-file-name": "Tools",
						"x-line-number": "201",
						"x-column": "10",
						"x-component": "button",
						"x-id": "Tools_201_10",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: [
							t("tools.calculate"),
							" ",
							/* @__PURE__ */ _jsxDEV(ArrowRight, { size: 16 }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 323,
								columnNumber: 316
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 323,
						columnNumber: 11
					}, this),
					tab === "invest" && !result && /* @__PURE__ */ _jsxDEV("div", {
						className: "notice",
						"data-testid": "invest-disclaimer-pre",
						"x-file-name": "Tools",
						"x-line-number": "202",
						"x-column": "42",
						"x-component": "div",
						"x-id": "Tools_202_42",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV(CircleAlert, {
							size: 18,
							"x-file-name": "Tools",
							"x-line-number": "202",
							"x-column": "102",
							"x-component": "CircleAlert",
							"x-id": "Tools_202_102",
							"x-dynamic": "false"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 324,
							columnNumber: 213
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							"x-file-name": "Tools",
							"x-line-number": "202",
							"x-column": "127",
							"x-component": "span",
							"x-id": "Tools_202_127",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("tools.investRisk")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 324,
							columnNumber: 358
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 324,
						columnNumber: 43
					}, this),
					result && /* @__PURE__ */ _jsxDEV(Result, {
						tab,
						result,
						"x-file-name": "Tools",
						"x-line-number": "203",
						"x-column": "21",
						"x-component": "Result",
						"x-id": "Tools_203_21",
						"x-dynamic": "true",
						"x-excluded": "true"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 325,
						columnNumber: 22
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 309,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 297,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 295,
		columnNumber: 10
	}, this);
}
_s4(Tools, "6PfJ7Nlmy5vj0DDWAAHifp/VQV4=", false, function() {
	return [useTheme, useI18n];
});
_c5 = Tools;
var _c, _c2, _c3, _c4, _c5;
$RefreshReg$(_c, "Field");
$RefreshReg$(_c2, "Chips");
$RefreshReg$(_c3, "InvestResultView");
$RefreshReg$(_c4, "Result");
$RefreshReg$(_c5, "Tools");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/Tools.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/components/Tools.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/components/Tools.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/components/Tools.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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QUFTLGVBQVk7TUFBdUI7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO2dCQUEzRCxDQUE0RCx3QkFBQyxhQUFEO09BQWEsTUFBTTtPQUFHO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtNQUFBOzs7O2dCQUFHLHdCQUFDLFFBQUQ7T0FBSztPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO2lCQUFFQyxFQUFFLGtCQUFrQjtNQUFROzs7O2NBQU07Ozs7OztLQUM3SkQsVUFBVSx3QkFBQyxRQUFEO01BQWE0QjtNQUFhNUI7TUFBTztNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtLQUFBOzs7OztJQUN6Qzs7Ozs7V0FDRjs7Ozs7VUFDRTs7Ozs7O0FBRWIiLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkFycm93UmlnaHQiLCJCYXJDaGFydDMiLCJDaXJjbGVBbGVydCIsIkxpbmVDaGFydCIsIkxpbmVJY29uIiwiUGllQ2hhcnQiLCJQaWVJY29uIiwiU3BhcmtsZXMiLCJUYXJnZXQiLCJUcmVuZGluZ1VwIiwiQXJlYSIsIkFyZWFDaGFydCIsIkJhciIsIkJhckNoYXJ0IiwiQ2FydGVzaWFuR3JpZCIsIkNlbGwiLCJMZWdlbmQiLCJQaWUiLCJSZXNwb25zaXZlQ29udGFpbmVyIiwiVG9vbHRpcCIsIlhBeGlzIiwiWUF4aXMiLCJhcGlQb3N0IiwidXNlSTE4biIsInVzZVRoZW1lIiwibW9uZXkiLCJuIiwiTnVtYmVyIiwidG9Mb2NhbGVTdHJpbmciLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJzaG9ydCIsInRvRml4ZWQiLCJNYXRoIiwicm91bmQiLCJUT09MX0ZJRUxEUyIsInNpcCIsImludGVyZXN0IiwiYnVkZ2V0IiwibWFwIiwiayIsImdvYWwiLCJpbnZlc3QiLCJjYXAiLCJzIiwidG9VcHBlckNhc2UiLCJzbGljZSIsIklOSVRJQUwiLCJtb250aGx5IiwicmF0ZSIsInllYXJzIiwicHJpbmNpcGFsIiwiaW5jb21lIiwiZm9vZCIsInRyYXZlbCIsImVkdWNhdGlvbiIsInNob3BwaW5nIiwib3RoZXIiLCJ0YXJnZXQiLCJzYXZpbmdzIiwibW9udGhzIiwiaW5pdGlhbCIsIkRVUkFUSU9OUyIsIlJBVEVTIiwiRmllbGQiLCJsYWJlbCIsInZhbHVlIiwib25DaGFuZ2UiLCJwcmVmaXgiLCJzdWZmaXgiLCJ0ZXN0IiwiZSIsIkNoaXBzIiwidmFsdWVzIiwiY3VycmVudCIsIm9uUGljayIsInVuaXQiLCJjIiwibWFyZ2luVG9wIiwidiIsImJvcmRlckNvbG9yIiwicHJpbWFyeSIsImNvbG9yIiwiYmFja2dyb3VuZCIsImNoaXBCZyIsInVuZGVmaW5lZCIsIkludmVzdFJlc3VsdFZpZXciLCJyZXN1bHQiLCJ0IiwiY29tcGFyZSIsInNjZW5hcmlvcyIsIm5hbWUiLCJpbnZlc3RlZCIsInJldHVybnMiLCJiYXNlIiwic2hvcnRlciIsImxvbmdlciIsImFjY2VudCIsInRvdGFsIiwic2VyaWVzIiwidG9wIiwicmlnaHQiLCJsZWZ0IiwiYm90dG9tIiwiZ3JpZCIsInkiLCJmb250U2l6ZSIsImZpbGwiLCJtdXRlZCIsImZpbGxTb2Z0IiwiaWQiLCJpbmNsdWRlcyIsImRpc3BsYXkiLCJ0b0xvd2VyQ2FzZSIsIlJlc3VsdCIsInRhYiIsImVycm9yIiwibGFiZWxzIiwiZnV0dXJlX3ZhbHVlIiwiZ2FpbnMiLCJzaW1wbGVfaW50ZXJlc3QiLCJjb21wb3VuZF9pbnRlcmVzdCIsImNvbXBvdW5kX3RvdGFsIiwiYmFsYW5jZSIsInNhdmluZ3NfcGVyY2VudCIsInJlbWFpbmluZyIsImNoYXJ0RGF0YSIsImNhdGVnb3JpZXMiLCJPYmplY3QiLCJlbnRyaWVzIiwiXyIsImkiLCJUb29scyIsInNldFRhYiIsImZvcm0iLCJzZXRGb3JtIiwic2V0UmVzdWx0IiwicnVuIiwib3ZlcnJpZGUiLCJmIiwicGF5bG9hZCIsImZyb21FbnRyaWVzIiwicGljayIsIm5leHQiLCJ0YWJzIiwiaWNvbiIsIkljb24iLCJncmlkVGVtcGxhdGVDb2x1bW5zIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlRvb2xzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXJyb3dSaWdodCwgQmFyQ2hhcnQzLCBDaXJjbGVBbGVydCwgTGluZUNoYXJ0IGFzIExpbmVJY29uLCBQaWVDaGFydCBhcyBQaWVJY29uLCBTcGFya2xlcywgVGFyZ2V0LCBUcmVuZGluZ1VwIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHtcbiAgQXJlYSxcbiAgQXJlYUNoYXJ0LFxuICBCYXIsXG4gIEJhckNoYXJ0LFxuICBDYXJ0ZXNpYW5HcmlkLFxuICBDZWxsLFxuICBMZWdlbmQsXG4gIFBpZSxcbiAgUGllQ2hhcnQsXG4gIFJlc3BvbnNpdmVDb250YWluZXIsXG4gIFRvb2x0aXAsXG4gIFhBeGlzLFxuICBZQXhpcyxcbn0gZnJvbSBcInJlY2hhcnRzXCI7XG5pbXBvcnQgeyBhcGlQb3N0IH0gZnJvbSBcIkAvbGliL2FwaVwiO1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gXCJAL2xpYi9pMThuXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJAL2xpYi90aGVtZVwiO1xuaW1wb3J0IHR5cGUgeyBUb29sUmVzdWx0IH0gZnJvbSBcIkAvbGliL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBtb25leSA9IChuOiBudW1iZXIgfCB1bmRlZmluZWQpID0+IGDigrkke051bWJlcihuIHx8IDApLnRvTG9jYWxlU3RyaW5nKFwiZW4tSU5cIiwgeyBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSl9YDtcbmV4cG9ydCBjb25zdCBzaG9ydCA9IChuOiBudW1iZXIpID0+IChuID49IDFlNyA/IGDigrkkeyhuIC8gMWU3KS50b0ZpeGVkKDEpfUNyYCA6IG4gPj0gMWU1ID8gYOKCuSR7KG4gLyAxZTUpLnRvRml4ZWQoMSl9TGAgOiBg4oK5JHtNYXRoLnJvdW5kKG4gLyAxMDAwKX1rYCk7XG5cbnR5cGUgVGFiID0gXCJzaXBcIiB8IFwiaW50ZXJlc3RcIiB8IFwiYnVkZ2V0XCIgfCBcImdvYWxcIiB8IFwiaW52ZXN0XCI7XG50eXBlIEZpZWxkRGVmID0gW3N0cmluZywgc3RyaW5nLCBzdHJpbmcgfCBudWxsLCBzdHJpbmc/XTtcblxuY29uc3QgVE9PTF9GSUVMRFM6IFJlY29yZDxUYWIsIEZpZWxkRGVmW10+ID0ge1xuICBzaXA6IFtbXCJtb250aGx5XCIsIFwidG9vbHMubW9udGhseVwiLCBcIuKCuVwiXSwgW1wicmF0ZVwiLCBcInRvb2xzLmV4cGVjdGVkUmV0dXJuXCIsIG51bGwsIFwiJVwiXSwgW1wieWVhcnNcIiwgXCJ0b29scy5kdXJhdGlvblwiLCBudWxsLCBcInRvb2xzLnllYXJzXCJdXSxcbiAgaW50ZXJlc3Q6IFtbXCJwcmluY2lwYWxcIiwgXCJ0b29scy5wcmluY2lwYWxcIiwgXCLigrlcIl0sIFtcInJhdGVcIiwgXCJ0b29scy5hbm51YWxSYXRlXCIsIG51bGwsIFwiJVwiXSwgW1wieWVhcnNcIiwgXCJ0b29scy50aW1lXCIsIG51bGwsIFwidG9vbHMueWVhcnNcIl1dLFxuICBidWRnZXQ6IFtcImluY29tZVwiLCBcImZvb2RcIiwgXCJ0cmF2ZWxcIiwgXCJlZHVjYXRpb25cIiwgXCJzaG9wcGluZ1wiLCBcIm90aGVyXCJdLm1hcCgoayk6IEZpZWxkRGVmID0+IFtrLCBgdG9vbHMuJHtrfWAsIFwi4oK5XCJdKSxcbiAgZ29hbDogW1tcInRhcmdldFwiLCBcInRvb2xzLnRhcmdldFwiLCBcIuKCuVwiXSwgW1wic2F2aW5nc1wiLCBcInRvb2xzLnNhdmVkXCIsIFwi4oK5XCJdLCBbXCJtb250aHNcIiwgXCJ0b29scy50aW1lQXZhaWxhYmxlXCIsIG51bGwsIFwidG9vbHMubW9udGhzXCJdXSxcbiAgaW52ZXN0OiBbW1wiaW5pdGlhbFwiLCBcInRvb2xzLmludmVzdEluaXRpYWxcIiwgXCLigrlcIl0sIFtcIm1vbnRobHlcIiwgXCJ0b29scy5pbnZlc3RNb250aGx5XCIsIFwi4oK5XCJdLCBbXCJ5ZWFyc1wiLCBcInRvb2xzLmR1cmF0aW9uXCIsIG51bGwsIFwidG9vbHMueWVhcnNcIl0sIFtcInJhdGVcIiwgXCJ0b29scy5leHBlY3RlZFJldHVyblwiLCBudWxsLCBcIiVcIl1dLFxufTtcbmNvbnN0IGNhcCA9IChzOiBzdHJpbmcpID0+IHNbMF0udG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG5jb25zdCBJTklUSUFMOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXIgfCBzdHJpbmc+ID0geyBtb250aGx5OiAyMDAwLCByYXRlOiAxMiwgeWVhcnM6IDEwLCBwcmluY2lwYWw6IDEwMDAwMCwgaW5jb21lOiA0MDAwMCwgZm9vZDogODAwMCwgdHJhdmVsOiAzMDAwLCBlZHVjYXRpb246IDQwMDAsIHNob3BwaW5nOiAzMDAwLCBvdGhlcjogMjAwMCwgdGFyZ2V0OiAxMDAwMDAsIHNhdmluZ3M6IDEwMDAwLCBtb250aHM6IDEyLCBpbml0aWFsOiA1MDAwMCB9O1xuY29uc3QgRFVSQVRJT05TID0gWzUsIDEwLCAxNSwgMjAsIDI1XTtcbmNvbnN0IFJBVEVTID0gWzYsIDgsIDEwLCAxMiwgMTVdO1xuXG5pbnRlcmZhY2UgRmllbGRQcm9wcyB7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfCBzdHJpbmc7IG9uQ2hhbmdlOiAodjogc3RyaW5nKSA9PiB2b2lkOyBwcmVmaXg/OiBzdHJpbmcgfCBudWxsOyBzdWZmaXg/OiBzdHJpbmc7IHRlc3Q6IHN0cmluZyB9XG5mdW5jdGlvbiBGaWVsZCh7IGxhYmVsLCB2YWx1ZSwgb25DaGFuZ2UsIHByZWZpeCwgc3VmZml4LCB0ZXN0IH06IEZpZWxkUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgIDxzcGFuPntsYWJlbH08L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBcIj5cbiAgICAgICAge3ByZWZpeCAmJiA8ZW0+e3ByZWZpeH08L2VtPn1cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtaW49XCIwXCIgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0gZGF0YS10ZXN0aWQ9e3Rlc3R9IC8+XG4gICAgICAgIHtzdWZmaXggJiYgPGVtPntzdWZmaXh9PC9lbT59XG4gICAgICA8L2Rpdj5cbiAgICA8L2xhYmVsPlxuICApO1xufVxuXG5mdW5jdGlvbiBDaGlwcyh7IHZhbHVlcywgY3VycmVudCwgb25QaWNrLCB1bml0LCB0ZXN0IH06IHsgdmFsdWVzOiBudW1iZXJbXTsgY3VycmVudDogbnVtYmVyOyBvblBpY2s6ICh2OiBudW1iZXIpID0+IHZvaWQ7IHVuaXQ6IHN0cmluZzsgdGVzdDogc3RyaW5nIH0pIHtcbiAgY29uc3QgeyBjIH0gPSB1c2VUaGVtZSgpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvbXB0LWxpc3RcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDggfX0+XG4gICAgICB7dmFsdWVzLm1hcCgodikgPT4gKFxuICAgICAgICA8YnV0dG9uIGtleT17dn0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IG9uUGljayh2KX0gc3R5bGU9e2N1cnJlbnQgPT09IHYgPyB7IGJvcmRlckNvbG9yOiBjLnByaW1hcnksIGNvbG9yOiBjLnByaW1hcnksIGJhY2tncm91bmQ6IGMuY2hpcEJnIH0gOiB1bmRlZmluZWR9IGRhdGEtdGVzdGlkPXtgJHt0ZXN0fS0ke3Z9YH0+XG4gICAgICAgICAge3Z9XG4gICAgICAgICAge3VuaXR9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIEludmVzdFJlc3VsdFZpZXcoeyByZXN1bHQgfTogeyByZXN1bHQ6IFRvb2xSZXN1bHQgfSkge1xuICBjb25zdCB7IGMgfSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuICBjb25zdCBjb21wYXJlID0gKHJlc3VsdC5zY2VuYXJpb3MgfHwgW10pLm1hcCgocykgPT4gKHsgbmFtZTogYCR7cy55ZWFyc30ke3QoXCJ0b29scy55ZWFyc1wiKS5zbGljZSgwLCAxKX0gwrcgJHtzLnJhdGV9JWAsIGludmVzdGVkOiBzLmludmVzdGVkLCByZXR1cm5zOiBzLnJldHVybnMgfSkpO1xuICBjb25zdCBsYWJlbDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHsgYmFzZTogXCJZb3VyIHBsYW5cIiwgc2hvcnRlcjogXCJTaG9ydGVyIHRpbWVcIiwgbG9uZ2VyOiBcIkxvbmdlciB0aW1lXCIsIFwibG93ZXItcmF0ZVwiOiBcIkxvd2VyIHJldHVyblwiLCBcImhpZ2hlci1yYXRlXCI6IFwiSGlnaGVyIHJldHVyblwiIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtYm94XCIgZGF0YS10ZXN0aWQ9XCJpbnZlc3QtcmVzdWx0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdC12YWx1ZXNcIj5cbiAgICAgICAgPGRpdj48c3Bhbj57dChcInRvb2xzLmludmVzdEludmVzdGVkXCIpfTwvc3Bhbj48c3Ryb25nIGRhdGEtdGVzdGlkPVwiaW52ZXN0LWludmVzdGVkXCI+e21vbmV5KHJlc3VsdC5pbnZlc3RlZCl9PC9zdHJvbmc+PC9kaXY+XG4gICAgICAgIDxkaXY+PHNwYW4+e3QoXCJ0b29scy5pbnZlc3RHYWluc1wiKX08L3NwYW4+PHN0cm9uZyBkYXRhLXRlc3RpZD1cImludmVzdC1yZXR1cm5zXCIgc3R5bGU9e3sgY29sb3I6IGMuYWNjZW50IH19Pnttb25leShyZXN1bHQucmV0dXJucyl9PC9zdHJvbmc+PC9kaXY+XG4gICAgICAgIDxkaXY+PHNwYW4+e3QoXCJ0b29scy5pbnZlc3RUb3RhbFwiKX08L3NwYW4+PHN0cm9uZyBkYXRhLXRlc3RpZD1cImludmVzdC10b3RhbFwiIHN0eWxlPXt7IGNvbG9yOiBjLnByaW1hcnkgfX0+e21vbmV5KHJlc3VsdC50b3RhbCl9PC9zdHJvbmc+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZXN0LWNoYXJ0XCIgZGF0YS10ZXN0aWQ9XCJpbnZlc3QtZ3Jvd3RoLWNoYXJ0XCI+XG4gICAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyIHdpZHRoPVwiMTAwJVwiIGhlaWdodD17MjYwfT5cbiAgICAgICAgICA8QXJlYUNoYXJ0IGRhdGE9e3Jlc3VsdC5zZXJpZXN9IG1hcmdpbj17eyB0b3A6IDEwLCByaWdodDogMTIsIGxlZnQ6IDQsIGJvdHRvbTogMCB9fT5cbiAgICAgICAgICAgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZURhc2hhcnJheT1cIjMgM1wiIHZlcnRpY2FsPXtmYWxzZX0gc3Ryb2tlPXtjLmdyaWR9IC8+XG4gICAgICAgICAgICA8WEF4aXMgZGF0YUtleT1cInllYXJcIiB0aWNrRm9ybWF0dGVyPXsoeTogbnVtYmVyKSA9PiBgWSR7eX1gfSB0aWNrPXt7IGZvbnRTaXplOiAxMSB9fSAvPlxuICAgICAgICAgICAgPFlBeGlzIHRpY2tGb3JtYXR0ZXI9e3Nob3J0fSB0aWNrPXt7IGZvbnRTaXplOiAxMSB9fSB3aWR0aD17NjJ9IC8+XG4gICAgICAgICAgICA8VG9vbHRpcCBmb3JtYXR0ZXI9eyh2OiBudW1iZXIsIG5hbWU6IHN0cmluZykgPT4gW21vbmV5KHYpLCBuYW1lXX0gbGFiZWxGb3JtYXR0ZXI9eyh5OiBzdHJpbmcpID0+IGBZZWFyICR7eX1gfSAvPlxuICAgICAgICAgICAgPExlZ2VuZCB3cmFwcGVyU3R5bGU9e3sgZm9udFNpemU6IDEyIH19IC8+XG4gICAgICAgICAgICA8QXJlYSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwidmFsdWVcIiBuYW1lPXt0KFwidG9vbHMuY2hhcnRUb3RhbFwiKX0gc3Ryb2tlPXtjLnByaW1hcnl9IGZpbGw9e2MuZmlsbH0gc3Ryb2tlV2lkdGg9ezIuNX0gLz5cbiAgICAgICAgICAgIDxBcmVhIHR5cGU9XCJtb25vdG9uZVwiIGRhdGFLZXk9XCJpbnZlc3RlZFwiIG5hbWU9e3QoXCJ0b29scy5jaGFydEludmVzdGVkXCIpfSBzdHJva2U9e2MubXV0ZWR9IGZpbGw9e2MuZmlsbFNvZnR9IHN0cm9rZURhc2hhcnJheT1cIjUgNVwiIHN0cm9rZVdpZHRoPXsyfSAvPlxuICAgICAgICAgIDwvQXJlYUNoYXJ0PlxuICAgICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW52ZXN0LWNvbXBhcmVcIiBkYXRhLXRlc3RpZD1cImludmVzdC1zY2VuYXJpb3NcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctaGVhZFwiPjxoND57dChcInRvb2xzLmludmVzdENvbXBhcmVcIil9PC9oND48c3Bhbj57dChcInRvb2xzLmludmVzdENvbXBhcmVOb3RlXCIpfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW0tY2FyZHNcIj5cbiAgICAgICAgICB7KHJlc3VsdC5zY2VuYXJpb3MgfHwgW10pLm1hcCgocykgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW0tY2FyZFwiIGtleT17cy5pZH0gc3R5bGU9e3sgW1wiLS1jXCIgYXMgc3RyaW5nXTogcy5pZCA9PT0gXCJiYXNlXCIgPyBjLnByaW1hcnkgOiBzLmlkLmluY2x1ZGVzKFwicmF0ZVwiKSA/IFwiI2Y1OWUwYlwiIDogYy5hY2NlbnQgfX0gZGF0YS10ZXN0aWQ9e2BpbnZlc3Qtc2NlbmFyaW8tJHtzLmlkfWB9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaW0tZG90XCIgLz5cbiAgICAgICAgICAgICAgPHN0cm9uZz57bGFiZWxbcy5pZF0gfHwgcy5pZH08L3N0cm9uZz5cbiAgICAgICAgICAgICAgPHNtYWxsPntzLnllYXJzfSB7dChcInRvb2xzLnllYXJzXCIpfSDCtyB7cy5yYXRlfSU8L3NtYWxsPlxuICAgICAgICAgICAgICA8Yj57bW9uZXkocy50b3RhbCl9PC9iPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaW0tc3ViXCI+e3QoXCJ0b29scy5pbnZlc3RJbnZlc3RlZFwiKX06IHttb25leShzLmludmVzdGVkKX0gwrcge3QoXCJ0b29scy5pbnZlc3RHYWluc1wiKX06IHttb25leShzLnJldHVybnMpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnZlc3QtY29tcGFyZS1jaGFydFwiIGRhdGEtdGVzdGlkPVwiaW52ZXN0LWNvbXBhcmUtY2hhcnRcIj5cbiAgICAgICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lciB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9ezI0MH0+XG4gICAgICAgICAgICA8QmFyQ2hhcnQgZGF0YT17Y29tcGFyZX0gbWFyZ2luPXt7IHRvcDogMTAsIHJpZ2h0OiAxMiwgbGVmdDogNCwgYm90dG9tOiAwIH19PlxuICAgICAgICAgICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2VEYXNoYXJyYXk9XCIzIDNcIiB2ZXJ0aWNhbD17ZmFsc2V9IHN0cm9rZT17Yy5ncmlkfSAvPlxuICAgICAgICAgICAgICA8WEF4aXMgZGF0YUtleT1cIm5hbWVcIiB0aWNrPXt7IGZvbnRTaXplOiAxMSB9fSAvPlxuICAgICAgICAgICAgICA8WUF4aXMgdGlja0Zvcm1hdHRlcj17c2hvcnR9IHRpY2s9e3sgZm9udFNpemU6IDExIH19IHdpZHRoPXs2Mn0gLz5cbiAgICAgICAgICAgICAgPFRvb2x0aXAgZm9ybWF0dGVyPXsodjogbnVtYmVyLCBuYW1lOiBzdHJpbmcpID0+IFttb25leSh2KSwgbmFtZV19IC8+XG4gICAgICAgICAgICAgIDxMZWdlbmQgd3JhcHBlclN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fSAvPlxuICAgICAgICAgICAgICA8QmFyIGRhdGFLZXk9XCJpbnZlc3RlZFwiIHN0YWNrSWQ9XCJhXCIgbmFtZT17dChcInRvb2xzLmludmVzdEludmVzdGVkXCIpfSBmaWxsPXtjLm11dGVkfSAvPlxuICAgICAgICAgICAgICA8QmFyIGRhdGFLZXk9XCJyZXR1cm5zXCIgc3RhY2tJZD1cImFcIiBuYW1lPXt0KFwidG9vbHMuaW52ZXN0R2FpbnNcIil9IGZpbGw9e2MuYWNjZW50fSByYWRpdXM9e1s2LCA2LCAwLCAwXX0gLz5cbiAgICAgICAgICAgIDwvQmFyQ2hhcnQ+XG4gICAgICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxuICAgICAgICAgIDxzbWFsbD5TdGFjayBoZWlnaHQgPSB7dChcInRvb2xzLmludmVzdFRvdGFsXCIpLnRvTG93ZXJDYXNlKCl9PC9zbWFsbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90aWNlXCIgZGF0YS10ZXN0aWQ9XCJpbnZlc3QtZGlzY2xhaW1lclwiPjxDaXJjbGVBbGVydCBzaXplPXsxOH0gLz48c3Bhbj57dChcInRvb2xzLmludmVzdFJpc2tcIil9PC9zcGFuPjwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBSZXN1bHQoeyB0YWIsIHJlc3VsdCB9OiB7IHRhYjogVGFiOyByZXN1bHQ6IFRvb2xSZXN1bHQgfSkge1xuICBjb25zdCB7IGMgfSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuICBpZiAocmVzdWx0LmVycm9yKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJlcnJvci1ib3hcIiBkYXRhLXRlc3RpZD1cImNhbGN1bGF0b3ItZXJyb3JcIj57dChcInRvb2xzLmVycm9yXCIpfTwvZGl2PjtcbiAgaWYgKHRhYiA9PT0gXCJpbnZlc3RcIikgcmV0dXJuIDxJbnZlc3RSZXN1bHRWaWV3IHJlc3VsdD17cmVzdWx0fSAvPjtcbiAgY29uc3QgbGFiZWxzOiBSZWNvcmQ8RXhjbHVkZTxUYWIsIFwiaW52ZXN0XCI+LCBbc3RyaW5nLCBzdHJpbmddW10+ID0ge1xuICAgIHNpcDogW1tcInRvb2xzLnRvdGFsSW52ZXN0ZWRcIiwgbW9uZXkocmVzdWx0LmludmVzdGVkKV0sIFtcInRvb2xzLmVzdGltYXRlZFZhbHVlXCIsIG1vbmV5KHJlc3VsdC5mdXR1cmVfdmFsdWUpXSwgW1widG9vbHMuZXN0aW1hdGVkR2FpbnNcIiwgbW9uZXkocmVzdWx0LmdhaW5zKV1dLFxuICAgIGludGVyZXN0OiBbW1widG9vbHMuc2ltcGxlSW50ZXJlc3RcIiwgbW9uZXkocmVzdWx0LnNpbXBsZV9pbnRlcmVzdCldLCBbXCJ0b29scy5jb21wb3VuZEludGVyZXN0XCIsIG1vbmV5KHJlc3VsdC5jb21wb3VuZF9pbnRlcmVzdCldLCBbXCJ0b29scy5jb21wb3VuZFRvdGFsXCIsIG1vbmV5KHJlc3VsdC5jb21wb3VuZF90b3RhbCldXSxcbiAgICBidWRnZXQ6IFtbXCJ0b29scy50b3RhbEV4cGVuc2VzXCIsIG1vbmV5KHJlc3VsdC50b3RhbCldLCBbXCJ0b29scy5iYWxhbmNlXCIsIG1vbmV5KHJlc3VsdC5iYWxhbmNlKV0sIFtcInRvb2xzLnNhdmluZ3NSYXRlXCIsIGAke3Jlc3VsdC5zYXZpbmdzX3BlcmNlbnR9JWBdXSxcbiAgICBnb2FsOiBbW1widG9vbHMuYW1vdW50TGVmdFwiLCBtb25leShyZXN1bHQucmVtYWluaW5nKV0sIFtcInRvb2xzLm1vbnRobHlQbGFuXCIsIG1vbmV5KHJlc3VsdC5tb250aGx5KV1dLFxuICB9O1xuICBjb25zdCBjaGFydERhdGEgPSByZXN1bHQuY2F0ZWdvcmllc1xuICAgID8gT2JqZWN0LmVudHJpZXMocmVzdWx0LmNhdGVnb3JpZXMpLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gKHsgbmFtZTogdChgdG9vbHMuJHtuYW1lLnRvTG93ZXJDYXNlKCl9YCksIHZhbHVlIH0pKVxuICAgIDogW3sgbmFtZTogdChcInRvb2xzLmNoYXJ0SW52ZXN0ZWRcIiksIHZhbHVlOiByZXN1bHQuaW52ZXN0ZWQgfHwgcmVzdWx0LnNpbXBsZV9pbnRlcmVzdCB8fCAwIH0sIHsgbmFtZTogdChcInRvb2xzLmNoYXJ0R3Jvd3RoXCIpLCB2YWx1ZTogcmVzdWx0LmdhaW5zIHx8IHJlc3VsdC5jb21wb3VuZF9pbnRlcmVzdCB8fCByZXN1bHQubW9udGhseSB8fCAwIH1dO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LWJveFwiIGRhdGEtdGVzdGlkPXtgJHt0YWJ9LXJlc3VsdGB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtdmFsdWVzXCI+e2xhYmVsc1t0YWJdLm1hcCgoW2xhYmVsLCB2YWx1ZV0pID0+IDxkaXYga2V5PXtsYWJlbH0+PHNwYW4+e3QobGFiZWwpfTwvc3Bhbj48c3Ryb25nPnt2YWx1ZX08L3N0cm9uZz48L2Rpdj4pfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtY2hhcnRcIj5cbiAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PXsxNTB9PlxuICAgICAgICAgIHt0YWIgPT09IFwiYnVkZ2V0XCIgPyAoXG4gICAgICAgICAgICA8UGllQ2hhcnQ+PFBpZSBkYXRhPXtjaGFydERhdGF9IGRhdGFLZXk9XCJ2YWx1ZVwiIG5hbWVLZXk9XCJuYW1lXCIgaW5uZXJSYWRpdXM9ezQyfSBvdXRlclJhZGl1cz17NjR9IHBhZGRpbmdBbmdsZT17M30+e2NoYXJ0RGF0YS5tYXAoKF8sIGkpID0+IDxDZWxsIGtleT17aX0gZmlsbD17W2MucHJpbWFyeSwgYy5hY2NlbnQsIFwiI0Y1OUUwQlwiLCBcIiNEQzI2MjZcIiwgXCIjOEI1Q0Y2XCJdW2kgJSA1XX0gLz4pfTwvUGllPjxUb29sdGlwIC8+PC9QaWVDaGFydD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEJhckNoYXJ0IGRhdGE9e2NoYXJ0RGF0YX0+PENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIgdmVydGljYWw9e2ZhbHNlfSAvPjxYQXhpcyBkYXRhS2V5PVwibmFtZVwiIGhpZGUgLz48WUF4aXMgaGlkZSAvPjxUb29sdGlwIC8+PEJhciBkYXRhS2V5PVwidmFsdWVcIiBmaWxsPXtjLnByaW1hcnl9IHJhZGl1cz17WzYsIDYsIDAsIDBdfSAvPjwvQmFyQ2hhcnQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8c21hbGw+e3QoXCJ0b29scy5lc3RpbWF0ZVwiKX08L3NtYWxsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVG9vbHMoKSB7XG4gIGNvbnN0IHsgYyB9ID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG4gIGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZTxUYWI+KFwic2lwXCIpO1xuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZShJTklUSUFMKTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlPFRvb2xSZXN1bHQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgcnVuID0gYXN5bmMgKG92ZXJyaWRlPzogUmVjb3JkPHN0cmluZywgbnVtYmVyIHwgc3RyaW5nPikgPT4ge1xuICAgIGNvbnN0IGYgPSBvdmVycmlkZSB8fCBmb3JtO1xuICAgIGNvbnN0IHBheWxvYWQgPSBPYmplY3QuZnJvbUVudHJpZXMoVE9PTF9GSUVMRFNbdGFiXS5tYXAoKFtrXSkgPT4gW2ssICtmW2tdXSkpO1xuICAgIHRyeSB7XG4gICAgICBzZXRSZXN1bHQoYXdhaXQgYXBpUG9zdDxUb29sUmVzdWx0PihgL2NhbGN1bGF0b3JzLyR7dGFifWAsIHBheWxvYWQpKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHNldFJlc3VsdCh7IGVycm9yOiB0cnVlIH0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcGljayA9IChrOiBzdHJpbmcsIHY6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IG5leHQgPSB7IC4uLmZvcm0sIFtrXTogdiB9O1xuICAgIHNldEZvcm0obmV4dCk7XG4gICAgdm9pZCBydW4obmV4dCk7XG4gIH07XG4gIGNvbnN0IHRhYnMgPSBbeyBpZDogXCJzaXBcIiBhcyBUYWIsIGljb246IFRyZW5kaW5nVXAgfSwgeyBpZDogXCJpbnRlcmVzdFwiIGFzIFRhYiwgaWNvbjogQmFyQ2hhcnQzIH0sIHsgaWQ6IFwiYnVkZ2V0XCIgYXMgVGFiLCBpY29uOiBQaWVJY29uIH0sIHsgaWQ6IFwiZ29hbFwiIGFzIFRhYiwgaWNvbjogVGFyZ2V0IH0sIHsgaWQ6IFwiaW52ZXN0XCIgYXMgVGFiLCBpY29uOiBMaW5lSWNvbiB9XTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHRvb2xzLXNlY3Rpb25cIiBpZD1cInRvb2xzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGluZ1wiPjxkaXY+PHNwYW4gY2xhc3NOYW1lPVwia2lja2VyXCI+e3QoXCJ0b29scy5raWNrZXJcIil9PC9zcGFuPjxoMj57dChcInRvb2xzLnRpdGxlXCIpfTwvaDI+PC9kaXY+PHNwYW4gY2xhc3NOYW1lPVwiaGVhZGluZy1ub3RlXCI+e3QoXCJ0b29scy5ub3RlXCIpfTwvc3Bhbj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHMtbGF5b3V0XCI+XG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJ0b29sLXRhYnNcIj5cbiAgICAgICAgICB7dGFicy5tYXAoKHsgaWQsIGljb246IEljb24gfSkgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3RhYiA9PT0gaWQgPyBcImFjdGl2ZVwiIDogXCJcIn0gb25DbGljaz17KCkgPT4geyBzZXRUYWIoaWQpOyBzZXRSZXN1bHQobnVsbCk7IH19IGtleT17aWR9IGRhdGEtdGVzdGlkPXtgY2FsY3VsYXRvci10YWItJHtpZH1gfT5cbiAgICAgICAgICAgICAgPEljb24gc2l6ZT17MTh9IC8+IHt0KGB0b29scy50YWIke2NhcChpZCl9YCl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxjdWxhdG9yLXBhbmVsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxjLWludHJvXCI+PGRpdj48c3BhbiBjbGFzc05hbWU9XCJraWNrZXJcIj57dChgdG9vbHMua2lja2VyJHtjYXAodGFiKX1gKX08L3NwYW4+PGgzPnt0KGB0b29scy5oZWFkJHtjYXAodGFiKX1gKX08L2gzPjwvZGl2PjxTcGFya2xlcyBzaXplPXsyMn0gY29sb3I9e2MucHJpbWFyeX0gLz48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JpZFwiIHN0eWxlPXt0YWIgPT09IFwiaW52ZXN0XCIgPyB7IGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwicmVwZWF0KGF1dG8tZml0LG1pbm1heCgxNjBweCwxZnIpKVwiIH0gOiB1bmRlZmluZWR9PlxuICAgICAgICAgICAge1RPT0xfRklFTERTW3RhYl0ubWFwKChbaywgbGFiZWwsIHByZWZpeCwgc3VmZml4XSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17a30+XG4gICAgICAgICAgICAgICAgPEZpZWxkIGxhYmVsPXt0KGxhYmVsKX0gdmFsdWU9e2Zvcm1ba119IG9uQ2hhbmdlPXsodikgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIFtrXTogdiB9KX0gcHJlZml4PXtwcmVmaXh9IHN1ZmZpeD17c3VmZml4ICYmIChzdWZmaXggPT09IFwiJVwiID8gXCIlXCIgOiB0KHN1ZmZpeCkpfSB0ZXN0PXtgJHt0YWJ9LSR7a30taW5wdXRgfSAvPlxuICAgICAgICAgICAgICAgIHt0YWIgPT09IFwiaW52ZXN0XCIgJiYgayA9PT0gXCJ5ZWFyc1wiICYmIDxDaGlwcyB2YWx1ZXM9e0RVUkFUSU9OU30gY3VycmVudD17K2Zvcm0ueWVhcnN9IG9uUGljaz17KHYpID0+IHBpY2soXCJ5ZWFyc1wiLCB2KX0gdW5pdD1cInlcIiB0ZXN0PVwiaW52ZXN0LXllYXJzLWNoaXBcIiAvPn1cbiAgICAgICAgICAgICAgICB7dGFiID09PSBcImludmVzdFwiICYmIGsgPT09IFwicmF0ZVwiICYmIDxDaGlwcyB2YWx1ZXM9e1JBVEVTfSBjdXJyZW50PXsrZm9ybS5yYXRlfSBvblBpY2s9eyh2KSA9PiBwaWNrKFwicmF0ZVwiLCB2KX0gdW5pdD1cIiVcIiB0ZXN0PVwiaW52ZXN0LXJhdGUtY2hpcFwiIC8+fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJpbWFyeS1idXR0b24gY2FsY3VsYXRlLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHZvaWQgcnVuKCl9IGRhdGEtdGVzdGlkPXtgJHt0YWJ9LWNhbGN1bGF0ZS1idXR0b25gfT57dChcInRvb2xzLmNhbGN1bGF0ZVwiKX0gPEFycm93UmlnaHQgc2l6ZT17MTZ9IC8+PC9idXR0b24+XG4gICAgICAgICAge3RhYiA9PT0gXCJpbnZlc3RcIiAmJiAhcmVzdWx0ICYmIDxkaXYgY2xhc3NOYW1lPVwibm90aWNlXCIgZGF0YS10ZXN0aWQ9XCJpbnZlc3QtZGlzY2xhaW1lci1wcmVcIj48Q2lyY2xlQWxlcnQgc2l6ZT17MTh9IC8+PHNwYW4+e3QoXCJ0b29scy5pbnZlc3RSaXNrXCIpfTwvc3Bhbj48L2Rpdj59XG4gICAgICAgICAge3Jlc3VsdCAmJiA8UmVzdWx0IHRhYj17dGFifSByZXN1bHQ9e3Jlc3VsdH0gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sImZpbGUiOiIvYXBwL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1Rvb2xzLnRzeCJ9