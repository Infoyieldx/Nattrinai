import { categories } from "../data/products";
import { useNavigate } from "react-router-dom";

const AllCategories = () => {
  const navigate = useNavigate();

  const handleClick = (name) => navigate(`/category/${name}`);

  return (
    <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-[#3D3F24] mb-12">
        All Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleClick(category.name)}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
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

export default AllCategories;
