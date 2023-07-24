import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QuestionList from "./QuestionList";
//import { useSelector } from "react-redux";
import './HomeMainbar.css'
import { useSelector } from "react-redux";
const HomeMainbar = () => {
  const questionsList = useSelector((state) => state.questionsReducer);
  console.log(questionsList)
  const navigate=useNavigate();
  const location = useLocation();
  const user=1;
  // var questionsList = [{
  //   _id: 1,
    
  //   upVote: "33121",
	// 	downVote: "23",
  //   noOfAnswer: 2,
  //   questionTitle: "what is a function",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "node js", "react js", "mongo Db"],
  //   userPosted: "mano",
  //   askedOn: " jan 1"
  // }, {
  //   _id: 2,
    
  //   upVote: "33134",
	// 	downVote: "223",
  //   noOfAnswer: 0,
  //   questionTitle: "what is a function",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "node js", "R", "mongo Db"],
  //   userPosted: "mano",
  //   askedOn: " jan 1"
  // }, {
  //   _id: 3,
    
  //   upVote: "130771",
	// 	downVote: "23",
  //   noOfAnswer: 0,
  //   questionTitle: "what is a function",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "node js", "R", "mongo Db"],
  //   userPosted: "mano",
  //   askedOn: " jan 1"
  // }
  // ]
  

  const redirect=()=>{
    if(user===null)
    {

      alert("first login and then ask questions")
      navigate('/Auth');
    }
    else{
      navigate('/AskQuestion');
    }
  }

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={redirect} className="ask-btn">AskQuestion</button>
      </div>
      <div>
        {questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionList questionsList={questionsList} />
          </>
        )}
      </div>
    </div>


  )
}

export default HomeMainbar