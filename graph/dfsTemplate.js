/**
 * 邻接矩阵图的 DFS 模版。
 * @param {any[][]} graph 
 * graph[i][j] 代表节点 i 到 j 的一条边。
 * 
 */
const dfsTemplate = (graph) => {
  // 使用 Set 存储已访问的节点。
  const visited = new Set();

  // 定义递归的 DFS 函数
  const dfs = (node) => {
    // 如果节点已经访问过，直接返回
    if (visited.has(node)) return;

    // 标记当前节点为已访问
    visited.add(node);

    // 遍历邻接矩阵的当前节点的所有邻居
    for (let neighbor = 0; neighbor < graph[node].length; neighbor++) {
      // 如果存在边且邻居节点未被访问
      if (graph[node][neighbor] !== 0 && !visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  }

  // 遍历所有节点，确保每个节点都被访问到（处理非连通图的情况）
  for (let i = 0; i < graph.length; i++) {
    if (!visited.has(i)) {
      dfs(i);
    }
    // 在这里可以计数，来记录连通分量的总数。假如图是连通的，不会重复进入这一步。
  }
}

// 示例图的邻接矩阵表示
const graph = [
  [0, 1, 0, 0, 1],
  [1, 0, 1, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 1, 0, 1],
  [1, 0, 0, 1, 0]
];

// 调用 DFS 模板
dfsTemplate(graph);