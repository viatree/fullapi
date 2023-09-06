import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Post = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="card-container">
    {posts.map(post => (
       <Link to={`/post/${post.id}`} key={post.id} className="card-link">
       <div className="card">
       <h2 className="card-title">{post.id}</h2>
         <h2 className="card-title">{post.title}</h2>
         <p className="card-body">{post.body}</p>
         
       </div>
     </Link>
   ))}
 </div>
);
};
export default Post;
