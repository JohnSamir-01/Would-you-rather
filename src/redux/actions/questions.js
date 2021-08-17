import { GET_QUESTIONS ,SAVE_QUESTION, QUESTION_ANSWER} from "../types";
import { saveQuestion , saveQuestionAnswer} from "../../utils/api";
import { addQuestionToUser, saveUserAnswer } from "./users";

export function receiveQuestions(questions) {
    return{
        type: GET_QUESTIONS,
        questions,
    }
}

export function addQuestion (question) {
    return {
      type: SAVE_QUESTION,
      question
    }
  }

  export const questionAnswer = ({ authedUser, qid, answer }) => {
    return {
      type: QUESTION_ANSWER,
      qid,
      answer,
      authedUser,
    };
  };

  export const handleAddQuestion = (optionOne, optionTwo, auth) => {
    return function (dispatch) {
      return saveQuestion({
        optionOneText: optionOne,
        optionTwoText: optionTwo,
        author: auth,
      }).then((question) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question));
      });
    };
  };

  export const handleQuestionAnswer = (qid, answer, authedUser) => {
    return function (dispatch) {
      
      return saveQuestionAnswer({ qid, answer, authedUser }).then(() => {
        dispatch(questionAnswer({ authedUser, qid, answer }));
        dispatch(saveUserAnswer({ authedUser, qid, answer }));
      });
    };
  };