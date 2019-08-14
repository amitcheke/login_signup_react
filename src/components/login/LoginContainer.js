import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';
import PasswordField  from '../common/PasswordField.js';
import TextField from '../common/TextField.js';
import ButtonGreen from '../common/ButtonGreen.js';
import ButtonBlue from '../common/ButtonBlue.js';
import '../common/css/common.css';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            username: ""
        }
        this.onLogin = this.onLogin.bind(this);
    }

    onLogin = (e) => {
        e.preventDefault();
        this.props.login(this.state);
        this.setState({
            password: "",
            username: ""
        });
        this.props.history.push('/home')
    }

    onSignUp = (e) => {
        this.props.history.push('/signup')
    }

    onChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="form-container">
                <center style={{ color: 'white' }}>
                    <h1>Welcome</h1>
                    <h2>Please Login To Continue</h2>
                </center>
                <form onSubmit={this.submitForm}>
                    <ul className="form-fields-container">
                        <li className="input-container"> 
                            <TextField name="username" handleChange={this.onChange} placeholderText="Email"/>
                        </li>
                        <li className="input-container"> 
                            <PasswordField name="password" handleChange={this.onChange} placeholderText="Password"/>
                      </li>
                        <li className="button-container"> 
                            <ButtonGreen handleClick={this.onLogin} label="Login"/>
                            <ButtonBlue handleClick={this.onSignUp} label="Sign Up"/>
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

export default connect(mapStateToProps, { login })(LoginContainer);