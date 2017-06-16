Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://13.94.100.111:8545"));

// console.log(web3.eth.accounts);
var string = '{';

web3.eth.accounts.forEach((el, index) => {
  string += '"' + el + '": "' + web3.eth.getBalance(el).toString(10) + '"';

  if (web3.eth.accounts.length - 1 != index){
    string += ", "
  }
})
string += '}';
console.log(string);
