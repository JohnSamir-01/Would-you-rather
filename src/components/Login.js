import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { authentication } from '../redux/actions/auth'
import { Redirect } from 'react-router';
import { Form, Navbar, NavbarBrand  } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';


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
      
    
        return (

           <Fragment>

            <Navbar  expand="lg" bg="dark" variant="dark">
            <Container>
            <NavbarBrand >Would-You-Rather</NavbarBrand>
            
            </Container>
            </Navbar>

            
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Form.Group style={{width:330,}} controlId="formBasicSelect"   >
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <Form.Label style={{marginRight:'5%',marginTop:8}}>Users </Form.Label>
                <Form.Control  as='select' value={this.state.value} onChange={this.handleChange} >
                <option >Open this select menu</option>
                <option value="johndoe">John Doe</option>
                <option value="sarahedo">Sarah Edo</option>
                <option value="tylermcginnis">Tyler Mcginnis</option>
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

function mapStateToProps({auth}){
    return{redirect: !(auth===null)}
}
export default connect(mapStateToProps)(Login)
