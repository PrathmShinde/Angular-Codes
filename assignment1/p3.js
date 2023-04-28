// Display typescript programs which contains one function named as DisplayFactors. That function should accept one number and display factors of that number.
//Input : 20
function DisplayFactors(Num) {
    var Cnt = 1;
    for (Cnt = 1; Cnt <= Num; Cnt++) {
        if (Num % Cnt == 0) {
            console.log(Cnt);
        }
    }
    return 0;
}
//var Fact: number = 20;
DisplayFactors(20);
