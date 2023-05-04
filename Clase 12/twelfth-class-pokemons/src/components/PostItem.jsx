import React from "react";

class PostItem extends React.Component {
  constructor() {
    super();
    console.log("constructor ejecutado");
  }
  componentDidMount() {
    console.log("componentDidMount ejecutado");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate ejecutado");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount ejecutado");
  }
  onDeleteItem = e => {
    e.preventDefault();
    this.props.onDelete(this.props.post);
  };
  render() {
    console.log("render ejecutado");
    return (
      <div>
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.content}</p>
        <button onClick={this.onDeleteItem}>Delete</button>
      </div>
    );
  }
}



export default PostItem;
