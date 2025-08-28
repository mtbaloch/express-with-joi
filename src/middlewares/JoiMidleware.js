import { StatusCodes } from "http-status-codes";

export const JoiSchemaValidation = (schema)=>{
  return (req,res,next)=>{
    if (!schema) return next()

  // validation will be added here
  const validationOptions= {
    abortEarly: false,
    stripUnkown: true,
    errors:{
      wrap:{
        label: false
      }
    }
  }
  const {error,value} = schema.validate(req.body,validationOptions)

if(error){
  const errors = error.details.map(detail=>{
    return {
      key: detail.context.key,
      type: detail.type.split('.')[0],
      message: detail.message
    }
  })
  res.status(StatusCodes.BAD_REQUEST).json({status:false, message:"validation error", errors})
}
req.body = value
return next();
}

}