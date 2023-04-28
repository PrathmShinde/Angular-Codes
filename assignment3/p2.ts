//Create one typescript application which contains one class named as Circle.
//Circle class contains two characterstics(class data members) as Radius,PI.
//create one parameterized constructor which accept one value and assign it to Radius. value of PI member is set to 3.14.
//In circle class we have to one method(Behaviours) as Area which will return area of circle.After designing the class create two objetcs of that class by providing some hardcoded values. call the method Area by using both the objects.  

class Circle {

    //characteristics

    Radius: number;
    PI: number = 3.14;
    AreaOfCircle: number;

    //Behaviours

    constructor(radius: number) {

        this.Radius = radius;
    }

    Area(): number {

        this.AreaOfCircle = this.PI * (this.Radius * this.Radius);

        return this.AreaOfCircle;
    }
}

var AreaOfCircle: number = 0;

var obj1 = new Circle(5);
AreaOfCircle = obj1.Area();
console.log("Area of Circle is : " + AreaOfCircle);

var obj2 = new Circle(8);
AreaOfCircle = obj2.Area();
console.log("Area of Circle is : " + AreaOfCircle);