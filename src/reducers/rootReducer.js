import { combineReducers } from "redux";
import containerReducer from "components/Container/reducers/containerReducer";
import detailReducer from "components/Details/reducers/detailReducer";

export default combineReducers({
  content: containerReducer,
  student: detailReducer
});
