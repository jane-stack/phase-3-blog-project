import React from "react";
import Post from "./Post";

function BlogList({posts, onPostDelete}) {

    const renderBlogPosts = posts.map(post => {
        return (
            <Post
                key={post.id}
                post={post}
                title={post.title}
                date={post.date}
                description={post.description}
                onPostDelete={onPostDelete}
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