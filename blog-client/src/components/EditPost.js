import React, { useState } from "react";

function EditPost({id, title, description}) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault
    }

    return (
        <form className="edit-post" onSubmit={handleSubmit}>

        </form>
    )
}

export default EditPost;