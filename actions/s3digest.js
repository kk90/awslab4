var AWS = require("aws-sdk");

var BUCKET_PARAM_NAME = "bucket";
var KEY_PARAM_NAME = "key";



AWS.config.loadFromPath('./config.json');

var task =  function(request, callback){

	callback(null, request.query);
	
}

exports.action = task