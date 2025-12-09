import "./App.css";
import LeftSide from "./Components/LeftSide.jsx";
import RightSide from "./Components/RightSide.jsx";

function App() {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <LeftSide />
        <RightSide />
      </div>
    </>
  );
}

export default App;
