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
    showNextQuestion(){
        this.setState((state)=> 
        {
            return {quiz_position: state.quiz_position + 1}
        })
    }
render(){
    const isQuizEnd = ((this.state.quiz_position - 1) === quizData.quiz_questions.length)
    //const isQuizEnd = true;
    
     return(
        <div>
           {isQuizEnd ? <QuizEnd /> : <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} showNextQuestionHandler={this.showNextQuestion.bind(this)} />}
        </div>
     )
    }
 
}
export default Quiz;