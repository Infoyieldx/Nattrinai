const SearchSuggestions = ({ suggestions, onSuggestionClick }) => {
  if (!suggestions.length) return null;

  return (
    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-lg shadow-lg mt-1 z-50 max-h-80 overflow-y-auto">
      {suggestions.map((suggestion, index) => (
        <div
          key={`${suggestion.type}-${suggestion.id || suggestion.name}-${index}`}
          onClick={() => onSuggestionClick(suggestion)}
          className="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
        >
          <div className="flex items-center space-x-3">
            {suggestion.image && (
              <img
                src={suggestion.image}
                alt={suggestion.name}
                className="w-10 h-10 object-cover rounded"
              />
            )}
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900">{suggestion.name}</span>
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full capitalize">
                  {suggestion.type}
                </span>
              </div>
              {suggestion.description && (
                <p className="text-sm text-gray-600 mt-1 truncate">{suggestion.description}</p>
              )}
              {suggestion.price && (
                <p className="text-sm font-semibold text-[#4A5A2A] mt-1">₹{suggestion.price}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchSuggestions;
