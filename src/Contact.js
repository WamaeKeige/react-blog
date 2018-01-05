import React, { Component } from 'react'
import Header from './Header';
import Navbar from './Navbar';

class Contact extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Navbar/>

      <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
          <form name="sentMessage" id="contactForm">
          <div class="control-group">
             <div class="form-group floating-label-form-group controls">
          <label>
          Name:
          <input type="text" name="name" placeholder="Name"/>
          </label>
          </div>
          </div>
             <div class="form-group floating-label-form-group controls">
          <label>
          Email:
          <input type="text" name="email" placeholder="Email"/>
          </label>
          </div>
             <div class="form-group floating-label-form-group controls">
          <label>
          Message:
          <textarea type="text" name="message" placeholder="Message" />
          </label>
          </div>
          <br/>
           <div id="success"></div>
           <div class="form-group">
          <input type="submit" value="Submit" />
          </div>
        </form>

    </div>
    </div>
    </div>
    </div>
    );
  }
}
export default Contact
