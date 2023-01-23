import React, { useState } from "react";
import EditPost from "./EditPost";


function Post({post, onPostDelete, onUpdatePost}) {

    const [isEditing, setIsEditing] = useState(false);
    const {id, title, date, description} = post;

    function handleDeleteClick() {
        fetch(`http://localhost:9292/posts/${id}`, {
            method: "DELETE",
        });
        onPostDelete(id);
    }

    function handleUpdatePost(updatedPost) {
        setIsEditing(false);
        onUpdatePost(updatedPost)
    }

    return (
        <li>
            <span className="title">{title}</span>
            <span className="description">{description}</span>
            {isEditing ? (
                <EditPost
                    id={id}
                    title={title}
                    description={description}
                    onUpdatePost={handleUpdatePost}
                />
            ) : (
                <>
                <p>{description}</p>
                <div className="exit-action">
                    <button onClick={() => setIsEditing(isEditing => !isEditing)}>EDIT</button>
                    <button onClick={handleDeleteClick}>DELETE</button>
                </div>
                </>
            )}
        </li>
    )
}

export default Post;