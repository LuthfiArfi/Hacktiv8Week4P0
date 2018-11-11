function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  var result = '';
  var abjad  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' '];
  for (var i = 0; i < kalimat.length; i++) {
    if (kalimat[i] === kalimat[i].toUpperCase() && kalimat[i] === kalimat[i].toLowerCase()){
      result += kalimat[i];
    }
    else{
      for (var j = 0; j < abjad.length; j++) {
        if (kalimat[i] === abjad[j]){
          result += abjad[j].toUpperCase();
        }
        else if (kalimat[i].toLowerCase() === abjad[j]) {
          result += abjad[j].toLowerCase();
        }
      }
    }
  }
  return result;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
