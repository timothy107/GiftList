const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";

async function main() {
  
  const merkleTree = new MerkleTree(niceList);
  const testName = "Mae Hyatt";
  const index = niceList.findIndex((name) => name === testName);
  const merkleProof = merkleTree.getProof(index);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name:testName,
    merkleProof: merkleProof,
  });

  console.log({ gift });
}

main();
