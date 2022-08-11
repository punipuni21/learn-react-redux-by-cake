import * as types from "./actionTypes";

export const setMaterialStock = (materialList) => {
  return {
    type: types.SET_MATERIAL_STOCK,
    materialList,
  };
};
