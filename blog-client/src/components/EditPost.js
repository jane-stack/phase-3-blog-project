import React, { useState } from "react";
function EditPost({id, title, description, onUpdatePost}) {
    const [postBody, setPostBody] = useState("");

    function handleEditSubmit(e) {
        e.preventDefault();
        const editedPost = {
            title: title,
            description: postBody
        }

        fetch(`http://localhost:9292/posts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedPost)
        })
        .then(resp => resp.json())
        .then(updatePost => onUpdatePost(updatePost));
    }

    return (
        <form className="edit-post" onSubmit={handleEditSubmit}>
            <input
                type="text" 
                name="description" 
                autoComplete="off" 
                value={postBody} 
                onChange={(e) => setPostBody(e.target.value)}
            />
            <input type="submit" value="save"/>

        </form>
    )
}
export default EditPost;