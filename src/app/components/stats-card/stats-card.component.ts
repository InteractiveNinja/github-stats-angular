import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Repository } from '../../models/repository.model';
import { Store } from '@ngrx/store';
import { StatsState } from '../../store';
import * as fromSelectors from '../../store/selectors';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.css'],
})
export class StatsCardComponent implements OnInit {
  constructor(private store: Store<StatsState>) {}

  @Input()
  user: User | undefined | null;
  @Input()
  repos: Repository[] | null = [];

  ngOnInit(): void {
    this.store.select(fromSelectors.selectUserError).subscribe((val) => {
      if (val) alert('User not found');
    });
  }
}
