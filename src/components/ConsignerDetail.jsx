import { Accordion } from "./ui/Accordian";
import Button from "./ui/Button";
import Input from "./ui/Input";

function ConsignerDetail( { stepNumber, ...props } ) {
  return (
    <div>
      <Accordion
        items={[
          {
            title: "Consignor Details",
          },
        ]}
        stepNumber={stepNumber}
        
      >
        <div className="px-6 py-4">
          <form action="" className="">
            <p className="text-sm">Search Customer</p>

            <Input className="w-[500px]" />
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
