//Rajaa Ayyash
import joi from 'joi'
export const signInShema = ({
    body: joi.object({
        email:joi.string().email({minDomainSegments: 2, tlds:{allow :['com','net']}}).required().messages({
            'string.base': `"email" must be a string`,
            'string.email': `"email" must be a valid email address`,
            'any.required': `"email" is required`
        }),
        password:joi.string().min(8).max(20).required().messages({
            'string.base': `"password" must be a string`,
            'string.empty': `"password" cannot be empty`,
            'string.min': `"password" must be at least 8 characters long`,
            'string.max': `"password" must be no more than 20 characters long`,
            'any.required': `"password" is required`
        }),
    })
})
//Rajaa Ayyash
export const signupShema = {
    body : joi.object({
        userName : joi.string().alphanum().min(3).max(20).required().messages({
            'string.empty': `"userName" cannot be empty`,
            'any.required': `"userName" is required`
        }),
        email:joi.string().email({minDomainSegments: 2, tlds:{allow :['com','net']}}).required(),
        password: joi.string().min(8).pattern(new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')).required(),
        age:joi.number().positive().integer().min(16).required(),
        gender:joi.string().alphanum().valid('Male','Female').required(),
    }),
    query: joi.object({
        test : joi.string().required(),
    })
}