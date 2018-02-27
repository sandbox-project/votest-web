import React, { Component } from 'react';
import MainButton from '../Buttons/MainButton';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './CreateForm.css';

const baseURL = "http://localhost:8000/api/v1";

class CreateForm extends Component {

  // const "#444444"

  constructor(props) {
    super(props)
    this.state = {
      question: '',
      answers: [{name: ''}],
      type: '',
      // newID: ''
    }

  }



  handleNameChange = (evt) => {
    this.setState({question: evt.target.value});
  }

  handleShareholderNameChange = (idx) => (evt) => {
    const newAnswers = this.state.answers.map((answer, sidx) => {
      if (idx !== sidx) return answer;
      return {...answer, name: evt.target.value};
    });

    this.setState({answers: newAnswers});
    console.log('ANSW', newAnswers)
  }


  handleAddShareholder = () => {
    this.setState({answers: this.state.answers.concat([{name: ''}])});
  }

  handleRemoveShareholder = (idx) => () => {
    this.setState({answers: this.state.answers.filter((s, sidx) => idx !== sidx)});
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
      type: changeEvent.target.value
    });
  }

  handleSubmit = (evt, data) => {
    evt.preventDefault();
    const self = this;

    const { question, answers, type, newID} = this.state;
    //alert(`Incorporated: ${question} with ${answers.length} answers, You have selected: ${type}, ID ${newID}`);

    fetch(`${baseURL}/create`, {
      method: 'post',
      mode: 'CORS',
      body: JSON.stringify({
        question: question,
        answers: answers,
        type: type


      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        let a = data.id.toString()
        console.log("datassq", a)
        console.log("dataIDD", data.id)
        self.setState({
          newID: data.id
        })
        //setTimeout(alert(this.state.newID), 10000);


      })

  }

  componentDidUpdate (nextProps, nextState) {
    if (this.state.newID !== nextState.newID) {
      this.props.history.push('/viewpoll',this.state.newID );
      console.log("fff",this.state.newID )
    }

  }

  render() {
    console.log(this.props)

    return (
      <div className="CreateFormComponent">
        <form >
          <div>
            <div>
              <input
                type="text"
                placeholder="Запитання"
                value={this.state.question}
                onChange={this.handleNameChange}
              />
            </div>
          </div>
          <div>
            {/*<div>*/}
            {/*<input*/}
            {/*type="text"*/}
            {/*placeholder={`Відповідь #${idx + 1}`}/>*/}
            {/*placeholder="Відповідь"/>*/}
            {/*<button*/}
            {/*type="button"*/}
            {/*onClick={this.handleRemoveShareholder(idx)}*/}
            {/*className="small">*/}
            {/*-*/}
            {/*</button>*/}
            {/*</div>*/}
            {
              this.state.answers.map((answer, idx) => (
                <div className="shareholder">
                  <input
                    type="text"
                    placeholder={`Відповідь #${idx + 1}`}
                    value={answer.name}
                    onChange={this.handleShareholderNameChange(idx)}
                  />
                  <button
                    className="fa fa-times ButtonDelete"
                    type="button"
                    onClick={this.handleRemoveShareholder(idx)}/>
                </div>
              ))
            }
          </div>
          <div style={{ textDecoration: 'none',  display: 'block', paddingTop: 10, paddingBottom: 10}} >
            {/*<MainButton*/}
            {/*styleOfGradient={*/}
            {/*{*/}
            {/*background: "linear-gradient(15deg,#667eea,#764ba2)"*/}
            {/*}*/}
            {/*}*/}
            {/*text={*/}
            {/*"Добавити відповідь"*/}
            {/*}/>*/}
            <Link to="#" style={{ textDecoration: 'none',  display: 'block' }}  onClick={this.handleAddShareholder}>
              <MainButton
                styleOfGradient={{background: "linear-gradient(15deg,#36d1dc,#5b86e5)"}}
                style={{cursor: 'pointer',}}
                text={"Добавити"}
              />
            </Link>
          </div>
          <div>
            <label> Pie </label>
            <div>
              <input
                type="radio"
                value="pie"
                checked={this.state.type === 'pie'}
                onChange={this.handleOptionChange}/>
            </div>
          </div>
          <div>
            <label> Line </label>
            <div>
              <input
                type="radio"
                value="line"
                checked={this.state.type === 'line'}
                onChange={this.handleOptionChange}/>
            </div>
          </div>
          <div>
            <label> Bar </label>
            <div>
              <input
                type="radio"
                value="bar"
                checked={this.state.type === 'bar'}
                onChange={this.handleOptionChange}/>
            </div>
          </div>
          <Link to="/" style={{ textDecoration: 'none',  paddingTop: 10, paddingBottom: 10}} onClick={this.handleSubmit}>
            <MainButton
              styleOfGradient={{background: "linear-gradient(15deg,#a8c0ff,#3f2b96)"}}
              style={{cursor: 'pointer', display: 'block'}}
              text={"Створити"}
            />
          </Link>
        </form>
      </div>
    );

  }
}

export default withRouter(CreateForm);
