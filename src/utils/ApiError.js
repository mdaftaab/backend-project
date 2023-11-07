class ApiError extends Error {
    constructor(
        statusCode,
        message = "Somnething went wrong",
        errors = [],
        statck = ""
    ) {
        supper(message)
        this.statusCode = statusCode
        this.data = null
        this.statck = statck
        this.message = message
        this.success = false
        this.errors = errors

        if (statck) {
            this.stack = statck
        } else {
            Error.captureStackTrace(this, this.constructor);
        }

    }
}

export { ApiError }