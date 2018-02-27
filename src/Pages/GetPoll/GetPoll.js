import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import MainButton from '../../Components/Buttons/MainButton';
import Search from '../../Components/Search/Search';
import Result from '../../Components/Result/Result';

import './GetPoll.css'

class GetPoll extends Component {
  constructor(props){
    super(props)
    this.state = {
      answID: '',
      st: false
    }
  }

  handleSearch(search) {
    this.setState(state => ({answID: search}))
    console.log("search:", search)
    console.log("searchID:", this.state.answID)
  }

  componentDidUpdate(prevProps, prevState) {
    const {answID} = this.state;
    if(answID !== prevState.answID){
      console.log('update scrollTop!', answID);
      this.setState({st: true})
    }
  }



  render() {
    let loading = null;
    if (this.state.st === false) {
      loading = null;
    } else {
      loading = <Result answerID={this.state.answID} render={this.state.st}/>;
    }

    return (
      <div className="GetPoll">
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
                <Search onSearch={this.handleSearch.bind(this)}/>
              </div>
            </Col>
            <Col xs="3" md="3"/>
          </Row>
        </Container>
        {loading}
      </div>
    );

  }
}

export default GetPoll;
