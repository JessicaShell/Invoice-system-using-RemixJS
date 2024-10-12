import { useSearchParams, Link } from "@remix-run/react";
import styles from './Styles/global.css';

// Cart Component
export default function Cart() {
  // Get product data from query parameters
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const price = searchParams.get("price");

  // If no product is selected, return an empty cart message
  if (!name || !price) {
    return (
      <div>
        <h1>Cart is empty!</h1>
        <Link to="/">Return to Home</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Your Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>${parseFloat(price).toFixed(2)}</td>
            <td>1</td>
            <td>${parseFloat(price).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      {/* Pass name and price to checkout page via query params */}
      <br /><br />
      <Link
        to={`/checkout?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}`}
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: 'black',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: '10px',
          transition: 'background-color 0.3s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'darkgray';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'black';
        }}
      >
        Proceed to Checkout
      </Link>

      {/* Placeholder for Add to Cart link component */}
      {/* Example usage */}
      {/* Uncomment the line below to use AddToCartLink */}
      {/* <AddToCartLink productId="123" productName={name} productPrice={price} /> */}
    </div>
  );
}

// Link to stylesheet
export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}
