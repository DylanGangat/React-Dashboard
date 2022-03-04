// Styles
import "./Products.scss";

// hooks
import useFetch from "../hooks/useFetch";

// Icons

import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import CallSplitOutlinedIcon from "@mui/icons-material/CallSplitOutlined";

export default function Products({ url }) {
  const { data } = useFetch(url);

  // So I can return the icon that matches with the product
  const productIcon = name => {
    if (name === "TELCO") {
      return <PhoneOutlinedIcon />;
    } else if (name === "VOIP") {
      return <CallSplitOutlinedIcon />;
    } else {
      return <LaptopOutlinedIcon />;
    }
  };

  return (
    <section className="col-2 products">
      <header className="flow-content">
        <h2>My products</h2>
        <p className="subtitle">All your products at a glance</p>
      </header>

      <div className="product-info">
        {data &&
          data[0].products.map(product => (
            <div key={product.product_id}>
              {productIcon(product.product_kind)}
              <p>
                {product.product_kind} - {product.product_detail}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
}
