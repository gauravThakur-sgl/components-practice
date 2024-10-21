import { useState } from "react";
import ConsigneeDetail from "./ConsigneeDetail";
import ShipmentInformation from "./ShipmentInformation";
import ShippingPartner from "./ShippingPartner";

import ConsignerDetail from "./ConsignerDetail";

function MultiStepForm() {
  const [activeState, setActiveState] = useState(1);
  function toggleStep(step) {
    setActiveState(step);
    console.log(step)
  }


  return (
    <div className="bg-white">
      <div className="mt-8 space-y-1">
        <ConsignerDetail
          stepNumber={1}
          isOpen={activeState === 1}
          onToggle={() => toggleStep(1)}
          nextStep={() => setActiveState(2)}
          activeState={activeState}
        />
        <ConsigneeDetail
          stepNumber={2}
          isOpen={activeState === 2}
          onToggle={() => toggleStep(2)}
          nextStep = {() => setActiveState(3)}
          activeState={activeState}

        />
        <ShipmentInformation
          stepNumber={3}
          isOpen={activeState === 3}
          onToggle={() => toggleStep(3)}
          nextStep = {() => setActiveState(4)}
          activeState={activeState}
        />
        <ShippingPartner
          stepNumber={4}
          isOpen={activeState === 4}
          onToggle={() => toggleStep(4)}
          
        />
      </div>
    </div>
  );
}

export default MultiStepForm;