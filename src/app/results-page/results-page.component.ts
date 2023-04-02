import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationStart } from "@angular/router";
import { Result } from "../models/result.model";

@Component({
  selector: "app-results-page",
  templateUrl: "./results-page.component.html",
  styleUrls: ["./results-page.component.css"],
})
export class ResultsPageComponent implements OnInit {
  title = "The results of your insight scan";
  result?: Result;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log(this.router.getCurrentNavigation()!.extras.state);
  }

  // TODO display in 2x2 matrix (possible UX -> transalte into "quadrant adjective noun")

  ngOnInit() {
    this.result = history.state;
  }
}
