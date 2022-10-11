import {LOGIN, LOGOUT, MODALAUTHCLOSE, MODALAUTHOPEN} from "./actions";
import initialStore from "../../redux/initialStore";

const authReducer = (auth = initialStore.auth, action) => {
    switch (action.type) {
        case LOGIN:
            return true;
        case LOGOUT:
            return false;

        // case MODALAUTHOPEN:
        //     return {...auth, modal: true};
        // case MODALAUTHCLOSE:
        //     return {...auth, modal: false};


        default:
            return auth;
    }
}

export default authReducer;