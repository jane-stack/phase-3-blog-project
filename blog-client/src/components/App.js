import React, { useEffect, useState } from "react";
import Header from "./Header";
import BlogList from "./BlogList";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/posts")
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
    const updatedPosts = posts.map(post => {
      if (post.id === updatedPost.id) {
        return updatedPost;
      } else {
        return post;
      }
    });
    setPosts(updatedPosts);
  }

  return (
    <main className="App">
      <Header />
      <BlogList 
        posts={posts} 
        onPostDelete={handleDeletePost}
        onAddPost={handleAddPost} 
        onUpdatePost={handleUpdatedPost}
      />
    </main>
  );
}

export default App;
