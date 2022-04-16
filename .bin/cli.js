#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");

const runCommand = (command) => {
	try {
		execSync(command, { stdio: "inherit" });
	} catch (error) {
		console.error(`Failed to execute ${command}`, error);
		return false;
	}

	return true;
};

const projectName = process.argv[2];
const gitCloneCmd = `git clone --depth 1 https://github.com/grid-momenta/template-next-app.git ${projectName}`;
const changeDirCmd = `cd ${projectName}`;
const npmInstallCmd = "npm install";

console.log("Cloning Nextjs template");
const gitClone = runCommand(gitCloneCmd);
if (!gitClone) process.exit(-1);

console.log("Changing directory");
const changeDir = runCommand(changeDirCmd);
if (!changeDir) process.exit(-1);

console.log("Updating package name");
const data = JSON.parse(fs.readFileSync("package.json"));
data.name = projectName;
fs.writeFileSync("package.json", JSON.stringify(data, null, 4));

console.log("Installing packages");
const npmInstall = runCommand(npmInstallCmd);
if (!npmInstall) process.exit(-1);

console.log("Done");
console.log("Run 'npm start' to start the app");
