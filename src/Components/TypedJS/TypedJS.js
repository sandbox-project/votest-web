import React,{ Component } from 'react';
import Typed from 'react-typed';

class TypedJS extends Component {
  render() {
    return (
      <Typed
        strings={[
        ' - Голосуй',
        ' - Створюй',
        ]}
        typeSpeed={80}
        backSpeed={80}
        loop
      />
    );
  }
}

export default TypedJS;
