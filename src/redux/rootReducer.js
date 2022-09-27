import {combineReducers} from "redux";
import counterReducer from "../components/ReduxCounter/counterReducer";
import titleReducer from "../components/Header/titleReducer";


export default combineReducers({
  // auth: authReducer,
  title: titleReducer,
  counter: counterReducer,
  // posts: postsReducer

},);