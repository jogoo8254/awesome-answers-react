import React from 'react';
import {User} from '../api/user';

export function SignUpPage(props){
    const {onSignUp} = props;
    function handleSubmit(event){
        event.preventDefault();
        const {currentTarget} = event;
        const fD = new FormData(currentTarget);
        const signUpParams = {
            first_name: fD.get('first_name'),
            last_name: fD.get('last_name'),
            email: fD.get('email'),
            password: fD.get('password'),
            password_confirmation: fD.get('password_confirmation')
        };
        User.create(signUpParams).then((response) => {
            if(response.id){
                onSignUp();
                // Once we are successfully signed in, and the app has a user in our state
                // navigate to '/questions'
                props.history.push('/questions')
            }
        })
    }
    return(
        <main>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="first_name">First Name</label>
                    <input type="first_name" name="first_name" id="first_name"/>
                </div>
                <div>
                    <label htmlFor="last_name">Last Name</label>
                    <input type="last_name" name="last_name" id="last_name"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <div>
                    <label htmlFor="password_confirmation">Password Confirmation</label>
                    <input type="password_confirmation" name="password_confirmation" id="password_confirmation"/>
                </div>
                <input type="submit" value="Sign Up" />
            </form>
        </main>
    )
}
