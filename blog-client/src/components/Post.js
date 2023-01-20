import React, { useState } from "react";
import EditForm from "./EditForm";


function Post({post, onPostDelete, onPostUpdate}) {
    const [isEditing, setIsEditing] = useState(false);

    const {id, title, date, description} = post

    function handleDeleteClick() {
        fetch(`http://localhost:6001/blogPost/${id}`, {
            method: "DELETE",
        });
        onPostDelete(id);
    }

    const handleEditClick = () => console.log(`Edit ${id}`);

    return (
        <ul>
            <h3>{title}</h3>
            <h5>{date}</h5>
            <p>{description}</p>
            <button onClick={handleEditClick}>EDIT</button> <button onClick={handleDeleteClick}>DELETE</button>
            <EditForm
                post={post}
                onPostDelete={onPostUpdate}
            />
        </ul>
    )
}

export default Post;