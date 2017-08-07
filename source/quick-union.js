class UnionFind {
    constructor(size) {
        this.nodes = [];
        for (let i = 0; i < size; i++) {
            this.nodes.push(i);
        }
    }

    union(source, target) {
        this.nodes[target] = source;
    }

    connected(source, target) {
        return this.getRoot(source) === this.getRoot(target);
    }

    getRoot(node) {
        while (this.nodes[node] !== node) {
            node = this.nodes[node];
        }
        return node;
    }
}

module.exports = UnionFind;
