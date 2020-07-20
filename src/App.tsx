import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import QuizCard from './components/QuizCard';
import { fetchQuestions, Difficulty } from './API';

const TOTAL_QUESTIONS = 10;

function App() {
  
  const [Loading , setLoading] = useState(false);

  const [questions , setQuestions] = useState([]);

  const [number , setNumber] = useState(0);

  const [userAnswers , setUserAnswers] = useState([]);

  const [score , setScore] = useState(0);

  const [gameOver , setGameOver] = useState(true);

  console.log(fetchQuestions(TOTAL_QUESTIONS, Difficulty.MEDIUM));
  
  
  const startQuiz = async() => {}

  const nextQuestion = async() => {}

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {}

  return (
    <div>
      <h1>Quiz App</h1>
      <Button onClick={startQuiz}>
          Begin Quiz
      </Button>
      <p>
        Score: 
      </p>
      <p>
        Loading
      </p>
      <QuizCard 
        questionNum={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined }
        callback={checkAnswer}
      />
      <Button onClick={nextQuestion}>
        Next
      </Button>
    </div>
  );
}

export default App;
