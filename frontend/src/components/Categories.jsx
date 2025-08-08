import { useNavigate } from "react-router-dom";
import { categories } from "../data/products";

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName}`);
  };

  const handleViewMoreClick = () => {
    navigate("/all-categories");
  };

  // Show first 11 categories
  const visibleCategories = categories.slice(0, 11);
  const viewMoreCategory = categories[11]; // 12th one for styling only

  return (
    <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-[#3D3F24] mb-12 mx-auto w-fit overflow-hidden whitespace-nowrap border-r-2 border-[#3D3F24] animate-typing animation-blink">
        Shop by Top Category
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {visibleCategories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleCategoryClick(category.name)}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover object-top hover:scale-125 transition-transform"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-[#3D3F24]">{category.name}</h3>
            </div>
          </div>
        ))}

        {/* View More Card */}
        {viewMoreCategory && (
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={handleViewMoreClick}
          >
            <div className="aspect-square overflow-hidden relative group">
              <img
                src={viewMoreCategory.image}
                alt="View More"
                className="w-full h-full object-cover object-top opacity-30 group-hover:opacity-40 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white bg-opacity-80 px-4 py-2 rounded font-semibold text-[#3D3F24] shadow">
                  View More
                </span>
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-[#3D3F24]">More Categories</h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Categories;
