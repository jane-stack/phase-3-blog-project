import React, { useEffect, useState } from "react";
import Header from "./Header";
import BlogList from "./BlogList";
import PostForm from "./PostForm";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/blogPost")
    .then(resp => resp.json())
    .then(posts  => setPosts(posts));
  }, []);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const handleDeletePost = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
  }

  const handleUpdatedPost = (updatedPost) => {
    const updatedPostList = posts.map(post => {
      if (post.id === updatedPost.id) {
        return updatedPost;
      } else {
        return post;
      }
    });
    setPosts(updatedPostList);
  }

  return (
    <main className="App">
      <Header />
      <PostForm onAddPost={handleAddPost} />
      <BlogList 
        posts={posts} 
        onPostDelete={handleDeletePost}
        OnPostUpdate={handleUpdatedPost}
      />
    </main>
  );
}

export default App;
