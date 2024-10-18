/* eslint-disable react/prop-types */
import { Accordion } from "./ui/Accordian";
import Button from "./ui/Button";
// import Input from "./ui/Input";
import { CiCircleCheck } from "react-icons/ci";

function ShippingPartner({ stepNumber, isOpen, onToggle, activeState }) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="">
      <Accordion
        items={[
          {
            title: "Select Shipping Partner",
          },
        ]}
        stepNumber={stepNumber}
        isOpen={isOpen}
        onToggle={onToggle}
        activeState={activeState}
      >
        <form action="" onClick={handleSubmit}>
          <div className="px-7 py-4">
            <p className="text-sm text-black">
              All shipments via ShipGlobal services are{" "}
              <span className="font-semibold">Delivered Duty Paid (DDP)</span>,
              hence no extra duty will be billed on the consignee or the
              shipper. Rates are inclusive of covid & fuel surcharge, exclusive
              of GST and ex-Delhi Hub.
            </p>
            <div className="mt-6"></div>
            <p>
              In case any doubt, please call/whatsapp at{" "}
              <span className="text-[#1F499E] font-semibold">
                011-422 77777
              </span>
            </p>
            {/* // Weight Card */}
            <div className="flex justify-center items-center gap-4 text-[#647082] mt-5 px-12">
              <div className="flex flex-col justify-center items-center border rounded-md bg-[#FAFAFA] py-2 min-w-[150px]">
                <p>1 KG</p>
                <p className="text-sm">Dead Weight</p>
              </div>
              <div className="flex flex-col justify-center items-center border rounded-md bg-[#FAFAFA] py-2 min-w-[150px]">
                <p>1 KG</p>
                <p className="text-sm">Dead Weight</p>
              </div>
              <div className="flex flex-col justify-center items-center  border border-orange-600 rounded-md bg-[#FFF8F0] text-[#F59300] py-2 min-w-[150px]">
                <p>1 KG</p>
                <p className="text-sm">Billed Weight</p>
              </div>
            </div>
            <div className="mt-2"></div>
            <div>
              <h2 className="text-sm font-semibold">Showing Results</h2>
              <div className="flex justify-center items-center mt-2">
                <table className="table-auto w-full items-center">
                  <thead className="border">
                    <tr className="text-sm">
                      <th className="p-2 border rounded-lg">Courier Partner</th>
                      <th>Delivery Time</th>
                      <th>Shipment Rate</th>
                      <th>Select</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ShipGlobal WorldWide</td>
                      <td>13-18 Days</td>
                      <td>Rs. 2129</td>
                      <td>
                        <span>
                          <CiCircleCheck />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>UPS</td>
                      <td>4-7 Days</td>
                      <td>Rs. 2856</td>
                      <td>
                        <span>
                          <CiCircleCheck />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Fedex</td>
                      <td>4-7 Days</td>
                      <td>Rs. 2928</td>
                      <td>
                        <span>
                          <CiCircleCheck />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>DHL Express</td>
                      <td>4-7 Days</td>
                      <td>Rs. 3416</td>
                      <td>
                        <span>
                          <CiCircleCheck />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex justify-end items-center mt-4">
              <Button
                type="submit"
                title="Pay and order"
                className=" text-sm font-semibold flex justify-end items-center"
              />
            </div>
          </div>
        </form>
      </Accordion>
    </div>
  );
}

export default ShippingPartner;
