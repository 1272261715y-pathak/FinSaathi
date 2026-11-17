import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/lib/auth.tsx");const createContext = __vite__cjsImport0_react["createContext"]; const useCallback = __vite__cjsImport0_react["useCallback"]; const useContext = __vite__cjsImport0_react["useContext"]; const useEffect = __vite__cjsImport0_react["useEffect"]; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=a646c335";
import { apiGet, apiPost } from "/src/lib/api.ts";
import { beginSession, endSession } from "/src/lib/session.ts";
var _jsxFileName = "/app/frontend/src/lib/auth.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
const AuthContext = createContext(null);
_c = AuthContext;
export function AuthProvider({ children }) {
	_s();
	const [user, setUser] = useState(null);
	const [isLoaded, setLoaded] = useState(false);
	useEffect(() => {
		apiGet("/auth/me").then((u) => setUser(u)).catch(() => setUser(null)).finally(() => setLoaded(true));
	}, []);
	const signIn = useCallback(async (email, password) => {
		const u = await apiPost("/auth/login", {
			email,
			password
		});
		beginSession();
		setUser(u);
	}, []);
	const signUp = useCallback(async (name, email, password) => {
		const u = await apiPost("/auth/signup", {
			name,
			email,
			password
		});
		beginSession();
		setUser(u);
	}, []);
	const signOut = useCallback(async () => {
		await endSession("/sign-in");
	}, []);
	return /* @__PURE__ */ _jsxDEV(AuthContext.Provider, {
		value: {
			user,
			isLoaded,
			isSignedIn: !!user,
			signIn,
			signUp,
			signOut
		},
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 45,
		columnNumber: 10
	}, this);
}
_s(AuthProvider, "CbeGrSP2GnPXaAZgmW6853pS9Jc=");
_c2 = AuthProvider;
export function useAuth() {
	_s2();
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
	return ctx;
}
_s2(useAuth, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c, _c2;
$RefreshReg$(_c, "AuthContext");
$RefreshReg$(_c2, "AuthProvider");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/lib/auth.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/lib/auth.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/lib/auth.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/lib/auth.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsZUFBZUMsYUFBYUMsWUFBWUMsV0FBV0MsZ0JBQWdCO0FBRTVFLFNBQVNDLFFBQVFDLGVBQWU7QUFDaEMsU0FBU0MsY0FBY0Msa0JBQWtCOzs7O0FBWXpDLE1BQU1DLGNBQWNULGNBQWdDLElBQUk7O0FBRXhELE9BQU8sU0FBU1UsYUFBYSxFQUFFQyxZQUFxQzs7Q0FDbEUsTUFBTSxDQUFDQyxNQUFNQyxXQUFXVCxTQUFzQixJQUFJO0NBQ2xELE1BQU0sQ0FBQ1UsVUFBVUMsYUFBYVgsU0FBUyxLQUFLO0NBRTVDRCxnQkFBZ0I7RUFDZEUsT0FBb0IsVUFBVSxDQUFDLENBQzVCVyxNQUFNQyxNQUFNSixRQUFRSSxDQUFDLENBQUMsQ0FBQyxDQUN2QkMsWUFBWUwsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUMxQk0sY0FBY0osVUFBVSxJQUFJLENBQUM7Q0FDbEMsR0FBRyxFQUFFO0NBRUwsTUFBTUssU0FBU25CLFlBQVksT0FBT29CLE9BQWVDLGFBQXFCO0VBQ3BFLE1BQU1MLElBQUksTUFBTVgsUUFBYyxlQUFlO0dBQUVlO0dBQU9DO0VBQVMsQ0FBQztFQUNoRWYsYUFBYTtFQUNiTSxRQUFRSSxDQUFDO0NBQ1gsR0FBRyxFQUFFO0NBRUwsTUFBTU0sU0FBU3RCLFlBQVksT0FBT3VCLE1BQWNILE9BQWVDLGFBQXFCO0VBQ2xGLE1BQU1MLElBQUksTUFBTVgsUUFBYyxnQkFBZ0I7R0FBRWtCO0dBQU1IO0dBQU9DO0VBQVMsQ0FBQztFQUN2RWYsYUFBYTtFQUNiTSxRQUFRSSxDQUFDO0NBQ1gsR0FBRyxFQUFFO0NBRUwsTUFBTVEsVUFBVXhCLFlBQVksWUFBWTtFQUN0QyxNQUFNTyxXQUFXLFVBQVU7Q0FDN0IsR0FBRyxFQUFFO0NBRUwsT0FDRSx3QkFBQyxZQUFZLFVBQWI7RUFDRSxPQUFPO0dBQUVJO0dBQU1FO0dBQVVZLFlBQVksQ0FBQyxDQUFDZDtHQUFNUTtHQUFRRztHQUFRRTtFQUFRO0VBRXBFZDtDQUNtQjs7Ozs7QUFFMUI7OztBQUVBLE9BQU8sU0FBU2dCLFVBQXFCOztDQUNuQyxNQUFNQyxNQUFNMUIsV0FBV08sV0FBVztDQUNsQyxJQUFJLENBQUNtQixLQUFLLE1BQU0sSUFBSUMsTUFBTSwwQ0FBMEM7Q0FDcEUsT0FBT0Q7QUFDVCIsIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImFwaUdldCIsImFwaVBvc3QiLCJiZWdpblNlc3Npb24iLCJlbmRTZXNzaW9uIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwiaXNMb2FkZWQiLCJzZXRMb2FkZWQiLCJ0aGVuIiwidSIsImNhdGNoIiwiZmluYWxseSIsInNpZ25JbiIsImVtYWlsIiwicGFzc3dvcmQiLCJzaWduVXAiLCJuYW1lIiwic2lnbk91dCIsImlzU2lnbmVkSW4iLCJ1c2VBdXRoIiwiY3R4IiwiRXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiYXV0aC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0eXBlIHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhcGlHZXQsIGFwaVBvc3QgfSBmcm9tIFwiQC9saWIvYXBpXCI7XG5pbXBvcnQgeyBiZWdpblNlc3Npb24sIGVuZFNlc3Npb24gfSBmcm9tIFwiQC9saWIvc2Vzc2lvblwiO1xuaW1wb3J0IHR5cGUgeyBVc2VyIH0gZnJvbSBcIkAvbGliL3R5cGVzXCI7XG5cbmludGVyZmFjZSBBdXRoU3RhdGUge1xuICB1c2VyOiBVc2VyIHwgbnVsbDtcbiAgaXNMb2FkZWQ6IGJvb2xlYW47XG4gIGlzU2lnbmVkSW46IGJvb2xlYW47XG4gIHNpZ25JbjogKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG4gIHNpZ25VcDogKG5hbWU6IHN0cmluZywgZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcbiAgc2lnbk91dDogKCkgPT4gUHJvbWlzZTx2b2lkPjtcbn1cblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEF1dGhTdGF0ZSB8IG51bGw+KG51bGwpO1xuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbaXNMb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhcGlHZXQ8VXNlciB8IG51bGw+KFwiL2F1dGgvbWVcIilcbiAgICAgIC50aGVuKCh1KSA9PiBzZXRVc2VyKHUpKVxuICAgICAgLmNhdGNoKCgpID0+IHNldFVzZXIobnVsbCkpXG4gICAgICAuZmluYWxseSgoKSA9PiBzZXRMb2FkZWQodHJ1ZSkpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2lnbkluID0gdXNlQ2FsbGJhY2soYXN5bmMgKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB1ID0gYXdhaXQgYXBpUG9zdDxVc2VyPihcIi9hdXRoL2xvZ2luXCIsIHsgZW1haWwsIHBhc3N3b3JkIH0pO1xuICAgIGJlZ2luU2Vzc2lvbigpO1xuICAgIHNldFVzZXIodSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzaWduVXAgPSB1c2VDYWxsYmFjayhhc3luYyAobmFtZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgdSA9IGF3YWl0IGFwaVBvc3Q8VXNlcj4oXCIvYXV0aC9zaWdudXBcIiwgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSk7XG4gICAgYmVnaW5TZXNzaW9uKCk7XG4gICAgc2V0VXNlcih1KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNpZ25PdXQgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZW5kU2Vzc2lvbihcIi9zaWduLWluXCIpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7IHVzZXIsIGlzTG9hZGVkLCBpc1NpZ25lZEluOiAhIXVzZXIsIHNpZ25Jbiwgc2lnblVwLCBzaWduT3V0IH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBdXRoKCk6IEF1dGhTdGF0ZSB7XG4gIGNvbnN0IGN0eCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuICBpZiAoIWN0eCkgdGhyb3cgbmV3IEVycm9yKFwidXNlQXV0aCBtdXN0IGJlIHVzZWQgaW5zaWRlIEF1dGhQcm92aWRlclwiKTtcbiAgcmV0dXJuIGN0eDtcbn1cbiJdLCJmaWxlIjoiL2FwcC9mcm9udGVuZC9zcmMvbGliL2F1dGgudHN4In0=