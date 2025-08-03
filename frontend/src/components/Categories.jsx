import { useNavigate } from "react-router-dom";
import { categories } from "../data/products";

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName}`);
  };

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6  lg:px-8">
      <h2 className="text-3xl font-bold text-center text-[#3D3F24] mb-12">Shop by Category</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-6">
        {categories.map((category) => (
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
      </div>
    </section>
  );
};

export default Categories;
