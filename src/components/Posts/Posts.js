import React, {Component, useEffect, useState} from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import {connect, useDispatch, useSelector} from "react-redux";
import Loader from "../Loader/Loader";
import axios from "axios";
import {logDOM} from "@testing-library/react";
import {LoadedAction} from "./asyncAction";
import "./Post.scss"
import {RingLoader} from "react-spinners";
import {Link} from "react-router-dom";

const Posts = (props) => {

    // componentDidMount() {
    //     // axios('https://jsonplaceholder.typicode.com/posts')
    //     //   .then(res => console.log(res))
    //
    // }

    const dispatch = useDispatch();

    // const [count, setCount] = useState(0);

    console.log("qqqqq")

    useEffect(()=>{
        // setCount(count+1)
        dispatch(LoadedAction())

        return ()=> console.log("bye")
    },[])

    const posts = useSelector((store)=>store.posts);

    // const {posts, dispatch} = this.props

    const postsMap = posts?.posts?.map((post, i) => {
        return <p className={"p"} key={post.id}>
            <Link to={`/posts/${post.id}`}> {post.title}</Link>
        </p>
    })

    const styleSpiner = {
        display: "block",
        margin: "0 auto",
        // borderColor: "red",
    };

    return (
        <div>

            {posts?.loading ? <RingLoader color="#36d7b7" size={200} cssOverride={styleSpiner}/> : postsMap}
            {/*{loading ? <Loader/> : postsMap}*/}
        </div>
    );

}


export default Posts;



