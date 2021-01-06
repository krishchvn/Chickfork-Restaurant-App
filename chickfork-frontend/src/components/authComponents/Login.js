import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './Login.css';

class Login extends Component {
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
			console.log(res.data, res.data.user, 'clged here');
			if (res.status === 200) {
				this.props.history.push('/');
			}

			localStorage.setItem('token', res.data);
			localStorage.setItem('user', res.data.user);
		});
	}

	render() {
		return (
			<div class='container'>
				<div class='row'>
					<div class='col-sm-9 col-md-7 col-lg-5 mx-auto'>
						<div class='card card-signin my-5'>
							<div class='card-body'>
								<h5 class='card-title text-center'>Log In</h5>
								<form class='form-signin' onSubmit={this.onSubmit}>
									<div class='form-label-group'>
										<input
											type='email'
											className='login__email'
											id='inputEmail'
											value={this.state.email}
											onChange={this.onChangeEmail}
											class='form-control'
											placeholder='Email'
											required
										/>
										<label
											for='inputEmail'
											onclick="document.getElementById('inputEmail').focus();"
										>
											Email address
										</label>
									</div>

									<div class='form-label-group'>
										<input
											type='password'
											id='inputPassword'
											className='login__password'
											value={this.state.password}
											onChange={this.onChangePassword}
											class='form-control'
											placeholder='Password'
											required
										/>
										<label
											for='inputPassword'
											onclick="document.getElementById('inputPassword').focus();"
										>
											Password
										</label>
									</div>

									<button
										class='btn btn-lg btn-danger btn-block text-uppercase'
										value='Log In'
										type='submit'
									>
										Log In
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Login);
