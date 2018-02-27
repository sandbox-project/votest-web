import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col, Table } from 'reactstrap';
import MainButton from '../../Components/Buttons/MainButton'
import './Admin.css'

const baseURL = "http://localhost:8000/api/v1";

class Admin extends Component {
  constructor(props){
    super(props)
      this.state = {
      dataOfPolls: [],
    }
  }

  componentDidMount() {
  fetch(baseURL)
    .then(response => response.json())
    .then(data => {
      console.log("data", data)

      let result = Object.keys(data).map(key => ({ key, value: data[key] }));
      this.setState ({
        dataOfPolls: result
      })
    })
  }

  render(){
    console.log("RES2", this.state.dataOfPolls)
    let arr =[]
    this.state.dataOfPolls.map((curr, index) => (
      arr.push(curr.value.answers)
    ))
    console.log("ffazz", arr)

    let index = 0
    for(let key in arr) {
      let i = index.toString()
      console.log("AAA", arr[key]['ans'+i].answer)
    }
    ++index


    let information = this.state.dataOfPolls.map((curr, index) => (
      <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{curr.value.question}</td>
        <td>{curr.value.type}</td>
        <td>{curr.value.timestamp}</td>
      </tr>
    ))


    return (
      <div className="Admin">
        <Container>
          <Row>
            <Col xs="2" md="2">
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
            <Col xs="10" md="10">
              <div className="MainInformation" style={{paddingTop: 40}}>
                <Table striped>
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>Запитання</th>
                    <th>Тип</th>
                    <th>Дата</th>
                  </tr>
                  </thead>
                  <tbody>
                  {information}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Admin;
