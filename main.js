function reverse(str) {
  if (!str || str.length < 2 || typeof str != 'string') {
    Console.log("Thats not a right input!")
  }
  else {
    const backwards = [];//var1
    const length = str.length - 1;//var2

    for (i = length; i >= 0; i--) {
      backwards.push(str[i]);
    }
    return backwards.join('');
  }
}

function reverse2(str){
  return str.split("").reverse().join('')
}
reverse2('Finally I did something in builtin functions')

const reverse3 = str => str.split('').reverse().join('');


reverse3("Hi This is ES3 Concept I Hope I will understand Later on")
// This is Editing to test merging
