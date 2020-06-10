import {
  FETCH_CONTENT_BEGIN,
  FETCH_CONTENT_SUCCESS,
  FETCH_CONTENT_FAILURE
} from "../actions/appActions";

const initialState = {
  content: {},
  loading: false,
  error: null
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTENT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_CONTENT_SUCCESS:
      return {
        ...state,
        loading: false,
        content: action.payload.data
      };

    case FETCH_CONTENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        content: {}
      };

    default:
      return state;
  }
}
