import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About Us" />
      <div className="container my-3 mb-3">
        <TextForm heading="Enter the text" />
      </div>
    </>
  );
}

export default App;
