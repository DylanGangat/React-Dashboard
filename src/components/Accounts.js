// Styles
import { useState } from "react";
import "./Accounts.scss";

export default function Accounts({ updateFetch }) {
  const [activeTab, setActiveTab] = useState("tab1");

  // Allows us to change the active account background-color as well as call the data of that specific account.
  const handleTab = (tab, id) => {
    setActiveTab(tab);
    updateFetch(id);
  };

  return (
    <div className="accounts">
      <div
        className={
          activeTab === "tab1"
            ? "account active flow-content"
            : "account flow-content"
        }
        onClick={() => handleTab("tab1", 291123)}
      >
        <div className="details">
          <p className="name">Ares Capital Corporation</p>
          <span className="tag tag-accent">Live</span>
        </div>
        <p className="id">Account ID: 291123</p>
      </div>

      <div
        className={
          activeTab === "tab2"
            ? "account active flow-content"
            : "account flow-content"
        }
        onClick={() => handleTab("tab2", 291321)}
      >
        <div className="details">
          <p className="name">Salem Media Group</p>
          <span className="tag tag-accent">Suspended</span>
        </div>
        <p className="id">Account ID: 291321</p>
      </div>

      <div
        className={
          activeTab === "tab3"
            ? "account active flow-content"
            : "account flow-content"
        }
        onClick={() => handleTab("tab3", 298461)}
      >
        <div className="details">
          <p className="name">Carbo Ceramics</p>
          <span className="tag tag-accent">Cancelled</span>
        </div>
        <p className="id">Account ID: 298461</p>
      </div>
    </div>
  );
}
