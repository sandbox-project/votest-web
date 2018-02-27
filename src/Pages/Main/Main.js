import React, { Component } from 'react';
import ParticlesJS from '../../Components/ParticlesJS/ParticlesJS';
import Information from '../../Components/Information/Information';
import { Container, Row, Col } from 'reactstrap';


class Main extends Component {
  render() {
    return (
      <div className="Main">
        <ParticlesJS />
        <Container>
          <Row>
            <Col xs="3" md="3"/>
            <Col xs="6" md="6">
              <div>
                <Information />
              </div>
            </Col>
            <Col xs="3" md="3"/>
          </Row>
        </Container>
      </div>
    );

  }
}

export default Main;
