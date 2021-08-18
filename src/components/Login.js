import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { authentication } from '../redux/actions/auth'
import { Redirect } from 'react-router';
import { Form, Navbar, NavbarBrand , Container, Button } from 'react-bootstrap';



export class Login extends Component {

        state = {
            value:"",
        };
    
      handleChange= (event) => {
        this.setState({
            value : event.target.value,
        })
      }
    
      handleSubmit= (event) => {
        event.preventDefault();

        if(this.state.value !== ""){
            this.props.dispatch(authentication(this.state.value));
        <Redirect to='/DashBoard' />
        }else{
            alert('Please Choose a User')
      }}
      
    render() {
      
    const {users,ids} = this.props;
        return (

           <Fragment>
            
            <Navbar  expand="lg" bg="dark" variant="dark">
            <Container>
            <NavbarBrand >Would-You-Rather</NavbarBrand>
            
            </Container>
            </Navbar>

            
            <div style={{width:'100vw',height:'100vh', display:'flex',justifyContent:'center',alignItems:'center'}}>

            <Form.Group style={{width:330,height:350,border:'5px solid lightBlue',borderRadius:15}} controlId="formBasicSelect"   >
                <div style={{display:'flex',justifyContent:'space-between',marginTop:100}}>
                <Form.Label style={{marginRight:'5%',marginTop:8}}>Users: </Form.Label>
                <Form.Control  as='select' value={this.state.value} onChange={this.handleChange} >
                <option >Open this select menu</option>
                {ids.map((id)=> <option key={id} value={id}>{users[id].name}</option>)}
                </Form.Control>
                </div>
                <Button style={{marginLeft:'40%',marginTop:'10%'}} onClick={this.handleSubmit} variant="primary" type="submit">Login!</Button>
                <small style={{marginLeft:'40%',marginTop:'10%',color:'darkred',letterSpacing:-0.5}}>Please Login</small>
                </Form.Group>
                </div>
                
            
                
            </Fragment>
                
        )
    }
}

function mapStateToProps({users}){
    return{ids: Object.keys(users),users}
}
export default connect(mapStateToProps)(Login)
