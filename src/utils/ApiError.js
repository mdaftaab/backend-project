class ApiError extends Error {
    constructor(
        statusCode,
        message = "Somnething went wrong",
        errors = [],
        stack = ""
    ) {
        supper(message)
        this.statusCode = statusCode
        this.data = null
        this.stack = stack
        this.message = message
        this.success = false
        this.errors = errors

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor);
        }

    }
}

export { ApiError }