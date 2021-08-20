import React from 'react'
import { connect } from 'react-redux'
import Question from './Question';

function UnAnsweredList(props) {
  
   
    return (
        <div style={{display:'flex',flexDirection: 'column', justifyContent: 'center',alignItems:'center'}}>
            {props.answered.map((q)=>(
                
                <Question key={q} id={q}/>
               
            ))}
        </div>
    )
}
function mapStateToProps({users,auth,questions}){
    
    const answered = (auth) ? Object.keys(users[auth].answers).sort((a, b) => questions[b].timestamp - questions[a].timestamp) : [] ;
   
    return{
        
        answered
      
    }
}

export default connect(mapStateToProps)(UnAnsweredList)
