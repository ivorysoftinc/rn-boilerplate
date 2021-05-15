import { createActions } from 'reduxsauce';
import { IApiUser } from '../../services/api/api.types';

interface IUserActionTypes {
  GET_USER: 'GET_USER';
  GET_USER_SUCCESS: 'GET_USER_SUCCESS';
  GET_USER_FAILURE: 'GET_USER_FAILURE';
}

export interface IGetUserAccountAction {
  type: IUserActionTypes['GET_USER'];
}

export interface IGetUserAccountSuccessAction {
  type: IUserActionTypes['GET_USER_SUCCESS'];
  account: IApiUser;
}

export interface IGetUserAccountFailureAction {
  type: IUserActionTypes['GET_USER_FAILURE'];
  error: string;
}

interface IUserActionCreators {
  getUserAccount(): IGetUserAccountAction;
  getUserAccountSuccess(info: IApiUser): IGetUserAccountSuccessAction;
  getUserAccountFailure(error: string): IGetUserAccountFailureAction;
}

export type UserAction =
  | IGetUserAccountAction
  | IGetUserAccountSuccessAction
  | IGetUserAccountFailureAction;

const { Types, Creators } = createActions<IUserActionTypes, IUserActionCreators>(
  {
    getUser: null,
    getUserSuccess: ['info'],
    getUserFailure: ['error'],
  },
  {
    prefix: 'USER/',
  },
);

export const userActionTypes = Types;

export const userActionCreators = Creators;
