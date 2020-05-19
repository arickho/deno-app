import { serve } from "https://deno.land/std/http/server.ts";

const PORT = 8001;
const s = serve({ port: PORT });

console.log(`http://localhost:${PORT}`);

for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
