import { Repository } from '../../models/repository.model';
import { StatsActionTypes } from '../actions';
import * as fromAction from '../actions';

export interface RepositoryState {
  repo: Repository[];
  loaded: boolean;
  loading: boolean;
  error: boolean;
}

export const initState: RepositoryState = {
  repo: [],
  loaded: false,
  loading: false,
  error: false,
};

export const reducer = (
  state: RepositoryState = initState,
  action: StatsActionTypes
): RepositoryState => {
  switch (action.type) {
    case fromAction.GET_REPO: {
      return { ...state, loading: true };
    }
    case fromAction.GET_REPO_SUCCESS: {
      const repo = action.payload;
      return { ...state, loading: false, loaded: true, repo, error: false };
    }
    case fromAction.GET_REPO_FAIL: {
      return { ...state, loading: false, loaded: false, error: true };
    }
  }

  return state;
};
export const getRepository = (state: RepositoryState) => state.repo;
export const getRepositoryLoaded = (state: RepositoryState) => state.loaded;
export const getRepositoryLoading = (state: RepositoryState) => state.loading;
export const getRepositoryError = (state: RepositoryState) => state.error;
