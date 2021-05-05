import React from "react";
import { Link } from "react-router-dom";
import "../Css/Empty.css";

const Empty = () =>{
    return(
        <div className="empty">
            <h1>No Items here :(</h1>
            <p>Head over to Shopping <Link to='/'>Let's Go!</Link></p>
        </div>
    );
}

export default Empty;