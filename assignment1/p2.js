// Write a typescript program which contains one function named as Area. The function should calculate area of circle. Accept value of radius from user and return its area. Default value of PI should be 3.14 if it is not provided by the caller.
function Area(r) {
    areaOfCircle = 3.14 * r * r;
    return areaOfCircle;
}
var areaOfCircle = 0;
areaOfCircle = Area(5);
console.log("Area of circle is : " + areaOfCircle);
