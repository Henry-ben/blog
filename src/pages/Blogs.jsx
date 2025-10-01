import React from "react";
import { useState } from "react";
import blogs from "../blog/index.json";
import Cards from "../cards";
function Blogs(){
const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Calculate indexes
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = blogs.slice(startIndex, endIndex);

  // Total pages
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

    return(
        <>
            <h1> Blogs Page </h1>
            <div>
                <Cards blogs={currentItems}/>
            </div>
            <div style={{ marginTop: "20px"}}>
                <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                style={{ marginRight: "10px", border: "1px solid black"}}
                >
                Previous
                </button>

                

                <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                style={{ border: "1px solid black"}}
                >
                Next
                </button>
            </div>
        </>
    );  

}
export default Blogs;