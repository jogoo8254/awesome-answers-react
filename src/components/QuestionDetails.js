import React from "react";
// whenever you user JSX in file, you must do the above import otherwise the converted
// JSX tags into React.createElement(...) won't work because 
// `React` will be undefined.
export function QuestionDetails(props){
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

