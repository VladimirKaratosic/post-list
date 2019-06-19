import React from 'react'

export default function PostItem({post, deletePost, setLoader}) {

    const handleLoader = (e) => {                 
        setLoader(true);
        setTimeout(() => {                                    
            setLoader(false);                                 
        }, 700)
        deletePost(post.id);
    }


    return (
        <li >
            <div className="collapsible-header valign-wrapper">
            <h5>{post.title[0].toUpperCase() + post.title.slice(1)}</h5>             
                <div className="post-body-icons right valign-wrapper">                       
                    <i onClick={ handleLoader} className="material-icons delete">delete</i>                                             
                    <i className="material-icons right">more_vert</i>
                </div>
            </div>
            <div className="collapsible-body grey lighten-4">                
                <span className="post-body">{post.body[0].toUpperCase() + post.body.slice(1)}</span>                                                        
            </div>
        </li>
    )
}
