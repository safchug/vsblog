import React from 'react';
import Menu from "./Menu";

import {Email, Login, Name, Password, Surname} from "./Registration/FormComponents";

class Authentication extends React.Component {
    constructor({location, history}) {
        super();
        this.location = location;
        this.history = history;

        this.state = {
            login: "",
            password: "",
            loginMsg: "",
            passMsg: ""
        };

        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.submit = this.submit.bind(this);

    }

    onLoginChange(e) {
        this.setState({login: e.target.value});
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value});
    }

    submit(e) {
        e.preventDefault();
        fetch('/api/login', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response)=>{
            return response.json();
        }).then((data)=>{
            if(data.status == "ok") {
                this.history.push('/');
            } else if (data.status == "bad login") {
                this.setState({loginMsg: "A user with this login does not exist"});
            } else if(data.status == "wrong password") {
                this.setState({passMsg: "Wrong password"});
            }
        });
    }

    checkWetherUserLogined() {

    }

    componentWillMount() {
    }

    render() {
        return(
            <div className="application">
                <Menu isLogined={false} fullName="unknoun"/>
                <div className="container border">
                    <form onSubmit={this.submit} action="/#">
                        <div className="container border">

                            <Login value={this.state.login} onChange={this.onLoginChange}
                                   message={this.state.loginMsg}
                            />
                            <Password value={this.state.password} onChange={this.onPasswordChange}
                                      message={this.state.passMsg}
                            />

                            <div className="row justify-content-md-center">
                                <br/>
                                <button type="submit" className="btn btn-primary">Log in</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

export default Authentication;