import "./App.css";
import Login from "./Login";
import Signin from "./Signin";

function App() {
  return (
    <div className="text-white h-[100vh] flex items-center justify-center bg-cover">
      <div className="bg-hero-pattern"></div>
      <Signin />
      <Login />
    </div>
  );
}

export default App;
