import { useState } from "react";
import Input from "./ui/Input";
import Select from "./ui/Select";
function BillingDetail({className}) {
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
  // const handleCountryChange = (e) => {
  //   const country = e.target.value;
  //   setSelectedCountry(country);
  //   setSelectedState("");
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     shippingCountry: country,
  //     shippingState: "",
  //   }));
  // };
  // const handleStateChange = (e) => {
  //   const state = e.target.value;
  //   setSelectedState(state);
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     shippingState: state,
  //   }));
  // };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    billingAddress1: "",
    shippingAddress2: "",
    shippinglandmark: "",
    shippingcountry: "",
    shippingstate: "",
    shippingcity: "",
    shippingPincode: "",
  });
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <div className={`${className}`}>
      <h2 className="text-sm font-semibold mt-4">Shipping Address</h2>
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
          {/* {errors.billingAddress1 && (
                  <span className="text-xs font-medium text-red-500">
                    {errors.billingAddress1}
                  </span>
                )} */}
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
          {/* {errors.shippingAddress2 && (
                  <span className="text-xs font-medium text-red-500">
                    {errors.shippingAddress2}
                  </span>
                )} */}
        </div>
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
            <span className="text-sm font-normal text-red-primary">*</span>
          </p>
          <Select
            title="Country"
            id="country-select"
            required="*"
            options={countries}
            onChange={handleInputChange}
            className="px-2 text-sm mt-1"
            value={formData.shippingcountry}
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
            onChange={handleInputChange}
            className="px-2 text-sm mt-1"
            //   value={formData.shippingState}
          />
        </div>
        <div>
          <Input
            placeholder="Enter City..."
            className=""
            labelData="Enter City"
            required="*"
            name="shippingcity"
            value={formData.shippingcity}
            onChange={handleInputChange}
          />
          {/* {errors.shippingcity && (
                  <span className="text-sm font-medium text-red-500">
                    {errors.shippingcity}
                  </span>
                )} */}
        </div>
        <div>
          <Input
            placeholder="Enter Pincode..."
            className=""
            labelData="Enter Pincode"
            required="*"
            name="shippingPincode"
            value={formData.shippingPincode}
            onChange={handleInputChange}
          />
          {/* {errors.shippingPincode && (
                  <span className="text-xs font-medium text-red-500">{errors.shippingPincode}</span>
                )} */}
        </div>
      </div>
    </div>
  );
}

export default BillingDetail;
