const core = require('@actions/core');
const write = require('./action');

// most @actions toolkit packages have async methods
async function run() {
  try {
    const path = core.getInput('path');
    const secret = core.getInput('secret');
    core.info(`Writing secret to ${path}`);
    await write(path, secret);
    
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
