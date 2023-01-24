import React from "react";
import Post from "./Post";
import PostForm from "./PostForm";
import { Redirect } from "react-router-dom";

function BlogList({
    posts, 
    isLoggedIn,
    onPostDelete, 
    onAddPost,
    onUpdatePost,
    select,
    onSelectClick }) {
        if(!isLoggedIn) return <Redirect to="/login"/>;

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
                    select={select}
                    onSelectClick={onSelectClick}
                />
            )
        })

    return (
        <div className="list">
            <PostForm
                onAddPost={onAddPost} 
                onUpdatePost={onUpdatePost} 
                select={select}
            />
            <ul>
                {renderBlogPosts}
            </ul>
        </div>
    )
}
export default BlogList;