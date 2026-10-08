import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <main className="about-page">

      {/* PAGE HERO */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <p>OUR STORY</p>
          <h1>Good food.<br />Good people.<br />Good memories.</h1>
        </div>
      </section>


      {/* STORY */}
      <section className="about-story">

        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=90"
            alt="Elegant restaurant"
          />
        </div>

        <div className="about-story-content">

          <p className="about-label">A LITTLE ABOUT US</p>

          <h2>
            A restaurant built
            <br />
            around togetherness.
          </h2>

          <p>
            The Olive Table began with a simple idea — create a place
            where people can slow down, enjoy beautiful food and spend
            meaningful time together.
          </p>

          <p>
            Our menu brings together fresh seasonal ingredients,
            thoughtful recipes and flavours inspired by different
            corners of the world.
          </p>

          <p>
            From a quiet dinner for two to a celebration with friends,
            every table is prepared with the same attention to detail.
          </p>

        </div>

      </section>


      {/* PHILOSOPHY */}
      <section className="philosophy">

        <div className="philosophy-heading">
          <p className="about-label">OUR PHILOSOPHY</p>

          <h2>
            Simple ingredients.
            <br />
            Thoughtful cooking.
          </h2>
        </div>

        <div className="philosophy-text">
          <p>
            We believe great food does not need to be complicated.
            The best dishes start with quality ingredients, careful
            preparation and a genuine love for cooking.
          </p>

          <p>
            That's why our kitchen focuses on seasonal produce,
            house-made elements and flavours that let every ingredient
            speak for itself.
          </p>
        </div>

      </section>


      {/* VALUES */}
      <section className="values">

        <div className="value-card">
          <span>01</span>
          <h3>Fresh Ingredients</h3>
          <p>
            Carefully selected ingredients sourced with quality
            and freshness in mind.
          </p>
        </div>

        <div className="value-card">
          <span>02</span>
          <h3>Thoughtful Cooking</h3>
          <p>
            Simple techniques and balanced flavours come together
            in every dish.
          </p>
        </div>

        <div className="value-card">
          <span>03</span>
          <h3>Warm Hospitality</h3>
          <p>
            We want every guest to feel comfortable, welcome and
            completely at home.
          </p>
        </div>

      </section>


      {/* CHEF SECTION */}
      <section className="chef-section">

        <div className="chef-image">
          <img
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=90"
            alt="Our chef"
          />
        </div>

        <div className="chef-content">

          <p className="about-label">FROM OUR KITCHEN</p>

          <h2>
            Food made with
            <br />
            passion.
          </h2>

          <p>
            Behind every plate is a team that believes cooking is
            both a craft and a way of bringing people together.
          </p>

          <p>
            Our chefs combine classic techniques with fresh ideas,
            creating dishes that feel familiar yet exciting.
          </p>

          <div className="chef-signature">
            — Chef Aarav Mehta
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="about-cta">

        <p className="about-label">COME DINE WITH US</p>

        <h2>
          Your table is
          <br />
          waiting.
        </h2>

        <Link to="/reservation" className="about-btn">
          Reserve a Table
        </Link>

      </section>

    </main>
  );
};

export default About;