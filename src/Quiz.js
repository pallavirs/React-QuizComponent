import React, { Component } from 'react';
import QuizEnd from './QuizEnd.js';
import QuizQuestion from './QuizQuestion.js'

let quizData = require('./quiz_data.json')
console.log(quizData)

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = {quiz_position: 1};
    }
render(){
   // const isQuizEnd = (this.state.quize_position - 1 == quizData.quiz_questions.length)?true:false;
   const isQuizEnd =true;
    if(isQuizEnd){
        return(
        <QuizEnd /> 
        )
    }else{
        return(
        <div>
            <QuizQuestion quiz_question = {quizData.quiz_questions[this.state.quiz_position - 1]}/> 
        </div>
        )
    }
 }
}
export default Quiz;