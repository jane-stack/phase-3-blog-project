import React from "react";
function BlogList({renderBlogs}) {
    return (
        <ul className="blog-list">
            {renderBlogs}
        </ul>
    )
}
export default BlogList;