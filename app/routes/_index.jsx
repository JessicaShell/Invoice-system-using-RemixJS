import { Link } from "@remix-run/react";
import furniture from "./images/Furniture.jpg";
import beds from "./images/Beddings.jpg";
import mostliked from "./images/MostLiked.jpg";
import wallart from "./images/WallArt.jpeg";
import Bbed from "./images/BohemianBed.jpeg";
import yojichair from "./images/YojiChair.jpeg";
import nightstand from "./images/Nightstand.jpeg";
import vanity from "./images/VanityChair.jpeg";
import styles from './Styles/home.css';

export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// Static list of products for demo purposes
const products = [
  { id: 1, name: "Bohemian Platform Bed", price: 699.00, image: Bbed },
  { id: 2, name: "Yoji Chair", price: 549.00, image: yojichair },
  { id: 3, name: "Elise Vanity And Stool Set", price: 649.00, image: vanity },
  { id: 4, name: "Amelia Nightstand", price: 279.00, image: nightstand },
];

export default function Index() {
  return (
    <body>
      <header>
        <div class="nav">
          <h1>Urban Outfitters</h1>
          <ul class="nav-links">
            <Link to="/cart">Go To Cart </Link>
          </ul>
        </div>
      </header>

      <main>
        <section class="category-overview">
          <div class="category">
            <img src={furniture} alt="Furniture" />
            <p>Furniture</p>
          </div>
          <div class="category">
            <img src={beds} alt="Bedding" />
            <p>Bedding</p>
          </div>
          <div class="category">
            <img src={mostliked} alt="Kitchen + Bar" />
            <p>Most Liked</p>
          </div>
          <div class="category">
            <img src={wallart} alt="Wall Art" />
            <p>Wall Art</p>
          </div>
        </section>

        <section class="products">
          <div class="product-grid">
            {products.map((product) => (
              <div key={product.id} class="product">
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p>${product.price.toFixed(2)}</p>
                <button class="button">
                  {/* Link to Cart with the product details in query parameters */}
                  <Link
                    to={`/cart?name=${product.name}&price=${product.price}`}
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    Cart
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </body>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}
