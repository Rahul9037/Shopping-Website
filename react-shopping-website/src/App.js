import React from 'react';
import './App.css';
import { Route , Switch} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.component';


const Hats = () => {
  return(
    <div>
     <h1>HATS</h1>
    </div>
  )
}


function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
