function changeMe(arr) {
  // you can only write your code here!
  var objResult = [];
  var year;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][3] === undefined) {
      year= 'Invalid Birth Year';
    }
    else {
      year= 2018-arr[i][3];
    }
    objResult.push({
      firstName : arr[i][0],
      lastName : arr[i][1],
      gender : arr[i][2],
      age : year
    })
    console.log(i + '.' + objResult[i].firstName, objResult[i].lastName);
    console.log(objResult[i]);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
