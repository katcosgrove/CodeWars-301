function capitalize(s){
  let alternate = ['',''];
  for (let i in s) {
    if (i % 2) {
      alternate[0] += s[i];
      alternate[1] += s[i].toUpperCase();
    } else {
      alternate[1] += s[i];
      alternate[0] += s[i].toUpperCase();
    }
  }
  return alternate;
};
