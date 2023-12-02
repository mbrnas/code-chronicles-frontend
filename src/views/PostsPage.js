import React, { useState, useEffect } from "react";
import "../assets/css/post.css";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchPosts = async (pageNumber) => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/v1/posts/all-posts?pageNumber=${pageNumber}&pageSize=3`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        await fetchCommentsForPosts(data.content);
        setTotalPages(data.totalPages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchCommentsForPosts = async (posts) => {
      const postsWithComments = await Promise.all(
        posts.map(async (post) => {
          const commentsResponse = await fetch(
            `http://localhost:8080/api/v1/comments/${post.id}`
          );
          if (!commentsResponse.ok) {
            throw new Error(`HTTP error! status: ${commentsResponse.status}`);
          }
          const commentsData = await commentsResponse.json();
          return { ...post, comments: commentsData.content };
        })
      );

      

      setPosts(postsWithComments);
    };

    fetchPosts(currentPage);
  }, [currentPage]);

  const renderPagination = () => {
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`page-item ${i === currentPage ? "active" : ""}`}
        >
          {i + 1}
        </button>
      );
    }
    return <div className="pagination">{pages}</div>;
  };

  const handleLike = async (postId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/posts/${postId}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }  
    } catch (error) {
      console.error("Error liking post: ", error);
    }
  };

  const handleDislike = async (postId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/posts/${postId}/dislike`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }  
    } catch (error) {
      console.error("Error disliking post: ", error);
    }
  };
  
  

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
        <div key={post.id} className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            <p className="card-text">
              <small className="text-muted">
                Posted on: {post.datePosted} by {post.user.username}
              </small>
            </p>
            <button
          onClick={() => handleLike(post.id)}
          className="btn btn-outline-primary btn-sm"
        >
          👍 Like
        </button>
        <button
          onClick={() => handleDislike(post.id)}
          className="btn btn-outline-danger btn-sm"
        >
          👎 Dislike
        </button>
            <div className="mt-3">
              <h6>Comments:</h6>
              <ul className="list-group list-group-flush">
                {post.comments.map((comment) => (
                  <li key={comment.id} className="list-group-item">
                    {comment.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
      {renderPagination()}
    </div>
  );
};

export default PostsPage;
