import React, { useRef } from "react";
import { useFormik } from "formik";
import { bookingSchema } from "../../Pages/Validation";
import "bootstrap/dist/css/bootstrap.min.css";

// PrimeReact
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { RadioButton } from 'primereact/radiobutton';
import { FloatLabel } from "primereact/floatlabel";

import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import "./booking.css";

const BookingForm = () => {
  const toast = useRef(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      LastName:"",
      Address:"",
      stateCity:"",
      StatePinCode:"",
      email: "",
      phone: "",
      date: null,
      message: "",
      NumberofAdult:"",
      gender : "",
    },
    validationSchema: bookingSchema,

    onSubmit: (values, { resetForm }) => {
      console.log(values);

      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Booking Confirmed ✅",
        life: 3000
      });

      resetForm();
    }
  });

  const handleErrorToast = () => {
    if (Object.keys(formik.errors).length > 0) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Please fill all fields ❌",
        life: 3000
      });
    }
  };

  return (
    <div className="booking-wrapper">
      <Toast ref={toast} />

      <div className="booking-card">

        {/* Heading */}
        <h2> CARI SURF CAMP</h2>
        <p className="sub-text">
          Please complete the form below.
        </p>

        {/* FORM START */}
        <form onSubmit={formik.handleSubmit}>

          {/* Name */}
          <div className="row align-items-end">
           <div  class="col-md-6">
          <div className="field">
            <FloatLabel>
            <InputText
              name="name"
              // placeholder="fullName"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
               <label htmlFor="name">Full Name</label>
      </FloatLabel>
            {formik.touched.name && formik.errors.name && (
              <small className="error">{formik.errors.name}</small>
            )}
          </div>
          </div>
             {/* lastName */}
             <div  class="col-md-6">
          <div className="field">
             <FloatLabel>
            <InputText
              name="LastName"
              value={formik.values.LastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
              <label htmlFor="name">Last Name</label>
      </FloatLabel>
            {formik.touched.LastName&& formik.errors.LastName&& (
              <small className="error">{formik.errors.LastName}</small>
            )}
          </div>
          </div>
          </div>
             {/* Address */}
            <div className="row align-items-end">
           <div  class="col-md-6">
          <div className="field">
             <FloatLabel>
            <InputText
              name="Address"
              // placeholder="Address"
              value={formik.values.Address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
               <label htmlFor="name">Address</label>
      </FloatLabel>
            {formik.touched.Address&& formik.errors.Address&& (
              <small className="error">{formik.errors.Address}</small>
            )}
          </div>
          </div>
              {/* state & city */}
               <div  class="col-md-6">
          <div className="field">
              <FloatLabel>
            <InputText
              name="stateCity"
              value={formik.values.stateCity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
             <label htmlFor="name">State & City</label>
      </FloatLabel>
            {formik.touched.stateCity && formik.errors.stateCity && (
              <small className="error">{formik.errors.stateCity}</small>
            )}
          </div>
          </div>
          </div>
               {/* State Pin Code*/}
               <div className="field">
                 <FloatLabel>
            <InputText
              name="StatePinCode"                                        
              value={formik.values.StatePinCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
             <label htmlFor="name">State Pin Code</label>
      </FloatLabel>
            {formik.touched.phone && formik.errors.StatePinCode&& (
              <small className="error">{formik.errors.StatePinCode}</small>
            )}
          </div>


  {/* Phone */}
         <div className="row">
  <div className="col-md-6">
    <div className="field">
       <FloatLabel>
      <InputText
        name="phone"
        // placeholder="Enter Phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="form-control"
      />
       <label htmlFor="name">Phone Number</label>
      </FloatLabel>
      {formik.touched.phone && formik.errors.phone && (
        <small className="text-danger">{formik.errors.phone}</small>
      )}
    </div>
  </div>

  {/* email */}
  <div className="col-md-6">
    <div className="field">
      <FloatLabel>
      <InputText
        name="email"
        // placeholder="Enter Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="form-control"
         />
          <label htmlFor="name">Enter Email</label>
      </FloatLabel>
      {formik.touched.phone && formik.errors.phone && (
        <small className="text-danger">{formik.errors.phone}</small>
      )}
    </div>
  </div>
</div>
        
          {/* Date */}
          <div className="field">
             <FloatLabel>
            <Calendar
              name="date"
              value={formik.values.date}
              onChange={(e) => formik.setFieldValue("date", e.value)}
              onBlur={() => formik.setFieldTouched("date", true)}
              showIcon
              // placeholder="Select Date"
            />
            <label htmlFor="name">Select Date</label>
      </FloatLabel>
            {formik.touched.date && formik.errors.date && (
              <small className="error">{formik.errors.date}</small>
            )}
          </div>
       <div className="row g-3 align-items-end">

  {/* Number of Adult */}
  <div className="col-md-6">
    <div className="field">
        <FloatLabel>
      <InputText
        name="NumberofAdult"
        // placeholder="Number & Adult"
        value={formik.values.NumberofAdult}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="form-control"
      />
       <label htmlFor="name">Age</label>
      </FloatLabel>
      {formik.touched.NumberofAdult && formik.errors.NumberofAdult && (
        <small className="text-danger">{formik.errors.NumberofAdult}</small>
      )}
    </div>
  </div>

  {/* Gender */}
  <div className="col-md-6">
    <div className="field">
      {/* <label className="block mb-1">Gender</label> */}

      <div className="flex align-items-center">
        
        <RadioButton
          inputId="male"
          name="gender"
          value="Male"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.gender === "Male"}
        />
        <label htmlFor="male" className="ml-2">Male</label>
      </div>

      <div className="flex align-items-center mt-2">
        <RadioButton
          inputId="female"
          name="gender"
          value="Female"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.gender === "Female"}
        />
        <label htmlFor="female" className="ml-2">Female</label>
      </div>

      {formik.touched.gender && formik.errors.gender && (
        <small className="text-danger">{formik.errors.gender}</small>
      )}
    </div>
  </div>
</div>
          {/* Message */}
          <div className="field">
             <FloatLabel>
            <InputText
              name="message"
              // placeholder="Extra Message"
              value={formik.values.message}
              onChange={formik.handleChange}
            />
              <label htmlFor="name">Massage</label>
      </FloatLabel>
          </div>

          <Button
            label="Confirm Booking"
            type="submit"
            onClick={handleErrorToast}
          />

        </form>
        {/* FORM END */}

      </div>
    </div>
  );
};

export default BookingForm;