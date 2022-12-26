const { check, validationResult } = require("express-validator");

exports.registerRoles = () => [
  check("password", "password should be  min 5").isLength({ min: 5, max: 20 }),
  check("firstName", "firstName required").notEmpty(),
  check("lastName", "lastName required").notEmpty(),
  check("serieNumber", "serieNumber required").notEmpty(),
];
exports.loginRoles = () => [
  check("serieNumber", "serieNumber required").notEmpty(),
  check("password", "password should be  min 5").isLength({ min: 5, max: 20 }),
];
exports.validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
