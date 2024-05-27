// Este es un cliente creado con @sanity/client

import { createClient } from "@sanity/client";
const config = {
  projectId: "1a9ed0z6", // reemplaza con tu propio ID de Proyecto
  dataset: "production", // reemplaza con nombre de tu conjunto de datos deseado
  useCdn: false, //
  apiVersion: "2023-03-25",
  token: process.env.SANITY_API_TOKEN, // Token de autenticación (opcional)
  revalidateOnRestart: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);
