import React from "react";
import blogs from "./blog/index.json";
import Cards from "./cards.jsx";
import { Link } from "react-router-dom";

function Body(){
    
    return(
        <div className="body">
            <Cards blogs={blogs.slice(0,3)}/>
             <Link to = "/blog"><p> More ➡️ </p></Link>
        </div>
    );
}
export default Body;