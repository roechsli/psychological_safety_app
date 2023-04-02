import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Quadrant } from "../models/quadrant.enum";
import { Result } from "../models/result.model";

@Component({
  selector: "app-results-page",
  templateUrl: "./results-page.component.html",
  styleUrls: ["./results-page.component.css"],
})
export class ResultsPageComponent implements OnInit {
  title = "The results of your insight scan";
  result?: Result;

  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation()!.extras.state);
  }

  ngOnInit() {
    this.result = history.state;
  }

  getQuadrantFrom(result: Result): Quadrant {
    if (result.motivVal > 50 && result.psychoVal > 50) {
      return Quadrant.flow;
    } else if (result.motivVal <= 50 && result.psychoVal > 50) {
      return Quadrant.comfort;
    } else if (result.motivVal <= 50 && result.psychoVal <= 50) {
      return Quadrant.apathy;
    } else {
      return Quadrant.fear;
    }
  }
}
