import React from "react";
import Post from "./Post";
import EditForm from "./EditForm";

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
                <EditForm selectedPost={selectedPost} />
                {renderBlogPosts}
            </ul>
        </div>
    )
}
export default BlogList;