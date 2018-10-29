const fromTrail = (tree, last) => {
		if (last[0] === 'left') {
			return {
				value: last[1],
				left: tree,
				right: last[2]
			} 
		} else {
			return {
				value: last[1],
				left: last[2],
				right: tree
			} 
		}
}

const buildTree = (tree, parents) => {
		if (parents.length === 0) return tree;

		const last = parents[0];
		return buildTree(fromTrail(tree, last), parents.slice(1));
}

export class Zipper {
	constructor(tree, parents) {
		this.tree = tree;
		this.parents = parents;
	}


	static fromTree(tree) {
		return new Zipper(tree, []);
	}

	toTree() {
		return buildTree(this.tree, this.parents);
	}

	up() {
    if (this.parents.length === 0) return null;

    const last = this.parents[0];
    return new Zipper(fromTrail(this.tree, last), this.parents.slice(1));
  }

	setValue(value) {
    return new Zipper({ value, left: this.tree.left, right: this.tree.right }, this.parents);
	}

	setLeft(left) {
    return new Zipper({ value: this.tree.value, left, right: this.tree.right }, this.parents);
	}

	setRight(right) {
    return new Zipper({ value: this.tree.value, right, left: this.tree.left }, this.parents);
	}

	left() {
		if (!this.tree.left) return null;
		
		return new Zipper(this.tree.left, [['left', this.tree.value, this.tree.right]].concat(this.parents));
	}

	right() {
		if (!this.tree.right) return null;
    return new Zipper(this.tree.right, [['right', this.tree.value, this.tree.left]].concat(this.parents));
	}

	value() {
		return this.tree.value;
	}

}
