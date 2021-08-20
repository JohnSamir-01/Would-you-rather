import React from 'react'
import { connect } from 'react-redux'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

function UserData(props) {
    
    return (
        <Card style={{width:330}}>
         <Card.Body>
            <Card.Title>{props.name}'s LeaderBoard</Card.Title>
         <Image
            src={require('../icons/'+props.avatarURL).default}
            roundedCircle
            fluid
            width="60"
            height="60"
            alt= {props.name + 'avatar'}
        />
           <Card.Text>
               Questions: {props.QuestionCount}
           </Card.Text>
            <Card.Text>
                Answers: {props.AnswerCount}
            </Card.Text>
            <Card.Text>
                <label style={{fontWeight:'bold',fontSize: 'large',}}>Score: {props.Score} </label>
            </Card.Text>
        </Card.Body>
    </Card>
        )
}

function mapStateToProps({users},{user}){
    let AnswerCount= 0;
    let QuestionCount=0;
    Object.keys(users[user].answers).forEach(element => {  AnswerCount++ });
    Object.keys(users[user].questions).forEach(element => {  QuestionCount++ });
    const Score = AnswerCount + QuestionCount;
    const name = users[user].name
    const avatarURL = users[user].avatarURL;
    return{
        AnswerCount,
        QuestionCount,
        Score,
        name,
        avatarURL
    }
    }
export default connect(mapStateToProps)(UserData)
