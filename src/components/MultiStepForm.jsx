import { useState } from "react";
import ConsigneeDetail from "./ConsigneeDetail";
import ShipmentInformation from "./ShipmentInformation";
import ShippingPartner from "./ShippingPartner";

import ConsignerDetail from "./ConsignerDetail";

function MultiStepForm() {
  const [active, setActive] = useState(null);
  const toggleItem = (index) => {
    const newItem = [...active];
    newItem[index].isOpen = !newItem[index].isOpen;
    setActive(newItem);
  };
  return (
    <div className="bg-white">
      <div className="mt-8 space-y-1">
        <ConsignerDetail
          stepNumber={1}
          isOpen={0}
          toggleItem={() => toggleItem(0)}
        />
        <ConsigneeDetail
          stepNumber={2}
          isOpen={1}
          toggleItem={() => toggleItem(1)}
        />
        <ShipmentInformation
          stepNumber={3}
          isOpen={2}
          toggleItem={() => toggleItem(2)}
        />
        <ShippingPartner
          stepNumber={4}
          isOpen={3}
          toggleItem={() => toggleItem(3)}
        />
      </div>
    </div>
  );
}

export default MultiStepForm;
