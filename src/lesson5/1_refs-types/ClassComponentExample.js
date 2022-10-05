/**
 * @description The ClassComponentExample component.
 */
import React from 'react';

export class ClassComponentExample extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form action="">
        <div>
          <label>
            <span>First name: </span>
            <input type="text" name="firstName" />
          </label>
        </div>

        <div>
          <label>
            <span>Last name: </span>
            <input type="text" name="lastName" />
          </label>
        </div>
      </form>
    )
  }
}
