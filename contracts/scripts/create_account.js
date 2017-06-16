Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://13.94.100.111:8545"));

console.log(web3.personal.newAccount());