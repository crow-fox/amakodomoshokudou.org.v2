import { setupServer } from "msw/node";
import { handlers } from "./newt/handlers";

export const server = setupServer(...handlers);
