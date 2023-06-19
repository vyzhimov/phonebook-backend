const Joi = require("joi");

const FIELDS = ["name", "number"];

const contactSchema = Joi.object({
  name: Joi.string().required(),
  number: Joi.string().required(),
});

const contactValidator = (req, res, next) => {
  if (!Object.keys(req.body).length) {
    res.status(400).json({
      message: "Field cannot be empty",
    });
    return;
  }

  for (const item of FIELDS) {
    if (!req.body[item]) {
      res.status(400).json({
        message: `field ${item} is missing`,
      });
    }
  }
  const { error } = contactSchema.validate(req.body);
  if (error) {
    res.status(400).json({
      message: error.message,
    });
    return;
  }
  next();
};

module.exports = contactValidator;
