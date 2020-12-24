import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
  state = {
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // {[id]: 'success' 'error'}
    quiz: [
      {
        question: 'Какой сейчас год?',
        rightAnswerId: 3,
        id: 1,
        answers: [
          { text: '2010', id: 1 },
          { text: '2014', id: 2 },
          { text: '2020', id: 3 },
          { text: '1185', id: 4 },
        ],
      },
      {
        question: 'Какой сейчас месяц?',
        rightAnswerId: 2,
        id: 2,
        answers: [
          { text: 'Январь', id: 1 },
          { text: 'Декабрь', id: 2 },
          { text: 'Июль', id: 3 },
          { text: 'Август', id: 4 },
        ],
      },
    ],
  }

  onAnswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: { [answerId]: 'success' },
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          })
        }

        window.clearTimeout(timeout)
      }, 1000)
    } else {
      this.setState({
        answerState: { [answerId]: 'error' },
      })
    }
  }
  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }
  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quiz</h1>
          {this.state.isFinished ? (
            <h1>Finished</h1>
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Quiz
