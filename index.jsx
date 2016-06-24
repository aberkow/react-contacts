import React from 'react';
import ReactDOM from 'react-dom';

var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;

/*What's the ES6 way of doing this?*/

var CONTACTS = {
  0: {
    id: 0,
    name: 'Sara Hughes',
    phoneNumber: '01234 567890'
  },
  1: {
    id: 1,
    name: 'Tim Taylor',
    phoneNumber: '02345 678901'
  },
  2: {
    id: 2,
    name: 'Sam Smith',
    phoneNumber: '03456 789012'
  }
};

class Contact extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <strong>{this.props.name}</strong>
        &nbsp;
        {this.props.phoneNumber}
      </div>
    );
  }
}

class ContactList extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    var contacts = Object.keys(this.props.contacts).map(function(contactId, index){
      var contact = this.props.contacts[contactId];
      return(
        <li key={index}>
          <Contact id={contact.id}
            name={contact.name}
            phoneNumber={contact.phoneNumber} />
        </li>
      );
    });
    return(
      <ul>
        {contacts}
      </ul>
    );
  }
}

class ContactListContainer extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <ContactList contacts={CONTACTS} />
    );
  }
}

var routes = (
  <Router history={hashHistory}>
    <Route path='/contacts' component={ContactListContainer} />
  </Router>
);

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(routes, document.getElementById('app'));
});
