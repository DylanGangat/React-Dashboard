// Styles
import "./BillingTable.scss";

// Icons

import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import { Link } from "react-router-dom";

export default function BillingTable({ data }) {
  return (
    <section className="billing">
      <header className="flow-content">
        <h3>Billing history</h3>
        <p className="subtitle">Choose a billing plan to see more details</p>
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
          <tr>
            <td>13 Dec 2021</td>
            <td>
              <span className="invoice-tag">Invoice</span>
            </td>
            <td>$8.00</td>
            <td>$45.00</td>
            <td>8993UDEJ</td>
            <td>
              <FileDownloadOutlinedIcon className="text-secondary icon" />
            </td>
          </tr>

          <tr>
            <td>13 Dec 2021</td>
            <td>
              <span className="invoice-tag">Invoice</span>
            </td>
            <td>$8.00</td>
            <td>$45.00</td>
            <td>8993UDEJ</td>
            <td>
              <FileDownloadOutlinedIcon className="text-secondary icon" />
            </td>
          </tr>

          <tr>
            <td>13 Dec 2021</td>
            <td>
              <span className="invoice-tag">Invoice</span>
            </td>
            <td>$8.00</td>
            <td>$45.00</td>
            <td>8993UDEJ</td>
            <td>
              <FileDownloadOutlinedIcon className="text-secondary icon" />
            </td>
          </tr>

          <tr>
            <td>13 Dec 2021</td>
            <td>
              <span className="invoice-tag">Invoice</span>
            </td>
            <td>$8.00</td>
            <td>$45.00</td>
            <td>8993UDEJ</td>
            <td>
              <FileDownloadOutlinedIcon className="text-secondary icon" />
            </td>
          </tr>

          <tr>
            <td>13 Dec 2021</td>
            <td>
              <span className="invoice-tag">Invoice</span>
            </td>
            <td>$8.00</td>
            <td>$45.00</td>
            <td>8993UDEJ</td>
            <td>
              <FileDownloadOutlinedIcon className="text-secondary icon" />
            </td>
          </tr>

          <tr className="last-row">
            <td>13 Dec 2021</td>
            <td>
              <span className="invoice-tag">Invoice</span>
            </td>
            <td>$8.00</td>
            <td>$45.00</td>
            <td>8993UDEJ</td>
            <td>
              <FileDownloadOutlinedIcon className="text-secondary icon" />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="pagination">
        <button className="previous-btn">Previous</button>
        <div className="pages">
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
        <button className="next-btn">Next</button>
      </div>
    </section>
  );
}
