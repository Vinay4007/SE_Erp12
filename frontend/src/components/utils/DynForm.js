import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup";

export function DynForm() {

    const names = ["email","password","amount"]

    const validationSchema = Yup.object(
        {
          email : Yup.string()
          .required("Email required")
          .email("invalid email address format")
          .ensure()
          .typeError("Only enter valid character"),

          password:Yup.string()
          .required("password is required")
          .ensure()
          .matches("Nish*anth")
          .typeError("Type error"),

          number : Yup.number()
          .required("Number is required")
          .max(10)
          .min(1)
          .typeError("Invalid Type in the number field")
        }
      )
    
    //   const formikValues = useFormik({
    //     initialValues : {
    
    //     },
    //     onSubmit : (values)=>{
    
    //     },
    //     validateOnChange : true,
    //     onReset : (values) =>{
          
    //     },
    //     validateOnBlur : true,
    //     validateOnMount : true,
    //     validationSchema : {validationSchema}
    //   })
    

  return (
    <div>DynForm</div>
  )
}
