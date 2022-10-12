#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const { execSync } = require("child_process");

const URL = "https://github.com/nkilm/create-react-flask";
const repositoryName = process.argv[2];

const runCommand = (cmd) => {
    try {
        execSync(cmd, { stdio: "inherit" });
    } catch (err) {
        console.log(`Failed to execute ${cmd}`, err);
        return false;
    }
    return true;
};

const gitCloneCommand = `git clone --depth 1 ${URL} ${repositoryName}`;
const installDepCommand = `cd ${repositoryName} && npm install`;
const gitCleanupCommand = `cd ${repositoryName} && rm -rf .git`;

console.log(`Cloning the repository with name ${repositoryName}`);

const commandOutput = runCommand(gitCloneCommand);
if (!commandOutput) process.exit(1);

const installDepOutput = runCommand(installDepCommand);
if (!installDepOutput) process.exit(1);

const gitCleanupOutput = runCommand(gitCleanupCommand);
if (!gitCleanupOutput) process.exit(1);

if (!fs.existsSync(path.join(".", ".git"))) {
    const gitInitOutput = runCommand(initGitCommand);
    if (!gitInitOutput) process.exit(1);
}

console.log(
    `Congratulations! You are ready. Follow the following commands to start`
);
console.log(`cd ${repositoryName} && npm start`);
