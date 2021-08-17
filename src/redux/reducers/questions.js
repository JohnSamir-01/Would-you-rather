import { GET_QUESTIONS , QUESTION_ANSWER, SAVE_QUESTION} from "../types"

export default function posts (state = {}, action) {
    switch(action.type) {
      case GET_QUESTIONS :
        return {
            ...state,
          ...action.questions
        };
        case SAVE_QUESTION :
            return {
                ...state,
                [action.question.id]: action.question
            };
            case QUESTION_ANSWER:
                const { qid, answer, authedUser } = action;
          
                return {
                  ...state,
                  [qid]: {
                    ...state[qid],
                    [answer]: {
                      ...state[qid][answer],
                      votes: state[qid][answer].votes.concat([authedUser]),
                    },
                  },
                };

      default :
        return state
    }
  }

