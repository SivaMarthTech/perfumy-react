import one from "../assets/img/one.jpg"
import two from "../assets/img/two.jpg"
import three from "../assets/img/three.jpg"

function Products() {
    return (
      <div className="products">
        <div className="box">
          <img src={one} alt="Product 1" />
          <p>Experience the essence of nature with Fogg Wood Extreme. This Eau De Parfum offers a captivating blend of woody and spicy notes, providing long-lasting freshness and sophistication in every spray.</p>
        </div>
  
        <div className="box">
          <img src={two} alt="Designer Club" />
          <p>Step into luxury with Designer Club's Be Spoke by Perfume Lounge. This premium men's perfume combines exquisite fragrances for a unique, long-lasting scent that leaves a lasting impression.</p>
        </div>
  
        <div className="box">
          <img src={three} alt="Villain" />
          <p>Unleash your inner charisma with Villain Mystique. This Eau De Parfum features a bold and mysterious blend of oriental and floral notes, ensuring a long-lasting and unforgettable fragrance.</p>
        </div>
      </div>
    );
  }
  export default Products  