const lukeSkywalker = await fetch("https://swapi.dev/api/people/1/");

const data = await lukeSkywalker.json();

console.log(data);

setTimeout(() => console.log("set timeout 1second"), 1000);

setInterval(() => console.log("set interval 2 seconds"), 2000);
