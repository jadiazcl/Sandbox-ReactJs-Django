import {
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_FAIL,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
} from "redux/actions/types";

const initialState = {
  post_list: null,
  post: null,
  count: null,
  next: null,
  previous: null,
};

export default function post(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POST_LIST_SUCCESS:
      return {
        ...state,
        post_list: payload.results.posts,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_POST_LIST_FAIL:
      return {
        ...state,
        post_list: null,
        count: null,
        next: null,
        previous: null,
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
