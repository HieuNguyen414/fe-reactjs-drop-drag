import React, { Component } from 'react';
import {
    connect
} from 'react-redux';
import FormErrors from '../../../common/services/validateServices';
import "./styles.scss";
import { login, ACTIONS } from './../../../actions/login';
import Loading from '../../../components/loading';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false,
            value: '',
            statusLogin: false,
            saveInfoLogin: false,
            showLoading: false
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : 'is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    UNSAFE_componentWillMount() {
        this.setState({ saveInfoLogin: localStorage.getItem('STATUS_CHECKBOX') === 'true' ? true : false });
    }

    UNSAFE_componentWillReceiveProps(nextProps, state) {
        if (nextProps.status === ACTIONS.LOGIN_SUCCESS && nextProps.response) {
            if (nextProps.response.access_token) {
                if (this.state.saveInfoLogin) {
                    localStorage.setItem('ACCESS_TOKEN', nextProps.response.access_token);
                    localStorage.setItem('REFRESH_TOKEN', nextProps.response.refresh_token);
                    localStorage.setItem('STATUS_CHECKBOX', this.state.saveInfoLogin);
                } else {
                    document.cookie = `ACCESS_TOKEN=${nextProps.response.access_token}`;
                    document.cookie = `REFRESH_TOKEN=${nextProps.response.refresh_token}`;
                    localStorage.setItem('STATUS_CHECKBOX', false);
                }
                this.props.history.push('/dashboard');
            } else {
                this.setState({ statusLogin: true });
            }
        }
    };

    handleLogin = (e) => {
        this.setState({
            showLoading: true
        })
        e.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.login(data);
    }

    handleCheckbox = (e) => {
        this.setState({ saveInfoLogin: e });
    }

    render() {
        return (
            <div className="login">
                <h1 className="title-page">アシロボ</h1>
                <form className="loginForm custom-form" onSubmit={this.handleLogin}>
                    <h2 className="title-login">ログイン</h2>
                    {this.state.statusLogin ? <p className="text-message">ログインできませんでした</p> : ''}
                    <div className={`group ${this.errorClass(this.state.formErrors.email)}`}>
                        <input ref="email" type="email" required className="input-text" name="email"
                            placeholder="ログインID"
                            value={this.state.email}
                            onChange={this.handleUserInput} />
                        <div className="notice">
                            <FormErrors formErrors={this.state.formErrors} nameForm="login" nameInput="email" />
                        </div>
                    </div>
                    <div className={`group ${this.errorClass(this.state.formErrors.password)}`}>
                        <input ref="password" type="password" className="input-text" name="password" autoComplete="on"
                            placeholder="パスワード"
                            value={this.state.password}
                            onChange={this.handleUserInput} />
                        <div className="notice">
                            <FormErrors formErrors={this.state.formErrors} nameForm="login" nameInput="password" />
                        </div>
                    </div>
                    <div className="md-checkbox-custom">
                        <input id="i2" type="checkbox" defaultChecked={this.state.saveInfoLogin} onChange={(e) => this.handleCheckbox(e.target.checked)} />
                        <label htmlFor="i2">ログイン情報を保存する</label>
                    </div>

                    <button
                        type="submit"
                        className="button d-block mx-auto"
                        disabled={!this.state.formValid}>ログイン</button>
                </form>
                <Loading show={this.state.showLoading} />
            </div>
        )
    }
}

const mapStateToProps = ({ login }) => {
    return {
        status: login.status,
        response: login.response
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => {
            dispatch(login(data));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);