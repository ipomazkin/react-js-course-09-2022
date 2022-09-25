import React, { Component, PureComponent } from 'react';
import { ChildB } from "./ChildB";

export class ChildA extends Component {
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log('shouldComponentUpdate')
  //
  //   const currentPropsLength = Object.keys(this.props).length;
  //   const nextPropsLength = Object.keys(nextProps).length;
  //
  //   if (currentPropsLength === 0 && nextPropsLength === 0) {
  //     return false;
  //   }
  //
  //   return true
  // }

  render() {
    console.log('ChildA is rendering now')

    return (
      <div>
        <ChildB />
      </div>
    )
  }
}
