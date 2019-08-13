import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions';
import Home from './Home.js'
import {
    Redirect,
    withRouter
} from "react-router-dom";


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSignup = this.onSignup.bind(this);
    }

    state = {
        password: "",
        username: "",
        displayName: "",
        passwordAgain: ""
    }

    onSignup = (e) => {
        e.preventDefault();
        this.props.signup(this.state);
        this.setState({
            password: "",
            username: "",
            displayName: "",
            passwordAgain: ""
        });

        this.props.history.push('/')
    }
    onChange(event) {

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onLogin = (e) => {
        this.props.history.push('/')
    }
    render() {

        return (
            <div>
                <center style={{ color: 'white' }}>
                    <h2>Please Tell us a little about you !</h2>
                </center>

                <form style={{ display: 'flex', justifyContent: 'center', padding: '40px' }} onSubmit={this.submitForm}>
                    <ul style={{ listStyle: 'none', backgroundColor: '#E2E2E2', padding: '0px', borderRadius: '10px', width: '300px' }}>

                        <li style={{ padding: "10px", display: 'flex', placeContent: 'center' }}>
                            <input type="text"
                                placeholder="Display Name"
                                style={{
                                    flex: '10 1 0%',
                                    padding: '5px', border: '1px solid lightgray',
                                    borderRadius: '6px',
                                    width: '88%',
                                    backgroundColor: 'white'
                                }}
                                name="displayName"
                                value={this.state.displayName}
                                onChange={this.onChange}>
                            </input>
                        </li>

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

                        <li style={{ padding: "10px", display: 'flex', placeContent: 'center' }}>
                            <input type="password"
                                placeholder="passwordAgain"
                                style={{
                                    flex: '10 1 0%',
                                    padding: '5px', border: '1px solid lightgray',
                                    borderRadius: '6px',
                                    width: '88%',
                                    backgroundColor: 'white'
                                }}
                                name="passwordAgain"
                                value={this.state.passwordAgain}
                                onChange={this.onChange}>
                            </input>
                        </li>


                        <li style={{ padding: "10px", display: 'flex', placeContent: 'start space-evenly' }}>
                            <button style={{ height: '30px', width: '70px', color: 'white', backgroundColor: '#249929', border: '1px #249929 solid' }} onClick={this.onLogin}>Login</button>
                            <input type="button" style={{ height: '30px', color: 'white', width: '70px', backgroundColor: '#2A8ED7', border: '1px #2A8ED7 solid' }} value="Sign Up" onClick={this.onSignup}></input>
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
}

export default connect(null, { signup })(Signup);