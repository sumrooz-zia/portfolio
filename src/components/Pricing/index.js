import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
  Container,
  Row,
  Col
} from 'reactstrap';
// import { BsCheckCircle } from "react-bootstrap-icons";
import { Link } from 'react-router-dom';

import './style.css';
// import LOGO from '../../images/LOGO.png';
// import linkin from '../../images/linkdin.png';
// import face from '../../images/face.png';
// import intgram from '../../images/instgram.jpeg';
// import email from '../../images/email.png';
// import phone from '../../images/phone.png';
// import FLAG from '../../images/FLAG.png';




export default class Pricing extends React.Component {

  render() {
    return (
      <div className='pricingpage'>
        <div className='prisebackgrond'>
        <h1>Pricing</h1>
        <h2 className='webdev'><span>Web Development </span>Price Package</h2>
        </div>
      
        <Container>
          <div className='Packages'>
            <Row>
              <Col xs={12} md={6} lg={4} >
                <div className='Bacis Package'>
                 
                <Card>
                <h3>Bacis Package</h3>
                <hr/>

                <Row>
                  <Col xs={12} md={6} lg={6} >
                  <div className='busnies'>

                  <h4>From <br/>899</h4>
                  
                  <span>SEK Month</span>
                  </div>
                  </Col>
                  <Col xs={12} md={6} lg={6} >
                  <div className='smaller'>

                    <p>Good starter kit for smaller businesses</p>
                  </div>

                  </Col>
                  </Row>
                  <hr/>
              <CardBody className='OLLITAGLE'>
                <ol>
                  <li>Pages: 1pc</li>
                  <li>Ongoing maintenance</li>
                  <li>Ongoing security</li>
                  <li>Backup</li>
                  <li>SSL certificate</li>
                  <li>Content updates: 1pc/month</li>
                  <li>GDPR secured: Yes</li>
                  <li>Web hosting</li>
                  <li>E-commerce: No</li>
                  </ol>
                <Button className='BUYNOW'>BUY NOW</Button>
              </CardBody>
            </Card>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4} >
                <div className='Bacis Package'>
                <Card>
                <h3>Standard  Package</h3>
                <hr/>

                <Row>
                  <Col xs={12} md={6} lg={6} >
                  <div className='busnies'>

                  <h4>From <br/>1499</h4>
                  
                  <span>SEK Month</span>
                  </div>
                  </Col>
                  <Col xs={12} md={6} lg={6} >
                  <div className='smaller'>

                    <p>Popular among entrepreneurs.</p>
                  </div>

                  </Col>
                  </Row>
                  <hr/>
              <CardBody className='OLLITAGLE'>
                <ol>
                  <li>Pages: 8pc</li>
                  <li>Ongoing maintenance</li>
                  <li>Ongoing security</li>
                  <li>Backup</li>
                  <li>SSL certificate</li>
                  <li>Content updates: 1pc/month</li>
                  <li>GDPR secured: Yes</li>
                  <li>Web hosting</li>
                  <li>E-commerce: No</li>
                  </ol>
                <Button className='BUYNOW'>BUY NOW</Button>
              </CardBody>
            </Card>

                </div>
              </Col>
              <Col xs={12} md={6} lg={4} >
                <div className='Bacis Package'>
               
                <Card>
                <h3>Premium  Package</h3>
                <hr/>

                <Row>
                  <Col xs={12} md={6} lg={6} >
                  <div className='busnies'>

                  <h4>From <br/>2999</h4>
                  
                  <span>SEK Month</span>
                  </div>
                  </Col>
                  <Col xs={12} md={6} lg={6} >
                  <div className='smaller'>

                    <p>For those who want and need something extra.</p>
                  </div>

                  </Col>
                  </Row>
                  <hr/>
              <CardBody className='OLLITAGLE'>
                <ol>
                  <li>Pages: UP TO 30 Pages</li>
                  <li>Ongoing maintenance</li>
                  <li>Ongoing security</li>
                  <li>Backup</li>
                  <li>SSL certificate</li>
                  <li>Content updates: 1pc/month</li>
                  <li>GDPR secured: Yes</li>
                  <li>Web hosting</li>
                  <li>E-commerce: Yes</li>
                  </ol>
                <Button className='BUYNOW'>BUY NOW</Button>
              </CardBody>
            </Card>
                </div>
              </Col>
            </Row>
            
          </div>
        </Container>










        <h2 className='webdevUIUX'>
          <span>UI/UX Design  </span>Price Package</h2>
        <Container>
          <div className='Packages'>
            <Row>
              <Col xs={12} md={6} lg={4} >
                <div className='Bacis Package'>
                 
                <Card>
                <h3>Bacis Package</h3>
                <hr/>

                <Row>
                  <Col xs={12} md={6} lg={6} >
                  <div className='busnies'>

                  <h4>From <br/>3999</h4>
                  
                  <span>SEK Month</span>
                  </div>
                  </Col>
                  <Col xs={12} md={6} lg={6} >
                  <div className='smaller'>

                    <p>Good starter kit for smaller businesses</p>
                  </div>

                  </Col>
                  </Row>
                  <hr/>
              <CardBody className='OLLITAGLE'>
                <ol>
                  <li>Up to 10  web pages (based on your ideas)</li>
                  <li>2 changes</li>
                  <li>Ongoing security</li>
                  <li>PNG or JPG</li>
                  <li>SSL certificate</li>
                  <li>Content updates: 1pc/month</li>
                  <li>GDPR secured: Yes</li>
                  <li>Web hosting</li>
                  <li>E-commerce: No</li>
                  </ol>
                <Button className='BUYNOW'>BUY NOW</Button>
              </CardBody>
            </Card>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4} >
                <div className='Bacis Package'>
                <Card>
                <h3>Standard  Package</h3>
                <hr/>

                <Row>
                  <Col xs={12} md={6} lg={6} >
                  <div className='busnies'>

                  <h4>From <br/>8999</h4>
                  
                  <span>SEK Month</span>
                  </div>
                  </Col>
                  <Col xs={12} md={6} lg={6} >
                  <div className='smaller'>

                    <p>Popular among entrepreneurs.</p>
                  </div>

                  </Col>
                  </Row>
                  <hr/>
              <CardBody className='OLLITAGLE'>
                <ol>
                  <li>Up to 20  web pages (based on your ideas)</li>
                  <li>Ongoing maintenance</li>
                  <li>Fonts and assets</li>
                  <li>Source file</li>
                  <li>Change of layout</li>
                  <li>Content updates: 1pc/month</li>
                  <li>Convert to HTML / CSS</li>
                  <li>Web hosting</li>
                  <li>E-commerce: No</li>
                  </ol>
                <Button className='BUYNOW'>BUY NOW</Button>
              </CardBody>
            </Card>

                </div>
              </Col>
              <Col xs={12} md={6} lg={4} >
                <div className='Bacis Package'>
               
                <Card>
                <h3>Premium  Package</h3>
                <hr/>

                <Row>
                  <Col xs={12} md={6} lg={6} >
                  <div className='busnies'>

                  <h4>From <br/>14999</h4>
                  
                  <span>SEK Month</span>
                  </div>
                  </Col>
                  <Col xs={12} md={6} lg={6} >
                  <div className='smaller'>

                    <p>For those who want and need something extra.</p>
                  </div>

                  </Col>
                  </Row>
                  <hr/>
              <CardBody className='OLLITAGLE'>
                <ol>
                <li>Up to 30  web pages (based on your ideas)</li>
                  <li>Ongoing maintenance</li>
                  <li>10 changes</li>
                  <li>Clickable prototype</li>
                  <li>HD quality images</li>
                  <li>Fonts and assets</li>
                  <li>The source file</li>
                  <li>Web hosting</li>
                  <li>E-commerce: Yes</li>
                  </ol>
                <Button className='BUYNOW'>BUY NOW</Button>
              </CardBody>
            </Card>
                </div>
              </Col>
            </Row>
            
          </div>
        </Container>






        <h2 className='webdevseo'><span>SEO  </span>Price Package</h2>
        <Container>
          <div className='Packages'>
            <Row>
              <Col xs={12} md={6} lg={4} >
                <div className='Bacis Package'>
                 
                <Card>
                <h3>Bacis Package</h3>
                <hr/>

                <Row>
                  <Col xs={12} md={6} lg={6} >
                  <div className='busnies'>

                  <h4>From <br/>599</h4>
                  
                  <span>per month Excl. VAT</span>
                  </div>
                  </Col>
                  <Col xs={12} md={6} lg={6} >
                  <div className='smaller'>

                    <p>Good starter kit for smaller businesses</p>
                  </div>

                  </Col>
                  </Row>
                  <hr/>
              <CardBody className='OLLITAGLE'>
                <ol>
                <li>Up to 3  web pages (based on your ideas)</li>
                  <li>Ongoing maintenance</li>
                  <li>3 changes</li>
                  <li>Clickable prototype</li>
                  <li>HD quality images</li>
                  <li>Fonts and assets</li>
                  <li>The source file</li>
                  <li>Web hosting</li>
                  <li>E-commerce: No</li>
                  </ol>
                <Button className='BUYNOW'>BUY NOW</Button>
              </CardBody>
            </Card>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4} >
                <div className='Bacis Package'>
                <Card>
                <h3>Standard  Package</h3>
                <hr/>

                <Row>
                  <Col xs={12} md={6} lg={6} >
                  <div className='busnies'>

                  <h4>From <br/>999</h4>
                  
                  <span>per month Excl. VAT</span>
                  </div>
                  </Col>
                  <Col xs={12} md={6} lg={6} >
                  <div className='smaller'>

                    <p>Popular among entrepreneurs.</p>
                  </div>

                  </Col>
                  </Row>
                  <hr/>
              <CardBody className='OLLITAGLE'>
                <ol>
                <li>Up to 6  web pages (based on your ideas)</li>
                  <li>Ongoing maintenance</li>
                  <li>6 changes</li>
                  <li>Clickable prototype</li>
                  <li>HD quality images</li>
                  <li>Fonts and assets</li>
                  <li>The source file</li>
                  <li>Web hosting</li>
                  <li>E-commerce: No</li>
                  </ol>
                <Button className='BUYNOW'>BUY NOW</Button>
              </CardBody>
            </Card>

                </div>
              </Col>
              <Col xs={12} md={6} lg={4} >
                <div className='Bacis Package'>
               
                <Card>
                <h3>Premium  Package</h3>
                <hr/>

                <Row>
                  <Col xs={12} md={6} lg={6} >
                  <div className='busnies'>

                  <h4>From <br/>1999</h4>
                  
                  <span>per month Excl. VAT</span>
                  </div>
                  </Col>
                  <Col xs={12} md={6} lg={6} >
                  <div className='smaller'>

                    <p>For those who want and need something extra.</p>
                  </div>

                  </Col>
                  </Row>
                  <hr/>
              <CardBody className='OLLITAGLE'>
              <ol>
              <li>Up to 10  web pages (based on your ideas)</li>
                  <li>Ongoing maintenance</li>
                  <li>10 changes</li>
                  <li>Clickable prototype</li>
                  <li>HD quality images</li>
                  <li>Fonts and assets</li>
                  <li>The source file</li>
                  <li>Web hosting</li>
                  <li>E-commerce: Yes</li>
                  </ol>
                <Button className='BUYNOW'>BUY NOW</Button>
              </CardBody>
            </Card>
                </div>
              </Col>
            </Row>
            
          </div>
        </Container>








        <h2 className='webdevshopword'><span>SHOPIFY EXPERTIES &  </span>WORDPRESS</h2>
        <Container>
          <div className='Packagesshop'>
            <Row>
              <Col xs={12} md={6} lg={4} >
                <div className='Bacis Package'>
                 
                <Card>
                <h3>Bacis Package</h3>
                <hr/>

                <Row>
                  <Col xs={12} md={6} lg={6} >
                  <div className='busnies'>

                  <h4>From <br/>599</h4>
                  
                  <span>per month Excl. VAT</span>
                  </div>
                  </Col>
                  <Col xs={12} md={6} lg={6} >
                  <div className='smaller'>

                    <p>Good starter kit for smaller businesses</p>
                  </div>

                  </Col>
                  </Row>
                  <hr/>
              <CardBody className='OLLITAGLE'>
                <ol>
                  <li>1 Keyword</li>
                  <li>Monthly reports</li>
                  <li>Ongoing security</li>
                  <li>PNG or JPG</li>
                  </ol>
                <Button className='BUYNOW'>BUY NOW</Button>
              </CardBody>
            </Card>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4} >
                <div className='Bacis Package'>
                <Card>
                <h3>Standard  Package</h3>
                <hr/>

                <Row>
                  <Col xs={12} md={6} lg={6} >
                  <div className='busnies'>

                  <h4>From <br/>999</h4>
                  
                  <span>per month Excl. VAT</span>
                  </div>
                  </Col>
                  <Col xs={12} md={6} lg={6} >
                  <div className='smaller'>

                    <p>Popular among entrepreneurs.</p>
                  </div>

                  </Col>
                  </Row>
                  <hr/>
              <CardBody className='OLLITAGLE'>
                <ol>
                <li>3 Keyword</li>
                  <li>Monthly reports</li>
                  <li>Ongoing security</li>
                  <li>PNG or JPG</li>
                  </ol>
                <Button className='BUYNOW'>BUY NOW</Button>
              </CardBody>
            </Card>

                </div>
              </Col>
              <Col xs={12} md={6} lg={4} >
                <div className='Bacis Package'>
               
                <Card>
                <h3>Premium  Package</h3>
                <hr/>

                <Row>
                  <Col xs={12} md={6} lg={6} >
                  <div className='busnies'>

                  <h4>From <br/>1999</h4>
                  
                  <span>per month Excl. VAT</span>
                  </div>
                  </Col>
                  <Col xs={12} md={6} lg={6} >
                  <div className='smaller'>

                    <p>For those who want and need something extra.</p>
                  </div>

                  </Col>
                  </Row>
                  <hr/>
              <CardBody className='OLLITAGLE'>
              <ol>
                <li>10 Keyword</li>
                  <li>Monthly reports</li>
                  <li>Ongoing security</li>
                  <li>PNG or JPG</li>
                  </ol>
                <Button className='BUYNOW'>BUY NOW</Button>
              </CardBody>
            </Card>
                </div>
              </Col>
            </Row>
            
          </div>
        </Container>
      </div>

    );
  }
}