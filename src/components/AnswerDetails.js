import React from "react";
// Your React component's names must be in PascalCase. Those whose names do not
// begin with upper case letter will interpret it as plain HTML tag

export function AnswerDetails(props){
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
