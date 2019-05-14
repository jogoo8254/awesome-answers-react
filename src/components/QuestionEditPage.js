import React, {Component } from "react";
import { QuestionForm } from "./QuestionForm";
import { Question } from "../api/question";

export class QuestionEditPage extends Component{
    state={
        loading: true,
        question: null,
        errors:[]
    }
    loadQuestion(){
        Question.one(this.props.match.params.id)
        .then(question=>{
            this.setState({
                question,
                loading: false
            });
            console.log(question);
        })
        .catch(err=>{
            this.setState({loading: false})
        })
    }
    updateQuestion = params=>{
        const {question} = this.state;
        Question.update(question.id, params).then(data=>{
            if(data.errors){
                this.setState({errors: data.errors})
            }else{
                this.props.history.push(`/questions/${question.id}`);
            }
        })
    }
    componentDidMount(){
        this.loadQuestion();
    }
    render(){
        const {loading, question} =this.state;
        if(loading){
            return(
                <main className="Page">
                    <h1>Loading ...</h1>
                </main>
            )
        }
        return(
            <main className="Page">
                <h1>Edit Page</h1>
                <QuestionForm data={question}/>
            </main>
        );
    }
}
