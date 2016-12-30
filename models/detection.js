var mongoose = require('mongoose');

//Detection Schema
var detectionSchema = mongoose.Schema({
	beacon_uuid:{
		type: String,
		require: true
	},
	beacon_major:{
		type: String,
		require: true
	},
	beacon_minor:{
		type: String,
		require: true
	},
	beacon_rssi:{
		type: String,
		require: true
	},
	firmware_ver:{
		type: String,
		require: true
	},
	OTA_status:{
		type: String,
		require: true
	},
	device_uuid:{
		type: String,
		require: true
	},
	detection_timestamp:{
		type: String,
		require: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Detection = module.exports = mongoose.model('Detection', detectionSchema);

//get Detections
module.exports.getDetections = function(callback, limit){
	Detection.find(callback).limit(limit);
}

//get Detection
module.exports.getDetectionById = function(id, callback){
	Detection.findById(id, callback);
}

//Add Detections
module.exports.addDetection = function(detection, callback){
	Detection.create(detection, callback);
}

//Update Detection
module.exports.updateDetection = function(id, detection, options, callback){
	var query = {_id: id};
	var update = {
		beacon_uuid: detection.beacon_uuid,
		beacon_major: detection.beacon_major,
		beacon_minor: detection.beacon_minor,
		beacon_rssi: detection.beacon_rssi,
		firmware_ver: detection.firmware_ver,
		OTA_status: detection.OTA_status,
		device_uuid: detection.device_uuid,
		detection_timestamp: detection.detection_timestamp
	}
	Detection.findOneAndUpdate(query, update, options, callback);
}

//Delete Detection
module.exports.deleteDetection = function(id, callback){
	var query = {_id: id};
	Detection.remove(query, callback);
}


