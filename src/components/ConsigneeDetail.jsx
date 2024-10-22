/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Accordion } from "./ui/Accordian";
import Input from "./ui/Input";
import Select from "./ui/Select";
import Button from "./ui/Button";
import CheckBox from "./ui/CheckBox";
import BillingDetail from "./BillingDetail";
import Errors from "./ui/Errors";

function ConsigneeDetail({
  stepNumber,
  isOpen,
  onToggle,
  activeState,
  setActiveState,
  ...props
}) {
  const [checked, setChecked] = useState(true);
  function handleCheckbox() {
    setChecked(!checked);
  }
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
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
    shippinglandmark: "",
    shippingcountry: "",
    shippingstate: "",
    shippingcity: "",
    shippingPincode: "",
  });
  const [errors, SetErrors] = useState({});
  function validateForm(data) {
    const errors = {};
    // check First Name

    // const Properties = [
    // {
    //   key:"firstname",
    //   regex:"djknjkd",
    //   regexError:"knjklnd is enklenlke",
    //   placeholderName:"First name"
    // },
    // {
    //   key:"firstname",
    //   regex:"djknjkd",
    //   regexError:"knjklnd is enklenlke",
    //   placeholderName:"First name"
    // },
    // ]
    //Properties.map((prop)=> if(!data.prop.key.trim(){errors.prop.key = `${prop.placeholdername} is required`}))
    //elseif(prop.regex.test(data.prop.key){error.prop.key = prop.regexError})

    if (!data.firstName.trim()) {
      errors.firstName = "First name is required";
    } else if (!/^[A-Za-z]+$/i.test(data.firstName)) {
      errors.firstName = "Please enter alphabetic characters";
    }
    // check last Name
    if (!data.lastName.trim()) {
      errors.lastName = "Last name is required";
    } else if (!/^[A-Za-z]+$/i.test(data.lastName)) {
      errors.lastName = "Please enter alphabetic characters";
    }
    // Check Mobile Number
    if (!data.mobileNumber.trim()) {
      errors.mobileNumber = "Mobile number is required";
    } else if (data.mobileNumber.length < 10) {
      errors.mobileNumber = "10 digit number required";
    } else if (
      !/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/i.test(
        data.mobileNumber
      )
    ) {
      errors.mobileNumber = "invalid mobile number";
    }
    // Check email
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\b[\w\\.-]+@[\w\\.-]+\.\w{2,4}\b$/i.test(data.email)) {
      errors.email = "invalid email";
    }
    // Check Shipping Address 1
    if (!data.shippingAddress1.trim()) {
      errors.shippingAddress1 = "Address 1 is required";
    }
    // Check Shipping Address 2
    if (!data.shippingAddress2.trim()) {
      errors.shippingAddress2 = "Address 2 is required";
    }
    // Check City
    if (!data.shippingcity.trim()) {
      errors.shippingcity = "City is required";
    }
    if (!data.shippingPincode.trim()) {
      errors.shippingPincode = "Pincode is required";
    } else if (data.shippingPincode.length < 6) {
      errors.shippingPincode = "Pincode must be of 6 digit";
    }
    console.log(errors);
    return errors;
  }

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
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validateForm(formData);
    SetErrors(newErrors);
    console.log(formData);
    if (Object.keys(newErrors).length === 0) {
      setActiveState(3);
      console.log(activeState);
    } else {
      console.log("Form submission failed due to validation errors. ");
    }
  }

  return (
    <div>
      <Accordion
        items={[
          {
            title: "Consignee Details",
          },
        ]}
        stepNumber={stepNumber}
        isOpen={activeState === 2}
        onToggle={() => setActiveState(2)}
        // onToggle={()=>console.log("first")}
        activeState={activeState}
      >
        <form action="" onSubmit={handleSubmit}>
          <div className="px-6 py-4">
            <h2 className="text-sm font-semibold"> Personal Details</h2>
            <div
              className={`grid grid-cols-3 justify-start items-center gap-4 mt-2 `}
            >
              <Input
                placeholder="Enter First Name..."
                required="*"
                className=""
                labelData="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                errorName={errors.firstName}
              />

              <Input
                placeholder="Enter Last Name..."
                required="*"
                className=""
                labelData="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                errorname={errors.lastname}
              />

              <Input
                placeholder="Enter Mobile Number..."
                required="*" //required
                className=""
                labelData="Mobile Number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                errorName={errors.mobileNumber}
              />
              <Input
                placeholder="Enter Email ID..."
                className=""
                labelData="Email Address"
                required="*"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                errorName={errors.email}
              />
            </div>

            {/* Shipping Address */}
            <h2 className="text-sm font-semibold mt-4">Shipping Address</h2>
            <div className="grid grid-cols-3 justify-start items-center gap-4 mt-2">
              <Input
                placeholder="Enter Address 1..."
                className=""
                labelData="Address 1"
                required="*"
                name="shippingAddress1"
                value={formData.shippingAddress1}
                onChange={handleInputChange}
                errorName={errors.shippingAddress1}
              />
              <Input
                placeholder="Enter Address 2..."
                className=""
                labelData="Address 2"
                required="*"
                name="shippingAddress2"
                value={formData.shippingAddress2}
                onChange={handleInputChange}
                errorName={errors.shippingAddress2}
              />
              <Input
                placeholder="Enter Landmark..."
                className=""
                labelData="Landmark"
                name="shippinglandmark"
                value={formData.shippinglandmark}
                onChange={handleInputChange}
              />
              <div>
                <p className="text-sm">
                  Country{" "}
                  <span className="text-sm font-normal text-red-primary">
                    *
                  </span>
                </p>
                <Select
                  title="Country"
                  id="country-select"
                  required={false}
                  options={countries}
                  onChange={handleInputChange}
                  className="px-2 text-sm mt-1"
                />
              </div>
              <div>
                <p className="text-sm">
                  State{" "}
                  <span className="text-sm font-normal text-red-primary">
                    *
                  </span>
                </p>
                <Select
                  title="State"
                  id="state-select"
                  options={states[selectedCountry] || []}
                  onChange={handleStateChange}
                  className="px-2 text-sm mt-1"
                  value={formData.shippingState}
                />
              </div>
              <Input
                placeholder="Enter City..."
                className=""
                labelData="Enter City"
                required="*"
                name="shippingcity"
                value={formData.shippingcity}
                onChange={handleInputChange}
                errorName={errors.shippingcity}
              />
              <Input
                placeholder="Enter Pincode..."
                className=""
                labelData="Enter Pincode"
                required="*"
                name="shippingPincode"
                value={formData.shippingPincode}
                onChange={handleInputChange}
                errorName={errors.shippingPincode}
              />
            </div>
            <div className="inline-flex justify-start items-center text-sm gap-2 mt-6">
              <CheckBox
                type="checkbox"
                name="addressPreference"
                id="checkbox2"
                labelData="Billing address is same as shipping address"
                onClick={handleCheckbox}
                checked={checked}
              />
            </div>
            {!checked && <BillingDetail className="" />}

            <div className="flex justify-end items-center mt-4">
              <Button
                type="submit"
                title="Continue"
                className=" text-sm font-semibold flex justify-end items-center"
              />
            </div>
          </div>
        </form>
      </Accordion>
    </div>
  );
}

export default ConsigneeDetail;
