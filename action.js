const { writeFile } = require('node:fs/promises');

async function write(path, secret) {
  const content = Buffer.from(secret, 'base64');
  writeFile(path, content.toString('ascii'));
}

module.exports = write;
