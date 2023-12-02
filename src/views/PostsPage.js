import React, { useState, useEffect } from "react";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/posts/all-posts?pageNumber=0&pageSize=10"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data.content);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading)
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="alert alert-danger" role="alert">
        Error: {error}
      </div>
    );

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Latest Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Category: {post.category.name}
            </h6>
            <p className="card-text">{post.content}</p>
            <p className="card-text">
              <small className="text-muted">
                Posted on: {post.datePosted} by {post.user.username}
              </small>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
