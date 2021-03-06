import { User } from '../../models/user.model';

import * as fromAction from '../actions';
import { StatsActionTypes } from '../actions';

export interface UserState {
  user?: User;
  loaded: boolean;
  loading: boolean;
  error: boolean;
}

export const initState: UserState = {
  loaded: false,
  loading: false,
  error: false,
};

export const reducer = (
  state: UserState = initState,
  action: StatsActionTypes
): UserState => {
  switch (action.type) {
    case fromAction.GET_USER: {
      return { ...state, loading: true, error: false };
    }
    case fromAction.GET_USER_SUCCESS: {
      const user = action.payload;
      return { ...state, loading: false, loaded: true, user };
    }
    case fromAction.GET_USER_FAIL: {
      return { ...state, loading: false, loaded: false, error: true };
    }
  }

  return state;
};

export const getUser = (state: UserState) => state.user;
export const getUserLoaded = (state: UserState) => state.loaded;
export const getUserLoading = (state: UserState) => state.loading;
export const getUserError = (state: UserState) => state.error;
