export class Schedule {
  dayOfTheWeek: string;
  timesOfTheDay: Time[];

  constructor(dayOfTheWeek: string, startingAt: string, endingAt: string) {
    this.dayOfTheWeek = dayOfTheWeek;
    this.timesOfTheDay = [new Time(startingAt, endingAt)];
  }
}

export class Time {
  startingAt: string;
  endingAt: string;

  constructor(startingAt: string, endingAt: string) {
    this.startingAt = startingAt;
    this.endingAt = endingAt;
  }
}
