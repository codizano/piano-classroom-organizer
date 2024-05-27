// Este es un cliente creado con next-sanity

import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "1a9ed0z6", // reemplaza con tu propio ID de Proyecto
  dataset: "production", // reemplaza con nombre de tu conjunto de datos deseado
  useCdn: true, //
  apiVersion: "2023-03-25",
});
