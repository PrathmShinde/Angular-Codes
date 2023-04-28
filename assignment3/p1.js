// Create one typescript application which contains one class named as arithmetic. Arithmetic class contain three characteristics (class data members) as Number1, Number2. Create one parameterized constructor which accept two values and assign it to Number1 and Number2.In arithmetic class we have to write four methods (behaviour) as Addition, substraction, multiplication, division.
// Addition method will add number1, number 2 and return result.
// Substraction method will substract number1, number 2 and return result.
// Multiplication method will multiply number1, number 2 and return result.
// Division method will divide number1, number 2 and return result.
// After designing the class creates two objects of that class by providing some hardcoded values.
// Call all the methods by using both objects..
var Arithmetic = /** @class */ (function () {
    //Behaviours
    function Arithmetic(No1, No2) {
        this.Number1 = No1;
        this.Number2 = No2;
    }
    Arithmetic.prototype.Addition = function () {
        this.result = this.Number1 + this.Number2;
        return this.result;
    };
    Arithmetic.prototype.Substraction = function () {
        this.result = this.Number1 - this.Number2;
        return this.result;
    };
    Arithmetic.prototype.Multiplication = function () {
        this.result = this.Number1 * this.Number2;
        return this.result;
    };
    Arithmetic.prototype.Division = function () {
        this.result = this.Number1 / this.Number2;
        return this.result;
    };
    return Arithmetic;
}());
var obj1 = new Arithmetic(11, 10);
var Add = 0;
var Sub = 0;
var Mul = 0;
var Div = 0;
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
