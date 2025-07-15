import {Component, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AircraftService} from '../../services/aircraft.service';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {ResultsDisplayComponent} from '../results-display/results-display.component';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule, MatCardModule,
    MatRadioModule, MatButtonModule,
    MatInputModule,
    MatFormFieldModule, MatIconModule,
    ReactiveFormsModule, ResultsDisplayComponent, FormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css'
})
export class SearchFormComponent {

  form: FormGroup;
  searchResults: any[] = [];
  errorMessages: string[] = [];

  constructor(private fb: FormBuilder, private aircraftService: AircraftService) {
    this.form = this.fb.group({
      searchType: ['aircraft'],
      query: [''],
    });
  }


  onSearch(): void {
    this.searchResults = [];
    this.errorMessages = [];

    const { searchType, query } = this.form.value;
    const values = query.split(',').map((v: string) => v.trim());

    values.forEach((val: string) => {
      if (searchType === 'aircraft') {
        this.aircraftService.getAircraft(val).subscribe({
          next: (res) => this.searchResults.push(res.response.aircraft),
          error: () => this.errorMessages.push(`No aircraft found for "${val}"`)
        });
      } else {
        this.aircraftService.getCallsign(val).subscribe({
          next: (res) => this.searchResults.push(res.response),
          error: () => this.errorMessages.push(`No routing found for callsign "${val}"`)
        });
      }
    });
  }

}
