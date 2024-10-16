/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Accordion } from "./ui/Accordian";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Select from "./ui/Select";
import CheckBox from "./ui/CheckBox";

function ConsigneeDetails() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [checkbox, setCheckbox] = useState(true);
  const [selectedState, setSelectedState] = useState("");
  const [step, setStep] = useState(1);
  function onCheckboxClick() {
    setCheckbox(!checkbox)
  }
  // eslint-disable-next-line no-unused-vars
  function nextStep() {
    setStep(step + 1);
  }
  function prevStep() {
    setStep(step - 1);
  }
  //Countries List
  const countries = [
    { value: "usa", label: "United States" },
    { value: "india", label: "India" },
    { value: "russia", label: "Russia" },
    { value: "japan", label: "Japan" },
  ];
  // States List
  const states = {
    usa: [
      { value: "ny", label: "New York" },
      { value: "ca", label: "California" },
    ],
    india: [
      { value: "mh", label: "Maharashtra" },
      { value: "dl", label: "Delhi" },
    ],
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    shippingAddress1: "",
    shippingAddress2: "",
    shippingLandmark: "",
    shippingCountry: "",
    shippingState: "",
    shippingCity: "",
    shippingEmail: "",
    shippingPincode: "",
    billingAddress1: "",
    billingAddress2: "",
    billingLandmark: "",
    billingCountry: "",
    billingState: "",
    billingCity: "",
    billingEmail: "",
    billingPincode: "",
    addressPreference: "",
  });

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setSelectedState("");
    setFormData((prevData) => ({
      ...prevData,
      shippingCountry: country,
      shippingState: "",
    }));
  };
  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setFormData((prevData) => ({
      ...prevData,
      shippingState: state,
    }));
  };
  const [errors, SetErrors] = useState({});
  
  // Applying Validation on the input fields
  const validateForm = (data) => {
    const errors = {};
    // Checking First Name
    if (!data.firstName.trim()) {
      errors.firstName = "Username is required";
    } else if (data.firstName.length < 3) {
      errors.username = "Firstname must be at least 3 characters long";
    }
    // Checking LastName
    if (!data.lastName.trim()) {
      errors.lastName = "Lastname is required";
    } else if (data.lastName.length < 3) {
      errors.lastName = "Lastname must be at least 3 characters long";
    }
    // Checking ShippingAddress1
    if (!data.shippingAddress1.trim()) {
      errors.shippingAddress1 = "Address 1 is required";
    }
    // Checking Shipping Address 2
    if (!data.shippingAddress2.trim()) {
      errors.shippingAddress2 = "Address 2 is required";
    }
    {/*}
    if(!data.country()) {
      if(errors.country === "Select COuntry"){
        errors.country = "Country required"
      }
    }
    if(!data.state()) {
      errors.state = "State required"
    }
      */}
    // Checking Shipping city
    if (!data.shippingCity) {
      errors.shippingCity = "City is required";
    }
    // Checking Shipping Email
    if (!data.shippingEmail.trim()) {
      errors.shippingEmail = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.shippingEmail)) {
      errors.shippingEmail = "Email is invalid";
    }
    // Checking Shipping Pincode
    
    // Checking Mobile Number
    if (!data.mobileNumber.trim()) {
      errors.mobileNumber = "Mobile Number is required";
    }
    else if (data.mobileNumber.length < 10) {
      errors.mobilenumber = "Mobile Number must be atleast 10 digits long";
    }
    // Checking primary email
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = "Email is invalid";
    }
    // Checking Billing Email
    if(!data.billingEmail.trim()) {
      errors.billingEmail = "Email is required";
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.billingEmail)) {
      errors.billingEmail = "Email is invalid"
    }

    {
      /*if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Passwords do not match";
    }
    */
    }
    return errors;
  };

  // Handle inputChange Function
  function handleInputChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // Handle Submit Button for the form
  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validateForm(formData);
    SetErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Form submission failed due to validation errors.");
    }
    console.log("Form Data:", formData);
  }

  return (
    <div className="font-poppins">
      <form onSubmit={handleSubmit}>
        <Accordion
          items={[
            {
              title: "Consignee Details",
              //   content:
              //     "Our privacy policy details how we handle your personal information...",
            },
          ]}
          className="bg-black-500 shadow-none"
        >
          <div className={`bg-white px-6 mt-4`}>
            {step === 1 && (
              <div id="personal-details" className={``}>
                <h2 className="text-sm font-semibold">Personal Details</h2>
                <div
                  className={`grid grid-cols-3 justify-start items-center gap-4 mt-2 `}
                >
                  <div>
                    <Input
                      placeholder="Enter First Name..."
                      required="*"
                      className=""
                      labelData="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                    {errors.firstName && (
                      <span className="text-sm font-medium text-red-500">
                        {errors.lastName}
                      </span>
                    )}
                  </div>
                  <div>
                    <Input
                      placeholder="Enter Last Name..."
                      className=""
                      labelData="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                    {errors.lastName && (
                      <span className="text-sm font-medium text-red-500 p-1">
                        {errors.lastName}
                      </span>
                    )}
                  </div>

                  <div>
                    <Input
                      placeholder="Enter Mobile Number..."
                      required="*"
                      className=""
                      labelData="Mobile Number"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                    />
                    {errors.mobileNumber && (
                      <span className="text-red-500 text-sm font-medium">
                        {errors.mobileNumber}
                      </span>
                    )}
                  </div>
                  <div>
                    <Input
                      placeholder="Enter Email ID..."
                      className=""
                      labelData="Email Address"
                      required="*"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm font-medium">{errors.email}</span>
                    )}
                  </div>
                </div>
                <div className="flex justify-end items-center m-2">
                  <Button
                    type="submit"
                    title="Next"
                    className="bg-[#2E5FAD] p-1"
                    onClick={nextStep}
                  />
                </div>
              </div>
            )}

            {/* Step of the form starts from here */}

            {step === 2 && (
              <div className={``}>
                <h2 className="text-sm font-semibold mt-4">Shipping Address</h2>
                <div className="grid grid-cols-3 justify-start items-center gap-4 mt-2">
                  <div>
                    <Input
                      placeholder="Enter Address 1..."
                      className=""
                      labelData="Address 1"
                      required="*"
                      name="shippingAddress1"
                      value={formData.shippingAddress1}
                      onChange={handleInputChange}
                    />
                    {errors.shippingAddress1 && (
                      <span className="text-sm font-medium text-red-500">
                        {errors.shippingAddress1}
                      </span>
                    )}
                  </div>
                  <div>
                    <Input
                      placeholder="Enter Address 2..."
                      className=""
                      labelData="Address 2"
                      required="*"
                      name="shippingAddress2"
                      value={formData.shippingAddress2}
                      onChange={handleInputChange}
                    />
                    {errors.shippingAddress2 && (
                      <span className="text-sm font-medium text-red-500">
                        {errors.shippingAddress2}
                      </span>
                    )}
                  </div>
                  <Input
                    placeholder="Enter Landmark..."
                    className=""
                    labelData="Landmark"
                    name="shippingLandMark"
                    value={formData.landmark}
                    onChange={handleInputChange}
                  />
                  <div>
                    <p>Country <span className="text-sm font-normal text-red-primary">*</span></p>
                    <Select
                      title="Country"
                      id="country-select"
                      required="*"
                      options={countries}
                      onChange={handleCountryChange}
                      className="px-2"
                      value={formData.shippingCountry}
                    />
                  </div>
                  <div>
                    <p>State <span className="text-sm font-normal text-red-primary">*</span></p>
                    <Select
                      title="State"
                      id="state-select"
                      options={states[selectedCountry] || []}
                      onChange={handleStateChange}
                      className="px-2"
                      value={formData.shippingState}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Enter Email ID..."
                      className=""
                      labelData="Email Address"
                      required="*"
                      name="shippingEmail"
                      value={formData.shippingEmail}
                      onChange={handleInputChange}
                    />
                    {errors.shippingEmail && (
                      <span className="text-sm font-medium text-red-500">
                        {errors.shippingEmail}
                      </span>
                    )}
                  </div>
                  <div>
                    <Input
                      placeholder="Enter City..."
                      className=""
                      labelData="Enter City"
                      required="*"
                      name="shippingCity"
                      value={formData.shippingCity}
                      onChange={handleInputChange}
                    />
                    {errors.shippingCity && (
                      <span className="text-sm font-medium text-red-500">
                        {errors.shippingCity}
                      </span>
                    )}
                  </div>
                  <Input
                    placeholder="Enter Pincode..."
                    className=""
                    labelData="Enter Pincode"
                    required="*"
                    name="shippingPinCode"
                    value={formData.shippingPincode}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="inline-flex justify-start items-center gap-2 mt-6">
                  {/* <input
                    type="checkbox"
                    id="checkbox1"
                    name="addressPreference"
                    className="cursor-pointer accent:bg-[#2E5FAD]"
                    checked={formData.addressPreference}
                    onChange={handleInputChange}
                    onClick={onCheckboxClick}
                  />
                  <label htmlFor="checkbox1" className="text-sm font-medium inline-flex">
                    Billing address is same as shipping address
                  </label> */}
                  <CheckBox
                    type="checkbox" name="addressPreference" id="checkbox2"
                    checked={checkbox + "" + onCheckboxClick}
                    labelData="Billing address is same as shipping address"
                    onChange={handleInputChange}
                    onClick={onCheckboxClick}
                  />
                </div>
                <div>

                  {/* Billing Info detail */}

                  {checkbox && (
                    <div>
                      <h2 className="text-sm font-semibold mt-4">
                        Billing Address
                      </h2>
                      <div className="grid grid-cols-3 justify-start items-center gap-4 mt-2">
                        <div>
                          <Input
                            placeholder="Enter Address 1..."
                            className=""
                            labelData="Address 1"
                            required="*"
                            name="billingAddress1"
                            value={formData.billingAddress1}
                            onChange={handleInputChange}
                          />
                          {errors.address1 && (
                            <span className="text-sm font-medium text-red-500">
                              {errors.address1}
                            </span>
                          )}
                        </div>
                        <div>
                          <Input
                            placeholder="Enter Address 2..."
                            className=""
                            labelData="Address 2"
                            required="*"
                            name="billingAddress2"
                            value={formData.billingAddress2}
                            onChange={handleInputChange}
                          />
                          {errors.address2 && (
                            <span className="text-sm font-medium text-red-500">
                              {errors.address2}
                            </span>
                          )}
                        </div>
                        <Input
                          placeholder="Enter Landmark..."
                          className=""
                          labelData="Landmark"
                          name="billingLandMark"
                          value={formData.billingLandmark}
                          onChange={handleInputChange}
                        />
                        <div>
                          <p>Country</p>
                          <Select
                            title="Country"
                            id="country-select"
                            required="*"
                            options={countries}
                            onChange={(e) => handleInputChange({ target: { name: 'billingCountry', value: e.target.value } })}
                            className="px-2"
                            value={formData.billingCountry}
                          />
                        </div>
                        <div>
                          <p>State</p>
                          <Select
                            title="State"
                            id="state-select"
                            options={states[selectedCountry] || []}
                            onChange={(e) => handleInputChange({target: { name: 'billingState', value: e.target.value}})}
                            className="px-2"
                            value={formData.state}
                          />
                        </div>
                        <div>
                          <Input
                            placeholder="Enter Email ID..."
                            className=""
                            labelData="Email Address"
                            required="*"
                            name="billingEmail"
                            value={formData.billingEmail}
                            onChange={handleInputChange}
                          />
                          {errors.billingEmail && (
                            <span className="text-sm font-medium text-red-500">
                              {errors.billingEmail}
                            </span>
                          )}
                        </div>
                        <div>
                          <Input
                            placeholder="Enter City..."
                            className=""
                            labelData="Enter City"
                            required="*"
                            name="billingCity"
                            value={formData.billingCity}
                            onChange={handleInputChange}
                          />
                          {errors.city && (
                            <span className="text-sm font-medium text-red-500">
                              {errors.city}
                            </span>
                          )}
                        </div>
                        <Input
                          placeholder="Enter Pincode..."
                          className=""
                          labelData="Enter Pincode"
                          required="*"
                          name="billingPinCode"
                          value={formData.billingPincode}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-center m-2 mt-6">
                  <Button
                    type="submit"
                    title="Prev"
                    className="bg-[#2E5FAD] p-1"
                    onClick={prevStep}
                  />
                  <Button
                    type="submit"
                    title="Continue"
                    className="bg-[#2E5FAD] p-1"
                  />
                </div>
              </div>
            )}
          </div>
        </Accordion>
      </form>
    </div>
  );
}

export default ConsigneeDetails;
