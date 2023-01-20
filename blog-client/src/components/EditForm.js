import React, { useState } from "react";
function EditForm({post, onPostUpdate}) {
    const {id} = post
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const updatePost = {
            title: title,
            date: date,
            description: description
        }

        fetch(`http://localhost:6001/blogPost/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatePost),
        })
        .then(resp => resp.json())
        .then(updatePost => onPostUpdate(updatePost))
    }

    return (
        <form className="post-edit" onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title of Your Post.." onChange={(e) => setTitle(e.target.value)} value={title} />
            <input type="date" name="date" onChange={(e) => setDate(e.target.value)} value={date} />
            <input type="text" name="description" placeholder="Start your post!" onChange={(e) => setDescription(e.target.value)} value={description} />
        </form>
    )
}
export default EditForm;