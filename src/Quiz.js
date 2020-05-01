import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js';

let quizData = require('./quiz_data.json')
console.log(quizData)

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = {quiz_position: 1};
    }
render(){
    return(
        <div>
            <QuizQuestion quiz_question = {quizData.quiz_questions}/> 
      </div>
    )
 }
}

export default Quiz;