function abbrevName(name){
  let separateNames = name.split(' ');
  let initials = `${separateNames[0][0]}.${separateNames[1][0]}`.toUpperCase();
  return initials;
}
