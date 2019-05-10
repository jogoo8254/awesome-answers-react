import React, { Component } from 'react';

export class Clock extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         dateTime: new Date()
    //     }
    // }
    // shortcut for setting a property on `this` during constructor call.
    // We can use this syntax in a class-based component to initialize its `state`.
    state = {
        dateTime: new Date()
    }
    componentDidMount(){
        // this method is called the first time the componenet is 
        // rendered in the DOM. use it to fetch, add some event listeners,
        // connect to a socket, etc.
        console.log("Clock is mounted");
        this.intervalId = setInterval(()=>{
            this.setState({
                dateTime: new Date()
            });
        },1000)
    }
    componentWillUnmount(){
        // this method is called before the component is removed from the DOM.
        // use it to clean up setInterval, setTimeouts, event listeners, etc.
        console.log("Clock is unmounted!")
        clearInterval(this.intervalId);
    }
    render(){
        // you are only allowed to put strings or React elements
        // from expressions in { ... } inside JAX
        return <span>{this.state.dateTime.toLocaleTimeString()}</span>
    }
}

