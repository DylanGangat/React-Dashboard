// Styles
import "./DetailsHub.scss";

// Components
import PaymentDetails from "./PaymentDetails";
import Products from "./Products";
import BillingTable from "../components/BillingTable";

// Should use a THEMECONTEXT instead of prop drilling
export default function DetailsHub({ url }) {
  return (
    <div className="details-hub">
      {/* Payment Details */}
      <PaymentDetails url={url} />

      {/* My Products */}
      <Products url={url} />

      {/* Billing History */}
      <BillingTable />
    </div>
  );
}
