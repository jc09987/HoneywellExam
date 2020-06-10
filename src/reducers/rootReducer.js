import { combineReducers } from "redux";
import containerReducer from "components/Container/reducers/containerReducer";

export default combineReducers({
  content: containerReducer
});
