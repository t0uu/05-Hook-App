import { createContext } from "react";

// Para qué creamos este UserContext?
// Uno de los objetivos es saber que es lo que contiene nuestros contexto
// Nos va a servir para que nuestro hook de React busque nuestro contexto
// Y también para definir el proveedor
export const UserContext = createContext();