import React from 'react'
import { connect } from 'react-redux'
import UserData from './UserData'


function LeaderBoards(props) {
    
    return (
        <div style={{width:'100vw', display: 'flex',flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
            
            {props.users.map((user)=>(
                <UserData key={user} user={user}/>
            ))}
        </div>
    )
}
function mapStateToProps({users}){

return{
    users : Object.keys(users).sort((user1, user2) => {
		const score1 =
			Object.keys(users[user1].answers).length + users[user1].questions.length;
		const score2 =
			Object.keys(users[user2].answers).length + users[user2].questions.length;

		return score2 - score1; // ReOrdering list from highest score to least 
	}),
    
}
}
export default connect(mapStateToProps)(LeaderBoards)
