//Create one typescript application which contains one class named as CircleX which sill inherits above Circle class.
// In CircleX class we have to write one method(Behaviours) As Circumference which will return Circumference of circle.
// After designing the class, create two objects of that class by providing some hardcoded value.Call circumference And Area methods by using both the objects.

class Circle {

    //characteristics

    Radius: number;
    PI: number = 3.14;
    AreaOfCircle: number;
    CircumferenceOfCircle: number

    //Behaviours

    constructor(radius: number) {

        this.Radius = radius;
    }
}
class CircleX extends Circle {

    Circumference(): number {

        this.CircumferenceOfCircle = 2 * this.PI * this.Radius;

        return this.CircumferenceOfCircle;
    }
}

var CircumferenceOfCircle: number = 0;

var obj1 = new CircleX(5);
CircumferenceOfCircle = obj1.Circumference();
console.log("Circumference of Circle is : " + CircumferenceOfCircle);

var obj2 = new CircleX(8);
CircumferenceOfCircle = obj2.Circumference();
console.log("Circumference of Circle is : " + CircumferenceOfCircle);

