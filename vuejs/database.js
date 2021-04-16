const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:sasa@testcluster.hznq8.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-15am8y-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true', {
	useNewUrlParser: true
})
	.then(db => console.log('DB is connect'))
	.catch(err => console.log(err));

