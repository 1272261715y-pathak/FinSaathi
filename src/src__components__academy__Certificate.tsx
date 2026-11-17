import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/academy/Certificate.tsx");const useEffect = __vite__cjsImport0_react["useEffect"]; const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport11_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport11_react_jsxDevRuntime["Fragment"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=a646c335";
import { Link, useParams } from "/node_modules/.vite/deps/react-router-dom.js?v=a646c335";
import { useQuery } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=a646c335";
import { toast } from "/node_modules/.vite/deps/sonner.js?v=a646c335";
import { Award, BadgeCheck, Download, FileDown, Share2 } from "/src/lib/lucide-react.tsx";
import { jsPDF } from "/node_modules/.vite/deps/jspdf.js?v=a646c335";
import { apiGet, apiPost } from "/src/lib/api.ts";
import { useAuth } from "/src/lib/auth.tsx";
import { useAcademy } from "/src/lib/academy.tsx";
import { errorText } from "/src/lib/errors.ts";
import { useI18n } from "/src/lib/i18n.tsx";
var _jsxFileName = "/app/frontend/src/components/academy/Certificate.tsx";
import __vite__cjsImport11_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
var _s = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$();
const verifyUrl = (id) => `${window.location.origin}/certificate/${id}`;
const HEAD = "'Outfit Variable', sans-serif";
const BODY = "'Plus Jakarta Sans Variable', sans-serif";
function wrap(ctx, text, maxWidth) {
	const words = text.split(" ");
	const lines = [];
	let line = "";
	words.forEach((w) => {
		const test = line ? `${line} ${w}` : w;
		if (ctx.measureText(test).width > maxWidth && line) {
			lines.push(line);
			line = w;
		} else line = test;
	});
	if (line) lines.push(line);
	return lines;
}
export async function drawCertificate(cert, t) {
	await document.fonts?.ready;
	const W = 1600, H = 1130;
	const c = document.createElement("canvas");
	c.width = W;
	c.height = H;
	const x = c.getContext("2d");
	x.fillStyle = "#fbf8f1";
	x.fillRect(0, 0, W, H);
	x.strokeStyle = "#0b1730";
	x.lineWidth = 18;
	x.strokeRect(36, 36, W - 72, H - 72);
	x.strokeStyle = "#c9a227";
	x.lineWidth = 3;
	x.strokeRect(70, 70, W - 140, H - 140);
	x.fillStyle = "#0b1730";
	x.fillRect(70, 70, W - 140, 150);
	x.fillStyle = "#1d4ed8";
	x.beginPath();
	x.roundRect(120, 112, 66, 66, 16);
	x.fill();
	x.fillStyle = "#fff";
	x.font = `700 40px ${HEAD}`;
	x.textAlign = "center";
	x.fillText("₹", 153, 159);
	x.textAlign = "left";
	x.font = `700 46px ${HEAD}`;
	x.fillText("Fin", 206, 162);
	x.fillStyle = "#93c5fd";
	x.fillText("Saathi", 206 + x.measureText("Fin").width, 162);
	x.textAlign = "right";
	x.fillStyle = "#c9a227";
	x.font = `700 20px ${BODY}`;
	x.fillText("FINANCIAL LITERACY · INDIA", W - 120, 152);
	x.textAlign = "center";
	x.fillStyle = "#c9a227";
	x.font = `700 24px ${BODY}`;
	x.fillText(t("cert.title").toUpperCase(), W / 2, 320);
	x.fillStyle = "#0b1730";
	let size = 92;
	x.font = `700 ${size}px ${HEAD}`;
	while (x.measureText(cert.name).width > W - 360 && size > 48) {
		size -= 4;
		x.font = `700 ${size}px ${HEAD}`;
	}
	x.fillText(cert.name, W / 2, 450);
	x.strokeStyle = "#c9a227";
	x.lineWidth = 2;
	x.beginPath();
	x.moveTo(W / 2 - 360, 485);
	x.lineTo(W / 2 + 360, 485);
	x.stroke();
	x.fillStyle = "#475569";
	x.font = `500 30px ${BODY}`;
	wrap(x, t("cert.body"), 1100).forEach((l, i) => x.fillText(l, W / 2, 550 + i * 42));
	x.fillStyle = "#1d4ed8";
	x.font = `700 60px ${HEAD}`;
	x.fillText(t(`path.${cert.path_id}.title`), W / 2, 680);
	const cx = W / 2, cy = 840;
	x.fillStyle = "#c9a227";
	for (let i = 0; i < 24; i += 1) {
		const a = i / 24 * Math.PI * 2;
		x.beginPath();
		x.arc(cx + Math.cos(a) * 78, cy + Math.sin(a) * 78, 12, 0, Math.PI * 2);
		x.fill();
	}
	x.beginPath();
	x.arc(cx, cy, 80, 0, Math.PI * 2);
	x.fill();
	x.fillStyle = "#0b1730";
	x.beginPath();
	x.arc(cx, cy, 62, 0, Math.PI * 2);
	x.fill();
	x.fillStyle = "#c9a227";
	x.font = `700 54px ${HEAD}`;
	x.fillText("✓", cx, cy + 19);
	const issued = new Date(cert.issued_at).toLocaleDateString("en-IN", {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
	x.textAlign = "left";
	x.fillStyle = "#64748b";
	x.font = `600 20px ${BODY}`;
	x.fillText(t("cert.issued").toUpperCase(), 150, 860);
	x.fillStyle = "#0b1730";
	x.font = `700 30px ${HEAD}`;
	x.fillText(issued, 150, 900);
	x.textAlign = "right";
	x.fillStyle = "#64748b";
	x.font = `600 20px ${BODY}`;
	x.fillText(t("cert.id").toUpperCase(), W - 150, 860);
	x.fillStyle = "#0b1730";
	x.font = `700 30px ${HEAD}`;
	x.fillText(cert.id, W - 150, 900);
	x.textAlign = "center";
	x.fillStyle = "#94a3b8";
	x.font = `500 19px ${BODY}`;
	x.fillText(`${t("cert.verify")} ${verifyUrl(cert.id)}`, W / 2, 1010);
	return c;
}
const toBlob = (c) => new Promise((res) => c.toBlob((b) => res(b), "image/png"));
function saveBlob(blob, name) {
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = name;
	a.click();
	setTimeout(() => URL.revokeObjectURL(url), 2e3);
}
export function CertificateActions({ cert, testid = "cert" }) {
	_s();
	const { t } = useI18n();
	const base = `FinSaathi-${cert.path_id}-certificate`;
	const png = async () => saveBlob(await toBlob(await drawCertificate(cert, t)), `${base}.png`);
	const pdf = async () => {
		const canvas = await drawCertificate(cert, t);
		const doc = new jsPDF({
			orientation: "landscape",
			unit: "px",
			format: [1600, 1130],
			compress: true
		});
		doc.addImage(canvas.toDataURL("image/jpeg", .95), "JPEG", 0, 0, 1600, 1130);
		doc.setProperties({
			title: `FinSaathi Certificate ${cert.id}`,
			subject: t(`path.${cert.path_id}.title`),
			author: "FinSaathi"
		});
		doc.save(`${base}.pdf`);
		toast.success(t("cert.downloadPdf"));
	};
	const share = async () => {
		const text = t("cert.shareText", { path: t(`path.${cert.path_id}.title`) });
		try {
			const f = new File([await toBlob(await drawCertificate(cert, t))], `${base}.png`, { type: "image/png" });
			if (navigator.canShare?.({ files: [f] })) await navigator.share({
				files: [f],
				text,
				url: verifyUrl(cert.id)
			});
			else if (navigator.share) await navigator.share({
				text,
				url: verifyUrl(cert.id)
			});
			else {
				await navigator.clipboard.writeText(`${text} ${verifyUrl(cert.id)}`);
				toast.success(t("cert.copied"));
			}
		} catch (e) {
			if (e?.name !== "AbortError") {
				await navigator.clipboard?.writeText(verifyUrl(cert.id)).catch(() => {});
				toast.success(t("cert.copied"));
			}
		}
	};
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "cert-actions",
		"x-file-name": "Certificate",
		"x-line-number": "96",
		"x-column": "4",
		"x-component": "div",
		"x-id": "Certificate_96_4",
		"x-dynamic": "false",
		children: [
			/* @__PURE__ */ _jsxDEV("button", {
				className: "primary-button",
				onClick: () => void pdf(),
				"data-testid": `${testid}-download-pdf`,
				"x-file-name": "Certificate",
				"x-line-number": "97",
				"x-column": "6",
				"x-component": "button",
				"x-id": "Certificate_97_6",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: [
					/* @__PURE__ */ _jsxDEV(FileDown, {
						size: 16,
						"x-file-name": "Certificate",
						"x-line-number": "97",
						"x-column": "107",
						"x-component": "FileDown",
						"x-id": "Certificate_97_107",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 203,
						columnNumber: 279
					}, this),
					" ",
					t("cert.downloadPdf")
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 203,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("button", {
				className: "outline-button",
				onClick: () => void png(),
				"data-testid": `${testid}-download`,
				"x-file-name": "Certificate",
				"x-line-number": "98",
				"x-column": "6",
				"x-component": "button",
				"x-id": "Certificate_98_6",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: [
					/* @__PURE__ */ _jsxDEV(Download, {
						size: 16,
						"x-file-name": "Certificate",
						"x-line-number": "98",
						"x-column": "103",
						"x-component": "Download",
						"x-id": "Certificate_98_103",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 204,
						columnNumber: 275
					}, this),
					" ",
					t("cert.download")
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 204,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("button", {
				className: "outline-button",
				onClick: () => void share(),
				"data-testid": `${testid}-share`,
				"x-file-name": "Certificate",
				"x-line-number": "99",
				"x-column": "6",
				"x-component": "button",
				"x-id": "Certificate_99_6",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: [
					/* @__PURE__ */ _jsxDEV(Share2, {
						size: 16,
						"x-file-name": "Certificate",
						"x-line-number": "99",
						"x-column": "102",
						"x-component": "Share2",
						"x-id": "Certificate_99_102",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 205,
						columnNumber: 274
					}, this),
					" ",
					t("cert.share")
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 205,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 202,
		columnNumber: 10
	}, this);
}
_s(CertificateActions, "i9WSJarzxoSeCDSFKFFQ8fEj8w0=", false, function() {
	return [useI18n];
});
_c = CertificateActions;
export function CertificatePanel({ pathId, percent }) {
	_s2();
	const { t } = useI18n();
	const { user } = useAuth();
	const { me, refresh } = useAcademy();
	const existing = me.certificates?.find((c) => c.path_id === pathId);
	const [name, setName] = useState("");
	const [busy, setBusy] = useState(false);
	useEffect(() => {
		setName(existing?.name || user?.name || "");
	}, [existing, user]);
	if (percent < 100) return /* @__PURE__ */ _jsxDEV("div", {
		className: "cert-panel locked",
		"data-testid": "cert-locked",
		"x-file-name": "Certificate",
		"x-line-number": "112",
		"x-column": "28",
		"x-component": "div",
		"x-id": "Certificate_112_28",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV(Award, {
			size: 22,
			"x-file-name": "Certificate",
			"x-line-number": "112",
			"x-column": "89",
			"x-component": "Award",
			"x-id": "Certificate_112_89",
			"x-dynamic": "false"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 231,
			columnNumber: 212
		}, this), /* @__PURE__ */ _jsxDEV("p", {
			"x-file-name": "Certificate",
			"x-line-number": "112",
			"x-column": "108",
			"x-component": "p",
			"x-id": "Certificate_112_108",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: t("cert.locked")
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 231,
			columnNumber: 355
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 231,
		columnNumber: 29
	}, this);
	const create = async () => {
		setBusy(true);
		try {
			await apiPost(`/academy/paths/${pathId}/certificate`, { name });
			await refresh();
			toast.success(t("cert.earn"));
		} catch (e) {
			toast.error(errorText(e));
		} finally {
			setBusy(false);
		}
	};
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "cert-panel",
		"data-testid": "cert-panel",
		"x-file-name": "Certificate",
		"x-line-number": "120",
		"x-column": "4",
		"x-component": "div",
		"x-id": "Certificate_120_4",
		"x-dynamic": "true",
		"x-source-type": "computed",
		"x-source-editable": "false",
		children: [
			/* @__PURE__ */ _jsxDEV(Award, {
				size: 26,
				"x-file-name": "Certificate",
				"x-line-number": "121",
				"x-column": "6",
				"x-component": "Award",
				"x-id": "Certificate_121_6",
				"x-dynamic": "false"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 247,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("strong", {
				"x-file-name": "Certificate",
				"x-line-number": "121",
				"x-column": "25",
				"x-component": "strong",
				"x-id": "Certificate_121_25",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: t("cert.earn")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 247,
				columnNumber: 148
			}, this),
			/* @__PURE__ */ _jsxDEV("label", {
				className: "field",
				"x-file-name": "Certificate",
				"x-line-number": "122",
				"x-column": "6",
				"x-component": "label",
				"x-id": "Certificate_122_6",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("span", {
					"x-file-name": "Certificate",
					"x-line-number": "122",
					"x-column": "31",
					"x-component": "span",
					"x-id": "Certificate_122_31",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("cert.nameLabel")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 248,
					columnNumber: 154
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "input-wrap",
					"x-file-name": "Certificate",
					"x-line-number": "122",
					"x-column": "65",
					"x-component": "div",
					"x-id": "Certificate_122_65",
					"x-dynamic": "false",
					children: /* @__PURE__ */ _jsxDEV("input", {
						value: name,
						maxLength: 60,
						onChange: (e) => setName(e.target.value),
						"data-testid": "cert-name-input",
						"x-file-name": "Certificate",
						"x-line-number": "122",
						"x-column": "93",
						"x-component": "input",
						"x-id": "Certificate_122_93",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 248,
						columnNumber: 511
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 248,
					columnNumber: 361
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 248,
				columnNumber: 7
			}, this),
			(!existing || existing.name !== name.trim()) && /* @__PURE__ */ _jsxDEV("button", {
				className: "primary-button",
				disabled: busy || name.trim().length < 2,
				onClick: () => void create(),
				"data-testid": "cert-create-button",
				"x-file-name": "Certificate",
				"x-line-number": "123",
				"x-column": "55",
				"x-component": "button",
				"x-id": "Certificate_123_55",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: t("cert.create")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 249,
				columnNumber: 56
			}, this),
			existing && existing.name === name.trim() && /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV("small", {
				"data-testid": "cert-id",
				"x-file-name": "Certificate",
				"x-line-number": "124",
				"x-column": "54",
				"x-component": "small",
				"x-id": "Certificate_124_54",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: [
					/* @__PURE__ */ _jsxDEV("span", {
						"data-ve-dynamic": "true",
						"x-excluded": "true",
						style: { display: "contents" },
						"x-file-name": "Certificate",
						"x-line-number": "124",
						"x-column": "54",
						"x-component": "small",
						"x-id": "Certificate_124_54_expr0",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: t("cert.id")
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 250,
						columnNumber: 258
					}, this),
					": ",
					/* @__PURE__ */ _jsxDEV("span", {
						"data-ve-dynamic": "true",
						"x-excluded": "true",
						style: { display: "contents" },
						"x-file-name": "Certificate",
						"x-line-number": "124",
						"x-column": "54",
						"x-component": "small",
						"x-id": "Certificate_124_54_expr2",
						"x-dynamic": "true",
						"x-source-type": "unknown",
						"x-source-var": "existing",
						"x-source-path": "id",
						"x-source-editable": "false",
						children: existing.id
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 252,
						columnNumber: 215
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 250,
				columnNumber: 55
			}, this), /* @__PURE__ */ _jsxDEV(CertificateActions, {
				cert: existing,
				"x-file-name": "Certificate",
				"x-line-number": "124",
				"x-column": "120",
				"x-component": "CertificateActions",
				"x-id": "Certificate_124_120",
				"x-dynamic": "true"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 254,
				columnNumber: 262
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 250,
				columnNumber: 53
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 246,
		columnNumber: 10
	}, this);
}
_s2(CertificatePanel, "T6prSCVS8wPKfF7IfU0dNmgNxj4=", false, function() {
	return [
		useI18n,
		useAuth,
		useAcademy
	];
});
_c2 = CertificatePanel;
export default function VerifyCertificatePage() {
	_s3();
	const { id } = useParams();
	const { t } = useI18n();
	const { data: cert, isLoading, isError } = useQuery({
		queryKey: ["certificate", id],
		queryFn: () => apiGet(`/academy/certificates/${id}`),
		retry: false
	});
	if (isLoading) return /* @__PURE__ */ _jsxDEV("div", {
		className: "section",
		"x-file-name": "Certificate",
		"x-line-number": "133",
		"x-column": "24",
		"x-component": "div",
		"x-id": "Certificate_133_24",
		"x-dynamic": "false",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "academy-loading",
			"x-file-name": "Certificate",
			"x-line-number": "133",
			"x-column": "49",
			"x-component": "div",
			"x-id": "Certificate_133_49",
			"x-dynamic": "false"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 273,
			columnNumber: 172
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 273,
		columnNumber: 25
	}, this);
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "section verify-page",
		"data-testid": "verify-page",
		"x-file-name": "Certificate",
		"x-line-number": "135",
		"x-column": "4",
		"x-component": "div",
		"x-id": "Certificate_135_4",
		"x-dynamic": "true",
		"x-source-type": "computed",
		"x-source-editable": "false",
		children: cert && !isError ? /* @__PURE__ */ _jsxDEV("div", {
			className: "verify-card",
			"x-file-name": "Certificate",
			"x-line-number": "137",
			"x-column": "8",
			"x-component": "div",
			"x-id": "Certificate_137_8",
			"x-dynamic": "false",
			children: [
				/* @__PURE__ */ _jsxDEV(BadgeCheck, {
					size: 40,
					"x-file-name": "Certificate",
					"x-line-number": "137",
					"x-column": "37",
					"x-component": "BadgeCheck",
					"x-id": "Certificate_137_37",
					"x-dynamic": "false"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 275,
					columnNumber: 176
				}, this),
				/* @__PURE__ */ _jsxDEV("h1", {
					"data-testid": "verify-valid",
					"x-file-name": "Certificate",
					"x-line-number": "137",
					"x-column": "61",
					"x-component": "h1",
					"x-id": "Certificate_137_61",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t("cert.valid")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 275,
					columnNumber: 329
				}, this),
				/* @__PURE__ */ _jsxDEV("p", {
					"x-file-name": "Certificate",
					"x-line-number": "137",
					"x-column": "114",
					"x-component": "p",
					"x-id": "Certificate_137_114",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: [
						/* @__PURE__ */ _jsxDEV("strong", {
							"data-testid": "verify-name",
							"x-file-name": "Certificate",
							"x-line-number": "137",
							"x-column": "117",
							"x-component": "strong",
							"x-id": "Certificate_137_117",
							"x-dynamic": "true",
							"x-source-type": "unknown",
							"x-source-var": "cert",
							"x-source-path": "name",
							"x-source-editable": "false",
							children: cert.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 275,
							columnNumber: 728
						}, this),
						" ",
						t("cert.body")
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 275,
					columnNumber: 553
				}, this),
				/* @__PURE__ */ _jsxDEV("h2", {
					"x-file-name": "Certificate",
					"x-line-number": "137",
					"x-column": "192",
					"x-component": "h2",
					"x-id": "Certificate_137_192",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: t(`path.${cert.path_id}.title`)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 275,
					columnNumber: 1020
				}, this),
				/* @__PURE__ */ _jsxDEV("small", {
					"x-file-name": "Certificate",
					"x-line-number": "137",
					"x-column": "234",
					"x-component": "small",
					"x-id": "Certificate_137_234",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: [
						/* @__PURE__ */ _jsxDEV("span", {
							"data-ve-dynamic": "true",
							"x-excluded": "true",
							style: { display: "contents" },
							"x-file-name": "Certificate",
							"x-line-number": "137",
							"x-column": "234",
							"x-component": "small",
							"x-id": "Certificate_137_234_expr0",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("cert.issued")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 275,
							columnNumber: 1418
						}, this),
						" ",
						/* @__PURE__ */ _jsxDEV("span", {
							"data-ve-dynamic": "true",
							"x-excluded": "true",
							style: { display: "contents" },
							"x-file-name": "Certificate",
							"x-line-number": "137",
							"x-column": "234",
							"x-component": "small",
							"x-id": "Certificate_137_234_expr2",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: new Date(cert.issued_at).toLocaleDateString("en-IN", {
								day: "numeric",
								month: "long",
								year: "numeric"
							})
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 277,
							columnNumber: 220
						}, this),
						" · ",
						/* @__PURE__ */ _jsxDEV("span", {
							"data-ve-dynamic": "true",
							"x-excluded": "true",
							style: { display: "contents" },
							"x-file-name": "Certificate",
							"x-line-number": "137",
							"x-column": "234",
							"x-component": "small",
							"x-id": "Certificate_137_234_expr4",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: t("cert.id")
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 283,
							columnNumber: 24
						}, this),
						": ",
						/* @__PURE__ */ _jsxDEV("span", {
							"data-ve-dynamic": "true",
							"x-excluded": "true",
							style: { display: "contents" },
							"x-file-name": "Certificate",
							"x-line-number": "137",
							"x-column": "234",
							"x-component": "small",
							"x-id": "Certificate_137_234_expr6",
							"x-dynamic": "true",
							"x-source-type": "unknown",
							"x-source-var": "cert",
							"x-source-path": "id",
							"x-source-editable": "false",
							children: cert.id
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 285,
							columnNumber: 217
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 275,
					columnNumber: 1235
				}, this),
				/* @__PURE__ */ _jsxDEV(CertificateActions, {
					cert,
					testid: "verify-cert",
					"x-file-name": "Certificate",
					"x-line-number": "137",
					"x-column": "402",
					"x-component": "CertificateActions",
					"x-id": "Certificate_137_402",
					"x-dynamic": "true"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 287,
					columnNumber: 256
				}, this),
				/* @__PURE__ */ _jsxDEV(Link, {
					className: "text-link",
					to: "/academy",
					style: { marginTop: 10 },
					children: t("nav.academy")
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 287,
					columnNumber: 449
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 275,
			columnNumber: 27
		}, this) : /* @__PURE__ */ _jsxDEV("div", {
			className: "verify-card invalid",
			"x-file-name": "Certificate",
			"x-line-number": "139",
			"x-column": "8",
			"x-component": "div",
			"x-id": "Certificate_139_8",
			"x-dynamic": "false",
			children: [/* @__PURE__ */ _jsxDEV("h1", {
				"data-testid": "verify-invalid",
				"x-file-name": "Certificate",
				"x-line-number": "139",
				"x-column": "45",
				"x-component": "h1",
				"x-id": "Certificate_139_45",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: t("cert.invalid")
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 289,
				columnNumber: 201
			}, this), /* @__PURE__ */ _jsxDEV(Link, {
				className: "text-link",
				to: "/",
				children: "FinSaathi"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 289,
				columnNumber: 429
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 289,
			columnNumber: 44
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 274,
		columnNumber: 10
	}, this);
}
_s3(VerifyCertificatePage, "GJLMqghbwEDvPYT8UqWmeM3olV8=", false, function() {
	return [
		useParams,
		useI18n,
		useQuery
	];
});
_c3 = VerifyCertificatePage;
var _c, _c2, _c3;
$RefreshReg$(_c, "CertificateActions");
$RefreshReg$(_c2, "CertificatePanel");
$RefreshReg$(_c3, "VerifyCertificatePage");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/academy/Certificate.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/components/academy/Certificate.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/components/academy/Certificate.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/components/academy/Certificate.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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LFdBQVU7S0FBWSxJQUFHO0tBQVcsT0FBTyxFQUFFc0gsV0FBVyxHQUFHO2VBQUlySCxFQUFFLGFBQWE7SUFBUTs7Ozs7R0FBTTs7Ozs7YUFFbmlCLHdCQUFDLE9BQUQ7R0FBSyxXQUFVO0dBQXFCO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTthQUFwQyxDQUFxQyx3QkFBQyxNQUFEO0lBQUksZUFBWTtJQUFnQjtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO2NBQUVBLEVBQUUsY0FBYztHQUFNOzs7O2FBQUMsd0JBQUMsTUFBRDtJQUFNLFdBQVU7SUFBWSxJQUFHO2NBQUk7R0FBZTs7OztXQUFNOzs7Ozs7Q0FFcko7Ozs7O0FBRVQiLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJ1c2VQYXJhbXMiLCJ1c2VRdWVyeSIsInRvYXN0IiwiQXdhcmQiLCJCYWRnZUNoZWNrIiwiRG93bmxvYWQiLCJGaWxlRG93biIsIlNoYXJlMiIsImpzUERGIiwiYXBpR2V0IiwiYXBpUG9zdCIsInVzZUF1dGgiLCJ1c2VBY2FkZW15IiwiZXJyb3JUZXh0IiwidXNlSTE4biIsInZlcmlmeVVybCIsImlkIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJIRUFEIiwiQk9EWSIsIndyYXAiLCJjdHgiLCJ0ZXh0IiwibWF4V2lkdGgiLCJ3b3JkcyIsInNwbGl0IiwibGluZXMiLCJsaW5lIiwiZm9yRWFjaCIsInciLCJ0ZXN0IiwibWVhc3VyZVRleHQiLCJ3aWR0aCIsInB1c2giLCJkcmF3Q2VydGlmaWNhdGUiLCJjZXJ0IiwidCIsImRvY3VtZW50IiwiZm9udHMiLCJyZWFkeSIsIlciLCJIIiwiYyIsImNyZWF0ZUVsZW1lbnQiLCJoZWlnaHQiLCJ4IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2VSZWN0IiwiYmVnaW5QYXRoIiwicm91bmRSZWN0IiwiZmlsbCIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsInRvVXBwZXJDYXNlIiwic2l6ZSIsIm5hbWUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJsIiwiaSIsInBhdGhfaWQiLCJjeCIsImN5IiwiYSIsIk1hdGgiLCJQSSIsImFyYyIsImNvcyIsInNpbiIsImlzc3VlZCIsIkRhdGUiLCJpc3N1ZWRfYXQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInllYXIiLCJ0b0Jsb2IiLCJQcm9taXNlIiwicmVzIiwiYiIsInNhdmVCbG9iIiwiYmxvYiIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImhyZWYiLCJkb3dubG9hZCIsImNsaWNrIiwic2V0VGltZW91dCIsInJldm9rZU9iamVjdFVSTCIsIkNlcnRpZmljYXRlQWN0aW9ucyIsInRlc3RpZCIsImJhc2UiLCJwbmciLCJwZGYiLCJjYW52YXMiLCJkb2MiLCJvcmllbnRhdGlvbiIsInVuaXQiLCJmb3JtYXQiLCJjb21wcmVzcyIsImFkZEltYWdlIiwidG9EYXRhVVJMIiwic2V0UHJvcGVydGllcyIsInRpdGxlIiwic3ViamVjdCIsImF1dGhvciIsInNhdmUiLCJzdWNjZXNzIiwic2hhcmUiLCJwYXRoIiwiZiIsIkZpbGUiLCJ0eXBlIiwibmF2aWdhdG9yIiwiY2FuU2hhcmUiLCJmaWxlcyIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImUiLCJjYXRjaCIsIkNlcnRpZmljYXRlUGFuZWwiLCJwYXRoSWQiLCJwZXJjZW50IiwidXNlciIsIm1lIiwicmVmcmVzaCIsImV4aXN0aW5nIiwiY2VydGlmaWNhdGVzIiwiZmluZCIsInNldE5hbWUiLCJidXN5Iiwic2V0QnVzeSIsImNyZWF0ZSIsImVycm9yIiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIiwibGVuZ3RoIiwiZGlzcGxheSIsIlZlcmlmeUNlcnRpZmljYXRlUGFnZSIsImRhdGEiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwicXVlcnlLZXkiLCJxdWVyeUZuIiwicmV0cnkiLCJtYXJnaW5Ub3AiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQ2VydGlmaWNhdGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmssIHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInNvbm5lclwiO1xuaW1wb3J0IHsgQXdhcmQsIEJhZGdlQ2hlY2ssIERvd25sb2FkLCBGaWxlRG93biwgU2hhcmUyIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsganNQREYgfSBmcm9tIFwianNwZGZcIjtcbmltcG9ydCB7IGFwaUdldCwgYXBpUG9zdCB9IGZyb20gXCJAL2xpYi9hcGlcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xuaW1wb3J0IHsgdXNlQWNhZGVteSB9IGZyb20gXCJAL2xpYi9hY2FkZW15XCI7XG5pbXBvcnQgeyBlcnJvclRleHQgfSBmcm9tIFwiQC9saWIvZXJyb3JzXCI7XG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSBcIkAvbGliL2kxOG5cIjtcbmltcG9ydCB0eXBlIHsgQ2VydGlmaWNhdGUgfSBmcm9tIFwiQC9saWIvdHlwZXNcIjtcblxudHlwZSBUID0gKGs6IHN0cmluZywgdj86IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlcj4pID0+IHN0cmluZztcbmNvbnN0IHZlcmlmeVVybCA9IChpZDogc3RyaW5nKSA9PiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9jZXJ0aWZpY2F0ZS8ke2lkfWA7XG5jb25zdCBIRUFEID0gXCInT3V0Zml0IFZhcmlhYmxlJywgc2Fucy1zZXJpZlwiO1xuY29uc3QgQk9EWSA9IFwiJ1BsdXMgSmFrYXJ0YSBTYW5zIFZhcmlhYmxlJywgc2Fucy1zZXJpZlwiO1xuXG5mdW5jdGlvbiB3cmFwKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB0ZXh0OiBzdHJpbmcsIG1heFdpZHRoOiBudW1iZXIpIHtcbiAgY29uc3Qgd29yZHMgPSB0ZXh0LnNwbGl0KFwiIFwiKTtcbiAgY29uc3QgbGluZXM6IHN0cmluZ1tdID0gW107XG4gIGxldCBsaW5lID0gXCJcIjtcbiAgd29yZHMuZm9yRWFjaCgodykgPT4geyBjb25zdCB0ZXN0ID0gbGluZSA/IGAke2xpbmV9ICR7d31gIDogdzsgaWYgKGN0eC5tZWFzdXJlVGV4dCh0ZXN0KS53aWR0aCA+IG1heFdpZHRoICYmIGxpbmUpIHsgbGluZXMucHVzaChsaW5lKTsgbGluZSA9IHc7IH0gZWxzZSBsaW5lID0gdGVzdDsgfSk7XG4gIGlmIChsaW5lKSBsaW5lcy5wdXNoKGxpbmUpO1xuICByZXR1cm4gbGluZXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkcmF3Q2VydGlmaWNhdGUoY2VydDogQ2VydGlmaWNhdGUsIHQ6IFQpOiBQcm9taXNlPEhUTUxDYW52YXNFbGVtZW50PiB7XG4gIGF3YWl0IGRvY3VtZW50LmZvbnRzPy5yZWFkeTtcbiAgY29uc3QgVyA9IDE2MDAsIEggPSAxMTMwO1xuICBjb25zdCBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgYy53aWR0aCA9IFc7IGMuaGVpZ2h0ID0gSDtcbiAgY29uc3QgeCA9IGMuZ2V0Q29udGV4dChcIjJkXCIpITtcbiAgeC5maWxsU3R5bGUgPSBcIiNmYmY4ZjFcIjsgeC5maWxsUmVjdCgwLCAwLCBXLCBIKTtcbiAgeC5zdHJva2VTdHlsZSA9IFwiIzBiMTczMFwiOyB4LmxpbmVXaWR0aCA9IDE4OyB4LnN0cm9rZVJlY3QoMzYsIDM2LCBXIC0gNzIsIEggLSA3Mik7XG4gIHguc3Ryb2tlU3R5bGUgPSBcIiNjOWEyMjdcIjsgeC5saW5lV2lkdGggPSAzOyB4LnN0cm9rZVJlY3QoNzAsIDcwLCBXIC0gMTQwLCBIIC0gMTQwKTtcbiAgeC5maWxsU3R5bGUgPSBcIiMwYjE3MzBcIjsgeC5maWxsUmVjdCg3MCwgNzAsIFcgLSAxNDAsIDE1MCk7XG4gIHguZmlsbFN0eWxlID0gXCIjMWQ0ZWQ4XCI7IHguYmVnaW5QYXRoKCk7IHgucm91bmRSZWN0KDEyMCwgMTEyLCA2NiwgNjYsIDE2KTsgeC5maWxsKCk7XG4gIHguZmlsbFN0eWxlID0gXCIjZmZmXCI7IHguZm9udCA9IGA3MDAgNDBweCAke0hFQUR9YDsgeC50ZXh0QWxpZ24gPSBcImNlbnRlclwiOyB4LmZpbGxUZXh0KFwi4oK5XCIsIDE1MywgMTU5KTtcbiAgeC50ZXh0QWxpZ24gPSBcImxlZnRcIjsgeC5mb250ID0gYDcwMCA0NnB4ICR7SEVBRH1gOyB4LmZpbGxUZXh0KFwiRmluXCIsIDIwNiwgMTYyKTsgeC5maWxsU3R5bGUgPSBcIiM5M2M1ZmRcIjsgeC5maWxsVGV4dChcIlNhYXRoaVwiLCAyMDYgKyB4Lm1lYXN1cmVUZXh0KFwiRmluXCIpLndpZHRoLCAxNjIpO1xuICB4LnRleHRBbGlnbiA9IFwicmlnaHRcIjsgeC5maWxsU3R5bGUgPSBcIiNjOWEyMjdcIjsgeC5mb250ID0gYDcwMCAyMHB4ICR7Qk9EWX1gOyB4LmZpbGxUZXh0KFwiRklOQU5DSUFMIExJVEVSQUNZIMK3IElORElBXCIsIFcgLSAxMjAsIDE1Mik7XG4gIHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjsgeC5maWxsU3R5bGUgPSBcIiNjOWEyMjdcIjsgeC5mb250ID0gYDcwMCAyNHB4ICR7Qk9EWX1gOyB4LmZpbGxUZXh0KHQoXCJjZXJ0LnRpdGxlXCIpLnRvVXBwZXJDYXNlKCksIFcgLyAyLCAzMjApO1xuICB4LmZpbGxTdHlsZSA9IFwiIzBiMTczMFwiO1xuICBsZXQgc2l6ZSA9IDkyOyB4LmZvbnQgPSBgNzAwICR7c2l6ZX1weCAke0hFQUR9YDtcbiAgd2hpbGUgKHgubWVhc3VyZVRleHQoY2VydC5uYW1lKS53aWR0aCA+IFcgLSAzNjAgJiYgc2l6ZSA+IDQ4KSB7IHNpemUgLT0gNDsgeC5mb250ID0gYDcwMCAke3NpemV9cHggJHtIRUFEfWA7IH1cbiAgeC5maWxsVGV4dChjZXJ0Lm5hbWUsIFcgLyAyLCA0NTApO1xuICB4LnN0cm9rZVN0eWxlID0gXCIjYzlhMjI3XCI7IHgubGluZVdpZHRoID0gMjsgeC5iZWdpblBhdGgoKTsgeC5tb3ZlVG8oVyAvIDIgLSAzNjAsIDQ4NSk7IHgubGluZVRvKFcgLyAyICsgMzYwLCA0ODUpOyB4LnN0cm9rZSgpO1xuICB4LmZpbGxTdHlsZSA9IFwiIzQ3NTU2OVwiOyB4LmZvbnQgPSBgNTAwIDMwcHggJHtCT0RZfWA7IHdyYXAoeCwgdChcImNlcnQuYm9keVwiKSwgMTEwMCkuZm9yRWFjaCgobCwgaSkgPT4geC5maWxsVGV4dChsLCBXIC8gMiwgNTUwICsgaSAqIDQyKSk7XG4gIHguZmlsbFN0eWxlID0gXCIjMWQ0ZWQ4XCI7IHguZm9udCA9IGA3MDAgNjBweCAke0hFQUR9YDsgeC5maWxsVGV4dCh0KGBwYXRoLiR7Y2VydC5wYXRoX2lkfS50aXRsZWApLCBXIC8gMiwgNjgwKTtcbiAgY29uc3QgY3ggPSBXIC8gMiwgY3kgPSA4NDA7XG4gIHguZmlsbFN0eWxlID0gXCIjYzlhMjI3XCI7IGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkgKz0gMSkgeyBjb25zdCBhID0gKGkgLyAyNCkgKiBNYXRoLlBJICogMjsgeC5iZWdpblBhdGgoKTsgeC5hcmMoY3ggKyBNYXRoLmNvcyhhKSAqIDc4LCBjeSArIE1hdGguc2luKGEpICogNzgsIDEyLCAwLCBNYXRoLlBJICogMik7IHguZmlsbCgpOyB9XG4gIHguYmVnaW5QYXRoKCk7IHguYXJjKGN4LCBjeSwgODAsIDAsIE1hdGguUEkgKiAyKTsgeC5maWxsKCk7XG4gIHguZmlsbFN0eWxlID0gXCIjMGIxNzMwXCI7IHguYmVnaW5QYXRoKCk7IHguYXJjKGN4LCBjeSwgNjIsIDAsIE1hdGguUEkgKiAyKTsgeC5maWxsKCk7XG4gIHguZmlsbFN0eWxlID0gXCIjYzlhMjI3XCI7IHguZm9udCA9IGA3MDAgNTRweCAke0hFQUR9YDsgeC5maWxsVGV4dChcIuKck1wiLCBjeCwgY3kgKyAxOSk7XG4gIGNvbnN0IGlzc3VlZCA9IG5ldyBEYXRlKGNlcnQuaXNzdWVkX2F0KS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1JTlwiLCB7IGRheTogXCJudW1lcmljXCIsIG1vbnRoOiBcImxvbmdcIiwgeWVhcjogXCJudW1lcmljXCIgfSk7XG4gIHgudGV4dEFsaWduID0gXCJsZWZ0XCI7IHguZmlsbFN0eWxlID0gXCIjNjQ3NDhiXCI7IHguZm9udCA9IGA2MDAgMjBweCAke0JPRFl9YDsgeC5maWxsVGV4dCh0KFwiY2VydC5pc3N1ZWRcIikudG9VcHBlckNhc2UoKSwgMTUwLCA4NjApO1xuICB4LmZpbGxTdHlsZSA9IFwiIzBiMTczMFwiOyB4LmZvbnQgPSBgNzAwIDMwcHggJHtIRUFEfWA7IHguZmlsbFRleHQoaXNzdWVkLCAxNTAsIDkwMCk7XG4gIHgudGV4dEFsaWduID0gXCJyaWdodFwiOyB4LmZpbGxTdHlsZSA9IFwiIzY0NzQ4YlwiOyB4LmZvbnQgPSBgNjAwIDIwcHggJHtCT0RZfWA7IHguZmlsbFRleHQodChcImNlcnQuaWRcIikudG9VcHBlckNhc2UoKSwgVyAtIDE1MCwgODYwKTtcbiAgeC5maWxsU3R5bGUgPSBcIiMwYjE3MzBcIjsgeC5mb250ID0gYDcwMCAzMHB4ICR7SEVBRH1gOyB4LmZpbGxUZXh0KGNlcnQuaWQsIFcgLSAxNTAsIDkwMCk7XG4gIHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjsgeC5maWxsU3R5bGUgPSBcIiM5NGEzYjhcIjsgeC5mb250ID0gYDUwMCAxOXB4ICR7Qk9EWX1gOyB4LmZpbGxUZXh0KGAke3QoXCJjZXJ0LnZlcmlmeVwiKX0gJHt2ZXJpZnlVcmwoY2VydC5pZCl9YCwgVyAvIDIsIDEwMTApO1xuICByZXR1cm4gYztcbn1cblxuY29uc3QgdG9CbG9iID0gKGM6IEhUTUxDYW52YXNFbGVtZW50KSA9PiBuZXcgUHJvbWlzZTxCbG9iPigocmVzKSA9PiBjLnRvQmxvYigoYikgPT4gcmVzKGIhKSwgXCJpbWFnZS9wbmdcIikpO1xuZnVuY3Rpb24gc2F2ZUJsb2IoYmxvYjogQmxvYiwgbmFtZTogc3RyaW5nKSB7XG4gIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgYS5ocmVmID0gdXJsOyBhLmRvd25sb2FkID0gbmFtZTsgYS5jbGljaygpO1xuICBzZXRUaW1lb3V0KCgpID0+IFVSTC5yZXZva2VPYmplY3RVUkwodXJsKSwgMjAwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDZXJ0aWZpY2F0ZUFjdGlvbnMoeyBjZXJ0LCB0ZXN0aWQgPSBcImNlcnRcIiB9OiB7IGNlcnQ6IENlcnRpZmljYXRlOyB0ZXN0aWQ/OiBzdHJpbmcgfSkge1xuICBjb25zdCB7IHQgfSA9IHVzZUkxOG4oKTtcbiAgY29uc3QgYmFzZSA9IGBGaW5TYWF0aGktJHtjZXJ0LnBhdGhfaWR9LWNlcnRpZmljYXRlYDtcbiAgY29uc3QgcG5nID0gYXN5bmMgKCkgPT4gc2F2ZUJsb2IoYXdhaXQgdG9CbG9iKGF3YWl0IGRyYXdDZXJ0aWZpY2F0ZShjZXJ0LCB0KSksIGAke2Jhc2V9LnBuZ2ApO1xuICBjb25zdCBwZGYgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gYXdhaXQgZHJhd0NlcnRpZmljYXRlKGNlcnQsIHQpO1xuICAgIGNvbnN0IGRvYyA9IG5ldyBqc1BERih7IG9yaWVudGF0aW9uOiBcImxhbmRzY2FwZVwiLCB1bml0OiBcInB4XCIsIGZvcm1hdDogWzE2MDAsIDExMzBdLCBjb21wcmVzczogdHJ1ZSB9KTtcbiAgICBkb2MuYWRkSW1hZ2UoY2FudmFzLnRvRGF0YVVSTChcImltYWdlL2pwZWdcIiwgMC45NSksIFwiSlBFR1wiLCAwLCAwLCAxNjAwLCAxMTMwKTtcbiAgICBkb2Muc2V0UHJvcGVydGllcyh7IHRpdGxlOiBgRmluU2FhdGhpIENlcnRpZmljYXRlICR7Y2VydC5pZH1gLCBzdWJqZWN0OiB0KGBwYXRoLiR7Y2VydC5wYXRoX2lkfS50aXRsZWApLCBhdXRob3I6IFwiRmluU2FhdGhpXCIgfSk7XG4gICAgZG9jLnNhdmUoYCR7YmFzZX0ucGRmYCk7XG4gICAgdG9hc3Quc3VjY2Vzcyh0KFwiY2VydC5kb3dubG9hZFBkZlwiKSk7XG4gIH07XG4gIGNvbnN0IHNoYXJlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHRleHQgPSB0KFwiY2VydC5zaGFyZVRleHRcIiwgeyBwYXRoOiB0KGBwYXRoLiR7Y2VydC5wYXRoX2lkfS50aXRsZWApIH0pO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmID0gbmV3IEZpbGUoW2F3YWl0IHRvQmxvYihhd2FpdCBkcmF3Q2VydGlmaWNhdGUoY2VydCwgdCkpXSwgYCR7YmFzZX0ucG5nYCwgeyB0eXBlOiBcImltYWdlL3BuZ1wiIH0pO1xuICAgICAgaWYgKG5hdmlnYXRvci5jYW5TaGFyZT8uKHsgZmlsZXM6IFtmXSB9KSkgYXdhaXQgbmF2aWdhdG9yLnNoYXJlKHsgZmlsZXM6IFtmXSwgdGV4dCwgdXJsOiB2ZXJpZnlVcmwoY2VydC5pZCkgfSk7XG4gICAgICBlbHNlIGlmIChuYXZpZ2F0b3Iuc2hhcmUpIGF3YWl0IG5hdmlnYXRvci5zaGFyZSh7IHRleHQsIHVybDogdmVyaWZ5VXJsKGNlcnQuaWQpIH0pO1xuICAgICAgZWxzZSB7IGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGAke3RleHR9ICR7dmVyaWZ5VXJsKGNlcnQuaWQpfWApOyB0b2FzdC5zdWNjZXNzKHQoXCJjZXJ0LmNvcGllZFwiKSk7IH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoKGUgYXMgeyBuYW1lPzogc3RyaW5nIH0pPy5uYW1lICE9PSBcIkFib3J0RXJyb3JcIikgeyBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkPy53cml0ZVRleHQodmVyaWZ5VXJsKGNlcnQuaWQpKS5jYXRjaCgoKSA9PiB7fSk7IHRvYXN0LnN1Y2Nlc3ModChcImNlcnQuY29waWVkXCIpKTsgfVxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNlcnQtYWN0aW9uc1wiPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcmltYXJ5LWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHZvaWQgcGRmKCl9IGRhdGEtdGVzdGlkPXtgJHt0ZXN0aWR9LWRvd25sb2FkLXBkZmB9PjxGaWxlRG93biBzaXplPXsxNn0gLz4ge3QoXCJjZXJ0LmRvd25sb2FkUGRmXCIpfTwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJvdXRsaW5lLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHZvaWQgcG5nKCl9IGRhdGEtdGVzdGlkPXtgJHt0ZXN0aWR9LWRvd25sb2FkYH0+PERvd25sb2FkIHNpemU9ezE2fSAvPiB7dChcImNlcnQuZG93bmxvYWRcIil9PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm91dGxpbmUtYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdm9pZCBzaGFyZSgpfSBkYXRhLXRlc3RpZD17YCR7dGVzdGlkfS1zaGFyZWB9PjxTaGFyZTIgc2l6ZT17MTZ9IC8+IHt0KFwiY2VydC5zaGFyZVwiKX08L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENlcnRpZmljYXRlUGFuZWwoeyBwYXRoSWQsIHBlcmNlbnQgfTogeyBwYXRoSWQ6IHN0cmluZzsgcGVyY2VudDogbnVtYmVyIH0pIHtcbiAgY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB7IG1lLCByZWZyZXNoIH0gPSB1c2VBY2FkZW15KCk7XG4gIGNvbnN0IGV4aXN0aW5nID0gbWUuY2VydGlmaWNhdGVzPy5maW5kKChjKSA9PiBjLnBhdGhfaWQgPT09IHBhdGhJZCk7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYnVzeSwgc2V0QnVzeV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7IHNldE5hbWUoZXhpc3Rpbmc/Lm5hbWUgfHwgdXNlcj8ubmFtZSB8fCBcIlwiKTsgfSwgW2V4aXN0aW5nLCB1c2VyXSk7XG4gIGlmIChwZXJjZW50IDwgMTAwKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjZXJ0LXBhbmVsIGxvY2tlZFwiIGRhdGEtdGVzdGlkPVwiY2VydC1sb2NrZWRcIj48QXdhcmQgc2l6ZT17MjJ9IC8+PHA+e3QoXCJjZXJ0LmxvY2tlZFwiKX08L3A+PC9kaXY+O1xuICBjb25zdCBjcmVhdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0QnVzeSh0cnVlKTtcbiAgICB0cnkgeyBhd2FpdCBhcGlQb3N0KGAvYWNhZGVteS9wYXRocy8ke3BhdGhJZH0vY2VydGlmaWNhdGVgLCB7IG5hbWUgfSk7IGF3YWl0IHJlZnJlc2goKTsgdG9hc3Quc3VjY2Vzcyh0KFwiY2VydC5lYXJuXCIpKTsgfVxuICAgIGNhdGNoIChlKSB7IHRvYXN0LmVycm9yKGVycm9yVGV4dChlKSk7IH1cbiAgICBmaW5hbGx5IHsgc2V0QnVzeShmYWxzZSk7IH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNlcnQtcGFuZWxcIiBkYXRhLXRlc3RpZD1cImNlcnQtcGFuZWxcIj5cbiAgICAgIDxBd2FyZCBzaXplPXsyNn0gLz48c3Ryb25nPnt0KFwiY2VydC5lYXJuXCIpfTwvc3Ryb25nPlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZpZWxkXCI+PHNwYW4+e3QoXCJjZXJ0Lm5hbWVMYWJlbFwiKX08L3NwYW4+PGRpdiBjbGFzc05hbWU9XCJpbnB1dC13cmFwXCI+PGlucHV0IHZhbHVlPXtuYW1lfSBtYXhMZW5ndGg9ezYwfSBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSBkYXRhLXRlc3RpZD1cImNlcnQtbmFtZS1pbnB1dFwiIC8+PC9kaXY+PC9sYWJlbD5cbiAgICAgIHsoIWV4aXN0aW5nIHx8IGV4aXN0aW5nLm5hbWUgIT09IG5hbWUudHJpbSgpKSAmJiA8YnV0dG9uIGNsYXNzTmFtZT1cInByaW1hcnktYnV0dG9uXCIgZGlzYWJsZWQ9e2J1c3kgfHwgbmFtZS50cmltKCkubGVuZ3RoIDwgMn0gb25DbGljaz17KCkgPT4gdm9pZCBjcmVhdGUoKX0gZGF0YS10ZXN0aWQ9XCJjZXJ0LWNyZWF0ZS1idXR0b25cIj57dChcImNlcnQuY3JlYXRlXCIpfTwvYnV0dG9uPn1cbiAgICAgIHtleGlzdGluZyAmJiBleGlzdGluZy5uYW1lID09PSBuYW1lLnRyaW0oKSAmJiA8PjxzbWFsbCBkYXRhLXRlc3RpZD1cImNlcnQtaWRcIj57dChcImNlcnQuaWRcIil9OiB7ZXhpc3RpbmcuaWR9PC9zbWFsbD48Q2VydGlmaWNhdGVBY3Rpb25zIGNlcnQ9e2V4aXN0aW5nfSAvPjwvPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmVyaWZ5Q2VydGlmaWNhdGVQYWdlKCkge1xuICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VJMThuKCk7XG4gIGNvbnN0IHsgZGF0YTogY2VydCwgaXNMb2FkaW5nLCBpc0Vycm9yIH0gPSB1c2VRdWVyeSh7IHF1ZXJ5S2V5OiBbXCJjZXJ0aWZpY2F0ZVwiLCBpZF0sIHF1ZXJ5Rm46ICgpID0+IGFwaUdldDxDZXJ0aWZpY2F0ZT4oYC9hY2FkZW15L2NlcnRpZmljYXRlcy8ke2lkfWApLCByZXRyeTogZmFsc2UgfSk7XG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj48ZGl2IGNsYXNzTmFtZT1cImFjYWRlbXktbG9hZGluZ1wiIC8+PC9kaXY+O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiB2ZXJpZnktcGFnZVwiIGRhdGEtdGVzdGlkPVwidmVyaWZ5LXBhZ2VcIj5cbiAgICAgIHtjZXJ0ICYmICFpc0Vycm9yID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcmlmeS1jYXJkXCI+PEJhZGdlQ2hlY2sgc2l6ZT17NDB9IC8+PGgxIGRhdGEtdGVzdGlkPVwidmVyaWZ5LXZhbGlkXCI+e3QoXCJjZXJ0LnZhbGlkXCIpfTwvaDE+PHA+PHN0cm9uZyBkYXRhLXRlc3RpZD1cInZlcmlmeS1uYW1lXCI+e2NlcnQubmFtZX08L3N0cm9uZz4ge3QoXCJjZXJ0LmJvZHlcIil9PC9wPjxoMj57dChgcGF0aC4ke2NlcnQucGF0aF9pZH0udGl0bGVgKX08L2gyPjxzbWFsbD57dChcImNlcnQuaXNzdWVkXCIpfSB7bmV3IERhdGUoY2VydC5pc3N1ZWRfYXQpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLUlOXCIsIHsgZGF5OiBcIm51bWVyaWNcIiwgbW9udGg6IFwibG9uZ1wiLCB5ZWFyOiBcIm51bWVyaWNcIiB9KX0gwrcge3QoXCJjZXJ0LmlkXCIpfToge2NlcnQuaWR9PC9zbWFsbD48Q2VydGlmaWNhdGVBY3Rpb25zIGNlcnQ9e2NlcnR9IHRlc3RpZD1cInZlcmlmeS1jZXJ0XCIgLz48TGluayBjbGFzc05hbWU9XCJ0ZXh0LWxpbmtcIiB0bz1cIi9hY2FkZW15XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiAxMCB9fT57dChcIm5hdi5hY2FkZW15XCIpfTwvTGluaz48L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVyaWZ5LWNhcmQgaW52YWxpZFwiPjxoMSBkYXRhLXRlc3RpZD1cInZlcmlmeS1pbnZhbGlkXCI+e3QoXCJjZXJ0LmludmFsaWRcIil9PC9oMT48TGluayBjbGFzc05hbWU9XCJ0ZXh0LWxpbmtcIiB0bz1cIi9cIj5GaW5TYWF0aGk8L0xpbms+PC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sImZpbGUiOiIvYXBwL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2FjYWRlbXkvQ2VydGlmaWNhdGUudHN4In0=