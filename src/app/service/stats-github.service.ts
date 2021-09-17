import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Repository } from '../models/repository.model';

const USER_API: string = `https://api.github.com/users`;

@Injectable({
  providedIn: 'root',
})
export class StatsGithubService {
  constructor(private http: HttpClient) {}

  getUser(name: string): Observable<User> {
    return this.http.get<User>(`${USER_API}/${name}`);
  }
  getRepository(name: string): Observable<Repository> {
    return this.http.get<Repository>(`${USER_API}/${name}/repos`);
  }
}
