class UnionFind {
    constructor(size) {
        this.nodes = [];
        for (let i = 0; i < size; i++) {
            this.nodes.push(i);
        }
    }

    union(source, target) {

    }

    connected(source, target) {
        return true;
    }

    find(target) {

    }
}

module.exports = UnionFind;
