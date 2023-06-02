const esbuild = require('esbuild');
const watch = require('watch');
const path = require('path');
const fs = require('fs');

const bundle = (inputFile, outputFile) => {
  esbuild
    .build({
      entryPoints: [inputFile],
      outfile: outputFile,
      bundle: true,
      minify: true,
      treeShaking: true,
    })
    .catch(() => process.exit(1));
};

const watchDirectory = (dir) => {
  fs.readdir(dir, (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stat) => {
        if (err) throw err;
        if (stat.isDirectory()) {
          watchDirectory(filePath);
        } else if (file.endsWith('bundleme.js')) {
          const outputFile = path.join(path.dirname(filePath), 'bundle.js');
          bundle(filePath, outputFile);
        }
      });
    });
  });
};


setInterval(() => {watchDirectory('./')}, 1000);