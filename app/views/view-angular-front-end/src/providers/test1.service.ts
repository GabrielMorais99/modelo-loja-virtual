import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Test1Service {
  private URL: string = '/api/user';
  constructor(private http: HttpClient) {}

  get() {
    var response = this.http.get(this.URL);
    return response;
  }
}
