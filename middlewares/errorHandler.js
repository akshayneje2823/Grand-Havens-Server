import ErrorRepsonse from "../utils/errorResponse.js";


const ErrorHandler = (err, req, res, next) => {
    let error = { ...err };

    error.message = err.message;

    console.log("ErrorHandler", error);

    if (err.code === 1100) {
        console.log("MONGOOSE ERROR")
        const message = "Duplicate Field Value Enter";
        error = new ErrorRepsonse(message, 400)
    };

    if (err.name === "ValidationError") {
        const message = err.message
        error = new ErrorRepsonse(message, 400)
    };

    res.status(error.statusCode || 500).json({
        success: false,
        error:  error.message || "Server Error"
    })

}

export default ErrorHandler;
