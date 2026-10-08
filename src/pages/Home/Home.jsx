import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-small">WELCOME TO THE OLIVE TABLE</p>

          <h1>
            A Taste Worth
            <br />
            Remembering
          </h1>

          <p className="hero-description">
            Seasonal ingredients, thoughtful cooking and a warm
            dining experience made for memorable evenings.
          </p>

          <div className="hero-buttons">
            <Link to="/reservation" className="primary-btn">
              Reserve a Table
            </Link>

            <Link to="/menu" className="secondary-btn">
              Explore Menu
            </Link>
          </div>
        </div>

        <div className="scroll-text">
          SCROLL TO EXPLORE
        </div>
      </section>


      {/* INTRO */}
      <section className="intro section-padding">
        <div className="intro-image">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
            alt="Restaurant interior"
          />
        </div>

        <div className="intro-content">
          <p className="section-label">OUR STORY</p>

          <h2>
            Where good food
            <br />
            meets good company.
          </h2>

          <p>
            At The Olive Table, we believe dining should be more than
            just a meal. It should be an experience filled with
            beautiful flavours, warm hospitality and moments worth
            remembering.
          </p>

          <p>
            Our kitchen celebrates fresh seasonal ingredients and
            simple, honest cooking inspired by flavours from around
            the world.
          </p>

          <Link to="/about" className="text-link">
            Discover our story →
          </Link>
        </div>
      </section>


      {/* SIGNATURE DISHES */}
      <section className="signature section-padding">
        <div className="section-heading">
          <div>
            <p className="section-label">FROM OUR KITCHEN</p>
            <h2>Signature Dishes</h2>
          </div>

          <Link to="/menu" className="text-link">
            View full menu →
          </Link>
        </div>

        <div className="dish-grid">

          <div className="dish-card">
            <img
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=700&q=80"
              alt="Fresh salad"
            />

            <div className="dish-info">
              <div>
                <h3>Garden Harvest</h3>
                <p>Seasonal vegetables, herbs & house dressing</p>
              </div>

              <span>₹420</span>
            </div>
          </div>


          <div className="dish-card">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80"
              alt="Pizza"
            />

            <div className="dish-info">
              <div>
                <h3>Truffle Pizza</h3>
                <p>Wild mushrooms, mozzarella & fresh truffle</p>
              </div>

              <span>₹650</span>
            </div>
          </div>


          <div className="dish-card">
            <img
              src="https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=700&q=80"
              alt="Pasta"
            />

            <div className="dish-info">
              <div>
                <h3>Classic Pasta</h3>
                <p>Fresh pasta, parmesan & roasted tomato sauce</p>
              </div>

              <span>₹520</span>
            </div>
          </div>

        </div>
      </section>


      {/* EXPERIENCE */}
      <section className="experience">
        <div className="experience-overlay"></div>

        <div className="experience-content">
          <p className="section-label">THE EXPERIENCE</p>

          <h2>
            Come for the food.
            <br />
            Stay for the feeling.
          </h2>

          <p>
            An intimate space, carefully prepared dishes and
            hospitality that makes you feel at home.
          </p>

          <Link to="/reservation" className="primary-btn">
            Book Your Table
          </Link>
        </div>
      </section>


      {/* REVIEWS */}
      <section className="reviews section-padding">

        <div className="section-heading centered">
          <p className="section-label">GUEST STORIES</p>
          <h2>What our guests say</h2>
        </div>

        <div className="review-grid">

          <div className="review-card">
            <div className="stars">★★★★★</div>

            <p>
              “Beautiful ambience, wonderful food and genuinely
              warm service. One of the best dining experiences
              we have had.”
            </p>

            <span>— Riya Sharma</span>
          </div>


          <div className="review-card">
            <div className="stars">★★★★★</div>

            <p>
              “Everything felt thoughtfully designed, from the
              interiors to the food. The truffle pizza was
              absolutely delicious.”
            </p>

            <span>— Aditya Mehta</span>
          </div>


          <div className="review-card">
            <div className="stars">★★★★★</div>

            <p>
              “Perfect place for a relaxed dinner. Elegant,
              comfortable and the food was fantastic.”
            </p>

            <span>— Neha Kapoor</span>
          </div>

        </div>

      </section>


      {/* RESERVATION CTA */}
      <section className="reservation-cta">

        <div>
          <p className="section-label">YOUR TABLE AWAITS</p>

          <h2>
            Make tonight
            <br />
            memorable.
          </h2>
        </div>

        <Link to="/reservation" className="primary-btn">
          Reserve a Table
        </Link>

      </section>

    </main>
  );
};

export default Home;