function isNice(arr){
  for (let i in arr) {
    if ((arr.indexOf(arr[i] + 1) === -1) && (arr.indexOf(arr[i] - 1) === -1)) {
      return false;
    }
  }
  if (arr.length === 0) return false;
  return true;
}
