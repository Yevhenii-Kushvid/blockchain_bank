var redis = require("redis");
var client = redis.createClient();

var address = null;
client.get('contract', function(err, reply) {
    address = reply;

    var Web3 = require('web3');
    var web3 = new Web3(new Web3.providers.HttpProvider("http://13.94.100.111:8545"));

    var fs = require('fs');
    var abi = JSON.parse(fs.readFileSync('./contracts/build/loan.abi').toString());

    var LoanContract = web3.eth.contract(abi);
    var contractInstance = LoanContract.at(address, function(e, contractInstance) {

        if (contractInstance.address != undefined){
            console.log(contractInstance.get_from());
            console.log(contractInstance.get_to());
            console.log(contractInstance.get_amount());
            console.log(contractInstance.get_status());
        } else {
            console.log('Address not found.');
        }

        return contractInstance;
    });
    
    client.quit();
});