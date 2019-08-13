import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import Home from './Home.js'
import {
    Redirect,
    withRouter
} from "react-router-dom";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onLogin = this.onLogin.bind(this)
    }

    state = {
        password: "",
        username: ""
    }

    onLogin = (e) => {
        e.preventDefault();
        this.props.login(this.state);
        this.setState({
            password: "",
            username: ""
        })
        this.props.history.push('/home')
    }

    onSignUp = (e) => {
        this.props.history.push('/signup')
    }
    onChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {

        return (
            <div>
                <center style={{ color: 'white' }}>
                    <h1>Welcome</h1>
                    <h2>Please Login To Continue</h2>
                </center>

                <form style={{ display: 'flex', justifyContent: 'center', padding: '40px' }} onSubmit={this.submitForm}>
                    <ul style={{ listStyle: 'none', backgroundColor: '#E2E2E2', padding: '0px', borderRadius: '10px', width: '300px' }}>
                       
                        <li style={{ padding: "10px", display: 'flex', placeContent: 'center' }}>
                            <input type="text"
                                placeholder="Email"
                                style={{
                                    flex: '10 1 0%',
                                    padding: '5px', border: '1px solid lightgray',
                                    borderRadius: '6px',
                                    width: '88%',
                                    backgroundColor: 'white'
                                }}
                                name="username"
                                value={this.state.username}
                                onChange={this.onChange}>
                            </input>
                        </li>
                        
                        <li style={{ padding: "10px", display: 'flex', placeContent: 'center' }}>
                            <input type="password"
                                placeholder="Password"
                                style={{
                                    flex: '10 1 0%',
                                    padding: '5px', border: '1px solid lightgray',
                                    borderRadius: '6px',
                                    width: '88%',
                                    backgroundColor: 'white'
                                }}
                                name="password"
                                value={this.state.password}
                                onChange={this.onChange}>
                            </input>
                        </li>
                        
                        <li style={{ padding: "10px", display: 'flex', placeContent: 'start space-evenly' }}>
                            <button style={{ height: '30px', width: '70px', color: 'white', backgroundColor: '#249929', border: '1px #249929 solid' }} onClick={this.onLogin}>Login</button>
                            <input type="button" style={{ height: '30px', color: 'white', width: '70px', backgroundColor: '#2A8ED7', border: '1px #2A8ED7 solid' }} onClick={this.onSignUp} value="Sign Up"></input>
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authentication_token: state.authData.authentication_token,
        person: state.authData.person
    }
}

export default connect(mapStateToProps, { login })(Login);