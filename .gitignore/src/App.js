import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";
import CreateContact from "./components/create-contact.component";
import EditContact from "./components/edit-contact.component";
import ContactList from "./components/contact-list.component";
import logo from './logo.svg'

 class App extends Component{
   render(){
  return (
  <Router>
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand"   target="_blank">
              <img src={logo} width="30" height="30"  />
            </a>
            <Link to="/" className="navbar-brand">PHONE-APP</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">CONTACTS</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">CREATE-CONTACTS</Link>
                </li>
              </ul>
    </div>
    </nav>
    <br/>
    <Route path="/" exact component={ContactList}/>
    <Route path="/edit/:id" component={EditContact}/>
    <Route path="/create" component={CreateContact}/>
    </div>
  </Router>
  );
   }
}

export default App;
