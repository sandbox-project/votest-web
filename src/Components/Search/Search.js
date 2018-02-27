import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/css/font-awesome.min.css';
import './Search.css';

class Search extends Component {

  handleClick(e) {
    e.preventDefault();
    let search = ReactDOM.findDOMNode(this.refs.search).value.trim();
    this.props.onSearch(search);
  }


  render() {
    return (
      <div className="SearchComponent">
        <input
          ref="search"
          type="search"
          placeholder="000-000"
        />
        <input
          className="fa fa-search ButtonSubmit"
          type="button"
          value=""
          onClick={this.handleClick.bind(this)}
        />
      </div>
    );

  }
}

export default Search;
