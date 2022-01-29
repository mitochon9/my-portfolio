import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "mitochon9",
  apiKey: process.env.MICROCMS_API_KEY,
});
