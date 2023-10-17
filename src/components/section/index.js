
import React from 'react';
import {Form, FormGroup, Label, Input, FormText, Container, Row,CardImg,CardBody,CardSubtitle, NavLink, Col, TabContent, ListGroupItem, Button, TabPane, Card, CardTitle, CardText, } from 'reactstrap';
import classnames from 'classnames';
import location from '../../images/location.png';
import './allsection.css';
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
import leftimg from '../../images/develop-left.png';
import webkIT from '../../images/weBone.png';
import rightimg from '../../images/wee.png';
import UIUX from '../../images/UI&UX.png';
import SEO from '../../images/seo.png';
import seoup from '../../images/seoup.png';

import SHOPIY from '../../images/SHOPIFY&WORDPRES.png';
import line from '../../images/icons8-green-apple-48.png';
import check from '../../images/icons8-check-48.png';
import heart from '../../images/icons8-green-heart-48.png';
import maill from '../../images/maillll.png';
import designn from '../../images/designuiux.png';

export default class Home extends React.Component {
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


              <div className='InFOhoME'>
                <span>Website development</span>
                <h1> The creators of your<br/> web solutions</h1>
                <p>We fully understand our customers' requirements and ensure that businesses and small businesses are offered the best web services. Our web development methodology includes selection of advanced technologies and deployment of standardized code frameworks for building websites. This makes our development processes and solutions practical and futuristic which ultimately improves the user experience through robust software. The fact that our development team has more than 10 years of expertise in 
                  web design also makes us one of the leading web developers in Sweden.</p>
                  <Button color="green">Our latest work</Button>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>

            <div className='imagesecton'>
              <a href="/Home" className='sam_img'>
                <img src={leftimg} width={'150'} height={'250'} alt="LOGO-3@3x.png" className="LoodOGO-img" />

              </a>
              </div>
            </Col>
           
            <Col xs={12} md={6} lg={3}>

<div className='imagesecton'>
  <a href="/Home" className='sam_img'>
    <img src={rightimg} width={'250'} height={'250'} alt="LOGO-3@3x.png" className="weddevc-img" />

  </a>
  </div>
</Col>


          </Row>
        </div>
        </Container>




        <div className='ABOUTSEC'>
          <Row className='aBotinFo'>
            <Col sm='12' md='12' lg='12'>
              <div className='aboutme'>
                <h1>Pricing</h1>
                <p>I offers unbeatable price packages for its customers in Sweden.<br/>
Our hourly price starts from SEK 399 (excl. VAT).</p>
              </div>
            </Col>
          </Row>
        </div>

        <div className='projec'>
        <h2>Services</h2>

          <Row >
            <Col xs={12} md={6} lg={3} >
              <div className='satiSFY'>
              <Card className='dEAILPRO'>
        <CardImg top width={50} height={150} src={webkIT} alt="Card image cap" className='CARDIMG' />
        <CardBody>
          <CardTitle className='heding'>Web development</CardTitle>
          <CardSubtitle className='heading'>Complete Website Package from </CardSubtitle>
          <CardText className='prising'> SEK 899</CardText>
          <Button className='devement'>See latest work</Button>
        </CardBody>
      </Card>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3} >
              <div className='satiSFY'>
              <Card className='dEAILPRO'>
        <CardImg top width={50} height={150} src={UIUX} alt="Card image cap" className='CARDIMG' />
        <CardBody>
          <CardTitle className='heding'>UI / UX Design</CardTitle>
          <CardSubtitle className='heading'>Complete Website Package from </CardSubtitle>
          <CardText className='prising'> SEK 3999</CardText>
          <Button className='devement'>See latest work</Button>
        </CardBody>
      </Card>
              </div>
            </Col>

            <Col xs={12} md={6} lg={3} >
              <div className='satiSFY'>
              <Card className='dEAILPRO'>
        <CardImg top width={50} height={150} src={SEO} alt="Card image cap" className='CARDIMG' />
        <CardBody>
          <CardTitle className='heding'>SEO</CardTitle>
          <CardSubtitle className='heading'>Complete Website Package from </CardSubtitle>
          <CardText className='prising'> SEK 500</CardText>
          <Button className='devement'>See latest work</Button>
        </CardBody>
      </Card>
              </div>
            </Col>

            <Col xs={12} md={6} lg={3} >
              <div className='satiSFY'>
              <Card className='dEAILPRO'>
        <CardImg top width={50} height={150} src={SHOPIY} alt="Card image cap" className='CARDIMG' />
        <CardBody>
          <CardTitle className='heding'>SHOPIFY Store & WORDPRESS(CMS)</CardTitle>
          <CardSubtitle className='heading'>Complete Website Package from </CardSubtitle>
          <CardText className='prising'> SEK 5999</CardText>
          <Button className='devement'>See latest work</Button>
        </CardBody>
      </Card>
              </div>
            </Col>


          </Row>
        </div>

          <div className='projec'>
            <Row >
              <Col xs={12} md={6} lg={3} >
                <div className='Agilecolor'>
                <img src={human} width={'300'} height={'400'} alt="LOGO-3@3x.png" className="trangleimages" />
                 
                </div>
              </Col>
              <Col xs={12} md={6} lg={9} >
                <div className='Agiledetails'>
               <p>Let us show you some statistics</p>
               <h1> We've been doing amazing<br/> things in the last few months.</h1>
               <Row>
              <Col xs={12} md={6} lg={4} >
              <img src={heart} width={'60'} height={'60'} alt="LOGO-3@3x.png" className="lineofcode" />

              <h2 className='linecode'>20+</h2>

              <p className='happyc'>Happy customers</p>
                 </Col>
                 <Col xs={12} md={6} lg={4} >
                <img src={line} width={'60'} height={'60'} alt="LOGO-3@3x.png" className="lineofcode" />
                  
                  <h2 className='linecode'>200000+</h2>
               <p className='happyc'>Lines of code</p>
                
                </Col>
                <Col xs={12} md={6} lg={4} >
                <img src={check} width={'60'} height={'60'} alt="LOGO-3@3x.png" className="lineofcode" />

                <h2 className='linecode'>205+</h2>
              <p className='happyc'>Projects completed</p>
                
                </Col>
               </Row>
                </div>
              </Col>

            </Row>
          </div>


          <div className='UIUXDesign'>
            <Row >
             
              <Col xs={12} md={6} lg={6} >
                <div className='UIUXDesigndetails'>
               <h5>Provides cutting-edge designs</h5>
               <h1> UI/UX Design</h1>
               <p>We have a comprehensive mechanism for designing UI / UX Design that ranges from conducting UI / UX research, formulating plans and wireframes to design samples, digital graphics and eventually design development systems. Our working philosophy of efficient processes, continuous transfer and effective partnership is the key to successful UI / UX design. All our team members
                 work together in one location which is a great advantage for our customers.</p>
          <Button className='readmore'>Read more</Button>
              
                </div>
              </Col>
              <Col xs={12} md={6} lg={2} >
                <div className='Agilecolor'>
                </div>
                </Col>
              <Col xs={12} md={6} lg={2} >
                <div className='Agilecolor'>
                <img src={uiuxx} width={'300'} height={'300'} alt="LOGO-3@3x.png" className="uixudeg" />
                 
                </div>
              </Col>
             
              <Col xs={12} md={6} lg={2} >
                <div className='Agilecolor'>
                </div>
                </Col>
            </Row>
          </div>



        <Container>
          <div className=' OURValues'>
            <h1>Our Values</h1>
            <Row >
              <Col xs={12} md={6} lg={6} >
                <div className='Values'>
                  <Card body>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-rocket" viewBox="0 0 16 16">
                      <path d="M8 8c.828 0 1.5-.895 1.5-2S8.828 4 8 4s-1.5.895-1.5 2S7.172 8 8 8Z" />
                      <path d="M11.953 8.81c-.195-3.388-.968-5.507-1.777-6.819C9.707 1.233 9.23.751 8.857.454a3.495 3.495 0 0 0-.463-.315A2.19 2.19 0 0 0 8.25.064.546.546 0 0 0 8 0a.549.549 0 0 0-.266.073 2.312 2.312 0 0 0-.142.08 3.67 3.67 0 0 0-.459.33c-.37.308-.844.803-1.31 1.57-.805 1.322-1.577 3.433-1.774 6.756l-1.497 1.826-.004.005A2.5 2.5 0 0 0 2 12.202V15.5a.5.5 0 0 0 .9.3l1.125-1.5c.166-.222.42-.4.752-.57.214-.108.414-.192.625-.281l.198-.084c.7.428 1.55.635 2.4.635.85 0 1.7-.207 2.4-.635.067.03.132.056.196.083.213.09.413.174.627.282.332.17.586.348.752.57l1.125 1.5a.5.5 0 0 0 .9-.3v-3.298a2.5 2.5 0 0 0-.548-1.562l-1.499-1.83ZM12 10.445v.055c0 .866-.284 1.585-.75 2.14.146.064.292.13.425.199.39.197.8.46 1.1.86L13 14v-1.798a1.5 1.5 0 0 0-.327-.935L12 10.445ZM4.75 12.64C4.284 12.085 4 11.366 4 10.5v-.054l-.673.82a1.5 1.5 0 0 0-.327.936V14l.225-.3c.3-.4.71-.664 1.1-.861.133-.068.279-.135.425-.199ZM8.009 1.073c.063.04.14.094.226.163.284.226.683.621 1.09 1.28C10.137 3.836 11 6.237 11 10.5c0 .858-.374 1.48-.943 1.893C9.517 12.786 8.781 13 8 13c-.781 0-1.517-.214-2.057-.607C5.373 11.979 5 11.358 5 10.5c0-4.182.86-6.586 1.677-7.928.409-.67.81-1.082 1.096-1.32.09-.076.17-.135.236-.18Z" />
                      <path d="M9.479 14.361c-.48.093-.98.139-1.479.139-.5 0-.999-.046-1.479-.139L7.6 15.8a.5.5 0 0 0 .8 0l1.079-1.439Z" />
                    </svg>
                    <CardTitle>Responsibility</CardTitle>
                    <CardText>Recognizing that our work impacts our client's profitability and
                      sustainability we honor commitments with extreme care.</CardText>

                  </Card>
                </div>
              </Col>
              <Col xs={12} md={6} lg={6} >
                <div className='Values'>
                  <Card body>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-diagram-3" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
                    </svg>
                    <CardTitle>Team Spirit</CardTitle>
                    <CardText>We listen, trust and help each other and treat our clients
                      as part of our team.</CardText>

                  </Card>
                </div>
              </Col>
              <Col xs={12} md={6} lg={6} >
                <div className='ambititu'>
                  <Card body>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-chat-left-heart" viewBox="0 0 16 16">
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12ZM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z" />
                      <path d="M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                    </svg>
                    <CardTitle>Ambition</CardTitle>
                    <CardText>We strive to stay at
                      the forefront of digital innovation and continuously improve.</CardText>

                  </Card>
                </div>
              </Col>

              <Col xs={12} md={6} lg={6} >
                <div className='ambititu'>
                  <Card body>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
                      <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                    </svg>
                    <CardTitle>Drive</CardTitle>
                    <CardText>We look at each project and challenge as an opportunity
                      to grow with a relentless drive to deliver our promised results.</CardText>

                  </Card>
                </div>
              </Col>
            </Row>
          </div>
        </Container>


        <div className='seoDesign'>
            <Row >
             
            {/* <Col xs={12} md={6} lg={3} >
                <div className='seoocolor'>
                <img src={SEO} width={'350'} height={'400'} alt="LOGO-3@3x.png" className="seccondseo" />
                 
                </div>
                </Col> */}
              <Col xs={12} md={6} lg={6} >
                <div className='seocolor'>
                <img src={seoup} width={'300'} height={'300'} alt="LOGO-3@3x.png" className="seodeg" />
                 
                </div>
              </Col>
             
           

                <Col xs={12} md={6} lg={6} >
                <div className='seoDesigndetails'>
               <h5>The best SEO services in all of Sweden</h5>
               <h1> Search Engine Optimization</h1>
               <p>Search Engine Optimization (SEO) is considered the largest search engine globally. This is evident from the fact that 50 million searches take place in Sweden alone every day. We are a complete search engine optimization (SEO) company that facilitates better ranking and improved sales. An SEO company should be hired so that the company appears on top of the search engines. Our services include website optimization, which increases relevant traffic which will lead to more customers buying. Search engine optimization works in different ways to make the domain strong and also convey algorithms for search engines to know what the website has. Every company has a different search engine optimization (SEO) strategy and there are different standards that one should adopt to improve search results.
                 Our company always makes the experience smooth for website visitors.</p>
          <Button className='readmore'>Read more</Button>
              
                </div>
              </Col>
            </Row>
          </div>



        <div className='whychose'>
          <Row>

            <Col xs={12} md={6} lg={6} >
              {/* <a href="/Home" className='choose'>
                <img src={BNANne}  width={'300'} height={'300'} alt="LOGO-3@3x.png" className="LOGO-img" />
              </a> */}
            </Col>

            <Col xs={12} md={6} lg={6} >
              <h1 className='why'>Why Choose Us</h1>
              {/* <ListGroup> */}

              <ListGroupItem className='listitam'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312V4.002Z" />
                </svg>
                We put a dedicated team for each client</ListGroupItem>
              <ListGroupItem className='listitam'>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-2-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" />
                </svg>
                We can get your first working demo to you as soon as 7 days from the project kick-off</ListGroupItem>
              <ListGroupItem className='listitam'>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-3-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
                </svg>
                Our certified Scrum Masters ensure the efficiency & transparency of the team's work</ListGroupItem>
              <ListGroupItem className='listitam'>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-4-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM7.519 5.057c-.886 1.418-1.772 2.838-2.542 4.265v1.12H8.85V12h1.26v-1.559h1.007V9.334H10.11V4.002H8.176c-.218.352-.438.703-.657 1.055ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z" />
                </svg>
                We are obsessed with getting your project live when expected, and within your estimated budget</ListGroupItem>
              <ListGroupItem className='listitam'>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-5-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.006 4.158c1.74 0 2.924-1.119 2.924-2.806 0-1.641-1.178-2.584-2.56-2.584-.897 0-1.442.421-1.612.68h-.064l.193-2.344h3.621V4.002H5.791L5.445 8.63h1.149c.193-.358.668-.809 1.435-.809.85 0 1.582.604 1.582 1.57 0 1.085-.779 1.682-1.57 1.682-.697 0-1.389-.31-1.53-1.031H5.276c.065 1.213 1.149 2.115 2.72 2.115Z" />
                </svg>
                We are not just developers but can also advise you on launching and scaling your tech ideas and businesses</ListGroupItem>
              {/* </ListGroup> */}
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
  <Input type="textarea" name="text" id="exampleText"  className='msgbox' placeholder="Write your message here" />

        </FormGroup>
        <Button className='sumitbtn'>Send Message</Button>
        </div>

      </Form> 
  </Col>
  <Col xs={12} md={6} lg={1} >
 
  </Col>
  <Col xs={12} md={6} lg={5} >
    <div className='emailfom'>
    <img src={location} width={'50'} height={'50'} alt="LOGO-3@3x.png" className="location-img" />

<p>vintrosagatan 54 lgh 1804, 12474 Stockholm, Sweden</p>
<img src={maill} width={'40'} height={'40'} alt="LOGO-3@3x.png" className="location-img" />


<p>sumroozzia1@gmail.com</p>
<img src={PHONE} width={'50'} height={'40'} alt="LOGO-3@3x.png" className="location-img" />

<p>+46 72 774 53 80</p>
</div>
  </Col>
  {/* <Col xs={12} md={6} lg={3} >
  <img src={bluu} width={'200'} height={'300'} alt="LOGO-3@3x.png" className="blue-img" />

  </Col> */}
</Row>
   
</div>

      </div>

    );
  }
}