class UnionFind {
    /**
     *  Array values indicate the index to its parent node. Nodes whose values
     *  are their own indeces are called the "root". Nodes belong to the same
     *  "connected" component if they have the same root.
     *  O(n), because of the nodes array initialization.
     **/
    constructor(size) {
        this.nodes = [];
        for (let i = 0; i < size; i++) {
            this.nodes.push(i);
        }
    }

    /**
     *  O(n), because we still need to look for the root, which at worst case
     *  the nodes are connected linearly under a single connected component.
     **/
    union(source, target) {
        const sourceRoot = this.root(source);
        const targetRoot = this.root(target);
        this.nodes[sourceRoot] = targetRoot;
    }

    /**
     *  O(n), because we still need to look for the root, which at worst case
     *  the nodes are connected linearly under a single connected component.
     **/
    connected(source, target) {
        return this.root(source) === this.root(target);
    }

    /**
     *  O(n), because at worst case when the nodes are connected linearly,
     *  looking for the root will traverse through all the nodes.
     **/
    root(node) {
        while (this.nodes[node] !== node) {
            node = this.nodes[node];
        }
        return node;
    }
}

module.exports = UnionFind;
