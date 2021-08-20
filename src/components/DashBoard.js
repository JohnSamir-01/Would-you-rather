import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnsweredList from './AnsweredList'
import  UnAnsweredList  from './UnAnsweredList'


export class DashBoard extends Component {
    state={
        switch: false,
    }

    render() {
    
    const handleSwitch= (e) =>{
        e.preventDefault();
        this.setState({
            switch: false,
        })
    }

    const handleSwitch2 = (e) =>{
        e.preventDefault();
        this.setState({
            switch: true,
        })
    }

    const bootstrapClass = (this.state.switch) ? "btn btn-outline-secondary" : "btn btn-outline-primary"
    const bootstrapClass2 = (this.state.switch) ? "btn btn-outline-primary" : "btn btn-outline-secondary"
        return (
            <div>
                
                <div style={{width:'100vw'}}>
                    <button style={{width:'50vw'}} className={bootstrapClass} onClick={handleSwitch}>UnAnswered Questions</button>
                    <button style={{width:'50vw'}} className={bootstrapClass2} onClick={handleSwitch2}>Answered Questions</button>
                {(this.state.switch)? <AnsweredList/>: <UnAnsweredList/>}
                </div>
            </div>
        )
    }
}

export default connect()(DashBoard)

