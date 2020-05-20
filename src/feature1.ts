import { parse } from "https://deno.land/std/flags/mod.ts";

const { args } = Deno;

console.log("Running parse...");

console.log(parse(args));
