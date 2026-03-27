import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Homepage/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Players from "./Components/Players/Players";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Homepage/Footer/Footer";

const loadPlayers = async () => {
  let res = await fetch("/players.json");
  return res.json();
};

function App() {
  const [selectedData, setSelectedData] = useState([]);
  const [selectedType, setSelectedType] = useState("available");
  const [currentBalance, setCurrentBalance] = useState(500000000);
  const playerPromise = loadPlayers();
  console.log(playerPromise);
  return (
    <>
      <Navbar currentBalance={currentBalance}></Navbar> {/* success */}
      <Banner selectedType={selectedType}></Banner> {/* success */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center mt-30">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <Players
          setSelectedType={setSelectedType}
          selectedType={selectedType}
          playerPromise={playerPromise}
          selectedData={selectedData}
          setSelectedData={setSelectedData}
          currentBalance={currentBalance}
          setCurrentBalance={setCurrentBalance}
        ></Players>
      </Suspense>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
