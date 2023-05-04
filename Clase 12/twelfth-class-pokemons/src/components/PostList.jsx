import React from "react";
import PostItem from "./PostItem.jsx";
import PostForm from "./PostForm.jsx";

class PostList extends React.Component {
  state = {
    posts: [
      {
        id: 0,
        title : '',
        content : ''
      }
      // {
      //   id: 1,
      //   title: "Post Title 1",
      //   content:
      //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      // },
      // {
      //   id: 2,
      //   title: "Post Title 2",
      //   content:
      //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      // }
    ]
  };

  handleSubmit = event => {
    event.preventDefault();
    // AREA DE TRABAJO --> 
    // Primero debemos saber si tenemos un post o no
    // Segundo debemos crear un nuevo post con lo que traiga el event
    // Tercero debemos agregarlo a nuestro arreglo de posts y actualizar el estado
    const lastPost = this.state.posts.slice(-1).pop();
    let newPost = {
      id: lastPost ? lastPost.id + 1 : 0,
      title: event.target.title.value,
      content: event.target.content.value
    };

    const posts = [...this.state.posts, newPost];
    this.setState({ posts: posts });
  };

  handleDelete = postToDelete => {
    // AREA DE TRABAJO --> Hacer una funcion para eliminar el post seleccionado
    let posts = this.state.posts.filter(post => post.id !== postToDelete.id);
    this.setState({ posts: posts });
  };

  render() {
    let posts = this.state.posts;
    return (
      <div>
        <PostForm onSubmit={this.handleSubmit} />
        {posts.map(post => (
          <PostItem key={post.id} post={post} onDelete={this.handleDelete} />
        ))}
      </div>
    );
  }
}

export default PostList;
