import { createReducer } from 'reduxsauce';
import _ from 'lodash';

import { ErrorType, LoadingType } from '../../utils/types';
import { AppAction, appActionTypes, IResetErrorsAction, ISetErrorAction } from './actions';
import {
  IGetUserAccountAction,
  IGetUserAccountFailureAction,
  IGetUserAccountSuccessAction,
  userActionTypes,
} from '../user';

export interface IAppState {
  loading: Record<LoadingType, boolean>;
  errors: Record<ErrorType, string | null>;
}

const INITIAL_STATE: IAppState = {
  loading: {
    isGetUser: false,
  },
  errors: {
    getUser: null,
  },
};

type Handler<A> = (state: IAppState, action: A) => IAppState;

const setError: Handler<ISetErrorAction> = (state, { errorType, error }) => ({
  ...state,
  errors: {
    ...state.errors,
    [errorType]: error,
  },
});

const resetErrors: Handler<IResetErrorsAction> = (state) => ({
  ...state,
  errors: _.cloneDeep(INITIAL_STATE.errors),
});

/* ------ AUTOMATIC ANOTHER SAGAS HANDLERS ------ */
const getLoadingHandler = <T>(
  loadingType: LoadingType,
  isLoading: boolean,
  errorType: ErrorType,
): Handler<T> => (state) => ({
  ...state,
  loading: { ...state.loading, [loadingType]: isLoading },
  errors: { ...state.errors, [errorType]: null },
});

const getLoadingErrorHandler = <T extends { error: string | null }>(
  loadingType: LoadingType,
  errorType: ErrorType,
): Handler<T> => (state, { error }) => ({
  ...state,
  loading: { ...state.loading, [loadingType]: false },
  errors: { ...state.errors, [errorType]: error },
});
/* ---------------------------------------------- */

export const appReducer = createReducer<IAppState, AppAction>(INITIAL_STATE, {
  [appActionTypes.SET_ERROR]: setError,
  [appActionTypes.RESET_ERRORS]: resetErrors,

  /* ------------------- USER --------------------- */

  // TODO: delete when project starts
  [userActionTypes.GET_USER]: getLoadingHandler<IGetUserAccountAction>(
    LoadingType.isGetUser,
    true,
    ErrorType.getUser,
  ),
  [userActionTypes.GET_USER_SUCCESS]: getLoadingHandler<IGetUserAccountSuccessAction>(
    LoadingType.isGetUser,
    false,
    ErrorType.getUser,
  ),
  [userActionTypes.GET_USER_FAILURE]: getLoadingErrorHandler<IGetUserAccountFailureAction>(
    LoadingType.isGetUser,
    ErrorType.getUser,
  ),
});
