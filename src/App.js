import React, { Component } from 'react';
import "./App.css";
import PostList from "./components/PostList";
import SearchPosts from "./components/SearchPosts";
import axios from "axios";
import Spinner from "./img/gooey-ball-tail-spinner.gif";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {      
      posts: [],
      filteredText: "",
      loadingSpinner: false,
      loadingPosts: false
    }
  }
  
  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/posts")
    .then(res => {    
      this.setState({        
        posts: res.data,
        loadingSpinner: true
      })
    })
    setTimeout(() => {
      this.setState({
        loadingSpinner: false,
        loadingPosts: true
      })
    }, 2000)
  }

  deletePost = (id) => {    
    const newPosts = this.state.posts.filter(post => {
      return post.id !== id
    })
    this.setState({
      posts: newPosts
    })
  }

  addPost = (post) => {
    // Set the post_ID as lastPost_ID + 1
    let lastPost = this.state.posts[this.state.posts.length - 1];
    lastPost ? post.id = lastPost.id + 1 : post.id = 1;    
    let posts = [...this.state.posts, post];
    this.setState({
      posts: posts
    })    
  }

  handleSearchInput = (term) => {
    this.setState({
      filteredText: term
    })    
  }

  setLoader = (boolean) => {
    this.setState({
      loadingSpinner: boolean
    })
  }

  render() {  
    const {loadingSpinner} = this.state;      
    return (
      <div className="container main" >
      {loadingSpinner && <img className="preloader" src={Spinner} alt="preloader"/>} 
        <div className="card card-tabs nav_box nav_box_top">
          <div className="card-content">
            <div className="row ">
              <div className="card-title col s12 m12 l4 cyan-text darken-4">Post list</div>
              <SearchPosts searchingPosts={this.handleSearchInput} setLoader={this.setLoader}/>
            </div>                                    
            <div className="divider"></div>          
          </div>
        </div>          
        <PostList posts={this.state.posts} loadingPosts={this.state.loadingPosts} setLoader={this.setLoader} filteredText={this.state.filteredText} deletePost={this.deletePost} addPost={this.addPost}/>
      </div>
    )
  }
}
