import React from "react";
import { Link } from "react-router-dom";


function Cards({blogs}) {
    const styles = {
        card: {  
            width: "600px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            margin: "16px",
            boxShadow: "0 14px 18px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
        },
        title: {    
            fontSize: "1.5em",
            marginBottom: "8px",
            color: "#13e741ff",
        },
        summary: {
            fontSize: "1em",
            color: "#100f0f",
        },
    };
    return(
        <div >
            {blogs.map((blog) => (
               <div style={styles.card}> 
                    <h2 style={styles.title}>{blog.title}</h2>       
                    <hr></hr>
                    <p>{blog.date}</p>
                    <p style={styles.summary}>{blog.summary}</p>
                    <Link to={`/details/${blog.id}`}>
                     <p>More ➡️</p>
                    </Link>
                </div>
            ))}

           
        </div>
    );
}
export default Cards;