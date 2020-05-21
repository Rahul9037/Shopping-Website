import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.component';
import Shop from './pages/Shop/Shop.component';
import Header from "./components/header/header.component";
import SignInSignUp from './pages/SignIn-SignUp/SignIn-SignUp.component';
import { auth } from './components/firebase/firebase.utils';

class App extends Component {
  constructor() {
    super()
    this.state = { currentUser: null }
  }

  unSubscribrFromAuth = null;

  componentDidMount() {
    this.unSubscribrFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount()
  {
    this.unSubscribrFromAuth();
  }


  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
