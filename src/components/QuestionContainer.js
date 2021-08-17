import React, { Component} from 'react'
import { connect } from 'react-redux'
import Image from 'react-bootstrap/Image';
import { handleQuestionAnswer } from '../redux/actions/questions';
import { withRouter } from 'react-router';
import { Form, Button } from 'react-bootstrap';



export class QuestionContainer extends Component {
    
    render() {
        const {auth, author, avatarURL, optionOne, optionTwo, dispatch, id} = this.props;

    
    const handleSubmit = (id, e) => {
		const answer = this.form.answer.value;

		e.preventDefault();

		if (answer !== '') {

			dispatch(handleQuestionAnswer(id, answer,auth));
            this.props.history.push(`/questions/${id}/answer`)

		} else {
			alert('You must make a choice')  }
            
		}

       

        return (

            <div style={{width:'100vw', display: 'flex',flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
            <div  className="d-inline-flex p-2">
               <Image
                src={require('../icons/'+avatarURL).default}
                roundedCircle
                fluid
                width="60"
                height="60"
                alt= {author+'avatar'}
                     /> 
            <h2 style={{position: 'relative', top: 10, left:10,}} >{author} Asks: </h2> 
            </div>
            <p>________________________</p>
            <h3>Would you Rather..</h3>
            <Form
            onSubmit={(e) => handleSubmit(id, e)}
            ref={(f) => (this.form = f)}>

            <Form.Check
                custom
                type="radio"
                id="optionOne"
                label={optionOne}
                value="optionOne"
                name="answer"
                className="mb-2"
            />
            <p>____or____</p>
            <Form.Check
                custom
                type="radio"
                id="optionTwo"
                label={optionTwo}
                value="optionTwo"
                name="answer"
                className="mb-2"
            />
            
            <Button type="submit" variant="outline-dark">
                Vote!
            </Button>
        </Form>
        </div>
        )
	}}
       
    



function mapStateToProps ({ users, questions, auth},props) {
   
    const { id } = props.match.params
    const{author }=questions[id];
    const name = users[author].name;
    const avatarURL = users[author].avatarURL
    const optionOne = questions[id].optionOne.text;
    const optionTwo = questions[id].optionTwo.text;
    
    return {
        id,
      auth,
      author: name,
      avatarURL: avatarURL,
      optionOne,
      optionTwo

    }
  }

export default withRouter(connect(mapStateToProps)(QuestionContainer))

