import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from 'react';
import {
  CardImg, Row, Col, TabContent, TabPane, CardText, Nav, NavItem, NavLink, CardBody,
  CardTitle, CardSubtitle, Button, Container,
} from 'reactstrap';
import dream from '../../images/SlIdE1.jpg';
import WEbSLID from '../../images/sliderWEB.png';
import Third from '../../images/BE.png';
import SEEALL from '../../images/SEEALL.jpg';
import PRO from '../../images/wordpress/pmad.png';
import WSL from '../../images/wordpress/wsl.png';
import hlf from '../../images/wordpress/hlf.png';
import port from '../../images/wordpress/theport2.png';
import open from '../../images/wordpress/osiwa.png';
import KLICK from '../../images/wordpress/klic.png';
import neptune from '../../images/wordpress/nup2.png';
import BIO from '../../images/wordpress/bio.png';
import phone from '../../images/phoneIMG.png';
import CALL from '../../images/callcenter.png';
import CLoude from '../../images/cloude.png';
import anyapp from '../../images/anyapp.png';


import MoTTO from '../../images/MitTo.png';
import Pom from '../../images/Pom.png';
import KIng from '../../images/KIng.png';
import Hight from '../../images/hIGht.png';


import status from '../../images/shOPIFY/Screenshot_1.png';
import kplaN from '../../images/shOPIFY/k1.png';
import django from '../../images/shOPIFY/jd2.png';
import SIXice from '../../images/shOPIFY/6i1.png';
import GrAND from '../../images/shOPIFY/gv1.png';
import mOXIE from '../../images/shOPIFY/moXIE.png';
import avaLan from '../../images/shOPIFY/AVAlAnC.png';


import TEn from '../../images/Ten.png';





import classnames from 'classnames';
import './style.css';
import { Card, Form } from 'react-bootstrap';
import { Phone } from 'react-bootstrap-icons';
class Home extends Component {
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
      <div className='slidermain'>
        <Carousel>
          <Carousel.Item>
            <CardImg top width="100%" height={500} src={dream} alt="Card image cap" />

            <Carousel.Caption>
              <div className='WebDevelopment' >

                <h1>Web Development</h1>
                <p>Since our establishment, we have been delivering high-quality
                  and sustainable<br /> software solutions for corporate purposes of worldwide businesses.</p>
              </div>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>

            <CardImg top width="100%" height={500} src={Third} alt="Card image cap" />

            <Carousel.Caption >
              <div className='oneslide' >

                <h1>Experienced Team</h1>
                <p>We are a team of qualified software developers, aimed at creating
                  unique <br />and powerful tools for your business & everyday life.</p>
              </div>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='oneslide' >
              <CardImg top width="100%" height={500} src={WEbSLID} alt="Card image cap" />

              <Carousel.Caption>
                <h1>E-commerce Store Expert</h1>
                <p>
                  Showcase your products in a graceful and charming display, transforming<br /> the shopping experience into an elegant journey.
                </p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>

        <Container>
          <div className='seeall'>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <Card>
                  <CardImg width="20%" height={600} src={SEEALL} alt="Card image cap" />

                </Card>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <Row>
                  <Col xs={12} md={6} lg={6}>
                    <div className='CARDSETTING'>
                      <Card>
                        <CardBody>
                          <CardTitle className='sEEALL'>See All Services</CardTitle><hr />
                          <Button className='Allservices'>All Services</Button>
                        </CardBody>
                      </Card>
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={6}>
                    <div className='Solution'>
                      <Card>
                        <CardBody>
                          <CardImg className='phonecaLL' src={phone} alt="Card image cap" />
                          <CardTitle>CORPORATE SOLUTIONS</CardTitle><hr />
                          <CardSubtitle>Need specific software for your company? We are ready to develop it!</CardSubtitle>

                        </CardBody>
                      </Card>
                    </div>
                  </Col>


                </Row>

                <Row>
                  <Col xs={12} md={6} lg={6}>
                    <div className='CENSolution'>

                      <Card>
                        <CardBody>
                          <CardImg className='phonecaLL' src={CALL} alt="Card image cap" />
                          <CardTitle>CALL CENTER SOLUTIONS</CardTitle>
                          <CardSubtitle>Our experts provide custom products of any complexity for call centers.!</CardSubtitle>

                        </CardBody>
                      </Card>
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={6}>
                    <div className='CENSolution'>

                      <Card>
                        <CardBody>
                          <CardImg className='phonecaLL' src={CLoude} alt="Card image cap" />
                          <CardTitle>CLOUD DEVELOPMENT</CardTitle>
                          <CardSubtitle>We can also offer you reliable cloud development solutions.!</CardSubtitle>

                        </CardBody>
                      </Card>
                    </div>
                  </Col>

                </Row>

              </Col>
            </Row>
          </div>
        </Container>
        <Container>
          <div className='Projects'>
            <h1>Latest Projects</h1>
            <p>In our portfolio, you can browse the latest products developed for our clients for different corporate purposes. Our qualified team of interface designers
              and software developers is always ready to create something unique for you.</p>
          </div>
          <div>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  All
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  Web
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                  CMS-DEVELOPMENT
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '4' })}
                  onClick={() => { this.toggle('4'); }}
                >
                  SHOPIFY-ExperT
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col xs={12} md={6} lg={4}>

                    <Card>
                      <CardImg top width={100} height={400} src={PRO} alt="Card image cap" />
                      <CardBody className='CARDUPERTEXT'>
                        <CardTitle>www.pmad.com</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>

                      </CardBody>
                    </Card>
                  </Col>

                  <Col xs={12} md={6} lg={4}>

                    <Card>
                      <CardImg top width={100} height={400} src={WSL} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>www.washingtonlandscapeservices.com</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs={12} md={6} lg={4}>

                    <Card>
                      <CardImg top width={100} height={400} src={hlf} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>hlf.dreamhosters.com</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>

                      </CardBody>
                    </Card>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={6} lg={4}>

                    <Card>
                      <CardImg top width={100} height={400} src={port} alt="Card image cap" />
                      <CardBody className='CARDUPERTEXT'>
                        <CardTitle>theportbox.com</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>

                      </CardBody>
                    </Card>
                  </Col>

                  <Col xs={12} md={6} lg={4}>

                    <Card>
                      <CardImg top width={100} height={400} src={WSL} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>www.washingtonlandscapeservices.com</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs={12} md={6} lg={4}>

                    <Card>
                      <CardImg top width={100} height={400} src={open} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>www.opensocietyfoundations.org</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>

                      </CardBody>
                    </Card>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={6} lg={4}>

                    <Card>
                      <CardImg top width={100} height={400} src={KLICK} alt="Card image cap" />
                      <CardBody className='CARDUPERTEXT'>
                        <CardTitle>www.klickx.co</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>

                      </CardBody>
                    </Card>
                  </Col>

                  <Col xs={12} md={6} lg={4}>

                    <Card>
                      <CardImg top width={100} height={400} src={neptune} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>www.neptunewellness.com</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs={12} md={6} lg={4}>

                    <Card>
                      <CardImg top width={100} height={400} src={BIO} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>www.biotechrecruitersgroup.com</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>

                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="6">
                    <Card>
                      <CardImg top width={100} height={300} src={BIO} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>www.biotechrecruitersgroup.com</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>

                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card>
                      <CardImg top width={100} height={300} src={neptune} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>www.neptunewellness.com</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col sm="6">
                    <Card>
                      <CardImg top width={100} height={300} src={KLICK} alt="Card image cap" />
                      <CardBody className='CARDUPERTEXT'>
                        <CardTitle>www.klickx.co</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>

                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card>
                      <CardImg top width={100} height={300} src={open} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>www.opensocietyfoundations.org</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>

                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col sm="6">
                    <Card>
                      <CardImg top width={100} height={400} src={mOXIE} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>www.moxie.pk</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card>
                      <CardImg top width={100} height={400} src={port} alt="Card image cap" />
                      <CardBody className='CARDUPERTEXT'>
                        <CardTitle>theportbox.com</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>

                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col sm="6">
                    <Card>
                      <CardImg top width={100} height={400} src={open} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>www.opensocietyfoundations.org</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>

                      </CardBody>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card>
                      <CardImg top width={100} height={400} src={WSL} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>www.washingtonlandscapeservices.com</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <TabPane tabId="1">
                  <Row>
                    <Col xs={12} md={6} lg={4}>

                      <Card>
                        <CardImg top width={100} height={400} src={PRO} alt="Card image cap" />
                        <CardBody className='CARDUPERTEXT'>
                          <CardTitle>www.pmad.com</CardTitle>
                          <CardText>We work hard on every app to deliver top-notch
                            features with great UI that you won’t find anywhere else.</CardText>

                        </CardBody>
                      </Card>
                    </Col>

                    <Col xs={12} md={6} lg={4}>

                      <Card>
                        <CardImg top width={100} height={400} src={WSL} alt="Card image cap" />
                        <CardBody>
                          <CardTitle>www.washingtonlandscapeservices.com</CardTitle>
                          <CardText>We work hard on every app to deliver top-notch
                            features with great UI that you won’t find anywhere else.</CardText>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4}>

                      <Card>
                        <CardImg top width={100} height={400} src={hlf} alt="Card image cap" />
                        <CardBody>
                          <CardTitle>hlf.dreamhosters.com</CardTitle>
                          <CardText>We work hard on every app to deliver top-notch
                            features with great UI that you won’t find anywhere else.</CardText>

                        </CardBody>
                      </Card>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12} md={6} lg={4}>

                      <Card>
                        <CardImg top width={100} height={400} src={port} alt="Card image cap" />
                        <CardBody className='CARDUPERTEXT'>
                          <CardTitle>theportbox.com</CardTitle>
                          <CardText>We work hard on every app to deliver top-notch
                            features with great UI that you won’t find anywhere else.</CardText>

                        </CardBody>
                      </Card>
                    </Col>

                    <Col xs={12} md={6} lg={4}>

                      <Card>
                        <CardImg top width={100} height={400} src={WSL} alt="Card image cap" />
                        <CardBody>
                          <CardTitle>www.washingtonlandscapeservices.com</CardTitle>
                          <CardText>We work hard on every app to deliver top-notch
                            features with great UI that you won’t find anywhere else.</CardText>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4}>

                      <Card>
                        <CardImg top width={100} height={400} src={open} alt="Card image cap" />
                        <CardBody>
                          <CardTitle>www.opensocietyfoundations.org</CardTitle>
                          <CardText>We work hard on every app to deliver top-notch
                            features with great UI that you won’t find anywhere else.</CardText>

                        </CardBody>
                      </Card>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12} md={6} lg={4}>

                      <Card>
                        <CardImg top width={100} height={400} src={KLICK} alt="Card image cap" />
                        <CardBody className='CARDUPERTEXT'>
                          <CardTitle>www.klickx.co</CardTitle>
                          <CardText>We work hard on every app to deliver top-notch
                            features with great UI that you won’t find anywhere else.</CardText>

                        </CardBody>
                      </Card>
                    </Col>

                    <Col xs={12} md={6} lg={4}>

                      <Card>
                        <CardImg top width={100} height={400} src={neptune} alt="Card image cap" />
                        <CardBody>
                          <CardTitle>www.neptunewellness.com</CardTitle>
                          <CardText>We work hard on every app to deliver top-notch
                            features with great UI that you won’t find anywhere else.</CardText>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4}>

                      <Card>
                        <CardImg top width={100} height={400} src={BIO} alt="Card image cap" />
                        <CardBody>
                          <CardTitle>www.biotechrecruitersgroup.com</CardTitle>
                          <CardText>We work hard on every app to deliver top-notch
                            features with great UI that you won’t find anywhere else.</CardText>

                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
              </TabPane>
              <TabPane tabId="4">
                <Row>
                  <Col xs={12} md={6} lg={4}>

                    <Card>
                      <CardImg top width={100} height={400} src={status} alt="Card image cap" />
                      <CardBody className='CARDUPERTEXT'>
                        <CardTitle>statusjeweler.com</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>

                      </CardBody>
                    </Card>
                  </Col>

                  <Col xs={12} md={6} lg={4}>

                    <Card>
                      <CardImg top width={100} height={400} src={kplaN} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>www.kaplanmdskincare.co.uk</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs={12} md={6} lg={4}>

                    <Card>
                      <CardImg top width={100} height={400} src={django} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>johnnydangandco.com</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>

                      </CardBody>
                    </Card>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={6} lg={4}>

                    <Card>
                      <CardImg top width={100} height={400} src={SIXice} alt="Card image cap" />
                      <CardBody className='CARDUPERTEXT'>
                        <CardTitle>6ixice.com</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>

                      </CardBody>
                    </Card>
                  </Col>

                  <Col xs={12} md={6} lg={4}>

                    <Card>
                      <CardImg top width={100} height={400} src={GrAND} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>grandvideoke.com</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs={12} md={6} lg={4}>

                    <Card>
                      <CardImg top width={100} height={400} src={mOXIE} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>moxie.pk</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>

                      </CardBody>
                    </Card>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={6} lg={4}>

                    <Card>
                      <CardImg top width={100} height={400} src={avaLan} alt="Card image cap" />
                      <CardBody className='CARDUPERTEXT'>
                        <CardTitle>jewelryavalanche.com</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>

                      </CardBody>
                    </Card>
                  </Col>

                  <Col xs={12} md={6} lg={4}>

                    <Card>
                      <CardImg top width={100} height={400} src={neptune} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>www.neptunewellness.com</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs={12} md={6} lg={4}>

                    <Card>
                      <CardImg top width={100} height={400} src={BIO} alt="Card image cap" />
                      <CardBody>
                        <CardTitle>www.biotechrecruitersgroup.com</CardTitle>
                        <CardText>We work hard on every app to deliver top-notch
                          features with great UI that you won’t find anywhere else.</CardText>

                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>

            </TabContent>
          </div>
        </Container>

        <div className='yeArExPr'>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <CardImg top width={100} height={400} src={TEn} alt="Card image cap" />


            </Col>

            <Col xs={12} md={6} lg={4}>
              <div class="YEARoF" >
                <h3 class="title-decoration">Years of Experience</h3>
                <p class="TeXTDream">DreamSoft is a team of highly experienced app designers and developers creating unique software for you.</p>
                <a class="button button-secondary button-pipaluk" href="/" target="_blank">Get in touch</a>
              </div>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <div class="row justify-content-center border-2-column offset-top-xl-26">
                <div class="col-9 col-sm-6">
                  <div class="counter-amy">
                    <div class="counter-amy-number"><span class="counter animated-first">2</span><span class="symbol">k</span>
                    </div>
                    <h6 class="counter-amy-title">WebSite developed</h6>
                  </div>
                </div>
                <div class="col-9 col-sm-6">
                  <div class="counter-amy">
                    <div class="counter-amy-number"><span class="counter animated-first">40</span>
                    </div>
                    <h6 class="counter-amy-title">Consultants</h6>
                  </div>
                </div>
                <div class="col-9 col-sm-6">
                  <div class="counter-amy">
                    <div class="counter-amy-number"><span class="counter animated-first">12</span>
                    </div>
                    <h6 class="counter-amy-title">Awards won</h6>
                  </div>
                </div>
                <div class="col-9 col-sm-6">
                  <div class="counter-amy">
                    <div class="counter-amy-number"><span class="counter animated-first">160</span>
                    </div>
                    <h6 class="counter-amy-title">Employees</h6>
                  </div>
                </div>
              </div>

            </Col>
          </Row>
        </div>
        <Container>
          <div className='LOgoslide'>
            <Row>
              <Col xs={12} md={6} lg={3}>
                <CardImg top width={100} height={200} src={MoTTO} alt="Card image cap" />

              </Col>
              <Col xs={12} md={6} lg={3}>
                <CardImg top width={100} height={200} src={Pom} alt="Card image cap" />

              </Col>
              <Col xs={12} md={6} lg={3}>
                <CardImg top width={100} height={200} src={KIng} alt="Card image cap" />

              </Col>
              <Col xs={12} md={6} lg={3}>
                <CardImg top width={100} height={200} src={Hight} alt="Card image cap" />

              </Col>
            </Row>
          </div>
        </Container>

        <Container>
          <div className='meetteem'>
            <h1>Meet The Team</h1>
            <Row>
              <Col xs={12} md={6} lg={3}>
                <div className='production' alt="Card image cap" >
                  <div className='directrr'>
                    <h1>sumrooz_zia</h1>
                    <p>Director of Production</p>
                  </div>
                </div>

              </Col>
              <Col xs={12} md={6} lg={3}>
                <div className='JillPeterson' alt="Card image cap" >
                  <div className='directrr'>
                    <h1>Jill Peterson</h1>
                    <p>Director of Production</p>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <div className='Senior' alt="Card image cap" >
                  <div className='directrr'>
                    <h1>NumanRp
                    </h1>
                    <p>Senior Developer</p>
                  </div>
                </div>

              </Col>
              <Col xs={12} md={6} lg={3}>
                <div className='sam' alt="Card image cap" >
                  <div className='directrr'>
                    <h1>Sam Robinson</h1>
                    <p>Software Developer</p>
                  </div>
                </div>

              </Col>
            </Row>
          </div>
        </Container>  


        <Container>
          <div className='TIMELINE'>
            <Row>
             
              <Col xs={12} md={6} lg={6}>
                <div className='TABTIMELINE'  >
            <Nav tabsEE>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                1
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                2
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                3
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '4' })}
                  onClick={() => { this.toggle('4'); }}
                >
                 4
                </NavLink>
              </NavItem>
              <hr class="icon" />
            </Nav>
            <TabContent activeTab={this.state.activeTab}  className='FrraP'>
              <TabPane tabId="1">
             <h5>FREE APPS</h5>
             <p>We regularly upload new free apps to our website, 
              which is fully accessible to our clients and subscribers. 
              You can also find out about free apps in our blog.</p>
              </TabPane>
              <TabPane tabId="2">
              <h5>GET SOCIAL</h5>
             <p>
Every app we develop has built-in social support 
that allows you to stay connected to your accounts on Facebook,
 Instagram, Twitter and other networks.</p>           
                 
              </TabPane>
                
              <TabPane tabId="3">
              <h5>CUSTOMER SERVICE</h5>
             <p>
Every customer of DreamSoft can get access to our
 friendly and qualified 24/7 support via chat or phone.
  Feel free to ask us any questions!</p>
                                 
                 
              </TabPane>
              <TabPane tabId="4">
              <h5>GREAT USABILITY</h5>
             <p>
All our apps are designed to have great usability in order to easily operate our applications.
 That is why our software has high ratings and lots of awards.</p>      
                 
          
              </TabPane>
              <Button className='getintouch'>Get In Touch</Button>
              <Button className='preSenTAtIon'>Downloud presentation</Button>
            </TabContent>
          </div>

              </Col>
              <Col xs={12} md={6} lg={3}>
                <div className='anyapp' >
                <CardImg top width={50} height={430} src={anyapp} alt="Card image cap" />
                </div>

              </Col>
              <Col xs={12} md={6} lg={3}>
                <div className='anyapp' >
                <CardImg top width={50} height={430} src={anyapp} alt="Card image cap" />
                </div>

              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default Home;