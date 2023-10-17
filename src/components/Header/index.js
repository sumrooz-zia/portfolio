import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,ButtonDropdown,Dropdown,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle, Button,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

import './style.css';
import LOGO from '../../images/Looogo.png';
import linkin from '../../images/linkdin.png';
import face from '../../images/face.png';
import intgram from '../../images/instgram.jpeg';
import email from '../../images/email.png';
import phone from '../../images/phone.png';
import FLAG from '../../images/FLAG.png';




export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <div fixed-top>
        <Navbar  light expand="md" >
          <div className='logomaker' >
          <a href="/Home"> 
          <img src={LOGO}  alt="LOGO-3@3x.png" className="LOGO-img" />
           </a>
            {/* <NavbarBrand >sumrooz</NavbarBrand> */}
          </div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <div className='link-section'>

              <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Gallery

 </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/Pricing">Pricing</NavLink>
                </NavItem>
                <div className='dropbtn'>
                <Dropdown isOpen={this.state.isOpen} toggle={this.toggle}>
        <DropdownToggle className='WHATWEDO' caret>
        What we do
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>
             <NavLink href="/Development">web Development</NavLink>
</DropdownItem>
          <DropdownItem disabled><NavLink href="/Development">  Ecommerence-$ shopify</NavLink></DropdownItem>
          <DropdownItem><NavLink href="/Uiux">UIUX Design</NavLink></DropdownItem>
          <DropdownItem divider />
          <DropdownItem><NavLink href="/Development">web Development</NavLink></DropdownItem>
        </DropdownMenu>
      </Dropdown>
</div>
            
                <NavItem>
                  <NavLink href="/">Contact</NavLink>
                </NavItem>
                <NavItem className='SwedIDs'>
                <img src={FLAG} width={50} height={28} alt="LOGO-3@3x.png" className="LOGimg" /> 
         </NavItem> 

              </Nav>
             
            </div>
 
        
      
            <div className='CONTACT-FORM'>
              
            <a href="/Home"> 
          <img src={linkin} width={30} height={30}  alt="LOGO-3@3x.png" className="LOGimg" />
           </a>
           <a href="/Home"> 
          <img src={face} width={50} height={30}  alt="LOGO-3@3x.png" className="LOGimg" />
           </a>
           <a href="/Home"> 
          <img src={intgram} width={30} height={30}  alt="LOGO-3@3x.png" className="LOGimg" />
           </a>
           <a href="/Home"> 
          <img src={email} width={30} height={30}  alt="LOGO-3@3x.png" className="LOGimg" />
           </a>
           <a href="/Home"> 
          <img src={phone} width={40} height={30} alt="LOGO-3@3x.png" className="LOGimg" />
           </a>
           
            </div>
           
          </Collapse>
          
        </Navbar>
      </div>
    );
  }
}