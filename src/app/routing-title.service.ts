import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RoutingTitleService {

  private url = 'assets/data/dashboard-link.json';

  constructor(private http: HttpClient) { }

  /** GET titles from server */
  getTitles (): Observable<{}> {
    return this.http.get<{}>(this.url)
      .pipe(
        tap(heroes => console.log('fetched titles')),
        catchError((e) => {
            console.log(`Fetch title error: ${e.body.error}`);
            return of(e);
        })
      );
  }

}
