import { GET_USERS_DATA , SAVE_USER_QUESTION, SAVE_USER_ANSWER} from "../types"

export default function posts (state = {}, action) {
    switch(action.type) {
      case GET_USERS_DATA:
        return {
            ...state,
          ...action.users
        }
      case SAVE_USER_QUESTION :
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([action.question.id])
        }
      }
      case SAVE_USER_ANSWER :
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }
      }
      default :
        return state
    }
  }