import React from 'react'
import { connect } from 'react-redux'
import Question from './Question';

function UnAnsweredList(props) {
  
   
    return (
        <div style={{display:'flex',flexDirection: 'column', justifyContent: 'center',alignItems:'center'}}>
            {props.unanswered.map((q)=>(
                
                <Question key={q} id={q}/>
               
            ))}
        </div>
    )
}
function mapStateToProps({users,questions,auth}){
    
    const answered = (auth) ? Object.keys(users[auth].answers) : [] ;
    const unanswered = Object.keys(questions).filter((x)=> !answered.includes(x))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    return{
        auth,
        unanswered,
    }
}

export default connect(mapStateToProps)(UnAnsweredList)
