var redis = require("redis");
var client = redis.createClient();

Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://13.94.100.111:8545"));

fs = require('fs');

code = fs.readFileSync('./contracts/build/loan.code').toString();
abi = JSON.parse(fs.readFileSync('./contracts/build/loan.abi').toString());

LoanContract = web3.eth.contract(abi);

var address = 'undefined'; 
client.set("contract", address, redis.print);

deployedContract = LoanContract.new(process.argv[2], process.argv[3], process.argv[4], {data: code, from: web3.eth.accounts[0], gas: 4712388 },function(err, hash){
  client.set("contract", hash.address, redis.print);
  address = hash.address;
  
  if (address != undefined){
    client.quit();
    console.log(address);
  } else {
    console.log('undefined');
  }
});

contractInstance = LoanContract.at(address);
