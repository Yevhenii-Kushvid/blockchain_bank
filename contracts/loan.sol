pragma solidity ^0.4.2;

contract loan {
    /* define variables of the type string */
    string from;
    string to;
    string amount;

    string status;

    address public admin;

    /* this runs when the contract is executed */
    function loan(string _from, 
                  string _to, 
                  string _amount) public {
        from = _from;
        to = _to;
        amount = _amount;

        status = 'open';
        
        admin = msg.sender;
    }

    /* main function */
    function close_loan() returns (string) {
        status = 'closed';
    }

    function get_from() constant returns (string) {
        return from;
    }
    function get_to() constant returns (string) {
        return to;
    }
    function get_amount() public constant returns (string) {
        return amount;
    }
    
    function get_status() constant returns (string) {
        return status;
    }

    function kill() {
        if (msg.sender == admin) {
            suicide(admin);
        }
    }
}
