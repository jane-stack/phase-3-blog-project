import React, { useEffect, useState } from "react";
function EditPost({onUpdatePost, select}) {
    const [id, setId] = useState(0);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        setId(select.id);
        setTitle(select.title);
        setDescription(select.description);
    }, [select]);

    function handleEditSubmit(e) {
        e.preventDefault();
        const editedPost = {
            id: id,
            title: title,
            description: description,
        }

        fetch(`http://localhost:9292/posts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedPost)
        })
        .then(resp => resp.json())
        .then(onUpdatePost(editedPost));

        // refresh input fields after submitting form.
        setTitle("");
        setDescription("");
    }

    return (
        <form onSubmit={handleEditSubmit}>
            <p>Edit as you please...</p>
            <input type="text" name="title" placeholder="Title of Your Post.." onChange={(e) => setTitle(e.target.value)} value={title} />
            <input type="text" name="description" placeholder="Start your post!" onChange={(e) => setDescription(e.target.value)} value={description} />
            <button type="submit" className="contact-btn">DONE EDITING</button>
        </form>
    )
}
export default EditPost;