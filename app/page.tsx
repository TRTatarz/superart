import Link from 'next/link';
import { Search } from 'lucide-react';
import { GAMES } from './data/games'; // Import your data

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">เติมเงินเกมออนไลน์</h1>
        <h2 className="text-2xl text-gray-600 uppercase tracking-wider">Online Games Top Up</h2>
      </div>

      <div className="max-w-3xl mx-auto relative mb-12">
        <input
          type="text"
          placeholder="ค้นหาชื่อเกม..."
          className="w-full border border-gray-300 rounded-md py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Search className="w-6 h-6" />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {GAMES.map((game) => (
          <Link href={`/game/${game.id}`} key={game.id} className="group block text-center">
            <div className="aspect-square relative border border-gray-200 overflow-hidden mb-2 hover:shadow-lg rounded-xl transition-all group-hover:-translate-y-1 flex items-center justify-center p-4">
              <img 
                src={game.image} 
                alt={game.name} 
                className="w-full h-full object-contain" 
              />
            </div>
            <p className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
              {game.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}