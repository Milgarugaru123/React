import Square from "./Square";
import Circle from "./Circle";

const App = () => {
  return (
    <div className="h-[400vh] flex flex-col items-center">
      <div className="h-[200vh] flex flex-col items-center gap-30 mt-30">
        <Square bg="red" />
        <Square bg="blue" />
        <Square bg="green" />
      </div>
      <Circle />
    </div>
  );
};

export default App;
