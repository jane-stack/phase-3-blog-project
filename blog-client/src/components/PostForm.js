import React, { useEffect, useState } from "react";
// import EditForm from "./EditForm";

function PostForm({onAddPost, onUpdatePost, selectedPost}) {
    const [id, setPostId] = useState(0);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        setPostId(selectedPost.id)
        setTitle(selectedPost.title)
        setDate(selectedPost.date)
        setDescription(selectedPost.description)
    }, [selectedPost])

    function handleSubmit(e) {
        e.preventDefault();
        const newPost = {
            title: title,
            date: date,
            description: description
        }

        fetch("http://localhost:6001/blogPost", {
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

    function handleEditSubmit(e) {
        e.preventDefault();
        const newPost = {
            title: title,
            date: date,
            description: description
        }

        fetch(`http://localhost:6001/blogPost/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost)
        })
        .then(resp => resp.json())
        .then(updatePost => onUpdatePost(updatePost));
    }

    return (
        <form className="new-post" onSubmit={handleSubmit} onClick={handleEditSubmit} >
            <input type="text" name="title" placeholder="Title of Your Post.." onChange={(e) => setTitle(e.target.value)} value={title} />
            <input type="date" name="date" onChange={(e) => setDate(e.target.value)} value={date} />
            <input type="text" name="description" placeholder="Start your post!" onChange={(e) => setDescription(e.target.value)} value={description} />
            <button>POST</button>
            {/* <EditForm selectedPost={selectedPost} /> */}
        </form>
    )
}

export default PostForm;