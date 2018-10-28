export class Raindrops {
  static convert(n) {
    const factors = [];
    for (let i = 3; i <= 7; i += 2) {
      if (n % i === 0) {
        factors.push(i);
      }
    }
    let res = '';
    if (factors.includes(3)) {
      res += 'Pling';
    }

    if (factors.includes(5)) {
      res += 'Plang';
    }

    if (factors.includes(7)) {
      res += 'Plong';
    }

    return res || n.toString();
  }
}
