import './AppRoutes.scss';
import Counter from "../Counter/Counter";
import Posts from "../Posts/Posts";
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import Layout from "./Layout";
import NotFoundPage from "../../pages/NotFoundPage";
import Auth from "../Auth/Auth";
import RequireAuth from "./RequireAuth";
import Post from "../Post/Post";
import React from "react";
import CallbackHookExample from "../hooks/CallbackHookExample/CallbackHookExample";
import MemoHookExample from "../hooks/MemoHookExample/MemoHookExample";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="auth" element={<Auth/>}/>


          <Route path="usecallback" element={<CallbackHookExample/>}/>
          <Route path="usememo" element={<MemoHookExample/>}/>



          <Route path="counters" element={
            <RequireAuth>
              <Counter/>
            </RequireAuth>
          }/>

          <Route path="posts" element={
            <RequireAuth>
              <Posts/>
            </RequireAuth>
          }/>

          <Route path="posts/:postID" element={
            <RequireAuth>
              <Post/>
            </RequireAuth>
          }/>

          <Route path="*" element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
