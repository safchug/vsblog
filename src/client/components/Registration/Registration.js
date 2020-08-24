import React from 'react';
import Menu from "../Menu";
import {Name, Surname, Login, Email, Password} from "./FormComponents";

class Registration extends React.Component {
    constructor({location}) {
        super();
        this.location = location;

        this.state = {
            name: "",
            surname: "",
            login: "",
            email: "",
            password: ""
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onSurnameChange = this.onSurnameChange.bind(this);
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    onNameChange(e) {
        this.setState({name: e.target.value});
    }

    onSurnameChange(e) {
        this.setState({surname: e.target.value});
    }

    onLoginChange(e) {
        this.setState({login: e.target.value});
    }

    onEmailChange(e) {
        this.setState({email: e.target.value});
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value});
    }

    checkWetherUserLogined() {

    }

    submit(e){
        e.preventDefault();
        fetch('/api/regist', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response)=>{
            return response.json();
        }).then((result)=>{
            alert(result);
        })
    }

    componentWillMount() {
        alert('componentWillMount');
    }

    render() {
        return(
            <div className="application">
                <Menu isLogined={false} fullName="unknown"/>
                <div className="container border">
                    <form onSubmit={this.submit} action="/#">
                        <div className="container border">

                            <Name value={this.state.name} onChange={this.onNameChange}/>
                            <Surname value={this.state.surname} onChange={this.onSurnameChange} />
                            <Login value={this.state.login} onChange={this.onLoginChange} />
                            <Email value={this.state.email} onChange={this.onEmailChange} />
                            <Password value={this.state.password} onChange={this.onPasswordChange} />

                            <div className="row justify-content-md-center">
                                <br/>
                                <button type="submit" className="btn btn-primary">Sighn in</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

export default Registration;