function checkAB(num) {
  // you can only write your code here!
  var jumlahUlang = 0;
  var numTanpaSpasi = '';
  //hilangkan spasi
  for (var i = 0; i < num.length; i++) {
    if (num[i] !== ' '){
      numTanpaSpasi += num[i];
    }
    else {
      numTanpaSpasi += '';
    }
  }
  console.log(numTanpaSpasi);
  //hitung jarak
  for (var j = 0; j < numTanpaSpasi.length; j++) {
    if (numTanpaSpasi[j] === 'a' || numTanpaSpasi[j] === 'b'){
      if (numTanpaSpasi[j+3] ==='a' || numTanpaSpasi[j+3] === 'b'){
        return true;
        j = numTanpaSpasi.length;
      }
      else {
        return false;
      }
    }
  }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
console.log(checkAB('aaaaaaaabbbbbb'));
