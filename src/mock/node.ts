import { setupServer } from "msw/node";
import { newtHandlers } from "./newt/handlers";
import { microcmsHandlers } from "./microcms/handlers";

export const server = setupServer(...newtHandlers, ...microcmsHandlers);
