import React from 'react';
import {Route} from 'react-router-dom';

export const AuthRoute = (props)=>{
    const {isAuthenticated, component: Component, ...routeProps}=props;
    // when destructuring from an object, we can rename property names of the object.
    // so when in the past we were stuck with a variable named based ont the object properties
    // we can rename the variable use the `:`
      // This is being done above to rename the variable `component` to `Component`
  // another example at the bottom of the page
    // routeProps is going to be an object with keys like:
    // path, exact, and anything else a Route Component might require
    if(!isAuthenticated){
        return <Redirect to="/sign_in"/>
    }else{
        // otherwise, allow users to correctly navigate to the page they want
        // this is done by rendering the route component and passing it all of the props that it needs

        return <Route {...routeProps} component={Component}/>
    }
}

// Destructuring example
const object ={
    name: 'Max',
    age: 77
}

const {name: firstName, age}= object;
// now I have a variable called firstName, and NOT a variable called name
// name === undefined
// firstName === 'Max'

