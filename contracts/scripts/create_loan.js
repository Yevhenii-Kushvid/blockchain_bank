var redis = require("redis");
var client = redis.createClient();

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://13.94.100.111:8545"));

var fs = require('fs');
var abi = JSON.parse(fs.readFileSync('./contracts/build/loan.abi').toString());

// var LoanContract = web3.eth.contract(abi);

var address = null;
client.get('contract', function(err, reply) {
    address = reply;
});
// contractInstance = LoanContract.at(address);

client.quit(); 