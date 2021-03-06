class UnionFind {
    constructor(size) {
        this.nodes = [];
        for (let i = 0; i < size; i++) {
            this.nodes.push(i);
        }
    }

    union(source, target) {
        const sourceGroup = this.nodes[source];
        const targetGroup = this.nodes[target];
        this.nodes = this.nodes.map((group) =>
            group === sourceGroup ? targetGroup : group);
    }

    connected(source, target) {
        return this.nodes[source] === this.nodes[target];
    }
}

module.exports = UnionFind;
