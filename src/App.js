import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import  LoadingBar  from 'react-redux-loading';
import { handleInitialData } from './redux/actions/shared'
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import Header from './components/Header';
import LeaderBoards from './components/LeaderBoards';
import NewQuestion from './components/NewQuestion';
import QuestionContainer from './components/QuestionContainer';
import AnsweredQuestion from './components/AnsweredQuestion';
import ErrorPage from './components/ErrorPage';



export class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }

  render() {
    
     if(this.props.loading){
      return <LoadingBar/>
     }else return (
      <Router>
          <Fragment> <LoadingBar/> </Fragment>
               <div className='app'>
                 {(!this.props.auth) ? <Fragment> <Login/> <Redirect exact to='/'/></Fragment> : 
                 <Fragment>
                 <Header/>
                <Switch>
                  <Route exact path='/' component={DashBoard} />
                  <Route exact path='/questions/:id' component={QuestionContainer} />
                  <Route exact path='/questions/:id/answer' component={AnsweredQuestion} />
                  <Route exact path='/leaderboard' component={LeaderBoards} />
                  <Route exact path='/add' component={NewQuestion} /> 
                  <Route component={ErrorPage} />
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
