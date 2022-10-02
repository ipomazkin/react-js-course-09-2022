import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';

class RefsExample extends PureComponent {
  constructor(props) {
    super(props);

    this.dom = {
      lastName: createRef()
    };

    console.log('constructor:', this.dom.lastName.current)
  }

  componentDidMount() {
    console.log(this.dom.firstName)
    console.log('componentDidMount:', this.dom.lastName.current)

    this.data = {}
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.data = {
      test: 123
    }
  }

  render() {
    return (
      <div className="">
        <input ref={(node) => {
          this.dom.firstName = node
        }} type="text" name="firstName"/>

        <input ref={this.dom.lastName} type="text" name="lastName"/>
      </div>
    );
  }
}

export default RefsExample;

RefsExample.propTypes = {};

RefsExample.defaultProps = {};
