import { useLocation, Navigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

const RequireAuth = ({children}) => {
    // const location = useLocation();
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

  // console.log(location)

    if (!auth) {
        // return <Navigate to='/login' state={{from: location}} />
        return <Navigate to='/auth' />
        // return ()=> dispatch(ModalAuthOpenCreate())
    }

  return children;
}

export default  RequireAuth;
