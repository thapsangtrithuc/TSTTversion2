import React from 'react';
import {
  BrowserRouter as Router, Switch, Link, Route,
} from 'react-router-dom';
// import { Redirect, withRouter } from 'react-router';

import './App.css';
import Login from './components/Login/Login'
import ThiSinh from './components/ThiSinh/ThiSinh'
import MC from './components/MC/MC'
// function App() {
//   return (
//     <div className="App">
//         <Login/>
//         {/* <MC/> */}
//     </div>
//   );
// }

const NoMatch = () => <p>Page Not Found</p>;

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/thisinh" component={ThiSinh} />
        <Route path="/mc" component={MC}/>
        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
  </Router>
);


export default App;
