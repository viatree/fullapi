import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Post1 from './Post1';
import User1 from './User1';
export const Home = () => {
  const [posts, setPost] = useState([]);
  const [users, setUsers] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPost(response.data.slice(0, 10)))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data.slice(0, 10)))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  const handleViewAllClick = () => {
    setShowAll(true);
  };
  return (
    <div className="card-container">
      <div class="col-12">
            <h1>Post</h1>
          </div>
      {posts.map((post) => (
        <Post1 id={post.id} title={post.title} body={post.body} href={`/post/${post.id}`} linkTtitle="Post Details" />
      ))}
         {!showAll && (
        <Link to="/post" className="view-all-button">
          View All Post
        </Link>
      )}

    <div className="card-container" >  
          <div class="col-12">
            <h1>User</h1>
          </div>
    
      {users.map((user) => (
        <User1 id={user.id} name={user.name} username={user.username} email={user.email} phone={user.phone} website={user.website} href={`/user/${user.id}`} linkTTtitle="Users Details" />
      ))}
  {!showAll && (
        <Link to="/user" className="view-all-button">
          View All user
        </Link>
      )}
    </div>
  
    </div>
  );
};