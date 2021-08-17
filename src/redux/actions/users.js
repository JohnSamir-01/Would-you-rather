import {  GET_USERS_DATA, SAVE_USER_QUESTION, SAVE_USER_ANSWER } from "../types";

export function receiveUsers(users) {
    return{
        type: GET_USERS_DATA,
        users,
    }
}

export function addQuestionToUser (question) {
    return {
      type: SAVE_USER_QUESTION,
      question
    }
  }

export function saveUserAnswer ({qid,authedUser,answer}){
    return{
        type: SAVE_USER_ANSWER,
        qid,
        authedUser,
        answer
    }
}