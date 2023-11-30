import { run } from "@mermaid-js/mermaid-cli";
import * as os from "node:os";
import * as fs from "node:fs";
import * as path from "node:path";

const generate = async (theme) => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "mmd"));
  const dst = path.join(tmpDir, "dst.svg");
  await run("./sample.mmd", dst, {
    
    parseMMDOptions: {
      backgroundColor: "rgba(0, 0, 0, 0)",
      mermaidConfig: {
        theme,
        //darkMode: true,
      }
    }
  })
  const svg = fs.readFileSync(dst, "utf8");
  fs.rmSync(dst);
  return svg;
}

export default {
  async load() {
    return {
      light: await generate("default"),
      dark: await generate("dark"),
    };
  }
}
