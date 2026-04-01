import * as yup from "yup";


export const schema = yup.object({
  Name: yup.string().required("Name is required"),
  LastName: yup.string().required("LastName is required"),
 youremail: yup.string().email("Invalid email").required("Email required"),
  massage: yup.string().required("massage is required"),
});