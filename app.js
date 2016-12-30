var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Detection = require('./models/detection')
Registration = require('./models/registration')

app.use(bodyParser.json());

// Connect to Mongoose
mongoose.connect('mongodb://localhost/bluespaceapi');
var db = mongoose.connection;

/*Get*/

app.get('/', function(req, res){
	res.send('Please use /api/registrations or /api/detections');
});

app.get('/api', function(req, res){
	res.send('Please use /registrations or /detections');
});

app.get('/api/detections', function(req, res){
	Detection.getDetections(function(err, detections){
		if(err){
			throw err;
		}
		res.json(detections);
	});
});

app.get('/api/detections/:_id', function(req, res){
	Detection.getDetectionById(req.params._id, function(err, detection){
		if(err){
			throw err;
		}
		res.json(detection);
	});
});

app.get('/api/registrations', function(req, res){
	Registration.getRegistrations(function(err, registrations){
		if(err){
			throw err;
		}
		res.json(registrations);
	});
});

app.get('/api/registrations/:_id', function(req, res){
	Registration.getRegistrationsById(req.params._id, function(err, registration){
		if(err){
			throw err;
		}
		res.json(registration);
	});
});

/*Post*/

app.post('/api/detections', function(req, res){
	var detection = req.body;
	Detection.addDetection(detection, function(err, detection){
		if(err){
			throw err;
		}
		res.json(detection);
	});
});

app.post('/api/registrations', function(req, res){
	var registration = req.body;
	Registration.addRegistration(registration, function(err, registration){
		if(err){
			throw err;
		}
		res.json(registration);
	});
});

/*Put*/
app.put('/api/detections/:_id', function(req, res){
	var id = req.params._id;
	var detection = req.body;
	Detection.updateDetection(id, detection, {}, function(err, detection){
		if(err){
			throw err;
		}
		res.json(detection);
	});
});

app.put('/api/registrations/:_id', function(req, res){
	var id = req.params._id;
	var registration = req.body;
	Registration.updateRegistration(id, registration, {}, function(err, registration){
		if(err){
			throw err;
		}
		res.json(registration);
	});
});

/*Delete*/
app.delete('/api/detections/:_id', function(req, res){
	var id = req.params._id;
	Detection.deleteDetection(id, function(err, detection){
		if(err){
			throw err;
		}
		res.json(detection);
	});
});

app.delete('/api/registrations/:_id', function(req, res){
	var id = req.params._id;
	Registration.deleteRegistration(id, function(err, registration){
		if(err){
			throw err;
		}
		res.json(registration);
	});
});

app.listen(3001);
console.log('Running on port 3001...')
