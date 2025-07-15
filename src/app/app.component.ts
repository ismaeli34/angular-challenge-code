import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SearchFormComponent} from './components/search-form/search-form.component';
import {Aircraft} from './models/aircraft.model';
import {CallsignRoute} from './models/callsign.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, SearchFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-challenge';
  results: (Aircraft | CallsignRoute)[] = [];

  handleResults(data: (Aircraft | CallsignRoute)[]) {
    this.results = data;
  }
}
