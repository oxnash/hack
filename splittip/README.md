# Splittip

An Ether Payment Splitter for musical royalties. It's a web based DApp test project using Solidity & Javascript (including the Web3 library).



## Overview
The current functionality consists of the following::
```
1. Adding recipients and their relative royalties of a song (name, address, % of royalties).
2. Depositing and sending them these shares based on a certain deposited amount for the song.
```
**Do not use with real funds without a proper audit**.

## Required Installations
1. NPM (https://www.npmjs.com/get-npm)
2. Truffle, using NPM (https://www.truffleframework.com/truffle) by typing **npm install truffle -g**
3. Ganache (https://www.truffleframework.com/ganache)
4. MetaMask - add it to your browser (https://metamask.io) and create a password

You should understand the basic functionality and purpose of these tools before moving forward.

## Getting Started 
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes:

1. Start Ganache and make sure that it's configured to localhost **port 8545**
2. Go to the project's local folder
3. Type **truffle migrate --reset --compile-all** in order to recompile and upload the Solidity contracts to the local testnet (Ganache)
4. Type **truffle console** to enter Truffle's Web3 console
5. Type **AppStein.new().then( result => {new_instance = result})** in order to save the information from the contract into a variable you can reference using a Javascript promise
6. Check the deployed contract's address by typing **new_instance.address**
7. Make sure that the address is the same in **line 160** in the **AppStein.html** file which is located in the project folder (**0x5227e903028a5ca06c029afe269053fd146f4540**). 
   If not, update the correct address.
8. Verify that the ABI in **line 70** in the **AppStein.html** file is the the value that resides under the **/build/contracts/AppStein.JSON** file. Another implementation is 
   possible for this, as suggested here, among other places (reading the JSON contents dynamically instead of entering the static ABI hardcoded value): 
   https://ethereum.stackexchange.com/questions/38828/what-is-the-best-way-to-get-the-json-abi-after-deploying-a-contract-with-truffle.

You should now be ready to go!

## Using the DApp
1. Open the **AppStein.html** file, located in the project folder
2. Open Metamask and login
3. Configure MetaMask to run on your localhost network on **port 8545** (using the dropdown menu in the main screen).
4. Configure MetaMask to use your Ganache account by importing the seed.
   This is explained here: https://ethereum.stackexchange.com/questions/34287/using-ganache-with-an-existing-metamask-account
5. Add a recipient, an address and a percentage of music royalties. Now press the **Add Recipient** button.
6. Add a song ID & named and enter an amount of Ether to submit.
7. Submit!
8. The amounts should be transferred in accordance to your specifications.

## Quick Guide for Developers
Here is a list of the files holding the logic of the DApp. I made these files as documented as possible.
```
1. /AppStein.html - Holds the HTML & JavaScript logic.
2. /Contracts/AppStein.sol - Holds the Solidity Logic.
3. /Contracts/Ownable.sol - Holds the Open Zeppelin Ownable contract Solidity logic. 
4. /style.css - Holds the styling & formatting for the html file.
5. /truffle.js and /truffle-config.js - Hold the project's configuration for the network exports & migrations.
```


