import React, { Component } from 'react'
import Header from './Header';
import Navbar from './Navbar';

class Post extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Navbar/>
      <h1> This is a Post </h1>
      </div>
    );
  }
}
export default Post
