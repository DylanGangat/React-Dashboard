// Styles
import "./PaymentDetails.scss";

// Icons

import LockIcon from "@mui/icons-material/Lock";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

export default function PaymentDetails() {
  return (
    <section className="col-1 payment-details">
      <header className="flow-content">
        <h2>Payment Details</h2>
        <p className="subtitle">
          View details of your next invoice and payment method
        </p>
      </header>

      <div className="flow-content invoice-details">
        <h3>Next Invoice: 10 Feb 2022</h3>

        <div className="cards">
          <div className="card flow-content">
            <div>
              <h4>Current balance</h4>
              <span className="card-price">$59.00</span>
            </div>

            <div className="card-info">
              <LockIcon className="lock"/>
              <p>
                This is a secure 256-bit SSL encrypted payment. You're safe.
              </p>
            </div>

            <button className="btn">Pay Now</button>
          </div>
          {/* card 2 */}
          <div className="card flow-content">
            <div className="card-header">
              <h4>Payment method</h4>
              <span className="tag tag-base">Annual</span>
            </div>
            <div className="card-info">
              <TipsAndUpdatesIcon className="text-accent" />
              <p>
                <span className="text-accent font-medium">Guide:</span> To manage your
                payments more easily, we reccomend switching to Direct Debit
              </p>
            </div>
            <button className="btn">Switch to Direct Debit</button>
          </div>
        </div>
      </div>
    </section>
  );
}
