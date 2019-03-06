const open = require('opn');
const argparse = require('argparse');
const packageJson = require('../package.json');

const parser = new argparse.ArgumentParser({
  version: '1.0',
  addHelp: true,
  description: 'Scripts for managing connectors.',
});

parser.addArgument(['-s', '--script'], {
  choices: ['try_production'],
  dest: 'script',
  help: 'The script to run.',
  required: true,
});

const args = parser.parseArgs();

const openDeployment = (deploymentId) => {
  return open(
      `https://datastudio.google.com/datasources/create?connectorId=${deploymentId}`
  );
};

const main = async () => {
  switch (args.script) {
    case 'try_production': {
      await openDeployment(packageJson.deployments.production);
      break;
    }
    default: {
      throw new Error(`${args.script} is not supported yet.`);
    }
  }
};

(async () => {
  try {
    await main();
  } catch (e) {
    console.error(`${e}`);
    process.exit(1);
  }
  process.exit(0);
})();
