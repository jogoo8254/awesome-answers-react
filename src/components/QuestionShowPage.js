import React from "react";
import {QuestionDetails} from "./QuestionDetails";
import {AnswerDetails} from "./AnswerDetails";

// To structure our app, we'll create components that simulate the pages of web application.
// These are meant to replace various pages rendered by the routes of our rails Server.
export function QuestionShowPage(){
    return (
        <main>
            <QuestionDetails title="What's your favourite colour?"
            body="Red,, green, blue, seaform green, turquoise, etc."
            author={{full_name: "Bridge Troll"}}
            view_count = {100}
            created_at={new Date().toLocaleString()}
            />
            <AnswerDetails answer="Red"
            author={{full_name: "Ulises Wisozk"}}
            created_at={new Date().toLocaleString()}/>
        </main>
    )
}
