import React, { Component } from 'react';
import MainButton from '../../Components/Buttons/MainButton';
import {Link} from 'react-router-dom';
import ViewResult from '../../Components/ViewResult/ViewResult'
import {Container, Row, Col} from 'reactstrap';

class ViewPoll extends Component {
  constructor(props) {
    super(props);
    console.log("VIEW", this.props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="ViewPoll">
        <Container>
          <Row>
            <Col xs="3" md="3">
              <div className="Buttons">
                <div className="ButtonsMargin">
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <MainButton
                      styleOfGradient={{background: "linear-gradient(15deg,#48c6ef,#6f86d6)"}}
                      text={"Вернутись"}/>
                  </Link>
                </div>
              </div>
            </Col>
            <Col xs="6" md="6">
              <div className="MainInformation">
               <div style={{paddingTop: 30}}><h5>Ваш ID-код: {this.props.location.state}</h5></div>
              </div>
            </Col>
            <Col xs="3" md="3"/>
          </Row>
        </Container>
        <ViewResult answerID={this.props.location.state}/>
      </div>
    );
  }
}

export default ViewPoll;
