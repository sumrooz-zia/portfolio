import React from 'react';
import { Container,Row ,Col} from 'reactstrap';
import { Link } from 'react-router-dom';

import './style.css';
// import LOGO from '../../images/LOGO.png';
// import linkin from '../../images/linkdin.png';
// import face from '../../images/face.png';
// import intgram from '../../images/instgram.jpeg';
// import email from '../../images/email.png';
// import phone from '../../images/phone.png';
// import FLAG from '../../images/FLAG.png';




export default class Uiux extends React.Component {
  
  render() {
    return (
      <div className='uiuxdesgn'>
      <Container>
      <Row>
                  <Col xs={12} md={6} lg={6} >
                  <div className='busnies'>

                  <h4>From <br/>1499</h4>
                  
                  <span>SEK Month</span>
                  </div>
                  </Col>
                  <Col xs={12} md={6} lg={6} >
                  <div className='smaller'>

                    <p>Let us make you happy with</p>
                    <h1></h1>
                  </div>

                  </Col>
                  </Row>
                  </Container>
      </div>
    );
  }
}