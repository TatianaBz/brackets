module.exports = function check( str, bracketsConfig) {
  let strArr = str.split('');
  let flag = true;
  let num;
  while (flag == true ) {
      flag = false;
    for (let arr of bracketsConfig) {
         for (let i = 0; i < strArr.length-1; i++) {
        if (arr[0] == strArr[i] && arr[1] == strArr[i + 1]) {
          num = i;
          strArr.splice(num, 2);
          flag = true;
          if ( strArr.length == 0){
            return true;
          }   if ( strArr.length == 1){
            return false;
          }
        }
      }
    }
  }
  return flag;
};
