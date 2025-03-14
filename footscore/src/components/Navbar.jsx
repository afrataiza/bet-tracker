import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-indigo-950 p-4 flex justify-between items-center shadow-lg">
      <Link to="/" className="text-white text-xl font-bold">Bet Tracker</Link>
      <div className="flex space-x-4">
        <Link to="/categories" className="text-gray-300 hover:text-white">Categorias</Link>
        <Link to="/betslip" className="text-gray-300 hover:text-white">Bilhete</Link>
      </div>
    </nav>
  );
}

export { Navbar };