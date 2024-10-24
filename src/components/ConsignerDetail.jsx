/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { act, useState } from "react";
import { Accordion } from "./ui/Accordian";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Select from "./ui/Select";
import Errors from "./ui/Errors";

function ConsignerDetail({
  isOpen,
  stepNumber,
  onToggle,
  activeState,
  setActiveState,
  // ...props
}) {
  const users = [
    { value: "usa", label: "9998887776/John Doe/test@gmail.com" },
    { value: "india", label: "497979429/Immanual/user@gmail.com" },
    { value: "russia", label: "8746758987/crentix/crentix@gmail.com" },
    { value: "japan", label: "8947687465/Dentist/dentist@gmail.com" },
  ];
  const [error, setError] = useState({});
  const [consignerDetail, setConsignerDetail] = useState({
    customer: "",
  });
  function validateForm(data) {
    const errors = {};

    return errors;
  }
  function handleSelectChange(option) {
    setConsignerDetail((prev) => ({
      ...prev,
      customer: option.value,
    }));
    if (error.customer) {
      setError((prev) => ({
        ...prev,
        customer: undefined,
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Input Validation
    const newErrors = validateForm(consignerDetail);
    setError(newErrors);
    console.log(activeState);
    if (Object.keys(newErrors).length === 0) {
      setActiveState(2);
    } else {
      console.log("Validation failed due to error");
    }
    console.log(activeState);
    // setActiveStep(step+1)
  }

  return (
    <div>
      <Accordion
        items={[
          {
            title: "Consignor Details",
          },
        ]}
        stepNumber={stepNumber}
        isOpen={activeState === 1} // isopen={activestate===1}
        onToggle={() => setActiveState(1)} //instead pass setActivestate
        activeState={activeState}
      >
        <div className="px-6 py-4">
          <form onSubmit={handleSubmit}>
            {/* onSubmit={()=>setActiveStep(step+1)} */}
            <p className="text-sm">Search Customer</p>
            <div>
              <Select
                title="Customer"
                id="country-select"
                required
                options={users}
                name="customer"
                value={consignerDetail.customer}
                onChange={handleSelectChange}
                className="px-6 text-sm mt-1 appearance-none row-start-1 col-start-1 text-slate-400 w-[400px] accent-[]"
              />
              <Errors name={error.customer} />
            </div>

            <div className="flex justify-end items-center mt-4">
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

export default ConsignerDetail;
