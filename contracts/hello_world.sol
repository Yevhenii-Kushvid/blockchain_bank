pragma solidity ^0.4.2;

contract HelloWorld {
        event Print(string out);
        function() { Print("Hello, World!"); }
}
