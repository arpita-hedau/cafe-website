import React, { useState } from "react";
import "./Menu.css";

const menuItems = [
  // STARTERS
  {
    id: 1,
    name: "Avocado Garden Salad",
    category: "Starters",
    price: 420,
    description: "Fresh greens, avocado, cherry tomatoes and a light herb dressing.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 2,
    name: "Burrata & Tomato",
    category: "Starters",
    price: 480,
    description: "Creamy burrata, heirloom tomatoes, basil and extra virgin olive oil.",
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 3,
    name: "Crispy Garlic Bread",
    category: "Starters",
    price: 280,
    description: "Warm sourdough bread with roasted garlic butter and fresh herbs.",
    image: "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 4,
    name: "Bruschetta Classica",
    category: "Starters",
    price: 350,
    description: "Toasted bread topped with tomatoes, basil, garlic and olive oil.",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 5,
    name: "Creamy Mushroom Soup",
    category: "Starters",
    price: 360,
    description: "Silky wild mushroom soup finished with cream and cracked pepper.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 6,
    name: "Cottage Cheese Croquettes",
    category: "Starters",
    price: 390,
    description: "Crispy golden croquettes served with a refreshing herb dip.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=90",
  },

  // MAIN COURSE
  {
    id: 7,
    name: "Wild Mushroom Risotto",
    category: "Main Course",
    price: 580,
    description: "Arborio rice, wild mushrooms, parmesan and fresh herbs.",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 8,
    name: "Truffle Cream Pasta",
    category: "Main Course",
    price: 620,
    description: "House-made pasta with truffle cream, parmesan and black pepper.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 9,
    name: "Margherita Burrata Pizza",
    category: "Main Course",
    price: 650,
    description: "Wood-fired pizza, tomato, mozzarella, basil and burrata.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 10,
    name: "Grilled Herb Chicken",
    category: "Main Course",
    price: 720,
    description: "Tender grilled chicken, seasonal vegetables and rosemary jus.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 11,
    name: "Creamy Alfredo Pasta",
    category: "Main Course",
    price: 540,
    description: "Fresh pasta tossed in a rich parmesan and garlic cream sauce.",
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 12,
    name: "Pesto Penne",
    category: "Main Course",
    price: 520,
    description: "Penne pasta, basil pesto, parmesan and roasted cherry tomatoes.",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 13,
    name: "Four Cheese Pizza",
    category: "Main Course",
    price: 680,
    description: "Mozzarella, parmesan, cheddar and creamy blue cheese.",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 14,
    name: "Mediterranean Grain Bowl",
    category: "Main Course",
    price: 490,
    description: "Quinoa, roasted vegetables, chickpeas, greens and tahini dressing.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 15,
    name: "Paneer Herb Steak",
    category: "Main Course",
    price: 590,
    description: "Grilled cottage cheese steak with vegetables and creamy herb sauce.",
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 16,
    name: "Roasted Vegetable Lasagna",
    category: "Main Course",
    price: 560,
    description: "Layers of pasta, roasted vegetables, tomato sauce and melted cheese.",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=90",
  },

  // DESSERTS
  {
    id: 17,
    name: "Classic Tiramisu",
    category: "Desserts",
    price: 320,
    description: "Mascarpone, espresso-soaked sponge and delicate cocoa.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 18,
    name: "Berry Panna Cotta",
    category: "Desserts",
    price: 340,
    description: "Silky vanilla panna cotta served with seasonal berries.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 19,
    name: "Chocolate Fondant",
    category: "Desserts",
    price: 390,
    description: "Warm chocolate cake with a rich molten centre.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 20,
    name: "New York Cheesecake",
    category: "Desserts",
    price: 360,
    description: "Classic baked cheesecake served with fresh seasonal berries.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=90",
  },
  {
    id: 21,
    name: "Vanilla Crème Brûlée",
    category: "Desserts",
    price: 340,
    description: "Silky vanilla custard with a perfectly caramelised sugar crust.",
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=800&q=90",
  },
 
];

const categories = [
  "All",
  "Starters",
  "Main Course",
  "Desserts",
  "Beverages",
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="menu-page">

      {/* Hero */}
      {/* <section className="menu-hero">
        <div className="menu-hero-content">
          <p>OUR MENU</p>
          <h1>Made to be<br />remembered.</h1>
          <span>
            Seasonal ingredients, thoughtful cooking and flavours
            made for slow, beautiful evenings.
          </span>
        </div>
      </section> */}

      {/* Menu Section */}
      <section className="menu-section">

        <div className="menu-heading">
          <div>
            <p className="menu-label">FROM OUR KITCHEN</p>
            <h2>Our favourites</h2>
          </div>

          <div className="menu-search">
            <input
              type="text"
              placeholder="Search dishes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        <div className="menu-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="menu-grid">
          {filteredItems.map((item) => (
            <article className="menu-card" key={item.id}>

              <div className="menu-card-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="menu-card-content">
                <div className="menu-card-top">
                  <h3>{item.name}</h3>
                  <span>₹{item.price}</span>
                </div>

                <p>{item.description}</p>
              </div>

            </article>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="no-results">
            <h3>No dishes found</h3>
            <p>Try searching for another dish.</p>
          </div>
        )}

      </section>

      {/* Bottom CTA */}
      <section className="menu-cta">
        <p className="menu-label">A TABLE AWAITS</p>
        <h2>Good food tastes<br />better together.</h2>

        <a href="/reservation" className="menu-cta-btn">
          Reserve a Table
        </a>
      </section>

    </main>
  );
};

export default Menu;