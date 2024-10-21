/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { act, useState } from "react";
import { Accordion } from "./ui/Accordian";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Select from "./ui/Select";

function ConsignerDetail({
  isOpen,
  nextStep,
  stepNumber,
  onToggle,
  activeState,
  ...props
}) {
  const [error, setError] = useState({});
  function validateForm(data) {
    const errors = {};
    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Input Validation
    nextStep();
  }
  const users = [
    { value: "usa", label: "9998887776/John Doe/test@gmail.com" },
    { value: "india", label: "497979429/Immanual/user@gmail.com" },
    { value: "russia", label: "8746758987/crentix/crentix@gmail.com" },
    { value: "japan", label: "8947687465/Dentist/dentist@gmail.com" },
  ];
  return (
    <div>
      <Accordion
        items={[
          {
            title: "Consignor Details",
          },
        ]}
        stepNumber={stepNumber}
        isOpen={isOpen}
        onToggle={onToggle}
        activeState={activeState}
      >
        <div className="px-6 py-4">
          <form onSubmit={handleSubmit}>
            <p className="text-sm">Search Customer</p>
            <Select
              title="Customer"
              id="country-select"
              required="*"
              options={users}
              className="px-6 text-sm mt-1 appearance-none row-start-1 col-start-1 text-slate-400 w-[400px] accent-[]"
            />

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
