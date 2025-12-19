export default function SearchResult({ query }) {
  return (
    <div className="mt-6 text-white">
      <h2 className="text-xl font-semibold mb-3">
        You're searching for: <span className="">{query}</span>
      </h2>

      <p className="text-sm text-gray-400">
        We are building this feature. Real AI results will appear here soon.
      </p>
    </div>
  );
}
