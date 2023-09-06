import React from "react";
import { Link } from "react-router-dom";

const Post1 = ({ id, title, body, href, linkTtitle }) => {

    return (<>
        <div className="card">
            <h2 className='card-title'>{id}</h2>
            <h2 className="card-title">{title}</h2>
            <p className="card-body">{body}</p>
            {
                href && (
                    <Link to={href} className="btn btn-primary">{linkTtitle}</Link>
                )
            }
        </div>
    </>);
}
export default Post1