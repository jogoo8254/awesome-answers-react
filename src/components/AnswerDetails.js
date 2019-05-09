import React from "react";
// Your React component's names must be in PascalCase. Those whose names do not
// begin with upper case letter will interpret it as plain HTML tag

export function AnswerDetails(props){
    return (
        <div>
          <p>
            {props.body}
            <br />
            {/* 
              Using the "style" prop on a base HTML component
              will modify in the style attribute (inline styles.)
            */}
            <small
              style={{
                color: "red",
                fontStyle: "italic"
              }}
            >
              By {props.author.first_name}
            </small>
            <br />
            <small>Answered {props.created_at}</small>
          </p>
          <button onClick={() => props.onDeleteClick(props.id)}>Delete</button>
        </div>
      );
}
