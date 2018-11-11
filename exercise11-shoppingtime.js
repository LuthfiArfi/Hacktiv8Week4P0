    // Sepatu brand Stacattu seharga 1500000
    // Baju brand Zoro seharga 500000
    // Baju brand H&N seharga 250000
    // Sweater brand Uniklooh seharga 175000
    // Casing Handphone seharga 50000

function shoppingTime(memberId, money) {
  // you can only write your code here!
  if (memberId === '') {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else if (memberId === undefined && money === undefined) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else if (money < 50000 ) {
    return 'Mohon maaf, uang tidak cukup';
  }
  else {
    var Stok = ['Sepatu Stacattu', 1500000, 'Baju Zoro', 500000, 'Baju H&N', 250000, 'Sweater Uniklooh', 175000, 'Casing Handphone', 50000];
    objResult = {};
    objResult['memberId'] = memberId;
    objResult['money'] = money;
    objResult['listPurchased'] = [];
    console.log(money);
    for (var i = 1; i < Stok.length; i = i+2) {
      if (money >= Stok[i]){
        objResult['listPurchased'].push(Stok[i-1]);
        money -= Stok[i];
      }
      // console.log(i, money, Stok[i])
    }
    objResult['changeMoney'] = money;
  }
  return objResult;
}
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  // { memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
// { memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
