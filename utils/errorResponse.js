class ErrorRepsonse extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode
    }
}

export default ErrorRepsonse