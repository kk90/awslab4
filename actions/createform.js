var util = require("util");
var helpers = require("../helpers");
var Policy = require("../s3post").Policy;
var S3Form = require("../s3post").S3Form;
var AWS_CONFIG_FILE = "config.json";
var POLICY_FILE = "policy.json"; 
//generowanie na podstawie pliku
//skonstruwoanie pol formularza
//zaszyfrowanie base64
var INDEX_TEMPLATE = "index.ejs";


var task = function(request, callback){
	//1. load configuration
	var awsConfig=helpers.readJSONFile(AWS_CONFIG_FILE);
	var policyData=helpers.readJSONFile(POLICY_FILE);

	
	//2. prepare policy
	

	
	//3. generate form fields for S3 POST
	
	
	
	//4. get bucket name
	

	
	callback(null, {template: INDEX_TEMPLATE, params:{fields:[], bucket:""}});
}

exports.action = task;
