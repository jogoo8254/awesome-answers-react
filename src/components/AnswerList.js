import React from 'react';
import {AnswerDetails} from '../questionData2'

export function AnswerList(props){
    const {answers =[] } =props;
    return (
        <div>
            <ul>
                {answers.map((answer,index)=>{
                    <li key={index}>
                        <AnswerDetails {...answer} />
                    </li>
                })}
            </ul>
        </div>
    )
}
