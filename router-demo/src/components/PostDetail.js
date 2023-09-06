import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentList from './CommentList';
import imgs from '../assets/cat.jpeg';
const PostDetail = () => {
  const {id} = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  console.log("Post ID", id);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.error('Error fetching post detail:', error));
    }, [id]);

    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
          .then((res) => {
            console.log(JSON.stringify(res.data));
            setComments(res.data);
          })
          .catch((error) => {
            console.error("Error fetching posts:", error);
      }, [id]);

  return (<>
    <div className='container'>
        {post && (
          <div className='row mt-3'>
            <div className='col-12'>
              <div className="card w-100">
                <h2 className="card-title"> {post.title}</h2>
                <p className="card-body">{post.body}</p>
              </div>
            </div>
            <div className="col-12 mt-5">
              <h5>All comments</h5>
              {comments.map((comment, i) => (
                      <CommentList
                        imgs={imgs}
                        name={comment.name}
                        email={comment.email}
                        content={comment.body}
                      />
                    ))}
            </div>
        </div>
        )}
      </div>
    </>
  );
};

export default PostDetail;