import React, { useEffect, useState } from "react";
import Header from "./Header";
import BlogList from "./BlogList";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/blogPost")
    .then(resp => resp.json())
    .then(posts  => setPosts(posts))
  }, [])

  return (
    <main className="App">
      <Header/>
      <BlogList posts={posts} />
    </main>
  );
}

export default App;
