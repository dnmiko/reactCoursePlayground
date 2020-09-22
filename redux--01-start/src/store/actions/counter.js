import * as actionTypes from './actionTypes';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};

export const add = (valueToAdd) => {
  return {
    type: actionTypes.ADD,
    value: valueToAdd,
  };
};

export const substract = (valueToSubstract) => {
  return {
    type: actionTypes.SUBSTRACT,
    value: valueToSubstract,
  };
};
