import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Server } from 'net';

// A React component is a function that returns a React element.
// React elements are created with the `React.createElement()` method or JSX tags

// Your React component's names must be in PascalCase. Those whose names do not
// begin with upper case letter will interpret it as plain HTML tag

function AnswerDetails(props){
    return(
        <div>
            <p>
                {props.answer}. <br/>
                By {props.author && props.author.full_name} <br/>
                <small>Answered {props.created_at} days ago</small>
            </p>
        </div>
        )
}

function QuestionDetails(props){
    return(
        <section>
            <div>
                <h2>
                    {props.title}
                </h2>
                <p>
                    {props.body} <br/>
                    By {props.author && props.author.full_name}
                </p>
                <p>
                    <small>Seen {props.view_count} time(s)</small> - <small>Created {props.created_at} days ago</small>
                </p>
            </div>
        </section>
    )
}

// To structure our app, we'll create components that simulate the pages of web application.
// These are meant to replace various pages rendered by the routes of our rails Server.
function QuestionShowPage(){
    return (
        <main>
            <QuestionDetails title="What's your favourite colour?"
            body="Red,, green, blue, seaform green, turquoise, etc."
            author={{full_name: "Bridge Troll"}}
            view_count = {100}
            created_at={new Date().toLocaleString()}
            />
            <AnswerDetails answer="Red"
            author={{full_name: "Ulises Wisozk"}}
            created_at={new Date().toLocaleString()}/>
        </main>
    )
}
// In React application, we create a componenet that acts as the "root" or the entry point to
// all of our other components.
// This is the one that should be rendered `ReactDOM.render()` 
function App(){
    return (
        <div>
            <QuestionShowPage/>
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
