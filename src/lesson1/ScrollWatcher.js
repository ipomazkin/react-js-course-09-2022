import React, { Component } from "react";

export class ScrollWatcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      y: 0,
      x: 0,
    };
  }

  handleScroll = () => {
    console.log('handleScroll')

    const x = window.scrollX;
    const y = window.scrollY;
    this.setState({
      x,
      y,
    })
  };

  componentDidMount() {
    console.log('ScrollWatcher rendered first time')
    window.addEventListener('scroll', this.handleScroll)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('ScrollWatcher have just updated', {
      prevProps,
      prevState,
    })
  }

  componentWillUnmount() {
    console.log('ScrollWatcher will be deleted')
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const { x, y } = this.state

    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        background: '#fff',
        padding: '15px'
      }}>
        Scroll position is {`x: ${x.toFixed(0)}, y: ${y.toFixed(0)}`}
      </div>
    )
  }
}