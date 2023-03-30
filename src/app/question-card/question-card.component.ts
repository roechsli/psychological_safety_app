import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Question } from "../models/question.model";

@Component({
  selector: "app-question-card",
  templateUrl: "./question-card.component.html",
  styleUrls: ["./question-card.component.css"],
})
export class QuestionCardComponent {
  @Input() question: Question | undefined;
  @Output() questionChange = new EventEmitter<Question>();

  constructor() {}

  onInputChange(event: Event) {
    const value = Number((event.target as HTMLInputElement).value);
    this.question!.value = value;
    this.questionChange.emit(this.question);
  }

  convertToFontSize(value: number | undefined): number {
    // update the font size depending on the value set
    const defaultFontSize = 15.0;
    const maxFontSize = 16.0;
    const minFontSize = 14.0;
    if (value == undefined) {
      // default font size
      return defaultFontSize;
    }
    return Math.max((value * maxFontSize) / 100, minFontSize);
  }
}
