import React, { Component } from "react";

export class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      hello: 'world',
      test: 123,
    };
  }

  componentDidMount() {
    console.log('Toggler rendered first time')
  }

  componentWillUnmount() {
    console.log('Toggler will be deleted')
  }

  handleToggle = () => {
    // this.setState({
    //   isOpen: !this.state.isOpen,
    // })

    this.setState((currentState) => {
      return {
        isOpen: !currentState.isOpen
      }
    });
  }

  render() {
    const { isOpen } = this.state

    console.log('Toggler is rendering...')

    return (
      <div>
        {isOpen ? 'opened': 'closed'}
        <div>
          <button onClick={this.handleToggle}>{isOpen ? 'close': 'open'}</button>
        </div>
      </div>
    )
  }
}