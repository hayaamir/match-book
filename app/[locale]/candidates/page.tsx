import React from "react";
import { Heart, Search, ChevronRight } from "lucide-react";

const Candidates = () => {
  const popularHomes = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
      title: "Apartment in Rehavia",
      subtitle: "В 431 км от вас",
      dates: "Oct 3-5",
      price: "₪980 for 2 nights",
      rating: "4.96",
      isSuperhost: true,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      title: "Hotel in Jerusalem",
      subtitle: "В 1,023 км от вас",
      dates: "Oct 3-5",
      price: "₪360 for 2 nights",
      rating: "4.93",
      isSuperhost: false,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
      title: "Hotel in Jerusalem",
      subtitle: "В 1,021 км от вас",
      dates: "Oct 3-5",
      price: "₪500 for 2 nights",
      rating: "4.85",
      isSuperhost: false,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      title: "Condo in Mamila",
      subtitle: "В 1,021 км от вас",
      dates: "Oct 31 - Nov 2",
      price: "₪754 for 2 nights",
      rating: "4.95",
      isSuperhost: false,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      title: "Loft in Mamila",
      subtitle: "В 1,023 км от вас",
      dates: "Oct 10-12",
      price: "₪754 for 2 nights",
      rating: "4.89",
      isSuperhost: true,
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
      title: "Apartment in Mahne Yehuda",
      subtitle: "В 1,021 км от вас",
      dates: "Oct 31 - Nov 2",
      price: "₪894 for 2 nights",
      rating: "5.0",
      isSuperhost: false,
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      title: "Apartment in Talbiya",
      subtitle: "В 1,021 км от вас",
      dates: "Oct 24-26",
      price: "₪754 for 2 nights",
      rating: "5.0",
      isSuperhost: false,
    },
  ];

  const availableNext = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
      title: "Condo in Budapest District VII",
      dates: "Oct 31 - Nov 2",
      isGuestFavorite: true,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop",
      title: "Apartment in Budapest District VIII",
      dates: "Oct 17-22",
      isGuestFavorite: true,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      title: "Apartment in Budapest District V",
      dates: "Oct 24-26",
      isGuestFavorite: false,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop",
      title: "Condo in Budapest District V",
      dates: "Oct 31 - Nov 2",
      isGuestFavorite: true,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      title: "Apartment in Budapest District V",
      dates: "Oct 31 - Nov 2",
      isGuestFavorite: true,
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
      title: "Apartment in Budapest District V",
      dates: "Oct 31 - Nov 2",
      isGuestFavorite: true,
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      title: "Apartment in Budapest District VIII",
      dates: "Oct 24-26",
      isGuestFavorite: true,
    },
  ];

  return (
    <>
      <div className=" border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm hover:shadow-lg transition-shadow duration-200">
            <div className="flex-1 px-6 py-3">
              <div className="text-xs font-semibold text-gray-900 mb-1">
                מגדר
              </div>
              <input
                type="text"
                placeholder="Search destinations"
                className="text-sm text-gray-500 w-full border-none outline-none bg-transparent"
              />
            </div>
            <div className="border-l border-gray-200 h-12"></div>
            <div className="flex-1 px-6 py-3">
              <div className="text-xs font-semibold text-gray-900 mb-1">
                גיל
              </div>
              <div className="text-sm text-gray-500">Add dates</div>
            </div>
            <div className="border-l border-gray-200 h-12"></div>
            <div className="flex-1 px-6 py-3">
              <div className="text-xs font-semibold text-gray-900 mb-1">
                אזור מגורים
              </div>
              <div className="text-sm text-gray-500">Add dates</div>
            </div>
            <button className="bg-[#FF385C] text-white p-4 rounded-full mr-2 hover:bg-[#E31C5F] transition-colors">
              <Search size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Popular homes section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center cursor-pointer hover:underline">
              Popular homes in Jerusalem
              <ChevronRight size={20} className="ml-2 text-gray-600" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-6">
            {popularHomes.map((home) => (
              <div key={home.id} className="group cursor-pointer">
                <div className="relative aspect-square mb-3">
                  <img
                    src={home.image}
                    alt={home.title}
                    className="w-full h-full object-cover rounded-xl group-hover:brightness-90 transition-all duration-300"
                  />
                  <button className="absolute top-3 right-3 p-2 hover:scale-110 transition-transform">
                    <Heart className="w-5 h-5 text-white/80 hover:text-white" />
                  </button>
                  {home.isSuperhost && (
                    <div className="absolute top-3 left-3 bg-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                      Superhost
                    </div>
                  )}
                </div>
                <div className="space-y-1">
                  <div className="flex items-start justify-between">
                    <h3 className="font-medium text-gray-900 text-sm leading-tight">
                      {home.title}
                    </h3>
                    <div className="flex items-center text-sm ml-2">
                      <span className="text-gray-900">★</span>
                      <span className="ml-1 text-gray-900">{home.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{home.subtitle}</p>
                  <p className="text-gray-600 text-sm">{home.dates}</p>
                  <p className="font-medium text-gray-900 text-sm">
                    <span className="underline">{home.price}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Available next month section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center cursor-pointer hover:underline">
              Available next month in Budapest
              <ChevronRight size={20} className="ml-2 text-gray-600" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7 gap-6">
            {availableNext.map((home) => (
              <div key={home.id} className="group cursor-pointer">
                <div className="relative aspect-square mb-3">
                  <img
                    src={home.image}
                    alt={home.title}
                    className="w-full h-full object-cover rounded-xl group-hover:brightness-90 transition-all duration-300"
                  />
                  {home.isGuestFavorite && (
                    <div className="absolute top-3 left-3 bg-white text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                      Guest favorite
                    </div>
                  )}
                  <button className="absolute top-3 right-3 p-2 hover:scale-110 transition-transform">
                    <Heart className="w-5 h-5 text-white/80 hover:text-white" />
                  </button>
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium text-gray-900 text-sm leading-tight">
                    {home.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{home.dates}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Candidates;
