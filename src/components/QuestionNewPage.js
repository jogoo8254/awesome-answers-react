import React, {Component} from "react";
import { Question } from "../api/question";
import { Session } from "../api/session";
import {FormErrors} from "./FormErrors";
import { QuestionForm } from "./QuestionForm";
export class QuestionNewPage extends Component {
    state={
        errors: []
    }
    createQuestion(params){
        Question.create(params).then(data => {
                console.log(data)
              if (!data.errors) {
                // The `history` prop is provide by the <Route>
                // component. It has a bunch of methods to manipulate
                // browser. You can use `push` to direct a user to any
                // page in our app.
                this.props.history.push(`/questions/${data.id}`);
              }else{
                  console.log(data.errors)
                  this.setState({
                      errors: data.errors
                  })
              }
            });
    }
    render(){
        return(
            <main className="Page">
            <h1>Ask a Question</h1>
            <QuestionForm
                errors={this.state.errors}
                onSubmit={params => this.createQuestion(params)}
            />
        </main>
        )
    }
}
