# Union Find

Implementation of the **Union-Find** data structure for NodeJS.


## Installation

```bash
$ npm install git+https://git@github.com/arnellebalane/union-find.git
```


## Usage

This package exposes four implementations of the Union-Find data structure.

```js
import {
    QuickFindUF,
    QuickUnionUF,
    WeightedQuickUnionUF,
    PathCompressionUF
} from 'union-find';
```


## Api

- **`constructor(size)`**: Initializes a new Union-Find data structure with a given size.
- **`union(source, target)`**: Connects a node to another.
- **`connected(source, target)`** _(Boolean)_: Checks whether two nodes are connected.


## Example

```js
import { QuickFindUF } from 'union-find';

const uf = new QuickFindUF(10);
uf.union(4, 3);
uf.union(3, 8);
uf.connected(4, 8); // => true
uf.connected(1, 3); // => false
```


## Contributing

```bash
# or `npm` if yarn is not available
$ yarn install
$ yarn test
```


## License

MIT License
