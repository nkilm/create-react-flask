#!/usr/bin/env node

const { execSync } = require("child_process");

const URL = "https://github.com/nkilm/create-react-flask";
const repositoryName = process.argv[2]? process.argv[2]: `${__dirname}/create-react-flask`;

const runCommand = (cmd) => {
    try {
        execSync(cmd, { stdio: "inherit" });
    } catch (err) {
        console.log(`Failed to execute ${cmd}`, err);
        return false;
    }
    return true;
};

const isGitInitialized = () =>{
    try {
        execSync("git rev-parse --git-dir",{stderr: 'pipe',stdio: 'pipe'});
    } catch (error) {
        return false;
    }
    return true;
}

const gitCloneCommand = `git clone --depth 1 ${URL} ${repositoryName}`;
const installDepCommand = `cd ${repositoryName} && npm install`;
const gitCleanupCommand = `cd ${repositoryName} && rm -rf .git`;
const initGitCommand = `git init`;
const initialCommit = `git commit - "initial commit: template setup using create-react-flask`;

console.log(`Cloning the repository with name ${repositoryName}`);

const commandOutput = runCommand(gitCloneCommand);
if (!commandOutput) process.exit(1);

const installDepOutput = runCommand(installDepCommand);
if (!installDepOutput) process.exit(1);

const gitCleanupOutput = runCommand(gitCleanupCommand);
if (!gitCleanupOutput) process.exit(1);

if (!isGitInitialized()) {
    const gitInitOutput = runCommand(initGitCommand);
    if (!gitInitOutput) process.exit(1);
    const initialCmt = runCommand(initialCommit);
    if (!initialCmt) process.exit(1);
}

console.log(
    `Congratulations! You are ready.\nHappy Hacking!`
);
console.log(`cd ${repositoryName} && npm start`);
