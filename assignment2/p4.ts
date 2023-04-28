//Write a typescript program which contains one arrow function named as ChkArmstrong. That function accepts one numbers and check whether number is armstrong number or not.


function ChkArmstrong(Num: number): void {

    var rem: number = 0;
    var sum: number = 0;
    var temp: number = 0;
    temp = Num;

    while (Num > 0) {

        rem = Num % 10;
        sum = sum + (rem * rem * rem);
        Num = Num / 10;
        Num = Math.floor(Num);
    }
    if (temp == sum) {
        console.log("It is armstrong number");
    } else {
        console.log("It is not a armstrong number");
    }
}

ChkArmstrong(370);