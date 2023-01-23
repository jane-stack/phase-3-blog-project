import React from "react";
import Post from "./Post";
import PostForm from "./PostForm";

function BlogList({
    posts, 
    onPostDelete, 
    onAddPost,
    onUpdatePost }) {

    const renderBlogPosts = posts.map(post => {
        return (
            <Post
                key={post.id}
                post={post}
                title={post.title}
                date={post.date}
                description={post.description}
                onPostDelete={onPostDelete}
                onUpdatePost={onUpdatePost}
            />
        )
    })

    return (
        <div className="list">
            <PostForm
                onAddPost={onAddPost} 
                onUpdatePost={onUpdatePost} 
            />
            <ul>
                {renderBlogPosts}
            </ul>
        </div>
    )
}
export default BlogList;