import { Action } from '@ngrx/store';
import { Repository } from '../../models/repository.model';

export interface RepositoryState {
  repo?: Repository;
  loaded: boolean;
}

export const initState: RepositoryState = {
  loaded: false,
};

export const reducer = (
  state: RepositoryState = initState,
  action: Action
): RepositoryState => {
  return state;
};
export const getRepository = (state: RepositoryState) => state.repo;
export const getRepositoryLoaded = (state: RepositoryState) => state.loaded;
