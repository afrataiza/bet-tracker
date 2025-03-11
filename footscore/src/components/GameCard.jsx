import { Bell, PlusCircle } from 'lucide-react';
import badge1 from '../assets/team1.png';

function GameCard({ team1, team2, score, matchTime, matchDuration }) {
  return (
    <section className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center text-center">
      <div className="flex flex-col items-center space-y-2 border-r-2 border-gray-700 pr-4">
        <span>{matchTime}</span>
        <span className='text-violet-400'>{matchDuration}</span>
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <img
            src={badge1}
            alt="Time A"
            className='w-8 h-8'
          />
          <span>{team1}</span>
        </div>
        <div className="flex items-center space-x-2">
        <img
          src={badge1}
          alt="Time B"
          className='w-8 h-8'
        />
        <span>{team2}</span>
        </div>
      </div>
      <p className="text-2xl font-semibold my-2">{score}</p>
      <div className="flex mt-4 space-x-4">
        <button className="flex items-center bg-violet-500 text-white px-3 py-1 rounded-lg shadow hover:bg-violet-600">
          <PlusCircle className="w-5 h-5 mr-2" /> Adicionar Aposta
        </button>
        <button className="flex items-center bg-gray-700 text-white px-3 py-1 rounded-lg shadow hover:bg-gray-600">
          <Bell className="w-5 h-5 mr-2" /> Notificar
        </button>
      </div>
    </section>
  );
}

export { GameCard };
