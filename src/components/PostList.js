import React from 'react';
import PostItem from "./PostItem";
import AddPost from "./AddPost";

function PostList({posts, filteredText, deletePost, addPost, loadingPosts, setLoader}) {

    const filtered = filteredText.toLowerCase();

    const postList = posts.length ? (
        posts.map(post => {
            if(post.title.toLowerCase().indexOf(filtered) === -1) {
                return null;
            } else {
                return(
                     <PostItem post={post} deletePost={deletePost} key={post.id} setLoader={setLoader}/>
                )
            }
        })
    ) : (
        <li key="xxx">
            <div className="collapsible-header">
                <h5 className="center">There are no posts left...</h5>
            </div>                
        </li>
    );
   
    return (
        <div>
          <div className="card card-tabs nav_box nav_box_bottom">
            <div className="card-content">                                                                         
              <div>               
                <AddPost addPost={addPost} setLoader={setLoader}/>
              </div>         
            </div>
          </div>            
          <ul className="collapsible" id="post-list" data-collapsible="accordion">
              {loadingPosts && postList}            
          </ul>       
        </div>
    )
}

export default PostList
