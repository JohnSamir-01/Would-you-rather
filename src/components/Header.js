import React from 'react'
import {Nav, Navbar, NavbarBrand ,NavLink, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import Image from 'react-bootstrap/Image'
import { removeAuth } from '../redux/actions/auth'
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <NavbarBrand >Would-You-Rather</NavbarBrand>
  <NavbarToggle aria-controls="responsive-navbar-nav" />
  <NavbarCollapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
      <Link className='nav-link' to='/'>
      Home
      </Link>
      <Link className='nav-link' to='/add'>
      New Question
      </Link>
      <Link className='nav-link' to='/leaderboard'>
      LeaderBoard
      </Link>
    </Nav>
    
    <Nav>
      <div style={{width:'300', display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
    <small  style={{color: 'white',position: 'relative', right: 10,}}>Welcome {props.name}!</small>
      <Image
      src={require('../icons/'+props.avatarURL).default}
			roundedCircle
			fluid
			width="40"
			height="20"
			alt= {'avatar'}
      /></div>
     
      <NavLink eventKey={2} onClick={()=>{props.dispatch(removeAuth())}}> LogOut</NavLink>
    </Nav>
  </NavbarCollapse>
  </Container>
</Navbar>
    )
}

function mapStateToProps({users,auth}){
  const avatarURL= users[auth].avatarURL
  return{
    name: users[auth].name,
    avatarURL,
  }
}

export default connect(mapStateToProps)(Header)
