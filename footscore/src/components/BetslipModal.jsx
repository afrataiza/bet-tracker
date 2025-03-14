import { useState, useMemo } from "react";
import { X, CheckCircle, Trash } from "lucide-react";

function BetslipModal({ bets, onClose, setBets }) {
  const [stake, setStake] = useState(0);

  const totalOdds = useMemo(() => {
    return bets.reduce((acc, bet) => acc * parseFloat(bet.odd), 1).toFixed(2);
  }, [bets]);

  const potentialWinnings = useMemo(() => {
    return (stake * totalOdds).toFixed(2);
  }, [stake, totalOdds]);

  const markAsWon = (index) => {
    const updatedBets = [...bets];
    updatedBets[index].won = !updatedBets[index].won;
    setBets(updatedBets);
  };

  const removeBet = (index) => {
    setBets(bets.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Bilhete de Apostas</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        <ul className="mb-4">
          {bets.map((bet, index) => (
            <li key={index} className="mb-2 border-b border-gray-600 pb-2 flex justify-between items-center">
              <div>
                {bet.game} - {bet.type} ({bet.odd})
              </div>
              <div className="flex space-x-2">
                <button onClick={() => markAsWon(index)} className={`${bet.won ? "text-green-400" : "text-gray-400"} hover:text-green-500 cursor-pointer`}>
                  <CheckCircle className="w-5 h-5" />
                </button>
                <button onClick={() => removeBet(index)} className="text-red-400 hover:text-red-500 cursor-pointer">
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-sm mb-2">Total de Odds: {totalOdds}</p>
        <input 
          type="number" 
          placeholder="Valor Apostado" 
          value={stake} 
          onChange={(e) => setStake(e.target.value)} 
          className="w-full p-2 mb-2 rounded bg-gray-700 text-white"
        />
        <p className="text-sm mb-4">Possível Ganho: {potentialWinnings}</p>
        <button className="w-full bg-violet-500 text-white py-2 rounded-lg hover:bg-violet-600">
          Confirmar Aposta
        </button>
      </div>
    </div>
  );
}

export { BetslipModal };