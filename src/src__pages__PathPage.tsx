import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/PathPage.tsx");const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport10_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=a646c335";
import { Link, useParams } from "/node_modules/.vite/deps/react-router-dom.js?v=a646c335";
import { useQuery, useQueryClient } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=a646c335";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Circle, ExternalLink, FileText, PlayCircle, Trophy } from "/src/lib/lucide-react.tsx";
import { apiGet, apiPost } from "/src/lib/api.ts";
import { useAcademy } from "/src/lib/academy.tsx";
import { useI18n } from "/src/lib/i18n.tsx";
import { VideoCard } from "/src/components/academy/VideoCard.tsx";
import { CertificatePanel } from "/src/components/academy/Certificate.tsx";
import { Disclaimer } from "/src/pages/Academy.tsx";
var _jsxFileName = "/app/frontend/src/pages/PathPage.tsx";
import __vite__cjsImport10_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
var _s = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$();
const ITEM_ICON = {
	lesson: BookOpen,
	video: PlayCircle,
	quiz: Trophy
};
function Lesson({ lesson, done, onDone, isSignedIn }) {
	_s();
	const { t } = useI18n();
	return /* @__PURE__ */ _jsxDEV("article", {
		className: `lesson-card${done ? " done" : ""}`,
		id: `lesson-${lesson.id}`,
		"data-testid": `path-lesson-${lesson.id}`,
		"x-file-name": "PathPage",
		"x-line-number": "18",
		"x-column": "4",
		"x-component": "article",
		"x-id": "PathPage_18_4",
		"x-dynamic": "true",
		"x-source-type": "computed",
		"x-source-editable": "false",
		children: [
			/* @__PURE__ */ _jsxDEV("span", {
				className: "cat-chip",
				"x-file-name": "PathPage",
				"x-line-number": "19",
				"x-column": "6",
				"x-component": "span",
				"x-id": "PathPage_19_6",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: t(`lesson.${lesson.id}.category`)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("h4", {
				"x-file-name": "PathPage",
				"x-line-number": "20",
				"x-column": "6",
				"x-component": "h4",
				"x-id": "PathPage_20_6",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: t(`lesson.${lesson.id}.title`)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 33,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("p", {
				className: "lesson-summary",
				"x-file-name": "PathPage",
				"x-line-number": "21",
				"x-column": "6",
				"x-component": "p",
				"x-id": "PathPage_21_6",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: t(`lesson.${lesson.id}.summary`)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("p", {
				"x-file-name": "PathPage",
				"x-line-number": "22",
				"x-column": "6",
				"x-component": "p",
				"x-id": "PathPage_22_6",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: t(`lesson.${lesson.id}.body`)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 7
			}, this),
			isSignedIn && (done ? /* @__PURE__ */ _jsxDEV("span", {
				className: "lesson-done",
				"data-testid": `lesson-done-${lesson.id}`,
				"x-file-name": "PathPage",
				"x-line-number": "23",
				"x-column": "29",
				"x-component": "span",
				"x-id": "PathPage_23_29",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: [
					/* @__PURE__ */ _jsxDEV(CheckCircle2, {
						size: 16,
						"x-file-name": "PathPage",
						"x-line-number": "23",
						"x-column": "100",
						"x-component": "CheckCircle2",
						"x-id": "PathPage_23_100",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 266
					}, this),
					" ",
					t("ac.lessonDone")
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 30
			}, this) : /* @__PURE__ */ _jsxDEV("button", {
				className: "outline-button",
				onClick: onDone,
				"data-testid": `lesson-complete-${lesson.id}`,
				"x-file-name": "PathPage",
				"x-line-number": "23",
				"x-column": "157",
				"x-component": "button",
				"x-id": "PathPage_23_157",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: [
					/* @__PURE__ */ _jsxDEV(Circle, {
						size: 16,
						"x-file-name": "PathPage",
						"x-line-number": "23",
						"x-column": "254",
						"x-component": "Circle",
						"x-id": "PathPage_23_254",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 714
					}, this),
					" ",
					t("ac.markLesson")
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 36,
				columnNumber: 448
			}, this))
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 31,
		columnNumber: 10
	}, this);
}
_s(Lesson, "i9WSJarzxoSeCDSFKFFQ8fEj8w0=", false, function() {
	return [useI18n];
});
_c = Lesson;
function PathQuiz({ path, onSubmitted, isSignedIn, best }) {
	_s2();
	const { t } = useI18n();
	const [answers, setAnswers] = useState({});
	const [result, setResult] = useState(null);
	const submit = async () => {
		const r = await apiPost(`/academy/paths/${path.id}/quiz`, { answers });
		setResult(r);
		onSubmitted();
	};
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "path-quiz",
		id: "path-quiz",
		"data-testid": "path-quiz",
		"x-file-name": "PathPage",
		"x-line-number": "34",
		"x-column": "4",
		"x-component": "div",
		"x-id": "PathPage_34_4",
		"x-dynamic": "true",
		"x-source-type": "computed",
		"x-source-editable": "false",
		children: [
			path.quiz.map((q, i) => /* @__PURE__ */ _jsxDEV("div", {
				className: "pq",
				"x-file-name": "PathPage",
				"x-line-number": "36",
				"x-column": "8",
				"x-component": "div",
				"x-id": "PathPage_36_8",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("strong", {
					"x-file-name": "PathPage",
					"x-line-number": "36",
					"x-column": "36",
					"x-component": "strong",
					"x-id": "PathPage_36_36",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: [
						/* @__PURE__ */ _jsxDEV("span", {
							"data-ve-dynamic": "true",
							"x-excluded": "true",
							style: { display: "contents" },
							"x-file-name": "PathPage",
							"x-line-number": "36",
							"x-column": "36",
							"x-component": "strong",
							"x-id": "PathPage_36_36_expr0",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: i + 1
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 63,
							columnNumber: 347
						}, this),
						". ",
						/* @__PURE__ */ _jsxDEV("span", {
							"data-ve-dynamic": "true",
							"x-excluded": "true",
							style: { display: "contents" },
							"x-file-name": "PathPage",
							"x-line-number": "36",
							"x-column": "36",
							"x-component": "strong",
							"x-id": "PathPage_36_36_expr2",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t(`path.${path.id}.quiz.${i}`)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 65,
							columnNumber: 201
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 63,
					columnNumber: 172
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "pq-options",
					"x-file-name": "PathPage",
					"x-line-number": "37",
					"x-column": "10",
					"x-component": "div",
					"x-id": "PathPage_37_10",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: q.options.map((_, j) => {
						const state = result ? result.correct[i] === j ? " right" : answers[i] === j ? " wrong" : "" : "";
						return /* @__PURE__ */ _jsxDEV("button", {
							className: `${answers[i] === j ? "selected" : ""}${state}`,
							onClick: () => !result && setAnswers({
								...answers,
								[i]: j
							}),
							"data-testid": `path-quiz-${i}-option-${j}`,
							"x-file-name": "PathPage",
							"x-line-number": "37",
							"x-column": "173",
							"x-component": "button",
							"x-id": "PathPage_37_173",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t(`path.${path.id}.quiz.${i}.${j}`)
						}, j, false, {
							fileName: _jsxFileName,
							lineNumber: 70,
							columnNumber: 18
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 11
				}, this)]
			}, i, true, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 32
			}, this)),
			result ? /* @__PURE__ */ _jsxDEV("div", {
				className: `feedback ${result.passed ? "good" : "bad"}`,
				"data-testid": "path-quiz-result",
				"x-file-name": "PathPage",
				"x-line-number": "39",
				"x-column": "16",
				"x-component": "div",
				"x-id": "PathPage_39_16",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: [
					t("ac.quizResult", {
						score: result.score,
						total: result.total
					}),
					" ",
					result.passed ? t("ac.quizPassed") : t("ac.quizRetry"),
					" ",
					!result.passed && /* @__PURE__ */ _jsxDEV("button", {
						className: "text-link",
						onClick: () => {
							setResult(null);
							setAnswers({});
						},
						"data-testid": "path-quiz-retry",
						"x-file-name": "PathPage",
						"x-line-number": "39",
						"x-column": "252",
						"x-component": "button",
						"x-id": "PathPage_39_252",
						"x-dynamic": "false",
						children: "↺"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 87
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 76,
				columnNumber: 17
			}, this) : isSignedIn ? /* @__PURE__ */ _jsxDEV("button", {
				className: "primary-button",
				disabled: Object.keys(answers).length < path.quiz.length,
				onClick: () => void submit(),
				"data-testid": "path-quiz-submit",
				"x-file-name": "PathPage",
				"x-line-number": "40",
				"x-column": "23",
				"x-component": "button",
				"x-id": "PathPage_40_23",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: [
					t("ac.submitQuiz"),
					" ",
					/* @__PURE__ */ _jsxDEV(ArrowRight, { size: 16 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 82,
						columnNumber: 534
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 82,
				columnNumber: 192
			}, this) : /* @__PURE__ */ _jsxDEV("p", {
				className: "track-note",
				"x-file-name": "PathPage",
				"x-line-number": "41",
				"x-column": "10",
				"x-component": "p",
				"x-id": "PathPage_41_10",
				"x-dynamic": "false",
				children: /* @__PURE__ */ _jsxDEV(Link, {
					to: "/sign-in",
					children: t("ac.signInToTrack")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 82,
					columnNumber: 708
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 82,
				columnNumber: 570
			}, this),
			best && !result && /* @__PURE__ */ _jsxDEV("p", {
				className: "best-score",
				"data-testid": "path-quiz-best",
				"x-file-name": "PathPage",
				"x-line-number": "42",
				"x-column": "26",
				"x-component": "p",
				"x-id": "PathPage_42_26",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: t("ac.quizResult", {
					score: best.score,
					total: best.total
				})
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 83,
				columnNumber: 27
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 62,
		columnNumber: 10
	}, this);
}
_s2(PathQuiz, "dG3RVCVsVveFDYaeGlz4Py/3R78=", false, function() {
	return [useI18n];
});
_c2 = PathQuiz;
function ProgressPanel({ pr, pathId }) {
	_s3();
	const { t } = useI18n();
	const anchor = (type, id) => type === "lesson" ? `#lesson-${id}` : "#path-quiz";
	return /* @__PURE__ */ _jsxDEV("aside", {
		className: "path-progress",
		"data-testid": "path-progress",
		"x-file-name": "PathPage",
		"x-line-number": "51",
		"x-column": "4",
		"x-component": "aside",
		"x-id": "PathPage_51_4",
		"x-dynamic": "true",
		"x-source-type": "computed",
		"x-source-editable": "false",
		children: [
			/* @__PURE__ */ _jsxDEV("div", {
				className: "ring",
				style: { ["--p"]: pr.percent },
				"x-file-name": "PathPage",
				"x-line-number": "52",
				"x-column": "6",
				"x-component": "div",
				"x-id": "PathPage_52_6",
				"x-dynamic": "false",
				children: /* @__PURE__ */ _jsxDEV("span", {
					"data-testid": "path-percent",
					"x-file-name": "PathPage",
					"x-line-number": "52",
					"x-column": "70",
					"x-component": "span",
					"x-id": "PathPage_52_70",
					"x-dynamic": "true",
					"x-source-type": "prop",
					"x-source-var": "pr",
					"x-source-path": "percent",
					"x-source-editable": "false",
					children: [/* @__PURE__ */ _jsxDEV("span", {
						"data-ve-dynamic": "true",
						"x-excluded": "true",
						style: { display: "contents" },
						"x-file-name": "PathPage",
						"x-line-number": "52",
						"x-column": "70",
						"x-component": "span",
						"x-id": "PathPage_52_70_expr0",
						"x-dynamic": "true",
						"x-source-type": "prop",
						"x-source-var": "pr",
						"x-source-path": "percent",
						"x-source-editable": "false",
						children: pr.percent
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 103,
						columnNumber: 356
					}, this), "%"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 103,
					columnNumber: 120
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 101,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("p", {
				"x-file-name": "PathPage",
				"x-line-number": "53",
				"x-column": "6",
				"x-component": "p",
				"x-id": "PathPage_53_6",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: t("ac.items", {
					done: pr.done,
					total: pr.total
				})
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 106,
				columnNumber: 7
			}, this),
			pr.next ? /* @__PURE__ */ _jsxDEV("div", {
				className: "next-up",
				"data-testid": "path-next",
				"x-file-name": "PathPage",
				"x-line-number": "54",
				"x-column": "17",
				"x-component": "div",
				"x-id": "PathPage_54_17",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: [/* @__PURE__ */ _jsxDEV("small", {
					"x-file-name": "PathPage",
					"x-line-number": "54",
					"x-column": "66",
					"x-component": "small",
					"x-id": "PathPage_54_66",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("ac.nextUp")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 110,
					columnNumber: 231
				}, this), pr.next.type === "video" ? /* @__PURE__ */ _jsxDEV(Link, {
					to: `/academy/video/${pr.next.id}`,
					children: [
						pr.next.title,
						" ",
						/* @__PURE__ */ _jsxDEV(ArrowRight, { size: 14 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 110,
							columnNumber: 514
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 110,
					columnNumber: 456
				}, this) : /* @__PURE__ */ _jsxDEV("a", {
					href: anchor(pr.next.type, pr.next.id),
					"x-file-name": "PathPage",
					"x-line-number": "54",
					"x-column": "217",
					"x-component": "a",
					"x-id": "PathPage_54_217",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: [
						pr.next.type === "lesson" ? t(`lesson.${pr.next.id}.title`) : t("ac.quiz"),
						" ",
						/* @__PURE__ */ _jsxDEV(ArrowRight, { size: 14 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 110,
							columnNumber: 832
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 110,
					columnNumber: 548
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 110,
				columnNumber: 18
			}, this) : /* @__PURE__ */ _jsxDEV("div", {
				className: "feedback good",
				"data-testid": "path-complete",
				"x-file-name": "PathPage",
				"x-line-number": "54",
				"x-column": "375",
				"x-component": "div",
				"x-id": "PathPage_54_375",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: t("ac.allDone")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 110,
				columnNumber: 870
			}, this),
			/* @__PURE__ */ _jsxDEV(CertificatePanel, {
				pathId,
				percent: pr.percent,
				"x-file-name": "PathPage",
				"x-line-number": "55",
				"x-column": "6",
				"x-component": "CertificatePanel",
				"x-id": "PathPage_55_6",
				"x-dynamic": "true"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 111,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("ul", {
				"x-file-name": "PathPage",
				"x-line-number": "56",
				"x-column": "6",
				"x-component": "ul",
				"x-id": "PathPage_56_6",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: pr.items.map((i) => {
					const Icon = ITEM_ICON[i.type];
					return /* @__PURE__ */ _jsxDEV("li", {
						className: i.done ? "done" : "",
						"x-file-name": "PathPage",
						"x-line-number": "56",
						"x-column": "72",
						"x-component": "li",
						"x-id": "PathPage_56_72",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: [i.done ? /* @__PURE__ */ _jsxDEV(CheckCircle2, {
							size: 15,
							"x-file-name": "PathPage",
							"x-line-number": "56",
							"x-column": "145",
							"x-component": "CheckCircle2",
							"x-id": "PathPage_56_145",
							"x-dynamic": "true",
							"x-source-type": "external",
							"x-source-var": "pr",
							"x-source-editable": "false",
							"x-array-var": "pr",
							"x-array-item-param": "i"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 114,
							columnNumber: 252
						}, this) : /* @__PURE__ */ _jsxDEV(Icon, {
							size: 15,
							"x-file-name": "PathPage",
							"x-line-number": "56",
							"x-column": "174",
							"x-component": "Icon",
							"x-id": "PathPage_56_174",
							"x-dynamic": "true",
							"x-source-type": "external",
							"x-source-var": "pr",
							"x-source-editable": "false",
							"x-array-var": "pr",
							"x-array-item-param": "i"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 114,
							columnNumber: 514
						}, this), /* @__PURE__ */ _jsxDEV("span", {
							"x-file-name": "PathPage",
							"x-line-number": "56",
							"x-column": "193",
							"x-component": "span",
							"x-id": "PathPage_56_193",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: i.type === "lesson" ? t(`lesson.${i.id}.title`) : i.type === "quiz" ? t("ac.quiz") : i.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 114,
							columnNumber: 758
						}, this)]
					}, `${i.type}-${i.id}`, true, {
						fileName: _jsxFileName,
						lineNumber: 114,
						columnNumber: 16
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 112,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 100,
		columnNumber: 10
	}, this);
}
_s3(ProgressPanel, "i9WSJarzxoSeCDSFKFFQ8fEj8w0=", false, function() {
	return [useI18n];
});
_c3 = ProgressPanel;
export default function PathPage() {
	_s4();
	const { id } = useParams();
	const { t } = useI18n();
	const qc = useQueryClient();
	const { isSignedIn, refresh } = useAcademy();
	const { data: path } = useQuery({
		queryKey: ["path", id],
		queryFn: () => apiGet(`/academy/paths/${id}`)
	});
	const { data: pr } = useQuery({
		queryKey: ["path-progress", id],
		queryFn: () => apiGet(`/academy/me/paths/${id}`),
		enabled: isSignedIn
	});
	const reload = () => {
		void qc.invalidateQueries({ queryKey: ["path-progress", id] });
		void refresh();
	};
	const doneLesson = (lid) => !!pr?.items.some((i) => i.type === "lesson" && i.id === lid && i.done);
	const completeLesson = async (lid) => {
		await apiPost(`/me/progress/${lid}`);
		reload();
	};
	if (!path) return /* @__PURE__ */ _jsxDEV("div", {
		className: "section",
		"x-file-name": "PathPage",
		"x-line-number": "71",
		"x-column": "20",
		"x-component": "div",
		"x-id": "PathPage_71_20",
		"x-dynamic": "false",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "academy-loading",
			"x-file-name": "PathPage",
			"x-line-number": "71",
			"x-column": "45",
			"x-component": "div",
			"x-id": "PathPage_71_45",
			"x-dynamic": "false"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 154,
			columnNumber: 160
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 154,
		columnNumber: 21
	}, this);
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "path-page section",
		"data-testid": "path-page",
		"x-file-name": "PathPage",
		"x-line-number": "73",
		"x-column": "4",
		"x-component": "div",
		"x-id": "PathPage_73_4",
		"x-dynamic": "false",
		children: [
			/* @__PURE__ */ _jsxDEV(Link, {
				className: "back-link",
				to: "/academy",
				"data-testid": "path-back-link",
				children: [
					/* @__PURE__ */ _jsxDEV(ArrowLeft, { size: 16 }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 156,
						columnNumber: 78
					}, this),
					" ",
					t("ac.back")
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 156,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("header", {
				className: `path-hero ${path.color}`,
				"x-file-name": "PathPage",
				"x-line-number": "75",
				"x-column": "6",
				"x-component": "header",
				"x-id": "PathPage_75_6",
				"x-dynamic": "false",
				children: [
					/* @__PURE__ */ _jsxDEV("span", {
						className: "kicker",
						"x-file-name": "PathPage",
						"x-line-number": "75",
						"x-column": "52",
						"x-component": "span",
						"x-id": "PathPage_75_52",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t("ac.paths")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 157,
						columnNumber: 168
					}, this),
					/* @__PURE__ */ _jsxDEV("h1", {
						"data-testid": "path-title",
						"x-file-name": "PathPage",
						"x-line-number": "75",
						"x-column": "99",
						"x-component": "h1",
						"x-id": "PathPage_75_99",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t(`path.${path.id}.title`)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 157,
						columnNumber: 380
					}, this),
					/* @__PURE__ */ _jsxDEV("p", {
						"x-file-name": "PathPage",
						"x-line-number": "75",
						"x-column": "161",
						"x-component": "p",
						"x-id": "PathPage_75_161",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t(`path.${path.id}.subtitle`)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 157,
						columnNumber: 605
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 157,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "path-layout",
				"x-file-name": "PathPage",
				"x-line-number": "76",
				"x-column": "6",
				"x-component": "div",
				"x-id": "PathPage_76_6",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "path-main",
					"x-file-name": "PathPage",
					"x-line-number": "77",
					"x-column": "8",
					"x-component": "div",
					"x-id": "PathPage_77_8",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: [
						/* @__PURE__ */ _jsxDEV("h3", {
							"x-file-name": "PathPage",
							"x-line-number": "78",
							"x-column": "10",
							"x-component": "h3",
							"x-id": "PathPage_78_10",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("ac.lessons")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 160,
							columnNumber: 11
						}, this),
						path.lessons.map((l) => /* @__PURE__ */ _jsxDEV(Lesson, {
							lesson: l,
							done: doneLesson(l.id),
							onDone: () => void completeLesson(l.id),
							isSignedIn,
							"x-file-name": "PathPage",
							"x-line-number": "79",
							"x-column": "35",
							"x-component": "Lesson",
							"x-id": "PathPage_79_35",
							"x-dynamic": "true",
							"x-source-type": "external",
							"x-source-var": "path",
							"x-source-editable": "false",
							"x-array-var": "path",
							"x-array-item-param": "l"
						}, l.id, false, {
							fileName: _jsxFileName,
							lineNumber: 161,
							columnNumber: 34
						}, this)),
						/* @__PURE__ */ _jsxDEV("h3", {
							"x-file-name": "PathPage",
							"x-line-number": "80",
							"x-column": "10",
							"x-component": "h3",
							"x-id": "PathPage_80_10",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("ac.videos")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 162,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "video-grid",
							"x-file-name": "PathPage",
							"x-line-number": "81",
							"x-column": "10",
							"x-component": "div",
							"x-id": "PathPage_81_10",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: path.videos.map((v) => /* @__PURE__ */ _jsxDEV(VideoCard, {
								v,
								"x-file-name": "PathPage",
								"x-line-number": "81",
								"x-column": "62",
								"x-component": "VideoCard",
								"x-id": "PathPage_81_62",
								"x-dynamic": "true",
								"x-source-type": "external",
								"x-source-var": "path",
								"x-source-editable": "false",
								"x-array-var": "path",
								"x-array-item-param": "v"
							}, v.id, false, {
								fileName: _jsxFileName,
								lineNumber: 163,
								columnNumber: 225
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 163,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("h3", {
							"x-file-name": "PathPage",
							"x-line-number": "82",
							"x-column": "10",
							"x-component": "h3",
							"x-id": "PathPage_82_10",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("ac.reading")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 164,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "reading-list",
							"x-file-name": "PathPage",
							"x-line-number": "83",
							"x-column": "10",
							"x-component": "div",
							"x-id": "PathPage_83_10",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: path.reading.map((r, i) => /* @__PURE__ */ _jsxDEV("a", {
								href: r.url,
								target: "_blank",
								rel: "noopener noreferrer",
								"data-testid": `path-reading-${i}`,
								"x-file-name": "PathPage",
								"x-line-number": "83",
								"x-column": "68",
								"x-component": "a",
								"x-id": "PathPage_83_68",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: [
									/* @__PURE__ */ _jsxDEV(FileText, {
										size: 16,
										"x-file-name": "PathPage",
										"x-line-number": "83",
										"x-column": "172",
										"x-component": "FileText",
										"x-id": "PathPage_83_172",
										"x-dynamic": "true",
										"x-source-type": "external",
										"x-source-var": "path",
										"x-source-editable": "false",
										"x-array-var": "path",
										"x-array-item-param": "r"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 165,
										columnNumber: 499
									}, this),
									" ",
									t(`path.${path.id}.reading.${i}`),
									" ",
									/* @__PURE__ */ _jsxDEV(ExternalLink, {
										size: 13,
										"x-file-name": "PathPage",
										"x-line-number": "83",
										"x-column": "231",
										"x-component": "ExternalLink",
										"x-id": "PathPage_83_231",
										"x-dynamic": "true",
										"x-source-type": "external",
										"x-source-var": "path",
										"x-source-editable": "false",
										"x-array-var": "path",
										"x-array-item-param": "r"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 165,
										columnNumber: 791
									}, this)
								]
							}, r.url, true, {
								fileName: _jsxFileName,
								lineNumber: 165,
								columnNumber: 233
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 165,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("h3", {
							"x-file-name": "PathPage",
							"x-line-number": "84",
							"x-column": "10",
							"x-component": "h3",
							"x-id": "PathPage_84_10",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("ac.quiz")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 166,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV(PathQuiz, {
							path,
							isSignedIn,
							best: pr?.quiz_score,
							onSubmitted: reload,
							"x-file-name": "PathPage",
							"x-line-number": "85",
							"x-column": "10",
							"x-component": "PathQuiz",
							"x-id": "PathPage_85_10",
							"x-dynamic": "true"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 167,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV(Disclaimer, {
							"x-file-name": "PathPage",
							"x-line-number": "86",
							"x-column": "10",
							"x-component": "Disclaimer",
							"x-id": "PathPage_86_10",
							"x-dynamic": "true"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 168,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 159,
					columnNumber: 9
				}, this), pr ? /* @__PURE__ */ _jsxDEV(ProgressPanel, {
					pr,
					pathId: path.id,
					"x-file-name": "PathPage",
					"x-line-number": "88",
					"x-column": "14",
					"x-component": "ProgressPanel",
					"x-id": "PathPage_88_14",
					"x-dynamic": "true"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 170,
					columnNumber: 15
				}, this) : /* @__PURE__ */ _jsxDEV("aside", {
					className: "path-progress",
					"x-file-name": "PathPage",
					"x-line-number": "88",
					"x-column": "59",
					"x-component": "aside",
					"x-id": "PathPage_88_59",
					"x-dynamic": "false",
					children: /* @__PURE__ */ _jsxDEV("p", {
						className: "track-note",
						"x-file-name": "PathPage",
						"x-line-number": "88",
						"x-column": "92",
						"x-component": "p",
						"x-id": "PathPage_88_92",
						"x-dynamic": "false",
						children: /* @__PURE__ */ _jsxDEV(Link, {
							to: "/sign-in",
							children: t("ac.signInToTrack")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 170,
							columnNumber: 470
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 170,
						columnNumber: 332
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 170,
					columnNumber: 183
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 158,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 155,
		columnNumber: 10
	}, this);
}
_s4(PathPage, "N2CL3gcw72JqjnyJBF+3IijDUgo=", false, function() {
	return [
		useParams,
		useI18n,
		useQueryClient,
		useAcademy,
		useQuery,
		useQuery
	];
});
_c4 = PathPage;
var _c, _c2, _c3, _c4;
$RefreshReg$(_c, "Lesson");
$RefreshReg$(_c2, "PathQuiz");
$RefreshReg$(_c3, "ProgressPanel");
$RefreshReg$(_c4, "PathPage");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/PathPage.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/pages/PathPage.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/pages/PathPage.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/pages/PathPage.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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LCJ1c2VRdWVyeUNsaWVudCIsIkFycm93TGVmdCIsIkFycm93UmlnaHQiLCJCb29rT3BlbiIsIkNoZWNrQ2lyY2xlMiIsIkNpcmNsZSIsIkV4dGVybmFsTGluayIsIkZpbGVUZXh0IiwiUGxheUNpcmNsZSIsIlRyb3BoeSIsImFwaUdldCIsImFwaVBvc3QiLCJ1c2VBY2FkZW15IiwidXNlSTE4biIsIlZpZGVvQ2FyZCIsIkNlcnRpZmljYXRlUGFuZWwiLCJEaXNjbGFpbWVyIiwiSVRFTV9JQ09OIiwibGVzc29uIiwidmlkZW8iLCJxdWl6IiwiTGVzc29uIiwiZG9uZSIsIm9uRG9uZSIsImlzU2lnbmVkSW4iLCJ0IiwiaWQiLCJQYXRoUXVpeiIsInBhdGgiLCJvblN1Ym1pdHRlZCIsImJlc3QiLCJhbnN3ZXJzIiwic2V0QW5zd2VycyIsInJlc3VsdCIsInNldFJlc3VsdCIsInN1Ym1pdCIsInIiLCJtYXAiLCJxIiwiaSIsImRpc3BsYXkiLCJvcHRpb25zIiwiXyIsImoiLCJzdGF0ZSIsImNvcnJlY3QiLCJwYXNzZWQiLCJzY29yZSIsInRvdGFsIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIlByb2dyZXNzUGFuZWwiLCJwciIsInBhdGhJZCIsImFuY2hvciIsInR5cGUiLCJwZXJjZW50IiwibmV4dCIsInRpdGxlIiwiaXRlbXMiLCJJY29uIiwiUGF0aFBhZ2UiLCJxYyIsInJlZnJlc2giLCJkYXRhIiwicXVlcnlLZXkiLCJxdWVyeUZuIiwiZW5hYmxlZCIsInJlbG9hZCIsImludmFsaWRhdGVRdWVyaWVzIiwiZG9uZUxlc3NvbiIsImxpZCIsInNvbWUiLCJjb21wbGV0ZUxlc3NvbiIsImNvbG9yIiwibGVzc29ucyIsImwiLCJ2aWRlb3MiLCJ2IiwicmVhZGluZyIsInVybCIsInF1aXpfc2NvcmUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiUGF0aFBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VQYXJhbXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgQXJyb3dMZWZ0LCBBcnJvd1JpZ2h0LCBCb29rT3BlbiwgQ2hlY2tDaXJjbGUyLCBDaXJjbGUsIEV4dGVybmFsTGluaywgRmlsZVRleHQsIFBsYXlDaXJjbGUsIFRyb3BoeSB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IGFwaUdldCwgYXBpUG9zdCB9IGZyb20gXCJAL2xpYi9hcGlcIjtcbmltcG9ydCB7IHVzZUFjYWRlbXkgfSBmcm9tIFwiQC9saWIvYWNhZGVteVwiO1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gXCJAL2xpYi9pMThuXCI7XG5pbXBvcnQgdHlwZSB7IExlc3NvbkRvYywgUGF0aERldGFpbCwgUGF0aFByb2dyZXNzLCBQYXRoUXVpelJlc3VsdCB9IGZyb20gXCJAL2xpYi90eXBlc1wiO1xuaW1wb3J0IHsgVmlkZW9DYXJkIH0gZnJvbSBcIkAvY29tcG9uZW50cy9hY2FkZW15L1ZpZGVvQ2FyZFwiO1xuaW1wb3J0IHsgQ2VydGlmaWNhdGVQYW5lbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvYWNhZGVteS9DZXJ0aWZpY2F0ZVwiO1xuaW1wb3J0IHsgRGlzY2xhaW1lciB9IGZyb20gXCJAL3BhZ2VzL0FjYWRlbXlcIjtcblxuY29uc3QgSVRFTV9JQ09OOiBSZWNvcmQ8c3RyaW5nLCB0eXBlb2YgQm9va09wZW4+ID0geyBsZXNzb246IEJvb2tPcGVuLCB2aWRlbzogUGxheUNpcmNsZSwgcXVpejogVHJvcGh5IH07XG5cbmZ1bmN0aW9uIExlc3Nvbih7IGxlc3NvbiwgZG9uZSwgb25Eb25lLCBpc1NpZ25lZEluIH06IHsgbGVzc29uOiBMZXNzb25Eb2M7IGRvbmU6IGJvb2xlYW47IG9uRG9uZTogKCkgPT4gdm9pZDsgaXNTaWduZWRJbjogYm9vbGVhbiB9KSB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17YGxlc3Nvbi1jYXJkJHtkb25lID8gXCIgZG9uZVwiIDogXCJcIn1gfSBpZD17YGxlc3Nvbi0ke2xlc3Nvbi5pZH1gfSBkYXRhLXRlc3RpZD17YHBhdGgtbGVzc29uLSR7bGVzc29uLmlkfWB9PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2F0LWNoaXBcIj57dChgbGVzc29uLiR7bGVzc29uLmlkfS5jYXRlZ29yeWApfTwvc3Bhbj5cbiAgICAgIDxoND57dChgbGVzc29uLiR7bGVzc29uLmlkfS50aXRsZWApfTwvaDQ+XG4gICAgICA8cCBjbGFzc05hbWU9XCJsZXNzb24tc3VtbWFyeVwiPnt0KGBsZXNzb24uJHtsZXNzb24uaWR9LnN1bW1hcnlgKX08L3A+XG4gICAgICA8cD57dChgbGVzc29uLiR7bGVzc29uLmlkfS5ib2R5YCl9PC9wPlxuICAgICAge2lzU2lnbmVkSW4gJiYgKGRvbmUgPyA8c3BhbiBjbGFzc05hbWU9XCJsZXNzb24tZG9uZVwiIGRhdGEtdGVzdGlkPXtgbGVzc29uLWRvbmUtJHtsZXNzb24uaWR9YH0+PENoZWNrQ2lyY2xlMiBzaXplPXsxNn0gLz4ge3QoXCJhYy5sZXNzb25Eb25lXCIpfTwvc3Bhbj4gOiA8YnV0dG9uIGNsYXNzTmFtZT1cIm91dGxpbmUtYnV0dG9uXCIgb25DbGljaz17b25Eb25lfSBkYXRhLXRlc3RpZD17YGxlc3Nvbi1jb21wbGV0ZS0ke2xlc3Nvbi5pZH1gfT48Q2lyY2xlIHNpemU9ezE2fSAvPiB7dChcImFjLm1hcmtMZXNzb25cIil9PC9idXR0b24+KX1cbiAgICA8L2FydGljbGU+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFBhdGhRdWl6KHsgcGF0aCwgb25TdWJtaXR0ZWQsIGlzU2lnbmVkSW4sIGJlc3QgfTogeyBwYXRoOiBQYXRoRGV0YWlsOyBvblN1Ym1pdHRlZDogKCkgPT4gdm9pZDsgaXNTaWduZWRJbjogYm9vbGVhbjsgYmVzdD86IFBhdGhQcm9ncmVzc1tcInF1aXpfc2NvcmVcIl0gfSkge1xuICBjb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcbiAgY29uc3QgW2Fuc3dlcnMsIHNldEFuc3dlcnNdID0gdXNlU3RhdGU8UmVjb3JkPG51bWJlciwgbnVtYmVyPj4oe30pO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGU8UGF0aFF1aXpSZXN1bHQgfCBudWxsPihudWxsKTtcbiAgY29uc3Qgc3VibWl0ID0gYXN5bmMgKCkgPT4geyBjb25zdCByID0gYXdhaXQgYXBpUG9zdDxQYXRoUXVpelJlc3VsdD4oYC9hY2FkZW15L3BhdGhzLyR7cGF0aC5pZH0vcXVpemAsIHsgYW5zd2VycyB9KTsgc2V0UmVzdWx0KHIpOyBvblN1Ym1pdHRlZCgpOyB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGF0aC1xdWl6XCIgaWQ9XCJwYXRoLXF1aXpcIiBkYXRhLXRlc3RpZD1cInBhdGgtcXVpelwiPlxuICAgICAge3BhdGgucXVpei5tYXAoKHEsIGkpID0+IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcVwiIGtleT17aX0+PHN0cm9uZz57aSArIDF9LiB7dChgcGF0aC4ke3BhdGguaWR9LnF1aXouJHtpfWApfTwvc3Ryb25nPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHEtb3B0aW9uc1wiPntxLm9wdGlvbnMubWFwKChfLCBqKSA9PiB7IGNvbnN0IHN0YXRlID0gcmVzdWx0ID8gKHJlc3VsdC5jb3JyZWN0W2ldID09PSBqID8gXCIgcmlnaHRcIiA6IGFuc3dlcnNbaV0gPT09IGogPyBcIiB3cm9uZ1wiIDogXCJcIikgOiBcIlwiOyByZXR1cm4gPGJ1dHRvbiBrZXk9e2p9IGNsYXNzTmFtZT17YCR7YW5zd2Vyc1tpXSA9PT0gaiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJ9JHtzdGF0ZX1gfSBvbkNsaWNrPXsoKSA9PiAhcmVzdWx0ICYmIHNldEFuc3dlcnMoeyAuLi5hbnN3ZXJzLCBbaV06IGogfSl9IGRhdGEtdGVzdGlkPXtgcGF0aC1xdWl6LSR7aX0tb3B0aW9uLSR7an1gfT57dChgcGF0aC4ke3BhdGguaWR9LnF1aXouJHtpfS4ke2p9YCl9PC9idXR0b24+OyB9KX08L2Rpdj5cbiAgICAgICAgPC9kaXY+KSl9XG4gICAgICB7cmVzdWx0ID8gPGRpdiBjbGFzc05hbWU9e2BmZWVkYmFjayAke3Jlc3VsdC5wYXNzZWQgPyBcImdvb2RcIiA6IFwiYmFkXCJ9YH0gZGF0YS10ZXN0aWQ9XCJwYXRoLXF1aXotcmVzdWx0XCI+e3QoXCJhYy5xdWl6UmVzdWx0XCIsIHsgc2NvcmU6IHJlc3VsdC5zY29yZSwgdG90YWw6IHJlc3VsdC50b3RhbCB9KX0ge3Jlc3VsdC5wYXNzZWQgPyB0KFwiYWMucXVpelBhc3NlZFwiKSA6IHQoXCJhYy5xdWl6UmV0cnlcIil9IHshcmVzdWx0LnBhc3NlZCAmJiA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtbGlua1wiIG9uQ2xpY2s9eygpID0+IHsgc2V0UmVzdWx0KG51bGwpOyBzZXRBbnN3ZXJzKHt9KTsgfX0gZGF0YS10ZXN0aWQ9XCJwYXRoLXF1aXotcmV0cnlcIj7ihro8L2J1dHRvbj59PC9kaXY+XG4gICAgICAgIDogaXNTaWduZWRJbiA/IDxidXR0b24gY2xhc3NOYW1lPVwicHJpbWFyeS1idXR0b25cIiBkaXNhYmxlZD17T2JqZWN0LmtleXMoYW5zd2VycykubGVuZ3RoIDwgcGF0aC5xdWl6Lmxlbmd0aH0gb25DbGljaz17KCkgPT4gdm9pZCBzdWJtaXQoKX0gZGF0YS10ZXN0aWQ9XCJwYXRoLXF1aXotc3VibWl0XCI+e3QoXCJhYy5zdWJtaXRRdWl6XCIpfSA8QXJyb3dSaWdodCBzaXplPXsxNn0gLz48L2J1dHRvbj5cbiAgICAgICAgOiA8cCBjbGFzc05hbWU9XCJ0cmFjay1ub3RlXCI+PExpbmsgdG89XCIvc2lnbi1pblwiPnt0KFwiYWMuc2lnbkluVG9UcmFja1wiKX08L0xpbms+PC9wPn1cbiAgICAgIHtiZXN0ICYmICFyZXN1bHQgJiYgPHAgY2xhc3NOYW1lPVwiYmVzdC1zY29yZVwiIGRhdGEtdGVzdGlkPVwicGF0aC1xdWl6LWJlc3RcIj57dChcImFjLnF1aXpSZXN1bHRcIiwgeyBzY29yZTogYmVzdC5zY29yZSwgdG90YWw6IGJlc3QudG90YWwgfSl9PC9wPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUHJvZ3Jlc3NQYW5lbCh7IHByLCBwYXRoSWQgfTogeyBwcjogUGF0aFByb2dyZXNzOyBwYXRoSWQ6IHN0cmluZyB9KSB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlSTE4bigpO1xuICBjb25zdCBhbmNob3IgPSAodHlwZTogc3RyaW5nLCBpZD86IHN0cmluZykgPT4gKHR5cGUgPT09IFwibGVzc29uXCIgPyBgI2xlc3Nvbi0ke2lkfWAgOiBcIiNwYXRoLXF1aXpcIik7XG4gIHJldHVybiAoXG4gICAgPGFzaWRlIGNsYXNzTmFtZT1cInBhdGgtcHJvZ3Jlc3NcIiBkYXRhLXRlc3RpZD1cInBhdGgtcHJvZ3Jlc3NcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmluZ1wiIHN0eWxlPXt7IFtcIi0tcFwiIGFzIHN0cmluZ106IHByLnBlcmNlbnQgfX0+PHNwYW4gZGF0YS10ZXN0aWQ9XCJwYXRoLXBlcmNlbnRcIj57cHIucGVyY2VudH0lPC9zcGFuPjwvZGl2PlxuICAgICAgPHA+e3QoXCJhYy5pdGVtc1wiLCB7IGRvbmU6IHByLmRvbmUsIHRvdGFsOiBwci50b3RhbCB9KX08L3A+XG4gICAgICB7cHIubmV4dCA/IDxkaXYgY2xhc3NOYW1lPVwibmV4dC11cFwiIGRhdGEtdGVzdGlkPVwicGF0aC1uZXh0XCI+PHNtYWxsPnt0KFwiYWMubmV4dFVwXCIpfTwvc21hbGw+e3ByLm5leHQudHlwZSA9PT0gXCJ2aWRlb1wiID8gPExpbmsgdG89e2AvYWNhZGVteS92aWRlby8ke3ByLm5leHQuaWR9YH0+e3ByLm5leHQudGl0bGV9IDxBcnJvd1JpZ2h0IHNpemU9ezE0fSAvPjwvTGluaz4gOiA8YSBocmVmPXthbmNob3IocHIubmV4dC50eXBlLCBwci5uZXh0LmlkKX0+e3ByLm5leHQudHlwZSA9PT0gXCJsZXNzb25cIiA/IHQoYGxlc3Nvbi4ke3ByLm5leHQuaWR9LnRpdGxlYCkgOiB0KFwiYWMucXVpelwiKX0gPEFycm93UmlnaHQgc2l6ZT17MTR9IC8+PC9hPn08L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT1cImZlZWRiYWNrIGdvb2RcIiBkYXRhLXRlc3RpZD1cInBhdGgtY29tcGxldGVcIj57dChcImFjLmFsbERvbmVcIil9PC9kaXY+fVxuICAgICAgPENlcnRpZmljYXRlUGFuZWwgcGF0aElkPXtwYXRoSWR9IHBlcmNlbnQ9e3ByLnBlcmNlbnR9IC8+XG4gICAgICA8dWw+e3ByLml0ZW1zLm1hcCgoaSkgPT4geyBjb25zdCBJY29uID0gSVRFTV9JQ09OW2kudHlwZV07IHJldHVybiA8bGkga2V5PXtgJHtpLnR5cGV9LSR7aS5pZH1gfSBjbGFzc05hbWU9e2kuZG9uZSA/IFwiZG9uZVwiIDogXCJcIn0+e2kuZG9uZSA/IDxDaGVja0NpcmNsZTIgc2l6ZT17MTV9IC8+IDogPEljb24gc2l6ZT17MTV9IC8+fTxzcGFuPntpLnR5cGUgPT09IFwibGVzc29uXCIgPyB0KGBsZXNzb24uJHtpLmlkfS50aXRsZWApIDogaS50eXBlID09PSBcInF1aXpcIiA/IHQoXCJhYy5xdWl6XCIpIDogaS50aXRsZX08L3NwYW4+PC9saT47IH0pfTwvdWw+XG4gICAgPC9hc2lkZT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGF0aFBhZ2UoKSB7XG4gIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xuICBjb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcbiAgY29uc3QgcWMgPSB1c2VRdWVyeUNsaWVudCgpO1xuICBjb25zdCB7IGlzU2lnbmVkSW4sIHJlZnJlc2ggfSA9IHVzZUFjYWRlbXkoKTtcbiAgY29uc3QgeyBkYXRhOiBwYXRoIH0gPSB1c2VRdWVyeSh7IHF1ZXJ5S2V5OiBbXCJwYXRoXCIsIGlkXSwgcXVlcnlGbjogKCkgPT4gYXBpR2V0PFBhdGhEZXRhaWw+KGAvYWNhZGVteS9wYXRocy8ke2lkfWApIH0pO1xuICBjb25zdCB7IGRhdGE6IHByIH0gPSB1c2VRdWVyeSh7IHF1ZXJ5S2V5OiBbXCJwYXRoLXByb2dyZXNzXCIsIGlkXSwgcXVlcnlGbjogKCkgPT4gYXBpR2V0PFBhdGhQcm9ncmVzcz4oYC9hY2FkZW15L21lL3BhdGhzLyR7aWR9YCksIGVuYWJsZWQ6IGlzU2lnbmVkSW4gfSk7XG4gIGNvbnN0IHJlbG9hZCA9ICgpID0+IHsgdm9pZCBxYy5pbnZhbGlkYXRlUXVlcmllcyh7IHF1ZXJ5S2V5OiBbXCJwYXRoLXByb2dyZXNzXCIsIGlkXSB9KTsgdm9pZCByZWZyZXNoKCk7IH07XG4gIGNvbnN0IGRvbmVMZXNzb24gPSAobGlkOiBzdHJpbmcpID0+ICEhcHI/Lml0ZW1zLnNvbWUoKGkpID0+IGkudHlwZSA9PT0gXCJsZXNzb25cIiAmJiBpLmlkID09PSBsaWQgJiYgaS5kb25lKTtcbiAgY29uc3QgY29tcGxldGVMZXNzb24gPSBhc3luYyAobGlkOiBzdHJpbmcpID0+IHsgYXdhaXQgYXBpUG9zdChgL21lL3Byb2dyZXNzLyR7bGlkfWApOyByZWxvYWQoKTsgfTtcbiAgaWYgKCFwYXRoKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+PGRpdiBjbGFzc05hbWU9XCJhY2FkZW15LWxvYWRpbmdcIiAvPjwvZGl2PjtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhdGgtcGFnZSBzZWN0aW9uXCIgZGF0YS10ZXN0aWQ9XCJwYXRoLXBhZ2VcIj5cbiAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJhY2stbGlua1wiIHRvPVwiL2FjYWRlbXlcIiBkYXRhLXRlc3RpZD1cInBhdGgtYmFjay1saW5rXCI+PEFycm93TGVmdCBzaXplPXsxNn0gLz4ge3QoXCJhYy5iYWNrXCIpfTwvTGluaz5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtgcGF0aC1oZXJvICR7cGF0aC5jb2xvcn1gfT48c3BhbiBjbGFzc05hbWU9XCJraWNrZXJcIj57dChcImFjLnBhdGhzXCIpfTwvc3Bhbj48aDEgZGF0YS10ZXN0aWQ9XCJwYXRoLXRpdGxlXCI+e3QoYHBhdGguJHtwYXRoLmlkfS50aXRsZWApfTwvaDE+PHA+e3QoYHBhdGguJHtwYXRoLmlkfS5zdWJ0aXRsZWApfTwvcD48L2hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF0aC1sYXlvdXRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXRoLW1haW5cIj5cbiAgICAgICAgICA8aDM+e3QoXCJhYy5sZXNzb25zXCIpfTwvaDM+XG4gICAgICAgICAge3BhdGgubGVzc29ucy5tYXAoKGwpID0+IDxMZXNzb24ga2V5PXtsLmlkfSBsZXNzb249e2x9IGRvbmU9e2RvbmVMZXNzb24obC5pZCl9IG9uRG9uZT17KCkgPT4gdm9pZCBjb21wbGV0ZUxlc3NvbihsLmlkKX0gaXNTaWduZWRJbj17aXNTaWduZWRJbn0gLz4pfVxuICAgICAgICAgIDxoMz57dChcImFjLnZpZGVvc1wiKX08L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tZ3JpZFwiPntwYXRoLnZpZGVvcy5tYXAoKHYpID0+IDxWaWRlb0NhcmQga2V5PXt2LmlkfSB2PXt2fSAvPil9PC9kaXY+XG4gICAgICAgICAgPGgzPnt0KFwiYWMucmVhZGluZ1wiKX08L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhZGluZy1saXN0XCI+e3BhdGgucmVhZGluZy5tYXAoKHIsIGkpID0+IDxhIGtleT17ci51cmx9IGhyZWY9e3IudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgZGF0YS10ZXN0aWQ9e2BwYXRoLXJlYWRpbmctJHtpfWB9PjxGaWxlVGV4dCBzaXplPXsxNn0gLz4ge3QoYHBhdGguJHtwYXRoLmlkfS5yZWFkaW5nLiR7aX1gKX0gPEV4dGVybmFsTGluayBzaXplPXsxM30gLz48L2E+KX08L2Rpdj5cbiAgICAgICAgICA8aDM+e3QoXCJhYy5xdWl6XCIpfTwvaDM+XG4gICAgICAgICAgPFBhdGhRdWl6IHBhdGg9e3BhdGh9IGlzU2lnbmVkSW49e2lzU2lnbmVkSW59IGJlc3Q9e3ByPy5xdWl6X3Njb3JlfSBvblN1Ym1pdHRlZD17cmVsb2FkfSAvPlxuICAgICAgICAgIDxEaXNjbGFpbWVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7cHIgPyA8UHJvZ3Jlc3NQYW5lbCBwcj17cHJ9IHBhdGhJZD17cGF0aC5pZH0gLz4gOiA8YXNpZGUgY2xhc3NOYW1lPVwicGF0aC1wcm9ncmVzc1wiPjxwIGNsYXNzTmFtZT1cInRyYWNrLW5vdGVcIj48TGluayB0bz1cIi9zaWduLWluXCI+e3QoXCJhYy5zaWduSW5Ub1RyYWNrXCIpfTwvTGluaz48L3A+PC9hc2lkZT59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL2FwcC9mcm9udGVuZC9zcmMvcGFnZXMvUGF0aFBhZ2UudHN4In0=