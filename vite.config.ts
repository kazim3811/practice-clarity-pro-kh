import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import os from "node:os";
import { componentTagger } from "lovable-tagger";

const DEBUG_ENDPOINT = "http://127.0.0.1:7327/ingest/f62c733a-6f21-472f-b6df-fbe754224eb5";
const DEBUG_SESSION_ID = "0be983";

const sendDebugLog = (hypothesisId: string, location: string, message: string, data: Record<string, unknown>) => {
  // #region agent log
  fetch(DEBUG_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Debug-Session-Id": DEBUG_SESSION_ID,
    },
    body: JSON.stringify({
      sessionId: DEBUG_SESSION_ID,
      runId: "pre-fix",
      hypothesisId,
      location,
      message,
      data,
      timestamp: Date.now(),
    }),
  }).catch(() => {});
  // #endregion
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  sendDebugLog("H3", "vite.config.ts:33", "config init", {
    mode,
    nodeVersion: process.version,
    platform: process.platform,
  });

  try {
    const interfaces = os.networkInterfaces();
    sendDebugLog("H2", "vite.config.ts:41", "os.networkInterfaces success", {
      interfaceCount: Object.keys(interfaces).length,
    });
  } catch (error) {
    sendDebugLog("H2", "vite.config.ts:45", "os.networkInterfaces error", {
      errorName: error instanceof Error ? error.name : "unknown",
      errorMessage: error instanceof Error ? error.message : String(error),
    });
  }

  const serverHost = "127.0.0.1";
  sendDebugLog("H1", "vite.config.ts:53", "server host selected", { serverHost, port: 8080 });

  const plugins = [react(), mode === "development" && componentTagger()].filter(Boolean);
  sendDebugLog("H4", "vite.config.ts:56", "plugin set resolved", { pluginCount: plugins.length });

  return {
    server: {
      host: serverHost,
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
    },
  };
});
