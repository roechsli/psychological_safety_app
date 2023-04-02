import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { QuestionPageComponent } from "./question-page/question-page.component";
import { ResultsPageComponent } from "./results-page/results-page.component";

const routes: Routes = [
  { path: "", component: QuestionPageComponent },
  { path: "results", component: ResultsPageComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
