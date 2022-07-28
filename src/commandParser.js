const left = ["left", "l"]
const right = ["right", "r"]
const up = ["up", "u", "top", "t"]
const down = ["down", "d", "bot", "b"]

const validXMoveModifiers = [...left, ...right];
const validYMoveModifiers = [...up, ...down];


export const parseCommand = (command) => {
  let parts = command.split(" ");
  if (parts[0] === "move") {
    if (parts.length > 3) return null;
    let retParts = [ parts[0] ]; 
    retParts.push(getDir(parts[1]));
    if(parts.length === 3){
      retParts.push(getDir(parts[2]));
    }else{
      retParts.push(0);
    }
    return retParts;
  }else if(parts[0] === "shoot"){
    if(parts.length > 2)return null;
    let num = parseInt(parts[1]);
    if(num === num){
      return [ parts[0], num ];
    }
    return null;
  }else if(parts[0] === "sendpoint"){
    if(parts.length > 2)return null;
    let num = parseInt(parts[1]);
    if(num === num){
      return [ parts[0], num ]
    }
    return null;
  }else if(parts[0] === "join"){
    if(parts.length === 1)return parts;
    return null;
  }else if(parts[0] === "whoami"){
    if(parts.length === 1)return parts;
    return null;
  }else if(parts[0] === "makejoin"){
    return parts;
  }

  return null;

};

const getDir = (stg) => {
  if(inArr(stg, left) !== -1){
    return -1;
  }else if(inArr(stg, right) !== -1){
    return 1;
  }else if(inArr(stg, up) !== -1){
    return -2;
  }else if(inArr(stg, down) !== -1){
    return 2;
  }
  return 0;
}

const inArr = (stg, arr) => {
  for(let i = 0;i<arr.length;i++){
    if(arr[i] === stg) return i;
  }
  return -1;
};
