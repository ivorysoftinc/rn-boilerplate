import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { AppDispatch, RootState } from '..';
import { appActionTypes } from './actions';
import { ErrorType } from '../../utils/types';

// Selector hooks
export const useLoadingState = () => useSelector((state: RootState) => state.app.loading);

export const useErrors = () => useSelector((state: RootState) => state.app.errors);

// Callback hooks
export const useSetErrorCallback = (dispatch: AppDispatch) =>
  useCallback(
    (errorType: ErrorType, error: string | null) =>
      dispatch({
        type: appActionTypes.SET_ERROR,
        errorType,
        error,
      }),
    [dispatch],
  );

export const useResetErrorsCallback = (dispatch: AppDispatch) =>
  useCallback(
    () =>
      dispatch({
        type: appActionTypes.RESET_ERRORS,
      }),
    [dispatch],
  );
