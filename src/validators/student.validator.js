const Joi = require('joi')

const validate = (student, createMod) => {
  const mode = createMod ? 'required' : 'optionnal'

  const result = Joi.object({
    firstname: Joi.string().min(2).max(255).presence(mode),
    lastname: Joi.string().min(2).max(255).presence(mode),
    age: Joi.number().min(0).max(99).presence(mode),
    remote: Joi.boolean().presence(mode)
  })
    .required()
    .min(1)
    .validate(student, { abortEarly: false }).error

  if (result) {
    const errorMessages = result.details.map(error => ({
      message: error.message
    }))

    return { errorCount: result.details.length, errorMessages }
  }

  return false
}
