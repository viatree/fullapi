import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const {id} = useParams();
  const [user, setUser] = useState(null);
  console.log("User ID", id);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.error('Error fetching user detail:', error));
   }, [id]);

  return (
    <div className="user-detail-container">
      {user && (
        <div className="user-details">
          <h2 className="user-name">{user.name}</h2>
          <p className="user-info">
          <h2 className='card-title'>{id}</h2>
            <strong>Username:</strong> {user.username}<br />
            <strong>Email:</strong> {user.email}<br />
            <strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}<br/>
            <strong>Geo:</strong> Latitude: {user.address.geo.lat}, Longitude: {user.address.geo.lng}<br/>
            <strong>Phone:</strong> {user.phone}<br />
            <strong>Website:</strong> {user.website} <br/>
            <strong>Company:</strong> {user.company.name}, {user.address.catchPhrase}, {user.company.bs}<br/>
          </p>
          </div>
      )}
    </div>
  );
};
export default UserDetail;
