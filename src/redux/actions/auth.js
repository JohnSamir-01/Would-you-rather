import { AUTHENTICATION ,REMOVE_AUTHENTICATION} from "../types";

export function authentication(user) {
    return{
        type: AUTHENTICATION,
        auth: user,
    }
}

export function removeAuth() {
    return{
        type: REMOVE_AUTHENTICATION,
        auth: null,
    }
}