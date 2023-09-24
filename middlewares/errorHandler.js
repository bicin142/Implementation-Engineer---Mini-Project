const errorHandler = (err, req, res, next) => {
  let status;
  let message;
  let name;

  name = err.name;

  if (err.name == "SequelizeValidationError") {
    name = "INTERNAL SERVER ERROR";
    status = 500;
    let errorList = err.errors.map((err) => err.message);
    message = errorList[0];
  } else if (err.name == "SequelizeUniqueConstraintError") {
    name = "INTERNAL SERVER ERROR";
    status = 500;
    let errorList = err.errors.map((err) => err.message);
    message = errorList[0];
  } else if (err.name == "BAD REQUEST") {
    status = 400;
    message = err.message;
  } else if (err.name == "NOT FOUND") {
    status = 404;
    message = err.message;
  } else {
    name = "INTERNAL SERVER ERROR";
    status = 500;
    message = err.message;
  }

  res.status(status).json({ name, message });
};

module.exports = errorHandler;
