const Joi = require('joi');

module.exports = {
    register (req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string.regex(
                new RegExp('^[a-zA-Z0-9]{8,16}')
            )
        }

        const {error, value} = Joi.validate(req.body, schema)

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `Your password failed to meet the following rules:
                        <br>
                        1. It must contain only upper/lowercase letter and 0 to 9.
                        <br>
                        2. It must be 8-16 characters long.`
                    })
                    break
                    default:
                        res.status(400).send('Invalid Registration Information')
            }
        } else {
            next()
        }
    }
}