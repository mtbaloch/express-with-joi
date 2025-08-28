import Joi from 'joi';


/*=======================
User Schema
=======================*/
const eighteenYearsAgo = new Date();
eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);


const userSchema = Joi.object({
  firstname: Joi.string().trim().min(3).max(30).pattern(/^[A-Za-z]+$/).required() ,
  lastname: Joi.string().trim().min(3).max(30).pattern(/^[A-Za-z]+$/).required() ,
  dateOfBirth: Joi.date().iso().less(eighteenYearsAgo).greater("1947-01-01").required(),
  address: Joi.object(
    {
      village_muhallah: Joi.string().trim().min(3).max(55).required(),
      city: Joi.string().trim().min(3).max(55).required(),
      district: Joi.string().trim().min(3).max(55).required(),
      province: Joi.string().trim().min(3).max(55).lowercase().valid("punjab","kpk").required(),
      country: Joi.string().trim().valid("pakistan").required()
    }
  ),
  interest:Joi.array().items(Joi.string()).optional(),
  isMarried:Joi.boolean().required(),
  wifeName:Joi.when("isMarried",{
    is:true,
    then: Joi.string().trim().min(3).max(30).required(),
    otherwise: Joi.any().strip(),
  }),
  email: Joi.string().email({tlds:{ allow: ["pk", "com", "net", "org"] }}).required() ,
  password: Joi.string().pattern(/^[A-Za-z0-9]{8,16}$/).required()
})


export {userSchema}