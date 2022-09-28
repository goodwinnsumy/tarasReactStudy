// import React, {Component, useEffect} from 'react';
// import {connect, useDispatch, useSelector} from "react-redux";
// import Loader from "../Loader/Loader";
// import {LoadedAction} from "../asyncActions/asyncAction";
// import {Link} from "react-router-dom";



import React, {Component} from 'react';
import {connect} from "react-redux";
import Loader from "../Loader/Loader";
import axios from "axios";
import {logDOM} from "@testing-library/react";
import {LoadedAction} from "./asyncAction";

class Posts extends Component {

    componentDidMount() {
        // axios('https://jsonplaceholder.typicode.com/posts')
        //   .then(res => console.log(res))

        this.props.dispatch(LoadedAction())

    }

    render() {
        const {posts, dispatch} = this.props

        const postsMap = posts.posts.map((post,i) => {
            return <p key={post.id}>{ post.title } </p>
        })

        return (
          <div>
              {posts.loading ? <Loader/> : postsMap}
              {/*{loading ? <Loader/> : postsMap}*/}

          </div>
        );
    }
}

function mapStateToProps(store) {
    return{
        posts: store.posts
    }
}

export default connect(mapStateToProps)(Posts);


//
// const  = (props) => {
//     const dispatch = useDispatch();
//     const postStore = useSelector(state => state.posts)
//
//     useEffect(()=>{
//         dispatch(LoadedAction())
//     },[])
//
//     const {loading, posts} = postStore
//
//
//
//     return (
//
//     );
//
// }


