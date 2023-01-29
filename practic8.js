// for (i = 30; i < 86; i++) {
//   console.log(i);
//   if (i == 44) {
//     break;
//   }
// }

var myBookPrices = [200, 150, 70, 300, 199, 700];

for (var i = 0; i < myBookPrices.length; i++) {
  var myBookPrice = myBookPrices[i];
  if (myBookPrice >= 200) {
    continue;
  }
  console.log(myBookPrice);
}
