import React, { useState, useEffect } from "react";

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  // fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await res.json();
      setPosts(posts.slice(0, 10));
    };

    fetchPosts();
  }, []);

  return (
    <div style={{ padding: 10 }}>
      <h2>Total posts: {posts.length}</h2>
      <ul>
        {posts.map(post => (
          <li>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
