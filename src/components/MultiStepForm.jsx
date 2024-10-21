import { useState } from "react";
import ConsigneeDetail from "./ConsigneeDetail";
import ShipmentInformation from "./ShipmentInformation";
import ShippingPartner from "./ShippingPartner";

import ConsignerDetail from "./ConsignerDetail";

function MultiStepForm() {
  const [activeState, setActiveState] = useState(1);
  return (
    <div className="bg-white">
      <div className="mt-8 space-y-1">
        <ConsignerDetail
          stepNumber={1}
          isOpen={activeState === 1} //remove this
          onToggle={() => setActiveState(1)} //dremove the practice of passing running functions as props //remove
          nextStep={() => setActiveState(2)}//remove
          activeState={activeState}
          //setActiveStep={...}
        />
        <ConsigneeDetail
          stepNumber={2}
          isOpen={activeState === 2}
          onToggle={() => setActiveState(2)}
          nextStep = {() => setActiveState(3)}
          activeState={activeState}
        />
        <ShipmentInformation
          stepNumber={3}
          isOpen={activeState === 3}
          onToggle={() => setActiveState(3)}
          nextStep = {() => setActiveState(4)}
          activeState={activeState}
        />
        <ShippingPartner
          stepNumber={4}
          isOpen={activeState === 4}
          onToggle={() => setActiveState(4)}
          
        />
      </div>
    </div>
  );
}

export default MultiStepForm;
