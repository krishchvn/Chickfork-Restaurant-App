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
			<div>
				<h3>Signup</h3>
				<form onSubmit={this.onSubmit}>
					<div className='form-group'>
						<label>Name: </label>
						<input
							type='text'
							className='form-control'
							value={this.state.name}
							onChange={this.onChangeName}
						/>
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
						<input type='submit' value='Signup' className='btn btn-danger' />
					</div>
				</form>
			</div>
		);
	}
}

export default withRouter(Signup);
