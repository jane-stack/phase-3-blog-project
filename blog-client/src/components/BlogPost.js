import React from "react";
function BlogPost({list, title, date, description, onPostDelete}) {

    function handleDeleteClick() {
        fetch(`http://localhost:6001/blogPost/${list.id}`, {
            method: "DELETE",
        });

        onPostDelete(list.id);
    }

    return (
        <ul className="post">
            <h4>{title}</h4>
            <h5>{date}</h5>
            <p>{description}</p>
            <button>Edit</button> <button onClick={handleDeleteClick}>Delete</button>
        </ul>
    )
}
export default BlogPost;