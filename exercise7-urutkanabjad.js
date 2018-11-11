function urutkanAbjad(str) {
  // you can only write your code here
  var result = '';
  var abjad  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  for (var i = 0; i < abjad.length; i++){
    for (var j = 0; j < str.length; j++){
      if (abjad[i] === str[j]){
        result += str[j];
      }
    }
  }
  return result;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
