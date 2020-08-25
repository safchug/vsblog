import React from 'react';
import Post from './Post';
import Menu from "./Menu";
import 'bootstrap/dist/css/bootstrap.min.css';

import NewPostForm from "./NewPostForm";

import regeneratorRuntime from "regenerator-runtime";

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state= {isLoading: true, postList: [], user: null};
        this.add = this.add.bind(this);
    }

    async regist(name, surname, login) {
        let data = {name, surname, login};
        let result = await fetch("/api/regist", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return result.json();

    }

    add(title, post) {
        console.log(post);
        let data = {title: title, text: post};
        let result = fetch('/api/add', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type" : "application/json"
            }
        });

        result.then((response)=> {
            if(response.ok) {
                let {postList, menu} = this.state;
                postList = [ ...postList, {title: title, text: post}];
                this.setState({isLoading: false, postList: postList});
            }
        });
    }

    async edit() {
        let result = await fetch('/add');
        alert(result);
    }

    async removePost() {
        let result = await fetch('/add');
        alert(result);
    }

    async getEdit(postUserId){
        let result = await fetch('/api/user');

        if(result.ok) {
            let serverUser = await result.json();

            if (serverUser
                && (serverUser.role == 'admin'
                || serverUser.id == postUserId)) {
                return edit;
            }
        }

        return null;
    }

    async getAllPosts() {
        let result = await fetch('/posts');

        return result;
    }

    componentWillMount() {
        fetch('/api/initblog').then((responce)=> {
            return responce.json();
        }).then((obj)=> {
            console.log("obj" + obj.data);
            this.setState({isLoading: false, postList:obj.data, user: obj.user});
        });
    }

    render() {
        return(
            <div className="aplication">
                <Menu isLogined={(this.state.user)? true: false}
                      fullName={this.state.user && this.state.user.name + " " + this.state.user.surname}/>
            <div className="container border">
                {(this.state.isLoading)? (<p>Loading...</p>)
                    : this.state.postList.map((post, i)=>(
                        <Post key={i}
                              title = {post.title}
                              post= {post.text}
                              edit={this.getEdit(post.user_id)}
                              removePost={this.removePost}/>
                    ))
                }
                <NewPostForm add={this.add}/>
            </div>
            </div>
        );
    }
}

export default Blog;