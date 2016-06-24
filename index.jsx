//IMPORTANT - SEE BELOW

var React = require('react');
var ReactDOM = require('react-dom');

var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;
var Link = router.Link;

var CONTACTS = {
    0: {
        id: 0,
        name: 'Sarah Hughes',
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

var Contact = function(props){
  return(
    <div>
      <strong>
        <Link to={'/contacts/' + props.id}>
          {props.name}
        </Link>
      </strong>
      &nbsp;
      {props.phoneNumber}
    </div>
  );
};

var ContactList = function(props){
  var contacts = Object.keys(props.contacts).map(function(contactId, index){
    var contact = props.contacts[contactId];
    return(
      <li key={index}>
        <Contact id={contact.id} name={contact.name} phoneNumber={contact.phoneNumber} />
      </li>
    );
  });
  return (
    <ul>
      {contacts}
    </ul>
  );
};

var ContactContainer = function(props){
  var contact = CONTACTS[props.params.contactId];
  return (
    <Contact id={contact.id} name={contact.name} phoneNumber={contact.phoneNumber} />
  );
};

var ContactListContainer = function() {
  return <ContactList contacts={CONTACTS} />;
};

var App = function(props){
  return (
    <div>
      <h1>Contacts App</h1>
      <div>{props.children}</div>
    </div>
  );
};

//var routes MUST come after ContactListContainer. otherwise the component doesn't
//exist yet.
//this shows nested routes.
/*
IndexRoute should be used for any routes which don't alter the parent Route; the component should appear at /contacts rather than /contacts/foo or /contacts/foo/bar.
*/
var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App} />
    <Route path='/contacts' component={App}>
      <IndexRoute component={ContactListContainer} />
      <Route path=':contactId' component={ContactContainer} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(routes, document.getElementById('app'));
});








// import React from 'react';
// import ReactDOM from 'react-dom';
//
// var router = require('react-router');
// var Router = router.Router;
// var Route = router.Route;
// var hashHistory = router.hashHistory;
//
// /*What's the ES6 way of doing this?*/
//
// var CONTACTS = {
//   0: {
//     id: 0,
//     name: 'Sara Hughes',
//     phoneNumber: '01234 567890'
//   },
//   1: {
//     id: 1,
//     name: 'Tim Taylor',
//     phoneNumber: '02345 678901'
//   },
//   2: {
//     id: 2,
//     name: 'Sam Smith',
//     phoneNumber: '03456 789012'
//   }
// };
//
// class Contact extends React.Component {
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return(
//       <div>
//         <strong>{this.props.name}</strong>
//         &nbsp;
//         {this.props.phoneNumber}
//       </div>
//     );
//   }
// }
//
// class ContactList extends React.Component {
//   constructor(props){
//     super(props);
//   }
//
//   render(){
//     console.log(this.props, 'from outside render');
//     var contacts = Object.keys(this.props.contacts).map(function(contact, index){
//       console.log(contact, index, 'from map');
//     });
//     console.log(contacts);
//     return(
//       <ul>
//         {contacts}
//       </ul>
//     );
//   }
// }
//
// // var contacts = Object.keys(this.props.contacts).map(function(contactId, index){
// //   var contact = this.props.contacts[contactId];
// //   return(
// //     <li key={index}>
// //       <Contact id={contact.id}
// //         name={contact.name}
// //         phoneNumber={contact.phoneNumber} />
// //     </li>
// //   );
// // });
//
// class ContactListContainer extends React.Component {
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return (
//       <ContactList contacts={CONTACTS} />
//     );
//   }
// }
//
// var routes = (
//   <Router history={hashHistory}>
//     <Route path='/contacts' component={ContactListContainer} />
//   </Router>
// );
//
// document.addEventListener('DOMContentLoaded', function(){
//   ReactDOM.render(routes, document.getElementById('app'));
// });
