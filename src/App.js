import React, {useState} from "react";
import {createBrowserRouter, RouterProvider,} from 'react-router-dom';
import './App.css';
import HamburgerMenu from "./Component/HamburgerMenu";
import Home from "./Pages/Home";
import Eligibility from './Pages/Eligibility';
import ErrorPage from "./Pages/Error";
import RootLayout from "./Pages/Root";
import RequestHistory from "./Pages/RequestHistory";
import CompleteProfile from "./Pages/CompleteProfile";
import NewProfile from "./Component/NewProfile";

const addProfileHandler = profile_detail =>{
  console.log("In App.js")
  console.log(profile_detail);
};
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {path : '/', element:<Home/>},
      {path : '/eligibility', element : <Eligibility/>},
      {path : '/requested-history', element: <RequestHistory/>},
      {path : '/complete-profile', element : <NewProfile onAddProfile = {addProfileHandler}/>}
    ],
  },
]);
function App() {
  return (
    <div>
        <HamburgerMenu/>
        <RouterProvider router={router}/>
        {/* <NewProfile onAddProfile = {addProfileHandler}/> */}
        <div>
        </div>
    </div>
  );
}

export default App;
