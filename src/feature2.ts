import {
  green,
  yellow,
  bold,
  underline,
} from "https://deno.land/std/fmt/colors.ts";

console.log(`${green("green")} text`);
console.log(`${yellow("yellow")} text`);
console.log(`${bold(yellow("yellow"))} text bold`);
console.log(`${underline("underline text")}`);
