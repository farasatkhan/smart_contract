import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
    const ContractA = await ethers.getContractFactory("ContractA");
    const contract = await ContractA.deploy();
    await contract.deployed();

    return contract;
}

async function sayWorking(deploy) {
    console.log("Working: ", await deploy.main());
}

deploy().then(sayWorking);