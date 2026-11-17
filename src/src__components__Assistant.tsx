import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Assistant.tsx");const useEffect = __vite__cjsImport0_react["useEffect"]; const useRef = __vite__cjsImport0_react["useRef"]; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport6_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport6_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=a646c335";
import { ArrowRight, MessageCircle, Trash2 } from "/src/lib/lucide-react.tsx";
import { apiDelete, apiGet } from "/src/lib/api.ts";
import { useAuth } from "/src/lib/auth.tsx";
import { useI18n } from "/src/lib/i18n.tsx";
import { streamChat } from "/src/lib/stream.ts";
var _jsxFileName = "/app/frontend/src/components/Assistant.tsx";
import __vite__cjsImport6_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
var _s = $RefreshSig$();
const inline = (line) => line.split(/(\*\*[^*]+\*\*)/g).map((p, i) => p.startsWith("**") && p.endsWith("**") && p.length > 4 ? /* @__PURE__ */ _jsxDEV("strong", {
	"x-file-name": "Assistant",
	"x-line-number": "10",
	"x-column": "136",
	"x-component": "strong",
	"x-id": "Assistant_10_136",
	"x-dynamic": "true",
	"x-source-type": "computed",
	"x-source-editable": "false",
	children: p.slice(2, -2)
}, i, false, {
	fileName: _jsxFileName,
	lineNumber: 12,
	columnNumber: 136
}, this) : p.replace(/^#+\s*/, ""));
const Rich = ({ text }) => /* @__PURE__ */ _jsxDEV(_Fragment, { children: text.split("\n").map((line, i) => /* @__PURE__ */ _jsxDEV("span", {
	className: "md-line",
	"x-file-name": "Assistant",
	"x-line-number": "11",
	"x-column": "82",
	"x-component": "span",
	"x-id": "Assistant_11_82",
	"x-dynamic": "true",
	"x-source-type": "computed",
	"x-source-editable": "false",
	children: inline(line.replace(/^\s*[-*]\s+/, "• "))
}, i, false, {
	fileName: _jsxFileName,
	lineNumber: 17,
	columnNumber: 44
}, this)) }, void 0, false, {
	fileName: _jsxFileName,
	lineNumber: 17,
	columnNumber: 7
}, this);
_c = Rich;
export function Assistant() {
	_s();
	const { t, lang } = useI18n();
	const { isSignedIn } = useAuth();
	const [messages, setMessages] = useState([]);
	const [question, setQuestion] = useState("");
	const [busy, setBusy] = useState(false);
	const box = useRef(null);
	// Scroll only the chat pane — never the page — so loading Home stays at the hero.
	useEffect(() => {
		if (box.current && messages.length) box.current.scrollTop = box.current.scrollHeight;
	}, [messages]);
	useEffect(() => {
		if (!isSignedIn) {
			setMessages([]);
			return;
		}
		apiGet("/assistant/history").then((d) => setMessages(d.messages || [])).catch(() => {});
	}, [isSignedIn]);
	const ask = async (q = question) => {
		if (!q.trim() || busy) return;
		const history = messages.filter((m) => !m.error).slice(-20).map(({ role, content }) => ({
			role,
			content
		}));
		setMessages((m) => [
			...m,
			{
				role: "user",
				content: q
			},
			{
				role: "assistant",
				content: ""
			}
		]);
		setQuestion("");
		setBusy(true);
		const append = (delta) => setMessages((m) => {
			const c = [...m];
			c[c.length - 1] = {
				...c[c.length - 1],
				content: c[c.length - 1].content + delta
			};
			return c;
		});
		try {
			await streamChat({
				body: {
					message: q,
					language: lang,
					history: isSignedIn ? [] : history
				},
				onDelta: append
			});
		} catch {
			setMessages((m) => {
				const c = [...m];
				c[c.length - 1] = {
					role: "assistant",
					content: t("ai.error"),
					error: true
				};
				return c;
			});
		} finally {
			setBusy(false);
		}
	};
	const clear = async () => {
		if (isSignedIn) await apiDelete("/assistant/history").catch(() => {});
		setMessages([]);
	};
	return /* @__PURE__ */ _jsxDEV("section", {
		className: "section assistant-section",
		id: "assistant",
		"x-file-name": "Assistant",
		"x-line-number": "44",
		"x-column": "4",
		"x-component": "section",
		"x-id": "Assistant_44_4",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "assistant-copy",
			"x-file-name": "Assistant",
			"x-line-number": "45",
			"x-column": "6",
			"x-component": "div",
			"x-id": "Assistant_45_6",
			"x-dynamic": "false",
			children: [
				/* @__PURE__ */ _jsxDEV("span", {
					className: "kicker",
					"x-file-name": "Assistant",
					"x-line-number": "46",
					"x-column": "8",
					"x-component": "span",
					"x-id": "Assistant_46_8",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("ai.kicker")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 99,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("h2", {
					"x-file-name": "Assistant",
					"x-line-number": "47",
					"x-column": "8",
					"x-component": "h2",
					"x-id": "Assistant_47_8",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("ai.title")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 100,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("p", {
					"x-file-name": "Assistant",
					"x-line-number": "48",
					"x-column": "8",
					"x-component": "p",
					"x-id": "Assistant_48_8",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("ai.text")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 101,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "prompt-list",
					"x-file-name": "Assistant",
					"x-line-number": "49",
					"x-column": "8",
					"x-component": "div",
					"x-id": "Assistant_49_8",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: [
						"promptSip",
						"promptUpi",
						"promptInterest"
					].map((k) => /* @__PURE__ */ _jsxDEV("button", {
						onClick: () => void ask(t(`ai.${k}`)),
						disabled: busy,
						"data-testid": `assistant-${k.toLowerCase()}`,
						"x-file-name": "Assistant",
						"x-line-number": "49",
						"x-column": "94",
						"x-component": "button",
						"x-id": "Assistant_49_94",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t(`ai.${k}`)
					}, k, false, {
						fileName: _jsxFileName,
						lineNumber: 102,
						columnNumber: 257
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 102,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 98,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "chat-box",
			"x-file-name": "Assistant",
			"x-line-number": "51",
			"x-column": "6",
			"x-component": "div",
			"x-id": "Assistant_51_6",
			"x-dynamic": "false",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "chat-head",
					"x-file-name": "Assistant",
					"x-line-number": "52",
					"x-column": "8",
					"x-component": "div",
					"x-id": "Assistant_52_8",
					"x-dynamic": "false",
					children: [
						/* @__PURE__ */ _jsxDEV("span", {
							className: "assistant-avatar",
							"x-file-name": "Assistant",
							"x-line-number": "53",
							"x-column": "10",
							"x-component": "span",
							"x-id": "Assistant_53_10",
							"x-dynamic": "false",
							children: /* @__PURE__ */ _jsxDEV(MessageCircle, {
								size: 17,
								"x-file-name": "Assistant",
								"x-line-number": "53",
								"x-column": "45",
								"x-component": "MessageCircle",
								"x-id": "Assistant_53_45",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 106,
								columnNumber: 163
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							"x-file-name": "Assistant",
							"x-line-number": "54",
							"x-column": "10",
							"x-component": "div",
							"x-id": "Assistant_54_10",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("strong", {
								"x-file-name": "Assistant",
								"x-line-number": "54",
								"x-column": "15",
								"x-component": "strong",
								"x-id": "Assistant_54_15",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: t("ai.name")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 107,
								columnNumber: 132
							}, this), /* @__PURE__ */ _jsxDEV("small", {
								"x-file-name": "Assistant",
								"x-line-number": "54",
								"x-column": "46",
								"x-component": "small",
								"x-id": "Assistant_54_46",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: t("ai.sub")
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 107,
								columnNumber: 332
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 107,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("button", {
							className: "chat-clear",
							onClick: () => void clear(),
							disabled: busy || !messages.length,
							"data-testid": "assistant-clear-button",
							"x-file-name": "Assistant",
							"x-line-number": "55",
							"x-column": "10",
							"x-component": "button",
							"x-id": "Assistant_55_10",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: [
								/* @__PURE__ */ _jsxDEV(Trash2, {
									size: 14,
									"x-file-name": "Assistant",
									"x-line-number": "55",
									"x-column": "143",
									"x-component": "Trash2",
									"x-id": "Assistant_55_143",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 108,
									columnNumber: 313
								}, this),
								" ",
								t("ai.clear")
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 108,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 105,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "messages",
					"data-testid": "assistant-messages",
					ref: box,
					"x-file-name": "Assistant",
					"x-line-number": "57",
					"x-column": "8",
					"x-component": "div",
					"x-id": "Assistant_57_8",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "message bot",
						"x-file-name": "Assistant",
						"x-line-number": "58",
						"x-column": "10",
						"x-component": "div",
						"x-id": "Assistant_58_10",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t("ai.greeting")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 111,
						columnNumber: 11
					}, this), messages.map((m, i) => /* @__PURE__ */ _jsxDEV("div", {
						className: `message ${m.role === "user" ? "user" : "bot"}${m.error ? " error" : ""}`,
						"data-testid": `assistant-message-${i}`,
						"x-file-name": "Assistant",
						"x-line-number": "59",
						"x-column": "34",
						"x-component": "div",
						"x-id": "Assistant_59_34",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: m.content ? /* @__PURE__ */ _jsxDEV(Rich, {
							text: m.content,
							"x-file-name": "Assistant",
							"x-line-number": "59",
							"x-column": "185",
							"x-component": "Rich",
							"x-id": "Assistant_59_185",
							"x-dynamic": "true",
							"x-source-type": "external",
							"x-source-var": "messages",
							"x-source-editable": "false",
							"x-array-var": "messages",
							"x-array-item-param": "m"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 112,
							columnNumber: 352
						}, this) : busy ? t("ai.thinking") : ""
					}, i, false, {
						fileName: _jsxFileName,
						lineNumber: 112,
						columnNumber: 35
					}, this))]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 110,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("p", {
					className: "chat-note",
					"data-testid": "assistant-history-note",
					"x-file-name": "Assistant",
					"x-line-number": "61",
					"x-column": "8",
					"x-component": "p",
					"x-id": "Assistant_61_8",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: isSignedIn ? t("ai.saved") : t("ai.guest")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 114,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("form", {
					onSubmit: (e) => {
						e.preventDefault();
						void ask();
					},
					className: "chat-form",
					"x-file-name": "Assistant",
					"x-line-number": "62",
					"x-column": "8",
					"x-component": "form",
					"x-id": "Assistant_62_8",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("input", {
						value: question,
						onChange: (e) => setQuestion(e.target.value),
						placeholder: t("ai.placeholder"),
						maxLength: 1e3,
						"data-testid": "assistant-input",
						"x-file-name": "Assistant",
						"x-line-number": "63",
						"x-column": "10",
						"x-component": "input",
						"x-id": "Assistant_63_10",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 119,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						type: "submit",
						"aria-label": "Ask assistant",
						disabled: busy,
						"data-testid": "assistant-submit-button",
						"x-file-name": "Assistant",
						"x-line-number": "64",
						"x-column": "10",
						"x-component": "button",
						"x-id": "Assistant_64_10",
						"x-dynamic": "false",
						children: /* @__PURE__ */ _jsxDEV(ArrowRight, { size: 18 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 120,
							columnNumber: 233
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 120,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 115,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 104,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 97,
		columnNumber: 10
	}, this);
}
_s(Assistant, "BFOVsIeE9ZZgaVphVMtfBd/O11g=", false, function() {
	return [useI18n, useAuth];
});
_c2 = Assistant;
var _c, _c2;
$RefreshReg$(_c, "Rich");
$RefreshReg$(_c2, "Assistant");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/Assistant.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/components/Assistant.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/components/Assistant.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/components/Assistant.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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QUFBO01BQUE7TUFBQTtNQUFBO01BQUE7S0FBQTs7OztlQUN0Six3QkFBQyxVQUFEO01BQVEsTUFBSztNQUFTLGNBQVc7TUFBZ0IsVUFBVU87TUFBTSxlQUFZO01BQXlCO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtnQkFBQyx3QkFBQyxZQUFELEVBQVksTUFBTSxHQUFHOzs7OztLQUFXOzs7O2FBQ25JOzs7Ozs7R0FDSDs7Ozs7VUFDRTs7Ozs7O0FBRWIiLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkFycm93UmlnaHQiLCJNZXNzYWdlQ2lyY2xlIiwiVHJhc2gyIiwiYXBpRGVsZXRlIiwiYXBpR2V0IiwidXNlQXV0aCIsInVzZUkxOG4iLCJzdHJlYW1DaGF0IiwiaW5saW5lIiwibGluZSIsInNwbGl0IiwibWFwIiwicCIsImkiLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJsZW5ndGgiLCJzbGljZSIsInJlcGxhY2UiLCJSaWNoIiwidGV4dCIsIkFzc2lzdGFudCIsInQiLCJsYW5nIiwiaXNTaWduZWRJbiIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJxdWVzdGlvbiIsInNldFF1ZXN0aW9uIiwiYnVzeSIsInNldEJ1c3kiLCJib3giLCJjdXJyZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0IiwidGhlbiIsImQiLCJjYXRjaCIsImFzayIsInEiLCJ0cmltIiwiaGlzdG9yeSIsImZpbHRlciIsIm0iLCJlcnJvciIsInJvbGUiLCJjb250ZW50IiwiYXBwZW5kIiwiZGVsdGEiLCJjIiwiYm9keSIsIm1lc3NhZ2UiLCJsYW5ndWFnZSIsIm9uRGVsdGEiLCJjbGVhciIsImsiLCJ0b0xvd2VyQ2FzZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFzc2lzdGFudC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcnJvd1JpZ2h0LCBNZXNzYWdlQ2lyY2xlLCBUcmFzaDIgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyBhcGlEZWxldGUsIGFwaUdldCB9IGZyb20gXCJAL2xpYi9hcGlcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gXCJAL2xpYi9pMThuXCI7XG5pbXBvcnQgeyBzdHJlYW1DaGF0IH0gZnJvbSBcIkAvbGliL3N0cmVhbVwiO1xuXG5pbnRlcmZhY2UgTXNnIHsgcm9sZTogc3RyaW5nOyBjb250ZW50OiBzdHJpbmc7IGVycm9yPzogYm9vbGVhbiB9XG5cbmNvbnN0IGlubGluZSA9IChsaW5lOiBzdHJpbmcpID0+IGxpbmUuc3BsaXQoLyhcXCpcXCpbXipdK1xcKlxcKikvZykubWFwKChwLCBpKSA9PiAocC5zdGFydHNXaXRoKFwiKipcIikgJiYgcC5lbmRzV2l0aChcIioqXCIpICYmIHAubGVuZ3RoID4gNCA/IDxzdHJvbmcga2V5PXtpfT57cC5zbGljZSgyLCAtMil9PC9zdHJvbmc+IDogcC5yZXBsYWNlKC9eIytcXHMqLywgXCJcIikpKTtcbmNvbnN0IFJpY2ggPSAoeyB0ZXh0IH06IHsgdGV4dDogc3RyaW5nIH0pID0+IDw+e3RleHQuc3BsaXQoXCJcXG5cIikubWFwKChsaW5lLCBpKSA9PiA8c3BhbiBjbGFzc05hbWU9XCJtZC1saW5lXCIga2V5PXtpfT57aW5saW5lKGxpbmUucmVwbGFjZSgvXlxccypbLSpdXFxzKy8sIFwi4oCiIFwiKSl9PC9zcGFuPil9PC8+O1xuXG5leHBvcnQgZnVuY3Rpb24gQXNzaXN0YW50KCkge1xuICBjb25zdCB7IHQsIGxhbmcgfSA9IHVzZUkxOG4oKTtcbiAgY29uc3QgeyBpc1NpZ25lZEluIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGU8TXNnW10+KFtdKTtcbiAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2J1c3ksIHNldEJ1c3ldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBib3ggPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIC8vIFNjcm9sbCBvbmx5IHRoZSBjaGF0IHBhbmUg4oCUIG5ldmVyIHRoZSBwYWdlIOKAlCBzbyBsb2FkaW5nIEhvbWUgc3RheXMgYXQgdGhlIGhlcm8uXG4gIHVzZUVmZmVjdCgoKSA9PiB7IGlmIChib3guY3VycmVudCAmJiBtZXNzYWdlcy5sZW5ndGgpIGJveC5jdXJyZW50LnNjcm9sbFRvcCA9IGJveC5jdXJyZW50LnNjcm9sbEhlaWdodDsgfSwgW21lc3NhZ2VzXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc1NpZ25lZEluKSB7IHNldE1lc3NhZ2VzKFtdKTsgcmV0dXJuOyB9XG4gICAgYXBpR2V0PHsgbWVzc2FnZXM6IE1zZ1tdIH0+KFwiL2Fzc2lzdGFudC9oaXN0b3J5XCIpLnRoZW4oKGQpID0+IHNldE1lc3NhZ2VzKGQubWVzc2FnZXMgfHwgW10pKS5jYXRjaCgoKSA9PiB7fSk7XG4gIH0sIFtpc1NpZ25lZEluXSk7XG5cbiAgY29uc3QgYXNrID0gYXN5bmMgKHEgPSBxdWVzdGlvbikgPT4ge1xuICAgIGlmICghcS50cmltKCkgfHwgYnVzeSkgcmV0dXJuO1xuICAgIGNvbnN0IGhpc3RvcnkgPSBtZXNzYWdlcy5maWx0ZXIoKG0pID0+ICFtLmVycm9yKS5zbGljZSgtMjApLm1hcCgoeyByb2xlLCBjb250ZW50IH0pID0+ICh7IHJvbGUsIGNvbnRlbnQgfSkpO1xuICAgIHNldE1lc3NhZ2VzKChtKSA9PiBbLi4ubSwgeyByb2xlOiBcInVzZXJcIiwgY29udGVudDogcSB9LCB7IHJvbGU6IFwiYXNzaXN0YW50XCIsIGNvbnRlbnQ6IFwiXCIgfV0pO1xuICAgIHNldFF1ZXN0aW9uKFwiXCIpO1xuICAgIHNldEJ1c3kodHJ1ZSk7XG4gICAgY29uc3QgYXBwZW5kID0gKGRlbHRhOiBzdHJpbmcpID0+IHNldE1lc3NhZ2VzKChtKSA9PiB7IGNvbnN0IGMgPSBbLi4ubV07IGNbYy5sZW5ndGggLSAxXSA9IHsgLi4uY1tjLmxlbmd0aCAtIDFdLCBjb250ZW50OiBjW2MubGVuZ3RoIC0gMV0uY29udGVudCArIGRlbHRhIH07IHJldHVybiBjOyB9KTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc3RyZWFtQ2hhdCh7IGJvZHk6IHsgbWVzc2FnZTogcSwgbGFuZ3VhZ2U6IGxhbmcsIGhpc3Rvcnk6IGlzU2lnbmVkSW4gPyBbXSA6IGhpc3RvcnkgfSwgb25EZWx0YTogYXBwZW5kIH0pO1xuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0TWVzc2FnZXMoKG0pID0+IHsgY29uc3QgYyA9IFsuLi5tXTsgY1tjLmxlbmd0aCAtIDFdID0geyByb2xlOiBcImFzc2lzdGFudFwiLCBjb250ZW50OiB0KFwiYWkuZXJyb3JcIiksIGVycm9yOiB0cnVlIH07IHJldHVybiBjOyB9KTtcbiAgICB9IGZpbmFsbHkgeyBzZXRCdXN5KGZhbHNlKTsgfVxuICB9O1xuICBjb25zdCBjbGVhciA9IGFzeW5jICgpID0+IHsgaWYgKGlzU2lnbmVkSW4pIGF3YWl0IGFwaURlbGV0ZShcIi9hc3Npc3RhbnQvaGlzdG9yeVwiKS5jYXRjaCgoKSA9PiB7fSk7IHNldE1lc3NhZ2VzKFtdKTsgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNlY3Rpb24gYXNzaXN0YW50LXNlY3Rpb25cIiBpZD1cImFzc2lzdGFudFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3Npc3RhbnQtY29weVwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJraWNrZXJcIj57dChcImFpLmtpY2tlclwiKX08L3NwYW4+XG4gICAgICAgIDxoMj57dChcImFpLnRpdGxlXCIpfTwvaDI+XG4gICAgICAgIDxwPnt0KFwiYWkudGV4dFwiKX08L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvbXB0LWxpc3RcIj57W1wicHJvbXB0U2lwXCIsIFwicHJvbXB0VXBpXCIsIFwicHJvbXB0SW50ZXJlc3RcIl0ubWFwKChrKSA9PiA8YnV0dG9uIGtleT17a30gb25DbGljaz17KCkgPT4gdm9pZCBhc2sodChgYWkuJHtrfWApKX0gZGlzYWJsZWQ9e2J1c3l9IGRhdGEtdGVzdGlkPXtgYXNzaXN0YW50LSR7ay50b0xvd2VyQ2FzZSgpfWB9Pnt0KGBhaS4ke2t9YCl9PC9idXR0b24+KX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LWJveFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtaGVhZFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFzc2lzdGFudC1hdmF0YXJcIj48TWVzc2FnZUNpcmNsZSBzaXplPXsxN30gLz48L3NwYW4+XG4gICAgICAgICAgPGRpdj48c3Ryb25nPnt0KFwiYWkubmFtZVwiKX08L3N0cm9uZz48c21hbGw+e3QoXCJhaS5zdWJcIil9PC9zbWFsbD48L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNoYXQtY2xlYXJcIiBvbkNsaWNrPXsoKSA9PiB2b2lkIGNsZWFyKCl9IGRpc2FibGVkPXtidXN5IHx8ICFtZXNzYWdlcy5sZW5ndGh9IGRhdGEtdGVzdGlkPVwiYXNzaXN0YW50LWNsZWFyLWJ1dHRvblwiPjxUcmFzaDIgc2l6ZT17MTR9IC8+IHt0KFwiYWkuY2xlYXJcIil9PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCIgZGF0YS10ZXN0aWQ9XCJhc3Npc3RhbnQtbWVzc2FnZXNcIiByZWY9e2JveH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlIGJvdFwiPnt0KFwiYWkuZ3JlZXRpbmdcIil9PC9kaXY+XG4gICAgICAgICAge21lc3NhZ2VzLm1hcCgobSwgaSkgPT4gPGRpdiBjbGFzc05hbWU9e2BtZXNzYWdlICR7bS5yb2xlID09PSBcInVzZXJcIiA/IFwidXNlclwiIDogXCJib3RcIn0ke20uZXJyb3IgPyBcIiBlcnJvclwiIDogXCJcIn1gfSBrZXk9e2l9IGRhdGEtdGVzdGlkPXtgYXNzaXN0YW50LW1lc3NhZ2UtJHtpfWB9PnttLmNvbnRlbnQgPyA8UmljaCB0ZXh0PXttLmNvbnRlbnR9IC8+IDogYnVzeSA/IHQoXCJhaS50aGlua2luZ1wiKSA6IFwiXCJ9PC9kaXY+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNoYXQtbm90ZVwiIGRhdGEtdGVzdGlkPVwiYXNzaXN0YW50LWhpc3Rvcnktbm90ZVwiPntpc1NpZ25lZEluID8gdChcImFpLnNhdmVkXCIpIDogdChcImFpLmd1ZXN0XCIpfTwvcD5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgdm9pZCBhc2soKTsgfX0gY2xhc3NOYW1lPVwiY2hhdC1mb3JtXCI+XG4gICAgICAgICAgPGlucHV0IHZhbHVlPXtxdWVzdGlvbn0gb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVzdGlvbihlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPXt0KFwiYWkucGxhY2Vob2xkZXJcIil9IG1heExlbmd0aD17MTAwMH0gZGF0YS10ZXN0aWQ9XCJhc3Npc3RhbnQtaW5wdXRcIiAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGFyaWEtbGFiZWw9XCJBc2sgYXNzaXN0YW50XCIgZGlzYWJsZWQ9e2J1c3l9IGRhdGEtdGVzdGlkPVwiYXNzaXN0YW50LXN1Ym1pdC1idXR0b25cIj48QXJyb3dSaWdodCBzaXplPXsxOH0gLz48L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sImZpbGUiOiIvYXBwL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL0Fzc2lzdGFudC50c3gifQ==