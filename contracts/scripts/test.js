// var http = require('http');
//     http.createServer(function (req, res) {
//       from = '0xef7a471998c2fec8a1094b739ad62e6868c59eb5';
//       to = '0x4afB18EcF0bc50E7A1EFBa2078EF3B5F18A5fb85';

//       web3.eth.defaultAccount = to;

//       res.writeHead(200, {'Content-Type': 'text/plain'});

//       // get balance
//       var Web3 = require('web3');
//       var web3 = new Web3();
//       const solc = require('solc');
//       const fs = require("fs");


//       web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

//       var coinbase = web3.eth.coinbase;
//       var balance = web3.eth.getBalance(coinbase);

//       console.log(balance);
//       res.end("balance");

//       // compiler

//       // var input = 'contract x { function g() {} }';
//       // var output = solc.compile(input, 1); // 1 activates the optimiser
//       //
//       // var abi = null;
//       // var code = null;
//       // for (var contractName in output.contracts) {
//       // 	// code and ABI that are needed by web3
//       // 	console.log(contractName + ': ' + output.contracts[contractName].bytecode);
//       // 	console.log(contractName + '; ' + JSON.parse(output.contracts[contractName].interface));
//       //
//       //   code = output.contracts[contractName].bytecode;
//       //   abi = JSON.parse(output.contracts[contractName].interface);
//       // }

//       // Deploy Concratrs
//       var primaryAddress = web3.eth.accounts[0];
//       // let source = fs.readFileSync('/mnt/c/Sites/blockchain_bank/contracts/loan.sol', 'utf8');
//       let source = fs.readFileSync('/mnt/c/Sites/blockchain_bank/contracts/hello_world.sol', 'utf8');
//       let compiledContract = solc.compile(source, 1);
//       // //
//       // let abi = compiledContract.contracts[':greeter'].interface;
//       // let bytecode = compiledContract.contracts[':greeter'].bytecode;
//       let abi = compiledContract.contracts[':HelloWorld'].interface;
//       let bytecode = compiledContract.contracts[':HelloWorld'].bytecode;
//       // let gasEstimate = web3.eth.estimateGas({to: "0x4afB18EcF0bc50E7A1EFBa2078EF3B5F18A5fb85", data: bytecode});
//       let MyContract = web3.eth.contract(JSON.parse(abi));

//       console.log("==========================================");
//       console.log(MyContract);
//       console.log("==========================================");
//       // console.log(MyContract);

//       MyContract.new([10], {from: from, data: bytecode});

//       // var myContractReturned = MyContract.new([10], {
//       //  from: from,
//       //  data:bytecode,
//       //  gas: 30000}, function(err, myContract){
//       //   if(!err) {
//       //      // NOTE: The callback will fire twice!
//       //      // Once the contract has the transactionHash property set and once its deployed on an address.
//       //
//       //      // e.g. check tx hash on the first call (transaction send)
//       //      if(!myContract.address) {
//       //          console.log(myContract.transactionHash) // The hash of the transaction, which deploys the contract
//       //
//       //      // check address on the second call (contract deployed)
//       //      } else {
//       //          console.log(myContract.address) // the contract address
//       //      }
//       //
//       //      // Note that the returned "myContractReturned" === "myContract",
//       //      // so the returned "myContractReturned" object will also get the address set.
//       //   }
//       // });
//       //
//       // console.log(myContractReturned.transactionHash);
//       // console.log(myContractReturned.address);


//       // ABI UPDATE TEST
//       // var abi = require('solc/abi');
//       //
//       // var inputABI = [{"constant":false,"inputs":[],"name":"hello","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"}];
//       // var outputABI = abi.update('0.3.6', inputABI)

//       // var addrTest = 'Mort Reany';
//       // var MyContract = web3.eth.contract(abi);
//       // //
//       // web3.personal.unlockAccount("0xef7a471998c2fec8a1094b739ad62e6868c59eb5", 'Test');
//       // web3.eth.sendTransaction({data: code, from: "0xef7a471998c2fec8a1094b739ad62e6868c59eb5", to:"0x4afB18EcF0bc50E7A1EFBa2078EF3B5F18A5fb85"}, function(err, address) {
//       //   if (!err)
//       //     console.log(address); // "0x7f9fade1c0d57a7af66ab4ead7c2eb7b11a91385"
//       // });
//       // //
//       //
//       // var code = "603d80600c6000396000f3007c01000000000000000000000000000000000000000000000000000000006000350463c6888fa18114602d57005b6007600435028060005260206000f3";
//       //
//       // web3.eth.sendTransaction({data: code, from: "0xef7a471998c2fec8a1094b739ad62e6868c59eb5", to:"0x4afB18EcF0bc50E7A1EFBa2078EF3B5F18A5fb85"}, function(err, address) {
//       //   if (!err)
//       //     console.log(address); // "0x7f9fade1c0d57a7af66ab4ead7c2eb7b11a91385"
//       // });

//       // contract abi

//       // creation of contract object
//       // var MyContract = web3.eth.contract(abi);
//       //
//       // console.log("MyContract");
//       // console.log(MyContract);
//       //
//       // console.log(web3.eth.getBalance("0xef7a471998c2fec8a1094b739ad62e6868c59eb5"));
//       // console.log(web3.eth.getBalance("0x4afB18EcF0bc50E7A1EFBa2078EF3B5F18A5fb85"));
//       //
//       // web3.personal.unlockAccount("0xef7a471998c2fec8a1094b739ad62e6868c59eb5", 'Test');
//       // web3.eth.sendTransaction({from: "0xef7a471998c2fec8a1094b739ad62e6868c59eb5", to:"0x4afB18EcF0bc50E7A1EFBa2078EF3B5F18A5fb85", value: web3.toWei('1', 'ether')});
//       //
//       // console.log(web3.eth.getBalance("0xef7a471998c2fec8a1094b739ad62e6868c59eb5"));
//       // console.log(web3.eth.getBalance("0x4afB18EcF0bc50E7A1EFBa2078EF3B5F18A5fb85"));


//     }).listen(1337, "127.0.0.1");
//     console.log('Server running at http://127.0.0.1:1337/');


// // web3.personal.unlockAccount('0x2080cd8b75d55fdb3fe57a02ef827ab1f0942a21', 'verystrongpassword', 15000)

// process.argv.forEach(function (val, index, array) {
//   console.log(index + ': ' + val);
// });

// console.log(process.argv[2]);

Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://13.94.100.111:8545"));
var filter = web3.eth.filter({fromBlock:0, toBlock: 'latest', address: '0x839677cf8de2baed77478719bde92593109f8ce1'});
var result = filter.get(function (err, transactions) {
  transactions.forEach(function (tx) {
    var txInfo = web3.eth.getTransactionReceipt(tx.transactionHash);
    /* Here you have
    txInfo.contractAddress;
    txInfo.from;
    txInfo.input;
    */

    console.log('======================');
    console.log(txInfo)
    console.log('======================');
  });
});
