import { Component, Input, OnInit } from "@angular/core";
import { Question } from "../models/question.model";

@Component({
  selector: "app-question-card",
  templateUrl: "./question-card.component.html",
  styleUrls: ["./question-card.component.css"],
})
export class QuestionCardComponent {
  @Input() question: Question | undefined;

  constructor() {}
}
