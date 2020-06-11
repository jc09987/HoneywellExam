import {
    FETCH_STUDENT_BEGIN,
    FETCH_STUDENT_SUCCESS,
    FETCH_STUDENT_FAILURE
  } from "../actions/detailActions";
  
  const initialState = {
    student: {},
    loading: false,
    error: null
  };
  
  export default function detailReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_STUDENT_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_STUDENT_SUCCESS:
        return {
          ...state,
          loading: false,
          student: action.payload.data
        };
  
      case FETCH_STUDENT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          student: {}
        };
  
      default:
        return state;
    }
  }
  