import React from 'react';
import { Container, Row, Col, ListGroupItem, ListGroup } from 'reactstrap';
import './style.css';



export default class Services extends React.Component {
  render() {
    return (
        <Container>
        <div className='TABINFO'>

          <h1 className='whatwe'>What we do</h1>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                Core Development Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                CMS WORDPRESS & SHOPIFY EXPERTS
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">

            <div body className='custiom'>

            <Row>
      <Col sm="6">
        <Card body>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-boxes" viewBox="0 0 16 16">
  <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"/>
</svg>
          <CardTitle >Custom Software Development</CardTitle>
          <CardText>We craft business-centric applications tailored for the
             specific needs of our clients and their industries.</CardText>
             <Button className='btncard'>Go To Projects</Button>

        </Card>
      </Col>

      <Col sm="6">
      

        <Card body>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-boxes" viewBox="0 0 16 16">
  <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z"/>
</svg>
          <CardTitle>Web App Development</CardTitle>
          <CardText>We deliver outstanding user experiences by transforming ideas into robust
             web development apps using Agile and state-of-art platforms.</CardText>
             <Button className='btncard'>Go To Projects</Button>

        </Card>
      
      </Col>
      
      <Col sm="6">
      <div className='custiom'>

        <Card body >
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-boxes" viewBox="0 0 16 16">
  <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z"/>
</svg>
          <CardTitle>CMS & Custom Wordpress Development</CardTitle>
          <CardText>We develop state-of-the art, customer driven and innovative web site with a strong focus on customer success.</CardText>
          <Button className='btncard'>Go To Projects</Button>

        </Card>
      </div>
        
      </Col>
      <Col sm="6">
      <div className='custiom'>

        <Card body >
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-boxes" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H9v-1h3a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM.706 13.189v2.66H0V11.85h.806l1.14 2.596h.026l1.14-2.596h.8v3.999h-.716v-2.66h-.038l-.946 2.159h-.516l-.952-2.16H.706Zm3.919 2.66V11.85h1.459c.406 0 .741.078 1.005.234.263.157.46.383.589.68.13.297.196.655.196 1.075 0 .422-.066.784-.196 1.084-.131.301-.33.53-.595.689-.264.158-.597.237-1 .237H4.626Zm1.353-3.354h-.562v2.707h.562c.186 0 .347-.028.484-.082a.8.8 0 0 0 .334-.252 1.14 1.14 0 0 0 .196-.422c.045-.168.067-.365.067-.592a2.1 2.1 0 0 0-.117-.753.89.89 0 0 0-.354-.454c-.159-.102-.362-.152-.61-.152Z"/>
</svg>
          <CardTitle>UI & UX Development</CardTitle>
          <CardText>We deliver outstanding user experiences by transforming ideas into robust web development apps using Agile and state-of-art platforms.</CardText>
          <Button className='btncard'>Go To Projects</Button>
         
        </Card>
        </div>
      </Col>
     
    
    </Row>
    </div>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="6">
                <div body className='custiom'>
                  <Card body>
                    <CardTitle>SHOPIFY Store Experts</CardTitle>
                    <CardText>We create ecommerce web applications which bridge physical and digital worlds for
                       automation, data collection and increased productivity.</CardText>
                       <Button className='btncard'>Go To Projects</Button>

                  </Card>
                  </div>
                </Col>
                <Col sm="6">
                <div body className='custiom'>

                  <Card body>
                    <CardTitle>CMS & Custom Wordpress Development</CardTitle>
                    <CardText>We deliver outstanding user experiences by transforming ideas into robust
             web development apps using Agile and state-of-art platforms.</CardText>
             <Button className='btncard'>Go To Projects</Button>

                  </Card>
                  </div>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>

        </Container>
//          <Container>
//          <div className='logoimgs'>
//  <h2 className='tecuse'>Using Technologies</h2>
//          <Row className='imgslider'>
//          <Col sm={3} lg={2}>
//            <a href="/Home" className='slideimg'>
//                  <img src={shopify} width={'150'} height={'100'} alt="LOGO-3@3x.png" className="LOGO-img" />
//                </a>
//            </Col>
//            <Col sm={3} lg={2}>
//            <a href="/Home" className='slideimg'>
//                  <img src={wordpress} width={'150'} height={'100'} alt="LOGO-3@3x.png" className="LOGO-img" />
//                </a>
//            </Col>
//            <Col sm={3} lg={2}>
//            <a href="/Home" className='slideimg'>
//                  <img src={web} width={'150'} height={'100'} alt="LOGO-3@3x.png" className="LOGO-img" />
//                </a>
//            </Col>
//            <Col sm={3} lg={2}>
//             <a href="/Home" className='slideimg'>
//                  <img src={boot} width={'150'} height={'100'} alt="LOGO-3@3x.png" className="LOGO-img" />
//                </a>
//            </Col>
//            <Col sm={3} lg={2}>
//            <a href="/Home" className='slideimg'>
//                  <img src={php} width={'150'} height={'100'} alt="LOGO-3@3x.png" className="LOGO-img" />
//                </a>
//            </Col>
          
//            <Col sm={3} lg={2}>
//            <a href="/Home" className='slideimg'>
//                  <img src={sql} width={'150'} height={'100'} alt="LOGO-3@3x.png" className="LOGO-img" />
//                </a>
//            </Col>
          
//          </Row>
//          </div>
//          </Container>
    );
  }
}