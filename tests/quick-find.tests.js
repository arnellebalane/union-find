const test = require('ava');
const UnionFind = require('../source/quick-find');

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

test('connected(source, target)', (t) => {
    const uf = new UnionFind(5);

    t.false(uf.connected(0, 1));
    t.false(uf.connected(0, 4));

    uf.union(0, 1);
    t.true(uf.connected(0, 1));

    uf.union(2, 3);
    t.true(uf.connected(2, 3));

    uf.union(3, 4);
    t.true(uf.connected(3, 4));
    t.true(uf.connected(2, 4));

    uf.union(4, 0);
    t.true(uf.connected(4, 0));
    t.true(uf.connected(1, 4));
    t.true(uf.connected(1, 3));
});
