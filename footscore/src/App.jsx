import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Game } from "./pages/Game";
import { Betslip } from "./pages/Betslip";
import { Navbar } from "./components/Navbar";
import { GameCard } from "./components/GameCard";
import { BetslipModal } from "./components/BetslipModal";
import { BetModal } from "./components/BetModal";

function App() {
  const [isBetslipOpen, setIsBetslipOpen] = useState(false);
  const [isBetModalOpen, setIsBetModalOpen] = useState(false);
  const [bets, setBets] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  const addBet = (bet) => {
    setBets([...bets, bet]);
    setIsBetModalOpen(false);
  };

  return (
    <Router>
      <main className="bg-neutral-900 text-gray-100 min-h-screen">
        <Navbar />
        <div className="p-4">
          <GameCard 
            team1="Time A" 
            team2="Time B" 
            score={[1, 0]}
            matchTime="15:00"
            matchDuration="11'"
            onAddBet={() => {
              setSelectedGame({ team1: "Time A", team2: "Time B" });
              setIsBetModalOpen(true);
            }} 
          />
          {bets.length > 0 && (
            <button 
              className="fixed bottom-4 right-4 bg-violet-500 text-white p-4 rounded-full shadow-lg"
              onClick={() => setIsBetslipOpen(true)}
            >
              📝
            </button>
          )}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="/betslip" element={<Betslip />} />
        </Routes>
        {isBetslipOpen && <BetslipModal bets={bets} setBets={setBets} onClose={() => setIsBetslipOpen(false)} />}
        {isBetModalOpen && <BetModal game={selectedGame} onAddBet={addBet} onClose={() => setIsBetModalOpen(false)} />}
      </main>
    </Router>
  );
}

export default App;
