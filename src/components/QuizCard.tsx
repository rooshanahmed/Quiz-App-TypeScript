import React from "react";
import { Button, makeStyles, Card, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  btn: {
    padding: "0 30px",
    justifyContent: "center",
    margin: "8px",
    alignItems: "center",
    display: "flex",
  },
  card: {
    background: "#282c34",
    width: "700px",
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
          <p style={{ textAlign: "center" , fontFamily: "cursive" , textDecoration: "none" }}>
            Question: {questionNum} / {totalQuestions}
          </p>
          <p dangerouslySetInnerHTML={{ __html: question }} style={{ textAlign: "center" }} />
          <div>
            {answers.map((answers) => (
              <div>
                <Button
                  onClick={callback}
                  value={answers}
                  disabled={userAnswer}
                  variant={"contained"}
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
