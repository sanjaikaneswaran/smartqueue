
import "./Menu.css";
import { FaArrowLeft, FaShoppingCart, FaPlus, FaSearch } from "react-icons/fa";

const categories = [
  "All",
  "Rice",
  "Roti",
  "Snacks",
  "Breakfast",
];

const foods = [
  {
    id: 1,
    name: "Chicken Fried Rice",
    category: "Rice",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600",
  },
  {
    id: 2,
    name: "Kottu Roti",
    category: "Roti",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
  },
  {
    id: 3,
    name: "Chicken Submarine",
    category: "Snacks",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    outOfStock: true,
  },
  {
    id: 4,
    name: "Egg Fried Rice",
    category: "Rice",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=600",
  },
];
export default function Menu() {
  return (
    <div className="menu-page">

      {/* Header */}

      <div className="menu-header">

        <div className="top-row">
          <button className="icon-btn">
            <FaArrowLeft />
          </button>

          <button className="cart-btn">
            <FaShoppingCart />
            <span className="badge">1</span>
          </button>
        </div>

        <h2>Samaja</h2>

        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search for food..."
          />
        </div>

      </div>

      {/* Categories */}

      <div className="category-list">
        {categories.map((item, index) => (
          <button
            key={index}
            className={index === 0 ? "active" : ""}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Food Cards */}

      <div className="food-grid">

        {foods.map((food) => (

          <div className="food-card" key={food.id}>

            <div className="image-box">

              {food.outOfStock && (
                <span className="stock">
                  Out of Stock
                </span>
              )}

              <img
                src={food.image}
                alt={food.name}
              />

            </div>

            <div className="food-info">

              <h3>{food.name}</h3>

              <p>{food.category}</p>

              <div className="bottom-row">

                <span>Rs. {food.price}</span>

                <button className="add-btn">
                  <FaPlus />
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}