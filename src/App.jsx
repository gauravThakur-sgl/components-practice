import Badge from "./components/ui/Badge";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Input from "./components/ui/Input";
// import Select from "./components/ui/Select";
import TextArea from "./components/ui/TextArea";
import ToolTip from "./components/ui/ToolTip";

function App() {
  return (
    <>
      <div className="flex justify-center items-center">
      <Badge
        badgeTitle="Badge"
        variant="default"
        size="sm"
      />
      <Badge
        badgeTitle="Badge 2"
        variant="destructive"
        size="lg"
      />
      <Badge
        badgeTitle="Badge 3"
        variant="outline"
        size="default"
      />
      <Badge
        badgeTitle="Badge 4"
        variant="ghost"
      />
      </div>


      {/* <Select
        title="America"
        optionValue = "America, africa"
      /> */}
      <ToolTip
        buttonStyle="bg-black"
      />

      {/* // Buttons */}
      <div className="flex justify-center items-center mt-6 gap-2">
        <Button title="Submit"/>
        <Button title="Cancel" variant="destructive"/>
        <Button title="Watch out" variant="outline" size="md" type="submit"/>
        <Button title="Visit Me" variant="link" size="md" type="submit"/>
        <Button title="Submit sm" size="sm" type="submit"/>
        <Button title="Submit md" size="md" type="submit"/>
        <Button title="Submit lg" size="lg" type="submit"/>
        <Button title="Submit xl" size="xl" type="submit"/>
        <Button title="Submit xl" variant="dark" type="submit"/>
      </div>

      {/* //TextArea */}
      <div className="flex justify-center items-center gap-2 mt-6">
      <TextArea title="Write Here" placeHolder="Write Here..."  size="" />
      <TextArea title="Write Here" placeHolder="Write Here..." variant="error" size="sm" />
      <TextArea title="Write Here" placeHolder="Write Here lg..."  size="lg" />
      </div>

      {/* // Input */}
      <div className="flex justify-center items-center gap-2 mt-6">
      <Input type="email" placeholder="enter your email" />
      <Input type="checkbox" variant="error"/>
      <Input type="text" variant="" size="lg" placeholder="Write in lg input"/>
      <Input type="date" variant="" size="" />

      </div>

      {/* // Cards */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <Card variant="primary">
          <span>This is the nested Content Inside the primary Card Component </span>
        </Card>
        <Card variant="secondary">
          <span>This is the nested Content Inside the Secondary Card Component </span>
        </Card>
        <Card>
          <span>This is the nested Content Inside the Default Card Component </span>
        </Card>
      </div>

    </>
  );
}
export default App;
