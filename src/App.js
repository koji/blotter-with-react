import "./App.css";
// react-text-fun
import { Distortion } from "./components/distortion";
import { Flies } from "./components/flies";
import { SplitColor } from "./components/splitColor";
import { LiquidDistortion } from "./components/liquidDistortion";

function App() {
  return (
    <div className="App">
      <h1>blotter.js + react.js</h1>
      <br />
      <p>
        Distortion text is based on the Rolling Distort Material in Blotter.js.
      </p>
      <Distortion text={"Hello World"} />
      <br />
      <p>Flies Text component is based on the FliesMaterial in Blotter.js</p>
      <Flies text={"Hello World"} />
      <br />
      <p>Split color channel is based on ChannelSplitMaterial in Blotter.js</p>
      <SplitColor text={"Hello World"} />
      <br />
      <p>
        Liquid Distortion text is based on LiquidDistortMaterial in Blotter.js
      </p>
      <LiquidDistortion text={"Hello World"} />
    </div>
  );
}

export default App;
