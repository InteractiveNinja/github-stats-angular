import { Component, Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

const USER_API: string = `https://api.github.com/users`;

@Injectable({
  providedIn: 'root',
})
export class StatsGithubService {
  constructor(private http: HttpClient) {}

  getUser(name: string): Observable<User> {
    return this.http.get<User>(`${USER_API}/${name}`);
  }
}
