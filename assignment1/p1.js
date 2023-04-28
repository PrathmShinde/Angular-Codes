// Write a typescript program which contains one function named as Maximum. That function accepts three parameters and it should returns largest value from three input parameters.
function Maximum(No1, No2, No3) {
    if (No1 > No2 && No1 > No3) {
        return No1;
    }
    if (No2 > No1 && No2 > No3) {
        return No2;
    }
    if (No3 > No1 && No3 > No2) {
        return No3;
    }
    return 0;
}
var Ret = 0;
Ret = Maximum(123, 89, 96);
console.log("Largest number is : " + Ret);
