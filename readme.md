# vbb-mode-weights

**Weights of modes of public transport in Berlin.** Used for ranking in search.

[![npm version](https://img.shields.io/npm/v/vbb-mode-weights.svg)](https://www.npmjs.com/package/vbb-mode-weights)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/vbb-mode-weights.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```shell
npm install vbb-mode-weights
```


## Usage

The keys are [from `vbb-util`](https://github.com/derhuerst/vbb-util/blob/90a9446/products.js). They will be changed to be compatible with the [*Friendly Public Transport Format*](https://github.com/public-transport/friendly-public-transport-format) soon.

```js
const weights = require('vbb-mode-weights')

console.log(weights.tram)
```


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/vbb-mode-weights/issues).
