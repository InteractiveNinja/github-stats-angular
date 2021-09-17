import { Component, OnInit } from '@angular/core';
import { StatsGithubService } from '../../service/stats-github.service';
import { Store } from '@ngrx/store';
import { StatsState } from '../../store';
import * as statsAction from '../../store/actions';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit {
  constructor(
    private statsService: StatsGithubService,
    private store: Store<StatsState>
  ) {}
  ngOnInit(): void {
    this.store.dispatch(new statsAction.GetUser('CoalPlays'));
  }
}
