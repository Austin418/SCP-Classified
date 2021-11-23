const CustomAPIError = require("./custom-error")
const { statusCodes } = require("http-status-codes")

class BadRequest extends CustomAPIError {
    constructor(message) {
        this.statusCodes = statusCodes.BAD_REQUEST
    }
}

module.exports = BadRequest;