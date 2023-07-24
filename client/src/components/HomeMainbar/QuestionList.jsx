import React from "react";
import Questions from "./Questions";
const QuestionList = ({ questionsList }) => {
	return (
		<>
        
			{questionsList.data.map((question) => (
       // console.log(question)
				 <Questions question={question}  />
			))}
		</>
	);
};

export default QuestionList;