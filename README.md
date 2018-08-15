# nodeEcApi

## Dependencies
1. NodeJS version 8+
2. Follow the installation instructions of https://github.com/rynobey/ECC-API

## Installation
To install: `npm i git+ssh://git@github.com/coeniebeyers/nodeEcApi.git`

## Example usage

Ensure that https://github.com/rynobey/ECC-API is running

```nodejs
const ecApi = require('nodeecapi')

async function run(){
  const baseMul = await ecApi.baseMul('0x1')
  console.log({baseMul})
}

run()
```
