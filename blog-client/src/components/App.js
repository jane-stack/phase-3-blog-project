import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import BlogList from "./BlogList";
import Navbar from "./Navbar";
import Login from "./Login";

function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState([]);
  const [select, setSelect] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9292/posts")
    .then(resp => resp.json())
    .then(posts  => setPosts(posts));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/users")
    .then(resp => resp.json())
    .then(user => setUser(user));
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

  // Allow us to know which post had been clicked
  const handleEditClick = (selectedPost) => {
    setSelect(selectedPost);
  }

  return (
    <div>
      <Navbar setIsLoggedIn={setIsLoggedIn}/>
      <Switch>
        <Route exect path="/login"><Login setIsLoggedIn={setIsLoggedIn} /></Route>
        <Route exect path="/">
          <BlogList 
            posts={posts} 
            onPostDelete={handleDeletePost}
            onAddPost={handleAddPost} 
            onUpdatePost={handleUpdatedPost}
            select={select}
            onSelectClick={handleEditClick}
            isLoggedIn={isLoggedIn}
            user={user}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

