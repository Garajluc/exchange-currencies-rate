const fs = require("fs");
const path = require("path");

const flagsDirectory = path.join(__dirname, "public", "flags");
const outputJsonPath = path.join(__dirname, "public", "flags.json");

fs.readdir(flagsDirectory, (err, files) => {
  if (err) {
    console.error("Failed to read the flags directory", err);
    process.exit(1);
  }

  const imageFiles = files.filter((file) =>
    /\.(png|jpg|jpeg|gif|svg)$/.test(file)
  );

  fs.writeFile(outputJsonPath, JSON.stringify(imageFiles, null, 2), (err) => {
    if (err) {
      console.error("Failed to write flags.json", err);
      process.exit(1);
    }

    console.log(`Successfully created ${outputJsonPath}`);
  });
});
