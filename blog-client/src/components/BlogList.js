import React from "react";
import BlogPost from "./BlogPost";

function BlogList({list, onPostDelete}) {
    const renderPost = list.map(post => {
        return (
            <BlogPost 
                key={post.id}
                title={post.title}
                date={post.date}
                description={post.description}
            />
        )
    })

    return (
        <ul className="blog-list">
            {renderPost}
            <BlogPost key={list.id} list={list} onPostDelete={onPostDelete}/>
        </ul>
    )
}
export default BlogList;