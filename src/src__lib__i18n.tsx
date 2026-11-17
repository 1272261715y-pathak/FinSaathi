import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/lib/i18n.tsx");const createContext = __vite__cjsImport0_react["createContext"]; const useCallback = __vite__cjsImport0_react["useCallback"]; const useContext = __vite__cjsImport0_react["useContext"]; const useEffect = __vite__cjsImport0_react["useEffect"]; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=a646c335";
import { apiGet } from "/src/lib/api.ts";
var _jsxFileName = "/app/frontend/src/lib/i18n.tsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
const LanguageContext = createContext(null);
_c = LanguageContext;
const fill = (text, vars) => Object.entries(vars || {}).reduce((s, [k, v]) => s.replaceAll(`{${k}}`, String(v)), text);
export function LanguageProvider({ children }) {
	_s();
	const [lang, setLangState] = useState(() => localStorage.getItem("finsaathi-lang") || "en");
	const [languages, setLanguages] = useState([{
		code: "en",
		name: "English",
		native: "English"
	}]);
	const [english, setEnglish] = useState({});
	const [strings, setStrings] = useState({});
	const [status, setStatus] = useState("ready");
	const [progress, setProgress] = useState(100);
	useEffect(() => {
		apiGet("/i18n/languages").then((r) => setLanguages(r.languages)).catch(() => {});
		apiGet("/i18n/en").then((r) => setEnglish(r.strings)).catch(() => {});
	}, []);
	useEffect(() => {
		let cancelled = false;
		let timer;
		const meta = languages.find((l) => l.code === lang);
		document.documentElement.lang = lang;
		document.documentElement.dir = meta?.rtl ? "rtl" : "ltr";
		if (lang === "en") {
			setStrings({});
			setStatus("ready");
			setProgress(100);
			return undefined;
		}
		const poll = async () => {
			try {
				const data = await apiGet(`/i18n/${lang}`);
				if (cancelled) return;
				setStrings(data.strings);
				setStatus(data.status);
				setProgress(data.progress);
				if (data.status === "translating") timer = setTimeout(poll, 3e3);
			} catch {
				if (!cancelled) setStatus("unavailable");
			}
		};
		setStatus("translating");
		void poll();
		return () => {
			cancelled = true;
			if (timer) clearTimeout(timer);
		};
	}, [lang, languages]);
	const setLang = (code) => {
		localStorage.setItem("finsaathi-lang", code);
		setLangState(code);
	};
	const t = useCallback((key, vars) => fill(strings[key] || english[key] || key, vars), [strings, english]);
	const current = languages.find((l) => l.code === lang) || languages[0];
	return /* @__PURE__ */ _jsxDEV(LanguageContext.Provider, {
		value: {
			lang,
			setLang,
			languages,
			current,
			t,
			status,
			progress
		},
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 72,
		columnNumber: 10
	}, this);
}
_s(LanguageProvider, "KaGNMaUkoJpxOYEVofH9EjxsHrs=");
_c2 = LanguageProvider;
export function useI18n() {
	_s2();
	const ctx = useContext(LanguageContext);
	if (!ctx) throw new Error("useI18n must be used inside LanguageProvider");
	return ctx;
}
_s2(useI18n, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c, _c2;
$RefreshReg$(_c, "LanguageContext");
$RefreshReg$(_c2, "LanguageProvider");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/lib/i18n.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/lib/i18n.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/lib/i18n.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/lib/i18n.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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QUFnQixVQUFqQjtFQUEwQixPQUFPO0dBQUVKO0dBQU1rQztHQUFTOUI7R0FBV2tDO0dBQVNGO0dBQUd2QjtHQUFRRTtFQUFTO0VBQ3ZGaEI7Q0FDdUI7Ozs7O0FBRTlCOzs7QUFFQSxPQUFPLFNBQVN3QyxVQUFxQjs7Q0FDbkMsTUFBTUMsTUFBTTFELFdBQVdJLGVBQWU7Q0FDdEMsSUFBSSxDQUFDc0QsS0FBSyxNQUFNLElBQUlDLE1BQU0sOENBQThDO0NBQ3hFLE9BQU9EO0FBQ1QiLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhcGlHZXQiLCJMYW5ndWFnZUNvbnRleHQiLCJmaWxsIiwidGV4dCIsInZhcnMiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVkdWNlIiwicyIsImsiLCJ2IiwicmVwbGFjZUFsbCIsIlN0cmluZyIsIkxhbmd1YWdlUHJvdmlkZXIiLCJjaGlsZHJlbiIsImxhbmciLCJzZXRMYW5nU3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibGFuZ3VhZ2VzIiwic2V0TGFuZ3VhZ2VzIiwiY29kZSIsIm5hbWUiLCJuYXRpdmUiLCJlbmdsaXNoIiwic2V0RW5nbGlzaCIsInN0cmluZ3MiLCJzZXRTdHJpbmdzIiwic3RhdHVzIiwic2V0U3RhdHVzIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInRoZW4iLCJyIiwiY2F0Y2giLCJjYW5jZWxsZWQiLCJ0aW1lciIsIm1ldGEiLCJmaW5kIiwibCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiZGlyIiwicnRsIiwidW5kZWZpbmVkIiwicG9sbCIsImRhdGEiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2V0TGFuZyIsInNldEl0ZW0iLCJ0Iiwia2V5IiwiY3VycmVudCIsInVzZUkxOG4iLCJjdHgiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJpMThuLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFwaUdldCB9IGZyb20gXCJAL2xpYi9hcGlcIjtcbmltcG9ydCB0eXBlIHsgSTE4blBheWxvYWQsIExhbmd1YWdlTWV0YSwgTGFuZ3VhZ2VzUmVzcG9uc2UgfSBmcm9tIFwiQC9saWIvdHlwZXNcIjtcblxuaW50ZXJmYWNlIEkxOG5TdGF0ZSB7XG4gIGxhbmc6IHN0cmluZztcbiAgc2V0TGFuZzogKGNvZGU6IHN0cmluZykgPT4gdm9pZDtcbiAgbGFuZ3VhZ2VzOiBMYW5ndWFnZU1ldGFbXTtcbiAgY3VycmVudD86IExhbmd1YWdlTWV0YTtcbiAgdDogKGtleTogc3RyaW5nLCB2YXJzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyPikgPT4gc3RyaW5nO1xuICBzdGF0dXM6IHN0cmluZztcbiAgcHJvZ3Jlc3M6IG51bWJlcjtcbn1cblxuY29uc3QgTGFuZ3VhZ2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxJMThuU3RhdGUgfCBudWxsPihudWxsKTtcblxuY29uc3QgZmlsbCA9ICh0ZXh0OiBzdHJpbmcsIHZhcnM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXI+KSA9PlxuICBPYmplY3QuZW50cmllcyh2YXJzIHx8IHt9KS5yZWR1Y2UoKHMsIFtrLCB2XSkgPT4gcy5yZXBsYWNlQWxsKGB7JHtrfX1gLCBTdHJpbmcodikpLCB0ZXh0KTtcblxuZXhwb3J0IGZ1bmN0aW9uIExhbmd1YWdlUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfSkge1xuICBjb25zdCBbbGFuZywgc2V0TGFuZ1N0YXRlXSA9IHVzZVN0YXRlKCgpID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmluc2FhdGhpLWxhbmdcIikgfHwgXCJlblwiKTtcbiAgY29uc3QgW2xhbmd1YWdlcywgc2V0TGFuZ3VhZ2VzXSA9IHVzZVN0YXRlPExhbmd1YWdlTWV0YVtdPihbeyBjb2RlOiBcImVuXCIsIG5hbWU6IFwiRW5nbGlzaFwiLCBuYXRpdmU6IFwiRW5nbGlzaFwiIH1dKTtcbiAgY29uc3QgW2VuZ2xpc2gsIHNldEVuZ2xpc2hdID0gdXNlU3RhdGU8UmVjb3JkPHN0cmluZywgc3RyaW5nPj4oe30pO1xuICBjb25zdCBbc3RyaW5ncywgc2V0U3RyaW5nc10gPSB1c2VTdGF0ZTxSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+Pih7fSk7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcInJlYWR5XCIpO1xuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDEwMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhcGlHZXQ8TGFuZ3VhZ2VzUmVzcG9uc2U+KFwiL2kxOG4vbGFuZ3VhZ2VzXCIpLnRoZW4oKHIpID0+IHNldExhbmd1YWdlcyhyLmxhbmd1YWdlcykpLmNhdGNoKCgpID0+IHt9KTtcbiAgICBhcGlHZXQ8STE4blBheWxvYWQ+KFwiL2kxOG4vZW5cIikudGhlbigocikgPT4gc2V0RW5nbGlzaChyLnN0cmluZ3MpKS5jYXRjaCgoKSA9PiB7fSk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICBsZXQgdGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgdW5kZWZpbmVkO1xuICAgIGNvbnN0IG1ldGEgPSBsYW5ndWFnZXMuZmluZCgobCkgPT4gbC5jb2RlID09PSBsYW5nKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IGxhbmc7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRpciA9IG1ldGE/LnJ0bCA/IFwicnRsXCIgOiBcImx0clwiO1xuICAgIGlmIChsYW5nID09PSBcImVuXCIpIHtcbiAgICAgIHNldFN0cmluZ3Moe30pO1xuICAgICAgc2V0U3RhdHVzKFwicmVhZHlcIik7XG4gICAgICBzZXRQcm9ncmVzcygxMDApO1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgcG9sbCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGlHZXQ8STE4blBheWxvYWQ+KGAvaTE4bi8ke2xhbmd9YCk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHJldHVybjtcbiAgICAgICAgc2V0U3RyaW5ncyhkYXRhLnN0cmluZ3MpO1xuICAgICAgICBzZXRTdGF0dXMoZGF0YS5zdGF0dXMpO1xuICAgICAgICBzZXRQcm9ncmVzcyhkYXRhLnByb2dyZXNzKTtcbiAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSBcInRyYW5zbGF0aW5nXCIpIHRpbWVyID0gc2V0VGltZW91dChwb2xsLCAzMDAwKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkgc2V0U3RhdHVzKFwidW5hdmFpbGFibGVcIik7XG4gICAgICB9XG4gICAgfTtcbiAgICBzZXRTdGF0dXMoXCJ0cmFuc2xhdGluZ1wiKTtcbiAgICB2b2lkIHBvbGwoKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgIGlmICh0aW1lcikgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB9O1xuICB9LCBbbGFuZywgbGFuZ3VhZ2VzXSk7XG5cbiAgY29uc3Qgc2V0TGFuZyA9IChjb2RlOiBzdHJpbmcpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZpbnNhYXRoaS1sYW5nXCIsIGNvZGUpO1xuICAgIHNldExhbmdTdGF0ZShjb2RlKTtcbiAgfTtcbiAgY29uc3QgdCA9IHVzZUNhbGxiYWNrKFxuICAgIChrZXk6IHN0cmluZywgdmFycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlcj4pID0+IGZpbGwoc3RyaW5nc1trZXldIHx8IGVuZ2xpc2hba2V5XSB8fCBrZXksIHZhcnMpLFxuICAgIFtzdHJpbmdzLCBlbmdsaXNoXSxcbiAgKTtcbiAgY29uc3QgY3VycmVudCA9IGxhbmd1YWdlcy5maW5kKChsKSA9PiBsLmNvZGUgPT09IGxhbmcpIHx8IGxhbmd1YWdlc1swXTtcblxuICByZXR1cm4gKFxuICAgIDxMYW5ndWFnZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbGFuZywgc2V0TGFuZywgbGFuZ3VhZ2VzLCBjdXJyZW50LCB0LCBzdGF0dXMsIHByb2dyZXNzIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlSTE4bigpOiBJMThuU3RhdGUge1xuICBjb25zdCBjdHggPSB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCk7XG4gIGlmICghY3R4KSB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VJMThuIG11c3QgYmUgdXNlZCBpbnNpZGUgTGFuZ3VhZ2VQcm92aWRlclwiKTtcbiAgcmV0dXJuIGN0eDtcbn1cbiJdLCJmaWxlIjoiL2FwcC9mcm9udGVuZC9zcmMvbGliL2kxOG4udHN4In0=