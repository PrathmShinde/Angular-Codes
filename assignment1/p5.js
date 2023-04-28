// Write a typescript program which contains one function named as Fibonacci. That function accept one number from user and print fibonacci series till that number.
// Input : 21
function Fibonacci(Num) {
    var num1 = 0;
    var num2 = 1;
    var num3 = 0;
    var Cnt = 2;
    console.log(num1, num2);
    for (Cnt = 2; Cnt < Num; ++Cnt) {
        num3 = num1 + num2;
        console.log(num3);
        num1 = num2;
        num2 = num3;
    }
}
Fibonacci(21);
