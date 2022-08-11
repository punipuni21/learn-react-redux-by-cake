import { cloneDeep } from "lodash";
import * as types from "../action/actionTypes";

const initialState = {
  materialList: [],
};

export default function materialListReducer(state = initialState, action) {
  const newState = cloneDeep(state);
  switch (action.type) {
    case types.SET_MATERIAL_STOCK:
      newState.materialList = action.materialList;
      return newState;
    case types.CONSUME_MATERIAL:
      switch (action.name) {
        case "ショートケーキ":
          newState.materialList[0].stock -= 1;
          newState.materialList[1].stock -= 1;
          newState.materialList[2].stock -= 1;
          return newState;
        case "チーズケーキ":
          newState.materialList[0].stock -= 1;
          newState.materialList[1].stock -= 2;
          newState.materialList[2].stock -= 1;
          return newState;
        case "シュークリーム":
          newState.materialList[0].stock -= 2;
          newState.materialList[2].stock -= 1;
          newState.materialList[3].stock -= 2;
          return newState;
        case "ロールケーキ":
          newState.materialList[0].stock -= 2;
          newState.materialList[1].stock -= 1;
          newState.materialList[2].stock -= 2;
          newState.materialList[3].stock -= 1;
          return newState;
        case "モンブラン":
          newState.materialList[0].stock -= 1;
          newState.materialList[1].stock -= 1;
          newState.materialList[2].stock -= 1;
          newState.materialList[4].stock -= 1;
          return newState;
        default:
          return newState;
      }
    default:
      return state;
  }
}
