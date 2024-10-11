import { useState } from "react";
import { Accordion } from "./ui/Accordian";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Select from "./ui/Select";

function ConsigneeDetails() {
  const [selectedCountry, setSelectedCountry] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [selectedState, setSelectedState] = useState("");


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
    middleName: "",
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
  const [error, setError] = useState("");
  function handleInputChange(e) {
    const { name, value } = e.target;
    console.log(name, value, "dshjsjh");
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (!value.trim()) {
      setError("This field is required.");
    } else {
      setError("");
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
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
          <div className="bg-white px-6 mt-4">
            <h2 className="font-bold text-lg">Personal Details</h2>
            <div className="grid grid-cols-3 justify-start items-center gap-4 mt-2">
              <div>
                <Input
                  placeholder="Enter First Name..."
                  className="placeholder:font-semibold"
                  labelData="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {error && <p>{error}</p>}
              </div>
              <Input
                placeholder="Enter Last Name..."
                className="placeholder:font-semibold"
                labelData="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />

              <Input
                placeholder="Enter Middle Name..."
                className="placeholder:font-semibold"
                labelData="Middle Name"
                name="middleName"
                value={formData.middleName}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Enter Email ID..."
                className="placeholder:font-semibold"
                labelData="Email Address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <h2 className="font-bold text-lg mt-4">Shipping Address</h2>
              <div className="grid grid-cols-3 justify-start items-center gap-4 mt-2">
                <Input
                  placeholder="Enter Address1..."
                  className="placeholder:font-semibold"
                  labelData="Address 1"
                  name="Address 1"
                  value={formData.address1}
                  onChange={handleInputChange}
                />
                <Input
                  placeholder="Enter Address2..."
                  className="placeholder:font-semibold"
                  labelData="Address 2"
                  name="Address 2"
                  value={formData.address2}
                  onChange={handleInputChange}
                />
                <Input
                  placeholder="Enter Landmark..."
                  className="placeholder:font-semibold"
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
                <Input
                  placeholder="Enter Email ID..."
                  className="placeholder:font-semibold"
                  labelData="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <Input
                  placeholder="Enter City..."
                  className="placeholder:font-semibold"
                  labelData="Enter City"
                  name="City"
                  value={formData.city}
                  onChange={handleInputChange}
                />

                <Input
                  placeholder="Enter Pincode..."
                  className="placeholder:font-semibold"
                  labelData="Enter Pincode"
                  name="PinCode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="inline-flex justify-start items-center gap-2 mt-6">
                <input
                  type="checkbox"
                  id="checkbox"
                  name="addressPreference"
                  className="cursor-pointer accent:bg-[#2E5FAD]"
                  checked={formData.addressPreference}
                  onChange={handleInputChange}
                />
                <label htmlFor="checkbox" className="text-sm inline-flex">
                  Billing address is same as shipping address
                </label>
              </div>
            </div>
            <div className="flex justify-end items-center m-2">
              <Button
                type="submit"
                title="Continue"
                className="bg-[#2E5FAD] p-1"
              />
            </div>
          </div>
        </Accordion>
      </form>
    </div>
  );
}

export default ConsigneeDetails;
