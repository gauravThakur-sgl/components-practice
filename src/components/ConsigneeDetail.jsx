/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Accordion } from "./ui/Accordian";
import Input from "./ui/Input";
import Select from "./ui/Select";
import Button from "./ui/Button";
import CheckBox from "./ui/CheckBox";

function ConsigneeDetail({stepNumber,...props}) {
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

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setSelectedState("");
    // setFormData((prevData) => ({
    //   ...prevData,
    //   shippingCountry: country,
    //   shippingState: "",
    // }));
  };
  const handleStateChange = (e) => {
    const state = e.target.value;
    // setSelectedState(state);
    // setFormData((prevData) => ({
    //   ...prevData,
    //   shippingState: state,
    // }));
  };
  return (
    <div>
      <Accordion
        items={[
          {
            title: "Consignee Details",
          },
        ]}
        stepNumber={stepNumber}
      >
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
            />
            <Input
              placeholder="Enter Last Name..."
              className=""
              labelData="Last Name"
              name="lastName"
            />
            <Input
              placeholder="Enter Mobile Number..."
              required="*"
              className=""
              labelData="Mobile Number"
              name="mobileNumber"
            />
            <Input
              placeholder="Enter Email ID..."
              className=""
              labelData="Email Address"
              required="*"
              name="email"
            />
          </div>
          <h2 className="text-sm font-semibold mt-4">Shipping Address</h2>
          <div className="grid grid-cols-3 justify-start items-center gap-4 mt-2">
            <Input
              placeholder="Enter Address 1..."
              className=""
              labelData="Address 1"
              required="*"
              name="shippingAddress1"
              //   value={formData.shippingAddress1}
              //   onChange={handleInputChange}
            />
            <Input
              placeholder="Enter Address 2..."
              className=""
              labelData="Address 2"
              required="*"
              name="shippingAddress2"
            />
            <Input
              placeholder="Enter Landmark..."
              className=""
              labelData="Landmark"
              name="shippingLandMark"
            />
            <div>
              <p className="text-sm">
                Country{" "}
                <span className="text-sm font-normal text-red-primary">*</span>
              </p>
              <Select
                title="Country"
                id="country-select"
                required="*"
                options={countries}
                onChange={handleCountryChange}
                className="px-2 text-sm mt-1"
                //   value={formData.shippingCountry}
              />
            </div>
            <div>
              <p className="text-sm">
                State{" "}
                <span className="text-sm font-normal text-red-primary">*</span>
              </p>
              <Select
                title="State"
                id="state-select"
                options={states[selectedCountry] || []}
                onChange={handleStateChange}
                className="px-2 text-sm mt-1"
                //   value={formData.shippingState}
              />
            </div>
            <Input
              placeholder="Enter City..."
              className=""
              labelData="Enter City"
              required="*"
              name="shippingCity"
            />
            <Input
              placeholder="Enter Pincode..."
              className=""
              labelData="Enter Pincode"
              required="*"
              name="shippingPinCode"
            />
          </div>
          <div className="inline-flex justify-start items-center text-sm gap-2 mt-6">
            <CheckBox
              type="checkbox"
              name="addressPreference"
              id="checkbox2"
              labelData="Billing address is same as shipping address"
            />
          </div>

          <div className="flex justify-end items-center mt-4">
            <Button
              type="submit"
              title="Continue"
              className=" text-sm font-semibold flex justify-end items-center"
            />
          </div>
        </div>
      </Accordion>
    </div>
  );
}

export default ConsigneeDetail;
