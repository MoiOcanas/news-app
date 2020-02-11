import React from 'react';
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

class App extends React.Component {
  state = {

  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate() {
    console.log('Component updated');
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container mt-4">
            <Switch>
              <Route path="/home" component={Home} />
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={About} />
              <Route path="/notice/:id" component={NoticeDetails}/>
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/create" component={CreateNotice} />
            </Switch>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
