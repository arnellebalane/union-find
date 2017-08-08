class UnionFind {
    constructor(size) {
        this.nodes = [];
        for (let i = 0; i < size; i++) {
            this.nodes.push(i);
        }
    }

    union(source, target) {
        const sourceRoot = this.root(source);
        const targetRoot = this.root(target);
        this.nodes[sourceRoot] = targetRoot;
    }

    connected(source, target) {
        return this.root(source) === this.root(target);
    }

    root(node) {
        while (this.nodes[node] !== node) {
            node = this.nodes[node];
        }
        return node;
    }
}

module.exports = UnionFind;
