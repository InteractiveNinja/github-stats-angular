import { Component, Input, OnInit } from '@angular/core';
import { Repository } from '../../models/repository.model';

@Component({
  selector: 'app-stats-repo-card',
  templateUrl: './stats-repo-card.component.html',
  styleUrls: ['./stats-repo-card.component.css'],
})
export class StatsRepoCardComponent implements OnInit {
  constructor() {}

  @Input()
  repo: Repository | undefined;

  ngOnInit(): void {}
}
