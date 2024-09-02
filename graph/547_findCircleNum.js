/** 547. 省份数量
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
  const visited = new Set();
  let province = 0;

  // 提前定义数组长度
  const cities = isConnected.length;

  const dfs = (node) => {
    if(visited.has(node)){
      return;
    }

    visited.add(node);

    for(let neighbor = 0; neighbor < cities; neighbor++){
      if (isConnected[node][neighbor] !== 0 && !visited.has(neighbor)){
        dfs(neighbor);
      }
    }
  }

  // 图不连通，所以按节点再遍历。
  for(let node = 0; node < cities; node++){
    if(!visited.has(node)){
      dfs(node);
      // 这里的依据是，如果图连通的话不需要进入 dfs 这一步，在前面就已经完毕了。
      province++;
    }
  }

  return province;
};