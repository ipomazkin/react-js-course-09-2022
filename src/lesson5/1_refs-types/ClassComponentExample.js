/**
 * @description The ClassComponentExample component.
 */
import React, { createRef } from 'react';

export class ClassComponentExample extends React.Component {
  constructor(props) {
    super(props);

    this.firstNameRef = createRef()
    this.lastName = null
  }

  componentDidMount() {
    console.log({
      firstNameRef: this.firstNameRef,
      lastName: this.lastName
    })
  }

  render() {
    return (
      <form action="">
        <div>
          <label>
            <span>First name: </span>
            <input ref={this.firstNameRef} type="text" name="firstName" />
          </label>
        </div>

        <div>
          <label>
            <span>Last name: </span>
            <input ref={(node) => {
              this.lastName = node
            }} type="text" name="lastName" />
          </label>
        </div>
      </form>
    )
  }
}
