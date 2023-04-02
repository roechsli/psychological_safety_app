import { Component, Input } from "@angular/core";

@Component({
  selector: "app-grid-plot",
  templateUrl: "./grid-plot.component.html",
  styleUrls: ["./grid-plot.component.css"],
})
export class GridPlotComponent {
  @Input() xValue!: number;
  @Input() yValue!: number;
}
