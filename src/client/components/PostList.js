import Post from "./Post";
import React from "react";

const PostList= ({isLoading, postList, edit, removePost}) =>
{(isLoading)? (<p>Loading...</p>)
    : postList.map((post, i)=>(
        <Post key={i}
              title = {post.title}
              post= {post.text}
              edit={edit}
              removePost={removePost}/>
    ))
}