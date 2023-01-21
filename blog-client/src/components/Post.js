import React from "react";
import EditForm from "./EditForm";


function Post({post, onPostDelete, selectPost, selectedPost}) {

    const {id, title, date, description} = post

    function handleDeleteClick() {
        fetch(`http://localhost:6001/blogPost/${id}`, {
            method: "DELETE",
        });
        onPostDelete(id);
    }

    return (
        <li>
            <h3>{title}</h3>
            <h5>{date}</h5>
            <p>{description}</p>
            <EditForm selectedPost={selectedPost} />
            <button onClick={() => selectPost(post)}>EDIT</button>
            <button onClick={handleDeleteClick}>DELETE</button>
        </li>
    )
}

export default Post;