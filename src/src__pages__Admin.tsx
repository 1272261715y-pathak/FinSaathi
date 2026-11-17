import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Admin.tsx");const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport9_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport9_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=a646c335";
import { Navigate } from "/node_modules/.vite/deps/react-router-dom.js?v=a646c335";
import { useQuery, useQueryClient } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=a646c335";
import { toast } from "/node_modules/.vite/deps/sonner.js?v=a646c335";
import { BadgeCheck, Plus, Trash2 } from "/src/lib/lucide-react.tsx";
import { apiDelete, apiGet, apiPatch, apiPost } from "/src/lib/api.ts";
import { useAuth } from "/src/lib/auth.tsx";
import { useAcademy } from "/src/lib/academy.tsx";
import { errorText } from "/src/lib/errors.ts";
var _jsxFileName = "/app/frontend/src/pages/Admin.tsx";
import __vite__cjsImport9_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
var _s = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$(), _s5 = $RefreshSig$();
const CATS = [
	["literacy", "Financial Literacy"],
	["stocks", "Stock Market"],
	["mutual-funds", "Mutual Funds"],
	["sip", "SIP"],
	["etfs", "ETFs & Index Funds"],
	["banking", "Banking & Digital Payments"],
	["budgeting", "Budgeting & Savings"],
	["safety", "Financial Safety"]
];
const LEVELS = [
	"beginner",
	"intermediate",
	"advanced"
];
const Sel = ({ value, onChange, options, testid }) => /* @__PURE__ */ _jsxDEV("select", {
	value,
	onChange: (e) => onChange(e.target.value),
	"data-testid": testid,
	"x-file-name": "Admin",
	"x-line-number": "14",
	"x-column": "160",
	"x-component": "select",
	"x-id": "Admin_14_160",
	"x-dynamic": "true",
	"x-source-type": "computed",
	"x-source-editable": "false",
	children: options.map((o) => {
		const [v, l] = Array.isArray(o) ? o : [o, o];
		return /* @__PURE__ */ _jsxDEV("option", {
			value: v,
			"x-file-name": "Admin",
			"x-line-number": "14",
			"x-column": "321",
			"x-component": "option",
			"x-id": "Admin_14_321",
			"x-dynamic": "true",
			"x-source-type": "unknown",
			"x-source-var": "l",
			"x-source-editable": "false",
			children: l
		}, v, false, {
			fileName: _jsxFileName,
			lineNumber: 25,
			columnNumber: 12
		}, this);
	})
}, void 0, false, {
	fileName: _jsxFileName,
	lineNumber: 23,
	columnNumber: 7
}, this);
_c = Sel;
async function run(fn, ok) {
	try {
		const r = await fn();
		if (ok) toast.success(ok);
		return r;
	} catch (e) {
		toast.error(errorText(e));
		return null;
	}
}
function VideosTab() {
	_s();
	const qc = useQueryClient();
	const { data } = useQuery({
		queryKey: ["admin-videos"],
		queryFn: () => apiGet("/admin/videos")
	});
	const reload = () => void qc.invalidateQueries({ queryKey: ["admin-videos"] });
	const blank = {
		url: "",
		category: "literacy",
		difficulty: "beginner",
		duration: "",
		published_on: "",
		description: "",
		status: "draft"
	};
	const [f, setF] = useState(blank);
	const submit = async (e) => {
		e.preventDefault();
		if (await run(() => apiPost("/admin/videos", f), "Video added")) {
			setF(blank);
			reload();
		}
	};
	const patch = async (v, body, msg) => {
		if (await run(() => apiPatch(`/admin/videos/${v.id}`, body), msg)) reload();
	};
	const del = async (v) => {
		if (window.confirm(`Delete "${v.title}"?`) && await run(() => apiDelete(`/admin/videos/${v.id}`), "Video deleted")) reload();
	};
	return /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV("form", {
		className: "admin-form",
		onSubmit: (e) => void submit(e),
		"data-testid": "admin-video-form",
		"x-file-name": "Admin",
		"x-line-number": "28",
		"x-column": "4",
		"x-component": "form",
		"x-id": "Admin_28_4",
		"x-dynamic": "false",
		children: [
			/* @__PURE__ */ _jsxDEV("input", {
				className: "wide",
				value: f.url,
				onChange: (e) => setF({
					...f,
					url: e.target.value
				}),
				placeholder: "YouTube link",
				required: true,
				"data-testid": "admin-video-url",
				"x-file-name": "Admin",
				"x-line-number": "29",
				"x-column": "6",
				"x-component": "input",
				"x-id": "Admin_29_6",
				"x-dynamic": "false"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 75,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(Sel, {
				value: f.category,
				onChange: (v) => setF({
					...f,
					category: v
				}),
				options: CATS,
				testid: "admin-video-category",
				"x-file-name": "Admin",
				"x-line-number": "30",
				"x-column": "6",
				"x-component": "Sel",
				"x-id": "Admin_30_6",
				"x-dynamic": "true"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 79,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(Sel, {
				value: f.difficulty,
				onChange: (v) => setF({
					...f,
					difficulty: v
				}),
				options: LEVELS,
				testid: "admin-video-difficulty",
				"x-file-name": "Admin",
				"x-line-number": "31",
				"x-column": "6",
				"x-component": "Sel",
				"x-id": "Admin_31_6",
				"x-dynamic": "true"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 83,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("input", {
				value: f.duration,
				onChange: (e) => setF({
					...f,
					duration: e.target.value
				}),
				placeholder: "Duration (8:25)",
				"data-testid": "admin-video-duration",
				"x-file-name": "Admin",
				"x-line-number": "32",
				"x-column": "6",
				"x-component": "input",
				"x-id": "Admin_32_6",
				"x-dynamic": "false"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 87,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("input", {
				className: "wide",
				value: f.description,
				onChange: (e) => setF({
					...f,
					description: e.target.value
				}),
				placeholder: "Short description for learners",
				"data-testid": "admin-video-description",
				"x-file-name": "Admin",
				"x-line-number": "33",
				"x-column": "6",
				"x-component": "input",
				"x-id": "Admin_33_6",
				"x-dynamic": "false"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 91,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(Sel, {
				value: f.status,
				onChange: (v) => setF({
					...f,
					status: v
				}),
				options: [["draft", "Save as draft"], ["published", "Publish now"]],
				testid: "admin-video-status",
				"x-file-name": "Admin",
				"x-line-number": "34",
				"x-column": "6",
				"x-component": "Sel",
				"x-id": "Admin_34_6",
				"x-dynamic": "true"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 95,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("button", {
				className: "primary-button",
				"data-testid": "admin-video-submit",
				"x-file-name": "Admin",
				"x-line-number": "35",
				"x-column": "6",
				"x-component": "button",
				"x-id": "Admin_35_6",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV(Plus, { size: 16 }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 99,
					columnNumber: 184
				}, this), " Add video"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 99,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 74,
		columnNumber: 5
	}, this), /* @__PURE__ */ _jsxDEV("div", {
		className: "admin-list",
		"x-file-name": "Admin",
		"x-line-number": "37",
		"x-column": "4",
		"x-component": "div",
		"x-id": "Admin_37_4",
		"x-dynamic": "true",
		"x-source-type": "computed",
		"x-source-editable": "false",
		children: (data?.videos || []).map((v) => /* @__PURE__ */ _jsxDEV("div", {
			className: `admin-row ${v.status}`,
			"data-testid": `admin-video-${v.ref}`,
			"x-file-name": "Admin",
			"x-line-number": "38",
			"x-column": "6",
			"x-component": "div",
			"x-id": "Admin_38_6",
			"x-dynamic": "false",
			children: [
				/* @__PURE__ */ _jsxDEV("img", {
					src: v.thumbnail,
					alt: "",
					"x-file-name": "Admin",
					"x-line-number": "39",
					"x-column": "8",
					"x-component": "img",
					"x-id": "Admin_39_8",
					"x-dynamic": "false"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 102,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "admin-row-main",
					"x-file-name": "Admin",
					"x-line-number": "40",
					"x-column": "8",
					"x-component": "div",
					"x-id": "Admin_40_8",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("strong", {
						"x-file-name": "Admin",
						"x-line-number": "40",
						"x-column": "40",
						"x-component": "strong",
						"x-id": "Admin_40_40",
						"x-dynamic": "true",
						"x-source-type": "static-imported",
						"x-source-path": "title",
						"x-source-editable": "false",
						"x-array-item-param": "v",
						children: v.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 103,
						columnNumber: 147
					}, this), /* @__PURE__ */ _jsxDEV("span", {
						"x-file-name": "Admin",
						"x-line-number": "40",
						"x-column": "66",
						"x-component": "span",
						"x-id": "Admin_40_66",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: [
							/* @__PURE__ */ _jsxDEV("span", {
								"data-ve-dynamic": "true",
								"x-excluded": "true",
								style: { display: "contents" },
								"x-file-name": "Admin",
								"x-line-number": "40",
								"x-column": "66",
								"x-component": "span",
								"x-id": "Admin_40_66_expr0",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: v.source === "original" ? "FinSaathi Original" : v.channel
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 103,
								columnNumber: 551
							}, this),
							" · ",
							/* @__PURE__ */ _jsxDEV("span", {
								"data-ve-dynamic": "true",
								"x-excluded": "true",
								style: { display: "contents" },
								"x-file-name": "Admin",
								"x-line-number": "40",
								"x-column": "66",
								"x-component": "span",
								"x-id": "Admin_40_66_expr2",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: v.duration || "—"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 105,
								columnNumber: 251
							}, this),
							" · ",
							/* @__PURE__ */ _jsxDEV("span", {
								"data-ve-dynamic": "true",
								"x-excluded": "true",
								style: { display: "contents" },
								"x-file-name": "Admin",
								"x-line-number": "40",
								"x-column": "66",
								"x-component": "span",
								"x-id": "Admin_40_66_expr4",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: v.published_on || "date n/a"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 107,
								columnNumber: 210
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 103,
						columnNumber: 386
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 103,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV(Sel, {
					value: v.category,
					onChange: (c) => void patch(v, { category: c }),
					options: CATS,
					testid: `admin-video-cat-${v.ref}`,
					"x-file-name": "Admin",
					"x-line-number": "41",
					"x-column": "8",
					"x-component": "Sel",
					"x-id": "Admin_41_8",
					"x-dynamic": "true",
					"x-source-type": "external",
					"x-source-editable": "false",
					"x-array-item-param": "v"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 110,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV(Sel, {
					value: v.difficulty,
					onChange: (d) => void patch(v, { difficulty: d }),
					options: LEVELS,
					testid: `admin-video-level-${v.ref}`,
					"x-file-name": "Admin",
					"x-line-number": "42",
					"x-column": "8",
					"x-component": "Sel",
					"x-id": "Admin_42_8",
					"x-dynamic": "true",
					"x-source-type": "external",
					"x-source-editable": "false",
					"x-array-item-param": "v"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 113,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("button", {
					className: `status-pill ${v.status}`,
					onClick: () => void patch(v, { status: v.status === "published" ? "draft" : "published" }, "Updated"),
					"data-testid": `admin-video-toggle-${v.ref}`,
					"x-file-name": "Admin",
					"x-line-number": "43",
					"x-column": "8",
					"x-component": "button",
					"x-id": "Admin_43_8",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: v.status === "published" ? "Published" : "Draft — publish"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 116,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("button", {
					className: "icon-btn danger",
					onClick: () => void del(v),
					"data-testid": `admin-video-delete-${v.ref}`,
					"x-file-name": "Admin",
					"x-line-number": "44",
					"x-column": "8",
					"x-component": "button",
					"x-id": "Admin_44_8",
					"x-dynamic": "false",
					children: /* @__PURE__ */ _jsxDEV(Trash2, {
						size: 15,
						"x-file-name": "Admin",
						"x-line-number": "44",
						"x-column": "116",
						"x-component": "Trash2",
						"x-id": "Admin_44_116",
						"x-dynamic": "true",
						"x-source-type": "external",
						"x-source-editable": "false",
						"x-array-item-param": "v"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 119,
						columnNumber: 226
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 119,
					columnNumber: 9
				}, this)
			]
		}, v.id, true, {
			fileName: _jsxFileName,
			lineNumber: 101,
			columnNumber: 220
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 101,
		columnNumber: 5
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 73,
		columnNumber: 10
	}, this);
}
_s(VideosTab, "TW4a+ATv9yWd8LZ3IdJLCMIEwMU=", false, function() {
	return [useQueryClient, useQuery];
});
_c2 = VideosTab;
function PlaylistsTab() {
	_s2();
	const { data } = useQuery({
		queryKey: ["admin-playlists"],
		queryFn: () => apiGet("/admin/playlists")
	});
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "admin-list",
		"x-file-name": "Admin",
		"x-line-number": "51",
		"x-column": "9",
		"x-component": "div",
		"x-id": "Admin_51_9",
		"x-dynamic": "true",
		"x-source-type": "computed",
		"x-source-editable": "false",
		children: (data?.playlists || []).map((p) => /* @__PURE__ */ _jsxDEV("div", {
			className: "admin-row published",
			"data-testid": `admin-playlist-${p.id}`,
			"x-file-name": "Admin",
			"x-line-number": "51",
			"x-column": "73",
			"x-component": "div",
			"x-id": "Admin_51_73",
			"x-dynamic": "false",
			children: /* @__PURE__ */ _jsxDEV("div", {
				className: "admin-row-main",
				"x-file-name": "Admin",
				"x-line-number": "51",
				"x-column": "160",
				"x-component": "div",
				"x-id": "Admin_51_160",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("strong", {
					"x-file-name": "Admin",
					"x-line-number": "51",
					"x-column": "192",
					"x-component": "strong",
					"x-id": "Admin_51_192",
					"x-dynamic": "true",
					"x-source-type": "static-imported",
					"x-source-path": "title",
					"x-source-editable": "false",
					"x-array-item-param": "p",
					children: p.title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 132,
					columnNumber: 565
				}, this), /* @__PURE__ */ _jsxDEV("span", {
					"x-file-name": "Admin",
					"x-line-number": "51",
					"x-column": "218",
					"x-component": "span",
					"x-id": "Admin_51_218",
					"x-dynamic": "true",
					"x-source-type": "static-imported",
					"x-source-path": "items.length",
					"x-source-editable": "false",
					"x-array-item-param": "p",
					children: [
						/* @__PURE__ */ _jsxDEV("span", {
							"data-ve-dynamic": "true",
							"x-excluded": "true",
							style: { display: "contents" },
							"x-file-name": "Admin",
							"x-line-number": "51",
							"x-column": "218",
							"x-component": "span",
							"x-id": "Admin_51_218_expr0",
							"x-dynamic": "true",
							"x-source-type": "static-imported",
							"x-source-path": "items.length",
							"x-source-editable": "false",
							"x-array-item-param": "p",
							children: p.items.length
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 132,
							columnNumber: 1032
						}, this),
						" videos · ",
						/* @__PURE__ */ _jsxDEV("span", {
							"data-ve-dynamic": "true",
							"x-excluded": "true",
							style: { display: "contents" },
							"x-file-name": "Admin",
							"x-line-number": "51",
							"x-column": "218",
							"x-component": "span",
							"x-id": "Admin_51_218_expr2",
							"x-dynamic": "true",
							"x-source-type": "static-imported",
							"x-source-path": "videos.length",
							"x-source-editable": "false",
							"x-array-item-param": "p",
							children: p.videos.length
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 134,
							columnNumber: 273
						}, this),
						" in catalog"
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 132,
					columnNumber: 806
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 132,
				columnNumber: 423
			}, this)
		}, p.id, false, {
			fileName: _jsxFileName,
			lineNumber: 132,
			columnNumber: 228
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 132,
		columnNumber: 10
	}, this);
}
_s2(PlaylistsTab, "bhZJDCapdpSsOPSBfHy8+VuGL+Y=", false, function() {
	return [useQuery];
});
_c3 = PlaylistsTab;
function ResourcesTab() {
	_s3();
	const qc = useQueryClient();
	const { data } = useQuery({
		queryKey: ["admin-resources"],
		queryFn: () => apiGet("/admin/resources")
	});
	const reload = () => void qc.invalidateQueries({ queryKey: ["admin-resources"] });
	const blank = {
		name: "",
		kind: "creator",
		platform: "YouTube",
		url: "",
		topics: "",
		description: "",
		verified: false,
		status: "draft"
	};
	const [f, setF] = useState(blank);
	const add = async (e) => {
		e.preventDefault();
		if (await run(() => apiPost("/admin/resources", {
			...f,
			topics: f.topics.split(",").map((s) => s.trim()).filter(Boolean)
		}), "Resource added")) {
			setF(blank);
			reload();
		}
	};
	const patch = async (r, body) => {
		if (await run(() => apiPatch(`/admin/resources/${r.id}`, body), "Updated")) reload();
	};
	return /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV("form", {
		className: "admin-form",
		onSubmit: (e) => void add(e),
		"data-testid": "admin-resource-form",
		"x-file-name": "Admin",
		"x-line-number": "63",
		"x-column": "4",
		"x-component": "form",
		"x-id": "Admin_63_4",
		"x-dynamic": "false",
		children: [
			/* @__PURE__ */ _jsxDEV("input", {
				value: f.name,
				onChange: (e) => setF({
					...f,
					name: e.target.value
				}),
				placeholder: "Creator / organisation",
				required: true,
				"data-testid": "admin-resource-name",
				"x-file-name": "Admin",
				"x-line-number": "64",
				"x-column": "6",
				"x-component": "input",
				"x-id": "Admin_64_6",
				"x-dynamic": "false"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 177,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(Sel, {
				value: f.kind,
				onChange: (k) => setF({
					...f,
					kind: k
				}),
				options: [
					["regulator", "Official regulator"],
					["institution", "Educational institution"],
					["platform", "Educational platform"],
					["creator", "Independent creator"]
				],
				testid: "admin-resource-kind",
				"x-file-name": "Admin",
				"x-line-number": "65",
				"x-column": "6",
				"x-component": "Sel",
				"x-id": "Admin_65_6",
				"x-dynamic": "true"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 181,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(Sel, {
				value: f.platform,
				onChange: (p) => setF({
					...f,
					platform: p
				}),
				options: [
					"YouTube",
					"Instagram",
					"Official website"
				],
				testid: "admin-resource-platform",
				"x-file-name": "Admin",
				"x-line-number": "66",
				"x-column": "6",
				"x-component": "Sel",
				"x-id": "Admin_66_6",
				"x-dynamic": "true"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 185,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("input", {
				className: "wide",
				value: f.url,
				onChange: (e) => setF({
					...f,
					url: e.target.value
				}),
				placeholder: "https:// official link",
				required: true,
				"data-testid": "admin-resource-url",
				"x-file-name": "Admin",
				"x-line-number": "67",
				"x-column": "6",
				"x-component": "input",
				"x-id": "Admin_67_6",
				"x-dynamic": "false"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 189,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("input", {
				className: "wide",
				value: f.description,
				onChange: (e) => setF({
					...f,
					description: e.target.value
				}),
				placeholder: "Short description",
				"data-testid": "admin-resource-description",
				"x-file-name": "Admin",
				"x-line-number": "68",
				"x-column": "6",
				"x-component": "input",
				"x-id": "Admin_68_6",
				"x-dynamic": "false"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 193,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("button", {
				className: "primary-button",
				"data-testid": "admin-resource-submit",
				"x-file-name": "Admin",
				"x-line-number": "69",
				"x-column": "6",
				"x-component": "button",
				"x-id": "Admin_69_6",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV(Plus, { size: 16 }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 197,
					columnNumber: 187
				}, this), " Add resource"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 197,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 176,
		columnNumber: 5
	}, this), /* @__PURE__ */ _jsxDEV("div", {
		className: "admin-list",
		"x-file-name": "Admin",
		"x-line-number": "71",
		"x-column": "4",
		"x-component": "div",
		"x-id": "Admin_71_4",
		"x-dynamic": "true",
		"x-source-type": "computed",
		"x-source-editable": "false",
		children: (data?.resources || []).map((r) => /* @__PURE__ */ _jsxDEV("div", {
			className: `admin-row ${r.status}`,
			"data-testid": `admin-resource-${r.id}`,
			"x-file-name": "Admin",
			"x-line-number": "72",
			"x-column": "6",
			"x-component": "div",
			"x-id": "Admin_72_6",
			"x-dynamic": "false",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "admin-row-main",
					"x-file-name": "Admin",
					"x-line-number": "73",
					"x-column": "8",
					"x-component": "div",
					"x-id": "Admin_73_8",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("strong", {
						"x-file-name": "Admin",
						"x-line-number": "73",
						"x-column": "40",
						"x-component": "strong",
						"x-id": "Admin_73_40",
						"x-dynamic": "true",
						"x-source-type": "static-imported",
						"x-source-path": "name",
						"x-source-editable": "false",
						"x-array-item-param": "r",
						children: [
							/* @__PURE__ */ _jsxDEV("span", {
								"data-ve-dynamic": "true",
								"x-excluded": "true",
								style: { display: "contents" },
								"x-file-name": "Admin",
								"x-line-number": "73",
								"x-column": "40",
								"x-component": "strong",
								"x-id": "Admin_73_40_expr0",
								"x-dynamic": "true",
								"x-source-type": "static-imported",
								"x-source-path": "name",
								"x-source-editable": "false",
								"x-array-item-param": "r",
								children: r.name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 200,
								columnNumber: 367
							}, this),
							" · ",
							/* @__PURE__ */ _jsxDEV("span", {
								"data-ve-dynamic": "true",
								"x-excluded": "true",
								style: { display: "contents" },
								"x-file-name": "Admin",
								"x-line-number": "73",
								"x-column": "40",
								"x-component": "strong",
								"x-id": "Admin_73_40_expr2",
								"x-dynamic": "true",
								"x-source-type": "static-imported",
								"x-source-path": "platform",
								"x-source-editable": "false",
								"x-array-item-param": "r",
								children: r.platform
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 202,
								columnNumber: 252
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 200,
						columnNumber: 147
					}, this), /* @__PURE__ */ _jsxDEV("span", {
						"x-file-name": "Admin",
						"x-line-number": "73",
						"x-column": "80",
						"x-component": "span",
						"x-id": "Admin_73_80",
						"x-dynamic": "true",
						"x-source-type": "static-imported",
						"x-source-path": "url",
						"x-source-editable": "false",
						"x-array-item-param": "r",
						children: [
							/* @__PURE__ */ _jsxDEV("span", {
								"data-ve-dynamic": "true",
								"x-excluded": "true",
								style: { display: "contents" },
								"x-file-name": "Admin",
								"x-line-number": "73",
								"x-column": "80",
								"x-component": "span",
								"x-id": "Admin_73_80_expr0",
								"x-dynamic": "true",
								"x-source-type": "static-imported",
								"x-source-path": "url",
								"x-source-editable": "false",
								"x-array-item-param": "r",
								children: r.url
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 204,
								columnNumber: 481
							}, this),
							" · ",
							/* @__PURE__ */ _jsxDEV("span", {
								"data-ve-dynamic": "true",
								"x-excluded": "true",
								style: { display: "contents" },
								"x-file-name": "Admin",
								"x-line-number": "73",
								"x-column": "80",
								"x-component": "span",
								"x-id": "Admin_73_80_expr2",
								"x-dynamic": "true",
								"x-source-type": "static-imported",
								"x-source-path": "kind",
								"x-source-editable": "false",
								"x-array-item-param": "r",
								children: r.kind
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 206,
								columnNumber: 248
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 204,
						columnNumber: 266
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 200,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("button", {
					className: `status-pill ${r.verified ? "published" : "draft"}`,
					onClick: () => void patch(r, { verified: !r.verified }),
					"data-testid": `admin-resource-verify-${r.id}`,
					"x-file-name": "Admin",
					"x-line-number": "74",
					"x-column": "8",
					"x-component": "button",
					"x-id": "Admin_74_8",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: [
						/* @__PURE__ */ _jsxDEV(BadgeCheck, {
							size: 14,
							"x-file-name": "Admin",
							"x-line-number": "74",
							"x-column": "183",
							"x-component": "BadgeCheck",
							"x-id": "Admin_74_183",
							"x-dynamic": "true",
							"x-source-type": "external",
							"x-source-editable": "false",
							"x-array-item-param": "r"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 211,
							columnNumber: 218
						}, this),
						" ",
						r.verified ? "Verified" : "Verify"
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 209,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("button", {
					className: `status-pill ${r.status}`,
					disabled: !r.verified,
					onClick: () => void patch(r, { status: r.status === "published" ? "draft" : "published" }),
					"data-testid": `admin-resource-toggle-${r.id}`,
					"x-file-name": "Admin",
					"x-line-number": "75",
					"x-column": "8",
					"x-component": "button",
					"x-id": "Admin_75_8",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: r.status === "published" ? "Published" : "Draft — publish"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 212,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("button", {
					className: "icon-btn danger",
					onClick: async () => {
						if (await run(() => apiDelete(`/admin/resources/${r.id}`), "Deleted")) reload();
					},
					"data-testid": `admin-resource-delete-${r.id}`,
					"x-file-name": "Admin",
					"x-line-number": "76",
					"x-column": "8",
					"x-component": "button",
					"x-id": "Admin_76_8",
					"x-dynamic": "false",
					children: /* @__PURE__ */ _jsxDEV(Trash2, {
						size: 15,
						"x-file-name": "Admin",
						"x-line-number": "76",
						"x-column": "197",
						"x-component": "Trash2",
						"x-id": "Admin_76_197",
						"x-dynamic": "true",
						"x-source-type": "external",
						"x-source-editable": "false",
						"x-array-item-param": "r"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 217,
						columnNumber: 167
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 215,
					columnNumber: 9
				}, this)
			]
		}, r.id, true, {
			fileName: _jsxFileName,
			lineNumber: 199,
			columnNumber: 223
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 199,
		columnNumber: 5
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 175,
		columnNumber: 10
	}, this);
}
_s3(ResourcesTab, "TW4a+ATv9yWd8LZ3IdJLCMIEwMU=", false, function() {
	return [useQueryClient, useQuery];
});
_c4 = ResourcesTab;
function UsersTab() {
	_s4();
	const qc = useQueryClient();
	const { data } = useQuery({
		queryKey: ["admin-users"],
		queryFn: () => apiGet("/users")
	});
	const setRole = async (id, role) => {
		if (await run(() => apiPatch(`/users/${id}/role`, { role }), "Role updated")) void qc.invalidateQueries({ queryKey: ["admin-users"] });
	};
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "admin-list",
		"x-file-name": "Admin",
		"x-line-number": "85",
		"x-column": "9",
		"x-component": "div",
		"x-id": "Admin_85_9",
		"x-dynamic": "true",
		"x-source-type": "computed",
		"x-source-editable": "false",
		children: (data?.users || []).map((u) => /* @__PURE__ */ _jsxDEV("div", {
			className: "admin-row",
			"data-testid": `admin-user-${u.user_id}`,
			"x-file-name": "Admin",
			"x-line-number": "85",
			"x-column": "69",
			"x-component": "div",
			"x-id": "Admin_85_69",
			"x-dynamic": "false",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "admin-row-main",
				"x-file-name": "Admin",
				"x-line-number": "85",
				"x-column": "152",
				"x-component": "div",
				"x-id": "Admin_85_152",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("strong", {
					"x-file-name": "Admin",
					"x-line-number": "85",
					"x-column": "184",
					"x-component": "strong",
					"x-id": "Admin_85_184",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: u.name || u.email
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 244,
					columnNumber: 557
				}, this), /* @__PURE__ */ _jsxDEV("span", {
					"x-file-name": "Admin",
					"x-line-number": "85",
					"x-column": "220",
					"x-component": "span",
					"x-id": "Admin_85_220",
					"x-dynamic": "true",
					"x-source-type": "static-imported",
					"x-source-path": "email",
					"x-source-editable": "false",
					"x-array-item-param": "u",
					children: u.email
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 244,
					columnNumber: 756
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 244,
				columnNumber: 415
			}, this), /* @__PURE__ */ _jsxDEV(Sel, {
				value: u.role,
				onChange: (r) => void setRole(u.user_id, r),
				options: data?.roles || [],
				testid: `admin-user-role-${u.user_id}`,
				"x-file-name": "Admin",
				"x-line-number": "85",
				"x-column": "248",
				"x-component": "Sel",
				"x-id": "Admin_85_248",
				"x-dynamic": "true",
				"x-source-type": "external",
				"x-source-editable": "false",
				"x-array-item-param": "u"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 244,
				columnNumber: 997
			}, this)]
		}, u.user_id, true, {
			fileName: _jsxFileName,
			lineNumber: 244,
			columnNumber: 224
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 244,
		columnNumber: 10
	}, this);
}
_s4(UsersTab, "RvkiKE1L/oVRTSVdIdrLFHg/mGs=", false, function() {
	return [useQueryClient, useQuery];
});
_c5 = UsersTab;
const TABS = [
	[
		"videos",
		"Videos",
		VideosTab
	],
	[
		"playlists",
		"Playlists",
		PlaylistsTab
	],
	[
		"resources",
		"Expert links",
		ResourcesTab
	],
	[
		"users",
		"Users",
		UsersTab
	]
];
export default function AdminPage() {
	_s5();
	const { isLoaded, isSignedIn } = useAuth();
	const { role } = useAcademy();
	const [tab, setTab] = useState("videos");
	if (!isLoaded) return /* @__PURE__ */ _jsxDEV("div", {
		className: "section",
		"x-file-name": "Admin",
		"x-line-number": "94",
		"x-column": "24",
		"x-component": "div",
		"x-id": "Admin_94_24",
		"x-dynamic": "false",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "academy-loading",
			"x-file-name": "Admin",
			"x-line-number": "94",
			"x-column": "49",
			"x-component": "div",
			"x-id": "Admin_94_49",
			"x-dynamic": "false"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 256,
			columnNumber: 158
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 256,
		columnNumber: 25
	}, this);
	if (!isSignedIn) return /* @__PURE__ */ _jsxDEV(Navigate, {
		to: "/sign-in",
		replace: true
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 257,
		columnNumber: 27
	}, this);
	if (role === null) return /* @__PURE__ */ _jsxDEV("div", {
		className: "section",
		"x-file-name": "Admin",
		"x-line-number": "96",
		"x-column": "28",
		"x-component": "div",
		"x-id": "Admin_96_28",
		"x-dynamic": "false",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "academy-loading",
			"x-file-name": "Admin",
			"x-line-number": "96",
			"x-column": "53",
			"x-component": "div",
			"x-id": "Admin_96_53",
			"x-dynamic": "false"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 258,
			columnNumber: 162
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 258,
		columnNumber: 29
	}, this);
	if (role !== "admin") return /* @__PURE__ */ _jsxDEV("div", {
		className: "section",
		"data-testid": "admin-forbidden",
		"x-file-name": "Admin",
		"x-line-number": "97",
		"x-column": "31",
		"x-component": "div",
		"x-id": "Admin_97_31",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("h2", {
			"x-file-name": "Admin",
			"x-line-number": "97",
			"x-column": "86",
			"x-component": "h2",
			"x-id": "Admin_97_86",
			"x-dynamic": "false",
			children: "Admins only"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 259,
			columnNumber: 195
		}, this), /* @__PURE__ */ _jsxDEV("p", {
			"x-file-name": "Admin",
			"x-line-number": "97",
			"x-column": "106",
			"x-component": "p",
			"x-id": "Admin_97_106",
			"x-dynamic": "false",
			children: "You don't have access to content management."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 259,
			columnNumber: 322
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 259,
		columnNumber: 32
	}, this);
	const Tab = TABS.find(([id]) => id === tab)[2];
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "admin section",
		"data-testid": "admin-page",
		"x-file-name": "Admin",
		"x-line-number": "100",
		"x-column": "4",
		"x-component": "div",
		"x-id": "Admin_100_4",
		"x-dynamic": "false",
		children: [
			/* @__PURE__ */ _jsxDEV("span", {
				className: "kicker",
				"x-file-name": "Admin",
				"x-line-number": "101",
				"x-column": "6",
				"x-component": "span",
				"x-id": "Admin_101_6",
				"x-dynamic": "false",
				children: "CONTENT MANAGEMENT"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 262,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("h1", {
				"x-file-name": "Admin",
				"x-line-number": "101",
				"x-column": "56",
				"x-component": "h1",
				"x-id": "Admin_101_56",
				"x-dynamic": "false",
				children: "Video Academy admin"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 262,
				columnNumber: 166
			}, this),
			/* @__PURE__ */ _jsxDEV("p", {
				className: "page-intro",
				"x-file-name": "Admin",
				"x-line-number": "102",
				"x-column": "6",
				"x-component": "p",
				"x-id": "Admin_102_6",
				"x-dynamic": "false",
				children: "New videos and expert links start as drafts. Review them, then publish to make them visible to learners."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 263,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "admin-tabs",
				"x-file-name": "Admin",
				"x-line-number": "103",
				"x-column": "6",
				"x-component": "div",
				"x-id": "Admin_103_6",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: TABS.map(([id, label]) => /* @__PURE__ */ _jsxDEV("button", {
					className: tab === id ? "active" : "",
					onClick: () => setTab(id),
					"data-testid": `admin-tab-${id}`,
					"x-file-name": "Admin",
					"x-line-number": "103",
					"x-column": "61",
					"x-component": "button",
					"x-id": "Admin_103_61",
					"x-dynamic": "true",
					"x-source-type": "unknown",
					"x-source-var": "label",
					"x-source-editable": "false",
					children: label
				}, id, false, {
					fileName: _jsxFileName,
					lineNumber: 264,
					columnNumber: 220
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 264,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(Tab, {
				"x-file-name": "Admin",
				"x-line-number": "104",
				"x-column": "6",
				"x-component": "Tab",
				"x-id": "Admin_104_6",
				"x-dynamic": "false"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 265,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 261,
		columnNumber: 10
	}, this);
}
_s5(AdminPage, "U9El8JS+fGaaJz5uPKi1p+aYgYQ=", false, function() {
	return [useAuth, useAcademy];
});
_c6 = AdminPage;
var _c, _c2, _c3, _c4, _c5, _c6;
$RefreshReg$(_c, "Sel");
$RefreshReg$(_c2, "VideosTab");
$RefreshReg$(_c3, "PlaylistsTab");
$RefreshReg$(_c4, "ResourcesTab");
$RefreshReg$(_c5, "UsersTab");
$RefreshReg$(_c6, "AdminPage");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Admin.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/pages/Admin.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/pages/Admin.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/pages/Admin.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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S0FBQTtlQUFFZ0Q7SUFBYyxHQUFySGhEOzs7O1dBQXFILENBQUM7R0FBTzs7Ozs7R0FDak0sd0JBQUMsS0FBRDtJQUFJO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtHQUFBOzs7OztFQUNEOzs7Ozs7QUFFVCIsIm5hbWVzIjpbInVzZVN0YXRlIiwiTmF2aWdhdGUiLCJ1c2VRdWVyeSIsInVzZVF1ZXJ5Q2xpZW50IiwidG9hc3QiLCJCYWRnZUNoZWNrIiwiUGx1cyIsIlRyYXNoMiIsImFwaURlbGV0ZSIsImFwaUdldCIsImFwaVBhdGNoIiwiYXBpUG9zdCIsInVzZUF1dGgiLCJ1c2VBY2FkZW15IiwiZXJyb3JUZXh0IiwiQ0FUUyIsIkxFVkVMUyIsIlNlbCIsInZhbHVlIiwib25DaGFuZ2UiLCJvcHRpb25zIiwidGVzdGlkIiwiZSIsInRhcmdldCIsIm1hcCIsIm8iLCJ2IiwibCIsIkFycmF5IiwiaXNBcnJheSIsInJ1biIsImZuIiwib2siLCJyIiwic3VjY2VzcyIsImVycm9yIiwiVmlkZW9zVGFiIiwicWMiLCJkYXRhIiwicXVlcnlLZXkiLCJxdWVyeUZuIiwicmVsb2FkIiwiaW52YWxpZGF0ZVF1ZXJpZXMiLCJibGFuayIsInVybCIsImNhdGVnb3J5IiwiZGlmZmljdWx0eSIsImR1cmF0aW9uIiwicHVibGlzaGVkX29uIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJmIiwic2V0RiIsInN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicGF0Y2giLCJib2R5IiwibXNnIiwiaWQiLCJkZWwiLCJ3aW5kb3ciLCJjb25maXJtIiwidGl0bGUiLCJ2aWRlb3MiLCJyZWYiLCJ0aHVtYm5haWwiLCJkaXNwbGF5Iiwic291cmNlIiwiY2hhbm5lbCIsImMiLCJkIiwiUGxheWxpc3RzVGFiIiwicGxheWxpc3RzIiwicCIsIml0ZW1zIiwibGVuZ3RoIiwiUmVzb3VyY2VzVGFiIiwibmFtZSIsImtpbmQiLCJwbGF0Zm9ybSIsInRvcGljcyIsInZlcmlmaWVkIiwiYWRkIiwic3BsaXQiLCJzIiwidHJpbSIsImZpbHRlciIsIkJvb2xlYW4iLCJrIiwicmVzb3VyY2VzIiwiVXNlcnNUYWIiLCJzZXRSb2xlIiwicm9sZSIsInVzZXJzIiwidSIsInVzZXJfaWQiLCJlbWFpbCIsInJvbGVzIiwiVEFCUyIsIkFkbWluUGFnZSIsImlzTG9hZGVkIiwiaXNTaWduZWRJbiIsInRhYiIsInNldFRhYiIsIlRhYiIsImZpbmQiLCJsYWJlbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBZG1pbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInNvbm5lclwiO1xuaW1wb3J0IHsgQmFkZ2VDaGVjaywgUGx1cywgVHJhc2gyIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgYXBpRGVsZXRlLCBhcGlHZXQsIGFwaVBhdGNoLCBhcGlQb3N0IH0gZnJvbSBcIkAvbGliL2FwaVwiO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XG5pbXBvcnQgeyB1c2VBY2FkZW15IH0gZnJvbSBcIkAvbGliL2FjYWRlbXlcIjtcbmltcG9ydCB7IGVycm9yVGV4dCB9IGZyb20gXCJAL2xpYi9lcnJvcnNcIjtcbmltcG9ydCB0eXBlIHsgUGxheWxpc3REb2MsIFJlc291cmNlRG9jLCBWaWRlb0RvYyB9IGZyb20gXCJAL2xpYi90eXBlc1wiO1xuXG5jb25zdCBDQVRTOiBbc3RyaW5nLCBzdHJpbmddW10gPSBbW1wibGl0ZXJhY3lcIiwgXCJGaW5hbmNpYWwgTGl0ZXJhY3lcIl0sIFtcInN0b2Nrc1wiLCBcIlN0b2NrIE1hcmtldFwiXSwgW1wibXV0dWFsLWZ1bmRzXCIsIFwiTXV0dWFsIEZ1bmRzXCJdLCBbXCJzaXBcIiwgXCJTSVBcIl0sIFtcImV0ZnNcIiwgXCJFVEZzICYgSW5kZXggRnVuZHNcIl0sIFtcImJhbmtpbmdcIiwgXCJCYW5raW5nICYgRGlnaXRhbCBQYXltZW50c1wiXSwgW1wiYnVkZ2V0aW5nXCIsIFwiQnVkZ2V0aW5nICYgU2F2aW5nc1wiXSwgW1wic2FmZXR5XCIsIFwiRmluYW5jaWFsIFNhZmV0eVwiXV07XG5jb25zdCBMRVZFTFMgPSBbXCJiZWdpbm5lclwiLCBcImludGVybWVkaWF0ZVwiLCBcImFkdmFuY2VkXCJdO1xuY29uc3QgU2VsID0gKHsgdmFsdWUsIG9uQ2hhbmdlLCBvcHRpb25zLCB0ZXN0aWQgfTogeyB2YWx1ZTogc3RyaW5nOyBvbkNoYW5nZTogKHY6IHN0cmluZykgPT4gdm9pZDsgb3B0aW9uczogKHN0cmluZyB8IFtzdHJpbmcsIHN0cmluZ10pW107IHRlc3RpZDogc3RyaW5nIH0pID0+IDxzZWxlY3QgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX0gZGF0YS10ZXN0aWQ9e3Rlc3RpZH0+e29wdGlvbnMubWFwKChvKSA9PiB7IGNvbnN0IFt2LCBsXSA9IEFycmF5LmlzQXJyYXkobykgPyBvIDogW28sIG9dOyByZXR1cm4gPG9wdGlvbiBrZXk9e3Z9IHZhbHVlPXt2fT57bH08L29wdGlvbj47IH0pfTwvc2VsZWN0PjtcblxuYXN5bmMgZnVuY3Rpb24gcnVuPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+LCBvaz86IHN0cmluZykgeyB0cnkgeyBjb25zdCByID0gYXdhaXQgZm4oKTsgaWYgKG9rKSB0b2FzdC5zdWNjZXNzKG9rKTsgcmV0dXJuIHI7IH0gY2F0Y2ggKGUpIHsgdG9hc3QuZXJyb3IoZXJyb3JUZXh0KGUpKTsgcmV0dXJuIG51bGw7IH0gfVxuXG5mdW5jdGlvbiBWaWRlb3NUYWIoKSB7XG4gIGNvbnN0IHFjID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeSh7IHF1ZXJ5S2V5OiBbXCJhZG1pbi12aWRlb3NcIl0sIHF1ZXJ5Rm46ICgpID0+IGFwaUdldDx7IHZpZGVvczogVmlkZW9Eb2NbXSB9PihcIi9hZG1pbi92aWRlb3NcIikgfSk7XG4gIGNvbnN0IHJlbG9hZCA9ICgpID0+IHZvaWQgcWMuaW52YWxpZGF0ZVF1ZXJpZXMoeyBxdWVyeUtleTogW1wiYWRtaW4tdmlkZW9zXCJdIH0pO1xuICBjb25zdCBibGFuayA9IHsgdXJsOiBcIlwiLCBjYXRlZ29yeTogXCJsaXRlcmFjeVwiLCBkaWZmaWN1bHR5OiBcImJlZ2lubmVyXCIsIGR1cmF0aW9uOiBcIlwiLCBwdWJsaXNoZWRfb246IFwiXCIsIGRlc2NyaXB0aW9uOiBcIlwiLCBzdGF0dXM6IFwiZHJhZnRcIiB9O1xuICBjb25zdCBbZiwgc2V0Rl0gPSB1c2VTdGF0ZShibGFuayk7XG4gIGNvbnN0IHN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyBpZiAoYXdhaXQgcnVuKCgpID0+IGFwaVBvc3QoXCIvYWRtaW4vdmlkZW9zXCIsIGYpLCBcIlZpZGVvIGFkZGVkXCIpKSB7IHNldEYoYmxhbmspOyByZWxvYWQoKTsgfSB9O1xuICBjb25zdCBwYXRjaCA9IGFzeW5jICh2OiBWaWRlb0RvYywgYm9keTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiwgbXNnPzogc3RyaW5nKSA9PiB7IGlmIChhd2FpdCBydW4oKCkgPT4gYXBpUGF0Y2goYC9hZG1pbi92aWRlb3MvJHt2LmlkfWAsIGJvZHkpLCBtc2cpKSByZWxvYWQoKTsgfTtcbiAgY29uc3QgZGVsID0gYXN5bmMgKHY6IFZpZGVvRG9jKSA9PiB7IGlmICh3aW5kb3cuY29uZmlybShgRGVsZXRlIFwiJHt2LnRpdGxlfVwiP2ApICYmIGF3YWl0IHJ1bigoKSA9PiBhcGlEZWxldGUoYC9hZG1pbi92aWRlb3MvJHt2LmlkfWApLCBcIlZpZGVvIGRlbGV0ZWRcIikpIHJlbG9hZCgpOyB9O1xuICByZXR1cm4gKDw+XG4gICAgPGZvcm0gY2xhc3NOYW1lPVwiYWRtaW4tZm9ybVwiIG9uU3VibWl0PXsoZSkgPT4gdm9pZCBzdWJtaXQoZSl9IGRhdGEtdGVzdGlkPVwiYWRtaW4tdmlkZW8tZm9ybVwiPlxuICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIndpZGVcIiB2YWx1ZT17Zi51cmx9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rih7IC4uLmYsIHVybDogZS50YXJnZXQudmFsdWUgfSl9IHBsYWNlaG9sZGVyPVwiWW91VHViZSBsaW5rXCIgcmVxdWlyZWQgZGF0YS10ZXN0aWQ9XCJhZG1pbi12aWRlby11cmxcIiAvPlxuICAgICAgPFNlbCB2YWx1ZT17Zi5jYXRlZ29yeX0gb25DaGFuZ2U9eyh2KSA9PiBzZXRGKHsgLi4uZiwgY2F0ZWdvcnk6IHYgfSl9IG9wdGlvbnM9e0NBVFN9IHRlc3RpZD1cImFkbWluLXZpZGVvLWNhdGVnb3J5XCIgLz5cbiAgICAgIDxTZWwgdmFsdWU9e2YuZGlmZmljdWx0eX0gb25DaGFuZ2U9eyh2KSA9PiBzZXRGKHsgLi4uZiwgZGlmZmljdWx0eTogdiB9KX0gb3B0aW9ucz17TEVWRUxTfSB0ZXN0aWQ9XCJhZG1pbi12aWRlby1kaWZmaWN1bHR5XCIgLz5cbiAgICAgIDxpbnB1dCB2YWx1ZT17Zi5kdXJhdGlvbn0gb25DaGFuZ2U9eyhlKSA9PiBzZXRGKHsgLi4uZiwgZHVyYXRpb246IGUudGFyZ2V0LnZhbHVlIH0pfSBwbGFjZWhvbGRlcj1cIkR1cmF0aW9uICg4OjI1KVwiIGRhdGEtdGVzdGlkPVwiYWRtaW4tdmlkZW8tZHVyYXRpb25cIiAvPlxuICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIndpZGVcIiB2YWx1ZT17Zi5kZXNjcmlwdGlvbn0gb25DaGFuZ2U9eyhlKSA9PiBzZXRGKHsgLi4uZiwgZGVzY3JpcHRpb246IGUudGFyZ2V0LnZhbHVlIH0pfSBwbGFjZWhvbGRlcj1cIlNob3J0IGRlc2NyaXB0aW9uIGZvciBsZWFybmVyc1wiIGRhdGEtdGVzdGlkPVwiYWRtaW4tdmlkZW8tZGVzY3JpcHRpb25cIiAvPlxuICAgICAgPFNlbCB2YWx1ZT17Zi5zdGF0dXN9IG9uQ2hhbmdlPXsodikgPT4gc2V0Rih7IC4uLmYsIHN0YXR1czogdiB9KX0gb3B0aW9ucz17W1tcImRyYWZ0XCIsIFwiU2F2ZSBhcyBkcmFmdFwiXSwgW1wicHVibGlzaGVkXCIsIFwiUHVibGlzaCBub3dcIl1dfSB0ZXN0aWQ9XCJhZG1pbi12aWRlby1zdGF0dXNcIiAvPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcmltYXJ5LWJ1dHRvblwiIGRhdGEtdGVzdGlkPVwiYWRtaW4tdmlkZW8tc3VibWl0XCI+PFBsdXMgc2l6ZT17MTZ9IC8+IEFkZCB2aWRlbzwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLWxpc3RcIj57KGRhdGE/LnZpZGVvcyB8fCBbXSkubWFwKCh2KSA9PiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGFkbWluLXJvdyAke3Yuc3RhdHVzfWB9IGtleT17di5pZH0gZGF0YS10ZXN0aWQ9e2BhZG1pbi12aWRlby0ke3YucmVmfWB9PlxuICAgICAgICA8aW1nIHNyYz17di50aHVtYm5haWx9IGFsdD1cIlwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tcm93LW1haW5cIj48c3Ryb25nPnt2LnRpdGxlfTwvc3Ryb25nPjxzcGFuPnt2LnNvdXJjZSA9PT0gXCJvcmlnaW5hbFwiID8gXCJGaW5TYWF0aGkgT3JpZ2luYWxcIiA6IHYuY2hhbm5lbH0gwrcge3YuZHVyYXRpb24gfHwgXCLigJRcIn0gwrcge3YucHVibGlzaGVkX29uIHx8IFwiZGF0ZSBuL2FcIn08L3NwYW4+PC9kaXY+XG4gICAgICAgIDxTZWwgdmFsdWU9e3YuY2F0ZWdvcnl9IG9uQ2hhbmdlPXsoYykgPT4gdm9pZCBwYXRjaCh2LCB7IGNhdGVnb3J5OiBjIH0pfSBvcHRpb25zPXtDQVRTfSB0ZXN0aWQ9e2BhZG1pbi12aWRlby1jYXQtJHt2LnJlZn1gfSAvPlxuICAgICAgICA8U2VsIHZhbHVlPXt2LmRpZmZpY3VsdHl9IG9uQ2hhbmdlPXsoZCkgPT4gdm9pZCBwYXRjaCh2LCB7IGRpZmZpY3VsdHk6IGQgfSl9IG9wdGlvbnM9e0xFVkVMU30gdGVzdGlkPXtgYWRtaW4tdmlkZW8tbGV2ZWwtJHt2LnJlZn1gfSAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHN0YXR1cy1waWxsICR7di5zdGF0dXN9YH0gb25DbGljaz17KCkgPT4gdm9pZCBwYXRjaCh2LCB7IHN0YXR1czogdi5zdGF0dXMgPT09IFwicHVibGlzaGVkXCIgPyBcImRyYWZ0XCIgOiBcInB1Ymxpc2hlZFwiIH0sIFwiVXBkYXRlZFwiKX0gZGF0YS10ZXN0aWQ9e2BhZG1pbi12aWRlby10b2dnbGUtJHt2LnJlZn1gfT57di5zdGF0dXMgPT09IFwicHVibGlzaGVkXCIgPyBcIlB1Ymxpc2hlZFwiIDogXCJEcmFmdCDigJQgcHVibGlzaFwifTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImljb24tYnRuIGRhbmdlclwiIG9uQ2xpY2s9eygpID0+IHZvaWQgZGVsKHYpfSBkYXRhLXRlc3RpZD17YGFkbWluLXZpZGVvLWRlbGV0ZS0ke3YucmVmfWB9PjxUcmFzaDIgc2l6ZT17MTV9IC8+PC9idXR0b24+XG4gICAgICA8L2Rpdj4pKX08L2Rpdj5cbiAgPC8+KTtcbn1cblxuZnVuY3Rpb24gUGxheWxpc3RzVGFiKCkge1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KHsgcXVlcnlLZXk6IFtcImFkbWluLXBsYXlsaXN0c1wiXSwgcXVlcnlGbjogKCkgPT4gYXBpR2V0PHsgcGxheWxpc3RzOiBQbGF5bGlzdERvY1tdIH0+KFwiL2FkbWluL3BsYXlsaXN0c1wiKSB9KTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tbGlzdFwiPnsoZGF0YT8ucGxheWxpc3RzIHx8IFtdKS5tYXAoKHApID0+IDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tcm93IHB1Ymxpc2hlZFwiIGtleT17cC5pZH0gZGF0YS10ZXN0aWQ9e2BhZG1pbi1wbGF5bGlzdC0ke3AuaWR9YH0+PGRpdiBjbGFzc05hbWU9XCJhZG1pbi1yb3ctbWFpblwiPjxzdHJvbmc+e3AudGl0bGV9PC9zdHJvbmc+PHNwYW4+e3AuaXRlbXMubGVuZ3RofSB2aWRlb3Mgwrcge3AudmlkZW9zLmxlbmd0aH0gaW4gY2F0YWxvZzwvc3Bhbj48L2Rpdj48L2Rpdj4pfTwvZGl2Pjtcbn1cblxuZnVuY3Rpb24gUmVzb3VyY2VzVGFiKCkge1xuICBjb25zdCBxYyA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoeyBxdWVyeUtleTogW1wiYWRtaW4tcmVzb3VyY2VzXCJdLCBxdWVyeUZuOiAoKSA9PiBhcGlHZXQ8eyByZXNvdXJjZXM6IFJlc291cmNlRG9jW10gfT4oXCIvYWRtaW4vcmVzb3VyY2VzXCIpIH0pO1xuICBjb25zdCByZWxvYWQgPSAoKSA9PiB2b2lkIHFjLmludmFsaWRhdGVRdWVyaWVzKHsgcXVlcnlLZXk6IFtcImFkbWluLXJlc291cmNlc1wiXSB9KTtcbiAgY29uc3QgYmxhbmsgPSB7IG5hbWU6IFwiXCIsIGtpbmQ6IFwiY3JlYXRvclwiLCBwbGF0Zm9ybTogXCJZb3VUdWJlXCIsIHVybDogXCJcIiwgdG9waWNzOiBcIlwiLCBkZXNjcmlwdGlvbjogXCJcIiwgdmVyaWZpZWQ6IGZhbHNlLCBzdGF0dXM6IFwiZHJhZnRcIiB9O1xuICBjb25zdCBbZiwgc2V0Rl0gPSB1c2VTdGF0ZShibGFuayk7XG4gIGNvbnN0IGFkZCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyBpZiAoYXdhaXQgcnVuKCgpID0+IGFwaVBvc3QoXCIvYWRtaW4vcmVzb3VyY2VzXCIsIHsgLi4uZiwgdG9waWNzOiBmLnRvcGljcy5zcGxpdChcIixcIikubWFwKChzKSA9PiBzLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pIH0pLCBcIlJlc291cmNlIGFkZGVkXCIpKSB7IHNldEYoYmxhbmspOyByZWxvYWQoKTsgfSB9O1xuICBjb25zdCBwYXRjaCA9IGFzeW5jIChyOiBSZXNvdXJjZURvYywgYm9keTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IHsgaWYgKGF3YWl0IHJ1bigoKSA9PiBhcGlQYXRjaChgL2FkbWluL3Jlc291cmNlcy8ke3IuaWR9YCwgYm9keSksIFwiVXBkYXRlZFwiKSkgcmVsb2FkKCk7IH07XG4gIHJldHVybiAoPD5cbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJhZG1pbi1mb3JtXCIgb25TdWJtaXQ9eyhlKSA9PiB2b2lkIGFkZChlKX0gZGF0YS10ZXN0aWQ9XCJhZG1pbi1yZXNvdXJjZS1mb3JtXCI+XG4gICAgICA8aW5wdXQgdmFsdWU9e2YubmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRGKHsgLi4uZiwgbmFtZTogZS50YXJnZXQudmFsdWUgfSl9IHBsYWNlaG9sZGVyPVwiQ3JlYXRvciAvIG9yZ2FuaXNhdGlvblwiIHJlcXVpcmVkIGRhdGEtdGVzdGlkPVwiYWRtaW4tcmVzb3VyY2UtbmFtZVwiIC8+XG4gICAgICA8U2VsIHZhbHVlPXtmLmtpbmR9IG9uQ2hhbmdlPXsoaykgPT4gc2V0Rih7IC4uLmYsIGtpbmQ6IGsgfSl9IG9wdGlvbnM9e1tbXCJyZWd1bGF0b3JcIiwgXCJPZmZpY2lhbCByZWd1bGF0b3JcIl0sIFtcImluc3RpdHV0aW9uXCIsIFwiRWR1Y2F0aW9uYWwgaW5zdGl0dXRpb25cIl0sIFtcInBsYXRmb3JtXCIsIFwiRWR1Y2F0aW9uYWwgcGxhdGZvcm1cIl0sIFtcImNyZWF0b3JcIiwgXCJJbmRlcGVuZGVudCBjcmVhdG9yXCJdXX0gdGVzdGlkPVwiYWRtaW4tcmVzb3VyY2Uta2luZFwiIC8+XG4gICAgICA8U2VsIHZhbHVlPXtmLnBsYXRmb3JtfSBvbkNoYW5nZT17KHApID0+IHNldEYoeyAuLi5mLCBwbGF0Zm9ybTogcCB9KX0gb3B0aW9ucz17W1wiWW91VHViZVwiLCBcIkluc3RhZ3JhbVwiLCBcIk9mZmljaWFsIHdlYnNpdGVcIl19IHRlc3RpZD1cImFkbWluLXJlc291cmNlLXBsYXRmb3JtXCIgLz5cbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3aWRlXCIgdmFsdWU9e2YudXJsfSBvbkNoYW5nZT17KGUpID0+IHNldEYoeyAuLi5mLCB1cmw6IGUudGFyZ2V0LnZhbHVlIH0pfSBwbGFjZWhvbGRlcj1cImh0dHBzOi8vIG9mZmljaWFsIGxpbmtcIiByZXF1aXJlZCBkYXRhLXRlc3RpZD1cImFkbWluLXJlc291cmNlLXVybFwiIC8+XG4gICAgICA8aW5wdXQgY2xhc3NOYW1lPVwid2lkZVwiIHZhbHVlPXtmLmRlc2NyaXB0aW9ufSBvbkNoYW5nZT17KGUpID0+IHNldEYoeyAuLi5mLCBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWUgfSl9IHBsYWNlaG9sZGVyPVwiU2hvcnQgZGVzY3JpcHRpb25cIiBkYXRhLXRlc3RpZD1cImFkbWluLXJlc291cmNlLWRlc2NyaXB0aW9uXCIgLz5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHJpbWFyeS1idXR0b25cIiBkYXRhLXRlc3RpZD1cImFkbWluLXJlc291cmNlLXN1Ym1pdFwiPjxQbHVzIHNpemU9ezE2fSAvPiBBZGQgcmVzb3VyY2U8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1saXN0XCI+eyhkYXRhPy5yZXNvdXJjZXMgfHwgW10pLm1hcCgocikgPT4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BhZG1pbi1yb3cgJHtyLnN0YXR1c31gfSBrZXk9e3IuaWR9IGRhdGEtdGVzdGlkPXtgYWRtaW4tcmVzb3VyY2UtJHtyLmlkfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkbWluLXJvdy1tYWluXCI+PHN0cm9uZz57ci5uYW1lfSDCtyB7ci5wbGF0Zm9ybX08L3N0cm9uZz48c3Bhbj57ci51cmx9IMK3IHtyLmtpbmR9PC9zcGFuPjwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YHN0YXR1cy1waWxsICR7ci52ZXJpZmllZCA/IFwicHVibGlzaGVkXCIgOiBcImRyYWZ0XCJ9YH0gb25DbGljaz17KCkgPT4gdm9pZCBwYXRjaChyLCB7IHZlcmlmaWVkOiAhci52ZXJpZmllZCB9KX0gZGF0YS10ZXN0aWQ9e2BhZG1pbi1yZXNvdXJjZS12ZXJpZnktJHtyLmlkfWB9PjxCYWRnZUNoZWNrIHNpemU9ezE0fSAvPiB7ci52ZXJpZmllZCA/IFwiVmVyaWZpZWRcIiA6IFwiVmVyaWZ5XCJ9PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgc3RhdHVzLXBpbGwgJHtyLnN0YXR1c31gfSBkaXNhYmxlZD17IXIudmVyaWZpZWR9IG9uQ2xpY2s9eygpID0+IHZvaWQgcGF0Y2gociwgeyBzdGF0dXM6IHIuc3RhdHVzID09PSBcInB1Ymxpc2hlZFwiID8gXCJkcmFmdFwiIDogXCJwdWJsaXNoZWRcIiB9KX0gZGF0YS10ZXN0aWQ9e2BhZG1pbi1yZXNvdXJjZS10b2dnbGUtJHtyLmlkfWB9PntyLnN0YXR1cyA9PT0gXCJwdWJsaXNoZWRcIiA/IFwiUHVibGlzaGVkXCIgOiBcIkRyYWZ0IOKAlCBwdWJsaXNoXCJ9PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaWNvbi1idG4gZGFuZ2VyXCIgb25DbGljaz17YXN5bmMgKCkgPT4geyBpZiAoYXdhaXQgcnVuKCgpID0+IGFwaURlbGV0ZShgL2FkbWluL3Jlc291cmNlcy8ke3IuaWR9YCksIFwiRGVsZXRlZFwiKSkgcmVsb2FkKCk7IH19IGRhdGEtdGVzdGlkPXtgYWRtaW4tcmVzb3VyY2UtZGVsZXRlLSR7ci5pZH1gfT48VHJhc2gyIHNpemU9ezE1fSAvPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+KSl9PC9kaXY+XG4gIDwvPik7XG59XG5cbmZ1bmN0aW9uIFVzZXJzVGFiKCkge1xuICBjb25zdCBxYyA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoeyBxdWVyeUtleTogW1wiYWRtaW4tdXNlcnNcIl0sIHF1ZXJ5Rm46ICgpID0+IGFwaUdldDx7IHVzZXJzOiB7IHVzZXJfaWQ6IHN0cmluZzsgZW1haWw6IHN0cmluZzsgbmFtZTogc3RyaW5nOyByb2xlOiBzdHJpbmcgfVtdOyByb2xlczogc3RyaW5nW10gfT4oXCIvdXNlcnNcIikgfSk7XG4gIGNvbnN0IHNldFJvbGUgPSBhc3luYyAoaWQ6IHN0cmluZywgcm9sZTogc3RyaW5nKSA9PiB7IGlmIChhd2FpdCBydW4oKCkgPT4gYXBpUGF0Y2goYC91c2Vycy8ke2lkfS9yb2xlYCwgeyByb2xlIH0pLCBcIlJvbGUgdXBkYXRlZFwiKSkgdm9pZCBxYy5pbnZhbGlkYXRlUXVlcmllcyh7IHF1ZXJ5S2V5OiBbXCJhZG1pbi11c2Vyc1wiXSB9KTsgfTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tbGlzdFwiPnsoZGF0YT8udXNlcnMgfHwgW10pLm1hcCgodSkgPT4gPGRpdiBjbGFzc05hbWU9XCJhZG1pbi1yb3dcIiBrZXk9e3UudXNlcl9pZH0gZGF0YS10ZXN0aWQ9e2BhZG1pbi11c2VyLSR7dS51c2VyX2lkfWB9PjxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tcm93LW1haW5cIj48c3Ryb25nPnt1Lm5hbWUgfHwgdS5lbWFpbH08L3N0cm9uZz48c3Bhbj57dS5lbWFpbH08L3NwYW4+PC9kaXY+PFNlbCB2YWx1ZT17dS5yb2xlfSBvbkNoYW5nZT17KHIpID0+IHZvaWQgc2V0Um9sZSh1LnVzZXJfaWQsIHIpfSBvcHRpb25zPXtkYXRhPy5yb2xlcyB8fCBbXX0gdGVzdGlkPXtgYWRtaW4tdXNlci1yb2xlLSR7dS51c2VyX2lkfWB9IC8+PC9kaXY+KX08L2Rpdj47XG59XG5cbmNvbnN0IFRBQlM6IFtzdHJpbmcsIHN0cmluZywgKCkgPT4gUmVhY3QuSlNYLkVsZW1lbnRdW10gPSBbW1widmlkZW9zXCIsIFwiVmlkZW9zXCIsIFZpZGVvc1RhYl0sIFtcInBsYXlsaXN0c1wiLCBcIlBsYXlsaXN0c1wiLCBQbGF5bGlzdHNUYWJdLCBbXCJyZXNvdXJjZXNcIiwgXCJFeHBlcnQgbGlua3NcIiwgUmVzb3VyY2VzVGFiXSwgW1widXNlcnNcIiwgXCJVc2Vyc1wiLCBVc2Vyc1RhYl1dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pblBhZ2UoKSB7XG4gIGNvbnN0IHsgaXNMb2FkZWQsIGlzU2lnbmVkSW4gfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgeyByb2xlIH0gPSB1c2VBY2FkZW15KCk7XG4gIGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZShcInZpZGVvc1wiKTtcbiAgaWYgKCFpc0xvYWRlZCkgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPjxkaXYgY2xhc3NOYW1lPVwiYWNhZGVteS1sb2FkaW5nXCIgLz48L2Rpdj47XG4gIGlmICghaXNTaWduZWRJbikgcmV0dXJuIDxOYXZpZ2F0ZSB0bz1cIi9zaWduLWluXCIgcmVwbGFjZSAvPjtcbiAgaWYgKHJvbGUgPT09IG51bGwpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj48ZGl2IGNsYXNzTmFtZT1cImFjYWRlbXktbG9hZGluZ1wiIC8+PC9kaXY+O1xuICBpZiAocm9sZSAhPT0gXCJhZG1pblwiKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCIgZGF0YS10ZXN0aWQ9XCJhZG1pbi1mb3JiaWRkZW5cIj48aDI+QWRtaW5zIG9ubHk8L2gyPjxwPllvdSBkb24ndCBoYXZlIGFjY2VzcyB0byBjb250ZW50IG1hbmFnZW1lbnQuPC9wPjwvZGl2PjtcbiAgY29uc3QgVGFiID0gVEFCUy5maW5kKChbaWRdKSA9PiBpZCA9PT0gdGFiKSFbMl07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbiBzZWN0aW9uXCIgZGF0YS10ZXN0aWQ9XCJhZG1pbi1wYWdlXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJraWNrZXJcIj5DT05URU5UIE1BTkFHRU1FTlQ8L3NwYW4+PGgxPlZpZGVvIEFjYWRlbXkgYWRtaW48L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwicGFnZS1pbnRyb1wiPk5ldyB2aWRlb3MgYW5kIGV4cGVydCBsaW5rcyBzdGFydCBhcyBkcmFmdHMuIFJldmlldyB0aGVtLCB0aGVuIHB1Ymxpc2ggdG8gbWFrZSB0aGVtIHZpc2libGUgdG8gbGVhcm5lcnMuPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZG1pbi10YWJzXCI+e1RBQlMubWFwKChbaWQsIGxhYmVsXSkgPT4gPGJ1dHRvbiBrZXk9e2lkfSBjbGFzc05hbWU9e3RhYiA9PT0gaWQgPyBcImFjdGl2ZVwiIDogXCJcIn0gb25DbGljaz17KCkgPT4gc2V0VGFiKGlkKX0gZGF0YS10ZXN0aWQ9e2BhZG1pbi10YWItJHtpZH1gfT57bGFiZWx9PC9idXR0b24+KX08L2Rpdj5cbiAgICAgIDxUYWIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL2FwcC9mcm9udGVuZC9zcmMvcGFnZXMvQWRtaW4udHN4In0=