const express = require('express');
const mongoose = require('mongoose');
const Cors = require('cors');
const Joi = require('Joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('./models/dbUser');
const Dishes = require('./models/dbDishes');

//validation for schemas
const signUpValidSchema = Joi.object({
	name: Joi.string().min(3).required(),
	email: Joi.string().required().email(),
	password: Joi.string().min(6).required(),
});

const loginValidSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required(),
});

// app config
const app = express();
const port = process.env.PORT || 8000;
const connection_url =
	'mongodb+srv://system:admin@cluster0.n33hy.mongodb.net/chickforkdb';

// middlewares
app.use(express.json());
app.use(Cors());

// db config
mongoose.connect(connection_url, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

//jwt token
function verifyToken(req, res, next) {
	const token = req.header('auth-token');
	if (!token) return res.status(401).send('Access Denied');

	try {
		const verified = jwt.verify(token, 'secretToken');
		req.user = verified;
		next();
	} catch (err) {
		res.status(400).send('Invalid Token');
	}
}

// api endpoints
app.get('/', (req, res) => {
	res.status(200).send('You visited the chickfork restaurant app');
});

app.get('/checkout', verifyToken, (req, res, next) => {
	res.send('checkout');
});

app.post('/dishes', (req, res) => {
	const dbDish = req.body;

	Dishes.create(dbDish, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	});
});

app.get('/dishes', (req, res) => {
	const dbDish = req.body;

	Dishes.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

app.delete('/dishes/:id', (req, res) => {
	const id = req.params.id;
	Dishes.findOne(async err => {
		if (err) {
			console.log(err.message);
		} else {
			const result = await Cards.findByIdAndDelete(id);
			res.send(result);
		}
	});
});

app.post('/account/signup', async (req, res, next) => {
	const { error } = signUpValidSchema.validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	//check unique user
	const emailExist = await User.findOne({ email: req.body.email });
	if (emailExist) return res.status(400).send('Email already exists');

	//hash password
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(req.body.password, salt);

	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashPassword,
	});
	try {
		const savedUser = await user.save();
		res.send(savedUser);
		res.redirect('/');
		console.log(res.data.token);
	} catch (err) {
		res.status(400).send('Server error');
	}
	next();
});

app.post('/account/login', async (req, res, next) => {
	const { error } = loginValidSchema.validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send("Email or password doesn't exist");

	const validPass = await bcrypt.compare(req.body.password, user.password);
	if (!validPass)
		return res.status(400).send("Email or password doesn't exist");

	// create and assign a token
	const token = jwt.sign({ _id: user._id }, 'secretToken');
	res.header('auth-token', token).send(token);

	res.send('Logged In');
	/* 	res.redirect('/'); */
});

// check current user
const checkUser = async (req, res, next) => {
	if (token) {
	} else {
	}
};

// listeners
app.listen(port, () => console.log(`Listening to requests on ${port}`));
