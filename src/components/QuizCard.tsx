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
  contain: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
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
    <div className={"classes.contain"}>
      <Card
        style={{
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          width: "600px",
          background: "#282c34",
        }}
      >
        <CardContent>
          <p>
            Question: {questionNum} / {totalQuestions}
          </p>
          <p dangerouslySetInnerHTML={{ __html: question }} />
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
