import React from "react";
import {QuestionShowPage} from "./QuestionShowPage";
import {QuestionIndexPage} from "./QuestionIndexPage";

// In React application, we create a componenet that acts as the "root" or the entry point to
// all of our other components.
// This is the one that should be rendered `ReactDOM.render()` 
function App(){
    return (
        <div>
            <QuestionIndexPage />
            <QuestionShowPage />
        </div>
    )
}

export { App }
