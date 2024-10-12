import { useSearchParams } from "@remix-run/react";

export default function Success() {
  const [searchParams] = useSearchParams();
  
  // Get customer and order details from the query parameters
  const customerName = searchParams.get("name");
  const customerEmail = searchParams.get("email");
  const customerAddress = searchParams.get("address");
  const productName = searchParams.get("productName");
  const productPrice = searchParams.get("subtotal");
  const gst = searchParams.get("gst");
  const grandTotal = searchParams.get("grandTotal");

  return (
    <div className="invoice-container">
      <style>{`
        .invoice-container {
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          background-color: #f9f9f9;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1, h2 {
          text-align: center;
          color: #333;
        }

        .customer-details, .order-summary {
          margin: 20px 0;
        }

        .invoice-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }

        .invoice-table th, .invoice-table td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
        }

        .invoice-table th {
          background-color: #f2f2f2;
        }

        .summary {
          font-weight: bold;
          text-align: right;
        }

        .summary p {
          margin: 5px 0;
        }
      `}</style>

      <h1>Order Successful!</h1>
      <h2>Urban Outfitters</h2>
      <center><h3>Invoice</h3></center>

      <div className="customer-details">
        <h3>Customer Details</h3>
        <p><strong>Name:</strong> {customerName}</p>
        <p><strong>Email:</strong> {customerEmail}</p>
        <p><strong>Address:</strong> {customerAddress}</p>
      </div>

      <div className="order-summary">
        <h3>Order Summary</h3>
        <table className="invoice-table">
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
              <td>${parseFloat(productPrice).toFixed(2)}</td>
              <td>1</td>
              <td>${parseFloat(productPrice).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        <div className="summary">
          <p><strong>Subtotal:</strong> ${parseFloat(productPrice).toFixed(2)}</p>
          <p><strong>GST (18%):</strong> ${parseFloat(gst).toFixed(2)}</p>
          <p><strong>Grand Total:</strong> ${parseFloat(grandTotal).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
