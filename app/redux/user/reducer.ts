import { createReducer } from 'reduxsauce';
import { IApiUser } from '../../services/api/api.types';
import {
  UserAction,
  userActionTypes,
  IGetUserAccountAction,
  IGetUserAccountFailureAction,
  IGetUserAccountSuccessAction,
} from './actions';

export interface UserState {
  isLoading: boolean;
  account: IApiUser | null;
  error: string | null;
}

const INITIAL_STATE: UserState = {
  isLoading: false,
  error: null,
  account: null,
};

type Handler<A> = (state: UserState, action: A) => UserState;

const getUserAccount: Handler<IGetUserAccountAction> = (state) => ({
  ...state,
  isLoading: true,
});

const getUserAccountSuccess: Handler<IGetUserAccountSuccessAction> = (state, { account }) => ({
  ...state,
  isLoading: false,
  account,
});

const getUserAccountFailure: Handler<IGetUserAccountFailureAction> = (state, { error }) => ({
  ...state,
  isLoading: false,
  error,
});

export const userReducer = createReducer<UserState, UserAction>(INITIAL_STATE, {
  [userActionTypes.GET_USER]: getUserAccount,
  [userActionTypes.GET_USER_SUCCESS]: getUserAccountSuccess,
  [userActionTypes.GET_USER_FAILURE]: getUserAccountFailure,
});
