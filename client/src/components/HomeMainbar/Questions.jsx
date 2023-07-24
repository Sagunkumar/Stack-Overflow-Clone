import React from 'react'
import { Link } from "react-router-dom";
import './HomeMainbar.css'
import moment from 'moment'
const Questions = (question) => {
    return (
        <div className="display-question-container">
            <div className="display-votes-ans">
                <p>{question.question.upVote.length - question.question.downVote.length}</p>
               {/* // <p>{question.question.votes}</p> */}
                <p>votes</p>
            </div>
            <div className="display-votes-ans">
                <p>{question.question.noOfAnswers}</p>
                
                <p>answers</p>
            </div>
            <div className="display-question-details">
                <Link to={`/Questions/${question.question._id}`} className="question-title-link">{question.question.questionTitle}</Link>
            
            <div className="display-tags-time">
                <div className="display-tags">
                    {question.question.questionTags.map((tag) => (
                        //console.log(tag)
                       <p key={tag}>{tag}</p>
                        
                    ))}
                </div>
                <p className='display-time'>
                asked {moment(question.askedOn).fromNow()} {question.userPosted}
                </p>
            </div>
        </div>
        </div>
    )
}

export default Questions