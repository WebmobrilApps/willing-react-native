import store from "../store";
import types from "../types";

const { dispatch } = store

export const setLoaderVisibility = async (data) => {
    await dispatch({
      type: types.LOADER,
      payload: data
    })
  }


