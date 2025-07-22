import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Ledger from "./practical/Ledger";
import Users from "./practical/Users";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />

        {/* <Users /> */}

        {/* <Ledger /> */}
      </div>
    </div>
  );
}

export default App;
