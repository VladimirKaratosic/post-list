import React, { Component } from "react";

export default class AddPost extends Component {
  state = {
    post: {
      id: null,
      title: "",
      body: "",
    },
  };

  handleChange = (e) => {
    const { post } = this.state;
    this.setState({
      post: {
        ...post,
        [e.target.id]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    // Delete a class active from a label, since it stays in focus
    var labels = [...document.querySelectorAll("label.active")];
    // Delete a class valid from a input field, since it stays in focus
    var inputs = [...document.querySelectorAll("input.validate ")];
    const { setLoader } = this.props;

    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);

    e.preventDefault();
    this.props.addPost(this.state.post);
    this.setState({
      post: {
        id: null,
        title: "",
        body: "",
      },
    });

    labels.map((label) => {
      label.classList.value = "";
      return null;
    });
    inputs.map((input) => {
      input.classList.remove("valid");
      return null;
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12 m10 offset-m1">
              <input
                id="title"
                type="text"
                className="validate"
                pattern="([A-Za-z]*\s*\d*)*"
                title="Only letters, digits and whitespaces"
                onChange={this.handleChange}
                value={this.state.post.title}
                required
              />
              <label htmlFor="title">Add Post Title</label>
            </div>
            <div className="input-field col s12 m10 offset-m1">
              <input
                id="body"
                type="text"
                className="validate"
                pattern="([A-Za-z]*\s*\d*)*"
                title="Only letters, digits and whitespaces"
                onChange={this.handleChange}
                value={this.state.post.body}
                required
              />
              <label htmlFor="body">Add Post Body</label>
              <div className="row">
                <div className="input-field col s12">
                  <button
                    className="btn cyan waves-effect waves-light right add_post_btn"
                    type="submit"
                    name="action"
                  >
                    Add Post
                    <i className="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
