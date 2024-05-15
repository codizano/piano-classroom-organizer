import { createClient } from "@sanity/client";
const config = {
  projectId: "1a9ed0z6", // reemplaza con tu propio ID de Proyecto
  dataset: "production", // reemplaza con nombre de tu conjunto de datos deseado
  useCdn: false, //
  apiVersion: "2021-06-07",
};

export const sanityClient = createClient(config);
