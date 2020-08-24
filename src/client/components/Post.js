import React from 'react';

export default function Post({title, post, edit, removePost}) {
    return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{post}</p>
                    <a href="#" onClick={edit} className="btn btn-primary">edit</a>
                    <a href="#" onClick={removePost} className="btn btn-primary">delete</a>
                </div>
            </div>
    )
}