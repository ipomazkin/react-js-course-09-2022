import React, { Component, PureComponent } from 'react';
import { ChildA } from "./ChildA";

export class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true
  }

  render() {
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
