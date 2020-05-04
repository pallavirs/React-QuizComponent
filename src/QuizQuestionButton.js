import React, { Component } from 'react'

class QuizQuestionButton extends Component{
    render(){
        return(
              
                <li><button>{this.props.button_text} </button></li>
                // {/* <li>{this.props.quiz_question.answer_options[1]}</li>
                // <li>{this.props.quiz_question.answer_options[2]}</li>
                // <li>{this.props.quiz_question.answer_options[3]}</li>
                //  */}
        
        )
        }
    }
    
export default QuizQuestionButton;