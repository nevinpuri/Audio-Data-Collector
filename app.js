const fs = require("fs");

fs.writeFileSync("asdf.txt", "");

fs.readFile("output.txt", "UTF-8", (err, data) => {
  var dataArray = data.split("\n");
  console.log(dataArray);
  let something = 0;
  let hi = 0;

  let someArray = [];

  dataArray.forEach((line) => {
    if (line.length > 0) someArray.push(line.length);
  });

  console.log(someArray);

  let hola = 0;
  for (let k = 0; k < someArray.length - 1; k++) {
    hola += someArray[k];
  }
  console.log(hola / someArray.length);
});
