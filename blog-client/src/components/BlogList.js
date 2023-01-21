import React from "react";
import Post from "./Post";

function BlogList({posts, onPostDelete, selectPost, selectedPost}) {

    const renderBlogPosts = posts.map(post => {
        return (
            <Post
                key={post.id}
                post={post}
                title={post.title}
                date={post.date}
                description={post.description}
                onPostDelete={onPostDelete}
                selectPost={selectPost}
                selectedPost={selectedPost}
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