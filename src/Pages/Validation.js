import * as Yup from "yup";

export const bookingSchema = Yup.object({
  name: Yup.string()
    .min(3, "Minimum 3 characters")
    .max(30, "Maximum 30 characters")
    .matches(/^[A-Za-z ]+$/, "Only alphabets allowed")
    .required("Name is required"),

   LastName: Yup.string()
  .min(2, "Minimum 2 characters")
  .max(30, "Maximum 30 characters")
  .matches(/^[A-Za-z ]+$/, "Only alphabets allowed")
  .required("Last Name is required"),

  Address: Yup.string()
  .min(5, "Address too short")
  .max(100, "Address too long")
  .required("Address is required"),

    stateCity: Yup.string()
  .min(3, "Minimum 3 characters")
  .max(50, "Maximum 50 characters")
  .matches(/^[A-Za-z ]+$/, "Only alphabets allowed")
  .required("State & City is required"),

  phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Must start with 6-9 and be 10 digits")
    .required("Phone is required"),


  StatePinCode: Yup.string()
  .matches(/^[A-Za-z ]+ - \d{6}$/, "Format: State - 123456")
  .required("State & Pin Code is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),


  // ✅ FIXED DATE
  date: Yup.date()
    .required("Date is required"),

      NumberofAdult: Yup.string()
    .matches(/^[0-9]\d{1}$/, "only age ")
    .required("NumberofAdult is required"),

    gender: Yup.string()
  .oneOf(["Male", "Female"], "Select a valid gender")
  .required("Gender is required"),

  // ✅ FIXED MESSAGE
  message: Yup.string()
    .nullable()
});