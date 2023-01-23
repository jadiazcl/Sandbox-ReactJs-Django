import {
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_FAIL,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
} from "redux/actions/types";

const initialState = {
  post_list: null,
  post: null,
};

export default function post(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POST_LIST_SUCCESS:
      return {
        ...state,
        post_list: payload,
      };
    case GET_POST_LIST_FAIL:
      return {
        ...state,
        post_list: null,
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post_list: payload,
      };
    case GET_POST_FAIL:
      return {
        ...state,
        post_list: null,
      };
    default:
      return state;
  }
}
