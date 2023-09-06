import React from "react";
import { Link } from "react-router-dom";

const User1 = ({ id, name, username,email,phone,website, href, linkTTtitle }) => {
    return (<>
        <div className="card">
            <h2 className='card-title'>{id}</h2>
            <h2 className="card-title">{name}</h2>
            <p className="card-title">{username}</p>
            <p className="card-title">{email}</p>
            <p className="card-title">{phone}</p>
            <p className="card-title">{website}</p>
            {
                href && (
                    <Link to={href} className="btn btn-primary">{linkTTtitle}</Link>
                )
            }
        </div>
    </>);
}
export default User1