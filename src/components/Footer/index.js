import React from 'react';
import { Container, Row, Col, ListGroupItem, ListGroup, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';
import LOGO from '../../images/LOGO.png';
import FOO from '../../images/lOGofOOter.png';
import './style.css';


export default class Footer extends React.Component {
  render() {
    return (
      <div className='fOotermaNI'>
        <Container>

          <Row>
            <Col xs="12" sm="4" lg="4">
              <div className='logoFOOTER' >

                <a href="/Home">
                  <img src={FOO} alt="LOGO-3@3x.png" className="LOGO-img" />
                </a>
                <h3>Our company has been developing high-quality and reliable
                  software for corporate needs since 2008. We are renowned
                  professionals of software development.</h3>
                <div className='infOForm'>
                  <Row>
                    <Col >

                      <h6>ADDRESS</h6>
                      <p>vintrosagatan 54 lgh 1804, 12474 Stockholm, Sweden</p>
                    </Col>

                    <Col >
                      <h6>phone</h6>
                      <p>+46727745380</p>
                      <p>+46727745380</p>

                    </Col>
                    <Col >

                      <h6>E-MAILS</h6>
                      <p>vintrosagatan 54 lgh 1804, 12474 Stockholm, Sweden</p>

                    </Col>
                  </Row>

                </div>
              </div>
            </Col>
            <Col xs="12" sm="4" lg="4">

              <div className='CONTENT-FORM'>
                <h1>Questions? Contact Us</h1>
              <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Name</label>
  <input type="text" class="form-control" id="name" placeholder="Name  placeholder" /> 
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">E-mail</label>
  <input type="text" class="form-control" id="email" placeholder="Email  placeholder" />
</div> 
<div class="mb-3">
  <label for="Message" class="form-label">Message</label>
  <input type="text" class="form-control" id="message"  placeholder="Message  placeholder" />
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message  "  />
</div> 
<div class="col-12">
    <button type="submit" class="btn btn-primary">Send Message</button>

  </div>
              </div>
            </Col>
         
            <Col xs="12" sm="4" lg="4">

              <div className='logoFOOTER' >
                <a href="/Home">
                  <img src={LOGO} alt="LOGO-3@3x.png" className="LOGO-img" />
                </a>
                <ListGroup>
                  <h3>About</h3>
                  <ListGroupItem>Company Profile</ListGroupItem>

                  <ListGroupItem>Our Team</ListGroupItem>
                  <ListGroupItem>Our Methodology</ListGroupItem>
                  <ListGroupItem>Careers</ListGroupItem>

                  <ListGroupItem>Contact</ListGroupItem>
                  <ListGroupItem>Resources </ListGroupItem>

                </ListGroup>
              </div>
            </Col>
          </Row>


        </Container>
      </div>
    );
  }
}