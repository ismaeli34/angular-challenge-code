import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, firstValueFrom, Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AircraftService {
    private baseUrl = 'https://api.adsbdb.com/v0';
      constructor() { }

      private http = inject(HttpClient);

  getAircraft(code: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/aircraft/${code}`).pipe(
      catchError(this.handleError)
    );
  }

  getCallsign(callsign: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/callsign/${callsign}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error.error || 'Server error');
  }
}
