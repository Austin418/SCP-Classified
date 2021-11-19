const CustomAPIError = require("./custom-error")
const {statusCodes} = require("http-status-codes")

class UnauthError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCodes = statusCodes.UNAUTHORIZED
    }
}

module.exports = UnauthError