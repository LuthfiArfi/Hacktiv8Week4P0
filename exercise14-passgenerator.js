/*Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

    Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan
    menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V,
       E -> F, O -> P)

    Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

    Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

    Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:

Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di
passwordGenerator dan return password-nya dari function ini juga
*/
var abjad  = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q',
              'r','s','t','u','v','w','x','y','z'];
var vocals = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O'];
var substitute = ['b', 'j', 'v', 'f', 'p', 'B', 'J', 'V', 'F', 'P']
function changeVocals (str) {
  //code di sini
  var result = '';
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j< vocals.length; j++){
      if (str[i] === vocals[j]){
        result += substitute[j];
      }
    }
    if (result[i] === undefined){
      result += str[i];
    }
  }
  return reverseWord(result);
}

function reverseWord (str) {
  //code di sini
  var result = '';
  for (var i = str.length-1; i >= 0; i--) {
    result += str[i];
  }
  return setLowerUpperCase(result);
}

function setLowerUpperCase (str) {
  //code di sini
  var result='';
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < abjad.length; j++) {
      if (str[i] === abjad[j]) {
        result += abjad[j].toUpperCase();
      }
      else if (str[i].toLowerCase() === abjad[j]){
        result += abjad[j].toLowerCase();
      }
    }
  }
  return removeSpaces(result);
}

function removeSpaces (str) {
  //code di sini
  var result = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] === ' '){
      result += '';
    } else{
      result += str[i];
    }
  }
  return result;
}

function passwordGenerator (name) {
  //code di sini
  if (name.length >= 5){
    return changeVocals (name);
  }else{
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
