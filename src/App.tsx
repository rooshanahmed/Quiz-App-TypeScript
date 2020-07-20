import React, { useState } from 'react';
import { Button , CircularProgress } from '@material-ui/core';
import QuizCard from './components/QuizCard';
import { fetchQuestions, Difficulty, QuestionState } from './API';

const TOTAL_QUESTIONS = 10;

type AnswerObject = {
  question: string;
  answer: string;
  corrrect: boolean;
  correctAnswer: string;
}

function App() {
  
  const [Loading , setLoading] = useState(false);
  const [questions , setQuestions] = useState<QuestionState[]>([]);
  const [number , setNumber] = useState(0);
  const [userAnswers , setUserAnswers] = useState<AnswerObject[]>([]);
  const [score , setScore] = useState(0);
  const [gameOver , setGameOver] = useState(true);

  console.log(questions);
  
  
  const startQuiz = async() => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuestions(TOTAL_QUESTIONS, Difficulty.MEDIUM);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const nextQuestion = async() => {}

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {}

  return (
    <div>
      <h1>Quiz App</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
      <Button onClick={startQuiz} variant="contained">
          Begin Quiz
      </Button> ) : null }
      {!gameOver ? (
      <p>
        Score:
      </p> ) : null }
      {Loading ? (<CircularProgress className='loading' />) : null }
      <QuizCard 
        questionNum={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined }
        callback={checkAnswer}
      />
      <Button onClick={nextQuestion} variant="contained">
        Next
      </Button>
    </div>
  );
}

export default App;
