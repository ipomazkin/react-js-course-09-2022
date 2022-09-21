import React, { Component } from "react";

async function getPost(postId) {
  return {
    title: `Post ${postId} title`,
    text: `Post ${postId} text`
  }
}

export class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {},
    }
  }

  componentDidMount() {
    console.log('Post rendered first time')
    this.fetchData(this.props.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.id !== prevProps.id) {
      this.fetchData(this.props.id);
    }

    console.log('Post have just updated', {
      prevProps,
      prevState,
    })
  }

  componentWillUnmount() {
    console.log('Post will be deleted')
  }

  fetchData = (postId) => {
    getPost(postId).then((postData) => {
      this.setState({ post: postData })
    })
  }

  render() {
    const { id } = this.props
    const { post } = this.state

    return (
      <div>
        <h4>Post with id {id}</h4>
        <h1>{post.title}</h1>
        <p>{post.text}</p>
      </div>
    )
  }
}