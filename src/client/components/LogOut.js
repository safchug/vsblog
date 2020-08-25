import React from 'react';

class LogOut extends React.Component {
    constructor({history}) {
        super();
        this.history = history;
    }

    componentWillMount() {
        fetch('/api/logout').then((respose)=>{
            this.history.push('/');
        });
    }

    render() {
        return null;
    }
}

export default LogOut;