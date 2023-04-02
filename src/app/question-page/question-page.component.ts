import { Component } from "@angular/core";
import { Question } from "src/app/models/question.model";
import { Router } from "@angular/router";
import { Result } from "../models/result.model";

@Component({
  selector: "app-question-page",
  templateUrl: "./question-page.component.html",
  styleUrls: ["./question-page.component.css"],
})
export class QuestionPageComponent {
  title = "Coding Challenge: Mini Survey Tool";
  public questions: Question[];

  constructor(private router: Router) {
    this.questions = [
      new Question(
        "If you make a mistake on this team. It is often held against you.",
        0.5,
        0.5
      ),
      new Question("It is safe to take a risk on this team.", 0.1, 0.4),
      new Question(
        "Working with members of this team, my unique skills and talents are valued and utilized.",
        0.4,
        0.1
      ),
    ];
  }

  onSubmit() {
    this.questions.forEach((question: Question) => console.log(question));

    if (
      this.questions.every((question: Question) => question.value != undefined)
    ) {
      // TODO do some crazy calculation here
      const result = this.getResult();
      this.router.navigateByUrl("/results", { state: result });
    } else {
      alert("Fill out all questions first.");
    }
    return;
  }

  getResult(): Result {
    var motivational: number = 0;
    var psychological: number = 0;

    this.questions.forEach((question: Question) => {
      motivational += (question.value ?? 0) * question.motivationalFactor;
      psychological += (question.value ?? 0) * question.psychologicalFactor;
    });

    const result = new Result(motivational, psychological);
    return result;
  }
}
