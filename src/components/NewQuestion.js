import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleAddQuestion } from '../redux/actions/questions';
import { withRouter } from 'react-router';
export class NewQuestion extends Component {
    state = {
        optionOne: "",
        optionTwo: "",
    }


    render() {
        const {optionOne, optionTwo} = this.state;
        const {auth} = this.props;
        const handleSubmit = (e) =>{
            e.preventDefault();

            this.props.dispatch(handleAddQuestion(optionOne, optionTwo, auth ));
            this.props.history.push('/')
        }
        const handleChangeOne = (e) =>{
            this.setState({
                optionOne: e.target.value
            })
        }
        const handleChangeTwo = (e) =>{
            this.setState({
                optionTwo: e.target.value
            })
        }

       
        return (
            <div style={{width:'100vw', display: 'flex',flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                <br/>
            <h3 >Add new Question ...</h3>
            <br/>
        <form onSubmit={handleSubmit}>
            <h5>Would you Rather</h5>
      <textarea
        placeholder="...."
        value={optionOne}
        onChange={handleChangeOne}
        className='textarea'
        maxLength={280}
      />
      <p>___Or___</p>
      <textarea
        placeholder="...."
        value={optionTwo}
        onChange={handleChangeTwo}
        className='textarea'
        maxLength={280}
      />
      <br/>
      <br/>
      <button
        
        type='submit'
        disabled={(optionTwo && optionOne)  === "" }>
          Add Question
      </button>
    </form>
        </div>
        )
    }
}

function mapStateToProps({auth}){
    return{
        auth,
       
    }
}

export default withRouter(connect(mapStateToProps)(NewQuestion))
