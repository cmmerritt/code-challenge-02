export function fiveAndGreaterOnly(array) {
  return array.filter(x => x >= 5);
}

export function evensOnly(arr) {
  return arr.filter(x => x % 2 === 0);
}

export function fiveCharactersOrFewerOnly(arr){
  return arr.filter(x => x.length <= 5);
}

export function peopleWhoBelongToTheIlluminati(arr){
  return arr.filter(x => x.member === true);
}

export function ofAge(arr){
  return arr.filter(x => x.age >= 18);
}