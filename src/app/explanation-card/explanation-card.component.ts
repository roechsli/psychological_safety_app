import { Component, Input } from "@angular/core";
import { Quadrant } from "../models/quadrant.enum";

@Component({
  selector: "app-explanation-card",
  templateUrl: "./explanation-card.component.html",
  styleUrls: ["./explanation-card.component.css"],
})
export class ExplanationCardComponent {
  @Input() quadrant!: Quadrant;

  outcomes = {
    flow: "You are in a great mood and you love your role. You feel like your work is being appreciated and can address problems openly.",
    comfort:
      "You do your job and that's it. You don't necessarily identify yourself with the things you do.",
    apathy:
      "You have absolutely no interest in your work. You simply come to work for the money.",
    fear: "You care about your work but fear of criticism or judgement may be holding you back creatively. You may be feeling uncomfortable sharing your ideas or asking for help.",
  };

  motivDrivers = {
    flow: "You actively contribute to change and foster a great work environment.",
    comfort: "You are not really motivated to make a change at work.",
    apathy: "You have absolutely no interest in changing anything.",
    fear: "You try to do good work but don't always feel invested. You might perform even better if you had more autonomy or felt your talents were being used.",
  };

  psychoSafeties = {
    flow: "You feel absolutely safe in your work environment.",
    comfort:
      "You feel comfortable sharing ideas, but don't really have much motivation to do so.",
    apathy: "You don't feel save in your work environment.",
    fear: "You feel uncomfortable sharing ideas, asking for help, speaking up, or disagreeing in your team. You may worry about team members judging you.",
  };
}
