import React, {Component} from "react";
import {Link} from "react-router-dom";
import {QuestionDetails} from "./QuestionDetails";
import {AnswerDetails} from "./AnswerDetails";
import {AnswerList} from "./AnswerList";
import { Question } from "../api/question";
import { PrimaryButton } from "office-ui-fabric-react";
import { prototype } from "events";
import { METHODS } from "http";
// To structure our app, we'll create components that simulate the pages of web application.
// These are meant to replace various pages rendered by the routes of our rails Server.

export class QuestionShowPage extends Component {
    constructor(props) {
        // When using a constructor in a class-based
        // component, you must call the `Component` class'
        // constructor with `super` passing it the `props`.
        super(props);
    
        this.state = {
          question: []
        };
      }

      componentDidMount(){
        // Componenets rendered by the <Route> component are passed three props:
        // history, location and match.
        // `match` holds a property that contains a URL's params.
        const id = this.props.match.params.id;
        console.log(this.props)
        Question
        .one(id)
        .then(question => {
          this.setState({
            question // same thing as question: question (syntax sugar)
          })
        })
      }
      // deleteQuestion(){ <---- prototype METHODS. always aim to make prototype method
      // above is much more efficient, use it whenever possible
      deleteQuestion = () => {
        // <--- instance method (method on `this`)
        // this is for less efficient, only use when method must
        // be passed as a callback and `this` is needed.
        if(window.confirm("Are you sure?")){
          Question
          .delete(this.state.question.id)
          .then(data=>{
            this.props.history.push(`/questions`)
          })
        }
      }
      deleteAnswer(id){
        this.setState({
            question: {
                ...this.state.question,
                answers: this.state.question.answers.filter(a=> a.id !== id)
            }
        })
      }
    render(){
        if(!this.state.question){
            return (
                <main className="Page">
                    <h2>Question doesn't exist!</h2>
                </main>
            )
        }
        return (
            <main className="Page">
              <QuestionDetails {...this.state.question} />
              <div>
          {/* <Link to={`/questions/${this.state.question.id}/edit`}>Edit</Link> */}
          <PrimaryButton
            text="Edit"
            iconProps={{ iconName: "edit" }}
            onClick={() =>
              this.props.history.push(
                `/questions/${this.state.question.id}/edit`
              )
            }
          />
          <PrimaryButton text="Delete"
            iconProps={{iconName: 'delete'}}
            onClick={() => this.deleteQuestion()}
          />
        </div>
              <h2>Answers</h2>
              <AnswerList
                onAnswerDeleteClick={id => this.deleteAnswer(id)}
                answers={this.state.question.answers}
              />
            </main>
          );
    }
}
