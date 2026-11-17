import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Simulator.tsx");const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport7_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport7_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=a646c335";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "/src/lib/recharts.tsx";
import { ArrowRight, Lightbulb, TrendingDown } from "/src/lib/lucide-react.tsx";
import { apiPost } from "/src/lib/api.ts";
import { useI18n } from "/src/lib/i18n.tsx";
import { useTheme } from "/src/lib/theme.tsx";
import { money, short } from "/src/components/Tools.tsx";
var _jsxFileName = "/app/frontend/src/components/Simulator.tsx";
import __vite__cjsImport7_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
var _s = $RefreshSig$();
const LINES = [
	["optimistic", "#22d3ee"],
	["moderate", "#7c6cff"],
	["cautious", "#f59e0b"],
	["bumpy", "#dc2626"]
];
const FIELDS = [
	[
		"lumpsum",
		"sim.lumpsum",
		"₹"
	],
	[
		"monthly",
		"sim.monthly",
		"₹"
	],
	[
		"years",
		"sim.years",
		null
	],
	[
		"step_up",
		"sim.stepUp",
		null,
		"%"
	],
	[
		"inflation",
		"sim.inflation",
		null,
		"%"
	]
];
export function Simulator() {
	_s();
	const { c } = useTheme();
	const { t } = useI18n();
	const [form, setForm] = useState({
		lumpsum: 1e4,
		monthly: 2e3,
		years: 15,
		step_up: 5,
		inflation: 6
	});
	const [result, setResult] = useState(null);
	const [error, setError] = useState(false);
	const [ran, setRan] = useState(15);
	const run = async () => {
		try {
			setResult(await apiPost("/calculators/simulate", Object.fromEntries(Object.entries(form).map(([k, v]) => [k, +v]))));
			setRan(+form.years);
			setError(false);
		} catch {
			setError(true);
		}
	};
	return /* @__PURE__ */ _jsxDEV("section", {
		className: "section sim-section",
		id: "simulator",
		"data-testid": "simulator-section",
		"x-file-name": "Simulator",
		"x-line-number": "30",
		"x-column": "4",
		"x-component": "section",
		"x-id": "Simulator_30_4",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "section-heading",
			"x-file-name": "Simulator",
			"x-line-number": "31",
			"x-column": "6",
			"x-component": "div",
			"x-id": "Simulator_31_6",
			"x-dynamic": "false",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				"x-file-name": "Simulator",
				"x-line-number": "31",
				"x-column": "39",
				"x-component": "div",
				"x-id": "Simulator_31_39",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("span", {
					className: "kicker",
					"x-file-name": "Simulator",
					"x-line-number": "31",
					"x-column": "44",
					"x-component": "span",
					"x-id": "Simulator_31_44",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("sim.kicker")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 275
				}, this), /* @__PURE__ */ _jsxDEV("h2", {
					"x-file-name": "Simulator",
					"x-line-number": "31",
					"x-column": "93",
					"x-component": "h2",
					"x-id": "Simulator_31_93",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("sim.title")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 491
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 154
			}, this), /* @__PURE__ */ _jsxDEV("span", {
				className: "heading-note",
				"x-file-name": "Simulator",
				"x-line-number": "31",
				"x-column": "124",
				"x-component": "span",
				"x-id": "Simulator_31_124",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: t("sim.note")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 687
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 38,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "sim-panel",
			"x-file-name": "Simulator",
			"x-line-number": "32",
			"x-column": "6",
			"x-component": "div",
			"x-id": "Simulator_32_6",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "sim-form",
					"x-file-name": "Simulator",
					"x-line-number": "33",
					"x-column": "8",
					"x-component": "div",
					"x-id": "Simulator_33_8",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: [FIELDS.map(([k, label, prefix, suffix]) => /* @__PURE__ */ _jsxDEV("label", {
						className: "field",
						"x-file-name": "Simulator",
						"x-line-number": "35",
						"x-column": "12",
						"x-component": "label",
						"x-id": "Simulator_35_12",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("span", {
							"x-file-name": "Simulator",
							"x-line-number": "35",
							"x-column": "45",
							"x-component": "span",
							"x-id": "Simulator_35_45",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t(label)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 41,
							columnNumber: 206
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "input-wrap",
							"x-file-name": "Simulator",
							"x-line-number": "35",
							"x-column": "68",
							"x-component": "div",
							"x-id": "Simulator_35_68",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: [
								prefix && /* @__PURE__ */ _jsxDEV("em", {
									"x-file-name": "Simulator",
									"x-line-number": "35",
									"x-column": "107",
									"x-component": "em",
									"x-id": "Simulator_35_107",
									"x-dynamic": "true",
									"x-source-type": "unknown",
									"x-source-var": "prefix",
									"x-source-editable": "false",
									children: prefix
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 41,
									columnNumber: 601
								}, this),
								/* @__PURE__ */ _jsxDEV("input", {
									type: "number",
									min: "0",
									value: form[k],
									onChange: (e) => setForm({
										...form,
										[k]: e.target.value
									}),
									"data-testid": `sim-${k}-input`,
									"x-file-name": "Simulator",
									"x-line-number": "35",
									"x-column": "125",
									"x-component": "input",
									"x-id": "Simulator_35_125",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 41,
									columnNumber: 807
								}, this),
								suffix && /* @__PURE__ */ _jsxDEV("em", {
									"x-file-name": "Simulator",
									"x-line-number": "35",
									"x-column": "274",
									"x-component": "em",
									"x-id": "Simulator_35_274",
									"x-dynamic": "true",
									"x-source-type": "unknown",
									"x-source-var": "suffix",
									"x-source-editable": "false",
									children: suffix
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 44,
									columnNumber: 181
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 41,
							columnNumber: 396
						}, this)]
					}, k, true, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 55
					}, this)), /* @__PURE__ */ _jsxDEV("button", {
						className: "primary-button",
						onClick: () => void run(),
						"data-testid": "sim-run-button",
						"x-file-name": "Simulator",
						"x-line-number": "37",
						"x-column": "10",
						"x-component": "button",
						"x-id": "Simulator_37_10",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: [
							t("sim.run"),
							" ",
							/* @__PURE__ */ _jsxDEV(ArrowRight, { size: 16 }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 45,
								columnNumber: 286
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 9
				}, this),
				error && /* @__PURE__ */ _jsxDEV("div", {
					className: "error-box",
					"data-testid": "sim-error",
					"x-file-name": "Simulator",
					"x-line-number": "39",
					"x-column": "18",
					"x-component": "div",
					"x-id": "Simulator_39_18",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("tools.error")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 19
				}, this),
				!result && !error && /* @__PURE__ */ _jsxDEV("div", {
					className: "sim-empty",
					"x-file-name": "Simulator",
					"x-line-number": "40",
					"x-column": "30",
					"x-component": "div",
					"x-id": "Simulator_40_30",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV(TrendingDown, {
						size: 26,
						"x-file-name": "Simulator",
						"x-line-number": "40",
						"x-column": "57",
						"x-component": "TrendingDown",
						"x-id": "Simulator_40_57",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 174
					}, this), /* @__PURE__ */ _jsxDEV("p", {
						"x-file-name": "Simulator",
						"x-line-number": "40",
						"x-column": "83",
						"x-component": "p",
						"x-id": "Simulator_40_83",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t("sim.lesson")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 325
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 31
				}, this),
				result && /* @__PURE__ */ _jsxDEV(_Fragment, { children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "sim-chart",
						"data-testid": "sim-chart",
						"x-file-name": "Simulator",
						"x-line-number": "43",
						"x-column": "12",
						"x-component": "div",
						"x-id": "Simulator_43_12",
						"x-dynamic": "false",
						children: /* @__PURE__ */ _jsxDEV(ResponsiveContainer, {
							width: "100%",
							height: 320,
							"x-file-name": "Simulator",
							"x-line-number": "44",
							"x-column": "14",
							"x-component": "ResponsiveContainer",
							"x-id": "Simulator_44_14",
							"x-dynamic": "false",
							children: /* @__PURE__ */ _jsxDEV(LineChart, {
								data: result.series,
								margin: {
									top: 10,
									right: 16,
									left: 4,
									bottom: 0
								},
								"x-file-name": "Simulator",
								"x-line-number": "45",
								"x-column": "16",
								"x-component": "LineChart",
								"x-id": "Simulator_45_16",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: [
									/* @__PURE__ */ _jsxDEV(CartesianGrid, {
										strokeDasharray: "3 3",
										vertical: false,
										stroke: c.grid,
										"x-file-name": "Simulator",
										"x-line-number": "46",
										"x-column": "18",
										"x-component": "CartesianGrid",
										"x-id": "Simulator_46_18",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 58,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV(XAxis, {
										dataKey: "year",
										tickFormatter: (y) => `${t("sim.year")} ${y}`,
										tick: { fontSize: 11 },
										"x-file-name": "Simulator",
										"x-line-number": "47",
										"x-column": "18",
										"x-component": "XAxis",
										"x-id": "Simulator_47_18",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 59,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV(YAxis, {
										tickFormatter: short,
										tick: { fontSize: 11 },
										width: 62,
										"x-file-name": "Simulator",
										"x-line-number": "48",
										"x-column": "18",
										"x-component": "YAxis",
										"x-id": "Simulator_48_18",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 62,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV(Tooltip, {
										formatter: (v, name) => [money(v), name],
										labelFormatter: (y) => `${t("sim.year")} ${y}`
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 65,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV(Legend, {
										wrapperStyle: { fontSize: 12 },
										"x-file-name": "Simulator",
										"x-line-number": "50",
										"x-column": "18",
										"x-component": "Legend",
										"x-id": "Simulator_50_18",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 66,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ _jsxDEV(Line, {
										type: "monotone",
										dataKey: "invested",
										name: t("sim.invested"),
										stroke: c.muted,
										strokeDasharray: "5 5",
										dot: false,
										strokeWidth: 2,
										"x-file-name": "Simulator",
										"x-line-number": "51",
										"x-column": "18",
										"x-component": "Line",
										"x-id": "Simulator_51_18",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 69,
										columnNumber: 19
									}, this),
									LINES.map(([id, color]) => /* @__PURE__ */ _jsxDEV(Line, {
										type: "monotone",
										dataKey: id,
										name: t(`sim.${id}`),
										stroke: color,
										dot: false,
										strokeWidth: id === "moderate" ? 3 : 2,
										animationDuration: 900,
										"x-file-name": "Simulator",
										"x-line-number": "52",
										"x-column": "46",
										"x-component": "Line",
										"x-id": "Simulator_52_46",
										"x-dynamic": "true"
									}, id, false, {
										fileName: _jsxFileName,
										lineNumber: 70,
										columnNumber: 47
									}, this))
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 52,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "sim-invested",
						"data-testid": "sim-invested",
						"x-file-name": "Simulator",
						"x-line-number": "56",
						"x-column": "12",
						"x-component": "div",
						"x-id": "Simulator_56_12",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: [
							/* @__PURE__ */ _jsxDEV("span", {
								"data-ve-dynamic": "true",
								"x-excluded": "true",
								style: { display: "contents" },
								"x-file-name": "Simulator",
								"x-line-number": "56",
								"x-column": "12",
								"x-component": "div",
								"x-id": "Simulator_56_12_expr0",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: t("sim.invested")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 74,
								columnNumber: 236
							}, this),
							": ",
							/* @__PURE__ */ _jsxDEV("strong", {
								"x-file-name": "Simulator",
								"x-line-number": "56",
								"x-column": "90",
								"x-component": "strong",
								"x-id": "Simulator_56_90",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: money(result.invested)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 76,
								columnNumber: 214
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 74,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "sim-cards",
						"x-file-name": "Simulator",
						"x-line-number": "57",
						"x-column": "12",
						"x-component": "div",
						"x-id": "Simulator_57_12",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: result.summary.map((s) => {
							const color = LINES.find(([id]) => id === s.id)?.[1] || c.primary;
							return /* @__PURE__ */ _jsxDEV("div", {
								className: "sim-card",
								style: { ["--c"]: color },
								"data-testid": `sim-card-${s.id}`,
								"x-file-name": "Simulator",
								"x-line-number": "61",
								"x-column": "18",
								"x-component": "div",
								"x-id": "Simulator_61_18",
								"x-dynamic": "false",
								children: [
									/* @__PURE__ */ _jsxDEV("span", {
										className: "sim-dot",
										"x-file-name": "Simulator",
										"x-line-number": "62",
										"x-column": "20",
										"x-component": "span",
										"x-id": "Simulator_62_20",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 83,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ _jsxDEV("strong", {
										"x-file-name": "Simulator",
										"x-line-number": "63",
										"x-column": "20",
										"x-component": "strong",
										"x-id": "Simulator_63_20",
										"x-dynamic": "true",
										"x-source-type": "computed",
										"x-source-editable": "false",
										children: t(`sim.${s.id}`)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 84,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ _jsxDEV("small", {
										"x-file-name": "Simulator",
										"x-line-number": "64",
										"x-column": "20",
										"x-component": "small",
										"x-id": "Simulator_64_20",
										"x-dynamic": "true",
										"x-source-type": "computed",
										"x-source-editable": "false",
										children: s.id === "bumpy" ? t("sim.bumpyNote") : t("sim.rateNote", { rate: s.rate })
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 85,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ _jsxDEV("em", {
										"x-file-name": "Simulator",
										"x-line-number": "65",
										"x-column": "20",
										"x-component": "em",
										"x-id": "Simulator_65_20",
										"x-dynamic": "true",
										"x-source-type": "computed",
										"x-source-editable": "false",
										children: t("sim.finalValue", { years: ran })
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 88,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ _jsxDEV("b", {
										"data-testid": `sim-value-${s.id}`,
										"x-file-name": "Simulator",
										"x-line-number": "66",
										"x-column": "20",
										"x-component": "b",
										"x-id": "Simulator_66_20",
										"x-dynamic": "true",
										"x-source-type": "computed",
										"x-source-editable": "false",
										children: money(s.value)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 91,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										className: "sim-sub",
										"x-file-name": "Simulator",
										"x-line-number": "67",
										"x-column": "20",
										"x-component": "span",
										"x-id": "Simulator_67_20",
										"x-dynamic": "true",
										"x-source-type": "computed",
										"x-source-editable": "false",
										children: [
											/* @__PURE__ */ _jsxDEV("span", {
												"data-ve-dynamic": "true",
												"x-excluded": "true",
												style: { display: "contents" },
												"x-file-name": "Simulator",
												"x-line-number": "67",
												"x-column": "20",
												"x-component": "span",
												"x-id": "Simulator_67_20_expr0",
												"x-dynamic": "true",
												"x-source-type": "computed",
												"x-source-editable": "false",
												children: t("sim.gain")
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 92,
												columnNumber: 214
											}, this),
											": ",
											/* @__PURE__ */ _jsxDEV("span", {
												"data-ve-dynamic": "true",
												"x-excluded": "true",
												style: { display: "contents" },
												"x-file-name": "Simulator",
												"x-line-number": "67",
												"x-column": "20",
												"x-component": "span",
												"x-id": "Simulator_67_20_expr2",
												"x-dynamic": "true",
												"x-source-type": "computed",
												"x-source-editable": "false",
												children: money(s.gain)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 94,
												columnNumber: 217
											}, this),
											" · ",
											/* @__PURE__ */ _jsxDEV("span", {
												"data-ve-dynamic": "true",
												"x-excluded": "true",
												style: { display: "contents" },
												"x-file-name": "Simulator",
												"x-line-number": "67",
												"x-column": "20",
												"x-component": "span",
												"x-id": "Simulator_67_20_expr4",
												"x-dynamic": "true",
												"x-source-type": "computed",
												"x-source-editable": "false",
												children: t("sim.realValue")
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 96,
												columnNumber: 218
											}, this),
											": ",
											/* @__PURE__ */ _jsxDEV("span", {
												"data-ve-dynamic": "true",
												"x-excluded": "true",
												style: { display: "contents" },
												"x-file-name": "Simulator",
												"x-line-number": "67",
												"x-column": "20",
												"x-component": "span",
												"x-id": "Simulator_67_20_expr6",
												"x-dynamic": "true",
												"x-source-type": "computed",
												"x-source-editable": "false",
												children: money(s.real_value)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 98,
												columnNumber: 222
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 92,
										columnNumber: 21
									}, this)
								]
							}, s.id, true, {
								fileName: _jsxFileName,
								lineNumber: 80,
								columnNumber: 20
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 77,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "sim-lesson",
						"x-file-name": "Simulator",
						"x-line-number": "72",
						"x-column": "12",
						"x-component": "div",
						"x-id": "Simulator_72_12",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV(Lightbulb, {
							size: 18,
							"x-file-name": "Simulator",
							"x-line-number": "72",
							"x-column": "40",
							"x-component": "Lightbulb",
							"x-id": "Simulator_72_40",
							"x-dynamic": "false"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 104,
							columnNumber: 157
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							"x-file-name": "Simulator",
							"x-line-number": "72",
							"x-column": "63",
							"x-component": "span",
							"x-id": "Simulator_72_63",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("sim.lesson")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 104,
							columnNumber: 302
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV("small", {
						className: "sim-foot",
						"x-file-name": "Simulator",
						"x-line-number": "73",
						"x-column": "12",
						"x-component": "small",
						"x-id": "Simulator_73_12",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t("tools.estimate")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 20
				}, this)
			]
		}, void 0, true, {
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
_s(Simulator, "6yfgq26GCUhH3jBRfLngpA6Cs3s=", false, function() {
	return [useTheme, useI18n];
});
_c = Simulator;
var _c;
$RefreshReg$(_c, "Simulator");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/Simulator.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/components/Simulator.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/components/Simulator.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/components/Simulator.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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LFNBQUF1QyxTQUFBO1lBQUE7WUFBQTtZQUFBO1lBQUE7WUFBQTtZQUFBO1lBQUE7WUFBQTtzQkFBQzdDLE1BQU1nRCxFQUFFSSxJQUFJO1dBQUU7Ozs7O1dBQUE7V0FBRztZQUFBO1lBQUE7WUFBQSxTQUFBUCxTQUFBO1lBQUE7WUFBQTtZQUFBO1lBQUE7WUFBQTtZQUFBO1lBQUE7WUFBQTtzQkFBQ3ZDLEVBQUUsZUFBZTtXQUFFOzs7OztXQUFBO1dBQUU7WUFBQTtZQUFBO1lBQUEsU0FBQXVDLFNBQUE7WUFBQTtZQUFBO1lBQUE7WUFBQTtZQUFBO1lBQUE7WUFBQTtZQUFBO3NCQUFDN0MsTUFBTWdELEVBQUVLLFVBQVU7V0FBRTs7Ozs7VUFBTTs7Ozs7O1FBQzNHO1VBUDBCTCxFQUFFTDs7OztjQU81QjtNQUVULENBQUM7S0FDRTs7Ozs7S0FDTCx3QkFBQyxPQUFEO01BQUssV0FBVTtNQUFZO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtnQkFBM0IsQ0FBNEIsd0JBQUMsV0FBRDtPQUFXLE1BQU07T0FBRztPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7TUFBQTs7OztnQkFBRyx3QkFBQyxRQUFEO09BQUs7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtpQkFBRXJDLEVBQUUsWUFBWTtNQUFROzs7O2NBQU07Ozs7OztLQUN0Rix3QkFBQyxTQUFEO01BQU8sV0FBVTtNQUFVO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7Z0JBQUVBLEVBQUUsZ0JBQWdCO0tBQVM7Ozs7O0lBQzFEOzs7OztHQUVDOzs7OztVQUNFOzs7Ozs7QUFFYiIsIm5hbWVzIjpbInVzZVN0YXRlIiwiQ2FydGVzaWFuR3JpZCIsIkxlZ2VuZCIsIkxpbmUiLCJMaW5lQ2hhcnQiLCJSZXNwb25zaXZlQ29udGFpbmVyIiwiVG9vbHRpcCIsIlhBeGlzIiwiWUF4aXMiLCJBcnJvd1JpZ2h0IiwiTGlnaHRidWxiIiwiVHJlbmRpbmdEb3duIiwiYXBpUG9zdCIsInVzZUkxOG4iLCJ1c2VUaGVtZSIsIm1vbmV5Iiwic2hvcnQiLCJMSU5FUyIsIkZJRUxEUyIsIlNpbXVsYXRvciIsImMiLCJ0IiwiZm9ybSIsInNldEZvcm0iLCJsdW1wc3VtIiwibW9udGhseSIsInllYXJzIiwic3RlcF91cCIsImluZmxhdGlvbiIsInJlc3VsdCIsInNldFJlc3VsdCIsImVycm9yIiwic2V0RXJyb3IiLCJyYW4iLCJzZXRSYW4iLCJydW4iLCJPYmplY3QiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJtYXAiLCJrIiwidiIsImxhYmVsIiwicHJlZml4Iiwic3VmZml4IiwiZSIsInRhcmdldCIsInZhbHVlIiwic2VyaWVzIiwidG9wIiwicmlnaHQiLCJsZWZ0IiwiYm90dG9tIiwiZ3JpZCIsInkiLCJmb250U2l6ZSIsIm5hbWUiLCJtdXRlZCIsImlkIiwiY29sb3IiLCJkaXNwbGF5IiwiaW52ZXN0ZWQiLCJzdW1tYXJ5IiwicyIsImZpbmQiLCJwcmltYXJ5IiwicmF0ZSIsImdhaW4iLCJyZWFsX3ZhbHVlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlNpbXVsYXRvci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcnRlc2lhbkdyaWQsIExlZ2VuZCwgTGluZSwgTGluZUNoYXJ0LCBSZXNwb25zaXZlQ29udGFpbmVyLCBUb29sdGlwLCBYQXhpcywgWUF4aXMgfSBmcm9tIFwicmVjaGFydHNcIjtcbmltcG9ydCB7IEFycm93UmlnaHQsIExpZ2h0YnVsYiwgVHJlbmRpbmdEb3duIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgYXBpUG9zdCB9IGZyb20gXCJAL2xpYi9hcGlcIjtcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tIFwiQC9saWIvaTE4blwiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwiQC9saWIvdGhlbWVcIjtcbmltcG9ydCB0eXBlIHsgU2ltdWxhdGVSZXN1bHQgfSBmcm9tIFwiQC9saWIvdHlwZXNcIjtcbmltcG9ydCB7IG1vbmV5LCBzaG9ydCB9IGZyb20gXCJAL2NvbXBvbmVudHMvVG9vbHNcIjtcblxuY29uc3QgTElORVM6IFtzdHJpbmcsIHN0cmluZ11bXSA9IFtbXCJvcHRpbWlzdGljXCIsIFwiIzIyZDNlZVwiXSwgW1wibW9kZXJhdGVcIiwgXCIjN2M2Y2ZmXCJdLCBbXCJjYXV0aW91c1wiLCBcIiNmNTllMGJcIl0sIFtcImJ1bXB5XCIsIFwiI2RjMjYyNlwiXV07XG5jb25zdCBGSUVMRFM6IFtzdHJpbmcsIHN0cmluZywgc3RyaW5nIHwgbnVsbCwgc3RyaW5nP11bXSA9IFtbXCJsdW1wc3VtXCIsIFwic2ltLmx1bXBzdW1cIiwgXCLigrlcIl0sIFtcIm1vbnRobHlcIiwgXCJzaW0ubW9udGhseVwiLCBcIuKCuVwiXSwgW1wieWVhcnNcIiwgXCJzaW0ueWVhcnNcIiwgbnVsbF0sIFtcInN0ZXBfdXBcIiwgXCJzaW0uc3RlcFVwXCIsIG51bGwsIFwiJVwiXSwgW1wiaW5mbGF0aW9uXCIsIFwic2ltLmluZmxhdGlvblwiLCBudWxsLCBcIiVcIl1dO1xuXG5leHBvcnQgZnVuY3Rpb24gU2ltdWxhdG9yKCkge1xuICBjb25zdCB7IGMgfSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXI+Pih7IGx1bXBzdW06IDEwMDAwLCBtb250aGx5OiAyMDAwLCB5ZWFyczogMTUsIHN0ZXBfdXA6IDUsIGluZmxhdGlvbjogNiB9KTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlPFNpbXVsYXRlUmVzdWx0IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmFuLCBzZXRSYW5dID0gdXNlU3RhdGUoMTUpO1xuICBjb25zdCBydW4gPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNldFJlc3VsdChhd2FpdCBhcGlQb3N0PFNpbXVsYXRlUmVzdWx0PihcIi9jYWxjdWxhdG9ycy9zaW11bGF0ZVwiLCBPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoZm9ybSkubWFwKChbaywgdl0pID0+IFtrLCArdl0pKSkpO1xuICAgICAgc2V0UmFuKCtmb3JtLnllYXJzKTtcbiAgICAgIHNldEVycm9yKGZhbHNlKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHNldEVycm9yKHRydWUpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uIHNpbS1zZWN0aW9uXCIgaWQ9XCJzaW11bGF0b3JcIiBkYXRhLXRlc3RpZD1cInNpbXVsYXRvci1zZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGluZ1wiPjxkaXY+PHNwYW4gY2xhc3NOYW1lPVwia2lja2VyXCI+e3QoXCJzaW0ua2lja2VyXCIpfTwvc3Bhbj48aDI+e3QoXCJzaW0udGl0bGVcIil9PC9oMj48L2Rpdj48c3BhbiBjbGFzc05hbWU9XCJoZWFkaW5nLW5vdGVcIj57dChcInNpbS5ub3RlXCIpfTwvc3Bhbj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ltLXBhbmVsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ltLWZvcm1cIj5cbiAgICAgICAgICB7RklFTERTLm1hcCgoW2ssIGxhYmVsLCBwcmVmaXgsIHN1ZmZpeF0pID0+IChcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmaWVsZFwiIGtleT17a30+PHNwYW4+e3QobGFiZWwpfTwvc3Bhbj48ZGl2IGNsYXNzTmFtZT1cImlucHV0LXdyYXBcIj57cHJlZml4ICYmIDxlbT57cHJlZml4fTwvZW0+fTxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIHZhbHVlPXtmb3JtW2tdfSBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBba106IGUudGFyZ2V0LnZhbHVlIH0pfSBkYXRhLXRlc3RpZD17YHNpbS0ke2t9LWlucHV0YH0gLz57c3VmZml4ICYmIDxlbT57c3VmZml4fTwvZW0+fTwvZGl2PjwvbGFiZWw+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcmltYXJ5LWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHZvaWQgcnVuKCl9IGRhdGEtdGVzdGlkPVwic2ltLXJ1bi1idXR0b25cIj57dChcInNpbS5ydW5cIil9IDxBcnJvd1JpZ2h0IHNpemU9ezE2fSAvPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2Vycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItYm94XCIgZGF0YS10ZXN0aWQ9XCJzaW0tZXJyb3JcIj57dChcInRvb2xzLmVycm9yXCIpfTwvZGl2Pn1cbiAgICAgICAgeyFyZXN1bHQgJiYgIWVycm9yICYmIDxkaXYgY2xhc3NOYW1lPVwic2ltLWVtcHR5XCI+PFRyZW5kaW5nRG93biBzaXplPXsyNn0gLz48cD57dChcInNpbS5sZXNzb25cIil9PC9wPjwvZGl2Pn1cbiAgICAgICAge3Jlc3VsdCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ltLWNoYXJ0XCIgZGF0YS10ZXN0aWQ9XCJzaW0tY2hhcnRcIj5cbiAgICAgICAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PXszMjB9PlxuICAgICAgICAgICAgICAgIDxMaW5lQ2hhcnQgZGF0YT17cmVzdWx0LnNlcmllc30gbWFyZ2luPXt7IHRvcDogMTAsIHJpZ2h0OiAxNiwgbGVmdDogNCwgYm90dG9tOiAwIH19PlxuICAgICAgICAgICAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIgdmVydGljYWw9e2ZhbHNlfSBzdHJva2U9e2MuZ3JpZH0gLz5cbiAgICAgICAgICAgICAgICAgIDxYQXhpcyBkYXRhS2V5PVwieWVhclwiIHRpY2tGb3JtYXR0ZXI9eyh5OiBudW1iZXIpID0+IGAke3QoXCJzaW0ueWVhclwiKX0gJHt5fWB9IHRpY2s9e3sgZm9udFNpemU6IDExIH19IC8+XG4gICAgICAgICAgICAgICAgICA8WUF4aXMgdGlja0Zvcm1hdHRlcj17c2hvcnR9IHRpY2s9e3sgZm9udFNpemU6IDExIH19IHdpZHRoPXs2Mn0gLz5cbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGZvcm1hdHRlcj17KHY6IG51bWJlciwgbmFtZTogc3RyaW5nKSA9PiBbbW9uZXkodiksIG5hbWVdfSBsYWJlbEZvcm1hdHRlcj17KHk6IHN0cmluZykgPT4gYCR7dChcInNpbS55ZWFyXCIpfSAke3l9YH0gLz5cbiAgICAgICAgICAgICAgICAgIDxMZWdlbmQgd3JhcHBlclN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fSAvPlxuICAgICAgICAgICAgICAgICAgPExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cImludmVzdGVkXCIgbmFtZT17dChcInNpbS5pbnZlc3RlZFwiKX0gc3Ryb2tlPXtjLm11dGVkfSBzdHJva2VEYXNoYXJyYXk9XCI1IDVcIiBkb3Q9e2ZhbHNlfSBzdHJva2VXaWR0aD17Mn0gLz5cbiAgICAgICAgICAgICAgICAgIHtMSU5FUy5tYXAoKFtpZCwgY29sb3JdKSA9PiA8TGluZSBrZXk9e2lkfSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PXtpZH0gbmFtZT17dChgc2ltLiR7aWR9YCl9IHN0cm9rZT17Y29sb3J9IGRvdD17ZmFsc2V9IHN0cm9rZVdpZHRoPXtpZCA9PT0gXCJtb2RlcmF0ZVwiID8gMyA6IDJ9IGFuaW1hdGlvbkR1cmF0aW9uPXs5MDB9IC8+KX1cbiAgICAgICAgICAgICAgICA8L0xpbmVDaGFydD5cbiAgICAgICAgICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbS1pbnZlc3RlZFwiIGRhdGEtdGVzdGlkPVwic2ltLWludmVzdGVkXCI+e3QoXCJzaW0uaW52ZXN0ZWRcIil9OiA8c3Ryb25nPnttb25leShyZXN1bHQuaW52ZXN0ZWQpfTwvc3Ryb25nPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW0tY2FyZHNcIj5cbiAgICAgICAgICAgICAge3Jlc3VsdC5zdW1tYXJ5Lm1hcCgocykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gTElORVMuZmluZCgoW2lkXSkgPT4gaWQgPT09IHMuaWQpPy5bMV0gfHwgYy5wcmltYXJ5O1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbS1jYXJkXCIga2V5PXtzLmlkfSBzdHlsZT17eyBbXCItLWNcIiBhcyBzdHJpbmddOiBjb2xvciB9fSBkYXRhLXRlc3RpZD17YHNpbS1jYXJkLSR7cy5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2ltLWRvdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3QoYHNpbS4ke3MuaWR9YCl9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD57cy5pZCA9PT0gXCJidW1weVwiID8gdChcInNpbS5idW1weU5vdGVcIikgOiB0KFwic2ltLnJhdGVOb3RlXCIsIHsgcmF0ZTogcy5yYXRlIH0pfTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIDxlbT57dChcInNpbS5maW5hbFZhbHVlXCIsIHsgeWVhcnM6IHJhbiB9KX08L2VtPlxuICAgICAgICAgICAgICAgICAgICA8YiBkYXRhLXRlc3RpZD17YHNpbS12YWx1ZS0ke3MuaWR9YH0+e21vbmV5KHMudmFsdWUpfTwvYj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2ltLXN1YlwiPnt0KFwic2ltLmdhaW5cIil9OiB7bW9uZXkocy5nYWluKX0gwrcge3QoXCJzaW0ucmVhbFZhbHVlXCIpfToge21vbmV5KHMucmVhbF92YWx1ZSl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2ltLWxlc3NvblwiPjxMaWdodGJ1bGIgc2l6ZT17MTh9IC8+PHNwYW4+e3QoXCJzaW0ubGVzc29uXCIpfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJzaW0tZm9vdFwiPnt0KFwidG9vbHMuZXN0aW1hdGVcIil9PC9zbWFsbD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL2FwcC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9TaW11bGF0b3IudHN4In0=