module.exports = function check(str, bracketsConfig) {
  let pair = [],
      modStr = str;

  for (let i = 0; i < bracketsConfig.length; i++) {
    for (let j = 0; j < bracketsConfig[i].length; j++) {
      pair.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
    }
  }
  pair = [...new Set(pair)];
  
    for (let i = 0; i < str.length; i++) {
      for(let j = 0; j < pair.length; j++) {
        modStr = modStr.replace(pair[j], '');
        if (modStr.length === 0) return true;
      }
    } 
    return false;
  }
