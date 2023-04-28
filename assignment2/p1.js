// Write a typescript program which contains one function named as Maximum. That function accepts array of numbers and returns the largest number from array.
// Input : 23,89,6,29,56,45,77,32
//Output : Maximum num is 89
function Maximum(Max) {
    var i = 0;
    var max = 0;
    for (i = 0; i < Max.length; i++) {
        if (Max[i] > max) {
            max = Max[i];
        }
    }
    return max;
}
var Max = [23, 89, 6, 29, 56, 45, 77, 32];
var max = 0;
max = Maximum(Max);
console.log("The largest number in the array is :" + max);
