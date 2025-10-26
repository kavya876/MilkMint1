import { Link } from "react-router-dom";
import "../styles/Home.css";
import bgImg from '../assets/bg-img.jpg'
import smile from '../assets/smiley.webp'
import wave from '../assets/wave.svg'
import truckIcon from '../assets/delivery-details.webp'
import milkIcon  from '../assets/bottles.webp'
import phoneIcon from '../assets/how_it_online.webp'
import products from "../data/products.json";
import weeklyEssentials from "../assets/how_it_works/Weekly_essentials.png"
import Return from "../assets/how_it_works/Return_and_reuse.png"
import deliveryVan from "../assets/how_it_works/Delivery_van.png"
import cheerBottle from "../assets/cheering-bottle1.png"
import wheelieBin from "../assets/wheelie-bin.png"
import homePagewave2 from "../assets/homepage-wave-2.png"
import homePagewave3 from "../assets/homepage-wave-3.png"
import video from "../assets/MM_Doorstep_4.3.webm"
const HomePage = () => {
  return (
    <main className="home-container">
       
      <div className="hero-section">
         <img src={bgImg} alt="backgroundImage" className="hero-bg" />
        
 <div className="promo-banner">
      Free £15 milk hut for new customers when you spend £10 (limited time only).
      <span><img src={smile} alt="smiley" /></span>
    </div>

        <div className="cta-box">
          <h2>
            JOIN <span className="highlight">your</span> LOCAL MILKROUND
          </h2>
          <p className="subtitle">No hassle. No unnecessary waste. No problem!</p>
            <p className="check">Check we deliver to you</p>
          <div className="postcode-input">
            <input type="text" placeholder="Enter postcode" />
            <button className="join-btn">Join</button>
          </div>
   <p className="rating">
  Great  
  <span>★</span>
  <span>★</span>
  <span>★</span>
  <span>★</span>
  <span className="empty">★</span>
</p>

        </div>
        <img src={wave} alt="waveonbackground" className="wave" />
        
      </div>

  
<div className="wave-content">
              <div className="wave-item">
                 <img src={milkIcon} alt="Sustainable essentials" />
                 <p>Sustainable essentials</p>
              </div>
              <div className="wave-item">
                 <img src={phoneIcon} alt="Fuss free & flexible" />
                 <p>Fuss free & flexible</p>
              </div>
             <div className="wave-item">
                 <img src={truckIcon} alt="Delivered by 7.30am" />
                 <p>Delivered by 7.30am</p>
              </div>
         </div>
         <div className="info-section">
  <h2>
    FRESH WAYS <span className="italic"> to </span> REDUCE PACKAGING & FOOD WASTE
  </h2>
  <p>
    We deliver fresh milk, groceries and household products straight to your doorstep.
    Order what you need, when you need it, without the unnecessary waste.
  </p>
     </div>
       <section className="product-section">
        <div className="product-grid">
          {products.slice(0, 10).map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>

        <Link to="/products" className="view-all-btn">
          View all products
        </Link>
      </section>
      
<section className="impact-section">
  <div className="impact-item">
    <img src={cheerBottle} alt="Plastic bottles prevented" />
    <div>
      <h3>140,525,246</h3>
      <p>Plastic bottles prevented from polluting our planet*</p>
    </div>
  </div>

  <div className="impact-item">
    <img src={wheelieBin} alt="Wheelie bins erased" />
    <div>
      <h3>329,430</h3>
      <p>Wheelie bins of plastic erased from existence</p>
    </div>
  </div>
</section>

<section className="how-section">
  <h2>HOW IT WORKS</h2>
  <div className="how-cards">
    <div className="how-card">
      <img src={weeklyEssentials} alt="Farm fresh" />
      <h3>Order farm-fresh essentials, until 8pm</h3>
      <p>
        Add essentials as repeat weekly orders and use one-time orders to grab extras.
        Make changes until 8pm before delivery days.
      </p>
    </div>

    <div className="how-card">
      <img src={deliveryVan} alt="Delivery days" />
      <h3>Select up to three delivery days</h3>
      <p>
        We deliver by 7.30am up to three times a week. Heading off on hols? Pause deliveries anytime.
      </p>
    </div>

    <div className="how-card">
      <img src={Return} alt="Return empties" />
      <h3>Return your empties, reduce waste</h3>
      <p>
        Rinse your empty glass bottles and leave them on your doorstep for us to clean and reuse.
      </p>
    </div>
  </div>
  <Link to="/products" className="view-all-btn">
          Join our milkround
        </Link>
</section>
<section className="sustainable-section">
  <img
    src={homePagewave2}
    alt="Wave top"
    className="sustainable-wave-top"
  />

  <div className="sustainable-content">
    <div className="sustainable-text">
      <h2>A sustainable relationship</h2>
      <p>
        At Modern Milkman, we take pride in working directly with independent farmers
        and suppliers, fostering a transparent and fair relationship with everyone in
        our supply chain. We believe that by doing the right thing, we not only help our
        partners thrive but also secure a sustainable future for our community. By connecting
        our partners with our customers, we provide high-quality, ethically sourced products,
        straight to the home.
      </p>
    </div>

    <div className="sustainable-video">
      <video controls >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  </div>

  <img
    src={homePagewave3}
    alt="Wave bottom"
    className="sustainable-wave-bottom"
  />
</section>


    
    </main>
  );
};

export default HomePage;