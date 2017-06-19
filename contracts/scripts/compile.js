var redis = require("redis");
var client = redis.createClient();

Web3 = require('web3');

fs = require('fs');

web3 = new Web3(new Web3.providers.HttpProvider("http://13.94.100.111:8545"));

var contractInstance = null;
code = fs.readFileSync('./contracts/loan.sol').toString();
contract =  web3.eth.compile.solidity(code);

fs.writeFile("./contracts/build/loan.abi", JSON.stringify(contract.info.abiDefinition), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});
fs.writeFile("./contracts/build/loan.code", contract.code, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
client.quit();


// LoanContract = web3.eth.contract(contract.info.abiDefinition);
// deployedContract = LoanContract.new('me', 'you', '100$', {data: contract.code, from: web3.eth.accounts[0], gas: 4712388 });
// contractInstance = LoanContract.at(deployedContract.address);

// client.set("contract", deployedContract.address, redis.print);
// contractInstance.get_status();

// web3.eth.defaultAccount = web3.eth.accounts[0]
// transaction_name = contractInstance.close_loan.sendTransaction();
// contractInstance.get_status();