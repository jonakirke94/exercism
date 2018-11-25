const ORBITAL_EARTH = 31557600;

const ORBITAL_MAP = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

export class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
  }

  calcAge(planet) {
    const time = this.seconds / (ORBITAL_MAP[planet] * ORBITAL_EARTH);
    return parseFloat(time.toFixed(2));
  }

  onEarth() {
    return this.calcAge('earth');
  }

  onMercury() {
    return this.calcAge('mercury');
  }

  onVenus() {
    return this.calcAge('venus');
  }

  onMars() {
    return this.calcAge('mars');
  }

  onJupiter() {
    return this.calcAge('jupiter');
  }

  onSaturn() {
    return this.calcAge('saturn');
  }

  onUranus() {
    return this.calcAge('uranus');
  }

  onNeptune() {
    return this.calcAge('neptune');
  }
}
