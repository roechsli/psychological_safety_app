import { Component } from "@angular/core";
import { Question } from "src/app/models/question.model";

@Component({
  selector: "app-question-page",
  templateUrl: "./question-page.component.html",
  styleUrls: ["./question-page.component.css"],
})
export class QuestionPageComponent {
  title = "Coding Challenge: Mini Survey Tool";
  public questions: Question[];
  public texts: string[] = ["hi", "du", "ich"];

  constructor() {
    this.questions = [
      new Question(
        "If you make a mistake on this team. It is often held against you."
      ),
      new Question("It is safe to take a risk on this team."),
      new Question(
        "Working with members of this team, my unique skills and talents are valued and utilized."
      ),
    ];
  }

  onClickMe() {
    return;
  }
}
