import React, { Component } from 'react'
import { withLocalize } from "react-localize-redux";
import FormErrors from '../../../common/services/validateServices';
import "./styles.scss";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            formErrors: { email: '', password: '', confirmPassword: '' },
            emailValid: false,
            passwordValid: false,
            rePasswordValid: false,
            formValid: false,
            value: ''
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
        let rePasswordValid = this.state.rePasswordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ` ${this.props.translate('common.errForm.invalid')}`;
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ` ${this.props.translate('common.errForm.length-pass')}`;
                break;
            case 'confirmPassword':
                rePasswordValid = value.length >= 6;
                fieldValidationErrors.confirmPassword = rePasswordValid ? '' : ` ${this.props.translate('common.errForm.notMatch')}`;
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            rePasswordValid: rePasswordValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    render() {
        const { translate } = this.props;
        return (
            <form className="loginForm">
                <h2 className="text-center">{translate('auth.register.title')}</h2>
                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                    <label htmlFor="email">{translate('auth.register.email')}</label>
                    <input type="email" required className="form-control" name="email"
                        placeholder={translate('auth.register.email')}
                        value={this.state.email}
                        onChange={this.handleUserInput} />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                    <label htmlFor="password">{translate('auth.register.password')}</label>
                    <input type="password" className="form-control" name="password" autoComplete="on"
                        placeholder={translate('auth.register.password')}
                        value={this.state.password}
                        onChange={this.handleUserInput} />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.confirmPassword)}`}>
                    <label htmlFor="confirmPassword">{translate('auth.register.confirmPassword')}</label>
                    <input type="password" className="form-control" name="confirmPassword" autoComplete="on"
                        placeholder={translate('auth.register.confirmPassword')}
                        value={this.state.confirmPassword}
                        onChange={this.handleUserInput} />
                </div>
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} nameForm="register" />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary d-block mx-auto"
                    disabled={!this.state.formValid}> {translate('auth.register.title')}</button>
            </form>
        )
    }
}

export default withLocalize(Register);