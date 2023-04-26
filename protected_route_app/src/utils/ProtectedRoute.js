import React from 'react'

import {Navigate} from "react-router-dom"

const ProtectedRoute = ({children}) => {
    console.log(localStorage.getItem("user"))
    if(!localStorage.getItem("user")) {
        return <Navigate to="/login"  replace />
    }
 return children
};

export default ProtectedRoute;