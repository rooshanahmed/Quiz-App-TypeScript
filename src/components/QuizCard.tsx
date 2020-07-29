import React from "react";
import { Button, makeStyles, Card, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btn: {
    padding: "5px 30px",
    justifyContent: "center",
    margin: "auto",
    alignItems: "center",
    display: "flex",
    color: "white",
  },
  card: {
    background: "#006bb3",
    width: "700px",
    marginTop: "10px",
  },
}));

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
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <p
            style={{
              textAlign: "center",
              fontFamily: "cursive",
              textDecoration: "none",
              color: "white",
            }}
          >
            Question: {questionNum} / {totalQuestions}
          </p>
          <p
            dangerouslySetInnerHTML={{ __html: question }}
            style={{
              textAlign: "center",
              fontFamily: "cursive",
              color: "white",
            }}
          />
          <div>
            {answers.map((answers) => (
              <div>
                <Button
                  onClick={callback}
                  value={answers}
                  disabled={userAnswer}
                  className={classes.btn}
                >
                  <span dangerouslySetInnerHTML={{ __html: answers }} />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizCard;
