import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Auth.tsx");const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport8_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=a646c335";
import { Link, Navigate, useNavigate } from "/node_modules/.vite/deps/react-router-dom.js?v=a646c335";
import { toast } from "/node_modules/.vite/deps/sonner.js?v=a646c335";
import { ArrowRight } from "/src/lib/lucide-react.tsx";
import { useAuth } from "/src/lib/auth.tsx";
import { errorText } from "/src/lib/errors.ts";
import { useI18n } from "/src/lib/i18n.tsx";
import { Brand } from "/src/components/Shell.tsx";
var _jsxFileName = "/app/frontend/src/pages/Auth.tsx";
import __vite__cjsImport8_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
var _s = $RefreshSig$();
export default function AuthPage({ mode }) {
	_s();
	const { t } = useI18n();
	const { signIn, signUp, isSignedIn } = useAuth();
	const navigate = useNavigate();
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: ""
	});
	const [busy, setBusy] = useState(false);
	if (isSignedIn) return /* @__PURE__ */ _jsxDEV(Navigate, {
		to: "/dashboard",
		replace: true
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 29,
		columnNumber: 26
	}, this);
	const isUp = mode === "sign-up";
	const submit = async (e) => {
		e.preventDefault();
		setBusy(true);
		try {
			if (isUp) await signUp(form.name, form.email, form.password);
			else await signIn(form.email, form.password);
			navigate("/dashboard");
		} catch (err) {
			toast.error(errorText(err));
		} finally {
			setBusy(false);
		}
	};
	const field = (k, label, type) => /* @__PURE__ */ _jsxDEV("label", {
		className: "field",
		"x-file-name": "Auth",
		"x-line-number": "32",
		"x-column": "4",
		"x-component": "label",
		"x-id": "Auth_32_4",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("span", {
			"x-file-name": "Auth",
			"x-line-number": "32",
			"x-column": "29",
			"x-component": "span",
			"x-id": "Auth_32_29",
			"x-dynamic": "true",
			"x-source-type": "unknown",
			"x-source-var": "label",
			"x-source-editable": "false",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 43,
			columnNumber: 215
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "input-wrap",
			"x-file-name": "Auth",
			"x-line-number": "32",
			"x-column": "49",
			"x-component": "div",
			"x-id": "Auth_32_49",
			"x-dynamic": "false",
			children: /* @__PURE__ */ _jsxDEV("input", {
				type,
				required: true,
				value: form[k],
				minLength: k === "password" ? 6 : undefined,
				onChange: (e) => setForm({
					...form,
					[k]: e.target.value
				}),
				"data-testid": `auth-${k}-input`,
				style: { padding: "12px" },
				"x-file-name": "Auth",
				"x-line-number": "32",
				"x-column": "77",
				"x-component": "input",
				"x-id": "Auth_32_77",
				"x-dynamic": "false"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 43,
				columnNumber: 546
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 43,
			columnNumber: 412
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 43,
		columnNumber: 84
	}, this);
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "auth-page",
		"x-file-name": "Auth",
		"x-line-number": "35",
		"x-column": "4",
		"x-component": "div",
		"x-id": "Auth_35_4",
		"x-dynamic": "false",
		children: /* @__PURE__ */ _jsxDEV("form", {
			className: "auth-card",
			onSubmit: (e) => void submit(e),
			"data-testid": `${mode}-form`,
			"x-file-name": "Auth",
			"x-line-number": "36",
			"x-column": "6",
			"x-component": "form",
			"x-id": "Auth_36_6",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "brand",
					"x-file-name": "Auth",
					"x-line-number": "37",
					"x-column": "8",
					"x-component": "div",
					"x-id": "Auth_37_8",
					"x-dynamic": "false",
					children: /* @__PURE__ */ _jsxDEV(Brand, {
						"x-file-name": "Auth",
						"x-line-number": "37",
						"x-column": "31",
						"x-component": "Brand",
						"x-id": "Auth_37_31",
						"x-dynamic": "true"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 136
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("h1", {
					"x-file-name": "Auth",
					"x-line-number": "38",
					"x-column": "8",
					"x-component": "h1",
					"x-id": "Auth_38_8",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: isUp ? t("nav.signUp") : t("nav.signIn")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("p", {
					className: "auth-sub",
					"x-file-name": "Auth",
					"x-line-number": "39",
					"x-column": "8",
					"x-component": "p",
					"x-id": "Auth_39_8",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: isUp ? t("auth.signUpSub") : t("auth.signInSub")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 9
				}, this),
				isUp && field("name", t("auth.name"), "text"),
				field("email", t("auth.email"), "email"),
				field("password", t("auth.password"), "password"),
				/* @__PURE__ */ _jsxDEV("button", {
					className: "primary-button",
					disabled: busy,
					"data-testid": "auth-submit-button",
					"x-file-name": "Auth",
					"x-line-number": "43",
					"x-column": "8",
					"x-component": "button",
					"x-id": "Auth_43_8",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: [
						isUp ? t("nav.signUp") : t("nav.signIn"),
						" ",
						/* @__PURE__ */ _jsxDEV(ArrowRight, { size: 16 }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 57,
							columnNumber: 293
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 57,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("p", {
					className: "auth-switch",
					"x-file-name": "Auth",
					"x-line-number": "44",
					"x-column": "8",
					"x-component": "p",
					"x-id": "Auth_44_8",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: [
						isUp ? t("auth.haveAccount") : t("auth.noAccount"),
						" ",
						/* @__PURE__ */ _jsxDEV(Link, {
							to: isUp ? "/sign-in" : "/sign-up",
							"data-testid": "auth-switch-link",
							children: isUp ? t("nav.signIn") : t("nav.signUp")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 241
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 50,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 49,
		columnNumber: 10
	}, this);
}
_s(AuthPage, "6sxpCrPnax1zs2ZSMVge+s6Whzg=", false, function() {
	return [
		useI18n,
		useAuth,
		useNavigate
	];
});
_c = AuthPage;
var _c;
$RefreshReg$(_c, "AuthPage");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Auth.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/pages/Auth.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/pages/Auth.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/pages/Auth.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsZ0JBQWdCO0FBQ3pCLFNBQVNDLE1BQU1DLFVBQVVDLG1CQUFtQjtBQUM1QyxTQUFTQyxhQUFhO0FBQ3RCLFNBQVNDLGtCQUFrQjtBQUMzQixTQUFTQyxlQUFlO0FBQ3hCLFNBQVNDLGlCQUFpQjtBQUMxQixTQUFTQyxlQUFlO0FBQ3hCLFNBQVNDLGFBQWE7Ozs7QUFFdEIsZUFBZSxTQUFTQyxTQUFTLEVBQUVDLFFBQXlDOztDQUMxRSxNQUFNLEVBQUVDLE1BQU1KLFFBQVE7Q0FDdEIsTUFBTSxFQUFFSyxRQUFRQyxRQUFRQyxlQUFlVCxRQUFRO0NBQy9DLE1BQU1VLFdBQVdiLFlBQVk7Q0FDN0IsTUFBTSxDQUFDYyxNQUFNQyxXQUFXbEIsU0FBUztFQUFFbUIsTUFBTTtFQUFJQyxPQUFPO0VBQUlDLFVBQVU7Q0FBRyxDQUFDO0NBQ3RFLE1BQU0sQ0FBQ0MsTUFBTUMsV0FBV3ZCLFNBQVMsS0FBSztDQUN0QyxJQUFJZSxZQUFZLE9BQU8sd0JBQUMsVUFBRDtFQUFVLElBQUc7RUFBYTtDQUFPOzs7OztDQUN4RCxNQUFNUyxPQUFPYixTQUFTO0NBQ3RCLE1BQU1jLFNBQVMsT0FBT0MsTUFBdUI7RUFDM0NBLEVBQUVDLGVBQWU7RUFDakJKLFFBQVEsSUFBSTtFQUNaLElBQUk7R0FDRixJQUFJQyxNQUFNLE1BQU1WLE9BQU9HLEtBQUtFLE1BQU1GLEtBQUtHLE9BQU9ILEtBQUtJLFFBQVE7UUFDdEQsTUFBTVIsT0FBT0ksS0FBS0csT0FBT0gsS0FBS0ksUUFBUTtHQUMzQ0wsU0FBUyxZQUFZO0VBQ3ZCLFNBQVNZLEtBQUs7R0FDWnhCLE1BQU15QixNQUFNdEIsVUFBVXFCLEdBQUcsQ0FBQztFQUM1QixVQUFVO0dBQ1JMLFFBQVEsS0FBSztFQUNmO0NBQ0Y7Q0FDQSxNQUFNTyxTQUFTQyxHQUFrQ0MsT0FBZUMsU0FDOUQsd0JBQUMsU0FBRDtFQUFPLFdBQVU7RUFBTztFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7WUFBeEIsQ0FBeUIsd0JBQUMsUUFBRDtHQUFLO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTthQUFFRDtFQUFZOzs7O1lBQUMsd0JBQUMsT0FBRDtHQUFLLFdBQVU7R0FBWTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7YUFBQyx3QkFBQyxTQUFEO0lBQWFDO0lBQU07SUFBUyxPQUFPaEIsS0FBS2M7SUFBSSxXQUFXQSxNQUFNLGFBQWEsSUFBSUc7SUFBVyxXQUFXUixNQUFNUixRQUFRO0tBQUUsR0FBR0Q7TUFBT2MsSUFBSUwsRUFBRVMsT0FBT0M7SUFBTSxDQUFDO0lBQUcsZUFBYSxRQUFRTCxFQUFDO0lBQVUsT0FBTyxFQUFFTSxTQUFTLE9BQU87SUFBRTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7R0FBQTs7Ozs7RUFBUTs7OztVQUFROzs7Ozs7Q0FFM1MsT0FDRSx3QkFBQyxPQUFEO0VBQUssV0FBVTtFQUFXO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtZQUN4Qix3QkFBQyxRQUFEO0dBQU0sV0FBVTtHQUFZLFdBQVdYLE1BQU0sS0FBS0QsT0FBT0MsQ0FBQztHQUFHLGVBQWEsR0FBR2YsS0FBSTtHQUFRO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7YUFBekY7SUFDRSx3QkFBQyxPQUFEO0tBQUssV0FBVTtLQUFPO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtlQUFDLHdCQUFDLE9BQUQ7TUFBTTtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7S0FBQTs7Ozs7SUFBUTs7Ozs7SUFDckMsd0JBQUMsTUFBRDtLQUFHO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7ZUFBRWEsT0FBT1osRUFBRSxZQUFZLElBQUlBLEVBQUUsWUFBWTtJQUFNOzs7OztJQUNsRCx3QkFBQyxLQUFEO0tBQUcsV0FBVTtLQUFVO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7ZUFBRVksT0FBT1osRUFBRSxnQkFBZ0IsSUFBSUEsRUFBRSxnQkFBZ0I7SUFBSzs7Ozs7SUFDNUVZLFFBQVFNLE1BQU0sUUFBUWxCLEVBQUUsV0FBVyxHQUFHLE1BQU07SUFDNUNrQixNQUFNLFNBQVNsQixFQUFFLFlBQVksR0FBRyxPQUFPO0lBQ3ZDa0IsTUFBTSxZQUFZbEIsRUFBRSxlQUFlLEdBQUcsVUFBVTtJQUNqRCx3QkFBQyxVQUFEO0tBQVEsV0FBVTtLQUFpQixVQUFVVTtLQUFNLGVBQVk7S0FBb0I7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtlQUFuRjtNQUFxRkUsT0FBT1osRUFBRSxZQUFZLElBQUlBLEVBQUUsWUFBWTtNQUFFO01BQUMsd0JBQUMsWUFBRCxFQUFZLE1BQU0sR0FBRzs7Ozs7S0FBVzs7Ozs7O0lBQy9KLHdCQUFDLEtBQUQ7S0FBRyxXQUFVO0tBQWE7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtlQUExQjtNQUE0QlksT0FBT1osRUFBRSxrQkFBa0IsSUFBSUEsRUFBRSxnQkFBZ0I7TUFBRTtNQUFDLHdCQUFDLE1BQUQ7T0FBTSxJQUFJWSxPQUFPLGFBQWE7T0FBWSxlQUFZO2lCQUFvQkEsT0FBT1osRUFBRSxZQUFZLElBQUlBLEVBQUUsWUFBWTtNQUFROzs7OztLQUFJOzs7Ozs7R0FDek07Ozs7OztDQUNIOzs7OztBQUVUIiwibmFtZXMiOlsidXNlU3RhdGUiLCJMaW5rIiwiTmF2aWdhdGUiLCJ1c2VOYXZpZ2F0ZSIsInRvYXN0IiwiQXJyb3dSaWdodCIsInVzZUF1dGgiLCJlcnJvclRleHQiLCJ1c2VJMThuIiwiQnJhbmQiLCJBdXRoUGFnZSIsIm1vZGUiLCJ0Iiwic2lnbkluIiwic2lnblVwIiwiaXNTaWduZWRJbiIsIm5hdmlnYXRlIiwiZm9ybSIsInNldEZvcm0iLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImJ1c3kiLCJzZXRCdXN5IiwiaXNVcCIsInN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVyciIsImVycm9yIiwiZmllbGQiLCJrIiwibGFiZWwiLCJ0eXBlIiwidW5kZWZpbmVkIiwidGFyZ2V0IiwidmFsdWUiLCJwYWRkaW5nIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkF1dGgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rLCBOYXZpZ2F0ZSwgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwic29ubmVyXCI7XG5pbXBvcnQgeyBBcnJvd1JpZ2h0IH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XG5pbXBvcnQgeyBlcnJvclRleHQgfSBmcm9tIFwiQC9saWIvZXJyb3JzXCI7XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSBcIkAvbGliL2kxOG5cIjtcbmltcG9ydCB7IEJyYW5kIH0gZnJvbSBcIkAvY29tcG9uZW50cy9TaGVsbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoUGFnZSh7IG1vZGUgfTogeyBtb2RlOiBcInNpZ24taW5cIiB8IFwic2lnbi11cFwiIH0pIHtcbiAgY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG4gIGNvbnN0IHsgc2lnbkluLCBzaWduVXAsIGlzU2lnbmVkSW4gfSA9IHVzZUF1dGgoKTtcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7IG5hbWU6IFwiXCIsIGVtYWlsOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9KTtcbiAgY29uc3QgW2J1c3ksIHNldEJ1c3ldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBpZiAoaXNTaWduZWRJbikgcmV0dXJuIDxOYXZpZ2F0ZSB0bz1cIi9kYXNoYm9hcmRcIiByZXBsYWNlIC8+O1xuICBjb25zdCBpc1VwID0gbW9kZSA9PT0gXCJzaWduLXVwXCI7XG4gIGNvbnN0IHN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0QnVzeSh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgaWYgKGlzVXApIGF3YWl0IHNpZ25VcChmb3JtLm5hbWUsIGZvcm0uZW1haWwsIGZvcm0ucGFzc3dvcmQpO1xuICAgICAgZWxzZSBhd2FpdCBzaWduSW4oZm9ybS5lbWFpbCwgZm9ybS5wYXNzd29yZCk7XG4gICAgICBuYXZpZ2F0ZShcIi9kYXNoYm9hcmRcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0b2FzdC5lcnJvcihlcnJvclRleHQoZXJyKSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldEJ1c3koZmFsc2UpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZmllbGQgPSAoazogXCJuYW1lXCIgfCBcImVtYWlsXCIgfCBcInBhc3N3b3JkXCIsIGxhYmVsOiBzdHJpbmcsIHR5cGU6IHN0cmluZykgPT4gKFxuICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmaWVsZFwiPjxzcGFuPntsYWJlbH08L3NwYW4+PGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwXCI+PGlucHV0IHR5cGU9e3R5cGV9IHJlcXVpcmVkIHZhbHVlPXtmb3JtW2tdfSBtaW5MZW5ndGg9e2sgPT09IFwicGFzc3dvcmRcIiA/IDYgOiB1bmRlZmluZWR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIFtrXTogZS50YXJnZXQudmFsdWUgfSl9IGRhdGEtdGVzdGlkPXtgYXV0aC0ke2t9LWlucHV0YH0gc3R5bGU9e3sgcGFkZGluZzogXCIxMnB4XCIgfX0gLz48L2Rpdj48L2xhYmVsPlxuICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aC1wYWdlXCI+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhdXRoLWNhcmRcIiBvblN1Ym1pdD17KGUpID0+IHZvaWQgc3VibWl0KGUpfSBkYXRhLXRlc3RpZD17YCR7bW9kZX0tZm9ybWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kXCI+PEJyYW5kIC8+PC9kaXY+XG4gICAgICAgIDxoMT57aXNVcCA/IHQoXCJuYXYuc2lnblVwXCIpIDogdChcIm5hdi5zaWduSW5cIil9PC9oMT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXV0aC1zdWJcIj57aXNVcCA/IHQoXCJhdXRoLnNpZ25VcFN1YlwiKSA6IHQoXCJhdXRoLnNpZ25JblN1YlwiKX08L3A+XG4gICAgICAgIHtpc1VwICYmIGZpZWxkKFwibmFtZVwiLCB0KFwiYXV0aC5uYW1lXCIpLCBcInRleHRcIil9XG4gICAgICAgIHtmaWVsZChcImVtYWlsXCIsIHQoXCJhdXRoLmVtYWlsXCIpLCBcImVtYWlsXCIpfVxuICAgICAgICB7ZmllbGQoXCJwYXNzd29yZFwiLCB0KFwiYXV0aC5wYXNzd29yZFwiKSwgXCJwYXNzd29yZFwiKX1cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcmltYXJ5LWJ1dHRvblwiIGRpc2FibGVkPXtidXN5fSBkYXRhLXRlc3RpZD1cImF1dGgtc3VibWl0LWJ1dHRvblwiPntpc1VwID8gdChcIm5hdi5zaWduVXBcIikgOiB0KFwibmF2LnNpZ25JblwiKX0gPEFycm93UmlnaHQgc2l6ZT17MTZ9IC8+PC9idXR0b24+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImF1dGgtc3dpdGNoXCI+e2lzVXAgPyB0KFwiYXV0aC5oYXZlQWNjb3VudFwiKSA6IHQoXCJhdXRoLm5vQWNjb3VudFwiKX0gPExpbmsgdG89e2lzVXAgPyBcIi9zaWduLWluXCIgOiBcIi9zaWduLXVwXCJ9IGRhdGEtdGVzdGlkPVwiYXV0aC1zd2l0Y2gtbGlua1wiPntpc1VwID8gdChcIm5hdi5zaWduSW5cIikgOiB0KFwibmF2LnNpZ25VcFwiKX08L0xpbms+PC9wPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sImZpbGUiOiIvYXBwL2Zyb250ZW5kL3NyYy9wYWdlcy9BdXRoLnRzeCJ9