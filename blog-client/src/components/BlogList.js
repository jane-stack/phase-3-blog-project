import React from "react";
import Post from "./Post";

function BlogList({posts}) {

    const renderBlogPosts = posts.map(post => {
        return (
            <Post
                key={post.id}
                title={post.title}
                date={post.date}
                description={post.description}
            />
        )
    })

    return (
        <div className="list">
            <ul>
                {renderBlogPosts}
            </ul>
        </div>
    )
}
export default BlogList;