const BS = require('browser-sync');

const config = {
  server: true,
  files: "public/**/*.css",
};

BS(config);
