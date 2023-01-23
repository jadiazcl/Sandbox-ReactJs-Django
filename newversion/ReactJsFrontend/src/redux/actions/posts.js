import axios from "axios";
import {
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_FAIL,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
} from "./types";

export const get_post_list = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/posts`,
      config
    );
    if (res.status == 200) {
      dispatch({
        type: GET_POST_LIST_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_POST_LIST_FAIL,
      });
    }
  } catch {
    dispatch({
      type: GET_POST_LIST_FAIL,
    });
  }
};

export const get_post = (id_post) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/search?id_post${id_post}`,
      config
    );
    if (res.status == 200) {
      dispatch({
        type: GET_POST_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_POST_FAIL,
      });
    }
  } catch (error) {}
};
