export class HighScores {
  constructor(input) {
    this.build(input);
  }

  build(input) {
    const sorted = Array.from(input).sort((a, b) => b - a);
    const [highest] = sorted; // destructuring array
    this.scores = Array.from(input);
    this.latest = input[input.length - 1];
    this.highest = highest;
    this.top = sorted.slice(0, 3);

    // report
    const diff = this.highest - this.latest;
    const newBest = 'That\'s your personal best!';
    const oldBest = `That's ${diff} short of your personal best!`;
    const msg = this.latest >= this.highest ? newBest : oldBest;
    this.report = `Your latest score was ${this.latest}. ${msg}`;
  }
}
