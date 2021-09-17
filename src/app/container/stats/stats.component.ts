import { Component, OnInit } from '@angular/core';
import { StatsGithubService } from '../../service/stats-github.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
})
export class StatsComponent implements OnInit {
  constructor(private statsService: StatsGithubService) {}
  ngOnInit(): void {}
}