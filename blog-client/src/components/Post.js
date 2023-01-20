import React from "react";
import EditPost from "./EditPost";

function Post({post, onPostDelete}) {

    const {id, title, date, description} = post

    function handleDeleteClick() {
        fetch(`http://localhost:6001/blogPost/${id}`, {
            method: "DELETE",
        });
        onPostDelete(id);
    }

    return (
        <ul>
            <h3>{title}</h3>
            <h5>{date}</h5>
            <p>{description}</p>
            <button onClick={handleEditClick}>EDIT</button> <button onClick={handleDeleteClick}>DELETE</button>
            <EditPost 
                id={id}
                title={title}
                description={description}
            />
        </ul>
    )
}

export default Post;