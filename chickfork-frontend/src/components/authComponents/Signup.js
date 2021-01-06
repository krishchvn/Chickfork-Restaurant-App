import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Signup extends Component {
	constructor(props) {
		super(props);

		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			name: '',
			email: '',
			password: '',
		};
	}

	onChangeName(e) {
		this.setState({
			name: e.target.value,
		});
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
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
		};

		console.log(user.name, user.email);

		axios.post('http://localhost:8000/account/signup', user).then(res => {
			console.log(res.data);
			if (res.status === 200) {
				this.props.history.push('/');
			}
			localStorage.setItem('jwt', res.data);
			localStorage.setItem('user', JSON.stringify(res.data.user));
		});
	}

	render() {
		return (
			<div class='container'>
				<div class='row'>
					<div class='col-sm-9 col-md-7 col-lg-5 mx-auto'>
						<div class='card card-signin my-5'>
							<div class='card-body'>
								<h5 class='card-title text-center'>Sign Up</h5>
								<form class='form-signin' onSubmit={this.onSubmit}>
									<div class='form-label-group'>
										<input
											type='text'
											className='signup_name'
											id='inputName'
											value={this.state.name}
											onChange={this.onChangeName}
											class='form-control'
											placeholder='Name'
											required
										/>
										<label
											for='inputName'
											onclick="document.getElementById('inputName').focus();"
										>
											Name
										</label>
									</div>
									<div class='form-label-group'>
										<input
											type='email'
											className='signup__email'
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
											Email
										</label>
									</div>

									<div class='form-label-group'>
										<input
											type='password'
											id='inputPassword'
											className='signup__password'
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
										value='Sign Up'
										type='submit'
									>
										Sign Up
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

export default withRouter(Signup);
