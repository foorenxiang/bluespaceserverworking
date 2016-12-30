var mongoose = require('mongoose');

//Registration Schema
var registrationSchema = mongoose.Schema({
	device_uuid:{
		type: String,
		require: true
	},
	device_make:{
		type: String,
		require: true	
	},
	device_model:{
		type: String,
		require: true	
	},
	device_os:{
		type: String,
		require: true	
	},
	matric_number:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Registration = module.exports = mongoose.model('Registration', registrationSchema);

//get Registrations
module.exports.getRegistrations = function(callback, limit){
	Registration.find(callback).limit(limit);
}

//get Registration
module.exports.getRegistrationById = function(id, callback){
	Registration.findById(id, callback);
}

//Add Registration
module.exports.addRegistration = function(registration, callback){
	Registration.create(registration, callback);
}

//Update Registration
module.exports.updateRegistration = function(id, registration, options, callback){
	var query = {_id: id};
	var update = {
		device_uuid: registration.device_uuid,
		device_make: registration.device_make,
		device_model: registration.device_model,
		device_os: registration.device_os,
		matric_number: registration.matric_number
	}
	Registration.findOneAndUpdate(query, update, options, callback);
}

//Delete Registration
module.exports.deleteRegistration = function(id, callback){
	var query = {_id: id};
	Registration.remove(query, callback);
}