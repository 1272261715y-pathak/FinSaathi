import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/lib/academy.tsx");const createContext = __vite__cjsImport0_react["createContext"]; const useCallback = __vite__cjsImport0_react["useCallback"]; const useContext = __vite__cjsImport0_react["useContext"]; const useEffect = __vite__cjsImport0_react["useEffect"]; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=a646c335";
import { apiGet, apiPost } from "/src/lib/api.ts";
import { useAuth } from "/src/lib/auth.tsx";
var _jsxFileName = "/app/frontend/src/lib/academy.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
const EMPTY = {
	saved: [],
	completed: [],
	in_progress: [],
	paths: {},
	certificates: []
};
const Ctx = createContext(null);
_c = Ctx;
export function AcademyProgressProvider({ children }) {
	_s();
	const { isSignedIn } = useAuth();
	const [me, setMe] = useState(EMPTY);
	const [role, setRole] = useState(null);
	const refresh = useCallback(async () => {
		if (!isSignedIn) {
			setMe(EMPTY);
			setRole(null);
			return;
		}
		try {
			setMe(await apiGet("/academy/me"));
		} catch {
			setMe(EMPTY);
		}
	}, [isSignedIn]);
	useEffect(() => {
		void refresh();
	}, [refresh]);
	useEffect(() => {
		if (!isSignedIn) {
			setRole(null);
			return;
		}
		apiGet("/me").then((d) => setRole(d.role)).catch(() => setRole(null));
	}, [isSignedIn]);
	const toggle = useCallback(async (videoId, action, value) => {
		await apiPost(`/academy/videos/${videoId}/${action}`, { value });
		await refresh();
	}, [refresh]);
	const start = useCallback((videoId) => {
		if (!isSignedIn) return;
		apiPost(`/academy/videos/${videoId}/start`).then(refresh).catch(() => {});
	}, [isSignedIn, refresh]);
	return /* @__PURE__ */ _jsxDEV(Ctx.Provider, {
		value: {
			me,
			role,
			isAdmin: role === "admin",
			refresh,
			toggle,
			start,
			isSignedIn: !!isSignedIn
		},
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 67,
		columnNumber: 10
	}, this);
}
_s(AcademyProgressProvider, "T78YFcCH2K/o5xQdYPTbQWT6Ndw=", false, function() {
	return [useAuth];
});
_c2 = AcademyProgressProvider;
export function useAcademy() {
	_s2();
	const ctx = useContext(Ctx);
	if (!ctx) throw new Error("useAcademy must be used inside AcademyProgressProvider");
	return ctx;
}
_s2(useAcademy, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c, _c2;
$RefreshReg$(_c, "Ctx");
$RefreshReg$(_c2, "AcademyProgressProvider");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/lib/academy.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/lib/academy.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/lib/academy.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/lib/academy.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsZUFBZUMsYUFBYUMsWUFBWUMsV0FBV0MsZ0JBQWdCO0FBRTVFLFNBQVNDLFFBQVFDLGVBQWU7QUFDaEMsU0FBU0MsZUFBZTs7OztBQUd4QixNQUFNQyxRQUFtQjtDQUFFQyxPQUFPO0NBQUlDLFdBQVc7Q0FBSUMsYUFBYTtDQUFJQyxPQUFPLENBQUM7Q0FBR0MsY0FBYztBQUFHO0FBWWxHLE1BQU1DLE1BQU1kLGNBQW1DLElBQUk7O0FBRW5ELE9BQU8sU0FBU2Usd0JBQXdCLEVBQUVDLFlBQXFDOztDQUM3RSxNQUFNLEVBQUVDLGVBQWVWLFFBQVE7Q0FDL0IsTUFBTSxDQUFDVyxJQUFJQyxTQUFTZixTQUFvQkksS0FBSztDQUM3QyxNQUFNLENBQUNZLE1BQU1DLFdBQVdqQixTQUF3QixJQUFJO0NBRXBELE1BQU1rQixVQUFVckIsWUFBWSxZQUFZO0VBQ3RDLElBQUksQ0FBQ2dCLFlBQVk7R0FDZkUsTUFBTVgsS0FBSztHQUNYYSxRQUFRLElBQUk7R0FDWjtFQUNGO0VBQ0EsSUFBSTtHQUNGRixNQUFNLE1BQU1kLE9BQWtCLGFBQWEsQ0FBQztFQUM5QyxRQUFRO0dBQ05jLE1BQU1YLEtBQUs7RUFDYjtDQUNGLEdBQUcsQ0FBQ1MsVUFBVSxDQUFDO0NBRWZkLGdCQUFnQjtFQUNkLEtBQUttQixRQUFRO0NBQ2YsR0FBRyxDQUFDQSxPQUFPLENBQUM7Q0FFWm5CLGdCQUFnQjtFQUNkLElBQUksQ0FBQ2MsWUFBWTtHQUNmSSxRQUFRLElBQUk7R0FDWjtFQUNGO0VBQ0FoQixPQUFnQyxLQUFLLENBQUMsQ0FDbkNrQixNQUFNQyxNQUFNSCxRQUFRRyxFQUFFSixJQUFJLENBQUMsQ0FBQyxDQUM1QkssWUFBWUosUUFBUSxJQUFJLENBQUM7Q0FDOUIsR0FBRyxDQUFDSixVQUFVLENBQUM7Q0FFZixNQUFNUyxTQUFTekIsWUFDYixPQUFPMEIsU0FBaUJDLFFBQTZCQyxVQUFtQjtFQUN0RSxNQUFNdkIsUUFBUSxtQkFBbUJxQixRQUFPLEdBQUlDLFVBQVUsRUFBRUMsTUFBTSxDQUFDO0VBQy9ELE1BQU1QLFFBQVE7Q0FDaEIsR0FDQSxDQUFDQSxPQUFPLENBQ1Y7Q0FFQSxNQUFNUSxRQUFRN0IsYUFDWDBCLFlBQW9CO0VBQ25CLElBQUksQ0FBQ1YsWUFBWTtFQUNqQlgsUUFBUSxtQkFBbUJxQixRQUFPLE9BQVEsQ0FBQyxDQUN4Q0osS0FBS0QsT0FBTyxDQUFDLENBQ2JHLFlBQVksQ0FBQyxDQUFDO0NBQ25CLEdBQ0EsQ0FBQ1IsWUFBWUssT0FBTyxDQUN0QjtDQUVBLE9BQ0Usd0JBQUMsSUFBSSxVQUFMO0VBQWMsT0FBTztHQUFFSjtHQUFJRTtHQUFNVyxTQUFTWCxTQUFTO0dBQVNFO0dBQVNJO0dBQVFJO0dBQU9iLFlBQVksQ0FBQyxDQUFDQTtFQUFXO0VBQzFHRDtDQUNXOzs7OztBQUVsQjs7Ozs7QUFFQSxPQUFPLFNBQVNnQixhQUEyQjs7Q0FDekMsTUFBTUMsTUFBTS9CLFdBQVdZLEdBQUc7Q0FDMUIsSUFBSSxDQUFDbUIsS0FBSyxNQUFNLElBQUlDLE1BQU0sd0RBQXdEO0NBQ2xGLE9BQU9EO0FBQ1QiLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhcGlHZXQiLCJhcGlQb3N0IiwidXNlQXV0aCIsIkVNUFRZIiwic2F2ZWQiLCJjb21wbGV0ZWQiLCJpbl9wcm9ncmVzcyIsInBhdGhzIiwiY2VydGlmaWNhdGVzIiwiQ3R4IiwiQWNhZGVteVByb2dyZXNzUHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzU2lnbmVkSW4iLCJtZSIsInNldE1lIiwicm9sZSIsInNldFJvbGUiLCJyZWZyZXNoIiwidGhlbiIsImQiLCJjYXRjaCIsInRvZ2dsZSIsInZpZGVvSWQiLCJhY3Rpb24iLCJ2YWx1ZSIsInN0YXJ0IiwiaXNBZG1pbiIsInVzZUFjYWRlbXkiLCJjdHgiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJhY2FkZW15LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFwaUdldCwgYXBpUG9zdCB9IGZyb20gXCJAL2xpYi9hcGlcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xuaW1wb3J0IHR5cGUgeyBBY2FkZW15TWUgfSBmcm9tIFwiQC9saWIvdHlwZXNcIjtcblxuY29uc3QgRU1QVFk6IEFjYWRlbXlNZSA9IHsgc2F2ZWQ6IFtdLCBjb21wbGV0ZWQ6IFtdLCBpbl9wcm9ncmVzczogW10sIHBhdGhzOiB7fSwgY2VydGlmaWNhdGVzOiBbXSB9O1xuXG5pbnRlcmZhY2UgQWNhZGVteVN0YXRlIHtcbiAgbWU6IEFjYWRlbXlNZTtcbiAgcm9sZTogc3RyaW5nIHwgbnVsbDtcbiAgaXNBZG1pbjogYm9vbGVhbjtcbiAgcmVmcmVzaDogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbiAgdG9nZ2xlOiAodmlkZW9JZDogc3RyaW5nLCBhY3Rpb246IFwiY29tcGxldGVcIiB8IFwic2F2ZVwiLCB2YWx1ZTogYm9vbGVhbikgPT4gUHJvbWlzZTx2b2lkPjtcbiAgc3RhcnQ6ICh2aWRlb0lkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGlzU2lnbmVkSW46IGJvb2xlYW47XG59XG5cbmNvbnN0IEN0eCA9IGNyZWF0ZUNvbnRleHQ8QWNhZGVteVN0YXRlIHwgbnVsbD4obnVsbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBBY2FkZW15UHJvZ3Jlc3NQcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IHsgaXNTaWduZWRJbiB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCBbbWUsIHNldE1lXSA9IHVzZVN0YXRlPEFjYWRlbXlNZT4oRU1QVFkpO1xuICBjb25zdCBbcm9sZSwgc2V0Um9sZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICBjb25zdCByZWZyZXNoID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGlmICghaXNTaWduZWRJbikge1xuICAgICAgc2V0TWUoRU1QVFkpO1xuICAgICAgc2V0Um9sZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHNldE1lKGF3YWl0IGFwaUdldDxBY2FkZW15TWU+KFwiL2FjYWRlbXkvbWVcIikpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0TWUoRU1QVFkpO1xuICAgIH1cbiAgfSwgW2lzU2lnbmVkSW5dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZvaWQgcmVmcmVzaCgpO1xuICB9LCBbcmVmcmVzaF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc1NpZ25lZEluKSB7XG4gICAgICBzZXRSb2xlKG51bGwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhcGlHZXQ8eyByb2xlOiBzdHJpbmcgfCBudWxsIH0+KFwiL21lXCIpXG4gICAgICAudGhlbigoZCkgPT4gc2V0Um9sZShkLnJvbGUpKVxuICAgICAgLmNhdGNoKCgpID0+IHNldFJvbGUobnVsbCkpO1xuICB9LCBbaXNTaWduZWRJbl0pO1xuXG4gIGNvbnN0IHRvZ2dsZSA9IHVzZUNhbGxiYWNrKFxuICAgIGFzeW5jICh2aWRlb0lkOiBzdHJpbmcsIGFjdGlvbjogXCJjb21wbGV0ZVwiIHwgXCJzYXZlXCIsIHZhbHVlOiBib29sZWFuKSA9PiB7XG4gICAgICBhd2FpdCBhcGlQb3N0KGAvYWNhZGVteS92aWRlb3MvJHt2aWRlb0lkfS8ke2FjdGlvbn1gLCB7IHZhbHVlIH0pO1xuICAgICAgYXdhaXQgcmVmcmVzaCgpO1xuICAgIH0sXG4gICAgW3JlZnJlc2hdLFxuICApO1xuXG4gIGNvbnN0IHN0YXJ0ID0gdXNlQ2FsbGJhY2soXG4gICAgKHZpZGVvSWQ6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCFpc1NpZ25lZEluKSByZXR1cm47XG4gICAgICBhcGlQb3N0KGAvYWNhZGVteS92aWRlb3MvJHt2aWRlb0lkfS9zdGFydGApXG4gICAgICAgIC50aGVuKHJlZnJlc2gpXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7fSk7XG4gICAgfSxcbiAgICBbaXNTaWduZWRJbiwgcmVmcmVzaF0sXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q3R4LlByb3ZpZGVyIHZhbHVlPXt7IG1lLCByb2xlLCBpc0FkbWluOiByb2xlID09PSBcImFkbWluXCIsIHJlZnJlc2gsIHRvZ2dsZSwgc3RhcnQsIGlzU2lnbmVkSW46ICEhaXNTaWduZWRJbiB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0N0eC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFjYWRlbXkoKTogQWNhZGVteVN0YXRlIHtcbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChDdHgpO1xuICBpZiAoIWN0eCkgdGhyb3cgbmV3IEVycm9yKFwidXNlQWNhZGVteSBtdXN0IGJlIHVzZWQgaW5zaWRlIEFjYWRlbXlQcm9ncmVzc1Byb3ZpZGVyXCIpO1xuICByZXR1cm4gY3R4O1xufVxuIl0sImZpbGUiOiIvYXBwL2Zyb250ZW5kL3NyYy9saWIvYWNhZGVteS50c3gifQ==