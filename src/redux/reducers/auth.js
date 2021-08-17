import { AUTHENTICATION, REMOVE_AUTHENTICATION } from "../types"

export default function posts (state = null, action) {
    switch(action.type) {

      case AUTHENTICATION :
        return action.auth

      case REMOVE_AUTHENTICATION:
          return action.auth
          
      default :
        return state
    }
  }