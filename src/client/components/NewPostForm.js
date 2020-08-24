import React from "react";

export default function NewPostForm({add}) {
    let _newpost, _title;

    const addPost = (e) => {
        e.preventDefault();
        add(_title.value, _newpost.value);
        _newpost.value = '';
        _title.value = '';
    }

    return(
        <div>
            <div className="card">
                <div className="card-body">
                    <input type="text" className="form-control" ref={input=> _title = input} />
                    <textarea className="form-control" rows="3" ref={textarea => _newpost = textarea}></textarea>
                    <a href="#" onClick={addPost} className="btn btn-primary">Add new post</a>
                </div>
            </div>
        </div>
    )
}