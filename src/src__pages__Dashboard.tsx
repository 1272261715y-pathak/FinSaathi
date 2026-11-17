import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Dashboard.tsx");const _jsxDEV = __vite__cjsImport8_react_jsxDevRuntime["jsxDEV"];import { Link, Navigate } from "/node_modules/.vite/deps/react-router-dom.js?v=a646c335";
import { useQuery } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=a646c335";
import { ArrowRight, Award, BarChart3, BookOpen, Sparkles, Target } from "/src/lib/lucide-react.tsx";
import { apiGet } from "/src/lib/api.ts";
import { useAuth } from "/src/lib/auth.tsx";
import { useAcademy } from "/src/lib/academy.tsx";
import { useI18n } from "/src/lib/i18n.tsx";
import { CertificateActions } from "/src/components/academy/Certificate.tsx";
var _jsxFileName = "/app/frontend/src/pages/Dashboard.tsx";
import __vite__cjsImport8_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
var _s = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$();
function MyCertificates() {
	_s();
	const { t } = useI18n();
	const { me } = useAcademy();
	return /* @__PURE__ */ _jsxDEV("section", {
		className: "dash-paths",
		id: "my-certificates",
		"data-testid": "dashboard-certificates",
		"x-file-name": "Dashboard",
		"x-line-number": "15",
		"x-column": "4",
		"x-component": "section",
		"x-id": "Dashboard_15_4",
		"x-dynamic": "true",
		"x-source-type": "computed",
		"x-source-editable": "false",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "row-head",
			"x-file-name": "Dashboard",
			"x-line-number": "16",
			"x-column": "6",
			"x-component": "div",
			"x-id": "Dashboard_16_6",
			"x-dynamic": "false",
			children: [/* @__PURE__ */ _jsxDEV("h3", {
				"x-file-name": "Dashboard",
				"x-line-number": "16",
				"x-column": "32",
				"x-component": "h3",
				"x-id": "Dashboard_16_32",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: t("cert.yours")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 147
			}, this), /* @__PURE__ */ _jsxDEV("span", {
				"x-file-name": "Dashboard",
				"x-line-number": "16",
				"x-column": "58",
				"x-component": "span",
				"x-id": "Dashboard_16_58",
				"x-dynamic": "true",
				"x-source-type": "unknown",
				"x-source-var": "me",
				"x-source-path": "certificates.length",
				"x-source-editable": "false",
				children: me.certificates.length
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 338
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 18,
			columnNumber: 7
		}, this), !me.certificates.length ? /* @__PURE__ */ _jsxDEV("div", {
			className: "cert-panel locked",
			style: {
				background: "#fff",
				borderColor: "#e2e8f0"
			},
			"data-testid": "dashboard-cert-empty",
			"x-file-name": "Dashboard",
			"x-line-number": "18",
			"x-column": "8",
			"x-component": "div",
			"x-id": "Dashboard_18_8",
			"x-dynamic": "false",
			children: [
				/* @__PURE__ */ _jsxDEV(Award, {
					size: 22,
					"x-file-name": "Dashboard",
					"x-line-number": "18",
					"x-column": "133",
					"x-component": "Award",
					"x-id": "Dashboard_18_133",
					"x-dynamic": "false"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 157
				}, this),
				/* @__PURE__ */ _jsxDEV("p", {
					style: { color: "#64748b" },
					"x-file-name": "Dashboard",
					"x-line-number": "18",
					"x-column": "152",
					"x-component": "p",
					"x-id": "Dashboard_18_152",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("cert.none")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 296
				}, this),
				/* @__PURE__ */ _jsxDEV(Link, {
					to: "/academy",
					className: "text-link",
					style: { marginLeft: "auto" },
					children: [
						t("dash.academy"),
						" ",
						/* @__PURE__ */ _jsxDEV(ArrowRight, { size: 14 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 26,
							columnNumber: 30
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 196
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 19,
			columnNumber: 34
		}, this) : /* @__PURE__ */ _jsxDEV("div", {
			className: "dash-path-list",
			"x-file-name": "Dashboard",
			"x-line-number": "20",
			"x-column": "8",
			"x-component": "div",
			"x-id": "Dashboard_20_8",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: me.certificates.map((c) => /* @__PURE__ */ _jsxDEV("div", {
				className: "dash-path cert-mini",
				"data-testid": `dashboard-cert-${c.path_id}`,
				"x-file-name": "Dashboard",
				"x-line-number": "21",
				"x-column": "10",
				"x-component": "div",
				"x-id": "Dashboard_21_10",
				"x-dynamic": "false",
				children: [
					/* @__PURE__ */ _jsxDEV("strong", {
						"x-file-name": "Dashboard",
						"x-line-number": "22",
						"x-column": "12",
						"x-component": "strong",
						"x-id": "Dashboard_22_12",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t(`path.${c.path_id}.title`)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV("span", {
						"x-file-name": "Dashboard",
						"x-line-number": "23",
						"x-column": "12",
						"x-component": "span",
						"x-id": "Dashboard_23_12",
						"x-dynamic": "true",
						"x-source-type": "static-imported",
						"x-source-var": "me",
						"x-source-path": "certificates.name",
						"x-source-editable": "false",
						"x-array-var": "me",
						"x-array-item-param": "c",
						children: [
							/* @__PURE__ */ _jsxDEV("span", {
								"data-ve-dynamic": "true",
								"x-excluded": "true",
								style: { display: "contents" },
								"x-file-name": "Dashboard",
								"x-line-number": "23",
								"x-column": "12",
								"x-component": "span",
								"x-id": "Dashboard_23_12_expr0",
								"x-dynamic": "true",
								"x-source-type": "static-imported",
								"x-source-var": "me",
								"x-source-path": "certificates.name",
								"x-source-editable": "false",
								"x-array-var": "me",
								"x-array-item-param": "c",
								children: c.name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 28,
								columnNumber: 285
							}, this),
							" · ",
							/* @__PURE__ */ _jsxDEV("span", {
								"data-ve-dynamic": "true",
								"x-excluded": "true",
								style: { display: "contents" },
								"x-file-name": "Dashboard",
								"x-line-number": "23",
								"x-column": "12",
								"x-component": "span",
								"x-id": "Dashboard_23_12_expr2",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: new Date(c.issued_at).toLocaleDateString("en-IN", {
									day: "numeric",
									month: "short",
									year: "numeric"
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 30,
								columnNumber: 304
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 28,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV(Link, {
						to: `/certificate/${c.id}`,
						className: "text-link",
						"data-testid": `dashboard-cert-${c.path_id}-view`,
						children: [
							t("cert.id"),
							": ",
							c.id
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ _jsxDEV(CertificateActions, {
						cert: c,
						testid: `dashboard-cert-${c.path_id}`,
						"x-file-name": "Dashboard",
						"x-line-number": "25",
						"x-column": "12",
						"x-component": "CertificateActions",
						"x-id": "Dashboard_25_12",
						"x-dynamic": "true",
						"x-source-type": "external",
						"x-source-var": "me",
						"x-source-editable": "false",
						"x-array-var": "me",
						"x-array-item-param": "c"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 13
					}, this)
				]
			}, c.id, true, {
				fileName: _jsxFileName,
				lineNumber: 26,
				columnNumber: 292
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 26,
			columnNumber: 70
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 17,
		columnNumber: 10
	}, this);
}
_s(MyCertificates, "JsS7oKXKqCrLyh0EIb0FMov0A7Q=", false, function() {
	return [useI18n, useAcademy];
});
_c = MyCertificates;
function Dashboard() {
	_s2();
	const { t } = useI18n();
	const { user } = useAuth();
	const { me } = useAcademy();
	const { data } = useQuery({
		queryKey: ["my-progress"],
		queryFn: () => apiGet("/me/progress")
	});
	const pathVals = Object.values(me.paths);
	const overall = pathVals.length ? Math.round(pathVals.reduce((a, p) => a + p.percent, 0) / pathVals.length) : 0;
	const entries = Object.entries(me.paths);
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "dashboard section",
		"x-file-name": "Dashboard",
		"x-line-number": "41",
		"x-column": "4",
		"x-component": "div",
		"x-id": "Dashboard_41_4",
		"x-dynamic": "false",
		children: [
			/* @__PURE__ */ _jsxDEV("span", {
				className: "kicker",
				"x-file-name": "Dashboard",
				"x-line-number": "42",
				"x-column": "6",
				"x-component": "span",
				"x-id": "Dashboard_42_6",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: t("dash.kicker")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 62,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("h1", {
				"data-testid": "dashboard-welcome",
				"x-file-name": "Dashboard",
				"x-line-number": "43",
				"x-column": "6",
				"x-component": "h1",
				"x-id": "Dashboard_43_6",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: t("dash.welcome", { name: user?.name.split(" ")[0] || t("dash.learner") })
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("p", {
				className: "page-intro",
				"x-file-name": "Dashboard",
				"x-line-number": "44",
				"x-column": "6",
				"x-component": "p",
				"x-id": "Dashboard_44_6",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: t("dash.intro")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 66,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "dashboard-grid",
				"x-file-name": "Dashboard",
				"x-line-number": "45",
				"x-column": "6",
				"x-component": "div",
				"x-id": "Dashboard_45_6",
				"x-dynamic": "false",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "dashboard-stat",
						"x-file-name": "Dashboard",
						"x-line-number": "46",
						"x-column": "8",
						"x-component": "div",
						"x-id": "Dashboard_46_8",
						"x-dynamic": "false",
						children: [
							/* @__PURE__ */ _jsxDEV(BookOpen, {
								"x-file-name": "Dashboard",
								"x-line-number": "46",
								"x-column": "40",
								"x-component": "BookOpen",
								"x-id": "Dashboard_46_40",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 68,
								columnNumber: 155
							}, this),
							/* @__PURE__ */ _jsxDEV("strong", {
								"data-testid": "dashboard-lessons-count",
								"x-file-name": "Dashboard",
								"x-line-number": "46",
								"x-column": "52",
								"x-component": "strong",
								"x-id": "Dashboard_46_52",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: data?.lesson_count || 0
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 68,
								columnNumber: 288
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								"x-file-name": "Dashboard",
								"x-line-number": "46",
								"x-column": "132",
								"x-component": "span",
								"x-id": "Dashboard_46_132",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: t("dash.lessons")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 68,
								columnNumber: 537
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 68,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "dashboard-stat",
						"x-file-name": "Dashboard",
						"x-line-number": "47",
						"x-column": "8",
						"x-component": "div",
						"x-id": "Dashboard_47_8",
						"x-dynamic": "false",
						children: [
							/* @__PURE__ */ _jsxDEV(BarChart3, {
								"x-file-name": "Dashboard",
								"x-line-number": "47",
								"x-column": "40",
								"x-component": "BarChart3",
								"x-id": "Dashboard_47_40",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 155
							}, this),
							/* @__PURE__ */ _jsxDEV("strong", {
								"data-testid": "dashboard-quiz-count",
								"x-file-name": "Dashboard",
								"x-line-number": "47",
								"x-column": "53",
								"x-component": "strong",
								"x-id": "Dashboard_47_53",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: data?.quizzes?.length || 0
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 290
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								"x-file-name": "Dashboard",
								"x-line-number": "47",
								"x-column": "133",
								"x-component": "span",
								"x-id": "Dashboard_47_133",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: t("dash.quizzes")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 539
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "dashboard-stat",
						"x-file-name": "Dashboard",
						"x-line-number": "48",
						"x-column": "8",
						"x-component": "div",
						"x-id": "Dashboard_48_8",
						"x-dynamic": "false",
						children: [
							/* @__PURE__ */ _jsxDEV(Target, {
								"x-file-name": "Dashboard",
								"x-line-number": "48",
								"x-column": "40",
								"x-component": "Target",
								"x-id": "Dashboard_48_40",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 70,
								columnNumber: 155
							}, this),
							/* @__PURE__ */ _jsxDEV("strong", {
								"data-testid": "dashboard-path-percent",
								"x-file-name": "Dashboard",
								"x-line-number": "48",
								"x-column": "50",
								"x-component": "strong",
								"x-id": "Dashboard_48_50",
								"x-dynamic": "true",
								"x-source-type": "template",
								"x-source-editable": "false",
								children: `${overall}%`
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 70,
								columnNumber: 284
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								"x-file-name": "Dashboard",
								"x-line-number": "48",
								"x-column": "119",
								"x-component": "span",
								"x-id": "Dashboard_48_119",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: t("dash.path")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 70,
								columnNumber: 522
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 67,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "dashboard-note",
				"x-file-name": "Dashboard",
				"x-line-number": "50",
				"x-column": "6",
				"x-component": "div",
				"x-id": "Dashboard_50_6",
				"x-dynamic": "false",
				children: [
					/* @__PURE__ */ _jsxDEV(Sparkles, {
						"x-file-name": "Dashboard",
						"x-line-number": "50",
						"x-column": "38",
						"x-component": "Sparkles",
						"x-id": "Dashboard_50_38",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 153
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						"x-file-name": "Dashboard",
						"x-line-number": "50",
						"x-column": "50",
						"x-component": "div",
						"x-id": "Dashboard_50_50",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("strong", {
							"x-file-name": "Dashboard",
							"x-line-number": "50",
							"x-column": "55",
							"x-component": "strong",
							"x-id": "Dashboard_50_55",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("dash.next")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 72,
							columnNumber: 407
						}, this), /* @__PURE__ */ _jsxDEV("p", {
							"x-file-name": "Dashboard",
							"x-line-number": "50",
							"x-column": "88",
							"x-component": "p",
							"x-id": "Dashboard_50_88",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("dash.nextText")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 72,
							columnNumber: 609
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 286
					}, this),
					/* @__PURE__ */ _jsxDEV(Link, {
						to: "/",
						className: "text-link",
						"data-testid": "dashboard-home-link",
						children: [
							t("dash.continue"),
							" ",
							/* @__PURE__ */ _jsxDEV(ArrowRight, { size: 16 }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 72,
								columnNumber: 896
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 72,
						columnNumber: 806
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 72,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(MyCertificates, {
				"x-file-name": "Dashboard",
				"x-line-number": "51",
				"x-column": "6",
				"x-component": "MyCertificates",
				"x-id": "Dashboard_51_6",
				"x-dynamic": "true"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("section", {
				className: "dash-paths",
				"data-testid": "dashboard-paths",
				"x-file-name": "Dashboard",
				"x-line-number": "52",
				"x-column": "6",
				"x-component": "section",
				"x-id": "Dashboard_52_6",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "row-head",
					"x-file-name": "Dashboard",
					"x-line-number": "53",
					"x-column": "8",
					"x-component": "div",
					"x-id": "Dashboard_53_8",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("h3", {
						"x-file-name": "Dashboard",
						"x-line-number": "53",
						"x-column": "34",
						"x-component": "h3",
						"x-id": "Dashboard_53_34",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t("dash.paths")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 149
					}, this), /* @__PURE__ */ _jsxDEV(Link, {
						to: "/academy",
						className: "text-link",
						"data-testid": "dashboard-academy-link",
						children: [
							t("dash.academy"),
							" ",
							/* @__PURE__ */ _jsxDEV(ArrowRight, { size: 16 }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 75,
								columnNumber: 439
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 340
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 75,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "dash-path-list",
					"x-file-name": "Dashboard",
					"x-line-number": "54",
					"x-column": "8",
					"x-component": "div",
					"x-id": "Dashboard_54_8",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: entries.map(([id, p]) => /* @__PURE__ */ _jsxDEV(Link, {
						to: `/academy/path/${id}`,
						className: "dash-path",
						"data-testid": `dashboard-path-${id}`,
						children: [
							/* @__PURE__ */ _jsxDEV("strong", {
								"x-file-name": "Dashboard",
								"x-line-number": "54",
								"x-column": "167",
								"x-component": "strong",
								"x-id": "Dashboard_54_167",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: t(`path.${id}.title`)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 76,
								columnNumber: 332
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "bar",
								"x-file-name": "Dashboard",
								"x-line-number": "54",
								"x-column": "207",
								"x-component": "div",
								"x-id": "Dashboard_54_207",
								"x-dynamic": "false",
								children: /* @__PURE__ */ _jsxDEV("span", {
									style: { width: `${p.percent}%` },
									"x-file-name": "Dashboard",
									"x-line-number": "54",
									"x-column": "228",
									"x-component": "span",
									"x-id": "Dashboard_54_228",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 76,
									columnNumber: 682
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 76,
								columnNumber: 543
							}, this),
							/* @__PURE__ */ _jsxDEV("span", {
								"x-file-name": "Dashboard",
								"x-line-number": "54",
								"x-column": "277",
								"x-component": "span",
								"x-id": "Dashboard_54_277",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: [t("ac.pathProgress", { percent: p.percent }), p.next ? ` · ${t("ac.nextUp")}: ${p.next.type === "lesson" ? t(`lesson.${p.next.id}.title`) : p.next.type === "quiz" ? t("ac.quiz") : p.next.title}` : ""]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 78,
								columnNumber: 143
							}, this)
						]
					}, id, true, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 231
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 76,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 74,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 61,
		columnNumber: 10
	}, this);
}
_s2(Dashboard, "+q+JNYlZBRahIpd0Lh8yTb28DkE=", false, function() {
	return [
		useI18n,
		useAuth,
		useAcademy,
		useQuery
	];
});
_c2 = Dashboard;
export default function DashboardPage() {
	_s3();
	const { isSignedIn, isLoaded } = useAuth();
	if (!isLoaded) return /* @__PURE__ */ _jsxDEV("div", {
		className: "section",
		"x-file-name": "Dashboard",
		"x-line-number": "62",
		"x-column": "24",
		"x-component": "div",
		"x-id": "Dashboard_62_24",
		"x-dynamic": "false",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "academy-loading",
			"x-file-name": "Dashboard",
			"x-line-number": "62",
			"x-column": "49",
			"x-component": "div",
			"x-id": "Dashboard_62_49",
			"x-dynamic": "false"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 89,
			columnNumber: 166
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 89,
		columnNumber: 25
	}, this);
	return isSignedIn ? /* @__PURE__ */ _jsxDEV(Dashboard, {
		"x-file-name": "Dashboard",
		"x-line-number": "63",
		"x-column": "22",
		"x-component": "Dashboard",
		"x-id": "Dashboard_63_22",
		"x-dynamic": "true"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 90,
		columnNumber: 23
	}, this) : /* @__PURE__ */ _jsxDEV(Navigate, {
		to: "/sign-in",
		replace: true
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 90,
		columnNumber: 160
	}, this);
}
_s3(DashboardPage, "/kUXcTIMwwxzL83B8h4Ex6pZKDM=", false, function() {
	return [useAuth];
});
_c3 = DashboardPage;
var _c, _c2, _c3;
$RefreshReg$(_c, "MyCertificates");
$RefreshReg$(_c2, "Dashboard");
$RefreshReg$(_c3, "DashboardPage");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Dashboard.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/pages/Dashboard.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/pages/Dashboard.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/pages/Dashboard.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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LEVBQUVPLEtBQUtDLFNBQVMsU0FBUzFDLEVBQUUsU0FBUyxJQUFJa0MsRUFBRU8sS0FBS0UsVUFBVSxFQUFTOzs7Ozs7TUFBTztRQUF6WXhCOzs7O1lBQXlZLENBQUM7SUFBTzs7OztZQUMxZTs7Ozs7O0VBQ047Ozs7OztBQUVUOzs7Ozs7Ozs7O0FBRUEsZUFBZSxTQUFTeUIsZ0JBQWdCOztDQUN0QyxNQUFNLEVBQUVDLFlBQVlDLGFBQWFuRCxRQUFRO0NBQ3pDLElBQUksQ0FBQ21ELFVBQVUsT0FBTyx3QkFBQyxPQUFEO0VBQUssV0FBVTtFQUFTO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtZQUFDLHdCQUFDLE9BQUQ7R0FBSyxXQUFVO0dBQWlCO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTtFQUFBOzs7OztDQUFROzs7OztDQUN2RixPQUFPRCxhQUFhLHdCQUFDLFdBQUQ7RUFBVTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7Q0FBQTs7OztZQUFNLHdCQUFDLFVBQUQ7RUFBVSxJQUFHO0VBQVc7Q0FBTzs7Ozs7QUFDckUiLCJuYW1lcyI6WyJMaW5rIiwiTmF2aWdhdGUiLCJ1c2VRdWVyeSIsIkFycm93UmlnaHQiLCJBd2FyZCIsIkJhckNoYXJ0MyIsIkJvb2tPcGVuIiwiU3BhcmtsZXMiLCJUYXJnZXQiLCJhcGlHZXQiLCJ1c2VBdXRoIiwidXNlQWNhZGVteSIsInVzZUkxOG4iLCJDZXJ0aWZpY2F0ZUFjdGlvbnMiLCJNeUNlcnRpZmljYXRlcyIsInQiLCJtZSIsImNlcnRpZmljYXRlcyIsImxlbmd0aCIsImJhY2tncm91bmQiLCJib3JkZXJDb2xvciIsImNvbG9yIiwibWFyZ2luTGVmdCIsIm1hcCIsImMiLCJwYXRoX2lkIiwiZGlzcGxheSIsIm5hbWUiLCJEYXRlIiwiaXNzdWVkX2F0IiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiaWQiLCJEYXNoYm9hcmQiLCJ1c2VyIiwiZGF0YSIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsInBhdGhWYWxzIiwiT2JqZWN0IiwidmFsdWVzIiwicGF0aHMiLCJvdmVyYWxsIiwiTWF0aCIsInJvdW5kIiwicmVkdWNlIiwiYSIsInAiLCJwZXJjZW50IiwiZW50cmllcyIsInNwbGl0IiwibGVzc29uX2NvdW50IiwicXVpenplcyIsIndpZHRoIiwibmV4dCIsInR5cGUiLCJ0aXRsZSIsIkRhc2hib2FyZFBhZ2UiLCJpc1NpZ25lZEluIiwiaXNMb2FkZWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiRGFzaGJvYXJkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rLCBOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IEFycm93UmlnaHQsIEF3YXJkLCBCYXJDaGFydDMsIEJvb2tPcGVuLCBTcGFya2xlcywgVGFyZ2V0IH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgYXBpR2V0IH0gZnJvbSBcIkAvbGliL2FwaVwiO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XG5pbXBvcnQgeyB1c2VBY2FkZW15IH0gZnJvbSBcIkAvbGliL2FjYWRlbXlcIjtcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tIFwiQC9saWIvaTE4blwiO1xuaW1wb3J0IHR5cGUgeyBQcm9ncmVzc1Jlc3BvbnNlIH0gZnJvbSBcIkAvbGliL3R5cGVzXCI7XG5pbXBvcnQgeyBDZXJ0aWZpY2F0ZUFjdGlvbnMgfSBmcm9tIFwiQC9jb21wb25lbnRzL2FjYWRlbXkvQ2VydGlmaWNhdGVcIjtcblxuZnVuY3Rpb24gTXlDZXJ0aWZpY2F0ZXMoKSB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuICBjb25zdCB7IG1lIH0gPSB1c2VBY2FkZW15KCk7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGFzaC1wYXRoc1wiIGlkPVwibXktY2VydGlmaWNhdGVzXCIgZGF0YS10ZXN0aWQ9XCJkYXNoYm9hcmQtY2VydGlmaWNhdGVzXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1oZWFkXCI+PGgzPnt0KFwiY2VydC55b3Vyc1wiKX08L2gzPjxzcGFuPnttZS5jZXJ0aWZpY2F0ZXMubGVuZ3RofTwvc3Bhbj48L2Rpdj5cbiAgICAgIHshbWUuY2VydGlmaWNhdGVzLmxlbmd0aCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZXJ0LXBhbmVsIGxvY2tlZFwiIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI2ZmZlwiLCBib3JkZXJDb2xvcjogXCIjZTJlOGYwXCIgfX0gZGF0YS10ZXN0aWQ9XCJkYXNoYm9hcmQtY2VydC1lbXB0eVwiPjxBd2FyZCBzaXplPXsyMn0gLz48cCBzdHlsZT17eyBjb2xvcjogXCIjNjQ3NDhiXCIgfX0+e3QoXCJjZXJ0Lm5vbmVcIil9PC9wPjxMaW5rIHRvPVwiL2FjYWRlbXlcIiBjbGFzc05hbWU9XCJ0ZXh0LWxpbmtcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcImF1dG9cIiB9fT57dChcImRhc2guYWNhZGVteVwiKX0gPEFycm93UmlnaHQgc2l6ZT17MTR9IC8+PC9MaW5rPjwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoLXBhdGgtbGlzdFwiPnttZS5jZXJ0aWZpY2F0ZXMubWFwKChjKSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoLXBhdGggY2VydC1taW5pXCIga2V5PXtjLmlkfSBkYXRhLXRlc3RpZD17YGRhc2hib2FyZC1jZXJ0LSR7Yy5wYXRoX2lkfWB9PlxuICAgICAgICAgICAgPHN0cm9uZz57dChgcGF0aC4ke2MucGF0aF9pZH0udGl0bGVgKX08L3N0cm9uZz5cbiAgICAgICAgICAgIDxzcGFuPntjLm5hbWV9IMK3IHtuZXcgRGF0ZShjLmlzc3VlZF9hdCkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tSU5cIiwgeyBkYXk6IFwibnVtZXJpY1wiLCBtb250aDogXCJzaG9ydFwiLCB5ZWFyOiBcIm51bWVyaWNcIiB9KX08L3NwYW4+XG4gICAgICAgICAgICA8TGluayB0bz17YC9jZXJ0aWZpY2F0ZS8ke2MuaWR9YH0gY2xhc3NOYW1lPVwidGV4dC1saW5rXCIgZGF0YS10ZXN0aWQ9e2BkYXNoYm9hcmQtY2VydC0ke2MucGF0aF9pZH0tdmlld2B9Pnt0KFwiY2VydC5pZFwiKX06IHtjLmlkfTwvTGluaz5cbiAgICAgICAgICAgIDxDZXJ0aWZpY2F0ZUFjdGlvbnMgY2VydD17Y30gdGVzdGlkPXtgZGFzaGJvYXJkLWNlcnQtJHtjLnBhdGhfaWR9YH0gLz5cbiAgICAgICAgICA8L2Rpdj4pKX08L2Rpdj5cbiAgICAgICl9XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5mdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgeyBtZSB9ID0gdXNlQWNhZGVteSgpO1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KHsgcXVlcnlLZXk6IFtcIm15LXByb2dyZXNzXCJdLCBxdWVyeUZuOiAoKSA9PiBhcGlHZXQ8UHJvZ3Jlc3NSZXNwb25zZT4oXCIvbWUvcHJvZ3Jlc3NcIikgfSk7XG4gIGNvbnN0IHBhdGhWYWxzID0gT2JqZWN0LnZhbHVlcyhtZS5wYXRocyk7XG4gIGNvbnN0IG92ZXJhbGwgPSBwYXRoVmFscy5sZW5ndGggPyBNYXRoLnJvdW5kKHBhdGhWYWxzLnJlZHVjZSgoYSwgcCkgPT4gYSArIHAucGVyY2VudCwgMCkgLyBwYXRoVmFscy5sZW5ndGgpIDogMDtcbiAgY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKG1lLnBhdGhzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZCBzZWN0aW9uXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJraWNrZXJcIj57dChcImRhc2gua2lja2VyXCIpfTwvc3Bhbj5cbiAgICAgIDxoMSBkYXRhLXRlc3RpZD1cImRhc2hib2FyZC13ZWxjb21lXCI+e3QoXCJkYXNoLndlbGNvbWVcIiwgeyBuYW1lOiB1c2VyPy5uYW1lLnNwbGl0KFwiIFwiKVswXSB8fCB0KFwiZGFzaC5sZWFybmVyXCIpIH0pfTwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJwYWdlLWludHJvXCI+e3QoXCJkYXNoLmludHJvXCIpfTwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkLWdyaWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmQtc3RhdFwiPjxCb29rT3BlbiAvPjxzdHJvbmcgZGF0YS10ZXN0aWQ9XCJkYXNoYm9hcmQtbGVzc29ucy1jb3VudFwiPntkYXRhPy5sZXNzb25fY291bnQgfHwgMH08L3N0cm9uZz48c3Bhbj57dChcImRhc2gubGVzc29uc1wiKX08L3NwYW4+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkLXN0YXRcIj48QmFyQ2hhcnQzIC8+PHN0cm9uZyBkYXRhLXRlc3RpZD1cImRhc2hib2FyZC1xdWl6LWNvdW50XCI+e2RhdGE/LnF1aXp6ZXM/Lmxlbmd0aCB8fCAwfTwvc3Ryb25nPjxzcGFuPnt0KFwiZGFzaC5xdWl6emVzXCIpfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmQtc3RhdFwiPjxUYXJnZXQgLz48c3Ryb25nIGRhdGEtdGVzdGlkPVwiZGFzaGJvYXJkLXBhdGgtcGVyY2VudFwiPntgJHtvdmVyYWxsfSVgfTwvc3Ryb25nPjxzcGFuPnt0KFwiZGFzaC5wYXRoXCIpfTwvc3Bhbj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmQtbm90ZVwiPjxTcGFya2xlcyAvPjxkaXY+PHN0cm9uZz57dChcImRhc2gubmV4dFwiKX08L3N0cm9uZz48cD57dChcImRhc2gubmV4dFRleHRcIil9PC9wPjwvZGl2PjxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cInRleHQtbGlua1wiIGRhdGEtdGVzdGlkPVwiZGFzaGJvYXJkLWhvbWUtbGlua1wiPnt0KFwiZGFzaC5jb250aW51ZVwiKX0gPEFycm93UmlnaHQgc2l6ZT17MTZ9IC8+PC9MaW5rPjwvZGl2PlxuICAgICAgPE15Q2VydGlmaWNhdGVzIC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkYXNoLXBhdGhzXCIgZGF0YS10ZXN0aWQ9XCJkYXNoYm9hcmQtcGF0aHNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctaGVhZFwiPjxoMz57dChcImRhc2gucGF0aHNcIil9PC9oMz48TGluayB0bz1cIi9hY2FkZW15XCIgY2xhc3NOYW1lPVwidGV4dC1saW5rXCIgZGF0YS10ZXN0aWQ9XCJkYXNoYm9hcmQtYWNhZGVteS1saW5rXCI+e3QoXCJkYXNoLmFjYWRlbXlcIil9IDxBcnJvd1JpZ2h0IHNpemU9ezE2fSAvPjwvTGluaz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoLXBhdGgtbGlzdFwiPntlbnRyaWVzLm1hcCgoW2lkLCBwXSkgPT4gPExpbmsgdG89e2AvYWNhZGVteS9wYXRoLyR7aWR9YH0ga2V5PXtpZH0gY2xhc3NOYW1lPVwiZGFzaC1wYXRoXCIgZGF0YS10ZXN0aWQ9e2BkYXNoYm9hcmQtcGF0aC0ke2lkfWB9PjxzdHJvbmc+e3QoYHBhdGguJHtpZH0udGl0bGVgKX08L3N0cm9uZz48ZGl2IGNsYXNzTmFtZT1cImJhclwiPjxzcGFuIHN0eWxlPXt7IHdpZHRoOiBgJHtwLnBlcmNlbnR9JWAgfX0gLz48L2Rpdj48c3Bhbj57dChcImFjLnBhdGhQcm9ncmVzc1wiLCB7IHBlcmNlbnQ6IHAucGVyY2VudCB9KX17cC5uZXh0ID8gYCDCtyAke3QoXCJhYy5uZXh0VXBcIil9OiAke3AubmV4dC50eXBlID09PSBcImxlc3NvblwiID8gdChgbGVzc29uLiR7cC5uZXh0LmlkfS50aXRsZWApIDogcC5uZXh0LnR5cGUgPT09IFwicXVpelwiID8gdChcImFjLnF1aXpcIikgOiBwLm5leHQudGl0bGV9YCA6IFwiXCJ9PC9zcGFuPjwvTGluaz4pfTwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmRQYWdlKCkge1xuICBjb25zdCB7IGlzU2lnbmVkSW4sIGlzTG9hZGVkIH0gPSB1c2VBdXRoKCk7XG4gIGlmICghaXNMb2FkZWQpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj48ZGl2IGNsYXNzTmFtZT1cImFjYWRlbXktbG9hZGluZ1wiIC8+PC9kaXY+O1xuICByZXR1cm4gaXNTaWduZWRJbiA/IDxEYXNoYm9hcmQgLz4gOiA8TmF2aWdhdGUgdG89XCIvc2lnbi1pblwiIHJlcGxhY2UgLz47XG59XG4iXSwiZmlsZSI6Ii9hcHAvZnJvbnRlbmQvc3JjL3BhZ2VzL0Rhc2hib2FyZC50c3gifQ==