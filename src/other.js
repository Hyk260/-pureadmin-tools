/**
 * 将字符串中的特殊字符进行 HTML 转义
 * @param {string} str - 待转义的字符串
 * @returns {string} - 转义后的字符串
 */
export const html2Escape = (str) => {
  const map = { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" };
  return str.replace(/[<>&"]/g, (c) => map[c]);
};
/**
 * 将扁平结构数据转换成树形结构数据
 * @param {Array} target - 扁平结构数据
 */
export function flatToTree(flatList, parentId = null) {
  const tree = [];
  flatList.forEach((item) => {
    if (item.parentId === parentId) {
      const children = flatToTree(flatList, item.id);
      if (children.length) {
        item.children = children;
      }
      tree.push(item);
    }
  });
  return tree;
}

export function treeToFlat(target, subsetKey) {
  const copyTree =
    Object.prototype.toString.call(target) === "[object Array]"
      ? Array.prototype.slice.call(target)
      : [target];
  const flat = [];
  while (copyTree.length) {
    const node = copyTree.shift();
    const { [subsetKey]: children, ...rest } = node;
    flat.push(rest);
    if (children) {
      Array.prototype.push.apply(copyTree, node.children);
    }
  }
  return flat;
}
