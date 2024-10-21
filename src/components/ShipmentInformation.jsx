/* eslint-disable react/prop-types */
import { useState } from "react";
import { Accordion } from "./ui/Accordian";
import Button from "./ui/Button";
// import Button from "./ui/Button"
import Input from "./ui/Input";
import Select from "./ui/Select";
import { RiDeleteBin6Line } from "react-icons/ri";

function ShipmentInformation({ stepNumber, isOpen, nextStep, onToggle,activeState }) {
  const [formData, setFormData] = useState({
    invoiceNumber: "",
    invoiceDate: "",
    invoiceCurrency: "",
    orderRefrenceId: "",
    iossNumber: "",
    deadWeight: "",
    length: "",
    breadth: "",
    height: "",
    productName: "",
    sku: "",
    hsn: "",
    qty: "",
    unitPrice: "",
    igst: "",
  });
  const [errors, setErrors] = useState({});
  function validateForm(data) {
    const errors = {};
    if (!data.invoiceNumber.trim()) {
      errors.invoiceNumber = "Invoice number required"; // Invoice Number
    }

    if (!data.iossNumber.trim()) {
      errors.iossNumber = "IOSS number required"; // Ioss Number
    }

    
    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      nextStep();
      // onToggle={onToggle}
    } else {
      console.log("Form Submission Failed due to validation errors.");
    }
  }
  // const [checkbox, setCheckbox] = useState(0);
  const [products, setProducts] = useState([
    { productName: "", sku: "", hsn: "", qty: "", unitPrice: "", igst: "" },
  ]);

  // Add Product
  const addProduct = () => {
    setProducts([
      ...products,
      { productName: "", sku: "", hsn: "", qty: "", unitPrice: "", igst: "" },
    ]);
    console.log(products);
  };

  // Removes Product
  const removeProduct = (index) => {
    // const updatedProducts = products.filter((_, i) => i !== index);
    const updatedProducts = [];
    for (let i = 0; i < products.length; i++) {
      if (i !== index) {
        updatedProducts.push(products[i]);
      }
      console.log(index);
    }
    setProducts(updatedProducts);
    console.log(updatedProducts);
  };

  // Handle Product Change
  const handleProductChange = (e) => {
    const { index, name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    products.map((products, i) => {
      if (i === index) {
        return { ...products, [name]: value };
      }
      return products;
    });
  };

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
        isOpen={isOpen}
        onToggle={onToggle}
        activeState={activeState}
      >
        <div className="px-6 py-4">
          <form action="" onSubmit={handleSubmit}>
            {/* // Invoice Details */}
            <div
              className={`grid grid-cols-3 justify-start items-center gap-4 mt-2 `}
            >
              <div>
                <Input
                  placeholder="Enter Invoice Number..."
                  required="*"
                  className=""
                  labelData="Invoice Number"
                  name="invoiceNumber"
                  value={formData.invoiceNumber}
                  onChange={handleProductChange}
                />
                {errors.invoiceNumber && (
                  <span className="text-xs font-medium text-red-500">
                    {errors.invoiceNumber}
                  </span>
                )}
              </div>
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

              <div>
                <Input
                  type="text"
                  placeholder="Enter Order/Reference ID..."
                  required="*"
                  className=""
                  labelData="Order/Reference ID"
                  name="orderId"
                  value={formData.orderRefrenceId}
                  onChange={handleProductChange}
                />
                {errors.orderRefrenceId && (
                  <span className="text-xs font-medium text-red-500">
                    {errors.orderRefrenceId}
                  </span>
                )}
              </div>

              <div>
                <Input
                  type="text"
                  placeholder="Enter IOSS Number..."
                  required="*"
                  className=""
                  labelData="IOSS Number"
                  name="iossNumber"
                  value={formData.iossNumber}
                  onChange={handleProductChange}
                />
                {errors.iossNumber && (
                  <span className="text-xs font-medium text-red-500">
                    {errors.iossNumber}
                  </span>
                )}
              </div>
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
                      value={formData.deadWeight}
                      onChange={handleProductChange}
                    />
                    <div className="flex h-10 mt-2 -ml-[36px]">
                      <span className=" flex justify-center items-baseline items-baseline bg-[#ececec] p-2 rounded-md">
                        kg
                      </span>
                    </div>
                  </div>
                  {errors.deadWeight && (
                    <span className="text-xs font-medium text-red-500">
                      {errors.deadWeight}
                    </span>
                  )}
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
                      value={formData.length}
                      onChange={handleProductChange}
                    ></Input>
                    <div className="flex h-10 mt-2 -ml-[36px]">
                      <span className=" flex justify-center items-baseline items-baseline text-sm bg-[#ececec] p-2 rounded-md">
                        cm
                      </span>
                    </div>
                  </div>
                  {errors.length && (
                    <span className="text-xs font-medium text-red-500">
                      {errors.length}
                    </span>
                  )}
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
                      value={formData.breadth}
                    />
                    <div className="flex h-10 mt-2 -ml-[36px]">
                      <span className=" flex justify-center items-baseline items-baseline text-sm bg-[#ececec] p-2 rounded-md">
                        cm
                      </span>
                    </div>
                  </div>
                  {errors.breadth && (
                    <span className="text-xs font-medium text-red-500">
                      {errors.breadth}
                    </span>
                  )}
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
                      value={formData.height}
                      onChange={handleProductChange}
                    />
                    <div className="flex h-10 mt-2 -ml-[36px]">
                      <span className=" flex justify-center items-baseline items-baseline bg-[#ececec] text-sm p-2 rounded-md">
                        cm
                      </span>
                    </div>
                  </div>
                  {errors.height && (
                    <span className="text-xs text-red-500 font-medium">
                      {errors.height}
                    </span>
                  )}
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
              {products.map((products, index) => (
                <div
                  key={index}
                  className={`flex flex-col justify-center items-center md:flex-row gap-2 mt-4 w-full ${
                    index > 0 ? "pr-2" : "pr-[35px]"
                  }`}
                >
                  <div>
                    <Input
                      placeholder="Enter Product Name..."
                      required="*"
                      labelData="Product Name"
                      className="w-full"
                      value={formData.productName}
                      onChange={handleProductChange}
                    />
                    {errors.productName && (
                      <span className="text-xs text-red-500 font-medium">
                        {errors.productName}
                      </span>
                    )}
                  </div>
                  <Input placeholder="Enter SKU... " labelData="SKU" />
                  <div>
                    <Input
                      placeholder="Enter HSN..."
                      required="*"
                      labelData="HSN"
                      className="w-full"
                      value={formData.hsn}
                      onChange={handleProductChange}
                    />
                    {errors.hsn && (
                      <span className="text-xs text-red-500 font-medium">
                        {errors.hsn}
                      </span>
                    )}
                  </div>
                  <div>
                    <Input
                      placeholder="Enter Qty..."
                      required="*"
                      labelData="Qty"
                      className="w-full"
                      value={formData.qty}
                      onChange={handleProductChange}
                    />
                    {errors.qty && (
                      <span className="text-xs text-red-500 font-medium">
                        {errors.qty}
                      </span>
                    )}
                  </div>
                  <div>
                    <Input
                      placeholder="Enter Unit Price (INR)..."
                      required="*"
                      labelData="Unit Price (INR)"
                      className="w-full"
                      value={formData.unitPrice}
                      onChange={handleProductChange}
                    />
                    {errors.unitPrice && (
                      <span className="text-xs text-red-500 font-medium">
                        {errors.unitPrice}
                      </span>
                    )}
                  </div>
                  <div>
                    <Input
                      placeholder="0%"
                      required="*"
                      labelData="IGST"
                      className="w-full"
                      value={formData.igst}
                      onChange={handleProductChange}
                    />
                    {errors.igst && (
                      <span className="text-xs text-red-500 font-medium">
                        {errors.igst}
                      </span>
                    )}
                  </div>
                  {index > 0 && (
                    <div className="mt-4" onClick={() => removeProduct(index)}>
                      <RiDeleteBin6Line className="h-[20px] w-[20px] mt-2 text-red-primary cursor-pointer" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-2"></div>
            {/* // Add Another Product */}
            <div className="flex justify-between items-center mt-8">
              {/* Add More Items button */}
              <a
                href=""
                className="text-[#1F499E]"
                onClick={(e) => {
                  e.preventDefault();
                  addProduct();
                }}
              >
                +
                <span>
                  <u>Add Another Product</u>
                </span>
              </a>

              <p className=" font-semibold">
                Total Price : INR{" "}
                {products
                  .reduce(
                    (total, product) =>
                      total +
                      (parseFloat(product.unitPrice) *
                        parseFloat(product.qty) || 0),
                    0
                  )
                  .toFixed(2)}
              </p>
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
