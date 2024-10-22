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
          activeState={activeState}
          setActiveState={setActiveState}
        />
        <ConsigneeDetail
          stepNumber={2}
          activeState={activeState}
          setActiveState={setActiveState}
        />
        <ShipmentInformation
          stepNumber={3}
          activeState={activeState}
          setActiveState={setActiveState}
        />
        <ShippingPartner stepNumber={4} setActiveState={setActiveState} />
      </div>
    </div>
  );
}

export default MultiStepForm;
