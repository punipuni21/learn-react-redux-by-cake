import * as types from "./actionTypes";

export const setCakeStock = (cakeList) => {
  return {
    type: types.SET_CAKE_LIST,
    cakeList,
  };
};

export default {
  setCakeStock,
};
