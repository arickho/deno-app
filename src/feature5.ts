import { serve } from "https://deno.land/std/http/server.ts";

const PORT = 8002;
const server = serve({ port: PORT });

console.log(`http://localhost:${PORT}`);

for await (const req of server) {
	const lukeData = await fetch("https://swapi.dev/api/people/1/");
	const data = await lukeData.json();
	req.respond({ body: JSON.stringify(data, undefined, 4) });
}
