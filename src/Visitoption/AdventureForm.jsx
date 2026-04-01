import React, { useRef} from "react";
import emailjs from "emailjs-com";
import { Toast } from "primereact/toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {schema} from"./FormValidation"
function AdventureForm() {
  const form = useRef();
   const toast = useRef(null); 
  
    const sendEmail = () => {
    {
      toast.current.show({
         severity: "success",
          summary: "Success",
          detail: "Message sent successfully!",
          life: 3000,
      });
return;
}
    }

 const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <>
     <Toast ref={toast} /> 
     <form ref={form} onSubmit={handleSubmit(sendEmail)}>

      <div className="mb-3 ">
        <label className="form-label text-white">Name*</label>
        
        <input 
        name ="user_name" className="form-control"
        style={{borderColor: "green"}}
        {...register("Name")} placeholder="Enter Name "
          />
         <p style={{color: "red"}}>{errors.Name?.message}</p>
      </div>

      <div className="mb-3">
        <label className="form-label text-white">Last name</label>
        <input  className="form-control"
         name ="user_last_name"
          style={{borderColor: "green"}}
            {...register("LastName")} placeholder="Enter LastName "/>
             <p  style={{color: "red"}}>{errors.LastName?.message}</p>
      </div>

      <div className="mb-3">
        <label className="form-label text-white">User email*</label>
        <input  className="form-control"
             name ="user_email"
          style={{borderColor: "green"}}
          {...register("youremail")} placeholder="Enter Email " />
             <p style={{color: "red"}}>{errors.youremail?.message}</p>
      </div>

      <div className="mb-3 pb-5">
        <label className="form-label text-white">Message*</label>
        <textarea className="form-control" rows="4"
         name ="user_message"
          style={{borderColor: "green"}}
           {...register("massage")} placeholder="Enter Massage " ></textarea>
              <p style={{color: "red"}}>{errors.massage?.message}</p>
      </div>

      <button className="btn submit-btn" type="submit">SUBMIT</button>

    </form>

</>
  )
}

export default AdventureForm;