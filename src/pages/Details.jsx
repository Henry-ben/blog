import { useParams } from "react-router-dom";

function BlogDetails({ blogs }) {
  const { id } = useParams(); // get ID from URL
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <h2>Blog not found</h2>;
   const styles = {
    blogDetails: {
      marginTop: "50px",
      width: "90%",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      fontFamily: "Arial, sans-serif",
      color: "#333",
    },
    title: {    
        fontSize: "2.5em",
        marginBottom: "10px",
        color: "#13e741ff",
        },
        content: {
            fontSize: "1.2em",
            lineHeight: "1.6",
            marginTop: "20px",
            whiteSpace: "pre-wrap",
            color: "#100f0f",
            },
    };

  return (
    <div style={styles.blogDetails}>
      <h1 style={styles.title}>{blog.title}</h1>
      <p style={styles.content}>{blog.content}</p>
    </div>
  );
}

export default BlogDetails;
