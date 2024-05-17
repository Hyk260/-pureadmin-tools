import { nodeResolve } from "@rollup/plugin-node-resolve"; //解析第三方模块
// import typescript from 'rollup-plugin-typescript2';
import commonjs from "@rollup/plugin-commonjs"; // 支持commonjs规范
import alias from "@rollup/plugin-alias";
import replace from "@rollup/plugin-replace";
import eslint from "@rollup/plugin-eslint";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser"; // 支持压缩js
import clear from "rollup-plugin-clear";
import { name, version, author } from "../package.json";

const pkgName = "tools";
const banner =
  "/*!\n" +
  ` * ${name} v${version}\n` +
  ` * (c) ${new Date().getFullYear()} ${author}\n` +
  " * Released under the MIT License.\n" +
  " */";

export default {
  input: "src/index.js",
  output: [
    // {
    //   file: `dist/${pkgName}.js`,
    //   format: 'iife',
    //   name: pkgName,
    //   banner,
    //   plugins: [terser()],
    // },
    // {
    //   file: `dist/${pkgName}.cjs.js`,
    //   format: "cjs",
    //   name: pkgName,
    //   banner,
    // },
    {
      file: `dist/${pkgName}.esm.js`,
      format: "es",
      banner,
    },
    // {
    //   file: `dist/${pkgName}.umd.js`,
    //   format: "umd",
    //   name: pkgName,
    //   banner,
    // },
    {
      file: `dist/${pkgName}.umd.min.js`,
      format: "umd",
      name: pkgName,
      banner,
      plugins: [terser()],
    },
  ],
  plugins: [
    clear({ targets: ["dist"] }),
    alias(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
      preventAssignment: true,
    }),
    nodeResolve({
      extensions: [".js", ".ts"],
    }),
    // typescript({
    //   exclude: "node_modules/**",
    //   typescript: require("typescript")
    // }),
    commonjs({
      include: "node_modules/**",
    }),
    // eslint({
    //   throwOnError: false,
    //   include: ['src/**'],
    //   exclude: ['node_modules/**']
    // }),
    babel({ babelHelpers: "bundled" }),
  ],
};
