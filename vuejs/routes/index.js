const { Router } = require('express');
const router = Router();

const faker = require('faker');
const Logs = require('../models/Logs');

router.get('/create', async (req, res) => {

	for (let i = 0; i < 100; i++) {
		await Logs.create({
			ip_origin: faker.name.ip_origin(),
			command: faker.name.command(),
			date: faker.name.date()
		})
	}

	res.send('received');
});

router.get('/logs', async (req, res) => {
	const logs = await Logs.find();
	res.json({logs});
});

module.exports = router;