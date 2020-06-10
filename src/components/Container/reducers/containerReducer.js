import {
  FETCH_STUDENTS_BEGIN,
  FETCH_STUDENTS_SUCCESS,
  FETCH_STUDENTS_FAILURE
} from "../actions/containerActions";

const initialState = {
  content: {},
  loading: false,
  error: null
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STUDENTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        content: action.payload.data
      };

    case FETCH_STUDENTS_FAILURE:
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
