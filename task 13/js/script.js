//Родительский класс
class Shape {
    constructor() {
        this.P = 3.14;
    }
    
    perimeter() {}
    area() {}
}
//Класс прямоугольника
class Rectangle extends Shape {
    constructor(sideA, sideB) {
        super();
        this.sideA = Number(sideA);
        this.sideB = Number(sideB);
    }

    perimeter() {
        return  (this.sideA * 2) + (this.sideB * 2) 
    }

    area() {
        return this.sideA * this.sideB;
    }
}
//Класс круга
class Circle extends Shape {
    constructor(radius) {
        super(P);
        this.radius = radius;
    }
    perimeter() {
        return  2 * P * this.radius;
    }
    area() {
        return P * Math.pow(this.radius, 2);
    }
}
//класс Треугольника
class Triangle extends Shape {
    constructor(sideA, sideB, sideC) {
        super();
        this.sideA = Number(sideA);
        this.sideB = Number(sideB);
        this.sideC = Number(sideC);
    }

    perimeter() {
        return  this.sideA + this.sideB + this.sideC;
    }

    area() {
        this.semiPerimeter = Number(this.perimeter() / 2);
        this.height = ((2 / this.sideA) * Math.sqrt(this.semiPerimeter * (this.semiPerimeter - this.sideA) * (this.semiPerimeter - this.sideB) * (this.semiPerimeter - this.sideC))).toFixed(2);
        return ((this.sideA * this.height) / 2);
    }
}
