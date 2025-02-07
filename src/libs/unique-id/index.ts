import crypto from "node:crypto";

const uniqueIds: Set<string> = new Set();

export function uniqueId() {
  let id = crypto.randomUUID();
  while (uniqueIds.has(id)) {
    id = crypto.randomUUID();
  }
  uniqueIds.add(id);
  return id;
}
