import {
  FETCH_CONTENT_BEGIN,
  FETCH_CONTENT_SUCCESS,
  FETCH_CONTENT_FAILURE,
  ADD_STUDENT_BEGIN,
  ADD_STUDENT_SUCCESS,
  ADD_STUDENT_FAILURE,
  DELETE_STUDENT_BEGIN,
  DELETE_STUDENT_SUCCESS,
  DELETE_STUDENT_FAILURE
} from "../actions/containerActions";

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

    case ADD_STUDENT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case ADD_STUDENT_SUCCESS:
      updatedState.content.content = [action.payload.data, ...state.content.content];
      return {
        ...updatedState,
        loading: false,
        student: action.payload.data
      };

    case ADD_STUDENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    case DELETE_STUDENT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case DELETE_STUDENT_SUCCESS:
      updatedState.content.content = state.content.content
        .filter(student => (parseInt(student.id, 10) !== parseInt(action.payload.data.id, 10)));

      return {
        ...updatedState,
        loading: false,
        student: action.payload.data
      };

    case DELETE_STUDENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
}
