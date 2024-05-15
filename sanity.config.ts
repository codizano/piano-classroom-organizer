import { defineConfig } from "sanity";
import { structureTool, StructureBuilder } from "sanity/structure";
import schema from "./sanity/schemas"; // Importo el schema
import { visionTool } from "@sanity/vision";
const config = defineConfig({
  projectId: "1a9ed0z6", // Coloca el Id que corresponde a tu proyecto
  dataset: "production",
  title: "Mi Blog Personal",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S: StructureBuilder) => {
        return S.defaults();
      },
    }),
    visionTool(),
  ],
  schema: { types: schema }, // Defino mi schema dentro del objeto
});
export default config;
