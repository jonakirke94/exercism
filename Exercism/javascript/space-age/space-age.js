const ORBITAL_EARTH = 31557600;

const ORBITAL_MAP = {
  earth: ORBITAL_EARTH * 1,
  mercury: ORBITAL_EARTH * 0.2408467,
  venus: ORBITAL_EARTH * 0.61519726,
  mars: ORBITAL_EARTH * 1.8808158,
  jupiter: ORBITAL_EARTH * 11.862615,
  saturn: ORBITAL_EARTH * 29.447498,
  uranus: ORBITAL_EARTH * 84.016846,
  neptune: ORBITAL_EARTH * 164.79132,
};

export class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
  }

  calcAge(planet) {
    return Number((this.seconds / ORBITAL_MAP[planet]).toFixed(2));
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
