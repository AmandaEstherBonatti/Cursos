import React from "react";
import { Routes, Route } from "react-router-dom";
import { Redirect } from "react-router"
import Home from '../components/home/Home';
import UserCrud from '../components/user/UserCrud';

const Router = () => {
    return (

        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/users' element={<UserCrud/>} />
            <Redirect from='*' element={<Home/>} />
        </Routes>



    )
}


export default Router