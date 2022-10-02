import React, { Component, PureComponent } from 'react';
import { ChildA } from "./ChildA";

export class Parent extends Component {
  constructor(props) {
    super(props);

    const { test } = this.props

    this.state = {
      isOpen: false
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { test } = this.props

    return true
  }

  render() {
    const { test } = this.props

    console.log('Parent is rendering now')
    const { isOpen } = this.state

    return (
      <div>
        <h5>Parent  {isOpen && 'is opened'}:</h5>
        <div>
          <button onClick={() => this.setState({ isOpen: !isOpen })}>Toggle parent</button>
        </div>
        {isOpen && (
          <ChildA test={
            {
              test: '123'
            }
          } />
        )}
      </div>
    )
  }
}

Parent.defaultProps = {
  test: 123
}
