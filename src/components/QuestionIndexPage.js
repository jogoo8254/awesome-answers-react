import React, {Component} from "react"
import { Question } from "../api/question";
export class QuestionIndexPage extends Component {
    state={
            questions: []
    };

    componentDidMount(){
      Question
      .all()
      .then(questions=>{
        this.setState({ questions })
      })
    }
    deleteQuestion(id){
        console.log(id)
        // to change state in a React component, you must use the `setstate()` method on `this`.
        // It takes an object that gets merged in the current state at React's convenience.
        // The properties in `setState()` replace the same name properties in the current state.
        // This happens asynchronously and will eventually trigger and update to DOM if there's any change.
        this.setState({
            questions: this.state.questions.filter(q => q.id !== id)
        })
    }
    render() {
      return (
        <main className="Page">
          <h2>Questions</h2>
          <ul
            style={{
              listStyle: "none",
              paddingLeft: 0
            }}
          >
            {this.state.questions.map(question => (
              <li key={question.id}>
                <a href="">{question.title}</a> <br />
                <button onClick={()=> this.deleteQuestion(question.id)
                    // event=> console.log(event.target)
                }>Delete</button>
              </li>
            ))}
          </ul>
        </main>
      );
    }
  }
