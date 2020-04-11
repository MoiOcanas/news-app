import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Components
import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import About from './components/About';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateNotice from './components/notices/CreateNotice';
import NoticeDetails from './components/notices/NoticeDetails';
import HomePage from './components/HomePage';
import EditNotice from './components/notices/EditNotice';
import Profile from './components/profile/Profile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container main-container">
            <Switch>
              <Route path="/home" component={Home} />
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={About} />
              <Route path="/notice/:id" component={NoticeDetails}/>
              <Route path="/edit/:id" component={EditNotice}/>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/create" component={CreateNotice} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
