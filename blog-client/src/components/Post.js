import React, { useState } from "react";
import EditPost from "./EditPost";


function Post({post, onPostDelete, onUpdatePost, select, onSelectClick}) {

    const [isEditing, setIsEditing] = useState(false);
    const {id, title, date, description} = post;
    const showEditForm = () => setIsEditing(isEditing => !isEditing);

    function handleDeleteClick() {
        fetch(`http://localhost:9292/posts/${id}`, {
            method: "DELETE",
        });
        onPostDelete(id);
    }

    const handleEditClick = () => {
        onSelectClick(post);
        return (
            <EditPost select={select} onUpdatePost={onUpdatePost}/>
        )
    }

    return (
        <ul>
            <h1>{title}</h1>
            <h4>{post.user.username}</h4>
            <h5>{date}</h5>
            <p>{description}</p>
            <button className="edit-btn" onClick={showEditForm}>✏️</button>
            <button className="delete-btn" onClick={handleDeleteClick}>🗑</button>
            {isEditing && handleEditClick()}

        </ul>
    )
}

export default Post;