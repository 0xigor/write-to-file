
const process = require('process');
const cp = require('child_process');
const path = require('path');

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  const testString = 'TEST';
  
  process.env['INPUT_PATH'] = "./test.txt";  
  process.env['INPUT_SECRET'] = Buffer.from(testString).toString('base64');
  
  const ip = path.join(__dirname, 'index.js');
  const result = cp.execSync(`node ${ip}`, {env: process.env}).toString();
  console.log(result);

  // verify
  let decodedSecret = cp.execSync(`cat ${process.env['INPUT_PATH']}`).toString();
  expect(decodedSecret).toBe(testString);

  // cleanup
  cp.execSync(`rm ${process.env['INPUT_PATH']}`).toString();
})
