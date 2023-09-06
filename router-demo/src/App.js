import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { MDBFooter } from 'mdb-react-ui-kit';
import React from 'react';
import { Post } from './components/Post';
import { User } from './components/User';
import { Home } from './components/Home';
import PostDetail from './components/PostDetail';
import UserDetail from './components/UserDetail';
const App = () => {
  return (

    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/post">Post</Nav.Link>
              <Nav.Link as={Link} to="/user">Users</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path='/Post' element={<Post />} />
            <Route path='/User' element={<User />} />
            <Route path='/Home' element={<Home />} />
            <Route path="/" element={<Home/>} />
          <Route path="/post/:id" element={<PostDetail />} />
          {/* <Route path="/" exact component={User} /> */}
          <Route path="/user/:id" element={<UserDetail/>} />
          </Routes>
        </div>
      </div>

      <MDBFooter bgColor='light' className='text-center text-lg-left'>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-dark'> Veelaslavia
          </a>
        </div>
      </MDBFooter>
    </BrowserRouter>

  );
}
export default App;
