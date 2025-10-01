import React from "react";
import Blogs from './pages/Blogs.jsx'
import { Link } from "react-router-dom";
function Navbar(){
    const styles = {
        nav: {
            display: "flex",
            justifyContent: "space-between",
            marginTop: "-1rem",
            alignItems: "center",
            padding: "16px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        },
        ul: {
            listStyle: "none",
            display: "flex",
            gap: "16px",
        },
        li:{   
            cursor: "pointer",
            fontSize: "1em",
            color: "#020910ff",
            fontWeight: "500",
            textDecoration: "bold",
            
        },
        logo: {
            height: "60px",
            width: "60px",
            marginRight: "-25px",
        },
        title: {    
            position: "relative",
            left: "9%",
            fontSize: "2.5em",
            color: "#333",
            
        },
    };


    return(
        <nav style={styles.nav}>
            <Link to="/">
              <img src="logo.png" alt="logo" style={styles.logo}/>
            </Link>
            <Link to = "/"><h1 style={styles.title}> TailwindBlog</h1></Link>
            <ul style={styles.ul}>
                <li style={styles.li}>
                    <Link to="/blog" className="nav-link">Blogs</Link>
                </li>
                <li style={styles.li}>
                     <Link to="/tag" style={styles.li}>Tag</Link>
                </li>
                <li style={styles.li}>
                </li>
                <li style={styles.li}>
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li>🔍</li>
          </ul>
            
            
           

        </nav>
    );
}
export default Navbar;