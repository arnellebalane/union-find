const test = require('ava');
const UnionFind = require('../source/weighted-quick-union');

test('constructor(size)', (t) => {
    const uf = new UnionFind(10);
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    t.deepEqual(uf.nodes, expected);
});

test('union(source, target)', (t) => {
    const uf = new UnionFind(10);

    uf.union(4, 3);
    t.deepEqual(uf.nodes, [0, 1, 2, 4, 4, 5, 6, 7, 8, 9]);

    uf.union(3, 8);
    t.deepEqual(uf.nodes, [0, 1, 2, 4, 4, 5, 6, 7, 4, 9]);

    uf.union(6, 5);
    t.deepEqual(uf.nodes, [0, 1, 2, 4, 4, 6, 6, 7, 4, 9]);

    uf.union(9, 4);
    t.deepEqual(uf.nodes, [0, 1, 2, 4, 4, 6, 6, 7, 4, 4]);

    uf.union(2, 1);
    t.deepEqual(uf.nodes, [0, 2, 2, 4, 4, 6, 6, 7, 4, 4]);

    uf.union(5, 0);
    t.deepEqual(uf.nodes, [6, 2, 2, 4, 4, 6, 6, 7, 4, 4]);

    uf.union(7, 2);
    t.deepEqual(uf.nodes, [6, 2, 2, 4, 4, 6, 6, 2, 4, 4]);

    uf.union(6, 1);
    t.deepEqual(uf.nodes, [6, 2, 6, 4, 4, 6, 6, 2, 4, 4]);

    uf.union(7, 3);
    t.deepEqual(uf.nodes, [6, 2, 6, 4, 6, 6, 6, 2, 4, 4]);
});

test('connected(source, target)', (t) => {
    const uf = new UnionFind(10);

    uf.union(4, 3);
    uf.union(3, 8);
    uf.union(6, 5);
    uf.union(9, 4);
    uf.union(2, 1);

    t.true(uf.connected(8, 9));
    t.false(uf.connected(5, 4));
});
