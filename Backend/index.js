const fs = require("fs");
const path = require("path");

// Synchronous way
const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("Data folder created.");
}

const filePath = path.join(dataFolder, "example.txt");

fs.writeFileSync(filePath, "Hello Word!!");
console.log("FIle created");

const readFromFile = fs.readFileSync(filePath, "utf8");
console.log("File content:", readFromFile);

fs.appendFileSync(filePath, "\nNew content added to the file.");
console.log("Content added");

// Asynchronous way
const asyncFilePath = path.join(dataFolder, "async-file.txt");

fs.writeFile(asyncFilePath, "Hello, async nodejs.", (err) => {
  if (err) throw err;
  console.log("Async file successfully created.");

  fs.readFile(asyncFilePath, "utf8", (err, data) => {
    if (err) throw err;
    console.log("Async file data:", data);
  });
});
