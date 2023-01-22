import React, { useEffect, useState } from "react";
import Header from "./Header";
import BlogList from "./BlogList";
import PostForm from "./PostForm";

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});

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

  const selectPost = (updatedPost) => {
    setSelectedPost(updatedPost);
  }

  return (
    <main className="App">
      <Header />
      <PostForm 
        onAddPost={handleAddPost} 
        onUpdatePost={handleUpdatedPost} 
        selectedPost={selectedPost}
        />
      <BlogList 
        posts={posts} 
        onPostDelete={handleDeletePost}
        selectPost={selectPost}
      />
    </main>
  );
}

export default App;
