import { useSearchParams, Link } from "@remix-run/react";
import styles from './Styles/global.css';

export default function Cart() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const price = searchParams.get("price");

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
      <Link
        to={`/_index.jsx?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}`}
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
        Add
      </Link>
      
      {/* Commenting out AddToCartLink here */}
      {/* <AddToCartLink productId="123" productName={name} productPrice={price} /> */}
    </div>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}
