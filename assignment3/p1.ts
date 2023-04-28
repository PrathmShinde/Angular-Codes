// Create one typescript application which contains one class named as arithmetic. Arithmetic class contain three characteristics (class data members) as Number1, Number2. Create one parameterized constructor which accept two values and assign it to Number1 and Number2.In arithmetic class we have to write four methods (behaviour) as Addition, substraction, multiplication, division.
// Addition method will add number1, number 2 and return result.
// Substraction method will substract number1, number 2 and return result.
// Multiplication method will multiply number1, number 2 and return result.
// Division method will divide number1, number 2 and return result.
// After designing the class creates two objects of that class by providing some hardcoded values.
// Call all the methods by using both objects..


class Arithmetic {

    //characteristics

    Number1: number;
    Number2: number;
    result: number;

    //Behaviours

    constructor(No1: number, No2: number) {

        this.Number1 = No1;
        this.Number2 = No2;
    }
    Addition(): number {

        this.result = this.Number1 + this.Number2

        return this.result;

    }
    Substraction(): number {

        this.result = this.Number1 - this.Number2

        return this.result;

    }
    Multiplication(): number {

        this.result = this.Number1 * this.Number2

        return this.result;

    }
    Division(): number {

        this.result = this.Number1 / this.Number2

        return this.result;

    }
}

var obj1 = new Arithmetic(11, 10);

var Add: number = 0;
var Sub: number = 0;
var Mul: number = 0;
var Div: number = 0;

Add = obj1.Addition();
Sub = obj1.Substraction();
Mul = obj1.Multiplication();
Div = obj1.Division();

console.log("Addition is : " + Add);
console.log("Substraction is : " + Sub);
console.log("Multiplication is : " + Mul);
console.log("Division is : " + Div);

var obj2 = new Arithmetic(21, 15);

Add = obj2.Addition();
Sub = obj2.Substraction();
Mul = obj2.Multiplication();
Div = obj2.Division();

console.log("Addition is : " + Add);
console.log("Substraction is : " + Sub);
console.log("Multiplication is : " + Mul);
console.log("Division is : " + Div);





