export class HighScores {
  constructor(input) {
    this.scores = input;
    this.latest = input[input.length - 1];
    this.top = [...input].sort((a, b) => b - a).slice(0, 3);
    this.highest = Math.max(...input);
    this.report = this.buildReport();
  }

  buildReport() {
    const newBest = 'your personal best!';
    const oldBest = `${this.highest - this.latest} short of your personal best!`;
    const msg = this.latest >= this.highest ? newBest : oldBest;
    return `Your latest score was ${this.latest}. That's ${msg}`;
  }
}
