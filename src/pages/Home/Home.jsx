import React from "react";
import { homeData } from "../../data/home/homeData";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">

      {/* ================= HERO ================= */}
      <section className="hero">
        <h1>{homeData.brandName}</h1>

        <h2>{homeData.hero.title}</h2>

        <h3>{homeData.hero.subtitle}</h3>

        <p>{homeData.hero.description}</p>

        <button className="btn">Book Appointment</button>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services">
        <h2>Our Services</h2>

        <div className="service-grid">
          {homeData.services.map((item) => (
            <div className="service-card" key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="gallery">
        <h2>Our Latest Designs</h2>

        <div className="gallery-grid">
          {homeData.images.map((img, index) => (
            <img key={index} src={img} alt="design" />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;