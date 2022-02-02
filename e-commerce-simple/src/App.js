import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import {auth} from './firebase/firebase.utils';
import React from "react";
import './App.css'


class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth =null;

  componentDidMount(){
    //This method comes from firebase . Subscribe on the users state change.Persist on user session and track until the logout
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage}/>
        <Route path="/sign-in" component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}
}

export default App;
