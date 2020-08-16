export default class FibonacciFinder {
  outputFunc: Function;
  interval: number;
  secondsRemain: number;
  numbers: Map<number, number>;
  timer: NodeJS.Timeout;
  constructor(interval: number, outputFunc: Function) {
    this.outputFunc = outputFunc;
    this.interval = interval;
    this.secondsRemain = interval;
    this.numbers = new Map();
    this.timer = setInterval(() => this.timerJob(), 1000);
  }
  addNumber(value: number) {
    this.numbers.set(value, (this.numbers.get(value) || 0) + 1);
    this.outputFunc(
      `Number ${value} added${isFibonacci(value) ? " =>FIB<=" : ""}`
    );
  }
  pauseTimer() {
    clearInterval(this.timer);
  }
  resumeTimer() {
    this.timer = setInterval(() => this.timerJob(), 1000);
  }
  report() {
    let result = "";
    for (let number of Array.from(this.numbers.entries())) {
      const [num, n] = number;
      result += ` ${num}:${n} `;
    }
    this.outputFunc(result);
  }
  timerJob() {
    --this.secondsRemain;
    if (this.secondsRemain <= 0) {
      this.report();
      this.secondsRemain = this.interval;
    }
  }
}

function isFibonacci(value: number) {
  const isPerfectSquare = (x: number) =>
    Math.pow(Math.trunc(Math.sqrt(x)), 2) === x;
  return (
    isPerfectSquare(5 * value * value + 4) ||
    isPerfectSquare(5 * value * value - 4)
  );
}
