// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 

const logger = {
	log_it: function() {
		if (this.errMsg) {
			console.log(this.errMsg);
		}
	}
}

const logItem = {
	errMsg: "test error message!"
}

logger.log_it.call(logItem);