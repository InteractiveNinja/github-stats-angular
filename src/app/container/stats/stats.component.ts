import { Component, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { StatsGithubService } from '../../service/stats-github.service';
import { User } from '../../models/user.model';
import { Repository } from '../../models/repository.model';
import { Store } from '@ngrx/store';
import {
  GetRepo,
  GetUser,
  selectRepository,
  selectUser,
  StatsState,
} from '../../store';

@Component({
  selector: 'app-stats',
  styleUrls: ['./stats.component.css'],
  templateUrl: './stats.component.html',
})
export class StatsComponent implements OnInit {
  constructor(private store: Store<StatsState>) {}

  search: EventEmitter<string> = new EventEmitter<string>();

  user: Observable<User | undefined> | undefined;
  repos: Observable<Repository[]> | undefined;

  ngOnInit() {
    this.search
      .pipe(
        filter((f) => f != ''),
        distinctUntilChanged(),
        debounceTime(1000)
      )
      .subscribe((username) => {
        this.store.dispatch(new GetUser(username));
        this.store.dispatch(new GetRepo(username));

        this.user = this.store.select(selectUser);
        this.repos = this.store.select(selectRepository);
      });
  }
}
