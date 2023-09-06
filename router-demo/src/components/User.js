import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="card-container">
    {users.map(user => (
      <Link to={`/user/${user.id}`} key={user.id} className='card-link'>
        <div className="card">
        <h2 className="card-title">{user.id}</h2>
        <p className="card-body">
        <strong>Name:</strong> {user.name}<br />
          <strong>Username:</strong> {user.username}<br />
          <strong>Email:</strong> {user.email}<br />
          <strong>Phone:</strong> {user.phone}<br />
          <strong>Website:</strong> {user.website}
        </p>
      </div>
      </Link>
    ))}
  </div>
  );
};
export default User;