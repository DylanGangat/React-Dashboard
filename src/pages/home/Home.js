// Styles
import "./Home.scss";

// Icons

import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import LockIcon from "@mui/icons-material/Lock";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import CallSplitOutlinedIcon from "@mui/icons-material/CallSplitOutlined";

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="content-grid">
      <aside>
        <nav className="side-bar">
          <ul className="nav-list">
            <li className="nav-item">
              <HomeOutlinedIcon />
              <span>Home</span>
            </li>
            <li className="nav-item active">
              <CreditCardOutlinedIcon />
              <span>Billing</span>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        {/* Column 1 */}
        <div className="flow-content">
          <h1>Billing</h1>
          <p className="subtitle">Overview of your accounts</p>
        </div>

        {/* Column 2 */}
        <div>
          <div>
            <div>
              <p>Macrotel Phone</p>
              <span>Active</span>
            </div>
            <p>Account ID: 200159</p>
          </div>
          <div>
            <div>
              <p>Macrotel Phone</p>
              <span>Active</span>
            </div>
            <p>Account ID: 200159</p>
          </div>
          <div>
            <div>
              <p>Macrotel Phone</p>
              <span>Active</span>
            </div>
            <p>Account ID: 200159</p>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          {/* Payment Details */}
          <section className="col-1 payment-details">
            <header>
              <h2>Payment Details</h2>
              <p>View details of your next invoice and payment method</p>
            </header>

            <div>
              <h3>Next Invoice: 10 Feb 2022</h3>

              <div className="card flow-content">
                <h4>Current Balance</h4>
                <span>$59.00</span>
                <div>
                  <LockIcon />
                  <p>
                    This is a secure 256-bit SSL encrypted payment. You're safe.
                  </p>
                </div>
                <button>Pay Now</button>
              </div>

              <div className="card flow-content">
                <div>
                  <h4>Payment method</h4>
                  <span>Annual</span>
                </div>
                <div>
                  <TipsAndUpdatesIcon />

                  <p>
                    <span className="text-accent">Guide:</span> To manage your
                    payments more easily, we reccomend switching to Direct Debit
                  </p>
                </div>
                <button>Switch to Direct Debit</button>
              </div>
            </div>
          </section>
          {/* My Products */}
          <section className="col-2 products">
            <header>
              <h2>My products</h2>
              <p>All your products at a glance</p>
            </header>
            <div>
              {/* product 1 */}
              <div>
                <PhoneOutlinedIcon />
                <p>VolP - 901515154</p>
              </div>
              {/* product 2 */}
              <div>
                <LaptopOutlinedIcon />
                <p>Fibre - SW29dd</p>
              </div>
              {/* product 3 */}
              <div>
                <CallSplitOutlinedIcon />
                <p>Website - www.website.com</p>
              </div>
            </div>
          </section>
          {/* Billing History */}
          <section className="billing">
            <header>
              <h3>My products</h3>
              <p>All your products at a glance</p>
            </header>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Balance</th>
                  <th>Reference</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                {/* Billing 1 */}
                <tr>
                  <td>13 Dec 2021</td>
                  <td>
                    <span>Invoice</span>
                  </td>
                  <td>$8.00</td>
                  <td>$45.00</td>
                  <td>8993UDEJ</td>
                  <td>
                    <FileDownloadOutlinedIcon className="text-secondary" />
                  </td>
                </tr>

                {/* Billing 2 */}
                <tr>
                  <td>13 Dec 2021</td>
                  <td>
                    <span>Invoice</span>
                  </td>
                  <td>$8.00</td>
                  <td>$45.00</td>
                  <td>8993UDEJ</td>
                  <td>
                    <FileDownloadOutlinedIcon className="text-secondary" />
                  </td>
                </tr>

                {/* Billing 3 */}
                <tr>
                  <td>13 Dec 2021</td>
                  <td>
                    <span>Invoice</span>
                  </td>
                  <td>$8.00</td>
                  <td>$45.00</td>
                  <td>8993UDEJ</td>
                  <td>
                    <FileDownloadOutlinedIcon className="text-secondary" />
                  </td>
                </tr>

                {/* Billing 4 */}
                <tr>
                  <td>13 Dec 2021</td>
                  <td>
                    <span>Invoice</span>
                  </td>
                  <td>$8.00</td>
                  <td>$45.00</td>
                  <td>8993UDEJ</td>
                  <td>
                    <FileDownloadOutlinedIcon className="text-secondary" />
                  </td>
                </tr>

                {/* Billing 5 */}
                <tr>
                  <td>13 Dec 2021</td>
                  <td>
                    <span>Invoice</span>
                  </td>
                  <td>$8.00</td>
                  <td>$45.00</td>
                  <td>8993UDEJ</td>
                  <td>
                    <FileDownloadOutlinedIcon className="text-secondary" />
                  </td>
                </tr>

                {/* Billing 6 */}
                <tr>
                  <td>13 Dec 2021</td>
                  <td>
                    <span>Invoice</span>
                  </td>
                  <td>$8.00</td>
                  <td>$45.00</td>
                  <td>8993UDEJ</td>
                  <td>
                    <FileDownloadOutlinedIcon className="text-secondary" />
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="pagination">
              <button>Previous</button>
              <div>
                <Link to="/">1</Link>
                <Link to="/">...</Link>
                <Link to="/">10</Link>
                <Link to="/">11</Link>
                <Link to="/" className="active">
                  12
                </Link>
                <Link to="/">13</Link>
                <Link to="/">14</Link>
                <Link to="/">15</Link>
                <Link to="/">16</Link>
                <Link to="/">...</Link>
                <Link to="/">26</Link>
              </div>
              <button>Next</button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
