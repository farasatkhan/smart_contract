import { ethers } from "ethers";

function getEth() {
    // @ts-ignore
    const eth = window.ethereum;
    if (!eth) {
        throw new Error("No ethereum object");
    }
    return eth;
}

async function hasAccounts() {
    const eth = getEth();
    const accounts = await eth.request({ method: "eth_accounts" }) as string[];
    return accounts && accounts.length;
}

async function requestAccounts() {
    const eth = getEth();
    const accounts = await eth.request({ method: "eth_requestAccounts" }) as string[];
    return accounts && accounts.length;
}

async function run() {
    if (!await hasAccounts() && !await requestAccounts()) {
        throw new Error("No accounts");
    }
    const address = process.env.CONTRACT_ADDRESS;

    const Contract = new ethers.Contract(
        address,
        [
            "function main() public pure returns (string memory)"
        ],
        new ethers.providers.Web3Provider(getEth()),
    )

    document.body.innerHTML = await Contract.main();
}

run();

