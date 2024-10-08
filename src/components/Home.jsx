// import { Accordion } from "./components/ui/Accordian";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import Card from "./ui/Card";
import Input from "./ui/Input";
import Label from "./ui/Label";
import { Tabs } from "./ui/Tabs";
// import Select from "./components/ui/Select";
import TextArea from "./ui/TextArea";
import ToggleSwitch from "./ui/ToggleSwitch";
import ToolTip from "./ui/ToolTip";
import { Progress } from "./ui/ProgressBar";
import PopOver from "./ui/PopOver";
// import UserRegistrationForm from "./components/Form";
function Home() {
  return (
    <>
      <div className="mx-48 border shadow-lg">
        <div className="flex flex-col justify-center items-center mt-6 p-4 gap-2">
          <h2 className="font-bold text-lg">Badges</h2>
          <div className="flex justify-center items-center gap-2">
            <Badge badgeTitle="Badge" variant="default" size="sm" />
            <Badge badgeTitle="Badge 3" variant="outline" size="default" />
            <Badge badgeTitle="Badge 4" variant="ghost" />
            <Badge badgeTitle="Badge 2" variant="destructive" size="lg" />
          </div>
        </div>
        {/* <Select
        title="America"
        optionValue = "America, africa"
      /> */}
        <div className="flex flex-col justify-center items-center mt-6 p-4 gap-2">
          <h2 className="font-bold text-lg">ToolTip</h2>
          <div className="">
            <ToolTip message="This is tooltip" classname="">
              <div className="m-2 hover:bg-green-200 border hover:text-green-800 rounded-md p-1">
                Hover over me
              </div>
            </ToolTip>
            <ToolTip message="This is tooltip" position="bottom">
              <div className="m-2 hover:bg-green-200 border hover:text-green-800 rounded-md p-1">
                Hover over me
              </div>
            </ToolTip>
          </div>
        </div>
        {/* // Buttons */}
        <div className="flex flex-col justify-center items-center mt-6 p-4 gap-2 ">
          <h1 className="text-lg font-bold">Buttons</h1>
          <div className="flex justify-center items-center gap-2">
            <Button title="Submit" />
            <Button title="Cancel" variant="destructive" />
            <Button
              title="Watch out"
              variant="outline"
              size="md"
              type="submit"
            />
            <Button title="Visit Me" variant="link" size="md" type="submit" />
            <Button title="Submit sm" size="sm" type="submit" />
            <Button title="Submit md" size="md" type="submit" />
            <Button title="Submit lg" size="lg" type="submit" />
            <Button title="Submit xl" size="xl" type="submit" />
            <Button title="Submit xl" variant="dark" type="submit" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-6 p-4 gap-2">
          <h2 className="text-lg font-bold">Progress Bar</h2>
          <div className="flex justify-center items-center gap-2">
            <Progress value="25" />
            <Progress value="75" variant="destructive" />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-6 p-4 gap-2">
          <h1 className="text-lg font-bold">Inputs</h1>

          <div className="flex justify-center items-start gap-2 mt-6">
            <TextArea
              title="Write Here"
              placeHolder="Write Here..."
              variant="error"
              size="sm"
            />
            <TextArea title="Write Here" placeHolder="Write Here..." size="" />

            <TextArea
              title="Write Here"
              placeHolder="Write Here lg..."
              size="lg"
            />
          </div>
          <div className="flex justify-center items-start gap-2 mt-6">
            <Input
              type="checkbox"
              variant="error"
              id="1"
              labelData="Check me out"
              className="cursor-pointer"
            />
            <Input
              type="radio"
              variant="error"
              id="4"
              labelData="push the button"
              className="cursor-pointer"
            />
            <Input type="email" placeholder="enter your email" />
            <Input type="date" variant="" size="" />
            <Input
              type="text"
              variant=""
              size="lg"
              placeholder="Write in lg input"
            />
          </div>
          <div className="flex  items-center gap-2">
            <ToggleSwitch
              name="newsletter"
              toggleId="2"
              labeltext="Get 50% off"
            />
            <ToggleSwitch name="daily" toggleId="3" />
          </div>
        </div>

        {/* // Cards */}
        <div className="flex flex-col justify-center items-center mt-6 p-4 gap-2">
          <h2 className="font-bold text-lg">Cards</h2>
          <div className="flex justify-center items-center gap-2 mt-6">
            <Card variant="primary">
              <span>
                This is the nested Content Inside the primary Card Component
              </span>
            </Card>
            <Card variant="secondary">
              <span>
                This is the nested Content Inside the Secondary Card Component
              </span>
            </Card>
            <Card>
              <span>
                This is the nested Content Inside the Default Card Component
              </span>
            </Card>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-6 p-4 gap-2">
          <h2 className="font-bold text-lg">Accordian</h2>
          <div className="flex justify-center items-center gap-2">
            {/* <Accordion /> */}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-6 p-4 gap-2">
          <h2 className="font-bold text-lg">Labels</h2>
          <div className="flex justify-center items-center gap-2 mt-6">
            <Label title="label form small project">
              <span>This is label info</span>
            </Label>
            <Label title="label form small project" variant="error">
              <span>This is error label</span>
            </Label>
          </div>
        </div>
        {/* // Labels */}

        <div className="flex flex-col justify-center items-center mt-6 p-4 gap-2">
          <h2 className="font-bold text-lg">Tabs</h2>
          <div className="flex justify-center items-center gap-2 mt-6">
            <Tabs />
          </div>
        </div>
        {/* // PopOver */}
        <div className="flex flex-col justify-center items-center mt-6 p-4 gap-2">
          <h2 className="font-bold text-lg">PopOver</h2>
          <div className="flex justify-center items-center gap-2">
            <PopOver content="This is popped Over Content" trigger="Pop Me" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
