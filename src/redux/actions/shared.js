import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { getInitialData } from "../../utils/api";
import { showLoading , hideLoading} from "react-redux-loading";


export function handleInitialData (){
    return (dispatch)=>{
        dispatch(showLoading());
        return getInitialData()
        .then(({users,questions})=>{
            dispatch(receiveQuestions(questions));
            dispatch(receiveUsers(users));
            dispatch(hideLoading());
        })
    }
}