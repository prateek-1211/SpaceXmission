export default function LaunchDetailModal({ launch, onClose }) {
  if (!launch) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-lg font-bold text-gray-500 hover:text-red-600"
        >
        X
        </button>

        <div className="text-center">
          <img
            src={launch.links.patch.small}
            alt={launch.name}
            className="w-20 h-20 mx-auto rounded-full shadow-md"
          />
          <h2 className="text-xl font-bold mt-3">{launch.name}</h2>
          <p className="text-gray-500 text-sm mb-3">
            {new Date(launch.date_utc).toDateString()}
          </p>
          <p className="text-sm text-gray-700 mb-4">
            {launch.details || "No details available for this mission."}
          </p>

          <div className="flex justify-center gap-4">
            {launch.links.wikipedia && (
              <a
                href={launch.links.wikipedia}
                target="_blank"
                className="text-blue-600 text-sm font-medium underline"
              >
                Wikipedia
              </a>
            )}
            {launch.links.webcast && (
              <a
                href={launch.links.webcast}
                target="_blank"
                className="text-red-600 text-sm font-medium underline"
              >
                Watch Webcast
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
