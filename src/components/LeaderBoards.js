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
    users : Object.keys(users).sort((idA, idB) => {
		const scoreA =
			Object.keys(users[idA].answers).length + users[idA].questions.length;
		const scoreB =
			Object.keys(users[idB].answers).length + users[idB].questions.length;

		return scoreB - scoreA;
	}),
    
}
}
export default connect(mapStateToProps)(LeaderBoards)
