import {Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-results-display',
  imports: [
    MatCardModule,
    CommonModule
  ],
  templateUrl: './results-display.component.html',
  styleUrl: './results-display.component.css'
})
export class ResultsDisplayComponent {
  @Input() results: any[] = [];
}
