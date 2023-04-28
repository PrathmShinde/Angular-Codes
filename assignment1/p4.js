//Write a typescript programe which contains one function named as ChkPrime. That function Should accept one number and it should return true if the given number is prime and otherwise return false.
function ChkPrime(Num) {
    var Cnt = 0;
    var i = 0;
    for (i = 0; i <= Num; i++) {
        if (Num % i == 0) {
            Cnt++;
        }
    }
    if (Cnt == 2) {
        console.log("It is Prime number");
    }
    else {
        console.log("It is not a Prime number / false");
    }
    return 0;
}
ChkPrime(11);
