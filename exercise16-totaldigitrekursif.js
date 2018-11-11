function totalDigitRekursif(angka) {
  // you can only write your code here!
  var angkaStr = String(angka);
  // console.log(angkaStr.length, angka);
  if (angkaStr.length <= 1){
    return angka;
  }
  else{
    angka = Number(angkaStr[0]);
    // console.log(angka);
    return angka + totalDigitRekursif(Number(angkaStr.substr(1)));
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
