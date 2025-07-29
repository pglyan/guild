import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

const handlers = [
  http.get("/", () => {
    return HttpResponse.json({ message: "Tank!" });
  }),
];

export const worker = setupWorker(...handlers);
