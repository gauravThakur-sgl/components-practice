import Input from "./ui/Input";

function BillingDetail() {
  return (
    <div>
      <h2 className="text-sm font-semibold mt-4">Billing Address</h2>
      <div className="grid grid-cols-3 justify-start items-center gap-4 mt-2">
        <div>
          <Input
            placeholder="Enter Address 1..."
            className=""
            labelData="Address 1"
            required="*"
            name="billingAddress1"
            // value={formData.billingAddress1}
            // onChange={handleInputChange}
          />
          {/* {errors.address1 && (
            <span className="text-sm font-medium text-red-500">
              {errors.address1}
            </span>
          )} */}
        </div>
        <div>
          <Input
            placeholder="Enter Address 2..."
            className=""
            labelData="Address 2"
            required="*"
            name="billingAddress2"
            // value={formData.billingAddress2}
            // onChange={handleInputChange}
          />
          {/* {errors.address2 && (
            <span className="text-sm font-medium text-red-500">
              {errors.address2}
            </span>
          )} */}
        </div>
        <Input
          placeholder="Enter Landmark..."
          className=""
          labelData="Landmark"
          name="billingLandMark"
        //   value={formData.billingLandmark}
        //   onChange={handleInputChange}
        />
        {/* <div>
          <p>Country</p>
          <Select
            title="Country"
            id="country-select"
            required="*"
            options={countries}
            onChange={(e) =>
              handleInputChange({
                target: { name: "billingCountry", value: e.target.value },
              })
            }
            className="px-2"
            // value={formData.billingCountry}
          />
        </div> */}
        {/* <div>
          <p>State</p>
          <Select
            title="State"
            id="state-select"
            options={states[selectedCountry] || []}
            onChange={(e) =>
              handleInputChange({
                target: { name: "billingState", value: e.target.value },
              })
            }
            className="px-2"
            value={formData.state}
          />
        </div> */}
        <div>
          <Input
            placeholder="Enter Email ID..."
            className=""
            labelData="Email Address"
            required="*"
            name="billingEmail"
            // value={formData.billingEmail}
            // onChange={handleInputChange}
          />
          {/* {errors.billingEmail && (
            <span className="text-sm font-medium text-red-500">
              {errors.billingEmail}
            </span>
          )} */}
        </div>
        <div>
          <Input
            placeholder="Enter City..."
            className=""
            labelData="Enter City"
            required="*"
            name="billingCity"
            // value={formData.billingCity}
            // onChange={handleInputChange}
          />
          {/* {errors.city && (
            <span className="text-sm font-medium text-red-500">
              {errors.city}
            </span>
          )} */}
        </div>
        <Input
          placeholder="Enter Pincode..."
          className=""
          labelData="Enter Pincode"
          required="*"
          name="billingPinCode"
        //   value={formData.billingPincode}
        //   onChange={handleInputChange}
        />
      </div>
    </div>
  );
}

export default BillingDetail;
