import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Image from 'react-bootstrap/Image';
import ErrorPage from './ErrorPage';

function AnsweredQuestion(props) {
   const {question,author,answer}= props;
    const { optionOne, optionTwo} = question;

		const { name, avatarURL } = author;
		const totalVotes = optionOne.votes.length + optionTwo.votes.length;
		const optionOnePercentage = Math.round((optionOne.votes.length / totalVotes) * 100);
		const optionTwoPercentage = Math.round((optionTwo.votes.length / totalVotes) * 100);
        const optionOneCount = optionOne.votes.length;
        const optionTwoCount = optionTwo.votes.length;

        if (question === null) {
			return <ErrorPage />;
		}
        
    return (
        <div style={{width:'100vw',height:'100vh',display:'flex',justifyContent:'space-around',alignItems:'center'}} >
        <div style={{width:330,height:350,border: '5px solid black', borderRadius:15}}>
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

        <strong>Option One : {optionOne.text}</strong><span className="pull-right"></span>
        <div className="bar">
        {answer==='optionOne' ? ` people who Chose Your Answer : ${optionOneCount}` : `people who Chose the other Answer : ${optionOneCount}`} <div className="progress progress-danger active" style={{height:20,width:optionOnePercentage+'%',minWidth:20, backgroundColor:'lightblue'}}> |{optionOnePercentage}% </div>
        </div>
        <strong>Option Two : {optionTwo.text}</strong><span className="pull-right"></span>
        <div className="bar">
        {answer==='optionTwo' ? ` people who Chose Your Answer : ${optionTwoCount}` : `people who Chose the other Answer : ${optionTwoCount}`}  <div className="progress progress-info active" style={{marginBottom:20,height:20,width: optionTwoPercentage +'%',minWidth:20 , backgroundColor:'pink'}}>|{optionOnePercentage}%</div>
        </div>
        
        <button onClick={()=>{props.history.push('/')}} className="btn btn-large btn-success">Home</button>
      </div>
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
