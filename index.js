const core = require('@actions/core');
const wait = require('./wait');
const github = require('@actions/github');

// most @actions toolkit packages have async methods
async function run() {

  // tlin's shit
  //console.log(github.context)
  core.info(JSON.stringify(github.context))

  try {
    const ms = core.getInput('milliseconds');
    core.info(`Tlin's shit is waiting ${ms} milliseconds ...`);

    core.debug((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    await wait(parseInt(ms));
    core.info((new Date()).toTimeString());

    core.setOutput('time', new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
