var canVisitAllRooms = function(rooms) {
  let n = rooms.length;
  
  let vis = new Array(n).fill(0);
  vis[0] = 1;
  let dfs = (rooms, start) => {
    for(let key of rooms[start]){
      if(vis[key] == 0){
        vis[key] = 1;
        dfs(rooms, key);
      }
    }
  }
  dfs(rooms, 0);
  for(let i = 0; i < n; i++){
    if(vis[i] == 0){
      return false;
    }
  }
  return true;
};