const {exeSync} = require('child_process');

const URL = "https://github.com/nkilm/react-flask-template";
const repositoryName = process.argv[2];

const runCommand = cmd =>{
    try{
        exeSync(cmd,{stdio: 'inherit'});
    } catch (err){
        console.log(`Failed to execute ${cmd}`,err);
        return false;
    }
    return true;
}

const gitCloneCommand = `git clone --depth 1 ${URL} ${repositoryName}`;
const installDepCommand = `cd ${repositoryName} && npm install`;

console.log(`Cloning the repository with name ${repositoryName}`);

const commandOutput = runCommand(gitCloneCommand);
if (!commandOutput) process.exit(1);

const installDepOutput = runCommand(installDepCommand);
if (!installDepOutput) process.exit(1);

console.log(`Congratulations! You are ready. Follow the following commands to start`);
console.log(`cd ${repositoryName} && npm start`);