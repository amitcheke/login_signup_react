import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions';
import PasswordField from '../common/PasswordField.js';
import TextField from '../common/TextField.js';
import ButtonGreen from '../common/ButtonGreen.js';
import ButtonBlue from '../common/ButtonBlue.js'


class SignupContainer extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
        this.onSignup = this.onSignup.bind(this);
    }

    state = {
        password: "",
        username: "",
        displayName: "",
        passwordAgain: ""
    }

    onSignup(e){
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
                        <TextField name="displayName" handleChange={this.onChange}/>
                        </li>

                        <li style={{ padding: "10px", display: 'flex', placeContent: 'center' }}>
                        <TextField name="username" handleChange={this.onChange}/>
                        </li>

                        <li style={{ padding: "10px", display: 'flex', placeContent: 'center' }}>
                            <PasswordField name="password" handleChange={this.onChange} />
                        </li>

                        <li style={{ padding: "10px", display: 'flex', placeContent: 'center' }}>
                            <PasswordField name="passwordAgain" handleChange={this.onChange} />
                        </li>

                        <li style={{ padding: "10px", display: 'flex', placeContent: 'start space-evenly' }}>
                            <ButtonBlue handleClick={this.onSignUp} label="Sign Up" />
                            <ButtonGreen handleClick={this.onLogin} label="Login" />
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
}

export default connect(null, { signup })(SignupContainer);