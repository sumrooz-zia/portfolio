import React from 'react';
import { Form, FormGroup, Label, Input, FormText, Container, Row, CardImg, CardBody, CardSubtitle, NavLink, Col, TabContent, ListGroupItem, Button, TabPane, Card, CardTitle, CardText, } from 'reactstrap';
import classnames from 'classnames';
import location from '../../images/location.png';
import './style.css';
import sumrooz from '../../images/SAMROZ.png';
import human from '../../images/BE.png';
import uiuxx from '../../images/uiux.png';
import html from '../../images/HTML5_logo.png';
import boot from '../../images/bootstrap.png';
import php from '../../images/logo-php.png';
import sql from '../../images/MySQL.png';
import mongo from '../../images/MongoDB.png';
import shopify from '../../images/shop.png';
import bluu from '../../images/bluu.jpeg';
import PHONE from '../../images/phone.png';
import WEBDEV from '../../images/Agile.png';
import webkIT from '../../images/weBone.png';
import rightimg from '../../images/develop-right.png';
import UIUX from '../../images/UI&UX.png';
import SEO from '../../images/seo.png';
import seoup from '../../images/seoup.png';

import SHOPIY from '../../images/SHOPIFY&WORDPRES.png';
import line from '../../images/icons8-green-apple-48.png';
import check from '../../images/icons8-check-48.png';
import heart from '../../images/icons8-green-heart-48.png';
import maill from '../../images/maillll.png';
import designn from '../../images/designuiux.png';
import { Fonts } from 'react-bootstrap-icons';

export default class Development extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {

    return (
      <div className='mainet'>
        {/* <Header/> */}
        <Container>
          <div className='hOmebACk'>

            <Row>
              <Col xs={12} md={6} lg={6}>


                <div className='Weprovide'>
                  <span>WEB APPLICATION DEVELOPMENT</span>
                  <h1> We provide end to end web application development services which supercharge our clients' businesses</h1>
                  <p>We develop scalable and engaging web applications for various industry verticals, ranging from portals to content management systems , which have helped our clients improve customer engagement,
                    increase profitability and realize operational efficiencies.</p>
                  <Button color="blue">Find out more</Button>
                </div>
              </Col>

              <Col xs={12} md={6} lg={6}>

                <div className='imagedev'>
                  <a href="/Home" className='sam_img'>
                    <img src={WEBDEV} width={'400'} height={'400'} alt="LOGO-3@3x.png" className="codingimg" />

                  </a>
                </div>
              </Col>




            </Row>
          </div>
        </Container>



        <Container>
          <div className='createquality'>

            <Row>
              <Col xs={12} md={6} lg={2}>

                <div className='ModernIT'>
                  <Card>
                    <CardBody className='cardback'>

                      <CardTitle className='sek'>100+</CardTitle>
                      <CardSubtitle>Modern IT solutions developed</CardSubtitle>

                    </CardBody>
                  </Card>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>

                <div className='ModernIT'>
                  <Card>
                    <CardBody className='ecommercepro'>
                      <CardTitle className='sek'>10+</CardTitle>
                      <CardSubtitle>E-commerce providers</CardSubtitle>

                    </CardBody>
                  </Card>
                </div>

                <div className='ModernIT'>
                  <Card>
                    <CardBody className='turnover'>

                      <CardTitle className='sek'>SEK 60M+</CardTitle>
                      <CardSubtitle>Turnover of customers</CardSubtitle>

                    </CardBody>
                  </Card>
                </div>
              </Col>

              <Col xs={12} md={6} lg={6}>


                <div className='createquality'>

                  <h2> We create   <span>quality </span> in <br />web development.</h2>
                  <p>Over the past decade, we've mastered the art of creating websites that innovate, engage, and deliver results through a combination of human-centeredness and progressive thinking. Hire top web developers to make your dream come true.

                    Whether it's custom web application development and SaaS platforms, e-commerce website development or informative lead generation websites, our value proposition in web development is to build solutions by prioritizing end-user context and needs, ensuring meaningful results. Web development for business or small business, we strive
                    to deliver remarkable results as an award-winning web development company</p>
                  <Button color="blue">Find out more</Button>
                </div>
              </Col>


            </Row>
          </div>
        </Container>



        <div className='competitionn'>
          <Row >
          <div className='competition'>

            <Col xs={12} md={6} lg={12} >
                <h1><span>What sets us apart from</span> the <br />competition?</h1>
                <p>In this era of Digital Transformation, we create web solutions that enable your business to grow exponentially.
                  Through our professional strategy, our services completely renew your digital presence</p>
                <Row>
                  <Col xs={12} md={6} lg={4} >

                    <h2 className='developmentt'>Custom web development</h2>

                    <p className='excel'>We excel in creating a flawless mobile optimized website as per your business needs. Through appropriate application
                      incorporation techniques, we develop a customized business app that suits you best.</p>
                  </Col>
                  <Col xs={12} md={6} lg={4} >

                    <h2 className='developmentt'>Web portal development</h2>
                    <p className='excel'>With an emphasis on a mobile responsive workflow that is fast and efficient, we come up with web portals for startups
                      that form a channel that is flexible with multiple devices.</p>

                  </Col>
                  <Col xs={12} md={6} lg={4} >

                    <h2 className='developmentt'>Online business solution</h2>
                    <p className='excel'>If you have an online business, we use the best technologies for your platform which is completely in sync with the user
                      requirements.</p>

                  </Col>

                </Row>

                <Row>
                  <Col xs={12} md={6} lg={4} >

                    <h2 className='developmentt'>Flexibility in the use of technology</h2>

                    <p className='excel'>Our team of experts adapts to your integration and customization needs.
                      We are open to working with different technologies according to your company's needs.</p>
                  </Col>
                  <Col xs={12} md={6} lg={4} >

                    <h2 className='developmentt'>Website optimization</h2>
                    <p className='excel'>We ensure that our designed websites are optimized for all devices. </p>

                  </Col>
                  <Col xs={12} md={6} lg={4} >

                    <h2 className='developmentt'>Extend the functionalities</h2>
                    <p className='excel'>We not only design your project according to your needs but also add value by extending
                      the existing functions and features. This leads to great impact on the growth of your business.</p>

                  </Col>

                </Row>
             
            </Col>
            </div>
          </Row>





        </div>


        <div className='chooseus'>
          <Row >

            <Col xs={12} md={6} lg={8} >
              <div className='Whyshould'>
                <h1>Why should you choose us?</h1>
                <p>We pride ourselves on developing enterprise web services and small business solutions to meet your specific needs. Smart choices of latest technologies and implementation of standardized coding frameworks help us ensure that our web development processes and solutions are scalable and future-proof, improving the user experience. The result is always powerful software for the world. Our 10+
                  years of combined expertise in web design and web development for businesses large and small sets us apart.</p>
                <ul>
                  <li>Adopt the best techniques and procedures to offer practical web solutions as per customer requirements</li>
                  <li>Ensures smooth user experience regardless of device</li>
                  <li>After an extensive work methodology</li>
                  <li>Ensuring the security of the website against any cyber / virus attacks</li>


                </ul>


              </div>
            </Col>
            <Col xs={12} md={6} lg={4} >
              <div className='methodology'>
                <img src={uiuxx} width={'310'} height={'300'} alt="LOGO-3@3x.png" className="methodology" />

              </div>
            </Col>

          </Row>
        </div>




        <div className='methodo'>
          <Row >

            <Col xs={12} md={6} lg={12} >
              <div className='methodologyy'>
                <h1>Development methodology</h1>
                <ul>
                  <li>Identify business goals, target market and customer analysis</li>
                  <li>Develop a strategy</li>
                  <li>Develop a customer-centric user interface and develop content</li>
                  <li>Build the front and back of the website</li>
                  <li>Check for errors on the website and then seek approval from the client</li>


                </ul>
                <Row>
                  <Col xs={12} md={6} lg={4} >
                    <h1>1.</h1>
                    <h2 className='developmentt'>Technical analysis</h2>

                    <p className='excel'>– We create a detailed understanding of the business goals and objectives
                      – Assess the situation
                      – Understand the target market and competitive landscape
                      – Clarify all doubts and questions
                      – Understand and document the customers' design and brand preferences</p>
                  </Col>
                  <Col xs={12} md={6} lg={4} >
                  <h1>2.</h1>

                    <h2 className='developmentt'>Plan</h2>
                    <p className='excel'>– Define the project plan
– Define design and brand guidelines for the project
– We help you develop a content strategy for web development
– ​​We help you with a user acquisition strategy</p>

                  </Col>
                  <Col xs={12} md={6} lg={4} >
                  <h1>3.</h1>

                    <h2 className='developmentt'>IA, web design + copywriting</h2>
                    <p className='excel'>-We create your company brand
– Start designing the UI on the approved wireframes making it completely customer centric –
Mobile, tablet, web specific designs
– Get all UI designs approved and confirmed by the client</p>

                  </Col>

                </Row>

                <Row>
                  <Col xs={12} md={6} lg={4} >
                  <h1>4.</h1>

                    <h2 className='developmentt'>Front-end and Back-End coding</h2>

                    <p className='excel'>– We build your website front-end to match the beautiful designs we have created
– Creates an intuitive backend that you can easily manage
– Will satisfy the requirement of web services and API development integration
– We create an optimized code structure
– Set a 2- 3 week frequency for milestones / sprints and involve client review in each sprint</p>
                  </Col>
                  <Col xs={12} md={6} lg={4} >
                  <h1>5.</h1>

                    <h2 className='developmentt'>QA and Launch</h2>
                    <p className='excel'>– Each milestone / sprint is manually tested
– Bugs are reported and added to the product backlog
– Quality release is provided and then final demo of the sprint is sent to the client for approval
– Regression testing after each sprint to ensure that the previously approved sprints are working correctly </p>

                  </Col>
                  <Col xs={12} md={6} lg={4} >
                  <h1>6.</h1>

                    <h2 className='developmentt'>Ecommerce SHOPIFY-store development</h2>
                    <p className='excel'>We not only design your project according to your needs but also add value by extending
                      the existing functions and features. This leads to great impact on the growth of your business.</p>

                  </Col>

                </Row>
              </div>
            </Col>

          </Row>





        </div>





        <div className='signup-form'>
          <Row>
            <Col xs={12} md={6} lg={6} >
              <Form>
                <h1 className='contactus'>Contact Us</h1>
                <div className='formmenu'>
                  <FormGroup>
                    <Input type="name" name="name" id="exampleName" placeholder="Your name" />
                  </FormGroup>
                  <FormGroup>
                    <Input type="email" name="email" id="examplePassword" placeholder="Your email" />
                  </FormGroup>

                  <FormGroup>
                    <Input type="subject" name="subject" id="exampleSubject" placeholder="Subject" />
                  </FormGroup>
                  <FormGroup>
                <Input type="textarea" name="text" id="exampleText" className='msgbox' placeholder="Write your message here" />

              </FormGroup>
                  <Button className='sumitbtn'>Send Message</Button>
                </div>

              </Form>
            </Col>
            <Col xs={12} md={6} lg={6} >
            <div className='emailfom'>
                <img src={location} width={'50'} height={'50'} alt="LOGO-3@3x.png" className="location-img" />

                <p>vintrosagatan 54 lgh 1804, 12474 Stockholm, Sweden</p>
                <img src={maill} width={'40'} height={'50'} alt="LOGO-3@3x.png" className="location-img" />


                <p>sumroozzia1@gmail.com</p>
                <img src={PHONE} width={'50'} height={'50'} alt="LOGO-3@3x.png" className="location-img" />

                <p>+46 72 774 53 80</p>
              </div>
            </Col>
        
          </Row>

        </div>

      </div>

    );
  }
}