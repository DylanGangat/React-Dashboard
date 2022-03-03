// Styles
import "./DetailsHub.scss";

// Components
import PaymentDetails from "./PaymentDetails";
import Products from "./Products";
import BillingTable from "../components/BillingTable";

export default function DetailsHub() {
  return (
    <div className="details-hub">
      {/* Payment Details */}
      <PaymentDetails />

      {/* My Products */}
      <Products />

      {/* Billing History */}
      <BillingTable />
    </div>
  );
}
