const file = await Deno.open("./src/data/testData.txt");

await Deno.copy(file, Deno.stdout);
