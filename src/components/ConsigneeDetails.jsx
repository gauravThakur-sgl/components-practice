import { useState } from "react";
import { Accordion } from "./ui/Accordian";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Select from "./ui/Select";
import CheckBox from "./ui/CheckBox";

function ConsigneeDetails() {
  const [checkbox, setCheckbox] = useState(true);
  function onCheckboxClick() {
    const state = checkbox;
    if (state === true) {
      setCheckbox(false);
    } else {
      setCheckbox(true);
    }
  }
  const [selectedCountry, setSelectedCountry] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [selectedState, setSelectedState] = useState("");
  const [step, setStep] = useState(1);

  function nextStep() {
    setStep(step + 1);
  }
  function prevStep() {
    setStep(step - 1);
  }

  const countries = [
    { value: "usa", label: "United States" },
    { value: "india", label: "India" },
    { value: "russia", label: "Russia" },
    { value: "japan", label: "Japan" },
  ];

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
    mobilenumber: "",
    email: "",
    address1: "",
    address2: "",
    landmark: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    addressPreference: "",
  });

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setSelectedState("");
    setFormData((prevData) => ({
      ...prevData,
      country: country,
      state: "",
    }));
  };
  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setFormData((prevData) => ({
      ...prevData,
      state: state,
    }));
  };
  const [errors, SetErrors] = useState({});
  const validateForm = (data) => {
    const errors = {};

    if (!data.firstName.trim()) {
      errors.firstName = "Username is required";
    } else if (data.firstName.length < 3) {
      errors.username = "Firstname must be at least 3 characters long";
    }
    if (!data.lastName.trim()) {
      errors.lastName = "Lastname is required";
    } else if (data.lastName.length < 3) {
      errors.lastName = "Lastname must be at least 3 characters long";
    }
    if (!data.address1.trim()) {
      errors.address1 = "Address1 is required";
    }
    if (!data.address2.trim()) {
      errors.address2 = "Address2 is required";
    }
    if (!data.city) {
      errors.city = "City is required";
    }

    if (!data.mobilenumber.trim()) {
      errors.mobilenumber = "Mobile Number is required";
    } else if (data.mobilenumber.length < 10) {
      errors.mobilenumber = "Mobile Number must be atleast 10 digits long";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = "Email is invalid";
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
  function handleInputChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
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
    <div>
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
                <h2 className="font-bold text-lg">Personal Details</h2>
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
                      <span className="text-sm text-red-500">
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
                      <span className="text-sm text-red-500 p-1">
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
                      value={formData.mobilenumber}
                      onChange={handleInputChange}
                    />
                    {errors.mobilenumber && (
                      <span className="text-red-500 text-sm">
                        {errors.mobilenumber}
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
                      <span className="text-red-500">{errors.email}</span>
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

            {step === 2 && (
              <div className={``}>
                <h2 className="font-bold text-lg mt-4">Shipping Address</h2>
                <div className="grid grid-cols-3 justify-start items-center gap-4 mt-2">
                  <div>
                    <Input
                      placeholder="Enter Address 1..."
                      className=""
                      labelData="Address 1"
                      required="*"
                      name="Address 1"
                      value={formData.address1}
                      onChange={handleInputChange}
                    />
                    {errors.address1 && (
                      <span className="text-sm text-red-500">
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
                      name="Address 2"
                      value={formData.address2}
                      onChange={handleInputChange}
                    />
                    {errors.address2 && (
                      <span className="text-sm text-red-500">
                        {errors.address2}
                      </span>
                    )}
                  </div>
                  <Input
                    placeholder="Enter Landmark..."
                    className=""
                    labelData="Landmark"
                    name="landMark"
                    value={formData.landmark}
                    onChange={handleInputChange}
                  />
                  <div>
                    <p>Country</p>
                    <Select
                      title="Country"
                      id="country-select"
                      required="*"
                      options={countries}
                      onChange={handleCountryChange}
                      className="px-2"
                      value={formData.country}
                    />
                  </div>
                  <div>
                    <p>State</p>
                    <Select
                      title="State"
                      id="state-select"
                      options={states[selectedCountry] || []}
                      onChange={handleStateChange}
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
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && (
                      <span className="text-sm text-red-500">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div>
                    <Input
                      placeholder="Enter City..."
                      className=""
                      labelData="Enter City"
                      required="*"
                      name="City"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                    {errors.city && (
                      <span className="text-sm text-red-500">
                        {errors.city}
                      </span>
                    )}
                  </div>
                  <Input
                    placeholder="Enter Pincode..."
                    className=""
                    labelData="Enter Pincode"
                    required="*"
                    name="PinCode"
                    value={formData.pincode}
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
                  <label htmlFor="checkbox1" className="text-sm inline-flex">
                    Billing address is same as shipping address
                  </label> */}
                  <CheckBox
                    type="checkbox" name="addressPreference" id="checkbox2"
                    checked={formData.addressPreference + '' + onCheckboxClick}
                    labelData="Billing address is same as shipping address"
                    onChange={handleInputChange}
                    onClick={onCheckboxClick}
                  />
                </div>
                <div>
                  {/* Billing Info detail */}
                  {checkbox && (
                    <div>
                      <h2 className="font-bold text-lg mt-4">
                        Billing Address
                      </h2>
                      <div className="grid grid-cols-3 justify-start items-center gap-4 mt-2">
                        <div>
                          <Input
                            placeholder="Enter Address 1..."
                            className=""
                            labelData="Address 1"
                            required="*"
                            name="Address 1"
                            value={formData.address1}
                            onChange={handleInputChange}
                          />
                          {errors.address1 && (
                            <span className="text-sm text-red-500">
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
                            name="Address 2"
                            value={formData.address2}
                            onChange={handleInputChange}
                          />
                          {errors.address2 && (
                            <span className="text-sm text-red-500">
                              {errors.address2}
                            </span>
                          )}
                        </div>
                        <Input
                          placeholder="Enter Landmark..."
                          className=""
                          labelData="Landmark"
                          name="landMark"
                          value={formData.landmark}
                          onChange={handleInputChange}
                        />
                        <div>
                          <p>Country</p>
                          <Select
                            title="Country"
                            id="country-select"
                            required="*"
                            options={countries}
                            onChange={handleCountryChange}
                            className="px-2"
                            value={formData.country}
                          />
                        </div>
                        <div>
                          <p>State</p>
                          <Select
                            title="State"
                            id="state-select"
                            options={states[selectedCountry] || []}
                            onChange={handleStateChange}
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
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                          {errors.email && (
                            <span className="text-sm text-red-500">
                              {errors.email}
                            </span>
                          )}
                        </div>
                        <div>
                          <Input
                            placeholder="Enter City..."
                            className=""
                            labelData="Enter City"
                            required="*"
                            name="City"
                            value={formData.city}
                            onChange={handleInputChange}
                          />
                          {errors.city && (
                            <span className="text-sm text-red-500">
                              {errors.city}
                            </span>
                          )}
                        </div>
                        <Input
                          placeholder="Enter Pincode..."
                          className=""
                          labelData="Enter Pincode"
                          required="*"
                          name="PinCode"
                          value={formData.pincode}
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
