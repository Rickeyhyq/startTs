interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source, subString) {
  let result = source.search(subString);
  return result > -1;
}

console.log(mySearch('fdafad', 'ds'));

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray = ['bov', 'james'];

let myStr: string = myArray[0];
