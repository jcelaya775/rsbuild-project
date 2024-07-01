import './App.css';
import { ReactComponent as Logo } from './vector.svg'; // TODO: configure public path (CRA should support this out of the box)
import Picture from '/public/images/audience.jpg';
import Jazz from './jazz.jpeg';
// TODO: Is there a way to configure /public alias?

const App = () => {
  console.log(process.env.PUBLIC_MODE);
  console.log(Picture);
  console.log(Jazz);

  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <h2>MODE: {process.env.PUBLIC_MODE}</h2>
      <p>Start building amazing things with Rsbuild.</p>
      <p>ASSET_PREFIX: {process.env.ASSET_PREFIX}</p>
      <p>SVG:</p>
      <Logo className="logo" />
      <p>IMG:</p>
      <img src="/images/audience.jpg" alt="audience" />
    </div>
  );
};

export default App;
