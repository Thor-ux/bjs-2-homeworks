function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
    if (isNaN(parsedValue)) {
      throw new Error(" ");
    }
    return parsedValue;
  }
  
  function validateCount(value) {
    try {
      return parseCount(value);
    } catch (error) {
      return error;
    }
  }

  export { parseCount, validateCount };

  

class Triangle {
    constructor(a, b, c) {
      if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
      this._a = a;
      this._b = b;
      this._c = c;
    }
  
    get perimeter() {
      return this._a + this._b + this._c;
    }
  
    get area() {
      const s = this.perimeter / 2;
      return Number(Math.sqrt(s * (s - this._a) * (s - this._b) * (s - this._c)).toFixed(3));
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      return {
        get area() {
          return "Ошибка! Треугольник не существует";
        }, 
        get perimeter() {
          return "Ошибка! Треугольник не существует";
        }
      };
    }
  }

  // 

module.exports = { Triangle, getTriangle };

  