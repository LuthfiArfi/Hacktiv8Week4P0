function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var angkaStr = String(angka);
  if (angkaStr.length != 1){
    angka = 1;
    for (var i = 0; i < angkaStr.length; i++) {
      console.log(i, 'nilai angka', angka, 'pengali' ,angkaStr[i],'dari',angkaStr);
      angka = angka * Number(angkaStr[i])
    }
    console.log('hasil loop:',angka);
    return kaliTerusRekursif(angka);
  }
  else {
    return angka;
  }
}

// TEST CASES
// console.log(kaliTerusRekursif(66)); // 8
// console.log(kaliTerusRekursif(3)); // 3
// console.log(kaliTerusRekursif(24)); // 8
// console.log(kaliTerusRekursif(654)); // 0
// console.log(kaliTerusRekursif(1231)); // 6
console.log(kaliTerusRekursif(91333412));
