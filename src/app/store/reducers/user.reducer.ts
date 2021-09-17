import { User } from '../../models/user.model';
import { Action } from '@ngrx/store';

export interface UserState {
  user?: User;
  loaded: boolean;
}

export const initState: UserState = {
  loaded: false,
};

export const reducer = (
  state: UserState = initState,
  action: Action
): UserState => {
  return state;
};

export const getUser = (state: UserState) => state.user;
export const getUserLoaded = (state: UserState) => state.loaded;
