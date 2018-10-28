export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  kind() {
    if (this.violatesImpossibleSides() || this.violatesInequality()) throw new TypeError();

    if (this.isEquilateral()) {
      return 'equilateral';
    }

    if (this.isIsosceles()) {
      return 'isosceles';
    }

    return 'scalene';
  }

  isEquilateral() {
    return this.uniqueSidesLength() === 1;
  }

  isIsosceles() {
    return this.uniqueSidesLength() === 2;
  }

  uniqueSidesLength() {
    return new Set(this.sides).size;
  }

  violatesImpossibleSides() {
    const arr = this.sides;
    return arr[0] <= 0 || arr[1] <= 0 || arr[2] <= 0;
  }

  violatesInequality() {
    const arr = this.sides;
    return arr[0] + arr[1] < arr[2] || arr[1] + arr[2] < arr[0] || arr[0] + arr[2] < arr[1];
  }
}
