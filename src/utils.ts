export function getRoot(nodes: IDoc[]) {
	return nodes.find((el) => !el.parentId)
}

export function getChildren(nodes: IDoc[], parentId: string) {
	return nodes.filter((el) => el.parentId === parentId)
}

export function getNode(nodes: IDoc[], id: string) {
	return nodes.find((el) => el._id === id)
}
export function getAncestors(nodes: IDoc[], id: string) {
	const node = getNode(nodes, id)
	if (!node || !node.parentId) return []
	const ancestors: IDoc[] = []
	let parent = getNode(nodes, node.parentId)
	while (parent) {
		ancestors.push(parent)
		parent = parent.parentId ? getNode(nodes, parent.parentId) : undefined
	}
	return ancestors
}

export interface IDoc<T = any> {
	_id: string
	parentId: string
	type: string
	name: string
	payload?: T
}
