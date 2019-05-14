import React, {Component} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {QuestionShowPage} from "./QuestionShowPage";
import {QuestionIndexPage} from "./QuestionIndexPage";
import { QuestionEditPage } from "./QuestionEditPage";
import { NavBar } from "./NavBar";
import { WelcomePage } from "./Welcome";
import { QuestionNewPage } from "./QuestionNewPage";
import { SignInPage } from './SignInPage';
import { SignUpPage } from './SignUpPage';
import { User } from "../api/user";
import {AuthRoute} from './AuthRoute';
// In React application, we create a componenet that acts as the "root" or the entry point to
// all of our other components.
// This is the one that should be rendered `ReactDOM.render()` 
class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            currentUser: null
        }
        // this.signInUser = this.signInUser.bind(this)
    }
    componentDidMount(){
        // when our app starts, fetch the current user if there is one
        this.getCurrentUser();
    }
    // When creating a method that uses the keyword this, sometimes you need to be careful
    // `this` will lose its context when its destructured from its object. What we mean by that is 
    // when we pass it as a prop to another component like this:
    // <SignInPage onSignIn={this.getCurrentUser} />
    // in example above, the method is passed as a value to the onSignIn prop of the SignInPage Component.
    // when that function is called within SignInPage, the keyword `this` will have forgotten
    // its context, meaning `this` is undefined. You will commonly see an error that says something like:
    // Cannot call function `setState` of undefined
  // In order to address this, you need to make sure that the keyword `this` is bound
  // within the method
  // To do that we can either bind it in the constructor using the `.bind` method
  // Or defined our method like we did below using an arrow function
  getCurrentUser= () =>{
        return User.current().then((user)=>{
            if(user.id){
                this.setState({currentUser: user, loading: false});
            }
        })
    }
    signOut = ()=>{
        // this method removes the current user from the react app, effectively
        // signing out the user
        this.setState({
            currentUser: null,
        })
    }
    render(){
        if(this.state.loading){
            return <div />;
        }
        return (
            <BrowserRouter>
            <div>
                <header>
                    <NavBar currentUser={this.state.currentUser} onSignOut={this.signOut} />
                </header>
                {/* <Route> components inside <Switch> behave differently. The first one that matches
                the URL path is the only one that is rendered and the remaining ones are ignored. */}
                <Switch>
                    <Route exact path="/" component={WelcomePage} />
                    // Anytime you want to render a componenet that requires a (some) prop(s)
                    // and that component is being rendered by a Route component
                    // The only way to pass those props to that component
                    // is by using a new prop of Route called `render`
                    // the render prop takes a function as an argument and returns the component
                    // the arguments to that function is an object representing all of the route props
                    // make sure to pass those props on to your component in addition to your specific props
                    <Route exact path="/sign_in"
                    render={(routeProps)=><SignInPage {...routeProps} 
                    onSignIn = {this.getCurrentUser}/>} />
                    <Route exact path="/sign_up"
                    render={(routeProps)=><SignUpPage {...routeProps} onSignUp={this.getCurrentUser} />} />
                    <Route exact path="/questions" component={QuestionIndexPage} />
                    <AuthRoute
                        // The !! turns something from "truthy" or "falsy" to true  or false respectively
                        isAuthenticated={!!this.state.currentUser}
                        exact
                        path="/questions/new"
                        component={QuestionNewPage}
                    />
                    <AuthRoute
                        isAuthenticated={!!this.state.currentUser}
                        path="/questions/:id/edit"
                        component={QuestionEditPage}
                    />
                    <Route exact path="/questions/:id" component={QuestionShowPage} />
                </Switch>
            </div>
            </BrowserRouter>
        )
    }
}

export { App }
