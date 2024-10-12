import { useSearchParams, Form, redirect } from "@remix-run/react";
import { useState } from "react";
import styles from './Styles/global.css';

export default function Checkout() {
  const [searchParams] = useSearchParams();

  // Get product details from query parameters
  const productName = searchParams.get("name");
  const productPrice = searchParams.get("price");

  // State to handle customer form inputs
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    address: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    setCustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Calculate subtotal, GST, and grand total
  const subtotal = parseFloat(productPrice);
  const gst = subtotal * 0.18;
  const grandTotal = subtotal + gst;

  // If no product data is present in query params, show an error message
  if (!productName || !productPrice) {
    return (
      <div>
        <h1>Error: No product selected!</h1>
        <a href="/cart">Return to Cart</a>
      </div>
    );
  }

  return (
    <div>
      <h1>Checkout</h1>

      <h2>Customer Details</h2>
      <Form method="post" action="/checkout">
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={customerDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={customerDetails.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={customerDetails.address}
            onChange={handleChange}
            required
          />
        </div>

        <h2>Order Summary</h2>
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
              <td>{productName}</td>
              <td>${subtotal.toFixed(2)}</td>
              <td>1</td>
              <td>${subtotal.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        <div className="summary">
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>GST (18%): ${gst.toFixed(2)}</p>
          <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>

        <button type="submit" className="button">
          Complete Order
        </button>
      </Form>
    </div>
  );
}

// Action handler for Checkout form submission
export let action = async ({ request }) => {
  let formData = await request.formData();

  // Extract customer details from form
  let customer = {
    name: formData.get("name"),
    email: formData.get("email"),
    address: formData.get("address"),
  };

  // Retrieve product details
  let productName = "Bohemian Platform Bed"; // Example product name
  let subtotal = parseFloat(formData.get("price")); // Assuming price is sent in the form
  let gst = subtotal * 0.18;
  let grandTotal = subtotal + gst;

  // Redirect to success page with all data in query params
  let queryParams = new URLSearchParams({
    name: customer.name,
    email: customer.email,
    address: customer.address,
    productName,
    subtotal: subtotal.toFixed(2),
    gst: gst.toFixed(2),
    grandTotal: grandTotal.toFixed(2),
  }).toString();

  return redirect(`/success?${queryParams}`);
};

// Link styles (if any)
export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}
