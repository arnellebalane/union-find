class UnionFind {
    /**
     *  Array values indicate which "connected component" the node belongs to.
     *  O(n), because of the nodes array initialization.
     **/
    constructor(size) {
        this.nodes = [];
        for (let i = 0; i < size; i++) {
            this.nodes.push(i);
        }
    }

    /**
     *  O(n), because the entire nodes array needs to be iterated in order to
     *  look for the nodes that needs to be updated.
     **/
    union(source, target) {
        const sourceGroup = this.nodes[source];
        const targetGroup = this.nodes[target];
        this.nodes = this.nodes.map((group) =>
            group === sourceGroup ? targetGroup : group);
    }

    /**
     *  O(1), because the nodes and their values are directly accessed
     *  and compared.
     **/
    connected(source, target) {
        return this.nodes[source] === this.nodes[target];
    }
}

module.exports = UnionFind;
