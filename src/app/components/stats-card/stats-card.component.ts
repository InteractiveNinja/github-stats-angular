import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Repository } from '../../models/repository.model';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.css'],
})
export class StatsCardComponent implements OnInit {
  constructor() {}

  @Input()
  user: User | undefined | null;
  @Input()
  repos: Repository[] | null = [];

  ngOnInit(): void {}
}
