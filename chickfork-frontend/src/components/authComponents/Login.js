import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			email: '',
			password: '',
		};
	}

	onChangeEmail(e) {
		this.setState({
			email: e.target.value,
		});
	}
	onChangePassword(e) {
		this.setState({
			password: e.target.value,
		});
	}
	onSubmit(e) {
		e.preventDefault();
		const user = {
			email: this.state.email,
			password: this.state.password,
		};

		console.log(user.email);

		axios.post('http://localhost:8000/account/login', user).then(res => {
			console.log(res.data);
			localStorage.setItem('jwt', res.data.token);
			localStorage.setItem('user', JSON.stringify(res.data.user));
		});
	}

	render() {
		return (
			<div>
				<h3>Login</h3>
				<form onSubmit={this.onSubmit}>
					<div className='form-group'>
						<label>Email: </label>
						<input
							type='email'
							className='form-control'
							value={this.state.email}
							onChange={this.onChangeEmail}
						/>
						<label>Password: </label>
						<input
							type='password'
							className='form-control'
							value={this.state.password}
							onChange={this.onChangePassword}
						/>
					</div>
					<div className='form-group'>
						<input type='submit' value='Log In' className='btn btn-danger' />
					</div>
				</form>
			</div>
		);
	}
}
