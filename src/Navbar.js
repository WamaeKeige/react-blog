import React,{ Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand" href="index.html">React Blog</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <a className="nav-link" to="/">Home</a></li>
          <li className="nav-item">
          <a><Link to="/about" style={{textDecoration: 'none', color: '#ffffff' }}>About</Link></a>
          </li>
          <li className="nav-item">
            <a className="nav-link"><Link to="/post"  style={{textDecoration: 'none', color: '#ffffff' }}>Sample Post</Link></a>
          </li>
          <li className="nav-item">
            <a className="nav-link"><Link to="/contact"  style={{textDecoration: 'none', color: '#ffffff' }}>Contact</Link></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    );
  }
}

export default Navbar;
