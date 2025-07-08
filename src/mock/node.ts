import { setupServer } from "msw/node";
import { newtHandlers } from "./newt/handlers";

export const server = setupServer(...newtHandlers);
