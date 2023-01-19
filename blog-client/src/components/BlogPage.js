import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import NewBlogForm from "./NewBlogForm";
import Search from "./Search";

function BlogPage() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:6001/blogPost")
        .then(resp => resp.json())
        .then(data => setList(data))
    }, [])
    
    const renderBlogs = list.map(post => {
        return (
            <h3>{post.title}</h3>
        )
    });

    return (
        <main>
            <BlogList renderBlogs={renderBlogs} />
            <NewBlogForm />
            <Search />
        </main>
    )
}
export default BlogPage;