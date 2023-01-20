import React from "react";
import EditForm from "./EditForm";


function Post({post, onPostDelete, onPostUpdate}) {

    const {id, title, date, description} = post

    function handleDeleteClick() {
        fetch(`http://localhost:6001/blogPost/${id}`, {
            method: "DELETE",
        });
        onPostDelete(id);
    }

    function handleEditClick() {
        const updatedPost = {
            title: title,
            date: date,
            description: description
        }

        fetch(`http://localhost:6001/blogPost/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedPost),
        })
        .then(resp => resp.json())
        .then( updatedPost => onPostUpdate(updatedPost))
    }

    return (
        <ul>
            <h3>{title}</h3>
            <h5>{date}</h5>
            <p>{description}</p>
            <button onClick={handleEditClick}>EDIT</button> <button onClick={handleDeleteClick}>DELETE</button>
            <EditForm />
        </ul>
    )
}

export default Post;