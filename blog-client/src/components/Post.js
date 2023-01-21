import React from "react";


function Post({post, onPostDelete, selectPost}) {

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
            <button onClick={() => selectPost(post)}>EDIT</button>
            <button onClick={handleDeleteClick}>DELETE</button>
        </li>
    )
}

export default Post;