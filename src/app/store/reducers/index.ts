import * as fromUser from './user.reducer';
import * as fromRepo from './repository.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { StatsActionTypes } from '../actions';

export interface StatsState {
  user: fromUser.UserState;
  repo: fromRepo.RepositoryState;
}

export const reducers: ActionReducerMap<StatsState, StatsActionTypes> = {
  user: fromUser.reducer,
  repo: fromRepo.reducer,
};
