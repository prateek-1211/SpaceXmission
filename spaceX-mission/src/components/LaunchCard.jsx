import { useFavorites } from "../context/FavoritesContext";

export default function LaunchCard({ launch, onClick }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFav = favorites.includes(launch.id);

  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition relative flex flex-col justify-between"
      onClick={onClick}
    >
      <div>
        <h2 className="text-md font-semibold mb-1">{launch.name}</h2>
        <p className="text-gray-500 text-xs">
          {new Date(launch.date_utc).toLocaleString()} • {launch.rocket}
        </p>
        <p
          className={`mt-2 text-xs font-medium ${
            launch.success ? "text-green-600" : "text-red-600"
          }`}
        >
          {launch.success ? " Successful" : " Failed"}
        </p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(launch.id);
          }}
          className={`px-3 py-1 text-xs rounded-lg border ${
            isFav
              ? "bg-yellow-300 border-yellow-400 text-black"
              : "bg-gray-100 border-gray-300 hover:bg-yellow-200"
          }`}
        >
          {isFav ? "★ Favorite" : "☆ Favorite"}
        </button>

        <button
          className="px-3 py-1 text-xs rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          View details
        </button>
      </div>
    </div>
  );
}
