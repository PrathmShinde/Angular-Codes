//Create one typescript application which contains one class named as CircleX which sill inherits above Circle class.
// In CircleX class we have to write one method(Behaviours) As Circumference which will return Circumference of circle.
// After designing the class, create two objects of that class by providing some hardcoded value.Call circumference And Area methods by using both the objects.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    //Behaviours
    function Circle(radius) {
        this.PI = 3.14;
        this.Radius = radius;
    }
    return Circle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleX.prototype.Circumference = function () {
        this.CircumferenceOfCircle = 2 * this.PI * this.Radius;
        return this.CircumferenceOfCircle;
    };
    return CircleX;
}(Circle));
var CircumferenceOfCircle = 0;
var obj1 = new CircleX(5);
CircumferenceOfCircle = obj1.Circumference();
console.log("Circumference of Circle is : " + CircumferenceOfCircle);
var obj2 = new CircleX(8);
CircumferenceOfCircle = obj2.Circumference();
console.log("Circumference of Circle is : " + CircumferenceOfCircle);
