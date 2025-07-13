import { setupServer } from "msw/node";
import { microcmsHandlers } from "./microcms/handlers";

export const server = setupServer(...microcmsHandlers);
