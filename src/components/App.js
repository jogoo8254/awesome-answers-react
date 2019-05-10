import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {QuestionShowPage} from "./QuestionShowPage";
import {QuestionIndexPage} from "./QuestionIndexPage";
import { NavBar } from "./NavBar";
import { WelcomePage } from "./Welcome";
import { QuestionNewPage } from "./QuestionNewPage";
// In React application, we create a componenet that acts as the "root" or the entry point to
// all of our other components.
// This is the one that should be rendered `ReactDOM.render()` 
function App(){
    return (
        <BrowserRouter>
        <div>
            <header>
                <NavBar />
            </header>
            {/* <Route> components inside <Switch> behave differently. The first one that matches
            the URL path is the only one that is rendered and the remaining ones are ignored. */}
            <Switch>
                <Route exact path="/" component={WelcomePage} />
                <Route exact path="/questions" component={QuestionIndexPage} />
                <Route exact path="/questions/new" component={QuestionNewPage} />
                {/* /questions/199 */}
                <Route path="/questions/:id" component={QuestionShowPage} />
            </Switch>
        </div>
        </BrowserRouter>
    )
}

export { App }
