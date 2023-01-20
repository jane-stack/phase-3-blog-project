import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import NewBlogForm from "./NewBlogForm";

function BlogPage() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:6001/blogPost")
        .then(resp => resp.json())
        .then(data => setList(data))
    }, [])

    function handleDeletePost(id) {
        const updatedBlog = list.filter((post) => post.id !== id);
        setList(updatedBlog);
    }

    const handleNewPost = (newPost) => {
        setList([...list], newPost);
    }

    return (
        <main>
            <NewBlogForm onAddPost={handleNewPost} />
            <BlogList list={list} onPostDelete={handleDeletePost} />
        </main>
    )
}
export default BlogPage;