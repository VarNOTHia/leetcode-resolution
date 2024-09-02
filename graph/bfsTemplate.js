/**
 * 邻接矩阵图的 BFS 模版。
 * @param {any[][]} graph 
 * graph[i][j] 代表节点 i 到 j 的一条边。
 * 
 */
const bfsTemplate = (graph) => {
  // 使用 Set 存储已访问的节点。
  const visited = new Set();
  // 使用队列来存储待访问的节点。
  const queue = [];

  // 定义 BFS 函数
  const bfs = (startNode) => {
    // 将起始节点加入队列并标记为已访问
    queue.push(startNode);
    visited.add(startNode);

    while (queue.length > 0) {
      // 取出队列的第一个节点
      const node = queue.shift();
      console.log(`Visited node: ${node}`);

      // 遍历邻接矩阵的当前节点的所有邻居
      for (let neighbor = 0; neighbor < graph[node].length; neighbor++) {
        // 如果存在边且邻居节点未被访问
        if (graph[node][neighbor] !== 0 && !visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
  }

  // 遍历所有节点，确保每个节点都被访问到（处理非连通图的情况）
  for (let i = 0; i < graph.length; i++) {
    if (!visited.has(i)) {
      bfs(i);
    }
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

// 调用 BFS 模板
bfsTemplate(graph);