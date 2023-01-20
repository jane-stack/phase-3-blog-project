import React, { useEffect, useState } from "react";
import Header from "./Header";
import BlogList from "./BlogList";
import NewPost from "./NewPost";

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

  return (
    <main className="App">
      <Header />
      <NewPost onAddPost={handleAddPost} />
      <BlogList posts={posts} />
    </main>
  );
}

export default App;
