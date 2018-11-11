function fpb(angka1, angka2) {
  // you can only write your code here!
  if (angka2 > angka1) {
    var buffer = angka1;
    angka1 = angka2;
    angka2 = buffer;
  }
  for (var i = 0; i < angka1; i++) {
    if (angka1 % i === 0 && angka2 % i === 0){
      var fpb = i;
      // console.log(i, angka1, angka2);
    }
  }
  // var temp;
  // while (angka2 !== 0) {
  //   temp = angka2;
  //   angka2 = angka1 % angka2;
  //   angka1 = temp;
  //   console.log(angka1, angka2, temp);
  // }
  return fpb;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
