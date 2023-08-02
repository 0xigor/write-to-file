const { writeFile, chmod } = require('node:fs/promises');

async function write(path, secret) {
  const content = Buffer.from(secret, 'base64');
  await writeFile(path, content.toString('ascii'));
  await chmod(path, 440 )
}

module.exports = write;
