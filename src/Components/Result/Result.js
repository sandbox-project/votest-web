import React, {Component} from "react";
import {Button, Container, Row, Col} from 'reactstrap';
import io from 'socket.io-client'
import Chart from '../Chart';
import './Result.css'

const socketUrl = 'http://localhost:8000/';
const baseURL = "http://localhost:8000/api/v1";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      type: '',
      data: [],
      answers: [],
      labels: [],
      chartData: {},
      socket: null,
      myID: ''
    }
  }


  initSocket = () => {
    const socket = io(socketUrl)
    socket.on('connect', () => {
      console.log("Connected to socket!")
    })
    this.setState({socket})
  }

  componentWillMount() {
    this.getChartData();
    this.initSocket();
  }

  componentDidMount() {
    const {socket} = this.state
    socket.on('update', (data) => {
      console.log(data);

      let newData = [];
      for (let key in data) {
        newData.push(data[key].counter)
      }
      this.setState({
        question: this.state.question,
        answers: this.state.answers,
        chartData: {
          type: this.state.type,
          labels: this.state.labels,
          datasets: [
            {
              label: 'Опитування',
              data: newData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
              ]
            }
          ]
        }
      })
      console.log("ddaset", this.state.chartData.datasets[0].data);
    })

  }

  putButtonVote(id) {
    fetch(`${baseURL}/poll/${this.props.answerID}/${id}`, { // ${this.props.history.location.id}/${id} 971-991
      method: 'put',
      mode: 'CORS',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        const {socket} = this.state
        socket.emit('vote');
      }).then(() => console.log('created!!!'))
      .catch(err => err);

  }

  getChartData = () => {

    fetch(`${baseURL}/poll/${this.props.answerID}`) //${this.props.history.location.id}
      .then(response => response.json())
      .then(data => {
        data = data.response;
        console.log("data", data)
        let arr = []
        let label = []
        let arrData = []
        for (let key in data.answers) {
          arr.push(data.answers[key])
        }
        ;

        for (let key in data.answers) {
          label.push(data.answers[key].answer)
        }
        ;
        for (let key in data.answers) {
          arrData.push(data.answers[key].counter)
        }
        ;

        this.setState({
          type: data.type,
          labels: label,
          question: data.question,
          answers: arr,
          chartData: {
            type: data.type,
            labels: label,
            datasets: [
              {
                label: 'Опитування',
                data: arrData,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
          }
        })
        const {socket} = this.state
        socket.emit('join', {room: this.props.answerID});
      })
  }


  /*componentDidMount() {

      fetch(`http://localhost:8000/api/poll/895-159`) //${this.props.history.location.id}
          .then(response => response.json())
          .then(data => {
              data = data.response;
              console.log("data", data)
              let arr = []
              let label = []

              for (let key in data.answers) {
                  arr.push(data.answers[key])
              };

              for (let key in data.answers) {
                  label.push(data.answers[key].answer)
              };

              this.setState(prevState => ({
                  question: data.question,
                  type: data.type,
                  answers: arr,
                  data: {
                      ...prevState.data,
                      labels: label
                  },
              }
              ))

              console.log('st', this.state.data)
          })
  }
*/
  render() {
    let buttons = this.state.answers.map((currElement, index) => (

      <span key={index} className="ResultButtonsRender">
                <Button onClick={() => this.putButtonVote(`ans${index}`)}
                        color="secondary">{currElement.answer}</Button>
            </span>
    ))

    return (
      <div className="PollComponent">

        <Container>
          <Row>
            <Col xs="3" md="3"/>
            <Col xs="6" sm="6">
              <div className="MainInformation">
                <h2 className="h2Content">{this.state.question}</h2>
              </div>
              <div className="ResultContent">
                {buttons}
              </div>

            </Col>
            <Col xs="3" md="3"/>
          </Row>
          <Row>
            <Col xs="2" md="2"/>
            <Col xs="8" md="8">
              <Chart className="ResultContent" chartData={this.state.chartData} location="Massachusetts"
                     legendPosition="bottom"/>
            </Col>
            <Col xs="2" md="2"/>
          </Row>
        </Container>

      </div>
    );
  }
}

export default Result;
