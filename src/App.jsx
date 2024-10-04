import Badge from "./components/ui/Badge";
import Select from "./components/ui/Select";
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
        size="xl"
      />
      <Badge
        badgeTitle="Badge 4"
        
      />
      </div>
      <Select
        title="Select Country"
        id="1"
        labelStyle=""
        selectStyle=""
      />
      <ToolTip
        buttonStyle="bg-black"
      />
    </>
  );
}

export default App;
