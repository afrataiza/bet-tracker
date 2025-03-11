import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Game } from "./pages/Game";
import { Betslip } from "./pages/Betslip";
import { Navbar } from "./components/Navbar";
import { GameCard } from "./components/GameCard";

function App() {
  return (
    <Router>
      <main className="bg-slate-800 text-gray-100 min-h-screen">
        <Navbar />
        <div className="p-4">
          <GameCard 
            team1="Time A" 
            team2="Time B" 
            score="1 - 2" 
            matchTime="15:00"
            matchDuration="11'" 
          />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/game/:id" element={<Game />} />
          <Route path="/betslip" element={<Betslip />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
