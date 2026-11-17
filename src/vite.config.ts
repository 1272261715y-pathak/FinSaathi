import path from "/@id/__vite-browser-external:node:path";
import { defineConfig } from "/node_modules/.vite/deps/vite.js?v=64d53eb0";
import react from "/node_modules/.vite/deps/@vitejs_plugin-react.js?v=bc027d66";
import tailwindcss from "/node_modules/.vite/deps/@tailwindcss_vite.js?v=d5e0755b";
import { visualEdits } from "/node_modules/.vite/deps/@emergentbase_visual-edits_vite.js?v=f86c2cbc";
// Supervisor exports DISABLE_HOT_RELOAD=true when the platform sets ENABLE_RELOAD=false.
const hotReloadDisabled = process.env.DISABLE_HOT_RELOAD === "true";
// Visual Edits (x-* JSX tagging, overlay, /edit-file endpoint) is dev-server-only by
// default (apply: serve); escape hatch mirrors DISABLE_HOT_RELOAD.
const visualEditsDisabled = process.env.DISABLE_VISUAL_EDITS === "true";
// Branded error overlay (build + runtime errors); escape hatch mirrors the two above.
const emergentOverlayDisabled = process.env.DISABLE_EMERGENT_OVERLAY === "true";
// Fails open: a broken overlay package must degrade to "no overlay" (Vite's own overlay
// takes over), never to "no dev server". Never let a preview aid take the app down.
async function loadEmergentOverlay() {
	if (emergentOverlayDisabled) return null;
	try {
		const mod = await import("/node_modules/.vite/deps/@emergentbase_overlay_vite.js?v=dfca96fb");
		return mod.emergentOverlay();
	} catch (e) {
		console.warn("[emergent-overlay] plugin failed to load; using Vite's overlay instead:", e instanceof Error ? e.message : e);
		return null;
	}
}
// Pod inotify quota is node-shared and routinely exhausted; native fs.watch EMFILEs at
// boot. Polling is the load-bearing default (set before Vite evaluates the config).
if (!hotReloadDisabled) {
	process.env.CHOKIDAR_USEPOLLING = "true";
}
// https://vite.dev/config/
export default defineConfig(async () => {
	const emergentOverlay = await loadEmergentOverlay();
	return {
		plugins: [
			react(),
			tailwindcss(),
			...visualEditsDisabled ? [] : [visualEdits()],
			...emergentOverlay ? [emergentOverlay] : []
		],
		resolve: { alias: [
			{
				find: "@",
				replacement: path.resolve(__dirname, "./src")
			},
			(
			// lucide 1.x dropped brand logos; src/lib/lucide-react.tsx restores them on top of the real package.
			{
				find: /^lucide-react$/,
				replacement: path.resolve(__dirname, "./src/lib/lucide-react.tsx")
			}),
			{
				find: "lucide-react-upstream",
				replacement: path.resolve(__dirname, "./node_modules/lucide-react")
			},
			(
			// recharts 3's Tooltip callback types reject the annotations agents write; src/lib/recharts.tsx adapts them.
			{
				find: /^recharts$/,
				replacement: path.resolve(__dirname, "./src/lib/recharts.tsx")
			}),
			{
				find: "recharts-upstream",
				replacement: path.resolve(__dirname, "./node_modules/recharts")
			}
		] },
		// Every shipped dep, pre-bundled up front. Vite discovers deps lazily, so the first
		// import outside the initial graph would trigger a re-optimize + reload mid-session.
		optimizeDeps: { include: [
			"@base-ui/react/button",
			"@base-ui/react/checkbox",
			"@base-ui/react/dialog",
			"@base-ui/react/input",
			"@base-ui/react/menu",
			"@base-ui/react/merge-props",
			"@base-ui/react/popover",
			"@base-ui/react/select",
			"@base-ui/react/tabs",
			"@base-ui/react/use-render",
			"@tanstack/react-query",
			"class-variance-authority",
			"clsx",
			"date-fns",
			"@icons-pack/react-simple-icons",
			"lucide-react-upstream",
			"motion/react",
			"next-themes",
			"react",
			"react-day-picker",
			"react-dom/client",
			"react-is",
			"react-router-dom",
			"recharts-upstream",
			"sonner",
			"tailwind-merge"
		] },
		server: {
			host: true,
			port: 3e3,
			allowedHosts: true,
			// Preview probe + /edit-file are cross-origin from the Emergent tab; Vite defaults to localhost-only CORS.
			cors: true,
			// No hmr.clientPort override: Vite infers the WS target from window.location, which
			// is correct on both localhost:3000 (smoke) and the https/:443 preview proxy.
			// Build-error rendering: emergent-overlay when it loaded, else Vite's own overlay.
			hmr: hotReloadDisabled ? false : { overlay: !emergentOverlay },
			watch: hotReloadDisabled ? null : {
				usePolling: true,
				interval: 300
			},
			// The /api proxy convention: frontend code calls relative /api/*, never an
			// absolute backend URL. Target is the FastAPI dev server (supervisor: backend).
			proxy: { "/api": {
				target: "http://localhost:8001",
				changeOrigin: true
			} }
		}
	};
});

//# sourceMappingURL=data:application/json;base64,eyJtYXBwaW5ncyI6IkFBQUEsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsb0JBQXFDO0FBQzlDLE9BQU8sV0FBVztBQUNsQixPQUFPLGlCQUFpQjtBQUN4QixTQUFTLG1CQUFtQjs7QUFHNUIsTUFBTSxvQkFBb0IsUUFBUSxJQUFJLHVCQUF1Qjs7O0FBSTdELE1BQU0sc0JBQXNCLFFBQVEsSUFBSSx5QkFBeUI7O0FBR2pFLE1BQU0sMEJBQTBCLFFBQVEsSUFBSSw2QkFBNkI7OztBQUl6RSxlQUFlLHNCQUFzQjtDQUNuQyxJQUFJLHlCQUF5QixPQUFPO0NBQ3BDLElBQUk7RUFDRixNQUFNLE1BQU0sTUFBTSxPQUFPO0VBQ3pCLE9BQU8sSUFBSSxnQkFBZ0I7Q0FDN0IsU0FBUyxHQUFHO0VBQ1YsUUFBUSxLQUFLLDJFQUEyRSxhQUFhLFFBQVEsRUFBRSxVQUFVLENBQUM7RUFDMUgsT0FBTztDQUNUO0FBQ0Y7OztBQUlBLElBQUksQ0FBQyxtQkFBbUI7Q0FDdEIsUUFBUSxJQUFJLHNCQUFzQjtBQUNwQzs7QUFHQSxlQUFlLGFBQWEsWUFBWTtDQUN0QyxNQUFNLGtCQUFrQixNQUFNLG9CQUFvQjtDQUNsRCxPQUFPO0VBQ0wsU0FBUztHQUNQLE1BQU07R0FDTixZQUFZO0dBQ1osR0FBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0dBRzdDLEdBQUksa0JBQWtCLENBQUMsZUFBZSxJQUFJLENBQUM7RUFDN0M7RUFDQSxTQUFTLEVBQ1AsT0FBTztHQUNMO0lBQUUsTUFBTTtJQUFLLGFBQWEsS0FBSyxRQUFRLFdBQVcsT0FBTztHQUFFOzs7R0FFM0Q7SUFBRSxNQUFNO0lBQWtCLGFBQWEsS0FBSyxRQUFRLFdBQVcsNEJBQTRCO0dBQUU7R0FDN0Y7SUFBRSxNQUFNO0lBQXlCLGFBQWEsS0FBSyxRQUFRLFdBQVcsNkJBQTZCO0dBQUU7OztHQUVyRztJQUFFLE1BQU07SUFBYyxhQUFhLEtBQUssUUFBUSxXQUFXLHdCQUF3QjtHQUFFO0dBQ3JGO0lBQUUsTUFBTTtJQUFxQixhQUFhLEtBQUssUUFBUSxXQUFXLHlCQUF5QjtHQUFFO0VBQy9GLEVBQ0Y7OztFQUdBLGNBQWMsRUFDWixTQUFTO0dBQ1A7R0FDQTtHQUNBO0dBQ0E7R0FDQTtHQUNBO0dBQ0E7R0FDQTtHQUNBO0dBQ0E7R0FDQTtHQUNBO0dBQ0E7R0FDQTtHQUNBO0dBQ0E7R0FDQTtHQUNBO0dBQ0E7R0FDQTtHQUNBO0dBQ0E7R0FDQTtHQUNBO0dBQ0E7R0FDQTtFQUNGLEVBQ0Y7RUFDQSxRQUFRO0dBQ04sTUFBTTtHQUNOLE1BQU07R0FDTixjQUFjOztHQUVkLE1BQU07Ozs7R0FJTixLQUFLLG9CQUFvQixRQUFRLEVBQUUsU0FBUyxDQUFDLGdCQUFnQjtHQUM3RCxPQUFPLG9CQUFvQixPQUFPO0lBQUUsWUFBWTtJQUFNLFVBQVU7R0FBSTs7O0dBR3BFLE9BQU8sRUFDTCxRQUFRO0lBQ04sUUFBUTtJQUNSLGNBQWM7R0FDaEIsRUFDRjtFQUNGO0NBQ0Y7QUFDRixDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbInZpdGUuY29uZmlnLnRzIl0sInZlcnNpb24iOjMsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gXCJub2RlOnBhdGhcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgdHlwZSBVc2VyQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tIFwiQHRhaWx3aW5kY3NzL3ZpdGVcIjtcbmltcG9ydCB7IHZpc3VhbEVkaXRzIH0gZnJvbSBcIkBlbWVyZ2VudGJhc2UvdmlzdWFsLWVkaXRzL3ZpdGVcIjtcblxuLy8gU3VwZXJ2aXNvciBleHBvcnRzIERJU0FCTEVfSE9UX1JFTE9BRD10cnVlIHdoZW4gdGhlIHBsYXRmb3JtIHNldHMgRU5BQkxFX1JFTE9BRD1mYWxzZS5cbmNvbnN0IGhvdFJlbG9hZERpc2FibGVkID0gcHJvY2Vzcy5lbnYuRElTQUJMRV9IT1RfUkVMT0FEID09PSBcInRydWVcIjtcblxuLy8gVmlzdWFsIEVkaXRzICh4LSogSlNYIHRhZ2dpbmcsIG92ZXJsYXksIC9lZGl0LWZpbGUgZW5kcG9pbnQpIGlzIGRldi1zZXJ2ZXItb25seSBieVxuLy8gZGVmYXVsdCAoYXBwbHk6IHNlcnZlKTsgZXNjYXBlIGhhdGNoIG1pcnJvcnMgRElTQUJMRV9IT1RfUkVMT0FELlxuY29uc3QgdmlzdWFsRWRpdHNEaXNhYmxlZCA9IHByb2Nlc3MuZW52LkRJU0FCTEVfVklTVUFMX0VESVRTID09PSBcInRydWVcIjtcblxuLy8gQnJhbmRlZCBlcnJvciBvdmVybGF5IChidWlsZCArIHJ1bnRpbWUgZXJyb3JzKTsgZXNjYXBlIGhhdGNoIG1pcnJvcnMgdGhlIHR3byBhYm92ZS5cbmNvbnN0IGVtZXJnZW50T3ZlcmxheURpc2FibGVkID0gcHJvY2Vzcy5lbnYuRElTQUJMRV9FTUVSR0VOVF9PVkVSTEFZID09PSBcInRydWVcIjtcblxuLy8gRmFpbHMgb3BlbjogYSBicm9rZW4gb3ZlcmxheSBwYWNrYWdlIG11c3QgZGVncmFkZSB0byBcIm5vIG92ZXJsYXlcIiAoVml0ZSdzIG93biBvdmVybGF5XG4vLyB0YWtlcyBvdmVyKSwgbmV2ZXIgdG8gXCJubyBkZXYgc2VydmVyXCIuIE5ldmVyIGxldCBhIHByZXZpZXcgYWlkIHRha2UgdGhlIGFwcCBkb3duLlxuYXN5bmMgZnVuY3Rpb24gbG9hZEVtZXJnZW50T3ZlcmxheSgpIHtcbiAgaWYgKGVtZXJnZW50T3ZlcmxheURpc2FibGVkKSByZXR1cm4gbnVsbDtcbiAgdHJ5IHtcbiAgICBjb25zdCBtb2QgPSBhd2FpdCBpbXBvcnQoXCJAZW1lcmdlbnRiYXNlL292ZXJsYXkvdml0ZVwiKTtcbiAgICByZXR1cm4gbW9kLmVtZXJnZW50T3ZlcmxheSgpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS53YXJuKFwiW2VtZXJnZW50LW92ZXJsYXldIHBsdWdpbiBmYWlsZWQgdG8gbG9hZDsgdXNpbmcgVml0ZSdzIG92ZXJsYXkgaW5zdGVhZDpcIiwgZSBpbnN0YW5jZW9mIEVycm9yID8gZS5tZXNzYWdlIDogZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLy8gUG9kIGlub3RpZnkgcXVvdGEgaXMgbm9kZS1zaGFyZWQgYW5kIHJvdXRpbmVseSBleGhhdXN0ZWQ7IG5hdGl2ZSBmcy53YXRjaCBFTUZJTEVzIGF0XG4vLyBib290LiBQb2xsaW5nIGlzIHRoZSBsb2FkLWJlYXJpbmcgZGVmYXVsdCAoc2V0IGJlZm9yZSBWaXRlIGV2YWx1YXRlcyB0aGUgY29uZmlnKS5cbmlmICghaG90UmVsb2FkRGlzYWJsZWQpIHtcbiAgcHJvY2Vzcy5lbnYuQ0hPS0lEQVJfVVNFUE9MTElORyA9IFwidHJ1ZVwiO1xufVxuXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyhhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGVtZXJnZW50T3ZlcmxheSA9IGF3YWl0IGxvYWRFbWVyZ2VudE92ZXJsYXkoKTtcbiAgcmV0dXJuIHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICByZWFjdCgpLFxuICAgICAgdGFpbHdpbmRjc3MoKSxcbiAgICAgIC4uLih2aXN1YWxFZGl0c0Rpc2FibGVkID8gW10gOiBbdmlzdWFsRWRpdHMoKV0pLFxuICAgICAgLy8gTm8gaXNTZXJ2ZSBndWFyZDogdGhpcyBmYWN0b3J5IHRha2VzIG5vIENvbmZpZ0VudiBhcmcsIHNvIGJ1aWxkIHB1cml0eSBoZXJlIHJlc3RzXG4gICAgICAvLyBvbiB0aGUgcGFja2FnZSdzIG93biBgYXBwbHk6IFwic2VydmVcImAuXG4gICAgICAuLi4oZW1lcmdlbnRPdmVybGF5ID8gW2VtZXJnZW50T3ZlcmxheV0gOiBbXSksXG4gICAgXSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczogW1xuICAgICAgICB7IGZpbmQ6IFwiQFwiLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSB9LFxuICAgICAgICAvLyBsdWNpZGUgMS54IGRyb3BwZWQgYnJhbmQgbG9nb3M7IHNyYy9saWIvbHVjaWRlLXJlYWN0LnRzeCByZXN0b3JlcyB0aGVtIG9uIHRvcCBvZiB0aGUgcmVhbCBwYWNrYWdlLlxuICAgICAgICB7IGZpbmQ6IC9ebHVjaWRlLXJlYWN0JC8sIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2xpYi9sdWNpZGUtcmVhY3QudHN4XCIpIH0sXG4gICAgICAgIHsgZmluZDogXCJsdWNpZGUtcmVhY3QtdXBzdHJlYW1cIiwgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0XCIpIH0sXG4gICAgICAgIC8vIHJlY2hhcnRzIDMncyBUb29sdGlwIGNhbGxiYWNrIHR5cGVzIHJlamVjdCB0aGUgYW5ub3RhdGlvbnMgYWdlbnRzIHdyaXRlOyBzcmMvbGliL3JlY2hhcnRzLnRzeCBhZGFwdHMgdGhlbS5cbiAgICAgICAgeyBmaW5kOiAvXnJlY2hhcnRzJC8sIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL2xpYi9yZWNoYXJ0cy50c3hcIikgfSxcbiAgICAgICAgeyBmaW5kOiBcInJlY2hhcnRzLXVwc3RyZWFtXCIsIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vbm9kZV9tb2R1bGVzL3JlY2hhcnRzXCIpIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgLy8gRXZlcnkgc2hpcHBlZCBkZXAsIHByZS1idW5kbGVkIHVwIGZyb250LiBWaXRlIGRpc2NvdmVycyBkZXBzIGxhemlseSwgc28gdGhlIGZpcnN0XG4gICAgLy8gaW1wb3J0IG91dHNpZGUgdGhlIGluaXRpYWwgZ3JhcGggd291bGQgdHJpZ2dlciBhIHJlLW9wdGltaXplICsgcmVsb2FkIG1pZC1zZXNzaW9uLlxuICAgIG9wdGltaXplRGVwczoge1xuICAgICAgaW5jbHVkZTogW1xuICAgICAgICBcIkBiYXNlLXVpL3JlYWN0L2J1dHRvblwiLFxuICAgICAgICBcIkBiYXNlLXVpL3JlYWN0L2NoZWNrYm94XCIsXG4gICAgICAgIFwiQGJhc2UtdWkvcmVhY3QvZGlhbG9nXCIsXG4gICAgICAgIFwiQGJhc2UtdWkvcmVhY3QvaW5wdXRcIixcbiAgICAgICAgXCJAYmFzZS11aS9yZWFjdC9tZW51XCIsXG4gICAgICAgIFwiQGJhc2UtdWkvcmVhY3QvbWVyZ2UtcHJvcHNcIixcbiAgICAgICAgXCJAYmFzZS11aS9yZWFjdC9wb3BvdmVyXCIsXG4gICAgICAgIFwiQGJhc2UtdWkvcmVhY3Qvc2VsZWN0XCIsXG4gICAgICAgIFwiQGJhc2UtdWkvcmVhY3QvdGFic1wiLFxuICAgICAgICBcIkBiYXNlLXVpL3JlYWN0L3VzZS1yZW5kZXJcIixcbiAgICAgICAgXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIixcbiAgICAgICAgXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIixcbiAgICAgICAgXCJjbHN4XCIsXG4gICAgICAgIFwiZGF0ZS1mbnNcIixcbiAgICAgICAgXCJAaWNvbnMtcGFjay9yZWFjdC1zaW1wbGUtaWNvbnNcIixcbiAgICAgICAgXCJsdWNpZGUtcmVhY3QtdXBzdHJlYW1cIixcbiAgICAgICAgXCJtb3Rpb24vcmVhY3RcIixcbiAgICAgICAgXCJuZXh0LXRoZW1lc1wiLFxuICAgICAgICBcInJlYWN0XCIsXG4gICAgICAgIFwicmVhY3QtZGF5LXBpY2tlclwiLFxuICAgICAgICBcInJlYWN0LWRvbS9jbGllbnRcIixcbiAgICAgICAgXCJyZWFjdC1pc1wiLFxuICAgICAgICBcInJlYWN0LXJvdXRlci1kb21cIixcbiAgICAgICAgXCJyZWNoYXJ0cy11cHN0cmVhbVwiLFxuICAgICAgICBcInNvbm5lclwiLFxuICAgICAgICBcInRhaWx3aW5kLW1lcmdlXCIsXG4gICAgICBdLFxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICBob3N0OiB0cnVlLFxuICAgICAgcG9ydDogMzAwMCxcbiAgICAgIGFsbG93ZWRIb3N0czogdHJ1ZSxcbiAgICAgIC8vIFByZXZpZXcgcHJvYmUgKyAvZWRpdC1maWxlIGFyZSBjcm9zcy1vcmlnaW4gZnJvbSB0aGUgRW1lcmdlbnQgdGFiOyBWaXRlIGRlZmF1bHRzIHRvIGxvY2FsaG9zdC1vbmx5IENPUlMuXG4gICAgICBjb3JzOiB0cnVlLFxuICAgICAgLy8gTm8gaG1yLmNsaWVudFBvcnQgb3ZlcnJpZGU6IFZpdGUgaW5mZXJzIHRoZSBXUyB0YXJnZXQgZnJvbSB3aW5kb3cubG9jYXRpb24sIHdoaWNoXG4gICAgICAvLyBpcyBjb3JyZWN0IG9uIGJvdGggbG9jYWxob3N0OjMwMDAgKHNtb2tlKSBhbmQgdGhlIGh0dHBzLzo0NDMgcHJldmlldyBwcm94eS5cbiAgICAgIC8vIEJ1aWxkLWVycm9yIHJlbmRlcmluZzogZW1lcmdlbnQtb3ZlcmxheSB3aGVuIGl0IGxvYWRlZCwgZWxzZSBWaXRlJ3Mgb3duIG92ZXJsYXkuXG4gICAgICBobXI6IGhvdFJlbG9hZERpc2FibGVkID8gZmFsc2UgOiB7IG92ZXJsYXk6ICFlbWVyZ2VudE92ZXJsYXkgfSxcbiAgICAgIHdhdGNoOiBob3RSZWxvYWREaXNhYmxlZCA/IG51bGwgOiB7IHVzZVBvbGxpbmc6IHRydWUsIGludGVydmFsOiAzMDAgfSxcbiAgICAgIC8vIFRoZSAvYXBpIHByb3h5IGNvbnZlbnRpb246IGZyb250ZW5kIGNvZGUgY2FsbHMgcmVsYXRpdmUgL2FwaS8qLCBuZXZlciBhblxuICAgICAgLy8gYWJzb2x1dGUgYmFja2VuZCBVUkwuIFRhcmdldCBpcyB0aGUgRmFzdEFQSSBkZXYgc2VydmVyIChzdXBlcnZpc29yOiBiYWNrZW5kKS5cbiAgICAgIHByb3h5OiB7XG4gICAgICAgIFwiL2FwaVwiOiB7XG4gICAgICAgICAgdGFyZ2V0OiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMVwiLFxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSBzYXRpc2ZpZXMgVXNlckNvbmZpZztcbn0pO1xuIl19