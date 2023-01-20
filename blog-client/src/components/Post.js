import React from "react";

function Post({title, date, description}) {

    return (
        <ul>
            <h3>{title}</h3>
            <h5>{date}</h5>
            <p>{description}</p>
        </ul>
    )
}

export default Post;