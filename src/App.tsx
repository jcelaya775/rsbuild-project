import './App.css';

const App = () => {
  console.log(process.env.PUBLIC_MODE);

  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <h2>MODE: {process.env.PUBLIC_MODE}</h2>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
