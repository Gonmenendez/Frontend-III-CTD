import React, { Component } from "react";
import "./styles.css";
import PostList from "./components/PostList.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <PostList />
      </div>
    );
  }
}

export default App;
