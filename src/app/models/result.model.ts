import * as uuid from "uuid";

export class Result {
  psychoVal: number; // psychological safety
  motivVal: number; // motivational driver

  constructor(psychoVal: number, motivVal: number) {
    this.psychoVal = psychoVal;
    this.motivVal = motivVal;
  }
}
