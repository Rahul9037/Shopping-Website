import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.component';
import Shop from './pages/Shop/Shop.component';
import Header from "./components/header/header.component";
import SignInSignUp from './pages/SignIn-SignUp/SignIn-SignUp.component';
import { auth } from './components/firebase/firebase.utils';
import { createUserProfileDocument } from './components/firebase/firebase.utils';

class App extends Component {
  constructor() {
    super()
    this.state = { currentUser: null }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {   
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snaShot => {
          //console.log(snaShot.data());  
          this.setState({
            currentUser: {
              id: snaShot.id,
              ...snaShot.data()
            }
          })
        })
      }
      this.setState({ currentUser: userAuth })
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }


  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
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
