// Styles
import "./Home.scss";

// Components
import Sidebar from "../../components/Sidebar";
import Title from "../../components/Title";
import Accounts from "../../components/Accounts";
import DetailsHub from "../../components/DetailsHub";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState(
    "http://localhost:8000/users?account_id=291123"
  );

  // So when you click each account it can update the url to change the fetch request and pass it through with the use of props.
  const updateFetch = id => {
    setUrl(`http://localhost:8000/users?account_id=${id}`);
  };

  return (
    <div className="dashboard-grid">
      <aside>
        <Sidebar />
      </aside>

      <main>
        {/* Column 1 */}
        <Title />

        {/* Column 2 */}
        <Accounts updateFetch={updateFetch} />

        {/* Column 3 */}
        <DetailsHub url={url} />
      </main>
    </div>
  );
}
