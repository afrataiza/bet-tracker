import { Bell, TicketPlus } from 'lucide-react';
import badge1 from '../assets/team1.png';

function GameCard({ team1, team2, score, matchTime, matchDuration, onAddBet }) {
  return (
    <section className="bg-neutral-800 rounded-lg shadow-md flex flex-col lg:w-1/3">
      <div className="flex-1 flex items-center justify-between p-4">
        <div className="flex flex-col items-center space-y-2 border-r-2 border-gray-700 pr-4">
          <span>{matchTime}</span>
          <span className="text-violet-400 font-bold">{matchDuration}</span>
        </div>
        <div className="flex-1 flex items-center justify-between px-4 border-r-2 border-gray-700">
          <div>
            <div className="flex items-center space-x-2">
              <img
                src={badge1}
                alt="Time A"
                className="w-8 h-8"
              />
              <span>{team1}</span>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src={badge1}
                alt="Time B"
                className="w-8 h-8"
              />
              <span>{team2}</span>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center space-y-2">
              <span className="font-semibold">{score[0]}</span>
              <span className="font-semibold">{score[1]}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 ml-4">
          <button 
          className="flex items-center justify-center text-white rounded-full shadow hover:text-violet-400 cursor-pointer"
          onClick={onAddBet}
          >
            <TicketPlus className="w-4 h-4" />
          </button>
          <button className="flex items-center justify-center text-white rounded-full shadow hover:text-violet-400 cursor-pointer">
            <Bell className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export { GameCard };
