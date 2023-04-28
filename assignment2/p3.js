// Write a typescript program which contains one function named as Maximum. That functions accepts array of numbers and returns the second largest number from array.
// Input : 23,89,6,29,56,45,77,32
// Output : Second maximum number is 77.
function Maximum(Max) {
    var temp = 0;
    var i = 0;
    var j = 0;
    for (i = 0; i < Max.length; i++) {
        for (j = i + 1; j < Max.length; j++) {
            if (Max[i] < Max[j]) {
                temp = Max[i];
                Max[i] = Max[j];
                Max[j] = temp;
            }
        }
    }
    console.log("Second largest number in array is : " + Max[1]);
    return 0;
}
var Max = [23, 89, 6, 29, 56, 45, 77, 32];
Maximum(Max);
