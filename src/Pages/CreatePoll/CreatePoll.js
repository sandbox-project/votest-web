import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'reactstrap';
import CreteForm from '../../Components/CreateForm/CreateForm'
import MainButton from '../../Components/Buttons/MainButton'

class CreatePoll extends Component {

  render() {

    return (
      <div className="CreatePoll">
        <Container>
          <Row>
            <Col xs="3" md="3">
              <div className="Buttons">
                <div className="ButtonsMargin">
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <MainButton
                      styleOfGradient={{background: "linear-gradient(15deg,#c79081,#dfa579)"}}
                      text={"Вернутись"}/>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs="6" md="6">
              <div className="MainInformation">
                <CreteForm/>
              </div>
            </Col>
            <Col xs="3" md="3">
            </Col>
          </Row>
        </Container>
      </div>
    );

  }
}

export default CreatePoll;
