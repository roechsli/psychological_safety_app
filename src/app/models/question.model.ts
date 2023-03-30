import * as uuid from "uuid";

export class Question {
  text: string;
  id: string;

  constructor(text: string) {
    this.text = text;
    this.id = uuid.v4();
  }
}
