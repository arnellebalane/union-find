const test = require('ava');
const UnionFind = require('../source/quick-union');

test('constructor(size)', (t) => {
    const uf = new UnionFind(10);
    const expected = [0, 1, 2, 3, 4, 6, 7, 8, 9];
    t.deepEqual(uf.nodes, expected);
});

test('union(source, target)', (t) => {
    const uf = new UnionFind(10);

    uf.union(4, 3);
    t.deepEqual(uf.nodes, [0, 1, 2, 3, 3, 5, 6, 7, 8, 9]);

    uf.union(3, 8);
    t.deepEqual(uf.nodes, [0, 1, 2, 8, 3, 5, 6, 7, 8, 9]);

    uf.union(6, 5);
    t.deepEqual(uf.nodes, [0, 1, 2, 8, 3, 5, 5, 7, 8, 9]);

    uf.union(9, 4);
    t.deepEqual(uf.nodes, [0, 1, 2, 8, 3, 5, 5, 7, 8, 8]);

    uf.union(2, 1);
    t.deepEqual(uf.nodes, [0, 1, 1, 8, 3, 5, 5, 7, 8, 8]);

    uf.union(5, 0);
    t.deepEqual(uf.nodes, [0, 1, 1, 8, 3, 0, 5, 7, 8, 8]);

    uf.union(7, 2);
    t.deepEqual(uf.nodes, [0, 1, 1, 8, 3, 0, 5, 1, 8, 8]);

    uf.union(6, 1);
    t.deepEqual(uf.nodes, [1, 1, 1, 8, 3, 0, 5, 1, 8, 8]);

    uf.union(7, 3);
    t.deepEqual(uf.nodes, [1, 8, 1, 8, 3, 0, 5, 1, 8, 8]);
});

test('connected(source, target)', (t) => {
    const uf = new UnionFind(10);

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
