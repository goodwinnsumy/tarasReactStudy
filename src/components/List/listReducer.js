import initialStore from "../../redux/initialStore";
import {ADDITEM} from "./action";



const listReducer = (list = initialStore.list, action) => {
  switch(action.type) {
    case ADDITEM:
      return [...list, action.payload];


    default:
      return list;
  }
}

export default listReducer;