import { HttpClient } from '@angular/common/http'; // Import the HttpClient class
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Crew } from './shared/crew.model';
import { Destination } from './shared/destination.model';
import { Technology } from './shared/technology.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getDestinationByName(name: string): Observable<Destination | undefined> {
    return this.http
      .get<{ destinations: Destination[] }>('assets/data/data.json')
      .pipe(
        map((response) =>
          response.destinations.find(
            (dest) => dest.name.toLowerCase() === name.toLowerCase()
          )
        )
      );
  }

  getCrewByName(name: string): Observable<Crew | undefined> {
    return this.http
      .get<{ crew: Crew[] }>('assets/data/data.json')
      .pipe(
        map((response) =>
          response.crew.find(
            (crew) => crew.name.toLowerCase() === name.toLowerCase()
          )
        )
      );
  }

  getTechnologyByName(name: string): Observable<Technology | undefined> {
    return this.http
      .get<{ technology: Technology[] }>('assets/data/data.json')
      .pipe(
        map((response) =>
          response.technology.find(
            (technology) => technology.name.toLowerCase() === name.toLowerCase()
          )
        )
      );
  }
}
