import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';
import Post from './Post';
import Contact from './Contact';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <Router>
  <div>
   <Route exact path="/" component={App}/>
   <Route path="/about" component={About}/>
   <Route path="/post" component={Post}/>
   <Route path="/contact" component={Contact}/>
   <Route path="/never" component={()=>(<div>Never hit :(</div>)} />
   </div>
  </Router>, document.getElementById('root'));
registerServiceWorker();
