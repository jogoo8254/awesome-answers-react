import React from "react";
import { NavLink } from "react-router-dom";
import {Clock } from "./Clock"
import { Session } from "../api/session";
export function NavBar (props){
    const {currentUser, onSignOut}=props;
    function handleSignout(){
        // console.log("you tried to sign out")
        Session.destroy().then(()=>{
            // ... do something after we destroy session
            onSignOut()
        })
    }
    return(
        <nav className="NavBar">
        <Clock/>
            <NavLink exact to="/">
                Welcome
            </NavLink>
            <NavLink exact to="/questions">
                Questions
            </NavLink>
            {/* To conditionally render in React, you can use a ternary operator */}
            {currentUser ? (
            <React.Fragment>
                    {/* <-- this is a react fragment that allows you to write 
                    multiple components beside each other without wrapping them in a div or some 
                    other container.
                    The short form for <React.Fragment></React.Fragment> is <></>
                */}
                <span>{currentUser.full_name}</span>
                <NavLink exact to="/questions/new">
                    Ask
                </NavLink>
                <span onClick={handleSignout}>Sign Out</span>
            </React.Fragment>
            ) : (
                <>
                <NavLink exact to="/sign_in">
                    Sign In
                </NavLink>
                <NavLink exact to="/sign_up">
                    Sign Up
                </NavLink>
                </>
            )}
        </nav>
    )
}
