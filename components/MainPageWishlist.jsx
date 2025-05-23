// /components/MainPageWishlist.jsx

import { useEffect, useState } from "react";
import { getWishlist, deleteWishlistItem } from "@/utils/wishlistFunctions";

const MainPageWishlist = () => {
  const [countries, setCountries] = useState([]);

  const fetchWishlist = async () => {
    try {
      const response = await getWishlist();
      setCountries(response);
    } catch (error) {
      console.error("Eroare la fetch wishlist:", error);
    }
  };

  const handleDeleteCountry = async (id) => {
    try {
      const response = await deleteWishlistItem(id);

      if (response.deletedCount === 1) {
        const updated = countries.filter((item) => item._id !== id);
        setCountries(updated);
      }
    } catch (error) {
      console.error("Eroare la ștergere:", error);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <div className="p-4 flex flex-wrap gap-4">
      {countries.map((country) => (
        <div
          key={country._id}
          className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <img src={country.flag} alt={country.name} width="100" className="mb-3 rounded" />
          <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            {country.name}
          </h5>
          <p className="mb-2 text-gray-700 dark:text-gray-400">
            Capitală: {country.capital}
          </p>
          <button
            type="button"
            onClick={() => handleDeleteCountry(country._id)}
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
          >
            Șterge
          </button>
        </div>
      ))}
    </div>
  );
};

export default MainPageWishlist;
