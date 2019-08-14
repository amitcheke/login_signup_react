import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions';
import PasswordField from '../common/PasswordField.js';
import TextField from '../common/TextField.js';
import ButtonGreen from '../common/ButtonGreen.js';
import ButtonBlue from '../common/ButtonBlue.js';
import '../common/css/common.css';


class SignupContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        password: "",
        username: "",
        displayName: "",
        passwordAgain: ""
    }

    onSignupClick = (e) => {
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

    onChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    onLoginClick = (e) => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="form-container">
                <center style={{ color: 'white' }}>
                    <h2>Please Tell us a little about you !</h2>
                </center>

                <form>
                    <ul className="form-fields-container">
                        <li className="input-container">
                            <TextField name="displayName" handleChange={this.onChange} placeholderText="Display Name"/>
                        </li>

                        <li className="input-container">
                            <TextField name="username" handleChange={this.onChange} placeholderText="Email"/>
                        </li>

                        <li className="input-container">
                            <PasswordField name="password" handleChange={this.onChange} placeholderText="Password"/>
                        </li>

                        <li className="input-container">
                            <PasswordField name="passwordAgain" handleChange={this.onChange} placeholderText="Password Again"/>
                        </li>

                        <li className="button-container">
                            <ButtonBlue handleClick={this.onSignupClick} label="Sign Up" />
                            <ButtonGreen handleClick={this.onLoginClick} label="Login" />
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
}

export default connect(null, { signup })(SignupContainer);