import { Injectable } from '@angular/core';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { StatsGithubService } from '../../service/stats-github.service';
import * as statsAction from '../actions/index';
import { Actions, createEffect, ofType } from '@ngrx/effects';

@Injectable()
export class StatsEffect {
  constructor(
    private actions$: Actions,

    private statsService: StatsGithubService
  ) {}
  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(statsAction.GET_USER),
      map((action: statsAction.GetUser) => action.payload),
      switchMap((user) => {
        return this.statsService.getUser(user).pipe(
          map(
            (user) => new statsAction.GetUserSuccess(user),
            catchError((err) => of(new statsAction.GetUserFail(err)))
          )
        );
      })
    )
  );
  getRepo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(statsAction.GET_REPO),
      map((action: statsAction.GetRepo) => action.payload),
      switchMap((repo) => {
        return this.statsService.getRepository(repo).pipe(
          map(
            (repo) => new statsAction.GetRepoSuccess(repo),
            catchError((err) => of(new statsAction.GetRepoFail(err)))
          )
        );
      })
    )
  );
}
