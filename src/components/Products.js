// Styles
import "./Products.scss";

// Icons

import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import CallSplitOutlinedIcon from "@mui/icons-material/CallSplitOutlined";

export default function Products() {
  return (
    <section className="col-2 products">
      <header className="flow-content">
        <h2>My products</h2>
        <p className="subtitle">All your products at a glance</p>
      </header>

      <div className="product-info">
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
  );
}
