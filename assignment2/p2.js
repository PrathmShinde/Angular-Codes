// Write a typescript program which contains one function as Summation. That function accepts array of numbers and returns the summation of each number from array.
function Summation(Sum) {
    var i = 0;
    var sum = 0;
    for (i = 0; i < Sum.length; i++) {
        sum += Sum[i];
    }
    return sum;
}
var Sum = [23, 6, 7, 4, 5, 7];
var sum = 0;
sum = Summation(Sum);
console.log("Summation of Array is : " + sum);
