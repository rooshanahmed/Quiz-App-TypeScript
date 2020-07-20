import React from "react";
import { Button } from "@material-ui/core";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNum: number;
  totalQuestions: number;
};

const QuizCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => {
  return (
    <div>
      <p>
        Question: {questionNum} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answers) => (
          <div>
            <Button onClick={callback} disabled={userAnswer}>
              <span dangerouslySetInnerHTML={{ __html: answers }} />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
