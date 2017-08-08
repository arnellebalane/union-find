class UnionFind {
    constructor(size) {
        this.nodes = [];
        this.sizes = new Array(size).fill(1);
        for (let i = 0; i < size; i++) {
            this.nodes.push(i);
        }
    }

    union(source, target) {
        const sourceRoot = this.root(source);
        const targetRoot = this.root(target);
        if (this.sizes[sourceRoot] < this.sizes[targetRoot]) {
            this.nodes[sourceRoot] = targetRoot;
            this.sizes[targetRoot] += this.sizes[sourceRoot];
        } else {
            this.nodes[targetRoot] = sourceRoot;
            this.sizes[sourceRoot] += this.sizes[targetRoot];
        }
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
