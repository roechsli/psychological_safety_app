import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { QuestionCardComponent } from "./question-card/question-card.component";
import { QuestionPageComponent } from "./question-page/question-page.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatSliderModule } from "@angular/material/slider";
import { ResultsPageComponent } from './results-page/results-page.component';
import { AppRoutingModule } from './app-routing.module';
import { GridPlotComponent } from './grid-plot/grid-plot.component';

@NgModule({
  declarations: [AppComponent, QuestionCardComponent, QuestionPageComponent, ResultsPageComponent, GridPlotComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatSliderModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
