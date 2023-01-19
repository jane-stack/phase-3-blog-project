import React from "react";
import BlogList from "./BlogList";
import NewBlogForm from "./NewBlogForm";
import Search from "./Search";

function BlogPage() {
    return (
        <main>
            <BlogList/>
            <NewBlogForm/>
            <Search/>
        </main>
    )
}
export default BlogPage;