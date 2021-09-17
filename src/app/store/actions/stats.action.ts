import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';
import { Repository } from '../../models/repository.model';

// User Actions
export const GET_USER = '[Stats] Get User';
export const GET_USER_FAIL = '[Stats] Get User failed';
export const GET_USER_SUCCESS = '[Stats] Get User was successfully';

export class getUser implements Action {
  constructor() {}
  readonly type = GET_USER;
}
export class getUserFail implements Action {
  constructor(public payload: any) {}
  readonly type = GET_USER_FAIL;
}
export class getUserSuccess implements Action {
  constructor(public payload: User) {}
  readonly type = GET_USER_SUCCESS;
}

// Repo Actions
export const REPO_USER = '[Stats] Get Repo';
export const REPO_USER_FAIL = '[Stats] Get Repo failed';
export const REPO_USER_SUCCESS = '[Stats] Get Repo was successfully';

export class getRepo implements Action {
  constructor() {}
  readonly type = REPO_USER;
}
export class getRepoFail implements Action {
  constructor(public payload: any) {}
  readonly type = REPO_USER_FAIL;
}
export class getRepoSuccess implements Action {
  constructor(public payload: Repository) {}
  readonly type = REPO_USER_SUCCESS;
}
