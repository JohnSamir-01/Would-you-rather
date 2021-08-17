import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Image from 'react-bootstrap/Image';

function AnsweredQuestion(props) {
   const {question,author,answer}= props;
    const { optionOne, optionTwo} = question;

		const { name, avatarURL } = author;
		const totalVotes = optionOne.votes.length + optionTwo.votes.length;
		const optionOnePercentage = Math.round((optionOne.votes.length / totalVotes) * 100);
		const optionTwoPercentage = Math.round((optionTwo.votes.length / totalVotes) * 100);
        
    return (
        <div>
        <Image
        style={{margin: 5}}
        src={require('../icons/'+avatarURL).default}
        roundedCircle
        fluid
        width="60"
        height="60"
        alt= {name + 'avatar'}
        />
        <div style={{ height: '30vh',margin: 10,}} className="span6">
        <h5>{name}'s Question Results</h5>

        <strong>Option One</strong><span className="pull-right"></span>
        <div className="bar">
            <div className="progress progress-danger active" style={{height:20,width:optionOnePercentage+'%',minWidth:20, backgroundColor:'lightblue'}}> {'|   '+optionOnePercentage + '%'}{answer==='optionOne' ? '___  Chose Your Answer' : '__  Chose The Other Answer'}</div>
        </div>
        <strong>Option Two</strong><span className="pull-right"></span>
        <div className="bar">
            <div className="progress progress-info active" style={{marginBottom:20,height:20,width: optionTwoPercentage +'%',minWidth:20 , backgroundColor:'pink'}}>{'|   '+optionTwoPercentage + '%'}{answer==='optionTwo' ? '____  Chose Your Answer' : '__ Chose The Other Answer'}</div>
        </div>
        
        <button onClick={()=>{props.history.push('/')}} className="btn btn-large btn-success">Home</button>
      </div>
      </div>
                    
    )
}
function mapStateToProps({ questions, users, auth },props) {
    const { id } = props.match.params;
	const question = questions[id];
    const answer = users[auth].answers[id]
	return {
		question: question ? question : null,
		author: question ? users[question.author] : null,
		answer
}}
export default withRouter(connect(mapStateToProps)(AnsweredQuestion))
