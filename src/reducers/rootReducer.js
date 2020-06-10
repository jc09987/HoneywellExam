import { combineReducers } from "redux";
import appReducer from "components/App/reducers/appReducer";

export default combineReducers({
  content: appReducer
});
