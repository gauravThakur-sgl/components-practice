/* eslint-disable react/prop-types */
import { useState } from "react";
import { Accordion } from "./ui/Accordian";
import Button from "./ui/Button";
// import Button from "./ui/Button"
import Input from "./ui/Input";
import Select from "./ui/Select";
import { RiDeleteBin6Line } from "react-icons/ri";

function ShipmentInformation({ stepNumber }) {
    
  const [checkbox, setCheckbox] = useState(0);
  const addItem = (e) => {
    e.preventDefault();
    setCheckbox(checkbox + 1)
    console.log(checkbox)
  };
  const deleteItem = (e) => {
    e.preventDefault()
    setCheckbox(checkbox - 1)
    console.log(checkbox)
  }
  const currency = [
    { value: "USD", label: "USD" },
    { value: "INR", label: "INR" },
  ];
  return (
    <div>
      <Accordion
        items={[
          {
            title: "Shipment Information",
          },
        ]}
        stepNumber={stepNumber}
      >
        <div className="px-6 py-4">
          <form action="">
            {/* // Invoice Details */}
            <div
              className={`grid grid-cols-3 justify-start items-center gap-4 mt-2 `}
            >
              <Input
                placeholder="Enter Invoice Number..."
                required="*"
                className=""
                labelData="Invoice Number"
                name="invoiceNumber"
              />
              <Input
                type="date"
                required="*"
                className=""
                labelData="Invoice Date"
                name="invoiceDate"
              />
              <div>
                <p className="text-sm">
                  Invoice Currency{" "}
                  <span className="text-sm font-normal text-red-primary">
                    *
                  </span>
                </p>
                <Select
                  title="INR"
                  id="currency-select"
                  options={currency || []}
                  className="px-2 text-sm mt-1"
                  //   value={formData.shippingState}
                />
              </div>
              <Input
                type="text"
                placeholder="Enter Order/Reference ID..."
                required="*"
                className=""
                labelData="Order/Reference ID"
                name="orderId"
              />
              <Input
                type="text"
                placeholder="Enter IOSS Number..."
                required="*"
                className=""
                labelData="IOSS Number"
                name="iossNumber"
              />
            </div>

            {/* // Box Measurements */}
            <div className="mt-6">
              <h2 className="text-sm font-semibold">Box Measurements</h2>
              <div className="flex justify-center items-center rounded-md gap-2 mt-3">
                <div className="">
                  <label htmlFor="" className="text-sm">
                    Dead Weight
                    <span className="text-sm text-red-primary">*</span>
                  </label>
                  <div className="inline-flex flex-row ">
                    <Input
                      type="number"
                      placeholder="Eg. 1.25"
                      // required="*"
                      // labelData="Dead Weight"
                      className="m-0 p-0 appearance-none focus:ring-0 focus:border-0"
                    ></Input>
                    <div className="flex h-10 mt-2 -ml-[36px]">
                      <span className=" flex justify-center items-baseline items-baseline bg-[#ececec] p-2 rounded-md">
                        kg
                      </span>
                    </div>
                  </div>
                </div>
                <div className="">
                  <label htmlFor="" className="text-sm">
                    Length
                    <span className="text-sm text-red-primary">*</span>
                  </label>
                  <div className="inline-flex flex-row ">
                    <Input
                      type="number"
                      placeholder="Eg. 1.25"
                      // required="*"
                      // labelData="Dead Weight"
                      className="m-0 p-0 appearance-none focus:ring-0 focus:border-0"
                    ></Input>
                    <div className="flex h-10 mt-2 -ml-[36px]">
                      <span className=" flex justify-center items-baseline items-baseline bg-[#ececec] p-2 rounded-md">
                        cm
                      </span>
                    </div>
                  </div>
                </div>
                <div className="">
                  <label htmlFor="" className="text-sm">
                    Breadth
                    <span className="text-sm text-red-primary">*</span>
                  </label>
                  <div className="inline-flex flex-row ">
                    <Input
                      type="number"
                      placeholder="Eg. 1.25"
                      // required="*"
                      // labelData="Dead Weight"
                      className="m-0 p-0 appearance-none focus:ring-0 focus:border-0"
                    ></Input>
                    <div className="flex h-10 mt-2 -ml-[36px]">
                      <span className=" flex justify-center items-baseline items-baseline bg-[#ececec] p-2 rounded-md">
                        cm
                      </span>
                    </div>
                  </div>
                </div>
                <div className="">
                  <label htmlFor="" className="text-sm">
                    Height
                    <span className="text-sm text-red-primary">*</span>
                  </label>
                  <div className="inline-flex flex-row ">
                    <Input
                      type="number"
                      placeholder="Eg. 1.25"
                      // required="*"
                      // labelData="Dead Weight"
                      className="m-0 p-0 appearance-none focus:ring-0 focus:border-0"
                    ></Input>
                    <div className="flex h-10 mt-2 -ml-[36px]">
                      <span className=" flex justify-center items-baseline items-baseline bg-[#ececec] p-2 rounded-md">
                        cm
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* // Items Details */}
            <div className="mt-6">
              <div className="flex justify-start items-center gap-2 pt-3">
                <h2 className="text-sm font-semibold">Items(s) Details</h2>
                <p className="text-red-500 bg-[#FFF6E4] text-xs font-light rounded-sm px-1">
                  Items that can export
                </p>
              </div>
              <div className="flex flex-col justify-center items-center md:flex-row gap-2 mt-4 pr-8 w-full">
                <Input
                  placeholder="Enter Product Name..."
                  required="*"
                  labelData="Product Name"
                  className="w-full"
                />
                <Input placeholder="Enter SKU... " labelData="SKU" />
                <Input
                  placeholder="Enter HSN..."
                  required="*"
                  labelData="HSN"
                  className="w-full"
                />
                <Input
                  placeholder="Enter Qty..."
                  required="*"
                  labelData="Qty"
                  className="w-full"
                />
                <Input
                  placeholder="Enter Unit Price (INR)..."
                  required="*"
                  labelData="Unit Price (INR)"
                  className="w-full"
                />
                <Input
                  placeholder="0%"
                  required="*"
                  labelData="IGST"
                  className="w-full"
                />
              </div>
              
            </div>
            <div className="mt-2"></div>
            {/* // Add Another Product */}
            <div>
              {/* Add More Items after Clicking */}
              {checkbox  && (
                <div className="flex justify-center items-center gap-2">
                  <div className="flex flex-col justify-center items-center md:flex-row gap-2 mt-4 w-full">
                    <Input
                      placeholder="Enter Product Name..."
                      required="*"
                      labelData="Product Name"
                      className="w-full"
                    />
                    <Input placeholder="Enter SKU... " labelData="SKU" />
                    <Input
                      placeholder="Enter HSN..."
                      required="*"
                      labelData="HSN"
                      className="w-full"
                    />
                    <Input
                      placeholder="Enter Qty..."
                      required="*"
                      labelData="Qty"
                      className="w-full"
                    />
                    <Input
                      placeholder="Enter Unit Price (INR)..."
                      required="*"
                      labelData="Unit Price (INR)"
                      className="w-full"
                    />
                    <Input
                      placeholder="0%"
                      required="*"
                      labelData="IGST"
                      className="w-full"
                    />
                  </div>
                  <div className="mt-4" onClick={deleteItem}>
                    <RiDeleteBin6Line className="h-[20px] w-[20px] mt-4 text-red-primary" />
                  </div>
                </div>
              )}
            </div>
            <div
              className="flex justify-between items-center mt-8"
              onClick={addItem}
            >
              {/* Add More Items button */}
              <a href="" className="text-[#1F499E]">
                +
                <span>
                  <u>Add Another Product</u>
                </span>
              </a>

              <p className=" font-semibold">Total Price : INR 0.00</p>
            </div>

            {/* // Continue Button */}
            <div className="flex justify-end items-center mt-6">
              <Button
                type="submit"
                title="Continue"
                className=" text-sm font-semibold flex justify-end items-center"
              />
            </div>
          </form>
        </div>
      </Accordion>
    </div>
  );
}

export default ShipmentInformation;
