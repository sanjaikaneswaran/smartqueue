import "./Menu.css";

const foods = [
  {
    id: 1,
    name: "Chicken Fried Rice",
    category: "Rice",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
    stock: true,
  },
  {
    id: 2,
    name: "Kottu Roti",
    category: "Roti",
    price: 300,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    stock: true,
  },
  {
    id: 3,
    name: "Chicken Submarine",
    category: "Snacks",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    stock: false,
  },
];

function Menu() {
  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <button className="back-btn">← Back</button>

        <h1>Samaja</h1>

        <div className="search-box">
          <input type="text" placeholder="Search for food..." />
        </div>
      </div>
       {/* Categories */}
      <div className="categories">
        <button className="active">All</button>
        <button>Rice</button>
        <button>Roti</button>
        <button>Snacks</button>
        <button>Breakfast</button>
      </div>

      {/* Food Cards */}
      <div className="food-grid">
        {foods.map((food) => (
          <div className="card" key={food.id}>
            <div className="image-wrapper">
              <img src={food.image} alt={food.name} />

              {!food.stock && (
                <span className="out-stock">Out of Stock</span>
              )}
            </div>
            <div className="card-body">
              <h3>{food.name}</h3>

              <span className="category-tag">{food.category}</span>

              <div className="bottom-row">
                <p>Rs. {food.price}</p>

                <button
                  className={`add-btn ${
                    !food.stock ? "disabled" : ""
                  }`}
                  disabled={!food.stock}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
