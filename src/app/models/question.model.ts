import * as uuid from "uuid";

export class Question {
  text: string;
  id: string;
  value?: number;
  motivationalFactor: number;
  psychologicalFactor: number;

  constructor(
    text: string,
    motivationalFactor: number,
    psychologicalFactor: number
  ) {
    this.text = text;
    this.motivationalFactor = motivationalFactor;
    this.psychologicalFactor = psychologicalFactor;
    this.id = uuid.v4();
  }
}
