import React, { PureComponent } from 'react';

export class ClassComponentWithRefExample extends PureComponent {
  render() {
    return (
      <div className="">
        <Input ref={(reference) => {
          console.log(reference)
        }} />
      </div>
    );
  }
}

class Input extends PureComponent {
  render() {
    return (
      <input type="text"/>
    );
  }
}

