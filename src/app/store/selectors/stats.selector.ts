import { createSelector } from '@ngrx/store';
import { StatsState } from '../reducers';

import * as fromRepo from '../reducers/repository.reducer';
import * as fromUser from '../reducers/user.reducer';

export const selectUser = createSelector(
  (state: StatsState) => state.user,
  fromUser.getUser
);

export const selectUserLoaded = createSelector(
  (state: StatsState) => state.user,
  fromUser.getUserLoaded
);
export const selectUserLoading = createSelector(
  (state: StatsState) => state.user,
  fromUser.getUserLoading
);
export const selectUserError = createSelector(
  (state: StatsState) => state.user,
  fromUser.getUserError
);

export const selectRepository = createSelector(
  (state: StatsState) => state.repo,
  fromRepo.getRepository
);

export const selectRepositoryLoaded = createSelector(
  (state: StatsState) => state.repo,
  fromRepo.getRepositoryLoaded
);
export const selectRepositoryLoading = createSelector(
  (state: StatsState) => state.repo,
  fromRepo.getRepositoryLoading
);
export const selectRepositoryError = createSelector(
  (state: StatsState) => state.repo,
  fromRepo.getRepositoryError
);
