const test = require('ava');
const UnionFind = require('./index');

test('constructor(size)', (t) => {
    const uf = new UnionFind(5);
    const expected = [0, 1, 2, 3, 4];
    t.deepEqual(uf.nodes, expected);
});

test('union(source, target)', (t) => {
    const uf = new UnionFind(5);

    uf.union(0, 1);
    t.deepEqual(uf.nodes, [0, 0, 2, 3, 4]);

    uf.union(2, 3);
    t.deepEqual(uf.nodes, [0, 0, 2, 2, 4]);

    uf.union(3, 4);
    t.deepEqual(uf.nodes, [0, 0, 2, 2, 2]);

    uf.union(4, 0);
    t.deepEqual(uf.nodes, [2, 2, 2, 2, 2]);
});
