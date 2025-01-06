import { Trophy } from 'lucide-react';

export function TeamHeader() {
  return (
    <div className="relative w-full h-[300px] mb-8 rounded-lg overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center object-fill"
        style={{
          backgroundImage: 'url(https://utfs.io/f/cq5eB4pNFkjU0I0aR6MstXfiCRO9GQwKr0Y2SmTPzEJjWpyo)',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8">
        <h1 className="text-6xl font-bold text-white mb-2 tracking-wider">
          KingsRock
        </h1>
        <div className="flex items-center gap-2 text-gray-200">
          <Trophy className="w-5 h-5" />
          <span className="text-xl">Bangladeshi Esports Organization</span>
        </div>
      </div>
    </div>
  );
}