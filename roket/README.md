
# Decentralized personal health record application

The project uses blockchain and smart contracts to let individuals manage and secure their health data. The Project's goal is to empower people to control their health information, communicate better with healthcare providers, and drive innovation in healthcare.


&nbsp; 

The images show the successful deployment and working of the 

# Deployment and Running Instructions

&nbsp;

Requirements- Metamask,Nodejs,lite-server,Web3js

### MetaMask Browser Extension

You can download the metamask extension to run the application for transactions.

You can find the latest version of MetaMask on [their official website](https://metamask.io/). For help using MetaMask, visit their [User Support Site](https://metamask.zendesk.com/hc/en-us).

For [general questions](https://community.metamask.io/c/learn/26), [feature requests](https://community.metamask.io/c/feature-requests-ideas/13), or [developer questions](https://community.metamask.io/c/developer-questions/11), visit their [Community Forum](https://community.metamask.io/).

MetaMask supports Firefox, Google Chrome, and Chromium-based browsers. We recommend using the latest available browser version.

For up to the minute news, follow their [Twitter](https://twitter.com/metamask) or [Medium](https://medium.com/metamask) pages.

To learn how to develop MetaMask-compatible applications, visit their [Developer Docs](https://metamask.github.io/metamask-docs/).

To learn how to contribute to the MetaMask project itself, visit their [Internal Docs](https://github.com/MetaMask/metamask-extension/tree/develop/docs).

&nbsp;
&nbsp;

### Remix IDE


Please Refer the official documentation or the GITHUB Repository to install and run REMIX IDE for deploying Smart contracts

[Official Website](https://remix-ide.readthedocs.io/en/latest/run.html)
[Github](https://github.com/ethereum/remix-project)

&nbsp;

&nbsp;

### Install Nodejs and Web3js

Please read the [documentation][docs] for more.

#### Installation

You can install the package either using [NPM](https://www.npmjs.com/package/web3) or using [Yarn](https://yarnpkg.com/package/web3)

#### Using NPM

```bash
npm install web3
```

#### Yarn

```bash
yarn add web3
```

#### In the Browser

Use the prebuilt `dist/web3.min.js`, or
build using the [web3.js][repo] repository:

```bash
npm run build
```

Then include `dist/web3.min.js` in your html file.
This will expose `Web3` on the window object.

Or via jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
```

UNPKG:

```html
<script src="https://unpkg.com/web3@latest/dist/web3.min.js"></script>
```

#### Usage

```js
// In Node.js
const Web3 = require('web3');
const web3 = new Web3('ws://localhost:8546');
console.log(web3);
// Output
{
    eth: ... ,
    shh: ... ,
    utils: ...,
    ...
}
```

Additionally you can set a provider using `web3.setProvider()` (e.g. WebsocketProvider):

```js
web3.setProvider('ws://localhost:8546');
// or
web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:8546'));
```

There you go, now you can use it:

```js
web3.eth.getAccounts().then(console.log);
```


&nbsp;

&nbsp;

#### After this step Deploy the contracts on Remix ide, Install lite-server and start a new server using lite-server and run the application

## The problem DECENTRALIZED PERSONAL HEALTH RECORD APPLICATION solves

&nbsp;

Problem Statement: Traditional and centralized methods for storing critical medical data are vulnerable to attacks and thefts, posing significant challenges in data sharing and privacy preservation due to the sensitive nature of medical information.

Proposed Solution: Develop a decentralized blockchain-based application that ensures secure, tamper-proof storage and patient-controlled data sharing, enhancing privacy, interoperability, and efficiency, particularly in emergency situations.
