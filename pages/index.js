import MainPage from "@/components/MainPage";
import MainPageWishlist from "@/components/MainPageWishlist";
import SearchCountry from "@/components/SearchCountry";


export default function Home() {
  return (
     <main className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto space-y-10 px-4">

        {/* Recorduri */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">✍️ Persoane</h2>
          <MainPage />
        </div>

        {/* Călătorii de vis */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">🌍 Cauta tara unde ai dori să calatoresti</h2>
          <SearchCountry onAdd={() => window.location.reload()} />
          <MainPageWishlist />
        </div>

      </div>
    </main>
  )
}
// // /components/MainPage.jsx