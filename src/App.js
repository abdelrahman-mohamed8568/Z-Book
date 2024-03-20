import "./App.css";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import Lists from "./Components/Lists";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Lists />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
