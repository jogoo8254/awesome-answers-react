import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {QuestionShowPage} from "./QuestionShowPage";
import {QuestionIndexPage} from "./QuestionIndexPage";
import { Clock } from "./Clock";
import { WelcomePage } from "./Welcome";
// In React application, we create a componenet that acts as the "root" or the entry point to
// all of our other components.
// This is the one that should be rendered `ReactDOM.render()` 
function App(){
    return (
        <BrowserRouter>
        <div>
            <Clock/>
            <Route exact path="/" component={WelcomePage} />
            {/* /questions/199 */}
            <Route path="/questions/:id" component={QuestionShowPage} />
            <Route exact path="/questions" component={QuestionIndexPage} />
        </div>
        </BrowserRouter>
    )
}

export { App }
