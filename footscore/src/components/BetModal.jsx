import { useState } from "react";
import { X } from "lucide-react";

function BetModal({ game, onAddBet, onClose }) {
  const [provider, setProvider] = useState("");
  const [type, setType] = useState("");
  const [odd, setOdd] = useState("");

  const handleAddBet = () => {
    if (provider && type && odd) {
      onAddBet({ id: Date.now(), game: `${game.team1} vs ${game.team2}`, provider, type, odd });
      onClose();
      
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-80">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Adicionar Aposta</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        <input type="text" placeholder="Provedor" value={provider} onChange={(e) => setProvider(e.target.value)} className="w-full p-2 mb-2 rounded bg-gray-700 text-white" />
        <input type="text" placeholder="Tipo de Aposta" value={type} onChange={(e) => setType(e.target.value)} className="w-full p-2 mb-2 rounded bg-gray-700 text-white" />
        <input type="number" placeholder="Odd" value={odd} onChange={(e) => setOdd(e.target.value)} className="w-full p-2 mb-2 rounded bg-gray-700 text-white" />
        <button onClick={handleAddBet} className="mt-4 w-full bg-violet-500 text-white py-2 rounded-lg hover:bg-violet-600">
          Adicionar ao Bilhete
        </button>
      </div>
    </div>
  );
}

export { BetModal };