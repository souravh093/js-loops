// target: display every element of an array
var numbers = [42, 46, 29, 19, 99, 68, 239, 28];
for(var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 55) {
        continue;
    }
    console.log(number);
}
