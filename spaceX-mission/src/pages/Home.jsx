import { useEffect, useState } from "react";
import axios from "axios";
import LaunchCard from "../components/LaunchCard";
import LaunchDetailModal from "../components/LaunchDetailModal";
import Filters from "../components/Filters";
import { useFavorites } from "../context/FavoritesContext";

export default function Home() {
  const [launches, setLaunches] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);

  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  const [successOnly, setSuccessOnly] = useState(false);
  const [favoritesOnly, setFavoritesOnly] = useState(false);

  const { favorites } = useFavorites();

  // 🚀 Fetch Data from SpaceX API
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v4/launches")
      .then((res) => {
        const launchesWithId = res.data.map((launch) => ({
          ...launch,
          id: launch.id || launch.flight_number?.toString(),
        }));
        setLaunches(launchesWithId);
        setFiltered(launchesWithId);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch launches. Please check your network.");
        setLoading(false);
      });
  }, []);

  // 🔎 Apply Filters
  useEffect(() => {
    let data = [...launches];

    if (search) {
      data = data.filter((l) =>
        l.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (year) {
      data = data.filter(
        (l) => new Date(l.date_utc).getFullYear().toString() === year
      );
    }

    if (successOnly) {
      data = data.filter((l) => l.success);
    }

    if (favoritesOnly) {
      data = data.filter((l) => favorites.includes(l.id));
    }

    setFiltered(data);
  }, [search, year, successOnly, favoritesOnly, launches, favorites]);

  // ⏳ Loading UI
  if (loading) {
    return (
      <p className="text-center mt-12 text-xl font-semibold text-blue-600 animate-pulse">
        🚀 Loading Missions...
      </p>
    );
  }

  // ❌ Error UI
  if (error) {
    return (
      <p className="text-center mt-12 text-xl font-bold text-red-600 bg-red-50 p-4 rounded-lg border border-red-300 mx-auto max-w-xl">
        🚨 {error}
      </p>
    );
  }

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Filters */}
      <Filters
        search={search}
        setSearch={setSearch}
        year={year}
        setYear={setYear}
        successOnly={successOnly}
        setSuccessOnly={setSuccessOnly}
        favoritesOnly={favoritesOnly}
        setFavoritesOnly={setFavoritesOnly}
      />

      {/* Grid Layout */}
      {filtered.length === 0 ? (
        <p className="text-center text-lg text-gray-500 mt-8 p-4 bg-gray-50 rounded-lg">
          No missions found matching your current filters.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
  {filtered.map((launch) => (
    <LaunchCard
      key={launch.id}
      launch={launch}
      onClick={() => setSelected(launch)}
    />
  ))}
</div>
      )}

      {/* Modal */}
      {selected && (
        <LaunchDetailModal launch={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
