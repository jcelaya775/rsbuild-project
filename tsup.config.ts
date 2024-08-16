import { defineConfig } from "tsup";

export default defineConfig({
  // ... other options
  format: ["esm", "cjs"],
  target: "es2020",
  entry: ["src/**/*.ts(x)"],
  dts: true,
});
