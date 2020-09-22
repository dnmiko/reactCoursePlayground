import * as actionTypes from './actionTypes';

const syncStore = (valueToStore) => {
  return {
    type: actionTypes.STORE,
    value: valueToStore,
  };
};

export const asyncStore = (valueToStore) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(syncStore(valueToStore));
    }, 2000);
  };
};

export const deleteValue = (indexToDelete) => {
  return {
    type: actionTypes.DELETE,
    value: indexToDelete,
  };
};
