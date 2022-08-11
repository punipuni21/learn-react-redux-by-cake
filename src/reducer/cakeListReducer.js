import { cloneDeep } from "looash";
import * as types from "../action/actionTypes";

const initialState = {
  cakeList: [],
  funds: 10000,
};

export default function cakeListReducer(state = initialState, action) {
  const newState = cloneDeep(state);
  switch (action.type) {
    case types.SET_CAKE_LIST:
      newState.cakeList = action.cakeList;
      return newState;
    default:
      return state;
  }
}
