import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import  LoadingBar  from 'react-redux-loading';
import { handleInitialData } from './redux/actions/shared'
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import Header from './components/Header';
import LeaderBoards from './components/LeaderBoards';
import NewQuestion from './components/NewQuestion';
import QuestionContainer from './components/QuestionContainer';
import ErrorPage from './components/ErrorPage';
import { removeAuth } from './redux/actions/auth';




export class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }

  render() {
    
     if(this.props.loading){
      return <LoadingBar/>
     }else return (
      <Router>
          
               <div className='app'>
                 {(!this.props.auth) ? <Fragment> <Login/> </Fragment> : 
                 <Fragment>
                <Header/>
                <LoadingBar/>
                <Switch>
                  <Route exact path='/' component={DashBoard} />
                  <Route exact path='/questions/:id' component={QuestionContainer} />
                  <Route  path='/leaderboard' component={LeaderBoards} />
                  <Route  path='/add' component={NewQuestion} /> 
                  <Route path='/error' component={ErrorPage} />
                  <Route render={()=> {
                    this.props.dispatch(removeAuth())
                     return <Redirect to='/error'/>  }} />
                  
                </Switch> </Fragment> }
                </div>
      </Router>
      
        
    )
  }
}

function mapStateToProps ({ questions, users, auth }) {
  return {
    loading: (questions ==={} && users === {}),
    auth,
  }
}
export default connect(mapStateToProps)(App)
