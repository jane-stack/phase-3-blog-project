import React, { useState } from "react";

function PostForm({onAddPost}) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const newPost = {
            title: title,
            date: date,
            description: description
        }

        fetch("http://localhost:9292/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        })
        .then(resp => resp.json())
        .then(newPost => onAddPost(newPost));

        // refresh input fields after submitting form.
        setTitle("");
        setDate("");
        setDescription("");
    }

    return (
        <form className="edit-post" onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title of Your Post.." onChange={(e) => setTitle(e.target.value)} value={title} />
            <input type="date" name="date" onChange={(e) => setDate(e.target.value)} value={date} />
            <input type="text" name="description" placeholder="Start your post!" onChange={(e) => setDescription(e.target.value)} value={description} />
            <button>POST</button>
        </form>
    )
}

export default PostForm;