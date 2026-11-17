import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/HeroParticles.tsx");const useEffect = __vite__cjsImport0_react["useEffect"]; const useRef = __vite__cjsImport0_react["useRef"];const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=a646c335";
var _jsxFileName = "/app/frontend/src/components/HeroParticles.tsx";
import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a646c335";
var _s = $RefreshSig$();
// Finance-themed hero visual: a live neon candlestick chart, a glowing SIP growth
// curve that keeps redrawing, floating ₹ coins and rising sparks. Respects reduced-motion.
const UP = "#22d3ee";
const DOWN = "#f472b6";
function makeCandles(n) {
	const out = [];
	let price = 40;
	for (let i = 0; i < n; i++) {
		const drift = 1.1 + Math.random() * .6;
		const o = price;
		const c = Math.max(8, o + (Math.random() - .38) * 9 + drift);
		out.push({
			o,
			c,
			h: Math.max(o, c) + Math.random() * 4,
			l: Math.min(o, c) - Math.random() * 4
		});
		price = c;
	}
	return out;
}
export function HeroParticles() {
	_s();
	const ref = useRef(null);
	useEffect(() => {
		const canvas = ref.current;
		const ctx = canvas?.getContext("2d");
		if (!canvas || !ctx) return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		let w = 0;
		let h = 0;
		let raf = 0;
		const resize = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			w = canvas.clientWidth;
			h = canvas.clientHeight;
			canvas.width = w * dpr;
			canvas.height = h * dpr;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		resize();
		window.addEventListener("resize", resize);
		const COUNT = 26;
		let candles = makeCandles(COUNT);
		const coins = Array.from({ length: 7 }, () => ({
			x: Math.random(),
			y: Math.random(),
			r: 10 + Math.random() * 12,
			s: 6e-4 + Math.random() * 9e-4,
			ph: Math.random() * 6
		}));
		const sparks = Array.from({ length: 60 }, () => ({
			x: Math.random(),
			y: Math.random(),
			s: 8e-4 + Math.random() * .002,
			size: .6 + Math.random() * 1.8
		}));
		let shift = 0;
		let curve = 0;
		let tick = 0;
		const draw = () => {
			tick += 1;
			ctx.clearRect(0, 0, w, h);
			const mobile = w < 900;
			// Chart area: right side on desktop, lower band on mobile
			const ax = mobile ? w * .04 : w * .46;
			const aw = mobile ? w * .92 : w * .52;
			const ay = mobile ? h * .74 : h * .18;
			const ah = mobile ? h * .22 : h * .68;
			const min = Math.min(...candles.map((c) => c.l));
			const max = Math.max(...candles.map((c) => c.h));
			const py = (v) => ay + ah - (v - min) / (max - min || 1) * ah;
			const step = aw / (COUNT - 1);
			// faint grid
			ctx.strokeStyle = "#ffffff0d";
			ctx.lineWidth = 1;
			for (let i = 0; i <= 4; i++) {
				const y = ay + ah / 4 * i;
				ctx.beginPath();
				ctx.moveTo(ax, y);
				ctx.lineTo(ax + aw, y);
				ctx.stroke();
			}
			// candles
			ctx.globalCompositeOperation = "lighter";
			candles.forEach((c, i) => {
				const x = ax + (i - shift) * step;
				if (x < ax - step || x > ax + aw + step) return;
				const up = c.c >= c.o;
				const col = up ? UP : DOWN;
				const fade = Math.min(1, (x - ax + step) / (step * 3));
				ctx.globalAlpha = .25 + .55 * fade;
				ctx.strokeStyle = col;
				ctx.shadowColor = col;
				ctx.shadowBlur = 12;
				ctx.beginPath();
				ctx.moveTo(x, py(c.h));
				ctx.lineTo(x, py(c.l));
				ctx.stroke();
				const top = py(Math.max(c.o, c.c));
				const bh = Math.max(2, Math.abs(py(c.o) - py(c.c)));
				ctx.fillStyle = col + "55";
				ctx.fillRect(x - step * .28, top, step * .56, bh);
				ctx.strokeRect(x - step * .28, top, step * .56, bh);
			});
			ctx.shadowBlur = 0;
			// SIP growth curve (compounding) drawn across the chart, redrawn in a loop
			const pts = 80;
			const upto = Math.floor(pts * Math.min(curve, 1));
			const grad = ctx.createLinearGradient(ax, 0, ax + aw, 0);
			grad.addColorStop(0, "#22d3ee");
			grad.addColorStop(.5, "#818cf8");
			grad.addColorStop(1, "#e879f9");
			ctx.globalAlpha = .95;
			ctx.strokeStyle = grad;
			ctx.lineWidth = 3;
			ctx.shadowColor = "#a78bfa";
			ctx.shadowBlur = 18;
			ctx.beginPath();
			let hx = ax;
			let hy = ay + ah;
			for (let i = 0; i <= upto; i++) {
				const t = i / pts;
				hx = ax + t * aw;
				hy = ay + ah - (Math.pow(1.12, t * 14) - 1) / (Math.pow(1.12, 14) - 1) * ah * .95;
				if (i === 0) ctx.moveTo(hx, hy);
				else ctx.lineTo(hx, hy);
			}
			ctx.stroke();
			// glowing head of the curve
			ctx.fillStyle = "#fff";
			ctx.beginPath();
			ctx.arc(hx, hy, 4, 0, Math.PI * 2);
			ctx.fill();
			ctx.shadowBlur = 0;
			ctx.lineWidth = 1;
			// floating ₹ coins
			coins.forEach((c) => {
				const x = c.x * w;
				const y = (c.y * h + h - tick * c.s * h % h) % h;
				const bob = Math.sin(tick * .02 + c.ph) * 4;
				ctx.globalAlpha = mobile ? .25 : .4;
				const g = ctx.createRadialGradient(x, y + bob, 0, x, y + bob, c.r);
				g.addColorStop(0, "#fde68a");
				g.addColorStop(.7, "#f59e0b");
				g.addColorStop(1, "#f59e0b00");
				ctx.fillStyle = g;
				ctx.beginPath();
				ctx.arc(x, y + bob, c.r, 0, Math.PI * 2);
				ctx.fill();
				ctx.globalAlpha = mobile ? .45 : .7;
				ctx.fillStyle = "#1f1300";
				ctx.font = `700 ${Math.round(c.r)}px 'Space Grotesk Variable', sans-serif`;
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				ctx.fillText("₹", x, y + bob + 1);
			});
			// rising sparks
			sparks.forEach((s) => {
				if (!reduce) {
					s.y -= s.s;
					if (s.y < 0) {
						s.y = 1;
						s.x = Math.random();
					}
				}
				ctx.globalAlpha = .5;
				ctx.fillStyle = s.x > .5 ? "#a78bfa" : "#22d3ee";
				ctx.beginPath();
				ctx.arc(s.x * w, s.y * h, s.size, 0, Math.PI * 2);
				ctx.fill();
			});
			ctx.globalAlpha = 1;
			ctx.globalCompositeOperation = "source-over";
			if (!reduce) {
				shift += .006;
				if (shift >= 1) {
					shift = 0;
					const last = candles[candles.length - 1];
					const next = makeCandles(1)[0];
					const delta = next.c - next.o;
					const o = last.c;
					const c = Math.max(8, o + delta);
					candles = [...candles.slice(1), {
						o,
						c,
						h: Math.max(o, c) + Math.random() * 4,
						l: Math.min(o, c) - Math.random() * 4
					}];
				}
				curve = curve >= 1.25 ? 0 : curve + .004;
			} else {
				curve = 1;
			}
			raf = requestAnimationFrame(draw);
		};
		draw();
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", resize);
		};
	}, []);
	return /* @__PURE__ */ _jsxDEV("canvas", {
		ref,
		className: "hero-particles",
		"aria-hidden": "true",
		"data-testid": "hero-finance-visual",
		"x-file-name": "HeroParticles",
		"x-line-number": "170",
		"x-column": "9",
		"x-component": "canvas",
		"x-id": "HeroParticles_170_9",
		"x-dynamic": "false"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 218,
		columnNumber: 10
	}, this);
}
_s(HeroParticles, "Vyxb9q8fGt0ixq8sdNNvSJELA9k=");
_c = HeroParticles;
var _c;
$RefreshReg$(_c, "HeroParticles");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/HeroParticles.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/components/HeroParticles.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/components/HeroParticles.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/components/HeroParticles.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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S0FDL0J0RSxVQUFVLENBQUMsR0FBR0EsUUFBUXVFLE1BQU0sQ0FBQyxHQUFHO01BQUVwRztNQUFHQztNQUFHRyxHQUFHTixLQUFLSSxJQUFJRixHQUFHQyxDQUFDLElBQUlILEtBQUtDLE9BQU8sSUFBSTtNQUFHTSxHQUFHUCxLQUFLUSxJQUFJTixHQUFHQyxDQUFDLElBQUlILEtBQUtDLE9BQU8sSUFBSTtLQUFFLENBQUM7SUFDeEg7SUFDQTJDLFFBQVFBLFNBQVMsT0FBTyxJQUFJQSxRQUFRO0dBQ3RDLE9BQU87SUFDTEEsUUFBUTtHQUNWO0dBQ0F4QixNQUFNbUYsc0JBQXNCekQsSUFBSTtFQUNsQztFQUNBQSxLQUFLO0VBQ0wsYUFBYTtHQUNYMEQscUJBQXFCcEYsR0FBRztHQUN4QkosT0FBT3lGLG9CQUFvQixVQUFVcEYsTUFBTTtFQUM3QztDQUNGLEdBQUcsRUFBRTtDQUVMLE9BQU8sd0JBQUMsVUFBRDtFQUFhWDtFQUFLLFdBQVU7RUFBaUIsZUFBWTtFQUFPLGVBQVk7RUFBcUI7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0NBQUE7Ozs7O0FBQzFHIiwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwiVVAiLCJET1dOIiwibWFrZUNhbmRsZXMiLCJuIiwib3V0IiwicHJpY2UiLCJpIiwiZHJpZnQiLCJNYXRoIiwicmFuZG9tIiwibyIsImMiLCJtYXgiLCJwdXNoIiwiaCIsImwiLCJtaW4iLCJIZXJvUGFydGljbGVzIiwicmVmIiwiY2FudmFzIiwiY3VycmVudCIsImN0eCIsImdldENvbnRleHQiLCJyZWR1Y2UiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInciLCJyYWYiLCJyZXNpemUiLCJkcHIiLCJkZXZpY2VQaXhlbFJhdGlvIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsInNldFRyYW5zZm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJDT1VOVCIsImNhbmRsZXMiLCJjb2lucyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIngiLCJ5IiwiciIsInMiLCJwaCIsInNwYXJrcyIsInNpemUiLCJzaGlmdCIsImN1cnZlIiwidGljayIsImRyYXciLCJjbGVhclJlY3QiLCJtb2JpbGUiLCJheCIsImF3IiwiYXkiLCJhaCIsIm1hcCIsInB5IiwidiIsInN0ZXAiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiIsImZvckVhY2giLCJ1cCIsImNvbCIsImZhZGUiLCJnbG9iYWxBbHBoYSIsInNoYWRvd0NvbG9yIiwic2hhZG93Qmx1ciIsInRvcCIsImJoIiwiYWJzIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdHJva2VSZWN0IiwicHRzIiwidXB0byIsImZsb29yIiwiZ3JhZCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiaHgiLCJoeSIsInQiLCJwb3ciLCJhcmMiLCJQSSIsImZpbGwiLCJib2IiLCJzaW4iLCJnIiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJmb250Iiwicm91bmQiLCJ0ZXh0QWxpZ24iLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCIsImxhc3QiLCJuZXh0IiwiZGVsdGEiLCJzbGljZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJIZXJvUGFydGljbGVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBGaW5hbmNlLXRoZW1lZCBoZXJvIHZpc3VhbDogYSBsaXZlIG5lb24gY2FuZGxlc3RpY2sgY2hhcnQsIGEgZ2xvd2luZyBTSVAgZ3Jvd3RoXG4vLyBjdXJ2ZSB0aGF0IGtlZXBzIHJlZHJhd2luZywgZmxvYXRpbmcg4oK5IGNvaW5zIGFuZCByaXNpbmcgc3BhcmtzLiBSZXNwZWN0cyByZWR1Y2VkLW1vdGlvbi5cbmNvbnN0IFVQID0gXCIjMjJkM2VlXCI7XG5jb25zdCBET1dOID0gXCIjZjQ3MmI2XCI7XG5cbmludGVyZmFjZSBDYW5kbGUgeyBvOiBudW1iZXI7IGM6IG51bWJlcjsgaDogbnVtYmVyOyBsOiBudW1iZXIgfVxuXG5mdW5jdGlvbiBtYWtlQ2FuZGxlcyhuOiBudW1iZXIpOiBDYW5kbGVbXSB7XG4gIGNvbnN0IG91dDogQ2FuZGxlW10gPSBbXTtcbiAgbGV0IHByaWNlID0gNDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgZHJpZnQgPSAxLjEgKyBNYXRoLnJhbmRvbSgpICogMC42OyAvLyBnZW50bGUgbG9uZy10ZXJtIHVwdHJlbmRcbiAgICBjb25zdCBvID0gcHJpY2U7XG4gICAgY29uc3QgYyA9IE1hdGgubWF4KDgsIG8gKyAoTWF0aC5yYW5kb20oKSAtIDAuMzgpICogOSArIGRyaWZ0KTtcbiAgICBvdXQucHVzaCh7IG8sIGMsIGg6IE1hdGgubWF4KG8sIGMpICsgTWF0aC5yYW5kb20oKSAqIDQsIGw6IE1hdGgubWluKG8sIGMpIC0gTWF0aC5yYW5kb20oKSAqIDQgfSk7XG4gICAgcHJpY2UgPSBjO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBIZXJvUGFydGljbGVzKCkge1xuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gcmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzPy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgaWYgKCFjYW52YXMgfHwgIWN0eCkgcmV0dXJuO1xuICAgIGNvbnN0IHJlZHVjZSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSlcIikubWF0Y2hlcztcbiAgICBsZXQgdyA9IDA7XG4gICAgbGV0IGggPSAwO1xuICAgIGxldCByYWYgPSAwO1xuICAgIGNvbnN0IHJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGRwciA9IE1hdGgubWluKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEsIDIpO1xuICAgICAgdyA9IGNhbnZhcy5jbGllbnRXaWR0aDtcbiAgICAgIGggPSBjYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgICAgY2FudmFzLndpZHRoID0gdyAqIGRwcjtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBoICogZHByO1xuICAgICAgY3R4LnNldFRyYW5zZm9ybShkcHIsIDAsIDAsIGRwciwgMCwgMCk7XG4gICAgfTtcbiAgICByZXNpemUoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemUpO1xuXG4gICAgY29uc3QgQ09VTlQgPSAyNjtcbiAgICBsZXQgY2FuZGxlcyA9IG1ha2VDYW5kbGVzKENPVU5UKTtcbiAgICBjb25zdCBjb2lucyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDcgfSwgKCkgPT4gKHsgeDogTWF0aC5yYW5kb20oKSwgeTogTWF0aC5yYW5kb20oKSwgcjogMTAgKyBNYXRoLnJhbmRvbSgpICogMTIsIHM6IDAuMDAwNiArIE1hdGgucmFuZG9tKCkgKiAwLjAwMDksIHBoOiBNYXRoLnJhbmRvbSgpICogNiB9KSk7XG4gICAgY29uc3Qgc3BhcmtzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNjAgfSwgKCkgPT4gKHsgeDogTWF0aC5yYW5kb20oKSwgeTogTWF0aC5yYW5kb20oKSwgczogMC4wMDA4ICsgTWF0aC5yYW5kb20oKSAqIDAuMDAyLCBzaXplOiAwLjYgKyBNYXRoLnJhbmRvbSgpICogMS44IH0pKTtcbiAgICBsZXQgc2hpZnQgPSAwOyAvLyAwLi4xIHNsaWRlIHRvd2FyZCB0aGUgbmV4dCBjYW5kbGVcbiAgICBsZXQgY3VydmUgPSAwOyAvLyAwLi4xIGhvdyBtdWNoIG9mIHRoZSBncm93dGggY3VydmUgaXMgZHJhd25cbiAgICBsZXQgdGljayA9IDA7XG5cbiAgICBjb25zdCBkcmF3ID0gKCkgPT4ge1xuICAgICAgdGljayArPSAxO1xuICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCB3LCBoKTtcbiAgICAgIGNvbnN0IG1vYmlsZSA9IHcgPCA5MDA7XG4gICAgICAvLyBDaGFydCBhcmVhOiByaWdodCBzaWRlIG9uIGRlc2t0b3AsIGxvd2VyIGJhbmQgb24gbW9iaWxlXG4gICAgICBjb25zdCBheCA9IG1vYmlsZSA/IHcgKiAwLjA0IDogdyAqIDAuNDY7XG4gICAgICBjb25zdCBhdyA9IG1vYmlsZSA/IHcgKiAwLjkyIDogdyAqIDAuNTI7XG4gICAgICBjb25zdCBheSA9IG1vYmlsZSA/IGggKiAwLjc0IDogaCAqIDAuMTg7XG4gICAgICBjb25zdCBhaCA9IG1vYmlsZSA/IGggKiAwLjIyIDogaCAqIDAuNjg7XG4gICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbiguLi5jYW5kbGVzLm1hcCgoYykgPT4gYy5sKSk7XG4gICAgICBjb25zdCBtYXggPSBNYXRoLm1heCguLi5jYW5kbGVzLm1hcCgoYykgPT4gYy5oKSk7XG4gICAgICBjb25zdCBweSA9ICh2OiBudW1iZXIpID0+IGF5ICsgYWggLSAoKHYgLSBtaW4pIC8gKG1heCAtIG1pbiB8fCAxKSkgKiBhaDtcbiAgICAgIGNvbnN0IHN0ZXAgPSBhdyAvIChDT1VOVCAtIDEpO1xuXG4gICAgICAvLyBmYWludCBncmlkXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiNmZmZmZmYwZFwiO1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA0OyBpKyspIHsgY29uc3QgeSA9IGF5ICsgKGFoIC8gNCkgKiBpOyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oYXgsIHkpOyBjdHgubGluZVRvKGF4ICsgYXcsIHkpOyBjdHguc3Ryb2tlKCk7IH1cblxuICAgICAgLy8gY2FuZGxlc1xuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IFwibGlnaHRlclwiO1xuICAgICAgY2FuZGxlcy5mb3JFYWNoKChjLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IHggPSBheCArIChpIC0gc2hpZnQpICogc3RlcDtcbiAgICAgICAgaWYgKHggPCBheCAtIHN0ZXAgfHwgeCA+IGF4ICsgYXcgKyBzdGVwKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHVwID0gYy5jID49IGMubztcbiAgICAgICAgY29uc3QgY29sID0gdXAgPyBVUCA6IERPV047XG4gICAgICAgIGNvbnN0IGZhZGUgPSBNYXRoLm1pbigxLCAoeCAtIGF4ICsgc3RlcCkgLyAoc3RlcCAqIDMpKTtcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMC4yNSArIDAuNTUgKiBmYWRlO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2w7XG4gICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IGNvbDtcbiAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSAxMjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHgsIHB5KGMuaCkpOyBjdHgubGluZVRvKHgsIHB5KGMubCkpOyBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGNvbnN0IHRvcCA9IHB5KE1hdGgubWF4KGMubywgYy5jKSk7XG4gICAgICAgIGNvbnN0IGJoID0gTWF0aC5tYXgoMiwgTWF0aC5hYnMocHkoYy5vKSAtIHB5KGMuYykpKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbCArIFwiNTVcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHggLSBzdGVwICogMC4yOCwgdG9wLCBzdGVwICogMC41NiwgYmgpO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdCh4IC0gc3RlcCAqIDAuMjgsIHRvcCwgc3RlcCAqIDAuNTYsIGJoKTtcbiAgICAgIH0pO1xuICAgICAgY3R4LnNoYWRvd0JsdXIgPSAwO1xuXG4gICAgICAvLyBTSVAgZ3Jvd3RoIGN1cnZlIChjb21wb3VuZGluZykgZHJhd24gYWNyb3NzIHRoZSBjaGFydCwgcmVkcmF3biBpbiBhIGxvb3BcbiAgICAgIGNvbnN0IHB0cyA9IDgwO1xuICAgICAgY29uc3QgdXB0byA9IE1hdGguZmxvb3IocHRzICogTWF0aC5taW4oY3VydmUsIDEpKTsgLy8gdmFsdWVzIHBhc3QgMSBob2xkIHRoZSBmdWxsIGN1cnZlIGJyaWVmbHlcbiAgICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoYXgsIDAsIGF4ICsgYXcsIDApO1xuICAgICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgXCIjMjJkM2VlXCIpOyBncmFkLmFkZENvbG9yU3RvcCgwLjUsIFwiIzgxOGNmOFwiKTsgZ3JhZC5hZGRDb2xvclN0b3AoMSwgXCIjZTg3OWY5XCIpO1xuICAgICAgY3R4Lmdsb2JhbEFscGhhID0gMC45NTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGdyYWQ7XG4gICAgICBjdHgubGluZVdpZHRoID0gMztcbiAgICAgIGN0eC5zaGFkb3dDb2xvciA9IFwiI2E3OGJmYVwiO1xuICAgICAgY3R4LnNoYWRvd0JsdXIgPSAxODtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGxldCBoeCA9IGF4O1xuICAgICAgbGV0IGh5ID0gYXkgKyBhaDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHVwdG87IGkrKykge1xuICAgICAgICBjb25zdCB0ID0gaSAvIHB0cztcbiAgICAgICAgaHggPSBheCArIHQgKiBhdztcbiAgICAgICAgaHkgPSBheSArIGFoIC0gKE1hdGgucG93KDEuMTIsIHQgKiAxNCkgLSAxKSAvIChNYXRoLnBvdygxLjEyLCAxNCkgLSAxKSAqIGFoICogMC45NTtcbiAgICAgICAgaWYgKGkgPT09IDApIGN0eC5tb3ZlVG8oaHgsIGh5KTsgZWxzZSBjdHgubGluZVRvKGh4LCBoeSk7XG4gICAgICB9XG4gICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAvLyBnbG93aW5nIGhlYWQgb2YgdGhlIGN1cnZlXG4gICAgICBjdHguZmlsbFN0eWxlID0gXCIjZmZmXCI7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoaHgsIGh5LCA0LCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgICBjdHguc2hhZG93Qmx1ciA9IDA7XG4gICAgICBjdHgubGluZVdpZHRoID0gMTtcblxuICAgICAgLy8gZmxvYXRpbmcg4oK5IGNvaW5zXG4gICAgICBjb2lucy5mb3JFYWNoKChjKSA9PiB7XG4gICAgICAgIGNvbnN0IHggPSBjLnggKiB3O1xuICAgICAgICBjb25zdCB5ID0gKChjLnkgKiBoICsgaCkgLSAodGljayAqIGMucyAqIGgpICUgaCkgJSBoO1xuICAgICAgICBjb25zdCBib2IgPSBNYXRoLnNpbih0aWNrICogMC4wMiArIGMucGgpICogNDtcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gbW9iaWxlID8gMC4yNSA6IDAuNDtcbiAgICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5ICsgYm9iLCAwLCB4LCB5ICsgYm9iLCBjLnIpO1xuICAgICAgICBnLmFkZENvbG9yU3RvcCgwLCBcIiNmZGU2OGFcIik7IGcuYWRkQ29sb3JTdG9wKDAuNywgXCIjZjU5ZTBiXCIpOyBnLmFkZENvbG9yU3RvcCgxLCBcIiNmNTllMGIwMFwiKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4LCB5ICsgYm9iLCBjLnIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gbW9iaWxlID8gMC40NSA6IDAuNztcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzFmMTMwMFwiO1xuICAgICAgICBjdHguZm9udCA9IGA3MDAgJHtNYXRoLnJvdW5kKGMucil9cHggJ1NwYWNlIEdyb3Rlc2sgVmFyaWFibGUnLCBzYW5zLXNlcmlmYDtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7IGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgICAgICBjdHguZmlsbFRleHQoXCLigrlcIiwgeCwgeSArIGJvYiArIDEpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHJpc2luZyBzcGFya3NcbiAgICAgIHNwYXJrcy5mb3JFYWNoKChzKSA9PiB7XG4gICAgICAgIGlmICghcmVkdWNlKSB7IHMueSAtPSBzLnM7IGlmIChzLnkgPCAwKSB7IHMueSA9IDE7IHMueCA9IE1hdGgucmFuZG9tKCk7IH0gfVxuICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSAwLjU7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBzLnggPiAwLjUgPyBcIiNhNzhiZmFcIiA6IFwiIzIyZDNlZVwiO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMocy54ICogdywgcy55ICogaCwgcy5zaXplLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgICB9KTtcbiAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gXCJzb3VyY2Utb3ZlclwiO1xuXG4gICAgICBpZiAoIXJlZHVjZSkge1xuICAgICAgICBzaGlmdCArPSAwLjAwNjtcbiAgICAgICAgaWYgKHNoaWZ0ID49IDEpIHtcbiAgICAgICAgICBzaGlmdCA9IDA7XG4gICAgICAgICAgY29uc3QgbGFzdCA9IGNhbmRsZXNbY2FuZGxlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICBjb25zdCBuZXh0ID0gbWFrZUNhbmRsZXMoMSlbMF07XG4gICAgICAgICAgY29uc3QgZGVsdGEgPSBuZXh0LmMgLSBuZXh0Lm87XG4gICAgICAgICAgY29uc3QgbyA9IGxhc3QuYztcbiAgICAgICAgICBjb25zdCBjID0gTWF0aC5tYXgoOCwgbyArIGRlbHRhKTtcbiAgICAgICAgICBjYW5kbGVzID0gWy4uLmNhbmRsZXMuc2xpY2UoMSksIHsgbywgYywgaDogTWF0aC5tYXgobywgYykgKyBNYXRoLnJhbmRvbSgpICogNCwgbDogTWF0aC5taW4obywgYykgLSBNYXRoLnJhbmRvbSgpICogNCB9XTtcbiAgICAgICAgfVxuICAgICAgICBjdXJ2ZSA9IGN1cnZlID49IDEuMjUgPyAwIDogY3VydmUgKyAwLjAwNDsgLy8gYnJpZWYgcGF1c2UgYXQgZnVsbCwgdGhlbiByZWRyYXdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnZlID0gMTtcbiAgICAgIH1cbiAgICAgIHJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcbiAgICB9O1xuICAgIGRyYXcoKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiA8Y2FudmFzIHJlZj17cmVmfSBjbGFzc05hbWU9XCJoZXJvLXBhcnRpY2xlc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGRhdGEtdGVzdGlkPVwiaGVyby1maW5hbmNlLXZpc3VhbFwiIC8+O1xufVxuIl0sImZpbGUiOiIvYXBwL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL0hlcm9QYXJ0aWNsZXMudHN4In0=