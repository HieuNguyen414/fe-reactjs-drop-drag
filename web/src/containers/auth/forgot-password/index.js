import React, { Component } from 'react'
import { withLocalize } from "react-localize-redux";
import FormErrors from '../../../common/services/validateServices';
import "./styles.scss";

class ForgotPassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			formErrors: { email: '' },
			emailValid: false,
			formValid: false
		}
	}

	handleUserInput = e => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({ [name]: value },
			() => { this.validateField(name, value) });
	}

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let emailValid = this.state.emailValid;

		switch (fieldName) {
			case 'email':
				emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				fieldValidationErrors.email = emailValid ? '' : ` ${this.props.translate('common.errForm.invalid')}`;
				break;
			default:
				break;
		}
		this.setState({
			formErrors: fieldValidationErrors,
			emailValid: emailValid,
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
				<h2 className="text-center">{translate('auth.forgotPassword.title')}</h2>
				<div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
					<label htmlFor="email">{translate('auth.forgotPassword.email')}</label>
					<input type="email" required className="form-control" name="email"
						placeholder={translate('auth.forgotPassword.email')}
						value={this.state.email}
						onChange={this.handleUserInput} />
				</div>
				<div className="panel panel-default">
					<FormErrors formErrors={this.state.formErrors} nameForm="login" />
				</div>
				<button
					type="submit"
					className="btn btn-primary d-block mx-auto"
					disabled={!this.state.formValid}> {translate('auth.forgotPassword.submit')}</button>
			</form>
		)
	}
}

export default withLocalize(ForgotPassword);