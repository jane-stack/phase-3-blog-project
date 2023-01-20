import React, { useState } from "react";

function NewBlogForm ({onAddPost}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    const newTitle = (e) => setTitle(e.target.value)
    const newDescription = (e) => setDescription(e.target.value)
    const newDate = (e) => setDate(e.target.value)

    function submitNewPost(e) {
        e.preventDefault();
        const postData = {
            title: title,
            date: date,
            description: description
        };
        fetch("http://localhost:6001/blogPost", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        })
        .then(resp => resp.json())
        .then(newPost => onAddPost(newPost));
    }

    return (
        <div className="new-blog-form">
            <h2>New Post</h2>
            <form onSubmit={submitNewPost}>
                <input type="text" name="title" placeholder="Your Title goes here.." onChange={newTitle} value={title} />
                <input type="date" name="date" onChange={newDate} value={date} />
                <input type="text" name="description" placeholder="Write your Blog.." onChange={newDescription} value={description} />
                <button type="submit">Add Post</button>
            </form>
        </div>
    )
}

export default NewBlogForm;