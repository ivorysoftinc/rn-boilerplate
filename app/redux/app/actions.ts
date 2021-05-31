import { createActions } from 'reduxsauce';

import { ErrorType } from '../../utils/types';

interface IAppActionTypes {
  SET_ERROR: 'SET_ERROR';
  RESET_ERRORS: 'RESET_ERRORS';
}

export interface ISetErrorAction {
  type: IAppActionTypes['SET_ERROR'];
  errorType: ErrorType;
  error: string | null;
}

export interface IResetErrorsAction {
  type: IAppActionTypes['RESET_ERRORS'];
}

interface IAppActionCreators {
  setError(errorType: ErrorType, error: string | null): ISetErrorAction;
  resetErrors(): IResetErrorsAction;
}

export type AppAction = ISetErrorAction | IResetErrorsAction;

const { Types, Creators } = createActions<IAppActionTypes, IAppActionCreators>(
  {
    setError: ['errorType', 'error'],
    resetErrors: null,
  },
  {
    prefix: 'APP/',
  },
);

export const appActionTypes = Types;

export const appActionCreators = Creators;
