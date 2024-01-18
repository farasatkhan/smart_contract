import _ from "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";
import { expect } from "chai";

describe("Working", () => {
    it("should say working", async () => {
        const ContractA = await ethers.getContractFactory("ContractA");
        const contract = await ContractA.deploy();

        expect(await contract.main()).to.equal("Working");
    })
})