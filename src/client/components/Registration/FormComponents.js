import React from "react";

const Name = (props)=>
    <div className="row justify-content-md-center">
        <div className="col-4">
            <label htmlFor="inputName">Name</label>
            <input type="text" value={props.value} onChange={props.onChange} className="form-control" id="inputName"/>
        </div>
    </div>

const Surname = (props)=>
    <div className="row justify-content-md-center">
        <div className="col-4">
            <label htmlFor="inputSurname">Surname</label>
            <input type="text" value={props.value} onChange={props.onChange} className="form-control" id="inputSurname"/>
        </div>
    </div>

const Login = (props)=>
    <div className="row justify-content-md-center">
        <div className="col-4">
            <label htmlFor="inputLogin">Login</label>
            <input type="text" value={props.value} onChange={props.onChange} className="form-control" id="inputLogin"/>
            <label>{props.message}</label>
        </div>
    </div>

const Email = (props) =>
    <div className="row justify-content-md-center">
        <div className="col-4">
            <label htmlFor="inputEmail">Email address</label>
            <input type="text" value={props.value} onChange={props.onChange} className="form-control" id="inputEmail"/>
        </div>
    </div>

const Password = (props)=>
    <div className="row justify-content-md-center">
        <div className="col-4">
            <label htmlFor="inputPass">Password</label>
            <input type="password" value={props.value} onChange={props.onChange} className="form-control" id="inputPass"/>
            <label>{props.message}</label>
        </div>
    </div>

export {Name, Surname, Login, Email, Password};