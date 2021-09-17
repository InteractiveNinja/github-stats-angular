import { Component, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { StatsGithubService } from '../../service/stats-github.service';
import { User } from '../../models/user.model';
import { Repository } from '../../models/repository.model';

@Component({
  selector: 'app-stats',
  styleUrls: ['./stats.component.css'],
  templateUrl: './stats.component.html',
})
export class StatsComponent implements OnInit {
  constructor(private service: StatsGithubService) {}

  search: EventEmitter<string> = new EventEmitter<string>();

  user: Observable<User> | undefined;
  repos: Observable<Repository[]> | undefined;

  ngOnInit() {
    this.user = this.service.getUser('InteractiveNinja');

    this.repos = this.service.getRepository('InteractiveNinja');

    this.search
      .pipe(
        filter((f) => f != ''),
        distinctUntilChanged(),
        debounceTime(1000)
      )
      .subscribe((username) => {
        this.user = this.service.getUser(username);
        this.repos = this.service.getRepository(username);
      });
  }
}
