import MainPage from "@/components/MainPage";
import MainPageWishlist from "@/components/MainPageWishlist";
import SearchCountry from "@/components/SearchCountry";


export default function Home() {
  return (
     <main className="p-6">
      <h2 className="text-2xl font-semibold mb-4">✍️ Records</h2>
      <MainPage />

      <h2 className="text-2xl font-semibold mt-10 mb-4">🌍 Călătorii de vis</h2>
      <SearchCountry onAdd={() => window.location.reload()} />
      <MainPageWishlist />
    </main>
  )
}
// // /components/MainPage.jsx