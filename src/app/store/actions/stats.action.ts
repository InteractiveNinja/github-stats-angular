import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';
import { Repository } from '../../models/repository.model';

// User Actions
export const GET_USER = '[Stats] Get User';
export const GET_USER_FAIL = '[Stats] Get User failed';
export const GET_USER_SUCCESS = '[Stats] Get User was successfully';

export class GetUser implements Action {
  readonly type = GET_USER;
  constructor(public payload: string) {}
}
export class GetUserFail implements Action {
  constructor(public payload: any) {}
  readonly type = GET_USER_FAIL;
}
export class GetUserSuccess implements Action {
  constructor(public payload: User) {}
  readonly type = GET_USER_SUCCESS;
}

// Repo Actions
export const GET_REPO = '[Stats] Get Repo';
export const GET_REPO_FAIL = '[Stats] Get Repo failed';
export const GET_REPO_SUCCESS = '[Stats] Get Repo was successfully';

export class GetRepo implements Action {
  readonly type = GET_REPO;
  constructor(public payload: string) {}
}
export class GetRepoFail implements Action {
  constructor(public payload: any) {}
  readonly type = GET_REPO_FAIL;
}
export class GetRepoSuccess implements Action {
  constructor(public payload: Repository[]) {}
  readonly type = GET_REPO_SUCCESS;
}

export type StatsActionTypes =
  | GetUser
  | GetUserFail
  | GetUserSuccess
  | GetRepo
  | GetRepoFail
  | GetRepoSuccess;
